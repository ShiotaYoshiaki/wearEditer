import React from 'react';
import SideTabButton from '../../containers/header/sideTab';
import { SideTabDiv } from '../../style/common/sideTab';
import { MENU } from '../../constants/parameter';
import { SideMenuPageButton } from '../../style/parts/button';

export default class SideTab extends React.Component {

  render() {
    const { sideTab, movePage} = this.props;
    if (!sideTab.isOpen) return "";
    return (
      <SideTabDiv>
        {/* <SideTabButton /> */}
        <SideMenuPageButton onClick={() => movePage(MENU.TOP)}>
          {MENU.TOP}
        </SideMenuPageButton>
        <SideMenuPageButton onClick={() => movePage(MENU.INVENTORY)}>
          {MENU.INVENTORY}
        </SideMenuPageButton>
        <SideMenuPageButton onClick={() => movePage(MENU.AUTO_COORDINATE)}>
          {MENU.AUTO_COORDINATE}
        </SideMenuPageButton>
        <SideMenuPageButton onClick={() => movePage(MENU.HISTORY)}>
          {MENU.HISTORY}
        </SideMenuPageButton>
        <SideMenuPageButton onClick={() => movePage(MENU.MY_BAR_CODE)}>
          {MENU.MY_BAR_CODE}
        </SideMenuPageButton>
      </SideTabDiv>
    );
  }
}