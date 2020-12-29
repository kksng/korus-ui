import React from 'react';
import * as L from '../../../leda';

export const Pagination = (): React.ReactElement => {
  const [props, setProps] = React.useState({});
  const [pageSize, setPageSize] = React.useState<number | undefined>(10);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const total = 124;

  return (
    <L.Div _demoStory>
      <L.H4 _title>Pagination</L.H4>
      <br />
      <L.Div _title>Basic</L.Div>
      <L.Pagination
        _active
        pageSize={pageSize}
        pageSizeOptions={[5, 10, 20, 50, total]}
        pageSizeItemRender={({ elementProps, componentProps, Element }) => {
          if (componentProps.item === total)
            return <Element {...elementProps}>Все</Element>;
          return <Element {...elementProps} />;
        }}
        pageSizeInputRender={({ elementProps, componentProps, Element }) => {
          if (componentProps.value === total)
            return <Element {...elementProps} value={'Все'} />;
          return <Element {...elementProps} />;
        }}
        totalItems={total}
        currentPage={currentPage}
        onChange={(ev: any) => setCurrentPage(ev.component.value)}
        onPageSizeChange={(ev: any) =>
          setPageSize(
            ev.component.value ? parseInt(ev.component.value, 10) : undefined
          )
        }
        itemsRangeInfoRender={({ elementProps }: any) =>
          `${elementProps.startingItemNumber} -- ${elementProps.endingItemNumber}, всего: ${elementProps.totalItemsNumber}`
        }
        itemsTotalInfoRender={({ elementProps }: any) =>
          `Итого: ${elementProps.totalItemsNumber}`
        }
        {...props}
      />
      <br />
      <L.Div _title>No pages</L.Div>
      <L.Pagination
        _nopages
        pageSize={pageSize}
        pageSizeOptions={[5, 10, 20, 50, total]}
        pageSizeItemRender={({ elementProps, componentProps, Element }) => {
          if (componentProps.item === total)
            return <Element {...elementProps}>Все</Element>;
          return <Element {...elementProps} />;
        }}
        pageSizeInputRender={({ elementProps, componentProps, Element }) => {
          if (componentProps.value === total)
            return <Element {...elementProps} value={'Все'} />;
          return <Element {...elementProps} />;
        }}
        totalItems={0}
        currentPage={currentPage}
        onChange={(ev: any) => setCurrentPage(ev.component.value)}
        onPageSizeChange={(ev: any) =>
          setPageSize(
            ev.component.value ? parseInt(ev.component.value, 10) : undefined
          )
        }
        itemsRangeInfoRender={({ elementProps }: any) =>
          `${elementProps.startingItemNumber} -- ${elementProps.endingItemNumber}, всего: ${elementProps.totalItemsNumber}`
        }
        itemsTotalInfoRender={({ elementProps }: any) =>
          `Итого: ${elementProps.totalItemsNumber}`
        }
        {...props}
      />
    </L.Div>
  );
};
