import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import { HeaderProps } from './types';

export const H1 = htmlTagFactory('H1') as React.FC<HeaderProps>;
