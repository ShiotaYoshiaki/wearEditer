import { connect } from 'react-redux';
import top from '../../components/top/topIndex';
import * as historyModule from '../../modules/common/historyAction';


function mapStateToProps(state) {
  return {
    setting: (state.setting) ? state.setting : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    movePage: (page) => dispatch(historyModule.movePage(page)),
    // openSideTab: () => dispatch(settingModule.openSideTab()),
    // openSetting: () => dispatch(settingModule.openSetting()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(top);