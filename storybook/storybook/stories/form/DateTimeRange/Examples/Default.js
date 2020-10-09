import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  render() {
    return (
      <L.DateTimeRange
        width={50}
        onRangeChange={data => console.log(data)}
        rangeMin={new Date(2018, 0, 1)}
        rangeMax={new Date(2020, 0, 1)}
        disableDates={['we', 'th']}
      />
    );
  }
}
