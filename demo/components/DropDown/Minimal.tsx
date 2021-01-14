import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => {
  return (
    <L.Div>
      <L.DropDown>
        <L.Span>Names</L.Span>
        <L.Ul>
          <L.Li>
            <L.A>Shōtarō Kaneda</L.A>
          </L.Li>
          <L.Li>
            <L.A>Tetsuo Shima</L.A>
          </L.Li>
          <L.Li>
            <L.A>Kei</L.A>
          </L.Li>
          <L.Li>
            <L.A>Kaori</L.A>
          </L.Li>
        </L.Ul>
      </L.DropDown>
    </L.Div>
  );
};
