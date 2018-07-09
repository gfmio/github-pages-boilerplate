/**
 * ts-node hook script to register the correct tsconfig for ts-node/register when used with mocha
 */

require("ts-node").register({
  project: "./config/tsconfig/tsconfig.json",
});
