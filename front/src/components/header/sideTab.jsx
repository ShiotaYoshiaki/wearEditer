import React from 'react';
import sideMenuImage from '../../style/image/sideMenu.svg';
import closeImage from '../../style/image/close.svg';
import { HeaderSideTavDiv } from '../../style/common/sideTab';
import { HeaderSideTabButton } from '../../style/parts/button';
import { HeaderSideTabImg } from '../../style/parts/img';

export default class SideTab extends React.Component {

  createSideButton() {
    const { openSideTab, closeSideTab, sideTab } = this.props;
    if (!sideTab.isOpen) {
      return (
        <HeaderSideTabButton onClick={openSideTab} >
          <HeaderSideTabImg src={sideMenuImage} />
        </HeaderSideTabButton>
      );
    } else {
      return (
        <HeaderSideTabButton onClick={closeSideTab} >
          <HeaderSideTabImg src={closeImage} />
        </HeaderSideTabButton>
      )
    }
  }

  render() {
    return (
      <HeaderSideTavDiv>
        {this.createSideButton()}
      </HeaderSideTavDiv>
    );
  }
}