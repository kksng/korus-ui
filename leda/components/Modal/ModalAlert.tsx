import React from 'react';
import { Div } from '~/components/Div';
import { Span } from '~/components/Span';
import { useProps } from '~/utils';
import { ModalContext } from './ModalContext';
import { ModalAlertProps } from './types';

export const ModalAlert: React.FC<ModalAlertProps> = (props: ModalAlertProps): React.ReactElement | null => {
  const {
    alertKey,
    children,
    className,
    onClose,
    ...restProps
  } = useProps(props);

  const modalContext = React.useContext(ModalContext);

  if (alertKey !== modalContext.activeAlertKey) return null;

  return (
    <Div _modalAlertOverlay>
      <Div
        _modalAlert
        className={className}
        data-alert-key={alertKey}
        {...restProps}
      >
        {children}
        <Span
          _modalAlertCross
          onClick={onClose}
        />
      </Div>
    </Div>
  );
};

ModalAlert.displayName = 'ModalAlert';
