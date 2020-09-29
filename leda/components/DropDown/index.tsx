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
 * DropDown component
 * renders child list as dropdown list
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
    ...restProps
  } = useProps(props);

  const [isOpenState, setIsOpen] = React.useState(false);

  const isOpen = isOpenProp ?? isOpenState;

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.dropDown);

  const combinedClassNames = getClassNames([theme.wrapper], className, {
    opened: isOpen,
  });

  const containerRef = React.useRef<DivRefCurrent | null>(null);

  const defaultWrapperRef = React.useRef<DropDownRefCurrent | null>(null);

  const wrapperRef = ref || defaultWrapperRef;

  const context = React.useContext(LedaContext);

  /**
   * Function sets dropdown list state to open if click was made on wrapper
   * and sets dropdown list state to close if click was made outside wrapper
   * @param {MouseEvent} e - click event
   */
  const handleClick = (e: MouseEvent) => {
    const target = e.target as Node;
    const isWrapperClicked = wrapperRef && (wrapperRef as React.MutableRefObject<DropDownRefCurrent | null>).current?.wrapper?.contains(target);
    if (isWrapperClicked) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
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
    top: theme.wrapperTop,
    right: theme.wrapperRight,
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
      onClick: (e: MouseEvent) => handleClick(e),
    }
    : {
      onMouseOver: () => setIsOpen(true),
      onMouseLeave: () => setIsOpen(false),
    };

  return (
    <Wrapper
      {...interaction}
      className={combinedClassNames}
      {...restProps}
      ref={wrapperRef && ((component) => bindFunctionalRef(component, wrapperRef, component && {
        wrapper: component.wrapper || component,
      }))}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Ul) {
          return React.cloneElement(child, { ref: containerRef });
        }

        return child;
      })}
    </Wrapper>
  );
}) as React.FC<DropDownProps>;

DropDown.displayName = 'DropDown';
