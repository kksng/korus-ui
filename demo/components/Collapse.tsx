import React from 'react';
import * as L from '../../leda';

export const Collapse = () => {
  const [activeKey, setActiveKey] = React.useState<string | string[] | null>(['1']);
  const [isAccordion, setIsAccordion] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);

  return (
    <L.Div _demoStory>
      <L.H4 _title>Collapse</L.H4>
      <br />
      <L.Collapse isAccordion={isAccordion} activePanelKey={activeKey} onSelect={(event) => setActiveKey(event.component.value)}>
        <L.Collapse.Panel panelKey="1" wrapperRender={({ elementProps }) => <L.Div {...elementProps} />}>
          <L.Collapse.Heading>
            <L.Span>Условия сделки продажи 1</L.Span>
          </L.Collapse.Heading>
          <L.Collapse.Body onClose={() => console.log('close')} onOpen={() => console.log('open')} onCloseByClick={() => console.log('close by click')}>
            <L.Div _inner>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              <br />
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </L.Div>
          </L.Collapse.Body>
        </L.Collapse.Panel>
        <L.Collapse.Panel panelKey="2" isDisabled={isDisabled} wrapperRender={({ elementProps }) => <L.Div {...elementProps} />}>
          <L.Collapse.Heading>
            <L.Span>Условия сделки продажи 2</L.Span>
          </L.Collapse.Heading>
          <L.Collapse.Body>
            <L.Div _inner>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              <br />
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </L.Div>
          </L.Collapse.Body>
        </L.Collapse.Panel>
      </L.Collapse>
      <br />
      <L.Switcher
        value={isAccordion}
        onChange={(ev: any): void => {
          setIsAccordion(ev.component.value);
          setActiveKey(null);
        }}
      >
        Включить режим Аккордеона
      </L.Switcher>
      <br />
      <br />
      <L.Switcher
        value={isDisabled}
        onChange={(ev): void => {
          setIsDisabled(ev.component.value);
          setActiveKey(null);
        }}
      >
        isDisabled
      </L.Switcher>
    </L.Div>
  );
};
