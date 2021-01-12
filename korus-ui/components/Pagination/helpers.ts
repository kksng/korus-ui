// если вычисляемый номер страницы выходит за границы диапазона, то возвращается 1 либо номер последней страницы
export const normalizePageNumber = (pageNumber: number, totalItems: number, pageSize: number): number => {
  const pages = Math.ceil(totalItems / pageSize);

  if (pageNumber < 1) {
    return 1;
  }

  if (pageNumber > pages) {
    return pages;
  }

  return pageNumber;
};

// Создает массив в номерами отображаемых страниц
export const getPageNumbers = (currentPage: number, totalPages: number, totalItems: number, pageSize: number): number[] => {
  // Возвращаем массив с единственным элементом 1, если totalItems = 0
  if (totalPages === 1) return [totalPages];
  // от номера текущей страницы должны отображаться 2 страницы слева и 2 справа
  let pagesFrom = normalizePageNumber(currentPage - 2, totalItems, pageSize);

  let pagesTo = normalizePageNumber(currentPage + 2, totalItems, pageSize);

  // проверка граничных значений - первых и последних, тогда должны отображаться
  // либо от первой вправо до максимум 5 страницы
  if (pagesFrom === 1) {
    pagesTo = normalizePageNumber(5, totalItems, pageSize);
    // либо от последней влево еще 4 страницы
  } else if (pagesTo === totalPages) {
    pagesFrom = normalizePageNumber(pagesTo - 4, totalItems, pageSize);
  }

  // Количество добавляемых номеров страниц (длина массива)
  const pagesLength = (pagesTo - pagesFrom) + 1;

  // возвращаем массив с номерами по порядку начиная от pagesFrom
  return Array(pagesLength).fill(undefined).map((_, index) => pagesFrom + index);
};
