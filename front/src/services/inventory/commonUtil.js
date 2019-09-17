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
export function getTags(list) {
    const allTags = [];
    list.forEach(itemData => {
        itemData.tags.forEach(tagData => {
            if (!tagData.isDeleted) allTags.push(tagData.name);
        });
    });
    const tags = allTags.filter((x, i, self) => self.indexOf(x) === i);
    tags.sort(stringSort);
    return tags;
}

/**
 * パラメータでリストを絞り込む
 * @param {array} list 編集したいlist
 * @param {array} order 編集中のitemIdの配列
 * @param {*} column パラメータ
 * @param {*} tag パラメータ
 */
export function getDisplayList(list, order, column, tag) {
    const currentList = list.filter(item =>
        order.some(itemId => itemId === item.itemId));
    const displayList = currentList.filter(item => {
        return item[column].some(tagData => {
            return tagData.name === tag;
        });
    });
    return displayList;
}