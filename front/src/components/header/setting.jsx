import React from 'react';
import gearImage from '../../style/image/gear.svg';
import { HeaderSettingDiv } from '../../style/common/setting';
import { HeaderSettingButton } from '../../style/parts/button';
import { HeaderSettingImg } from '../../style/parts/img';

export default class Setting extends React.Component {

  render() {
    const { openSetting } = this.props;
    return (
      <HeaderSettingDiv>
        <HeaderSettingButton onClick={openSetting} >
          <HeaderSettingImg src={gearImage}/>
        </HeaderSettingButton>
      </HeaderSettingDiv>
    );
  }
}