import React,{useEffect} from 'react'
import Header from './Header'
import axios from 'axios'
import Cookies from 'universal-cookie';

function Dashboard(){
    var cookies = new Cookies();

    useEffect(()=>{

        const headers = {Authorization:`oauth_realm="Scrive",
        oauth_signature_method="PLAINTEXT",
        oauth_consumer_key: ${cookies.get('oauth_consumer_key')},       
        oauth_signature: ${cookies.get('apisecret')}&${cookies.get('accesssecret')},
        oauth_token: ${cookies.get('oauth_token')}`
        }

        const options = {
            method: 'GET',
            headers,
            url:`/api/v2/documents/list`,
          };
          axios(options) 
        .then(res => {
          console.log(res);
          console.log(res.data);         
                
        })
    },[])
    return(
        <div>
           
            Dashboard 


        </div>
    )
}

export default Dashboard