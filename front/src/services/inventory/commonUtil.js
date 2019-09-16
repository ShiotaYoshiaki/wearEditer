



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