import * as helpers from './helpers';

describe('compareText tests', () => {
  const mask = '+7 (###)-###-##-##';
  it('Should correctly define that one char was added', () => {
    const oldText = '+7 (___)-___-__-__';
    const newText = '+7 (0___)-___-__-__';
    const cursorPosition = 4;
    const added = '0';
    const removed = '';
    const expected = [cursorPosition, added, removed];
    expect(helpers.compareText(oldText, newText, mask)).toEqual(expected);
  });
  it('Should correctly define that input was autocompleted', () => {
    const oldText = '+7 (___)-___-__-__';
    const newText = '+79009990000';
    const cursorPosition = oldText.length;
    const added = '9009990000';
    const removed = '';
    const expected = [cursorPosition, added, removed];
    expect(helpers.compareText(oldText, newText, mask)).toEqual(expected);
  });
  it('Should correctly define that one char was added at the end', () => {
    const oldText = '+7 (000)-000-00-00';
    const newText = '+7 (000)-000-00-000';
    const cursorPosition = oldText.length;
    const added = '0';
    const removed = '';
    const expected = [cursorPosition, added, removed];
    expect(helpers.compareText(oldText, newText, mask)).toEqual(expected);
  });
  it('Should correctly define that one char was deleted', () => {
    const oldText = '+7 (000)-000-00-00';
    const newText = '+7 (000)-000-00-0';
    const cursorPosition = 17;
    const added = '';
    const removed = '0';
    const expected = [cursorPosition, added, removed];
    expect(helpers.compareText(oldText, newText, mask)).toEqual(expected);
  });
  it('Should correctly define that several chars were deleted', () => {
    const oldText = '+7 (000)-000-00-00';
    const newText = '+7 (000)-000';
    const cursorPosition = 12;
    const added = '';
    const removed = '-00-00';
    const expected = [cursorPosition, added, removed];
    expect(helpers.compareText(oldText, newText, mask)).toEqual(expected);
  });
  it('Should correctly define that one char was replaced', () => {
    const oldText = '+7 (000)-000-00-00';
    const newText = '+7 (000)-000-90-00';
    const cursorPosition = 13;
    const added = '9';
    const removed = '0';
    const expected = [cursorPosition, added, removed];
    expect(helpers.compareText(oldText, newText, mask)).toEqual(expected);
  });
});
