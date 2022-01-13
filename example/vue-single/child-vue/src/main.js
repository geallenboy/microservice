import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'
const app = createApp(App);
app.config.productionTip = false;
const appOptions = {
  el:'#vue', //挂载到父应用到ID为vue的标签中
  router,
  render:h=>h(App)
}
const vueLifeycle = singleSpaVue({
  Vue:app,
  appOptions
})
//协议接入，定义好了协议，父应用会调用这些方法
export const bootstrap = vueLifeycle.bootstrap;
export const mount = vueLifeycle.mount;
export const unmount = vueLifeycle.unmount;
// export default vueLifeycle;
//需要父应用加载子应用，将子应用打包成一个一个lib去给父应用适用

