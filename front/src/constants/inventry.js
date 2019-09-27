import { select } from 'redux-saga/effects'

/**
 * itemListのstate.listからアイテムの配列を取得する
 * @param {string} item listの取得したいキー
 */
export function* getTargetInventoryList(item) {
  const state = yield select();
  const { list } = state.itemList;
  const itemList = list.map(data => data[item])
  return itemList;
}
