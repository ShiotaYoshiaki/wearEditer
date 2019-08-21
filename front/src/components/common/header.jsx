import React from 'react';
import Account from '../../containers/common/account';
import Setting from '../../containers/common/setting';
import SideTab from '../../containers/common/sideTab';

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