import React from 'react';
import gearImage from '../../style/image/gear.svg';

export default class Setting extends React.Component {

  render() {
    const { openSetting } = this.props;
    return (
      <div style={{ position: "absolute", right: "0" }}>
        <button onClick={openSetting} >
          <img src={gearImage} style={{ width: "40px", height: "40px" }} />
        </button>
      </div>
    );
  }
}