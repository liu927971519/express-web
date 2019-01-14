# express-web 一个静态服务器

![NPM version](https://img.shields.io/badge/express----static----web-v%200.0.12-brightgreen.svg)

> 在前端项目要发布测试与生产环境，一般情况都会将打包好资源文件，使用nginx或tomcat等方式
进行本地验证，验证通过再进行线上部署。那有更便捷验证方式？就是express-web，详情使用请看
下文。

## 必要条件
使用之前必须保证已经安装好node>=8.10.0与npm>=6.1.0

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
  2. 在package.json的script中添加
     "scripts": {
        "preserver": "npm run build",
        "server": "cross-env Port=3001 Open=true Folder=dist express-static-web dev",
     }
  3. npm run server 启动
  
  备注： 
        preserver: 在npm run server之前执行打包命令
        Port: 端口号
        Open: 是否自动打开浏览器
        Folder: 打包之后文件夹名称
```

### 用于在服务器上部署前端项目
```
  1. 安装pm2： npm install -g  pm2
  2. 克隆本项目： git clone https://github.com/liu927971519/expresss-web.git
  3. 将打包好的部署文件放在dist文件夹
  4. 启动: npm run start 或 PORT=端口号 npm run start
```

### 若有使用上问题或bug，欢迎在Issues提出

