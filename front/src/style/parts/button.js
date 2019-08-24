import styled from 'styled-components';
import { STYLE_HEADER_ACCOUNT } from '../constants/accountParameter';

export const Button = styled.button`
  cursor : pointer;
  background-color: white;
`;

export const TitleButton = styled(Button)`
  height: 40px;
  width: 100px;
`;

export const HeaderAccountButton = styled(Button)`
  width: ${STYLE_HEADER_ACCOUNT.BUTTON_WIDTH}px;
  height: 50px;
`;
