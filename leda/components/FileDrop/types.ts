import * as React from 'react';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES, FileErrorCodes } from '../../constants';
import { ValidationProps } from '../Validation/types';

import { LoadingComponentProps } from '../../src/LoaderComponent/types';


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
  /** Классы переданные через _ */
  [x: string]: unknown,
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
  /** Кастомизация верстки стартовой панели */
  infoRender?: CustomRender<LayoutRenderProps, {}, CustomItemProps>,
  /** Признак отключения дропзоны */
  isDisabled?: boolean,
  /** Состояние загрузки */
  isLoading?: boolean,
  /** Прогресс загрузки, число от 1 до 100 */
  loadingProgress?: number,
  /** Кастомизация верстки состояния загрузки */
  loadingViewRender?: LoadingComponentProps['loadingViewRender'],
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
}

export interface LayoutRenderProps extends FileDropProps {
  downloadLink?: string | null | React.ReactElement,
  handleRetry?: CustomEventHandler<React.MouseEvent<HTMLElement>>,
}

export interface UploadButtonProps {
  [x: string]: unknown,
  children?: React.ReactNode,
  className?: string,
  onClick?: CustomEventHandler<React.MouseEvent>,
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
  DefaultItem: React.FC<CustomItemProps>,
  ErrorItem: React.FC<CustomItemProps>,
  SuccessItem: React.FC<CustomItemProps>,
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
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}

export interface SingleFileViewProps extends FileDropProps {
  DefaultItem: React.FC<CustomItemProps>,
  ErrorItem: React.FC<CustomItemProps>,
  SuccessItem: React.FC<CustomItemProps>,
  UploadButton: React.FC<UploadButtonProps>,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.fileDrop],
}

export interface ErrorComponentProps extends SingleFileViewProps {
  combinedButtonClassNames: string | undefined,
  errorMessage: string,
}

export interface DefaultComponentProps extends SingleFileViewProps {
  combinedButtonClassNames: string | undefined,
}

export interface SuccessComponentProps extends SingleFileViewProps {
  combinedButtonClassNames: string | undefined,
}
