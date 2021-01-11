import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import { TdProps } from './types';

export const Td = htmlTagFactory('Td') as React.FC<TdProps>;
