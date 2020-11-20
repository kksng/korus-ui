import * as React from 'react';
import { isFunction, isNil } from 'lodash';
import {
  CollapsePanelContextType,
  CollapsePanelHandlers,
  CollapseProps,
  HeadingProps,
  KeyState,
  SelectHandler,
  SetClicked,
} from './types';

const handleSelect = (props: CollapseProps, keyState: KeyState, setActivePanelKey: React.Dispatch<React.SetStateAction<KeyState>>): SelectHandler => (ev) => {
  const { onSelect, isAccordion, activePanelKey: keyProp } = props;

  const activePanelKey = isNil(keyProp) ? keyState : keyProp;

  const panelId = (ev.component as unknown as { value: KeyState }).value;

  const shouldClosePanel = (inwards: KeyState | null): inwards is string[] => (Array.isArray(inwards) && !isAccordion && inwards.includes(panelId as string));

  const shouldOpenPanel = (inwards: KeyState | null): inwards is string[] => (Array.isArray(inwards) && !isAccordion);

  const shouldCloseSinglePanel = (inwards: KeyState | null): boolean => (inwards === panelId && isAccordion as boolean);

  const shouldOpenSinglePanel = () => !!isAccordion;

  const closePanel = (inwards: string[]): string[] => inwards.filter((pid: string): boolean => pid !== panelId);

  const openPanel = (inwards: string[]): string[] => [...inwards, panelId as string];

  const newValue = (() => {
    if (shouldClosePanel(activePanelKey)) return closePanel(activePanelKey);
    if (shouldOpenPanel(activePanelKey)) return openPanel(activePanelKey);
    if (shouldCloseSinglePanel(activePanelKey)) return null;
    if (shouldOpenSinglePanel()) return panelId;
    return null;
  })();

  const customEvent = {
    component: {
      value: newValue,
    },
    target: {
      value: newValue,
    },
  };

  return isFunction(onSelect) ? onSelect(customEvent) : setActivePanelKey(newValue);
};

const createHeadingClickHandler = (setClicked: SetClicked): CollapsePanelHandlers['onHeadingClick'] => () => setClicked(true);

const createBodyRestHandler = (setClicked: SetClicked): CollapsePanelHandlers['onBodyRest'] => () => setClicked(false);

export const createCollapseHandlers = (
  props: CollapseProps,
  keyState: KeyState,
  setKeyState: React.Dispatch<React.SetStateAction<KeyState>>,
): { handleSelect: SelectHandler } => ({
  handleSelect: handleSelect(props, keyState, setKeyState),
});

export const createPanelHandlers = (setClicked: SetClicked): CollapsePanelHandlers => ({
  onBodyRest: createBodyRestHandler(setClicked),
  onHeadingClick: createHeadingClickHandler(setClicked),
});

export const handleHeadingClick = (props: HeadingProps, context: CollapsePanelContextType): React.MouseEventHandler<HTMLDivElement> => (ev) => {
  const { onClick } = props;
  const {
    panelKey, name, onSelect, isDisabled,
  } = context;

  if (isDisabled) return;

  const customEvent = {
    ...ev,
    component: {
      name,
      value: panelKey,
    },
    target: {
      ...ev.target,
      name,
      value: panelKey,
    },
  };

  onSelect(customEvent);
  context.onHeadingClick();

  if (isFunction(onClick)) {
    onClick(ev);
  }
};
