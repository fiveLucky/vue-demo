import Vue from 'vue'
import App from './App.vue'
import Home from './view/Home/index.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Home),
}).$mount('#app')
