import * as React from 'react'
import * as L from '../../../korus-ui'

const Label = ({ children }: { children: string }) => (
  <L.Span _width15 style={{ display: 'inline-block', marginRight: '10px' }}>
    {children}
  </L.Span>
)

export const Validation = () => {
  // const [isValid, setIsValid] = React.useState(true);
  // const [message, setMessage] = React.useState('');

  const [ACValue, setACValue] = React.useState('')
  const [DDSValue, setDDSValue] = React.useState<string | null>(null)

  // return (
  //   <L.Div _box _inner>
  //     <L.Div>
  //       <L.Div _inner>
  //         <L.Input
  //           isValid={isValid}
  //           invalidMessage="The app decides component to have invalid content"
  //           form="formIsValid"
  //           name="Input1"
  //           placeholder="outer isValid"
  //         />
  //       </L.Div>
  //       <L.Div _inner>
  //         <L.Button name="Toggle" onClick={() => setIsValid(!isValid)} _warning>
  //           Toggle isValid
  //         </L.Button>
  //         <L.Button
  //           name="Submit"
  //           form="formIsValid"
  //           onClick={() => setMessage('Submitted')}
  //           onValidationFail={() => setMessage('Submit failed')}
  //         >
  //           Submit
  //         </L.Button>
  //         <L.Div name="Message">{message}</L.Div>
  //       </L.Div>
  //     </L.Div>
  //   </L.Div>
  // );
  return (
    <L.Div _box _inner>
      <L.Div _basic>
        <L.Div id="ValidationRequiredBlur">
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
          {/* <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            NumericRange
          </Label>
          <L.NumericRange
            isRequired
            form="requiredForm"
            name="NumericRange"
            requiredMessage={'Field is required'}
            _grow1
          />
        </L.Div> */}
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
            Валидировать!
          </L.Button>
        </L.Div>
      </L.Div>
      <br />
      <br />
      <L.Div _box id="propsValidator">
        <L.Div>
          <L.Div _inner>
            <L.Input
              form="form1"
              name="email"
              validator="email"
              isRequired
              requiredMessage="Обязательное поле!"
              placeholder="predefined email validator"
            />
          </L.Div>
          <L.Div _inner>
            <L.Input
              form="form1"
              name="regexp"
              validator={/[A-Z]/}
              isRequired
              requiredMessage="Обязательное поле!"
              invalidMessage="Должна быть хотя бы одна заглавная латинская буква!"
              placeholder="validator as RegExp"
            />
          </L.Div>
          <L.Div _inner>
            <L.Input
              form="form1"
              name="function"
              validator={(value: string): boolean =>
                value.toString().length > 10
              }
              invalidMessage="Минимум 10 символов!"
              isRequired
              requiredMessage="Обязательное поле!"
              placeholder="validator as function"
            />
          </L.Div>
          <L.Div _inner>
            <L.Input
              form="form1"
              name="array-field"
              validator={[
                { validator: 'email' },
                {
                  validator: /[A-Z]/,
                  invalidMessage: 'Должна быть хотя бы одна заглавная буква!',
                },
                {
                  validator: (value: string) => value.toString().length > 10,
                  invalidMessage: 'Минимум 10 символов!',
                },
              ]}
              isRequired
              requiredMessage="Обязательное поле!"
              placeholder="validator as an array of validators"
            />
          </L.Div>
          <L.Div _inner>
            <L.Button
              form="form1"
              name="submitButton"
              _warning
              onClick={() => console.log('Successful click!')}
              onValidationFail={(ev) =>
                console.log('Click failed! Invalid fields', ev.invalidForms)
              }
            >
              Submit
            </L.Button>
          </L.Div>
        </L.Div>
      </L.Div>
    </L.Div>
  )
}
