import { connect } from 'react-redux';
// import * as titleModule from '../../modules/common/titleAction';
import title from '../../components/header/title';


function mapStateToProps(state) {
  return {
    title: (state.title) ? state.title : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // openSideTab: () => dispatch(titleModule.openSideTab()),
    // openTitle: () => dispatch(titleModule.openTitle()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(title);