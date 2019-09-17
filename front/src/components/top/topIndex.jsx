import React from 'react';
import TodayRecommend from '../../containers/top/todayRecommend';
import MostItem from '../../containers/top/mostItem';
import MostCoordinated from '../../containers/top/mostCoordinated';
import UnseenCombinations from '../../containers/top/unseenCombinations';
import { DivTopBody } from '../../style/top/topIndex';

class Title extends React.Component {

  render() {
    return (
      <DivTopBody>
        <TodayRecommend />
        <MostItem />
        <MostCoordinated />
        <UnseenCombinations />
      </DivTopBody>
    )
  }
}

export default Title;