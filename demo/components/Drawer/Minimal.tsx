/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => {
  const [shouldRender, setShouldRender] = React.useState(false);
  return (
    <>
    <L.Switcher 
      value={shouldRender} 
      onChange={() => setShouldRender(!shouldRender)}>
        Add Drawer to page
    </L.Switcher>
    {shouldRender && <L.Drawer />}
   </>
  );
};
