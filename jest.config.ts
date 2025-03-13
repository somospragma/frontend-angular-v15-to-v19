const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: true,
  coverageReporters: ['html', 'text'],
  coverageDirectory: 'coverage/angular-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.routes.ts', // Excluye archivos .routes.ts
    '!src/**/*.mock.ts', // Excluye archivos .mock.ts
    '!src/main.ts', // Excluye main.ts
    '!src/environments/**', // Excluye toda la carpeta environments
  ],
};
