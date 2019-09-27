import { connect } from 'react-redux';
import * as itemListAction from '../../modules/inventory/itemListAction';
import itemListSetting from '../../components/inventory/itemListSetting';


function mapStateToProps(state) {
  return {
    itemList: (state.itemList) ? state.itemList : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeToListView: () => dispatch(itemListAction.changeToListView()),
    changeToGridView: () => dispatch(itemListAction.changeToGridView()),
    loadImageContentList: () => dispatch(itemListAction.loadImageContentList()),
    openItemDetailModal: (itemId) => dispatch(itemListAction.openItemDetailModal(itemId)),
    changeList: (column, tag) => dispatch(itemListAction.changeToDisplayItemList(column, tag)),
    clearEditTags: () => dispatch(itemListAction.clearEditTags()),
    clearChangeList: (column, tag) => dispatch(itemListAction.clearChangeList(column, tag)),
    changeTileWith: () => dispatch(itemListAction.changeTileWith()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(itemListSetting);