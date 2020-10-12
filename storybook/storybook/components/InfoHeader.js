// @flow
import * as React from 'react';
import * as L from '@korus/leda';
import type { ContextType } from './Story';

export const InfoHeader = (props: ContextType): React.Node => {
  if (!props) return null;

  const { kind, story } = props;

  const name = kind.split(/\|/).pop();

  return <L.H2 _title>{name} {story}</L.H2>;
};
