import React from 'react';
import {
  getClassNames, bindFunctionalRef, useTheme, useProps,
} from '../../utils';
import { createCloseButtonClickHandler, createEscapePressHandler, createOverlayClickHandler } from './handlers';
import { useCustomElements } from './hooks';
import { ModalWindowProps } from './types';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { getModalWidth } from './helpers';
import { ModalAlert } from './ModalAlert';
import { ModalContext } from './ModalContext';

export const ModalWindow = (props: ModalWindowProps): React.ReactElement => {
  const {
    children,
    className,
    innerRef,
    isAlertOpen,
    onAlertClose,
    onClose,
    onCloseButtonClick,
    onEscapePress,
    onOverlayClick,
    renderAlert,
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

  const windowStyles = {
    width: getModalWidth(size),
  };

  const wrapperClassname = getClassNames(
    className,
    theme.wrapper,
  );

  const {
    Wrapper,
    Icon,
  } = useCustomElements(props);

  const modalContext = {
    headerClassName: theme.header,
    bodyClassName: theme.body,
    footerClassName: theme.footer,
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
          className={theme.window}
          style={windowStyles}
        >
          {!isAlertOpen && <Icon onClick={handleCloseButtonClick} className={theme.cross} />}
          {children}
          <ModalAlert
            isOpen={isAlertOpen}
            onClose={onAlertClose}
          >
            {renderAlert}
          </ModalAlert>
        </div>
      </Wrapper>
    </ModalContext.Provider>
  );
};
