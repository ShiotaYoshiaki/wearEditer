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
import MenuIcon from '@material-ui/icons/Menu';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { GridListTile, withStyles, GridListTileBar } from '@material-ui/core';
import sideMenuImage from '../../style/image/sideMenu.svg';
import homeImage from '../../style/image/home.svg';
import closeImage from '../../style/image/close.svg';
import { HeaderSideTabImg, HeaderHomeImg } from '../../style/parts/img';
import { MENU } from '../../constants/parameter';

class Header extends React.Component {

  componentWillMount() {
    const { loadAccountInfo } = this.props;
    loadAccountInfo();
  }

  render() {

    const { classes, movePage } = this.props;

    function handleChange(event, newValue) {
      movePage(newValue);
    }

    if (isMobile()) {
      return (
        <BottomNavigation value={'sample'} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="menu" value="menu" icon={<MenuIcon />} />
          <BottomNavigationAction label="Top" value={MENU.TOP} icon={<HomeIcon />} />
          <BottomNavigationAction label="Account" value="account" icon={<AccountCircleIcon />}/>
          <BottomNavigationAction label="Item List" value={MENU.ITEM_LIST} icon={<ViewComfyIcon />}/>
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
