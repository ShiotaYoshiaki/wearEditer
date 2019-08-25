import styled from 'styled-components';
import { COLOR_SIDE_TAB } from '../constants/color';
import { isMobile } from '../../constants/functions';
import { M_HEADER_STYLE } from '../constants/parameter';

export const SideTabDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 450px;
  min-width: 30%;
  height: 100%;
  background-color: ${COLOR_SIDE_TAB};
`;

export const HeaderSideTavDiv = (!isMobile())? styled.div`
  position: absolute;
  left: 0;
  z-index: 10;
`: styled.div`
  position: absolute;
  left: ${M_HEADER_STYLE.padding}px;
`;
