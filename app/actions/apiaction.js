var EvoFlux = require('evoflux');
var Api = require('../helper/ajax');

module.exports = EvoFlux.createAction("api",{
    post:function(url,param,cb,ajaxSet){
        // console.log(ajaxSet)
        if(!ajaxSet){
            ajaxSet=global.ajaxConfig

        }
        if(process.browser){
            var auth=getCookie('auth');
            // var ssoToken=getCookie('ssoToken');
            ajaxSet.header['X-KJT-AUTH']=(auth===undefined?'':auth);
            // ajaxSet.header['X-SSO-Auth']=(ssoToken===undefined?'':ssoToken);
        }

        Api.init(ajaxSet).api.post(url)
            .send(param)
            .end(function(err,result){
                this.requestEnd(err,result,url,cb)
            }.bind(this))
    },
    get:function(url,cb,ajaxSet){

        if(!ajaxSet){
            ajaxSet=global.ajaxConfig
        }
        Api.init(ajaxSet).api.get(url)
            .end(function(err,result){
                this.requestEnd(err,result,url,cb)
            }.bind(this))

    },
    requestEnd:function(err,result,url,cb){
        //console.log(err);
        if(err!=null||!result.body){
            if(!result || !result.body){
                result={
                    body:{
                        status: -1,
                        message: '网络加载失败，请稍后重试'
                    }
                }
            }

            console.log('========='+1);
            if(cb){
                console.log('========='+2);
                cb({
                    status: (result.body.status || result.body.status ==0) ? result.body.status : result.body.responseCode,
                    message: result.body.message
                });
            }else{
                this.dispatch({
                    actionType:"fail",
                    data:{
                        result:{
                            status: (result.body.status || result.body.status ==0) ? result.body.status : result.body.responseCode,
                            message: result.body.message
                        },
                        url:url
                    }
                })
            }

        }else{
            var status=(result.body.status || result.body.status ==0) ? result.body.status : result.body.responseCode;
            if(cb){
                if(status===undefined){
                    cb({status:-1,message:'网络加载失败，请稍后重试'});
                }else{
                    cb(result.body);
                }
            }else{
                console.log('===============')
                console.log(result.body.status);
                if(status===0){
                    this.dispatch({
                        actionType:"success",
                        data:{
                            result:result.body,
                            url:url
                        }
                    })
                }else{
                    this.dispatch({
                        actionType:"fail",
                        data:{
                            result:result.body,
                            url:url
                        }
                    })
                }
            }


        }

    }

})