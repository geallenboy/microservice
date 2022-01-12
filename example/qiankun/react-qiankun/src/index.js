import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function render(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}
if(window.__POWERED_BY_QIANKUN__){ //动态添加publicPath
   // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if (!window.__POWERED_BY_QIANKUN__) { //默认独立运行
  render();
}
//子组件的协议就ok
export async function bootstrap(props){

}
export async function mount(props){
  render()
}
export async function unmount(props){
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
