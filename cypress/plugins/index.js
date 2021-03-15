// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('@cypress/webpack-preprocessor');
const internalIp = require('internal-ip');

const findBrowser = () => {
  const browserPath = '/Applications/Yandex.app/Contents/MacOS/Yandex';
  const version = '1.1.1.1';
  const majorVersion = parseInt(version.split('.')[0]);

  return Promise.resolve({
    name: 'Yandex',
    channel: 'stable',
    family: 'chromium',
    displayName: 'Yandex',
    path: browserPath,
    version,
    majorVersion,
  });
};

const options = {
  // eslint-disable-next-line global-require
  webpackOptions: { ...require('../../webpack.config.js'), devtool: '(none)' },
  watchOptions: {},
};

const host = internalIp.v4.sync();
const port = 9000;

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', webpack(options));

  return findBrowser().then((browser) => {
    return {
      ...config,
      baseUrl: `http://${host}:${port}/`,
      browsers: config.browsers.concat(browser),
    };
  });
};

