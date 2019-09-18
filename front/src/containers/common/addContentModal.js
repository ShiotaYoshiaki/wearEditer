import { connect } from 'react-redux';
import * as addContentModule from '../../modules/common/addContentAction';
import addContentModal from '../../components/common/addContentModal';


function mapStateToProps(state) {
  return {
    addContent: (state.addContent) ? state.addContent : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeAddContentModal: () => dispatch(addContentModule.closeAddContentModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addContentModal);