import { FILE_SIZE_UNITS } from '../constants';

// (1, 'MB', FILE_SIZE_UNITS) => 1048576
export const getSizeInBytes = (
  size: number, unit: keyof typeof FILE_SIZE_UNITS,
): number => {
  if (unit === FILE_SIZE_UNITS.byte) return size;
  if (unit === FILE_SIZE_UNITS.kB) return size * 1024;
  if (unit === FILE_SIZE_UNITS.MB) return size * 1024 * 1024;
  if (unit === FILE_SIZE_UNITS.GB) return size * 1024 * 1024 * 1024;
  throw new Error('File size unit is not supported');
};

// (1024 * 1024, 'MB', FILE_SIZE_UNITS) => 1
export const bytesSizeToUnitsSize = (
  size: number, unit: keyof typeof FILE_SIZE_UNITS,
): number => {
  if (unit === FILE_SIZE_UNITS.byte) return size;
  if (unit === FILE_SIZE_UNITS.kB) return size / 1024;
  if (unit === FILE_SIZE_UNITS.MB) return size / 1024 / 1024;
  if (unit === FILE_SIZE_UNITS.GB) return size / 1024 / 1024 / 1024;
  throw new Error('File size unit is not supported');
};
