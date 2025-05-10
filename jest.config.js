export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  extensionsToTreatAsEsm: [".ts"], // Add TypeScript files for ESM treatment
  moduleNameMapper: {
    // Optional, helps Jest map module paths for ESM correctly
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};
