/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const DateTimeRange = (storyProps: StoryProps): React.ReactElement => {
  const [props, setProps] = React.useState<{
    isDisabled: boolean | undefined;
    isOpen: boolean | undefined;
  }>({ isDisabled: false, isOpen: undefined });
  const [DTRValue, setDTRValue] = React.useState<[string, string]>([
    '12.05.2018 12:30',
    '15.05.2018 16:30',
  ]);

  return (
    <L.Div _demoStory>
      <L.H3 _title>DateTimeRange</L.H3>
      <br />
      <br />
      <L.H4 _title>Basic Use</L.H4>
      <L.Div id="basicUsage">
        <L.Div style={{ display: 'flex' }}>
          <L.DateTimeRange
            min={new Date(2001, 3, 14, 16, 30)}
            max={new Date(2019, 5, 20, 17, 0)}
            value={DTRValue}
            name="DateTimeRange"
            onChange={(ev) => {
              const {
                component: { date, value, name },
              } = ev;
              console.log('date', date);
              console.log('value', value);
              console.log('name', name);
              setDTRValue(value);
            }}
            isRequired
            _width50
            {...props}
          />
        </L.Div>
      </L.Div>
      <br />
      <br />
      <L.H4 _title>isDisabled</L.H4>
      <L.Div style={{ display: 'flex' }} _disabledField>
        <L.DateTimeRange isDisabled _width50 />
      </L.Div>
    </L.Div>
  );
};
