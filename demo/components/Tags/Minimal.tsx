import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => (
  <L.Div>
    <L.Tags>
      <L.Tag>Shōtarō Kaneda</L.Tag>
      <L.Tag>Tetsuo Shima</L.Tag>
      <L.Tag>Kiyoko</L.Tag>
      <L.Tag>Takashi</L.Tag>
      <L.Tag>Masaru</L.Tag>
    </L.Tags>
  </L.Div>
);
