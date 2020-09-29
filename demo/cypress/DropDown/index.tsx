import * as React from 'react';

import * as L from '../../../leda';

export const DropDown = (): React.ReactElement => {

  return (
    <L.Div _demoStory _flexRow>
      <L.DropDown
        wrapperRender={({elementProps}: any) => <L.Button {...elementProps}/>}
        id='DDButtonHover'
      >
        <L.Span>Hover over me</L.Span>
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
      <L.DropDown
        id='DDDivHover'
      >
        <L.Span>Hover over me</L.Span>
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

      <L.DropDown
        wrapperRender={({elementProps}: any) => <L.Button {...elementProps}/>}
        interactionMode='click'
        id='DDButtonClick'
      >
        <L.Span>Click me</L.Span>
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

       <L.DropDown
        interactionMode='click'
        id='DDDivClick'
      >
        <L.Span>Click me</L.Span>
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
  )
};
