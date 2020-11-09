import * as React from 'react';
import { Li } from '../Li';
import { Span } from '../Span';
import {
  DropZoneFileType, ExternalFile, FileErrorCodes, RejectedFilesListProps,
} from './types';
import { getErrorDescription } from './helpers';

export const RejectedFilesList = (props: RejectedFilesListProps): React.ReactElement => {
  const { theme, value, maxFilesNumber } = props;

  const alreadyAccepted = value.acceptedFiles.length ? `Уже загружено - ${value.acceptedFiles.length}.` : '';

  const tooManyFiles = value.rejectedFiles.length > 0 && (value.rejectedFiles[0] as DropZoneFileType).errorCode === FileErrorCodes.TooManyFiles;

  return (tooManyFiles ? (
    <Li>
      <Span className={theme.rejectedMessage}>
        {`Превышено максимальное количество файлов. Максимум - ${maxFilesNumber}. ${alreadyAccepted}`}
      </Span>
    </Li>
  ) : (
    <>
      {(value.rejectedFiles as (DropZoneFileType | ExternalFile)[]).map((file, index): React.ReactElement => (
        <Li key={index.toString()}>
          <Span className={theme.rejectedMessage}>{`'${file.name || file.path}': - ${getErrorDescription(file)}`}</Span>
        </Li>
      ))}
    </>
  ));
};
