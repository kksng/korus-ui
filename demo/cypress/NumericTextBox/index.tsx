import * as React from 'react';

import * as L from '../../../leda';

export const NumericTextBox = (): React.ReactElement => {
    const [state, setState] = React.useState<number | null>(4);
    const [min, setMin] = React.useState(4);
    const [max, setMax] = React.useState(5);
    if (min > max) {
      setMin(max);
      setMax(min);
    }

  return(
    <L.Div _demoStory>
      <L.NumericTextBox
          min={min}
          max={max}
          value={state}
          onChange={({ component: { value } }) => setState(value)}
          name="numeric"
        />
        <br />
        <L.H3>Min = {min}</L.H3>
        <br />
        <L.Button name="increaseMin" onClick={() => setMin((prevState) => prevState + 1)}>min + 1</L.Button>
        <L.Button onClick={() => setMin((prevState) => prevState - 1)}>min - 1</L.Button>
        <br />
        <br />
        <L.H3>Max = {max}</L.H3>
        <br />
        <L.Button onClick={() => setMax((prevState) => prevState + 1)}>max + 1</L.Button>
        <L.Button name="decreaseMax" onClick={() => setMax((prevState) => prevState - 1)}>max - 1</L.Button>
        <br />
    </L.Div>
  )
}

