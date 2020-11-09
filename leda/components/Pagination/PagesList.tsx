import * as React from 'react';
import { getClassNames } from '../../utils';
import { Li } from '../Li';
import { Span } from '../Span';
import { Ul } from '../Ul';
import { PaginationControl } from './PaginationControl';
import { PagesListProps } from './types';

export const PagesList = (props: PagesListProps): React.ReactElement => {
  const {
    theme,
    pageNumbers,
    currentPage,
    onClick,
  } = props;

  return (
    <Ul className={theme.numberButtons}>
      {pageNumbers.map((page) => {
        const isCurrentPage = page === currentPage; // может не выполняться для одного элемента в контролируемом режиме

        const classNames = getClassNames(theme.button, theme.numberSelected, { disabled: pageNumbers.length === 1 });

        return (
          <Li key={page}>
            {isCurrentPage
              ? <Span className={classNames}>{page}</Span>
              : (
                <PaginationControl
                  className={theme.button}
                  page={pageNumbers.length === 1 ? 0 : page} // по идее это условие никогда не должно выполниться, но "защита от дурака"
                  isPageNumber
                  onClick={onClick}
                >
                  {page}
                </PaginationControl>
              )}
          </Li>
        );
      })}
    </Ul>
  );
};
