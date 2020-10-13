// @flow

import React from 'react';
import * as L from '@korus/leda';

type ComponentState = {
  activeKey: string | null,
}

export default class extends React.Component<{}, ComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeKey: null,
    };
  }

  handleSelectActivePanel = (key: string): void => {
    const { activeKey } = this.state;

    this.setState({
      activeKey: key === activeKey ? null : key,
    });
  };

  render() {
    const { activeKey } = this.state;

    return (
      <L.Collapse onSelect={this.handleSelectActivePanel} activeKey={activeKey}>
        <L.Collapse.Panel eventKey="1" wrapper={<L.Div panel />}>
          <L.Collapse.Heading wrapper={<L.Div inner title />} withIcon>
            <L.I _icon20 _right className={activeKey === '1' ? 'i-chevron-up' : 'i-chevron-down'} />
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
            <L.I _icon20 _right className={activeKey === '2' ? 'i-chevron-up' : 'i-chevron-down'} />
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
