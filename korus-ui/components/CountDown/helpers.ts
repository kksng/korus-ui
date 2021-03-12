/**
 * Helper counts current delta for countdown
 * @param {startTimestamp} number
 *
 * @returns number
 */
export const getDelta = (startTimestamp: number): number => {
  const newDelta = startTimestamp - Date.now();
  if (newDelta <= 0) {
    return 0;
  }
  return newDelta;
};

/**
 * Helper formats time
 * @param {milliseconds} number
 * @param {format} string
 *
 * @returns string
 */
export const formatTime = (milliseconds: number, format = 'mm:ss'): string => {
  const timestamp = Math.ceil(milliseconds / 1000) * 1000;
  const date = new Date(timestamp);

  const timeTable = {
    hh: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  };

  return Object.entries(timeTable).reduce((accumulator, [key, number]) => {
    const limit = key.length;
    const value = number.toString().padStart(limit, '0').slice(-limit);
    return accumulator.split(key).join(value);
  }, format);
};
