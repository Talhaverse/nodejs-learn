import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res)=>{
try {


//CHeck if get  
if (req.method === 'GET'){
    if (req.url === '/') {
        res.writeHead(200,{ 'Content-Type': 'text/html'});
        res.end('<h1>hello world</h1>');  
       } else if (req.url === '/about') {
        res.writeHead(200,{ 'Content-Type': 'text/html'});
        res.end('<h1>about</h1>');  
       } else {
        res.writeHead(404,{ 'Content-Type': 'text/html'});
        res.end('<h1>404 page not found</h1>');  
       }
}else {
    throw new Error('Invalid request method');
}
} catch (error) {
    res.writeHead(500,{ 'Content-Type': 'text/html'});
        res.end('<h1>Server error</h1>');  
}

})

server.listen(8000, ()=>{
    console.log(`server is running on port ${PORT}`);
})