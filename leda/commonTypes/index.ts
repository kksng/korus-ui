import * as React from 'react';

export interface AttributesType {
  active?: boolean,
  box?: boolean,
  className?: string,
  contentBox?: boolean,
  dropdown?: boolean,
  menuBox?: string,
  navBox?: boolean,
  primary?: boolean,
  size?: string,
  userBox?: boolean,
  width?: number,
}

export interface ValidatedBlurEvent<T = HTMLInputElement> extends React.FocusEvent<T>{
  relatedTarget: EventTarget,
  target: EventTarget & T & { isValid?: boolean },
}

export interface DataObject { [x: string]: string | number }

export interface RenderEvent<P extends {} = {}, S extends {} = {}, E extends {} = {}> {
  Element: React.ElementType,
  componentProps: P,
  componentState: S,
  elementProps: E,
}

export interface CustomRender<P, S, E> {
  (props: RenderEvent<P, S, E>): React.ReactNode,
}

export interface SomeObject {
  [x: string]: any,
}

export interface SomeFunction {
  (x: unknown): unknown,
}

export interface SomeRefCurrent {
  [x: string]: Element | undefined,
}

export type RecursivePartial<T> = Partial<{
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : Partial<T[P]>;
}>;

export type RecursiveRequired<T> = Required<{
  [P in keyof T]?: T[P] extends object ? RecursiveRequired<T[P]> : Required<T[P]>;
}>;

export interface CustomEventHandler<T> {
  (ev: T): void,
}

export type Values<T> = T[keyof T];

export type SetState<S> = React.Dispatch<React.SetStateAction<S>>;

export interface Action<T, P = {}> {
  payload: P,
  type: T,
}

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : A;

export interface CommonRefCurrent {
  wrapper: HTMLElement | null,
}
