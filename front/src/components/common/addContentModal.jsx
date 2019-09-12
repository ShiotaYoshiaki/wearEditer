import React from 'react';
import { ModalDiv, OutModalDiv, ModalTitleDiv } from '../../style/common/modal';
import { MODAL } from '../../constants/parameter';
import { ModalCloseButton } from '../../style/parts/button';
import closeImage from '../../style/image/closeXonly.svg';
import { ModalCloseImg } from '../../style/parts/img';

export default class EditTagModal extends React.Component {

  render() {
    const {
      addContent,
      closeAddContent,
    } = this.props;
    if(!addContent.isOpen) return "";
    return (
      <div>
        <OutModalDiv />
        <ModalDiv>
          <ModalTitleDiv>
            {MODAL.ADD_CONTENT}
          </ModalTitleDiv>
          <div>

          </div>
          <ModalCloseButton onClick={closeAddContent} >
            <ModalCloseImg src={closeImage} />
          </ModalCloseButton>
        </ModalDiv>
      </div>
    );
  }
}