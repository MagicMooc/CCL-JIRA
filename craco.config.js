const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "rgb(51, 153, 153)",
              "@font-size-base": "16px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
