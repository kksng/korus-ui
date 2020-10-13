import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      paginationPageSize: 10,
      paginationTotal: 255,
    };
  }

  pageChange = (event) => {
    setTimeout(() => this.setState({
      currentPage: event.component.value,
    }), 1000);
  };

  render() {
    const { currentPage, paginationPageSize, paginationTotal } = this.state;
    return (
      <L.Pagination
        currentPage={currentPage}
        onPageChange={this.pageChange}
        pageSize={paginationPageSize}
        total={paginationTotal}
      />
    );
  }
}
