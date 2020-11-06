import Vuex from 'vuex'
import Vue from 'vue'
import ActionHelper from './ActionHelper'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        title: '这是vuex',
        aHelper: new ActionHelper(),
        isShow: false,
        transMemo: null,
        filterCateId: -1
    },
    mutations: {
        showEditMemo(state: any, editMemo: any){
            state.transMemo = editMemo
            state.isShow = true
        }
    }
})

export default store