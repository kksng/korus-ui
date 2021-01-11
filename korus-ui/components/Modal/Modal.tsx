import React from 'react';
import ReactDOM from 'react-dom';
import { ModalWindow } from './ModalWindow';
import { ModalProps, ModalRefCurrent } from './types';

export const Modal = React.forwardRef((props: ModalProps, ref?: React.Ref<ModalRefCurrent>): React.ReactElement => (
  <>
    {props.isOpen && ReactDOM.createPortal(
      <ModalWindow
        isOpen={props.isOpen}
        innerRef={ref as unknown as React.Ref<ModalRefCurrent>}
        {...(props as React.PropsWithoutRef<ModalProps>)}
      >
        {props.children}
      </ModalWindow>,
      document.querySelectorAll('body')[0],
    )}
  </>
)) as React.FC<ModalProps>;

Modal.displayName = 'Modal';
