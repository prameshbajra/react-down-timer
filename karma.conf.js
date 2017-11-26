const webPackConfig = require("./webpack.config.js");

module.exports = function (config) {
    config.set({
        frameworks: ["mocha"],
        browsers: ["Chrome"],
        singleRun: true,
        files: ["app/tests/**/*.text.jsx"],
        preprocessors: {
            "app/tests/**/*.test.jsx": ["webpack", "sourcemap"]
        },
        reporter: ["mocha"],
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