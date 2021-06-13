import './App.css';
import Login from './login'
import React,{useState} from 'react'
import { Router } from 'react-router';
import Dashboard from '../src/Components/Dashboard'


function App() {
  const streamify = require('stream-array');
  const HttpProxy = require('http-proxy');
  const proxy = new HttpProxy();
  
  
  const[email,setEmail]= useState('kanhere.priya@gmail.com')
  const[password,setPassword]=useState('Kanhere@123456')
  const [login,IsLoggedIn] = useState(false)

  const submitForm = () =>{
    IsLoggedIn(true)
  }



  return (
  
    <div className="App">
      <header className="App-header">
        
      {login?
       <Dashboard /> 
      :        
        <Login email={email} password={password} loginFunction = {submitForm} />
      }
      </header>
    </div>
   
  );
}


export default App;
