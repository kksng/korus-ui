import * as helpers from './helpers';

describe('compareText tests', () => {
  describe('Tests for phone number mask', () => {
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
    it('Should correctly define that input was autocompleted by valid masked value or raw value', () => {
      const oldText = '+7 (___)-___-__-__';
      const newText = '9009990000';
      const cursorPosition = oldText.length;
      const added = '9009990000';
      const removed = '';
      const expected = [cursorPosition, added, removed];
      expect(helpers.compareText(oldText, newText, mask)).toEqual(expected);

      const newFormattedText = '+7 (900)-999-00-00';
      expect(helpers.compareText(oldText, newFormattedText, mask)).toEqual(expected);
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

  describe('Tests for bank card number mask', () => {
    const mask = '#### #### #### ####';

    it('Should correctly define that input was autocompleted', () => {
      const oldText = '____ ____ ____ ____';
      const newText = '1234 5678 9012 3456';
      const cursorPosition = oldText.length;
      const added = '1234567890123456';
      const removed = '';
      const expected = [cursorPosition, added, removed];
      expect(helpers.compareText(oldText, newText, mask)).toEqual(expected);
    });
  });

  describe('Tests for track number mask', () => {
    const mask = 'LL#########LL';

    it('Should correctly define that input was autocompleted', () => {
      const oldText = '_____________';
      const newText = 'CA123456789UA';
      const cursorPosition = oldText.length;
      const added = 'CA123456789UA';
      const removed = '';
      const expected = [cursorPosition, added, removed];
      expect(helpers.compareText(oldText, newText, mask)).toEqual(expected);
    });
  });
});
