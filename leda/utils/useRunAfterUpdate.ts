import * as React from 'react';

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
