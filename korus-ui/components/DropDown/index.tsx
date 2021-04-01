import * as React from 'react';

import {
  bindFunctionalRef, getClassNames, useTheme, useElement, useAdaptivePosition, useProps,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { DropDownProps, DropDownRefCurrent, WrapperProps } from './types';
import { Div, DivRefCurrent } from '../Div';
import { LedaContext } from '../LedaProvider';
import { Ul } from '../Ul';
import { InteractionModes } from './constants';

/**
 * DropDown component renders child list as dropdown list
 * @param {DropDownProps} props
 *
 * @returns {React.ReactElement}
 */
export const DropDown = React.forwardRef((props: DropDownProps, ref?: React.Ref<DropDownRefCurrent>): React.ReactElement => {
  const {
    boundingContainerRef,
    children,
    className,
    isOpen: isOpenProp,
    theme: themeProp,
    interactionMode,
    wrapperRender,
    isDisabled,
    ...restProps
  } = useProps(props);

  const [isOpenState, setIsOpen] = React.useState(false);

  const isOpen = isOpenProp ?? isOpenState;

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.dropDown);

  const combinedClassNames = getClassNames([theme.wrapper], className, {
    disabled: isDisabled,
    opened: isOpen,
  });

  const containerRef = React.useRef<DivRefCurrent | null>(null);

  const defaultWrapperRef = React.useRef<DropDownRefCurrent | null>(null);

  const wrapperRef = ref || defaultWrapperRef;

  const context = React.useContext(LedaContext);

  /**
   * Function sets dropdown state to close if click was made outside wrapper
   * @param {MouseEvent} event - click event
   */
  const handleClick = (event: MouseEvent): void => {
    const target = event.target as Node;
    const isWrapperClicked = wrapperRef && (wrapperRef as React.MutableRefObject<DropDownRefCurrent | null>).current?.wrapper?.contains(target);
    if (!isWrapperClicked) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);

    return (): void => {
      document.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Wrapper = useElement<DropDownProps, {}, WrapperProps>(
    'Wrapper',
    Div,
    wrapperRender || context.renders[COMPONENTS_NAMESPACES.dropDown].wrapperRender,
    props,
  );

  const classMap = React.useMemo(() => ({
    right: theme.wrapperRight,
    top: theme.wrapperTop,
    visible: theme.wrapperVisible,
  }), [theme.wrapperTop, theme.wrapperVisible, theme.wrapperRight]);

  useAdaptivePosition({
    boundingContainerRef,
    classNames: classMap,
    elRef: containerRef,
    isOpen,
  });

  const interaction = interactionMode === InteractionModes.Click
    ? {
      onClick: (): void => setIsOpen(!isOpenState),
    }
    : {
      onMouseLeave: (): void => setIsOpen(false),
      onMouseOver: (): void => setIsOpen(true),
    };

  return (
    <Wrapper
      {...!isDisabled ? { ...interaction } : {}}
      className={combinedClassNames}
      {...restProps}
      ref={wrapperRef && ((component): void => bindFunctionalRef(component, wrapperRef, component && {
        wrapper: component.wrapper || component,
      }))}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Ul) {
          return React.cloneElement(child, { onClick: () => setIsOpen(false), ref: containerRef });
        }

        return child;
      })}
    </Wrapper>
  );
}) as React.FC<DropDownProps>;

DropDown.displayName = 'DropDown';
