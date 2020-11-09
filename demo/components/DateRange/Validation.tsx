import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

const exampleCode = `
export const Validation = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.DateRange
        form="DateRangeValidation"
        name="DateRange"
        isRequired
        value={value}
        onChange={ev => {
          console.log('ev.component.value', ev.component.value);
          console.log('ev.component.date', ev.component.date);
          setValue(ev.component.value);
        }}
        {...props}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'isRequired',
            props: { isRequired: true },
          },
          {
            text: 'isRequired=[\'true\', \'false\']',
            props: { isRequired: [true, false] },
          },
          {
            text: 'isRequired=[\'false\', \'true\']',
            props: { isRequired: [false, true] },
          },
          {
            text: 'isRequired=[\'true\', \'true\']',
            props: { isRequired: [true, true] },
          },
          {
            text: 'isRequired=[\'false\', \'false\']',
            props: { isRequired: [false, false] },
          },
        ]}
        setProps={setProps}
      />
      <br />
      <br />
      <L.Button
        form="DateRangeValidation"
        onClick={() => console.log('Submitted')}
        onValidationFail={ev => console.log('Failed', ev.invalidForms)}
      >
        Submit date ranges
      </L.Button>
    </L.Div>
  );
};

`;

export const Validation = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({ isRequired: true });
  const [value, setValue] = React.useState<[string, string]>(['', '']);
  const [eventData, setEventData] = React.useState<any>({});

  return (
    <L.Div _box _inner _demoBg>
      <L.DateRange
        form="DateRangeValidation"
        name="DateRange"
        isRequired
        value={value}
        onChange={(ev: any) => {
          setValue(ev.component.value);
          setEventData({
            eventType: 'Change',
            value: ev.component.value,
            date: ev.component.date,
            isValid: ev.component.isValid,
            name: ev.component.name,
          });
        }}
        {...props}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'isRequired',
            props: { isRequired: true },
          },
          {
            text: 'isRequired=[\'true\', \'false\']',
            props: { isRequired: [true, false] },
          },
          {
            text: 'isRequired=[\'false\', \'true\']',
            props: { isRequired: [false, true] },
          },
          {
            text: 'isRequired=[\'true\', \'true\']',
            props: { isRequired: [true, true] },
          },
          {
            text: 'isRequired=[\'false\', \'false\']',
            props: { isRequired: [false, false] },
          },
        ]}
        setProps={setProps}
      />
      <br />
      <br />
      <L.Button
        form="DateRangeValidation"
        onClick={() => console.log('Submitted')}
        onValidationFail={ev => console.log('Failed', ev.invalidForms)}
      >
        Submit date ranges
      </L.Button>
      <br />
      <br />
      <L.H5>Event: {eventData.type}</L.H5>
      <L.Div _inner>
        <L.Dl _list _w30 _form>
          <L.Dt>name</L.Dt>
          <L.Dd>{`${eventData.name}`}</L.Dd>
          <L.Dt>value</L.Dt>
          <L.Dd>{`[${eventData.value}]`}</L.Dd>
          <L.Dt>date</L.Dt>
          <L.Dd>{`[${eventData.date}]`}</L.Dd>
          <L.Dt>isValid</L.Dt>
          <L.Dd>{`[${eventData.isValid}]`}</L.Dd>
        </L.Dl>
      </L.Div>
    </L.Div>
  );
};
