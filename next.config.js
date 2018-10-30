const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  assetPrefix: process.env.NODE_ENV === "production" ? "" : ""
});
