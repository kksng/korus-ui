import * as React from 'react';
import * as L from '../../../leda';

export const Validation = ({ ...restProps }): React.ReactElement => {
  const [MIValue, setMIValue] = React.useState('1234567');
  return (
    <L.Div _box _inner>
      <L.MaskedInput
        mask="+7 (###)-###-##-##"
        isRequired
        requiredMessage="Обязательное поле!"
        name="mamamamamasked"
        form="valid-masked"
        value={MIValue}
        onChange={ev => {
          const { component: { value, inputValue } } = ev;
          console.log('value', value);
          console.log('inputValue', inputValue);
          setMIValue(value);
        }}
      />

      <L.Div _inner>
        <L.Button
          form="valid-masked"
          onClick={ev => {
            console.log('Submitted');
          }}
          onValidationFail={ev => {
            console.log('Failed');
          }}
        >
          Submit
        </L.Button>
        {' '}
        <L.Button
          _success
          onClick={ev => {
            setMIValue('1234567890');
          }}
        >
          Set 1234567890
        </L.Button>
        {' '}
        <L.Button
          _danger
          onClick={ev => {
            setMIValue('123456789');
          }}
        >
          Set 123456789
        </L.Button>
        {' '}
        <L.Button
          _success
          onClick={ev => {
            setMIValue('71234567890');
          }}
        >
          Set 71234567890
        </L.Button>
        {' '}
        <L.Button
          _success
          onClick={ev => {
            setMIValue('+7 (123)-456-78-90');
          }}
        >
          Set +7 (123)-456-78-90
        </L.Button>
        {' '}
        <L.Button
          _danger
          onClick={ev => {
            setMIValue('+7 (123)-456-78-9');
          }}
        >
          Set +7 (123)-456-78-9
        </L.Button>
        {' '}
        <L.Button
          _danger
          onClick={ev => {
            setMIValue('+7 (123)-456-78');
          }}
        >
          Set +7 (123)-456-78
        </L.Button>
        {' '}
        <L.Button
          _danger
          onClick={ev => {
            setMIValue('');
          }}
        >
          Set ''
        </L.Button>
      </L.Div>
    </L.Div>
  );
};
