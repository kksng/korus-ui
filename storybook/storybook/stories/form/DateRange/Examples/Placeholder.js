import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  render() {
    return (
      <L.Div>
        <p>Широкий placeholder</p>
        <L.DateRange
          onRangeChange={data => console.log(data)}
          rangeMin={new Date(2018, 0, 1)}
          rangeMax={new Date(2020, 0, 1)}
          formatPlaceholder="wide"
        />
        <br />
        <p>Узкий placeholder</p>
        <L.DateRange
          onRangeChange={data => console.log(data)}
          rangeMin={new Date(2018, 0, 1)}
          rangeMax={new Date(2020, 0, 1)}
          formatPlaceholder="narrow"
        />
        <br />
        <p>Сокращенный placeholder</p>
        <L.DateRange
          onRangeChange={data => console.log(data)}
          rangeMin={new Date(2018, 0, 1)}
          rangeMax={new Date(2020, 0, 1)}
          formatPlaceholder="short"
        />
        <br />
        <p>Пользовательский placeholder</p>
        <L.DateRange
          onRangeChange={data => console.log(data)}
          rangeMin={new Date(2018, 0, 1)}
          rangeMax={new Date(2020, 0, 1)}
          formatPlaceholder={{ year: 'y', month: 'M', day: 'd' }}
        />
      </L.Div>
    );
  }
}
