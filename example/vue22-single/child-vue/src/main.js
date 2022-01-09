import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false
const appOptions = {
  el:'#vue',
  router,
  render:h=>h(App)
}
const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions
})
if(window.singleSpaNavigate){
  __webpack_public_path__ = 'http://localhost:1000'
}

export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;
