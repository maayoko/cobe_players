import { Config } from "@jest/types";

const jestConfiguration: Config.InitialOptions = {
    verbose: true,
    testEnvironment: "jsdom",
}

export default jestConfiguration;