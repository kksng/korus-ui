import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Minimal = (storuProps: StoryProps) => {
  return (
    <L.Div>
      <L.DateTimeRange />
    </L.Div>
  );
};
