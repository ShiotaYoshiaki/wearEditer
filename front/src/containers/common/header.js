import { connect } from 'react-redux';
import * as headerModule from '../../modules/common/headerAction';
import header from '../../components/common/header';


function mapStateToProps(state) {
  return {
    header: (state.header) ? state.header : {},
    account: (state.header) ? state.account : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openSideMenu: () => dispatch(headerModule.openSideMenu()),
    openSetting: () => dispatch(headerModule.openSetting()),
    loadAccountInfo: () => dispatch(headerModule.loadAccountInfo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(header);