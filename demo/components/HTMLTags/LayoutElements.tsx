/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '~';

const exampleCode = `
export const BlockElements = () => (
  <L.Div _box _inner>
    <L.Header _inner _title _header style={{ backgroundColor: '#7feb9f' }}>Заголовок</L.Header>
      <L.Main _inner _box style={{ backgroundColor: '#7eabeb' }}>
        <L.H4>Главная часть</L.H4>
        <L.Section _inner _box style={{ backgroundColor: '#ebe89f' }}>
          Раздел
          <L.Article _inner _box style={{ backgroundColor: '#ebb0c1' }}>Статья</L.Article>
        </L.Section>
      </L.Main>
    <L.Footer _inner style={{ backgroundColor: '#7feb9f' }}>Подвал</L.Footer>
  </L.Div>
);
`;

export const LayoutElements = ({ ...restProps }) => (
  <L.Div _box _inner>
    <L.Header _inner _title _header style={{ backgroundColor: '#7feb9f' }}>Заголовок</L.Header>
    <L.Main _inner _box style={{ backgroundColor: '#7eabeb' }}>
      <L.H4>Главная часть</L.H4>
      <L.Section _inner _box style={{ backgroundColor: '#ebe89f' }}>
        Раздел
        <L.Article _inner _box style={{ backgroundColor: '#ebb0c1' }}>Статья</L.Article>
      </L.Section>
    </L.Main>
    <L.Footer _inner style={{ backgroundColor: '#7feb9f' }}>Подвал</L.Footer>
  </L.Div>
);
