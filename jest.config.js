module.exports = {
    // Use ts-jest for TypeScript files
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      // Handle CSS imports (if you use CSS modules)
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: [
      // Allow transformation of files within node_modules
      'node_modules/(?!(my-package|another-package)/)'
    ],
    // Remove or comment out this line if jest.setup.js doesn't exist
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };
  