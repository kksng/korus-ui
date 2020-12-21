import * as React from 'react';
import * as L from '../../../leda';
import { Span } from '../../../leda/components/Span';

export const Rating = () => {
  const [value, setValue] = React.useState(1);
  const [props, setProps] = React.useState<any>();

  return (
    <L.Div _demoStory>
      <L.H4 _title>Rating</L.H4>
      <L.Div>
        <L.Rating
          _default
          max={5}
          value={value}
          {...props}
          onChange={(ev) => setValue(ev.component.value)}
        />
        <br />
        <br />
        <Span>Кастомизация иконок: </Span>
        <br />
        <L.Rating
          _custom
          max={5}
          value={value}
          {...props}
          onChange={(ev) => setValue(ev.component.value)}
          iconRender={({ elementProps: { className } }) => (
            <Span _ratingEmpty _ratingFilled={className?.includes('filled')} />
          )}
        />
      </L.Div>
      <br />
      <L.Button onClick={() => setValue(0)}>Обнулить рейтинг</L.Button>
      <br />
      <br />
      <L.H4 _title>Read Only</L.H4>
      <br />
      <L.Div>
        <L.Rating
          _disabled
          max={5}
          value={value}
          isReadOnly={true}
          {...props}
          onChange={(ev) => setValue(ev.component.value)}
        />
      </L.Div>
    </L.Div>
  );
};
