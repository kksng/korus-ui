import * as React from 'react';
import { Div } from '../../components/Div';
import { NoSuggestionsProps } from './types';

export const NoSuggestions = ({ className }: NoSuggestionsProps): React.ReactElement => (
  <Div className={className}>Ничего не найдено</Div>
);
