import React from 'react';

export default class DownLoad extends React.Component {
  download(){
    // window.to('http://a.app.qq.com/o/simple.jsp?pkgname=com.haier.hairy');
    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
      // var loadDateTime = new Date();
      // window.setTimeout(function() {
      //   var timeOutDateTime = new Date();
      //   if (timeOutDateTime - loadDateTime < 5000) {
      //     debugger;
      //   } else {
      //     window.location = "https://itunes.apple.com/cn/app/wei-xin/id414478124?mt=8";
      //   } 
      // },
      // 25);
      // window.location = "Ctripa://";

      window.location = "https://itunes.apple.com/cn/app/wei-xin/id414478124?mt=8";

      // function ios(){
      //   var ifr = document.createElement("iframe");
      //   ifr.src = "Ctrip://"; /***打开app的协议，有ios同事提供***/
      //   ifr.style.display = "none"; 
      //   document.body.appendChild(ifr);
      //   window.setTimeout(function(){
      //     document.body.removeChild(ifr);
      //      window.location.href = "http://www.wjtr.com/download/index.html"; /***下载app的地址***/
      //   },2000)
      // };

      // var loadDateTime = new Date();

      // var ifr = document.createElement("iframe"); 
      // ifr.setAttribute('src', 'Ctrip://'); 
      // ifr.setAttribute('style', 'display:none'); 

      // window.setTimeout(function() 
      //   {
      //     var timeOutDateTime = new Date();
      //     if (timeOutDateTime - loadDateTime < 400) {
      //      window.location = "https://itunes.apple.com/cn/app/wei-xin/id414478124?mt=8";
      //     } else {
      //      // window.close();
      //     }
      //   },
      //   200
      // );
      // // window.location = "Ctripa://";
      // // alert("dd")
      // document.body.appendChild(ifr); 
      // window.location = "Ctripa://";

      // var ifr = document.createElement("iframe");
      // ifr.src = "Ctrip://";  /***打开app的协议，有ios同事提供***/
      // ifr.style.display = "none"; 
      // document.body.appendChild(ifr);
      // window.setTimeout(function(){
      //     document.body.removeChild(ifr);
      //      window.location = "https://itunes.apple.com/cn/app/wei-xin/id414478124?mt=8"; /***下载app的地址***/
      // },2000)

      // var timeout, t = 1000, hasApp = true;  
      // setTimeout(function () {  
      //     if (hasApp) {  
      //         alert('安装了app');  
      //     } else {  
      //         alert('未安装app');  
      //     }  
      //     document.body.removeChild(ifr);  
      // }, 2000)  
    
      // var t1 = Date.now();  
      // var ifr = document.createElement("iframe");  
      // ifr.setAttribute('src', 'weixin://');  
      // ifr.setAttribute('style', 'display:none');  
      // document.body.appendChild(ifr);  
      // timeout = setTimeout(function () {  
      //      var t2 = Date.now();  
      //      if (!t1 || t2 - t1 < t + 100) {  
      //          hasApp = false;  
      //      }  
      // }, t); 

      // var timeout, t = 1000, hasApp = true; 
      // setTimeout(function () { 
      //   if (hasApp) { 
      //     alert('安装了app'); 
      //   } else { 
      //     alert('未安装app'); 
      //   } 
      //   document.body.removeChild(ifr); 
      // }, 1400) 
      
      // var t1 = Date.now(); 
      // var ifr = document.createElement("iframe"); 
      // ifr.setAttribute('src', 'QiTui://'); 
      // ifr.setAttribute('style', 'display:none'); 
      // document.body.appendChild(ifr); 
      // timeout = setTimeout(function () { 
      //    var t2 = Date.now(); 
      //    if (!t1 || t2 - t1 < 1200) { 
      //      hasApp = false; 
      //    } 
      // }, t); 

      // var startTime = Date.now();
      // var ifr = document.createElement('iframe');
      // ifr.src = "Ctrip://"; /***打开app的协议，有ios同事提供***/
      // ifr.style.display = 'none';
      // document.body.appendChild(ifr);

      // var t = setTimeout(function() {
      //     var endTime = Date.now();
      //     if (!startTime || endTime - startTime < 5000) { 
      //         window.location = "https://itunes.apple.com/cn/app/wei-xin/id414478124?mt=8";
      //     } else {

      //     }
      // }, 600);

      // window.onblur = function() {
      //     clearTimeout(t);
      // }

    }else if (navigator.userAgent.match(/android/i)) {
      var state = null;
      try {
        state = window.open("QiTui://", '_blank');
      } catch(e) {}
      if (state) {
        window.close();
      } else {
        window.location = "https://itunes.apple.com/cn/app/wei-xin/id414478124?mt=8";
      }
    }


    
//     var u = navigator.userAgent;
//     debugger;
//     var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//     var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;//android
//     if(isiOS){
//       function ios(){
//         var ifr = document.createElement("iframe");
//         ifr.src = "QiTui://"; /***打开app的协议，有ios同事提供***/
//         ifr.style.display = "none"; 
//         document.body.appendChild(ifr);
//         window.setTimeout(function(){
//           document.body.removeChild(ifr);
//            window.location.href = "https://itunes.apple.com/cn/app/wei-xin/id414478124?mt=8"; /***下载app的地址***/
//         },2000)
//       }
//     }
//     if(isAndroid){
//       function android(){
//         window.location.href = "QiTui://"; /***打开app的协议，有安卓同事提供***/
//         window.setTimeout(function(){
//            window.location.href = "http://www.wjtr.com/download/index.html"; /***打开app的协议，有安卓同事提供***/
//         },2000);
//       };
//     }
  }
  render(){
    var bIsUa=false;
    if(process.browser){
      var u = navigator.userAgent;
      bIsUa = u.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
    }
    
    return (
      <div className="downLoadPage">
        {
          process.browser && bIsUa ?
            (
              <image className="browser-style" src="/images/h5/openbrowser.jpg">
              </image>
            )
            :
            (
              <div>
              </div>
            )
        }
        <div className="headera">
          <div className="header-wrap">
            <div className="logo"></div>
            <div className="ctn">一个可以赚钱的平台</div>
          </div>
        </div>
        <div className="p2">
          <p>零风险、无押金</p>
          <p>做兼职、赚零花</p>
        </div>
        <div className="p3">
          <div className="dl" onTouchEnd={this.download}>
            立即下载
          </div>
        </div>
        <div className="p4">
          目前仅支持iOS
        </div>
      </div>
    )
  }

}