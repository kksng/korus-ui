import React from 'react';
import * as L from '../../leda';

export const Dl = () => (
  <L.Div _demoStory>
    <L.H4 _title>Description List</L.H4>
    <br />
    <L.Dl _list _w25>
      <L.Dt>Название</L.Dt>
      <L.Dd>
        <L.Span>
            Общество с ограниченной ответственностью «Сбербанк Инвестиции»
        </L.Span>
        <br />
        <L.Span _small _txtGray>
            прежнее название ООО «Капитал», изменено 23.09.2015
        </L.Span>
      </L.Dd>

      <L.Dt>Деятельность</L.Dt>
      <L.Dd>
        <L.Span>
            Разработка компьютерного программного обеспечения
        </L.Span>
      </L.Dd>
    </L.Dl>
  </L.Div>
);
