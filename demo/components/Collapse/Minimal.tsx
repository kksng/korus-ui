import React from 'react';
import * as L from '../../../korus-ui';

export const Minimal = (props: any): React.ReactElement => {
  return (
    <L.Div>
      <L.H4 _title>Collapse</L.H4>
      <L.Collapse>
        <L.Collapse.Panel panelKey="key">
          <L.Collapse.Heading>
            <L.Span>Conditions</L.Span>
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
    </L.Div>
  );
};
