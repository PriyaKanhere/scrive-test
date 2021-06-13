import React, { useState } from "react"
import axios from 'axios'
import Cookies from 'universal-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function Login(props){
  
  
    const onSubmit = (e) => {
        e.preventDefault()
        
     
      axios.post(`/api/v2/getpersonaltoken?email=kanhere.priya@gmail.com&password=Kanhere@123456`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        var cookies = new Cookies();
        cookies.set('oauth_signature_method', 'PLAINTEXT', { path: '/' });
        cookies.set('oauth_consumer_key', res.data.apitoken, { path: '/' });
        cookies.set('oauth_token', res.data.accesstoken, { path: '/' });
        cookies.set('apisecret',res.data.apisecret,{ path: '/' });
        cookies.set('accesssecret',res.data.accesssecret,{path: '/' });
        

  
        props.loginFunction()
      
      })
      
    }

    return(
            <div>          
            <form onSubmit={(e) => onSubmit(e)}> 
            <h2>Log in </h2>
            <input type="text" placeholder="email" value={props.email}/><br></br>
            <input type="text" placeholder="Password" value={props.password}/><br></br>
            <button>Log in</button>           
        
            </form>
           
        </div>
       

    )
}


export default Login
