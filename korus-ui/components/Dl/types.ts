import * as React from 'react';

export interface DlProps extends React.HTMLAttributes<HTMLDListElement> {
  [x: string]: unknown,
  ref?: React.Ref<DlRefCurrent>,
  shouldRender?: boolean,
}

export interface DtProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: React.Ref<DtRefCurrent>,
  shouldRender?: boolean,
}

export interface DdProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: React.Ref<DdRefCurrent>,
  shouldRender?: boolean,
}

export interface DlRefCurrent {
  wrapper?: HTMLDListElement | null,
}

export interface DtRefCurrent {
  wrapper?: HTMLElement | null,
}

export interface DdRefCurrent {
  wrapper?: HTMLElement | null,
}
