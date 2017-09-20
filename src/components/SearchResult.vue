<template>
  <div class="w3-margin-bottom w3-col s12 w3-card-4">
    <header class="w3-container w3-blue-grey">
      <h3>{{ $tc("message.result_panel.txt_title", dados.documents.length, {count: dados.documents.length, keyword: palavraChave}) }}</h3>
    </header>
    <div class="w3-container">
      <div class="w3-section">
        <table class="w3-table w3-striped w3-bordered" v-show="!buscaEmAndamento">
          <tr>
            <th style="width: 5%; text-align: center"></th>
            <th style="width: 30%;">{{ $t("message.result_table_header.txt_title") }}</th>
            <th style="width: 55%;">{{ $t("message.result_table_header.txt_summary") }}</th>
            <th style="width: 10%; text-align: center">{{ $t("message.result_table_header.txt_options") }}</th>
          </tr>
          <tr v-for="documento, index in dados.documents" v-bind:id="index">
            <td style="font-weight: bold">{{index + 1}}.</td>
            <td>{{documento.title}}</td>
            <td>{{documento.summary}}</td>
            <td style="text-align: center; vertical-align: middle; font-size: 24px">
              <a :title="$t('message.result_table_row.txt_action_view')" :href="baseUrlArtigo + documento.url" target="_blank"><i class="fa fa-external-link"></i></a>
              <a :title="$t('message.result_table_row.txt_action_edit')" :href="baseUrlArtigo + documento.url + '/edit'" target="_blank"><i class="fa fa-pencil"></i></a>
              <a :title="$t('message.result_table_row.txt_action_download')" :href="'#' + index" @click="downloadHtmlDocumento(documento.id)"><i class="fa fa-download"></i></a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    },
    props: {
      dados: Object,
      baseUrlArtigo: String,
      palavraChave: String,
      buscaEmAndamento: Boolean
    },
    methods: {
      downloadHtmlDocumento (idDocumento) {
        for (let i = 0; i < this.dados.documents.length; i++) {
          if (this.dados.documents[i].id === idDocumento) {
            let pom = document.createElement('a')
            pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.dados.documents[i].html))
            pom.setAttribute('download', this.dataAtualFormatada + ' - ' + this.dados.documents[i].title + '.html')

            if (document.createEvent) {
              let event = document.createEvent('MouseEvents')
              event.initEvent('click', true, true)
              pom.dispatchEvent(event)
            } else {
              pom.click()
            }
          }
        }
      }
    },
    computed: {
      dataAtualFormatada () {
        let dataAtual = new Date()
        return '' + dataAtual.getFullYear() +
          (dataAtual.getMonth() + 1) +
          dataAtual.getDate() +
          dataAtual.getHours() +
          dataAtual.getMinutes() +
          dataAtual.getSeconds()
      }
    }}
</script>
