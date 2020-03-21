module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'babel-loader'
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
};
