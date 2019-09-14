import { connect } from 'react-redux';
import body from '../../components/common/body';
import * as historyModule from '../../modules/common/historyAction';


function mapStateToProps(state) {
  return {
    setting: (state.setting) ? state.setting : {},
    history: (state.history) ? state.history : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    movePage: (page) => dispatch(historyModule.movePage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(body);