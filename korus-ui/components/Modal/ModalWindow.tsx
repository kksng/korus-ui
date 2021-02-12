import React from 'react';
import {
  getClassNames, bindFunctionalRef, useTheme, useProps,
} from '../../utils';
import { createCloseButtonClickHandler, createEscapePressHandler, createOverlayClickHandler } from './handlers';
import { useCustomElements } from './hooks';
import { ModalWindowProps } from './types';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { ModalContext } from './ModalContext';
import { WINDOW_SIZES } from './constants';

export const ModalWindow = (props: ModalWindowProps): React.ReactElement => {
  const {
    activeAlertKey,
    children,
    className,
    innerRef,
    onClose,
    onCloseButtonClick,
    onEscapePress,
    onOverlayClick,
    size,
    theme: themeProp,
    isOpen,
    wrapperRender,
    iconRender,
    ...restProp
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.modal);

  const handleEscapePress = createEscapePressHandler(props);

  const handleOverlayClick = createOverlayClickHandler(props);

  const handleCloseButtonClick = createCloseButtonClickHandler(props);

  React.useEffect((): () => void => {
    document.addEventListener('keydown', handleEscapePress as unknown as EventListener);

    const prevOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;

      document.removeEventListener('keydown', handleEscapePress as unknown as EventListener);
    };
  }, [handleEscapePress]);

  const wrapperClassname = getClassNames(
    className,
    theme.wrapper,
  );

  const windowClassname = getClassNames(
    theme.window,
    size || WINDOW_SIZES.md,
  );

  const {
    Wrapper,
    Icon,
  } = useCustomElements(props);

  const modalContext = {
    activeAlertKey,
    bodyClassName: theme.body,
    footerClassName: theme.footer,
    headerClassName: theme.header,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      <Wrapper
        ref={innerRef && ((component) => bindFunctionalRef(component, innerRef, {
          wrapper: component,
        }))}
        className={wrapperClassname}
        onClick={handleOverlayClick}
        {...restProp}
      >
        <div
          className={windowClassname}
        >
          {activeAlertKey == null && <Icon onClick={handleCloseButtonClick} className={theme.cross} />}
          {children}
        </div>
      </Wrapper>
    </ModalContext.Provider>
  );
};
