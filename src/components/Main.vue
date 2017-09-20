<template>
  <div>
    <div class="w3-container w3-blue-gray w3-margin-bottom w3-card-4">
      <h2>Kitsune API Utils <span class="w3-button w3-display-topright">
                    <a href="https://github.com/brwolfgang/kitsuneApiUtils" target="_blank"><i class="fa fa-github"></i></a>
                    </span></h2>
    </div>
    <div style="margin-left: 3%; margin-right: 3%">
      <localePicker
        @updateLocale="updateLocale"
        :locales="locales"
        :defaultLocale="defaultLocale"
      ></localePicker>
    <searchInput
      @updatePalavraChave="updatePalavraChave"
      v-bind:buscaEmAndamento="buscaEmAndamento"
    ></searchInput>
    <searchResult
      v-if="listaResultados.documents.length > 0"
      v-bind:dados="listaResultados"
      v-bind:baseUrlArtigo="urlBase"
      v-bind:palavraChave="palavraChave"
      v-bind:buscaEmAndamento="buscaEmAndamento"
    ></searchResult>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main',
    data () {
      return {
        kitsuneLocale: 'pt-BR',
        palavraChave: '',
        urlBase: 'https://support.mozilla.org',
        listaResultados: {
          documents: [],
          questions: []
        },
        buscaEmAndamento: false
      }
    },
    props: {
      defaultLocale: String,
      messages: Object
    },
    methods: {
      updateLocale: function (newLocale) {
        this.$i18n.locale = newLocale.code
        this.kitsuneLocale = newLocale.mozillaApiLocale
        this.eraseResults()
      },
      updatePalavraChave: function (novaPalavraChave) {
        this.palavraChave = novaPalavraChave
      },
      updateResultados: function (dados) {
        if (dados.documents.length === 0) {
          alert(this.$i18n.tc('message.result_panel.txt_title', 0, {keyword: this.palavraChave}))
        }

        this.listaResultados.documents = dados.documents
        this.listaResultados.questions = dados.questions
      },
      eraseResults: function () {
        this.listaResultados.documents = []
        this.listaResultados.questions = []
      }
    },
    computed: {
      locales: function () {
        let arrayLocales = []

        let chaves = Object.keys(this.messages)

        for (let i = 0; i < chaves.length; i++) {
          let locale = {
            code: chaves[i],
            mozillaApiLocale: this.messages[chaves[i]].mozilla_api_locale,
            description: this.messages[chaves[i]].description
          }
          arrayLocales.push(locale)
        }
        return arrayLocales
      },
      urlApiMozilla: function () {
        return '/api/2/search/suggest?max_documents=100&locale=' + this.kitsuneLocale
      }
    },
    watch: {
      palavraChave: function (novaPalavraChave) {
        this.buscaEmAndamento = true

        let urlConsulta = this.urlBase + this.urlApiMozilla + '&q=' + novaPalavraChave

        console.log(urlConsulta)

        this.$http.get(urlConsulta).then(response => {
          this.buscaEmAndamento = false
          this.updateResultados(response.body)
        }, response => {
          this.buscaEmAndamento = false
          alert(this.$i18n.t('message.search_panel.error_connection_kitsune'))
        })
      }
    }
  }
</script>
