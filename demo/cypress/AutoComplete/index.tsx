/* eslint-disable no-alert */
/* eslint-disable no-console */

import * as React from 'react';
import * as L from '../../../leda';

export const AutoComplete = (): React.ReactElement => {
  const [objectValue1, setObjectValue1] = React.useState<string | null>(null);
  const [objectValue4, setObjectValue4] = React.useState<string | null>(null);
  const [stringValue2, setStringValue2] = React.useState<string | null>(null);
  const [stringValue3, setStringValue3] = React.useState<string | null>(null);
  const [stringValue5, setStringValue5] = React.useState<string | null>(null);
  const [objectValue6, setObjectValue6] = React.useState<string | null>(null);
  const [stringValue7, setStringValue7] = React.useState<string | null>(null);

  const itemRender1 = ({
    Element, elementProps, componentProps,
  }: any) => {
    const {
      item, textField,
    } = componentProps;
    return (
      <Element
        {...elementProps}
        _txtSuccess={item.region === 'Asia'}
        _txtBold={item.region === 'Europe'}
      >
        {item[textField]} (region: {item.region})
      </Element>
    );
  };
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>(undefined);
  const noSuggestionsRenderNull = () => null;
  const noSuggestionsRenderVal = () => <L.Div _txtCenter _inner _nodata>набери что-то, что я знаю</L.Div>;
  const testFunction = (event: {}) => {
    console.log(event);
  };

  return (
    <>
      <L.Div _demoStory _flexRow>
        <L.AutoComplete
          data={[
            'London',
            'Magadan',
            'Berlin',
            'Washington',
            'Paris',
            'Rome',
            'Tokyo',
            'Budapest',
            'Ottawa',
            'Moscow',
          ]}
          name="AutoComplete2"
          onChange={(event) => setStringValue2(event.component.value)}
          filterRule="startsWith"
          hasClearButton
          minSearchLength={0}
          onBlur={(event) => setStringValue2(event.component.value)}
          placeholder="Type your city..."
          _width30
        />
        <L.AutoComplete
          data={[
            'London',
            'Islamabad',
            'Berlin',
          ]}
          name="AutoComplete3"
          onChange={(event) => setStringValue3(event.component.value)}
          filterRule="smart"
          minSearchLength={3}
          onBlur={(event) => testFunction(event)}
          shouldCorrectValue
          value={stringValue3}
          _width30
        />
        <L.AutoComplete
          data={[
            { name: 'Paris', region: 'Europe' },
            { name: 'Berlin', region: 'Europe' },
            { name: 'Prague', region: 'Europe' },
            { name: 'New York', region: 'America' },
            { name: 'Rome', region: 'Europe' },
            { name: 'London', region: 'Europe' },
            { name: 'Bangkok', region: 'Asia' },
            { name: 'Tokyo', region: 'Asia' },
            { name: 'Delhi', region: 'Asia' },
          ]}
          name="AutoComplete4"
          onChange={(event) => {
            setObjectValue4(event.component.value);
            testFunction(event);
          }}
          filterRule="includes"
          isOpen={isOpen}
          noSuggestionsRender={noSuggestionsRenderVal}
          onBlur={() => console.log('OnBlur+')}
          itemRender={itemRender1}
          placeholder="Type your city..."
          textField="name"
          shouldCorrectValue
          value={objectValue4}
          _width30
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
      <L.Div _demoStory _flexRow>
        <L.AutoComplete
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
          name="AutoComplete5"
          onChange={(event) => setStringValue5(event.component.value)}
          isDisabled

          filterRule="startsWith"
          hasClearButton
          isOpen={isOpen}
          itemRender={({ Element, elementProps, componentProps }) => <Element {...elementProps} _txtSuccess>{componentProps.item}</Element>}
          noSuggestionsRender={noSuggestionsRenderVal}
          minSearchLength={3}
          onBlur={(event) => setStringValue5(event.component.value)}
          onFocus={() => console.log('OnFocus+')}
          placeholder="Type your city..."
          _width30
        />
        <L.AutoComplete
          data={[
            { name: 'Paris', region: 'Europe' },
            { name: 'Berlin', region: 'Europe' },
            { name: 'Prague', region: 'Europe' },
            { name: 'Rome', region: 'Europe' },
            { name: 'London', region: 'Europe' },
            { name: 'Bangkok', region: 'Asia' },
            { name: 'Tokyo', region: 'Asia' },
            { name: 'Delhi', region: 'Asia' },
          ]}
          name="AutoComplete6"
          onChange={(event) => setObjectValue6(event.component.value)}
          isLoading
          filterRule="includes"
          hasClearButton
          isOpen={isOpen}
          itemRender={({ Element, elementProps, componentProps }) => <Element {...elementProps} _txtSuccess>{componentProps.item}</Element>}

          onBlur={() => console.log('OnBlur+')}
          onFocus={() => console.log('OnFocus+')}
          shouldCorrectValue
          placeholder="Type your city..."
          textField="name"

          value={objectValue6}
          _width30
        />
        <L.AutoComplete
          data={[
            { name: 'Tokyo', region: 'Asia' },
            { name: 'Delhi', region: 'Asia' },
          ]}
          name="AutoComplete1"
          onChange={(event) => setObjectValue1(event.component.value)}
          hasClearButton
          isOpen
          noSuggestionsRender={noSuggestionsRenderNull}
          minSearchLength={0}
          onFocus={(event) => testFunction(event)}
          shouldCorrectValue
          textField="name"
          value={objectValue1}
          _width30
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
      <L.Div _demoStory _flexRow>
      <L.AutoComplete
        name="AutoComplete7"
        data={['1', '2', '3', '33']}
        onChange={(event) => setStringValue7(event.component.value)}
        value={stringValue7}
        minSearchLength={0}
        />
      </L.Div>
    </>
  );
};
