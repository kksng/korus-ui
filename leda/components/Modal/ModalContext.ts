import React from 'react';
import { globalDefaultTheme } from '../LedaProvider';
import { ModalContextType } from './types';

export const ModalContext = React.createContext<ModalContextType>({
  activeAlertKey: null,
  bodyClassName: globalDefaultTheme.modal.body,
  footerClassName: globalDefaultTheme.modal.footer,
  headerClassName: globalDefaultTheme.modal.header,
});
