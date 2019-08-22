import { connect } from 'react-redux';
// import * as sideTabModule from '../../modules/common/sideTabAction';
import sideTab from '../../components/header/sideTab';


function mapStateToProps(state) {
  return {
    sideTab: (state.sideTab) ? state.sideTab : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // openSideMenu: () => dispatch(sideTabModule.openSideMenu()),
    // openSideTab: () => dispatch(sideTabModule.openSideTab()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(sideTab);