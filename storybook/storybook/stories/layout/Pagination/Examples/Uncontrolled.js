import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  render() {
    return (
      <L.Pagination
        pageSize={10}
        total={124}
      />
    );
  }
}
