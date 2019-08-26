import { connect } from 'react-redux';
// import * as accountModule from '../../modules/header/accountAction';
import account from '../../components/header/account';


function mapStateToProps(state) {
  return {
    account: (state.account) ? state.account : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // openSideTab: () => dispatch(accountModule.openSideTab()),
    // openSetting: () => dispatch(accountModule.openSetting()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(account);