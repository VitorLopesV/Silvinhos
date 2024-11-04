// __mocks__/expo-sqlite.js
export const openDatabase = jest.fn(() => ({
    transaction: jest.fn(),
  }));
  