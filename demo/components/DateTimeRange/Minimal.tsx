import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storuProps: StoryProps) => {
  return (
    <L.Div>
      <L.DateTimeRange />
    </L.Div>
  );
};
