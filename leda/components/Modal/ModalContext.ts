import React from 'react';
import { globalDefaultTheme } from '~/components/LedaProvider';
import { ModalContextType } from './types';

export const ModalContext = React.createContext<ModalContextType>({
  activeAlertKey: null,
  headerClassName: globalDefaultTheme.modal.header,
  bodyClassName: globalDefaultTheme.modal.body,
  footerClassName: globalDefaultTheme.modal.footer,
});
