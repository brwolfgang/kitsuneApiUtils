<template>
  <div class="w3-margin-bottom w3-col s3 w3-card-4 w3-margin-right">
    <header class="w3-container w3-blue-grey"><h3>{{ $tc("message.search_panel.txt_title") }}</h3></header>
    <div class="w3-container">
      <div class="w3-section"><label for="termosConsulta">{{ $t("message.search_panel.txt_keyword") }}</label>
        <input type="text"
               v-model="palavraChave"
               id="termosConsulta"
               v-on:keyup.enter="updatePalavraChave"
               class="w3-input">
      </div>
      <p>
        <button class="w3-button w3-blue-gray"
                v-if="!buscaEmAndamento"
                @click="updatePalavraChave()"
        >{{ $t("message.search_panel.btn_search") }}</button>
        <span v-if="buscaEmAndamento"><i class="fa fa-refresh w3-spin"></i> {{ $t("message.search_panel.txt_searching") }}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        palavraChave: ''
      }
    },
    props: {
      buscaEmAndamento: Boolean
    },
    methods: {
      updatePalavraChave: function () {
        if (this.palavraChave.trim().length !== 0) {
          this.$emit('updatePalavraChave', this.palavraChave)
        } else {
          alert(this.$i18n.t('message.search_panel.error_missing_keyword'))
        }
      }
    }
  }
</script>
