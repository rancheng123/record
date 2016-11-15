var https = require('https');
var fs = require('fs');
var url = require('url');


var root = 'D:/github/record/record/record/root';
function getFullPath(path){
    return root+path;
};


var options = {
    pfx:fs.readFileSync('./SSL/server.pfx'),
    passphrase:'123321'
};



https.createServer(options,function(req,res){


    //根据路径字符串  展示路径所有信息
    var urlObj = url.parse(req.url,true);

    var resFile = fs.readFileSync( getFullPath(urlObj.pathname) );

    res.writeHead(200);
    res.end(resFile);
}).listen(3000,'127.0.0.1');