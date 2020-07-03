import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "@/router";
import axios from 'axios'
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
