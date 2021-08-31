const glob = require("glob");

function getPages () {
  let pages = {}
  glob.sync("./src/pages/*/*.js").forEach((filepath) => {
    let fileList = filepath.split("/");
    let fileName = fileList[fileList.length - 2];
    pages[fileName] = {
      entry: `src/pages/${fileName}/${fileName}.js`,
      template: `src/pages/${fileName}/${fileName}.html`,
      filename: `${fileName}.html`,
      chunks: ["chunk-vendors", "chunk-common", fileName]
    };
  });
  return pages;
};

module.exports = {
  pages: getPages(),
  assetsDir: "assets",
  publicPath: "/",
  configureWebpack: {
    devtool: process.env.NODE_ENV === "production" ? "(none)" : "source-map",
  },
};
