import * as React from 'react';
import { RenderEvent } from '../../commonTypes';
import { ValidationProps } from '../Validation/types';
import { FileErrorCodes } from '../../constants';

export { FileErrorCodes } from '../../constants';

export interface RejectedFileType extends File {
  errorCode?: FileErrorCodes,
}

export interface FileLoadEvent {
  component: {
    value: {
      acceptedFiles: File[],
      rejectedFiles: RejectedFileType[],
    },
  },
}

export interface FileUploadError {
  /** Код ошибки, подробнее можно посмотреть в leda/constants.ts */
  errorCode: FileErrorCodes,
  /** Сообщение об ошибке */
  errorMessage: string,
}

export interface ChangeEvent {
  component: {
    error: FileUploadError | null,
    name?: string,
    value: File | null,
  },
}

export interface FileUploadProps extends ValidationProps {
  /** Разрешенные типы файлов, см. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Attributes. Передача нескольких типов файлов происходит через запятую (.png, image/jpeg). allowedFiles и forbiddenFiles нельзя использовать вместе */
  allowedFiles?: string, // comma separated list of valid mime types: "image/*, application/pdf"
  /** Классы, применяемые к первому диву */
  className?: string,
  /** Описание компонента */
  infoRender?: (props: RenderEvent<FileUploadProps>) => React.ReactElement | React.FC,
  /** Состояние загрузки */
  isLoading?: boolean,
  /** Запрещенные типы файлов. см. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Attributes. Передача нескольких типов файлов происходит через запятую (.png, image/jpeg). allowedFiles и forbiddenFiles нельзя использовать вместе */
  forbiddenFiles?: string,
  /** Максимальный размер файла в Мбайтах */
  maxFileSize?: number,
  /** Минимальный размер файла в байтах */
  minFileSize?: number,
  /** Обработчик клика */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
  /** Функция обратного вызова. Получает в качстве аргументов принятые файлы и отклоненные файлы с кодом ошибки (1 - файл меньше минимального размера, 2 - больше максимального, 3 - не удовлетворяет типу, 0 - неизвестная ошибка) */
  onChange?: (event: ChangeEvent) => void,
  /** Функция обратного вызова. Получает в качстве аргументов принятые файлы и отклоненные файлы с кодом ошибки (1 - файл меньше минимального размера, 2 - больше максимального, 3 - не удовлетворяет типу, 0 - неизвестная ошибка) */
  /** @deprecated */
  onFileLoad?: (event: FileLoadEvent) => void,
  /** Реф */
  ref?: React.Ref<FileUploadRefCurrent>,
  /** Обертка компонента */
  wrapperRender?: (props: RenderEvent<FileUploadProps, FileUploadProps>) => React.ReactElement | React.FC,
  /** Классы объявленные с _ */
  [x: string]: unknown,
}

export interface WrapperProps {
  className?: string,
  ref: React.Ref<FileUploadRefCurrent>,
  onClick: (ev: React.MouseEvent<HTMLDivElement>) => void,
}

export interface InfoProps {
  children: React.ReactNode,
}

export interface CustomElements {
  Wrapper: React.FC<WrapperProps>,
  Info: React.FC<InfoProps>,
}

export interface FileUploadRefCurrent {
  wrapper: HTMLElement | null,
}
