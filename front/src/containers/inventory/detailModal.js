import { connect } from 'react-redux';
import * as itemListAction from '../../modules/inventory/itemListAction';
import * as editTagModule from '../../modules/common/editTagModalAction';
import detailModal from '../../components/inventory/detailModal';


function mapStateToProps(state) {
  return {
    itemList: (state.itemList) ? state.itemList : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeItemDetailModal: () => dispatch(itemListAction.closeItemDetailModal()),
    openEditTagModal: param => dispatch(editTagModule.openEditTagModal(param)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(detailModal);