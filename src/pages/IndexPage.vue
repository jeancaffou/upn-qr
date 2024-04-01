<template>
  <q-page class="flex flex-center">
    <div class="q-pa-sm">
      <div class="q-pa-sm">
        <div class="text-h6">UPN QR Generator</div>
        <a href="https://github.com/jeancaffou/upn-qr">https://github.com/jeancaffou/upn-qr</a>
        <q-slider v-model="size" :min="150" :max="800" color="secondary" />
      </div>
      <div class="row q-col-gutter-sm full-width">
        <div class="col-lg-4 col-xs-12">
          <q-input v-model="upn.name" label="Ime plačnika" filled clearable :rules="rule33" />
          <q-input v-model="upn.naslov" label="Naslov plačnika" filled clearable :rules="rule33" />
          <q-input v-model="upn.posta" label="Pošta in kraj plačnika" filled clearable :rules="rule33" />
        </div>
        <div class="col-lg-4 col-xs-12">
          <q-input v-model="upn.prejemnik" label="Ime prejemnika" filled clearable :rules="rule33" />
          <q-input v-model="upn.prnaslov" label="Naslov prejemnika" filled clearable :rules="rule33" />
          <q-input v-model="upn.prposta" label="Pošta in kraj prejemnika" filled clearable :rules="rule33" />
          <q-input v-model="upn.date" label="Rok plačila" mask="##.##.####" filled clearable>
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date v-model="upn.date" mask="DD.MM.YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Zapri" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-lg-4 col-xs-12">
          <q-input v-model="upn.koda" mask="AAAA" label="Koda" filled clearable />
          <q-input v-model="upn.namen" label="Namen" filled clearable :rules="[val => val.length <= 42 || 'Največ 42 znakov']" />
          <q-input v-model="upn.znesek" label="Znesek" filled clearable mask="#,##" fill-mask="0" reverse-fill-mask />
          <q-input v-model="upn.trr" label="TRR" filled clearable :rules="[val => val.length <= 34 || 'Največ 34 znakov']" />
          <q-input v-model="upn.ref" label="Referenca" filled clearable :rules="[val => val.length <= 26 || 'Največ 26 znakov']" />
        </div>
      </div>
    </div>
    <div class="column">
      <img v-if="src" :src="src" :width="size" :height="size" style="image-rendering: pixelated" id="qr" />
      <q-btn icon="save" label="Shrani" @click="save" color="secondary" v-if="src" class="q-my-md" />
    </div>
  </q-page>
</template>

<script>
import { Encoder, ErrorCorrectionLevel } from '@nuintun/qrcode'
export default {
  data: () => ({
    src: null,
    upn: {
      prejemnik: null,
      name: null,
      naslov: null,
      prnaslov: null,
      posta: null,
      prposta: null,
      date: null,
      trr: null,
      ref: 'SI99',
      znesek: 0,
      koda: 'GDSV',
      namen: null
    },
    rule33: [val => val.length <= 33 || 'Največ 33 znakov'],
    img: null,
    size: 250
  }),
  created () {
    try {
      const cache = JSON.parse(decodeURIComponent(localStorage.getItem('upn')))
      if (cache) {
        this.upn = {
          ...this.upn,
          ...cache
        }
      }
    } catch (e) {
      console.warn(e)
    }
    try {
      const upn = JSON.parse(decodeURIComponent(this.$route.query.upn))
      this.upn = {
        ...this.upn,
        ...upn
      }
    } catch (e) {
      console.warn(e)
    }
  },
  computed: {
    qr () {
      const fields = [
        'UPNQR', // 1. Vodilni slog 5 Konstanta »UPNQR«.
        '', // 2. IBAN plačnika Prazno.
        '', // 3. Polog Prazno.
        '', // 4. Dvig Prazno.
        '', // 5. Referenca plačnika Prazno.
        (this.upn.name || '').trim().substring(0, 33), // 6. Ime plačnika Obvezno (*). Brez vodilnih ali sledečih presledkov. Max 33 znakov
        (this.upn.naslov || '').trim().substring(0, 33), // 7. Ulica in št. plačnika 33 Obvezno (*). Brez vodilnih ali sledečih presledkov.
        (this.upn.posta || '').trim().substring(0, 33), // 8. Kraj plačnika 33 Obvezno (*). Brez vodilnih ali sledečih presledkov.
        String(Math.floor(Number(`${this.upn.znesek}`.replace(',', '.')) * 100)).padStart(11, '0'), // 9. Znesek 11 Obvezno (**). Enajst cifer.
        '', // 10. Datum plačila Prazno.
        '', // 11. Nujno Prazno.
        (this.upn.koda || '').replace(/[^A-Z]/g, '').substring(0, 4).toUpperCase(), // 12. Koda namena 4 Obvezno. Štiri velike črke (A-Z).
        (this.upn.namen || '').trim().substring(0, 42), // 13. Namen plačila 42 Obvezno. Brez vodilnih ali sledečih presledkov.
        (this.upn.date || '').trim().substring(0, 10), // 14. Rok plačila 10 Poljubno. Format »DD.MM.LLLL« ali prazno.
        (this.upn.trr || '').replace(/\s+/g, '').substring(0, 34).toUpperCase(), // 15. IBAN prejemnika 34 Obvezno. Brez formatiranja (brez vmesnih presledkov).
        (this.upn.ref || '').replace(/\s+/g, '').substring(0, 26).toUpperCase(), // 16. Referenca prejemnika 26 Obvezno. (4+22) Model in sklic skupaj brez presledkov.
        (this.upn.prejemnik || '').trim().substring(0, 33), // 17. Ime prejemnika 33 Obvezno. Brez vodilnih ali sledečih presledkov.
        (this.upn.prnaslov || '').trim().substring(0, 33), // 18. Ulica in št. prejemnika 33 Obvezno. Brez vodilnih ali sledečih presledkov.
        (this.upn.prposta || '').trim().substring(0, 33) // 19. Kraj prejemnika 33 Obvezno. Brez vodilnih ali sledečih presledkov.
      ]
      // 20. Kontrolna vsota 3 Obvezno. Tri cifre.
      fields.push(String(19 + fields.reduce((a, v) => a + v.length, 0)).padStart(3, '0'), '')
      return fields.join('\n')
    }
  },
  methods: {
    save () {
      const originalImage = document.getElementById('qr')
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      canvas.width = originalImage.width + 30
      canvas.height = originalImage.height + 30

      ctx.imageSmoothingEnabled = false
      ctx.drawImage(originalImage, 15, 15, originalImage.width, originalImage.height)

      ctx.strokeStyle = 'white'
      ctx.lineWidth = 30
      ctx.strokeRect(0, 0, canvas.width, canvas.height)

      const outputImage = new Image()
      outputImage.src = canvas.toDataURL('image/jpeg')

      outputImage.onload = function () {
        const link = document.createElement('a')
        link.href = outputImage.src
        link.download = 'qr.gif'
        link.click()
      }
    },
    gen () {
      const qrcode = new Encoder()
      qrcode.setEncodingHint(true)
      qrcode.setErrorCorrectionLevel(ErrorCorrectionLevel.H)
      qrcode.write(this.qr)

      qrcode.make()

      this.src = qrcode.toDataURL(1, 0)
    }
  },
  watch: {
    upn: {
      immediate: true,
      deep: true,
      handler (v) {
        const upn = encodeURIComponent(JSON.stringify(v))
        localStorage.setItem('upn', upn)
        this.$router.replace({
          name: 'qr',
          query: { upn }
        })

        this.gen()
      }
    }
  }
}
</script>
