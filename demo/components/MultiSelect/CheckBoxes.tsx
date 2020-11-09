import * as React from 'react';
import * as L from '../../../leda';
import { getWordEnding } from '../../../leda/utils';

export const CheckBoxes = (args: any): React.ReactElement => {
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
        selectAllItemRender={() => <L.Span _txt-success>Select all</L.Span>}
        _width-40
        hasClearButton
        onChange={ev => {
          console.log('ev.component.selectedValue', ev.component.selectedValue);
          console.log('ev.component.deselectedValues', ev.component.deselectedValues);
          console.log('ev.component.value', ev.component.value);
          setValue(ev.component.value as string[]);
        }}
        isOpen
        hasCheckBoxes
        itemRender={({ componentProps, Element, elementProps }) => {
          const { isSelected } = componentProps;
          console.log('elementProps', elementProps)
          console.log('componentProps', componentProps)
          return (
            <L.Span _txt-bold={isSelected}>
              <Element {...elementProps} _width-100/>
            </L.Span>
          )
        }}
        tagsUnionRender={({ elementProps, componentProps, Element }) => {
          const { value } = componentProps;
          const word = getWordEnding({ count: value?.length ?? 0, one: 'раз', two: 'раза', five: 'раз' });
          return (
            <Element {...elementProps}>
              всем привет {value?.length} {word}
            </Element>
          )
        }}
        value={value}
      >
      </L.MultiSelect>
    </L.Div>
  );
};
