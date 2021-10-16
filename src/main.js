import Vue from 'vue'
//导入 App.vue组件 将App.vue的模版渲染到 html 页面中
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // $mount() 方法和 el 是一样的
}).$mount('#app')
