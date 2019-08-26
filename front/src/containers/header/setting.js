import { connect } from 'react-redux';
// import * as settingModule from '../../modules/header/settingAction';
import setting from '../../components/header/setting';


function mapStateToProps(state) {
  return {
    setting: (state.setting) ? state.setting : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // openSideTab: () => dispatch(settingModule.openSideTab()),
    // openSetting: () => dispatch(settingModule.openSetting()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(setting);