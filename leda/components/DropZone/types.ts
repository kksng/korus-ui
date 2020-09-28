import * as React from 'react';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES, FileErrorCodes } from '../../constants';
import { globalDefaultTheme } from '../LedaProvider';
import { ValidationProps } from '../Validation/types';

export { FileErrorCodes } from '../../constants';

export interface ExternalFile {
  /** Имя файла. Необходимо для отображения в списке и удаления */
  name: string,
  /** Ссылка на скачивание файла. При наличии, файл будет отображен в списке, как скачиваемый */
  link?: string,
  /** Синоним имени файла. Необходимо для отображения в списке и удаления */
  path?: string,
  /** Тип файла */
  type?: string,
}

export interface DropZoneFileType extends File {
  path?: string,
  preview?: string,
  lastModified: number,
  errorCode?: FileErrorCodes,
}

export type FileType = ExternalFile | DropZoneFileType;

export interface DropZoneFiles {
  /** List of accepted files */
  acceptedFiles: FileType[],
  /** List of rejected files by type or size */
  rejectedFiles: FileType[],
}

export interface ChangeEvent {
  component: {
    /** Files that were added */
    dropped: DropZoneFiles,
    /** Actual state */
    value: DropZoneFiles,
    /** File that was removed */
    removedFile?: FileType,
  },
}

export interface DropZoneProps extends ValidationProps {
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
  /** Максимальная длина имени файла, по-умолчанию 255 символов */
  maxFileNameLength?: number,
  /** Максимальное количество файлов */
  maxFilesNumber?: number,
  /** Максимальный размер файла, в байтах */
  maxFileSize?: number,
  /** Минимальный размер файла, в байтах */
  minFileSize?: number,
  /** Функция обратного вызова для метода onChange */
  onChange?: (event: ChangeEvent) => void,
  /** Функция обратного вызова для метода onClick */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
  /** Отображение отклоненных файлов */
  rejectedFilesRender?: CustomRender<DropZoneProps, DropZoneState, RejectedFilesProps>,
  /** Реф */
  ref?: React.Ref<DropZoneRefCurrent>,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropZone],
  /** Текст кнопки загрузки файла, может принимать JSX */
  uploadButtonRender?: CustomRender<DropZoneProps, DropZoneState, UploadButtonProps>,
  /** Добавленные файлы */
  value?: DropZoneFiles | null,
  /** Кастомизация враппера */
  wrapperRender?: CustomRender<DropZoneProps, DropZoneState, WrapperProps>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export type DropZoneState = DropZoneFiles;

export interface AcceptedFilesProps {
  children?: React.ReactNode,
  dropZoneFilesNode?: Element,
  onChange?: ChangeEventHandler,
}

export interface RejectedFilesProps {
  children?: React.ReactNode,
  className?: string,
}

export interface UploadButtonProps {
  children?: React.ReactNode,
  className?: string,
  onClick?: CustomEventHandler<React.MouseEvent>,
  [x: string]: unknown,
}

export interface InfoProps {
  children?: React.ReactNode,
  className?: string,
}

export interface WrapperProps {
  children?: React.ReactNode,
  className?: string,
  ref: React.Ref<DropZoneRefCurrent>,
}

export interface CustomElements {
  AcceptedFiles: React.FC<AcceptedFilesProps>,
  RejectedFiles: React.FC<RejectedFilesProps>,
  Info: React.FC<InfoProps>,
  UploadButton: React.FC<UploadButtonProps>,
  Wrapper: React.FC<WrapperProps>,
}

export interface DropZoneFilesProps {
  /** Массив файлов, который будет отображен в виде списка */
  files: FileType[],
  /** Обработчик удаления файла */
  onChange: (
    acceptedFiles: FileType[],
    rejectedFiles: FileType[],
    ev: React.DragEvent<HTMLDivElement> | React.MouseEvent<HTMLAnchorElement>,
    removedFile: FileType,
  ) => void,
  /** Флаг обозначающий нужно ли отображать файлы */
  shouldRender: boolean,
  /** Принятые и отклоненные файлы */
  value: DropZoneState | NonNullable<DropZoneProps['value']>,
  /** Тема компонента */
  theme: typeof globalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropZone],
}

export interface DropZoneError {
  message: string,
  errorCode: FileErrorCodes,
}

export interface RejectedFilesListProps {
  theme: typeof globalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropZone],
  value: DropZoneState | NonNullable<DropZoneProps['value']>,
  maxFilesNumber?: number,
}

export type ChangeEventHandler = (
  accepted: FileType[],
  rejected: FileType[],
  ev?: React.DragEvent<HTMLElement> | React.MouseEvent<HTMLElement>,
  removedFile?: FileType
) => void;

export interface DropZoneRefCurrent {
  wrapper: HTMLElement | null,
  input: HTMLInputElement | null,
}
