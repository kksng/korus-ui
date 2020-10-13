import * as React from 'react';
import * as L from '../../../leda';

export const DynamicMinMaxValidation = (args: any) => {
    const [state, setState] = React.useState<number | null>(5);
    const [min, setMin] = React.useState(4);
    const [max, setMax] = React.useState(7);
    if (min > max) {
      setMin(max);
      setMax(min);
    }
   
    return (
      <L.Div _demoStory>
        <L.NumericTextBox
          min={min}
          max={max}
          value={state}
          onChange={({ component: { value } }) => setState(value)}
          form="test"
          name="numeric"
        />
        <br />
        <L.H3>Min = {min}</L.H3>
        <br />
        <L.Button onClick={() => setMin((prevState) => prevState + 1)}>min + 1</L.Button>
        <L.Button onClick={() => setMin((prevState) => prevState - 1)}>min - 1</L.Button>
        <br />
        <br />
        <L.H3>Max = {max}</L.H3>
        <br />
        <L.Button onClick={() => setMax((prevState) => prevState + 1)}>max + 1</L.Button>
        <L.Button onClick={() => setMax((prevState) => prevState - 1)}>max - 1</L.Button>
        <br />
        <L.Button form="test" onClick={(ev) => console.log(ev.form)}>Submit</L.Button>
      </L.Div>
    );
  };
