import * as React from 'react';

import { Span } from '~/components/Span';
import { Button } from '~/components/Button';
import { SuccessComponentProps } from './types';


export const SuccessComponent = (props: SuccessComponentProps) => {
  const {
    theme,
    downloadLink,
    SuccessItem,
    combinedButtonClassNames,
    isDisabled,
  } = props;

  return (
    <SuccessItem className={theme.description}>
      <Span className={theme.successIcon} />
      <Span>
        Файл
        {' '}
        {downloadLink}
        {' '}
        успешно загружен
      </Span>
      <Button
        className={combinedButtonClassNames}
        isDisabled={isDisabled}
      >
        <Span className={theme.retryIcon} />
        {' '}
        Заменить файл
      </Button>
    </SuccessItem>
  );
};
