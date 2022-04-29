import "webpack-dev-server";

import * as webpack from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import path from "path";

interface CallbackEnv {
    WEBPACK_SERVE: boolean;
    WEBPACK_BUNDLE: boolean;
    WEBPACK_BUILD: boolean
}

const webpackConfiguration: (env: CallbackEnv) => webpack.Configuration = (env) => {
    const isDevelopment = !!env.WEBPACK_SERVE;

    return {
        entry: path.join(__dirname, "src/index.tsx"),
        output: {
            path: path.join(__dirname, "dist"),
            filename: "bundle.js",
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        devServer: {
            static: path.join(__dirname, "public"),
            compress: true,
            port: 4000,
            historyApiFallback: true,
        },
        mode: isDevelopment ? "development" : "production",
        devtool: isDevelopment ? "eval-cheap-source-map" : "source-map",
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@babel/preset-typescript",
                            ],
                        },
                    },
                },
            ],
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                async: false,
                eslint: {
                    files: "./src/**/*",
                },
            }),
        ],
    };
}

export default webpackConfiguration;