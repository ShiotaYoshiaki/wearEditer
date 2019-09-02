import React from 'react';
import { ModalDiv, OutModalDiv, ModalTitleDiv } from '../../style/common/modal';
import { MODAL } from '../../constants/parameter';
import { ModalCloseButton } from '../../style/parts/button';
import closeImage from '../../style/image/closeXonly.svg';
import { ModalCloseImg } from '../../style/parts/img';

export default class EditTagModal extends React.Component {

  render() {
    const { itemList, closeItemDetailModal } = this.props;
    if (!itemList.modal.isOpen) return "";
    const { list, modal } = itemList;
    const selectedItem = list.find(item => item.itemId === modal.itemId);
    return (
      <div>
        <OutModalDiv />
        <ModalDiv>
          <ModalTitleDiv>
            {MODAL.ITEM_DETAIL}
          </ModalTitleDiv>
          <div>
            tag: {selectedItem.tag} <br />
            shop name: {selectedItem.shop.name}<br />
            shop url: {selectedItem.shop.url}<br />
          </div>
          <ModalCloseButton onClick={closeItemDetailModal} >
            <ModalCloseImg src={closeImage} />
          </ModalCloseButton>
        </ModalDiv>
      </div>
    );
  }
}