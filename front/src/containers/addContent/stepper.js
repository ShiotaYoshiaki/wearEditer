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
    close: () => dispatch(addContentModule.closeAddContentModal()),
    moveAddContentModal: step => dispatch(addContentModule.moveAddContentModal(step)),
    changeTagName: name => dispatch(addContentModule.changeTagNameAddContentModal(name)),
    crateTag: () => dispatch(addContentModule.createTagAddContentModal()),
    deleteTag: tag => dispatch(addContentModule.deleteTagAddContentModal(tag)),
    set: item => dispatch(addContentModule.setAddContentModal(item)),
    recognition: () => dispatch(addContentModule.recognition()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(stepper);