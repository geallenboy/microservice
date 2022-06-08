
import { initGlobalState,MicroAppStateActions } from 'qiankun'
import React from 'react'

// 父应用的初始state

const initialState:any = {
  user: {
    name: 'zhangsan'
  }
}

interface ActionProps extends MicroAppStateActions{
  getGlobalState?:any
}


const actions:ActionProps = initGlobalState(initialState)

actions.onGlobalStateChange((newState, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('main change', JSON.stringify(newState), JSON.stringify(prev))

  for (const key in newState) {
    initialState[key] = newState[key]
  }
})
// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key:string) => {
  // 有key，表示取globalState下的某个子级对象
  // 无key，表示取全部
  console.log(initialState,888)
  return key ? initialState[key] : initialState
}


export default actions
