import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import { HeaderProps } from './types';

export const H6 = htmlTagFactory('H6') as React.FC<HeaderProps>;
