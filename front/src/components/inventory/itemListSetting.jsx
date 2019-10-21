import React from 'react';
import { ItemListSettingDiv } from '../../style/inventory/itemList';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';

export default class ItemListSetting extends React.Component {

  handleChange() {
    const {
      changeToGridView, changeToListView, itemList,
    } = this.props;
    (itemList.howToDisplay === 'list')
      ? changeToGridView()
      : changeToListView();
  };

  isChecked(key, value) {
    const {
      itemList,
    } = this.props;
    return itemList.editTags.edits.some(item => item[key] === value);
  }

  render() {
    const {
      clearEditTags, changeTileWith, itemList,
      changeList, clearChangeList,
    } = this.props;
    return (
      <ItemListSettingDiv>
        <div>
          <span>
            grid
          <Switch
              value="checkedF"
              color="default"
              onChange={() => this.handleChange()}
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            list
        </span>
          <span>
            on Tile
          <Switch
              value="checkedF"
              color="default"
              onChange={changeTileWith}
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            only image
        </span>
        </div>
        <IconButton
          color="inherit"
          aria-label="refresh"
          onClick={clearEditTags}
        >
          <RefreshIcon />
        </IconButton>
        <div>
          {itemList.editTags.colorList.map(color => (
            <Chip
              label={color}
              onClick={() => (!this.isChecked('color', color))
                ? changeList('color', color)
                : clearChangeList('color', color)}
              color={''}
              clickable={true}
            />
          ))}
        </div>
        {itemList.editTags.list.map(tag => {
          // const isChecked = itemList.editTags.edits.some(tagData => tagData.tag === tag);
          const chipColor = (this.isChecked('tags', tag) ? 'primary' : '');
          return (
            <Chip
              label={tag}
              onClick={() => (!this.isChecked('tags', tag)) ? changeList('tags', tag) : clearChangeList('tags', tag)}
              color={chipColor}
              clickable={true}
            />
          );
        })}
      </ItemListSettingDiv>
    );
  }
}