import "webpack-dev-server";

import * as webpack from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

interface CallbackEnv {
    WEBPACK_SERVE: boolean;
    WEBPACK_BUNDLE: boolean;
    WEBPACK_BUILD: boolean
}

const commonPlugins: webpack.WebpackPluginInstance[] = [
    new ForkTsCheckerWebpackPlugin({
        async: false,
        eslint: {
            files: "./src/**/*",
        },
    }),
];

const productionPlugins: webpack.WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
        title: "Cobe players",
        publicPath: "/"
    }),
];

const webpackConfiguration: (env: CallbackEnv) => webpack.Configuration = (env) => {
    const isDevelopment = !!env.WEBPACK_SERVE;
    const plugins: webpack.WebpackPluginInstance[] = [
        ...commonPlugins,
        ...(!isDevelopment ? productionPlugins : [])
    ];

    return {
        entry: path.join(__dirname, "src/index.tsx"),
        output: {
            path: path.join(__dirname, "dist"),
            filename: "bundle.js",
        },
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
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
        plugins,
    };
}

export default webpackConfiguration;