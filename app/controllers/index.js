var Promise  = require('bluebird');
var React    = require('react');
var Index    = require('../models/index');
var exp      = require('../helper/expose');

module.exports ={
  index : function(req,res,next){
    return Promise.resolve().then(function(){
    	// console.log(Index)
    	// console.log(Index.queryHryStat)
      var queryHryStat = Index.queryHryStat()
      	.then(function(result){
	        if(result && result.body){
	          result = result.body;  
	          //  console.log("========>queryHryStat")
  	        // console.log(result)
          	return result; 
	        }else{
	        	return {}
	        }
      	}
      )

      var h5home = Index.h5home().
      	then(function(result){
	        if(result && result.body){
	          result = result.body;  
            // console.log("========>h5home")
            // console.log(result)
	        	return result;
          }else{
          	return {}
          }
        }
      )
      return [queryHryStat, h5home];
    })
    // .spread(function(queryHryStat,h5home){
    // 	return [queryHryStat,h5home];
    // })
    // .catch(function(ex){
    //   return []
    // })
  }
}