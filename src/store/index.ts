import Vuex from 'vuex'
import Vue from 'vue'
import ActionHelper from './ActionHelper'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        title: '这是vuex',
        aHelper: new ActionHelper()
    },
    mutations: {

    }
})

export default store