import * as React from 'react';
import { isNumber, isString } from 'lodash';
import { RenderEvent, SomeObject } from '../../../korus-ui/commonTypes';
import * as L from '../../../korus-ui';
import { StateButtonGroup } from '../../components';
import { SuggestionElementProps, SuggestionItemProps } from '../../../korus-ui/src/SuggestionList/types';

const data = [
  { city: 'Moscow', id: 0 },
  { city: 'Minsk', id: 0 },
  { city: 'London', id: 1 },
  { city: 'Berlin', id: 2 },
  { city: 'Paris', id: 3 },
  { city: 'Stockholm', id: 4 },
  { city: 'Madrid', id: 5 },
  { city: 'Madrid', id: 6 },
];

const longStringData = [
  'Information about the status of payments for taxes, fees, insurance premiums, penalties, fines, and interest',
  'The act of joint reconciliation of calculations on taxes, fees, insurance premiums, penalties, fines, interest',
  'Certificate of performance by the taxpayer (payer of the fee, payer of insurance premiums, tax agent) of the obligation to pay taxes, fees, insurance premiums, penalties, fines, interest',
];
export const DropDownSelect = (args: SomeObject): React.ReactElement => {
  const [value1, setValue1] = React.useState<string | number | SomeObject | null>(null);
  const containerRef = React.useRef(null);
  const [value2, setValue2] = React.useState<SomeObject>({ city: 'London', id: 1 });
  const [props1, setProps1] = React.useState({});
  const [value3, setValue3] = React.useState<string | null>(null);
  const [props2, setProps2] = React.useState<any>({});
  const [value4, setValue4] = React.useState<string>('Berlin');
  const [value5, setValue5] = React.useState<string | null>(null);
  const [filterValue, setFilterValue] = React.useState('');
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>();
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleFilterChange = (ev: L.DropDownSelectTypes.ChangeEvent<string>): void => {
    const { value } = ev.component;
    setFilterValue(value);
    console.log('Filter value', value);
  };
  const handleChange = (ev: L.DropDownSelectTypes.ChangeEvent<string>): void => {
    const { value } = ev.component;
    setValue5(value);
    console.log('You have chosen', value);
  };

  const textField = 'name';
  const [value6, setValue6] = React.useState<SomeObject | null>(null);

  const testFunction = (event: L.DropDownSelectTypes.FocusEvent<SomeObject> | L.DropDownSelectTypes.ChangeEvent<SomeObject> | L.DropDownSelectTypes.BlurEvent<string>): void => {
    console.log(event);
  };
  const handleChange1 = (ev: L.DropDownSelectTypes.ChangeEvent<SomeObject>): void => {
    setValue6(ev.component.value);
  };

  const [value7, setValue7] = React.useState<SomeObject | null>(null);
  const [value8, setValue8] = React.useState(longStringData[0]);


  const itemRender = ({
    Element,
    elementProps,
    componentProps,
  }: RenderEvent<SuggestionItemProps, {}, SuggestionElementProps>): React.ReactNode => {
    const { item, textField } = componentProps;

    if (!item || isString(item) || isNumber(item)) return undefined;

    return (
      <Element
        {...elementProps}
        _txtSuccess={item.region === 'Asia'}
        _txtBold={item.region === 'Europe'}
      >
        {textField && item[textField]} (region: {item.region})
      </Element>
    );
  };
  const sort = (suggestion1: SomeObject, suggestion2: SomeObject): number => suggestion2.population - suggestion1.population;

  const noSuggestionsRender = (): JSX.Element => <L.Div _txtCenter _inner>Ничего не скажу по этому поводу</L.Div>;
  const noSuggestionsRenderNull = (): null => null;

  return (
    <>
      <L.Div
        style={{
          border: '1px solid green',
          padding: '200px 20px 20px 20px',
        }}
        ref={containerRef}
      >
        <L.DropDownSelect
          _attachedByUnderlining
          className="attachedByClassNameProp"
          id="DDSBoundingContainerRef"
          boundingContainerRef={containerRef}
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
          hasClearButton
          _width40
          value={value1}
          isLoading={isLoading}
          shouldFilterValues
          onChange={(ev): void => {
            console.log('ev.component', ev.component);
            setValue1(ev.component.value);
          }}
          onBlur={(ev): void => {
            console.log('ev.component.value', ev.component.value);
          }}
        />
      </L.Div>
      <L.Div _demoStory _flexRow>
        <L.DropDownSelect<SomeObject>
          shouldFilterValues
          id="Opened"
          onEnterPress={(ev): void => console.log('Enter', ev)}
          onFocus={testFunction}
          data={[
            { name: 'Paris', region: 'Europe' },
            { name: 'Berlin', region: 'Europe' },
            { name: 'Prague', region: 'Europe' },
            { name: 'Rome', region: 'Europe' },
            { name: 'London', region: 'Europe' },
            { name: 'Bangkok', region: 'Asia' },
            { name: 'Tokyo', region: 'Asia' },
            { name: 'Delhi', region: 'Asia' },
            { name: 'New-York' },
          ]}
          placeholder="Choose a city"
          onChange={handleChange1}
          value={value6}
          isOpen={isOpen}
          textField={textField}
          itemRender={itemRender}
          noSuggestionsRender={noSuggestionsRender}
          _width40
        />

        <L.DropDownSelect
          id="DDSCompareObjectsBy"
          data={data}
          textField="city"
          value={value2}
          placeholder="Choose a city"
          compareObjectsBy="id"
          onChange={(ev: L.DropDownSelectTypes.ChangeEvent<SomeObject>): void => {
            setValue2(ev.component.value);
            testFunction(ev);
          }}
          _width40
        />
        <br />
        <L.DropDownSelect
          id="DDSCompareObjectsWithFuctionInId"
          data={data}
          textField="city"
          placeholder="Choose a city"
          compareObjectsBy={(item): string => item.city}
          onChange={(ev: L.DropDownSelectTypes.ChangeEvent<SomeObject>): void => {
            setValue2(ev.component.value);
            testFunction(ev);
          }}
          _width40
        />
        <br />
        <L.DropDownSelect
          id="notCompared"
          data={data}
          textField="city"
          placeholder="Choose a city"
          compareObjectsBy="invalid"
          onChange={(ev: L.DropDownSelectTypes.ChangeEvent<SomeObject>): void => {
            setValue2(ev.component.value);
            testFunction(ev);
          }}
          _width40
        />

        <L.DropDownSelect
          id="DDSCompareObjectsByObjects"
          data={data}
          defaultValue={{ city: 'Berlin', id: 2 }}
          textField="city"
          compareObjectsBy={(item): number => item.id}
          onChange={testFunction}
          _width40
        />

        <L.DropDownSelect<string>
          id="DDSonBlur"
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
          hasClearButton
          shouldFilterValues
          value={value3}
          noSuggestionsRender={noSuggestionsRenderNull}
          onChange={(ev: L.DropDownSelectTypes.ChangeEvent<string>): void => {
            console.log('ev.component', ev.component);
            setValue3(ev.component.value);
          }}
          onBlur={testFunction}
          _width40
        />
      </L.Div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <L.P>Режим фильтрации</L.P>
      <StateButtonGroup
        data={[
          {
            props: { filterRule: 'smart' },
            text: 'Smart',
          },
          {
            props: { filterRule: 'startsWith' },
            text: 'StartsWith',
          },
          {
            props: {
              filterRule: 'includes',
            },
            text: 'Includes',
          },
        ]}
        setProps={setProps1}
      />
      <L.Button
        id="toggleIsDisabled"
        _warning={isDisabled}
        onClick={(): void => setIsDisabled(!isDisabled)}
      >
        Toggle isDisabled
      </L.Button>
      {' '}
      <L.Button
        id="toggleIsLoading"
        _warning={isLoading}
        onClick={(): void => setIsLoading(!isLoading)}
      >
        Toggle isLoading
      </L.Button>
      {' '}
      <L.Button
        id="toggleIsOpen"
        _warning={isOpen}
        onClick={(): void => setIsOpen(isOpen ? undefined : true)}
      >
        Toggle isOpen
      </L.Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <L.Div _demoStory _flexRow>
        <L.DropDownSelect
          id="DDSShouldAllowEmpty"
          data={[
            1,
            0,
            15,
            2,
            1000,
            1048,
            10000,
            100000,
            1000000,
            100000000,
          ]}
          defaultValue={0}
          _width40
        />

        <L.DropDownSelect
          id="DDSDisabled"
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
            'Costa Ricco',
          ]}
          placeholder="Choose a city..."
          shouldAllowEmpty
          hasClearButton
          value={value4}
          isDisabled={isDisabled}
          onChange={(ev: L.DropDownSelectTypes.ChangeEvent<string>): void => {
            setValue4(ev.component.value);
          }}
          onFilterChange={testFunction}
          shouldFilterValues
          _width40
          {...props2}
        />

        <L.DropDownSelect
          id="DDSFilterRule"
          value={value5}
          onChange={handleChange}
          shouldFilterValues
          filterValue={filterValue}
          onFilterChange={handleFilterChange}
          data={[
            'Moscow',
            'Berlin',
            'Paris',
            'Tallinn',
            'Riga',
            'Oslo',
            'London',
            'Madrid',
            'Lisbon',
            'Sofia',
            'Athens',
            'Prague',
            'Warsaw',
          ]}
          {...props1}
          _width40
        />

        <L.DropDownSelect
          id="DDSSortSuggestions"
          textField="city"
          sortSuggestions={sort}
          data={[
            { city: 'Moscow', population: 11800000 },
            { city: 'Berlin', population: 3760000 },
            { city: 'Paris', population: 2148000 },
            { city: 'Tallinn', population: 426000 },
            { city: 'Riga', population: 632000 },
            { city: 'Oslo', population: 681000 },
            { city: 'London', population: 8980000 },
            { city: 'Madrid', population: 6640000 },
            { city: 'Lisbon', population: 504000 },
            { city: 'Sofia', population: 1242000 },
            { city: 'Athens', population: 660000 },
            { city: 'Prague', population: 1309000 },
            { city: 'Warsaw', population: 1700000 },
            { city: 'Rome', population: 2870000 },
          ]}
        />

        <L.DropDownSelect
          id="DDSFocusCheck"
          data={data}
          value={value7}
          textField="city"
          onFocus={testFunction}
          onChange={(ev: L.DropDownSelectTypes.ChangeEvent<SomeObject>): void => {
            setValue7(ev.component.value);
          }}
          _width40
        />

        <L.DropDownSelect
          id="DDSLongStrings"
          data={longStringData}
          shouldFilterValues
          value={value8}
          onChange={(ev: L.DropDownSelectTypes.ChangeEvent<string>): void => {
            setValue8(ev.component.value);
          }}
          _width40
        />
        <br />
        <L.DropDownSelect
          _noData
          id="noData"
          shouldFilterValues
          value="no data, lol"
          onChange={(ev: L.DropDownSelectTypes.ChangeEvent<string>): void => {
            setValue8(ev.component.value);
          }}
          _width40
        />

        <L.DropDownSelect
          id="DDSRequired"
          isRequired
          data={data}
          textField="city"
          placeholder="Choose a city"
          form="form"
          name="name"
          _width40
        />
      </L.Div>
    </>
  );
};
