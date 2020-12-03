import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Basic = (storyProps: StoryProps) => {
  const containerRef = React.useRef(null);

  return (
    <L.Div _demoStory>
      <L.H4 _title>DropDown</L.H4>
      <br/>
      {/* <L.Span _margin-top>Открытие по наведению</L.Span> */}
      <L.DropDown _more wrapperRender={({elementProps}: any) => <L.Button {...elementProps}/>}>
        <L.Span>Hello Blur</L.Span>
        <L.Ul _txtLeft>
          <L.Li _level2>
            <L.A>Мармелад</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Суфле</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Шоколад</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Кексики</L.A>
          </L.Li>
        </L.Ul>
      </L.DropDown>
      <L.Span _marginLeft>default</L.Span>


      <br />
      <br/>

      {/* <L.Span _margin-top>Открытие по клику</L.Span> */}
      <L.DropDown _more interactionMode='click' wrapperRender={({elementProps}: any) => <L.Button {...elementProps}/>}>
        <L.Span>Hello Click</L.Span>
        <L.Ul _txtLeft>
          <L.Li _level2>
            <L.A>Мармелад</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Суфле</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Шоколад</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Кексики</L.A>
          </L.Li>
        </L.Ul>
      </L.DropDown>
      <L.Span _marginLeft>interactionMode='click'</L.Span>

      <br />
      <br />

      <L.P>
        Позиционирование относительно произвольного контейнера в красном:
      </L.P>

      <L.Div
        ref={containerRef}
        style={{
          overflow: 'hidden',
          width: '300px',
          border: '1px solid red',
          height: '200px',
          margin: '20px',
        }}
      >
        <L.DropDown
          _more
          wrapperRender={({elementProps}: any) => <L.Button {...elementProps} />}
          boundingContainerRef={containerRef}
          style={{ float: 'right' }}
        >
          <L.Span>Hello</L.Span>
          <L.Ul _txtLeft>
            <L.Li _level2>
              <L.A>Мармелад</L.A>
            </L.Li>
            <L.Li _level2>
              <L.A>Суфле</L.A>
            </L.Li>
            <L.Li _level2>
              <L.A>Шоколад</L.A>
            </L.Li>
            <L.Li _level2>
              <L.A>Кексики</L.A>
            </L.Li>
          </L.Ul>
        </L.DropDown>
      </L.Div>
    </L.Div>
  );
};
