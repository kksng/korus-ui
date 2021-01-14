import * as React from 'react';

// special helper for using DOM element ref after mount
export const useElementRef = (): [HTMLElement | null, (component: any) => void] => {
  const [Element, setElement] = React.useState<HTMLElement | null>(null);

  const ref = React.useCallback((component) => {
    setElement(component?.wrapper ?? component);
  }, []);

  return [Element, ref];
};
