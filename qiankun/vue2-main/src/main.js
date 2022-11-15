import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import {registerMicroApps,start} from 'qiankun'
Vue.use(ElementUI);
const apps = [
  {
    name:'vueApp', //应用名称
    entry:'//localhost:10001', //默认会加载这个html 解析里面的js 动态执行 （子应用必须支持跨域）
    container:'#vue', //容器id
    activeRule:'/vue' //激活路径
  },
  {
    name:'reactApp',
    entry:'//localhost:20001', //默认会加载这个html 解析里面的js 动态执行 （子应用必须支持跨域）
    container:'#react',
    activeRule:'/react'
  }
]
registerMicroApps(apps) //注册应用
start(); //开启

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
