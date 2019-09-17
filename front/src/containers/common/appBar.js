import { connect } from 'react-redux';
import * as headerModule from '../../modules/common/headerAction';
import * as historyModule from '../../modules/common/historyAction';
import appBar from '../../components/common/appBar';


function mapStateToProps(state) {
  return {
    header: (state.header) ? state.header : {},
    account: (state.header) ? state.account : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openSetting: () => dispatch(headerModule.openSetting()),
    movePage: (page) => dispatch(historyModule.movePage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(appBar);