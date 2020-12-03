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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/createListModal/css/createListModal.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/createListModal/css/createListModal.css ***!
  \*******************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #ffffff;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/*  */\n\n.createList-modal {\n  width: 400px;\n  height: 165px;\n  \n  /* TO BE REMOVED */\n  background-color: var(--card-item-bg-color);\n  border: 1px solid black;\n  border-radius: var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.createList-modal-content-container {\n  height: 112px;\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.createList-modal-LabelText-container {\n  height: 20px;\n}\n\n.createList-modal-textField-container {\n  \n}\n\n.createList-modal-button-container {\n  display: flex;\n  flex: 1 0 0 ;\n}\n\n.createList-buttons {\n  flex: 1 0 0;\n  background-color: var(--card-above-bg-color);\n  font-weight: var(--font-weight-medium);\n  font-size: var(--default-font-size);\n  color: var(--card-above-font-color);\n  border: none;\n  border-radius: 0;\n\n  /* To center things */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.createList-buttons:hover, \n.createList-buttons:focus {\n  background-color: var(--card-above-bg-color-highlighted);\n}\n\nbutton[data-btn=\"cancel\"] {\n  border-radius: 0 0 0 var(--modal-border-radius);\n  border-right: 0.5px solid var(--button-separation-border-color);\n}\n\nbutton[data-btn=\"create\"] {\n  border-radius: 0 0 var(--modal-border-radius) 0; \n  color: var(--action-color);\n}", "",{"version":3,"sources":["webpack://./src/createListModal/css/createListModal.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;EAC5B,uBAAuB;EACvB,uBAAuB;EACvB,8CAA8C;EAC9C,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,gCAAgC;EAChC,8BAA8B;EAC9B,0CAA0C;EAC1C,yCAAyC;EACzC,iCAAiC;EACjC,uCAAuC;EACvC,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA,oBAAoB;;AAEpB;EACE,iCAAiC;EACjC,qCAAqC;EACrC,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,6BAA6B;EAC7B,UAAU;EACV,0BAA0B;EAC1B,sCAAsC;AACxC;;AAEA;;EAEE,aAAa;EACb,6CAA6C;EAC7C,iDAAiD;EACjD,gCAAgC;AAClC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA,KAAK;;AAEL;EACE,YAAY;EACZ,aAAa;;EAEb,kBAAkB;EAClB,2CAA2C;EAC3C,uBAAuB;EACvB,yCAAyC;;EAEzC,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;;EAEb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;;AAEA;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,WAAW;EACX,4CAA4C;EAC5C,sCAAsC;EACtC,mCAAmC;EACnC,mCAAmC;EACnC,YAAY;EACZ,gBAAgB;;EAEhB,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;EAEE,wDAAwD;AAC1D;;AAEA;EACE,+CAA+C;EAC/C,+DAA+D;AACjE;;AAEA;EACE,+CAA+C;EAC/C,0BAA0B;AAC5B","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #ffffff;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/*  */\n\n.createList-modal {\n  width: 400px;\n  height: 165px;\n  \n  /* TO BE REMOVED */\n  background-color: var(--card-item-bg-color);\n  border: 1px solid black;\n  border-radius: var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.createList-modal-content-container {\n  height: 112px;\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.createList-modal-LabelText-container {\n  height: 20px;\n}\n\n.createList-modal-textField-container {\n  \n}\n\n.createList-modal-button-container {\n  display: flex;\n  flex: 1 0 0 ;\n}\n\n.createList-buttons {\n  flex: 1 0 0;\n  background-color: var(--card-above-bg-color);\n  font-weight: var(--font-weight-medium);\n  font-size: var(--default-font-size);\n  color: var(--card-above-font-color);\n  border: none;\n  border-radius: 0;\n\n  /* To center things */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.createList-buttons:hover, \n.createList-buttons:focus {\n  background-color: var(--card-above-bg-color-highlighted);\n}\n\nbutton[data-btn=\"cancel\"] {\n  border-radius: 0 0 0 var(--modal-border-radius);\n  border-right: 0.5px solid var(--button-separation-border-color);\n}\n\nbutton[data-btn=\"create\"] {\n  border-radius: 0 0 var(--modal-border-radius) 0; \n  color: var(--action-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/createTodoModal/css/createTodoModal.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/createTodoModal/css/createTodoModal.css ***!
  \*******************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #ffffff;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createListModal */\n  --gutter: 16px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n.createTodo-modal {\n  height: 450px;\n  width: 450px;\n  border: 1px solid black;\n  border-radius: var(--modal-border-radius);\n  background-color: var(--card-item-bg-color);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.createTodo-modal-todoinfo-container {\n  flex: 1 0 0;\n  padding: var(--gutter);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.todoinfo-container-title {\n  flex: 1 0 0;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.todoinfo-container-description {\n  flex: 4 0 0;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.todoinfo-container-category {\n  flex: 1 0 0;\n}\n\n.todoinfo-category-selectBtn {\n  background-color: inherit;\n  color: var(--action-color);\n  padding: 0;\n}\n\n.createTodo-modal-addTodoBtn-container {\n  flex: 0 0 54px;\n\n  display: flex;\n}\n\n.createTodo-buttons {\n  flex: 1 0 0;\n\n  border-radius: 0 0 var(--modal-border-radius) var(--modal-border-radius); \n  background-color: var(--card-above-bg-color);\n  /* color: var(--color-text-3); */\n  color: var(--action-color);\n}\n\n.createTodo-buttons:hover,\n.createTodo-buttons:active {\n  background-color: var(--card-above-bg-color-highlighted);\n}", "",{"version":3,"sources":["webpack://./src/createTodoModal/css/createTodoModal.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;EAC5B,uBAAuB;EACvB,uBAAuB;EACvB,8CAA8C;EAC9C,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,gCAAgC;EAChC,8BAA8B;EAC9B,0CAA0C;EAC1C,yCAAyC;EACzC,iCAAiC;EACjC,uCAAuC;EACvC,uBAAuB;EACvB,gCAAgC;EAChC,oBAAoB;EACpB,cAAc;AAChB;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA,oBAAoB;;AAEpB;EACE,iCAAiC;EACjC,qCAAqC;EACrC,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,6BAA6B;EAC7B,UAAU;EACV,0BAA0B;EAC1B,sCAAsC;AACxC;;AAEA;;EAEE,aAAa;EACb,6CAA6C;EAC7C,iDAAiD;EACjD,gCAAgC;AAClC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,yCAAyC;EACzC,2CAA2C;;EAE3C,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,sBAAsB;;EAEtB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,cAAc;;EAEd,aAAa;AACf;;AAEA;EACE,WAAW;;EAEX,wEAAwE;EACxE,4CAA4C;EAC5C,gCAAgC;EAChC,0BAA0B;AAC5B;;AAEA;;EAEE,wDAAwD;AAC1D","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #ffffff;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createListModal */\n  --gutter: 16px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n.createTodo-modal {\n  height: 450px;\n  width: 450px;\n  border: 1px solid black;\n  border-radius: var(--modal-border-radius);\n  background-color: var(--card-item-bg-color);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.createTodo-modal-todoinfo-container {\n  flex: 1 0 0;\n  padding: var(--gutter);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.todoinfo-container-title {\n  flex: 1 0 0;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.todoinfo-container-description {\n  flex: 4 0 0;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.todoinfo-container-category {\n  flex: 1 0 0;\n}\n\n.todoinfo-category-selectBtn {\n  background-color: inherit;\n  color: var(--action-color);\n  padding: 0;\n}\n\n.createTodo-modal-addTodoBtn-container {\n  flex: 0 0 54px;\n\n  display: flex;\n}\n\n.createTodo-buttons {\n  flex: 1 0 0;\n\n  border-radius: 0 0 var(--modal-border-radius) var(--modal-border-radius); \n  background-color: var(--card-above-bg-color);\n  /* color: var(--color-text-3); */\n  color: var(--action-color);\n}\n\n.createTodo-buttons:hover,\n.createTodo-buttons:active {\n  background-color: var(--card-above-bg-color-highlighted);\n}"],"sourceRoot":""}]);
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

/***/ "./src/createListModal/css/createListModal.css":
/*!*****************************************************!*\
  !*** ./src/createListModal/css/createListModal.css ***!
  \*****************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_createListModal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./createListModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/createListModal/css/createListModal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_createListModal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_createListModal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/createTodoModal/css/createTodoModal.css":
/*!*****************************************************!*\
  !*** ./src/createTodoModal/css/createTodoModal.css ***!
  \*****************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_createTodoModal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./createTodoModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/createTodoModal/css/createTodoModal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_createTodoModal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_createTodoModal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./src/Todo/todo.js":
/*!**************************!*\
  !*** ./src/Todo/todo.js ***!
  \**************************/
/*! namespace exports */
/*! export Todo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => /* binding */ Todo
/* harmony export */ });
const Todo = (title, description, category) => {
  let _title = title;
  let _description = description;
  let _category = category;
  let _dueDate = '';
  let _createdDate = '';
  let _priority = '';
  let _completed = false;

  // ------------------------------------------
  // SET
  // ------------------------------------------
  const setTitle = (title) => {
    _title = title;
  }

  const setDescription = (description) => {
    _description = description
  }
  
  const setCategory = (category) => {
    _category = category;
  }

  const setDueDate = (dueDate) => {
    _dueDate = dueDate;
  }

  const setCreatedDate = (createdDate) => {
    _createdDate = createdDate;
  }

  const setPriority = (priority) => {
    _priority = priority;
  }


  // ------------------------------------------
  // GET
  // ------------------------------------------
  const getTitle = () => {
    return _title;
  }

  const getDescription = () => {
    return _description;
  }
  
  const getCategory = () => {
    return _category;
  }

  const getDueDate = () => {
    return _dueDate;
  }

  const getCreatedDate = () => {
    return _createdDate;
  }

  const getPriority = () => {
    return _priority;
  }

  // ------------------------------------------
  // is(boolean)
  // ------------------------------------------
  const isCompleted = () => {
    return _completed;
  }

  // ------------------------------------------
  // Completed
  // ------------------------------------------
  const markCompleted = () => {
    _completed = true;
  }

  const undoCompleted = () => {
    _completed = false;
  } 

  
  return {
    setTitle, setDescription, setCategory, setDueDate, setCreatedDate, setPriority,
    getTitle, getDescription, getCategory, getCreatedDate, getPriority, getDueDate,
    isCompleted, markCompleted, undoCompleted
  }
}



/***/ }),

/***/ "./src/TodoList/getPriorityAsNumber.js":
/*!*********************************************!*\
  !*** ./src/TodoList/getPriorityAsNumber.js ***!
  \*********************************************/
/*! namespace exports */
/*! export getPriorityAsNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPriorityAsNumber": () => /* binding */ getPriorityAsNumber
/* harmony export */ });
const getPriorityAsNumber = (priority) => {
  switch (priority) {
    case "important":
      priority = 1;
      break;
    case "high":
      priority = 2;
      break;
    case "middle":
      priority = 3;
      break;
    case "low":
      priority = 4;
      break;
  }

  return priority;
}



/***/ }),

/***/ "./src/TodoList/isSameTodo.js":
/*!************************************!*\
  !*** ./src/TodoList/isSameTodo.js ***!
  \************************************/
/*! namespace exports */
/*! export isSameObject [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSameObject": () => /* binding */ isSameObject
/* harmony export */ });
const isSameObject = (objectOne, objectTwo) => {
  return Object.is(objectOne, objectTwo);
}



/***/ }),

/***/ "./src/TodoList/todolist.js":
/*!**********************************!*\
  !*** ./src/TodoList/todolist.js ***!
  \**********************************/
/*! namespace exports */
/*! export todoList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoList": () => /* binding */ todoList
/* harmony export */ });
/* harmony import */ var _getPriorityAsNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPriorityAsNumber.js */ "./src/TodoList/getPriorityAsNumber.js");
/* harmony import */ var _isSameTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSameTodo.js */ "./src/TodoList/isSameTodo.js");



const TodoList = () => {

  const _todos = {
    default: [],
  };

  // Add Todo
  const addTodo = (todo) => {
    let category = todo.getCategory();
    
    // if category doesn't exist, add one
    if (!(category in _todos)) {
      addNewCategory(category);
    } 
    
    _todos[category].push(todo);
  }

  const addNewCategory = (category) => {
    _todos[category] = [];
  }

  const deleteTodo = (todoToFind) => {
    const categoryOfTodo = todoToFind.getCategory();
    const todos = getTodosByCategory(categoryOfTodo);

    for (let i = 0; i < todos.length; i++) {
      const currentTodo = todos[i];
      if ((0,_isSameTodo_js__WEBPACK_IMPORTED_MODULE_1__.isSameObject)(currentTodo, todoToFind)) {
        todos.splice(i, 1);;
        return;
      }
    }
  }

  const deleteCategory = (category) => {
    return delete _todos[category];
  }

  const getAllTodos = () => {
    const allTodos = [];
    for (const [category, todos] of Object.entries(_todos)) {
      todos.forEach(todo => {
        allTodos.push(todo);
      })
    }

    return allTodos;
  }

  const getTodosByCategory = (category) => {
    return _todos[category];
  }

  const getAllCategories = () => {
    const categories = Object.keys(_todos);
    return categories;
  }

  const sortTodosByDueDate = (todos) => {
    todos.sort((todoOne, todoTwo) => {
      const todoOneDueDate = todoOne.getDueDate();
      const todoTwoDueDate = todoTwo.getDueDate();
      
      return Number(todoOneDueDate) - Number(todoTwoDueDate);
    });
  }

  const sortTodosByPriority = (todos) => {
    todos.sort(function comparePriority(todoOne, todoTwo) {
      let todoOnePriority = todoOne.getPriority();
      let todoTwoPriority = todoTwo.getPriority();

      todoOnePriority = (0,_getPriorityAsNumber_js__WEBPACK_IMPORTED_MODULE_0__.getPriorityAsNumber)(todoOnePriority);
      todoTwoPriority = (0,_getPriorityAsNumber_js__WEBPACK_IMPORTED_MODULE_0__.getPriorityAsNumber)(todoTwoPriority);
      
      return todoOnePriority - todoTwoPriority;
    });
  }

  const sortTodosByCreatedDate = (todos) => {
    todos.sort((todoOne, todoTwo) => {
      const todoOneCreatedDate = todoOne.getCreatedDate();
      const todoTwoCreatedDate = todoTwo.getCreatedDate();
      
      return Number(todoOneCreatedDate) - Number(todoTwoCreatedDate);
    });
  }


  return {
    _todos,
    addTodo, addNewCategory, deleteTodo, deleteCategory,
    getTodosByCategory, getAllTodos, getAllCategories,
    sortTodosByDueDate, sortTodosByCreatedDate, sortTodosByPriority
  }
}

const todoList = TodoList();



/***/ }),

/***/ "./src/categorySelectionModal/CategorySelectionModal.js":
/*!**************************************************************!*\
  !*** ./src/categorySelectionModal/CategorySelectionModal.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export categorySelectionModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categorySelectionModal": () => /* binding */ categorySelectionModal
/* harmony export */ });
/* harmony import */ var _elements_makeCategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/makeCategorySelectionModal.js */ "./src/categorySelectionModal/elements/makeCategorySelectionModal.js");
/* harmony import */ var _startInitialSetup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startInitialSetup.js */ "./src/categorySelectionModal/startInitialSetup.js");



// categorySelectionModal factory function
const CategorySelectionModal = () => {

  return {
    makeCategorySelectionModal: _elements_makeCategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_0__.makeCategorySelectionModal,
    startInitialSetup: _startInitialSetup_js__WEBPACK_IMPORTED_MODULE_1__.startInitialSetup
  }
}

const categorySelectionModal = CategorySelectionModal();



/***/ }),

/***/ "./src/categorySelectionModal/changeCategory.js":
/*!******************************************************!*\
  !*** ./src/categorySelectionModal/changeCategory.js ***!
  \******************************************************/
/*! namespace exports */
/*! export changeCategory [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeCategory": () => /* binding */ changeCategory
/* harmony export */ });
/* harmony import */ var _createTodoModal_CreateTodoModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createTodoModal/CreateTodoModal.js */ "./src/createTodoModal/CreateTodoModal.js");


// To change the category
const changeCategory = (category) => {
  _createTodoModal_CreateTodoModal_js__WEBPACK_IMPORTED_MODULE_0__.createTodoModal.changeCategory(category);
}



