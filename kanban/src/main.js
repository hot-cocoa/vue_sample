import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import VueLocalStorage from 'vue-localstorage'

Vue.config.productionTip = false
Vue.use(VModal)
Vue.use(VueLocalStorage)

new Vue({
  render: h => h(App),
}).$mount('#app')
