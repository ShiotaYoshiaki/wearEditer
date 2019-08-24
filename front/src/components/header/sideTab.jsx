import React from 'react';
import sideMenuImage from '../../style/image/sideMenu.svg';
import closeImage from '../../style/image/close.svg';

export default class SideTab extends React.Component {

  createSideButton() {
    const { openSideTab, closeSideTab, sideTab } = this.props;
    if (!sideTab.isOpen) {
      return (
        <button onClick={openSideTab} >
          <img src={sideMenuImage} style={{ width: "40px", height: "40px" }} />
        </button>
      );
    } else {
      return (
        <button onClick={closeSideTab} >
          <img src={closeImage} style={{ width: "40px", height: "40px" }} />
        </button>
      )
    }
  }

  render() {
    return (
      <div style={{ position: "absolute", left: "0" }}>
        {this.createSideButton()}
      </div>
    );
  }
}