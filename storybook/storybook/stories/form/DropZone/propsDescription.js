import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'acceptedFilesRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация отображения для добавленных файлов.',
  },
  {
    name: 'allowedFiles',
    type: 'string',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Разрешенные типы файлов: расширения или
          {' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types" target="_blank">
            mime-типы
          </a>
          {' '}
          через запятую: <i>.png, image/jpeg</i>.
        </L.P>
        <L.P>
          <b>allowedFiles</b> и <b>forbiddenFiles</b> нельзя использовать вместе.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'dropZoneFilesNode',
    type: 'string',
    required: false,
    description: (
      <L.Div>
        <L.P>
          DOM-узел, в который будет помещён список файлов.
        </L.P>
        <p>
          Используйте этот механизм, если вы хотите вывести данные о загруженных файлах за пределами компонента.
        </p>
      </L.Div>
    ),
  },
  {
    name: 'forbiddenFiles',
    type: 'string',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Запрещённые типы файлов: расширения или
          {' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types" target="_blank">
            mime-типы
          </a>
          {' '}
          через запятую: <i>.png, image/jpeg</i>.
        </L.P>
        <L.P>
          <b>allowedFiles</b> и <b>forbiddenFiles</b> нельзя использовать вместе.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'infoRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация информационного блока (ограничения на количество, формат файлов итп.).',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Рендерить компонент с открытым выпадающим списком.',
  },
  {
    name: 'maxFileNameLength',
    type: 'number',
    required: false,
    description: 'Максимальная длина имени файла, по-умолчанию 255 символов.',
  },
  {
    name: 'maxFilesNumber',
    type: 'number',
    required: false,
    description: 'Максимальное количество файлов.',
  },
  {
    name: 'maxFileSize',
    type: 'number',
    required: false,
    description: 'Максимальный размер файла, в байтах.',
  },
  {
    name: 'minFileSize',
    type: 'number',
    required: false,
    description: 'Минимальный размер файла, в байтах.',
  },
  {
    name: 'onChange',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface ChangeEvent {
  component: {
    dropped: {
      acceptedFiles: FileType[],
      rejectedFiles: FileType[],
    },
    value: {
      acceptedFiles: FileType[],
      rejectedFiles: FileType[],
    },
    removedFile?: FileType,
  },
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.DropZoneTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик события загрузки файла.',
  },
  {
    name: 'rejectedFilesRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация отображения для отклонённых файлов.',
  },
  {
    name: 'ref',
    type: (
      <L.Span>
        {'React.Ref<'}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {
                `
interface DropZoneRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>DropZoneRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  button:                string,
  content:               string,
  disabled:              string,
  fileDeleteIcon:        string,
  description:           string,
  fileDownloadLink:      string,
  fileDeleteLink:        string,
  rejectedFilesWrapper:  string,
  rejectedMessage:       string,
  status:                string,
  invalid:               string,
  wrapper:               string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultDropZoneTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'uploadButtonRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация кнопки для загрузки файла.',
  },
  {
    name: 'value',
    type: (
      <L.Span>
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {
                `
  {
    acceptedFiles: ExternalFile[],
    rejectedFiles: ExternalFile[],
  },
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>DropZoneValue</L.Span>
        </L.Tooltip>
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          <b>value</b> компонента (загруженные и отклонённые файлы).
        </p>
      </div>
    ),
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация враппера компонента.',
  },
];
