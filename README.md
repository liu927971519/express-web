# express-web
> 使用express搭建一个静态服务器

## 必要条件
使用之前必须保证已经安装好node与npm

## 非必需条件
 若需要长时间运行此静态服务器，建议全局安装pm2
 > npm install -g  pm2
 
## 特性
1. 支持自定义端口
2. 支持gzip
 
## 使用说明
#### node启动
```
启动： node server.js
指定端口运行：set POST = 9001 & server.js
停止：ctrl + c 两次
```
#### pm2启动
```
启动pm2 start server.js
查看状态 pm2 status 
停止pm2 stop server.js
```

## 附上pm2常用命令
```
  查看pm2全部项目项：pm2 status
  运行一个项目： pm2 start [文件名] [--name 命名][可选]
  停止一个项目:  pm2 stop [项目名]
  停止所有项目： pm2 stop all
  重启所有项目： pm2 restart all
  显示所有进程日志： pm2 logs
  清空项目： pm2 delete [id/项目名]
  清空所有项目：pm2 delete all
```



