import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import { ColGroupProps } from './types';

export const ColGroup = htmlTagFactory('ColGroup') as React.FC<ColGroupProps>;
