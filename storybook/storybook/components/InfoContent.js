// @flow
import * as React from 'react';
import * as L from '@korus/leda';

type InfoContentProps = {
  text?: string | React$Node,
  additionalInfo?: React.Node,
}

export const InfoContent = ({ text, additionalInfo }: InfoContentProps) => {
  if (!text) return '';

  const addInfo = !additionalInfo
    ? null
    : additionalInfo;

  return (
    <React.Fragment>
      <L.Span><p>{text}</p></L.Span>
      {addInfo}
      <L.Div _clear />
      <br />
    </React.Fragment>
  );
};
