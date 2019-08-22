import React from 'react';
import { ItemTable, ItemColumn, ItemTitle, ItemData, ItemList } from '../../style/inventory/itemList';
// import css from '../../style/inventory/itemList.css';


export default class Counter extends React.Component {

  render() {
    return (
      <ItemList>
        <ItemTable >
          <ItemColumn >
            <ItemTitle>image</ItemTitle>
            <ItemData >name</ItemData>
            <ItemData >tag</ItemData>
            <ItemData >parts</ItemData>
          </ItemColumn>
          <ItemColumn >
            <ItemTitle>見出し</ItemTitle>
            <ItemData >データ</ItemData>
            <ItemData >データ</ItemData>
            <ItemData >データ</ItemData>
          </ItemColumn>
        </ItemTable>
      </ItemList>
    );
  }
}