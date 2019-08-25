import React from 'react';
import ItemList from '../../containers/inventory/itemList';
import { BodyDiv } from '../../style/common/body';
import { MENU } from '../../constants/parameter';

export default class Body extends React.Component {

  componentWillMount() {
    const { movePage } = this.props;
    movePage(MENU.TOP);
  }

  render() {
    const { openSideTab, openSetting, header } = this.props;
    return (
      <BodyDiv>
        <ItemList />
      </BodyDiv>
    );
  }
}