/** Функция для подставления окончаний.
 * Пример использования:
   getPluralForm({
     count: 5,
     one: 'значение',
     two: 'значения',
     five: 'значений',
   }) // => 'значений'
*/
export const getWordEnding = ({
  count, one, two, five,
}: { count: number, five: string, one: string, two: string }): string => {
  let n = Math.abs(count);
  n %= 100;

  if (n >= 5 && n <= 20) {
    return five;
  }

  n %= 10;

  if (n === 1) {
    return one;
  }

  if (n >= 2 && n <= 4) {
    return two;
  }

  return five;
};
