import React from 'react';
import { ItemTable, ItemColumn, ItemTitle, ItemData, ItemContentListDiv } from '../../style/inventory/itemList';
import { HOW_TO_DISPLAY } from '../../constants/parameter';
import image from '../../stub/image/kamakura.JPG';
import { ItemListImg, ItemGridImg, GridDisplayImg } from '../../style/parts/img';
import gridSVG from '../../style/image/grid.svg';
import listSVG from '../../style/image/list.svg';

export default class ItemList extends React.Component {

  componentWillMount() {
    const { loadImageContentList } = this.props;
    console.log('==============componentWillMount');
    loadImageContentList();
  }

  createItemList(itemList) {
    const contentList = itemList.itemList.map(item => {
      const { isPublic, tag, data, shop } = item;
      const publicRange = (isPublic) ? '公開する' : '公開しない';
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

  createItemGrid(itemList) {
    const contentList = itemList.itemList.map(item => {
      const { isPublic, tag, data, shop } = item;
      const publicRange = (isPublic) ? '公開する' : '公開しない';
      return (
        <ItemGridImg src={image} alt="" />
      );
    });
    return contentList;
  }

  createContents() {
    const { itemList } = this.props;
    switch (itemList.howToDisplay) {
      case HOW_TO_DISPLAY.LIST:
        return (
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
        );
      case HOW_TO_DISPLAY.GRID:
        return (
          <ItemTable >
            <ItemColumn >
              <ItemTitle>image</ItemTitle>
            </ItemColumn>
            {this.createItemGrid(itemList)}
          </ItemTable>
        );
      default:
        return "";
    };
  }

  render() {
    const { changeToGridView, changeToListView, itemList } = this.props;
    console.log('-------------itemList'); console.log(itemList);
    if (!itemList.itemList) return 'loading';
    return (
      <div>
        <div>
          <button onClick={changeToGridView}>
            <GridDisplayImg src={gridSVG} al="" />
          </button>
          <button onClick={changeToListView}>
            <GridDisplayImg src={listSVG} al="" />
          </button>
        </div>
        <ItemContentListDiv>
          {this.createContents(itemList)}

        </ItemContentListDiv>
      </div>
    );
  }
}