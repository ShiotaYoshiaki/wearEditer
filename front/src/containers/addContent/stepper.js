import { connect } from 'react-redux';
import * as addContentModule from '../../modules/common/addContentAction';
import stepper from '../../components/addContent/stepper';


function mapStateToProps(state) {
  return {
    addContent: (state.addContent) ? state.addContent : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeAddContentModal: () => dispatch(addContentModule.closeAddContentModal()),
    moveAddContentModal: step => dispatch(addContentModule.moveAddContentModal(step)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(stepper);