<template>
  <q-page class="flex flex-center">
    <div class="q-pa-sm">
      <div class="row q-col-gutter-sm full-width">
        <div class="col-lg-4 col-xs-12">
          <q-input v-model="name" label="Ime plačnika" filled />
          <q-input v-model="naslov" label="Naslov plačnika" filled />
          <q-input v-model="posta" label="Pošta in kraj" filled />
        </div>
        <div class="col-lg-4 col-xs-12">
          <q-input v-model="prejemnik" label="Ime prejemnika" filled />
          <q-input v-model="prnaslov" label="Naslov prejemnika" filled />
          <q-input v-model="prposta" label="Pošta in kraj prejemnika" filled />
        </div>
        <div class="col-lg-4 col-xs-12">
          <q-input v-model="koda" label="Koda" filled />
          <q-input v-model="namen" label="Namen" filled />
          <q-input v-model="znesek" label="Znesek" filled />
          <q-input v-model="trr" label="TRR" filled />
          <q-input v-model="ref" label="Referenca" filled />
        </div>
      </div>
      <vue-qr :text="qr" :size="250" />
    </div>
  </q-page>
</template>

<script>
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
export default {
  components: { vueQr },
  data: () => ({
    prejemnik: null,
    name: null,
    naslov: null,
    prnaslov: null,
    posta: null,
    prposta: null,
    trr: null,
    ref: null,
    znesek: 0,
    koda: 'GDSV',
    namen: null
  }),
  computed: {
    qr () {
      const fields = [
        'UPNQR', // 1. Vodilni slog 5 Konstanta »UPNQR«.
        '', // 2. IBAN plačnika Prazno.
        '', // 3. Polog Prazno.
        '', // 4. Dvig Prazno.
        '', // 5. Referenca plačnika Prazno.
        (this.name || '').trim(), // 6. Ime plačnika Obvezno (*). Brez vodilnih ali sledečih presledkov. Max 33 znakov
        (this.naslov || '').trim(), // 7. Ulica in št. plačnika 33 Obvezno (*). Brez vodilnih ali sledečih presledkov.
        (this.posta || '').trim(), // 8. Kraj plačnika 33 Obvezno (*). Brez vodilnih ali sledečih presledkov.
        String(Math.floor(this.znesek * 100)).padStart(11, '0'), // 9. Znesek 11 Obvezno (**). Enajst cifer.
        '', // 10. Datum plačila Prazno.
        '', // 11. Nujno Prazno.
        (this.koda || '').trim(), // 12. Koda namena 4 Obvezno. Štiri velike črke (A-Z).
        (this.namen || '').trim(), // 13. Namen plačila 42 Obvezno. Brez vodilnih ali sledečih presledkov.
        '', // 14. Rok plačila 10 Poljubno. Format »DD.MM.LLLL« ali prazno.
        (this.trr || '').trim(), // 15. IBAN prejemnika 34 Obvezno. Brez formatiranja (brez vmesnih presledkov).
        (this.ref || '').trim(), // 16. Referenca prejemnika 26 Obvezno. (4+22) Model in sklic skupaj brez presledkov.
        (this.prejemnik || '').trim(), // 17. Ime prejemnika 33 Obvezno. Brez vodilnih ali sledečih presledkov.
        (this.prnaslov || '').trim(), // 18. Ulica in št. prejemnika 33 Obvezno. Brez vodilnih ali sledečih presledkov.
        (this.prposta || '').trim() // 19. Kraj prejemnika 33 Obvezno. Brez vodilnih ali sledečih presledkov.
      ]
      // 20. Kontrolna vsota 3 Obvezno. Tri cifre.
      fields.push(String(19 + fields.reduce((a, v) => a + v.length, 0)).padStart(3, '0'), '')
      return fields.join('\n')
    }
  }
}
</script>
