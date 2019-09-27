import React from 'react';
import { ItemListSettingDiv } from '../../style/inventory/itemList';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';
import { getTargetInventoryList } from '../../constants/inventry';

export default class ItemListSetting extends React.Component {

  handleChange() {
    const {
      changeToGridView, changeToListView, itemList,
    } = this.props;
    (itemList.howToDisplay === 'list')
      ? changeToGridView()
      : changeToListView();
  };

  createItemList() {
    const {
      itemList, changeList, clearChangeList,
    } = this.props;
    const targetList = getTargetInventoryList('color');
    const colorList = targetList.map(color => {
      const isChecked = colorList.editTags.edits.some(tagData => tagData.tag === color);
      const chipColor = (isChecked ? 'primary' : '');
      return (
        <Chip
          label={item}
          onClick={() => (!isChecked) ? changeList('tags', color) : clearChangeList('tags', color)}
          color={chipColor}
          clickable={true}
        />
      );
    })
  }

  createTagList() {
    const {
      itemList, changeList, clearChangeList,
    } = this.props;
    const tagList = itemList.editTags.list.map(tag => {
      const isChecked = itemList.editTags.edits.some(tagData => tagData.tag === tag);
      const chipColor = (isChecked ? 'primary' : '');
      return (
        <Chip
          label={tag}
          onClick={() => (!isChecked) ? changeList('tags', tag) : clearChangeList('tags', tag)}
          color={chipColor}
          clickable={true}
        />
      );
    });
    return tagList;
  }

  render() {
    const {
      clearEditTags, changeTileWith,
    } = this.props;
    return (
      <ItemListSettingDiv>
        <div>
          grid
          <Switch
            value="checkedF"
            color="default"
            onChange={() => this.handleChange()}
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
          list
        </div>
        <div>
          on Tile
          <Switch
            value="checkedF"
            color="default"
            onChange={changeTileWith}
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
          only image
        </div>
        <IconButton
          color="inherit"
          aria-label="refresh"
          onClick={clearEditTags}
        >
          <RefreshIcon />
        </IconButton>
        {this.createTagList()}
      </ItemListSettingDiv>
    );
  }
}