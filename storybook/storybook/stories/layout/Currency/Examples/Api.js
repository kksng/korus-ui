import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {

  return (
    <>
      <L.RUB
        placeholder="Денег нет"
      >
        100500
      </L.RUB>
      <br />
      <L.EUR
        placeholder="Kein Geld"
      >
        100500
      </L.EUR>
      <br />
      <L.USD
        placeholder="No money - no honey"
      >
        100500
      </L.USD>
    </>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
