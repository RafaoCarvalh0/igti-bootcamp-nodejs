import http from "http";

http.createServer((req, res) =>{
    if ((req.method === "GET") && (req.url === "/teste")){
        res.write("Get /test executed succesfully!");
    }
    res.write("Hello World! 123123");
    res.statusCode = 200;
    res.end();
}).listen(8080);    