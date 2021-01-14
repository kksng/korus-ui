import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => {
  return (
    <L.Div _box _inner _demoBg>
      <L.ButtonGroup data={['one', 'two', 'three']}/>
    </L.Div>
  );
};
