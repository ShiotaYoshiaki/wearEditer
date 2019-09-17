import { connect } from 'react-redux';
import * as headerModule from '../../modules/common/headerAction';
import * as historyModule from '../../modules/common/historyAction';
import setting from '../../components/common/setting';


function mapStateToProps(state) {
  return {
    setting: (state.setting) ? state.setting : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openSetting: () => dispatch(headerModule.openSetting()),
    closeSetting: () => dispatch(headerModule.closeSetting()),
    movePage: (page) => dispatch(historyModule.movePage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(setting);