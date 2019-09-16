import styled from 'styled-components';
import { PADDING } from '../constants/parameter';
import { COLOR_ITEM_SETTING } from '../constants/color';

export const ItemTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const ItemColumn = styled.tr`
  background-image: linear-gradient(40deg, #fce043 0%, #fb7ba2 74%);
  :hover {
    background-image: linear-gradient(40deg, black 0%, #fb7ba2 74%);
    cursor : pointer;
  }
`;

export const ItemTitle = styled.td`
  text-align: center;
  border: solid 2px #fff;
  color: white;
  padding: 10px 0;
  color: #4B0082;
`;

export const ItemData = styled.th`
text-align: center;
border: solid 2px #fff;
color: white;
padding: 10px 0;
`;

export const ItemContentListDiv = styled.div`
  right: 0;
  left: 0;
`;

export const ItemListSettingDiv = styled.div`
  height: 150px;
`;

export const TagEditDiv = styled.div`
  position: absolute;
  right: 30px
`;
