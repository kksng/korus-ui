import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import { ColProps } from './types';

export const Col = htmlTagFactory('Col') as React.FC<ColProps>;
