import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => {
  return (
    <L.Div>
      <L.StickyPanel>
        <L.Div style={{ paddingTop: '12px', display: 'flex', justifyContent: 'space-around' }}>
          <L.Button>Button 1</L.Button>
          <L.Button>Button 2</L.Button>
          <L.Button>Button 3</L.Button>
        </L.Div>
      </L.StickyPanel>
    </L.Div>
  );
};
