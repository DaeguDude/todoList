/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/categorySelectionModal/css/categorySelectionModal.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/categorySelectionModal/css/categorySelectionModal.css ***!
  \*********************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #ffffff;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* categorySelectionModal */\n\n.categorySelection-modal {\n  height: 300px;\n  height: 300px;\n\n  max-width: 300px;\n  max-height: 350px;\n  border: 1px solid black;\n  border-radius: var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.categorySelection-modal-header {\n  height: 55px;\n  min-height: 55px;\n  /* Give padding to the just side */\n  padding: 0 var(--gutter);\n  background-color: var(--card-above-bg-color);\n  border-radius: var(--modal-border-radius) var(--modal-border-radius) 0 0;\n  color: var(--card-above-font-color);\n\n  display: flex;\n  align-items: center;\n}\n\n.categorySelection-modal-title {\n  font-weight: var(--font-weight-semi-bold);\n}\n\n.categorySelection-modal-main {\n  flex: 1 0 0;\n  background-color: var(--card-item-bg-color);\n  border-radius: 0 0 var(--modal-border-radius) var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n}\n\n.categorySelection-modal-items {\n  min-height: 44px;\n  padding: 0 var(--gutter);\n  background-color: var(--card-item-bg-color);\n\n  display: flex;\n  align-items: stretch;\n}\n\n.categorySelection-modal-items:hover,\n.categorySelection-modal-items:active {\n  background-color: var(--card-item-bg-highlighted-color);\n}\n\n.categorySelection-modal-items-title {\n  flex: 1 0 0;\n  color: var(--card-item-font-color);\n  font-size: var(--card-item-font-size);\n  border-bottom: 1px solid var(--border-bottom-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.categorySelection-modal .fa-check-circle {\n  border: none;\n  outline: none;\n  border-radius: var(--modal-border-radius);\n  background-color: var(--confirm-color); \n  font-size: 1.3em;\n}", "",{"version":3,"sources":["webpack://./src/categorySelectionModal/css/categorySelectionModal.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;EAC5B,uBAAuB;EACvB,uBAAuB;EACvB,8CAA8C;EAC9C,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,yCAAyC;EACzC,gCAAgC;EAChC,8BAA8B;EAC9B,0CAA0C;EAC1C,yCAAyC;EACzC,iCAAiC;EACjC,uCAAuC;EACvC,uBAAuB;EACvB,gCAAgC;EAChC,oBAAoB;EACpB,cAAc;;EAEd,2BAA2B;EAC3B,8BAA8B;EAC9B,+BAA+B;EAC/B,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA,oBAAoB;;AAEpB;EACE,iCAAiC;EACjC,qCAAqC;EACrC,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,6BAA6B;EAC7B,UAAU;EACV,0BAA0B;EAC1B,sCAAsC;AACxC;;AAEA;;EAEE,aAAa;EACb,6CAA6C;EAC7C,iDAAiD;EACjD,gCAAgC;AAClC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA,2BAA2B;;AAE3B;EACE,aAAa;EACb,aAAa;;EAEb,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;EACvB,yCAAyC;;EAEzC,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,kCAAkC;EAClC,wBAAwB;EACxB,4CAA4C;EAC5C,wEAAwE;EACxE,mCAAmC;;EAEnC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,2CAA2C;EAC3C,wEAAwE;;EAExE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,2CAA2C;;EAE3C,aAAa;EACb,oBAAoB;AACtB;;AAEA;;EAEE,uDAAuD;AACzD;;AAEA;EACE,WAAW;EACX,kCAAkC;EAClC,qCAAqC;EACrC,mDAAmD;EACnD,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yCAAyC;EACzC,sCAAsC;EACtC,gBAAgB;AAClB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #ffffff;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* categorySelectionModal */\n\n.categorySelection-modal {\n  height: 300px;\n  height: 300px;\n\n  max-width: 300px;\n  max-height: 350px;\n  border: 1px solid black;\n  border-radius: var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.categorySelection-modal-header {\n  height: 55px;\n  min-height: 55px;\n  /* Give padding to the just side */\n  padding: 0 var(--gutter);\n  background-color: var(--card-above-bg-color);\n  border-radius: var(--modal-border-radius) var(--modal-border-radius) 0 0;\n  color: var(--card-above-font-color);\n\n  display: flex;\n  align-items: center;\n}\n\n.categorySelection-modal-title {\n  font-weight: var(--font-weight-semi-bold);\n}\n\n.categorySelection-modal-main {\n  flex: 1 0 0;\n  background-color: var(--card-item-bg-color);\n  border-radius: 0 0 var(--modal-border-radius) var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n}\n\n.categorySelection-modal-items {\n  min-height: 44px;\n  padding: 0 var(--gutter);\n  background-color: var(--card-item-bg-color);\n\n  display: flex;\n  align-items: stretch;\n}\n\n.categorySelection-modal-items:hover,\n.categorySelection-modal-items:active {\n  background-color: var(--card-item-bg-highlighted-color);\n}\n\n.categorySelection-modal-items-title {\n  flex: 1 0 0;\n  color: var(--card-item-font-color);\n  font-size: var(--card-item-font-size);\n  border-bottom: 1px solid var(--border-bottom-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.categorySelection-modal .fa-check-circle {\n  border: none;\n  outline: none;\n  border-radius: var(--modal-border-radius);\n  background-color: var(--confirm-color); \n  font-size: 1.3em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/categorySelectionModal/css/categorySelectionModal.css":
