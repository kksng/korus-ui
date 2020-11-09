import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

const exampleCode = `
export const BasicUsage = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.DatePicker {...props} />
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Default',
            props: { },
          },
          {
            text: 'isDisabled',
            props: { isDisabled: true },
          },
          {
            text: 'isOpen',
            props: { isOpen: true },
          },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};

`;

export const Customization = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.DatePicker
        {...props}
        dateCellRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid dodgerBlue' }} />}
        dateViewRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid cyan' }} />}
        weeksRowRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid blue' }} />}
        calendarWrapperRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid green' }} />}
        calendarHeaderRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid yellow' }} />}
        iconRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid red' }} />}
        inputRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid magenta' }} />}
        monthViewRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid aquamarine' }} />}
        yearViewRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid orange' }} />}
        wrapperRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid lime' }} />}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Default',
            props: { },
          },
          {
            text: 'isDisabled',
            props: { isDisabled: true },
          },
          {
            text: 'isOpen',
            props: { isOpen: true },
          },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
