import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Accordion = {
  liveDemo: `
const Accordion = () => {
  const [activeKey, setActiveKey] = React.useState('1');

  return (
    <L.Collapse
      isAccordion
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
render(<Accordion />);
`,
  text: (
    <L.Div>
      <L.P>
        Для включения "режима аккордеона" используйте атрибут <b>isAccordion</b>. При использовании этого режима работы компонента открываться будет только одна панель, вторая при этом автоматически закроется.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
