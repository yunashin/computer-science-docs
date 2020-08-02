const path = require("path");

module.exports = (options) => {
  return (env = {}) => {
    const publicPath =
      (env.publicPathPrefix || "") + (options.publicPath || "");
    options = { ...options, publicPath };

    return {
      directory: __dirname,

      rules: [
        {
          resource: {
            and: [
              /\.js$/,
              {
                not: [
                  {
                    and: [
                      /\/node_modules\//,
                      { not: [/computer-science-docs\/(?:src|static)\//] },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],

      resolve: {
        modules: [path.join(__dirname, "..", "node_modules"), "node_modules"],
      },

      routeConfig: {
        routes: {
          [`{anyHost}${publicPath.replace(
            /\/$/,
            ""
          )}`]: "http://localhost:{assetBenderPort}/",
        },
      },
    };
  };
};
