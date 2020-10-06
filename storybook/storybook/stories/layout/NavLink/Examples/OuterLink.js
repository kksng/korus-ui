import React from 'react';
import * as L from '@korus/leda';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

export default class extends React.Component {
  handleClick = (ev) => {
    ev.preventDefault();
    alert('Clicked!');
  };

  render() {
    return (
      <Router history={createBrowserHistory()}>
        <L.Div onClick={this.handleClick}>
          <L.NavLink
            to="https://google.com"
            external
          >
            Google (external, opens in the new tab)
          </L.NavLink>
          <L.NavLink
            to="https://google.com"
            external
            target="_self"
          >
            Google (external, opens in the current tab)
          </L.NavLink>
        </L.Div>
      </Router>
    );
  }
}
