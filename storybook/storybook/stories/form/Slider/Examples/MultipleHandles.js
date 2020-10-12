import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: [1000, 25000],
    };
  }

  sliderHandleChange = (event) => {
    console.log('slider HandleChange event', event);
    this.setState({
      sliderValue: event.component.value,
    });
  };

  render() {
    const { sliderValue } = this.state;
    return (
      <L.Slider
        max={50000}
        value={sliderValue}
        onChange={this.sliderHandleChange}
        width={50}
        labelUnits="млн.руб."
        name="Slider 1"
      />
    );
  }
}
