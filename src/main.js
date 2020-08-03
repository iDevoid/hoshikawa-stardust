import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'
import i18n from './i18n'
import VueCookie from 'vue-cookie'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueMasonry)
Vue.use(VueCookie)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
