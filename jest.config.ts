const commonConfig = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["ts-jest"],
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
};

module.exports = {
  projects: [
    {
      ...commonConfig,
      displayName: "jsdom",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/src/components/**/__tests__/**/*.{ts,tsx}"],
    },
    {
      ...commonConfig,
      displayName: "utils",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/src/utils/__tests__/**/*.{ts,tsx}"],
    },
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["text", "lcov"],
};
