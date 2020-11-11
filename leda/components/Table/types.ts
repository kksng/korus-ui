import * as React from 'react';

export interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  [x: string]: unknown,
  children?: React.ReactNode,
  ref?: React.Ref<TrRefCurrent>,
  shouldRender?: boolean,
}

export interface TrRefCurrent {
  wrapper: HTMLTableRowElement | null,
}

export interface THeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  [x: string]: unknown,
  children?: React.ReactNode,
  ref?: React.Ref<THeadRefCurrent>,
  shouldRender?: boolean,
}

export interface THeadRefCurrent {
  wrapper: HTMLTableSectionElement | null,
}

export interface ThProps extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  [x: string]: unknown,
  children?: React.ReactNode,
  ref?: React.Ref<ThRefCurrent>,
  shouldRender?: boolean,
}

export interface ThRefCurrent {
  wrapper: HTMLTableHeaderCellElement | null,
}

export interface TFootProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  [x: string]: unknown,
  children?: React.ReactNode,
  ref?: React.Ref<TFootRefCurrent>,
  shouldRender?: boolean,
}

export interface TFootRefCurrent {
  wrapper: HTMLTableSectionElement | null,
}

export interface TdProps extends React.HTMLAttributes<HTMLTableDataCellElement> {
  [x: string]: unknown,
  children?: React.ReactNode,
  ref?: React.Ref<TdRefCurrent>,
  shouldRender?: boolean,
}

export interface TdRefCurrent {
  wrapper: HTMLTableDataCellElement | null,
}

export interface TBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  [x: string]: unknown,
  children?: React.ReactNode,
  ref?: React.Ref<TBodyRefCurrent>,
  shouldRender?: boolean,
}

export interface TBodyRefCurrent {
  wrapper: HTMLTableSectionElement | null,
}

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  [x: string]: unknown,
  children?: React.ReactNode,
  ref?: React.Ref<TableRefCurrent>,
  shouldRender?: boolean,
}

export interface TableRefCurrent {
  wrapper: HTMLTableElement | null,
}

export interface ColGroupProps extends React.HTMLAttributes<HTMLTableColElement> {
  [x: string]: unknown,
  children?: React.ReactNode,
  ref?: React.Ref<ColGroupRefCurrent>,
  shouldRender?: boolean,
}

export interface ColGroupRefCurrent {
  wrapper: HTMLTableColElement | null,
}

export interface ColProps extends React.HTMLAttributes<HTMLTableColElement> {
  [x: string]: unknown,
  children?: React.ReactNode,
  ref?: React.Ref<ColRefCurrent>,
  shouldRender?: boolean,
}

export interface ColRefCurrent {
  wrapper: HTMLTableColElement | null,
}
