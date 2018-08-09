import Vue from "vue";


import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/icon/iconfont.css";
import '@/styles/index.scss' // global css

import '@/icons' // icon
import '@/permission' // permission control



import App from "./App.vue";
import router from "./router";
import store from "./store";



Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
