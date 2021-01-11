import * as React from 'react';
import { isFunction } from 'lodash';
import { CustomRender, SomeRefCurrent } from '../commonTypes';

export interface UseElementHook {
  <P, S, E>
  (
    displayName: string,
    DefaultElement: React.ComponentType<any>,
    customRender: CustomRender<P, S, E> | undefined,
    componentProps: P,
    componentState?: S,
  ): React.FC<E>,
}

export const useElement: UseElementHook = <P, S, E>(displayName: string, DefaultElement: React.ComponentType<any>, customRender: CustomRender<P, S, E> | undefined, componentProps: P, componentState?: S) => {
  const propsRef = React.useRef(componentProps);

  const stateRef = React.useRef(componentState);

  const customRenderRef = React.useRef(customRender);

  propsRef.current = componentProps;

  stateRef.current = componentState;

  customRenderRef.current = customRender;

  React.useDebugValue(displayName);

  return React.useMemo(() => {
    const element = React.forwardRef<SomeRefCurrent, E>(<T extends E>(props: T, ref: React.Ref<SomeRefCurrent>): React.ReactElement => {
      if (isFunction(customRenderRef.current)) {
        return customRenderRef.current({
          Element: DefaultElement,
          componentProps: propsRef.current,
          componentState: (stateRef.current || {}) as S,
          elementProps: { ...props, ref },
        }) as React.ReactElement;
      }

      return <DefaultElement {...props} ref={ref} />;
    });

    element.displayName = displayName;

    return element as unknown as React.FC<E>;
  }, [DefaultElement, displayName]);
};
