/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../leda';
import { Form } from '../../../leda/components/Validation/types';
import { StoryProps } from '../../types';


export const ShouldValidateUnmounted = (props: StoryProps) => {
  const [selected, setSelected] = React.useState<number | string>(0);
  const [invalidFormInfo, setInvalidFormInfo] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');

  const setInvalidFormData = (data: Form[] | null): void => {
    const message = (() => {
      if (data) {
        setIsValid(false);
        return `Invalid form: ${data[0].name}`;
      }

      setIsValid(true);
      return 'all mounted and unmounted fields are valid';
    })();

    setInvalidFormInfo(message);
  };

  return (
    <L.Div _box _inner>
      <L.Div>
        <L.Tabs
          activeTabKey={selected}
          onChange={ev => setSelected(ev.component.value)}
        >
          <L.Tab title="Tab 1" tabKey={0}>
            <L.Div _inner>
              <L.Div _inner>
                <L.Input
                  value={value1}
                  onChange={ev => setValue1(ev.component.value)}
                  validator="postalCode"
                  form="unmountedForm"
                  name="Input1"
                  isRequired
                  requiredMessage={'kjhkjgfdff'}
                  placeholder="unmounted 1"
                  shouldValidateUnmounted
                />
              </L.Div>
            </L.Div>
          </L.Tab>
          <L.Tab title="Tab 2" tabKey={1}>
            <L.Div _inner>
              <L.Div _inner>
                <L.Input
                  value={value2}
                  onChange={ev => setValue2(ev.component.value)}
                  validator="postalCode"
                  form="unmountedForm"
                  name="Input2"
                  isRequired
                  placeholder="unmounted 2"
                  shouldValidateUnmounted
                />
              </L.Div>
            </L.Div>
          </L.Tab>
        </L.Tabs>

        <L.Div>
          <L.Div _inner>
            <L.Button
              form="unmountedForm"
              onClick={() => {
                setInvalidFormData(null);
              }}
              onValidationFail={ev => {
                setInvalidFormData(ev.invalidForms);
                // eslint-disable-next-line no-console
                console.info(ev.invalidForms);
              }}
              _warning
            >
              Validate unmounted components
            </L.Button>

            <br />
            <br />

            <L.Button
              onClick={() => {
                L.form('unmountedForm', 'Input1').remove();
              }}
            >
              L.form('unmountedForm', 'Input1').remove()
            </L.Button>
            {' '}
            <L.Button
              onClick={() => {
                L.form('unmountedForm', ['Input1', 'Input2']).remove();
              }}
            >
              L.form('unmountedForm', ['Input1', 'Input2']).remove()
            </L.Button>
            {' '}
            <L.Button
              onClick={() => {
                L.form('unmountedForm').remove();
              }}
            >
              L.form('unmountedForm').remove()
            </L.Button>
          </L.Div>
        </L.Div>

        <L.Div _inner _txtSuccess={isValid} _txtDanger={!isValid}>
          {invalidFormInfo}
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
