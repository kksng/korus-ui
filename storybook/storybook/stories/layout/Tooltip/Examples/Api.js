import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [isSuccess, setIsSuccess] = React.useState(true);

  return (
    <L.Div>
      <L.Tooltip title="Tooltip on top">
        Top
      </L.Tooltip>
      {' '}
      <L.Tooltip title={<L.Span style={{ backgroundColor: '#4ea31e', color: 'white' }}>Tooltip on<br/> right</L.Span>} position="right">
        <L.Button success>
          Right
        </L.Button>
      </L.Tooltip>
      {' '}
      <L.Tooltip title={<span style={{backgroundColor: '#f49530', color: 'white'}}>Tooltip on<br/> left</span>} position="left">
        <L.Button warning>
          Left
        </L.Button>
      </L.Tooltip>
      {' '}
      <L.Tooltip title={<span style={{backgroundColor: '#e84040', color: 'white'}}>Tooltip on bottom</span>} position="bottom">
        <L.Button danger>
          Bottom
        </L.Button>
      </L.Tooltip>
    </L.Div>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
