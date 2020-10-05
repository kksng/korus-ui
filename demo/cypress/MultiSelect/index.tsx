import * as React from 'react';

import * as L from '../../../leda';
import { getWordEnding } from '../../../leda/utils';


export const MultiSelect = (): React.ReactElement => {
  const dataArray = [
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
  ];

  const [value, setValue] = React.useState<string[]>(['London', 'Paris']);

  return(
    <L.Div _demoStory>
      <L.P>MultiSelect with checkboxes</L.P>
      <L.MultiSelect
        id="MSCheckboxes"
        data={dataArray}
        maxTags={3}
        shouldKeepSuggestions
        shouldSelectedGoFirst
        canSelectAll
        selectAllItemRender={() => <L.Span _txt-success>Select all</L.Span>}
        _width-40
        hasClearButton
        onChange={ev => {
          setValue(ev.component.value as string[]);
        }}
        hasCheckBoxes
        itemRender={({ componentProps, Element, elementProps }) => {
          const { isSelected } = componentProps;
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
  )
}
