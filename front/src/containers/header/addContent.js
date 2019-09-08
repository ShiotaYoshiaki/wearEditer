import { connect } from 'react-redux';
// import * as addContentModule from '../../modules/common/addContentAction';
import addContent from '../../components/header/addContent';
import * as editTagModule from '../../modules/common/editTagModalAction';
import * as historyModule from '../../modules/common/historyAction';


function mapStateToProps(state) {
  return {
    addContent: (state.addContent) ? state.addContent : {},
    editTags: (state.editTags) ? state.editTags : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    movePage: (page) => dispatch(historyModule.movePage(page)),
    openEditTagModal: param => dispatch(editTagModule.openEditTagModal(param)),
    closeEditTagModal: () => dispatch(editTagModule.closeEditTagModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addContent);