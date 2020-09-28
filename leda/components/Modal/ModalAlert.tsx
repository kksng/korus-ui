import React from 'react';
import * as L from '../../index';
import { ModalContext } from './ModalContext';
import { ModalAlertProps } from './types';

export const ModalAlert: React.FC<ModalAlertProps> = (props: ModalAlertProps): React.ReactElement | null => {
  const {
    alertKey,
    children,
    className,
    onClose,
    ...restProps
  } = L.utils.useProps(props);

  const modalContext = React.useContext(ModalContext);

  if (alertKey !== modalContext.activeAlertKey) return null;

  return (
    <L.Div _modalAlertOverlay>
      <L.Div
        _modalAlert
        className={className}
        data-alert-key={alertKey}
        {...restProps}
      >
        {children}
        <L.Span
          _modalAlertCross
          onClick={onClose}
        />
      </L.Div>
    </L.Div>
  );
};

ModalAlert.displayName = 'ModalAlert';
