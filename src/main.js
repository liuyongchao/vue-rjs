import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/zh-CN"; // lang i18n
import "@/assets/icon/iconfont.css";
import "@/styles/index.scss"; // global css

import "@/icons"; // icon
import "@/permission"; // permission control

import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入饼图组件
require("echarts/lib/chart/pie");
// 引入提示框和图例组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");

Vue.prototype.$echarts = echarts; //修改vue原型链，通过this.$echarts全局使用

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
