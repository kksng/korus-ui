import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const DisabledDates = (storyProps: StoryProps): React.ReactElement => {
  const [value, setValue] = React.useState('23.10.2018');

  return (
    <L.Div _box _inner _demoBg>
      <L.DatePicker
        data-test="datepicker"
        disabledDates={[
          new Date(2018, 9, 10),
          new Date(2018, 9, 13),
          [new Date(2018, 9, 16), new Date(2018, 9, 19)],
          [new Date(2018, 9, 27), new Date(2018, 9, 30)],
        ]}
        format="dd.MM.yyyy"
        onChange={ev => {
          console.log('change', ev);
          setValue(ev.component.value);
        }}
        value={value}
      />
    </L.Div>
  );
}
