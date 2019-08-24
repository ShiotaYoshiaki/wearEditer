import React from 'react';
import sideMenuImage from '../../style/image/sideMenu.svg';

export default class SideTab extends React.Component {

  render() {
    const { openSideTab } = this.props;
    return (
      <div style={{ position: "absolute", left: "0" }}>
        <button onClick={openSideTab} >
          <img src={sideMenuImage} style={{ width: "40px", height: "40px" }} />
        </button>
      </div>
    );
  }
}