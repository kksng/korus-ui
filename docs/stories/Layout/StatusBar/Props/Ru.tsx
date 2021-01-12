import * as React from 'react';
import * as L from '../../../../../korus-ui';
import { Props } from '../../../../system/components/Props';
import { PropRow } from '../../../../system/components/PropRow';
import { StatusItemType } from './StatusItemType';

export const Ru = (): React.ReactElement => (
  <Props>
    <PropRow
      name="data"
      type={(
        <>
          <L.Span>string[] |&nbsp;</L.Span>
          <StatusItemType />
          []
        </>
      )}
    >
      Массив объектов или строк, которые представляют собой шаги
    </PropRow>
  </Props>
);

Ru.displayName = 'Ru';
