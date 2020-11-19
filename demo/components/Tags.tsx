
import * as React from 'react';
import * as L from '../../leda';
import { StoryProps } from '../types';

export const Tags = (StoryProps: StoryProps) => (
  <L.Div _demoStory>
    <L.H4 _title>Tags</L.H4>
    <br />
    <L.Tags>
      <L.Tag>Москва</L.Tag>
      <L.Tag>Санкт-Петербург</L.Tag>
      <L.Tag>Воронеж</L.Tag>
      <L.Tag>Старый Оскол</L.Tag>
    </L.Tags>
  </L.Div>
);
