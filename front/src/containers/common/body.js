import { connect } from 'react-redux';
// import * as settingModule from '../../modules/common/settingAction';
import body from '../../components/common/body';


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

export default connect(mapStateToProps, mapDispatchToProps)(body);