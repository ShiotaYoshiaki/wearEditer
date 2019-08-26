import React from 'react';
import { ItemContentListDiv, ItemListSettingDiv } from '../../style/inventory/itemList';
import { LOADING, ITEM_COLUMN } from '../../constants/parameter';
import DetailModal from '../../containers/inventory/detailModal';
import { GridDisplayImg } from '../../style/parts/img';
import gridSVG from '../../style/image/grid.svg';
import listSVG from '../../style/image/list.svg';
import { isMobile } from '../../constants/functions';
import { SettingButton } from '../../style/parts/button';

export default class ItemList extends React.Component {

  render() {
    const { changeToGridView, changeToListView, itemList } = this.props;
    if (!itemList.list) return LOADING.S;
    return (
      <ItemListSettingDiv>
        <SettingButton>
          {ITEM_COLUMN.IMAGE}
        </SettingButton>
        <SettingButton>
          {ITEM_COLUMN.TAG}
        </SettingButton>
        <SettingButton>
          {ITEM_COLUMN.SHOP_NAME}
        </SettingButton>
        <SettingButton>
          {ITEM_COLUMN.ITEM_URL}
        </SettingButton>
        <SettingButton>
          {ITEM_COLUMN.PUBLIC_RANGE}
        </SettingButton>
      </ItemListSettingDiv>
    );
  }
}