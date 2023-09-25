const path = require('path');

module.exports = env => ({
    mode   : env.modeV == 'dev' ? 'development' : 'production',
    target : 'web',
    entry  : {
        app : [ './src/index.js' ]
    },
    output : {
        path          :  path.resolve(__dirname, 'dist'),
        filename      : 'p5-sketch-editor.min.js',
        libraryTarget : 'umd',
        library       : 'p5-sketch-editor',
        publicPath    : '/'
    },
    devServer: {
        contentBase : path.join(__dirname, 'dev'),
        compress    : true,
        port        : 8080
    },
    watch : env.watchV == 'true' ? true : false,
    devtool : 'inline-source-map'
});
