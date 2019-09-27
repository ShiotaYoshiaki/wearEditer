import { connect } from 'react-redux';
import * as addContentModule from '../../modules/common/addContentAction';
import imageInput from '../../components/addContent/imageInput';


function mapStateToProps(state) {
  return {
    addContent: (state.addContent) ? state.addContent : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    set: item => dispatch(addContentModule.setAddContentModal(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(imageInput);