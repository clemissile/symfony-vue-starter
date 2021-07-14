import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";

// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";
import store from './store'
import httpClient from "./plugins/http"

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'

import Vuelidate from 'vuelidate'

Vue.use(BlackDashboard);

Vue.use(VueRouter);

Vue.use(RouterPrefetch);

Vue.use(Vuelidate)

Vue.config.productionTip = false

Vue.use(httpClient, { store, router })

/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
