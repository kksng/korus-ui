import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import { TBodyProps } from './types';

export const TBody = htmlTagFactory('TBody') as React.FC<TBodyProps>;
