const path = require("path");

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: {
    main: "./src/displayController.js",
    "config/config": "./src/optionsController",
    backgroundScript: "./src/aniListController",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};
