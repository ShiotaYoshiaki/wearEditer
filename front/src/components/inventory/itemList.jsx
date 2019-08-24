import React from 'react';
import { ItemTable, ItemColumn, ItemTitle, ItemData, ItemContentList } from '../../style/inventory/itemList';
import { HOW_TO_DISPLAY } from '../../constants/parameter';
import image from '../../stub/image/kamakura.JPG';
import { ItemListImg } from '../../style/parts/img';

export default class ItemList extends React.Component {

  componentWillMount() {
    const { loadImageContentList } = this.props;
    console.log('==============componentWillMount');
    loadImageContentList();
  }

  createItemList(itemList) {
    console.log('------createItemList-------itemList'); console.log(itemList);
    if (itemList.itemList) {
      const contentList = itemList.itemList.map(item => {
        const { isPublic, tag, data, shop } = item;
        const publicRange = (isPublic) ? '公開する': '公開しない';
        console.log('-------------item'); console.log(item);
        return (
          <ItemColumn >
            <ItemData>
              <ItemListImg src={image} alt="" />
            </ItemData>
            <ItemData >{tag}</ItemData>
            <ItemData >{shop.name}</ItemData>
            <ItemData >{shop.url}</ItemData>
            <ItemData >{publicRange}</ItemData>
          </ItemColumn>
        );
      });
      return contentList;
    }
  }

  render() {
    const { changeToGridView, changeToListView, itemList } = this.props;
    console.log('-------------itemList'); console.log(itemList);
    return (
      <div>
        <div>
          <input type="radio" name="howToDisplay" onClick={changeToGridView} /> {HOW_TO_DISPLAY.GRID}
          <input type="radio" name="howToDisplay" onClick={changeToListView} /> {HOW_TO_DISPLAY.LIST}
        </div>
        <ItemContentList>
          <ItemTable >
            <ItemColumn >
              <ItemTitle>image</ItemTitle>
              <ItemTitle >parts</ItemTitle>
              <ItemTitle >shop name</ItemTitle>
              <ItemTitle >shop url</ItemTitle>
              <ItemTitle >公開範囲</ItemTitle>
            </ItemColumn>
            {this.createItemList(itemList)}
          </ItemTable>
        </ItemContentList>
      </div>
    );
  }
}