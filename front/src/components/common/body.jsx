import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ItemList from '../../containers/inventory/itemList';
import Top from '../../containers/top/topIndex';
import EditTagModal from '../../containers/common/editTagModal';
import AddContent from '../../containers/common/addContent';
import Setting from '../../containers/common/setting';
import { BodyDiv } from '../../style/common/body';
import { MENU } from '../../constants/parameter';

export default class Body extends React.Component {

  componentWillMount() {
    const { movePage } = this.props;
    movePage(MENU.TOP);
  }

  createBodyContent() {
    const { history } = this.props;
    switch (history.page) {
      case MENU.TOP:
        return (<Top />);
      case MENU.ITEM_LIST:
        return (<ItemList />)
      default:
        return '';
    }
  }

  render() {
    return (
      // <BrowserRouter>
        <BodyDiv>
          {/* <Route path='/' component={Top} /> */}
          {this.createBodyContent()}
          <EditTagModal />
          <AddContent />
          <Setting />
        </BodyDiv>
      // </BrowserRouter>
    );
  }
}