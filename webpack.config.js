const config = require('quip-apps-webpack-config');

// Enable loading of JSON files.
config.module.loaders.push({
    test: /\.json$/,
    loader: 'json-loader',
});

module.exports = config;
