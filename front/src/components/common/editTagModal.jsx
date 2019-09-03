import React from 'react';
import { ModalDiv, OutModalDiv, ModalTitleDiv } from '../../style/common/modal';
import { MODAL } from '../../constants/parameter';
import { ModalCloseButton } from '../../style/parts/button';
import closeImage from '../../style/image/closeXonly.svg';
import { ModalCloseImg } from '../../style/parts/img';

export default class EditTagModal extends React.Component {

  render() {
    const {
      editTags, taggingRequest,
      closeEditTagModal,
    } = this.props;
    if(!editTags.isOpen) return "";
    return (
      <div>
        <OutModalDiv />
        <ModalDiv>
          <ModalTitleDiv>
            {MODAL.EDIT_TAG}
          </ModalTitleDiv>
          <div>

          </div>
          <ModalCloseButton onClick={closeEditTagModal} >
            <ModalCloseImg src={closeImage} />
          </ModalCloseButton>
        </ModalDiv>
      </div>
    );
  }
}