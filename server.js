import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res)=>{
   

    res.writeHead(200,{ 'Content-Type': 'text/html'});
    res.end('<h1>hello world</h1>');     
})

server.listen(8000, ()=>{
    console.log(`server is running on port ${PORT}`);
})