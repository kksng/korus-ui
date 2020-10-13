import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  render() {
    return (
      <L.Svg
        onClick={() => alert('SVG clicked')}
        notifications
        ok
      />
    );
  }
}
