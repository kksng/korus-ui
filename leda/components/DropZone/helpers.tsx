import * as React from 'react';
import accept from 'attr-accept';
import { isString } from 'lodash';

import {
  ERROR_MESSAGES, FileErrorCodes, MAX_FILE_SIZE, MIN_FILE_SIZE,
} from '../../constants';
import { Div } from '../Div';
import {
  DropZoneError, DropZoneFileType, DropZoneProps, DropZoneState, FileType, ExternalFile, DropZoneFiles,
} from './types';
import { EMPTY_DROP_ZONE_FILES } from './constants';

/**
 * Helper compares files by size and date/time when it was last modified
 * @param {DropZoneFileType} firstFile
 * @param {DropZoneFileType} secondFile
 *
 * @returns {boolean}
 */
export const compareFiles = (firstFile: DropZoneFileType, secondFile: DropZoneFileType): boolean => {
  if (firstFile.size !== secondFile.size) return false;

  const firstFileDate = new Date(firstFile.lastModified);

  const secondFileDate = new Date(secondFile.lastModified);

  return firstFileDate.getTime() !== secondFileDate.getTime();
};

/**
 * Helper checks if selected file was already added
 * @param {DropZoneProps} props - properties of DropZone component
 * @param {DropZoneState} state - state of DropZone component
 * @param {FileType} file - selected file
 *
 * @returns {boolean}
 */
export const checkForAddedFile = (props: DropZoneProps, state: DropZoneState, file: FileType): boolean => {
  const { value: valueProp } = props;

  const value = valueProp || state;

  const alreadyAccepted = value.acceptedFiles;

  const itemIndex = alreadyAccepted.findIndex((acceptedItem: FileType): boolean => acceptedItem.name === file.name);

  // If the file was found by name, then check if it is equal in size and last modified date
  return itemIndex !== -1 && !compareFiles((alreadyAccepted[itemIndex] as DropZoneFileType), file as DropZoneFileType);
};

/**
 * Helper checks if newly added file suits all parameters and returns error code
 * @param {DropZoneProps} props - properties of DropZone component
 * @param {DropZoneState} state - state of DropZone component
 * @param {FileType} file - newly added file
 * @param {number} lastDropped - number of last dropped files
 *
 * @returns {number} - error code
 */
export const getErrorCode = (props: DropZoneProps, state: DropZoneState, file: FileType, lastDropped: number): number => {
  const {
    allowedFiles,
    value: valueProp,
    forbiddenFiles,
    maxFileNameLength = 255,
    maxFilesNumber,
    minFileSize = MIN_FILE_SIZE,
    maxFileSize = MAX_FILE_SIZE,
  } = props;

  const value = valueProp || state;

  const { acceptedFiles } = state;

  // Total amount of files
  const allFilesCount = (value.acceptedFiles ? value.acceptedFiles.length : acceptedFiles.length) + lastDropped;
  const hasMaxFilesError = maxFilesNumber && allFilesCount > maxFilesNumber;

  // Error - maximum number of files exceeded
  if (hasMaxFilesError) return FileErrorCodes.TooManyFiles;

  // Error - file already exists
  if (checkForAddedFile(props, state, file)) return FileErrorCodes.AlreadyLoaded;

  // Type error
  if (allowedFiles) {
    const isAccepted = accept({
      name: file.name,
      type: file.type,
    }, allowedFiles);
    if (!isAccepted) return FileErrorCodes.WrongFileFormat;
  }

  // Type error. Forbidden files
  if (forbiddenFiles) {
    const isAcceptedForbidden = accept({
      name: file.name,
      type: file.type,
    }, forbiddenFiles);

    if (isAcceptedForbidden) return FileErrorCodes.WrongFileFormat;
  }

  // Error og minimal size
  if ((file as DropZoneFileType).size < minFileSize) return FileErrorCodes.FileIsTooSmall;

  // Error of maximum size
  if ((file as DropZoneFileType).size > maxFileSize) return FileErrorCodes.FileIsTooBig;

  // Error on maximum file name length
  if (file.name.length > maxFileNameLength) return FileErrorCodes.NameIsTooLong;

  // Error was not found
  return FileErrorCodes.None;
};

/**
 * Helper checks new file for errors and adds it to acceptedFiles or rejectedFiles
 * @param {DropZoneProps} props - properties of DropZone component
 * @param {DropZoneState} state - state of DropZone component
 * @param {FileType[]} accepted - accepted files
 * @param {FileType[]} rejected - rejected files
 *
 * @returns {[FileType[], FileType[]]}
 */
