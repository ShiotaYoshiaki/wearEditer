import { select, put } from 'redux-saga/effects'
import { COMPLETE_LOAD_ITEM_CONTENT_LIST } from '../../constants/actionTypes';
import stubImageList from '../../stub/imageList';


/**
 * ロードした結果からタグの一覧を取り出す
 * 削除されているタグは含まない
 * @param {array} list アイテムをロードした結果
 * @returns {array} 削除されていないタグ一覧
 */
function getTags(list) {
  const allTags= [];
  list.forEach(itemData =>{
    itemData.tags.forEach(tagData => {
      if(!tagData.isDeleted) allTags.push(tagData.name);
    });
  });
  const tags = allTags.filter((x, i, self) => self.indexOf(x) === i);
  return tags;
}

/**
 * 在庫をロード
 * @param {object} action
 */
function* loadItemList(action) {
  const list = stubImageList;
  const order = stubImageList.map(item => item.itemId);
  const tags = getTags(list);
  yield put({
    type: COMPLETE_LOAD_ITEM_CONTENT_LIST,
    payload: {
      list,
      order,
      tags,
    }
  })
}

export { loadItemList }

