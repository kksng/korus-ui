interface SecondFunction<T> {
  <S>(second: T | S): second is T,
}

interface FirstFunction {
  <T>(first: T): SecondFunction<T>,
}

export const equals: FirstFunction = <T>(first: T) => ((second) => first === second) as SecondFunction<T>;

export const less: FirstFunction = <T>(first: T) => ((second) => first < second) as SecondFunction<T>;

export const greater: FirstFunction = <T>(first: T) => ((second) => first > second) as SecondFunction<T>;

export const lessOrEqual: FirstFunction = <T>(first: T) => ((second) => first <= second) as SecondFunction<T>;

export const greaterOrEqual: FirstFunction = <T>(first: T) => ((second) => first >= second) as SecondFunction<T>;
