import React, { useState } from 'react';
import {BrowserRouter, Link,Route, Routes} from 'react-router-dom'
import './App.css';
import store from './store'
import microApps from './micro-app'
function App() {

  const [current,setCurrent] = useState<string>('/vue')

  return (
    <BrowserRouter basename={'/'}>
      <div className="layout-wrapper">
        
        <div className="layout-header">
          <div className="logo"> <Link to={'/'}>微前端demo</Link></div>
          <ul className="sub-apps">

            {
              microApps.map((item,key)=>{
                return <li key={item.name} className={item.activeRule===current?'active':''}>
                  <Link to={item.activeRule}>{item.name}</Link>
                </li>
              })
            }
            
          </ul>
          <div className="userinfo">主应用的名称：{ store.getGlobalState()?.user?.name}</div>
        </div>
        
        <div id="sub-viewport"> 主应用是react</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
