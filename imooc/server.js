var http=require("http");
http.createServer(function(req,res){
	console.log("start ")
	res.writeHead(200,{"Content-Type":"text/json"});
	res.end("hello nodejs");
	console.log("end ")
}).listen(8080,"127.0.0.1");
console.log("server have started");