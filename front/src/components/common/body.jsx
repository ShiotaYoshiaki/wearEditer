import React from 'react';
import ItemList from '../../containers/inventory/itemList';
import EditTagModal from '../../containers/common/editTagModal';
import AddContent from '../../containers/common/addContent';
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
        <EditTagModal />
        <AddContent />
      </BodyDiv>
    );
  }
}