/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { LiveDemo } from '../../../components/LiveDemo';

const liveDemo = `
  const ConditionalRendering = () => {
    const [isVisible, setIsVisible] = React.useState(true);
    
    return (
      <>
        <L.Div _box>
          <L.Span
            shouldRender={isVisible}
          >
            Hello world
          </L.Span>
        </L.Div>
        <L.Button
          onClick={() => setIsVisible(!isVisible)}
          _warning
        >
          Toggle text
        </L.Button>
      </>
    );
  };
  
  render(<ConditionalRendering />);
`;


export const ConditionalRendering = () => (
  <L.Div _article>
    <L.H1 _header>
      Условный рендеринг
    </L.H1>
    <L.Div _block>
      <L.P>
        Атрибут <b>shouldRender</b> позволяет проще описывать условия, при которых компонент рендерится в зависимости от какого-то условия.
      </L.P>
      <L.P>
        В примере L.Span полностью исчезает из вёрстки:
      </L.P>
    </L.Div>

    <L.Div _block>
      <LiveDemo
        isDemoOpen={true}
        setDemoOpen={() => {}}
        liveDemo={liveDemo}
      />
    </L.Div>

    <L.Section>
      <L.Div _block>
        <L.P>
          Атрибут <b>shouldRender</b> поддерживают только компоненты-аналоги HTML, такие как <i>L.Div</i>, <i>L.Span</i>, <i>L.Li</i>, <i>L.A</i>.
        </L.P>
        <L.P>
          Компоненты, которые относятся к Form и Layout не поддерживают <b>shouldRender</b>. Единственное исключение - <i>L.Button</i>, с кнопками так можно.
        </L.P>
      </L.Div>
    </L.Section>
  </L.Div>
);
