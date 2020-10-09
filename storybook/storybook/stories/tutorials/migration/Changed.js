/* eslint-disable react/prop-types */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

/* eslint-disable react/no-unescaped-entities */
export const Changed = () => (
  <L.Div _refs-wrapper _inner _box>
    <L.H1 _title>Изменения API</L.H1>
    <section>
      <L.H2>
        AutoComplete
      </L.H2>

      <L.Div _inner>
        <L.P>
          <b>clearButton</b> -> hasClearIcon
        </L.P>
        <L.P>
          <b>dataLoading</b> -> isLoading
        </L.P>
        <L.P>
          <b>debounce</b> - удалено, см.
          {' '}
          <L.A
            onClick={linkTo('Form|AutoComplete', 'Debounce')}
            target="_self"
          >
            Debounce
          </L.A>
        </L.P>
        <L.P>
          <b>disabled</b> -> isDisabled
        </L.P>
        <L.P>
          <b>noArbitraryValues</b> -> shouldCorrectValue
        </L.P>
        <L.P>
          <b>noDataTemplate</b> -> noSuggestionsRender, см.
          {' '}
          <L.A
            onClick={linkTo('Form|AutoComplete', 'Customization')}
            target="_self"
          >
            Customization
          </L.A>
        </L.P>
        <L.P>
          <b>onChange</b> - изменился формат эвента, см.
          {' '}
          <L.A
            onClick={linkTo('Form|AutoComplete', 'onChange')}
            target="_self"
          >
            onChange
          </L.A>
        </L.P>
        <L.P>
          <b>required</b> -> isRequired
        </L.P>
        <L.P>
          <b>valueField</b> - удалено, см.
          {' '}
          <L.A
            onClick={linkTo('Form|AutoComplete', 'data: Array<DataObject>')}
            target="_self"
          >
            data
          </L.A>
        </L.P>
      </L.Div>
    </section>
  </L.Div>
);
