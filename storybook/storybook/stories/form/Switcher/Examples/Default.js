import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  render() {
    return (
      <L.Switcher onChange={state => console.log('Changed!', state)}>Uncontrolled Switcher</L.Switcher>
    );
  }
}
