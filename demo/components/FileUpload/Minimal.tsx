import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => {
  return (
    <L.Div>
      <L.FileUpload />
    </L.Div>
  );
};