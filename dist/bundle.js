/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html { box-sizing: border-box; }\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Used for Debugging purposes */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  -webkit-transition-duration: 0.25s;\\r\\n  -moz-transition-duration: 0.25s;\\r\\n  transition-duration: 0.25s;\\r\\n}\\r\\nh1,h2,h3{margin: 0;}\\r\\nh2{font-size: 1.4em;}\\r\\n\\r\\nbody{font-size: 2em;}\\r\\n\\r\\n.container{\\r\\n  padding: 26px 36px;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"]{\\r\\n  outline: none;\\r\\n  border: 1px solid midnightblue;\\r\\n  border-radius: 8px;\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\n.active{\\r\\n  background-color: blue !important;\\r\\n}\\r\\n\\r\\n#tempConvert{\\r\\n  outline: none;\\r\\n  color: white;\\r\\n  font-size: 26px;\\r\\n  padding: 4px 10px;\\r\\n  border: 2px solid midnightblue;\\r\\n  border-radius: 32px;\\r\\n  background-color: orangered;\\r\\n  cursor: pointer;\\r\\n}\\r\\n#tempConvert:hover{\\r\\n  transform:scale(1.0.5);\\r\\n  -moz-transform:scale(1.05);\\r\\n  -webkit-transform:scale(1.05);\\r\\n  -ms-transform:scale(1.05);\\r\\n}\\r\\n\\r\\n.btn{\\r\\n  outline: none;\\r\\n  border: 2px solid midnightblue;\\r\\n  border-radius: 6px;\\r\\n  font-size: 20px;\\r\\n  cursor: pointer;\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\n.btn:hover{\\r\\n  border-color: goldenrod;\\r\\n  transform:scale(1.03);\\r\\n  -moz-transform:scale(1.03);\\r\\n  -webkit-transform:scale(1.03);\\r\\n  -ms-transform:scale(1.03);\\r\\n}\\r\\n\\r\\n.card{\\r\\n  position: relative;\\r\\n  border: 1px solid black;\\r\\n  box-shadow: 3px 5px 8px grey;\\r\\n  border-radius: 16px;\\r\\n  padding: 22px;\\r\\n  width: auto;\\r\\n  max-width: 300px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.text-center{  \\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.center{  \\r\\n  margin: 0 auto;\\r\\n}\\r\\n#errorBox{\\r\\n  color: #a22;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n#overlay{\\r\\n  z-index: 1;\\r\\n  position: absolute;\\r\\n  top: 0; right: 0; bottom: 0; left: 0;\\r\\n  background-color: rgba(0,0,0,0.6);\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n#loader {\\r\\n  position: absolute;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  z-index: 2;\\r\\n  width: 150px;\\r\\n  height: 150px;\\r\\n  margin: auto;\\r\\n  border: 16px solid #f3f3f3;\\r\\n  border-radius: 50%;\\r\\n  border-top: 16px solid #e52;\\r\\n  width: 120px;\\r\\n  height: 120px;\\r\\n  -moz-animation: spin 2s linear infinite;\\r\\n  -ms-animation: spin 2s linear infinite;\\r\\n  -webkit-animation: spin 2s linear infinite;\\r\\n  animation: spin 2s linear infinite;\\r\\n}\\r\\n\\r\\n.hide {visibility: hidden;}\\r\\n\\r\\n@-webkit-keyframes spin {\\r\\n  0% { -webkit-transform: rotate(0deg); }\\r\\n  100% { -webkit-transform: rotate(360deg); }\\r\\n}\\r\\n@-moz-keyframes spin {\\r\\n  0% { -webkit-transform: rotate(0deg); }\\r\\n  100% { -webkit-transform: rotate(360deg); }\\r\\n}\\r\\n@-ms-keyframes spin {\\r\\n  0% { -webkit-transform: rotate(0deg); }\\r\\n  100% { -webkit-transform: rotate(360deg); }\\r\\n}\\r\\n@keyframes spin {\\r\\n  0% { transform: rotate(0deg); }\\r\\n  100% { transform: rotate(360deg); }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_weathermodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/weathermodel */ \"./src/models/weathermodel.js\");\n\n\n\n// Constants:\n// App ID to use OpenWeather data\nconst APP_ID = '5c5f1a47d3dc27fe0dfca44e22ff94d2';\n\nconst weatherData = new _models_weathermodel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Bahamas,the', APP_ID);\n\ndocument.querySelector('#tempConvert').addEventListener('click', (e) => {\n  const element = e.target;\n  element.classList.toggle('active');\n  const fahrenheit = element.classList.contains('active');\n  weatherData.view.render(fahrenheit);\n});\n\ndocument.querySelector('#cityBtn').addEventListener('click', (e) => {\n  const element = e.target;\n  const city = weatherData.view.getCity();\n  if (!city) { weatherData.view.renderError('City is invalid!'); return; }\n  const fahrenheit = element.classList.contains('active');\n  weatherData.getWeatherByCity(city, APP_ID, fahrenheit);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/weathermodel.js":
/*!************************************!*\
  !*** ./src/models/weathermodel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_weatherview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/weatherview */ \"./src/views/weatherview.js\");\n\n\nclass WeatherDataModel {\n  constructor(city, appID) {\n    this.view = new _views_weatherview__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.getWeatherByCity(city, appID);\n  }\n\n  getWeatherByCity(city = this.view.cityInput, appID, fahrenheit = true) {\n    this.view.toggleLoad();\n    const jsonString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appID}`;\n    fetch(jsonString, { mode: 'cors' }).then((e) => {\n      const jsonData = e.json();\n      jsonData.then(data => {\n        if (data.cod === '400') { return; }\n        this.mCity = data.name;\n        console.log(this.mCity);\n        this.mCondition = data.weather[0].id;\n        this.mIconName = this.updateWeatherIcon();\n        this.mTemperature = data.main.temp;\n        this.view.toggleLoad();\n        this.view.render(fahrenheit);\n      }).catch(() => {\n        this.view.renderError(\"Can't find city...\");\n      });\n    })\n      .catch(() => {\n        //        console.log(e);\n        //        console.log('Fetch failed');\n\n      });\n  }\n\n  updateWeatherIcon(condition = this.mCondition) {\n    if (condition >= 0 && condition < 300) {\n      return 'tstorm1';\n    } if (condition >= 300 && condition < 500) {\n      return 'light_rain';\n    } if (condition >= 500 && condition < 600) {\n      return 'shower3';\n    } if (condition >= 600 && condition <= 700) {\n      return 'snow4';\n    } if (condition >= 701 && condition <= 771) {\n      return 'fog';\n    } if (condition >= 772 && condition < 800) {\n      return 'tstorm3';\n    } if (condition === 800) {\n      return 'sunny';\n    } if (condition >= 801 && condition <= 804) {\n      return 'cloudy2';\n    } if (condition >= 900 && condition <= 902) {\n      return 'tstorm3';\n    } if (condition === 903) {\n      return 'snow5';\n    } if (condition === 904) {\n      return 'sunny';\n    } if (condition >= 905 && condition <= 1000) {\n      return 'tstorm3';\n    }\n\n    return 'dunno';\n  }\n\n  getTemperature(inFahrenheit = true) {\n    const celcius = Math.round(parseFloat(this.mTemperature) - 273.15);\n    const fahrenheit = Math.round(((parseFloat(this.mTemperature) - 273.15) * 1.8) + 32);\n    if (inFahrenheit === true) { return `${fahrenheit}° F`; }\n    return `${celcius}° C`;\n  }\n\n  getCity() {\n    return this.mCity;\n  }\n\n  getIconName() {\n    return this.mIconName;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherDataModel);\n\n//# sourceURL=webpack:///./src/models/weathermodel.js?");

