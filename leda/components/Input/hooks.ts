import * as React from 'react';

import {
  useRunAfterUpdate,
} from '~/utils';

/**
 * Hook provides function that returns cursor to initial position after cancelled paste or change event
 *
 * @returns {(event: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => void}
 */
export const useSetCursorToPrevPosition = (): (event: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => void => {
  const [isPasteEvent, setIsPasteEvent] = React.useState(false);
  const [pasteSelectionStart, setPasteSelectionStart] = React.useState<number | null>(null);

  const runAfterUpdate = useRunAfterUpdate();

  return (event: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;

    if (event.type === 'paste') {
      setIsPasteEvent(true);
      setPasteSelectionStart(inputElement.selectionStart);
    }

    if (event.type === 'change') {
      setIsPasteEvent(false);
    }

    const prevCursorPositionForPaste = pasteSelectionStart || 0;
    const prevCursorPositionForChange = inputElement.selectionStart ? inputElement.selectionStart - 1 : 0;

    const prevCursorPosition = isPasteEvent ? prevCursorPositionForPaste : prevCursorPositionForChange;

    runAfterUpdate(() => {
      inputElement.selectionStart = prevCursorPosition;
      inputElement.selectionEnd = prevCursorPosition;
    });
  };
};
