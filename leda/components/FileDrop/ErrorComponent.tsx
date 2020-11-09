import * as React from 'react';
import { Span } from '../Span';
import { Button } from '../Button';
import { ErrorComponentProps } from './types';

export const ErrorComponent = (props: ErrorComponentProps) => {
  const {
    theme, errorMessage, ErrorItem, isDisabled, combinedButtonClassNames,
  } = props;

  return (
    <ErrorItem className={theme.description}>
      <Span className={theme.errorIcon} />
      <Span>
        Не удалось загрузить файл
        {errorMessage ? `. ${errorMessage}` : null}
      </Span>
      <Button
        className={combinedButtonClassNames}
        isDisabled={isDisabled}
      >
        <Span className={theme.retryIcon} />
        {' '}
        Заменить файл
      </Button>
    </ErrorItem>
  );
};
