import { connect } from 'react-redux';
import * as addContentModule from '../../modules/common/addContentAction';
import * as snackBarActon from '../../modules/common/snackBarActon';
import putTags from '../../components/addContent/putTags';


function mapStateToProps(state) {
  return {
    addContent: (state.addContent) ? state.addContent : {},
    snackBar: state.snackBar,
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
    openSnackBar: (type, message) => dispatch(snackBarActon.openSnackBar(type, message)),
    closeSnackBar: () => dispatch(snackBarActon.closeSnackBar()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(putTags);