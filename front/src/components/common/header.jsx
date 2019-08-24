import React from 'react';
import Account from '../../containers/header/account';
import Setting from '../../containers/header/setting';
import SideTab from '../../containers/header/sideTab';
import Title from '../../containers/header/title'
import { HeaderDiv } from '../../style/common/header';

export default class Header extends React.Component {

  render() {
    const { openSideMenu, openSetting, header } = this.props;
    return (
      <HeaderDiv>
        <SideTab />
        <Account />
        <Setting />
        <Title />
      </HeaderDiv>
    );
  }
}