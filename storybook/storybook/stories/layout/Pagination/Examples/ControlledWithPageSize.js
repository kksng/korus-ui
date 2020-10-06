import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      paginationPageSize: 10,
      paginationTotal: 255,
      paginationPageSizeArray: [5, 10, 20, 50, 100],
    };
  }

  pageChange = (event) => {
    setTimeout(() => this.setState({
      currentPage: event.component.value,
    }), 1000);
  };

  pageSizeChange = (event) => {
    const { value } = event.component;
    const { paginationTotal, currentPage } = this.state;

    const newTotalPages = Math.ceil(paginationTotal / value);
    if (currentPage > newTotalPages) {
      this.setState({ currentPage: newTotalPages });
    }
  };

  render() {
    const {
      currentPage, paginationPageSize, paginationPageSizeArray, paginationTotal,
    } = this.state;
    return (
      <L.Pagination
        alwaysShow
        currentPage={currentPage}
        onPageChange={this.pageChange}
        onPageSizeChange={this.pageSizeChange}
        startingPageSize={paginationPageSize}
        pageSizeOptions={paginationPageSizeArray}
        total={paginationTotal}
      />
    );
  }
}
