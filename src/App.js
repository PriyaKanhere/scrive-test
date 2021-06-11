import logo from './logo.svg';
import './App.css';
import Login from './login'
import React,{useState} from 'react'

function App() {
  const streamify = require('stream-array');
  const HttpProxy = require('http-proxy');
  const proxy = new HttpProxy();
  
  const[email,setEmail]= useState('kanhere.priya@gmail.com')
  const[password,setPassword]=useState('Kanhere@123456')


  return (
    <div className="App">
      <header className="App-header">
        <Login email={email} password={password} />
      </header>
    </div>
  );
}


export default App;
