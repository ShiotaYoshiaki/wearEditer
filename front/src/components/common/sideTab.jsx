import React from 'react';
import SideTabButton from '../../containers/header/sideTab';
import { SideTabDiv, SideMenuDiv } from '../../style/common/sideTab';
import { MENU } from '../../constants/parameter';

export default class SideTab extends React.Component {

  render() {
    const { sideTab, openSideTab, closeSideTab } = this.props;
    if (!sideTab.isOpen) return "";
    return (
      <SideTabDiv>
        <SideTabButton />
        <SideMenuDiv>
          {MENU.TOP}
        </SideMenuDiv>
        <SideMenuDiv>
          {MENU.INVENTORY}
        </SideMenuDiv>
        <SideMenuDiv>
          {MENU.AUTO_COORDINATE}
        </SideMenuDiv>
        <SideMenuDiv>
          {MENU.HISTORY}
        </SideMenuDiv>
        <SideMenuDiv>
          {MENU.MY_BAR_CODE}
        </SideMenuDiv>
      </SideTabDiv>
    );
  }
}