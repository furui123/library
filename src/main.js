import Vue from 'vue'
import App from './App'
import router from './router'
import 'highlight.js/styles/color-brewer.css' // 导入高亮样式
import 'vue2-animate/dist/vue2-animate.min.css'
import './assets/styl/index.styl' // 导入基本样式
import demoBlock from './components/demo-block.vue'// 高亮代码块组件
import '../examples/theme-set/lib/index.css' // 导入UI样式
import FrUI from '../examples/index'

// import $ from 'jquery'

Vue.component('demo-block', demoBlock)
Vue.use(FrUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')

router.beforeEach((to, from, next) => {
  window.scrollTo({top: 0, behavior: 'smooth'})
  next()
})
