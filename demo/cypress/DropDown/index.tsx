import * as React from 'react';

import * as L from '../../../korus-ui';

export const DropDown = (): React.ReactElement => {
  const [isDisabled, setIsDisabled] = React.useState(false);

  return (
    <>
      <L.P>interactionMode default</L.P>
      <L.Div _demoStory>
        <L.DropDown
          isDisabled={isDisabled}
          wrapperRender={({ elementProps }: L.commonTypes.RenderEvent<L.DropDownTypes.DropDownProps>): React.ReactNode => <L.Button {...elementProps} />}
          id="DDButtonHover"
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

        <br />
        <br />

        <L.DropDown
          isDisabled={isDisabled}
          id="DDDivHover"
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
      </L.Div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <L.P>interactionMode click</L.P>
      <L.Div _demoStory>
        <L.DropDown
          isDisabled={isDisabled}
          wrapperRender={({ elementProps }: L.commonTypes.RenderEvent<L.DropDownTypes.DropDownProps>): React.ReactNode => <L.Button {...elementProps} />}
          interactionMode="click"
          id="DDButtonClick"
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

        <br />
        <br />

        <L.DropDown
          isDisabled={isDisabled}
          interactionMode="click"
          id="DDDivClick"
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

      <br />
      <br />

      <L.Button
        id="disableButton"
        _warning
        onClick={(): void => setIsDisabled(!isDisabled)}
      >Disable/Enable
      </L.Button>
    </>
  );
};
