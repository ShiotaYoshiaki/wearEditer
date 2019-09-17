import React from 'react';
import { ModalDiv, OutModalDiv, ModalTitleDiv } from '../../style/common/modal';
import { MODAL } from '../../constants/parameter';
import { ModalCloseButton, TagEditButton } from '../../style/parts/button';
import closeImage from '../../style/image/closeXonly.svg';
import editImage from '../../style/image/edit.svg';
import { ModalCloseImg, TagEditImg } from '../../style/parts/img';
import { TagEditDiv } from '../../style/inventory/itemList';

export default class DetailModal extends React.Component {

  render() {
    const { itemList, closeItemDetailModal, openEditTagModal } = this.props;
    if (!itemList.modal.isOpen) return "";
    const { list, modal } = itemList;
    const selectedItem = list.find(item => item.itemId === modal.itemId);
    return (
      <div>
        <OutModalDiv />
        <ModalDiv>
          <ModalTitleDiv>
            {MODAL.ITEM_DETAIL}
            <TagEditDiv>
              <TagEditButton onClick={openEditTagModal}>
                <TagEditImg src={editImage} />
              </TagEditButton>
            </TagEditDiv>
          </ModalTitleDiv>
          <div>
            part: {selectedItem.part} <br />
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