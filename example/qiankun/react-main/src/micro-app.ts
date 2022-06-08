import store from './store'

const microApps = [
  {
    name: 'vueApp',
    entry: process.env.REACT_APP_VUE,
    activeRule: '/vue',
    container: '#sub-viewport', // 子应用挂载的div
    props: {
      routerBase: '/vue', // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  },
  {
    name: 'reactApp',
    entry: process.env.REACT_APP_REACT,
    activeRule: '/react',
    container: '#sub-viewport',
    props: {
      routerBase: '/react',
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
]

export default microApps
