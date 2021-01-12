import * as React from 'react';
import * as L from '../../../../../korus-ui';

const code = `
  interface StatusItem {
    [text: string]: any,
  }
`;


export const StatusItemType = (): React.ReactElement => (
  <L.Tooltip
    title={(
      <pre>{code}</pre>
    )}
  >
    <L.Span _txtType>
      StatusItem
    </L.Span>
  </L.Tooltip>
);

StatusItemType.displayName = 'StatusItemType';
