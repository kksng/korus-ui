/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

export const Styles = () => (
  <L.Div _article>
    <L.H1 _header>
      Как подключить стили
    </L.H1>

    <L.Section _block>
      <L.H2 _block-header>˚
        Стили для компонентов
      </L.H2>

      <L.P>
        Все стили для компонентов содержатся в <i>leda.light.css</i>.
        Этот файл находится в папке <i>./node_modules/leda/dist/styles</i>.
        Подключите его к вашему проекту подходящим для вас способом:
      </L.P>

      <L.Section _block>
        <L.H3 _sub-block-header>
          import
        </L.H3>
        <L.P>
          Импорт стилей непосредственно в приложение.
          Такой вариант подходит, если вы используете react-create-app или другие системы с импортом css в js-файлы.
        </L.P>

        <L.Div _block>
        <pre>
          {`
            import 'leda/dist/styles/leda.light.css'
          `}
        </pre>
        </L.Div>
      </L.Section>

      <L.Section _block>
        <L.H3 _sub-block-header>
          Использование CSS-файлов библиотеки
        </L.H3>

        <L.P>
          Использование css-файлов Leda.
        </L.P>

        <L.P>
          Настройте автоматическое копирование стилей из библиотеки в проект.
        </L.P>

        <L.Div _block>
        <pre>
          {`
            // package.json scripts
            
            ...
            "addLedaStyles": "ncp ./node_modules/leda/dist/styles ./dist/your-scc-files-folder»,
            ...
          `}
        </pre>
        </L.Div>

        <L.P>
          * ncp - модуль для копирования файлов, требует отдельной установки <i>npm i ncp —save-dev</i>.
        </L.P>

        <L.P>
          Запускайте этот скрипт каждый раз во время сборки проекта.
        </L.P>
      </L.Section>

      <L.Section _block>
        <L.H3 _sub-block-header>
          Использование SCSS-файлов библиотеки
        </L.H3>

        <L.P>
          Экспорт scss-файлов для компонентов планируется в будущих релизах Leda.
        </L.P>
      </L.Section>

      <L.Section _block>
        <L.H3 _sub-block-header>
          Написание собственных стилей
        </L.H3>

        <L.P>
          Вы можете написать свои стили под имеющуюся вёрстку.
          Полный список классов, которые используются в компонентах, находится в разделе API, см. атрибут theme.
          Эти классы можно переопределять глобально для всех компонентов одного типа или для каждого компонента индивидуально.
        </L.P>
      </L.Section>

      <L.Section _block>
        <L.H3 _sub-block-header>
          Ручное копирование кода leda.light.css в другие файлы
        </L.H3>

        <L.P>
          Этот способ не рекомендуется, т.к. новые релизы библиотеки могут содержать багфиксы и новый функционал с вёрсткой и стилями.
          Необходимо следить за соответствием версий компонентов и стилей, чтобы избежать проблем с правильным отображением компонентов.
          Автоматический импорт или копирование актуальных стилей в проект позволяет избежать этих проблем.
        </L.P>
      </L.Section>
    </L.Section>

    <L.Section _block>
      <L.H2 _block-header>
        Дополнительные стили
      </L.H2>

      <L.P>
        Вам также могут понадобиться:
      </L.P>
      <L.P>
         <i>leda/dist/styles/reset.css</i>- сброс браузерных стилей по умолчанию. Вероятно, у вас уже подключён другой файл для сброса этих стилей, в этом случае файл из библиотеки подключать не нужно.
      </L.P>
      <L.P>
        В примерах вы увидите использование вспомогательных классов, таких, как width-50, txt-success и т.д., стили для этих классов находятся в <i>leda/dist/styles/helpers.css</i>.
      </L.P>
    </L.Section>
  </L.Div>
);
