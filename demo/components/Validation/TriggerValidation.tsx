/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../korus-ui';
import { validate } from '../../../korus-ui/components/Validation';
import { StoryProps } from '../../types';

export const TriggerValidation = (storyProps: StoryProps) => (
  <L.Div _box _inner>
    <L.Div>
      <L.Div _inner>
        <L.Input
          invalidMessage="Wrong email format"
          form="triggerValidation"
          name="Input1"
          isRequired
          validator="email"
          placeholder="trigger email validation"
        />
      </L.Div>
      <L.Div _inner>
        <L.Button
          onClick={() => validate('triggerValidation', 'Input1')}
          _warning
        >
            trigger validation
        </L.Button>
      </L.Div>
    </L.Div>
  </L.Div>
);
