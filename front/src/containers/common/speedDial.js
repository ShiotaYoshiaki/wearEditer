import { connect } from 'react-redux';
import * as addContentModule from '../../modules/common/addContentAction';
import speedDial from '../../components/common/speedDial';


function mapStateToProps(state) {
  return {
    addContent: (state.addContent) ? state.addContent : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openAddContentModal: () => dispatch(addContentModule.openAddContentModal()),
    closeAddContentModal: () => dispatch(addContentModule.closeAddContentModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(speedDial);