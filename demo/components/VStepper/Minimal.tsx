import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => (
  <L.Div _box _inner _demoBg>
    <L.VStepper>
      <L.VStepper.Item />
      <L.VStepper.Item />
      <L.VStepper.Item />
      <L.VStepper.Item />
    </L.VStepper>
  </L.Div>
);
