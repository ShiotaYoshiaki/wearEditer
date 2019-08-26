import { connect } from 'react-redux';
// import * as titleModule from '../../modules/common/titleAction';
import title from '../../components/header/title';
import * as historyModule from '../../modules/common/historyAction';


function mapStateToProps(state) {
  return {
    title: (state.title) ? state.title : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    movePage: (page) => dispatch(historyModule.movePage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(title);