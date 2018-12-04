const express = require('express'); // 服务
const compression = require('compression'); // gzip
const path = require('path');
const app = express();
app.use(compression());
app.use(express.static(__dirname + '/dist'));
app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});
app.listen(process.env.PORT || 3002, function() {
	console.log(`已经启动服务：127.0.0.1:${process.env.PORT || 3002}`)
});