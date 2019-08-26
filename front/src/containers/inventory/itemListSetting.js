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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(itemListSetting);