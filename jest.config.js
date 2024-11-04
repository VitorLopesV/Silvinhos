module.exports = {
    preset: 'react-native',
    transformIgnorePatterns: [
      'node_modules/(?!(react-native|@react-native|@react-navigation|@testing-library|expo-sqlite|expo-modules-core)/)',
    ],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    moduleNameMapper: {
      '^expo-sqlite$': '<rootDir>/__mocks__/expo-sqlite.js',
    },
  };
  