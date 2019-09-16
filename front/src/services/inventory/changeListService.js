import { select, put } from 'redux-saga/effects'
import { COMPLETE_CHANGE_TO_DISPLAY_ITEM_LIST } from '../../constants/actionTypes';

function refineList(itemListState, column, tag) {
  const { list, order } = itemListState;
  const currentList = list.filter(item =>
    order.some(itemId => itemId === item.itemId));
  console.log('------------currentList-'); console.log(currentList);
  const displayList = currentList.filter(item => {
    return item[column].some(tagData => {
      return tagData.name === tag;
    });
  });
  const nextOrder = displayList.map(list => list.itemId);
  return nextOrder;
}

/**
 * 表示する項目の絞り込みを行う
 * @param {*} action
 */
function* run(action) {
  const state = yield select();
  const itemListState = state.itemList;
  const { column, tag } = action.payload;
  const order = refineList(itemListState, column, tag);
  yield put({
    type: COMPLETE_CHANGE_TO_DISPLAY_ITEM_LIST,
    payload: {
      order,
    }
  })
}

export { run }


