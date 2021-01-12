import * as React from 'react';

import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES, FileErrorCodes } from '../../constants';
import { globalDefaultTheme } from '../LedaProvider';
import { ValidationProps } from '../Validation/types';
import { LoadingComponentProps } from '../../src/LoaderComponent/types';

export { FileErrorCodes } from '../../constants';

/**
 * Properties of accepted files list
 */
export interface AcceptedFilesProps {
  /** Child React nodes */
  children?: React.ReactNode,
  /** Child DOM nodes */
  dropZoneFilesNode?: Element,
  /** onChange callback */
  onChange?: ChangeEventHandler,
}

/**
 * Change event
 */
export interface ChangeEvent {
  component: {
    /** Files that were added */
    dropped: DropZoneFiles,
    /** File that was removed */
    removedFile?: FileType,
    /** Actual state */
    value: DropZoneFiles,
  },
}

/**
 * Change event handler
 */
export type ChangeEventHandler = (
  /** Accepted files */
  accepted: FileType[],
  /** Rejected files */
  rejected: FileType[],
  /** Drag event or mouse event */
  ev?: React.DragEvent<HTMLElement> | React.MouseEvent<HTMLElement>,
  /** Removed file */
  removedFile?: FileType
) => void;

/**
 * Custom React elements of DropZone component
 */
export interface CustomElements {
  /** React component for accepted files list wrapper */
  AcceptedFiles: React.FC<AcceptedFilesProps>,
  /** React component for info block */
  Info: React.FC<InfoProps>,
  /** React component for rejected files list wrapper */
  RejectedFiles: React.FC<RejectedFilesProps>,
  /** React component for upload button */
  UploadButton: React.FC<UploadButtonProps>,
  /** React component for wrapper */
  Wrapper: React.FC<WrapperProps>,
}

/**
 * DropZone error object
 */
export interface DropZoneError {
  /** Error code */
  errorCode: FileErrorCodes,
  /** Error message */
  message: string,
}

/**
 * DropZone file type
 */
export interface DropZoneFileType extends File {
  /** Error code */
  errorCode?: FileErrorCodes,
  /** Date and time when file was last modified */
  lastModified: number,
  /** File path */
  path?: string,
  /** File preview */
  preview?: string,
}

/**
 * DropZone files
 */
export interface DropZoneFiles {
  /** List of accepted files */
  acceptedFiles: FileType[],
  /** List of rejected files by type or size */
  rejectedFiles: FileType[],
}

export interface DropZoneFilesProps {
  /** Массив файлов, который будет отображен в виде списка */
  files: FileType[],
  /** Признак отключения дропзоны */
  isDisabled?: boolean,
  /** Обработчик удаления файла */
  onChange: (
    acceptedFiles: FileType[],
    rejectedFiles: FileType[],
    ev: React.DragEvent<HTMLDivElement> | React.MouseEvent<HTMLAnchorElement>,
    removedFile: FileType,
  ) => void,
  /** Флаг обозначающий нужно ли отображать файлы */
  shouldRender: boolean,
  /** Тема компонента */
  theme: typeof globalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropZone],
  /** Принятые и отклоненные файлы */
  value: DropZoneState | NonNullable<DropZoneProps['value']>,
}

