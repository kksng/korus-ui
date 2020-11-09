import React from 'react';
import { isEqual, isFunction, isObject } from 'lodash';

import {
  bindFunctionalRef, useTheme, useElement, useAdaptivePosition, useProps,
} from '../../utils';
import { A } from '../A';
import { DropDown } from '../DropDown';
import { Ul, UlRefCurrent } from '../Ul';
import { DropDownLinkItem } from './DropDownLinkItem';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  ClickEvent, DropDownLinkProps, DropDownLinkRefCurrent, DropDownLinkType, TitleProps,
} from './types';
import { DataObject } from '../../commonTypes';
import { DivRefCurrent } from '../Div';

/**
 * DropDownLink component renders dropdown list of link items
 * @param {DropDownLinkProps} props
 *
 * @returns {React.ReactElement}
 */
export const DropDownLink = React.forwardRef((props: DropDownLinkProps, ref?: React.Ref<DropDownLinkRefCurrent>): React.ReactElement | null => {
  const {
    data,
    itemRender,
    name,
    onChange,
    onMouseEnter,
    textField = '',
    titleRender,
    value = '',
    isOpen: isOpenProp,
    ...restProps
  } = useProps(props);

  const Title = useElement<DropDownLinkProps, {}, TitleProps>(
    'Title',
    A,
    titleRender,
    props,
  );

  const theme = useTheme(props.theme, COMPONENTS_NAMESPACES.dropDownLink);

  const [isOpenState, setIsOpen] = React.useState(false);

  const isOpen = isOpenProp ?? isOpenState;

  const containerRef = React.useRef<DivRefCurrent | null>(null);

  const classMap = React.useMemo(() => ({
    top: theme.wrapperTop,
    right: theme.wrapperRight,
    visible: theme.wrapperVisible,
  }), [theme.wrapperTop, theme.wrapperVisible, theme.wrapperRight]);

  useAdaptivePosition({ elRef: containerRef, isOpen, classNames: classMap });

  const handleClick = React.useCallback((ev: ClickEvent): void => {
    setIsOpen(false);
    if (isFunction(onChange)) onChange(ev);
  }, [onChange]);

  const handleMouseEnter = React.useCallback((ev): void => {
    setIsOpen(true);
    if (isFunction(onMouseEnter)) onMouseEnter(ev);
  }, [onMouseEnter]);

  if (!data) return null;

  const currentItem = (data as (DataObject | string)[]).find((item) => isEqual(item, value));

  const titleText: string | number = isObject(currentItem)
    ? currentItem[textField]
    : value as string;

  return (
    <DropDown
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsOpen(false)}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
      isOpen={isOpen}
      theme={{ wrapper: theme.wrapper }}
      {...restProps}
    >
      <Title className={theme.currentText}>{titleText}</Title>
      <Ul default ref={containerRef as React.Ref<UlRefCurrent>}>
        {
          (data as (DataObject | string)[]).map((item) => (
            <DropDownLinkItem
              className={theme.item}
              item={item}
              itemRender={itemRender}
              key={`${name}_${isObject(item) ? item[textField] : item}`}
              name={name}
              onClick={handleClick}
              textField={textField}
            />
          ))
        }
      </Ul>
    </DropDown>
  );
}) as DropDownLinkType;

DropDownLink.Item = DropDownLinkItem;

DropDownLink.displayName = 'DropDownLink';
