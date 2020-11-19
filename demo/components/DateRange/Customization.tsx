import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

// eslint-disable-next-line
export const Customization = (storyProps: StoryProps): React.ReactElement => {
  return (
    <L.Div _box _inner _demoBg>
      <L.DateRange
        name="DateRange"
        placeholder={['', 'до']}
        inputsRender={[({Element, elementProps}) => {
          return (
            <>
              <L.Span _margin-left _txt-warning>from</L.Span>
              <Element {...elementProps} />
            </>
          );
        }, null]}
      />
    </L.Div>
  );
};
