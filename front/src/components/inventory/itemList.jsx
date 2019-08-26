import React from 'react';
import { ItemTable, ItemColumn, ItemTitle, ItemData, ItemContentListDiv } from '../../style/inventory/itemList';
import { HOW_TO_DISPLAY, LOADING, ITEM_COLUMN } from '../../constants/parameter';
import DetailModal from '../../containers/inventory/detailModal';
import ItemListSetting from '../../containers/inventory/itemListSetting';
import image from '../../stub/image/kamakura.JPG';
import { ItemListImg, ItemGridImg, GridDisplayImg } from '../../style/parts/img';
import gridSVG from '../../style/image/grid.svg';
import listSVG from '../../style/image/list.svg';
import { isMobile } from '../../constants/functions';

export default class ItemList extends React.Component {

  componentWillMount() {
    const { loadImageContentList } = this.props;
    loadImageContentList();
  }

  createItemList() {
    const { openItemDetailModal, itemList } = this.props;
    const contentList = itemList.order.map(id => {
      const current = itemList.list.find(item => item.itemId === id);
      const { isPublic, tag, data, shop, itemId } = current;
      const publicRange = (isPublic) ? '公開する' : '公開しない';
      return (
        <ItemColumn onClick={() => openItemDetailModal(itemId)} >
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

  createItemGrid() {
    const { openItemDetailModal, itemList } = this.props;
    const contentList = itemList.order.map(id => {
      const current = itemList.list.find(item => item.itemId === id);
      return (
        <ItemGridImg
          src={image} alt=""
          onClick={() => openItemDetailModal(current.itemId)}
        />
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
              <ItemTitle>{ITEM_COLUMN.IMAGE}</ItemTitle>
              <ItemTitle >{ITEM_COLUMN.TAG}</ItemTitle>
              <ItemTitle >{ITEM_COLUMN.SHOP_NAME}</ItemTitle>
              <ItemTitle >{ITEM_COLUMN.ITEM_URL}</ItemTitle>
              <ItemTitle >{ITEM_COLUMN.PUBLIC_RANGE}</ItemTitle>
            </ItemColumn>
            {this.createItemList()}
          </ItemTable>
        );
      case HOW_TO_DISPLAY.GRID:
        return (
          <ItemTable >
            <ItemColumn >
              <ItemTitle>image</ItemTitle>
            </ItemColumn>
            {this.createItemGrid()}
          </ItemTable>
        );
      default:
        return "";
    };
  }

  render() {
    const { changeToGridView, changeToListView, itemList } = this.props;
    if (!itemList.list) return LOADING.S;
    return (
      <div>
        <ItemListSetting />
        <div>
          <button onClick={changeToGridView}>
            <GridDisplayImg src={gridSVG} al="" />
          </button>
          <button onClick={changeToListView}>
            <GridDisplayImg src={listSVG} al="" />
          </button>
        </div>
        <ItemContentListDiv>
          {this.createContents()}
        </ItemContentListDiv>
        <DetailModal />
      </div>
    );
  }
}