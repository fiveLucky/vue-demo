import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
const bus = {
  install(Vue) {
    Vue.prototype.$bus = new Vue();
  }
}
Vue.use(bus)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
