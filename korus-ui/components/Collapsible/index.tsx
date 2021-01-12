import * as React from 'react';
import { isFunction } from 'lodash';
import { bindFunctionalRef, useProps } from '../../utils';
import { DEFAULT_TRANSITION } from './contants';
import { generateTransitionProperty } from './helpers';
import { CollapsibleProps, CollapsibleRefCurrent } from './types';
import { useCollapse } from '../Collapse/useCollapse';
import { Div } from '../Div';

export const Collapsible = React.forwardRef((props: CollapsibleProps, ref: React.Ref<CollapsibleRefCurrent>) => {
  const {
    children,
    className,
    isOpen,
    onClose,
    onOpen,
    onToggle,
    transition = DEFAULT_TRANSITION,
  } = useProps(props);

  /* Should not display after collapse animation finished. `visibility: hidden;` is not enough on IE */
  const [shouldDisplay, setShouldDisplay] = React.useState(isOpen);
  const firstRenderRef = React.useRef(true);

  React.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      setShouldDisplay(true);
    }
  }, [isOpen]);

  const onRest = (): void => {
    if (isOpen && isFunction(onOpen)) {
      onOpen();
    }
    if (!isOpen) {
      setShouldDisplay(false);
      onClose?.();
    }
    if (isFunction(onToggle)) {
      onToggle();
    }
  };

  const transitionProperty = typeof transition === 'string' ? transition : generateTransitionProperty(transition);

  const bodyRef = React.useRef<HTMLElement>();

  const { setIsExpandedStyle, setIsCollapsedStyle, style } = useCollapse({
    content: bodyRef,
    isOpen,
  });

  const onTransitionEnd = React.useCallback((ev: React.TransitionEvent) => {
    if (ev.target === bodyRef.current && ev.propertyName === 'height') {
      if (isOpen) {
        setIsExpandedStyle();
      } else {
        setIsCollapsedStyle();
      }

      onRest();
    }
  },
  [isOpen, onRest, setIsCollapsedStyle, setIsExpandedStyle]);

  const styles = React.useMemo(() => ({
    display: isOpen || shouldDisplay ? undefined : 'none',
    transition: transitionProperty,
    willChange: 'height',
    ...style,
  }), [
    isOpen,
    shouldDisplay,
    style,
    transitionProperty,
  ]);

  return (
    <Div
      ref={((component) => {
        if (ref) {
          bindFunctionalRef(component, ref, component && {
            wrapper: component.wrapper ? component.wrapper : component,
          });
        }

        bodyRef.current = component?.wrapper ?? undefined;
      })}
      onTransitionEnd={onTransitionEnd}
      className={className}
      style={styles as React.CSSProperties}
    >
      {children}
    </Div>
  );
}) as React.FC<CollapsibleProps>;

Collapsible.displayName = 'Collapsible';
