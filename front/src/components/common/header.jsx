import React from 'react';
import Account from '../../containers/header/account';
import Setting from '../../containers/header/setting';
import SideTab from '../../containers/header/sideTab';
import AddContent from '../../containers/header/addContent';
import Title from '../../containers/header/title'
import { HeaderDiv, StyleBottomHeader } from '../../style/common/header';
import { isMobile } from '../../constants/functions';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { GridListTile, withStyles, GridListTileBar } from '@material-ui/core';
import sideMenuImage from '../../style/image/sideMenu.svg';
import closeImage from '../../style/image/close.svg';

class Header extends React.Component {

  componentWillMount() {
    const { loadAccountInfo } = this.props;
    loadAccountInfo();
  }

  handleChange(event, newValue) {
    console.log('-------------event');console.log(event);
    console.log('-------------newValue');console.log(newValue);
  }

  render() {

    const { classes } = this.props;

    if (isMobile()) {
      return (
        <BottomNavigation value={'sample'} onChange={this.handleChange} className={classes.root}>
          <BottomNavigationAction label="menu" value="menu" icon={<SideTab />} />
          <BottomNavigationAction label="Account" value="account" icon={<AddContent />} />
          <BottomNavigationAction label="Setting" value="setting" icon={<Account />} />
          <BottomNavigationAction label="Add Item" value="addItem" icon={<Setting />} />
        </BottomNavigation>
      );
    }
    return (
      <HeaderDiv>
        <Title />
        <SideTab />
        <Account />
        <Setting />
        <AddContent />
      </HeaderDiv>
    );
  }
}

export default withStyles(StyleBottomHeader)(Header)
