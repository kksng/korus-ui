import * as React from 'react';
import * as L from '@korus/leda';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'data',
    type: (
      <L.Span>
        <L.Tooltip
          position="bottom"
          title={(
          <pre>{`
{
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
        `}
        </pre>
        )}
        >
          <L.Span _txt-success>FileInList</L.Span>
        </L.Tooltip>
        {'[]'}
      </L.Span>
    ),
    required: true,
    description: (
      <L.Div>
        <L.P>
          Массив файлов
        </L.P>
      </L.Div>
    ),
  },

  {
    name: 'onDeleteFile',
    type: (
      <L.Span>
        {'(file: '}
        <L.Tooltip
          position="bottom"
          title={(
          <pre>{`
{
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
        `}
        </pre>
        )}
        >
          <L.Span _txt-success>FileInList</L.Span>
        </L.Tooltip>
        {') => void'}
      </L.Span>
    ),
    required: false,
    description: (
      <L.Div>
        <L.P>
          Обработчик удаления файла из списка. Без данного обработчика и наличия признака canDeleteFile в файле - кнопка удаления файла не будет отображена в компоненте
        </L.P>
      </L.Div>
    ),
  },

  {
    name: 'onDownloadFile',
    type: (
      <L.Span>
        {'(file: '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>{`
{
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
        `}
        </pre>
          )}
        >
          <L.Span _txt-success>FileInList</L.Span>
        </L.Tooltip>
        {') => void'}
      </L.Span>
    ),
    required: false,
    description: (
      <L.Div>
        <L.P>
          Обработчик скачивания файла. Без данного обработчика и наличия признака canDownloadFile в файле - кнопка скачивания файла не будет отображена в компоненте
        </L.P>
      </L.Div>
    ),
  },

  {
    name: 'theme',
    type: (
      <L.Tooltip
        position="bottom"
        title={(
          <pre>{`
{
  fileList:               'file-list table',
  fileListDeleteIcon:     'file-list-delete',
  fileListDownloadIcon:   'file-list-download',
  fileListTag:            'file-list-tag',
  fileListWrapper:        'file-list-wrapper',
  subtitle:               'file-list-subtitle',
}
        `}
        </pre>
        )}
      >
        <L.Span _txt-success>DefaultFileListTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: (
      <L.Div>
        <L.P>
          Тема для компонента
        </L.P>
      </L.Div>
    ),
  },
];
