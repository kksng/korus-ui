import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import { TFootProps } from './types';

export const TFoot = htmlTagFactory('TFoot') as React.FC<TFootProps>;
