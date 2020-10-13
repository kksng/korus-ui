import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
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

render(<Api />);
`,
  source: componentSrc,
};
