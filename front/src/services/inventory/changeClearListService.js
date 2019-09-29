import { select, put } from 'redux-saga/effects'
import { COMPLETE_CLEAR_EDIT_TAG_ITEM_LIST } from '../../constants/actionTypes';
import { getDisplayList, getTags } from './commonUtil';

function clearEdits(editTags, column, tag, list) {
  const edits = editTags.edits.filter(tagData => {
    return tagData.tag !== tag;
  });
  let displayList = [];
  if (Object.keys(edits).length > 0) {
    const order = list.map(item => item.itemId);
    edits.forEach(editData => {
      displayList = getDisplayList(list, order, editData.column, editData.tag);
    });
  } else {
    displayList = list;
  }
  const nextOrder = displayList.map(item => item.itemId);
  const tagList = getTags(displayList);
  return { edits, nextOrder, tagList };
}

/**
 * 絞り込みの設定データを個別削除
 * @param {object} action
 */
function* run(action) {
  const state = yield select();
  const { column, tag } = action.payload;
  const { editTags, list } = state.itemList;
  const { edits, nextOrder, tagList } = clearEdits(editTags, column, tag, list);
  yield put({
    type: COMPLETE_CLEAR_EDIT_TAG_ITEM_LIST,
    payload: {
      editTags: {
        ...editTags,
        edits,
        list: tagList,
      },
      order: nextOrder,
    }
  })
}

export { run }
