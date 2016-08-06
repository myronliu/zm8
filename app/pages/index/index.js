
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
  
  }
  componentDidMount(){
    super.componentDidMount()
  }
  showLoading(show) {
    this.setState({
        showLoading: show
    })
  }
  render() {
    var weDataBodyStyle={
      width: '189px'
    }
    return (          
      <Layout className={'index'} title={'首页'} isShowHeader={this.state.isShowHeader}>
        
      </Layout>
    )
  }
}