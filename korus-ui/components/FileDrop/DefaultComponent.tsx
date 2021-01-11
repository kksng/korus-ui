import * as React from 'react';
import { Div } from '../Div';
import { Span } from '../Span';
import { DescriptionMessage } from './helpers';
import * as messages from '../../messages';
import { DefaultComponentProps } from './types';

export const DefaultComponent = (props: DefaultComponentProps) => {
  const {
    theme,
    combinedButtonClassNames,
    allowedFiles,
    forbiddenFiles,
    maxFileSize,
    minFileSize,
    DefaultItem,
    UploadButton,
  } = props;
  return (
    <DefaultItem className={theme.description}>
      <Div className={theme.cloudIcon} />
      <Span>
        Перетащите сюда файл для загрузки
      </Span>
      <Span>
        или
        {' '}
        <UploadButton
          className={combinedButtonClassNames}
        >
          выберите файл
        </UploadButton>
        {' '}
        на вашем компьютере
      </Span>
      {' '}
      <DescriptionMessage>
        {messages.getFileSizeDescription(minFileSize, maxFileSize, 'byte')}
      </DescriptionMessage>
      {' '}
      <DescriptionMessage>
        {messages.getFormatsDescription(allowedFiles)}
      </DescriptionMessage>
      {' '}
      <DescriptionMessage>
        {messages.getForbiddenFormatsDescription(forbiddenFiles)}
      </DescriptionMessage>
    </DefaultItem>
  );
};
