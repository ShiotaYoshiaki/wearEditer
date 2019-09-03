import { connect } from 'react-redux';
import * as editTagModule from '../../modules/common/editTagModalAction';
import editTagModal from '../../components/common/editTagModal';


function mapStateToProps(state) {
  return {
    editTags: (state.editTags) ? state.editTags : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openEditTagModal: param => dispatch(editTagModule.openEditTagModal(param)),
    closeEditTagModal: () => dispatch(editTagModule.closeEditTagModal()),
    taggingRequest: param => dispatch(editTagModule.taggingImage(param)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(editTagModal);