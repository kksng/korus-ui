/* eslint-disable no-alert, no-console */
import * as React from 'react'
import * as L from '../../../korus-ui'
import { SetState } from '../../../korus-ui/commonTypes'
import { useInterval } from '../../../korus-ui/utils'

const data = [
  { labelText: 'Согласование' },
  { labelText: 'Оформление' },
  { labelText: 'Подписание' },
  { labelText: 'Предоплата' },
  { labelText: 'Доставка' },
  { labelText: 'Оплата' },
]

const data1 = [
  { type: 'Первый' },
  { type: 'Второй' },
  { type: 'Третий' },
]

const handleClick = (
  newIndex: number,
  setValue: SetState<{ labelText: string }>,
  setIndex: SetState<number>
) => {
  if (newIndex <= data.length - 1 && newIndex >= 0) {
    setValue(data[newIndex])
    setIndex(newIndex)
  }
}

export const StatusBar = () => {
  const [index, setIndex] = React.useState(2)
  const [value, setValue] = React.useState(data[index])
  const [progress, setProgress] = React.useState(0)

  useInterval(
    () => {
      setProgress(progress + 10)
    },
    progress < 100 ? 500 : null
  )

  return (
    <L.Div style={{ paddingBottom: '24px' }} _demoStory>
      <L.H4 _title>StatusBar & StatusBarCustom</L.H4>
      <L.Div _animate>
        <L.StatusBar
          data={data}
          value={data[2]}
          textField="labelText"
          currentStepProgress={progress}
        />
      </L.Div>
      <br />
      <L.Div _types>
        <L.StatusBar
          data={data1}
          value={data[2]}
          typeField="type"
          currentStepProgress={progress}
        />
      </L.Div>
      <br />
      <L.Div _progress>
        <L.StatusBar
          id="progress"
          data={data}
          value={value}
          textField="labelText"
          onClick={() => alert('clicked!')}
          iconRender={({
            componentProps: { isLast, position },
            Element,
            elementProps,
          }) =>
            isLast && position === 'current' ? (
              <L.Div _last _statusbarIcon _success />
            ) : (
              <Element {...elementProps} />
            )
          }
        />
      </L.Div>
      <br />
      <br />
      <L.Button
        name="prev"       
        _warning
        onClick={() => handleClick(index - 1, setValue, setIndex)}
      >
        Предыдущий Шаг
      </L.Button>{' '}
      <L.Button
        name="next"
        _warning
        onClick={() => handleClick(index + 1, setValue, setIndex)}
      >
        Следующий Шаг
      </L.Button>{' '}
      <L.Button name="start" _warning onClick={() => setProgress(0)}>
        Начать анимацию
      </L.Button>
      <br />
      <br />
    </L.Div>
  )
}
