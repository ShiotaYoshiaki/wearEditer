import React from 'react';
import defaultAccountImage from '../../style/image/defaultAccount.svg';

export default class Account extends React.Component {

  render() {
    const { openAccount, account } = this.props;
    return (
      <div style={{ position: "absolute", right: "100px" }}>
        <button onClick={openAccount} >
          <img src={defaultAccountImage} style={{ width: "40px", height: "40px" }} />
          {account.account_name}
        </button>
      </div>
    );
  }
}