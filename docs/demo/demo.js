/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./demoSrc/SamplePath.js":
/*!*******************************!*\
  !*** ./demoSrc/SamplePath.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.getHeartPath = () => {\n  return [[199.999692558296, 139.037809861326], [199.999692558296, 139.037809861326, 216.517501342052, 91.0703552349714, 260.408864739813, 101.478048251449], [304.306569058069, 111.887435228376, 302.040473463538, 149.898168782486, 297.969050788655, 167.089794944798], [293.891253219557, 184.314831799952, 266.291989537884, 213.247676318414, 241.405592420215, 229.538070494226], [216.517501342052, 245.828464670041, 201.360366325658, 263.475297677716, 199.999692558296, 269.360116287618], [198.644947652665, 263.475297677716, 183.481883774538, 245.828464670041, 158.595486656873, 229.538070494226], [133.70739557871, 213.247676318414, 106.111932139903, 184.314831799952, 102.030334327938, 167.089794944798], [97.9589002789453, 149.898168782486, 95.6966160382817, 111.887435228376, 139.592214337275, 101.478048251449], [183.481883774538, 91.0703552349714, 199.999692558296, 139.037809861326, 199.999692558296, 139.037809861326]];\n};\n\nexports.getCircle = () => {\n  const X = 200;\n  const Y = 200;\n  const K = 4 * (Math.sqrt(2) - 1) / 3;\n  const R = 100;\n  const RK = R * K;\n  return [[R + X, 0 + Y], [R + X, RK + Y, RK + X, R + Y, 0 + X, R + Y], [-RK + X, R + Y, -R + X, RK + Y, -R + X, 0 + Y], [-R + X, -RK + Y, -RK + X, -R + Y, 0 + X, -R + Y], [RK + X, -R + Y, R + X, -RK + Y, R + X, 0 + Y]];\n};\n\nexports.getTriangle = () => {\n  return [[200, 100], [300, 273.205080756887], [100, 273.205080756887], [200, 100]];\n};\n\n//# sourceURL=webpack://canvas-particle-waypoint/./demoSrc/SamplePath.js?");

/***/ }),

/***/ "./demoSrc/common.js":
/*!***************************!*\
  !*** ./demoSrc/common.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initCanvas\": () => (/* binding */ initCanvas),\n/* harmony export */   \"initWay\": () => (/* binding */ initWay)\n/* harmony export */ });\n/* harmony import */ var _SamplePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SamplePath */ \"./demoSrc/SamplePath.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ \"./esm/index.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n\n\n\n/**\n * createjsのステージを初期化する。\n * @return {createjs.Stage}\n */\n\nfunction initCanvas() {\n  const canvas = document.getElementById(\"appCanvas\");\n  canvas.style.backgroundColor = \"#000\";\n  return canvas;\n}\n/**\n * ParticleWayを初期化する。\n * @return {ParticleWay}\n */\n\nfunction initWay() {\n  const points = (0,_SamplePath__WEBPACK_IMPORTED_MODULE_0__.getHeartPath)();\n  const wayPoint = new ___WEBPACK_IMPORTED_MODULE_1__.Canvas2DParticleWay(particle_waypoint__WEBPACK_IMPORTED_MODULE_2__.BezierUtil.subdivide(points));\n  return wayPoint;\n}\n\n//# sourceURL=webpack://canvas-particle-waypoint/./demoSrc/common.js?");

/***/ }),

