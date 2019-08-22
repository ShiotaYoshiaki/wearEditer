import React from 'react';
import Account from '../../containers/header/account';
import Setting from '../../containers/header/setting';
import SideTab from '../../containers/header/sideTab';

export default class Counter extends React.Component {

  render() {
    const { openSideMenu, openSetting, header } = this.props;
    return (
      <div>
        <SideTab />
        <Account />
        <Setting />
      </div>
    );
  }
}