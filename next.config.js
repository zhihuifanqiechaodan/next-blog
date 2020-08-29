const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less')

module.exports = () => withLess(withSass(withCSS(
    {
        lessLoaderOptions: {
            javascriptEnabled: true
        }
    }
)))