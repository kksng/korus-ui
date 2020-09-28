import * as React from 'react';
import { ModalWindowProps } from './types';

export const createEscapePressHandler = (props: ModalWindowProps) => (ev: React.KeyboardEvent<HTMLElement>): void => {
  const {
    activeAlertKey,
    onEscapePress,
    onClose,
  } = props;

  if (activeAlertKey != null) return;

  const isEscapeKey = ev.key === 'Escape' || ev.key === 'Esc';

  if (isEscapeKey) {
    onEscapePress?.(ev);
    onClose?.(ev);
  }
};

export const createCloseButtonClickHandler = (props: ModalWindowProps) => (ev: React.MouseEvent<HTMLElement>): void => {
  const { onCloseButtonClick, onClose } = props;

  onCloseButtonClick?.(ev);

  onClose?.(ev);
};

export const createOverlayClickHandler = (props: ModalWindowProps) => (ev: React.MouseEvent<HTMLElement>) => {
  const {
    activeAlertKey,
    onOverlayClick,
    onClose,
  } = props;

  if (activeAlertKey != null) return;

  const elementThatCursorIsOver = document.elementFromPoint(ev.clientX, ev.clientY);

  if (ev.currentTarget === ev.target && ev.currentTarget === elementThatCursorIsOver) {
    onOverlayClick?.(ev);

    onClose?.(ev);
  }
};
