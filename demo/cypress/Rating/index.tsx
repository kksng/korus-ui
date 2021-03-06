import * as React from 'react';
import * as L from '../../../korus-ui';
import { Span } from '../../../korus-ui/components/Span';

export const Rating = () => {
  const [value, setValue] = React.useState(1);
  const [props, setProps] = React.useState<any>();

  return (
    <L.Div _demoStory>
      <L.H4 _title>Rating</L.H4>
      <L.Div>
        <L.Rating
          id="default"
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
          id="custom"
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
      <L.Button id="reset" onClick={() => setValue(0)}>Обнулить рейтинг</L.Button>
      <br />
      <br />
      <L.H4 _title>Read Only</L.H4>
      <br />
      <L.Div>
        <L.Rating
          id="disabled"
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
