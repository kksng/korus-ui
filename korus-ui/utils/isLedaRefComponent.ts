import { CommonRefCurrent } from '../commonTypes';

export const isLedaRefComponent = <R extends CommonRefCurrent>(data: any): data is R => (data as R)?.wrapper !== undefined;
