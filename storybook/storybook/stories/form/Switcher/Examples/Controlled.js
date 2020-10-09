import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switcherOn: true,
    };
  }

  handleSwitcher = () => {
    const { switcherOn } = this.state;
    this.setState({ switcherOn: !switcherOn });
  };

  render() {
    const { switcherOn } = this.state;
    return (
      <L.Switcher on={switcherOn} onClick={this.handleSwitcher}>Controlled Switcher</L.Switcher>
    );
  }
}
