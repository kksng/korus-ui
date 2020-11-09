import * as React from 'react';
import accept from 'attr-accept';
import { isString, isNumber } from 'lodash';
import {
  COMPONENTS_NAMESPACES, ERROR_MESSAGES, FileErrorCodes, MAX_FILE_SIZE, MIN_FILE_SIZE,
} from '../../constants';
import { Div } from '../Div';
import {
  FileDropProps, FileDropInnerError,
} from './types';
import { A } from '../A';
import { globalDefaultTheme } from '../LedaProvider';

export const compareFiles = (firstFile: File, secondFile: File): boolean => {
  if (firstFile.size !== secondFile.size) return false;

  const firstFileDate = new Date(firstFile.lastModified);

  const secondFileDate = new Date(secondFile.lastModified);

  return firstFileDate.getTime() !== secondFileDate.getTime();
};

// Проверка не добавлен ли уже один из выбранных файлов
export const checkHasThisFileAlreadyBeenLoaded = (props: FileDropProps, file: File): boolean => {
  const { value } = props;
  // Если файл найден по имени, то проверяем равен по размеру и дате последнего изменения
  return !!value && compareFiles(value, file);
};

export const getErrorCode = (props: FileDropProps, file: File): number => {
  const {
    allowedFiles,
    forbiddenFiles,
    maxFileNameLength = 255,
    minFileSize = MIN_FILE_SIZE,
    maxFileSize = MAX_FILE_SIZE,
  } = props;

  // Ошибка - файл уже существует
  if (checkHasThisFileAlreadyBeenLoaded(props, file)) return FileErrorCodes.AlreadyLoaded;

  // Ошибка типа
  if (allowedFiles) {
    const isAccepted = accept({
      name: file.name,
      type: file.type,
    }, allowedFiles);
    if (!isAccepted) return FileErrorCodes.WrongFileFormat;
  }

  // Ошибка типа. Запрещенные файлы
  if (forbiddenFiles) {
    const isAcceptedForbidden = accept({
      name: file.name,
      type: file.type,
    }, forbiddenFiles);

    if (isAcceptedForbidden) return FileErrorCodes.WrongFileFormat;
  }

  // Ошибка по минимальному размеру
  if (file.size < minFileSize) return FileErrorCodes.FileIsTooSmall;

  // Ошибка по максимальному размеру
  if (file.size > maxFileSize) return FileErrorCodes.FileIsTooBig;

  // Ошибка по максимальной длине имени файла
  if (file.name.length > maxFileNameLength) return FileErrorCodes.NameIsTooLong;

  // Ошибка не найдена
  return FileErrorCodes.None;
};

export const errorCodeToMessage = (errorCode: number): string => {
  const err = ERROR_MESSAGES.find((errorMessage): boolean => errorCode === errorMessage.errorCode);
  if (err === undefined) throw new Error('FileDrop errorCodeToMessage error: wrong error code');
  return err.message;
};

export const getErrorMessage = (error: FileDropInnerError | Error | string): string => {
  if (isString(error)) return error;
  if (error instanceof Error) return error.message;
  if (isNumber(error.errorCode)) return errorCodeToMessage(error.errorCode);
  return 'FileDrop getErrorMessage error: unknown error';
};

// Проверка на количество файлов и уже добавленные файлы
export const checkFiles = (
  props: FileDropProps,
  accepted: File[],
  rejected: File[],
): { file: File, error: FileDropInnerError | null } => {
  const rejectedFile = rejected[0];

  if (rejected.length > 1) {
    // превышено максимальное количество файлов
    return {
      file: rejectedFile,
      error: {
        errorCode: FileErrorCodes.TooManyFiles,
        errorMessage: errorCodeToMessage(FileErrorCodes.TooManyFiles),
      },
    };
  }

  if (rejectedFile) {
    const errorCode = getErrorCode(props, rejectedFile);
    return {
      file: rejectedFile,
      error: {
        errorCode,
        errorMessage: errorCodeToMessage(errorCode),
      },
    };
  }

  const acceptedFile = accepted[0];

  // if props.value exists, a file had been loaded
  const errorCode = !props.value && getErrorCode(props, acceptedFile);

  // если ошибок нет errorCode равен 0
  if (errorCode && errorCode !== 0) {
    return {
      file: acceptedFile,
      error: {
        errorCode,
        errorMessage: errorCodeToMessage(errorCode),
      },
    };
  }

  return {
    file: acceptedFile,
    error: null,
  };
};

export const DescriptionMessage = (props: { children: string }): React.ReactElement => {
  const { children: message } = props;

  const shouldWrapMessage = isString(message) && message.length;

  return (shouldWrapMessage ? <Div _block-inline _txt-gray _txt-small>{message}</Div> : message) as React.ReactElement;
};

export const createDownloadLink = (file: File, fileName: string | undefined, theme: typeof globalDefaultTheme[typeof COMPONENTS_NAMESPACES.fileDrop]): React.ReactElement | null => {
  if (!fileName) return null;

  const isIE = !!window.navigator?.msSaveOrOpenBlob;

  const linkProps = isIE
    ? { onClick: (): boolean => window.navigator.msSaveOrOpenBlob(file, fileName) }
    : { href: URL.createObjectURL(file), download: fileName };

  return (
    <A theme={theme.fileDownloadLink} {...linkProps}>
      {fileName}
    </A>
  );
};
