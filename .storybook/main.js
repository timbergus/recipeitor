const CustomWebpack = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.(story|stories).{js,tsx,mdx}'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs/preset',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
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
