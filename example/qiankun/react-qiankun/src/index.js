import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function render(user=''){
  ReactDOM.render(
    <React.StrictMode>
      <App user={user} />
    </React.StrictMode>,
    document.getElementById('root2')
  );
  
}
console.log(window.__POWERED_BY_QIANKUN__,window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__,888)
if(window.__POWERED_BY_QIANKUN__){ //动态添加publicPath
   // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if (!window.__POWERED_BY_QIANKUN__) { //默认独立运行
  render();
}

export async function bootstrap(props){
  console.log('react app bootstraped');
}
export async function mount(props){
  console.log(props.getGlobalState())
  console.log('mount：', props);
  render(props.getGlobalState())
}
export async function unmount(props){
  ReactDOM.unmountComponentAtNode(document.getElementById('root2'))
}
export async function update(props) {

  console.log('update props', props);
  
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
