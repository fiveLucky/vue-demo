import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
const bus = {
  install(Vue) {
    Vue.prototype.$bus = new Vue();
  }
}
Vue.use(bus)
new Vue({
  render: h => h(App),
}).$mount('#app')
