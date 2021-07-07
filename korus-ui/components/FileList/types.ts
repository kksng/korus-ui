import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';

/** Имена классов для покраски иконки статуса */
export enum StatusColorsClassNames {
  /** Красный */
  danger = 'danger',
  /** Зеленый */
  success = 'success'
}

/** Список единиц измерения размера файла */
export enum FileSizeUnits {
  byte = 'байт',
  kb = 'кб',
  mb = 'мб',
}

/** Описание файла */
export interface FileInList {
  /** Признак возможности удалить файл */
  canDeleteFile?: boolean,
  /** Признак возможности скачать файл */
  canDownloadFile?: boolean,
  /** Единица измерения размера файла */
  fileSizeUnit: FileSizeUnits,
  /** Ид */
  id: string,
  /** Имя */
  name: string,
  /** Размер */
  size: string,
  /** Статус */
  status: string,
  /** Цвет статуса */
  statusColor?: StatusColorsClassNames,
  /** Описание статуса */
  statusDescription: string,
}

/** Список расширений файлов */
export enum FileExtensions {
  csv = 'csv',
  doc = 'doc',
  oneC = 'dt',
  pdf = 'pdf',
  xls = 'xls',
  xml = 'xml'
}

/** Список классов иконок для разных расширений файлов */
export enum FileExtensionsIconClassList {
  csv = 'file-list-icon-csv',
  default = 'file-list-icon',
  doc = 'file-list-icon-doc',
  oneC = 'file-list-icon-1-c',
  pdf = 'file-list-icon-pdf',
  xls = 'file-list-icon-xls',
  xml = 'file-list-icon-xml'
}

/** Пропсы компонента FileList */
export interface FileListProps {
  /** Массив файлов */
  data: FileInList[],
  /** Обработчик удаления файла из списка */
  onDeleteFile?: (file: FileInList) => void,
  /** Обработчик скачивания файла */
  onDownloadFile?: (file: FileInList) => void,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.fileList],
}
