import React from 'react';
import * as L from '../../../korus-ui';
import { Span } from '../../../korus-ui/components/Span';
import { StateButtonGroup } from '../StateButtonGroup';

export const Basic = (args: any): React.ReactElement => {
  const [value, setValue] = React.useState(1);
  const [props, setProps] = React.useState<any>();

  return (
    <L.Div _demoStory>
      <L.H4 _title>Rating</L.H4>
      <L.Div>
        <L.Rating max={10} value={value} {...props} onChange={(ev) => setValue(ev.component.value)} />
        <br />
        <br />
        <Span>Кастомизация иконок: </Span>
        <br />
        <L.Rating
          max={10}
          value={value}
          {...props}
          onChange={(ev) => setValue(ev.component.value)}
          iconRender={({
            elementProps: { className },
          }) => <Span _ratingEmpty _ratingFilled={className?.includes('filled')} />}
        />
      </L.Div>
      <br />
      <L.Button onClick={() => setValue(0)}>Обнулить рейтинг</L.Button>
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'ReadOnly', props: { isReadOnly: true } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
