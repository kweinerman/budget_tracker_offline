const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: './public/index.js',
    outpath: {
        path: __dirname+ '/public/dist',
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new WebpackPwaManifest({
            filename: 'manifest.json',
            inject: false,
            fingerprints: false,
            name: 'Budget Tracker app',
            short_name: 'Budget',
            description: 'Track your budget offline and online',
            background_color: 'black',
            theme_color: 'blue',
            start_url:'/',
            display: "standalone",
            icons: [{
                src: path.resolve(__dirname, 'public/icons/icon-192x192.png'),
                sizes: [195, 520],
            },]
        })
    ]
};

module.exports = config;