/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => {
  return (
    <L.Div>
      <L.A>
        Click!
      </L.A>
    </L.Div>
  );
};
