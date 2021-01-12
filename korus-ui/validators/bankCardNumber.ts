const toReplaceANumIfResultIsBiggerThanNine = (element: string): number => {
  const num = parseInt(element, 10);
  if ((num * 2) > 9) {
    return num * 2 - 9;
  }
  return num * 2;
};

const getIsDividedByTen = (total: number): boolean => total % 10 === 0;

const containsCertainQuantityOfDigits = new RegExp(/(^[2-7])\d{12,18}$/);

const isEven = (element: number): boolean => element % 2 === 0;

const isOdd = (element: number): boolean => element % 2 !== 0;

// https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9B%D1%83%D0%BD%D0%B0
const checkIsCardNumberPassesLuhnAlgorithm = (cardNumWithoutSpaces: string): boolean => {
  if (isEven(cardNumWithoutSpaces.length)) {
    const cardNumAfterAlgorithm = cardNumWithoutSpaces.split('').map((el: string | number, index: number) => {
      // changing not even indexes (indexes start from 0), as we need even card's nums
      if (isEven(index)) {
        return toReplaceANumIfResultIsBiggerThanNine(cardNumWithoutSpaces[index]);
      }

      return parseInt(cardNumWithoutSpaces[index], 10);
    });
    const total = cardNumAfterAlgorithm.reduce((firstElement: number, secondElement: number) => firstElement + secondElement);
    return getIsDividedByTen(total);
  }

  const cardNumAfterAlgorithm = cardNumWithoutSpaces.split('').map((el: string | number, index: number) => {
    // changing even indexes (indexes start from 0), as we need not even card's nums
    if (isOdd(index)) {
      return toReplaceANumIfResultIsBiggerThanNine(cardNumWithoutSpaces[index]);
    }
    return parseInt(cardNumWithoutSpaces[index], 10);
  });
  const total = cardNumAfterAlgorithm.reduce((firstElem, secondElem) => firstElem + secondElem);
  return getIsDividedByTen(total);
};

export const validateBankCardNumber = (cardNum: string): boolean => {
  const cardNumWithoutSpaces = cardNum.replace(/\s/g, '');
  if (containsCertainQuantityOfDigits.test(cardNumWithoutSpaces)) {
    return checkIsCardNumberPassesLuhnAlgorithm(cardNumWithoutSpaces);
  }
  return false;
};
