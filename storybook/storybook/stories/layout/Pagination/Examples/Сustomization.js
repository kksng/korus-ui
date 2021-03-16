import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Сustomization = {
  liveDemo: `
const Сustomization = () => {
  const [pageSize, setPageSize] = React.useState(10);

  const handleChange = ev => {
    console.log('current page:', ev.component.value);
  }

  const handlePageSizeChange = ev => {
    console.log('page size:', ev.component.value);
    setPageSize(ev.component.value);
  }

  return (
    <L.Div _box _inner>
      <L.Pagination
        pageSize={pageSize}
        pageSizeOptions={[5, 10, 20, 50]}
        totalItems={1246}
        onChange={handleChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </L.Div>
  );
};

render(<Сustomization />);
`,
  text: (
    <L.Div>
      <L.P>
        Для настройки внешнего вида частей компонента используйте методы с суффиксом <b>Render</b>:
      </L.P>
      <L.P>
        <L.Ul _txt-list>
          <L.Li>
            <b>itemsInfoRender</b> - кастомизация информации о пагинации (блок со служебной информацией справа от стрелок).
          </L.Li>
          <L.Li>
            <b>itemsRangeInfoRender</b> - кастомизация текста "1-10 из 124".
          </L.Li>
          <L.Li>
            <b>itemsTotalInfoRender</b> - кастомизация текста "Отображено записей 124".
          </L.Li>
          <L.Li>
            <b>pagesDropDownRender</b> - кастомизация выпадающего списка с выбором количества записей на странице.
          </L.Li>
          <L.Li>
            <b>pageSizeInputRender</b> - кастомизация поля ввода выпадающего списка с выбором количества записей на странице.
          </L.Li>
          <L.Li>
            <b>pageSizeItemRender</b> - кастомизация элементов выпадающего списка с выбором количества записей на странице.
          </L.Li>
        </L.Ul>
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
