/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../leda';

const exampleCode = `
export const BlockElements = () => (
  <L.Div _box _inner>
    <L.Div style={{ backgroundColor: '#9fcdeb' }} _inner>
      Элемент Div
      <L.P style={{ backgroundColor: '#ebe9ae' }} _inner _box>Элемент P</L.P>
    </L.Div>
  </L.Div>
);
`;

export const BlockElements = ({ ...restProps }) => (
  <L.Div _box _inner>
    <L.Div style={{ backgroundColor: '#9fcdeb' }} _inner>
      Элемент Div
      <L.P style={{ backgroundColor: '#ebe9ae' }} _inner _box>Элемент P</L.P>
    </L.Div>
  </L.Div>
);
