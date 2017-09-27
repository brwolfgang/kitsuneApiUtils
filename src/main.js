// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'
import Main from './components/Main.vue'
import localePicker from './components/LocalePicker.vue'
import SearchInput from './components/SearchInput.vue'
import SearchResult from './components/SearchResult.vue'
import { messages } from './assets/i18n'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueI18n)

Vue.component('Main', Main)
Vue.component('LocalePicker', localePicker)
Vue.component('searchInput', SearchInput)
Vue.component('searchResult', SearchResult)

const defaultLocale = 'pt_BR'

const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  data () {
    return {
      defaultLocale: defaultLocale,
      messages: messages
    }
  },
  template: `  
  <div>
    <Main
      :defaultLocale="defaultLocale"
      :messages="messages"
    />
  </div>
    `
})
