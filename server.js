const express = require('express'); // 服务
const compression = require('compression'); // gzip
const opn = require('opn'); // node的自动打开浏览器
const path = require('path');
const app = express();
const filePath = getStaticUrl();
app.use(compression());

app.use(express.static(filePath, {
  setHeaders: setCustomCacheControl
}));

app.get('*', function(req,res) {
  res.sendFile(`${filePath}/index.html`);
});

app.listen(process.env.Port || 3002, function() {
  console.log(`已经启动服务： http://127.0.0.1:${process.env.Port || 3002}`)
  if (process.env.Open) {
    opn(`http://127.0.0.1:${process.env.Port || 3002}/index.html`);
  }
});

// 缓存控制
function setCustomCacheControl(res, path) {
  // 对html格式文件不设置缓存
  if (express.static.mime.lookup(path) == 'text/html') {
    res.setHeader('Cache-Control', 'no-cache');
  } else {
    // 其他静态资源使用强缓存
    res.setHeader('Cache-Control', 'public, max-age=3600')
  }
}

// 获取静态文件的路径
function getStaticUrl() {
  const folder = `${process.env.Folder || 'dist'}`;
  return path.join(__dirname, '../../', folder);
}