/*!*******************************************************************!*\
  !*** ./src/categorySelectionModal/css/categorySelectionModal.css ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_categorySelectionModal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./categorySelectionModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/categorySelectionModal/css/categorySelectionModal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_categorySelectionModal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_categorySelectionModal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/categorySelectionModal/CategorySelectionModal.js":
/*!**************************************************************!*\
  !*** ./src/categorySelectionModal/CategorySelectionModal.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export CategorySelectionModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategorySelectionModal": () => /* binding */ CategorySelectionModal
/* harmony export */ });
/* harmony import */ var _elements_makeCategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/makeCategorySelectionModal.js */ "./src/categorySelectionModal/elements/makeCategorySelectionModal.js");


const CategorySelectionModal = () => {

  return {
    makeCategorySelectionModal: _elements_makeCategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_0__.makeCategorySelectionModal
  }
}



/***/ }),

/***/ "./src/categorySelectionModal/elements/individualCategory.js":
/*!*******************************************************************!*\
  !*** ./src/categorySelectionModal/elements/individualCategory.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export makeIndividualCategory [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeIndividualCategory": () => /* binding */ makeIndividualCategory
/* harmony export */ });

const makeIndividualCategory = (categoryTitle) => {
  // Make individual modal Item
  const modalItem = document.createElement('button');
  modalItem.classList.add('categorySelection-modal-items');
  
  const itemTitle = document.createElement('div');
  itemTitle.classList.add('categorySelection-modal-items-title');
  itemTitle.innerText = categoryTitle;
  
  modalItem.appendChild(itemTitle);

  modalItem.addEventListener('click', function selectCategory() {
    console.log('selected');
    console.log('createTodoModal: Change the category value');
    console.log('close modal');
  });

  return modalItem;
}



/***/ }),

/***/ "./src/categorySelectionModal/elements/makeCategorySelectionModal.js":
/*!***************************************************************************!*\
  !*** ./src/categorySelectionModal/elements/makeCategorySelectionModal.js ***!
  \***************************************************************************/
/*! namespace exports */
/*! export makeCategorySelectionModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCategorySelectionModal": () => /* binding */ makeCategorySelectionModal
/* harmony export */ });
/* harmony import */ var _css_categorySelectionModal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/categorySelectionModal.css */ "./src/categorySelectionModal/css/categorySelectionModal.css");
/* harmony import */ var _modalMain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalMain.js */ "./src/categorySelectionModal/elements/modalMain.js");
/* harmony import */ var _modalHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalHeader.js */ "./src/categorySelectionModal/elements/modalHeader.js");





const makeCategorySelectionModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('id', 'categorySelection');

  const categorySelectionModal = document.createElement('div');
  categorySelectionModal.classList.add('categorySelection-modal');
  categorySelectionModal.classList.add('modal-content');

  
  const categorySelectionModalMain = (0,_modalMain_js__WEBPACK_IMPORTED_MODULE_1__.makeModalMain)();
  const categorySelectionModalHeader = (0,_modalHeader_js__WEBPACK_IMPORTED_MODULE_2__.makeModalHeader)();
  
  categorySelectionModal.appendChild(categorySelectionModalHeader);
  categorySelectionModal.appendChild(categorySelectionModalMain);
  

  modal.appendChild(categorySelectionModal);
  
  return modal;
}




/***/ }),

/***/ "./src/categorySelectionModal/elements/modalHeader.js":
/*!************************************************************!*\
  !*** ./src/categorySelectionModal/elements/modalHeader.js ***!
  \************************************************************/
/*! namespace exports */
/*! export makeModalHeader [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeModalHeader": () => /* binding */ makeModalHeader
/* harmony export */ });
const makeModalTitle = () => {
  const categorySelectionModalTitle = document.createElement('div');
  categorySelectionModalTitle.classList.add('categorySelection-modal-title');
  categorySelectionModalTitle.innerText = 'Move to...';

  return categorySelectionModalTitle;
}

const makeModalHeader = () => {
  const categorySelectionModalHeader = document.createElement('div');
  categorySelectionModalHeader.classList.add('categorySelection-modal-header');

  categorySelectionModalHeader.appendChild(makeModalTitle());

  return categorySelectionModalHeader;
}




  
  


/***/ }),

/***/ "./src/categorySelectionModal/elements/modalMain.js":
/*!**********************************************************!*\
  !*** ./src/categorySelectionModal/elements/modalMain.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export makeModalMain [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeModalMain": () => /* binding */ makeModalMain
/* harmony export */ });
/* harmony import */ var _individualCategory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./individualCategory.js */ "./src/categorySelectionModal/elements/individualCategory.js");


const makeModalMain = () => {
  const categorySelectionModalMain = document.createElement('div');
  categorySelectionModalMain.classList.add('categorySelection-modal-main');


  // Get categories from Todolist and add it to modal
  const categoryList = ['The Odin Project', 'GYM', 'School', 'WORK', 'a', 'b', 'c'];
  categoryList.forEach(category => {
    const item = (0,_individualCategory_js__WEBPACK_IMPORTED_MODULE_0__.makeIndividualCategory)(category);
    categorySelectionModalMain.appendChild(item);
  })


  return categorySelectionModalMain;  
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categorySelectionModal_CategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorySelectionModal/CategorySelectionModal.js */ "./src/categorySelectionModal/CategorySelectionModal.js");


