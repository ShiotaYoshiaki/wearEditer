import { select } from 'redux-saga/effects'

/**
 * 文字列のソートを行う
 * 大文字、小文字問わない
 * @param {*} a
 * @param {*} b
 */
export function stringSort(a, b) {
  a = a.toString().toLowerCase();
  b = b.toString().toLowerCase();
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

/**
 * ロードした結果からタグの一覧を取り出す
 * 削除されているタグは含まない
 * @param {array} list アイテムをロードした結果
 * @returns {array} 削除されていないタグ一覧
 */
export function getTags(list, key) {
  const allTags = [];
  list.forEach(itemData => {
    if (typeof itemData[key] === 'object') {
      itemData[key].forEach(item => {
        if (!item.isDeleted) allTags.push(item.name);
      });
    } else {
      allTags.push(itemData[key]);
    }
  });
    const items = allTags.filter((x, i, self) => self.indexOf(x) === i);
    items.sort(stringSort);
  return items;
}

/**
 * パラメータでリストを絞り込む
 * @param {Array<Object>} list 編集したいlist
 * @param {Array<string>} order 編集中のitemIdの配列
 * @param {*} column パラメータ
 * @param {*} tag パラメータ
 */
export function getDisplayList(list, order, column, tag) {
  const currentList = list.filter(item =>
    order.some(itemId => itemId === item.itemId));
  const displayList = currentList.filter(item => {
    if (typeof item[column] === 'object') {
      return item[column].some(tagData => {
        return tagData.name === tag;
      });
    }
    return item[column] === tag;
  });
  return displayList;
}