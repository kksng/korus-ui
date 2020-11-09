import React from 'react';
import {
  bindFunctionalRef, useProps,
} from '../../utils';
import { Loader } from '../Loader';
import { CollapsePanelContext } from './CollapseContext';
import { useBodyWrapper } from './helpers';
import { BodyProps, BodyRefCurrent } from './types';
import { useCollapse } from './useCollapse';

export const Body = React.forwardRef((props: BodyProps, ref?: React.Ref<BodyRefCurrent>): React.ReactElement => {
  const {
    onOpen, onCloseByClick, onClose, isLoading, transition, children, className,
  } = useProps(props);

  const {
    isExpanded, isClicked, onBodyRest, panelKey,
  } = React.useContext(CollapsePanelContext);

  const customEvent = React.useMemo(() => ({
    component: {
      value: panelKey,
    },
  }), [panelKey]);

  const callOpenHandler = React.useCallback(() => {
    onOpen?.(customEvent);
  }, [onOpen, customEvent]);

  const callCloseHandler = React.useCallback(() => {
    if (isClicked) {
      onCloseByClick?.(customEvent);
    }

    onClose?.(customEvent);
  }, [customEvent, isClicked, onClose, onCloseByClick]);

  const handleRest = React.useCallback((): void => {
    if (isExpanded) {
      callOpenHandler();
    } else {
      callCloseHandler();
    }

    onBodyRest();
  }, [callCloseHandler, callOpenHandler, isExpanded, onBodyRest]);

  const BodyWrapper = useBodyWrapper(props);

  const bodyRef = React.useRef<HTMLElement>();

  const { setIsExpandedStyle, setIsCollapsedStyle, style } = useCollapse({
    isOpen: isExpanded,
    content: bodyRef,
  });

  const onTransitionEnd = React.useCallback((ev: React.TransitionEvent) => {
    if (ev.target === bodyRef.current && ev.propertyName === 'height') {
      if (isExpanded) {
        setIsExpandedStyle();
      } else {
        setIsCollapsedStyle();
      }

      handleRest?.();
    }
  }, [handleRest, isExpanded, setIsCollapsedStyle, setIsExpandedStyle]);

  const styles = React.useMemo(() => ({
    willChange: 'height',
    transition: transition ?? 'height 250ms cubic-bezier(.4, 0, .2, 1)',
    ...style,
  }), [style, transition]);

  return (
    <BodyWrapper
      // @ts-ignore
      ref={((component) => {
        if (ref) {
          bindFunctionalRef(component, ref, component && {
            wrapper: component.wrapper ? component.wrapper : component,
          });
        }

        bodyRef.current = component?.wrapper;
      })}
      onTransitionEnd={onTransitionEnd}
      className={className}
      style={styles}
      aria-expanded={isExpanded}
    >
      {isLoading ? <Loader /> : children}
    </BodyWrapper>
  );
}) as React.FC<BodyProps>;

Body.displayName = 'Collapse.Body';
