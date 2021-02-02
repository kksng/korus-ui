import * as React from 'react';
import * as L from '@korus/leda';

/* eslint-disable react/no-unescaped-entities */
export const WorkTypes = {
  liveDemo: `
const States = () => {
  const [isDisabled, setIsDisabled] = React.useState(false);

  return (
    <>
      <L.H4>Radio type</L.H4>
      <L.ButtonGroup
        _secondary
        form="ButtonGroup"
        name="radioType"
        data={["one", "two", "three", "four"]}
        defaultValue="one"
        isDisabled={isDisabled}
      />
      <br />
      <br />
      <L.H4>Checkbox type</L.H4>
      <L.ButtonGroup
        _warning
        form="ButtonGroup"
        name="checkboxType"
        data={["one", "two", "three", "four"]}
        defaultValue={["one"]}
        type="checkbox"
        isDisabled={isDisabled}
      />
      <br />
      <br />
      <L.Switcher value={isDisabled} onChange={(ev) => setIsDisabled(ev.component.value)}>isDisabled</L.Switcher>
      <br />
      <br />
      <L.Button
        onClick={() => {
          const result = L.form('ButtonGroup').reset();
        }}
      >
        Reset
      </L.Button>
    </>
  )
};

render(<States />);
`,
  text: (
    <L.Div>
      <L.H4>
        ButtonGroup умеет работать в двух различных состояних:
      </L.H4>
      <L.Ul _listItem default>
        <L.Li>
          Режим <b>RadioGroup</b><sup className="txt-gray"><b>default</b></sup>: в этом режиме можно нажать только одну кнопку в группе<br />
          Этот режим работает по-умолчанию
        </L.Li>
        <L.Li>
          Режим <b>CheckBox</b>: в этом режиме можно нажать несколько кнопок в группе.<br />
          Для использования передайте <i>type="checkbox"</i>
        </L.Li>
      </L.Ul>
    </L.Div>
  ),
};
