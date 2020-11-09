import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  bindFunctionalRef, getClassNames, useElement, useProps, useTheme,
} from '../../utils';
import { RatingProps, RatingRefCurrent } from './types';
import { createChangeHandler, createMouseOutHandler, createMouseOverHandler } from './handlers';
import { Span } from '../Span';

export const Rating = React.forwardRef((props: RatingProps, ref?: React.Ref<RatingRefCurrent>): React.ReactElement => {
  const {
    max = 5,
    iconRender,
    onChange,
    value,
    className,
    isReadOnly,
    onClick,
    theme: themeProp,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.rating);

  const [currentSelected, setCurrentSelected] = React.useState<number>(-1);

  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (value !== currentSelected) setCurrentSelected(value - 1);
    // вызываем эффект, только при изменении value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const Icon = useElement(
    'Icon',
    Span,
    iconRender,
    props,
    {
      currentSelected,
      isHovered,
    },
  );

  const handleChange = createChangeHandler(props);

  const handleMouseOut = createMouseOutHandler(value, setCurrentSelected, setIsHovered);

  const handleMouseOver = createMouseOverHandler(setCurrentSelected, setIsHovered);

  const starsArray = [...Array(max)];

  const wrapperClassNames = getClassNames(className, theme.wrapper);

  return (
    <Span
      className={wrapperClassNames}
      onMouseOver={!isReadOnly ? handleMouseOver : undefined}
      onMouseOut={!isReadOnly ? handleMouseOut : undefined}
      onClick={!isReadOnly ? handleChange : onClick}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component,
      }))}
      {...restProps}
    >
      {
        starsArray.map((item, index) => {
          const fillToIndex = onChange ? currentSelected : value - 1;
          const isFilled = fillToIndex >= index;

          const iconClassNames = getClassNames(theme.item, {
            [theme.itemFilled]: isFilled,
          });

          return (
            <Icon
              className={iconClassNames}
              key={index.toString()}
            />
          );
        })
        }
    </Span>
  );
}) as React.FC<RatingProps>;

Rating.displayName = 'Rating';
