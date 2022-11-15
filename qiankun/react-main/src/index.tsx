import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {registerMicroApps,start,setDefaultMountApp} from 'qiankun'
import microApps from './micro-app'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//@ts-ignore
registerMicroApps(microApps, {
  beforeLoad: [(app: Record<string, any>): Promise<string> => {
    console.log('加载前应用名称', app.name)
    return app.name
  }],
  beforeMount: [
    (app: Record<string, any>): Promise<string> => {
      console.log('加载中 %c%s', 'color: green;', app.name)
      return app.name
    },
  ],
  afterMount: [
    (app: Record<string, any>): Promise<string> => {
      console.log('加载中后 %c%s', 'color: green;', app.name)
      return app.name
    }
  ],
  afterUnmount: [
    (app: Record<string, any>): Promise<string> => {
      console.log('卸载后 %c%s', 'color: green;', app.name)
      return app.name
    },
  ],
})

// setDefaultMountApp('/react')
start(); 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
