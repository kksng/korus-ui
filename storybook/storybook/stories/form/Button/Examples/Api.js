import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  return (
    <>
    <L.Input
      onChange={ev => console.log(ev.component.value)}
      form="myAwesomeForm"
      name="email"
      validator="email"
      isRequired
    />
    <br />
    <br />

    <L.Button
      form="myAwesomeForm"
      shouldScrollToInvalidFields
      scrollOffset="50"
    >
      Click me
    </L.Button>
    </>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
