import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入echarts
import * as echarts from 'echarts'
// 导入element ui组件样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入按需加载的element ui组件
import element from '@/element/index.js'
// 初始化全局样式
Vue.use(element)
// 加载动画库
import animated from 'animate.css'
Vue.use(animated)
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
Vue.component(CollapseTransition.name, CollapseTransition)
// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
// flexible移动端适配
import 'amfe-flexible'
// 导入处理日期的包
import moment from 'moment'
import 'moment/locale/zh-cn'
Vue.prototype.$moment = moment

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
