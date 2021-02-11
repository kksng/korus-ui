import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Tags = (storyProps: StoryProps) => (
  <L.Div _demoStory>
    <L.H4 _title>Tags</L.H4>
    <br />
    <L.Tags>
      <L.Tag>Москва</L.Tag>
      <L.Tag
        name='spb'
        onIconClick={(ev) => {
          alert('Clicked'), ev;
        }}
      >
        Санкт-Петербург
      </L.Tag>
      <L.Tag>Воронеж</L.Tag>
      <L.Tag>Старый Оскол</L.Tag>
    </L.Tags>
  </L.Div>
);
