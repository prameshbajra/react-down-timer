const webPackConfig = require("./webpack.config.js");

module.exports = function (config) {
    config.set({
        frameworks: ["mocha"],
        browsers: ["Chrome"],
        singleRun: true,
        files: ["app/tests/**/*.test.jsx"],
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
