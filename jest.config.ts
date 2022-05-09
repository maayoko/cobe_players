import { Config } from "@jest/types";

const jestConfiguration: Config.InitialOptions = {
    verbose: true,
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "^@/(.*)": "<rootDir>/src/$1"
    },
    moduleDirectories: [
        "<rootDir>/src",
        "node_modules"
    ]
}

export default jestConfiguration;