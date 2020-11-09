import * as React from 'react';
import { isFunction } from 'lodash';
import { DropzoneRef } from 'react-dropzone';
import { getErrorCode } from './helpers';
import { CustomEventHandler } from '../../commonTypes';
import { FileUploadProps } from './types';
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

interface LoadHandler {
  (accepted: File[], rejected: File[]): void,
}

export const createChangeHandler = (props: FileUploadProps) => (accepted: File[], rejected: File[]) => {
  const { onChange } = props;

  const customEvent = (() => {
    const value = accepted[0] || rejected[0];

    const error = (() => {
      if (rejected[0] != null) {
        const errorCode = getErrorCode(rejected[0], props);
        return ({
          errorCode,
          errorMessage: errorCodeToMessage(errorCode),
        });
      }
      return null;
    })();

    return ({
      component: {
        error,
        value,
      },
    });
  })();

  onChange?.(customEvent);
};

export const createLoadHandler = (props: FileUploadProps): LoadHandler => (accepted, rejected) => {
  const { onFileLoad } = props;

  const rejectedWithErrors = rejected.map((item) => ({
    ...item,
    errorCode: getErrorCode(item, props),
  }));

  // Обрабатываем файлы, принятые ядром.
  // Перенос файлов с ошибкой в rejected
  const acceptedFiles: File[] = accepted.filter((file) => {
    const errorCode = getErrorCode(file, props);
    // Если ошибки обнаружены (0 - отсутствие ошибок)
    if (errorCode !== 0) {
      rejectedWithErrors.push({
        ...file,
        errorCode,
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
