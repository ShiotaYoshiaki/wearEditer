import styled from 'styled-components';
import { STYLE_HEADER_ACCOUNT } from '../constants/accountParameter';

export const Button = styled.button`
  cursor : pointer;
  background-color: white;
  @media only screen and (max-device-width: 480px) {
    background-color: black;
  }
`;

export const GrayButton = styled(Button)`
  background-color: lightgray;
`;

export const TitleButton = styled(Button)`
  height: 40px;
  width: 100px;
`;

export const HeaderAccountButton = styled(Button)`
  width: ${STYLE_HEADER_ACCOUNT.BUTTON_WIDTH}px;
  height: 50px;
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

