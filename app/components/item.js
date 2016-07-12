import React from 'react';


export default class item extends React.Component {
  state={
    progress:'',
    initInvest:'',
    annualizedRate:'',
    investPeriod:'',
    availAmount:'',
    bidTitle:''
  }
  remove(){
    this.setState({show:false});
  }

  render(){

    return (
        <div className="item">
          <div className="itemHeader">
          {this.props.bidTitle}
          </div>
          <div className="itemBody clearfix">
            <div className="left">
              <p><span className="annualizedRateColor">{this.props.annualizedRate}%</span></p>
              <p>预期年化</p>
              <i></i>
            </div>
            <div className="right">
              <p>{this.props.investPeriod}</p>
              <p>浮动期限</p>
            </div>
          </div>
          <div className="itemFooter">
          <ul className="clearfix">
          <li>剩余{this.props.availAmount}万</li>
          <li>始投{this.props.initInvest}元</li>
          <li>进度<span className="progressColor">{this.props.progress}%</span></li>
          </ul>
          </div>
        </div>
    )
  }

}




