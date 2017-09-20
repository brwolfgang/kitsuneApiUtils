<template>
  <div class="w3-margin-bottom w3-col s3 w3-card-4 w3-margin-right">
    <header class="w3-container w3-blue-grey"><h3>{{ $tc("message.locale_picker.txt_title") }}</h3></header>
    <div class="w3-container">
      <div class="w3-section">
        <label for="localesSelect">{{ $t("message.locale_picker.txt_description") }}</label>
        <select class="w3-select w3-border" name="localePicker" v-model="locale" id="localesSelect">
          <option v-for="locale in locales" :value="locale.code">{{ locale.description }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      locales: Array,
      defaultLocale: String
    },
    data () {
      return {
        locale: this.defaultLocale
      }
    },
    watch: {
      locale: function (newLocale) {
        for (let i = 0; i < this.locales.length; i++) {
          if (this.locales[i].code === newLocale) {
            this.$emit('updateLocale', this.locales[i])
          }
        }
      }
    }
  }
</script>
