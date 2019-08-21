import React from 'react';
import { ItemTable } from '../../style/inventory/itemList';
// import css from '../../style/inventory/itemList.css';


export default class Counter extends React.Component {

  render() {
    return (
      <div style={{ position: "absolute", right: "0" }}>
        <ItemTable >
          <tr >
            <th >見出し</th>
            <td >データ</td>
            <td >データ</td>
            <td >データ</td>
          </tr>
          <tr >
            <th >見出し</th>
            <td >データ</td>
            <td >データ</td>
            <td >データ</td>
          </tr>
        </ItemTable>
      </div>
    );
  }
}