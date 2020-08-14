import * as React from 'react';

// хук для вызова обновлений перед окончанием ререндера, пример - изменение позиции курсора без мигания
export const useRunAfterUpdate = () => {
  const afterPaintRef = React.useRef<() => void | undefined>();
  const [counter, setCounter] = React.useState(0);

  React.useLayoutEffect(() => {
    afterPaintRef.current?.();
  }, [counter]);

  return (callback: () => void) => {
    afterPaintRef.current = callback;
    setCounter((prevState) => prevState + 1);
  };
};
