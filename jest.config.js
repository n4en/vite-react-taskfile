/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  collectCoverage: true,
  coverageDirectory: `coverage/${process.env.TEST_TYPE || "default"}`,
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "results",
        outputName: `${process.env.TEST_TYPE || "default"}-results.xml`,
      },
    ],
  ],
};
