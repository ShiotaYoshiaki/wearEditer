import { select, put } from 'redux-saga/effects'
import { COMPLETE_CLEAR_EDIT_TAG_ITEM_LIST } from '../../constants/actionTypes';

function clearEditTags(editTags, tags, colors){
  return {
    ...editTags,
    edits: [],
    list: tags,
    colorList: colors,
  }
}

/**
 * 絞り込み等の編集データを削除
 * @param {object} action
 */
function* run(action) {
  const state = yield select();
  const {editTags, tags, list, colors} = state.itemList;
  yield put({
    type: COMPLETE_CLEAR_EDIT_TAG_ITEM_LIST,
    payload: {
      order: list.map(item => item.itemId),
      editTags: clearEditTags(editTags, tags, colors),
    }
  })
}

export { run }
