import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => {
  return (
    <L.Div>
      <br />
      <L.Tooltip
        title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
      >
        <L.Button _tipTop>Show tooltip</L.Button>
      </L.Tooltip>
    </L.Div>
  );
};
