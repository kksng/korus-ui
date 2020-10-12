import {
  configure, addParameters,
} from '@storybook/react';
import './styles/storybook.scss';
import './styles/styles.scss';
import { storybookTheme } from './themes';

export const storybookOptions = {
  showPanel: false, // Показывать панели аддонов
  sortStoriesByKind: true, // Сортировка стори по имени
  isFullScreen: false, // Полноэкранный режим
  showNav: true, // Отображать панель стори
  theme: storybookTheme,
};

addParameters({
  options: storybookOptions,
});

// automatically import all files ending in *.stories.js $FlowFixMe
const req = require.context('./stories', true, /\.stories\.js$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
