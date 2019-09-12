import styled from 'styled-components';
import { isMobile } from '../../constants/functions';

export const TitleDiv = (!isMobile()) ? styled.div`
  position: 'absolute';
  right: 0;
  left: 0;
`: styled.div`
  position: absolute;
  left: 28%;
`;
