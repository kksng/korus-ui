/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Basic = (storyProps: StoryProps) => {
  const [shouldRender, setShouldRender] = React.useState(false);

  return (
    <>
    <L.Switcher 
      value={shouldRender} 
      onChange={() => setShouldRender(!shouldRender)}>
        Add Drawer to page
    </L.Switcher>
    {shouldRender && (
      <L.Drawer 
        position='right'
      >
        <L.Div style={{width: 300, padding: 20}}>
          <L.H3>Basic content</L.H3>
          <L.Input />
          <L.Input />
          <L.Input />
          <L.Button _warning>Submit</L.Button>
        </L.Div>
      </L.Drawer>
    )}
   </>
  );
};
