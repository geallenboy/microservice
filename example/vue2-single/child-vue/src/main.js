import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

const appOptions = {
  el:'#vue',
  render(h) {
    return h(App);
  },
  router,
}

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions
});
if(window.singleSpaNavigate){
  __webpack_public_path__  = 'http://localhost:1000/'
}
if(!window.singleSpaNavigate){
  delete appOptions.el;
  new Vue(appOptions).$mount('#app')
}

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
