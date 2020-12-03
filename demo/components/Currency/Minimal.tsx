import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => {
  return (
    <L.Div>
      <L.Currency>
        1000
      </L.Currency>
    </L.Div>
  ); 
};
