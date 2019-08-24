import React from 'react';
import { DetailModalDiv, DetailOutModalDiv, ModalTitleDiv } from '../../style/inventory/detalModal';

export default class DetailModal extends React.Component {

  render() {
    const { itemList } = this.props;
    return (
      <div>
        <DetailOutModalDiv />
        <DetailModalDiv>
          <ModalTitleDiv>
            modal
          </ModalTitleDiv>
          modal
        </DetailModalDiv>
      </div>
    );
  }
}