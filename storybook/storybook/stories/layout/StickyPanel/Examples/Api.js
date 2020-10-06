import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  return (
  <L.Div _box>
    <L.Textarea
      style={{
        width: '100%', minWidth: '100%', maxWidth: '100%', height: '500px',
      }}
    />

    <L.StickyPanel offsetTop={200} _box>
      StickyPanel
      <L.Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <L.Button _success>Button 1</L.Button>
        <L.Button>Button 2</L.Button>
        <L.Button>Button 3</L.Button>
      </L.Div>
    </L.StickyPanel>
  </L.Div>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