/***/ }),

/***/ "./src/categorySelectionModal/closeModal.js":
/*!**************************************************!*\
  !*** ./src/categorySelectionModal/closeModal.js ***!
  \**************************************************/
/*! namespace exports */
/*! export closeModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isOutsideModalContentClicked [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => /* binding */ closeModal,
/* harmony export */   "isOutsideModalContentClicked": () => /* binding */ isOutsideModalContentClicked
/* harmony export */ });
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElements.js */ "./src/categorySelectionModal/getElements.js");


// Check if outside of modal is clicked.
const isOutsideModalContentClicked = (event) => {
  const clickedTarget = event.target;
  const modal = _getElements_js__WEBPACK_IMPORTED_MODULE_0__.get.modal();
  
  if (clickedTarget === modal) {
    return true;
  }

  return false;
}

// close modal
const closeModal = () => {
  const modal = _getElements_js__WEBPACK_IMPORTED_MODULE_0__.get.modal();
  modal.remove();
}





/***/ }),

/***/ "./src/categorySelectionModal/elements/individualCategory.js":
/*!*******************************************************************!*\
  !*** ./src/categorySelectionModal/elements/individualCategory.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export makeIndividualCategory [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeIndividualCategory": () => /* binding */ makeIndividualCategory
/* harmony export */ });
/* harmony import */ var _closeModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../closeModal.js */ "./src/categorySelectionModal/closeModal.js");


// Makes individual category item
const makeIndividualCategory = (categoryTitle) => {
  const modalItem = document.createElement('button');
  modalItem.classList.add('categorySelection-modal-items');
  
  const itemTitle = document.createElement('div');
  itemTitle.classList.add('categorySelection-modal-items-title');
  itemTitle.innerText = categoryTitle;
  
  modalItem.appendChild(itemTitle);

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





// Make category selection modal HTML element
const makeCategorySelectionModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('id', 'categorySelection');

  const categorySelectionModal = document.createElement('div');
  categorySelectionModal.classList.add('categorySelection-modal');
  categorySelectionModal.classList.add('modal-content');

  categorySelectionModal.appendChild((0,_modalHeader_js__WEBPACK_IMPORTED_MODULE_2__.makeModalHeader)());
  categorySelectionModal.appendChild((0,_modalMain_js__WEBPACK_IMPORTED_MODULE_1__.makeModalMain)());
  
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
// makes modal title HTML element
const makeModalTitle = () => {
  const categorySelectionModalTitle = document.createElement('div');
  categorySelectionModalTitle.classList.add('categorySelection-modal-title');
  categorySelectionModalTitle.innerText = 'Move to...';

  return categorySelectionModalTitle;
}

// makes modal header HTML element
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


// makes modal main
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

/***/ "./src/categorySelectionModal/getElements.js":
/*!***************************************************!*\
  !*** ./src/categorySelectionModal/getElements.js ***!
  \***************************************************/
/*! namespace exports */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => /* binding */ get
/* harmony export */ });
// get HTML elements
const Get = () => {

  const modal = () => {
    return document.querySelector('#categorySelection');
  }

  const modalCategoryItems = () => {
    return document.querySelectorAll('.categorySelection-modal-items');
  }

  return {
    modal,
    modalCategoryItems
  }
}
  
const get = Get();
  



/***/ }),

/***/ "./src/categorySelectionModal/startInitialSetup.js":
/*!*********************************************************!*\
  !*** ./src/categorySelectionModal/startInitialSetup.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export startInitialSetup [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startInitialSetup": () => /* binding */ startInitialSetup
/* harmony export */ });
/* harmony import */ var _closeModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeModal.js */ "./src/categorySelectionModal/closeModal.js");
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getElements.js */ "./src/categorySelectionModal/getElements.js");
/* harmony import */ var _changeCategory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeCategory.js */ "./src/categorySelectionModal/changeCategory.js");




// Receive event object and return the innertext value of it.
const getCategoryTitle = (e) => {
  return e.target.innerText;
}

// enable category items to change category
const enableCategoryItemsToChangeCategory = () => {
  const categoryItems = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.modalCategoryItems();

  categoryItems.forEach(categoryItem => {
    categoryItem.addEventListener('click', (e) => {
      (0,_changeCategory_js__WEBPACK_IMPORTED_MODULE_2__.changeCategory)(getCategoryTitle(e));
    })
  });
}

// enable category items to close modal
const enableCategoryItemsToCloseModal = () => {
  const categoryItems = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.modalCategoryItems();

  categoryItems.forEach(categoryItem => {
    categoryItem.addEventListener('click', _closeModal_js__WEBPACK_IMPORTED_MODULE_0__.closeModal);
  });
}

// To close the modal when outside modal is clicked.
const enableWindowToCloseModal = () => {
  window.addEventListener('click', (event) => {
    if ((0,_closeModal_js__WEBPACK_IMPORTED_MODULE_0__.isOutsideModalContentClicked)(event)) {
      ;(0,_closeModal_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
    }
  }, { once: true });
}

// Start all setups needed
const startInitialSetup = () => {
  enableWindowToCloseModal();
  enableCategoryItemsToChangeCategory();
  enableCategoryItemsToCloseModal();
}



/***/ }),

/***/ "./src/createListModal/CreateListModal.js":
/*!************************************************!*\
  !*** ./src/createListModal/CreateListModal.js ***!
  \************************************************/
/*! namespace exports */
/*! export createListModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createListModal": () => /* binding */ createListModal
/* harmony export */ });
/* harmony import */ var _css_createListModal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/createListModal.css */ "./src/createListModal/css/createListModal.css");
/* harmony import */ var _startInitialSetup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startInitialSetup.js */ "./src/createListModal/startInitialSetup.js");
/* harmony import */ var _elements_makeCreateListModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/makeCreateListModal.js */ "./src/createListModal/elements/makeCreateListModal.js");
/* harmony import */ var _addCategory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addCategory.js */ "./src/createListModal/addCategory.js");
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getElements.js */ "./src/createListModal/getElements.js");







const CreateListModal = () => {  

  return {
    makeCreateListModal: _elements_makeCreateListModal_js__WEBPACK_IMPORTED_MODULE_2__.makeCreateListModal,
    startInitialSetup: _startInitialSetup_js__WEBPACK_IMPORTED_MODULE_1__.startInitialSetup,
  }
}

const createListModal = CreateListModal();




/***/ }),

/***/ "./src/createListModal/addCategory.js":
/*!********************************************!*\
  !*** ./src/createListModal/addCategory.js ***!
  \********************************************/
/*! namespace exports */
/*! export addCategory [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCategory": () => /* binding */ addCategory
/* harmony export */ });
const addCategory = () => {
  console.log('Make category: TODOLIST');
  console.log('Make category: DISPLAY');
}



/***/ }),

/***/ "./src/createListModal/closeModal.js":
/*!*******************************************!*\
  !*** ./src/createListModal/closeModal.js ***!
  \*******************************************/
/*! namespace exports */
/*! export closeModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isOutsideModalContentClicked [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => /* binding */ closeModal,
/* harmony export */   "isOutsideModalContentClicked": () => /* binding */ isOutsideModalContentClicked
/* harmony export */ });
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElements.js */ "./src/createListModal/getElements.js");


const isOutsideModalContentClicked = (event) => {
  const clickedTarget = event.target;
  const modal = _getElements_js__WEBPACK_IMPORTED_MODULE_0__.get.modal();
  
  if (clickedTarget === modal) {
    return true;
  }

  return false;
}

const closeModal = () => {
  const modal = _getElements_js__WEBPACK_IMPORTED_MODULE_0__.get.modal();
  modal.remove();
}



/***/ }),

/***/ "./src/createListModal/elements/buttonContainer.js":
/*!*********************************************************!*\
  !*** ./src/createListModal/elements/buttonContainer.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export makeButtonContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeButtonContainer": () => /* binding */ makeButtonContainer
/* harmony export */ });
const makeCancelBtn = () => {
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('createList-buttons');
  cancelBtn.setAttribute('data-btn', 'cancel');
  cancelBtn.innerText = 'Cancel';

  return cancelBtn;
}

const makeCreateBtn = () => {
  const createBtn = document.createElement('button');
  createBtn.classList.add('createList-buttons');
  createBtn.setAttribute('data-btn', 'create');
  createBtn.innerText = 'Create';

  return createBtn;
}

const makeButtonContainer = () => {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('createList-modal-button-container');

  const cancelBtn = makeCancelBtn();
  const createBtn = makeCreateBtn();

  buttonContainer.append(cancelBtn);
  buttonContainer.append(createBtn);

  return buttonContainer;
}



/***/ }),

/***/ "./src/createListModal/elements/contentContainer.js":
/*!**********************************************************!*\
  !*** ./src/createListModal/elements/contentContainer.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export makeContentContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeContentContainer": () => /* binding */ makeContentContainer
/* harmony export */ });
/* harmony import */ var _labelTextContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labelTextContainer.js */ "./src/createListModal/elements/labelTextContainer.js");
/* harmony import */ var _textFieldContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textFieldContainer.js */ "./src/createListModal/elements/textFieldContainer.js");



const makeContentContainer = () => {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('createList-modal-content-container');

  const lableTextContainer = (0,_labelTextContainer_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelTextContainer)();
  const textFieldContainer = (0,_textFieldContainer_js__WEBPACK_IMPORTED_MODULE_1__.makeTextFieldContainer)();

  contentContainer.appendChild(lableTextContainer);
  contentContainer.appendChild(textFieldContainer);

  return contentContainer;
} 






  




/***/ }),

/***/ "./src/createListModal/elements/labelTextContainer.js":
/*!************************************************************!*\
  !*** ./src/createListModal/elements/labelTextContainer.js ***!
  \************************************************************/
/*! namespace exports */
/*! export makeLabelTextContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeLabelTextContainer": () => /* binding */ makeLabelTextContainer
/* harmony export */ });
const makeLabelText = (label) => {
  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');

  if (label != '') {
    labelText.innerText = label;
  }

  return labelText;
}

const makeLabelTextContainer = () => {
  const textContainer = document.createElement('div');
  textContainer.classList.add('createList-modal-LabelText-container');

  const labelText = makeLabelText('NAME THIS LIST');
  textContainer.append(labelText);

  return textContainer;
} 


  

/***/ }),

/***/ "./src/createListModal/elements/makeCreateListModal.js":
/*!*************************************************************!*\
  !*** ./src/createListModal/elements/makeCreateListModal.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export makeCreateListModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCreateListModal": () => /* binding */ makeCreateListModal
/* harmony export */ });
/* harmony import */ var _css_createListModal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/createListModal.css */ "./src/createListModal/css/createListModal.css");
/* harmony import */ var _buttonContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonContainer.js */ "./src/createListModal/elements/buttonContainer.js");
/* harmony import */ var _contentContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentContainer.js */ "./src/createListModal/elements/contentContainer.js");





const makeCreateListModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('id', 'createList');

  const createListModal = document.createElement('div');
  createListModal.classList.add('createList-modal');
  createListModal.classList.add('modal-content');

  const buttonContainer = (0,_buttonContainer_js__WEBPACK_IMPORTED_MODULE_1__.makeButtonContainer)();
  const contentContainer = (0,_contentContainer_js__WEBPACK_IMPORTED_MODULE_2__.makeContentContainer)();

  
  createListModal.appendChild(contentContainer);
  createListModal.appendChild(buttonContainer);

  modal.appendChild(createListModal);

  return modal;
}



/***/ }),

/***/ "./src/createListModal/elements/textFieldContainer.js":
/*!************************************************************!*\
  !*** ./src/createListModal/elements/textFieldContainer.js ***!
  \************************************************************/
/*! namespace exports */
/*! export makeTextFieldContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTextFieldContainer": () => /* binding */ makeTextFieldContainer
/* harmony export */ });
const makeTextField = () => {
  const textField = document.createElement('textarea');
  textField.classList.add('textField', 'textField-title');
  textField.setAttribute('rows', '1');

  return textField;
}

const makeTextFieldContainer = () => {
  const textFieldContainer = document.createElement('div');
  textFieldContainer.classList.add('createList-modal-textField-container');

  const textField = makeTextField();

  textFieldContainer.appendChild(textField);

  return textFieldContainer;
}



/***/ }),

/***/ "./src/createListModal/getElements.js":
/*!********************************************!*\
  !*** ./src/createListModal/getElements.js ***!
  \********************************************/
/*! namespace exports */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => /* binding */ get
/* harmony export */ });
const Get = () => {
  const createBtn = () => {
    return document.querySelector('button[data-btn="create"]');
  }

  const cancelBtn = () => {
    return document.querySelector('button[data-btn="cancel"]');
  }

  const titleTextarea = () => {
    return document.querySelector('.createList-modal-textField-container .textField-title');
  }

  const modal = () => {
    return document.querySelector('#createList');
  }

  return {
    createBtn,
    cancelBtn,
    titleTextarea,
    modal
  }
}

const get = Get();



/***/ }),

/***/ "./src/createListModal/isTitleTextareaEmpty.js":
/*!*****************************************************!*\
  !*** ./src/createListModal/isTitleTextareaEmpty.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export isTitleTextareaEmpty [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTitleTextareaEmpty": () => /* binding */ isTitleTextareaEmpty
/* harmony export */ });
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElements.js */ "./src/createListModal/getElements.js");


const isEmpty = (str) => {
  if (str === '') {
    return true;
  }

  return false;
}

const isTitleTextareaEmpty = () => {
  const titleTextArea = _getElements_js__WEBPACK_IMPORTED_MODULE_0__.get.titleTextarea();
  const title = titleTextArea.value;

  if (isEmpty(title)) {
    return true;
  }

  return false;
}



/***/ }),

/***/ "./src/createListModal/startInitialSetup.js":
/*!**************************************************!*\
  !*** ./src/createListModal/startInitialSetup.js ***!
  \**************************************************/
/*! namespace exports */
/*! export startInitialSetup [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startInitialSetup": () => /* binding */ startInitialSetup
/* harmony export */ });
/* harmony import */ var _addCategory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCategory.js */ "./src/createListModal/addCategory.js");
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getElements.js */ "./src/createListModal/getElements.js");
/* harmony import */ var _closeModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./closeModal.js */ "./src/createListModal/closeModal.js");
/* harmony import */ var _isTitleTextareaEmpty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTitleTextareaEmpty.js */ "./src/createListModal/isTitleTextareaEmpty.js");





const enableCreateBtnToAddCategory = () => {
  const createBtn = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.createBtn();

  createBtn.addEventListener('click', () => {
    if (!(0,_isTitleTextareaEmpty_js__WEBPACK_IMPORTED_MODULE_3__.isTitleTextareaEmpty)()) {
      (0,_addCategory_js__WEBPACK_IMPORTED_MODULE_0__.addCategory)();
    }
  })
}

const enableCreateBtnToCloseModal = () => {
  const createBtn = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.createBtn();

  createBtn.addEventListener('click', () => {
    if (!(0,_isTitleTextareaEmpty_js__WEBPACK_IMPORTED_MODULE_3__.isTitleTextareaEmpty)()) {
      (0,_closeModal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
    }
  })
}

const enableCancelBtnToCloseModal = () => {
  const cancelBtn = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.cancelBtn();

  cancelBtn.addEventListener('click', _closeModal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal);
}

const enableWindowToCloseModal = () => {
  window.addEventListener('click', (event) => {
    if ((0,_closeModal_js__WEBPACK_IMPORTED_MODULE_2__.isOutsideModalContentClicked)(event)) {
      ;(0,_closeModal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
    }
  }, { once: true });
}

const startInitialSetup = () => {
  enableCancelBtnToCloseModal();
  enableWindowToCloseModal();
  enableCreateBtnToAddCategory();
  enableCreateBtnToCloseModal();
}



/***/ }),

/***/ "./src/createTodoModal/CreateTodoModal.js":
/*!************************************************!*\
  !*** ./src/createTodoModal/CreateTodoModal.js ***!
  \************************************************/
/*! namespace exports */
/*! export createTodoModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodoModal": () => /* binding */ createTodoModal
/* harmony export */ });
/* harmony import */ var _changeCategory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeCategory.js */ "./src/createTodoModal/changeCategory.js");
/* harmony import */ var _elements_makeCreateTodoModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/makeCreateTodoModal.js */ "./src/createTodoModal/elements/makeCreateTodoModal.js");
/* harmony import */ var _startInitialSetup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startInitialSetup.js */ "./src/createTodoModal/startInitialSetup.js");




