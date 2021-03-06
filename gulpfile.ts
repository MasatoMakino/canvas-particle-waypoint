const { series } = require("gulp");

const doc = require("gulptask-tsdoc").get();
const server = require("gulptask-dev-server").get("./docs/demo");

const { bundleDemo, watchDemo } = require("gulptask-demo-page").get({
  externalScripts: ["//code.createjs.com/1.0.0/tweenjs.min.js"],
  body: `<canvas id="appCanvas" width="640" height="480"></canvas>`,
  style: `body{background-color: #000}`,
});
const { tsc, tscClean, watchTsc } = require("gulptask-tsc").get({
  projects: ["tsconfig.json", "tsconfig.esm.json"],
});

const watchTasks = async () => {
  watchDemo();
  watchTsc();
};
exports.start_dev = series(watchTasks, server);
exports.build = series(tsc, bundleDemo, doc);
exports.build_clean = series(tscClean, bundleDemo, doc);
