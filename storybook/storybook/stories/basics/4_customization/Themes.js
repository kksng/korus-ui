/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { LiveEditor, LiveProvider } from 'react-live';



export const Themes = () => (
  <L.Div _article>
    <L.H1 _header>
      Переопределение css-классов
    </L.H1>
    <L.Div _block>
      <L.P>
        Каждый dom-элемент компонента библиотеки имеет свои css-классы.
      </L.P>
      <L.P>
        Эти классы можно переопределить через атрибут <b>theme</b>.
      </L.P>
      <L.P>
        Классы можно передать для любого количества dom-элементов, для этого передайте в <b>theme</b> объект с именами dom-элементов и новыми css-классами.
      </L.P>
      <L.P>
        Список классов и dom-элементов для компонента смотрите в папке компонента в разделе <b>Theme</b>.
      </L.P>
      <L.P>
        Изменить классы можно для отдельно взятого компонента или глобально в настройках библиотеки.
      </L.P>
    </L.Div>

    <L.Div _block>
      <L.H2 _block-header>
        Локальная настройка темы для компонента
      </L.H2>

      <L.Div _block>
        <pre>
          {`
            <L.CheckBox
              theme={{
                element: 'checkbox__custom-input',
                focused: 'custom-focused',
              }}
            >
              Label
            </L.CheckBox>
          `}
        </pre>
      </L.Div>

      <L.P>
        Будет преобразовано в HTML:
      </L.P>

      <L.Div _block>
        <pre>
          {`
            <input
              class="checkbox__custom-input custom-focused" // класс переопределён
              type="checkbox"
              id="checkbox-usgs14"
              checked=""
            >
            <label
              class="checkbox-label" // стандартный класс
              for="checkbox-usgs14"
            >
              Label
            </label>
          `}
        </pre>
      </L.Div>
    </L.Div>

    <L.Div _block>
      <L.H2 _block-header>
        Глобальная настройка темы для компонентов
      </L.H2>

      <L.P>
        Создайте объект с темой для компонентов.
      </L.P>
      <L.P>
        Ключи объекта - названия компонентов, начинаются со строчной буквы. Во вложенных объектах - названия элементов и соответствующие им css-классы:
      </L.P>

      <L.Div _block>
        <pre>
          {`
            const theme={
              autoComplete: {
                wrapper: 'autocomplete__wrapper',
                input: 'my-input',
              },
              buttonGroup: {
                button: 'btn',
                wrapper: 'wrapper',
              },
              statusBar: {
                label: 'custom-label',
              },
            }
          `}
        </pre>
      </L.Div>

      <L.P>
        Оберните приложение в глобальный провайдер <b>Leda</b> и передайте ему объект с темой:
      </L.P>

      <L.Div _block>
        <pre>
          {`
            import { Leda } from 'leda';
            import { theme } from 'myThemes';
            ...

            <Leda
              theme={theme}
            >
              <App />
            </Leda>
          `}
        </pre>
      </L.Div>

      <L.P>
        Все компоненты, перечисленные в теме, получат соответствующие css-классы.
      </L.P>
      <L.P>
        Если в компонент локально будут переданы другие классы для элементов через атрибут theme, они будут иметь более высокий приоритет, чем у классов из глобальной темы.
      </L.P>

    </L.Div>
  </L.Div>
);
