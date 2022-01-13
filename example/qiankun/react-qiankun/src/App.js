import logo from './logo.svg';

import {BrowserRouter, Link,Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter basename={'/react'}>
    <Link to="/">首页</Link>
    <Link to="/about">关于页面</Link>
    <Routes >
    <Route path="/" element={<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>}></Route>
      <Route path="/about" element={<h1>关于页面</h1>}></Route>
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
