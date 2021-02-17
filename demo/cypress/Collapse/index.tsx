import React from 'react';
import * as L from '../../../korus-ui';

export const Collapse = () => {
  const [activeKey1, setActiveKey1] = React.useState<string | string[] | null>([
    '1',
  ]);
  const [activeKey2, setActiveKey2] = React.useState<string | string[] | null>([
    '1',
  ]);
  const [activeKey3, setActiveKey3] = React.useState<string | string[] | null>([
    '1',
  ]);

  return (
    <L.Div _demoStory>
      <L.Div name="collapse-main">
        <L.H4 _title>Collapse</L.H4>
        <br />
        <L.Collapse
          activePanelKey={activeKey1}
          onSelect={(event) => setActiveKey1(event.component.value)}
        >
          <L.Collapse.Panel
            panelKey="1"
            wrapperRender={({ elementProps }) => <L.Div {...elementProps} />}
          >
            <L.Collapse.Heading>
              <L.Span>Условия сделки продажи 1 Main</L.Span>
            </L.Collapse.Heading>
            <L.Collapse.Body
              onClose={() => console.log('close')}
              onOpen={() => console.log('open')}
              onCloseByClick={() => console.log('close by click')}
            >
              <L.Div _inner _inner__main>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh
                <br />
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </L.Div>
            </L.Collapse.Body>
          </L.Collapse.Panel>
          <L.Collapse.Panel
            panelKey="2"
            wrapperRender={({ elementProps }) => <L.Div {...elementProps} />}
          >
            <L.Collapse.Heading>
              <L.Span>Условия сделки продажи 2 Main</L.Span>
            </L.Collapse.Heading>
            <L.Collapse.Body>
              <L.Div _inner _inner__main>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh
                <br />
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </L.Div>
            </L.Collapse.Body>
          </L.Collapse.Panel>
        </L.Collapse>
      </L.Div>
      <br />
      <L.Div name="collapse-accordion">
        <L.H4 _title>Collapse Accordion</L.H4>
        <br />
        <L.Collapse
          isAccordion={true}
          activePanelKey={activeKey2}
          onSelect={(event) => setActiveKey2(event.component.value)}
        >
          <L.Collapse.Panel
            panelKey="1"
            wrapperRender={({ elementProps }) => <L.Div {...elementProps} />}
          >
            <L.Collapse.Heading>
              <L.Span>Условия сделки продажи 1 Accordion</L.Span>
            </L.Collapse.Heading>
            <L.Collapse.Body
              onClose={() => console.log('close')}
              onOpen={() => console.log('open')}
              onCloseByClick={() => console.log('close by click')}
            >
              <L.Div _inner _inner__accordion-first>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh
                <br />
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </L.Div>
            </L.Collapse.Body>
          </L.Collapse.Panel>
          <L.Collapse.Panel
            panelKey="2"
            wrapperRender={({ elementProps }) => <L.Div {...elementProps} />}
          >
            <L.Collapse.Heading>
              <L.Span>Условия сделки продажи 2 Accordion</L.Span>
            </L.Collapse.Heading>
            <L.Collapse.Body>
              <L.Div _inner _inner__accordion-second>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh
                <br />
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </L.Div>
            </L.Collapse.Body>
          </L.Collapse.Panel>
        </L.Collapse>
      </L.Div>
      <br />

      <L.Div name="collapse-disabled">
        <L.H4 _title>Collapse Disabled</L.H4>
        <br />
        <L.Collapse
          isAccordion={false}
          activePanelKey={activeKey3}
          onSelect={(event) => setActiveKey3(event.component.value)}
        >
          <L.Collapse.Panel
            panelKey="1"
            wrapperRender={({ elementProps }) => <L.Div {...elementProps} />}
          >
            <L.Collapse.Heading>
              <L.Span>Условия сделки продажи 1 Disabled</L.Span>
            </L.Collapse.Heading>
            <L.Collapse.Body
              onClose={() => console.log('close')}
              onOpen={() => console.log('open')}
              onCloseByClick={() => console.log('close by click')}
            >
              <L.Div _inner _inner__disabled>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh
                <br />
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </L.Div>
            </L.Collapse.Body>
          </L.Collapse.Panel>
          <L.Collapse.Panel
            panelKey="2"
            isDisabled={true}
            wrapperRender={({ elementProps }) => <L.Div {...elementProps} />}
          >
            <L.Collapse.Heading>
              <L.Span>Условия сделки продажи 2 Disabled</L.Span>
            </L.Collapse.Heading>
            <L.Collapse.Body>
              <L.Div _inner _inner__disabled>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh
                <br />
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </L.Div>
            </L.Collapse.Body>
          </L.Collapse.Panel>
        </L.Collapse>
      </L.Div>
    </L.Div>
  );
};
