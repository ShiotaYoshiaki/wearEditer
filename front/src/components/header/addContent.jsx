import React from 'react';
import xImage from '../../style/image/Xmark.svg';
import closeImage from '../../style/image/close.svg';
import { HeaderSideTavDiv } from '../../style/common/sideTab';
import { AddContentDiv } from '../../style/common/addContent';
import { AddContentImg, CloseContentImg } from '../../style/parts/img';
import { AddContentButton } from '../../style/parts/button';


export default class SideTab extends React.Component {

  createModalContent() {
    const { openEditTagModal, closeEditTagModal, editTags } = this.props;
    switch (editTags.isOpen) {
      case true:
        return (
          <AddContentButton onClick={closeEditTagModal} >
            <CloseContentImg src={xImage} />
          </AddContentButton>
        );
      case false:
        return (
          <AddContentButton onClick={openEditTagModal} >
            <AddContentImg src={xImage} />
          </AddContentButton>
        );
      default:
        return '';
    }
  }

  render() {
    const { openEditTagModal, editTags } = this.props;
    return (
      <AddContentDiv>
        {this.createModalContent()}
      </AddContentDiv>
    );
  }
}