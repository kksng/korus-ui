import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
      disabled: true,
    };
  }

  onCheckBoxChange = () => {
    const { isChecked } = this.state;

    this.setState({
      isChecked: !isChecked,
    });
  };

  onDisabledToggled = () => {
    const { disabled } = this.state;

    this.setState({
      disabled: !disabled,
    });
  };

  render() {
    const { disabled, isChecked } = this.state;
    return (
      <L.Div>
        <L.CheckBox
          id="checkbox"
          disabled={disabled}
          checked={isChecked}
          onChange={this.onCheckBoxChange}
        >
          Checkbox disabled
        </L.CheckBox>
        <br />
        <br />
        <L.Button warning onClick={this.onDisabledToggled}>Toggle disabled</L.Button>
      </L.Div>
    );
  }
}
