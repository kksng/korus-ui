import React from 'react';
import { getClassNames } from '../../utils';
import { A } from '../A';
import { Li } from '../Li';
import { Span } from '../Span';
import { LinkTreeItemProps } from './types';

/**
 * LinkTree Item - list element, can contain a list
 * @param {LinkTreeItemProps} props
 *
 * @returns {React.ReactElement}
 */
export const LinkTreeItem: React.FC<LinkTreeItemProps> = (props: LinkTreeItemProps) => {
  const {
    text,
    theme,
    isLast,
    children,
    currentItemId,
    setCurrentItemId,
  } = props;

  const itemId = React.useMemo(() => Symbol(text), [text]);

  const [isOpen, setIsOpen] = React.useState(false);

  const itemClassNames = getClassNames(
    [theme.linkTreeItem],
    {
      [theme.opened]: children && isOpen,
      [theme.current]: itemId === currentItemId,
      [theme.last]: isLast,
    },
  );

  const iconClassNames = getClassNames(
    [theme.linkTreeIcon],
    {
      [theme.linkTreeIconExpanded]: isOpen,
    },
  );

  const handleLinkClick = () => {
    setCurrentItemId(itemId);
    setIsOpen(!isOpen);
  };

  return (
    <Li className={itemClassNames}>
      <A onClick={handleLinkClick}>
        {children && <Span className={iconClassNames} />}
        {text}
      </A>
      {children}
    </Li>
  );
};
