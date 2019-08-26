import styled from 'styled-components';
import { M_HEADER_STYLE } from '../constants/parameter';
import { isMobile } from '../../constants/functions';

export const HeaderSettingDiv = (!isMobile()) ? styled.div`
  position: absolute;
  right: 0;
`: styled.div`
  position: absolute;
  right: ${M_HEADER_STYLE.padding}px;
`;
;