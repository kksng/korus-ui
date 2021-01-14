import React from 'react';
import { isNumber, isString } from 'lodash';
import * as L from '../../index';
import {
  DropDownSelect,
} from '../DropDownSelect';
import { PagesDropDownProps, PageSizeChangeEvent } from './types';

export const PagesDropDown = (props: PagesDropDownProps): React.ReactElement => {
  const {
    handlePageSizeChange,
    isPageSizeChangeable,
    pageSize,
    pageSizeInputRender,
    pageSizeItemRender,
    pageSizeOptions,
    theme,
  } = props;

  const handleChange = (ev: L.DropDownSelectTypes.ChangeEvent) => {
    const { value } = ev.component;

    const newPageSize = (() => {
      if (isNumber(value)) return value;
      if (isString(value)) {
        const parsedNumber = parseInt(value, 10);
        if (isNumber(parsedNumber)) return parsedNumber;
      }
      throw new Error('L.Pagination: pageSizeOptions must be an array of numbers.');
    })();

    handlePageSizeChange({
      component: {
        value: newPageSize,
      },
    });
  };

  return (
    <div className={theme.labelSizeOptions}>
      { isPageSizeChangeable && (
        <>
          <DropDownSelect
            data={pageSizeOptions && pageSizeOptions.map((item) => item)}
            value={pageSize}
            onChange={handleChange}
            placeholder="Все"
            inputRender={pageSizeInputRender}
            itemRender={pageSizeItemRender}
          />
          Показать на странице
        </>
      )}
    </div>
  );
};
