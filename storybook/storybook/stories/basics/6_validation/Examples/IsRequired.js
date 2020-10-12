import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const IsRequired = {
  liveDemo: `
const Label = ({ children }) => (
  <L.Span
    _width15
    style={{ display: 'inline-block', marginRight: '10px' }}
  >
    {children}
  </L.Span>
);

const IsRequired = () => {
  const [ACValue, setACValue] = React.useState('');
  const [DDSValue, setDDSValue] = React.useState(null);

  return (
    <L.Div>
      <L.P>
        <Label>
          AutoComplete
        </Label>
        <L.AutoComplete
          data={['Berlin', 'Paris']}
          onChange={ev => setACValue(ev.component.value)}
          value={ACValue}
          isRequired
          form="requiredForm"
          name="AutoComplete"
        />
      </L.P>
      <L.P>
        <Label>
          DatePicker
        </Label>
        <L.DatePicker
          isRequired
          form="requiredForm"
          name="DatePicker"
        />
      </L.P>
      <L.P>
        <Label>
          DateTimePicker
        </Label>
        <L.DateTimePicker
          isRequired
          form="requiredForm"
          name="DateTimePicker"
        />
      </L.P>
      <L.P>
        <Label>
          DateRange
        </Label>
        <L.DateRange
          isRequired
          form="requiredForm"
          name="DateRange"
        />
      </L.P>
      <L.P>
        <Label>
          DateTimeRange
        </Label>
        <L.DateTimeRange
          isRequired
          form="requiredForm"
          name="DateTimeRange"
        />
      </L.P>
      <L.P>
        <Label>
          DropDownSelect
        </Label>
        <L.DropDownSelect
          value={DDSValue}
          onChange={ev => setDDSValue(ev.component.value)}
          isRequired
          form="requiredForm"
          name="DropDownSelect"
          placeholder="Berlin or Paris?"
          data={['Berlin', 'Paris']}
        />
      </L.P>
      <L.P>
        <Label>
          Input
        </Label>
        <L.Input
          isRequired
          form="requiredForm"
          name="Input"
        />
      </L.P>
      <L.P>
        <Label>
          MaskedInput
        </Label>
        <L.MaskedInput
          isRequired
          form="requiredForm"
          name="MaskedInput"
          mask="###-###"
        />
      </L.P>
      <L.P>
        <Label>
          MultiSelect
        </Label>
        <L.MultiSelect
          isRequired
          form="requiredForm"
          name="MultiSelect"
          data={['Berlin', 'Paris']}
        />
      </L.P>
      <L.P>
        <Label>
          NumericRange
        </Label>
        <L.NumericRange
          isRequired
          form="requiredForm"
          name={["NumericRange1", "NNN"]}
        />
      </L.P>
      <L.P>
        <Label>
          NumericTextBox
        </Label>
        <L.NumericTextBox
          isRequired
          form="requiredForm"
          name="NumericTextBox"
        />
      </L.P>
      <L.P>
        <Label>
          Textarea
        </Label>
        <L.Textarea
          isRequired
          form="requiredForm"
          name="Textarea"
        />
      </L.P>
      <L.P>
        <L.Button
          form="requiredForm"
          name="Textarea"
        >
          Submit
        </L.Button>
      </L.P>
    </L.Div>
  );
};

render(<IsRequired />);
`,
  text: (
    <L.Div _inner>
      <L.P>
        Атрибут <b>isRequired</b> делает поле обязательным.
      </L.P>
      <L.P>
        Если поле не заполнено, при потере фокуса или сабмите формы кнопкой, оно будет подсвечено css-классом.
      </L.P>
      <L.P>
        По умолчанию для состояния <b>isRequired</b> сообщение об ошибке не предусмотрено, используется только посветка css-классом.
      </L.P>
      <L.P _block>
        Ниже перечислены все компоненты, которые принимают атрибут <b>isRequired</b>:
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
