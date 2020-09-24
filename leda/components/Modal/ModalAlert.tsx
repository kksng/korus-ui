import React from 'react';
import * as L from '../../index';
import { useProps } from '../../utils';
import { ModalAlertProps } from './types';

export const ModalAlert: React.FC<ModalAlertProps> = (props: ModalAlertProps): React.ReactElement | null => {
  const {
    children,
    className,
    isOpen,
    onClose,
    ...restProps
  } = useProps(props);

  if (!isOpen) return null;

  return (
    <L.Div _modalAlertOverlay>
      <L.Div
        _modalAlert
        className={className}
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