export const checkFiles = (
  props: DropZoneProps,
  state: DropZoneState,
  accepted: FileType[],
  rejected: FileType[],
): [FileType[], FileType[]] => {
  // The number of files selected in the dialog box the last time
  const numberOfDropped = accepted.length + rejected.length;

  // Check the rejected files
  const rejectedFiles: FileType[] = rejected.map((file): FileType => ({ ...file, errorCode: getErrorCode(props, state, file, numberOfDropped) }));

  const acceptedFiles: FileType[] = accepted.filter((file): boolean => {
    const errorCode = getErrorCode(props, state, file, numberOfDropped);
    // If errors are detected (0 - no errors)
    if (errorCode !== 0) {
      const rejectedFile: FileType = file;

      (rejectedFile as DropZoneFileType).errorCode = errorCode;

      rejectedFiles.push(rejectedFile);

      return false;
    }
    // If the file doesn't exist yet then add it to acceptedFiles
    return true;
  });

  return [acceptedFiles, rejectedFiles];
};

/**
 * Helper creates component to display message
 * @param {{ children: string }} props - string passed as child to DescriptionMessage
 *
 * @returns {React.ReactElement} - component to display message
 */
export const DescriptionMessage = (props: { children: string }): React.ReactElement => {
  const { children: message } = props;

  const shouldWrapMessage = isString(message) && message.length;

  return (shouldWrapMessage ? <Div _block-inline>{message}</Div> : message) as React.ReactElement;
};

/**
 * Helper returns DropZone error
 * @param {DropZoneFileType | ExternalFile} file - rejected file
 *
 * @return {DropZoneError} - error message and code
 */
const getError = (file: DropZoneFileType | ExternalFile): DropZoneError => (ERROR_MESSAGES.find(
  (error: DropZoneError): boolean => (file as DropZoneFileType).errorCode === error.errorCode,
)) as DropZoneError;

/**
 * Helper returns error description
 * @param {DropZoneFileType | ExternalFile} file - rejected file
 *
 * @returns {string} - error description
 */
export const getErrorDescription = (file: DropZoneFileType | ExternalFile): string => getError(file)?.message ?? 'Неизвестная ошибка';

/**
 * Helper gets actual value of component's state
 * @param {DropZoneFiles | undefined | null} propValue - value passed through props in controlled mode
 * @param {DropZoneState} stateValue - value stored in component's state
 *
 * @returns {DropZoneFiles} - value of component's state
 */
export const getValue = (
  propValue: DropZoneFiles | undefined | null,
  stateValue: DropZoneState,
): DropZoneFiles => {
  if (propValue === undefined) return stateValue;

  if (propValue === null) {
    return EMPTY_DROP_ZONE_FILES;
  }

  return propValue;
};

/**
 * Helper removes file from file list
 * @param {FileType} removedFile - file removed from file list
 * @param {FileType[]} rejectedFiles - files that were rejected
 * @param {FileType[]} acceptedFilesFromState - accepted files stored in state in uncontrolled mode or passed through props in controlled mode
 *
 * @return {{ newDropped: DropZoneFiles, newValue: DropZoneFiles }}
 */
export const handleRemoveFile = (
  removedFile: FileType,
  rejectedFiles: FileType[],
  acceptedFilesFromState: FileType[],
): {
  newDropped: DropZoneFiles,
  newValue: DropZoneFiles,
} => {
  const newAcceptedFiles = acceptedFilesFromState.filter((file: FileType): boolean => file !== removedFile);
  const newDropped = {
    acceptedFiles: [],
    rejectedFiles: [],
  };
  const newValue = {
    acceptedFiles: newAcceptedFiles,
    rejectedFiles,
  };
  return { newDropped, newValue };
};

/**
 * Helper adds file to file list
 * @param {FileType[]} acceptedFiles - files accepted after check
 * @param {FileType[]} rejectedFiles - files rejected after check
 * @param {FileType[]} acceptedFilesFromState - accepted files stored in state in uncontrolled mode or passed through props in controlled mode
 *
 * @return {{ newDropped: DropZoneFiles, newValue: DropZoneFiles }}
 */
export const handleAddFile = (
  acceptedFiles: FileType[],
  rejectedFiles: FileType[],
  acceptedFilesFromState: FileType[],
): {
  newDropped: DropZoneFiles,
  newValue: DropZoneFiles,
} => {
  const newAcceptedFiles = [...acceptedFiles, ...acceptedFilesFromState];
  const newDropped = {
    acceptedFiles,
    rejectedFiles,
  };
  const newValue = {
    acceptedFiles: newAcceptedFiles,
    rejectedFiles,
  };
  return { newDropped, newValue };
};
