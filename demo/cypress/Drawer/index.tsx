import * as React from 'react';
import * as L from '../../../korus-ui';

export const Drawer = (): React.ReactElement => {
  return (
    <L.Drawer id="drawer" position="right">
      <L.Div style={{ width: 300, padding: 20 }}>
        <L.H3>Basic content</L.H3>
        <L.Input />
        <L.Input />
        <L.Input />
        <L.Button _warning>Submit</L.Button>
      </L.Div>
    </L.Drawer>
  );
};
