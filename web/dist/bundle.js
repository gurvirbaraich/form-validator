/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormValidator: () => (/* binding */ FormValidator)\n/* harmony export */ });\n/* harmony import */ var _testing_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testing/test */ \"./src/testing/test.ts\");\n\nvar FormValidator = /** @class */ (function () {\n    /**\n     * When an instace of the FormValidator class is created,\n     * the constructor function gets invoked automatically and\n     * expects a form element to be passed in.\n     *\n     * All the methods invoked will run on the form element passed.\n     */\n    function FormValidator(formElement) {\n        this.formElement = formElement;\n    }\n    /**\n     * Function expects 2 parameters where\n     * (required) 1st parameter expects to get the value of the name attribute.\n     * (optional) 2nd parameter can be used to set the attribute to look at.\n     */\n    FormValidator.prototype.getValue = function (inputIdentifier, options) {\n        var attribute = typeof (options === null || options === void 0 ? void 0 : options.attributeName) == \"string\"\n            ? options.attributeName\n            : \"name\";\n        var inputElement = this.formElement.querySelector(\"[\".concat(attribute, \"=\").concat(inputIdentifier, \"]\"));\n        if (!inputElement) {\n            throw new Error(\"GetError: No input element found with element[\".concat(attribute, \"] = '\").concat(inputIdentifier, \"'\"));\n        }\n        // What if, the input is a chekbox.\n        var inputElementType = inputElement.getAttribute(\"type\");\n        return inputElementType !== \"checkbox\"\n            ? inputElement.value\n            : inputElement.checked;\n    };\n    /**\n     * Returns new object of the validator class\n     * with injected value of the given element present inside form.\n     */\n    FormValidator.prototype.validateValue = function (inputIdentifier, options) {\n        return new Validator(this.getValue(inputIdentifier, options));\n    };\n    return FormValidator;\n}());\n\nvar Validator = /** @class */ (function () {\n    /**\n     * The constructor function expects to recieve a value\n     * that will be used to run all the validation checks on.\n     */\n    function Validator(value) {\n        this.value = value;\n    }\n    /**\n     * Checks whether the recived value is equal to expected value.\n     */\n    Validator.prototype.isEqual = function (expected, options) {\n        var checkType = (options === null || options === void 0 ? void 0 : options.check) == undefined ? \"loose\" : options.check;\n        switch (checkType) {\n            case \"loose\":\n                return this.value == expected;\n            case \"strict\":\n                return this.value === expected;\n            default:\n                throw new Error(\"Invalid check: \".concat(checkType));\n        }\n    };\n    /**\n     * Checks whether the recived value is grater than expected value.\n     */\n    Validator.prototype.isGrater = function (seed) {\n        return this.value > seed;\n    };\n    /**\n     * Checks whether the recived value is grater than or equal to expected value.\n     */\n    Validator.prototype.isGraterOrEqual = function (seed) {\n        return this.value >= seed;\n    };\n    /**\n     * Checks whether the recived value is smaller than expected value.\n     */\n    Validator.prototype.isLower = function (seed) {\n        return this.value < seed;\n    };\n    /**\n     * Checks whether the recieved value is smaller or equal to expected value.\n     */\n    Validator.prototype.isLowerOrEqual = function (seed) {\n        return this.value <= seed;\n    };\n    /**\n     * Checks whether the recieved value is inbetween the range provided.\n     */\n    Validator.prototype.isBetween = function (min, max, options) {\n        var mode = (options === null || options === void 0 ? void 0 : options.mode) == undefined ? \"exclusive\" : options.mode;\n        switch (mode) {\n            case \"exclusive\":\n                return this.isGrater(min) && this.isLower(max);\n            case \"inclusive\":\n                return this.isGraterOrEqual(min) && this.isLowerOrEqual(max);\n            default:\n                throw new Error(\"Invalid mode: \" + mode);\n        }\n    };\n    return Validator;\n}());\n// ----------------------------------- //\n(0,_testing_test__WEBPACK_IMPORTED_MODULE_0__.executeTests)(FormValidator);\n\n\n//# sourceURL=webpack://formvalidator/./src/index.ts?");

/***/ }),

/***/ "./src/testing/test.ts":
/*!*****************************!*\
  !*** ./src/testing/test.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   executeTests: () => (/* binding */ executeTests),\n/* harmony export */   form: () => (/* binding */ form)\n/* harmony export */ });\n// @ts-ignore\nvar form = document.querySelector(\"form\");\nvar executeTests = function (FormValidator) {\n    var formValidator = new FormValidator(form);\n    formValidator.getValue(\"terms\"); // returns weather the checkbox is checked\n    form.addEventListener(\"submit\", function (e) {\n        e.preventDefault();\n        var isTermsChecked = formValidator.validateValue(\"terms\").isEqual(true);\n        if (isTermsChecked) {\n            // Do something...\n            alert(\"Form Submitted\");\n        }\n        else {\n            // Failed validation...\n            alert(\"Please check the terms and conditions to continue.\");\n        }\n    });\n};\n\n\n//# sourceURL=webpack://formvalidator/./src/testing/test.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;