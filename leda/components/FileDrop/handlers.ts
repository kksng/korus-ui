import * as React from 'react';
import { DropzoneRef } from 'react-dropzone';
import { checkFiles } from './helpers';
import {
  ChangeEventHandler, FileDropInnerError, FileDropProps,
} from './types';

export const createClickHandler = (
  { onClick, isDisabled }: FileDropProps,
  ref: React.MutableRefObject<DropzoneRef | null>,
): React.MouseEventHandler => (ev: React.MouseEvent<HTMLDivElement>): void => {
  if (!isDisabled && (ev.target as HTMLElement).tagName === 'BUTTON') ref.current?.open();

  onClick?.(ev);
};


export const createChangeHandler = (
  props: FileDropProps,
): ChangeEventHandler => (
  accepted,
  rejected,
  ev,
): { error: FileDropInnerError | null, file: File } => {
  const { name, onChange } = props;

  // В обработчик передаем только те принятые файлы, которые еще не были добавлены
  const { file, error } = checkFiles(props, accepted, rejected);

  const customEvent = {
    ...ev,
    component: {
      error,
      name,
      value: file,
    },
  };

  onChange?.(customEvent);

  return { error, file };
};
