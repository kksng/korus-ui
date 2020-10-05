import * as React from 'react';
import { DropzoneRef } from 'react-dropzone';
import { isFunction } from 'lodash';

import { checkFiles, removeFromFileList, addToFileList } from './helpers';
import {
  ChangeEventHandler, DropZoneProps, DropZoneState,
} from './types';

/**
 * Function creates click event handler
 * @param {DropZoneProps} props - properties of DropZone component
 * @param {React.MutableRefObject<DropzoneRef | null>} ref - ref of DropZone component
 *
 * @returns {React.MouseEventHandler => (ev: React.MouseEvent<HTMLDivElement>): void} - click event handler
 */
export const createClickHandler = (
  { onClick, isDisabled }: DropZoneProps,
  ref: React.MutableRefObject<DropzoneRef | null>,
): React.MouseEventHandler => (ev: React.MouseEvent<HTMLDivElement>): void => {
  if (!isDisabled && ref.current && (ev.target as HTMLDivElement).tagName === 'BUTTON') ref.current.open();

  if (isFunction(onClick)) onClick(ev);
};

/**
 * Function creates change event handler
 * @param {DropZoneProps} props - properties of DropZone component
 * @param {DropZoneState} state - state of DropZone component
 * @param {React.Dispatch<React.SetStateAction<DropZoneState>>} setState - setState function of DropZone component
 *
 * @returns {ChangeEventHandler} - change event handler
 */
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

  const [acceptedFiles, rejectedFiles] = checkFiles(props, state, accepted, rejected);

  const { newDropped, newValue } = removedFile
    ? removeFromFileList(removedFile, rejected, value.acceptedFiles)
    : addToFileList(acceptedFiles, rejectedFiles, value.acceptedFiles);

  const customEvent = {
    ...ev,
    component: {
      ...ev?.target,
      dropped: newDropped,
      value: newValue,
      removedFile,
    },
  };
  // controlled mode
  if (isFunction(onChange)) {
    onChange(customEvent);
  }

  if (valueProp) return newValue;

  // uncontrolled mode
  setState(newValue);

  return newValue;
};
