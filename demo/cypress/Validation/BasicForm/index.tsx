import * as React from 'react';
import * as L from '../../../../korus-ui';
import { Label } from '../utils/Label';

export const BasicForm = () => {
  const [ACValue, setACValue] = React.useState('');
  const [DDSValue, setDDSValue] = React.useState<string | null>(null);

  return (
    <L.Div _inner _basic>
      <L.Div _inner id="validationRequiredBlur">
        <L.H2>Basic Use</L.H2>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>AutoComplete</Label>
          <L.AutoComplete
            data={['Berlin', 'Paris']}
            onChange={(ev) => setACValue(ev.component.value)}
            value={ACValue}
            isRequired
            form="requiredForm"
            name="AutoComplete"
            requiredMessage={'Field is required'}
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>DatePicker</Label>
          <L.DatePicker
            isRequired
            form="requiredForm"
            name="DatePicker"
            requiredMessage={'Field is required'}
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>DateTimePicker</Label>
          <L.DateTimePicker
            isRequired
            form="requiredForm"
            name="DateTimePicker"
            requiredMessage={'Field is required'}
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>DateRange</Label>
          <L.DateRange
            isRequired
            form="requiredForm"
            name="DateRange"
            requiredMessage={'Field is required'}
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>DateTimeRange</Label>
          <L.DateTimeRange
            isRequired
            form="requiredForm"
            name="DateTimeRange"
            requiredMessage={'Field is required'}
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>DropDownSelect</Label>
          <L.DropDownSelect
            value={DDSValue}
            onChange={(ev) => setDDSValue(ev.component.value)}
            isRequired
            form="requiredForm"
            name="DropDownSelect"
            placeholder="Berlin or Paris?"
            data={['Berlin', 'Paris']}
            requiredMessage={'Field is required'}
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>Input</Label>
          <L.Input
            isRequired
            form="requiredForm"
            name="Input"
            requiredMessage={'Field is required'}
            _grow1
          />
          <br />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>MaskedInput</Label>
          <L.MaskedInput
            isRequired
            form="requiredForm"
            name="MaskedInput"
            mask="###-###"
            requiredMessage={'Field is required'}
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>MultiSelect</Label>
          <L.MultiSelect
            isRequired
            form="requiredForm"
            name="MultiSelect"
            data={['Berlin', 'Paris']}
            requiredMessage={'Field is required'}
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>NumericTextBox</Label>
          <L.NumericTextBox
            isRequired
            form="requiredForm"
            name="NumericTextBox"
            requiredMessage={'Field is required'}
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>Textarea</Label>
          <L.Textarea
            isRequired
            form="requiredForm"
            name="Textarea"
            requiredMessage={'Field is required'}
            _grow1
          />
        </L.Div>
        <L.Button
          form={['requiredForm']}
          scrollOffset={64}
          shouldScrollToInvalidFields
          _warning
          onClick={() => console.log('Successful click!')}
          onValidationFail={(ev) =>
            console.log('Click failed! Invalid fields', ev.invalidForms)
          }
        >
          Validate
        </L.Button>
      </L.Div>
    </L.Div>
  );
};
