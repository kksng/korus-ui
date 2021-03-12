import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps): React.ReactElement  => {
  
    return (
      <L.Div _box _inner _demoBg>
        <L.CountDown time={10000}/>
      </L.Div>
    );
  };
