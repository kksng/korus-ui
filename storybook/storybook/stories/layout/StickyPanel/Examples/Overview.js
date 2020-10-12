import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  render() {
    return (
      <L.Div inner>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <L.StickyPanel componentOffset={100}>
          <L.Div inner>
            <L.Div left>
              <L.Button success>Button 1</L.Button>
              &nbsp;
              <L.Button>Button 2</L.Button>
            </L.Div>
            <L.Div right>
              <L.Button>Button 3</L.Button>
            </L.Div>
            <L.Div _clear />
          </L.Div>
        </L.StickyPanel>
      </L.Div>
    );
  }
}
