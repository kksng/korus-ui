import * as React from 'react';
import { globalDefaultTheme } from '~/components/LedaProvider';

export const VStepperContext = React.createContext<{ theme: typeof globalDefaultTheme.vstepper}>({ theme: globalDefaultTheme.vstepper });
