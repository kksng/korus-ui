import * as React from 'react';
import * as L from '../../../leda';

export const MaskedInput = (): React.ReactElement => {
  const [cardValue, setCardValue] = React.useState<string>('');

  const [phoneValue, setPhoneValue] = React.useState<string | null>('8002000600');

  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  return (
    <L.Div _demoStory>
      <L.Span>Номер телефона (не контролируемый с валидацией)</L.Span>
      <L.MaskedInput
        mask="+7 (###)-###-##-##"
        isDisabled={isDisabled}
        placeholder="+7 (___)-___-__-__"
        isRequired
        requiredMessage="Обязательное поле!"
        name="mamasekd"
        form="my-form"
      />
      <L.Span>СНИЛС (контролируемый)</L.Span>
      <L.MaskedInput
        mask="###-###-### ##"
        placeholder="___-___-___ __"
        value={cardValue}
        onChange={(event) => setCardValue(event.component.value)}
      />
      <L.Span>Номер телефона (контролируемый)</L.Span>
      <L.MaskedInput
        mask="+7 (###)-###-##-##"
        placeholder="+7 (___)-___-__-__"
        value={phoneValue}
        onChange={(event) => setPhoneValue(event.component.value)}
      />
      <L.Span>Номер машины (не контролируемый)</L.Span>
      <L.MaskedInput
        mask="LL##LL####"
        placeholder="Car number"
      />
      <L.Span>Номер кредитки (не контролируемый с начальным значением)</L.Span>
      <L.MaskedInput
        mask="####-####-####-####"
        placeholder="####-####-####-####"
        defaultValue="6666777788889999"
      />
      <br />
      <br />
      <L.Button onClick={() => setPhoneValue(null)}>Clear Value</L.Button>
      {' '}
      <L.Button onClick={() => setPhoneValue('9818862798')}>Set Value</L.Button>
      {' '}
      <L.Switcher value={isDisabled} onChange={(event) => setIsDisabled(event.component.value)}>
        Toggle isDisabled
      </L.Switcher>
    </L.Div>
  );
};
