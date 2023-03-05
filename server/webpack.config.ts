import * as path from "path";
import * as nodeExternals from "webpack-node-externals";
import * as CopyPlugin from "copy-webpack-plugin"
import * as webpack from "webpack";

module.exports = {
    entry: [
        'webpack/hot/poll?100',
        "./src/main.ts"
    ],
    target: "node",
    devtool: 'inline-source-map',
    externals: [nodeExternals({ allowlist: ['webpack/hot/poll?100'], })],
    module: {
        rules: [
            {
                test: /\.(tsx?|m?js)$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new CopyPlugin({
        patterns: [
            path.resolve(__dirname, ".env.development"),
            path.resolve(__dirname, ".env.development.local"),
            path.resolve(__dirname, ".env.production"),
        ]
    }), new webpack.HotModuleReplacementPlugin(),],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: ["src", "node_modules"],
    },
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "build"),
    }
}