import React, { Fragment } from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaderState: true,
    };
  }

  switchLoader = () => {
    const { loaderState } = this.state;
    this.setState({
      loaderState: !loaderState,
    });
  };

  render() {
    const { loaderState } = this.state;

    return (
      <Fragment>
        <L.Button onClick={this.switchLoader}>
          вкл/выкл лоадер
        </L.Button>
        <br />
        <br />
        <L.Loader isLoading={loaderState}>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </L.Loader>
      </Fragment>
    );
  }
}
