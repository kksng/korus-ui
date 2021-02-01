import * as React from 'react';
import * as L from '@korus/leda';

/* eslint-disable react/no-unescaped-entities */
export const DataTypes = {
  liveDemo: `
const DataTypes = () => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState(0);

  const dataTypes = [
    {
      text: 'String data',
      props: { 
        data: ['one', 'two', 'three'], 
      },
    },
    {
      text: 'Number data',
      props: { 
        data: [1, 2, 3], 
      },
    },
    {
      text: 'Object data',
      props: {
        data: [
          { txt: 'obj-1', val: 1 },
          { txt: 'obj-2', val: 2 },
          { txt: 'obj-3', val: 3 },
        ],
        textField: 'txt',
      },
    },
  ]

  return (
    <>
      <L.ButtonGroup
        _primary
        form="ButtonGroup"
        name="ButtonGroup"
        data={['one', 'two', 'three']}
        {...props}
      />
      <br />
      <br />
      <L.RadioGroup
        value={value}
        onChange={(ev) => {
          const index = ev.component.value;
          setProps(dataTypes[index].props)
          setValue(index);
        }}
      >
        {dataTypes.map((dataType, index) => (
          <L.RadioButton value={index}>{dataType.text}</L.RadioButton>
        ))}
      </L.RadioGroup>
    </>
  )
}

render(<DataTypes />);
`,
  text: (
    <L.Div>
      <L.P>
        ButtonGroup может принимать в качестве значения массив строк, чисел либо объектов. 
      </L.P>
      <L.P>
        При работе с объектами обязательно передавать <b>textField</b> – имя поля в объекте массива data, которое содержит текст для отображения в кнопке . 
      </L.P>
      {/* <L.Ul _listItem default>
        <L.Li>
          Режим <b>RadioGroup</b><sup className="txt-gray"><b>default</b></sup>: в этом режиме можно нажать только одну кнопку в группе<br />
          Этот режим работает по-умолчанию
        </L.Li>
        <L.Li>
          Режим <b>CheckBox</b>: в этом режиме можно нажать несколько кнопок в группе.<br />
          Для использования передайте <i>type="checkbox"</i>
        </L.Li>
      </L.Ul> */}
    </L.Div>
  ),
};
