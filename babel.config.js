module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@store': './src/store',
          '@navigation': './src/navigation',
          '@types': './src/types',
          '@services': './src/services',
          '@theme': './src/theme',

          // Add other aliases here
        },
      },
    ],
  ],
};
