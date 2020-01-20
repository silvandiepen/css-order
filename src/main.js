import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(Vuex)

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
