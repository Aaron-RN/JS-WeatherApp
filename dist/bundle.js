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

/***/ "./node_modules/postcss-loader/src/index.js!./node_modules/postcss-loader/src/index.js!./src/css/main.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/postcss-loader/src!./node_modules/postcss-loader/src!./src/css/main.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html { box-sizing: border-box; }\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Used for Debugging purposes */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  transition-duration: 0.25s;\\r\\n}\\r\\nh1,h2,h3{margin: 0;}\\r\\nh2{font-size: 1.4em;}\\r\\n\\r\\nbody{font-size: 2em;}\\r\\n\\r\\n.container{\\r\\n  padding: 26px 36px;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"]{\\r\\n  outline: none;\\r\\n  border: 1px solid midnightblue;\\r\\n  border-radius: 8px;\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\n.active{\\r\\n  background-color: blue !important;\\r\\n}\\r\\n\\r\\n#tempConvert{\\r\\n  outline: none;\\r\\n  color: white;\\r\\n  font-size: 26px;\\r\\n  padding: 4px 10px;\\r\\n  border: 2px solid midnightblue;\\r\\n  border-radius: 32px;\\r\\n  background-color: orangered;\\r\\n  cursor: pointer;\\r\\n}\\r\\n#tempConvert:hover{\\r\\n  transform:scale(1.0.5);\\r\\n}\\r\\n\\r\\n.btn{\\r\\n  outline: none;\\r\\n  border: 2px solid midnightblue;\\r\\n  border-radius: 6px;\\r\\n  font-size: 20px;\\r\\n  cursor: pointer;\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\n.btn:hover{\\r\\n  border-color: goldenrod;\\r\\n  transform:scale(1.03);\\r\\n}\\r\\n\\r\\n.card{\\r\\n  position: relative;\\r\\n  border: 1px solid black;\\r\\n  box-shadow: 3px 5px 8px grey;\\r\\n  border-radius: 16px;\\r\\n  padding: 22px;\\r\\n  width: auto;\\r\\n  max-width: 300px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.text-center{  \\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.center{  \\r\\n  margin: 0 auto;\\r\\n}\\r\\n#errorBox{\\r\\n  color: #a22;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n#overlay{\\r\\n  z-index: 1;\\r\\n  position: absolute;\\r\\n  top: 0; right: 0; bottom: 0; left: 0;\\r\\n  background-color: rgba(0,0,0,0.6);\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n#loader {\\r\\n  position: absolute;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  z-index: 2;\\r\\n  width: 150px;\\r\\n  height: 150px;\\r\\n  margin: auto;\\r\\n  border: 16px solid #f3f3f3;\\r\\n  border-radius: 50%;\\r\\n  border-top: 16px solid #e52;\\r\\n  width: 100px;\\r\\n  height: 100px;\\r\\n  animation: spin 2s linear infinite;\\r\\n}\\r\\n\\r\\n.hide {visibility: hidden;}\\r\\n\\r\\n\\r\\n@keyframes spin {\\r\\n  0% { transform: rotate(0deg); }\\r\\n  100% { transform: rotate(360deg); }\\r\\n}\"\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/postcss-loader/src!./node_modules/postcss-loader/src");

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

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/postcss-loader/src!../../node_modules/postcss-loader/src!./main.css */ \"./node_modules/postcss-loader/src/index.js!./node_modules/postcss-loader/src/index.js!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_weathermodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/weathermodel */ \"./src/models/weathermodel.js\");\n\n\n\n// Create new weatherDataModel\n/* eslint-disable no-new */\nnew _models_weathermodel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Bahamas,the');\n/* eslint-enable no-new */\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/weathermodel.js":
/*!************************************!*\
  !*** ./src/models/weathermodel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_weatherview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/weatherview */ \"./src/views/weatherview.js\");\n\n\nconst APP_ID = '5c5f1a47d3dc27fe0dfca44e22ff94d2';\n\nclass WeatherDataModel {\n  constructor(city) {\n    this.appID = APP_ID;\n    this.view = new _views_weatherview__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.getWeatherByCity(city);\n  }\n\n  getWeatherByCity(city = this.view.cityInput, inFahrenheit = true) {\n    this.view.toggleLoad();\n    const urlToJSON = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appID}`;\n    fetch(urlToJSON, { mode: 'cors' })\n      .then((response) => {\n        if (!response.ok) {\n          this.view.toggleLoad();\n          throw new Error(\"Couldn't find city\");\n        }\n        return response.json();\n      })\n      .then(({ name, weather, main }) => {\n        this.mCity = name;\n        this.mCondition = weather[0].id;\n        this.mIconName = this.updateWeatherIcon();\n        const degCelcius = `${Math.round(parseFloat(main.temp) - 273.15)}° C`;\n        const degFahrenheit = `${Math.round(((parseFloat(main.temp) - 273.15) * 1.8) + 32)}° F`;\n        this.mTemperature = inFahrenheit ? degFahrenheit : degCelcius;\n        this.view.toggleLoad();\n        this.view.render(inFahrenheit);\n      })\n      .catch((error) => {\n        this.view.renderError(error);\n      });\n  }\n\n  updateWeatherIcon(condition = this.mCondition) {\n    if (condition >= 0 && condition < 300) {\n      return 'tstorm1';\n    } if (condition >= 300 && condition < 500) {\n      return 'light_rain';\n    } if (condition >= 500 && condition < 600) {\n      return 'shower3';\n    } if (condition >= 600 && condition <= 700) {\n      return 'snow4';\n    } if (condition >= 701 && condition <= 771) {\n      return 'fog';\n    } if (condition >= 772 && condition < 800) {\n      return 'tstorm3';\n    } if (condition === 800) {\n      return 'sunny';\n    } if (condition >= 801 && condition <= 804) {\n      return 'cloudy2';\n    } if (condition >= 900 && condition <= 902) {\n      return 'tstorm3';\n    } if (condition === 903) {\n      return 'snow5';\n    } if (condition === 904) {\n      return 'sunny';\n    } if (condition >= 905 && condition <= 1000) {\n      return 'tstorm3';\n    }\n\n    return 'dunno';\n  }\n\n  getTemperature() {\n    return this.mTemperature;\n  }\n\n  getCity() {\n    return this.mCity;\n  }\n\n  getIconName() {\n    return this.mIconName;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherDataModel);\n\n//# sourceURL=webpack:///./src/models/weathermodel.js?");

