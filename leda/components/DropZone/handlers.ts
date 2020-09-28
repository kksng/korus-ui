import * as React from 'react';
import { DropzoneRef } from 'react-dropzone';
import { isFunction } from 'lodash';
import { checkFiles } from './helpers';
import {
  ChangeEventHandler, DropZoneProps, DropZoneState, FileType,
} from './types';

export const createClickHandler = (
  { onClick, isDisabled }: DropZoneProps,
  state: DropZoneState,
  ref: React.MutableRefObject<DropzoneRef | null>,
): React.MouseEventHandler => (ev: React.MouseEvent<HTMLDivElement>): void => {
  if (!isDisabled && ref.current && (ev.target as HTMLDivElement).tagName === 'BUTTON') ref.current.open();

  if (isFunction(onClick)) onClick(ev);
};


export const createChangeHandler = (
  props: DropZoneProps,
  state: DropZoneState,
  setState: React.Dispatch<React.SetStateAction<DropZoneState>>,
): ChangeEventHandler => (
  accepted,
  rejected,
  ev,
  removedFile,
) => {
  const { value: valueProp, onChange } = props;

  const value = valueProp || state;

  // В обработчик передаем только те принятые файлы, которые еще не были добавлены
  const [acceptedFiles, rejectedFiles] = !removedFile ? checkFiles(props, state, accepted, rejected) : [accepted, rejected];

  const acceptedWithRemoved = removedFile ? (value.acceptedFiles as FileType[]).filter((file: FileType): boolean => file !== removedFile) : [...acceptedFiles, ...value.acceptedFiles];

  const newValue = {
    acceptedFiles: acceptedWithRemoved,
    rejectedFiles,
  };

  const customEvent = {
    ...ev,
    component: {
      ...ev?.target,
      dropped: {
        acceptedFiles: accepted,
        rejectedFiles: rejected,
      },
      value: newValue,
      removedFile,
    },
  };
  // контролируемый режим
  if (isFunction(onChange)) {
    onChange(customEvent);
  }

  if (valueProp) return newValue;

  // неконтролируемый режим
  setState(newValue);

  return newValue;
};
