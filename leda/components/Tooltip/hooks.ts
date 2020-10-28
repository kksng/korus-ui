import * as React from 'react';
import debounce from 'lodash/debounce';
import isMatch from 'lodash/isMatch';

import { getTooltipPosition, getTooltipOffsets } from './helpers';
import { TooltipPosition, TooltipStyle, UseTooltip } from './types';

export const useTooltip: UseTooltip = ({
  arrowSize,
  transitionTimeout,
  initialIsOpen,
  initialPosition,
  elementRef,
  tooltipRef,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>(initialIsOpen ?? false);

  const [position, setPosition] = React.useState<TooltipPosition>();

  const [style, setStyle] = React.useState<TooltipStyle>({
    opacity: 0, top: 0, visibility: 'hidden',
  });

  const mergeStyle = React.useCallback((newStyle: Partial<TooltipStyle>) => {
    setStyle((oldStyle) => {
      if (isMatch(oldStyle, newStyle)) {
        return oldStyle;
      }

      return {
        ...oldStyle,
        ...newStyle,
      };
    });
  }, []);

  const updateTooltip = React.useCallback(() => {
    if (!elementRef?.current || !tooltipRef?.current) {
      return;
    }

    const elementRect = elementRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    const newPosition = getTooltipPosition({
      position: initialPosition, elementRect, tooltipRect, arrowSize,
    }) || initialPosition;
    console.log('newPosition', newPosition);
    setPosition(newPosition);

    const newOffsets = getTooltipOffsets({
      position: newPosition, elementRect,
    });
    // is needed to prevent uncontrolled change of dimensions after tooltip becomes visible
    const fixedDimensions = { width: tooltipRect.width, height: tooltipRect.height };

    mergeStyle({ ...newOffsets, ...fixedDimensions });
  }, [elementRef, tooltipRef, initialPosition, arrowSize, mergeStyle]);

  const closeTooltip = React.useCallback(() => {
    setIsOpen(false);

    setPosition(undefined);

    setStyle({
      opacity: 0, top: 0, visibility: 'hidden',
    });
  }, []);

  const handleTransitionEnd = React.useCallback<React.TransitionEventHandler>(() => {
    if (isOpen != null) {
      return;
    }

    closeTooltip();
  }, [closeTooltip, isOpen]);

  const debounceCloseTooltip = React.useMemo(() => {
    const close = () => {
      closeTooltip();
    };

    return debounce(close, transitionTimeout);
  }, [closeTooltip, transitionTimeout]);

  const hideTooltip = React.useCallback(() => {
    setIsOpen(undefined);

    mergeStyle({
      opacity: 0,
    });

    debounceCloseTooltip();
  }, [debounceCloseTooltip, mergeStyle]);

  const showTooltip = React.useCallback(() => {
    if (!elementRef?.current || !tooltipRef?.current) {
      return;
    }

    setIsOpen(true);

    setStyle({
      opacity: 1, top: 0,
    });

    updateTooltip();

    debounceCloseTooltip.cancel();
  }, [debounceCloseTooltip, updateTooltip, elementRef, tooltipRef]);

  React.useEffect(() => {
    if (isOpen === false) {
      return undefined;
    }

    if (!elementRef?.current || !tooltipRef?.current) {
      return undefined;
    }

    const handleResize = () => {
      updateTooltip();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, [isOpen, updateTooltip, elementRef, tooltipRef]);

  React.useEffect(() => {
    if (initialIsOpen != null) {
      return undefined;
    }

    if (!elementRef?.current) {
      return undefined;
    }

    const element = elementRef?.current;

    element.addEventListener('pointerenter', showTooltip);
    element.addEventListener('pointerleave', hideTooltip);
    element.addEventListener('touchstart', showTooltip);
    element.addEventListener('touchend', hideTooltip);

    return () => {
      element.removeEventListener('pointerenter', showTooltip);
      element.removeEventListener('pointerleave', hideTooltip);
      element.removeEventListener('touchstart', showTooltip);
      element.removeEventListener('touchend', hideTooltip);
    };
  }, [initialIsOpen, showTooltip, hideTooltip, elementRef]);

  React.useEffect(() => {
    if (initialIsOpen) {
      showTooltip();
    } else {
      hideTooltip();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialIsOpen]);

  return {
    handleTransitionEnd,
    position,
    style,
  };
};
