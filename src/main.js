import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'
import App from './App.vue'
import store from './store'
import IPBConfig from '../ipb.config'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueMoment);
Vue.http.options.root = IPBConfig.API_ENDPOINT;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
