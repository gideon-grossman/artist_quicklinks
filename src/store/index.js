import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state = () => ({
        baseURL: "http://www.localhost:8080/"
    })
})