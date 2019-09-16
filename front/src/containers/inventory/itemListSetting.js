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
    changeList: (column, tag) => dispatch(itemListAction.changeToDisplayItemList(column, tag)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(itemListSetting);