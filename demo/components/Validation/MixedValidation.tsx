/* eslint-disable react/prop-types, no-console */
import * as React from 'react';
import * as L from '../../../leda';
import { MaskedInputRefCurrent } from '../../../leda/components/MaskedInput/types';
import { AutoCompleteRefCurrent } from '../../../leda/components/AutoComplete/types';

const validate = (ref: any) => {
  if (ref.current && ref.current.triggerValidation) {
    const isValid = ref.current.triggerValidation();
    if (!isValid) {
      ref.current?.input
        ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    return isValid;
  }
  return false;
};

export const MixedValidation = (props: { title: string }) => {
  const [valueI1, setValueI1] = React.useState('');
  const [valueI2, setValueI2] = React.useState('');
  const [valueAC, setValueAC] = React.useState('');
  const [valueM, setValueM] = React.useState('');

  const refAC = React.useRef<AutoCompleteRefCurrent>(null);
  const refMasked = React.useRef<MaskedInputRefCurrent>(null);

  return (
    <L.Div _box _inner>
      <L.H6>Валидация старая и новая</L.H6>
      <L.Input
        form="MixedValidation"
        name="input1"
        isRequired
        requiredMessage="required"
        // validator={val => (val.length > 5)}
        invalidMessage="val.length > 5"
        onChange={(ev: L.InputTypes.ChangeEvent): void => {
          setValueI1(ev.component.value);
        }}
        value={valueI1}
      />
      <br />
      <br />
      <L.AutoComplete
        form="MixedValidation2"
        name="AC"
        ref={refAC}
        data={[
          'London',
          'Islamabad',
          'Berlin',
          'Washington',
          'Paris',
          'Rome',
          'Tokyo',
          'Budapest',
          'Ottawa',
          'Moscow',
        ]}
        value={valueAC}
        onChange={(ev) => setValueAC(ev.component.value)}
        placeholder="Type your city..."
        hasClearButton
        isRequired
      />
      <br />
      <br />
      <L.MaskedInput
        mask="+7 (###) ###-##-##"
        placeholderChar="*"
        placeholder="Введите номер телефона"
        onChange={(ev) => {
          setValueM(ev.component.value);
          console.log('ev.component.value', ev.component.value);
        }}
        ref={refMasked}
        isRequired
        // requiredMessage="required"
        // validator={val => (val.length > 5)}
        // invalidMessage="val.length > 5"
        form="MixedValidation2"
        name="masked"
        value={valueM}
        _width30
      />
      <br />
      <br />
      <L.Input
        form="MixedValidation"
        name="input2"
        isRequired
        requiredMessage="required"
        // validator={val => (val.length > 5)}
        invalidMessage="val.length > 5"
        onChange={(ev: L.InputTypes.ChangeEvent): void => {
          setValueI2(ev.component.value);
        }}
        value={valueI2}
      />
      <br />
      <br />
      <L.Button
        form="MixedValidation"
        shouldScrollToInvalidFields
        onClick={() => {
          const isMaskedValid = validate(refMasked);
          const isACValid = validate(refAC);

          if (isMaskedValid && isACValid) {
            console.log('Successful click!');
          }
        }}
        onValidationFail={(ev) => {
          const invalidForm = ev.invalidForms.find((form) => form.name === 'MixedValidation');
          const firstInvalidFields = invalidForm?.fields
            .filter((field) => [
              'input1',
            ].includes(field.name) && !field.isValid);

          if (firstInvalidFields?.length) {
            validate(refMasked);
            validate(refAC);
          } else {
            setTimeout(() => {
              validate(refMasked);
              validate(refAC);
            }, 0);
          }

          console.log('Click failed! Invalid fields', ev);
        }}
      >
        Валидировать!
      </L.Button>
      {' '}
      <L.Button
        onClick={() => {
          if ((refMasked.current as any)?.triggerValidation) {
            const isMaskedValid = (refMasked.current as any)?.triggerValidation();
            if (!isMaskedValid) {
              refMasked.current?.input
                ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
          }

          if ((refAC.current as any)?.triggerValidation) {
            const isACValid = (refAC.current as any)?.triggerValidation();
            if (!isACValid) {
              refAC.current?.input
                ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
          }
        }}
      >
        Trigger!
      </L.Button>
    </L.Div>
  );
};
