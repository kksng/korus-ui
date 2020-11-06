/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '~';

const exampleCode = `
export const BlockElements = () => (
  <L.Div _box _inner>
    <L.Div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <L.Ul _listItem _box>
        <L.Li>Фрукты:</L.Li>
        <L.Li>Яблоки</L.Li>
        <L.Li>Груши</L.Li>
        <L.Li>Бананы</L.Li>
        <L.Li>Апельсины</L.Li>
      </L.Ul>
      <L.Ol _listTree _box>
        <L.Li>Base style</L.Li>
        <L.Li>
          Lists
          <L.Ol>
            <L.Li>ul.list</L.Li>
            <L.Li>ol.list</L.Li>
            <L.Li>dl.list</L.Li>
          </L.Ol>
        </L.Li>
        <L.Li>Icons</L.Li>
        <L.Li>Navigations</L.Li>
      </L.Ol>
      <L.Dl _list _w20 _width50 _box>
        <L.Dt><strong>Потерянное поколение</strong></L.Dt>
        <L.Dd>
          — это молодые люди, призванные на фронт в возрасте 18 лет, часто ещё не окончившие школу, рано начавшие убивать.
          После войны такие люди часто не могли адаптироваться к мирной жизни, спивались, заканчивали жизнь самоубийством,
          некоторые сходили с ума.
        </L.Dd>
        <L.Dt><strong>Эрнест Хемингуэй</strong></L.Dt>
        <L.Dd>
          — американский писатель, журналист, лауреат Нобелевской премии по литературе 1954 года.
        </L.Dd>
      </L.Dl>
    </L.Div>
  </L.Div>
);
`;

export const ListElements = ({ ...restProps }) => (
  <L.Div _box _inner>
    <L.Div style={{ padding: '10px' }} _row _noGutters>
      <L.Ul _listItem _box _colMd4>
        <L.Li>Фрукты:</L.Li>
        <L.Li>Яблоки</L.Li>
        <L.Li>Груши</L.Li>
        <L.Li>Бананы</L.Li>
        <L.Li>Апельсины</L.Li>
      </L.Ul>
      <L.Ol _listTree _box _colMd4>
        <L.Li>Base style</L.Li>
        <L.Li>
          Lists
          <L.Ol>
            <L.Li>ul.list</L.Li>
            <L.Li>ol.list</L.Li>
            <L.Li>dl.list</L.Li>
          </L.Ol>
        </L.Li>
        <L.Li>Icons</L.Li>
        <L.Li>Navigations</L.Li>
      </L.Ol>
      <L.Dl _list _w20 _width50 _box _colMd4>
        <L.Dt><strong>Потерянное поколение</strong></L.Dt>
        <L.Dd>
          — это молодые люди, призванные на фронт в возрасте 18 лет, часто ещё не окончившие школу, рано начавшие убивать.
          После войны такие люди часто не могли адаптироваться к мирной жизни, спивались, заканчивали жизнь самоубийством,
          некоторые сходили с ума.
        </L.Dd>
        <L.Dt><strong>Эрнест Хемингуэй</strong></L.Dt>
        <L.Dd>
          — американский писатель, журналист, лауреат Нобелевской премии по литературе 1954 года.
        </L.Dd>
      </L.Dl>
    </L.Div>
  </L.Div>
);
