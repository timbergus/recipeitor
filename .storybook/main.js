const CustomWebpack = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.{js,tsx}'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: async config => {
    const customWebpack = CustomWebpack(null, { mode: 'development' });
    return {
      ...config,
      module: {
        ...config.module,
        rules: customWebpack.module.rules,
      },
      resolve: {
        ...config.resolve,
        extensions: customWebpack.resolve.extensions,
      },
    };
  },
};
