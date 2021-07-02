import * as React from 'react';
import * as L from '../../../korus-ui';
import { getWordEnding } from '../../../korus-ui/utils';
import { StoryProps } from '../../types';

export const CheckBoxes = (storyProps: StoryProps): React.ReactElement => {
  const [value, setValue] = React.useState<string[]>(['London', 'Paris']);

  return (
    <L.Div _box _inner _demoBg>
      <L.MultiSelect
        data={[
          'London',
          'Islamabad',
          'Berlin',
          'Washington',
          'Paris',
          'Rome',
          'Tokyo',
          'Budapest',
          'Ottawa',
          'Moscow',
        ]}
        maxTags={3}
        shouldKeepSuggestions
        shouldSelectedGoFirst
        canSelectAll
        selectAllItemRender={(): React.ReactElement => <L.Span>Все</L.Span>}
        _width-40
        hasClearButton
        onChange={(ev): void => {
          console.log('ev.component.selectedValue', ev.component.selectedValue);
          console.log('ev.component.deselectedValues', ev.component.deselectedValues);
          console.log('ev.component.value', ev.component.value);
          setValue(ev.component.value as string[]);
        }}
        hasCheckBoxes
        itemRender={({ componentProps, Element, elementProps }): React.ReactElement => {
          const { isSelected } = componentProps;
          console.log('elementProps', elementProps);
          console.log('componentProps', componentProps);
          return (
            <L.Span _txt-bold={isSelected}>
              <Element {...elementProps} _width-100 />
            </L.Span>
          );
        }}
        tagsUnionRender={({ elementProps, componentProps, Element }): React.ReactElement => {
          const { value } = componentProps;
          const word = getWordEnding({
            count: value?.length ?? 0, five: 'раз', one: 'раз', two: 'раза',
          });
          return (
            <Element {...elementProps}>
              всем привет {value?.length} {word}
            </Element>
          );
        }}
        value={value}
      />
    </L.Div>
  );
};
