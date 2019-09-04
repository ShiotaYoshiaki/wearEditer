import React from 'react';
import { TITLE_NAME, MENU } from '../../constants/parameter';
import { TitleDiv } from '../../style/header/header';
import { TitleButton } from '../../style/parts/button';
import { isMobile } from '../../constants/functions';
import { HeaderHomeImg } from '../../style/parts/img';
import homeImage from '../../style/image/home.svg';

export default class Title extends React.Component {

  render() {
    const { movePage } = this.props;
    const content = (!isMobile()) ? (
      <TitleButton onClick={() => movePage(MENU.TOP)} >
        {TITLE_NAME}
      </TitleButton>
    ) : (
        <TitleButton onClick={() => movePage(MENU.TOP)}>
          <HeaderHomeImg src={homeImage} />
        </TitleButton>
      )
    return (
      <TitleDiv>
        {content}
      </TitleDiv>
    );
  }
}