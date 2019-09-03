import React from 'react';
import xImage from '../../style/image/Xmark.svg';
import closeImage from '../../style/image/close.svg';
import { HeaderSideTavDiv } from '../../style/common/sideTab';
import { AddContentDiv } from '../../style/common/addContent';
import { AddContentImg } from '../../style/parts/img';
import { AddContentButton } from '../../style/parts/button';


export default class SideTab extends React.Component {
  render() {
    const { openEditTagModal } = this.props;
    return (
      <AddContentDiv>
        <AddContentButton onClick={openEditTagModal} >
          <AddContentImg src={xImage} />
        </AddContentButton>
      </AddContentDiv>
    );
  }
}