import * as React from 'react';
import * as L from '../../leda';
import { StateButtonGroup } from './StateButtonGroup';

export const Pagination = (): React.ReactElement => {
  const [props, setProps] = React.useState({});
  const [pageSize, setPageSize] = React.useState<number | undefined>(10);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const total = 1246;

  return (
    <L.Div _demoStory>
      <L.H4 _title>Pagination</L.H4>
      <br />
      <L.Pagination
        pageSize={pageSize}
        pageSizeOptions={[5, 10, 20, 50, total]}
        pageSizeItemRender={({ elementProps, componentProps, Element }) => {
          if (componentProps.item === total) return <Element {...elementProps}>Все</Element>;
          return <Element {...elementProps} />;
        }}
        pageSizeInputRender={({ elementProps, componentProps, Element }) => {
          if (componentProps.value === total) return <Element {...elementProps} value={'Все'} />;
          return <Element {...elementProps} />;
        }}
        totalItems={total}
        currentPage={currentPage}
        onChange={(ev: any) => setCurrentPage(ev.component.value)}
        onPageSizeChange={(ev: any) => setPageSize(ev.component.value ? parseInt(ev.component.value, 10) : undefined)}
        itemsRangeInfoRender={({ elementProps }: any) => `${elementProps.startingItemNumber} -- ${elementProps.endingItemNumber}, всего: ${elementProps.totalItemsNumber}`}
        itemsTotalInfoRender={({ elementProps }: any) => `Итого: ${elementProps.totalItemsNumber}`}
        {...props}
      />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'No pages', props: { totalItems: 0 } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
