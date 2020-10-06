import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
    };
  }

  onCheckBoxChange = () => {
    const { isChecked } = this.state;

    this.setState({
      isChecked: !isChecked,
    });
  };

  render() {
    const { isChecked } = this.state;

    return (
      <L.CheckBox
        id="checkbox"
        checked={isChecked}
        onChange={this.onCheckBoxChange}
      >
        Checkbox checked
      </L.CheckBox>
    );
  }
}
