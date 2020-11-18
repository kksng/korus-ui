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
  /** Классы объявленные с _ */
  [x: string]: unknown,
  /** Разрешенные типы файлов, см. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Attributes. Передача нескольких типов файлов происходит через запятую (.png, image/jpeg). allowedFiles и forbiddenFiles нельзя использовать вместе
   *  comma separated list of valid mime types: "image/*, application/pdf"
   * */
  allowedFiles?: string,
  /** Классы, применяемые к первому диву */
  className?: string,
  /** Запрещенные типы файлов. см. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Attributes. Передача нескольких типов файлов происходит через запятую (.png, image/jpeg). allowedFiles и forbiddenFiles нельзя использовать вместе */
  forbiddenFiles?: string,
  /** Описание компонента */
  infoRender?: (props: RenderEvent<FileUploadProps>) => React.ReactElement | React.FC,
  /** Состояние загрузки */
  isLoading?: boolean,
  /** Максимальный размер файла в Мбайтах */
  maxFileSize?: number,
  /** Минимальный размер файла в байтах */
  minFileSize?: number,
  /** Функция обратного вызова. Получает в качстве аргументов принятые файлы и отклоненные файлы с кодом ошибки (1 - файл меньше минимального размера, 2 - больше максимального, 3 - не удовлетворяет типу, 0 - неизвестная ошибка) */
  onChange?: (event: ChangeEvent) => void,
  /** Обработчик клика */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
  /** Функция обратного вызова. Получает в качстве аргументов принятые файлы и отклоненные файлы с кодом ошибки (1 - файл меньше минимального размера, 2 - больше максимального, 3 - не удовлетворяет типу, 0 - неизвестная ошибка) */
  /** @deprecated */
  onFileLoad?: (event: FileLoadEvent) => void,
  /** Реф */
  ref?: React.Ref<FileUploadRefCurrent>,
  /** Обертка компонента */
  wrapperRender?: (props: RenderEvent<FileUploadProps, FileUploadProps>) => React.ReactElement | React.FC,
}

export interface WrapperProps {
  className?: string,
  onClick: (ev: React.MouseEvent<HTMLDivElement>) => void,
  ref: React.Ref<FileUploadRefCurrent>,
}

export interface InfoProps {
  children: React.ReactNode,
}

export interface CustomElements {
  Info: React.FC<InfoProps>,
  Wrapper: React.FC<WrapperProps>,
}

export interface FileUploadRefCurrent {
  wrapper: HTMLElement | null,
}
