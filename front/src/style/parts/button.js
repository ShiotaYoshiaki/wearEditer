import styled from 'styled-components';
import { STYLE_HEADER_ACCOUNT } from '../constants/accountParameter';
import { isMobile } from '../../constants/functions';
import { M_HEADER_STYLE, SETTING_STYLE } from '../constants/parameter';
import { COLOR_CHECK, COLOR_DEFAULT } from '../constants/color';

export const Button = styled.button`
  cursor : pointer;
  background-color: white;
`;

export const HeaderButton = styled.button`
  width: ${M_HEADER_STYLE.button}px;
  height: ${M_HEADER_STYLE.button}px;
  background-color: transparent;
  border: none;
`;

export const SettingButton = styled.button`
  height: ${SETTING_STYLE.height}px;
  width: ${SETTING_STYLE.width}px;
  background-color: ${COLOR_DEFAULT};
`;

export const CheckedSettingButton = styled(SettingButton)`
  background-color: ${COLOR_DEFAULT};
`;

export const GrayButton = styled(Button)`
  background-color: ${COLOR_DEFAULT};
`;

export const TitleButton = (!isMobile()) ? styled(Button)`
  height: 40px;
  width: 100px;
`: styled(HeaderButton)`

`;

export const HeaderAccountButton = (!isMobile()) ? styled(Button)`
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

export const HeaderSideTabButton = (!isMobile()) ? styled(Button)`

  `: styled(HeaderButton)`

`;


export const HeaderSettingButton = (!isMobile()) ? styled(Button)`
  position: absolute;
  right: 0;
`: styled(HeaderButton)`
  
`;

export const AddContentButton = (!isMobile()) ? styled(Button)`
  position: absolute;
  background-color: transparent;
  border: transparent 1px solid;
`: styled(HeaderButton)`
  
`;