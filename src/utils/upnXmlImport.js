// src/utils/upnXmlImport.js

function safeTextDecoder (encoding) {
  try {
    return new TextDecoder(encoding)
  } catch (e) {
    return null
  }
}

export async function readXmlFileAsText (file) {
  const buf = await file.arrayBuffer()

  const dec1250 = safeTextDecoder('windows-1250')
  if (dec1250) {
    try {
      return dec1250.decode(buf)
    } catch (e) {}
  }

  const decUtf8 = safeTextDecoder('utf-8')
  if (decUtf8) {
    return decUtf8.decode(buf)
  }

  // Last resort
  return String.fromCharCode.apply(null, new Uint8Array(buf))
}

function firstByLocalName (root, localName) {
  const els = root.getElementsByTagName('*')
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    if (el.localName === localName) {
      return el
    }
  }
  return null
}

function firstChildByLocalName (node, localName) {
  if (!node) return null
  const els = node.getElementsByTagName('*')
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    if (el.localName === localName) {
      return el
    }
  }
  return null
}

function textOf (node) {
  return (node && node.textContent ? node.textContent : '').trim()
}

function textIn (node, localName) {
  return textOf(firstChildByLocalName(node, localName))
}

function allTextIn (node, localName) {
  if (!node) return []
  const out = []
  const els = node.getElementsByTagName('*')
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    if (el.localName === localName) {
      const t = textOf(el)
      if (t) out.push(t)
    }
  }
  return out
}

function formatDate (iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec((iso || '').trim())
  if (!m) {
    return null
  }
  return `${m[3]}.${m[2]}.${m[1]}`
}

function parsePostal (partyEl) {
  const pstl = firstChildByLocalName(partyEl, 'PstlAdr')
  const lines = allTextIn(pstl, 'AdrLine')

  const addr1 = lines[0] || null
  let addr2 = lines[1] || null

  if (!addr2) {
    const pstCd = textIn(pstl, 'PstCd')
    const twnNm = textIn(pstl, 'TwnNm')
    const comb = [pstCd, twnNm].filter(Boolean).join(' ').trim()
    addr2 = comb || null
  }

  return { addr1, addr2 }
}

export function parseUpnFromPainXml (xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, 'application/xml')
  if (doc.getElementsByTagName('parsererror').length) {
    return null
  }

  const debtor = firstByLocalName(doc, 'Dbtr')
  const creditor = firstByLocalName(doc, 'Cdtr')

  const dbName = textIn(debtor, 'Nm') || null
  const dbAdr = parsePostal(debtor)

  const crName = textIn(creditor, 'Nm') || null
  const crAdr = parsePostal(creditor)

  const cdtrAcct = firstByLocalName(doc, 'CdtrAcct')
  const iban = textIn(firstChildByLocalName(cdtrAcct, 'Id'), 'IBAN') || null

  const cdtrRefInf = firstByLocalName(doc, 'CdtrRefInf')
  const ref = textIn(cdtrRefInf, 'Ref') || null

  const purp = firstByLocalName(doc, 'Purp')
  const purpose = textIn(purp, 'Cd') || null

  const rmtInf = firstByLocalName(doc, 'RmtInf')
  const rem =
    textIn(rmtInf, 'Ustrd') ||
    textIn(rmtInf, 'AddtlRmtInf') ||
    null

  const amt = firstByLocalName(doc, 'Amt')
  const instdAmt = textIn(amt, 'InstdAmt') || null
  const amount = instdAmt ? instdAmt.replace('.', ',') : null

  const pmtInf = firstByLocalName(doc, 'PmtInf')
  const execDateIso = textIn(pmtInf, 'ReqdExctnDt') || null
  const date = formatDate(execDateIso)

  const looksLikePain = !!(dbName || crName || iban || instdAmt || execDateIso)
  if (!looksLikePain) {
    return null
  }

  return {
    name: dbName,
    naslov: dbAdr.addr1,
    posta: dbAdr.addr2,

    prejemnik: crName,
    prnaslov: crAdr.addr1,
    prposta: crAdr.addr2,

    trr: iban,
    ref: ref,
    koda: purpose,
    namen: rem,
    znesek: amount || 0,
    date: date
  }
}
