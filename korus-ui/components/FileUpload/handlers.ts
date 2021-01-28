import * as React from 'react';
import { isFunction } from 'lodash';
import { DropzoneRef } from 'react-dropzone';
import { getErrorCode } from './helpers';
import { CustomEventHandler } from '../../commonTypes';
import {
  ChangeEventHandler,
  FileUploadError,
  FileUploadProps,
  RejectedFileType,
  LoadHandler,
} from './types';
import { errorCodeToMessage } from '../FileDrop/helpers';

export const createClickHandler = (props: FileUploadProps & { fileUploadRef: React.MutableRefObject<DropzoneRef | undefined>}): CustomEventHandler<React.MouseEvent<HTMLDivElement>> => (ev) => {
  const { isLoading, onClick, fileUploadRef } = props;
  const customEvent = {
    ...ev,
    defaultPrevented: false, // somehow it is true (prevented) by default
  };

  customEvent.preventDefault = () => {
    customEvent.defaultPrevented = true;
  };

  if (isFunction(onClick)) onClick(customEvent);

  if (customEvent.defaultPrevented) return;

  if (!isLoading && fileUploadRef.current) fileUploadRef.current.open();
};

export const createChangeHandler = (props: FileUploadProps): ChangeEventHandler => ({ acceptedFiles, rejectedFiles }) => {
  const { onChange } = props;

  const acceptedFile = acceptedFiles[0];
  const rejectedFile = rejectedFiles[0]?.file;
  const errorCode = rejectedFiles[0]?.errorCode;

  const customEvent = (() => {
    const error: FileUploadError | null = (() => {
      if (!errorCode) return null;
      return ({
        errorCode,
        errorMessage: errorCodeToMessage(errorCode),
      });
    })();

    return ({
      component: {
        error,
        value: acceptedFile || rejectedFile,
      },
    });
  })();

  onChange?.(customEvent);
};

export const createLoadHandler = (props: FileUploadProps): LoadHandler => (accepted, rejected) => {
  const { onFileLoad } = props;

  const rejectedWithErrors: RejectedFileType[] = rejected.map((file) => ({
    errorCode: getErrorCode(file, props),
    file,
  }));

  // Обрабатываем файлы, принятые ядром.
  // Перенос файлов с ошибкой в rejected
  const acceptedFiles: File[] = accepted.filter((file) => {
    const errorCode = getErrorCode(file, props);

    // Если ошибки обнаружены (0 - отсутствие ошибок)
    if (errorCode !== 0) {
      rejectedWithErrors.push({
        errorCode,
        file,
      });
      return false;
      // Если файла еще нет то добавляем в acceptedFiles
    }
    return true;
  });

  const newValue = {
    acceptedFiles,
    rejectedFiles: rejectedWithErrors,
  };

  const customEvent = {
    component: {
      value: newValue,
    },
  };

  if (isFunction(onFileLoad)) onFileLoad(customEvent);

  return newValue;
};
