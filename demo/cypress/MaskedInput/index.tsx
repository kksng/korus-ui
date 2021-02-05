import * as React from 'react';
import * as L from '../../../korus-ui';

export const MaskedInput = (): React.ReactElement => {
  const [cardValue, setCardValue] = React.useState<string>('');
  const [phoneValue, setPhoneValue] = React.useState<string | null>('8002000600');
  const [cardNumberValue, setCardNumberValue] = React.useState<string | null>('');
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  return (
    <L.Div _demoStory>
      <L.Span>Phone number (uncontrolled with validation)</L.Span>
      <L.MaskedInput
        mask="+7 (###)-###-##-##"
        isDisabled={isDisabled}
        placeholder="+7 (___)-___-__-__"
        isRequired
        requiredMessage="Обязательное поле!"
        name="MINotControlledPhone"
        form="my-form"
      />
      <L.Switcher value={isDisabled} onChange={(event) => setIsDisabled(event.component.value)}>
        Toggle isDisabled
      </L.Switcher>
      <br />
      <br />
      <L.Span>Insurance number (controlled)</L.Span>
      <L.MaskedInput
        mask="###-###-### ##"
        name="MIControlledInsurance"
        placeholder="___-___-___ __"
        value={cardValue}
        onChange={(event) => setCardValue(event.component.value)}
      />
      <L.Span>Phone number (controlled)</L.Span>
      <L.MaskedInput
        name="MIControlledPhone"
        mask="+7 (###)-###-##-##"
        placeholder="+7 (___)-___-__-__"
        value={phoneValue}
        onChange={(event) => {
          setPhoneValue(event.component.value);
          console.log(event.component.inputValue);
        }}
        onEnterPress={(event) => {
          console.log(event.component.inputValue);
        }}
      />
      <L.Button _warning name="clearPhoneValue" onClick={() => {setPhoneValue(null)}}>Clear Value</L.Button>
      {' '}
      <L.Button _warning name="setPhoneValue" onClick={() => {setPhoneValue('9818862798')}}>Set Value</L.Button>
      <br />
      <br />
      <L.Span>Credit card number (controlled without placeholder)</L.Span>
      <L.MaskedInput
        mask="####-####-####-####"
        name="MICardNumberControlled"
        value={cardNumberValue}
        onChange={(event) => {
          setCardNumberValue(event.component.value);
          console.log(event.component.inputValue);
        }}
      />
      <L.Button _warning name="clearCardValue" onClick={() => {setCardNumberValue(null)}}>Clear Value</L.Button>
      <br />
      <br />
      <L.Span>Car Number (uncontrolled)</L.Span>
      <L.MaskedInput
        mask="LL##LL####"
        name="MICarNumber"
        placeholder="Car number"
      />
      <L.Span>Credit card number (uncontrolled with default value)</L.Span>
      <L.MaskedInput
        mask="####-####-####-####"
        name="MICreditCardNumber"
        placeholder="####-####-####-####"
        defaultValue="6666777788889999"
      />
    </L.Div>
  );
};
