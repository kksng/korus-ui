import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import { THeadProps } from './types';

export const THead = htmlTagFactory('THead') as React.FC<THeadProps>;
