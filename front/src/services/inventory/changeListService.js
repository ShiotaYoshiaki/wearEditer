import { select, put } from 'redux-saga/effects'
import { COMPLETE_CHANGE_TO_DISPLAY_ITEM_LIST } from '../../constants/actionTypes';

function refineList(list, column, tag) {
  const displayList = list.filter(item => {
    return item[column].some(tagData => {
      return tagData.name === tag;
    });
  });
  const order = displayList.map(list => list.itemId);
  return order;
}

/**
 * 表示する項目の絞り込みを行う
 * @param {*} action
 */
function* run(action) {
  const state = yield select();
  const itemListState = state.itemList;
  const { list } = itemListState;
  const { column, tag } = action.payload;
  const order = refineList(list, column, tag);
  yield put({
    type: COMPLETE_CHANGE_TO_DISPLAY_ITEM_LIST,
    payload: {
      order,
    }
  })
}

export { run }


