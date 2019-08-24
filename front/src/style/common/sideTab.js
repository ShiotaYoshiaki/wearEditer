import styled from 'styled-components';
import { COLOR_SIDE_TAB } from '../constants/color';

export const SideTabDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 450px;
  min-width: 30%;
  height: 100%;
  background-color: ${COLOR_SIDE_TAB};
`;

export const SideMenuDiv = styled.div`
  height: 15%;
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
`;
