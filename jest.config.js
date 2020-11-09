module.exports = {
  bail: true,
  preset: 'ts-jest',
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  modulePathIgnorePatterns: [
    '<rootDir>/\\.',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testRegex: '\\.test\\.tsx?$',
};
