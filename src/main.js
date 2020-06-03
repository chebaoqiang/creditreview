import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './permission' // 路由拦截

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.url = 'http://47.96.117.121:5003'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')