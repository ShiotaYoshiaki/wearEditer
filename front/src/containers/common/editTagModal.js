import { connect } from 'react-redux';
import * as editTagModule from '../../modules/common/editTagModalAction';
import header from '../../components/common/header';


function mapStateToProps(state) {
  return {
    header: (state.header) ? state.header : {},
    account: (state.header) ? state.account : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openEditTagModal: param => dispatch(editTagModule.openEditTagModal(param)),
    closeEditTagModal: () => dispatch(editTagModule.closeEditTagModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(header);