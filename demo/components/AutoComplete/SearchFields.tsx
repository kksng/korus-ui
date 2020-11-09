import * as React from 'react';
import { isObject } from 'lodash';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

export const customItemRender: L.AutoCompleteTypes.AutoCompleteProps['itemRender'] = (renderData) => {
  const { componentProps: { item }, elementProps } = renderData;

  if (!isObject(item)) return null;

  return (
    <L.Li {...elementProps}>
      <L.Small>
        {item.city}
        <br />
        <L.Span _txtGray>
          country
          {' '}
          {item.country}
          <br />
          code
          {' '}
          {item.code}
        </L.Span>
      </L.Small>
    </L.Li>
  );
};

// eslint-disable-next-line
export const SearchFields = (componentProps: any) => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState('');

  return (
    <L.Div _box _inner _demoBg>
      <L.AutoComplete
        data={[
          { code: '10000', city: 'London', country: 'England and the United Kingdom' },
          { code: '10200', city: 'Islamabad', country: 'Pakistan' },
          { code: '10230', city: 'Berlin', country: 'Germany' },
          { code: '11000', city: 'Washington', country: 'United States of America' },
          { code: '12000', city: 'Paris', country: 'France' },
          { code: '13000', city: 'Rome', country: 'Italy' },
          { code: '12100', city: 'Tokyo', country: 'Japan' },
          { code: '13200', city: 'Budapest', country: 'Hungary' },
          { code: '12130', city: 'Ottawa', country: 'Canada' },
          { code: '11230', city: 'Moscow', country: 'Russia' },
        ]}
        value={value}
        textField="city"
        searchFields={['city', 'code']}
        onChange={(ev) => setValue(ev.component.value)}
        itemRender={customItemRender}
        placeholder="Type your city..."
        hasClearButton
        isRequired
        _width30
        {...props}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'Loading', props: { isLoading: true } },
          { text: 'Opened', props: { isOpen: true } },
          { text: 'Disabled', props: { isDisabled: true } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
