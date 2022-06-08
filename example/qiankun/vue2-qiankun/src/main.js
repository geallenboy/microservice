import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false

let instance = null;
function render(){
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app') //这里是挂载到自己的html中 主应用会拿到这个挂载后的html 将其插入进去
}
if(window.__POWERED_BY_QIANKUN__){ //动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if (!window.__POWERED_BY_QIANKUN__) { //默认独立运行
  render();
}

export async function bootstrap(props){
  console.log('vue2 app bootstraped');
}
export async function mount(props){
  // render(props)
  console.log(props.getGlobalState())
  console.log('mount：', props);
  render(props.getGlobalState())
}
export async function unmount(props){
  instance.$destroy();
}