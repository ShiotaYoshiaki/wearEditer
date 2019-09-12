import styled from 'styled-components';
import { DEFAULT_FONT_FAMIlY } from '../constants/font';
import { STYLE_HEADER_ACCOUNT } from '../constants/accountParameter';
import { isMobile } from '../../constants/functions';
import { COLOR_DEFAULT } from '../constants/color';


export const HeaderDiv = (isMobile()) ? styled.div`
  height: 8%;
  min-height: 35px;
  max-height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${COLOR_DEFAULT};
  padding-left: 5px;
  padding-right: 5px;
  border-top: inset;
  z-index: 15;
`: styled.div`
  height: 80px;
  font-family: ${DEFAULT_FONT_FAMIlY};
`;
;

export const HeaderAccountDiv = (!isMobile()) ? styled.div`
  position: absolute;
  right: 100px;
`: styled.div`
  position: absolute;
  left: 62%;
`;

const accountNameWidth = STYLE_HEADER_ACCOUNT.BUTTON_WIDTH - STYLE_HEADER_ACCOUNT.IMAGE_WIDTH;
export const HeaderAccountNameDiv = styled.div`
  width: ${accountNameWidth}px;
  position: absolute;
  bottom: 20px;
  right: 0;
`;
