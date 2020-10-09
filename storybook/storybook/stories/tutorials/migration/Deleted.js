/* eslint-disable react/prop-types */
import React from 'react';
import * as L from '@korus/leda';

export const Deleted = () => (
  <L.Div _refs-wrapper _inner _box>
    <L.H1 _title>Их больше нет с нами</L.H1>
    <L.Ul _txt-list>
      <li>
        L.Block -> L.Div
      </li>
      <li>
        L.Clear -> &lt;L.Div _clear /&gt;
      </li>
      <li>
        L.Link -> L.A
      </li>
      <li>
        L.List -> L.Ul
      </li>
      <li>
        L.ListItem -> L.Li
      </li>
      <li>
        L.StatusBarCustom -> L.StatusBar
      </li>
      <li>
        L.Text -> L.Span
      </li>
      <li>
        L.TwoColumns -> L.Dl, L.Dt, L.Dd
      </li>
      <li>
        L.Menu -> Используйте вёрстку из кита
      </li>
    </L.Ul>
  </L.Div>
);
