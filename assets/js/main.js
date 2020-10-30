import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import httpClient from "./plugins/http";

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';

import 'prismjs'
import 'prismjs/themes/prism.css'
import VsPrism from './components/prism/VsPrism.vue';

Vue.component(VsPrism.name, VsPrism);

Vue.use(Vuesax)

Vue.config.productionTip = false

Vue.use(httpClient, { store, router });

// SCSS styles
require('./assets/scss/style.scss')

new Vue({
    router,
    store,
    render: function (h) { return h(App) }
}).$mount('#app')