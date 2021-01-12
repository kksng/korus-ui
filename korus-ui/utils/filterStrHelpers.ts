// Возможные опции для фильтра значений в выпадающем списке
export const FILTER_RULES = {
  includes: 'includes' as const,
  smart: 'smart' as const,
  startsWith: 'startsWith' as const,
};


/* value: 'Paris is the capital of France'
   suggestion: 'paris'
   => true

   value: 'Paris is the capital of France'
   suggestion: 'paris france'
   => true
*/
export const filterByIncludes = (suggestion: string, value: string): boolean => suggestion.toLowerCase().includes(value.toLowerCase());


/* value: 'Paris is the capital of France'
   suggestion: 'paris'
   => true

   value: 'Paris is the capital of France'
   suggestion: 'paris france'
   => false
*/
export const filterByStartsWith = (suggestion: string, value: string): boolean => suggestion.toLowerCase().startsWith(value.toLowerCase());

export const escapeRegexp = (string: string): string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/* returns true if all needles are present in hay
*  regardless of their order
*
*  e.g.
*  sentence: 'Saint Petersburg is the capital of Russia'
*  words: 'russia saint'
*  => true
*
*  sentence: 'Saint Petersburg is the capital of Russia'
*  words: 'russia moscow'
*  => false
*
*  sentence: 'Saint Petersburg is the capital of Russia'
*  words: 'peter'
*  => true
*
* sentence is a string containing words, one or more spaces and other symbols
* words is a string containing spaces and other symbols, a word is a set of symbols bounded by spaces or string boundaries
*/

export const getIsSentenceIncludingWords = (sentence: string, words: string): boolean => {
  if (words === '') return true;
  if (/^\s+$/.test(words)) return false;
  if (sentence.trim() === '') return false;

  const isMultiWord = /\s+/.test(words);

  if (isMultiWord) {
    const wordsArr = words.split(/\s+/);
    const regExpCore = wordsArr.map((el) => `(?=.*${escapeRegexp(el)})`).join('');
    const needle = new RegExp(`^${regExpCore}.*$`, 'gi');

    return needle.test(sentence);
  }

  return sentence.toLowerCase().includes(words.toLowerCase());
};

export const filterSuggestionByRule = (suggestion: string, value: string, filterRule?: keyof typeof FILTER_RULES): boolean => {
  switch (filterRule) {
    case FILTER_RULES.smart:
      // "умный" поиск. Фильтрует строки, которые содержат все значения в строке из инпута.
      // Возвращает "true" если в строке присутствуют все значения из инпута, не смотря на положение значений.
      return getIsSentenceIncludingWords(suggestion, value);

    case FILTER_RULES.startsWith:
      // фильтрует строки, которые начинаются со строки в инпуте
      return filterByStartsWith(suggestion, value);

    case FILTER_RULES.includes:
      // фильтрует строки, которые содержат строку из инпута, независимо от её положения
      return filterByIncludes(suggestion, value);
    default:
      return getIsSentenceIncludingWords(suggestion, value);
  }
};
