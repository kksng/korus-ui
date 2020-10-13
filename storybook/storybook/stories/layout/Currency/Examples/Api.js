import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {

  return (
    <>
      <L.Currency
        placeholder="No money - no honey"
        currencyCode="EUR"
      >
        100500
      </L.Currency>
    </>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
