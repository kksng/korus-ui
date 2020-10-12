import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  render() {
    return (
      <L.Div _box>
        <L.Span _small _tag _success>
          Все хорошо
        </L.Span>
        <br />
        <L.Span _small _tag _warning>
          Есть нерешенные проблемы
        </L.Span>
        <br />
        <L.Span _small _tag _danger>
          Риск прекращения деятельности
        </L.Span>
        <br />
        <L.Span _small _tag _count>
          Нет данных
        </L.Span>
      </L.Div>
    );
  }
}
