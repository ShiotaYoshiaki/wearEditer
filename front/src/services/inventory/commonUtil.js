



/**
 * ロードした結果からタグの一覧を取り出す
 * 削除されているタグは含まない
 * @param {array} list アイテムをロードした結果
 * @returns {array} 削除されていないタグ一覧
 */
export function getTags(list) {
    const allTags= [];
    list.forEach(itemData =>{
      itemData.tags.forEach(tagData => {
        if(!tagData.isDeleted) allTags.push(tagData.name);
      });
    });
    const tags = allTags.filter((x, i, self) => self.indexOf(x) === i);
    return tags;
  }