import { select, put } from 'redux-saga/effects'
import { COMPLETE_LOAD_ITEM_CONTENT_LIST } from '../../constants/actionTypes';
import stubImageList from '../../stub/imageList';
import { getTags } from './commonUtil';


/**
 * 在庫をロード
 * @param {object} action
 */
function* loadItemList(action) {
  const state = yield select();
  const list = stubImageList;
  const order = stubImageList.map(item => item.itemId);
  const tags = getTags(list, 'tags');
  const colorList = getTags(list, 'color');
  const editTags = {
    ...state.itemList.editTags,
    list: tags,
    colorList,
  }
  yield put({
    type: COMPLETE_LOAD_ITEM_CONTENT_LIST,
    payload: {
      list,
      order,
      tags,
      colors: colorList,
      editTags,
    }
  })
}

export { loadItemList }
