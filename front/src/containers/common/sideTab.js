import { connect } from 'react-redux';
// import * as sideTabModule from '../../modules/common/sideTabAction';
import sideTab from '../../components/common/sideTab';


function mapStateToProps(state) {
  return {
    sideTab: (state.sideTab) ? state.sideTab : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // openSideTab: () => dispatch(sideTabModule.openSideTab()),
    // openSideTab: () => dispatch(sideTabModule.openSideTab()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(sideTab);