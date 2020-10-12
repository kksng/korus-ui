import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
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
    name: 'error',
    type: (
      <L.Span>
        {'string | Error | null | '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface FileDropInnerError {
  errorCode: number,
  errorMessage: string,
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>FileDropInnerError</L.Span>
        </L.Tooltip>
      </L.Span>
    ),
    required: true,
    description: (
      <L.Div>
        <L.P>
          Ошибка. Передайте в <b>error</b> ошибку, которая будет показана пользователю.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'errorViewRender',
    type: (
      <L.Div>
        <RenderEvent /> => React.ReactNode
      </L.Div>
    ),
    required: false,
    description: (
      <div>
        Кастомизация состояния ошибки.
      </div>
    ),
  },
  {
    name: 'infoRender',
    type: (
      <L.Div>
        <RenderEvent /> => React.ReactNode
      </L.Div>
    ),
    required: false,
    description: (
      <div>
        Кастомизация стартового состояния компонента.
      </div>
    ),
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Включает неактивное состояние компонента.',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    required: false,
    description: 'Состояние загрузки.',
  },
  {
    name: 'loadingProgress',
    type: 'number',
    required: false,
    description: (
      <div>
        <p>
          Прогресс загрузки, число от 1 до 100.
        </p>
        <p>
          Если компонент находится в состоянии <b>isLoading</b>, и в <b>loadingProgress</b> ничего не передано,
          будет показан обычный лоадер без прогресса загрузки.
        </p>
      </div>
    ),
  },
  {
    name: 'loadingViewRender',
    type: (
      <L.Div>
        <RenderEvent /> => React.ReactNode
      </L.Div>
    ),
    required: false,
    description: (
      <div>
        Кастомизация состояния загрузки.
      </div>
    ),
  },
  {
    name: 'maxFileNameLength',
    type: 'number',
    required: false,
    description: 'Максимальная длина имени файла, по-умолчанию 255 символов.',
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
interface ChangeEvent<Value> {
  component: {
    error?: FileDropInnerError, 
    name?: string,
    value: File | null,
  },
}        
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.FileDropTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик события изменения значения компонента.',
  },
  {
    name: 'onClick',
    type: '(event: React.MouseEvent) => void',
    required: false,
    description: 'Обработчик кликов.',
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
interface FileDropRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>FileDropRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'successViewRender',
    type: (
      <L.Div>
        <RenderEvent /> => React.ReactNode
      </L.Div>
    ),
    required: false,
    description: (
      <div>
        Кастомизация состояния успешной загрузки.
      </div>
    ),
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  progressLoader:       'filedrop-progress-loader',
  button:               'filedrop-button',
  content:              'filedrop-content',
  progressBase:         'progress-base',
  progressCircle:       'progress-circle',
  disabled:             'disabled',
  cloudIcon:            'filedrop-cloud-icon',
  retryIcon:            'filedrop-retry-icon',
  retryButton:          'filedrop-retry-button',
  successIcon:          'filedrop-ok-icon',
  errorIcon:            'filedrop-not-ok-icon',
  description:          'filedrop-description',
  fileDownloadLink:     'dropzone-file-download internal',
  status:               'filedrop-status',
  invalid:              'danger',
  wrapper:              'filedrop-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultFileDropTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'uploadButtonRender',
    type: (
      <L.Div>
        <RenderEvent /> => React.ReactNode
      </L.Div>
    ),
    required: false,
    description: (
      <div>
        Кастомизация кнопки загрузки файла.
      </div>
    ),
  },
  {
    name: 'value',
    type: 'File | null',
    required: true,
    description: (
      <div>
        <p>
          Значение компонента (файл). Если передано, в компоненте отображается название загруженного файла.
        </p>
      </div>
    ),
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Div>
        <RenderEvent /> => React.ReactNode
      </L.Div>
    ),
    required: false,
    description: (
      <div>
        Кастомизация контейнера компонента.
      </div>
    ),
  },
];
