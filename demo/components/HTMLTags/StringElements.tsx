/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

const exampleCode = `
export const BlockElements = () => (
  <L.Div _box _inner>
    <br />
    <L.Span style={{ backgroundColor: '#e0ebb3' }} _padding>Элемент Span</L.Span>
    {' '}
    <L.Small style={{ backgroundColor: '#a9ebb4' }} _padding>Элемент Small</L.Small>
    {' '}
    <L.Span style={{ backgroundColor: '#eb818b' }} _padding>Элемент Span</L.Span>
    {' '}
    <L.I style={{ backgroundColor: '#5fe6e6' }} _padding>Элемент I</L.I>
    {' '}
    <L.B style={{ backgroundColor: 'gold' }} _padding>Элемент B</L.B>
  </L.Div>
);
`;

export const StringElements = (storyProps: StoryProps) => (
  <L.Div _box _inner>
    <br />
    <L.Span style={{ backgroundColor: '#e0ebb3' }} _padding>Элемент Span</L.Span>
    {' '}
    <L.Small style={{ backgroundColor: '#a9ebb4' }} _padding>Элемент Small</L.Small>
    {' '}
    <L.Span style={{ backgroundColor: '#eb818b' }} _padding>Элемент Span</L.Span>
    {' '}
    <L.I style={{ backgroundColor: '#5fe6e6' }} _padding _txtWarning>Элемент I</L.I>
    {' '}
    <L.B style={{ backgroundColor: 'gold' }} _padding _txtSuccess>Элемент B</L.B>
  </L.Div>
);
