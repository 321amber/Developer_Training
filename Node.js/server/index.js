const http = require("http")
const url = require("url")

const myServer = http.createServer((req,res)=>{
    if(res.url === 'favicon.ico') return res.end();
    const log = `${Date.now()}, ${req.url}: new req received`
    const myurl = url.parse(req.url, true);

    fstat.appendFile("/log.txt",log, (err,data)=>{
        switch(myurl.pathname){
            case "/":
                res.end("Homepage")
            break;
            case "/about":
                const myname = req.query.search_query
                res.end(`HI, ${myname}`);
            break;
            default:
                res.end("404 page not found")
        }
    })
    
    console.log(req);
    res.end("server requested")
});

myServer.listen(8000, ()=>{
    console.log("server started");
    
})

