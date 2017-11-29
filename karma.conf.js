const webPackConfig = require("./webpack.config.js");

module.exports = function (config) {
    config.set({
        frameworks: ["mocha"],
        browsers: ["Chrome"],
        singleRun: true,
        files: [
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/foundation-sites/dist/js/foundation.min.js",
            "app/tests/**/*.test.jsx"],
        reporters: ["mocha"],
        preprocessors: {
            "app/tests/**/*.test.jsx": ["webpack", "sourcemap"]
        },
        client: {
            mocha: {
                timeout: "5000"
            }
        },
        webpack: webPackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};
