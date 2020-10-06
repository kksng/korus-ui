import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  render() {
    return (
      <L.Rating
        rating={4}
        sizeRem={3}
      />
    );
  }
}
