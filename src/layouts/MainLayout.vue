<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar square size="28px">
            <img src="icons/favicon-96x96.png" />
          </q-avatar>
          UPN QR Generator
        </q-toolbar-title>

        <q-space />

        <q-btn flat icon="upload_file" label="Import XML" @click="pickXml" />

        <q-btn
          flat
          round
          icon="fab fa-github"
          aria-label="GitHub"
          @click="openGithub"
        />

        <input
          ref="xmlInput"
          type="file"
          accept=".xml,application/xml,text/xml"
          style="display: none"
          @change="onXmlPicked"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { readXmlFileAsText, parseUpnFromPainXml } from 'src/utils/upnXmlImport'

export default {
  methods: {
    openGithub () {
      window.open('https://github.com/jeancaffou/upn-qr', '_blank', 'noopener')
    },
    pickXml () {
      this.$refs.xmlInput.click()
    },
    async onXmlPicked (e) {
      const file = e.target.files && e.target.files[0]
      if (!file) {
        return
      }

      try {
        const xmlText = await readXmlFileAsText(file)
        const parsed = parseUpnFromPainXml(xmlText)
        if (!parsed) {
          console.warn('XML not recognized as pain.001')
          return
        }

        let current = {}
        try {
          current = JSON.parse(decodeURIComponent(localStorage.getItem('upn')))
        } catch (err) {}

        const upn = {
          ...current,
          ...parsed
        }

        const encoded = encodeURIComponent(JSON.stringify(upn))
        localStorage.setItem('upn', encoded)

        this.$router.replace({
          name: 'qr',
          query: { upn: encoded }
        })
      } catch (err) {
        console.warn(err)
      } finally {
        e.target.value = ''
      }
    }
  }
}
</script>
