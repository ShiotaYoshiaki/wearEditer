import React from 'react';
import ItemList from '../../containers/inventory/itemList';
import { BodyDiv } from '../../style/common/body';

export default class Body extends React.Component {

  render() {
    const { openSideMenu, openSetting, header } = this.props;
    return (
      <BodyDiv>
        <ItemList />
      </BodyDiv>
    );
  }
}