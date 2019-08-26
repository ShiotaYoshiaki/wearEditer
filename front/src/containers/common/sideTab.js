import { connect } from 'react-redux';
// import * as sideTabModule from '../../modules/common/sideTabAction';
import sideTab from '../../components/common/sideTab';
import * as historyModule from '../../modules/common/historyAction';


function mapStateToProps(state) {
  return {
    sideTab: (state.sideTab) ? state.sideTab : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    movePage: (page) => dispatch(historyModule.movePage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(sideTab);