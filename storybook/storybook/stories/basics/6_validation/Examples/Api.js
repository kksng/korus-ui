import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  return (
    <>
      <L.Input
        name="field1"
        form="myForm"
        isRequired
        _width-30
      />
      {' '}
      <L.Button
        form="myForm"
      >
        Submit
      </L.Button>
    </>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
