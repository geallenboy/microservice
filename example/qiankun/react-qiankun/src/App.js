import logo from './logo.svg';

import {BrowserRouter, Link,Route, Routes} from 'react-router-dom'
import './App.css';

function App({user}) {

  return (
    <BrowserRouter basename={'/react'}>
    <Link to="/">首页</Link>
    <Link to="/about">关于页面</Link>
    <Routes >
    <Route path="/" element={<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            子应用获取父应用数据
          </p>
          <p>{user?.user?.name}</p>
        </header>
      </div>}></Route>
      <Route path="/about" element={<h1>关于页面</h1>}></Route>
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
