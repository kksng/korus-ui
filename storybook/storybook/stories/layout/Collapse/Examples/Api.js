import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [activeKey, setActiveKey] = React.useState('1');

  return (
    <L.Collapse
      activePanelKey={activeKey}
      onSelect={ev => setActiveKey(ev.component.value)}
     >
      <L.Collapse.Panel panelKey="1">
        <L.Collapse.Heading>
          <L.H5>Условия продажи</L.H5>
        </L.Collapse.Heading>
        <L.Collapse.Body>
          <L.Div _inner>
            1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            <br />euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </L.Div>
        </L.Collapse.Body>
      </L.Collapse.Panel>
      <L.Collapse.Panel panelKey="2">
        <L.Collapse.Heading>
          <L.H5>Условия покупки</L.H5>
        </L.Collapse.Heading>
        <L.Collapse.Body>
          <L.Div _inner>
            2. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh<br />
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </L.Div>
        </L.Collapse.Body>
      </L.Collapse.Panel>
    </L.Collapse>
  );
};
render(<Api />);
`,
  source: componentSrc,
};
