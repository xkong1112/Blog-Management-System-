// 引用expess框架
const express = require('express');
// require用户集合构造函数user
const { User} = require('../model/user');

// 创建博客展示页面路由
const admin = express.Router();

admin.get('/login', (req,res) => {
    //渲染登录的模板, 需要模板路径
    res.render('admin/login')
});

// // 实现登陆功能
// admin.post('login', (req, res)=> {
//     // 接受请求参数 test
//     // res.send(req.body);
//     const {email, passward} = req.body;

//     if (email.trim().length == 0 || passward.trim().length == 0) {
//         return res.status(400).send('tishi');
//         //顺带阻止程序向下运行, 写成一行
// if执行语句只有一句的时候大括号可以省略
// 更好看, 调用err模板, .send('tishi'); => .render('admin/error', {msg: 'tishi'})
// 3s钟自动跳转=>客户端实现 服务端就是router, 客户端就是其他
//     }
// });
// 然后开始查询用户的信息 => 不存在 => 中止向下执行, 存在 => 比对 => 成功/失败
// User.findOne({email})
// 创建用户列表路由
admin.get('/user', (req, res) => {
    res.render('admin/user')
});

// 将路由对象做为模块成员进行导出
module.exports = admin;