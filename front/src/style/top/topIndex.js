import styled from 'styled-components';
import { isMobile } from '../../constants/functions';

export const DivTopBody = (!isMobile()) ? styled.div`
  /* position: absolute;
  right: 0; */
`: styled.div`
  padding-top: 75px;
  padding-bottom: 9%;
`;
;