import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import { TrProps } from './types';

export const Tr = htmlTagFactory('Tr') as React.FC<TrProps>;