/***/ }),

/***/ "./src/views/weatherview.js":
/*!**********************************!*\
  !*** ./src/views/weatherview.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass WeatherDataView {\n  constructor(model) {\n    this.model = model;\n    this.errorBox = document.querySelector('#errorBox');\n    this.cityInput = document.querySelector('#cityInput');\n    this.cityLabel = document.querySelector('#city');\n    this.cityBtn = document.querySelector('#cityBtn');\n    this.tempLabel = document.querySelector('#temp');\n    this.tempBtn = document.querySelector('#tempConvert');\n    this.weatherIcon = document.querySelector('#icon');\n    this.overlayElem = document.querySelector('#overlay');\n    this.loaderElem = document.querySelector('#loader');\n\n    this.cityBtn.addEventListener('click', () => { this.setCity(); });\n    this.tempBtn.addEventListener('click', () => { this.toggleTempFormat(); });\n  }\n\n  toggleLoad() {\n    this.overlayElem.classList.toggle('hide');\n    this.loaderElem.classList.toggle('hide');\n  }\n\n  getCity() { return this.cityInput.value; }\n\n  setCity() {\n    const { tempBtn, cityInput } = this;\n    if (!cityInput.value) { this.renderError('City is invalid!'); return; }\n    this.renderError('');// render a empty error to clear innerHTML of element\n    const fahrenheit = tempBtn.classList.contains('active');\n    this.model.getWeatherByCity(cityInput.value, fahrenheit);\n  }\n\n  toggleTempFormat() {\n    const { tempBtn } = this;\n    tempBtn.classList.toggle('active');\n    const fahrenheit = tempBtn.classList.contains('active');\n    this.model.getWeatherByCity(this.model.getCity(), fahrenheit);\n  }\n\n  renderError(err) {\n    this.errorBox.textContent = err;\n  }\n\n  render(inFahrenheit = true) {\n    const { model } = this;\n    this.cityLabel.textContent = model.getCity();\n    if (inFahrenheit) {\n      this.tempLabel.textContent = model.getTemperature();\n      this.tempBtn.textContent = 'C';\n    } else {\n      this.tempLabel.textContent = model.getTemperature(false);\n      this.tempBtn.textContent = 'F';\n    }\n    this.weatherIcon.setAttribute('src', `../src/icons/${model.getIconName()}.png`);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherDataView);\n\n//# sourceURL=webpack:///./src/views/weatherview.js?");

/***/ })

/******/ });