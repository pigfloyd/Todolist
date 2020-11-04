import Vue from 'vue'
import App from './App.vue'
import ItemData from './model/ItemData'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let s = new ItemData()
console.log(s)
