let Encore = require('@symfony/webpack-encore');

Encore
    // directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath('/build')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    .enableSourceMaps(!Encore.isProduction())

     // will output as public/build/app.js
    .addEntry('app', './assets/js/main.js')
    
    .enableSassLoader(function (sassOptions) {
    }, {
        resolveUrlLoader: false,
    })
    .enableVueLoader()
    .enableSingleRuntimeChunk();

// Use polling instead of inotify
const config = Encore.getWebpackConfig();
config.watchOptions = {
    poll: true,
};

// Export the final configuration
module.exports = config;
