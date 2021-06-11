import React from "react"
import axios from 'axios'
import Cookies from 'universal-cookie';

function Login({email,password}){

    const submitRequest = (e) => {
        e.preventDefault()
     
      axios.post(`/api/v2/getpersonaltoken?email=kanhere.priya@gmail.com&password=Kanhere@123456`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        var cookies = new Cookies();
        cookies.set('oauth_signature_method', 'PLAINTEXT', { path: '/' });
        cookies.set('oauth_consumer_key', res.data.apitoken, { path: '/' });
        cookies.set('oauth_token', res.data.accesstoken, { path: '/' });
        cookies.set('oauth_signature', (res.data.apisecret + "&"+ res.data.accesssecret), { path: '/' });

      })
    }

    return(
        <div>
            <form onSubmit={(e) => submitRequest(e)}> 
            <input type="text" placeholder="email" value={email}/><br></br>
            <input type="text" placeholder="Password" value={password}/><br></br>
            <button>Log in</button>
            </form>
        </div>
    )
}

export default Login
