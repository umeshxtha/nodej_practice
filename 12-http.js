
const http = require('http')
const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('Welcome to our homepage')
   }
   if(req.url === '/about'){
    res.end('here is our short history')
   }
   res.end(
    `<h1>Opps!</h1>
    <p> we cant seem this page is availlable</p>
    <a href="/" >back home </a>    `
   )
   
})

server.listen(5000)