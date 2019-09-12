import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
      <BrowserRouter>
        <BodyDiv>
          <Route path='/' component={ItemList} />
          <EditTagModal />
          <AddContent />
        </BodyDiv>
      </BrowserRouter>
    );
  }
}