import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import { TableProps } from './types';

export const Table = htmlTagFactory('Table') as React.FC<TableProps>;
