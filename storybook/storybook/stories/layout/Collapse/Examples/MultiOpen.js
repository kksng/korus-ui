// @flow

import React from 'react';
import * as L from '@korus/leda';

export default class MultiOpen extends React.Component<{}> {
  render() {
    return (
      <L.Collapse multiOpen>
        <L.Collapse.Panel eventKey="1" wrapper={<L.Div panel />}>
          <L.Collapse.Heading wrapper={<L.Div inner title />} withIcon>
            <L.H5 width={30}>Условия сделки продажи</L.H5>
          </L.Collapse.Heading>
          <L.Collapse.Body content>
            <L.Div inner>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              <br />
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </L.Div>
          </L.Collapse.Body>
        </L.Collapse.Panel>
        <L.Collapse.Panel eventKey="2" wrapper={<L.Div panel />}>
          <L.Collapse.Heading wrapper={<L.Div inner title />} withIcon>
            <L.H5 width={30}>Условия сделки продажи</L.H5>
          </L.Collapse.Heading>
          <L.Collapse.Body content>
            <L.Div inner>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              <br />
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </L.Div>
          </L.Collapse.Body>
        </L.Collapse.Panel>
      </L.Collapse>
    );
  }
}
