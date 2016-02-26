var webpack = require('webpack'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src'),
    distPath = path.join(__dirname, 'dist');

module.exports = {
    entry: path.join(srcPath, 'js/index.js'),
    output: {
        path: distPath,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=react,presets[]=es2015'
            }
        ]
    }
};