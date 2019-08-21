import { connect } from 'react-redux';
// import * as accountModule from '../../modules/common/accountAction';
import account from '../../components/common/account';


function mapStateToProps(state) {
  return {
    account: (state.account) ? state.account : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // openSideMenu: () => dispatch(accountModule.openSideMenu()),
    // openSetting: () => dispatch(accountModule.openSetting()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(account);