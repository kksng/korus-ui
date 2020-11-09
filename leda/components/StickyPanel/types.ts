import * as React from 'react';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { SetState } from '../../commonTypes';

export interface StickyPanelProps {
  /** Дочерние элементы */
  children: React.ReactNode,
  /** Отступ компонента в px от начала родителя (насколько ниже начала родителя должен появлятся компонент, чтобы компонент не перекрывал начало родителя) */
  offsetTop?: number,
  /** Реф */
  ref?: React.Ref<StickyPanelRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.stickyPanel],
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export type StickyPanelPosition = 'none' | 'bottom' | 'fixed';

export type StickyPanelStyles = React.CSSProperties;

export interface CreatePanelPositionUpdater {
  (
    offsetTop: number,
    panelPosition: string,
    panelRef: React.MutableRefObject<HTMLDivElement | null>,
    setPanelPosition: SetState<StickyPanelPosition>,
    setPanelStyles: SetState<React.CSSProperties>,
  ): UpdatePanelPosition,
}

export interface UpdatePanelPosition {
  (shouldRerender?: boolean): void,
}

export interface UseStickyPanelEffect {
  (data: {
    panelRef: React.MutableRefObject<HTMLDivElement | null>,
    offsetTop: number,
    panelPosition: StickyPanelPosition,
    setPanelPosition: SetState<StickyPanelPosition>,
    setPanelStyles: SetState<React.CSSProperties>,
    shouldAlwaysRerender?: boolean,
  }): void,
}

export interface StickyPanelRefCurrent {
  wrapper: HTMLDivElement | null,
}
