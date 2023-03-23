const path = require( "path");
const nodeExternals =require( "webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin")
const  webpack =require( "webpack");

module.exports = {
    entry: [
        'webpack/hot/poll?100',
        "./src/main.ts"
    ],
    target: "node",
    mode:"development",
    devtool: 'inline-source-map',
    externals: [nodeExternals({ allowlist: ['webpack/hot/poll?100'], })],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
        ],
    },
    plugins: [new CopyPlugin({
        patterns: [
            ".env.*",
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