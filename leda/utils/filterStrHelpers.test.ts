import { getIsSentenceIncludingWords } from './filterStrHelpers';

describe('getIsSentenceIncludingWords', () => {
  describe('when a single word is searched', () => {
    // position
    it('should find an exact match of the word when the word is at the beginning of the sentence', () => {
      const isSentenceIncludingWords = getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'London',
      );
      expect(isSentenceIncludingWords).toBeTruthy();
    });
    it('should find an exact match of the word when the word is at the end of the sentence', () => {
      const isSentenceIncludingWords = getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'Britain',
      );
      expect(isSentenceIncludingWords).toBeTruthy();
    });
    it('should find an exact match of the word when the word is in the middle of the sentence', () => {
      const isSentenceIncludingWords = getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'capital',
      );
      expect(isSentenceIncludingWords).toBeTruthy();
    });

    // letter case
    it('should find a match if the letter case differs', () => {
      const isSentenceIncludingWords = getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'london',
      );
      expect(isSentenceIncludingWords).toBeTruthy();
    });
    it('should find a match if the letter case is opposite', () => {
      const isSentenceIncludingWords = getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'CAPITAL',
      );
      expect(isSentenceIncludingWords).toBeTruthy();
    });

    // partial words
    it('should find a match if the word is not finished', () => {
      const isSentenceIncludingWords = getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'Lond',
      );
      expect(isSentenceIncludingWords).toBeTruthy();
    });
    it('should find a match if the word does not have a beginning part', () => {
      const isSentenceIncludingWords = getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'ritain',
      );
      expect(isSentenceIncludingWords).toBeTruthy();
    });
    it('should find a match if the word is just a part', () => {
      const isSentenceIncludingWords = getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'apita',
      );
      expect(isSentenceIncludingWords).toBeTruthy();
    });

    // reverse search
    it('should not match sentence words with the passed words', () => {
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'Londonish',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'then',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'pis',
      )).toBeFalsy();
    });
  });

  describe('when several words are searched', () => {
    // order
    it('should find two words in the same order', () => {
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'London capital',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'London Britain',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'is of',
      )).toBeTruthy();
    });
    it('should find more than two words in the same order', () => {
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'London is capital',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'London is the',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'London is Britain',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'is the of',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'is of Britain',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'is capital of Britain',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'London is the capital of Britain',
      )).toBeTruthy();
    });
    it('should find more than two words in the mixed order', () => {
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'London capital is',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'London Great is the',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'is of the',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'Britain is the capital of Great London',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'London the is capital of Great Britain',
      )).toBeTruthy();
    });
    it('should find words parts regardless of letter case and order', () => {
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'ondo cap brit is',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'the lond brit',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'brit cap',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'OF LOND',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'i lo',
      )).toBeTruthy();
    });
    it('should return false if there are words that the sentence do not have', () => {
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'ondo cap brit ist',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'London ist the',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'londbrit',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'Londonis',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'London,',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        '.is',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'is . the',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        'is,the',
      )).toBeFalsy();
    });
  });
  describe('numbers and symbols', () => {
    it('should handle numbers', () => {
      expect(getIsSentenceIncludingWords(
        '123 87364 88746644',
        '12 88',
      )).toBeTruthy();
    });
    it('should handle symbols', () => {
      expect(getIsSentenceIncludingWords(
        '==! *** .,',
        '* =',
      )).toBeTruthy();
    });
    it('should handle regexp symbols', () => {
      expect(getIsSentenceIncludingWords(
        'London /is/ (the) [capital] /o(f)/i Great Britain',
        '/i [ (the)',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        '/is/',
      )).toBeFalsy();
    });
    it('should handle mixed input', () => {
      expect(getIsSentenceIncludingWords(
        'London is-the-capital of Great Britain',
        'London is-the',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is-the-capital of 21 Great Britain',
        'Great 21',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is-the-capital of 21 Great Britain',
        '21 -',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is-the-capital of 21 Great Britain',
        'brit -the',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is-the-capital of 21 Great.Britain',
        'great london',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is-the-capital of 21 Great.Britain',
        'london .b 1 -',
      )).toBeTruthy();
    });
  });
  describe('unexpected input', () => {
    it('should return false for empty strings and spaces', () => {
      expect(getIsSentenceIncludingWords(
        '',
        '',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        ' ',
        '',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        '',
        ' ',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        '',
        ' ',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        ' ',
        ' ',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        '   ',
        '  ',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        ' ',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        '',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        '',
        'London',
      )).toBeFalsy();
      expect(getIsSentenceIncludingWords(
        ' ',
        'is',
      )).toBeFalsy();
    });
    it('should be insensitive to the number of spaces', () => {
      expect(getIsSentenceIncludingWords(
        ' London is the capital of Great Britain',
        'lon brit capital',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain ',
        'lon brit capital',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital  of    Great Britain',
        'lon brit capital',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital  of    Great Britain',
        ' lon brit capital',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital  of    Great Britain',
        'lon brit capital ',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital  of    Great Britain',
        ' lon    brit   capital',
      )).toBeTruthy();
      expect(getIsSentenceIncludingWords(
        'London is the capital of Great Britain',
        ' lon    brit   capital',
      )).toBeTruthy();
    });
  });
});
