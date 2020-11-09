import * as React from 'react';
import * as L from '../../../leda';
import { SomeObject } from '../../../leda/commonTypes';
import { StateButtonGroup } from '../StateButtonGroup';

interface DataItem {
  region: string,
  city: string,
}

const data: DataItem[] = [
  { region: 'Europe', city: 'London' },
  { region: 'Europe', city: 'Islamabad' },
  { region: 'Europe', city: 'Berlin' },
  { region: 'America', city: 'Washington' },
  { region: 'Europe', city: 'Paris' },
  { region: 'Europe', city: 'Rome' },
  { region: 'Asia', city: 'Tokyo' },
  { region: 'Europe', city: 'Budapest' },
  { region: 'America', city: 'Ottawa' },
  { region: 'Europe', city: 'Moscow' },
  { region: 'America', city: 'Costa Ricco' },
]

export const Filterable = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState<DataItem | null>(data[0]);

  return (
    <L.Div _box _inner _demoBg>
      <L.DropDownSelect
        name="DDS"
        data={data}
        textField="city"
        placeholder="Choose a city..."
        hasClearButton
        value={value}
        onChange={(ev: L.DropDownSelectTypes.ChangeEvent<DataItem>) => {
          setValue(ev.component.value);
        }}
        onFilterChange={(ev) => {
          console.log('onFilterChange ev.component.value', ev.component.value);
        }}
        shouldFilterValues
        inputRender={({ Element, elementProps, componentProps }) => {
          return (
            <>
              {componentProps.suggestion && ` ${(componentProps.suggestion as DataItem)['region']}`}
              <Element
                {...elementProps}
                value={elementProps.value}
              />
            </>
          );
        }}
        _width40
        {...props}
      >
      </L.DropDownSelect>
      <br />
      <br />
      <L.P>Режим фильтрации</L.P>
      <StateButtonGroup
        data={[
          {
            text: 'Smart',
            props: { filterRule: 'smart' },
          },
          {
            text: 'StartsWith',
            props: { filterRule: 'startsWith' },
          },
          {
            text: 'Includes',
            props: {
              filterRule: 'includes',
            },
          },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
