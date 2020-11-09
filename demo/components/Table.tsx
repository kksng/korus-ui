import * as React from 'react';
import * as L from '../../leda';

const bodyWrapper = ({ elementProps }: any) => (
  <L.Tr _block {...elementProps} />
);

const headingRender = ({ elementProps }: any) => <L.Tr {...elementProps} />;

export const Table = () => {
  const [activeKey, setActiveKey] = React.useState<string | string[] | null>('1');

  return (
    <L.Div _demoStory>
      <L.H4 _title>Table</L.H4>
      <br />
      <L.Collapse isAccordion activePanelKey={activeKey} onSelect={(ev) => setActiveKey(ev.component.value)}>
        <L.Table>
          <L.TBody>
            <L.Collapse.Panel panelKey="1">
              <L.Collapse.Heading
                iconRender={() => null}
                wrapperRender={headingRender}
              >
                <L.Td _quickView>
                  <L.Span>Условия сделки продажи</L.Span>
                </L.Td>
                <L.Td _quickView>
                  <L.Span>Условия сделки продажи</L.Span>
                </L.Td>
              </L.Collapse.Heading>
              <L.Collapse.Body
                wrapperRender={bodyWrapper}
              >
                <L.Td>
                  <L.Div _inner>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    <br />euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </L.Div>
                </L.Td>
                <L.Td>
                  <L.Div _inner>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    <br />euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </L.Div>
                </L.Td>
              </L.Collapse.Body>
            </L.Collapse.Panel>
            <L.Collapse.Panel panelKey="2">
              <L.Collapse.Heading
                iconRender={() => null}
                wrapperRender={headingRender}
              >
                <L.Td>
                  <L.Span>Условия сделки продажи 2</L.Span>
                </L.Td>
                <L.Td>
                  <L.Span>Условия сделки продажи 2</L.Span>
                </L.Td>
              </L.Collapse.Heading>
              <L.Collapse.Body
                wrapperRender={bodyWrapper}
              >
                <L.Td>
                  <L.Div _inner>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    <br />euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </L.Div>
                </L.Td>
                <L.Td>
                  <L.Div _inner>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    <br />euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </L.Div>
                </L.Td>
              </L.Collapse.Body>
            </L.Collapse.Panel>
          </L.TBody>
        </L.Table>
      </L.Collapse>
    </L.Div>
  );
};
