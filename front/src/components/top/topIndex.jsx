import React from 'react';
import TodayRecommend from '../../containers/top/todayRecommend';
import MostItem from '../../containers/top/mostItem';
import MostCoordinated from '../../containers/top/mostCoordinated';

class Title extends React.Component {

  render() {
    return (
      <div>
        <TodayRecommend />
        <MostItem />
        <MostCoordinated />
      </div>
    )
  }
}

export default Title;