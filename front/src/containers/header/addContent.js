import { connect } from 'react-redux';
import addContent from '../../components/header/addContent';
import * as addContentModule from '../../modules/common/addContentAction';
import * as historyModule from '../../modules/common/historyAction';


function mapStateToProps(state) {
  return {
    addContent: (state.addContent) ? state.addContent : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    movePage: (page) => dispatch(historyModule.movePage(page)),
    openAddContentModal: () => dispatch(addContentModule.openAddContentModal()),
    closeAddContentModal: () => dispatch(addContentModule.closeAddContentModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addContent);