/***/ "./demoSrc/demo.js":
/*!*************************!*\
  !*** ./demoSrc/demo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ \"./esm/index.js\");\n/* harmony import */ var _SamplePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SamplePath */ \"./demoSrc/SamplePath.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ \"./demoSrc/common.js\");\n/* harmony import */ var raf_ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! raf-ticker */ \"./node_modules/raf-ticker/esm/index.js\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n\n\n\n\n\n\n/**\n * DOMContentLoaded後の初期化処理。\n * デモに必要なパーツを一式初期化する。\n */\n\nconst onDomContentsLoaded = () => {\n  const canvas = (0,_common__WEBPACK_IMPORTED_MODULE_3__.initCanvas)();\n  const ctx = canvas.getContext(\"2d\");\n  const way = (0,_common__WEBPACK_IMPORTED_MODULE_3__.initWay)();\n  const generator = initGenerator(way, canvas);\n  raf_ticker__WEBPACK_IMPORTED_MODULE_4__.RAFTicker.addListener(raf_ticker__WEBPACK_IMPORTED_MODULE_4__.RAFTickerEventType.tick, e => {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    generator.draw();\n  });\n  initGUI(generator);\n};\n/**\n * パーティクル生成機を初期化する。\n * @param way\n * @param stage\n * @return {CanvasParticleGenerator}\n */\n\n\nconst initGenerator = (way, canvas) => {\n  const imgArray = [];\n  const img = new Image();\n  img.src = \"./circle.png\";\n  console.log(img.width);\n\n  img.onload = () => {\n    console.log(img.width);\n  };\n\n  const generator = new ___WEBPACK_IMPORTED_MODULE_1__.Canvas2DParticleGenerator(canvas.getContext(\"2d\"), way, img, {\n    ease: createjs.Ease.cubicInOut\n  });\n  generator.animator.setSpeed(33, 30);\n  generator.play();\n  return generator;\n};\n/**\n * デモのパラメーターを操作するGUIを初期化する。\n * @param generator\n */\n\n\nconst initGUI = generator => {\n  const prop = {\n    isPlay: true,\n    path: \"heart\",\n    ease: \"cubicInOut\",\n    valve: true,\n    mode: \"SEQUENTIAL\",\n    clear: () => {\n      generator.particleContainer.removeAll();\n    }\n  };\n  const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_5__.GUI();\n  const animator = generator.animator;\n  gui.add(animator, \"generationInterval\", 33, 1000);\n  gui.add(animator, \"speedPerSec\", 0.0001, 0.5);\n  gui.add(generator, \"rangeR\", 0.0, 32.0, 0.1);\n  gui.add(generator, \"rangeRotationSpeed\", 0.0, 3.14 * 4, 0.01);\n  gui.add(prop, \"ease\", [\"cubicOut\", \"cubicInOut\", \"liner\"]).onChange(() => {\n    let ease = null;\n\n    switch (prop.ease) {\n      case \"cubicOut\":\n        ease = createjs.Ease.cubicOut;\n        break;\n\n      case \"cubicInOut\":\n        ease = createjs.Ease.cubicInOut;\n        break;\n    }\n\n    generator.animator.updateEase(ease, generator.modeManager.mode);\n  });\n  gui.add(prop, \"path\", [\"heart\", \"circle\", \"triangle\"]).onChange(() => {\n    let path;\n\n    switch (prop.path) {\n      case \"heart\":\n        path = particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.BezierUtil.subdivide((0,_SamplePath__WEBPACK_IMPORTED_MODULE_2__.getHeartPath)());\n        break;\n\n      case \"circle\":\n        path = particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.BezierUtil.subdivide((0,_SamplePath__WEBPACK_IMPORTED_MODULE_2__.getCircle)());\n        break;\n\n      case \"triangle\":\n        path = (0,_SamplePath__WEBPACK_IMPORTED_MODULE_2__.getTriangle)();\n        break;\n    }\n\n    generator.multipleWays.ways[0].points = path;\n  });\n  gui.add(prop, \"isPlay\").onChange(() => {\n    if (prop.isPlay) {\n      generator.play();\n    } else {\n      generator.stop();\n    }\n  });\n  gui.add(prop, \"mode\", [\"SEQUENTIAL\", \"LOOP\"]).onChange(() => {\n    switch (prop.mode) {\n      case \"SEQUENTIAL\":\n        generator.modeManager.mode = particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.GenerationMode.SEQUENTIAL;\n        break;\n\n      case \"LOOP\":\n        generator.modeManager.mode = particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.GenerationMode.LOOP;\n        break;\n    }\n  });\n  gui.add(prop, \"valve\").onChange(() => {\n    if (prop.valve) {\n      generator.valve.open();\n    } else {\n      generator.valve.close();\n    }\n  });\n  gui.add(prop, \"clear\");\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nif (document.readyState !== \"loading\") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", onDomContentsLoaded);\n}\n\n//# sourceURL=webpack://canvas-particle-waypoint/./demoSrc/demo.js?");

/***/ }),

/***/ "./esm/Canvas2DParticle.js":
/*!*********************************!*\
  !*** ./esm/Canvas2DParticle.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas2DParticle\": () => (/* binding */ Canvas2DParticle)\n/* harmony export */ });\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n\nclass Canvas2DParticle extends particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.Particle {\n  constructor() {\n    super(...arguments);\n    this.r = 0.0; //媒介変数tに応じた回転量\n\n    this.rotationSpeedSin = 0.0;\n    this.rotationSpeedCos = 0.0; //初期回転量\n\n    this.rotationSin = 0.0;\n    this.rotationCos = 0.0;\n  }\n\n  init(ctx, bitmap, rangeR, rangeRotationSpeed) {\n    this.ctx = ctx;\n    this.bitmap = bitmap;\n    this.r = rangeR * Math.random();\n    this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);\n    this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);\n    this.rotationSin = Math.random() * 2 * Math.PI;\n    this.rotationCos = Math.random() * 2 * Math.PI;\n  }\n\n  update(t) {\n    const n = super.update(t);\n    const pos = this.path.getPoint(n);\n    this.positionX = pos[0];\n    this.positionY = pos[1];\n\n    if (this.r > 0.0) {\n      const sin = this.rotationSpeedSin * t + this.rotationSin;\n      const cos = this.rotationSpeedCos * t + this.rotationCos;\n      this.positionX += Math.cos(cos) * this.r;\n      this.positionY += Math.sin(sin) * this.r;\n    }\n\n    return n;\n  }\n\n  draw() {\n    if (this.bitmap == null) return;\n    const px = this.positionX - this.bitmap.width / 2;\n    const py = this.positionY - this.bitmap.height / 2;\n    this.ctx.drawImage(this.bitmap, 0.5 + px | 0, 0.5 + py | 0);\n  }\n\n  dispose() {\n    super.dispose();\n    this.ctx = null;\n    this.bitmap = null;\n  }\n\n}\n\n//# sourceURL=webpack://canvas-particle-waypoint/./esm/Canvas2DParticle.js?");

/***/ }),

