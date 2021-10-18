import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    baseURL: "localhost:8080/"
  },
})

Vue.use(BootstrapVue);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
