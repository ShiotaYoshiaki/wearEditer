import { connect } from 'react-redux';
import * as itemListAction from '../../modules/inventory/itemListAction';
import detailModal from '../../components/inventory/detailModal';


function mapStateToProps(state) {
  return {
    itemList: (state.itemList) ? state.itemList : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeItemDetailModal: () => dispatch(itemListAction.closeItemDetailModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(detailModal);