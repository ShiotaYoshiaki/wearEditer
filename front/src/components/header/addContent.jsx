import React from 'react';
import xImage from '../../style/image/Xmark.svg';
import { AddContentDiv } from '../../style/common/addContent';
import { AddContentImg, CloseContentImg } from '../../style/parts/img';
import { AddContentButton } from '../../style/parts/button';


export default class SideTab extends React.Component {

  createModalContent() {
    const { openAddContentModal, closeAddContentModal, addContent } = this.props;
    switch (addContent.isOpen) {
      case true:
        return (
          <AddContentButton onClick={closeAddContentModal} >
            <CloseContentImg src={xImage} />
          </AddContentButton>
        );
      case false:
        return (
          <AddContentButton onClick={openAddContentModal} >
            <AddContentImg src={xImage} />
          </AddContentButton>
        );
      default:
        return '';
    }
  }

  render() {
    return (
      <AddContentDiv>
        {this.createModalContent()}
      </AddContentDiv>
    );
  }
}