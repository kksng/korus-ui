import * as React from 'react';

import {
  useRunAfterUpdate,
} from '../../utils';
import { AdjustCursor } from './types';

/**
 * Hook provides function that returns cursor to specified or initial position after paste or change event
 *
 * @returns {AdjustCursor}
 */
export const useSetCursorToPrevPosition = (): AdjustCursor => {
  const [isPasteEvent, setIsPasteEvent] = React.useState(false);
  const [pasteSelectionStart, setPasteSelectionStart] = React.useState<number | null>(null);

  const runAfterUpdate = useRunAfterUpdate();

  return (event, position) => {
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

    const adjustedPosition = position || prevCursorPosition;

    runAfterUpdate(() => {
      inputElement.selectionStart = adjustedPosition;
      inputElement.selectionEnd = adjustedPosition;
    });
  };
};
