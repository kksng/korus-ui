/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

const Label = ({
  children,
}: {
  children: string,
}) => (
  <L.Span
    _width15
    style={{ display: 'inline-block', marginRight: '10px' }}
  >
    {children}
  </L.Span>
);

export const Required = (props: StoryProps) => {
  const [ACValue, setACValue] = React.useState('');
  const [DDSValue, setDDSValue] = React.useState<string | null>(null);

  return (
    <L.Div _box _inner>
      <L.Div id="ValidationRequiredBlur">
        <L.Div _inner _flexRow _alignItemsCenter>
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
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DatePicker
          </Label>
          <L.DatePicker
            isRequired
            form="requiredForm"
            name="DatePicker"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DateTimePicker
          </Label>
          <L.DateTimePicker
            isRequired
            form="requiredForm"
            name="DateTimePicker"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DateRange
          </Label>
          <L.DateRange
            isRequired
            form="requiredForm"
            name="DateRange"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DateRange 1-st required
          </Label>
          <L.DateRange
            isRequired={[true, false]}
            form="requiredForm"
            name="DateRange1"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DateRange 2-nd required
          </Label>
          <L.DateRange
            isRequired={[false, true]}
            form="requiredForm"
            name="DateRange2"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DateTimeRange
          </Label>
          <L.DateTimeRange
            isRequired
            form="requiredForm"
            name="DateTimeRange"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DateTimeRange 1-st required
          </Label>
          <L.DateTimeRange
            isRequired={[true, false]}
            form="requiredForm"
            name="DateTimeRange1"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DateTimeRange 2-nd required
          </Label>
          <L.DateTimeRange
            isRequired={[false, true]}
            form="requiredForm"
            name="DateTimeRange2"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
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
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            Input
          </Label>
          <L.Input
            isRequired
            form="requiredForm"
            name="Input"
            _grow1
          />
          <br />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            MaskedInput
          </Label>
          <L.MaskedInput
            isRequired
            form="requiredForm"
            name="MaskedInput"
            mask="###-###"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            MultiSelect
          </Label>
          <L.MultiSelect
            isRequired
            form="requiredForm"
            name="MultiSelect"
            data={['Berlin', 'Paris']}
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            NumericRange
          </Label>
          <L.NumericRange
            isRequired
            form="requiredForm"
            name="NumericRange"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            NumericRange 1-st required
          </Label>
          <L.NumericRange
            isRequired={[true, false]}
            form="requiredForm"
            name="NumericRange1"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            NumericRange 2-nd required
          </Label>
          <L.NumericRange
            isRequired={[false, true]}
            form="requiredForm"
            name="NumericRange2"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            NumericTextBox
          </Label>
          <L.NumericTextBox
            isRequired
            form="requiredForm"
            name="NumericTextBox"
            _grow1
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            Textarea
          </Label>
          <L.Textarea
            isRequired
            form="requiredForm"
            name="Textarea"
            _grow1
          />
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
