const http = require('http');

const server = http.createServer();

server.on("request",(req,res)=>{
    console.log("headers",req.headers,"url",req.url, "method",req.method)
    if(req.method === "GET"){
        res.writeHead(200, {"Content-Type":"text/plain"})
        res.write("hello world")
        res.write("hello world again")
        res.end();
    } else if(req.method === "POST"){
        res.writeHead(200, {
            "Content-Type":"application/json",
        })
        res.end(JSON.stringify({
            name:"hello world"
        }))
    }
    res.end("hello world")
})

server.listen(3000,()=>{
    console.log("server started at 3000")
})