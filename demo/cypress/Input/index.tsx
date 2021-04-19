/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../korus-ui';

export const Input = (): React.ReactElement => {
  const [value1, setValue1] = React.useState('Controlled value');
  const validator = (value: string): boolean => value.length > 2;

  return (
    <L.Div>
      <L.Span>Введите числа</L.Span>
      <L.Input
        id="only-numbers"
        placeholder="only numbers"
        allowedSymbols="numbers"
      />
      <L.Span>Введите латинские символы</L.Span>
      <L.Input
        id="only-Latin-symbols"
        placeholder="only Latin symbols"
        allowedSymbols={/([A-Za-z]|\s)/}
      />
      <L.Span>Цифры и символы</L.Span>
      <L.Input
        id="numbersAndSymbols"
        placeholder="Numbers or symbols"
        forbiddenSymbols={/([A-Za-z]|\s)/}
      />
      <L.Span>Компонент неактивный</L.Span>
      <L.Input
        id="isDisabled"
        placeholder="isDisabled"
        isDisabled
      />
      <L.Span>Меняет регистр на верхний</L.Span>
      <L.Input
        id="changeToUpperCase"
        placeholder="Changes the register to upper case"
        letterCase="upper"
      />
      <L.Span>Меняет регистр на нижний</L.Span>
      <L.Input
        id="changeToLowerCase"
        placeholder="Changes the register to lower case"
        letterCase="lower"
      />
      <L.Span>Только 5 символов</L.Span>
      <L.Input
        id="only5Characters"
        placeholder="Only 5 characters"
        maxLength={5}
      />
      <L.Span>Проверка корректности ввода</L.Span>
      <L.Input
        id="corr-Input"
        placeholder="Checking the correctness of input"
      />
      <L.Span>Проверка обязательности input</L.Span>
      <L.P>
        <L.Input
          id="checkDangerClass"
          isRequired
          placeholder="Checking the mandatory input"
          form="requiredForm"
          name="Input"
        />
      </L.P>
      <L.Button
        id="submit"
        form="requiredForm"
      >
        Submit
      </L.Button>

      <L.P>
        <L.Span>Проверка на вывод сообщения, если валидатор выдал ошибку + проверка работоспособности валидатора</L.Span>
        <L.Input
          id="checkDangerClassValid"
          name="field1"
          form="myForm"
          validator={/^\w+\s\w+$/}
          isRequired
          invalidMessage="Введите два слова латиницей через пробел"
        />
      </L.P>
      {' '}
      <L.P>
        <L.Span>requiredMessage должен выводить сообщение, при потере фокуса с пустого обязательного поля</L.Span>
        <L.Input
          id="checkMessageDangerClass"
          name="field2"
          form="myForm"
          isRequired
          requiredMessage="Поле обязательно!"
          placeholder="Пользовательское сообщение"
        />
      </L.P>

      <L.Span>Clear button</L.Span>
      <L.Input
        id="hasClearButton"
        hasClearButton
      />

      <L.Span>Controlled mode</L.Span>
      <L.Input
        id="controlledMode"
        value={value1}
      />

      <L.Span>For events</L.Span>
      <L.Input
        _underliningClassName
        className="propClassName"
        id="eventInput"
        onFocus={(): void => console.log('Focused')}
        onBlur={(): void => console.log('Blured')}
        onEnterPress={(): void => console.log('The enter key was pressed')}
        onChange={(): void => console.log('Changed')}
        validator={validator}
        invalidMessage="Value length must be more than 2"
        isRequired
        name="eventInput"
        form="form"
      />
    </L.Div>
  );
};