const CreateTodoModal = () => {
  
  return {
    changeCategory: _changeCategory_js__WEBPACK_IMPORTED_MODULE_0__.changeCategory,
    makeCreateTodoModal: _elements_makeCreateTodoModal_js__WEBPACK_IMPORTED_MODULE_1__.makeCreateTodoModal,
    startInitialSetup: _startInitialSetup_js__WEBPACK_IMPORTED_MODULE_2__.startInitialSetup
  }
}

const createTodoModal = CreateTodoModal();




/***/ }),

/***/ "./src/createTodoModal/addTodo.js":
/*!****************************************!*\
  !*** ./src/createTodoModal/addTodo.js ***!
  \****************************************/
/*! namespace exports */
/*! export addTodo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => /* binding */ addTodo
/* harmony export */ });
const addTodo = () => {
  console.log('Make Todo: TODO');
  console.log('ADD TODO: TODOLIST');
  console.log('ADD TODO: DISPLAY');
}




/***/ }),

/***/ "./src/createTodoModal/changeCategory.js":
/*!***********************************************!*\
  !*** ./src/createTodoModal/changeCategory.js ***!
  \***********************************************/
/*! namespace exports */
/*! export changeCategory [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeCategory": () => /* binding */ changeCategory
/* harmony export */ });
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElements.js */ "./src/createTodoModal/getElements.js");


const changeCategory = (category) => {
  const categoryBtn = _getElements_js__WEBPACK_IMPORTED_MODULE_0__.get.categoryBtn();
  categoryBtn.innerText = category;
}



/***/ }),

/***/ "./src/createTodoModal/closeModal.js":
/*!*******************************************!*\
  !*** ./src/createTodoModal/closeModal.js ***!
  \*******************************************/
/*! namespace exports */
/*! export closeModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isOutsideModalContentClicked [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => /* binding */ closeModal,
/* harmony export */   "isOutsideModalContentClicked": () => /* binding */ isOutsideModalContentClicked
/* harmony export */ });
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElements.js */ "./src/createTodoModal/getElements.js");


const isOutsideModalContentClicked = (event) => {
  const clickedTarget = event.target;
  const modal = _getElements_js__WEBPACK_IMPORTED_MODULE_0__.get.modal();
  
  if (clickedTarget === modal) {
    return true;
  }

  return false;
}

const closeModal = () => {
  const modal = _getElements_js__WEBPACK_IMPORTED_MODULE_0__.get.modal();
  modal.remove();
}



/***/ }),

/***/ "./src/createTodoModal/elements/addTodoBtnContainer.js":
/*!*************************************************************!*\
  !*** ./src/createTodoModal/elements/addTodoBtnContainer.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export makeAddTodoBtnContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeAddTodoBtnContainer": () => /* binding */ makeAddTodoBtnContainer
/* harmony export */ });
const makeAddTodoBtnContainer = () => {
  const addTodoBtnContainer = document.createElement('div');
  addTodoBtnContainer.classList.add('createTodo-modal-addTodoBtn-container');

  const createTodoBtns = document.createElement('button');
  createTodoBtns.classList.add('createTodo-buttons');
  createTodoBtns.innerText = "Add Todo";

  addTodoBtnContainer.appendChild(createTodoBtns);

  return addTodoBtnContainer;
}



/***/ }),

/***/ "./src/createTodoModal/elements/labelText.js":
/*!***************************************************!*\
  !*** ./src/createTodoModal/elements/labelText.js ***!
  \***************************************************/
/*! namespace exports */
/*! export makeLabelText [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeLabelText": () => /* binding */ makeLabelText
/* harmony export */ });
const makeLabelText = (label) => {
  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = label;

  return labelText;
}



/***/ }),

/***/ "./src/createTodoModal/elements/makeCreateTodoModal.js":
/*!*************************************************************!*\
  !*** ./src/createTodoModal/elements/makeCreateTodoModal.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export makeCreateTodoModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCreateTodoModal": () => /* binding */ makeCreateTodoModal
/* harmony export */ });
/* harmony import */ var _css_createTodoModal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/createTodoModal.css */ "./src/createTodoModal/css/createTodoModal.css");
/* harmony import */ var _todoinfoContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoinfoContainer.js */ "./src/createTodoModal/elements/todoinfoContainer.js");
/* harmony import */ var _addTodoBtnContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTodoBtnContainer.js */ "./src/createTodoModal/elements/addTodoBtnContainer.js");




const makeCreateTodoModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('id', 'createTodo');

  const createTodoModal = document.createElement('div');
  createTodoModal.classList.add('createTodo-modal');
  createTodoModal.classList.add('modal-content');

  const todoInfoContainer = (0,_todoinfoContainer_js__WEBPACK_IMPORTED_MODULE_1__.makeTodoinfoContainer)();
  const addTodoBtnContainer = (0,_addTodoBtnContainer_js__WEBPACK_IMPORTED_MODULE_2__.makeAddTodoBtnContainer)();
  
  createTodoModal.appendChild(todoInfoContainer);
  createTodoModal.appendChild(addTodoBtnContainer);

  modal.appendChild(createTodoModal);

  return modal;
}



/***/ }),

/***/ "./src/createTodoModal/elements/todoInfoDescriptionContainer.js":
/*!**********************************************************************!*\
  !*** ./src/createTodoModal/elements/todoInfoDescriptionContainer.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export makeTodoinfoDescriptionContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoinfoDescriptionContainer": () => /* binding */ makeTodoinfoDescriptionContainer
/* harmony export */ });
/* harmony import */ var _labelText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labelText.js */ "./src/createTodoModal/elements/labelText.js");


const makeTodoinfoDescriptionContainer = () => {
  const todoinfoContainerDescription = document.createElement('div');
  todoinfoContainerDescription.classList.add('todoinfo-container-description');

  const labelText = (0,_labelText_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelText)('DESCRIPTION');

  const todoinfoDescription = document.createElement('div');
  todoinfoDescription.classList.add('todoinfo-description');

  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.classList.add('textField', 'textField-description');
  descriptionTextarea.setAttribute('rows', '10');
  descriptionTextarea.setAttribute('placeholder', 'Insert your notes here');

  todoinfoContainerDescription.appendChild(labelText);
  todoinfoContainerDescription.appendChild(todoinfoDescription);
  todoinfoDescription.appendChild(descriptionTextarea);

  return todoinfoContainerDescription;
}



/***/ }),

/***/ "./src/createTodoModal/elements/todoInfoTitleContainer.js":
/*!****************************************************************!*\
  !*** ./src/createTodoModal/elements/todoInfoTitleContainer.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export makeTodoinfoTitleContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoinfoTitleContainer": () => /* binding */ makeTodoinfoTitleContainer
/* harmony export */ });
/* harmony import */ var _labelText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labelText.js */ "./src/createTodoModal/elements/labelText.js");


const makeTodoinfoTitleContainer = () => {
  const todoinfoContainerTitle = document.createElement('div');
  todoinfoContainerTitle.classList.add('todoinfo-container-title');

  const labelText = (0,_labelText_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelText)('TITLE');

  const todoinfoTitle = document.createElement('div');
  todoinfoTitle.classList.add('todoinfo-title');

  const titleTextarea = document.createElement('textarea');
  titleTextarea.classList.add('textField', 'textField-title')
  titleTextarea.setAttribute('rows', '1');
  titleTextarea.setAttribute('placeholder', 'I want to...');

  todoinfoContainerTitle.appendChild(labelText);
  todoinfoContainerTitle.appendChild(todoinfoTitle);
  todoinfoTitle.appendChild(titleTextarea);

  return todoinfoContainerTitle;
}



/***/ }),

/***/ "./src/createTodoModal/elements/todoinfoCategoryContainer.js":
/*!*******************************************************************!*\
  !*** ./src/createTodoModal/elements/todoinfoCategoryContainer.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export makeTodoinfoCategoryContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoinfoCategoryContainer": () => /* binding */ makeTodoinfoCategoryContainer
/* harmony export */ });
/* harmony import */ var _labelText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labelText.js */ "./src/createTodoModal/elements/labelText.js");


const makeTodoinfoCategoryContainer = () => {
  const todoinfoContainerCategory = document.createElement('div');
  todoinfoContainerCategory.classList.add('todoinfo-container-category');

  const labelText = (0,_labelText_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelText)('CATEGORY');

  const todoinfoCategory = document.createElement('div');
  todoinfoCategory.classList.add('todoinfo-category');

  const categorySelectionBtn = document.createElement('button');
  categorySelectionBtn.classList.add('todoinfo-category-selectBtn');
  // This needs to be changed in the future
  categorySelectionBtn.innerText = "The Odin Project"

  todoinfoContainerCategory.appendChild(labelText);
  todoinfoContainerCategory.appendChild(todoinfoCategory);
  todoinfoCategory.appendChild(categorySelectionBtn);

  return todoinfoContainerCategory;
}



/***/ }),

/***/ "./src/createTodoModal/elements/todoinfoContainer.js":
/*!***********************************************************!*\
  !*** ./src/createTodoModal/elements/todoinfoContainer.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export makeTodoinfoContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoinfoContainer": () => /* binding */ makeTodoinfoContainer
/* harmony export */ });
/* harmony import */ var _todoInfoTitleContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoInfoTitleContainer.js */ "./src/createTodoModal/elements/todoInfoTitleContainer.js");
/* harmony import */ var _todoInfoDescriptionContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoInfoDescriptionContainer.js */ "./src/createTodoModal/elements/todoInfoDescriptionContainer.js");
/* harmony import */ var _todoinfoCategoryContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoinfoCategoryContainer.js */ "./src/createTodoModal/elements/todoinfoCategoryContainer.js");




const makeTodoinfoContainer = () => {
  const todoInfoContainer = document.createElement('div');
  todoInfoContainer.classList.add('createTodo-modal-todoinfo-container');

  const todoinfoTitleContainer = (0,_todoInfoTitleContainer_js__WEBPACK_IMPORTED_MODULE_0__.makeTodoinfoTitleContainer)();
  const todoinfoDescriptionContainer = (0,_todoInfoDescriptionContainer_js__WEBPACK_IMPORTED_MODULE_1__.makeTodoinfoDescriptionContainer)();
  const todoinfoCategoryContainer = (0,_todoinfoCategoryContainer_js__WEBPACK_IMPORTED_MODULE_2__.makeTodoinfoCategoryContainer)();

  todoInfoContainer.appendChild(todoinfoTitleContainer);
  todoInfoContainer.appendChild(todoinfoDescriptionContainer);
  todoInfoContainer.appendChild(todoinfoCategoryContainer);

  return todoInfoContainer;
}



/***/ }),

/***/ "./src/createTodoModal/getElements.js":
/*!********************************************!*\
  !*** ./src/createTodoModal/getElements.js ***!
  \********************************************/
/*! namespace exports */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => /* binding */ get
/* harmony export */ });
const Get = () => {
  const addTodoBtn = () => {
    return document.querySelector('.createTodo-buttons');
  }

  const titleTextarea = () => {
    return document.querySelector('.todoinfo-title textarea');
  }

  const descriptionTextarea = () => {
    return document.querySelector('.todoinfo-description textarea');
  }

  const categoryBtn = () => {
    return document.querySelector('.todoinfo-category button');
  }

  const modal = () => {
    return document.querySelector('#createTodo');
  }

  return {
    addTodoBtn,
    titleTextarea,
    descriptionTextarea,
    categoryBtn,
    modal
  }
}

const get = Get();



/***/ }),

/***/ "./src/createTodoModal/isTitleTextareaEmpty.js":
/*!*****************************************************!*\
  !*** ./src/createTodoModal/isTitleTextareaEmpty.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export isTitleTextareaEmpty [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTitleTextareaEmpty": () => /* binding */ isTitleTextareaEmpty
/* harmony export */ });
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElements.js */ "./src/createTodoModal/getElements.js");


const isEmpty = (str) => {
  if (str === '') {
    return true;
  }

  return false;
}

const isTitleTextareaEmpty = () => {
  const titleTextArea = _getElements_js__WEBPACK_IMPORTED_MODULE_0__.get.titleTextarea();
  const title = titleTextArea.value;

  if (isEmpty(title)) {
    return true;
  }

  return false;
}



/***/ }),

/***/ "./src/createTodoModal/startInitialSetup.js":
/*!**************************************************!*\
  !*** ./src/createTodoModal/startInitialSetup.js ***!
  \**************************************************/
/*! namespace exports */
/*! export startInitialSetup [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startInitialSetup": () => /* binding */ startInitialSetup
/* harmony export */ });
/* harmony import */ var _addTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodo.js */ "./src/createTodoModal/addTodo.js");
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getElements.js */ "./src/createTodoModal/getElements.js");
/* harmony import */ var _closeModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./closeModal.js */ "./src/createTodoModal/closeModal.js");
/* harmony import */ var _isTitleTextareaEmpty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTitleTextareaEmpty.js */ "./src/createTodoModal/isTitleTextareaEmpty.js");





// Add Todo Btn enable
const enableAddTodoBtnToAddTodo = () => {
  const addTodoBtn = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.addTodoBtn();

  addTodoBtn.addEventListener('click', () => {
    if (!(0,_isTitleTextareaEmpty_js__WEBPACK_IMPORTED_MODULE_3__.isTitleTextareaEmpty)()) {
      (0,_addTodo_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)();
    }
  });
}

const enableAddTodoBtnToCloseModal = () => {
  const addTodoBtn = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.addTodoBtn();

  addTodoBtn.addEventListener('click', () => {
    if (!(0,_isTitleTextareaEmpty_js__WEBPACK_IMPORTED_MODULE_3__.isTitleTextareaEmpty)()) {
      (0,_closeModal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
    }
  })
}

// Category Selection Btn enable
const enableCategoryBtnToOpenCategorySelectionModal = () => {
  const categoryBtn = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.categoryBtn();

  categoryBtn.addEventListener('click', () => {
    console.log('open category selection modal');
  });
}

const enableWindowToCloseModal = () => {
  window.addEventListener('click', (event) => {
    if ((0,_closeModal_js__WEBPACK_IMPORTED_MODULE_2__.isOutsideModalContentClicked)(event)) {
      ;(0,_closeModal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
    }
  }, { once: true });
}

const startInitialSetup = () => {
  enableAddTodoBtnToAddTodo();
  enableAddTodoBtnToCloseModal();
  enableWindowToCloseModal();
  enableCategoryBtnToOpenCategorySelectionModal();
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
/* harmony import */ var _createListModal_CreateListModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createListModal/CreateListModal.js */ "./src/createListModal/CreateListModal.js");
/* harmony import */ var _createTodoModal_CreateTodoModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodoModal/CreateTodoModal.js */ "./src/createTodoModal/CreateTodoModal.js");
/* harmony import */ var _categorySelectionModal_CategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorySelectionModal/CategorySelectionModal.js */ "./src/categorySelectionModal/CategorySelectionModal.js");
/* harmony import */ var _Todo_todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todo/todo.js */ "./src/Todo/todo.js");
/* harmony import */ var _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoList/todolist.js */ "./src/TodoList/todolist.js");
/* harmony import */ var _todoDetailsCardView_elements_main_main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todoDetailsCardView/elements/main/main.js */ "./src/todoDetailsCardView/elements/main/main.js");






// import { makeTodoDetailsCardView } from './todoDetailsCardView/elements/makeTodoDetailsCardView.js';


const body = document.querySelector('body');
body.appendChild((0,_todoDetailsCardView_elements_main_main_js__WEBPACK_IMPORTED_MODULE_5__.makeTodoEditMain)());















/***/ }),

/***/ "./src/todoDetailsCardView/elements/main/elements/DueDateRow.js":
/*!**********************************************************************!*\
  !*** ./src/todoDetailsCardView/elements/main/elements/DueDateRow.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export makeDueDateRow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeDueDateRow": () => /* binding */ makeDueDateRow
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../labelText.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


