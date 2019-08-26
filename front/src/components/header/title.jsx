import React from 'react';
import { TITLE_NAME, MENU } from '../../constants/parameter';
import { TitleDiv } from '../../style/header/header';
import { TitleButton } from '../../style/parts/button';

export default class Title extends React.Component {

  render() {
    const { movePage } = this.props;
    return (
      <TitleDiv>
        <TitleButton onClick={() => movePage(MENU.TOP)} >
          {TITLE_NAME}
        </TitleButton>
      </TitleDiv>
    );
  }
}