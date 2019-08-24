import React from 'react';
import defaultAccountImage from '../../style/image/defaultAccount.svg';
import { HeaderAccountImg } from '../../style/parts/img';
import { HeaderAccountDiv, HeaderAccountNameDiv } from '../../style/common/header';
import { HeaderAccountButton } from '../../style/parts/button';

export default class Account extends React.Component {

  render() {
    const { openAccount, account } = this.props;
    return (
      <HeaderAccountDiv>
        <HeaderAccountButton onClick={openAccount} >
          <HeaderAccountImg src={defaultAccountImage} />
          <HeaderAccountNameDiv>
            {account.basic.account_name}
          </HeaderAccountNameDiv>
        </HeaderAccountButton>
      </HeaderAccountDiv>
    );
  }
}