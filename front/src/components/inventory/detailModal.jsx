import React from 'react';
import { DetailModalDiv, DetailOutModalDiv, ModalTitleDiv } from '../../style/inventory/detalModal';
import { MODAL } from '../../constants/parameter';
import { ModalCloseButton } from '../../style/parts/button';
import closeImage from '../../style/image/closeXonly.svg';
import { ModalCloseImg } from '../../style/parts/img';

export default class DetailModal extends React.Component {

  render() {
    const { itemList, closeItemDetailModal } = this.props;
    if (!itemList.modal.isOpen) return "";
    const { list, modal } = itemList;
    const selectedItem = list.find(item => item.itemId === modal.itemId);
    console.log('-------------selectedItem'); console.log(selectedItem);
    return (
      <div>
        <DetailOutModalDiv />
        <DetailModalDiv>
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
        </DetailModalDiv>
      </div>
    );
  }
}