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
3. 支持缓存

## 计划
1. 新增对缓存控制（2018-12-19 完成）
2. 新增在npm run dev之后自动打开默认浏览器 (2018-12-26 完成)
3. 新增npm包下载使用（2019-01-06 完成）
 
## 使用说明
### npm安装使用
```
  1. npm i express-static-web --save-dev
  2. 在package.json的script中添加"server": "express-static-web"
  3. npm run server  启动
```

### 用于在服务器上部署前端项目
```
  1. 安装pm2： npm install -g  pm2
  2. 克隆本项目： git clone https://github.com/liu927971519/expresss-web.git
  3. 将打包好的部署文件放在dist文件夹
  4. 启动: npm run start 或 PORT=端口号 npm run start
```

### 扩展
#### node启动
```
启动： node server.js
指定端口运行：
    window:  set PORT = 9001 & node server.js
    ubuntu:  PORT=9001 node serve.js
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



