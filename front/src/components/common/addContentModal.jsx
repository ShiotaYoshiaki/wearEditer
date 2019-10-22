import React from 'react';
import { ModalDiv, OutModalDiv, DivModalContent } from '../../style/common/modal';
import { ModalCloseButton } from '../../style/parts/button';
import closeImage from '../../style/image/closeXonly.svg';
import { ModalCloseImg } from '../../style/parts/img';
import Stepper from '../../containers/addContent/stepper';

export default class AddContentModal extends React.Component {

  render() {
    const {
      addContent,
      close,
    } = this.props;
    if (!addContent.isOpen) return "";
    return (
      <div>
        <OutModalDiv />
        <ModalDiv>
          <DivModalContent>
            <Stepper />
          </DivModalContent>
          <ModalCloseButton onClick={close} >
            <ModalCloseImg src={closeImage} />
          </ModalCloseButton>
        </ModalDiv>
      </div>
    );
  }
}