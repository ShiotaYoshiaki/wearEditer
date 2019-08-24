import styled from 'styled-components';
import { DEFAULT_FONT_FAMIlY } from '../constants/font';
import { STYLE_HEADER_ACCOUNT } from '../constants/accountParameter';

export const HeaderDiv = styled.div`
  height: 80px;
  font-family: ${DEFAULT_FONT_FAMIlY};
`;

export const HeaderAccountDiv = styled.div`
  position: absolute;
  right: 100px;
`;

const accountNameWidth = STYLE_HEADER_ACCOUNT.BUTTON_WIDTH - STYLE_HEADER_ACCOUNT.IMAGE_WIDTH;
export const HeaderAccountNameDiv = styled.div`
  width: ${accountNameWidth}px;
  position: absolute;
  bottom: 20px;
  right: 0;
`;
