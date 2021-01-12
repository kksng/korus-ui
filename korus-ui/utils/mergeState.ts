export const mergeState = <S, T extends S>(newState: Partial<T>) => (state: S): S => ({ ...state, ...newState });