const makeDueDateRow = () => {
  const dueDateRow = document.createElement('div');
  dueDateRow.classList.add('TodoEdit-main-DueDateRow', 'TodoEdit-padder');

  const labelText = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../labelText.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('DUE DATE');

  const dueDateInputBox = document.createElement('div');
  dueDateInputBox.classList.add('TodoEdit-DueDateBox');

  // Should be its own module later
  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', 'TodoEdit-DueDate');
  dateInput.setAttribute('name', 'DueDate');
  dateInput.setAttribute('value', '2020-11-03');
  dateInput.setAttribute('min', '2020-11-03');

  // Appending Child
  dueDateRow.appendChild(labelText);
  dueDateRow.appendChild(dueDateInputBox);
  
  dueDateInputBox.appendChild(dateInput);

  return dueDateRow;
}



/***/ }),

/***/ "./src/todoDetailsCardView/elements/main/elements/TagRow.js":
/*!******************************************************************!*\
  !*** ./src/todoDetailsCardView/elements/main/elements/TagRow.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export makeTagRow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTagRow": () => /* binding */ makeTagRow
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../labelText.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


const capitalizeFirstLetter = (str) => {
  const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1)
  return capitalizedStr;
}

const makePriorityBtn = (importance) => {
  const priorityBtn = document.createElement('button');
  const id = `priority-${importance}-btn`;
  priorityBtn.setAttribute('id', id);
  // innertext of btn has 'Importance', not 'impmortance'
  priorityBtn.innerText = capitalizeFirstLetter(importance);

  priorityBtn.classList.add('priority-tag', 'priority-btns-not-selected');

  return priorityBtn;
}

const makeTagRow = () => {
  const tagRow = document.createElement('div');
  tagRow.classList.add('TodoEdit-main-tagRow', 'TodoEdit-padder');

  const labelText = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../labelText.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('TAGS');
  const tags = document.createElement('div');
  tags.classList.add('TodoEdit-Tags');
  
  tagRow.appendChild(labelText);
  tagRow.appendChild(tags);

  tags.appendChild(makePriorityBtn('important'));
  tags.appendChild(makePriorityBtn('high'));
  tags.appendChild(makePriorityBtn('middle'));
  tags.appendChild(makePriorityBtn('low'));

  return tagRow;
}



/***/ }),

/***/ "./src/todoDetailsCardView/elements/main/elements/createdDateRow.js":
/*!**************************************************************************!*\
  !*** ./src/todoDetailsCardView/elements/main/elements/createdDateRow.js ***!
  \**************************************************************************/
/*! namespace exports */
/*! export makeCreatedDateRow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCreatedDateRow": () => /* binding */ makeCreatedDateRow
/* harmony export */ });
/* harmony import */ var _labelText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labelText.js */ "./src/todoDetailsCardView/elements/main/elements/labelText.js");


const makeCreatedDateRow = (date) => {
  // Maybe I can import some library to get today's date

  const createdDateRow = document.createElement('div');
  createdDateRow.classList.add('TodoEdit-main-CreatedDateRow', 'TodoEdit-padder');

  const labelText = (0,_labelText_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelText)('CREATED DATE');

  const createdDate = document.createElement('div');
  createdDate.classList.add('TodoEdit-CreatedDate');
  // DYNAMIC DATE NEEDED
  createdDate.innerText = '2020.11.03';

  createdDateRow.appendChild(labelText);
  createdDateRow.appendChild(createdDate);

  return createdDateRow;
}



/***/ }),

/***/ "./src/todoDetailsCardView/elements/main/elements/descriptionRow.js":
/*!**************************************************************************!*\
  !*** ./src/todoDetailsCardView/elements/main/elements/descriptionRow.js ***!
  \**************************************************************************/
/*! namespace exports */
/*! export makeDescriptionRow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeDescriptionRow": () => /* binding */ makeDescriptionRow
/* harmony export */ });
/* harmony import */ var _labelText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labelText.js */ "./src/todoDetailsCardView/elements/main/elements/labelText.js");


const makeDescriptionRow = () => {
  const descriptionRow = document.createElement('div');
  descriptionRow.classList.add('TodoEdit-main-DescriptionRow', 'TodoEdit-padder');

  const labelText = (0,_labelText_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelText)('DESCRIPTION');

  const descriptionTextArea = document.createElement('textarea');
  descriptionTextArea.classList.add('textField', 'textField-description');
  descriptionTextArea.setAttribute('rows', '7');

  descriptionRow.appendChild(labelText);
  descriptionRow.appendChild(descriptionTextArea);

  return descriptionRow;
}



/***/ }),

/***/ "./src/todoDetailsCardView/elements/main/elements/labelText.js":
/*!*********************************************************************!*\
  !*** ./src/todoDetailsCardView/elements/main/elements/labelText.js ***!
  \*********************************************************************/
/*! namespace exports */
/*! export makeLabelText [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeLabelText": () => /* binding */ makeLabelText
/* harmony export */ });
const makeLabelText = (label) => {
  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = label;

  return labelText;
}



/***/ }),

/***/ "./src/todoDetailsCardView/elements/main/elements/titleRow.js":
/*!********************************************************************!*\
  !*** ./src/todoDetailsCardView/elements/main/elements/titleRow.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export makeTitleRow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTitleRow": () => /* binding */ makeTitleRow
/* harmony export */ });
/* harmony import */ var _labelText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labelText.js */ "./src/todoDetailsCardView/elements/main/elements/labelText.js");


const makeTitleRow = () => {
  const titleRow = document.createElement('div');
  titleRow.classList.add('TodoEdit-main-titleRow', 'TodoEdit-padder');
  
  const labelText = (0,_labelText_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelText)('TITLE');
  
  const titleTextArea = document.createElement('textarea');
  titleTextArea.classList.add('textField', 'TodoEdit-title-textfield');
  titleTextArea.setAttribute('rows', '1');


  titleRow.appendChild(labelText);
  titleRow.appendChild(titleTextArea);

  return titleRow;
}



/***/ }),

/***/ "./src/todoDetailsCardView/elements/main/main.js":
/*!*******************************************************!*\
  !*** ./src/todoDetailsCardView/elements/main/main.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export makeTodoEditMain [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoEditMain": () => /* binding */ makeTodoEditMain
/* harmony export */ });
/* harmony import */ var _main_elements_titleRow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/elements/titleRow.js */ "./src/todoDetailsCardView/elements/main/elements/titleRow.js");
/* harmony import */ var _main_elements_TagRow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/elements/TagRow.js */ "./src/todoDetailsCardView/elements/main/elements/TagRow.js");
/* harmony import */ var _main_elements_DueDateRow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/elements/DueDateRow.js */ "./src/todoDetailsCardView/elements/main/elements/DueDateRow.js");
/* harmony import */ var _main_elements_descriptionRow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/elements/descriptionRow.js */ "./src/todoDetailsCardView/elements/main/elements/descriptionRow.js");
/* harmony import */ var _main_elements_createdDateRow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main/elements/createdDateRow.js */ "./src/todoDetailsCardView/elements/main/elements/createdDateRow.js");







