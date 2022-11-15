import {h, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'


const appOptions  = {
    el:'#vue',
    router,
    render:h(App)
}

const vueLifeCycle = singleSpaVue({
    createApp,
    appOptions:{
        el:'#vue',
        router,
        render:h(App)
    }
    
})
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount

