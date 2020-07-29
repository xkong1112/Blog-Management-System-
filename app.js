// 引入express
const express = require('express');

// 创建网站服务器
const app = express();

// 获得绝对路径 放在前面 后面需要调用它
const path = require('path');

// require body-parser
const bodyParser = require('body-parser');

// require数据库
require('./model/connect');

// 处理post
// 中间件, 拦截所有请求
app.use(bodyParser.urlencoded({extended:false}));

//require user for test
//require('./model/user');
	
// 模板路径 => express框架
app.set('views', path.join(__dirname, 'views'));

// 默认模板后缀 
app.set('view engine', 'art');

// 渲染art使用的引擎
app.engine('art', require('express-art-template'));


//path.join(__dirname,'public') dir是blog目录, 需要在blog后面拼接public目录

// 引用本地资源/开放静态资源文件/绝对路径
app.use(express.static(path.join(__dirname,'public')))



// 得到路由对象
const home = require('./route/home');
const admin = require('./route/admin');

// 为路由匹配请求路径
app.use('/home', home);
app.use('/admin', admin);

//监听80端口 HTTP默认端口是80, HTTPS默认端口是443
app.listen(80);
console.log('服务器启动成功! 请访问localhost')