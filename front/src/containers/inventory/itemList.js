import { connect } from 'react-redux';
// import * as itemListModule from '../../modules/common/itemListAction';
import itemList from '../../components/inventory/itemList';


function mapStateToProps(state) {
  return {
    itemList: (state.itemList) ? state.itemList : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // openSideMenu: () => dispatch(itemListModule.openSideMenu()),
    // openitemList: () => dispatch(itemListModule.openItem()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(itemList);