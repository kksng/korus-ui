import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  render() {
    return (
      <L.Svg
        notifications
        notOk
        tooltip="hello<br>world!"
        tooltipPosition="right"
      />
    );
  }
}
