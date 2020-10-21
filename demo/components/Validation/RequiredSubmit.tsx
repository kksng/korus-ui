/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

const Label: React.FC<{}> = ({ children }) => (
  <L.Span
    _width15
    style={{ display: 'inline-block', marginRight: '10px' }}
  >
    {children}
  </L.Span>
);

export const RequiredSubmit = (props: StoryProps) => {
  const [textValue, setTextValue] = React.useState<string>('');
  const [numberValue, setNumberValue] = React.useState<number | null>(null);

  return (
    <L.Div _box _inner>
      <L.Div id="ValidationRequiredSubmit">
        <L.Div _inner>
          <Label>
            AutoComplete
          </Label>
          <L.AutoComplete
            data={['Berlin', 'Paris']}
            onChange={(ev) => setTextValue(ev.component.value)}
            value={textValue}
            isRequired
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="AutoComplete"
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            DatePicker
          </Label>
          <L.DatePicker
            isRequired
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="DatePicker"
            value={textValue}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            DateTimePicker
          </Label>
          <L.DateTimePicker
            isRequired
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="DateTimePicker"
            value={textValue}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            DateRange
          </Label>
          <L.DateRange
            isRequired
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="DateRange"
            value={[textValue, textValue]}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            DateRange 1-st required
          </Label>
          <L.DateRange
            isRequired={[true, false]}
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="DateRange1"
            value={[textValue, textValue]}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            DateRange 2-nd required
          </Label>
          <L.DateRange
            isRequired={[false, true]}
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="DateRange2"
            value={[textValue, textValue]}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            DateTimeRange
          </Label>
          <L.DateTimeRange
            isRequired
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="DateTimeRange"
            value={[textValue, textValue]}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            DateTimeRange 1-st required
          </Label>
          <L.DateTimeRange
            isRequired={[true, false]}
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="DateTimeRange1"
            value={[textValue, textValue]}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            DateTimeRange 2-nd required
          </Label>
          <L.DateTimeRange
            isRequired={[false, true]}
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="DateTimeRange2"
            value={[textValue, textValue]}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            DropDownSelect
          </Label>
          <L.DropDownSelect
            value={textValue}
            onChange={ev => setTextValue(ev.component.value)}
            isRequired
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="DropDownSelect"
            placeholder="Berlin or Paris?"
            data={['Berlin', 'Paris']}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            Input
          </Label>
          <L.Input
            isRequired
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="Input"
            value={textValue}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            MaskedInput
          </Label>
          <L.MaskedInput
            isRequired
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="MaskedInput"
            mask="###-###"
            value={textValue}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            MultiSelect
          </Label>
          <L.MultiSelect
            isRequired
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="MultiSelect"
            data={['Berlin', 'Paris']}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            NumericRange
          </Label>
          <L.NumericRange
            isRequired
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="NumericRange"
            value={[numberValue, numberValue]}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            NumericRange 1-st required
          </Label>
          <L.NumericRange
            isRequired={[true, false]}
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="NumericRange1"
            value={[numberValue, numberValue]}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            NumericRange 2-nd required
          </Label>
          <L.NumericRange
            isRequired={[false, true]}
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="NumericRange2"
            value={[numberValue, numberValue]}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            NumericTextBox
          </Label>
          <L.NumericTextBox
            isRequired
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="NumericTextBox"
            value={numberValue}
          />
        </L.Div>
        <L.Div _inner>
          <Label>
            Textarea
          </Label>
          <L.Textarea
            isRequired
            requiredMessage="Required field"
            validator={() => false}
            invalidMessage="Invalid field"
            form="submitRequiredForm"
            name="Textarea"
            value={textValue}
          />
        </L.Div>

        <L.Div>
          <L.Button
            onClick={() => {
              setTextValue('1');
              setNumberValue(1);
            }}
          >
            Fill all inputs
          </L.Button>
          <L.Button
            _success
            form="submitRequiredForm"
          >
            submit required fields
          </L.Button>
        </L.Div>
      </L.Div>

    </L.Div>
  );
};
