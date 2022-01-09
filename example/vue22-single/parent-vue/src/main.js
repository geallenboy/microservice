import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import {registerApplication,start} from 'single-spa'


async function loadScript(url){
  return new Promise((resolve,reject)=>{
    let script = document.createElement('script');
    script.src= url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script)
  })
}

registerApplication('myVueApp',
  async()=>{
    console.log('加载模块')
    await loadScript('http://localhost:1000/js/chunk-vendors.js')
    await loadScript('http://localhost:1000/js/app.js')
    return window.singleVue;
  },
  location=>location.pathname.startsWith('/vue')
)
start();
new Vue({
  render: h => h(App),
}).$mount('#app')
