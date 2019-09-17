import { connect } from 'react-redux';
import mostItem from '../../components/top/mostItem';
import * as historyModule from '../../modules/common/historyAction';


function mapStateToProps(state) {
  return {
    setting: (state.setting) ? state.setting : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    movePage: (page) => dispatch(historyModule.movePage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(mostItem);