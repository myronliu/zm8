import Layout from '../../components/layout'
import Toast from '../../helper/toast';
import Loading from '../../helper/loading';
import ApiStore from '../../stores/apistore';
import ApiAction from  '../../actions/apiaction';
import UrlConfig from '../../config/urlconfig'
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