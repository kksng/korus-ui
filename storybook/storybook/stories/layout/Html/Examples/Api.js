import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [isSuccess, setIsSuccess] = React.useState(true);
  const [isRendered, setIsRendered] = React.useState(true);

  return (
    <>
      <L.Div
        _box
        _inner
        style={{ borderColor: 'fuchsia' }}
        onClick={(ev) => console.log(ev)}
      >
        <L.Span
          _txt-success={isSuccess}
          shouldRender={isRendered}
          contentEditable
        >
          hello world
        </L.Span>
      </L.Div>

      <L.Button
        onClick={() => setIsSuccess(!isSuccess)}
      >
        Toggle color
      </L.Button>
      {' '}
      <L.Button
        onClick={() => setIsRendered(!isRendered)}
      >
        Toggle span
      </L.Button>
    </>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
