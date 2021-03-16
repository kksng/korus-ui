import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const SelectAll = {
  liveDemo: `
const SelectAll = () => {
  const [pageSize, setPageSize] = React.useState(10);
  
  const total = 419;

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
        pageSizeOptions={[5, 10, 20, 50, total]}
        totalItems={total}
        onChange={handleChange}
        onPageSizeChange={handlePageSizeChange}
        pageSizeItemRender={({ elementProps, componentProps, Element }) => {
          if (componentProps.item === total) return <Element {...elementProps}>Все</Element>;
          return <Element {...elementProps} />;
        }}
        pageSizeInputRender={({ elementProps, componentProps, Element }) => {
          if (componentProps.value === total) return <Element {...elementProps} value="Все" />;
          return <Element {...elementProps} />;
        }}
      />
    </L.Div>
  );
};

render(<SelectAll />);
`,
  text: (
    <L.Div>
      <L.P>
        С помощью средств кастомизации, как пример мы можем реализовать отображение всего содержимого страницы с помощью отдельного поля в дропдауне. 
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
