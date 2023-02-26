<template>
  <q-page class="flex flex-center">
    <div class="q-pa-sm">
      <div class="q-pa-sm">
        <div class="text-h6">UPN QR Generator</div>
        <a href="https://github.com/jeancaffou/upn-qr">https://github.com/jeancaffou/upn-qr</a>
      </div>
      <div class="row q-col-gutter-sm full-width">
        <div class="col-lg-4 col-xs-12">
          <q-input v-model="upn.name" label="Ime plačnika" filled clearable />
          <q-input v-model="upn.naslov" label="Naslov plačnika" filled clearable />
          <q-input v-model="upn.posta" label="Pošta in kraj plačnika" filled clearable />
        </div>
        <div class="col-lg-4 col-xs-12">
          <q-input v-model="upn.prejemnik" label="Ime prejemnika" filled clearable />
          <q-input v-model="upn.prnaslov" label="Naslov prejemnika" filled clearable />
          <q-input v-model="upn.prposta" label="Pošta in kraj prejemnika" filled clearable />
          <q-input v-model="upn.date" label="Rok plačila" filled clearable>
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
          <q-input v-model="upn.koda" label="Koda" filled clearable />
          <q-input v-model="upn.namen" label="Namen" filled clearable />
          <q-input v-model="upn.znesek" label="Znesek" filled clearable />
          <q-input v-model="upn.trr" label="TRR" filled clearable />
          <q-input v-model="upn.ref" label="Referenca" filled clearable />
        </div>
      </div>
    </div>
    <div class="column">
      <vue-qr :callback="dataURI" :text="qr" :size="250" />
      <q-btn icon="save" label="Shrani" @click="save" color="primary" v-if="img" />
    </div>
  </q-page>
</template>

<script>
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
export default {
  components: { vueQr },
  data: () => ({
    upn: {
      prejemnik: null,
      name: null,
      naslov: null,
      prnaslov: null,
      posta: null,
      prposta: null,
      date: null,
      trr: null,
      ref: null,
      znesek: 0,
      koda: 'GDSV',
      namen: null
    },
    img: null
  }),
  created () {
    try {
      const cache = JSON.parse(localStorage.getItem('upn'))
      if (cache) {
        this.upn = {
          ...this.upn,
          ...cache
        }
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
        (this.upn.name || '').trim(), // 6. Ime plačnika Obvezno (*). Brez vodilnih ali sledečih presledkov. Max 33 znakov
        (this.upn.naslov || '').trim(), // 7. Ulica in št. plačnika 33 Obvezno (*). Brez vodilnih ali sledečih presledkov.
        (this.upn.posta || '').trim(), // 8. Kraj plačnika 33 Obvezno (*). Brez vodilnih ali sledečih presledkov.
        String(Math.floor(Number(`${this.upn.znesek}`.replace(',', '.')) * 100)).padStart(11, '0'), // 9. Znesek 11 Obvezno (**). Enajst cifer.
        '', // 10. Datum plačila Prazno.
        '', // 11. Nujno Prazno.
        (this.upn.koda || '').trim(), // 12. Koda namena 4 Obvezno. Štiri velike črke (A-Z).
        (this.upn.namen || '').trim(), // 13. Namen plačila 42 Obvezno. Brez vodilnih ali sledečih presledkov.
        (this.upn.date || '').trim(), // 14. Rok plačila 10 Poljubno. Format »DD.MM.LLLL« ali prazno.
        (this.upn.trr || '').trim(), // 15. IBAN prejemnika 34 Obvezno. Brez formatiranja (brez vmesnih presledkov).
        (this.upn.ref || '').trim(), // 16. Referenca prejemnika 26 Obvezno. (4+22) Model in sklic skupaj brez presledkov.
        (this.upn.prejemnik || '').trim(), // 17. Ime prejemnika 33 Obvezno. Brez vodilnih ali sledečih presledkov.
        (this.upn.prnaslov || '').trim(), // 18. Ulica in št. prejemnika 33 Obvezno. Brez vodilnih ali sledečih presledkov.
        (this.upn.prposta || '').trim() // 19. Kraj prejemnika 33 Obvezno. Brez vodilnih ali sledečih presledkov.
      ]
      // 20. Kontrolna vsota 3 Obvezno. Tri cifre.
      fields.push(String(19 + fields.reduce((a, v) => a + v.length, 0)).padStart(3, '0'), '')
      return fields.join('\n')
    }
  },
  methods: {
    dataURI (uri) {
      this.img = uri
    },
    save () {
      const link = document.createElement('a')
      link.download = 'qr.png'
      link.href = this.img
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  },
  watch: {
    upn: {
      deep: true,
      handler (v) {
        localStorage.setItem('upn', JSON.stringify(v))
      }
    }
  }
}
</script>
