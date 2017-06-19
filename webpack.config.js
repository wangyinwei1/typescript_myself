var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: "/assets/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    plugins: [
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://127.0.0.1:8082/'
        }),
    ],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                use: ['react-hot-loader', { loader: 'ts-loader', options: { jsx: true } }],
                exclude: /(node_modules|__tests__)/
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        ]
    },
    devServer: {
        contentBase: 'server',
        inline: true,
        hot: true,
        port: 8082,
        host: '0.0.0.0',
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};