const body = document.querySelector('body');
body.appendChild((0,_categorySelectionModal_CategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_0__.CategorySelectionModal)().makeCategorySelectionModal());
console.log((0,_categorySelectionModal_CategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_0__.CategorySelectionModal)());
















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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL2Nzcy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL2Nzcy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNzcz9hMjE3Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwvQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL2VsZW1lbnRzL2luZGl2aWR1YWxDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL2VsZW1lbnRzL21ha2VDYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwvZWxlbWVudHMvbW9kYWxIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9lbGVtZW50cy9tb2RhbE1haW4uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsMkJBQTJCLEdBQUcsV0FBVyw0QkFBNEIsNEJBQTRCLDRCQUE0Qiw0QkFBNEIsK0JBQStCLDhCQUE4Qiw4QkFBOEIsaUNBQWlDLDRCQUE0Qiw0QkFBNEIsbURBQW1ELGdDQUFnQyxnQ0FBZ0MsOEJBQThCLGtDQUFrQyw4Q0FBOEMscUNBQXFDLG1DQUFtQywrQ0FBK0MsOENBQThDLHNDQUFzQyw0Q0FBNEMsNEJBQTRCLHFDQUFxQyw0Q0FBNEMscUVBQXFFLG9DQUFvQyxnQ0FBZ0MsNkJBQTZCLEdBQUcsa0NBQWtDLG9CQUFvQixrQkFBa0IsaUJBQWlCLEdBQUcsY0FBYyxpQkFBaUIsaUJBQWlCLEdBQUcsMkNBQTJDLHNDQUFzQywwQ0FBMEMsbUNBQW1DLGdEQUFnRCxHQUFHLGdCQUFnQixrQ0FBa0MsZUFBZSwrQkFBK0IsMkNBQTJDLEdBQUcseUNBQXlDLGtCQUFrQixrREFBa0Qsc0RBQXNELHFDQUFxQyxHQUFHLHNCQUFzQixnREFBZ0QsR0FBRyw0QkFBNEIsc0RBQXNELEdBQUcsOERBQThELGtCQUFrQixrQkFBa0IsdUJBQXVCLHNCQUFzQiw0QkFBNEIsOENBQThDLG9CQUFvQiwyQkFBMkIsR0FB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QTs7QUFFQTtBQUNBOztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJzQzs7QUFFakU7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOEVBQXNCO0FBQ3ZDO0FBQ0EsR0FBRzs7O0FBR0gsb0M7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQm1FOztBQUU1RjtBQUNBLGlCQUFpQix5R0FBc0I7QUFDdkMsWUFBWSx5R0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0psQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbCB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG5cXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBtYXgtaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWhlYWRlciB7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgLyogR2l2ZSBwYWRkaW5nIHRvIHRoZSBqdXN0IHNpZGUgKi9cXG4gIHBhZGRpbmc6IDAgdmFyKC0tZ3V0dGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgMCAwO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtZm9udC1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pLWJvbGQpO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtbWFpbiB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zIHtcXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XFxuICBwYWRkaW5nOiAwIHZhcigtLWd1dHRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXM6aG92ZXIsXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3IpO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXMtdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuICBjb2xvcjogdmFyKC0tY2FyZC1pdGVtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYXJkLWl0ZW0tZm9udC1zaXplKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItYm90dG9tLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwgLmZhLWNoZWNrLWNpcmNsZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb25maXJtLWNvbG9yKTsgXFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9jc3MvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUNBQXlDO0VBQ3pDLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsY0FBYzs7RUFFZCwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUEsMkJBQTJCOztBQUUzQjtFQUNFLGFBQWE7RUFDYixhQUFhOztFQUViLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHlDQUF5Qzs7RUFFekMsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4Qiw0Q0FBNEM7RUFDNUMsd0VBQXdFO0VBQ3hFLG1DQUFtQzs7RUFFbkMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0Msd0VBQXdFOztFQUV4RSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsMkNBQTJDOztFQUUzQyxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLG1EQUFtRDtFQUNuRCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLHNDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlVG9kb01vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG5cXG4gIC8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG4gIC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjY2NjYztcXG4gIC0tY2FyZC1pdGVtLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtaXRlbS1mb250LXNpemU6IDE0cHg7XFxuICAtLWNvbmZpcm0tY29sb3I6ICMyM2NlODg7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuXFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgbWF4LWhlaWdodDogMzUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1oZWFkZXIge1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgbWluLWhlaWdodDogNTVweDtcXG4gIC8qIEdpdmUgcGFkZGluZyB0byB0aGUganVzdCBzaWRlICovXFxuICBwYWRkaW5nOiAwIHZhcigtLWd1dHRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIDAgMDtcXG4gIGNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWZvbnQtY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC10aXRsZSB7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkKTtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtcyB7XFxuICBtaW4taGVpZ2h0OiA0NHB4O1xcbiAgcGFkZGluZzogMCB2YXIoLS1ndXR0ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zOmhvdmVyLFxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtczphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yKTtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zLXRpdGxlIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtaXRlbS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC1pdGVtLWZvbnQtc2l6ZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWJvdHRvbS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsIC5mYS1jaGVjay1jaXJjbGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29uZmlybS1jb2xvcik7IFxcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBtYWtlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCB9IGZyb20gJy4vZWxlbWVudHMvbWFrZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWwuanMnO1xuXG5jb25zdCBDYXRlZ29yeVNlbGVjdGlvbk1vZGFsID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgbWFrZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWxcbiAgfVxufVxuXG5leHBvcnQgeyBDYXRlZ29yeVNlbGVjdGlvbk1vZGFsIH07IiwiXG5jb25zdCBtYWtlSW5kaXZpZHVhbENhdGVnb3J5ID0gKGNhdGVnb3J5VGl0bGUpID0+IHtcbiAgLy8gTWFrZSBpbmRpdmlkdWFsIG1vZGFsIEl0ZW1cbiAgY29uc3QgbW9kYWxJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1vZGFsSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtcycpO1xuICBcbiAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtcy10aXRsZScpO1xuICBpdGVtVGl0bGUuaW5uZXJUZXh0ID0gY2F0ZWdvcnlUaXRsZTtcbiAgXG4gIG1vZGFsSXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuXG4gIG1vZGFsSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIHNlbGVjdENhdGVnb3J5KCkge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCcpO1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGVUb2RvTW9kYWw6IENoYW5nZSB0aGUgY2F0ZWdvcnkgdmFsdWUnKTtcbiAgICBjb25zb2xlLmxvZygnY2xvc2UgbW9kYWwnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1vZGFsSXRlbTtcbn1cblxuZXhwb3J0IHsgbWFrZUluZGl2aWR1YWxDYXRlZ29yeSB9OyIsImltcG9ydCAnLi4vY3NzL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY3NzJ1xuXG5pbXBvcnQgeyBtYWtlTW9kYWxNYWluIH0gZnJvbSAnLi9tb2RhbE1haW4uanMnO1xuaW1wb3J0IHsgbWFrZU1vZGFsSGVhZGVyIH0gZnJvbSAnLi9tb2RhbEhlYWRlci5qcyc7XG5cbmNvbnN0IG1ha2VDYXRlZ29yeVNlbGVjdGlvbk1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhdGVnb3J5U2VsZWN0aW9uJyk7XG5cbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsJyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuXG4gIFxuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbiA9IG1ha2VNb2RhbE1haW4oKTtcbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEhlYWRlciA9IG1ha2VNb2RhbEhlYWRlcigpO1xuICBcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdGlvbk1vZGFsSGVhZGVyKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbik7XG4gIFxuXG4gIG1vZGFsLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwpO1xuICBcbiAgcmV0dXJuIG1vZGFsO1xufVxuXG5leHBvcnQgeyBtYWtlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCB9O1xuIiwiY29uc3QgbWFrZU1vZGFsVGl0bGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtdGl0bGUnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbFRpdGxlLmlubmVyVGV4dCA9ICdNb3ZlIHRvLi4uJztcblxuICByZXR1cm4gY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbFRpdGxlO1xufVxuXG5jb25zdCBtYWtlTW9kYWxIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1oZWFkZXInKTtcblxuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1ha2VNb2RhbFRpdGxlKCkpO1xuXG4gIHJldHVybiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsSGVhZGVyO1xufVxuXG5leHBvcnQgeyBtYWtlTW9kYWxIZWFkZXIgfTtcblxuXG4gIFxuICBcbiIsImltcG9ydCB7IG1ha2VJbmRpdmlkdWFsQ2F0ZWdvcnkgfSBmcm9tICcuL2luZGl2aWR1YWxDYXRlZ29yeS5qcyc7XG5cbmNvbnN0IG1ha2VNb2RhbE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLW1haW4nKTtcblxuXG4gIC8vIEdldCBjYXRlZ29yaWVzIGZyb20gVG9kb2xpc3QgYW5kIGFkZCBpdCB0byBtb2RhbFxuICBjb25zdCBjYXRlZ29yeUxpc3QgPSBbJ1RoZSBPZGluIFByb2plY3QnLCAnR1lNJywgJ1NjaG9vbCcsICdXT1JLJywgJ2EnLCAnYicsICdjJ107XG4gIGNhdGVnb3J5TGlzdC5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICBjb25zdCBpdGVtID0gbWFrZUluZGl2aWR1YWxDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbE1haW4uYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH0pXG5cblxuICByZXR1cm4gY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbE1haW47ICBcbn1cblxuZXhwb3J0IHsgbWFrZU1vZGFsTWFpbiB9O1xuIiwiaW1wb3J0IHsgQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCB9IGZyb20gJy4vY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9DYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmpzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmJvZHkuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCgpLm1ha2VDYXRlZ29yeVNlbGVjdGlvbk1vZGFsKCkpO1xuY29uc29sZS5sb2coQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCgpKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9