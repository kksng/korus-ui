import * as React from 'react';

/**
 *  hook for calling updates before the end of the re-render, example-changing the cursor position without blinking
 *
 * @returns {(callback: () => void) => void} - function helps manage state before the end of the re-render
 */
export const useRunAfterUpdate = (): (callback: () => void) => void => {
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
