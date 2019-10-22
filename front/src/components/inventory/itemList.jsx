import React from 'react';
import GridList from '@material-ui/core/GridList';
import Divider from '@material-ui/core/Divider';
import { ItemTable, ItemColumn, ItemTitle, ItemData, ItemContentListDiv } from '../../style/inventory/itemList';
import { HOW_TO_DISPLAY, LOADING, ITEM_COLUMN } from '../../constants/parameter';
import DetailModal from '../../containers/inventory/detailModal';
import image from '../../stub/image/kamakura.JPG';
import { ItemListImg } from '../../style/parts/img';
import { GridListTile, withStyles, GridListTileBar } from '@material-ui/core';
import ItemListSetting from '../../containers/inventory/itemListSetting';

const useStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingTop: '10px',
  },
  chipRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  gridList: {
    width: 500,
  },
};

class ItemList extends React.Component {
  componentWillMount() {
    const { loadImageContentList, itemList } = this.props;
    if (itemList.list.length === 0) loadImageContentList();
  }

  createItemList() {
    const { openItemDetailModal, itemList } = this.props;
    const contentList = itemList.order.map(id => {
      const current = itemList.list.find(item => item.itemId === id);
      const { isPublic, part, shop, itemId } = current;
      const publicRange = (isPublic) ? '公開する' : '公開しない';
      return (
        <ItemColumn onClick={() => openItemDetailModal(itemId)} >
          <ItemData>
            <ItemListImg src={image} alt="" />
          </ItemData>
          <ItemData >{part}</ItemData>
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
        <GridListTile key={image} cols={1}>
          <img src={image} alt='sample' onClick={() => openItemDetailModal(current.itemId)} />
          {itemList.onTile ? (
            <GridListTileBar
              title={current.part}
              subtitle={<span>by: {current.shop.name}</span>}
            />
          ) : null}
        </GridListTile>
      );
    });
    return contentList;
  }

  createContents() {
    const { itemList, classes } = this.props;
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
            <Divider />
            <div className={classes.root}>
              <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {this.createItemGrid()}
              </GridList>
            </div>
          </ItemTable>
        );
      default:
        return "";
    };
  }

  render() {
    const {
      itemList,
    } = this.props;
    if (!itemList.list) return LOADING.S;
    return (
      <div style={{ paddingTop: '35px' }}>
        <ItemListSetting />
        <ItemContentListDiv>
          {this.createContents()}
        </ItemContentListDiv>
        <DetailModal />
      </div >
    );
  }
}

export default withStyles(useStyles)(ItemList)