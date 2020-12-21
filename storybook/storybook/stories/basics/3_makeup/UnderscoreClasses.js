/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { LiveDemo } from '../../../components/LiveDemo';

const liveDemo = `
  const UnderscoreClasses = () => {
    const [isError, setIsError] = React.useState(true);
    
    return (
      <>
        <L.Div _box>
          <L.Span
            _txt-danger={isError}
          >
            {isError ? 'Error' : 'Text'}
          </L.Span>
        </L.Div>
        <L.Button
          onClick={() => setIsError(!isError)}
          _warning
        >
          Toggle error
        </L.Button>
      </>
    );
  };
  
  render(<UnderscoreClasses />);
`;


export const UnderscoreClasses = () => (
  <L.Div _article>
    <L.H1 _header>
      CSS-классы
    </L.H1>
    <L.Div _block>
      <L.P>
        В Korus-ui есть инструменты для упрощения работы с CSS-классами:
      </L.P>
      <ul className="txt-list">
        <li>
          <L.P>все атрибуты, начинающиеся с _ будут преобразованы в имена css-классов</L.P>
          <L.Div _block>
            <pre>
              {`
                <L.Div _clear />
                // => 
                <div class="clear" />
             `}
            </pre>
          </L.Div>
        </li>
        <li>
          в такие атрибуты можно передавать true/false для того, чтобы добавлять класс по условию
          <L.Div _block>
            <pre>
              {`
                <L.Div _error={true} />
                // => 
                <div class="error" />
             `}
            </pre>
          </L.Div>
          <L.Div _block>
            <pre>
              {`
                <L.Div _error={false} />
                // => 
                <div />
             `}
            </pre>
          </L.Div>
        </li>
      </ul>
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
          Например, <b>чтобы получить HTML</b>, где класс txt-success должен добавляться в зависимости от переменной isSuccess,
        </L.P>
        <pre>
          {`
            <div class="inner txt-success">
          `}
        </pre>
      </L.Div>

      <L.Div _block>
        <L.P>
          <b>используйте стандартный JSX</b>:
        </L.P>
        <pre>
          {`
            <div className={\`inner $\{isSuccess ? 'txt-success' : ''}\`}>
         `}
        </pre>
      </L.Div>

      <L.Div _block>
        <L.P>
          или <b>теги Korus-ui</b>:
        </L.P>
        <pre>
          {`
            <L.Div
              _inner
              _txt-success={isSuccess}
            >
          `}
        </pre>
      </L.Div>
    </L.Section>
  </L.Div>
);