export interface DropZoneProps extends ValidationProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Отображение добавленных файлов */
  acceptedFilesRender?: CustomRender<DropZoneProps, DropZoneState, AcceptedFilesProps>,
  /** Разрешенные типы файлов, см. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Attributes. Передача нескольких типов файлов происходит через запятую (.png, image/jpeg). allowedFiles и forbiddenFiles вместе не могут находиться. */
  allowedFiles?: string,
  /** Классы, применяемые к компоненту */
  className?: string,
  /** DOM-нода в которой будет отрендерен список файлов */
  dropZoneFilesNode?: Element,
  /** Запрещенные типы файлов. см. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Attributes. Передача нескольких типов файлов происходит через запятую (.png, image/jpeg). allowedFiles и forbiddenFiles вместе не могут находиться. */
  forbiddenFiles?: string,
  /** Кастомизация описания компонента */
  infoRender?: CustomRender<DropZoneProps, DropZoneState, InfoProps>,
  /** Признак отключения дропзоны */
  isDisabled?: boolean,
  /** Состояние загрузки */
  isLoading?: boolean,
  /** Прогресс загрузки, число от 1 до 100 */
  loadingProgress?: number,
  /** Текст зарузки, по умолчанию "Загрузка..." */
  loadingText?: string,
  /** Кастомизация верстки состояния загрузки */
  loadingViewRender?: LoadingComponentProps['loadingViewRender'],
  /** Максимальная длина имени файла, по-умолчанию 255 символов */
  maxFileNameLength?: number,
  /** Максимальный размер файла, в байтах */
  maxFileSize?: number,
  /** Максимальное количество файлов */
  maxFilesNumber?: number,
  /** Минимальный размер файла, в байтах */
  minFileSize?: number,
  /** Функция обратного вызова для метода onChange */
  onChange?: (event: ChangeEvent) => void,
  /** Функция обратного вызова для метода onClick */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
  /** Реф */
  ref?: React.Ref<DropZoneRefCurrent>,
  /** Отображение отклоненных файлов */
  rejectedFilesRender?: CustomRender<DropZoneProps, DropZoneState, RejectedFilesProps>,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropZone],
  /** Текст кнопки загрузки файла, может принимать JSX */
  uploadButtonRender?: CustomRender<DropZoneProps, DropZoneState, UploadButtonProps>,
  /** Добавленные файлы */
  value?: DropZoneFiles | null,
  /** Кастомизация враппера */
  wrapperRender?: CustomRender<DropZoneProps, DropZoneState, WrapperProps>,
}

/**
 * DropZone current ref
 */
export interface DropZoneRefCurrent {
  /** Input element */
  input: HTMLInputElement | null,
  /** Wrapper element */
  wrapper: HTMLElement | null,
}

/**
 * DropZone state
 */
export type DropZoneState = DropZoneFiles;

/**
 * External file
 */
export interface ExternalFile {
  /** Link to download the file. If available, the file will be displayed in the list as available for download */
  link?: string,
  /** File name. Required for displaying in the list and deleting */
  name: string,
  /** Synonym for the file name. Required for displaying in the list and deleting */
  path?: string,
  /** File type */
  type?: string,
}

/**
 * Possible file types
 */
export type FileType = ExternalFile | DropZoneFileType;

/**
 * Properties of info block component
 */
export interface InfoProps {
  /** Child React nodes */
  children?: React.ReactNode,
  /** Custom class names */
  className?: string,
}

/**
 * Properties of rejected files list component
 */
export interface RejectedFilesListProps {
  /** Maximum files number allowed */
  maxFilesNumber?: number,
  /** Theme */
  theme: typeof globalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropZone],
  /** Value got from state or props */
  value: DropZoneState | NonNullable<DropZoneProps['value']>,
}

/**
 * Properties of rejected files list wrapper component
 */
export interface RejectedFilesProps {
  /** Child React nodes */
  children?: React.ReactNode,
  /** Custom class names */
  className?: string,
}

/**
 * Properties of upload button component
 */
export interface UploadButtonProps {
  /** Custom classes passed through _ */
  [x: string]: unknown,
  /** Child React nodes */
  children?: React.ReactNode,
  /** Custom class names */
  className?: string,
  /** onClick callback */
  onClick?: CustomEventHandler<React.MouseEvent>,
}

/**
 * Properties of wrapper component
 */
export interface WrapperProps {
  /** Child React nodes */
  children?: React.ReactNode,
  /** Custom class names */
  className?: string,
  /** Component's ref */
  ref: React.Ref<DropZoneRefCurrent>,
}
