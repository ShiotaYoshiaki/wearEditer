import { select, put } from 'redux-saga/effects'
import { COMPLETE_CHANGE_TO_DISPLAY_ITEM_LIST } from '../../constants/actionTypes';
import { getTags, getDisplayList } from './commonUtil';

/**
 * 現在表示中のリストからパラメータで絞り込み
 * @param {object} itemListState
 * @param {string} column 現在はtagのみ対応 stateから取得するキーにする
 * @param {string} tag 絞り込みを行うキー
 */
function refineList(displayList, column, tag) {
  const nextOrder = displayList.map(list => list.itemId);
  return nextOrder;
}

/**
 * 絞り込み中の情報を編集する
 * @param {*} itemListState
 * @param {*} column
 * @param {*} tag
 */
function editTagInfo(displayList, editTags, column, tag) {
  const edits = editTags.edits;
  edits.push({ column, tag });
  const list = getTags(displayList);
  return {
    ...editTags,
    edits,
    list,
  };
}

/**
 * 表示する項目の絞り込みを行う
 * @param {*} action
 */
function* run(action) {
  const state = yield select();
  const itemListState = state.itemList;
  const { list, order, editTags } = itemListState;
  const { column, tag } = action.payload;
  const displayList = getDisplayList(list, order, column, tag);
  yield put({
    type: COMPLETE_CHANGE_TO_DISPLAY_ITEM_LIST,
    payload: {
      order: refineList(displayList, column, tag),
      editTags: editTagInfo(displayList, editTags, column, tag),
    }
  })
}

export { run }


