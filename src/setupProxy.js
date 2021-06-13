const streamify = require('stream-array');
const  {createProxyMiddleware } = require('http-proxy-middleware');
const Cookies = require('universal-cookie');

module.exports = function(app) {
    var cookies = new Cookies();

  app.use(
    ['/api',"/auth/google"],
       createProxyMiddleware({
           target: 'https://scrive.com/',
            changeOrigin: true,
            onProxyReq: function(proxyReq, req, res) {      

              console.log(cookies.getAll())
              //  proxyReq.setHeader('oauth_consumer_key', cookies.get('oauth_consumer_key'));
              //   proxyReq.setHeader('oauth_token', cookies.get('oauth_token'));
              //   proxyReq.setHeader('oauth_signature', cookies.get('apisecret')+'&'+cookies.get('accesssecret'));
              //   proxyReq.setHeader('oauth_signature_method', 'PLAINTEXT');
                
              
                /*proxyRes.headers['oauth_consumer_key']=cookies.get('oauth_consumer_key');
                proxyRes.headers['oauth_token']=cookies.get('oauth_token');
                proxyRes.headers['oauth_signature']=cookies.get('apisecret')+'&'+cookies.get('accesssecret')
                proxyRes.headers['oauth_signature_method']=  'PLAINTEXT';*/
        
                
                return proxyReq;
               }     
       })
  );
  
};

