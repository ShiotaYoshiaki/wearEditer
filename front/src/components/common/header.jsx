import React from 'react';
import Account from '../../containers/header/account';
import Setting from '../../containers/header/setting';
import SideTab from '../../containers/header/sideTab';
import Title from '../../containers/header/title'
import { HeaderDiv } from '../../style/common/header';
import { isMobile } from '../../constants/functions';

export default class Header extends React.Component {

  componentWillMount() {
    const { loadAccountInfo } = this.props;
    loadAccountInfo();
  }

  render() {
    const { openSideTab, openSetting, header } = this.props;
    const title = (!isMobile()) ? (<Title />) : "";
    return (
      <HeaderDiv>
        <SideTab />
        <Account />
        <Setting />
        {title}
      </HeaderDiv>
    );
  }
}