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
        hasClearButton
        isDisabled={isDisabled}
        placeholder="+7 (___)-___-__-__"
        isRequired
        requiredMessage="Обязательное поле!"
        name="MINotControlledPhone"
        form="my-form"
      />
      <L.Switcher
        value={isDisabled}
        onChange={(event: L.SwitcherTypes.ChangeEvent): void => setIsDisabled(event.component.value)}
      >
        Toggle isDisabled
      </L.Switcher>
      <br />
      <br />
      <L.Span>Insurance number (controlled)</L.Span>
      <L.MaskedInput
        mask="###-###-### ##"
        id="MIControlledInsurance"
        placeholder="___-___-___ __"
        value={cardValue}
        onChange={(event: L.MaskedInputTypes.ChangeEvent): void => setCardValue(event.component.value)}
        onFocus={(): void => console.log('Focused')}
        onBlur={(): void => console.log('Blured')}
      />
      <L.Span>Phone number (controlled)</L.Span>
      <L.MaskedInput
        id="MIControlledPhone"
        mask="+7 (###)-###-##-##"
        placeholder="+7 (___)-___-__-__"
        value={phoneValue}
        onChange={(event: L.MaskedInputTypes.ChangeEvent): void => {
          setPhoneValue(event.component.value);
          console.log(event.component.inputValue);
        }}
        onEnterPress={(event: L.MaskedInputTypes.EnterPressEvent): void => {
          console.log(event.component.inputValue);
        }}
      />
      <L.Button
        _warning
        id="clearPhoneValue"
        onClick={(): void => {
          setPhoneValue(null);
        }}
      >
        Clear Value
      </L.Button>
      {' '}
      <L.Button
        _warning
        id="setPhoneValue"
        onClick={(): void => {
          setPhoneValue('9818862798');
        }}
      >
        Set Value
      </L.Button>
      <br />
      <br />
      <L.Span>Credit card number (controlled without placeholder)</L.Span>
      <L.MaskedInput
        mask="####-####-####-####"
        id="MICardNumberControlled"
        value={cardNumberValue}
        onChange={(event: L.MaskedInputTypes.ChangeEvent): void => {
          setCardNumberValue(event.component.value);
          console.log(event.component.inputValue);
        }}
      />
      <L.Button
        _warning
        id="clearCardValue"
        onClick={(): void => {
          setCardNumberValue(null);
        }}
      >
        Clear Value
      </L.Button>
      <br />
      <br />
      <L.Span>Car Number (uncontrolled)</L.Span>
      <L.MaskedInput
        mask="LL##LL####"
        id="MICarNumber"
        placeholder="Car number"
      />
      <L.Span>Credit card number (uncontrolled with default value)</L.Span>
      <L.MaskedInput
        mask="####-####-####-####"
        id="MICreditCardNumber"
        placeholder="####-####-####-####"
        defaultValue="6666777788889999"
      />
    </L.Div>
  );
};
