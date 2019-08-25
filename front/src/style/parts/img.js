import styled from 'styled-components';
import { M_HEADER_STYLE } from '../constants/parameter';
import { isMobile } from '../../constants/functions';

export const ItemListImg = styled.img`
  height: 100px;
`;

export const ItemGridImg = styled.img`
  width: 25%;
  :hover {
    opacity: 0.3;
  }
`;

export const GridDisplayImg = styled.img`
  height: 50px;
`;

export const ListDisplayImg = styled.img`
  height: 50px;
`;

export const HeaderAccountImg =(!isMobile())? styled.img`
  height: 40px;
  bottom: 5px;
  position: absolute;
  left: 5px;
`: styled.img`
  height: ${M_HEADER_STYLE.image}px;
  bottom: 5px;
  position: absolute;
  left: 5px;
`;

export const ModalCloseImg = styled.img`
  height: 30px;
  width: 30px;
`;

export const HeaderSideTabImg = (!isMobile())? styled.img`
  height: 40px;
`: styled.img`
  height: ${M_HEADER_STYLE.image}px;
`;

export const HeaderSettingImg = (!isMobile())? styled.img`
  height: 40px;
`: styled.img`
height: ${M_HEADER_STYLE.image}px;
`;