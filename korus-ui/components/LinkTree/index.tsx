import { isObject } from 'lodash';
import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  bindFunctionalRef, getClassNames, useProps, useTheme,
} from '../../utils';
import { Div } from '../Div';
import { Ul } from '../Ul';
import { LinkTreeItem } from './LinkTreeItem';
import { LinkTreeProps, LinkTreeRefCurrent, LinkTreeItemType } from './types';

/**
 * LinkTree component renders tree of links
 * @param {LinkTreeProps} props
 *
 * @returns {React.ReactElement}
 */
export const LinkTree = React.forwardRef((props: LinkTreeProps, ref?: React.Ref<LinkTreeRefCurrent>) => {
  const {
    className,
    data,
    theme: themeProp,
    ...restProps
  } = useProps(props);


  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.linkTree);

  const wrapperClassNames = getClassNames(theme.wrapper, className);

  const [currentItemId, setCurrentItemId] = React.useState<symbol | null>(null);

  const getTree = (items: LinkTreeItemType[]) => items.map((item) => {
    if (isObject(item)) {
      const title = Object.keys(item)[0];
      return (
        <LinkTreeItem
          text={title}
          theme={theme}
          currentItemId={currentItemId}
          setCurrentItemId={setCurrentItemId}
        >
          <Ul className={theme.linkTreeList}>
            {getTree(item[title])}
          </Ul>
        </LinkTreeItem>
      );
    }
    return (
      <LinkTreeItem
        text={item}
        currentItemId={currentItemId}
        theme={theme}
        setCurrentItemId={setCurrentItemId}
        isLast
      />
    );
  });

  return (
    <Div
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
      {...restProps}
    >
      <Ul className={theme.linkTreeList}>
        {getTree(data)}
      </Ul>
    </Div>
  );
}) as React.FC<LinkTreeProps>;

LinkTree.displayName = 'LinkTree';
