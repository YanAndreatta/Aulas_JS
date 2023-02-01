/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ \"./src/modulo1.js\");\n// import { nome2 , sobrenome, idade, soma, Pessoa as outraCoisa } from './modulo1';\n// import * as MeuModulo from './modulo1';\n\nconsole.log((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5, 40));\nconsole.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.idade, (0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.soma)(4, 4));\n\n// const p1 = new Pessoa('Yan', 'Eduardo');\n// const p1 = new outraCoisa('Yan', 'Eduardo');\n// console.log(p1);\n\n// console.log(nome2, sobrenome, idade);\n// console.log(soma(5, 5));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ3dFO0FBQ3hFTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1Asb0RBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCwwQ0FBQyxFQUFFQywrQ0FBUyxFQUFFQywyQ0FBSyxFQUFFQyw4Q0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrYm9pbGVycGxhdGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBub21lMiAsIHNvYnJlbm9tZSwgaWRhZGUsIHNvbWEsIFBlc3NvYSBhcyBvdXRyYUNvaXNhIH0gZnJvbSAnLi9tb2R1bG8xJztcclxuLy8gaW1wb3J0ICogYXMgTWV1TW9kdWxvIGZyb20gJy4vbW9kdWxvMSc7XHJcbmltcG9ydCBtdWx0aXBseSwgeyBub21lIGFzIG4sIHNvYnJlbm9tZSwgaWRhZGUsIHNvbWEgfSBmcm9tICcuL21vZHVsbzEnO1xyXG5jb25zb2xlLmxvZyhtdWx0aXBseSg1LCA0MCkpO1xyXG5jb25zb2xlLmxvZyhuLCBzb2JyZW5vbWUsIGlkYWRlLCBzb21hKDQsIDQpKTtcclxuXHJcbi8vIGNvbnN0IHAxID0gbmV3IFBlc3NvYSgnWWFuJywgJ0VkdWFyZG8nKTtcclxuLy8gY29uc3QgcDEgPSBuZXcgb3V0cmFDb2lzYSgnWWFuJywgJ0VkdWFyZG8nKTtcclxuLy8gY29uc29sZS5sb2cocDEpO1xyXG5cclxuLy8gY29uc29sZS5sb2cobm9tZTIsIHNvYnJlbm9tZSwgaWRhZGUpO1xyXG4vLyBjb25zb2xlLmxvZyhzb21hKDUsIDUpKTtcclxuIl0sIm5hbWVzIjpbIm11bHRpcGx5Iiwibm9tZSIsIm4iLCJzb2JyZW5vbWUiLCJpZGFkZSIsInNvbWEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"idade\": () => (/* binding */ idade),\n/* harmony export */   \"nome\": () => (/* binding */ nome),\n/* harmony export */   \"sobrenome\": () => (/* binding */ sobrenome),\n/* harmony export */   \"soma\": () => (/* binding */ soma)\n/* harmony export */ });\n// import { construct } from \"core-js/fn/reflect\";\n\n// export const nome2 = 'Yan';\n// export const sobrenome = 'Eduardo';\n// export const idade = 30;\n\nvar nome = 'Yan';\nvar sobrenome = 'Eduardo';\nvar idade = 30;\nfunction soma(x, y) {\n  return x + y;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((x, y) => x * y);\n\n\n// export { nome, sobrenome, idade, soma };\n\n// export { nome as nome2, sobrenome, idade, soma };\n\n// export class Pessoa {\n//     constructor(nome, sobrenome) {\n//         this.nome = nome;\n//         this.sobrenome = sobrenome;\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxvMS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsS0FBSztBQUNsQixJQUFNQyxTQUFTLEdBQUcsU0FBUztBQUMzQixJQUFNQyxLQUFLLEdBQUcsRUFBRTtBQUVoQixTQUFTQyxJQUFJLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0VBQ2hCLE9BQU9ELENBQUMsR0FBR0MsQ0FBQztBQUNoQjtBQUVBLGlFQUFlLENBQUNELENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLEdBQUdDLENBQUM7QUFFVTs7QUFFeEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja2JvaWxlcnBsYXRlLy4vc3JjL21vZHVsbzEuanM/MzNiNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBjb25zdHJ1Y3QgfSBmcm9tIFwiY29yZS1qcy9mbi9yZWZsZWN0XCI7XHJcblxyXG4vLyBleHBvcnQgY29uc3Qgbm9tZTIgPSAnWWFuJztcclxuLy8gZXhwb3J0IGNvbnN0IHNvYnJlbm9tZSA9ICdFZHVhcmRvJztcclxuLy8gZXhwb3J0IGNvbnN0IGlkYWRlID0gMzA7XHJcblxyXG5jb25zdCBub21lID0gJ1lhbic7XHJcbmNvbnN0IHNvYnJlbm9tZSA9ICdFZHVhcmRvJztcclxuY29uc3QgaWRhZGUgPSAzMDtcclxuXHJcbmZ1bmN0aW9uIHNvbWEoeCwgeSkge1xyXG4gICAgcmV0dXJuIHggKyB5O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeCwgeSkgPT4geCAqIHk7XHJcblxyXG5leHBvcnQgeyBub21lLCBzb2JyZW5vbWUsIGlkYWRlLCBzb21hIH07XHJcblxyXG4vLyBleHBvcnQgeyBub21lLCBzb2JyZW5vbWUsIGlkYWRlLCBzb21hIH07XHJcblxyXG4vLyBleHBvcnQgeyBub21lIGFzIG5vbWUyLCBzb2JyZW5vbWUsIGlkYWRlLCBzb21hIH07XHJcblxyXG4vLyBleHBvcnQgY2xhc3MgUGVzc29hIHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKG5vbWUsIHNvYnJlbm9tZSkge1xyXG4vLyAgICAgICAgIHRoaXMubm9tZSA9IG5vbWU7XHJcbi8vICAgICAgICAgdGhpcy5zb2JyZW5vbWUgPSBzb2JyZW5vbWU7XHJcbi8vICAgICB9XHJcbi8vIH0iXSwibmFtZXMiOlsibm9tZSIsInNvYnJlbm9tZSIsImlkYWRlIiwic29tYSIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modulo1.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;