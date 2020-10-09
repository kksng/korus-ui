import React from 'react';
import * as L from '@korus/leda';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

export default class extends React.Component {
  handleClick = (ev) => {
    ev.preventDefault();
    alert('Clicked!');
  };

  render() {
    const dropdownList = (
      <L.Ul>
        <L.Li level={2}>
          Foo
        </L.Li>
        <L.Li level={2}>
          Bar
        </L.Li>
      </L.Ul>
    );

    return (
      <Router history={createBrowserHistory()}>
        <L.Div onClick={this.handleClick}>
          <L.NavLink
            to="/qux"
            count={3}
            dropdownList={dropdownList}
          >
            Qux (opens in the current tab)
          </L.NavLink>
          <L.NavLink
            to="/qux"
            target="_blank"
          >
            Qux (opens in the new tab)
          </L.NavLink>
        </L.Div>
      </Router>
    );
  }
}