const makeTodoEditMain = () => {
  const todoEditMain = document.createElement('div');
  todoEditMain.classList.add('TodoEdit-main');

  todoEditMain.appendChild((0,_main_elements_titleRow_js__WEBPACK_IMPORTED_MODULE_0__.makeTitleRow)());
  todoEditMain.appendChild((0,_main_elements_TagRow_js__WEBPACK_IMPORTED_MODULE_1__.makeTagRow)());
  todoEditMain.appendChild((0,_main_elements_DueDateRow_js__WEBPACK_IMPORTED_MODULE_2__.makeDueDateRow)());
  todoEditMain.appendChild((0,_main_elements_descriptionRow_js__WEBPACK_IMPORTED_MODULE_3__.makeDescriptionRow)());
  todoEditMain.appendChild((0,_main_elements_createdDateRow_js__WEBPACK_IMPORTED_MODULE_4__.makeCreatedDateRow)());

  return todoEditMain;
}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL2Nzcy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVMaXN0TW9kYWwvY3NzL2NyZWF0ZUxpc3RNb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVG9kb01vZGFsL2Nzcy9jcmVhdGVUb2RvTW9kYWwuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwvY3NzL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY3NzP2EyMTciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlTGlzdE1vZGFsL2Nzcy9jcmVhdGVMaXN0TW9kYWwuY3NzP2I4YmIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVG9kb01vZGFsL2Nzcy9jcmVhdGVUb2RvTW9kYWwuY3NzPzZjNmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvVG9kby90b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1RvZG9MaXN0L2dldFByaW9yaXR5QXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvVG9kb0xpc3QvaXNTYW1lVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Ub2RvTGlzdC90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL0NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9jaGFuZ2VDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL2Nsb3NlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9lbGVtZW50cy9pbmRpdmlkdWFsQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9lbGVtZW50cy9tYWtlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL2VsZW1lbnRzL21vZGFsSGVhZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwvZWxlbWVudHMvbW9kYWxNYWluLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwvZ2V0RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9zdGFydEluaXRpYWxTZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVMaXN0TW9kYWwvQ3JlYXRlTGlzdE1vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUxpc3RNb2RhbC9hZGRDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVMaXN0TW9kYWwvY2xvc2VNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVMaXN0TW9kYWwvZWxlbWVudHMvYnV0dG9uQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUxpc3RNb2RhbC9lbGVtZW50cy9jb250ZW50Q29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUxpc3RNb2RhbC9lbGVtZW50cy9sYWJlbFRleHRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlTGlzdE1vZGFsL2VsZW1lbnRzL21ha2VDcmVhdGVMaXN0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlTGlzdE1vZGFsL2VsZW1lbnRzL3RleHRGaWVsZENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVMaXN0TW9kYWwvZ2V0RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlTGlzdE1vZGFsL2lzVGl0bGVUZXh0YXJlYUVtcHR5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUxpc3RNb2RhbC9zdGFydEluaXRpYWxTZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvTW9kYWwvQ3JlYXRlVG9kb01vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9hZGRUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9jaGFuZ2VDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvTW9kYWwvY2xvc2VNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvTW9kYWwvZWxlbWVudHMvYWRkVG9kb0J0bkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvTW9kYWwvZWxlbWVudHMvbGFiZWxUZXh0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9lbGVtZW50cy9tYWtlQ3JlYXRlVG9kb01vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9lbGVtZW50cy90b2RvSW5mb0Rlc2NyaXB0aW9uQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9lbGVtZW50cy90b2RvSW5mb1RpdGxlQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9lbGVtZW50cy90b2RvaW5mb0NhdGVnb3J5Q29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9lbGVtZW50cy90b2RvaW5mb0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvTW9kYWwvZ2V0RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVG9kb01vZGFsL2lzVGl0bGVUZXh0YXJlYUVtcHR5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9zdGFydEluaXRpYWxTZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L2VsZW1lbnRzL21haW4vZWxlbWVudHMvRHVlRGF0ZVJvdy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L2VsZW1lbnRzL21haW4vZWxlbWVudHMvVGFnUm93LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9EZXRhaWxzQ2FyZFZpZXcvZWxlbWVudHMvbWFpbi9lbGVtZW50cy9jcmVhdGVkRGF0ZVJvdy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L2VsZW1lbnRzL21haW4vZWxlbWVudHMvZGVzY3JpcHRpb25Sb3cuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0RldGFpbHNDYXJkVmlldy9lbGVtZW50cy9tYWluL2VsZW1lbnRzL2xhYmVsVGV4dC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L2VsZW1lbnRzL21haW4vZWxlbWVudHMvdGl0bGVSb3cuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0RldGFpbHNDYXJkVmlldy9lbGVtZW50cy9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsMkJBQTJCLEdBQUcsV0FBVyw0QkFBNEIsNEJBQTRCLDRCQUE0Qiw0QkFBNEIsK0JBQStCLDhCQUE4Qiw4QkFBOEIsaUNBQWlDLDRCQUE0Qiw0QkFBNEIsbURBQW1ELGdDQUFnQyxnQ0FBZ0MsOEJBQThCLGtDQUFrQyw4Q0FBOEMscUNBQXFDLG1DQUFtQywrQ0FBK0MsOENBQThDLHNDQUFzQyw0Q0FBNEMsNEJBQTRCLHFDQUFxQyw0Q0FBNEMscUVBQXFFLG9D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QywyQkFBMkIsb0VBQVU7QUFDckMsMkJBQTJCLDRFQUFjO0FBQ3pDLDJCQUEyQixvRkFBa0I7QUFDN0MsMkJBQTJCLG9GQUFrQjs7QUFFN0M7QUFDQTs7QUFFNEI7Ozs7Ozs7VUNwQjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XFxuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xcbiAgLS1mb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcXG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xcbiAgLS1sYWJlbC1mb250LXNpemU6IDEycHg7XFxuICAtLWxhYmVsLWZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgLS1sYWJlbC1mb250LWNvbG9yOiAjODI4MjkyO1xcbiAgLS1sYWJlbC1ib3R0b20tcGFkZGluZzogNHB4O1xcbiAgLS1kZWZhdWx0LWZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY2FyZC1pdGVtLWJnLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG4gIC8qIGNyZWF0ZVRvZG9Nb2RhbCAqL1xcbiAgLS1ndXR0ZXI6IDE2cHg7XFxuXFxuICAvKiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsICovXFxuICAtLWJvcmRlci1ib3R0b20tY29sb3I6ICNjY2NjY2M7XFxuICAtLWNhcmQtaXRlbS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1zaXplOiAxNHB4O1xcbiAgLS1jb25maXJtLWNvbG9yOiAjMjNjZTg4O1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsICovXFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsIHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcblxcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaGVhZGVyIHtcXG4gIGhlaWdodDogNTVweDtcXG4gIG1pbi1oZWlnaHQ6IDU1cHg7XFxuICAvKiBHaXZlIHBhZGRpbmcgdG8gdGhlIGp1c3Qgc2lkZSAqL1xcbiAgcGFkZGluZzogMCB2YXIoLS1ndXR0ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSAwIDA7XFxuICBjb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1mb250LWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZCk7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1tYWluIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXMge1xcbiAgbWluLWhlaWdodDogNDRweDtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tZ3V0dGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtczpob3ZlcixcXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXM6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcik7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtcy10aXRsZSB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IHZhcigtLWNhcmQtaXRlbS1mb250LXNpemUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ib3R0b20tY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbCAuZmEtY2hlY2stY2lyY2xlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbmZpcm0tY29sb3IpOyBcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL2Nzcy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6QyxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLDBDQUEwQztFQUMxQyx5Q0FBeUM7RUFDekMsaUNBQWlDO0VBQ2pDLHVDQUF1QztFQUN2Qyx1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixjQUFjOztFQUVkLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaURBQWlEO0VBQ2pELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0UsYUFBYTtFQUNiLGFBQWE7O0VBRWIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIseUNBQXlDOztFQUV6QyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsd0JBQXdCO0VBQ3hCLDRDQUE0QztFQUM1Qyx3RUFBd0U7RUFDeEUsbUNBQW1DOztFQUVuQyxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJDQUEyQztFQUMzQyx3RUFBd0U7O0VBRXhFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QiwyQ0FBMkM7O0VBRTNDLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsbURBQW1EO0VBQ25ELGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsc0NBQXNDO0VBQ3RDLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbCB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG5cXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBtYXgtaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWhlYWRlciB7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgLyogR2l2ZSBwYWRkaW5nIHRvIHRoZSBqdXN0IHNpZGUgKi9cXG4gIHBhZGRpbmc6IDAgdmFyKC0tZ3V0dGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgMCAwO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtZm9udC1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pLWJvbGQpO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtbWFpbiB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zIHtcXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XFxuICBwYWRkaW5nOiAwIHZhcigtLWd1dHRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXM6aG92ZXIsXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3IpO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXMtdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuICBjb2xvcjogdmFyKC0tY2FyZC1pdGVtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYXJkLWl0ZW0tZm9udC1zaXplKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItYm90dG9tLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwgLmZhLWNoZWNrLWNpcmNsZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb25maXJtLWNvbG9yKTsgXFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiAgKi9cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDE2NXB4O1xcbiAgXFxuICAvKiBUTyBCRSBSRU1PVkVEICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC1jb250ZW50LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDExMnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC1MYWJlbFRleHQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtdGV4dEZpZWxkLWNvbnRhaW5lciB7XFxuICBcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAwIDAgO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1idXR0b25zIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvcik7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC1mb250LXNpemUpO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtZm9udC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcblxcbiAgLyogVG8gY2VudGVyIHRoaW5ncyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtYnV0dG9uczpob3ZlciwgXFxuLmNyZWF0ZUxpc3QtYnV0dG9uczpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkKTtcXG59XFxuXFxuYnV0dG9uW2RhdGEtYnRuPVxcXCJjYW5jZWxcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlci1yaWdodDogMC41cHggc29saWQgdmFyKC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uW2RhdGEtYnRuPVxcXCJjcmVhdGVcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgMDsgXFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NyZWF0ZUxpc3RNb2RhbC9jc3MvY3JlYXRlTGlzdE1vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsMENBQTBDO0VBQzFDLHlDQUF5QztFQUN6QyxpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxpQ0FBaUM7RUFDakMscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixzQ0FBc0M7QUFDeEM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxpREFBaUQ7RUFDakQsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBLEtBQUs7O0FBRUw7RUFDRSxZQUFZO0VBQ1osYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLHVCQUF1QjtFQUN2Qix5Q0FBeUM7O0VBRXpDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTs7RUFFYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGdCQUFnQjs7RUFFaEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLCtDQUErQztFQUMvQywrREFBK0Q7QUFDakU7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XFxuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xcbiAgLS1mb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcXG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xcbiAgLS1sYWJlbC1mb250LXNpemU6IDEycHg7XFxuICAtLWxhYmVsLWZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgLS1sYWJlbC1mb250LWNvbG9yOiAjODI4MjkyO1xcbiAgLS1sYWJlbC1ib3R0b20tcGFkZGluZzogNHB4O1xcbiAgLS1kZWZhdWx0LWZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY2FyZC1pdGVtLWJnLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qICAqL1xcblxcbi5jcmVhdGVMaXN0LW1vZGFsIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMTY1cHg7XFxuICBcXG4gIC8qIFRPIEJFIFJFTU9WRUQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jcmVhdGVMaXN0LW1vZGFsLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTEycHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jcmVhdGVMaXN0LW1vZGFsLUxhYmVsVGV4dC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC10ZXh0RmllbGQtY29udGFpbmVyIHtcXG4gIFxcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDAgMCA7XFxufVxcblxcbi5jcmVhdGVMaXN0LWJ1dHRvbnMge1xcbiAgZmxleDogMSAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LWZvbnQtc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1mb250LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuXFxuICAvKiBUbyBjZW50ZXIgdGhpbmdzICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1idXR0b25zOmhvdmVyLCBcXG4uY3JlYXRlTGlzdC1idXR0b25zOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQpO1xcbn1cXG5cXG5idXR0b25bZGF0YS1idG49XFxcImNhbmNlbFxcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCB2YXIoLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG5idXR0b25bZGF0YS1idG49XFxcImNyZWF0ZVxcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSAwOyBcXG4gIGNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlTGlzdE1vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tbW9kYWwge1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jcmVhdGVUb2RvLW1vZGFsLXRvZG9pbmZvLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIHBhZGRpbmc6IHZhcigtLWd1dHRlcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9pbmZvLWNvbnRhaW5lci10aXRsZSB7XFxuICBmbGV4OiAxIDAgMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb2luZm8tY29udGFpbmVyLWRlc2NyaXB0aW9uIHtcXG4gIGZsZXg6IDQgMCAwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvaW5mby1jb250YWluZXItY2F0ZWdvcnkge1xcbiAgZmxleDogMSAwIDA7XFxufVxcblxcbi50b2RvaW5mby1jYXRlZ29yeS1zZWxlY3RCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tbW9kYWwtYWRkVG9kb0J0bi1jb250YWluZXIge1xcbiAgZmxleDogMCAwIDU0cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY3JlYXRlVG9kby1idXR0b25zIHtcXG4gIGZsZXg6IDEgMCAwO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcbiAgLyogY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMyk7ICovXFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tYnV0dG9uczpob3ZlcixcXG4uY3JlYXRlVG9kby1idXR0b25zOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9jc3MvY3JlYXRlVG9kb01vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsMENBQTBDO0VBQzFDLHlDQUF5QztFQUN6QyxpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaURBQWlEO0VBQ2pELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QywyQ0FBMkM7O0VBRTNDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCOztFQUV0QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVzs7RUFFWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVzs7RUFFWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjOztFQUVkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsd0VBQXdFO0VBQ3hFLDRDQUE0QztFQUM1QyxnQ0FBZ0M7RUFDaEMsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLHdEQUF3RDtBQUMxRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlTGlzdE1vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tbW9kYWwge1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jcmVhdGVUb2RvLW1vZGFsLXRvZG9pbmZvLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIHBhZGRpbmc6IHZhcigtLWd1dHRlcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9pbmZvLWNvbnRhaW5lci10aXRsZSB7XFxuICBmbGV4OiAxIDAgMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb2luZm8tY29udGFpbmVyLWRlc2NyaXB0aW9uIHtcXG4gIGZsZXg6IDQgMCAwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvaW5mby1jb250YWluZXItY2F0ZWdvcnkge1xcbiAgZmxleDogMSAwIDA7XFxufVxcblxcbi50b2RvaW5mby1jYXRlZ29yeS1zZWxlY3RCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tbW9kYWwtYWRkVG9kb0J0bi1jb250YWluZXIge1xcbiAgZmxleDogMCAwIDU0cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY3JlYXRlVG9kby1idXR0b25zIHtcXG4gIGZsZXg6IDEgMCAwO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcbiAgLyogY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMyk7ICovXFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tYnV0dG9uczpob3ZlcixcXG4uY3JlYXRlVG9kby1idXR0b25zOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jcmVhdGVMaXN0TW9kYWwuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jcmVhdGVUb2RvTW9kYWwuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCBUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpID0+IHtcbiAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIGxldCBfY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgbGV0IF9kdWVEYXRlID0gJyc7XG4gIGxldCBfY3JlYXRlZERhdGUgPSAnJztcbiAgbGV0IF9wcmlvcml0eSA9ICcnO1xuICBsZXQgX2NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRVRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IHNldFRpdGxlID0gKHRpdGxlKSA9PiB7XG4gICAgX3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChkZXNjcmlwdGlvbikgPT4ge1xuICAgIF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gIH1cbiAgXG4gIGNvbnN0IHNldENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgX2NhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gIH1cblxuICBjb25zdCBzZXREdWVEYXRlID0gKGR1ZURhdGUpID0+IHtcbiAgICBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBjb25zdCBzZXRDcmVhdGVkRGF0ZSA9IChjcmVhdGVkRGF0ZSkgPT4ge1xuICAgIF9jcmVhdGVkRGF0ZSA9IGNyZWF0ZWREYXRlO1xuICB9XG5cbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcbiAgICBfcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEdFVFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF90aXRsZTtcbiAgfVxuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBfZGVzY3JpcHRpb247XG4gIH1cbiAgXG4gIGNvbnN0IGdldENhdGVnb3J5ID0gKCkgPT4ge1xuICAgIHJldHVybiBfY2F0ZWdvcnk7XG4gIH1cblxuICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBfZHVlRGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGdldENyZWF0ZWREYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBfY3JlYXRlZERhdGU7XG4gIH1cblxuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcbiAgICByZXR1cm4gX3ByaW9yaXR5O1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGlzKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBpc0NvbXBsZXRlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gX2NvbXBsZXRlZDtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBDb21wbGV0ZWRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IG1hcmtDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgX2NvbXBsZXRlZCA9IHRydWU7XG4gIH1cblxuICBjb25zdCB1bmRvQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIF9jb21wbGV0ZWQgPSBmYWxzZTtcbiAgfSBcblxuICBcbiAgcmV0dXJuIHtcbiAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldENhdGVnb3J5LCBzZXREdWVEYXRlLCBzZXRDcmVhdGVkRGF0ZSwgc2V0UHJpb3JpdHksXG4gICAgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXRDYXRlZ29yeSwgZ2V0Q3JlYXRlZERhdGUsIGdldFByaW9yaXR5LCBnZXREdWVEYXRlLFxuICAgIGlzQ29tcGxldGVkLCBtYXJrQ29tcGxldGVkLCB1bmRvQ29tcGxldGVkXG4gIH1cbn1cblxuZXhwb3J0IHsgVG9kbyB9OyIsImNvbnN0IGdldFByaW9yaXR5QXNOdW1iZXIgPSAocHJpb3JpdHkpID0+IHtcbiAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgIGNhc2UgXCJpbXBvcnRhbnRcIjpcbiAgICAgIHByaW9yaXR5ID0gMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICBwcmlvcml0eSA9IDI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWlkZGxlXCI6XG4gICAgICBwcmlvcml0eSA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibG93XCI6XG4gICAgICBwcmlvcml0eSA9IDQ7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBwcmlvcml0eTtcbn1cblxuZXhwb3J0IHsgZ2V0UHJpb3JpdHlBc051bWJlciB9OyIsImNvbnN0IGlzU2FtZU9iamVjdCA9IChvYmplY3RPbmUsIG9iamVjdFR3bykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmlzKG9iamVjdE9uZSwgb2JqZWN0VHdvKTtcbn1cblxuZXhwb3J0IHsgaXNTYW1lT2JqZWN0IH07IiwiaW1wb3J0IHsgZ2V0UHJpb3JpdHlBc051bWJlciB9IGZyb20gJy4vZ2V0UHJpb3JpdHlBc051bWJlci5qcyc7XG5pbXBvcnQgeyBpc1NhbWVPYmplY3QgfSBmcm9tICcuL2lzU2FtZVRvZG8uanMnO1xuXG5jb25zdCBUb2RvTGlzdCA9ICgpID0+IHtcblxuICBjb25zdCBfdG9kb3MgPSB7XG4gICAgZGVmYXVsdDogW10sXG4gIH07XG5cbiAgLy8gQWRkIFRvZG9cbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgbGV0IGNhdGVnb3J5ID0gdG9kby5nZXRDYXRlZ29yeSgpO1xuICAgIFxuICAgIC8vIGlmIGNhdGVnb3J5IGRvZXNuJ3QgZXhpc3QsIGFkZCBvbmVcbiAgICBpZiAoIShjYXRlZ29yeSBpbiBfdG9kb3MpKSB7XG4gICAgICBhZGROZXdDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgfSBcbiAgICBcbiAgICBfdG9kb3NbY2F0ZWdvcnldLnB1c2godG9kbyk7XG4gIH1cblxuICBjb25zdCBhZGROZXdDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIF90b2Rvc1tjYXRlZ29yeV0gPSBbXTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kb1RvRmluZCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5T2ZUb2RvID0gdG9kb1RvRmluZC5nZXRDYXRlZ29yeSgpO1xuICAgIGNvbnN0IHRvZG9zID0gZ2V0VG9kb3NCeUNhdGVnb3J5KGNhdGVnb3J5T2ZUb2RvKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gdG9kb3NbaV07XG4gICAgICBpZiAoaXNTYW1lT2JqZWN0KGN1cnJlbnRUb2RvLCB0b2RvVG9GaW5kKSkge1xuICAgICAgICB0b2Rvcy5zcGxpY2UoaSwgMSk7O1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVsZXRlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICByZXR1cm4gZGVsZXRlIF90b2Rvc1tjYXRlZ29yeV07XG4gIH1cblxuICBjb25zdCBnZXRBbGxUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxUb2RvcyA9IFtdO1xuICAgIGZvciAoY29uc3QgW2NhdGVnb3J5LCB0b2Rvc10gb2YgT2JqZWN0LmVudHJpZXMoX3RvZG9zKSkge1xuICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgYWxsVG9kb3MucHVzaCh0b2RvKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGFsbFRvZG9zO1xuICB9XG5cbiAgY29uc3QgZ2V0VG9kb3NCeUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgcmV0dXJuIF90b2Rvc1tjYXRlZ29yeV07XG4gIH1cblxuICBjb25zdCBnZXRBbGxDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhfdG9kb3MpO1xuICAgIHJldHVybiBjYXRlZ29yaWVzO1xuICB9XG5cbiAgY29uc3Qgc29ydFRvZG9zQnlEdWVEYXRlID0gKHRvZG9zKSA9PiB7XG4gICAgdG9kb3Muc29ydCgodG9kb09uZSwgdG9kb1R3bykgPT4ge1xuICAgICAgY29uc3QgdG9kb09uZUR1ZURhdGUgPSB0b2RvT25lLmdldER1ZURhdGUoKTtcbiAgICAgIGNvbnN0IHRvZG9Ud29EdWVEYXRlID0gdG9kb1R3by5nZXREdWVEYXRlKCk7XG4gICAgICBcbiAgICAgIHJldHVybiBOdW1iZXIodG9kb09uZUR1ZURhdGUpIC0gTnVtYmVyKHRvZG9Ud29EdWVEYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHNvcnRUb2Rvc0J5UHJpb3JpdHkgPSAodG9kb3MpID0+IHtcbiAgICB0b2Rvcy5zb3J0KGZ1bmN0aW9uIGNvbXBhcmVQcmlvcml0eSh0b2RvT25lLCB0b2RvVHdvKSB7XG4gICAgICBsZXQgdG9kb09uZVByaW9yaXR5ID0gdG9kb09uZS5nZXRQcmlvcml0eSgpO1xuICAgICAgbGV0IHRvZG9Ud29Qcmlvcml0eSA9IHRvZG9Ud28uZ2V0UHJpb3JpdHkoKTtcblxuICAgICAgdG9kb09uZVByaW9yaXR5ID0gZ2V0UHJpb3JpdHlBc051bWJlcih0b2RvT25lUHJpb3JpdHkpO1xuICAgICAgdG9kb1R3b1ByaW9yaXR5ID0gZ2V0UHJpb3JpdHlBc051bWJlcih0b2RvVHdvUHJpb3JpdHkpO1xuICAgICAgXG4gICAgICByZXR1cm4gdG9kb09uZVByaW9yaXR5IC0gdG9kb1R3b1ByaW9yaXR5O1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc29ydFRvZG9zQnlDcmVhdGVkRGF0ZSA9ICh0b2RvcykgPT4ge1xuICAgIHRvZG9zLnNvcnQoKHRvZG9PbmUsIHRvZG9Ud28pID0+IHtcbiAgICAgIGNvbnN0IHRvZG9PbmVDcmVhdGVkRGF0ZSA9IHRvZG9PbmUuZ2V0Q3JlYXRlZERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZG9Ud29DcmVhdGVkRGF0ZSA9IHRvZG9Ud28uZ2V0Q3JlYXRlZERhdGUoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIE51bWJlcih0b2RvT25lQ3JlYXRlZERhdGUpIC0gTnVtYmVyKHRvZG9Ud29DcmVhdGVkRGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIHJldHVybiB7XG4gICAgX3RvZG9zLFxuICAgIGFkZFRvZG8sIGFkZE5ld0NhdGVnb3J5LCBkZWxldGVUb2RvLCBkZWxldGVDYXRlZ29yeSxcbiAgICBnZXRUb2Rvc0J5Q2F0ZWdvcnksIGdldEFsbFRvZG9zLCBnZXRBbGxDYXRlZ29yaWVzLFxuICAgIHNvcnRUb2Rvc0J5RHVlRGF0ZSwgc29ydFRvZG9zQnlDcmVhdGVkRGF0ZSwgc29ydFRvZG9zQnlQcmlvcml0eVxuICB9XG59XG5cbmNvbnN0IHRvZG9MaXN0ID0gVG9kb0xpc3QoKTtcblxuZXhwb3J0IHsgdG9kb0xpc3QgfTsiLCJpbXBvcnQgeyBtYWtlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCB9IGZyb20gJy4vZWxlbWVudHMvbWFrZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWwuanMnO1xuaW1wb3J0IHsgc3RhcnRJbml0aWFsU2V0dXAgfSBmcm9tICcuL3N0YXJ0SW5pdGlhbFNldHVwLmpzJztcblxuLy8gY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBDYXRlZ29yeVNlbGVjdGlvbk1vZGFsID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgbWFrZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWwsXG4gICAgc3RhcnRJbml0aWFsU2V0dXBcbiAgfVxufVxuXG5jb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsID0gQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCgpO1xuXG5leHBvcnQgeyBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsIH07IiwiaW1wb3J0IHsgY3JlYXRlVG9kb01vZGFsIH0gZnJvbSAnLi4vY3JlYXRlVG9kb01vZGFsL0NyZWF0ZVRvZG9Nb2RhbC5qcyc7XG5cbi8vIFRvIGNoYW5nZSB0aGUgY2F0ZWdvcnlcbmNvbnN0IGNoYW5nZUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNyZWF0ZVRvZG9Nb2RhbC5jaGFuZ2VDYXRlZ29yeShjYXRlZ29yeSk7XG59XG5cbmV4cG9ydCB7IGNoYW5nZUNhdGVnb3J5IH0iLCJpbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldEVsZW1lbnRzLmpzJztcblxuLy8gQ2hlY2sgaWYgb3V0c2lkZSBvZiBtb2RhbCBpcyBjbGlja2VkLlxuY29uc3QgaXNPdXRzaWRlTW9kYWxDb250ZW50Q2xpY2tlZCA9IChldmVudCkgPT4ge1xuICBjb25zdCBjbGlja2VkVGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBtb2RhbCA9IGdldC5tb2RhbCgpO1xuICBcbiAgaWYgKGNsaWNrZWRUYXJnZXQgPT09IG1vZGFsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIGNsb3NlIG1vZGFsXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGdldC5tb2RhbCgpO1xuICBtb2RhbC5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IHsgY2xvc2VNb2RhbCwgaXNPdXRzaWRlTW9kYWxDb250ZW50Q2xpY2tlZCB9O1xuXG4iLCJpbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vY2xvc2VNb2RhbC5qcyc7XG5cbi8vIE1ha2VzIGluZGl2aWR1YWwgY2F0ZWdvcnkgaXRlbVxuY29uc3QgbWFrZUluZGl2aWR1YWxDYXRlZ29yeSA9IChjYXRlZ29yeVRpdGxlKSA9PiB7XG4gIGNvbnN0IG1vZGFsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtb2RhbEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXMnKTtcbiAgXG4gIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXMtdGl0bGUnKTtcbiAgaXRlbVRpdGxlLmlubmVyVGV4dCA9IGNhdGVnb3J5VGl0bGU7XG4gIFxuICBtb2RhbEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcblxuICByZXR1cm4gbW9kYWxJdGVtO1xufVxuXG5leHBvcnQgeyBtYWtlSW5kaXZpZHVhbENhdGVnb3J5IH07IiwiaW1wb3J0ICcuLi9jc3MvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5jc3MnXG5cbmltcG9ydCB7IG1ha2VNb2RhbE1haW4gfSBmcm9tICcuL21vZGFsTWFpbi5qcyc7XG5pbXBvcnQgeyBtYWtlTW9kYWxIZWFkZXIgfSBmcm9tICcuL21vZGFsSGVhZGVyLmpzJztcblxuLy8gTWFrZSBjYXRlZ29yeSBzZWxlY3Rpb24gbW9kYWwgSFRNTCBlbGVtZW50XG5jb25zdCBtYWtlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgbW9kYWwuc2V0QXR0cmlidXRlKCdpZCcsICdjYXRlZ29yeVNlbGVjdGlvbicpO1xuXG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbCcpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmFwcGVuZENoaWxkKG1ha2VNb2RhbEhlYWRlcigpKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5hcHBlbmRDaGlsZChtYWtlTW9kYWxNYWluKCkpO1xuICBcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCk7XG4gIFxuICByZXR1cm4gbW9kYWw7XG59XG5cbmV4cG9ydCB7IG1ha2VDYXRlZ29yeVNlbGVjdGlvbk1vZGFsIH07XG4iLCIvLyBtYWtlcyBtb2RhbCB0aXRsZSBIVE1MIGVsZW1lbnRcbmNvbnN0IG1ha2VNb2RhbFRpdGxlID0gKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLXRpdGxlJyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxUaXRsZS5pbm5lclRleHQgPSAnTW92ZSB0by4uLic7XG5cbiAgcmV0dXJuIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxUaXRsZTtcbn1cblxuLy8gbWFrZXMgbW9kYWwgaGVhZGVyIEhUTUwgZWxlbWVudFxuY29uc3QgbWFrZU1vZGFsSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaGVhZGVyJyk7XG5cbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEhlYWRlci5hcHBlbmRDaGlsZChtYWtlTW9kYWxUaXRsZSgpKTtcblxuICByZXR1cm4gY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEhlYWRlcjtcbn1cblxuZXhwb3J0IHsgbWFrZU1vZGFsSGVhZGVyIH07XG5cblxuICBcbiAgXG4iLCJpbXBvcnQgeyBtYWtlSW5kaXZpZHVhbENhdGVnb3J5IH0gZnJvbSAnLi9pbmRpdmlkdWFsQ2F0ZWdvcnkuanMnO1xuXG4vLyBtYWtlcyBtb2RhbCBtYWluXG5jb25zdCBtYWtlTW9kYWxNYWluID0gKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1tYWluJyk7XG5cblxuICAvLyBHZXQgY2F0ZWdvcmllcyBmcm9tIFRvZG9saXN0IGFuZCBhZGQgaXQgdG8gbW9kYWxcbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gWydUaGUgT2RpbiBQcm9qZWN0JywgJ0dZTScsICdTY2hvb2wnLCAnV09SSycsICdhJywgJ2InLCAnYyddO1xuICBjYXRlZ29yeUxpc3QuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IG1ha2VJbmRpdmlkdWFsQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluLmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9KVxuXG4gIHJldHVybiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbjsgIFxufVxuXG5leHBvcnQgeyBtYWtlTW9kYWxNYWluIH07XG4iLCIvLyBnZXQgSFRNTCBlbGVtZW50c1xuY29uc3QgR2V0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IG1vZGFsID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnlTZWxlY3Rpb24nKTtcbiAgfVxuXG4gIGNvbnN0IG1vZGFsQ2F0ZWdvcnlJdGVtcyA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vZGFsLFxuICAgIG1vZGFsQ2F0ZWdvcnlJdGVtc1xuICB9XG59XG4gIFxuY29uc3QgZ2V0ID0gR2V0KCk7XG4gIFxuZXhwb3J0IHsgZ2V0IH1cbiIsImltcG9ydCB7IGNsb3NlTW9kYWwsIGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQgfSBmcm9tICcuL2Nsb3NlTW9kYWwuanMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXRFbGVtZW50cy5qcyc7XG5pbXBvcnQgeyBjaGFuZ2VDYXRlZ29yeSB9IGZyb20gJy4vY2hhbmdlQ2F0ZWdvcnkuanMnO1xuXG4vLyBSZWNlaXZlIGV2ZW50IG9iamVjdCBhbmQgcmV0dXJuIHRoZSBpbm5lcnRleHQgdmFsdWUgb2YgaXQuXG5jb25zdCBnZXRDYXRlZ29yeVRpdGxlID0gKGUpID0+IHtcbiAgcmV0dXJuIGUudGFyZ2V0LmlubmVyVGV4dDtcbn1cblxuLy8gZW5hYmxlIGNhdGVnb3J5IGl0ZW1zIHRvIGNoYW5nZSBjYXRlZ29yeVxuY29uc3QgZW5hYmxlQ2F0ZWdvcnlJdGVtc1RvQ2hhbmdlQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5SXRlbXMgPSBnZXQubW9kYWxDYXRlZ29yeUl0ZW1zKCk7XG5cbiAgY2F0ZWdvcnlJdGVtcy5mb3JFYWNoKGNhdGVnb3J5SXRlbSA9PiB7XG4gICAgY2F0ZWdvcnlJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNoYW5nZUNhdGVnb3J5KGdldENhdGVnb3J5VGl0bGUoZSkpO1xuICAgIH0pXG4gIH0pO1xufVxuXG4vLyBlbmFibGUgY2F0ZWdvcnkgaXRlbXMgdG8gY2xvc2UgbW9kYWxcbmNvbnN0IGVuYWJsZUNhdGVnb3J5SXRlbXNUb0Nsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5SXRlbXMgPSBnZXQubW9kYWxDYXRlZ29yeUl0ZW1zKCk7XG5cbiAgY2F0ZWdvcnlJdGVtcy5mb3JFYWNoKGNhdGVnb3J5SXRlbSA9PiB7XG4gICAgY2F0ZWdvcnlJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIH0pO1xufVxuXG4vLyBUbyBjbG9zZSB0aGUgbW9kYWwgd2hlbiBvdXRzaWRlIG1vZGFsIGlzIGNsaWNrZWQuXG5jb25zdCBlbmFibGVXaW5kb3dUb0Nsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChpc091dHNpZGVNb2RhbENvbnRlbnRDbGlja2VkKGV2ZW50KSkge1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfSwgeyBvbmNlOiB0cnVlIH0pO1xufVxuXG4vLyBTdGFydCBhbGwgc2V0dXBzIG5lZWRlZFxuY29uc3Qgc3RhcnRJbml0aWFsU2V0dXAgPSAoKSA9PiB7XG4gIGVuYWJsZVdpbmRvd1RvQ2xvc2VNb2RhbCgpO1xuICBlbmFibGVDYXRlZ29yeUl0ZW1zVG9DaGFuZ2VDYXRlZ29yeSgpO1xuICBlbmFibGVDYXRlZ29yeUl0ZW1zVG9DbG9zZU1vZGFsKCk7XG59XG5cbmV4cG9ydCB7IHN0YXJ0SW5pdGlhbFNldHVwIH07IiwiaW1wb3J0ICcuL2Nzcy9jcmVhdGVMaXN0TW9kYWwuY3NzJztcblxuaW1wb3J0IHsgc3RhcnRJbml0aWFsU2V0dXAgfSBmcm9tICcuL3N0YXJ0SW5pdGlhbFNldHVwLmpzJztcbmltcG9ydCB7IG1ha2VDcmVhdGVMaXN0TW9kYWwgfSBmcm9tICcuL2VsZW1lbnRzL21ha2VDcmVhdGVMaXN0TW9kYWwuanMnO1xuaW1wb3J0IHsgYWRkQ2F0ZWdvcnkgfSBmcm9tICcuL2FkZENhdGVnb3J5LmpzJztcbmltcG9ydCB7IGdldCB9IGZyb20gJy4vZ2V0RWxlbWVudHMuanMnO1xuXG5jb25zdCBDcmVhdGVMaXN0TW9kYWwgPSAoKSA9PiB7ICBcblxuICByZXR1cm4ge1xuICAgIG1ha2VDcmVhdGVMaXN0TW9kYWwsXG4gICAgc3RhcnRJbml0aWFsU2V0dXAsXG4gIH1cbn1cblxuY29uc3QgY3JlYXRlTGlzdE1vZGFsID0gQ3JlYXRlTGlzdE1vZGFsKCk7XG5cbmV4cG9ydCB7IGNyZWF0ZUxpc3RNb2RhbCB9O1xuIiwiY29uc3QgYWRkQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdNYWtlIGNhdGVnb3J5OiBUT0RPTElTVCcpO1xuICBjb25zb2xlLmxvZygnTWFrZSBjYXRlZ29yeTogRElTUExBWScpO1xufVxuXG5leHBvcnQgeyBhZGRDYXRlZ29yeSB9OyIsImltcG9ydCB7IGdldCB9IGZyb20gJy4vZ2V0RWxlbWVudHMuanMnO1xuXG5jb25zdCBpc091dHNpZGVNb2RhbENvbnRlbnRDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGNsaWNrZWRUYXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IG1vZGFsID0gZ2V0Lm1vZGFsKCk7XG4gIFxuICBpZiAoY2xpY2tlZFRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBnZXQubW9kYWwoKTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCB7IGNsb3NlTW9kYWwsIGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQgfTsiLCJjb25zdCBtYWtlQ2FuY2VsQnRuID0gKCkgPT4ge1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZUxpc3QtYnV0dG9ucycpO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWJ0bicsICdjYW5jZWwnKTtcbiAgY2FuY2VsQnRuLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuXG4gIHJldHVybiBjYW5jZWxCdG47XG59XG5cbmNvbnN0IG1ha2VDcmVhdGVCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjcmVhdGVCdG4uY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1idXR0b25zJyk7XG4gIGNyZWF0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnRuJywgJ2NyZWF0ZScpO1xuICBjcmVhdGVCdG4uaW5uZXJUZXh0ID0gJ0NyZWF0ZSc7XG5cbiAgcmV0dXJuIGNyZWF0ZUJ0bjtcbn1cblxuY29uc3QgbWFrZUJ1dHRvbkNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVMaXN0LW1vZGFsLWJ1dHRvbi1jb250YWluZXInKTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBtYWtlQ2FuY2VsQnRuKCk7XG4gIGNvbnN0IGNyZWF0ZUJ0biA9IG1ha2VDcmVhdGVCdG4oKTtcblxuICBidXR0b25Db250YWluZXIuYXBwZW5kKGNhbmNlbEJ0bik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQnRuKTtcblxuICByZXR1cm4gYnV0dG9uQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBtYWtlQnV0dG9uQ29udGFpbmVyIH07IiwiaW1wb3J0IHsgbWFrZUxhYmVsVGV4dENvbnRhaW5lciB9IGZyb20gJy4vbGFiZWxUZXh0Q29udGFpbmVyLmpzJztcbmltcG9ydCB7IG1ha2VUZXh0RmllbGRDb250YWluZXIgfSBmcm9tICcuL3RleHRGaWVsZENvbnRhaW5lci5qcyc7XG5cbmNvbnN0IG1ha2VDb250ZW50Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1tb2RhbC1jb250ZW50LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGxhYmxlVGV4dENvbnRhaW5lciA9IG1ha2VMYWJlbFRleHRDb250YWluZXIoKTtcbiAgY29uc3QgdGV4dEZpZWxkQ29udGFpbmVyID0gbWFrZVRleHRGaWVsZENvbnRhaW5lcigpO1xuXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFibGVUZXh0Q29udGFpbmVyKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0RmllbGRDb250YWluZXIpO1xuXG4gIHJldHVybiBjb250ZW50Q29udGFpbmVyO1xufSBcblxuZXhwb3J0IHsgbWFrZUNvbnRlbnRDb250YWluZXIgfTtcblxuXG5cblxuICBcblxuXG4iLCJjb25zdCBtYWtlTGFiZWxUZXh0ID0gKGxhYmVsKSA9PiB7XG4gIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsYWJlbFRleHQuY2xhc3NMaXN0LmFkZCgnTGFiZWxfX1RleHQnKTtcblxuICBpZiAobGFiZWwgIT0gJycpIHtcbiAgICBsYWJlbFRleHQuaW5uZXJUZXh0ID0gbGFiZWw7XG4gIH1cblxuICByZXR1cm4gbGFiZWxUZXh0O1xufVxuXG5jb25zdCBtYWtlTGFiZWxUZXh0Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1tb2RhbC1MYWJlbFRleHQtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgbGFiZWxUZXh0ID0gbWFrZUxhYmVsVGV4dCgnTkFNRSBUSElTIExJU1QnKTtcbiAgdGV4dENvbnRhaW5lci5hcHBlbmQobGFiZWxUZXh0KTtcblxuICByZXR1cm4gdGV4dENvbnRhaW5lcjtcbn0gXG5cbmV4cG9ydCB7IG1ha2VMYWJlbFRleHRDb250YWluZXIgfTtcbiAgIiwiaW1wb3J0ICcuLi9jc3MvY3JlYXRlTGlzdE1vZGFsLmNzcyc7XG5cbmltcG9ydCB7IG1ha2VCdXR0b25Db250YWluZXIgfSBmcm9tICcuL2J1dHRvbkNvbnRhaW5lci5qcyc7XG5pbXBvcnQgeyBtYWtlQ29udGVudENvbnRhaW5lciB9IGZyb20gJy4vY29udGVudENvbnRhaW5lci5qcyc7XG5cbmNvbnN0IG1ha2VDcmVhdGVMaXN0TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gIG1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlYXRlTGlzdCcpO1xuXG4gIGNvbnN0IGNyZWF0ZUxpc3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcmVhdGVMaXN0TW9kYWwuY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1tb2RhbCcpO1xuICBjcmVhdGVMaXN0TW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IG1ha2VCdXR0b25Db250YWluZXIoKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IG1ha2VDb250ZW50Q29udGFpbmVyKCk7XG5cbiAgXG4gIGNyZWF0ZUxpc3RNb2RhbC5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgY3JlYXRlTGlzdE1vZGFsLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdE1vZGFsKTtcblxuICByZXR1cm4gbW9kYWw7XG59XG5cbmV4cG9ydCB7IG1ha2VDcmVhdGVMaXN0TW9kYWwgfTsiLCJjb25zdCBtYWtlVGV4dEZpZWxkID0gKCkgPT4ge1xuICBjb25zdCB0ZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0RmllbGQuY2xhc3NMaXN0LmFkZCgndGV4dEZpZWxkJywgJ3RleHRGaWVsZC10aXRsZScpO1xuICB0ZXh0RmllbGQuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEnKTtcblxuICByZXR1cm4gdGV4dEZpZWxkO1xufVxuXG5jb25zdCBtYWtlVGV4dEZpZWxkQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB0ZXh0RmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGV4dEZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZUxpc3QtbW9kYWwtdGV4dEZpZWxkLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRleHRGaWVsZCA9IG1ha2VUZXh0RmllbGQoKTtcblxuICB0ZXh0RmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dEZpZWxkKTtcblxuICByZXR1cm4gdGV4dEZpZWxkQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBtYWtlVGV4dEZpZWxkQ29udGFpbmVyIH07IiwiY29uc3QgR2V0ID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVCdG4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWJ0bj1cImNyZWF0ZVwiXScpO1xuICB9XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS1idG49XCJjYW5jZWxcIl0nKTtcbiAgfVxuXG4gIGNvbnN0IHRpdGxlVGV4dGFyZWEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVMaXN0LW1vZGFsLXRleHRGaWVsZC1jb250YWluZXIgLnRleHRGaWVsZC10aXRsZScpO1xuICB9XG5cbiAgY29uc3QgbW9kYWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVMaXN0Jyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUJ0bixcbiAgICBjYW5jZWxCdG4sXG4gICAgdGl0bGVUZXh0YXJlYSxcbiAgICBtb2RhbFxuICB9XG59XG5cbmNvbnN0IGdldCA9IEdldCgpO1xuXG5leHBvcnQgeyBnZXQgfSIsImltcG9ydCB7IGdldCB9IGZyb20gJy4vZ2V0RWxlbWVudHMuanMnO1xuXG5jb25zdCBpc0VtcHR5ID0gKHN0cikgPT4ge1xuICBpZiAoc3RyID09PSAnJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBpc1RpdGxlVGV4dGFyZWFFbXB0eSA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGVUZXh0QXJlYSA9IGdldC50aXRsZVRleHRhcmVhKCk7XG4gIGNvbnN0IHRpdGxlID0gdGl0bGVUZXh0QXJlYS52YWx1ZTtcblxuICBpZiAoaXNFbXB0eSh0aXRsZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IHsgaXNUaXRsZVRleHRhcmVhRW1wdHkgfTsiLCJpbXBvcnQgeyBhZGRDYXRlZ29yeSB9IGZyb20gJy4vYWRkQ2F0ZWdvcnkuanMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXRFbGVtZW50cy5qcyc7XG5pbXBvcnQgeyBjbG9zZU1vZGFsLCBpc091dHNpZGVNb2RhbENvbnRlbnRDbGlja2VkIH0gZnJvbSAnLi9jbG9zZU1vZGFsLmpzJztcbmltcG9ydCB7IGlzVGl0bGVUZXh0YXJlYUVtcHR5IH0gZnJvbSAnLi9pc1RpdGxlVGV4dGFyZWFFbXB0eS5qcyc7XG5cbmNvbnN0IGVuYWJsZUNyZWF0ZUJ0blRvQWRkQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUJ0biA9IGdldC5jcmVhdGVCdG4oKTtcblxuICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFpc1RpdGxlVGV4dGFyZWFFbXB0eSgpKSB7XG4gICAgICBhZGRDYXRlZ29yeSgpO1xuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZW5hYmxlQ3JlYXRlQnRuVG9DbG9zZU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVCdG4gPSBnZXQuY3JlYXRlQnRuKCk7XG5cbiAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghaXNUaXRsZVRleHRhcmVhRW1wdHkoKSkge1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZW5hYmxlQ2FuY2VsQnRuVG9DbG9zZU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBjYW5jZWxCdG4gPSBnZXQuY2FuY2VsQnRuKCk7XG5cbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG59XG5cbmNvbnN0IGVuYWJsZVdpbmRvd1RvQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQoZXZlbnQpKSB7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9LCB7IG9uY2U6IHRydWUgfSk7XG59XG5cbmNvbnN0IHN0YXJ0SW5pdGlhbFNldHVwID0gKCkgPT4ge1xuICBlbmFibGVDYW5jZWxCdG5Ub0Nsb3NlTW9kYWwoKTtcbiAgZW5hYmxlV2luZG93VG9DbG9zZU1vZGFsKCk7XG4gIGVuYWJsZUNyZWF0ZUJ0blRvQWRkQ2F0ZWdvcnkoKTtcbiAgZW5hYmxlQ3JlYXRlQnRuVG9DbG9zZU1vZGFsKCk7XG59XG5cbmV4cG9ydCB7IHN0YXJ0SW5pdGlhbFNldHVwIH07IiwiaW1wb3J0IHsgY2hhbmdlQ2F0ZWdvcnkgfSBmcm9tICcuL2NoYW5nZUNhdGVnb3J5LmpzJztcbmltcG9ydCB7IG1ha2VDcmVhdGVUb2RvTW9kYWwgfSBmcm9tICcuL2VsZW1lbnRzL21ha2VDcmVhdGVUb2RvTW9kYWwuanMnO1xuaW1wb3J0IHsgc3RhcnRJbml0aWFsU2V0dXAgfSBmcm9tICcuL3N0YXJ0SW5pdGlhbFNldHVwLmpzJztcblxuY29uc3QgQ3JlYXRlVG9kb01vZGFsID0gKCkgPT4ge1xuICBcbiAgcmV0dXJuIHtcbiAgICBjaGFuZ2VDYXRlZ29yeSxcbiAgICBtYWtlQ3JlYXRlVG9kb01vZGFsLFxuICAgIHN0YXJ0SW5pdGlhbFNldHVwXG4gIH1cbn1cblxuY29uc3QgY3JlYXRlVG9kb01vZGFsID0gQ3JlYXRlVG9kb01vZGFsKCk7XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG9Nb2RhbCB9O1xuIiwiY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ01ha2UgVG9kbzogVE9ETycpO1xuICBjb25zb2xlLmxvZygnQUREIFRPRE86IFRPRE9MSVNUJyk7XG4gIGNvbnNvbGUubG9nKCdBREQgVE9ETzogRElTUExBWScpO1xufVxuXG5leHBvcnQgeyBhZGRUb2RvIH07XG4iLCJpbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldEVsZW1lbnRzLmpzJztcblxuY29uc3QgY2hhbmdlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcbiAgY29uc3QgY2F0ZWdvcnlCdG4gPSBnZXQuY2F0ZWdvcnlCdG4oKTtcbiAgY2F0ZWdvcnlCdG4uaW5uZXJUZXh0ID0gY2F0ZWdvcnk7XG59XG5cbmV4cG9ydCB7IGNoYW5nZUNhdGVnb3J5IH07IiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXRFbGVtZW50cy5qcyc7XG5cbmNvbnN0IGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgY2xpY2tlZFRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3QgbW9kYWwgPSBnZXQubW9kYWwoKTtcbiAgXG4gIGlmIChjbGlja2VkVGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGdldC5tb2RhbCgpO1xuICBtb2RhbC5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IHsgY2xvc2VNb2RhbCwgaXNPdXRzaWRlTW9kYWxDb250ZW50Q2xpY2tlZCB9OyIsImNvbnN0IG1ha2VBZGRUb2RvQnRuQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBhZGRUb2RvQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZFRvZG9CdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlVG9kby1tb2RhbC1hZGRUb2RvQnRuLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG9CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNyZWF0ZVRvZG9CdG5zLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRvZG8tYnV0dG9ucycpO1xuICBjcmVhdGVUb2RvQnRucy5pbm5lclRleHQgPSBcIkFkZCBUb2RvXCI7XG5cbiAgYWRkVG9kb0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUb2RvQnRucyk7XG5cbiAgcmV0dXJuIGFkZFRvZG9CdG5Db250YWluZXI7XG59XG5cbmV4cG9ydCB7IG1ha2VBZGRUb2RvQnRuQ29udGFpbmVyIH07IiwiY29uc3QgbWFrZUxhYmVsVGV4dCA9IChsYWJlbCkgPT4ge1xuICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGFiZWxUZXh0LmNsYXNzTGlzdC5hZGQoJ0xhYmVsX19UZXh0Jyk7XG4gIGxhYmVsVGV4dC5pbm5lclRleHQgPSBsYWJlbDtcblxuICByZXR1cm4gbGFiZWxUZXh0O1xufVxuXG5leHBvcnQgeyBtYWtlTGFiZWxUZXh0IH0iLCJpbXBvcnQgJy4uL2Nzcy9jcmVhdGVUb2RvTW9kYWwuY3NzJztcbmltcG9ydCB7IG1ha2VUb2RvaW5mb0NvbnRhaW5lciB9IGZyb20gJy4vdG9kb2luZm9Db250YWluZXIuanMnO1xuaW1wb3J0IHsgbWFrZUFkZFRvZG9CdG5Db250YWluZXIgfSBmcm9tICcuL2FkZFRvZG9CdG5Db250YWluZXIuanMnO1xuXG5jb25zdCBtYWtlQ3JlYXRlVG9kb01vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NyZWF0ZVRvZG8nKTtcblxuICBjb25zdCBjcmVhdGVUb2RvTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlVG9kb01vZGFsLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRvZG8tbW9kYWwnKTtcbiAgY3JlYXRlVG9kb01vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuICBjb25zdCB0b2RvSW5mb0NvbnRhaW5lciA9IG1ha2VUb2RvaW5mb0NvbnRhaW5lcigpO1xuICBjb25zdCBhZGRUb2RvQnRuQ29udGFpbmVyID0gbWFrZUFkZFRvZG9CdG5Db250YWluZXIoKTtcbiAgXG4gIGNyZWF0ZVRvZG9Nb2RhbC5hcHBlbmRDaGlsZCh0b2RvSW5mb0NvbnRhaW5lcik7XG4gIGNyZWF0ZVRvZG9Nb2RhbC5hcHBlbmRDaGlsZChhZGRUb2RvQnRuQ29udGFpbmVyKTtcblxuICBtb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVUb2RvTW9kYWwpO1xuXG4gIHJldHVybiBtb2RhbDtcbn1cblxuZXhwb3J0IHsgbWFrZUNyZWF0ZVRvZG9Nb2RhbCB9OyIsImltcG9ydCB7IG1ha2VMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsVGV4dC5qcyc7XG5cbmNvbnN0IG1ha2VUb2RvaW5mb0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB0b2RvaW5mb0NvbnRhaW5lckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tY29udGFpbmVyLWRlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3QgbGFiZWxUZXh0ID0gbWFrZUxhYmVsVGV4dCgnREVTQ1JJUFRJT04nKTtcblxuICBjb25zdCB0b2RvaW5mb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9pbmZvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tZGVzY3JpcHRpb24nKTtcblxuICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZGVzY3JpcHRpb25UZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0RmllbGQnLCAndGV4dEZpZWxkLWRlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEwJyk7XG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdJbnNlcnQgeW91ciBub3RlcyBoZXJlJyk7XG5cbiAgdG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICB0b2RvaW5mb0NvbnRhaW5lckRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRvZG9pbmZvRGVzY3JpcHRpb24pO1xuICB0b2RvaW5mb0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dGFyZWEpO1xuXG4gIHJldHVybiB0b2RvaW5mb0NvbnRhaW5lckRlc2NyaXB0aW9uO1xufVxuXG5leHBvcnQgeyBtYWtlVG9kb2luZm9EZXNjcmlwdGlvbkNvbnRhaW5lciB9OyIsImltcG9ydCB7IG1ha2VMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsVGV4dC5qcyc7XG5cbmNvbnN0IG1ha2VUb2RvaW5mb1RpdGxlQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB0b2RvaW5mb0NvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9pbmZvQ29udGFpbmVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tY29udGFpbmVyLXRpdGxlJyk7XG5cbiAgY29uc3QgbGFiZWxUZXh0ID0gbWFrZUxhYmVsVGV4dCgnVElUTEUnKTtcblxuICBjb25zdCB0b2RvaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9pbmZvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tdGl0bGUnKTtcblxuICBjb25zdCB0aXRsZVRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGl0bGVUZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0RmllbGQnLCAndGV4dEZpZWxkLXRpdGxlJylcbiAgdGl0bGVUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMScpO1xuICB0aXRsZVRleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnSSB3YW50IHRvLi4uJyk7XG5cbiAgdG9kb2luZm9Db250YWluZXJUaXRsZS5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICB0b2RvaW5mb0NvbnRhaW5lclRpdGxlLmFwcGVuZENoaWxkKHRvZG9pbmZvVGl0bGUpO1xuICB0b2RvaW5mb1RpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dGFyZWEpO1xuXG4gIHJldHVybiB0b2RvaW5mb0NvbnRhaW5lclRpdGxlO1xufVxuXG5leHBvcnQgeyBtYWtlVG9kb2luZm9UaXRsZUNvbnRhaW5lciB9OyIsImltcG9ydCB7IG1ha2VMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsVGV4dC5qcyc7XG5cbmNvbnN0IG1ha2VUb2RvaW5mb0NhdGVnb3J5Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB0b2RvaW5mb0NvbnRhaW5lckNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tY29udGFpbmVyLWNhdGVnb3J5Jyk7XG5cbiAgY29uc3QgbGFiZWxUZXh0ID0gbWFrZUxhYmVsVGV4dCgnQ0FURUdPUlknKTtcblxuICBjb25zdCB0b2RvaW5mb0NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9pbmZvQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tY2F0ZWdvcnknKTtcblxuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYXRlZ29yeVNlbGVjdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvaW5mby1jYXRlZ29yeS1zZWxlY3RCdG4nKTtcbiAgLy8gVGhpcyBuZWVkcyB0byBiZSBjaGFuZ2VkIGluIHRoZSBmdXR1cmVcbiAgY2F0ZWdvcnlTZWxlY3Rpb25CdG4uaW5uZXJUZXh0ID0gXCJUaGUgT2RpbiBQcm9qZWN0XCJcblxuICB0b2RvaW5mb0NvbnRhaW5lckNhdGVnb3J5LmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQodG9kb2luZm9DYXRlZ29yeSk7XG4gIHRvZG9pbmZvQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rpb25CdG4pO1xuXG4gIHJldHVybiB0b2RvaW5mb0NvbnRhaW5lckNhdGVnb3J5O1xufVxuXG5leHBvcnQgeyBtYWtlVG9kb2luZm9DYXRlZ29yeUNvbnRhaW5lciB9OyIsImltcG9ydCB7IG1ha2VUb2RvaW5mb1RpdGxlQ29udGFpbmVyIH0gZnJvbSAnLi90b2RvSW5mb1RpdGxlQ29udGFpbmVyLmpzJztcbmltcG9ydCB7IG1ha2VUb2RvaW5mb0Rlc2NyaXB0aW9uQ29udGFpbmVyIH0gZnJvbSAnLi90b2RvSW5mb0Rlc2NyaXB0aW9uQ29udGFpbmVyLmpzJztcbmltcG9ydCB7IG1ha2VUb2RvaW5mb0NhdGVnb3J5Q29udGFpbmVyIH0gZnJvbSAnLi90b2RvaW5mb0NhdGVnb3J5Q29udGFpbmVyLmpzJztcblxuY29uc3QgbWFrZVRvZG9pbmZvQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB0b2RvSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUb2RvLW1vZGFsLXRvZG9pbmZvLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRvZG9pbmZvVGl0bGVDb250YWluZXIgPSBtYWtlVG9kb2luZm9UaXRsZUNvbnRhaW5lcigpO1xuICBjb25zdCB0b2RvaW5mb0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gbWFrZVRvZG9pbmZvRGVzY3JpcHRpb25Db250YWluZXIoKTtcbiAgY29uc3QgdG9kb2luZm9DYXRlZ29yeUNvbnRhaW5lciA9IG1ha2VUb2RvaW5mb0NhdGVnb3J5Q29udGFpbmVyKCk7XG5cbiAgdG9kb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb2luZm9UaXRsZUNvbnRhaW5lcik7XG4gIHRvZG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9pbmZvRGVzY3JpcHRpb25Db250YWluZXIpO1xuICB0b2RvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvaW5mb0NhdGVnb3J5Q29udGFpbmVyKTtcblxuICByZXR1cm4gdG9kb0luZm9Db250YWluZXI7XG59XG5cbmV4cG9ydCB7IG1ha2VUb2RvaW5mb0NvbnRhaW5lciB9OyIsImNvbnN0IEdldCA9ICgpID0+IHtcbiAgY29uc3QgYWRkVG9kb0J0biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVRvZG8tYnV0dG9ucycpO1xuICB9XG5cbiAgY29uc3QgdGl0bGVUZXh0YXJlYSA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9pbmZvLXRpdGxlIHRleHRhcmVhJyk7XG4gIH1cblxuICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2luZm8tZGVzY3JpcHRpb24gdGV4dGFyZWEnKTtcbiAgfVxuXG4gIGNvbnN0IGNhdGVnb3J5QnRuID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2luZm8tY2F0ZWdvcnkgYnV0dG9uJyk7XG4gIH1cblxuICBjb25zdCBtb2RhbCA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVRvZG8nKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkVG9kb0J0bixcbiAgICB0aXRsZVRleHRhcmVhLFxuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEsXG4gICAgY2F0ZWdvcnlCdG4sXG4gICAgbW9kYWxcbiAgfVxufVxuXG5jb25zdCBnZXQgPSBHZXQoKTtcblxuZXhwb3J0IHsgZ2V0IH0iLCJpbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldEVsZW1lbnRzLmpzJztcblxuY29uc3QgaXNFbXB0eSA9IChzdHIpID0+IHtcbiAgaWYgKHN0ciA9PT0gJycpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgaXNUaXRsZVRleHRhcmVhRW1wdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlVGV4dEFyZWEgPSBnZXQudGl0bGVUZXh0YXJlYSgpO1xuICBjb25zdCB0aXRsZSA9IHRpdGxlVGV4dEFyZWEudmFsdWU7XG5cbiAgaWYgKGlzRW1wdHkodGl0bGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7IGlzVGl0bGVUZXh0YXJlYUVtcHR5IH07IiwiaW1wb3J0IHsgYWRkVG9kbyB9IGZyb20gJy4vYWRkVG9kby5qcyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldEVsZW1lbnRzLmpzJztcbmltcG9ydCB7IGNsb3NlTW9kYWwsIGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQgfSBmcm9tICcuL2Nsb3NlTW9kYWwuanMnO1xuaW1wb3J0IHsgaXNUaXRsZVRleHRhcmVhRW1wdHkgfSBmcm9tICcuL2lzVGl0bGVUZXh0YXJlYUVtcHR5LmpzJztcblxuLy8gQWRkIFRvZG8gQnRuIGVuYWJsZVxuY29uc3QgZW5hYmxlQWRkVG9kb0J0blRvQWRkVG9kbyA9ICgpID0+IHtcbiAgY29uc3QgYWRkVG9kb0J0biA9IGdldC5hZGRUb2RvQnRuKCk7XG5cbiAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIWlzVGl0bGVUZXh0YXJlYUVtcHR5KCkpIHtcbiAgICAgIGFkZFRvZG8oKTtcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCBlbmFibGVBZGRUb2RvQnRuVG9DbG9zZU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBhZGRUb2RvQnRuID0gZ2V0LmFkZFRvZG9CdG4oKTtcblxuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghaXNUaXRsZVRleHRhcmVhRW1wdHkoKSkge1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfSlcbn1cblxuLy8gQ2F0ZWdvcnkgU2VsZWN0aW9uIEJ0biBlbmFibGVcbmNvbnN0IGVuYWJsZUNhdGVnb3J5QnRuVG9PcGVuQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcnlCdG4gPSBnZXQuY2F0ZWdvcnlCdG4oKTtcblxuICBjYXRlZ29yeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnb3BlbiBjYXRlZ29yeSBzZWxlY3Rpb24gbW9kYWwnKTtcbiAgfSk7XG59XG5cbmNvbnN0IGVuYWJsZVdpbmRvd1RvQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQoZXZlbnQpKSB7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9LCB7IG9uY2U6IHRydWUgfSk7XG59XG5cbmNvbnN0IHN0YXJ0SW5pdGlhbFNldHVwID0gKCkgPT4ge1xuICBlbmFibGVBZGRUb2RvQnRuVG9BZGRUb2RvKCk7XG4gIGVuYWJsZUFkZFRvZG9CdG5Ub0Nsb3NlTW9kYWwoKTtcbiAgZW5hYmxlV2luZG93VG9DbG9zZU1vZGFsKCk7XG4gIGVuYWJsZUNhdGVnb3J5QnRuVG9PcGVuQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCgpO1xufVxuXG5cbmV4cG9ydCB7IHN0YXJ0SW5pdGlhbFNldHVwIH07IiwiaW1wb3J0IHsgY3JlYXRlTGlzdE1vZGFsIH0gZnJvbSAnLi9jcmVhdGVMaXN0TW9kYWwvQ3JlYXRlTGlzdE1vZGFsLmpzJztcbmltcG9ydCB7IGNyZWF0ZVRvZG9Nb2RhbCB9IGZyb20gJy4vY3JlYXRlVG9kb01vZGFsL0NyZWF0ZVRvZG9Nb2RhbC5qcyc7XG5pbXBvcnQgeyBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsIH0gZnJvbSAnLi9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL0NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuanMnO1xuXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9Ub2RvL3RvZG8uanMnO1xuaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tICcuL1RvZG9MaXN0L3RvZG9saXN0LmpzJztcbi8vIGltcG9ydCB7IG1ha2VUb2RvRGV0YWlsc0NhcmRWaWV3IH0gZnJvbSAnLi90b2RvRGV0YWlsc0NhcmRWaWV3L2VsZW1lbnRzL21ha2VUb2RvRGV0YWlsc0NhcmRWaWV3LmpzJztcbmltcG9ydCB7IG1ha2VUb2RvRWRpdE1haW4gfSBmcm9tICcuL3RvZG9EZXRhaWxzQ2FyZFZpZXcvZWxlbWVudHMvbWFpbi9tYWluLmpzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFrZVRvZG9FZGl0TWFpbigpKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgbWFrZUxhYmVsVGV4dCB9IGZyb20gJy4uL2xhYmVsVGV4dC5qcyc7XG5cbmNvbnN0IG1ha2VEdWVEYXRlUm93ID0gKCkgPT4ge1xuICBjb25zdCBkdWVEYXRlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGVSb3cuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtbWFpbi1EdWVEYXRlUm93JywgJ1RvZG9FZGl0LXBhZGRlcicpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IG1ha2VMYWJlbFRleHQoJ0RVRSBEQVRFJyk7XG5cbiAgY29uc3QgZHVlRGF0ZUlucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGVJbnB1dEJveC5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1EdWVEYXRlQm94Jyk7XG5cbiAgLy8gU2hvdWxkIGJlIGl0cyBvd24gbW9kdWxlIGxhdGVyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdUb2RvRWRpdC1EdWVEYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnRHVlRGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcyMDIwLTExLTAzJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsICcyMDIwLTExLTAzJyk7XG5cbiAgLy8gQXBwZW5kaW5nIENoaWxkXG4gIGR1ZURhdGVSb3cuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgZHVlRGF0ZVJvdy5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXRCb3gpO1xuICBcbiAgZHVlRGF0ZUlucHV0Qm94LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgcmV0dXJuIGR1ZURhdGVSb3c7XG59XG5cbmV4cG9ydCB7IG1ha2VEdWVEYXRlUm93IH07IiwiaW1wb3J0IHsgbWFrZUxhYmVsVGV4dCB9IGZyb20gJy4uL2xhYmVsVGV4dC5qcyc7XG5cbmNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChzdHIpID0+IHtcbiAgY29uc3QgY2FwaXRhbGl6ZWRTdHIgPSBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbiAgcmV0dXJuIGNhcGl0YWxpemVkU3RyO1xufVxuXG5jb25zdCBtYWtlUHJpb3JpdHlCdG4gPSAoaW1wb3J0YW5jZSkgPT4ge1xuICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBpZCA9IGBwcmlvcml0eS0ke2ltcG9ydGFuY2V9LWJ0bmA7XG4gIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIC8vIGlubmVydGV4dCBvZiBidG4gaGFzICdJbXBvcnRhbmNlJywgbm90ICdpbXBtb3J0YW5jZSdcbiAgcHJpb3JpdHlCdG4uaW5uZXJUZXh0ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGltcG9ydGFuY2UpO1xuXG4gIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXRhZycsICdwcmlvcml0eS1idG5zLW5vdC1zZWxlY3RlZCcpO1xuXG4gIHJldHVybiBwcmlvcml0eUJ0bjtcbn1cblxuY29uc3QgbWFrZVRhZ1JvdyA9ICgpID0+IHtcbiAgY29uc3QgdGFnUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhZ1Jvdy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluLXRhZ1JvdycsICdUb2RvRWRpdC1wYWRkZXInKTtcblxuICBjb25zdCBsYWJlbFRleHQgPSBtYWtlTGFiZWxUZXh0KCdUQUdTJyk7XG4gIGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFncy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1UYWdzJyk7XG4gIFxuICB0YWdSb3cuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdGFnUm93LmFwcGVuZENoaWxkKHRhZ3MpO1xuXG4gIHRhZ3MuYXBwZW5kQ2hpbGQobWFrZVByaW9yaXR5QnRuKCdpbXBvcnRhbnQnKSk7XG4gIHRhZ3MuYXBwZW5kQ2hpbGQobWFrZVByaW9yaXR5QnRuKCdoaWdoJykpO1xuICB0YWdzLmFwcGVuZENoaWxkKG1ha2VQcmlvcml0eUJ0bignbWlkZGxlJykpO1xuICB0YWdzLmFwcGVuZENoaWxkKG1ha2VQcmlvcml0eUJ0bignbG93JykpO1xuXG4gIHJldHVybiB0YWdSb3c7XG59XG5cbmV4cG9ydCB7IG1ha2VUYWdSb3cgfTsiLCJpbXBvcnQgeyBtYWtlTGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbFRleHQuanMnO1xuXG5jb25zdCBtYWtlQ3JlYXRlZERhdGVSb3cgPSAoZGF0ZSkgPT4ge1xuICAvLyBNYXliZSBJIGNhbiBpbXBvcnQgc29tZSBsaWJyYXJ5IHRvIGdldCB0b2RheSdzIGRhdGVcblxuICBjb25zdCBjcmVhdGVkRGF0ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcmVhdGVkRGF0ZVJvdy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluLUNyZWF0ZWREYXRlUm93JywgJ1RvZG9FZGl0LXBhZGRlcicpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IG1ha2VMYWJlbFRleHQoJ0NSRUFURUQgREFURScpO1xuXG4gIGNvbnN0IGNyZWF0ZWREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZWREYXRlLmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LUNyZWF0ZWREYXRlJyk7XG4gIC8vIERZTkFNSUMgREFURSBORUVERURcbiAgY3JlYXRlZERhdGUuaW5uZXJUZXh0ID0gJzIwMjAuMTEuMDMnO1xuXG4gIGNyZWF0ZWREYXRlUm93LmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIGNyZWF0ZWREYXRlUm93LmFwcGVuZENoaWxkKGNyZWF0ZWREYXRlKTtcblxuICByZXR1cm4gY3JlYXRlZERhdGVSb3c7XG59XG5cbmV4cG9ydCB7IG1ha2VDcmVhdGVkRGF0ZVJvdyB9OyIsImltcG9ydCB7IG1ha2VMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsVGV4dC5qcyc7XG5cbmNvbnN0IG1ha2VEZXNjcmlwdGlvblJvdyA9ICgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25Sb3cuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtbWFpbi1EZXNjcmlwdGlvblJvdycsICdUb2RvRWRpdC1wYWRkZXInKTtcblxuICBjb25zdCBsYWJlbFRleHQgPSBtYWtlTGFiZWxUZXh0KCdERVNDUklQVElPTicpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBkZXNjcmlwdGlvblRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ3RleHRGaWVsZCcsICd0ZXh0RmllbGQtZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNycpO1xuXG4gIGRlc2NyaXB0aW9uUm93LmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIGRlc2NyaXB0aW9uUm93LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dEFyZWEpO1xuXG4gIHJldHVybiBkZXNjcmlwdGlvblJvdztcbn1cblxuZXhwb3J0IHsgbWFrZURlc2NyaXB0aW9uUm93IH07IiwiY29uc3QgbWFrZUxhYmVsVGV4dCA9IChsYWJlbCkgPT4ge1xuICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGFiZWxUZXh0LmNsYXNzTGlzdC5hZGQoJ0xhYmVsX19UZXh0Jyk7XG4gIGxhYmVsVGV4dC5pbm5lclRleHQgPSBsYWJlbDtcblxuICByZXR1cm4gbGFiZWxUZXh0O1xufVxuXG5leHBvcnQgeyBtYWtlTGFiZWxUZXh0IH07IiwiaW1wb3J0IHsgbWFrZUxhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWxUZXh0LmpzJztcblxuY29uc3QgbWFrZVRpdGxlUm93ID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZVJvdy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluLXRpdGxlUm93JywgJ1RvZG9FZGl0LXBhZGRlcicpO1xuICBcbiAgY29uc3QgbGFiZWxUZXh0ID0gbWFrZUxhYmVsVGV4dCgnVElUTEUnKTtcbiAgXG4gIGNvbnN0IHRpdGxlVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0aXRsZVRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ3RleHRGaWVsZCcsICdUb2RvRWRpdC10aXRsZS10ZXh0ZmllbGQnKTtcbiAgdGl0bGVUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMScpO1xuXG5cbiAgdGl0bGVSb3cuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdGl0bGVSb3cuYXBwZW5kQ2hpbGQodGl0bGVUZXh0QXJlYSk7XG5cbiAgcmV0dXJuIHRpdGxlUm93O1xufVxuXG5leHBvcnQgeyBtYWtlVGl0bGVSb3cgfTsiLCJpbXBvcnQgeyBtYWtlVGl0bGVSb3cgfSBmcm9tICcuLi9tYWluL2VsZW1lbnRzL3RpdGxlUm93LmpzJ1xuaW1wb3J0IHsgbWFrZVRhZ1JvdyB9IGZyb20gJy4uL21haW4vZWxlbWVudHMvVGFnUm93LmpzJztcbmltcG9ydCB7IG1ha2VEdWVEYXRlUm93IH0gZnJvbSAnLi4vbWFpbi9lbGVtZW50cy9EdWVEYXRlUm93LmpzJztcbmltcG9ydCB7IG1ha2VEZXNjcmlwdGlvblJvdyB9IGZyb20gJy4uL21haW4vZWxlbWVudHMvZGVzY3JpcHRpb25Sb3cuanMnO1xuaW1wb3J0IHsgbWFrZUNyZWF0ZWREYXRlUm93IH0gZnJvbSAnLi4vbWFpbi9lbGVtZW50cy9jcmVhdGVkRGF0ZVJvdy5qcyc7XG5cblxuY29uc3QgbWFrZVRvZG9FZGl0TWFpbiA9ICgpID0+IHtcbiAgY29uc3QgdG9kb0VkaXRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9FZGl0TWFpbi5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluJyk7XG5cbiAgdG9kb0VkaXRNYWluLmFwcGVuZENoaWxkKG1ha2VUaXRsZVJvdygpKTtcbiAgdG9kb0VkaXRNYWluLmFwcGVuZENoaWxkKG1ha2VUYWdSb3coKSk7XG4gIHRvZG9FZGl0TWFpbi5hcHBlbmRDaGlsZChtYWtlRHVlRGF0ZVJvdygpKTtcbiAgdG9kb0VkaXRNYWluLmFwcGVuZENoaWxkKG1ha2VEZXNjcmlwdGlvblJvdygpKTtcbiAgdG9kb0VkaXRNYWluLmFwcGVuZENoaWxkKG1ha2VDcmVhdGVkRGF0ZVJvdygpKTtcblxuICByZXR1cm4gdG9kb0VkaXRNYWluO1xufVxuXG5leHBvcnQgeyBtYWtlVG9kb0VkaXRNYWluIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9