/***/ "./esm/Canvas2DParticleGenerator.js":
/*!******************************************!*\
  !*** ./esm/Canvas2DParticleGenerator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas2DParticleGenerator\": () => (/* binding */ Canvas2DParticleGenerator)\n/* harmony export */ });\n/* harmony import */ var _Canvas2DParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas2DParticle */ \"./esm/Canvas2DParticle.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n\n\nclass Canvas2DParticleGenerator extends particle_waypoint__WEBPACK_IMPORTED_MODULE_1__.ParticleGenerator {\n  constructor(ctx, path, map, option) {\n    super(path, option);\n    this.mapCounter = 0;\n    this._rangeR = 0.0;\n    this._rangeRotationSpeed = 0.0;\n    this.ctx = ctx;\n\n    if (option) {\n      if (option.rangeR) this._rangeR = option.rangeR;\n      if (option.rangeRotationSpeed) this._rangeRotationSpeed = option.rangeRotationSpeed;\n    }\n\n    if (Array.isArray(map)) {\n      if (map.length === 0) {\n        console.warn(\"Canvas2DParticleGenerator : オプションとして渡されたビットマップ配列が空です。このクラスは動作しますが、一切の表示を行いません。\");\n        console.trace();\n      }\n\n      this.map = map;\n    } else {\n      this.map = [map];\n    }\n  }\n\n  generateParticle(path) {\n    const particle = new _Canvas2DParticle__WEBPACK_IMPORTED_MODULE_0__.Canvas2DParticle(path);\n    particle.init(this.ctx, this.map[this.mapCounter], this._rangeR, this._rangeRotationSpeed);\n    this.mapCounter = (this.mapCounter += 1) % this.map.length;\n    return particle;\n  }\n\n  generateAll() {\n    this.mapCounter = 0;\n    super.generateAll();\n  }\n\n  get rangeRotationSpeed() {\n    return this._rangeRotationSpeed;\n  }\n\n  set rangeRotationSpeed(value) {\n    this._rangeRotationSpeed = value;\n  }\n\n  get rangeR() {\n    return this._rangeR;\n  }\n\n  set rangeR(value) {\n    this._rangeR = value;\n  }\n\n  draw() {\n    if (!this.particleContainer || this.particleContainer.particles.length === 0) return;\n    this.particleContainer.particles.forEach(p => {\n      p.draw();\n    });\n  }\n\n}\n\n//# sourceURL=webpack://canvas-particle-waypoint/./esm/Canvas2DParticleGenerator.js?");

/***/ }),

/***/ "./esm/Canvas2DParticleWay.js":
/*!************************************!*\
  !*** ./esm/Canvas2DParticleWay.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas2DParticleWay\": () => (/* binding */ Canvas2DParticleWay)\n/* harmony export */ });\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n\nclass Canvas2DParticleWay extends particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.ParticleWay {\n  constructor(points, option) {\n    super(points);\n    if (!option) return;\n  }\n\n}\n\n//# sourceURL=webpack://canvas-particle-waypoint/./esm/Canvas2DParticleWay.js?");

/***/ }),

/***/ "./esm/index.js":
/*!**********************!*\
  !*** ./esm/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas2DParticleGenerator\": () => (/* reexport safe */ _Canvas2DParticleGenerator__WEBPACK_IMPORTED_MODULE_0__.Canvas2DParticleGenerator),\n/* harmony export */   \"Canvas2DParticle\": () => (/* reexport safe */ _Canvas2DParticle__WEBPACK_IMPORTED_MODULE_1__.Canvas2DParticle),\n/* harmony export */   \"Canvas2DParticleWay\": () => (/* reexport safe */ _Canvas2DParticleWay__WEBPACK_IMPORTED_MODULE_2__.Canvas2DParticleWay)\n/* harmony export */ });\n/* harmony import */ var _Canvas2DParticleGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas2DParticleGenerator */ \"./esm/Canvas2DParticleGenerator.js\");\n/* harmony import */ var _Canvas2DParticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas2DParticle */ \"./esm/Canvas2DParticle.js\");\n/* harmony import */ var _Canvas2DParticleWay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Canvas2DParticleWay */ \"./esm/Canvas2DParticleWay.js\");\n\n\n\n\n//# sourceURL=webpack://canvas-particle-waypoint/./esm/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demo": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./demoSrc/demo.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcanvas_particle_waypoint"] = self["webpackChunkcanvas_particle_waypoint"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;