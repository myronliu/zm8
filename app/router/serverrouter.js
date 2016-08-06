import globleImport from '../helper/globalImport.js'
var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var fs= require('fs')
var patha = require('path');
var apiAddress = "http://zzhuanle.kjtpay.com/zhuanle";
var ossApiAddress = "http://10.255.12.5:7015/";// oss-cxf
if(process.env.NODE_ENV != undefined){
  switch(process.env.NODE_ENV ){
    case "staging":
      apiAddress =  "http://zzhuanle.kjtpay.com/zhuanle";
      ossApiAddress = "http://10.255.12.5:7015/";
      break;
    case "production":
      apiAddress = "https://zhuanle.kjtpay.com/zhuanle";
      ossApiAddress = "http://osscxf.hairongyi.com:7015";
      break;
    case "development":
      apiAddress = "http://zzhuanle.kjtpay.com/zhuanle";
      ossApiAddress = "http://10.255.12.5:7015/";
      break;
  }
}

global.ajaxConfig = {url:apiAddress,header:{"Content-Type":"application/json","X-KJT-Agent": "h511111111111111111111111;h511111111111111111111111;h5;h5;;h5;h5;1.0.0;WIFI;h511111111111111111111111","X-KJT-AUTH": "","X-API-VER": "2.0"}}
global.ajaxOssConfig = {url:ossApiAddress,header:{"Content-Type":"application/json","X-KJT-Agent": "h511111111111111111111111;h511111111111111111111111;h5;h5;;h5;h5;1.0.0;WIFI;h511111111111111111111111","X-KJT-AUTH": "","X-API-VER": "2.0"}}

router.use(function(req,res,next){
  // 服务层接收header，设置ajaxConfig，需要传到js client
  var sUserAgent = req.headers["user-agent"].toLowerCase();//获取客户端的环境
  
  var ip = req.get('x-forwarded-for') || req.connection.remoteAddress;
  //global.ajaxConfig.header['H5-Proxy-Client-IP'] = ip;

  if (req.get('X-KJT-Agent')) {   
    global.ajaxConfig.header["X-KJT-Agent"] = req.get('X-KJT-Agent');
  }
  global.ajaxConfig.header["X-KJT-AUTH"] = req.get('X-KJT-AUTH')?req.get('X-KJT-AUTH'):"";
  global.ajaxConfig.header["X-API-VER"] = req.get('X-API-VER')?req.get('X-API-VER'):"2.0";
  next();
})

var ErrorView = React.createFactory(require('../pages/error'));
var DownLoad = React.createFactory(require('../pages/download'));
var Index = React.createFactory(require('../pages/index/index'));
var AboutUs = React.createFactory(require('../pages/user/aboutus'));


// models
var IndexController = require('../controllers/index');

var Exp =require('../helper/expose');

router.get('/error',function(req,res){
  var reactHtml = ReactDOMServer.renderToString(ErrorView({message:"出错啦！"}));
  res.render('index', {reactOutput: reactHtml,title:'出错啦'});
})

router.get(['/','/index'],function(req,res){
  // 获取数据
  // IndexController.index()
  //   .spread(function(queryHryStat,h5home){
  //     var data = {
  //       queryHryStat: queryHryStat.body,
  //       h5home: h5home.body
  //     };
  //     res.expose(Exp.dehydrate(data));
  //     var reactHtml = ReactDOMServer.renderToString(Index({data: data}));
  //     res.render('index', {reactOutput: reactHtml,title:'首页', stateData: res.locals.state});
  //   })
  //   .catch(function(){
  //     var data = {
  //       queryHryStat: {tradeAmout: 200},
  //       h5home: {}
  //     };
  //     res.expose(Exp.dehydrate(data));
  //     var reactHtml = ReactDOMServer.renderToString(Index());
  //     res.render('index', {reactOutput: reactHtml,title:'首页', stateData: res.locals.state});
  //   })
  var reactHtml = ReactDOMServer.renderToString(Index());
  res.render('index', {reactOutput: reactHtml,title:'首页'});
})

router.get('/download',function(req,res){
  var reactHtml = ReactDOMServer.renderToString(DownLoad());
  res.render('index', {reactOutput: reactHtml,title:'下载'});
})

router.get('/aboutus', function(req, res){
  // var reactHtml = ReactDOMServer.renderToString(AboutUs());
  res.render('aboutus', {reactOutput: ''});
})

router.get('/hezuoshanghu', function(req, res){
  // var reactHtml = ReactDOMServer.renderToString(AboutUs());
  res.render('hezuoshanghu', {reactOutput: ''});
})

module.exports = router;