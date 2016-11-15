
/*


 //https 的实现
 //1. 安装openssl

 //2. 已下步骤（连接内含有）
 //http://cnodejs.org/topic/54745ac22804a0997d38b32d


 */



var https = require('https');
var fs = require('fs');
var url = require('url');

//配置项
var config = require('./config.js');
var root = config.root;
var host = config.host;
var port = config.port;


//https 配置项
var options = {
    //CA证书
    pfx:fs.readFileSync('./SSL/server.pfx'),

    //CA私钥
    passphrase:'123321'
};



https.createServer(options,function(req,res){


    //根据路径字符串  展示路径所有信息
    var urlObj = url.parse(req.url,true);

    var resFile = fs.readFileSync( getFullPath(urlObj.pathname) );

    res.writeHead(200);
    res.end(resFile);
}).listen(port,host);


//获取完整路径
function getFullPath(path){
    return root+path;
};