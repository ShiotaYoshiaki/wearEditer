import styled from 'styled-components';
import { STYLE_HEADER_ACCOUNT } from '../constants/accountParameter';
import { isMobile } from '../../constants/functions';
import { M_HEADER_STYLE, SETTING_STYLE } from '../constants/parameter';
import { COLOR_CHECK } from '../constants/color';

export const Button = styled.button`
  cursor : pointer;
  background-color: white;
  @media only screen and (max-device-width: 480px) {
    background-color: black;
  }
`;

export const HeaderButton = styled.button`
  width: ${M_HEADER_STYLE.button}px;
  height: ${M_HEADER_STYLE.button}px;
`;

export const SettingButton = styled.button`
  height: ${SETTING_STYLE.height}px;
  width: ${SETTING_STYLE.width}px;
  background-color: ${COLOR_CHECK.NOT_CHECKED};
`;

export const CheckedSettingButton = styled(SettingButton)`
  background-color: ${COLOR_CHECK.CHECKED};
`;

export const GrayButton = styled(Button)`
  background-color: lightgray;
`;

export const TitleButton = styled(Button)`
  height: 40px;
  width: 100px;
`;

export const HeaderAccountButton =(!isMobile())? styled(Button)`
  width: ${STYLE_HEADER_ACCOUNT.BUTTON_WIDTH}px;
  height: 50px;
  `: styled(HeaderButton)`

`;

export const ModalCloseButton = styled(GrayButton)`
  height: 50px;
  width: 50px;
  top: -22px;
  right: -25px;
  border: 0px;
  border-radius: 25px;
  z-index: 31;
  position: absolute;
`;

export const SideMenuPageButton = styled.button`
  height: 15%;
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
`;

export const HeaderSideTabButton = (!isMobile())? styled(Button)`

  `: styled(HeaderButton)`

`;


export const HeaderSettingButton = (!isMobile())? styled(Button)`
  position: absolute;
  right: 0;
`: styled(HeaderButton)`
  
`;