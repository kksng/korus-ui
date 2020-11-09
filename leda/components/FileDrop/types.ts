import * as React from 'react';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { ValidationProps } from '../Validation/types';
import { FileErrorCodes } from '../../constants';

export { FileErrorCodes } from '../../constants';

export interface FileDropInnerError {
  /** Код ошибки, подробнее можно посмотреть в leda/constants.ts */
  errorCode: FileErrorCodes,
  /** Сообщение об ошибке */
  errorMessage: string,
}

export type FileDropExternalError = Error | string | null;

export type FileDropError = FileDropInnerError | FileDropExternalError;

export interface ChangeEvent {
  component: {
    error: FileDropInnerError | null,
    name?: string,
    value: File | null,
  },
}

export interface FileDropProps extends ValidationProps {
  /** Разрешенные типы файлов, см. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Attributes. Передача нескольких типов файлов происходит через запятую (.png, image/jpeg). allowedFiles и forbiddenFiles вместе не могут находиться. */
  allowedFiles?: string,
  /** Классы, применяемые к компоненту */
  className?: string,
  /** Ошибка загрузки файла */
  error: FileDropError,
  /** Кастомизация верстки ошибки */
  errorViewRender?: CustomRender<LayoutRenderProps, {}, CustomItemProps>,
  /** Запрещенные типы файлов. см. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Attributes. Передача нескольких типов файлов происходит через запятую (.png, image/jpeg). allowedFiles и forbiddenFiles вместе не могут находиться. */
  forbiddenFiles?: string,
  /** Признак отключения дропзоны */
  isDisabled?: boolean,
  /** Состояние загрузки */
  isLoading?: boolean,
  /** Прогресс загрузки, число от 1 до 100 */
  loadingProgress?: number,
  /** Кастомизация верстки состояния загрузки */
  loadingViewRender?: CustomRender<LayoutRenderProps, {}, CustomItemProps>,
  /* Максимальная длина имени файла, по-умолчанию 255 символов */
  maxFileNameLength?: number,
  /** Максимальный размер файла, в байтах */
  maxFileSize?: number,
  /** Минимальный размер файла, в байтах */
  minFileSize?: number,
  /** Функция обратного вызова для метода onChange */
  onChange: (event: ChangeEvent) => void,
  /** Функция-обработчик onClick */
  onClick?: (event: React.MouseEvent) => void,
  /** Реф */
  ref?: React.Ref<FileDropRefCurrent>,
  /** Кастомизация верстки стартовой панели */
  infoRender?: CustomRender<LayoutRenderProps, {}, CustomItemProps>,
  /** Кастомизация верстки удачной загрузки */
  successViewRender?: CustomRender<LayoutRenderProps, {}, CustomItemProps>,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.fileDrop],
  /** Текст кнопки загрузки файла, может принимать JSX */
  uploadButtonRender?: CustomRender<FileDropProps, {}, UploadButtonProps>,
  /** Загруженный файл */
  value: File | null,
  /** Кастомизация враппера */
  wrapperRender?: CustomRender<FileDropProps, {}, WrapperProps>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface LayoutRenderProps extends FileDropProps {
  downloadLink?: string | null | React.ReactElement,
  handleRetry?: CustomEventHandler<React.MouseEvent<HTMLElement>>,
}

export interface UploadButtonProps {
  children?: React.ReactNode,
  className?: string,
  onClick?: CustomEventHandler<React.MouseEvent>,
  [x: string]: unknown,
}

export interface CustomItemProps {
  children?: React.ReactNode,
  className?: string,
}

export interface WrapperProps {
  children?: React.ReactNode,
  className?: string,
  ref: React.Ref<FileDropRefCurrent>,
}

export interface CustomElements {
  ErrorItem: React.FC<CustomItemProps>,
  LoadingItem: React.FC<CustomItemProps>,
  SuccessItem: React.FC<CustomItemProps>,
  DefaultItem: React.FC<CustomItemProps>,
  UploadButton: React.FC<UploadButtonProps>,
  Wrapper: React.FC<WrapperProps>,
}

export interface ChangeEventHandler {
  (
    accepted: File[],
    rejected: File[],
    ev?: React.DragEvent<HTMLDivElement> | React.MouseEvent<HTMLAnchorElement>,
    removedFile?: File
  ): void,
}

export interface FileDropRefCurrent {
  wrapper: HTMLElement | null,
  input: HTMLInputElement | null,
}

export interface ProgressLoaderProps {
  loadingProgress?: number,
  isLoading?: boolean,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.fileDrop],
}

export interface SingleFileViewProps extends FileDropProps {
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.fileDrop],
  UploadButton: React.FC<UploadButtonProps>,
  ErrorItem: React.FC<CustomItemProps>,
  LoadingItem: React.FC<CustomItemProps>,
  SuccessItem: React.FC<CustomItemProps>,
  DefaultItem: React.FC<CustomItemProps>,
}

export interface ErrorComponentProps extends SingleFileViewProps {
  errorMessage: string,
  combinedButtonClassNames: string | undefined,
}

export interface DefaultComponentProps extends SingleFileViewProps {
  combinedButtonClassNames: string | undefined,
}

export interface SuccessComponentProps extends SingleFileViewProps {
  combinedButtonClassNames: string | undefined,
}
