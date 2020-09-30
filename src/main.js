import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import request from './utils/request'

Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$http = request
// Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
