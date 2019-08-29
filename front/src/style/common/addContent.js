import styled from 'styled-components';
import { M_HEADER_STYLE } from '../constants/parameter';
import { isMobile } from '../../constants/functions';

export const AddContentDiv = (!isMobile()) ? styled.div`
  background-color: transparent;
  position: fixed;
  bottom: 60px;
  right: 70px;
`: styled.div`

`;
;