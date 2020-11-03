import * as React from 'react';
import { isObject } from 'lodash';

import { A } from '~/components/A';
import { Li } from '~/components/Li';
import { useElement } from '~/utils';
import { ClickEvent, DropDownLinkItemProps, ItemProps } from './types';

export const DropDownLinkItem: React.FC<DropDownLinkItemProps> = (props: DropDownLinkItemProps): React.ReactElement => {
  const {
    item, itemRender, name, onClick, textField, className,
  } = props;

  const handleListItemClick = (ev: React.MouseEvent<HTMLAnchorElement>): void => {
    const customEvent: ClickEvent = {
      ...ev,
      component: {
        name,
        value: item,
      },
    };

    onClick(customEvent);

    ev.preventDefault();
  };

  const Item = useElement<DropDownLinkItemProps, {}, ItemProps>(
    'Item',
    Li,
    itemRender,
    props,
  );

  const itemTextContent = textField && isObject(item) ? item[textField] : item as string;

  return (
    <Item
      className={className}
      onClick={handleListItemClick}
    >
      <A
        href="#"
      >
        {itemTextContent}
      </A>
    </Item>
  );
};
