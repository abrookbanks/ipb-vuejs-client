// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import App from "./App"
import { store } from "./store/store"

Vue.use(VueResource)
Vue.http.options.root = "https://forums.cubecart.com/api/";
Vue.use(VueRouter)
const router = new VueRouter({mode: 'history'});

new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
