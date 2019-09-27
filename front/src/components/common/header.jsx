import React from 'react';
import Account from '../../containers/header/account';
import Setting from '../../containers/header/setting';
import SideTab from '../../containers/header/sideTab';
import AddContent from '../../containers/header/addContent';
import Title from '../../containers/header/title'
import { HeaderDiv, StyleBottomHeader } from '../../style/common/header';
import { isMobile } from '../../constants/functions';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { withStyles } from '@material-ui/core';
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
          <BottomNavigationAction label="Account" value={MENU.DASHBOARD} icon={<AccountCircleIcon />}/>
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
