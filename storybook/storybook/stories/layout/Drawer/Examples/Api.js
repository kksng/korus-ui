import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [shouldRender, setShouldRender] = React.useState(false);

  return (
    <>
      <L.Switcher 
        value={shouldRender} 
        onChange={() => setShouldRender(!shouldRender)}>
          Add Drawer to page
      </L.Switcher>
      {shouldRender && (
        <L.Drawer 
          position='right'
        >
          <L.Div style={{width: 300, padding: 20}}>
            <L.H3>Basic content</L.H3>
            <L.Input />
            <L.Input />
            <L.Input />
            <L.Button _warning>Submit</L.Button>
          </L.Div>
        </L.Drawer>
      )}
    </>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
