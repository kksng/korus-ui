import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      controlledPageSize: 10,
    };
  }

  pageChange = (event) => {
    setTimeout(() => this.setState({
      currentPage: event.component.value,
    }), 1000);
  };

  render() {
    const { currentPage, controlledPageSize } = this.state;
    return (
      <L.Div>
        <L.Pagination
          currentPage={currentPage}
          onPageChange={this.pageChange}
          pageSize={controlledPageSize || 10}
          onPageSizeChange={(ev) => {
            this.setState({
              controlledPageSize: ev.component.value,
            });
          }}
          total={255}
        />
        <br />
        <br />
        <L.Button onClick={() => {
          this.setState({
            controlledPageSize: 100,
          });
        }}
        >
          Именить размер страницы
        </L.Button>
      </L.Div>
    );
  }
}
