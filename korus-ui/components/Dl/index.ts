import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';
import { DdProps, DlProps, DtProps } from './types';

export const Dl = htmlTagFactory('Dl') as React.FC<DlProps>;
export const Dt = htmlTagFactory('Dt') as React.FC<DtProps>;
export const Dd = htmlTagFactory('Dd') as React.FC<DdProps>;
