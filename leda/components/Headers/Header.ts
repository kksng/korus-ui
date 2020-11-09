import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import { HeaderProps } from './types';

export const Header = htmlTagFactory('Header') as React.FC<HeaderProps>;
