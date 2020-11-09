import * as React from 'react';
import isNil from 'lodash/isNil';
import throttle from 'lodash/throttle';
import { DivRefCurrent } from '../components/Div';

export interface ClassNamesMap {
  right?: string,
  top?: string,
  visible?: string,
}

interface AdaptivePositionProps {
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement | null}>,
  classNames: ClassNamesMap,
  elRef: React.MutableRefObject<DivRefCurrent | null>,
  isOpen: boolean,
}

const getElRectFromRef = (ref?: React.RefObject<HTMLElement | { wrapper: HTMLElement | null }>) => {
  if (isNil(ref)) return null;

  const boundingEl = (() => {
    if (ref.current instanceof HTMLElement) return ref.current;
    return ref.current?.wrapper;
  })();

  return boundingEl?.getBoundingClientRect();
};

export const useAdaptivePosition = ({
  elRef,
  isOpen,
  classNames,
  boundingContainerRef,
}: AdaptivePositionProps) => {
  React.useEffect((): () => void => {
    const onScroll = () => {
      const el = elRef.current?.wrapper;
      const parent = el?.parentElement;

      const rect = el?.getBoundingClientRect();
      const parentRect = parent?.getBoundingClientRect();

      if (!isOpen || !rect || !parentRect) return;

      const boundingElRect = getElRectFromRef(boundingContainerRef);

      const isOutOfRight = (() => {
        if (boundingElRect) return (rect.right - boundingElRect.right) > 0;

        return rect.right > window.innerWidth;
      })();

      const isEnoughPlaceOnRight = (() => {
        if (boundingElRect) return rect.right + (rect.width - parentRect.width - boundingElRect.right) < 0;

        return rect.right + (rect.width - parentRect.width) < window.innerWidth;
      })();

      const isOutOfBottom = (() => {
        if (boundingElRect) return (rect.bottom - boundingElRect.bottom) > 0;
        return rect.bottom > window.innerHeight;
      })();

      const isEnoughPlaceOnBottom = (() => {
        if (boundingElRect) return (rect.bottom + rect.height + parentRect.height - boundingElRect.bottom) < 0;
        return rect.bottom + rect.height + parentRect.height < window.innerHeight;
      })();

      if (isOutOfRight && classNames.right && !el?.classList.contains(classNames.right)) {
        el?.classList.add(classNames.right);
      } else if (isEnoughPlaceOnRight && classNames.right) {
        el?.classList.remove(classNames.right);
      }

      if (isOutOfBottom && classNames.top && !el?.classList.contains(classNames.top)) {
        el?.classList.add(classNames.top);
      } else if (isEnoughPlaceOnBottom && classNames.top) {
        el?.classList.remove(classNames.top);
      }
    };

    onScroll();

    const handler = throttle(onScroll, 200);

    const el = elRef.current?.wrapper;

    if (isOpen && classNames.visible) {
      el?.classList.add(classNames.visible);

      window.addEventListener('scroll', handler);
    }

    return () => {
      if (classNames.visible) el?.classList.remove(classNames.visible);

      window.removeEventListener('scroll', handler);
    };
  }, [boundingContainerRef, classNames, elRef, isOpen]);
};
