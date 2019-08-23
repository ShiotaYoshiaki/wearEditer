import React from 'react';
import { TITLE_NAME } from '../../constants/parameter';
import { TitleDiv } from '../../style/header/header';
import { TitleButton } from '../../style/parts/button';

export default class Counter extends React.Component {

  render() {
    const { openSetting } = this.props;
    return (
      <TitleDiv>
        <TitleButton onClick={openSetting} >
          {TITLE_NAME}
        </TitleButton>
      </TitleDiv>
    );
  }
}