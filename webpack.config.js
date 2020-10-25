let Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .addEntry('app', './assets/js/main.js')
    .enableSassLoader(function (sassOptions) {
    }, {
        resolveUrlLoader: false,
    })
    .enableVueLoader()
    .enableSingleRuntimeChunk();

module.exports = Encore.getWebpackConfig();