/***/ }),

/***/ "./src/views/weatherview.js":
/*!**********************************!*\
  !*** ./src/views/weatherview.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass WeatherDataView {\n  constructor(model) {\n    this.model = model;\n    this.errorBox = document.querySelector('#errorBox');\n    this.cityInput = document.querySelector('#cityInput');\n    this.cityLabel = document.querySelector('#city');\n    this.tempLabel = document.querySelector('#temp');\n    this.tempBtn = document.querySelector('#tempConvert');\n    this.weatherIcon = document.querySelector('#icon');\n    this.overlayElem = document.querySelector('#overlay');\n    this.loaderElem = document.querySelector('#loader');\n  }\n\n  toggleLoad() {\n    this.overlayElem.classList.toggle('hide');\n    this.loaderElem.classList.toggle('hide');\n  }\n  \n  getCity(){ return this.cityInput.value; }\n\n  renderError(err){\n    this.errorBox.innerHTML = err;\n  }\n  render(inFahrenheit = true) {\n    const model = this.model;\n    this.cityLabel.innerHTML = model.getCity();\n    if (inFahrenheit) {\n      this.tempLabel.innerHTML = model.getTemperature();\n      this.tempBtn.innerHTML = 'C';\n    } else {\n      this.tempLabel.innerHTML = model.getTemperature(false);\n      this.tempBtn.innerHTML = 'F';\n    }\n    this.weatherIcon.setAttribute('src', `../src/icons/${model.getIconName()}.png`);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherDataView);\n\n//# sourceURL=webpack:///./src/views/weatherview.js?");

/***/ })

/******/ });