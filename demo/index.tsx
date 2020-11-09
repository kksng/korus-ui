/* eslint-disable import/no-extraneous-dependencies */

import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CypressLayout } from './CypressLayout';
import { Demo } from './Demo';
import { Leda } from '../leda';
import { UnderscoreClasses } from '../leda/components/LedaProvider/underscoreClasses';

const element = (
  <Router>
    <React.StrictMode>
      <Leda
        underscoreClassesTransform={UnderscoreClasses.CamelCaseTransform}
      >
        <Route exact path="/" component={Demo} />
        <CypressLayout />
      </Leda>
    </React.StrictMode>
  </Router>
);

const container = document.createElement('div');

document.body.appendChild(container);

ReactDOM.render(element, container);
