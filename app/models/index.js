var ajax = require('../helper/ajaxp');
var UrlConfig = require('../config/urlconfig');
var Api = function(){ return ajax.init(global.ajaxpZhuanleConfig).api; };
var Index = {}
Index.queryHryStat = function (position) {
  return Api().post(UrlConfig.queryHryStat)
    .send({
      
    });
}

Index.h5home = function (position) {
  return Api().post(UrlConfig.h5home)
    .send({
      
    });
}

module.exports = Index;