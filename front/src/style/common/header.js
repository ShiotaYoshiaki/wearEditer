import styled from 'styled-components';
import { DEFAULT_FONT_FAMIlY } from '../constants/font';
import { STYLE_HEADER_ACCOUNT } from '../constants/accountParameter';
import { isMobile } from '../../constants/functions';
import { COLOR_DEFAULT } from '../constants/color';
import { zIndexParam } from '../parts/zIndex';

export const StyleBottomHeader = {
  root: {
    height: '8%',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: COLOR_DEFAULT,
    borderTop: 'inset',
    zIndex: zIndexParam.mobileHeader,
  }
}


export const HeaderDiv = (isMobile()) ? styled.div`

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
