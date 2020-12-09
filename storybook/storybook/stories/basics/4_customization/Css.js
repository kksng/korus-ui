/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { LiveEditor, LiveProvider } from 'react-live';


export const Css = () => (
  <L.Div _article>
    <L.H1 _header>
      CSS
    </L.H1>
    <L.Div _block>
      <L.P>
        Korus-ui поставляется с готовым набором стилей.
      </L.P>
      <L.P>
        Все стили для компоненнтов находятся в <i>/dist/styles/leda.css</i>, подключите этот файл и дополняйте его своими файлами, если вам удобно работать непосредственно с css.
      </L.P>
      <L.P>
        Не изменяйте непосредственно этот файл, если вы хотите получать обновления библиотеки.
        При обновлении любые изменения этого файла будут перезатёрты.
      </L.P>
    </L.Div>
  </L.Div>
);
