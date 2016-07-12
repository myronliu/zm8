import React from 'react';
export default class DownLoadHeader extends React.Component{
  static propTypes = {
    show:React.PropTypes.bool,
    closeShow:React.PropTypes.bool,
    arrayText:React.PropTypes.array  
  }
  static defaultProps ={
    show : true,
    closeShow:true,
    arrayText:['新用户注册','即送理财金']
  }
  state={
    show:true
  }
  download(){
    window.to('http://a.app.qq.com/o/simple.jsp?pkgname=com.haier.hairy');
  }
  remove(){
    this.setState({
      show:false
    })
  }
  render(){
    let text =this.props.arrayText.map(function(ele,index){
              return (
                  <p key={index}>{ele}</p>
              );
            });
    let hide={'display':'none'};
    return (
      <div className={this.state.show ? 'DownLoadHeader' :'DownLoadHeader hide'}>
        <div className={this.props.closeShow ? 'close' :'close hide'} onTouchEnd={this.remove.bind(this)} >
          <i></i>
        </div>
        <img src='/images/h5/icon.png'/>
          <div className={(this.props.arrayText.length >1) ? 'text1' :'text2'}>
            {text}
          </div>
        <input className="download"  onTouchEnd={this.download}  type="button" value="赶快下载吧"/>
      </div>
    );
  }
}