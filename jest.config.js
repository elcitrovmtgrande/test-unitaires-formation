module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/src/exercises"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}