import * as React from 'react';

import * as L from '~';
import { getWordEnding } from '~/utils';


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

  const dataObject = [
    {label: 'London'},
    {label: 'Islamabad'},
    {label: 'Berlin'},
    {label: 'Washington'},
    {label: 'Paris'},
  ]

  const [value, setValue] = React.useState<string[]>(['London', 'Paris']);
  const [value1, setValue1] = React.useState<{label: string}[]>();
  const [value2, setValue2] = React.useState<string[]>();

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
      <br />
      <br />
      <L.P>MultiSelect default dataObject</L.P>
      <L.MultiSelect
        id="MSDefaultWithDataObject"
        compareObjectsBy="label"
        data={dataObject}
        textField="label"
        defaultValue={[{label: 'London'}]}
        _width40
        canSelectAll
        selectAllItemRender={() => 'Select all'}
        onChange={ev => {
          setValue1(ev.component.value as {label: string}[]);
        }}
        value={value1}
      >
      </L.MultiSelect>
      <br />
      <br />
      <L.P>MultiSelect default dataArray</L.P>
      <L.MultiSelect
        id="MSDefaultWithDataArray"
        data={dataArray}
        textField="label"
        defaultValue={['London']}
        _width40
        canSelectAll
        onChange={ev => {
          setValue2(ev.component.value as string[]);
        }}
        value={value2}
      >
      </L.MultiSelect>
    </L.Div>
  )
}
