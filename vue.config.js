process.env.NODE_ENV = "production"
module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: 'color-range-selector',
    },
    css: {
        extract: false,
        sourceMap: false,
    },
    chainWebpack(config) {
        config.plugins.delete('preload'); // TODO: need test
        config.plugins.delete('prefetch'); // TODO: need test
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true;
                return options
            })
            .end();
        
        config.when(process.env.NODE_ENV === 'development',
            config => config.devtool('cheap-source-map')
        );
    }
}