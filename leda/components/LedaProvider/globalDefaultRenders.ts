import * as React from 'react';
import { RenderEvent } from '~/commonTypes';
import { COMPONENTS_NAMESPACES } from '~/constants';

export interface GlobalRenderField {
  [x: string]: ((<P, S, E>(props: RenderEvent<P, S, E>) => React.ReactNode) | undefined),
}

export type GlobalDefaultRenders = Record<keyof typeof COMPONENTS_NAMESPACES, GlobalRenderField>;

export const globalDefaultRenders = Object
  .keys(COMPONENTS_NAMESPACES)
  .reduce((acc, item) => ({ ...acc, [item]: {} }), {}) as Record<keyof typeof COMPONENTS_NAMESPACES, GlobalRenderField>;
