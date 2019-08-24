import { connect } from 'react-redux';
import * as itemListAction from '../../modules/inventory/itemListAction';
import itemList from '../../components/inventory/itemList';


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
    // openSideTab: () => dispatch(itemListAction.openSideTab()),
    // openitemList: () => dispatch(itemListAction.openItem()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(itemList);