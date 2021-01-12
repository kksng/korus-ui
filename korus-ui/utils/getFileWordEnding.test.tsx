import { getFileWordEnding } from './helpers';

describe('FileWordEnding', () => {
  it('should have correct ending if 1 file', () => {
    expect(getFileWordEnding(1)).toEqual('a');
  });

  it('should have correct ending if more than 1 file', () => {
    expect(getFileWordEnding(2)).toEqual('ов');

    expect(getFileWordEnding(111)).toEqual('ов');

    expect(getFileWordEnding(51)).toEqual('a');
  });
});
