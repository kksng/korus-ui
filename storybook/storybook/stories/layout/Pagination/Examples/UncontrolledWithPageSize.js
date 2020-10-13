import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paginationPageSizeArray: [5, 10, 20, 50, 100],
    };
  }

  render() {
    const { paginationPageSizeArray } = this.state;
    return (
      <L.Pagination
        startingPageSize={20}
        pageSizeOptions={paginationPageSizeArray}
        total={228}
      />
    );
  }
}
