/** @type {import('jest').Config} */
module.exports = {
  roots: ["<rootDir>/src"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts", "**/__tests__/**/*.test.tsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
};



