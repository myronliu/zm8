
import Layout from '../../components/layout'

import Toast from '../../helper/toast';
import Loading from '../../helper/loading';
import PasswordText from '../../components/passwordtext';
import BgButton from '../../components/bgbutton';
import Input from '../../components/Input';
import TitleInput from '../../components/titleinput';
import ApiStore from '../../stores/apistore';
import ApiAction from  '../../actions/apiaction';
import SmsCodeText from '../../components/smscodetext';
import UrlConfig from '../../config/urlconfig'
import CheckBox from '../../components/checkbox';
import LineCell from '../../components/linecell';
import Canvas from '../../components/Canvas';
import ProductItem from '../../components/productitem';
import DownLoadHeader from '../../components/DownLoadHeader';
import BasePage from '../../components/BasePage';
export default class RegSucc extends BasePage {
    state = {
        showLoading: false,
        checked:false,
        isShowTime:false,
        isShowHeader:false,
        accelerateRewards:'',
        profit:1,
        period:100,
        tradeAmout:'',
        memberCount:'',
        rateData:'100%',
        tradeAmountSuffix:'累计投资',
        memberCountSuffix:'平台用户',
        rateDataSuffix:'历史本息获得',
        annualizedRate:'',
        progress:'',
        availAmount:'',
        investPeriod:'',
        initInvest:'',
        recommendedList:[]


    };
    static propTypes = {
        token: React.PropTypes.string
    }
    static defaultProps = {
        token:'',
        showremind:'',
        ssoToken:'',
        auth:''
        
    }
  apiSuccess(url,body){

    switch(url){

      case UrlConfig.queryHryStat:
        console.log(body);
        console.log(body.tradeAmout);
        this.setState({
          tradeAmout: body.tradeAmout,
          memberCount: body.memberCount

        })
        ApiAction.post(UrlConfig.h5home)
        break;
      case UrlConfig.h5home:
        console.log(body);
        console.log(body.recommendedList);
        console.log(body.recommendedList[0]);
        console.log(body.recommendedList[0].annualizedRate);
        
        this.setState({
          recommendedList: body.recommendedList,
          annualizedRate: body.recommendedList[0].annualizedRate+'%',
          progress: body.recommendedList[0].progress,
          availAmount:body.recommendedList[0].availAmount,
          initInvest:body.recommendedList[0].initInvest,
          investPeriod:body.recommendedList[0].initInvest,




        })     
    }

  }
  componentWillMount(){
    console.log(this.props.data);
    this.setState({
      tradeAmout: this.props.data.queryHryStat.tradeAmout,
      memberCount: this.props.data.queryHryStat.memberCount,


      recommendedList: this.props.data.h5home.recommendedList,
      annualizedRate: this.props.data.h5home.recommendedList[0].annualizedRate+'%',
      progress: this.props.data.h5home.recommendedList[0].progress,
      availAmount:this.props.data.h5home.recommendedList[0].availAmount,
      initInvest:this.props.data.h5home.recommendedList[0].initInvest,
      investPeriod:this.props.data.h5home.recommendedList[0].initInvest


    })
  }
  // componentDidMount(){
  //   super.componentDidMount()
  //   this.showLoading(true);
  //   console.log(UrlConfig.queryHryStat);
  //   // ApiAction.post(UrlConfig.queryHryStat)
  //   debugger;
  // }
    downkeyboard() {
        this.refs.psyPwd.refs.pwd.blur();
    }
    nextBtnPress() {
        this.downkeyboard()
        var psw = this.refs.psyPwd.state.password;
        if(this.refs.psyPwd.state.result){
            var params={
                payPassword: psw,
                token: this.props.token
            }
            this.showLoading(true)
            ApiAction.post(UrlConfig.setMemberPayPwd,params)
        }else{
            Toast.show(this.refs.psyPwd.state.message,1500);
        }

    }
    showLoading(show) {
        this.setState({
            showLoading: show
        })
    }
    skip(){
        window.to('/register')
    }
    render() {
      let rightBtn={title:'跳过',func:this.skip.bind(this)};

      var weDataBodyStyle={
        width: '189px'
      }
      return (          
        <Layout className={'index'} title={'首页'} isShowHeader={this.state.isShowHeader}>

          <div className="banner">
            <div className="left clearfix">
              <div className="leftImg">
              <img className="logo" src="images/h5/icon.png" />
              </div>
              <div className="rightText">
              <span>真实产业  诚信金融</span>
              </div>
            </div>
            <div className="right">
              <a href="#">登陆</a>/<a href="#">注册</a>
            </div>
          </div>
          <div>
            <img className="headerImg" src="images/h5/banner.png"/>
          </div>
          <div className="weData">
            <div className="weDataHeader clearfix">
              <div className="weDataHeaderImage">
                <img className="headerImage" src="images/h5/iocn_sj.png"/>
              </div>
              <div className="weDataHeaderTitle">我们的数据</div>
            
            </div>
            <div style={weDataBodyStyle} className="weDataBody">
              <img className="weDataBodyImage" src="images/h5/shuju.png"/>
              <div className="feeData">
                <p>{this.state.tradeAmout}</p>
                <p>{this.state.tradeAmountSuffix}</p>
              </div>
              <div className="userData">
              <p>{this.state.memberCount}</p>
              <p>{this.state.memberCountSuffix}</p>
              </div>
              <div className="rateData">
              <p>{this.state.rateData}</p>
              <p>{this.state.rateDataSuffix}</p>
              </div>
            </div>
          </div>
          <div className="weProduct">
            <div className='border1px'></div>
            <div className="productHeader clearfix">
              <div className="productHeaderImage">
                <img className="headerImage" src="images/h5/iocn_cp.png"/>
              </div>
              <div className="productHeaderTitle">我们的产品</div>
            
            </div>

            <div className="product">
            <div className="cycle1"></div>
            <div className="productTitle">
                <div className="color1">小金链</div>
                <div>海尔集团应付账款理财期限短，安全性高</div>
            </div>
            </div>

            <div className="product">
            <div className="cycle2"></div>
            <div className="productTitle">
                <div className="color2">海赚</div>
                <div>实地评估抵押物，转让人到期回购债券</div>
            </div>               
            </div>

            <div className="product">
            <div className="cycle3"></div>
            <div className="productTitle">
                <div className="color3">小金票</div>
                <div>以商业汇票做质押，到期后无条件承兑</div>
            </div>             
            </div>

            <div className="product">
            <div className="cycle4"></div>
            <div className="productTitle">
                <div className="color4">融易发</div>
                <div>精选优质投资组合，安全省心</div>
            </div>             
            </div>

          </div>          
          <div className="recommendHeader">
              -为您推荐-
          </div>
          <div className="recommend">

            <div className="recommendTitle">
            小金链181-海尔供应链资产
            </div>
            <div className="recommendBorder">
             
            </div>
            <div className="recommendShareImage">
              <img src="images/h5/icon_xkzx.png"/>
            </div>
            <div className="recommendShareChart">
              <Canvas annualizedRate={this.state.annualizedRate} progress={this.state.progress} />
            </div>
            <div className="recommendFooter">
              <ul className="clearfix">
              <li><i className="smallcycle"></i>剩余<span className="recommendFooterColor">{this.state.availAmount}万</span></li>
              <li><i className="smallcycle"></i>始投<span className="recommendFooterColor">{this.state.initInvest}元</span></li>
              <li><i className="smallcycle"></i>期限<span className="recommendFooterColor">{this.state.investPeriod}天</span></li>
              </ul>
            </div>

          </div>
          <div className="productItem">
            <ProductItem recommendedList={this.state.recommendedList}/>
          </div>

          <div className="indexFooter">
            <div>Copyright ©2016 青岛海融易网络科技有限公司 版权所有</div>
            <div>备案/许可证编号鲁ICP备14010519号-1</div>
            <div>联系我们：<span className="tel">400-999-588</span></div>
          </div>
          <DownLoadHeader closeShow={true} arrayText={['新用户注册','即送理财金']}/>
        </Layout>
      )
    }
}