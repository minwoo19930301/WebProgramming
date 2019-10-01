var http = require('http');		// http 모듈 
var fs = require('fs');         // filesystem 모듈

// http 서버 생성
http.createServer(function(req, res) {
    console.log(req.url);//1
    var data = '';
    if(req.method === 'GET'){
        if(req.url === '/'){
            data = fs.readFileSync('./login.html')
            // Response Header 설정
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
            // Response Message Write
            res.write(data);
            // Response Send
            res.end();
        };
    } else if(req.method === 'POST'){
        if(req.url === '/login'){
            console.log(req.method);//2
            req.on('data', function(_data){
                data = _data;
                console.log(data);//4
            }).on('end', function(){
                // Response Header 설정
                res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
                // Response Message Write
                res.write(data);
                // Response Send
                res.end();
                console.log('data end');//5
            })      
        }

    }
	console.log('request callback end');//3
}).listen(8888, function(err, result) {
	if(err) {
		console.error(err);
	} else {
		console.log('Server is running on http://localhost:8888');
	}
});
