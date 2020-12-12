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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/todoDetailsCardView/css/todoDetailsCardView.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/todoDetailsCardView/css/todoDetailsCardView.css ***!
  \***************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --extra-small-font-size: 10px;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n  /* TodoDetails-CardView */\n  --CardPadder-right: 24px;\n  --CardPadder-left: 24px;\n  --CardPadder-top: 8px;\n  --CardPadder-bottom: 8px;\n  --todo-edit-header-text-color: #e4e4e4;\n  --todo-edit-textfield-title-font-size: 24px;\n  --font-size-base: 15px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* TodoDetails-CardView */\n\n.TodoDetails-CardView {\n  width: 350px;\n  height: 450px;\n  min-width: 350px;\n  min-height: 450px;\n  color: var(--color-text-1);\n  background-color: var(--card-bg-1-color);\n  border-radius: var(--modal-border-radius);\n\n  border: 1px solid black;\n}\n\n.TodoEdit-Pane {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.TodoEdit-header {\n  min-height: 54px;\n  \n  background-color: var(--card-above-bg-color);\n\n  display: flex;\n  align-items: center;\n  padding-left: var(--CardPadder-left);\n  padding-right: var(--CardPadder-right);\n  font-size: var(--label-font-size);\n  color: var(--todo-edit-header-text-color);\n}\n\n.TodoEdit-main {\n  flex: 1 0 0;\n  /* overflow-y: scroll; */\n  display: flex;\n  flex-direction: column;\n\n  padding-top: var(--CardPadder-top);\n  padding-bottom: var(--CardPadder-bottom);\n  padding-right: var(--CardPadder-right);\n  padding-left: var(--CardPadder-left);\n}\n\n.TodoEdit-padder {\n  padding-top: var(--CardPadder-top);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.TodoEdit-main-titleRow {\n\n}\n\n.TodoEdit-Tags {\n  display: flex;\n}\n\n.priority-tag {\n  border-radius: 12px;\n  height: 20px;\n  width: 60px;\n  margin-right: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: var(--extra-small-font-size);\n  background-color: #4b4b4b;\n}\n\n.priority-tag:active {\n  transform: scale(0.95)\n}\n\n.important-selected {\n  background-color: #EA3232;\n}\n.high-selected {\n  background-color: #FCBA3A;\n}\n.middle-selected {\n  background-color: #50b767;\n}\n.low-selected {\n  background-color: #a6a6a6;\n}\n\n/* .priority-btns-not-selected {\n  background-color: #4b4b4b;\n} */\n\n.TodoEdit-title-textfield {\n  font-size: var(--todo-edit-textfield-title-font-size);\n}\n\n.TodoEdit-main-tagRow {\n  padding-top: var(--CardPadder-top);\n}\n\n.TodoEdit-CreatedDate {\n  font-size: var(--font-size-base);\n}", "",{"version":3,"sources":["webpack://./src/todoDetailsCardView/css/todoDetailsCardView.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,qDAAqD;EACrD,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;EAC5B,uBAAuB;EACvB,uBAAuB;EACvB,8CAA8C;EAC9C,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,6BAA6B;EAC7B,yCAAyC;EACzC,gCAAgC;EAChC,8BAA8B;EAC9B,0CAA0C;EAC1C,yCAAyC;EACzC,iCAAiC;EACjC,uCAAuC;EACvC,uBAAuB;EACvB,gCAAgC;EAChC,oBAAoB;EACpB,cAAc;;EAEd,2BAA2B;EAC3B,8BAA8B;EAC9B,+BAA+B;EAC/B,2BAA2B;EAC3B,wBAAwB;;EAExB,sBAAsB;EACtB,6BAA6B;EAC7B,yCAAyC;EACzC,uCAAuC;EACvC,sCAAsC;EACtC,kCAAkC;EAClC,0BAA0B;;EAE1B,yBAAyB;EACzB,wBAAwB;EACxB,uBAAuB;EACvB,qBAAqB;EACrB,wBAAwB;EACxB,sCAAsC;EACtC,2CAA2C;EAC3C,sBAAsB;AACxB;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA,oBAAoB;;AAEpB;EACE,iCAAiC;EACjC,qCAAqC;EACrC,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,6BAA6B;EAC7B,UAAU;EACV,0BAA0B;EAC1B,sCAAsC;AACxC;;AAEA;;EAEE,aAAa;EACb,6CAA6C;EAC7C,iDAAiD;EACjD,gCAAgC;AAClC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA,yBAAyB;;AAEzB;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;EAC1B,wCAAwC;EACxC,yCAAyC;;EAEzC,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;;EAEhB,4CAA4C;;EAE5C,aAAa;EACb,mBAAmB;EACnB,oCAAoC;EACpC,sCAAsC;EACtC,iCAAiC;EACjC,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,wBAAwB;EACxB,aAAa;EACb,sBAAsB;;EAEtB,kCAAkC;EAClC,wCAAwC;EACxC,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;EACE,kCAAkC;;EAElC,aAAa;EACb,sBAAsB;AACxB;;AAEA;;AAEA;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,kBAAkB;;EAElB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,uCAAuC;EACvC,yBAAyB;AAC3B;;AAEA;EACE;AACF;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;;AAEA;;GAEG;;AAEH;EACE,qDAAqD;AACvD;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --extra-small-font-size: 10px;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n  /* TodoDetails-CardView */\n  --CardPadder-right: 24px;\n  --CardPadder-left: 24px;\n  --CardPadder-top: 8px;\n  --CardPadder-bottom: 8px;\n  --todo-edit-header-text-color: #e4e4e4;\n  --todo-edit-textfield-title-font-size: 24px;\n  --font-size-base: 15px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* TodoDetails-CardView */\n\n.TodoDetails-CardView {\n  width: 350px;\n  height: 450px;\n  min-width: 350px;\n  min-height: 450px;\n  color: var(--color-text-1);\n  background-color: var(--card-bg-1-color);\n  border-radius: var(--modal-border-radius);\n\n  border: 1px solid black;\n}\n\n.TodoEdit-Pane {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.TodoEdit-header {\n  min-height: 54px;\n  \n  background-color: var(--card-above-bg-color);\n\n  display: flex;\n  align-items: center;\n  padding-left: var(--CardPadder-left);\n  padding-right: var(--CardPadder-right);\n  font-size: var(--label-font-size);\n  color: var(--todo-edit-header-text-color);\n}\n\n.TodoEdit-main {\n  flex: 1 0 0;\n  /* overflow-y: scroll; */\n  display: flex;\n  flex-direction: column;\n\n  padding-top: var(--CardPadder-top);\n  padding-bottom: var(--CardPadder-bottom);\n  padding-right: var(--CardPadder-right);\n  padding-left: var(--CardPadder-left);\n}\n\n.TodoEdit-padder {\n  padding-top: var(--CardPadder-top);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.TodoEdit-main-titleRow {\n\n}\n\n.TodoEdit-Tags {\n  display: flex;\n}\n\n.priority-tag {\n  border-radius: 12px;\n  height: 20px;\n  width: 60px;\n  margin-right: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: var(--extra-small-font-size);\n  background-color: #4b4b4b;\n}\n\n.priority-tag:active {\n  transform: scale(0.95)\n}\n\n.important-selected {\n  background-color: #EA3232;\n}\n.high-selected {\n  background-color: #FCBA3A;\n}\n.middle-selected {\n  background-color: #50b767;\n}\n.low-selected {\n  background-color: #a6a6a6;\n}\n\n/* .priority-btns-not-selected {\n  background-color: #4b4b4b;\n} */\n\n.TodoEdit-title-textfield {\n  font-size: var(--todo-edit-textfield-title-font-size);\n}\n\n.TodoEdit-main-tagRow {\n  padding-top: var(--CardPadder-top);\n}\n\n.TodoEdit-CreatedDate {\n  font-size: var(--font-size-base);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/todoListCardView/css/todoListCardView.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/todoListCardView/css/todoListCardView.css ***!
  \*********************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* TodoList-CardView */\n\n.TodoList-CardView {\n  width: 350px;\n  height: 450px;\n  min-width: 350px;\n  min-height: 450px;\n  background-color: var(--card-bg-1-color);\n  border-radius: var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.TodoList-CardView-header {\n  min-height: 63px;\n  padding-left: 5%;\n  color: var(--todo-item-header-text-color);\n  font-size: var(--todo-item-header-font-size);\n  display: flex;\n  align-items: center;\n  font-weight: var(--font-weight-semi-bold);\n}\n\n.TodoList-CardView-main {\n  flex: 1 0 0;\n  display: flex;\n  flex-direction: column;\n\n  overflow-y: scroll;  \n}\n\n.TodoList-main-rows {\n  min-height: 63px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.TodoItem {\n  width: 90%;\n  height: 48px;\n  color: var(--color-text-1);\n  background-color: var(--todo-item-bg-color);\n  border-radius: var(--todo-item-border-radius);\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.TodoItem:hover,\n.TodoItem:focus {\n  border: 1px solid var(--action-color);\n}\n\n.TodoItem:focus {\n  background-color: var(--todo-item-bg-highlighted-color);\n  outline: none;\n}\n\n.TodoItem-checked {\n  color: var(--todo-item-text-checked-color);\n}\n\n.TodoItem-checkBox {\n  min-width: 48px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n}\n\n.TodoItem-title {\n  flex: 1 0 0;\n\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n\n.TodoItem-title-checked {\n  text-decoration: line-through;\n}\n\n.TodoItem-delete-btn {\n  margin-right: 20px;\n}", "",{"version":3,"sources":["webpack://./src/todoListCardView/css/todoListCardView.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,qDAAqD;EACrD,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;EAC5B,uBAAuB;EACvB,uBAAuB;EACvB,8CAA8C;EAC9C,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,yCAAyC;EACzC,gCAAgC;EAChC,8BAA8B;EAC9B,0CAA0C;EAC1C,yCAAyC;EACzC,iCAAiC;EACjC,uCAAuC;EACvC,uBAAuB;EACvB,gCAAgC;EAChC,oBAAoB;EACpB,cAAc;;EAEd,2BAA2B;EAC3B,8BAA8B;EAC9B,+BAA+B;EAC/B,2BAA2B;EAC3B,wBAAwB;;EAExB,sBAAsB;EACtB,6BAA6B;EAC7B,yCAAyC;EACzC,uCAAuC;EACvC,sCAAsC;EACtC,kCAAkC;EAClC,0BAA0B;;AAE5B;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA,oBAAoB;;AAEpB;EACE,iCAAiC;EACjC,qCAAqC;EACrC,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,6BAA6B;EAC7B,UAAU;EACV,0BAA0B;EAC1B,sCAAsC;AACxC;;AAEA;;EAEE,aAAa;EACb,6CAA6C;EAC7C,iDAAiD;EACjD,gCAAgC;AAClC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA,sBAAsB;;AAEtB;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,wCAAwC;EACxC,yCAAyC;;EAEzC,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,yCAAyC;EACzC,4CAA4C;EAC5C,aAAa;EACb,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;;EAEtB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,0BAA0B;EAC1B,2CAA2C;EAC3C,6CAA6C;EAC7C,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;EAEE,qCAAqC;AACvC;;AAEA;EACE,uDAAuD;EACvD,aAAa;AACf;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* TodoList-CardView */\n\n.TodoList-CardView {\n  width: 350px;\n  height: 450px;\n  min-width: 350px;\n  min-height: 450px;\n  background-color: var(--card-bg-1-color);\n  border-radius: var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.TodoList-CardView-header {\n  min-height: 63px;\n  padding-left: 5%;\n  color: var(--todo-item-header-text-color);\n  font-size: var(--todo-item-header-font-size);\n  display: flex;\n  align-items: center;\n  font-weight: var(--font-weight-semi-bold);\n}\n\n.TodoList-CardView-main {\n  flex: 1 0 0;\n  display: flex;\n  flex-direction: column;\n\n  overflow-y: scroll;  \n}\n\n.TodoList-main-rows {\n  min-height: 63px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.TodoItem {\n  width: 90%;\n  height: 48px;\n  color: var(--color-text-1);\n  background-color: var(--todo-item-bg-color);\n  border-radius: var(--todo-item-border-radius);\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.TodoItem:hover,\n.TodoItem:focus {\n  border: 1px solid var(--action-color);\n}\n\n.TodoItem:focus {\n  background-color: var(--todo-item-bg-highlighted-color);\n  outline: none;\n}\n\n.TodoItem-checked {\n  color: var(--todo-item-text-checked-color);\n}\n\n.TodoItem-checkBox {\n  min-width: 48px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n}\n\n.TodoItem-title {\n  flex: 1 0 0;\n\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n\n.TodoItem-title-checked {\n  text-decoration: line-through;\n}\n\n.TodoItem-delete-btn {\n  margin-right: 20px;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ addLeadingZeros
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

};
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getTimezoneOffsetInMilliseconds
/* harmony export */ });
var MILLISECONDS_IN_MINUTE = 60000;

function getDateMillisecondsPart(date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE;
}
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */


function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
  date.setSeconds(0, 0);
  var hasNegativeUTCOffset = baseTimezoneOffset > 0;
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE : getDateMillisecondsPart(date);
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getUTCDayOfYear
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getUTCISOWeek
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getUTCISOWeekYear
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getUTCWeek
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getUTCWeekYear
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export isProtectedDayOfYearToken [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isProtectedWeekYearToken [provided] [no usage info] [missing usage info prevents renaming] */
/*! export throwProtectedError [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => /* binding */ isProtectedDayOfYearToken,
/* harmony export */   "isProtectedWeekYearToken": () => /* binding */ isProtectedWeekYearToken,
/* harmony export */   "throwProtectedError": () => /* binding */ throwProtectedError
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ requiredArgs
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ startOfUTCISOWeek
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ startOfUTCISOWeekYear
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ startOfUTCWeek
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ startOfUTCWeekYear
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ toInteger
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ addMilliseconds
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ format
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__.default[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ isValid
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ buildFormatLongFn
/* harmony export */ });
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ buildLocalizeFn
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ buildMatchFn
/* harmony export */ });
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ buildMatchPatternFn
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ formatDistance
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ formatRelative
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__.default,
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__.default,
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ subMilliseconds
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ toDate
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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

/***/ "./src/todoDetailsCardView/css/todoDetailsCardView.css":
/*!*************************************************************!*\
  !*** ./src/todoDetailsCardView/css/todoDetailsCardView.css ***!
  \*************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todoDetailsCardView_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./todoDetailsCardView.css */ "./node_modules/css-loader/dist/cjs.js!./src/todoDetailsCardView/css/todoDetailsCardView.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todoDetailsCardView_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todoDetailsCardView_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/todoListCardView/css/todoListCardView.css":
/*!*******************************************************!*\
  !*** ./src/todoListCardView/css/todoListCardView.css ***!
  \*******************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todoListCardView_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./todoListCardView.css */ "./node_modules/css-loader/dist/cjs.js!./src/todoListCardView/css/todoListCardView.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todoListCardView_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todoListCardView_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => /* binding */ Todo
/* harmony export */ });
/* harmony import */ var _date_getToday_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date/getToday.js */ "./src/date/getToday.js");


const Todo = (title, description, category) => {
  let _title = title;
  let _description = description;
  let _category = category;
  let _dueDate = '';
  let _createdDate = (0,_date_getToday_js__WEBPACK_IMPORTED_MODULE_0__.getToday)();
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

  // const setCreatedDate = (createdDate) => {
  //   _createdDate = createdDate;
  // }

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
    setTitle, setDescription, setCategory, setDueDate, setPriority,
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

  const deleteTodoByNumber = (todoNumber, category) => {
    const todos = getTodosByCategory(category);
    todos.splice(todoNumber, 1);
    console.log(todos);
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

  const getTodoByNumber = (todoNumber, category) => {
    const todos = getTodosByCategory(category);
    return todos[todoNumber];
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
    addTodo, addNewCategory, deleteTodoByNumber, deleteCategory,
    getTodosByCategory, getAllTodos, getAllCategories, getTodoByNumber,
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



const openModal = () => {
  const categorySelectionModal = (0,_elements_makeCategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_0__.makeCategorySelectionModal)();
  const container = document.querySelector('.container');
  container.appendChild(categorySelectionModal);

  (0,_startInitialSetup_js__WEBPACK_IMPORTED_MODULE_1__.startInitialSetup)();
}

// categorySelectionModal factory function
const CategorySelectionModal = () => {

  return {
    openModal
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
/* harmony import */ var _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../TodoList/todolist.js */ "./src/TodoList/todolist.js");



// makes modal main
const makeModalMain = () => {
  const categorySelectionModalMain = document.createElement('div');
  categorySelectionModalMain.classList.add('categorySelection-modal-main');


  // Get categories from Todolist and add it to modal
  const categoryList = _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.getAllCategories();
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
  window.addEventListener('click', function closeModalOrNot(event) {
    if ((0,_closeModal_js__WEBPACK_IMPORTED_MODULE_0__.isOutsideModalContentClicked)(event)) {
      ;(0,_closeModal_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
      window.removeEventListener('click', closeModalOrNot);
    }
  });
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







const openModal = () => {
  const container = _getElements_js__WEBPACK_IMPORTED_MODULE_4__.get.container();
  container.appendChild((0,_elements_makeCreateListModal_js__WEBPACK_IMPORTED_MODULE_2__.makeCreateListModal)());

  (0,_startInitialSetup_js__WEBPACK_IMPORTED_MODULE_1__.startInitialSetup)();
}

const CreateListModal = () => {  

  return {
    openModal,
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
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCategory": () => /* binding */ addCategory
/* harmony export */ });
/* harmony import */ var _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TodoList/todolist.js */ "./src/TodoList/todolist.js");
/* harmony import */ var _navBar_navBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navBar/navBar.js */ "./src/navBar/navBar.js");



const isExistingCategory = (category) => {
  const categories = _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.getAllCategories();
  return categories.includes(category)
}

const addCategory = (category) => {
  if (!isExistingCategory(category)) {
    _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.addNewCategory(category);
    _navBar_navBar_js__WEBPACK_IMPORTED_MODULE_1__.navBar.addNewCategory(category);
  }
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

  const container = () => {
    return document.querySelector('.container');
  }

  return {
    createBtn,
    cancelBtn,
    titleTextarea,
    modal,
    container
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





const enableCreateBtn = () => {
  const createBtn = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.createBtn();

  createBtn.addEventListener('click', () => {
    if (!(0,_isTitleTextareaEmpty_js__WEBPACK_IMPORTED_MODULE_3__.isTitleTextareaEmpty)()) {
      const category = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.titleTextarea().value;
      (0,_addCategory_js__WEBPACK_IMPORTED_MODULE_0__.addCategory)(category);
      (0,_closeModal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
    }
  })
}

const enableCancelBtnToCloseModal = () => {
  const cancelBtn = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.cancelBtn();

  cancelBtn.addEventListener('click', _closeModal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal);
}

const enableWindowToCloseModal = () => {
  window.addEventListener('click', function closeModalOrNot(event) {
    if ((0,_closeModal_js__WEBPACK_IMPORTED_MODULE_2__.isOutsideModalContentClicked)(event)) {
      ;(0,_closeModal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
      window.removeEventListener('click', closeModalOrNot);
    }
  });
}

const startInitialSetup = () => {
  enableCancelBtnToCloseModal();
  enableWindowToCloseModal();
  enableCreateBtn();
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
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getElements.js */ "./src/createTodoModal/getElements.js");





const openModal = () => {
  const container = _getElements_js__WEBPACK_IMPORTED_MODULE_3__.get.container();
  container.appendChild((0,_elements_makeCreateTodoModal_js__WEBPACK_IMPORTED_MODULE_1__.makeCreateTodoModal)());

  (0,_startInitialSetup_js__WEBPACK_IMPORTED_MODULE_2__.startInitialSetup)();
}

const CreateTodoModal = () => {
  
  return {
    changeCategory: _changeCategory_js__WEBPACK_IMPORTED_MODULE_0__.changeCategory,
    openModal,
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
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => /* binding */ addTodo
/* harmony export */ });
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElements.js */ "./src/createTodoModal/getElements.js");
/* harmony import */ var _Todo_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Todo/todo.js */ "./src/Todo/todo.js");
/* harmony import */ var _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TodoList/todolist.js */ "./src/TodoList/todolist.js");
/* harmony import */ var _todoListCardView_todoListCardView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todoListCardView/todoListCardView.js */ "./src/todoListCardView/todoListCardView.js");
/* harmony import */ var _todoListCardView_deleteButton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todoListCardView/deleteButton.js */ "./src/todoListCardView/deleteButton.js");






const getTodoTitle = () => {
  return _getElements_js__WEBPACK_IMPORTED_MODULE_0__.get.titleTextarea().value;
}

const getTodoDescription = () => {
  return _getElements_js__WEBPACK_IMPORTED_MODULE_0__.get.descriptionTextarea().value;
}

const getTodoCategory = () => {
  return _getElements_js__WEBPACK_IMPORTED_MODULE_0__.get.categoryBtn().innerText;
}
const addTodo = () => {
  const title = getTodoTitle();
  const description = getTodoDescription();
  const category = getTodoCategory();
  
  const todo = (0,_Todo_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo)(title, description, category);
  _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_2__.todoList.addTodo(todo);
  _todoListCardView_todoListCardView_js__WEBPACK_IMPORTED_MODULE_3__.todoListCardView.addTodo(todo);


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
/* harmony import */ var _getElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getElements.js */ "./src/createTodoModal/getElements.js");



const makeTodoinfoCategoryContainer = () => {
  const todoinfoContainerCategory = document.createElement('div');
  todoinfoContainerCategory.classList.add('todoinfo-container-category');

  const labelText = (0,_labelText_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelText)('CATEGORY');

  const todoinfoCategory = document.createElement('div');
  todoinfoCategory.classList.add('todoinfo-category');

  const categorySelectionBtn = document.createElement('button');
  categorySelectionBtn.classList.add('todoinfo-category-selectBtn');
  // This needs to be changed in the future
  categorySelectionBtn.innerText = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.currentCategory();

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

  const container = () => {
    return document.querySelector('.container');
  }

  const currentCategory = () => {
    return document.querySelector('.TodoList-CardView-header').innerText;
  }
  

  return {
    addTodoBtn,
    titleTextarea,
    descriptionTextarea,
    categoryBtn,
    modal,
    container,
    currentCategory
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
/* harmony import */ var _categorySelectionModal_CategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categorySelectionModal/CategorySelectionModal.js */ "./src/categorySelectionModal/CategorySelectionModal.js");






const enableAddTodoBtn = () => {
  const addTodoBtn = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.addTodoBtn();
  addTodoBtn.addEventListener('click', () => {
    if (!(0,_isTitleTextareaEmpty_js__WEBPACK_IMPORTED_MODULE_3__.isTitleTextareaEmpty)()) {
      (0,_addTodo_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)();
      (0,_closeModal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
    }
  })
}

// Category Selection Btn enable
const enableCategoryBtn = () => {
  const categoryBtn = _getElements_js__WEBPACK_IMPORTED_MODULE_1__.get.categoryBtn();

  categoryBtn.addEventListener('click', _categorySelectionModal_CategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_4__.categorySelectionModal.openModal);
}

const enableWindowToCloseModal = () => {
  window.addEventListener('click', function closeModalOrNot(event) {
    if ((0,_closeModal_js__WEBPACK_IMPORTED_MODULE_2__.isOutsideModalContentClicked)(event)) {
      ;(0,_closeModal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
      window.removeEventListener('click', closeModalOrNot);
    }
  });
}

const startInitialSetup = () => {
  enableAddTodoBtn();
  enableCategoryBtn();
  enableWindowToCloseModal();
}




/***/ }),

/***/ "./src/date/getToday.js":
/*!******************************!*\
  !*** ./src/date/getToday.js ***!
  \******************************/
/*! namespace exports */
/*! export getToday [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getToday": () => /* binding */ getToday
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");


const getToday = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(new Date(year, month, day), 'yyyy-MM-dd');
  
  return today;
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
/* harmony import */ var _todoDetailsCardView_todoDetailsCardView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoDetailsCardView/todoDetailsCardView.js */ "./src/todoDetailsCardView/todoDetailsCardView.js");
/* harmony import */ var _todoListCardView_todoListCardView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoListCardView/todoListCardView.js */ "./src/todoListCardView/todoListCardView.js");
/* harmony import */ var _navBar_navBar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navBar/navBar.js */ "./src/navBar/navBar.js");
/* harmony import */ var _Todo_todo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Todo/todo.js */ "./src/Todo/todo.js");
/* harmony import */ var _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TodoList/todolist.js */ "./src/TodoList/todolist.js");
/* harmony import */ var _date_getToday_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date/getToday.js */ "./src/date/getToday.js");












_navBar_navBar_js__WEBPACK_IMPORTED_MODULE_5__.navBar.startInitialSetup();
_todoListCardView_todoListCardView_js__WEBPACK_IMPORTED_MODULE_4__.todoListCardView.showTodoListCardView();

















/***/ }),

/***/ "./src/navBar/categoryItem.js":
/*!************************************!*\
  !*** ./src/navBar/categoryItem.js ***!
  \************************************/
/*! namespace exports */
/*! export makeCategoryItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCategoryItem": () => /* binding */ makeCategoryItem
/* harmony export */ });
/* harmony import */ var _todoListCardView_todoListCardView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todoListCardView/todoListCardView.js */ "./src/todoListCardView/todoListCardView.js");
/* harmony import */ var _todoDetailsCardView_todoDetailsCardView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todoDetailsCardView/todoDetailsCardView.js */ "./src/todoDetailsCardView/todoDetailsCardView.js");



const showTodoList = (categoryItem) => {
  const category = categoryItem.innerText;
  _todoListCardView_todoListCardView_js__WEBPACK_IMPORTED_MODULE_0__.todoListCardView.showTodoListCardView(category);
}

const enableCategoryItem = (categoryItem) => {
  categoryItem.addEventListener('click', () => {
    if (_todoDetailsCardView_todoDetailsCardView_js__WEBPACK_IMPORTED_MODULE_1__.todoDetailsCardView.isCardViewExist()) {
      _todoDetailsCardView_todoDetailsCardView_js__WEBPACK_IMPORTED_MODULE_1__.todoDetailsCardView.removeTodoDetailsCardView();
    }
    showTodoList(categoryItem);
  })
}

const makeCategoryItem = (category) => {
  const categoryItem = document.createElement('li');
  categoryItem.classList.add('category-items');
  categoryItem.innerText = category;

  enableCategoryItem(categoryItem);
  return categoryItem;
}



/***/ }),

/***/ "./src/navBar/createTodoButton.js":
/*!****************************************!*\
  !*** ./src/navBar/createTodoButton.js ***!
  \****************************************/
/*! namespace exports */
/*! export enableCreateTodoBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableCreateTodoBtn": () => /* binding */ enableCreateTodoBtn
/* harmony export */ });
/* harmony import */ var _createTodoModal_CreateTodoModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createTodoModal/CreateTodoModal.js */ "./src/createTodoModal/CreateTodoModal.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "./src/navBar/get.js");



const openCreateTodoModal = (event) => {
  _createTodoModal_CreateTodoModal_js__WEBPACK_IMPORTED_MODULE_0__.createTodoModal.openModal();
}

const enableCreateTodoBtn = () => {
  const createTodoBtn = _get_js__WEBPACK_IMPORTED_MODULE_1__.get.createTodoBtn();
  createTodoBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    openCreateTodoModal();
  });
}



/***/ }),

/***/ "./src/navBar/elements/makeNavBarCategoryList.js":
/*!*******************************************************!*\
  !*** ./src/navBar/elements/makeNavBarCategoryList.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export makeNavBarCategoryList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNavBarCategoryList": () => /* binding */ makeNavBarCategoryList
/* harmony export */ });
/* harmony import */ var _categoryItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../categoryItem.js */ "./src/navBar/categoryItem.js");
/* harmony import */ var _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../TodoList/todolist.js */ "./src/TodoList/todolist.js");



const makeNavBarCategoryList = () => {
  const navBarCategoryList = document.createElement('ul');
  navBarCategoryList.classList.add('navbar-category-list');

  const categories = _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.getAllCategories();
  categories.forEach(category => {
    const categoryItem = (0,_categoryItem_js__WEBPACK_IMPORTED_MODULE_0__.makeCategoryItem)(category);
    navBarCategoryList.appendChild(categoryItem);
  })

  return navBarCategoryList;
}



/***/ }),

/***/ "./src/navBar/get.js":
/*!***************************!*\
  !*** ./src/navBar/get.js ***!
  \***************************/
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
  const addCategoryBtn = () => {
    return document.querySelector('#add-category-btn');
  }

  const unfoldCategoryBtn = () => {
    return document.querySelector('#unfold-category-btn');
  }

  const foldCategoryBtn = () => {
    return document.querySelector('#fold-category-btn');
  }

  const navBarCategoryList = () => {
    return document.querySelector('.navbar-category-list');
  }

  const createTodoBtn = () => {
    return document.querySelector('#createTodoBtn');
  }

  const navBarCategory = () => {
    return document.querySelector('.navbar-category');
  }

  return {
    addCategoryBtn, unfoldCategoryBtn, foldCategoryBtn, navBarCategoryList,
    createTodoBtn, navBarCategory
  }
}

const get = Get();



/***/ }),

/***/ "./src/navBar/header.js":
/*!******************************!*\
  !*** ./src/navBar/header.js ***!
  \******************************/
/*! namespace exports */
/*! export enableAllCategoryBtns [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hideBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideBtn": () => /* binding */ hideBtn,
/* harmony export */   "showBtn": () => /* binding */ showBtn,
/* harmony export */   "enableAllCategoryBtns": () => /* binding */ enableAllCategoryBtns
/* harmony export */ });
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ "./src/navBar/get.js");
/* harmony import */ var _navBarCategoryList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBarCategoryList.js */ "./src/navBar/navBarCategoryList.js");
/* harmony import */ var _createListModal_CreateListModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createListModal/CreateListModal.js */ "./src/createListModal/CreateListModal.js");




const hideBtn = (btn) => {
  btn.style.display = "none";
}
const showBtn = (btn) => {
  btn.style.display = "inline-block";
}

const deleteAllCategories = () => {
  const navBarCategories = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.navBarCategoryList();
  navBarCategories.remove();
}

const enableFoldCategoryBtn = () => {
  const foldCategoryBtn = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.foldCategoryBtn();
  foldCategoryBtn.addEventListener('click', () => {
    deleteAllCategories();
    hideBtn(_get_js__WEBPACK_IMPORTED_MODULE_0__.get.addCategoryBtn());
    hideBtn(_get_js__WEBPACK_IMPORTED_MODULE_0__.get.foldCategoryBtn());
    showBtn(_get_js__WEBPACK_IMPORTED_MODULE_0__.get.unfoldCategoryBtn());
  })
}

const enableUnfoldCategoryBtn = () => {
  const unfoldCategoryBtn = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.unfoldCategoryBtn();
  unfoldCategoryBtn.addEventListener('click', () => {
    (0,_navBarCategoryList_js__WEBPACK_IMPORTED_MODULE_1__.showCategories)();
    hideBtn(_get_js__WEBPACK_IMPORTED_MODULE_0__.get.unfoldCategoryBtn());
    showBtn(_get_js__WEBPACK_IMPORTED_MODULE_0__.get.foldCategoryBtn());
    showBtn(_get_js__WEBPACK_IMPORTED_MODULE_0__.get.addCategoryBtn());
  })
}

const enableAddCategoryBtn = () => {
  const addCategoryBtn = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.addCategoryBtn();
  addCategoryBtn.addEventListener('click', () => {
    _createListModal_CreateListModal_js__WEBPACK_IMPORTED_MODULE_2__.createListModal.openModal();
  })
}

const enableAllCategoryBtns = () => {
  enableFoldCategoryBtn();
  enableUnfoldCategoryBtn();
  enableAddCategoryBtn();
}




/***/ }),

/***/ "./src/navBar/navBar.js":
/*!******************************!*\
  !*** ./src/navBar/navBar.js ***!
  \******************************/
/*! namespace exports */
/*! export navBar [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navBar": () => /* binding */ navBar
/* harmony export */ });
/* harmony import */ var _createTodoButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodoButton.js */ "./src/navBar/createTodoButton.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/navBar/header.js");
/* harmony import */ var _navBarCategoryList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navBarCategoryList.js */ "./src/navBar/navBarCategoryList.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get.js */ "./src/navBar/get.js");
/* harmony import */ var _categoryItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categoryItem.js */ "./src/navBar/categoryItem.js");






const startInitialSetup = () => {
  (0,_navBarCategoryList_js__WEBPACK_IMPORTED_MODULE_2__.showCategories)();
  (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.showBtn)(_get_js__WEBPACK_IMPORTED_MODULE_3__.get.foldCategoryBtn());
  (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.showBtn)(_get_js__WEBPACK_IMPORTED_MODULE_3__.get.addCategoryBtn());
  
  (0,_createTodoButton_js__WEBPACK_IMPORTED_MODULE_0__.enableCreateTodoBtn)();
  (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.enableAllCategoryBtns)();

}

const addNewCategory = (category) => {
  const categoryItem = (0,_categoryItem_js__WEBPACK_IMPORTED_MODULE_4__.makeCategoryItem)(category);
  const container = _get_js__WEBPACK_IMPORTED_MODULE_3__.get.navBarCategoryList();
  container.appendChild(categoryItem);
}

const NavBar = () => {
  
  return {
    startInitialSetup,
    showCategories: _navBarCategoryList_js__WEBPACK_IMPORTED_MODULE_2__.showCategories,
    addNewCategory
  }
}

const navBar = NavBar();



/***/ }),

/***/ "./src/navBar/navBarCategoryList.js":
/*!******************************************!*\
  !*** ./src/navBar/navBarCategoryList.js ***!
  \******************************************/
/*! namespace exports */
/*! export showCategories [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showCategories": () => /* binding */ showCategories
/* harmony export */ });
/* harmony import */ var _elements_makeNavBarCategoryList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/makeNavBarCategoryList.js */ "./src/navBar/elements/makeNavBarCategoryList.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "./src/navBar/get.js");
/* harmony import */ var _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TodoList/todolist.js */ "./src/TodoList/todolist.js");
/* harmony import */ var _navBar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navBar.js */ "./src/navBar/navBar.js");






const addCategories = (navBarCategoryList) => {
  const navBarCategory = _get_js__WEBPACK_IMPORTED_MODULE_1__.get.navBarCategory();
  navBarCategory.appendChild(navBarCategoryList);
}

const showCategories = () => {
  const categories = _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_2__.todoList.getAllCategories();
  const navBarCategoryList = (0,_elements_makeNavBarCategoryList_js__WEBPACK_IMPORTED_MODULE_0__.makeNavBarCategoryList)(categories);
  
  addCategories(navBarCategoryList);
}



/***/ }),

/***/ "./src/todoDetailsCardView/elements/editPane.js":
/*!******************************************************!*\
  !*** ./src/todoDetailsCardView/elements/editPane.js ***!
  \******************************************************/
/*! namespace exports */
/*! export makeTodoEditPane [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoEditPane": () => /* binding */ makeTodoEditPane
/* harmony export */ });
/* harmony import */ var _header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.js */ "./src/todoDetailsCardView/elements/header/header.js");
/* harmony import */ var _main_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.js */ "./src/todoDetailsCardView/elements/main/main.js");



const makeTodoEditPane = (todo) => {
  const todoEditPane = document.createElement('div');
  todoEditPane.classList.add('TodoEdit-Pane');

  todoEditPane.appendChild((0,_header_header_js__WEBPACK_IMPORTED_MODULE_0__.makeTodoEditHeader)());
  todoEditPane.appendChild((0,_main_main_js__WEBPACK_IMPORTED_MODULE_1__.makeTodoEditMain)(todo));

  return todoEditPane;
}



/***/ }),

/***/ "./src/todoDetailsCardView/elements/header/header.js":
/*!***********************************************************!*\
  !*** ./src/todoDetailsCardView/elements/header/header.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export makeTodoEditHeader [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoEditHeader": () => /* binding */ makeTodoEditHeader
/* harmony export */ });
const makeTodoEditHeader = () => {
  const todoEditHeader = document.createElement('div');
  todoEditHeader.classList.add('TodoEdit-header');
  todoEditHeader.innerText = "TODO DETAILS";

  return todoEditHeader;
}





/***/ }),

/***/ "./src/todoDetailsCardView/elements/main/elements/DueDateRow.js":
/*!**********************************************************************!*\
  !*** ./src/todoDetailsCardView/elements/main/elements/DueDateRow.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export makeDueDateRow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeDueDateRow": () => /* binding */ makeDueDateRow
/* harmony export */ });
/* harmony import */ var _labelText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labelText.js */ "./src/todoDetailsCardView/elements/main/elements/labelText.js");
/* harmony import */ var _date_getToday_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../date/getToday.js */ "./src/date/getToday.js");



const isEmpty = (str) => {
  if (str === '') {
    return true;
  }

  return false;
}

const isDueDateSet = (dueDate) => {
  
  if(isEmpty(dueDate)) {
    return false;
  }

  return true;
}

const makeDateInput = (dueDate) => {
  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', 'TodoEdit-DueDate');
  dateInput.setAttribute('name', 'DueDate');
  
  if (isDueDateSet(dueDate)) {
    dateInput.setAttribute('value', dueDate);
  } 
  // dateInput.setAttribute('min', '2020-11-10');

  return dateInput;
}

const makeDueDateInputBox = (dueDate) => {
  const dueDateInputBox = document.createElement('div');
  dueDateInputBox.classList.add('TodoEdit-DueDateBox');

  const dateInput = makeDateInput(dueDate);
  dueDateInputBox.appendChild(dateInput);

  return dueDateInputBox;
}

const makeDueDateRow = (dueDate) => {
  const dueDateRow = document.createElement('div');
  dueDateRow.classList.add('TodoEdit-main-DueDateRow', 'TodoEdit-padder');

  const labelText = (0,_labelText_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelText)('DUE DATE');
  const dueDateInputBox = makeDueDateInputBox(dueDate);

  // Appending Child
  dueDateRow.appendChild(labelText);
  dueDateRow.appendChild(dueDateInputBox);
  
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
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTagRow": () => /* binding */ makeTagRow
/* harmony export */ });
/* harmony import */ var _labelText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labelText.js */ "./src/todoDetailsCardView/elements/main/elements/labelText.js");


const isEmpty = (str) => {
  if (str === '') {
    return true;
  }

  return false;
}

const isPrioritySet = (priority) => {
  if (isEmpty(priority)) {
    return false;
  }

  return true;
}

const makePriorityBtn = (importance, selected) => {
  const priorityBtn = document.createElement('button');
  const id = `priority-${importance}-btn`;
  priorityBtn.setAttribute('id', id);
  
  priorityBtn.innerText = importance;

  priorityBtn.classList.add('priority-tag');

  if (selected === true) {
    priorityBtn.classList.add(importance + '-selected');
  }

  return priorityBtn;
}

const makeTagRow = (priority) => {
  const tagRow = document.createElement('div');
  tagRow.classList.add('TodoEdit-main-tagRow', 'TodoEdit-padder');

  const labelText = (0,_labelText_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelText)('TAGS');
  const tags = document.createElement('div');
  tags.classList.add('TodoEdit-Tags');
  
  tagRow.appendChild(labelText);
  tagRow.appendChild(tags);

  const priorities = ['important', 'high', 'middle', 'low'];
  if (isPrioritySet(priority)) {
    // when making a button, give that button color
    priorities.forEach(eachPriority => {
      if (eachPriority === priority) {
        tags.appendChild(makePriorityBtn(eachPriority, true));
      } else {
        tags.appendChild(makePriorityBtn(eachPriority));
      } 
    })
  }

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
  const createdDateRow = document.createElement('div');
  createdDateRow.classList.add('TodoEdit-main-CreatedDateRow', 'TodoEdit-padder');

  const labelText = (0,_labelText_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelText)('CREATED DATE');

  const createdDate = document.createElement('div');
  createdDate.classList.add('TodoEdit-CreatedDate');
  
  createdDate.innerText = date;

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



const makeDescriptionRow = (description) => {
  const descriptionRow = document.createElement('div');
  descriptionRow.classList.add('TodoEdit-main-DescriptionRow', 'TodoEdit-padder');

  const labelText = (0,_labelText_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelText)('DESCRIPTION');

  const descriptionTextArea = document.createElement('textarea');
  descriptionTextArea.classList.add('textField', 'textField-description');
  descriptionTextArea.setAttribute('rows', '7');
  descriptionTextArea.innerText = description;
  
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


const makeTitleRow = (title) => {
  const titleRow = document.createElement('div');
  titleRow.classList.add('TodoEdit-main-titleRow', 'TodoEdit-padder');
  
  const labelText = (0,_labelText_js__WEBPACK_IMPORTED_MODULE_0__.makeLabelText)('TITLE');
  
  const titleTextArea = document.createElement('textarea');
  titleTextArea.classList.add('textField', 'TodoEdit-title-textfield');
  titleTextArea.setAttribute('rows', '1');
  titleTextArea.innerText = title;


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







const makeTodoEditMain = (todo) => {
  const todoEditMain = document.createElement('div');
  todoEditMain.classList.add('TodoEdit-main');

  const title = todo.getTitle();
  const priority = todo.getPriority();
  const dueDate = todo.getDueDate();
  const description = todo.getDescription();
  const createdDate = todo.getCreatedDate();
  
  todoEditMain.appendChild((0,_main_elements_titleRow_js__WEBPACK_IMPORTED_MODULE_0__.makeTitleRow)(title));
  todoEditMain.appendChild((0,_main_elements_TagRow_js__WEBPACK_IMPORTED_MODULE_1__.makeTagRow)(priority));
  todoEditMain.appendChild((0,_main_elements_DueDateRow_js__WEBPACK_IMPORTED_MODULE_2__.makeDueDateRow)(dueDate));
  todoEditMain.appendChild((0,_main_elements_descriptionRow_js__WEBPACK_IMPORTED_MODULE_3__.makeDescriptionRow)(description));
  todoEditMain.appendChild((0,_main_elements_createdDateRow_js__WEBPACK_IMPORTED_MODULE_4__.makeCreatedDateRow)(createdDate));

  return todoEditMain;
}




/***/ }),

/***/ "./src/todoDetailsCardView/elements/makeTodoDetailsCardView.js":
/*!*********************************************************************!*\
  !*** ./src/todoDetailsCardView/elements/makeTodoDetailsCardView.js ***!
  \*********************************************************************/
/*! namespace exports */
/*! export makeTodoDetailsCardView [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoDetailsCardView": () => /* binding */ makeTodoDetailsCardView
/* harmony export */ });
/* harmony import */ var _css_todoDetailsCardView_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/todoDetailsCardView.css */ "./src/todoDetailsCardView/css/todoDetailsCardView.css");
/* harmony import */ var _editPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editPane.js */ "./src/todoDetailsCardView/elements/editPane.js");




// Should export only one big function
const makeTodoDetailsCardView = (todo, todoNumber) => {
  const todoDetailsCardView = document.createElement('div');
  todoDetailsCardView.classList.add('TodoDetails-CardView');
  todoDetailsCardView.setAttribute('data-todo-number', todoNumber);

  const todoEditPane = (0,_editPane_js__WEBPACK_IMPORTED_MODULE_1__.makeTodoEditPane)(todo);
  todoDetailsCardView.appendChild(todoEditPane);

  return todoDetailsCardView;
}



/***/ }),

/***/ "./src/todoDetailsCardView/get.js":
/*!****************************************!*\
  !*** ./src/todoDetailsCardView/get.js ***!
  \****************************************/
/*! namespace exports */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => /* binding */ get
/* harmony export */ });
const isEmpty = (str) => {
  if (str === '') {
    return true;
  }

  return false;
}

const Get = () => {
  const importantBtn = () => {
    return document.querySelector('#priority-important-btn');
  } 

  const highBtn = () => {
    return document.querySelector('#priority-high-btn');
  } 

  const middleBtn = () => {
    return document.querySelector('#priority-middle-btn');
  }

  const lowBtn = () => {
    return document.querySelector('#priority-low-btn');
  } 

  const allPriorityBtns = () => {
    return document.querySelectorAll('.priority-tag');
  }

  const todoTitle = () => {
    return document.querySelector('.TodoEdit-main-titleRow textarea').value;
  }

  const todoPriority = () => {
    const selectedBtn = selectedPriorityBtn();
    
    if (isEmpty(selectedBtn)) {
      return '';
    }

    const priority = selectedBtn.innerText;
    return priority;
  }
  
  const todoDueDate = () => {
    return document.querySelector('#TodoEdit-DueDate').value;
  }
  
  const todoDescription = () => {
    return document.querySelector('.TodoEdit-main-DescriptionRow textarea').value;
  }
  
  const todoCreatedDate = () => {
    return document.querySelector('.TodoEdit-CreatedDate').innerText;
  }

  const selectedPriorityBtn = () => {
    const classes = ['important-selected', 'high-selected', 'middle-selected',
  'low-selected'];  
    const priorityBtns = get.allPriorityBtns();

    for (let i = 0; i < priorityBtns.length; i++) {
      const priorityBtn = priorityBtns[i];
      const priorityBtnClass = priorityBtn.className;
      if (priorityBtnClass.includes('selected')) {
        return priorityBtn;
      }
    }

    return '';
  }

  const cardViewContainer = () => {
    return document.querySelector('.CardView-Container');
  }

  const todoDetailsCardView = () => {
    return document.querySelector('.TodoDetails-CardView');
  }

  const dataTodoNumber = () => {
    return todoDetailsCardView().getAttribute('data-todo-number');
  }

  const currentCategory = () => {
    return document.querySelector('.TodoList-CardView-header').innerText;
  }

  return {
    importantBtn,highBtn,middleBtn,lowBtn, allPriorityBtns, todoTitle,
    todoPriority, todoDueDate, todoDescription, todoCreatedDate,
    selectedPriorityBtn, cardViewContainer, todoDetailsCardView, dataTodoNumber,
    currentCategory
  }
}

const get = Get();



/***/ }),

/***/ "./src/todoDetailsCardView/priority.js":
/*!*********************************************!*\
  !*** ./src/todoDetailsCardView/priority.js ***!
  \*********************************************/
/*! namespace exports */
/*! export enableButtonsToBeSelected [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableButtonsToBeSelected": () => /* binding */ enableButtonsToBeSelected
/* harmony export */ });
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ "./src/todoDetailsCardView/get.js");


const isSameButton = (buttonOne, buttonTwo) => {
  if (buttonOne === buttonTwo) {
    return true;
  }

  return false;
}

const isPriorityAlreadySet = () => {
  const priorityBtns = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.allPriorityBtns();

  for(let i = 0; i < priorityBtns.length; i++) {
    if (priorityBtns[i].className.includes('selected')) {
      return true;
    }
  }

  return false;
}

const selectPriorityBtn = (event) => {
  const clickedBtn = event.target;
  
  // If it passes this line, it means priority is set
  if (!isPriorityAlreadySet()) {
    return clickedBtn.classList.toggle(clickedBtn.innerText + '-selected');
  }

  // If it passes this line, it means they are same button
  const selectedBtn = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.selectedPriorityBtn();
  if (!isSameButton(clickedBtn, selectedBtn)) {
    selectedBtn.classList.remove(selectedBtn.innerText + '-selected');
    clickedBtn.classList.toggle(clickedBtn.innerText + '-selected');
    return;
  }

  clickedBtn.classList.toggle(clickedBtn.innerText + '-selected');
}

const enableButtonsToBeSelected = () => {
  const priorityBtns = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.allPriorityBtns();
  
  priorityBtns.forEach(priorityBtn => {
    priorityBtn.addEventListener('click', selectPriorityBtn);
  });
}



/***/ }),

/***/ "./src/todoDetailsCardView/saveTodoDetails.js":
/*!****************************************************!*\
  !*** ./src/todoDetailsCardView/saveTodoDetails.js ***!
  \****************************************************/
/*! namespace exports */
/*! export saveTodoDetails [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveTodoDetails": () => /* binding */ saveTodoDetails
/* harmony export */ });
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ "./src/todoDetailsCardView/get.js");
/* harmony import */ var _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TodoList/todolist.js */ "./src/TodoList/todolist.js");



const saveTodoDetails = () => {
  const title = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.todoTitle();
  const priority = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.todoPriority();
  const dueDate = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.todoDueDate();
  const description = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.todoDescription();

  const todoNumber = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.dataTodoNumber();
  const category = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.currentCategory();
  const todo = _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.getTodoByNumber(todoNumber, category);
  
  todo.setTitle(title);
  todo.setPriority(priority);
  todo.setDueDate(dueDate);
  todo.setDescription(description);
}



/***/ }),

/***/ "./src/todoDetailsCardView/startInitialSetup.js":
/*!******************************************************!*\
  !*** ./src/todoDetailsCardView/startInitialSetup.js ***!
  \******************************************************/
/*! namespace exports */
/*! export startInitialSetup [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startInitialSetup": () => /* binding */ startInitialSetup
/* harmony export */ });
/* harmony import */ var _priority_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priority.js */ "./src/todoDetailsCardView/priority.js");


const startInitialSetup = () => {
  (0,_priority_js__WEBPACK_IMPORTED_MODULE_0__.enableButtonsToBeSelected)();
}



/***/ }),

/***/ "./src/todoDetailsCardView/todoDetailsCardView.js":
/*!********************************************************!*\
  !*** ./src/todoDetailsCardView/todoDetailsCardView.js ***!
  \********************************************************/
/*! namespace exports */
/*! export todoDetailsCardView [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoDetailsCardView": () => /* binding */ todoDetailsCardView
/* harmony export */ });
/* harmony import */ var _elements_makeTodoDetailsCardView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/makeTodoDetailsCardView.js */ "./src/todoDetailsCardView/elements/makeTodoDetailsCardView.js");
/* harmony import */ var _startInitialSetup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startInitialSetup.js */ "./src/todoDetailsCardView/startInitialSetup.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get.js */ "./src/todoDetailsCardView/get.js");
/* harmony import */ var _saveTodoDetails_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveTodoDetails.js */ "./src/todoDetailsCardView/saveTodoDetails.js");
/* harmony import */ var _todoListCardView_todoListCardView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todoListCardView/todoListCardView.js */ "./src/todoListCardView/todoListCardView.js");






const isCardViewExist = () => {
  const todoDetailsCardView = _get_js__WEBPACK_IMPORTED_MODULE_2__.get.todoDetailsCardView()
  if (todoDetailsCardView === null) {
    return false;
  }

  return true;
}

const removeTodoDetailsCardView = () => {
  ;(0,_saveTodoDetails_js__WEBPACK_IMPORTED_MODULE_3__.saveTodoDetails)();
  const title = _get_js__WEBPACK_IMPORTED_MODULE_2__.get.todoTitle();
  const todoNumber = _get_js__WEBPACK_IMPORTED_MODULE_2__.get.todoNumber();
  _get_js__WEBPACK_IMPORTED_MODULE_2__.get.todoDetailsCardView().remove();
  
  _todoListCardView_todoListCardView_js__WEBPACK_IMPORTED_MODULE_4__.todoListCardView.changeTodoTitle(title, todoNumber)
}

const showTodoDetails = (todo, todoNumber) => {
  
  if(isCardViewExist()) {
    removeTodoDetailsCardView();
  }

  const container = _get_js__WEBPACK_IMPORTED_MODULE_2__.get.cardViewContainer()
  const todoDetailsCardView = (0,_elements_makeTodoDetailsCardView_js__WEBPACK_IMPORTED_MODULE_0__.makeTodoDetailsCardView)(todo, todoNumber);
  container.appendChild(todoDetailsCardView);

  (0,_startInitialSetup_js__WEBPACK_IMPORTED_MODULE_1__.startInitialSetup)();
}

const TodoDetailsCardView = () => {

  return {
    showTodoDetails,
    removeTodoDetailsCardView,
    isCardViewExist
  }
}

const todoDetailsCardView = TodoDetailsCardView();



/***/ }),

/***/ "./src/todoListCardView/addTodo.js":
/*!*****************************************!*\
  !*** ./src/todoListCardView/addTodo.js ***!
  \*****************************************/
/*! namespace exports */
/*! export addTodo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => /* binding */ addTodo
/* harmony export */ });
/* harmony import */ var _deleteButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteButton.js */ "./src/todoListCardView/deleteButton.js");
/* harmony import */ var _elements_todoListMainRows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/todoListMainRows.js */ "./src/todoListCardView/elements/todoListMainRows.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get.js */ "./src/todoListCardView/get.js");




const addTodo = (todo) => {
  const todoListMainRows = (0,_elements_todoListMainRows_js__WEBPACK_IMPORTED_MODULE_1__.makeTodoListMainRows)(todo);
  // get todoList CardView Main
  const todoContainer = _get_js__WEBPACK_IMPORTED_MODULE_2__.get.todoListMain();
  todoContainer.appendChild(todoListMainRows);

  (0,_deleteButton_js__WEBPACK_IMPORTED_MODULE_0__.updateDataTodoNumber)(_get_js__WEBPACK_IMPORTED_MODULE_2__.get.allTodoListMainRows());
}



/***/ }),

/***/ "./src/todoListCardView/checkMarker.js":
/*!*********************************************!*\
  !*** ./src/todoListCardView/checkMarker.js ***!
  \*********************************************/
/*! namespace exports */
/*! export makeCheckedMarker [provided] [no usage info] [missing usage info prevents renaming] */
/*! export makeEmptyCheckMarker [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeEmptyCheckMarker": () => /* binding */ makeEmptyCheckMarker,
/* harmony export */   "makeCheckedMarker": () => /* binding */ makeCheckedMarker
/* harmony export */ });
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ "./src/todoListCardView/get.js");
/* harmony import */ var _todoListCardView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoListCardView.js */ "./src/todoListCardView/todoListCardView.js");
/* harmony import */ var _isCompleted_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isCompleted.js */ "./src/todoListCardView/isCompleted.js");
/* harmony import */ var _markCompleted_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markCompleted.js */ "./src/todoListCardView/markCompleted.js");
/* harmony import */ var _undoCompleted_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./undoCompleted.js */ "./src/todoListCardView/undoCompleted.js");
/* harmony import */ var _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TodoList/todolist.js */ "./src/TodoList/todolist.js");







const makeEmptyCheckMarker = () => {
  const emptyCheckMark = document.createElement('i');
  emptyCheckMark.classList.add('far', 'fa-circle', 'check-marker');
  emptyCheckMark.setAttribute('id', 'notCompletedMarker');

  enableCheckMarker(emptyCheckMark);
  return emptyCheckMark;
}

const makeCheckedMarker = () => {
  const checkedMarker = document.createElement('i');
  checkedMarker.classList.add('far', 'fa-check-circle', 'check-marker');
  checkedMarker.setAttribute('id', 'completedMarker');

  enableCheckMarker(checkedMarker);
  return checkedMarker;
}

const markCompleted = (todo, todoDisplay) => {
  todo.markCompleted();
  (0,_markCompleted_js__WEBPACK_IMPORTED_MODULE_3__.markCompletedDisplay)(todoDisplay);
}

const undoCompleted = (todo, todoDisplay) => {
  todo.undoCompleted();
  (0,_undoCompleted_js__WEBPACK_IMPORTED_MODULE_4__.undoCompletedDisplay)(todoDisplay);
}

const toggleCompleted = (event) => {
  // SRP: toggle the completed status
  const checkMarker = event.target;
  
  const todoDisplay = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.todoItemOfElement(checkMarker);
  const category = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.currentCategory();
  const todoNumber = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.todoNumber(todoDisplay);
  const todo = _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_5__.todoList.getTodoByNumber(todoNumber, category);
  
  if ((0,_isCompleted_js__WEBPACK_IMPORTED_MODULE_2__.isCompletedMarker)(checkMarker)) {
    return undoCompleted(todo, todoDisplay);
  }

  markCompleted(todo, todoDisplay);
}

const enableCheckMarker = (checkMarker) => {
  checkMarker.addEventListener('click', toggleCompleted);
}






/***/ }),

/***/ "./src/todoListCardView/deleteButton.js":
/*!**********************************************!*\
  !*** ./src/todoListCardView/deleteButton.js ***!
  \**********************************************/
/*! namespace exports */
/*! export makeDeleteBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateDataTodoNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeDeleteBtn": () => /* binding */ makeDeleteBtn,
/* harmony export */   "updateDataTodoNumber": () => /* binding */ updateDataTodoNumber
/* harmony export */ });
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ "./src/todoListCardView/get.js");
/* harmony import */ var _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TodoList/todolist.js */ "./src/TodoList/todolist.js");



const makeDeleteBtn = () => {
  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('fas', 'fa-backspace', 'TodoItem-delete-btn');
  
  enableDeleteButton(deleteBtn);
  return deleteBtn;
}

const getTodo = (deleteBtn) => {
  return _get_js__WEBPACK_IMPORTED_MODULE_0__.get.todoListMainRowOfElement(deleteBtn)
}

const deleteTodo = (todo) => {
  todo.remove();
}

const updateDataTodoNumber = (todoListMainRows) => {
  todoListMainRows.forEach((todoListMainRow, todoNumber) => {
    todoListMainRow.setAttribute('data-todo-number', todoNumber);
  })
}

const enableDeleteButton = (deleteBtn) => {
  deleteBtn.addEventListener('click', () => {
    const todo = getTodo(deleteBtn);
    deleteTodo(todo);
    
    const todoDisplay = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.todoItemOfElement(deleteBtn);
    const todoNumber = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.todoNumber(todoDisplay);
    const category = _get_js__WEBPACK_IMPORTED_MODULE_0__.get.currentCategory();
    _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.deleteTodoByNumber(todoNumber, category);

    updateDataTodoNumber(_get_js__WEBPACK_IMPORTED_MODULE_0__.get.allTodoListMainRows());
  });
}



/***/ }),

/***/ "./src/todoListCardView/elements/makeTodoListCardView.js":
/*!***************************************************************!*\
  !*** ./src/todoListCardView/elements/makeTodoListCardView.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export makeTodoListCardView [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoListCardView": () => /* binding */ makeTodoListCardView
/* harmony export */ });
/* harmony import */ var _todoListHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoListHeader.js */ "./src/todoListCardView/elements/todoListHeader.js");
/* harmony import */ var _todoListMain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoListMain.js */ "./src/todoListCardView/elements/todoListMain.js");
/* harmony import */ var _css_todoListCardView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/todoListCardView.css */ "./src/todoListCardView/css/todoListCardView.css");
/* harmony import */ var _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../TodoList/todolist.js */ "./src/TodoList/todolist.js");






const isEmpty = (category) => {
  if (category === undefined) {
    return true;
  }

  return false;
}

const makeTodoListCardView = (category) => {
  if (isEmpty(category)) {
    category = 'default';
  }

  const todoListCardView = document.createElement('div');
  todoListCardView.classList.add('TodoList-CardView');

  todoListCardView.appendChild((0,_todoListHeader_js__WEBPACK_IMPORTED_MODULE_0__.makeTodoListHeader)(category));

  const todos = _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_3__.todoList.getTodosByCategory(category);
  todoListCardView.appendChild((0,_todoListMain_js__WEBPACK_IMPORTED_MODULE_1__.makeTodoListMain)(todos));
  
  return todoListCardView;
}



/***/ }),

/***/ "./src/todoListCardView/elements/todoListHeader.js":
/*!*********************************************************!*\
  !*** ./src/todoListCardView/elements/todoListHeader.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export makeTodoListHeader [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoListHeader": () => /* binding */ makeTodoListHeader
/* harmony export */ });
const makeTodoListHeader = (category) => {
  const todoListHeader = document.createElement('div');
  todoListHeader.classList.add('TodoList-CardView-header');
  todoListHeader.innerText = category;

  return todoListHeader;
}



/***/ }),

/***/ "./src/todoListCardView/elements/todoListMain.js":
/*!*******************************************************!*\
  !*** ./src/todoListCardView/elements/todoListMain.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export makeTodoListMain [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoListMain": () => /* binding */ makeTodoListMain
/* harmony export */ });
/* harmony import */ var _todoListMainRows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoListMainRows.js */ "./src/todoListCardView/elements/todoListMainRows.js");


const areTodosEmpty = (todos) => {
  if (todos === undefined) {
    return true;
  }

  return false;
}

const makeTodoListMain = (todos) => {
  const todoListMain = document.createElement('div');
  todoListMain.classList.add('TodoList-CardView-main');

  if (areTodosEmpty(todos)) {
    return todoListMain;
  }

  todos.forEach((todo, todoNumber) => {
    todoListMain.appendChild((0,_todoListMainRows_js__WEBPACK_IMPORTED_MODULE_0__.makeTodoListMainRows)(todo, todoNumber));
  })
  
  return todoListMain;
}



/***/ }),

/***/ "./src/todoListCardView/elements/todoListMainRows.js":
/*!***********************************************************!*\
  !*** ./src/todoListCardView/elements/todoListMainRows.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export makeTodoListMainRows [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoListMainRows": () => /* binding */ makeTodoListMainRows
/* harmony export */ });
/* harmony import */ var _deleteButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deleteButton.js */ "./src/todoListCardView/deleteButton.js");
/* harmony import */ var _checkMarker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../checkMarker.js */ "./src/todoListCardView/checkMarker.js");
/* harmony import */ var _todoDetailsCardView_todoDetailsCardView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../todoDetailsCardView/todoDetailsCardView */ "./src/todoDetailsCardView/todoDetailsCardView.js");
/* harmony import */ var _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../TodoList/todolist.js */ "./src/TodoList/todolist.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../get.js */ "./src/todoListCardView/get.js");
/* harmony import */ var _todoDetailsCardView_priority_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../todoDetailsCardView/priority.js */ "./src/todoDetailsCardView/priority.js");







const makeTodoItemTitle = (title, completed) => {
  const todoItemTitle = document.createElement('div');
  todoItemTitle.classList.add('TodoItem-title');
  todoItemTitle.innerText = title;

  if (completed) {
    todoItemTitle.classList.add('TodoItem-title-checked');
  }

  return todoItemTitle;
}

const makeTodoItemCheckBox = (completed) => {
  const todoItemCheckBox = document.createElement('div');
  todoItemCheckBox.classList.add('TodoItem-checkBox');
  let checkMarker;

  if (completed === true) {
    checkMarker = (0,_checkMarker_js__WEBPACK_IMPORTED_MODULE_1__.makeCheckedMarker)();
    
  } else {
    checkMarker = (0,_checkMarker_js__WEBPACK_IMPORTED_MODULE_1__.makeEmptyCheckMarker)();
  }

  todoItemCheckBox.appendChild(checkMarker);

  return todoItemCheckBox;
}

const enableTodoItem = (todoItem) => {
  todoItem.addEventListener('click', (event) => {
    const checkMarker = todoItem.querySelector('.check-marker');
    const deleteBtn = todoItem.querySelector('.TodoItem-delete-btn');

    if (!(event.target === checkMarker || event.target === deleteBtn)) {
      const todoNumber = _get_js__WEBPACK_IMPORTED_MODULE_4__.get.todoNumber(todoItem);
      const category = _get_js__WEBPACK_IMPORTED_MODULE_4__.get.currentCategory();
      const todo = _TodoList_todolist_js__WEBPACK_IMPORTED_MODULE_3__.todoList.getTodoByNumber(todoNumber, category);
      _todoDetailsCardView_todoDetailsCardView__WEBPACK_IMPORTED_MODULE_2__.todoDetailsCardView.showTodoDetails(todo, todoNumber);
    }
  })
}
const makeTodoItem = (todo) => {
  const todoItem = document.createElement('div');
  todoItem.classList.add('TodoItem');

  const title = todo.getTitle();
  const completed = todo.isCompleted();

  todoItem.appendChild(makeTodoItemCheckBox(completed));
  todoItem.appendChild(makeTodoItemTitle(title, completed));

  if (completed) {
    todoItem.classList.add('TodoItem-checked');
    const deleteBtn = (0,_deleteButton_js__WEBPACK_IMPORTED_MODULE_0__.makeDeleteBtn)();
    todoItem.appendChild(deleteBtn);
  }

  enableTodoItem(todoItem);
  return todoItem;
}



const makeTodoListMainRows = (todo, todoNumber) => {
  // We need to insert the row, todoitem is in the row
  const todoListMainRows = document.createElement('div');
  todoListMainRows.classList.add('TodoList-main-rows');
  todoListMainRows.setAttribute('data-todo-number', todoNumber);

  todoListMainRows.appendChild(makeTodoItem(todo));
  return todoListMainRows;
}





/***/ }),

/***/ "./src/todoListCardView/get.js":
/*!*************************************!*\
  !*** ./src/todoListCardView/get.js ***!
  \*************************************/
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
  const allCheckMarkers = () => {
    return document.querySelectorAll('.check-marker');
  }

  const allTodoListMainRows = () => {
    return document.querySelectorAll('.TodoList-main-rows');
  }

  const todoItemOfElement = (checkMarker) => {
    return checkMarker.closest('.TodoItem');
  }

  const todoListMainRowOfElement = (elem) => {
    return elem.closest('.TodoList-main-rows');
  }

  const header = () => {
    return document.querySelector('.TodoList-CardView-header');
  }

  const currentCategory = () => {
    return header().innerText;
  }
  
  const todoListMain = () => {
    return document.querySelector('.TodoList-CardView-main');
  }

  const todoNumber = (todoItem) => {
    const todoItemContainer = todoItem.closest('.TodoList-main-rows');
    return todoItemContainer.getAttribute('data-todo-number');
  }

  const todoListCardView = () => {
    return document.querySelector('.TodoList-CardView');
  }

  const cardViewContainer = () => {
    return document.querySelector('.CardView-Container');
  }

  return {
    allCheckMarkers,
    allTodoListMainRows,
    todoItemOfElement,
    todoListMainRowOfElement,
    currentCategory,
    todoNumber,
    todoListMain,
    todoListCardView,
    cardViewContainer
  }
}

const get = Get();



/***/ }),

/***/ "./src/todoListCardView/isCompleted.js":
/*!*********************************************!*\
  !*** ./src/todoListCardView/isCompleted.js ***!
  \*********************************************/
/*! namespace exports */
/*! export isCompletedMarker [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isTodoListCardViewExist [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCompletedMarker": () => /* binding */ isCompletedMarker,
/* harmony export */   "isTodoListCardViewExist": () => /* binding */ isTodoListCardViewExist
/* harmony export */ });
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ "./src/todoListCardView/get.js");


const isCompletedMarker = (checkMarker) => {
  if (checkMarker.id === 'completedMarker') {
    return true;
  }
  
  return false;
}

const isTodoListCardViewExist = () => {
  if (_get_js__WEBPACK_IMPORTED_MODULE_0__.get.todoListCardView() != null) {
    return true;
  }

  return false;
}



/***/ }),

/***/ "./src/todoListCardView/markCompleted.js":
/*!***********************************************!*\
  !*** ./src/todoListCardView/markCompleted.js ***!
  \***********************************************/
/*! namespace exports */
/*! export markCompletedDisplay [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "markCompletedDisplay": () => /* binding */ markCompletedDisplay
/* harmony export */ });
/* harmony import */ var _deleteButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteButton.js */ "./src/todoListCardView/deleteButton.js");




const strikeThroughTitle = (todoItem) => {
  const todoTitle = todoItem.querySelector('.TodoItem-title');
  todoTitle.classList.add('TodoItem-title-checked');
}

const changeToCompletedMarker = (todoItem) => {
  const checkMarker = todoItem.querySelector('.check-marker');
  checkMarker.className = 'far fa-check-circle check-marker';
  checkMarker.id = 'completedMarker';
}

const addDeleteBtn = (todoItem) => {
  const deleteBtn = (0,_deleteButton_js__WEBPACK_IMPORTED_MODULE_0__.makeDeleteBtn)();
  todoItem.appendChild(deleteBtn);
}

const darkenTodoItem = (todoItem) => {
  todoItem.classList.add('TodoItem-checked');
}

const markCompletedDisplay = (todoItem) => {
  darkenTodoItem(todoItem);
  changeToCompletedMarker(todoItem);
  strikeThroughTitle(todoItem);
  addDeleteBtn(todoItem);
}



/***/ }),

/***/ "./src/todoListCardView/todoListCardView.js":
/*!**************************************************!*\
  !*** ./src/todoListCardView/todoListCardView.js ***!
  \**************************************************/
/*! namespace exports */
/*! export todoListCardView [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoListCardView": () => /* binding */ todoListCardView
/* harmony export */ });
/* harmony import */ var _elements_makeTodoListCardView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/makeTodoListCardView.js */ "./src/todoListCardView/elements/makeTodoListCardView.js");
/* harmony import */ var _isCompleted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isCompleted.js */ "./src/todoListCardView/isCompleted.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get.js */ "./src/todoListCardView/get.js");
/* harmony import */ var _addTodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTodo.js */ "./src/todoListCardView/addTodo.js");





const deleteTodoListCardView = () => {
  const todoListCardView = _get_js__WEBPACK_IMPORTED_MODULE_2__.get.todoListCardView();
  todoListCardView.remove();
}

const showTodoListCardView = (category) => {
  if ((0,_isCompleted_js__WEBPACK_IMPORTED_MODULE_1__.isTodoListCardViewExist)()) {
    deleteTodoListCardView();
  }

  const todoListCardView = (0,_elements_makeTodoListCardView_js__WEBPACK_IMPORTED_MODULE_0__.makeTodoListCardView)(category);

  const cardViewContainer = _get_js__WEBPACK_IMPORTED_MODULE_2__.get.cardViewContainer();
  cardViewContainer.appendChild(todoListCardView);
}

const changeTodoItemTitle = (title, todoNumber) => {
  const todoListMainRows = document.querySelector('')
}

const TodoListCardView = () => {
  
  return {
    addTodo: _addTodo_js__WEBPACK_IMPORTED_MODULE_3__.addTodo,
    changeTodoItemTitle,
    showTodoListCardView
  }
}

const todoListCardView = TodoListCardView();



/***/ }),

/***/ "./src/todoListCardView/undoCompleted.js":
/*!***********************************************!*\
  !*** ./src/todoListCardView/undoCompleted.js ***!
  \***********************************************/
/*! namespace exports */
/*! export undoCompletedDisplay [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "undoCompletedDisplay": () => /* binding */ undoCompletedDisplay
/* harmony export */ });
const unStrikeThroughTitle = (todoItem) => {
  const todoTitle = todoItem.querySelector('.TodoItem-title');
  todoTitle.classList.remove('TodoItem-title-checked');
}

const changeToNotCompletedMarker = (todoItem) => {
  const checkMarker = todoItem.querySelector('.check-marker');
  checkMarker.className = 'far fa-circle check-marker';
  checkMarker.id = 'notCompletedMarker';
}

const deleteDeleteBtn = (todoItem) => {
  const deleteBtn = todoItem.querySelector('.TodoItem-delete-btn');
  deleteBtn.remove();
}

const brightenTodoItem = (todoItem) => {
  todoItem.classList.remove('TodoItem-checked');
}

const undoCompletedDisplay = (todoItem) => {
  brightenTodoItem(todoItem);
  changeToNotCompletedMarker(todoItem);
  unStrikeThroughTitle(todoItem);
  deleteDeleteBtn(todoItem);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL2Nzcy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVMaXN0TW9kYWwvY3NzL2NyZWF0ZUxpc3RNb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVG9kb01vZGFsL2Nzcy9jcmVhdGVUb2RvTW9kYWwuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9EZXRhaWxzQ2FyZFZpZXcvY3NzL3RvZG9EZXRhaWxzQ2FyZFZpZXcuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9MaXN0Q2FyZFZpZXcvY3NzL3RvZG9MaXN0Q2FyZFZpZXcuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9jc3MvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5jc3M/YTIxNyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVMaXN0TW9kYWwvY3NzL2NyZWF0ZUxpc3RNb2RhbC5jc3M/YjhiYiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvTW9kYWwvY3NzL2NyZWF0ZVRvZG9Nb2RhbC5jc3M/NmM2ZCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L2Nzcy90b2RvRGV0YWlsc0NhcmRWaWV3LmNzcz9jNmNhIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9MaXN0Q2FyZFZpZXcvY3NzL3RvZG9MaXN0Q2FyZFZpZXcuY3NzPzljYTMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvVG9kby90b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1RvZG9MaXN0L2dldFByaW9yaXR5QXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvVG9kb0xpc3QvaXNTYW1lVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Ub2RvTGlzdC90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL0NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9jaGFuZ2VDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL2Nsb3NlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9lbGVtZW50cy9pbmRpdmlkdWFsQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9lbGVtZW50cy9tYWtlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsL2VsZW1lbnRzL21vZGFsSGVhZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwvZWxlbWVudHMvbW9kYWxNYWluLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwvZ2V0RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9zdGFydEluaXRpYWxTZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVMaXN0TW9kYWwvQ3JlYXRlTGlzdE1vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUxpc3RNb2RhbC9hZGRDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVMaXN0TW9kYWwvY2xvc2VNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVMaXN0TW9kYWwvZWxlbWVudHMvYnV0dG9uQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUxpc3RNb2RhbC9lbGVtZW50cy9jb250ZW50Q29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUxpc3RNb2RhbC9lbGVtZW50cy9sYWJlbFRleHRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlTGlzdE1vZGFsL2VsZW1lbnRzL21ha2VDcmVhdGVMaXN0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlTGlzdE1vZGFsL2VsZW1lbnRzL3RleHRGaWVsZENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVMaXN0TW9kYWwvZ2V0RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlTGlzdE1vZGFsL2lzVGl0bGVUZXh0YXJlYUVtcHR5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUxpc3RNb2RhbC9zdGFydEluaXRpYWxTZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvTW9kYWwvQ3JlYXRlVG9kb01vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9hZGRUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9jaGFuZ2VDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvTW9kYWwvY2xvc2VNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvTW9kYWwvZWxlbWVudHMvYWRkVG9kb0J0bkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvTW9kYWwvZWxlbWVudHMvbGFiZWxUZXh0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9lbGVtZW50cy9tYWtlQ3JlYXRlVG9kb01vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9lbGVtZW50cy90b2RvSW5mb0Rlc2NyaXB0aW9uQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9lbGVtZW50cy90b2RvSW5mb1RpdGxlQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9lbGVtZW50cy90b2RvaW5mb0NhdGVnb3J5Q29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9lbGVtZW50cy90b2RvaW5mb0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvTW9kYWwvZ2V0RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVG9kb01vZGFsL2lzVGl0bGVUZXh0YXJlYUVtcHR5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG9Nb2RhbC9zdGFydEluaXRpYWxTZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kYXRlL2dldFRvZGF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25hdkJhci9jYXRlZ29yeUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmF2QmFyL2NyZWF0ZVRvZG9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmF2QmFyL2VsZW1lbnRzL21ha2VOYXZCYXJDYXRlZ29yeUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmF2QmFyL2dldC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9uYXZCYXIvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25hdkJhci9uYXZCYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmF2QmFyL25hdkJhckNhdGVnb3J5TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L2VsZW1lbnRzL2VkaXRQYW5lLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9EZXRhaWxzQ2FyZFZpZXcvZWxlbWVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L2VsZW1lbnRzL21haW4vZWxlbWVudHMvRHVlRGF0ZVJvdy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L2VsZW1lbnRzL21haW4vZWxlbWVudHMvVGFnUm93LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9EZXRhaWxzQ2FyZFZpZXcvZWxlbWVudHMvbWFpbi9lbGVtZW50cy9jcmVhdGVkRGF0ZVJvdy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L2VsZW1lbnRzL21haW4vZWxlbWVudHMvZGVzY3JpcHRpb25Sb3cuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0RldGFpbHNDYXJkVmlldy9lbGVtZW50cy9tYWluL2VsZW1lbnRzL2xhYmVsVGV4dC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L2VsZW1lbnRzL21haW4vZWxlbWVudHMvdGl0bGVSb3cuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0RldGFpbHNDYXJkVmlldy9lbGVtZW50cy9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0RldGFpbHNDYXJkVmlldy9lbGVtZW50cy9tYWtlVG9kb0RldGFpbHNDYXJkVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L2dldC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9EZXRhaWxzQ2FyZFZpZXcvc2F2ZVRvZG9EZXRhaWxzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9EZXRhaWxzQ2FyZFZpZXcvc3RhcnRJbml0aWFsU2V0dXAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0RldGFpbHNDYXJkVmlldy90b2RvRGV0YWlsc0NhcmRWaWV3LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9MaXN0Q2FyZFZpZXcvYWRkVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvTGlzdENhcmRWaWV3L2NoZWNrTWFya2VyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9MaXN0Q2FyZFZpZXcvZGVsZXRlQnV0dG9uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9MaXN0Q2FyZFZpZXcvZWxlbWVudHMvbWFrZVRvZG9MaXN0Q2FyZFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0xpc3RDYXJkVmlldy9lbGVtZW50cy90b2RvTGlzdEhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvTGlzdENhcmRWaWV3L2VsZW1lbnRzL3RvZG9MaXN0TWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvTGlzdENhcmRWaWV3L2VsZW1lbnRzL3RvZG9MaXN0TWFpblJvd3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0xpc3RDYXJkVmlldy9nZXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0xpc3RDYXJkVmlldy9pc0NvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvTGlzdENhcmRWaWV3L21hcmtDb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0xpc3RDYXJkVmlldy90b2RvTGlzdENhcmRWaWV3LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9MaXN0Q2FyZFZpZXcvdW5kb0NvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDZDQUE2QywyQkFBMkIsR0FBRyxXQUFXLDRCQUE0Qiw0QkFBNEIsNEJBQTRCLDRCQUE0QiwrQkFBK0IsOEJBQThCLDhCQUE4QixpQ0FBaUMsNEJBQTRCLDRCQUE0QixtREFBbUQsZ0NBQWdDLGdDQUFnQyw4QkFBOEIsa0NBQWtDLDhDQUE4QyxxQ0FB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QUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxnRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxnRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxrRUFBZTtB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O0FBQ0E7O0FBRUEscUZBQXFGO0FBQ3JGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGK0Q7QUFDaEI7O0FBRS9DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qiw0RUFBbUI7QUFDM0Msd0JBQXdCLDRFQUFtQjs7QUFFM0M7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbCB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG5cXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBtYXgtaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWhlYWRlciB7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgLyogR2l2ZSBwYWRkaW5nIHRvIHRoZSBqdXN0IHNpZGUgKi9cXG4gIHBhZGRpbmc6IDAgdmFyKC0tZ3V0dGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgMCAwO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtZm9udC1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pLWJvbGQpO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtbWFpbiB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zIHtcXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XFxuICBwYWRkaW5nOiAwIHZhcigtLWd1dHRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXM6aG92ZXIsXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3IpO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXMtdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuICBjb2xvcjogdmFyKC0tY2FyZC1pdGVtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYXJkLWl0ZW0tZm9udC1zaXplKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItYm90dG9tLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwgLmZhLWNoZWNrLWNpcmNsZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb25maXJtLWNvbG9yKTsgXFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9jc3MvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUNBQXlDO0VBQ3pDLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsY0FBYzs7RUFFZCwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUEsMkJBQTJCOztBQUUzQjtFQUNFLGFBQWE7RUFDYixhQUFhOztFQUViLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHlDQUF5Qzs7RUFFekMsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4Qiw0Q0FBNEM7RUFDNUMsd0VBQXdFO0VBQ3hFLG1DQUFtQzs7RUFFbkMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0Msd0VBQXdFOztFQUV4RSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsMkNBQTJDOztFQUUzQyxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLG1EQUFtRDtFQUNuRCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLHNDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlVG9kb01vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG5cXG4gIC8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG4gIC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjY2NjYztcXG4gIC0tY2FyZC1pdGVtLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtaXRlbS1mb250LXNpemU6IDE0cHg7XFxuICAtLWNvbmZpcm0tY29sb3I6ICMyM2NlODg7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuXFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgbWF4LWhlaWdodDogMzUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1oZWFkZXIge1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgbWluLWhlaWdodDogNTVweDtcXG4gIC8qIEdpdmUgcGFkZGluZyB0byB0aGUganVzdCBzaWRlICovXFxuICBwYWRkaW5nOiAwIHZhcigtLWd1dHRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIDAgMDtcXG4gIGNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWZvbnQtY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC10aXRsZSB7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkKTtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtcyB7XFxuICBtaW4taGVpZ2h0OiA0NHB4O1xcbiAgcGFkZGluZzogMCB2YXIoLS1ndXR0ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zOmhvdmVyLFxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtczphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yKTtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zLXRpdGxlIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtaXRlbS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC1pdGVtLWZvbnQtc2l6ZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWJvdHRvbS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsIC5mYS1jaGVjay1jaXJjbGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29uZmlybS1jb2xvcik7IFxcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLyogICovXFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAxNjVweDtcXG4gIFxcbiAgLyogVE8gQkUgUkVNT1ZFRCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtY29udGVudC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMTJweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtTGFiZWxUZXh0LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5jcmVhdGVMaXN0LW1vZGFsLXRleHRGaWVsZC1jb250YWluZXIge1xcbiAgXFxufVxcblxcbi5jcmVhdGVMaXN0LW1vZGFsLWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMCAwIDtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtYnV0dG9ucyB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtZm9udC1zaXplKTtcXG4gIGNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG5cXG4gIC8qIFRvIGNlbnRlciB0aGluZ3MgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jcmVhdGVMaXN0LWJ1dHRvbnM6aG92ZXIsIFxcbi5jcmVhdGVMaXN0LWJ1dHRvbnM6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZCk7XFxufVxcblxcbmJ1dHRvbltkYXRhLWJ0bj1cXFwiY2FuY2VsXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcik7XFxufVxcblxcbmJ1dHRvbltkYXRhLWJ0bj1cXFwiY3JlYXRlXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIDA7IFxcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jcmVhdGVMaXN0TW9kYWwvY3NzL2NyZWF0ZUxpc3RNb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLDBDQUEwQztFQUMxQyx5Q0FBeUM7RUFDekMsaUNBQWlDO0VBQ2pDLHVDQUF1QztFQUN2Qyx1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBQ2xDOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaURBQWlEO0VBQ2pELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQSxLQUFLOztBQUVMO0VBQ0UsWUFBWTtFQUNaLGFBQWE7O0VBRWIsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyx1QkFBdUI7RUFDdkIseUNBQXlDOztFQUV6QyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7O0VBRWIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNENBQTRDO0VBQzVDLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixnQkFBZ0I7O0VBRWhCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiAgKi9cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDE2NXB4O1xcbiAgXFxuICAvKiBUTyBCRSBSRU1PVkVEICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC1jb250ZW50LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDExMnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC1MYWJlbFRleHQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtdGV4dEZpZWxkLWNvbnRhaW5lciB7XFxuICBcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAwIDAgO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1idXR0b25zIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvcik7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC1mb250LXNpemUpO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtZm9udC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcblxcbiAgLyogVG8gY2VudGVyIHRoaW5ncyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtYnV0dG9uczpob3ZlciwgXFxuLmNyZWF0ZUxpc3QtYnV0dG9uczpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkKTtcXG59XFxuXFxuYnV0dG9uW2RhdGEtYnRuPVxcXCJjYW5jZWxcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlci1yaWdodDogMC41cHggc29saWQgdmFyKC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uW2RhdGEtYnRuPVxcXCJjcmVhdGVcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgMDsgXFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG4gIC8qIGNyZWF0ZUxpc3RNb2RhbCAqL1xcbiAgLS1ndXR0ZXI6IDE2cHg7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5jcmVhdGVUb2RvLW1vZGFsIHtcXG4gIGhlaWdodDogNDUwcHg7XFxuICB3aWR0aDogNDUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3JlYXRlVG9kby1tb2RhbC10b2RvaW5mby1jb250YWluZXIge1xcbiAgZmxleDogMSAwIDA7XFxuICBwYWRkaW5nOiB2YXIoLS1ndXR0ZXIpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvaW5mby1jb250YWluZXItdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9pbmZvLWNvbnRhaW5lci1kZXNjcmlwdGlvbiB7XFxuICBmbGV4OiA0IDAgMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb2luZm8tY29udGFpbmVyLWNhdGVnb3J5IHtcXG4gIGZsZXg6IDEgMCAwO1xcbn1cXG5cXG4udG9kb2luZm8tY2F0ZWdvcnktc2VsZWN0QnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jcmVhdGVUb2RvLW1vZGFsLWFkZFRvZG9CdG4tY29udGFpbmVyIHtcXG4gIGZsZXg6IDAgMCA1NHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tYnV0dG9ucyB7XFxuICBmbGV4OiAxIDAgMDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG4gIC8qIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTMpOyAqL1xcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi5jcmVhdGVUb2RvLWJ1dHRvbnM6aG92ZXIsXFxuLmNyZWF0ZVRvZG8tYnV0dG9uczphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jcmVhdGVUb2RvTW9kYWwvY3NzL2NyZWF0ZVRvZG9Nb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLDBDQUEwQztFQUMxQyx5Q0FBeUM7RUFDekMsaUNBQWlDO0VBQ2pDLHVDQUF1QztFQUN2Qyx1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5Q0FBeUM7RUFDekMsMkNBQTJDOztFQUUzQyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjs7RUFFdEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYzs7RUFFZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXOztFQUVYLHdFQUF3RTtFQUN4RSw0Q0FBNEM7RUFDNUMsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSx3REFBd0Q7QUFDMURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG4gIC8qIGNyZWF0ZUxpc3RNb2RhbCAqL1xcbiAgLS1ndXR0ZXI6IDE2cHg7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5jcmVhdGVUb2RvLW1vZGFsIHtcXG4gIGhlaWdodDogNDUwcHg7XFxuICB3aWR0aDogNDUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3JlYXRlVG9kby1tb2RhbC10b2RvaW5mby1jb250YWluZXIge1xcbiAgZmxleDogMSAwIDA7XFxuICBwYWRkaW5nOiB2YXIoLS1ndXR0ZXIpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvaW5mby1jb250YWluZXItdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9pbmZvLWNvbnRhaW5lci1kZXNjcmlwdGlvbiB7XFxuICBmbGV4OiA0IDAgMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb2luZm8tY29udGFpbmVyLWNhdGVnb3J5IHtcXG4gIGZsZXg6IDEgMCAwO1xcbn1cXG5cXG4udG9kb2luZm8tY2F0ZWdvcnktc2VsZWN0QnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jcmVhdGVUb2RvLW1vZGFsLWFkZFRvZG9CdG4tY29udGFpbmVyIHtcXG4gIGZsZXg6IDAgMCA1NHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tYnV0dG9ucyB7XFxuICBmbGV4OiAxIDAgMDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG4gIC8qIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTMpOyAqL1xcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi5jcmVhdGVUb2RvLWJ1dHRvbnM6aG92ZXIsXFxuLmNyZWF0ZVRvZG8tYnV0dG9uczphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2U0ZTRlNDtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1leHRyYS1zbWFsbC1mb250LXNpemU6IDEwcHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG5cXG4gIC8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuICAtLXRvZG8taXRlbS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tdG9kby1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjNDI0MjQyO1xcbiAgLS10b2RvLWl0ZW0tdGV4dC1jaGVja2VkLWNvbG9yOiAjOGU4ZTkyO1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItZm9udC1zaXplOiAyMHB4O1xcbiAgLS1jYXJkLWJnLTEtY29sb3I6ICMxNjE2MTY7XFxuXFxuICAvKiBUb2RvRGV0YWlscy1DYXJkVmlldyAqL1xcbiAgLS1DYXJkUGFkZGVyLXJpZ2h0OiAyNHB4O1xcbiAgLS1DYXJkUGFkZGVyLWxlZnQ6IDI0cHg7XFxuICAtLUNhcmRQYWRkZXItdG9wOiA4cHg7XFxuICAtLUNhcmRQYWRkZXItYm90dG9tOiA4cHg7XFxuICAtLXRvZG8tZWRpdC1oZWFkZXItdGV4dC1jb2xvcjogI2U0ZTRlNDtcXG4gIC0tdG9kby1lZGl0LXRleHRmaWVsZC10aXRsZS1mb250LXNpemU6IDI0cHg7XFxuICAtLWZvbnQtc2l6ZS1iYXNlOiAxNXB4O1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBUb2RvRGV0YWlscy1DYXJkVmlldyAqL1xcblxcbi5Ub2RvRGV0YWlscy1DYXJkVmlldyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLTEtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLlRvZG9FZGl0LVBhbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLlRvZG9FZGl0LWhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiA1NHB4O1xcbiAgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1DYXJkUGFkZGVyLWxlZnQpO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tQ2FyZFBhZGRlci1yaWdodCk7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0tdG9kby1lZGl0LWhlYWRlci10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLlRvZG9FZGl0LW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1DYXJkUGFkZGVyLXRvcCk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tQ2FyZFBhZGRlci1ib3R0b20pO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tQ2FyZFBhZGRlci1yaWdodCk7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLUNhcmRQYWRkZXItbGVmdCk7XFxufVxcblxcbi5Ub2RvRWRpdC1wYWRkZXIge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLUNhcmRQYWRkZXItdG9wKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uVG9kb0VkaXQtbWFpbi10aXRsZVJvdyB7XFxuXFxufVxcblxcbi5Ub2RvRWRpdC1UYWdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcmlvcml0eS10YWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZXh0cmEtc21hbGwtZm9udC1zaXplKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufVxcblxcbi5wcmlvcml0eS10YWc6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSlcXG59XFxuXFxuLmltcG9ydGFudC1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUEzMjMyO1xcbn1cXG4uaGlnaC1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNCQTNBO1xcbn1cXG4ubWlkZGxlLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MGI3Njc7XFxufVxcbi5sb3ctc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTZhNjtcXG59XFxuXFxuLyogLnByaW9yaXR5LWJ0bnMtbm90LXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufSAqL1xcblxcbi5Ub2RvRWRpdC10aXRsZS10ZXh0ZmllbGQge1xcbiAgZm9udC1zaXplOiB2YXIoLS10b2RvLWVkaXQtdGV4dGZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5Ub2RvRWRpdC1tYWluLXRhZ1JvdyB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tQ2FyZFBhZGRlci10b3ApO1xcbn1cXG5cXG4uVG9kb0VkaXQtQ3JlYXRlZERhdGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b2RvRGV0YWlsc0NhcmRWaWV3L2Nzcy90b2RvRGV0YWlsc0NhcmRWaWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIscURBQXFEO0VBQ3JELHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IseUNBQXlDO0VBQ3pDLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsMENBQTBDO0VBQzFDLHlDQUF5QztFQUN6QyxpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGNBQWM7O0VBRWQsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLHdCQUF3Qjs7RUFFeEIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsdUNBQXVDO0VBQ3ZDLHNDQUFzQztFQUN0QyxrQ0FBa0M7RUFDbEMsMEJBQTBCOztFQUUxQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHNDQUFzQztFQUN0QywyQ0FBMkM7RUFDM0Msc0JBQXNCO0FBQ3hCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUEseUJBQXlCOztBQUV6QjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsd0NBQXdDO0VBQ3hDLHlDQUF5Qzs7RUFFekMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjs7RUFFaEIsNENBQTRDOztFQUU1QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxzQ0FBc0M7RUFDdEMsaUNBQWlDO0VBQ2pDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsa0NBQWtDO0VBQ2xDLHdDQUF3QztFQUN4QyxzQ0FBc0M7RUFDdEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0NBQWtDOztFQUVsQyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsdUNBQXVDO0VBQ3ZDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZTRlNGU0O1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS10b2RvLWl0ZW0tYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWV4dHJhLXNtYWxsLWZvbnQtc2l6ZTogMTBweDtcXG4gIC0tY2FyZC1pdGVtLWJnLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG4gIC8qIGNyZWF0ZVRvZG9Nb2RhbCAqL1xcbiAgLS1ndXR0ZXI6IDE2cHg7XFxuXFxuICAvKiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsICovXFxuICAtLWJvcmRlci1ib3R0b20tY29sb3I6ICNjY2NjY2M7XFxuICAtLWNhcmQtaXRlbS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1zaXplOiAxNHB4O1xcbiAgLS1jb25maXJtLWNvbG9yOiAjMjNjZTg4O1xcblxcbiAgLyogVG9kb0xpc3QtQ2FyZFZpZXcgKi9cXG4gIC0tdG9kby1pdGVtLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS10b2RvLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3I6ICM0MjQyNDI7XFxuICAtLXRvZG8taXRlbS10ZXh0LWNoZWNrZWQtY29sb3I6ICM4ZThlOTI7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItdGV4dC1jb2xvcjogI2U0ZTRlNDtcXG4gIC0tdG9kby1pdGVtLWhlYWRlci1mb250LXNpemU6IDIwcHg7XFxuICAtLWNhcmQtYmctMS1jb2xvcjogIzE2MTYxNjtcXG5cXG4gIC8qIFRvZG9EZXRhaWxzLUNhcmRWaWV3ICovXFxuICAtLUNhcmRQYWRkZXItcmlnaHQ6IDI0cHg7XFxuICAtLUNhcmRQYWRkZXItbGVmdDogMjRweDtcXG4gIC0tQ2FyZFBhZGRlci10b3A6IDhweDtcXG4gIC0tQ2FyZFBhZGRlci1ib3R0b206IDhweDtcXG4gIC0tdG9kby1lZGl0LWhlYWRlci10ZXh0LWNvbG9yOiAjZTRlNGU0O1xcbiAgLS10b2RvLWVkaXQtdGV4dGZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjRweDtcXG4gIC0tZm9udC1zaXplLWJhc2U6IDE1cHg7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIFRvZG9EZXRhaWxzLUNhcmRWaWV3ICovXFxuXFxuLlRvZG9EZXRhaWxzLUNhcmRWaWV3IHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgbWluLWhlaWdodDogNDUwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmctMS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uVG9kb0VkaXQtUGFuZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uVG9kb0VkaXQtaGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDU0cHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLUNhcmRQYWRkZXItbGVmdCk7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1DYXJkUGFkZGVyLXJpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGNvbG9yOiB2YXIoLS10b2RvLWVkaXQtaGVhZGVyLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uVG9kb0VkaXQtbWFpbiB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgcGFkZGluZy10b3A6IHZhcigtLUNhcmRQYWRkZXItdG9wKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1DYXJkUGFkZGVyLWJvdHRvbSk7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1DYXJkUGFkZGVyLXJpZ2h0KTtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tQ2FyZFBhZGRlci1sZWZ0KTtcXG59XFxuXFxuLlRvZG9FZGl0LXBhZGRlciB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tQ2FyZFBhZGRlci10b3ApO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5Ub2RvRWRpdC1tYWluLXRpdGxlUm93IHtcXG5cXG59XFxuXFxuLlRvZG9FZGl0LVRhZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByaW9yaXR5LXRhZyB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1leHRyYS1zbWFsbC1mb250LXNpemUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcXG59XFxuXFxuLnByaW9yaXR5LXRhZzphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KVxcbn1cXG5cXG4uaW1wb3J0YW50LXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQTMyMzI7XFxufVxcbi5oaWdoLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0JBM0E7XFxufVxcbi5taWRkbGUtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwYjc2NztcXG59XFxuLmxvdy1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZhNmE2O1xcbn1cXG5cXG4vKiAucHJpb3JpdHktYnRucy1ub3Qtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcXG59ICovXFxuXFxuLlRvZG9FZGl0LXRpdGxlLXRleHRmaWVsZCB7XFxuICBmb250LXNpemU6IHZhcigtLXRvZG8tZWRpdC10ZXh0ZmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLlRvZG9FZGl0LW1haW4tdGFnUm93IHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1DYXJkUGFkZGVyLXRvcCk7XFxufVxcblxcbi5Ub2RvRWRpdC1DcmVhdGVkRGF0ZSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZTRlNGU0O1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS10b2RvLWl0ZW0tYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG5cXG4gIC8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuICAtLXRvZG8taXRlbS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tdG9kby1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjNDI0MjQyO1xcbiAgLS10b2RvLWl0ZW0tdGV4dC1jaGVja2VkLWNvbG9yOiAjOGU4ZTkyO1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItZm9udC1zaXplOiAyMHB4O1xcbiAgLS1jYXJkLWJnLTEtY29sb3I6ICMxNjE2MTY7XFxuXFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuXFxuLlRvZG9MaXN0LUNhcmRWaWV3IHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgbWluLWhlaWdodDogNDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLTEtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLlRvZG9MaXN0LUNhcmRWaWV3LWhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiA2M3B4O1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gIGNvbG9yOiB2YXIoLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3IpO1xcbiAgZm9udC1zaXplOiB2YXIoLS10b2RvLWl0ZW0taGVhZGVyLWZvbnQtc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pLWJvbGQpO1xcbn1cXG5cXG4uVG9kb0xpc3QtQ2FyZFZpZXctbWFpbiB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyAgXFxufVxcblxcbi5Ub2RvTGlzdC1tYWluLXJvd3Mge1xcbiAgbWluLWhlaWdodDogNjNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5Ub2RvSXRlbSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2RvLWl0ZW0tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5Ub2RvSXRlbTpob3ZlcixcXG4uVG9kb0l0ZW06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLlRvZG9JdGVtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZG8taXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcik7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uVG9kb0l0ZW0tY2hlY2tlZCB7XFxuICBjb2xvcjogdmFyKC0tdG9kby1pdGVtLXRleHQtY2hlY2tlZC1jb2xvcik7XFxufVxcblxcbi5Ub2RvSXRlbS1jaGVja0JveCB7XFxuICBtaW4td2lkdGg6IDQ4cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uVG9kb0l0ZW0tdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5Ub2RvSXRlbS10aXRsZS1jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uVG9kb0l0ZW0tZGVsZXRlLWJ0biB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b2RvTGlzdENhcmRWaWV3L2Nzcy90b2RvTGlzdENhcmRWaWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIscURBQXFEO0VBQ3JELHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUNBQXlDO0VBQ3pDLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsY0FBYzs7RUFFZCwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0Isd0JBQXdCOztFQUV4QixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6Qyx1Q0FBdUM7RUFDdkMsc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQywwQkFBMEI7O0FBRTVCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUEsc0JBQXNCOztBQUV0QjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMseUNBQXlDOztFQUV6QyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsNENBQTRDO0VBQzVDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyw2Q0FBNkM7RUFDN0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHVEQUF1RDtFQUN2RCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlOztFQUVmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2U0ZTRlNDtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlVG9kb01vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG5cXG4gIC8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG4gIC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjY2NjYztcXG4gIC0tY2FyZC1pdGVtLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtaXRlbS1mb250LXNpemU6IDE0cHg7XFxuICAtLWNvbmZpcm0tY29sb3I6ICMyM2NlODg7XFxuXFxuICAvKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcbiAgLS10b2RvLWl0ZW0tYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLXRvZG8taXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzQyNDI0MjtcXG4gIC0tdG9kby1pdGVtLXRleHQtY2hlY2tlZC1jb2xvcjogIzhlOGU5MjtcXG4gIC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yOiAjZTRlNGU0O1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLWZvbnQtc2l6ZTogMjBweDtcXG4gIC0tY2FyZC1iZy0xLWNvbG9yOiAjMTYxNjE2O1xcblxcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcblxcbi5Ub2RvTGlzdC1DYXJkVmlldyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy0xLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5Ub2RvTGlzdC1DYXJkVmlldy1oZWFkZXIge1xcbiAgbWluLWhlaWdodDogNjNweDtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBjb2xvcjogdmFyKC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdG9kby1pdGVtLWhlYWRlci1mb250LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkKTtcXG59XFxuXFxuLlRvZG9MaXN0LUNhcmRWaWV3LW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgIFxcbn1cXG5cXG4uVG9kb0xpc3QtbWFpbi1yb3dzIHtcXG4gIG1pbi1oZWlnaHQ6IDYzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNDhweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9kby1pdGVtLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRvZG8taXRlbS1ib3JkZXItcmFkaXVzKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW06aG92ZXIsXFxuLlRvZG9JdGVtOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi5Ub2RvSXRlbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2RvLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3IpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLlRvZG9JdGVtLWNoZWNrZWQge1xcbiAgY29sb3I6IHZhcigtLXRvZG8taXRlbS10ZXh0LWNoZWNrZWQtY29sb3IpO1xcbn1cXG5cXG4uVG9kb0l0ZW0tY2hlY2tCb3gge1xcbiAgbWluLXdpZHRoOiA0OHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLlRvZG9JdGVtLXRpdGxlIHtcXG4gIGZsZXg6IDEgMCAwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uVG9kb0l0ZW0tdGl0bGUtY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLlRvZG9JdGVtLWRlbGV0ZS1idG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSAnLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzJztcbmltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSAnLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMnO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSAnLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzJztcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tICcuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzJztcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gJy4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyc7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSAnLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyc7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gJy4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyc7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbiAgLypcbiAgICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gICAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAgICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICAgKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gICAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gICAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gICAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAgICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gICAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAgICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gICAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAgICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICAgKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAgICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gICAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAgICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICAgKlxuICAgKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gICAqXG4gICAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICAgKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICAgKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gICAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICAgKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gICAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICAgKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAgICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gICAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICAgKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gICAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gICAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gICAqL1xuXG59O1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSAnLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzJztcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsInZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDA7XG5cbmZ1bmN0aW9uIGdldERhdGVNaWxsaXNlY29uZHNQYXJ0KGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpICUgTUlMTElTRUNPTkRTX0lOX01JTlVURTtcbn1cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoZGlydHlEYXRlLmdldFRpbWUoKSk7XG4gIHZhciBiYXNlVGltZXpvbmVPZmZzZXQgPSBNYXRoLmNlaWwoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgZGF0ZS5zZXRTZWNvbmRzKDAsIDApO1xuICB2YXIgaGFzTmVnYXRpdmVVVENPZmZzZXQgPSBiYXNlVGltZXpvbmVPZmZzZXQgPiAwO1xuICB2YXIgbWlsbGlzZWNvbmRzUGFydE9mVGltZXpvbmVPZmZzZXQgPSBoYXNOZWdhdGl2ZVVUQ09mZnNldCA/IChNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICsgZ2V0RGF0ZU1pbGxpc2Vjb25kc1BhcnQoZGF0ZSkpICUgTUlMTElTRUNPTkRTX0lOX01JTlVURSA6IGdldERhdGVNaWxsaXNlY29uZHNQYXJ0KGRhdGUpO1xuICByZXR1cm4gYmFzZVRpbWV6b25lT2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSArIG1pbGxpc2Vjb25kc1BhcnRPZlRpbWV6b25lT2Zmc2V0O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSAnLi4vLi4vdG9EYXRlL2luZGV4LmpzJztcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSAnLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzJztcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSAnLi4vLi4vdG9EYXRlL2luZGV4LmpzJztcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tICcuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyc7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gJy4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyc7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gJy4uL3JlcXVpcmVkQXJncy9pbmRleC5qcyc7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSAnLi4vLi4vdG9EYXRlL2luZGV4LmpzJztcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tICcuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyc7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gJy4uL3JlcXVpcmVkQXJncy9pbmRleC5qcyc7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSAnLi4vLi4vdG9EYXRlL2luZGV4LmpzJztcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tICcuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyc7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gJy4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyc7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gJy4uL3JlcXVpcmVkQXJncy9pbmRleC5qcyc7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSAnLi4vdG9JbnRlZ2VyL2luZGV4LmpzJztcbmltcG9ydCB0b0RhdGUgZnJvbSAnLi4vLi4vdG9EYXRlL2luZGV4LmpzJztcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tICcuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyc7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gJy4uL3JlcXVpcmVkQXJncy9pbmRleC5qcyc7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIGRpcnR5T3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tICcuLi8uLi90b0RhdGUvaW5kZXguanMnO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tICcuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanMnOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tICcuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyc7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSAnLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMnO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tICcuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanMnOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSAnLi4vdG9JbnRlZ2VyL2luZGV4LmpzJztcbmltcG9ydCB0b0RhdGUgZnJvbSAnLi4vLi4vdG9EYXRlL2luZGV4LmpzJztcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSAnLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzJzsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tICcuLi90b0ludGVnZXIvaW5kZXguanMnO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gJy4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzJztcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tICcuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyc7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gJy4uL3JlcXVpcmVkQXJncy9pbmRleC5qcyc7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2VlaywgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gJy4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzJztcbmltcG9ydCB0b0RhdGUgZnJvbSAnLi4vdG9EYXRlL2luZGV4LmpzJztcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSAnLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMnO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiB2YXIgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tICcuLi9pc1ZhbGlkL2luZGV4LmpzJztcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gJy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qcyc7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gJy4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyc7XG5pbXBvcnQgdG9EYXRlIGZyb20gJy4uL3RvRGF0ZS9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tICcuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzJztcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tICcuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyc7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tICcuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMnO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSAnLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMnO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tICcuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qcyc7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gJy4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzJzsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYWEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYmIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA1LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBNYXkgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDUvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IE1heSAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBNYXkgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgU3VuZGF5LCBNYXkgMjl0aCwgMTQ1MyBhdCAuLi4gICAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRoZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgbm93IHJlcXVpcmVkIGZvciB0aGUgc2FrZSBvZiBleHBsaWNpdG5lc3MuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSksIFwieXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eFwiKVxuICogICBgYGBcbiAqXG4gKiAtIE5ldyBmb3JtYXQgc3RyaW5nIEFQSSBmb3IgYGZvcm1hdGAgZnVuY3Rpb25cbiAqICAgd2hpY2ggaXMgYmFzZWQgb24gW1VuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNV0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZSkuXG4gKiAgIFNlZSBbdGhpcyBwb3N0XShodHRwczovL2Jsb2cuZGF0ZS1mbnMub3JnL3Bvc3QvdW5pY29kZS10b2tlbnMtaW4tZGF0ZS1mbnMtdjItc3JlYXR5a2k5MWpnKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIC0gQ2hhcmFjdGVycyBhcmUgbm93IGVzY2FwZWQgdXNpbmcgc2luZ2xlIHF1b3RlIHN5bWJvbHMgKGAnYCkgaW5zdGVhZCBvZiBzcXVhcmUgYnJhY2tldHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSAnLi4vdG9EYXRlL2luZGV4LmpzJztcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSAnLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMnO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKGRhdGUpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eVN0cmluZywgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhkaXJ0eVN0cmluZyk7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIHZhbHVlO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwYXJzZVBhdHRlcm5zKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgdmFsdWUgPSBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpXG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5U3RyaW5nLCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGRpcnR5U3RyaW5nKTtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuXG4gICAgaWYgKCFwYXJzZVJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpXG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAodHlwZW9mIGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0ub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudCk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gJy4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMnO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufSIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSAnLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMnO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ10gLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4gIC8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuICAvLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbiAgLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxuZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX2RpcnR5T3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgOlxuICAvL1xuICAvLyAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9XG4gIC8vICAgdmFyIHVuaXQgPSBTdHJpbmcob3B0aW9ucy51bml0KVxuICAvL1xuICAvLyB3aGVyZSBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ1xuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn1cblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHF1YXJ0ZXIpIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gJy4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyc7XG5pbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gJy4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzJztcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gJy4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tICcuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSAnLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzJztcbmltcG9ydCBsb2NhbGl6ZSBmcm9tICcuL19saWIvbG9jYWxpemUvaW5kZXguanMnO1xuaW1wb3J0IG1hdGNoIGZyb20gJy4vX2xpYi9tYXRjaC9pbmRleC5qcyc7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xuXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tICcuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qcyc7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gJy4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyc7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gJy4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzJztcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIHZhciByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gJy4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzJztcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3JlYXRlTGlzdE1vZGFsLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3JlYXRlVG9kb01vZGFsLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb0RldGFpbHNDYXJkVmlldy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9MaXN0Q2FyZFZpZXcuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBnZXRUb2RheSB9IGZyb20gJy4uL2RhdGUvZ2V0VG9kYXkuanMnO1xuXG5jb25zdCBUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpID0+IHtcbiAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIGxldCBfY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgbGV0IF9kdWVEYXRlID0gJyc7XG4gIGxldCBfY3JlYXRlZERhdGUgPSBnZXRUb2RheSgpO1xuICBsZXQgX3ByaW9yaXR5ID0gJyc7XG4gIGxldCBfY29tcGxldGVkID0gZmFsc2U7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFVFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3Qgc2V0VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgICBfdGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgfVxuICBcbiAgY29uc3Qgc2V0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICBfY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgfVxuXG4gIGNvbnN0IHNldER1ZURhdGUgPSAoZHVlRGF0ZSkgPT4ge1xuICAgIF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuXG4gIC8vIGNvbnN0IHNldENyZWF0ZWREYXRlID0gKGNyZWF0ZWREYXRlKSA9PiB7XG4gIC8vICAgX2NyZWF0ZWREYXRlID0gY3JlYXRlZERhdGU7XG4gIC8vIH1cblxuICBjb25zdCBzZXRQcmlvcml0eSA9IChwcmlvcml0eSkgPT4ge1xuICAgIF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR0VUXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gX3RpdGxlO1xuICB9XG5cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9kZXNjcmlwdGlvbjtcbiAgfVxuICBcbiAgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9jYXRlZ29yeTtcbiAgfVxuXG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9kdWVEYXRlO1xuICB9XG5cbiAgY29uc3QgZ2V0Q3JlYXRlZERhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9jcmVhdGVkRGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBfcHJpb3JpdHk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gaXMoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IGlzQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIHJldHVybiBfY29tcGxldGVkO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIENvbXBsZXRlZFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgbWFya0NvbXBsZXRlZCA9ICgpID0+IHtcbiAgICBfY29tcGxldGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHVuZG9Db21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgX2NvbXBsZXRlZCA9IGZhbHNlO1xuICB9IFxuXG4gIFxuICByZXR1cm4ge1xuICAgIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0Q2F0ZWdvcnksIHNldER1ZURhdGUsIHNldFByaW9yaXR5LFxuICAgIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0Q2F0ZWdvcnksIGdldENyZWF0ZWREYXRlLCBnZXRQcmlvcml0eSwgZ2V0RHVlRGF0ZSxcbiAgICBpc0NvbXBsZXRlZCwgbWFya0NvbXBsZXRlZCwgdW5kb0NvbXBsZXRlZFxuICB9XG59XG5cbmV4cG9ydCB7IFRvZG8gfTsiLCJjb25zdCBnZXRQcmlvcml0eUFzTnVtYmVyID0gKHByaW9yaXR5KSA9PiB7XG4gIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICBjYXNlIFwiaW1wb3J0YW50XCI6XG4gICAgICBwcmlvcml0eSA9IDE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgcHJpb3JpdHkgPSAyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm1pZGRsZVwiOlxuICAgICAgcHJpb3JpdHkgPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxvd1wiOlxuICAgICAgcHJpb3JpdHkgPSA0O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcHJpb3JpdHk7XG59XG5cbmV4cG9ydCB7IGdldFByaW9yaXR5QXNOdW1iZXIgfTsiLCJjb25zdCBpc1NhbWVPYmplY3QgPSAob2JqZWN0T25lLCBvYmplY3RUd28pID0+IHtcbiAgcmV0dXJuIE9iamVjdC5pcyhvYmplY3RPbmUsIG9iamVjdFR3byk7XG59XG5cbmV4cG9ydCB7IGlzU2FtZU9iamVjdCB9OyIsImltcG9ydCB7IGdldFByaW9yaXR5QXNOdW1iZXIgfSBmcm9tICcuL2dldFByaW9yaXR5QXNOdW1iZXIuanMnO1xuaW1wb3J0IHsgaXNTYW1lT2JqZWN0IH0gZnJvbSAnLi9pc1NhbWVUb2RvLmpzJztcblxuY29uc3QgVG9kb0xpc3QgPSAoKSA9PiB7XG5cbiAgY29uc3QgX3RvZG9zID0ge1xuICAgIGRlZmF1bHQ6IFtdLFxuICB9O1xuXG4gIC8vIEFkZCBUb2RvXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIGxldCBjYXRlZ29yeSA9IHRvZG8uZ2V0Q2F0ZWdvcnkoKTtcbiAgICBcbiAgICAvLyBpZiBjYXRlZ29yeSBkb2Vzbid0IGV4aXN0LCBhZGQgb25lXG4gICAgaWYgKCEoY2F0ZWdvcnkgaW4gX3RvZG9zKSkge1xuICAgICAgYWRkTmV3Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIH0gXG4gICAgXG4gICAgX3RvZG9zW2NhdGVnb3J5XS5wdXNoKHRvZG8pO1xuICB9XG5cbiAgY29uc3QgYWRkTmV3Q2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICBfdG9kb3NbY2F0ZWdvcnldID0gW107XG4gIH1cblxuICBjb25zdCBkZWxldGVUb2RvQnlOdW1iZXIgPSAodG9kb051bWJlciwgY2F0ZWdvcnkpID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IGdldFRvZG9zQnlDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgdG9kb3Muc3BsaWNlKHRvZG9OdW1iZXIsIDEpO1xuICAgIGNvbnNvbGUubG9nKHRvZG9zKTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgcmV0dXJuIGRlbGV0ZSBfdG9kb3NbY2F0ZWdvcnldO1xuICB9XG5cbiAgY29uc3QgZ2V0QWxsVG9kb3MgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsVG9kb3MgPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtjYXRlZ29yeSwgdG9kb3NdIG9mIE9iamVjdC5lbnRyaWVzKF90b2RvcykpIHtcbiAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGFsbFRvZG9zLnB1c2godG9kbyk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBhbGxUb2RvcztcbiAgfVxuXG4gIGNvbnN0IGdldFRvZG9zQnlDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHJldHVybiBfdG9kb3NbY2F0ZWdvcnldO1xuICB9XG5cbiAgY29uc3QgZ2V0VG9kb0J5TnVtYmVyID0gKHRvZG9OdW1iZXIsIGNhdGVnb3J5KSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBnZXRUb2Rvc0J5Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIHJldHVybiB0b2Rvc1t0b2RvTnVtYmVyXTtcbiAgfVxuXG4gIGNvbnN0IGdldEFsbENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKF90b2Rvcyk7XG4gICAgcmV0dXJuIGNhdGVnb3JpZXM7XG4gIH1cblxuICBjb25zdCBzb3J0VG9kb3NCeUR1ZURhdGUgPSAodG9kb3MpID0+IHtcbiAgICB0b2Rvcy5zb3J0KCh0b2RvT25lLCB0b2RvVHdvKSA9PiB7XG4gICAgICBjb25zdCB0b2RvT25lRHVlRGF0ZSA9IHRvZG9PbmUuZ2V0RHVlRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kb1R3b0R1ZURhdGUgPSB0b2RvVHdvLmdldER1ZURhdGUoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIE51bWJlcih0b2RvT25lRHVlRGF0ZSkgLSBOdW1iZXIodG9kb1R3b0R1ZURhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc29ydFRvZG9zQnlQcmlvcml0eSA9ICh0b2RvcykgPT4ge1xuICAgIHRvZG9zLnNvcnQoZnVuY3Rpb24gY29tcGFyZVByaW9yaXR5KHRvZG9PbmUsIHRvZG9Ud28pIHtcbiAgICAgIGxldCB0b2RvT25lUHJpb3JpdHkgPSB0b2RvT25lLmdldFByaW9yaXR5KCk7XG4gICAgICBsZXQgdG9kb1R3b1ByaW9yaXR5ID0gdG9kb1R3by5nZXRQcmlvcml0eSgpO1xuXG4gICAgICB0b2RvT25lUHJpb3JpdHkgPSBnZXRQcmlvcml0eUFzTnVtYmVyKHRvZG9PbmVQcmlvcml0eSk7XG4gICAgICB0b2RvVHdvUHJpb3JpdHkgPSBnZXRQcmlvcml0eUFzTnVtYmVyKHRvZG9Ud29Qcmlvcml0eSk7XG4gICAgICBcbiAgICAgIHJldHVybiB0b2RvT25lUHJpb3JpdHkgLSB0b2RvVHdvUHJpb3JpdHk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzb3J0VG9kb3NCeUNyZWF0ZWREYXRlID0gKHRvZG9zKSA9PiB7XG4gICAgdG9kb3Muc29ydCgodG9kb09uZSwgdG9kb1R3bykgPT4ge1xuICAgICAgY29uc3QgdG9kb09uZUNyZWF0ZWREYXRlID0gdG9kb09uZS5nZXRDcmVhdGVkRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kb1R3b0NyZWF0ZWREYXRlID0gdG9kb1R3by5nZXRDcmVhdGVkRGF0ZSgpO1xuICAgICAgXG4gICAgICByZXR1cm4gTnVtYmVyKHRvZG9PbmVDcmVhdGVkRGF0ZSkgLSBOdW1iZXIodG9kb1R3b0NyZWF0ZWREYXRlKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgcmV0dXJuIHtcbiAgICBfdG9kb3MsXG4gICAgYWRkVG9kbywgYWRkTmV3Q2F0ZWdvcnksIGRlbGV0ZVRvZG9CeU51bWJlciwgZGVsZXRlQ2F0ZWdvcnksXG4gICAgZ2V0VG9kb3NCeUNhdGVnb3J5LCBnZXRBbGxUb2RvcywgZ2V0QWxsQ2F0ZWdvcmllcywgZ2V0VG9kb0J5TnVtYmVyLFxuICAgIHNvcnRUb2Rvc0J5RHVlRGF0ZSwgc29ydFRvZG9zQnlDcmVhdGVkRGF0ZSwgc29ydFRvZG9zQnlQcmlvcml0eVxuICB9XG59XG5cbmNvbnN0IHRvZG9MaXN0ID0gVG9kb0xpc3QoKTtcblxuZXhwb3J0IHsgdG9kb0xpc3QgfTsiLCJpbXBvcnQgeyBtYWtlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCB9IGZyb20gJy4vZWxlbWVudHMvbWFrZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWwuanMnO1xuaW1wb3J0IHsgc3RhcnRJbml0aWFsU2V0dXAgfSBmcm9tICcuL3N0YXJ0SW5pdGlhbFNldHVwLmpzJztcblxuY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsID0gbWFrZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWwoKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCk7XG5cbiAgc3RhcnRJbml0aWFsU2V0dXAoKTtcbn1cblxuLy8gY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBDYXRlZ29yeVNlbGVjdGlvbk1vZGFsID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgb3Blbk1vZGFsXG4gIH1cbn1cblxuY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCA9IENhdGVnb3J5U2VsZWN0aW9uTW9kYWwoKTtcblxuZXhwb3J0IHsgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCB9OyIsImltcG9ydCB7IGNyZWF0ZVRvZG9Nb2RhbCB9IGZyb20gJy4uL2NyZWF0ZVRvZG9Nb2RhbC9DcmVhdGVUb2RvTW9kYWwuanMnO1xuXG4vLyBUbyBjaGFuZ2UgdGhlIGNhdGVnb3J5XG5jb25zdCBjaGFuZ2VDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICBjcmVhdGVUb2RvTW9kYWwuY2hhbmdlQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xufVxuXG5leHBvcnQgeyBjaGFuZ2VDYXRlZ29yeSB9IiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXRFbGVtZW50cy5qcyc7XG5cbi8vIENoZWNrIGlmIG91dHNpZGUgb2YgbW9kYWwgaXMgY2xpY2tlZC5cbmNvbnN0IGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgY2xpY2tlZFRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3QgbW9kYWwgPSBnZXQubW9kYWwoKTtcbiAgXG4gIGlmIChjbGlja2VkVGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBjbG9zZSBtb2RhbFxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBnZXQubW9kYWwoKTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCB7IGNsb3NlTW9kYWwsIGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQgfTtcblxuIiwiaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gJy4uL2Nsb3NlTW9kYWwuanMnO1xuXG4vLyBNYWtlcyBpbmRpdmlkdWFsIGNhdGVnb3J5IGl0ZW1cbmNvbnN0IG1ha2VJbmRpdmlkdWFsQ2F0ZWdvcnkgPSAoY2F0ZWdvcnlUaXRsZSkgPT4ge1xuICBjb25zdCBtb2RhbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbW9kYWxJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zJyk7XG4gIFxuICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zLXRpdGxlJyk7XG4gIGl0ZW1UaXRsZS5pbm5lclRleHQgPSBjYXRlZ29yeVRpdGxlO1xuICBcbiAgbW9kYWxJdGVtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG5cbiAgcmV0dXJuIG1vZGFsSXRlbTtcbn1cblxuZXhwb3J0IHsgbWFrZUluZGl2aWR1YWxDYXRlZ29yeSB9OyIsImltcG9ydCAnLi4vY3NzL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY3NzJ1xuXG5pbXBvcnQgeyBtYWtlTW9kYWxNYWluIH0gZnJvbSAnLi9tb2RhbE1haW4uanMnO1xuaW1wb3J0IHsgbWFrZU1vZGFsSGVhZGVyIH0gZnJvbSAnLi9tb2RhbEhlYWRlci5qcyc7XG5cbi8vIE1ha2UgY2F0ZWdvcnkgc2VsZWN0aW9uIG1vZGFsIEhUTUwgZWxlbWVudFxuY29uc3QgbWFrZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gIG1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2F0ZWdvcnlTZWxlY3Rpb24nKTtcblxuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5hcHBlbmRDaGlsZChtYWtlTW9kYWxIZWFkZXIoKSk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwuYXBwZW5kQ2hpbGQobWFrZU1vZGFsTWFpbigpKTtcbiAgXG4gIG1vZGFsLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwpO1xuICBcbiAgcmV0dXJuIG1vZGFsO1xufVxuXG5leHBvcnQgeyBtYWtlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCB9O1xuIiwiLy8gbWFrZXMgbW9kYWwgdGl0bGUgSFRNTCBlbGVtZW50XG5jb25zdCBtYWtlTW9kYWxUaXRsZSA9ICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC10aXRsZScpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsVGl0bGUuaW5uZXJUZXh0ID0gJ01vdmUgdG8uLi4nO1xuXG4gIHJldHVybiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsVGl0bGU7XG59XG5cbi8vIG1ha2VzIG1vZGFsIGhlYWRlciBIVE1MIGVsZW1lbnRcbmNvbnN0IG1ha2VNb2RhbEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWhlYWRlcicpO1xuXG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQobWFrZU1vZGFsVGl0bGUoKSk7XG5cbiAgcmV0dXJuIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxIZWFkZXI7XG59XG5cbmV4cG9ydCB7IG1ha2VNb2RhbEhlYWRlciB9O1xuXG5cbiAgXG4gIFxuIiwiaW1wb3J0IHsgbWFrZUluZGl2aWR1YWxDYXRlZ29yeSB9IGZyb20gJy4vaW5kaXZpZHVhbENhdGVnb3J5LmpzJztcbmltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSAnLi4vLi4vVG9kb0xpc3QvdG9kb2xpc3QuanMnO1xuXG4vLyBtYWtlcyBtb2RhbCBtYWluXG5jb25zdCBtYWtlTW9kYWxNYWluID0gKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1tYWluJyk7XG5cblxuICAvLyBHZXQgY2F0ZWdvcmllcyBmcm9tIFRvZG9saXN0IGFuZCBhZGQgaXQgdG8gbW9kYWxcbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gdG9kb0xpc3QuZ2V0QWxsQ2F0ZWdvcmllcygpO1xuICBjYXRlZ29yeUxpc3QuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IG1ha2VJbmRpdmlkdWFsQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluLmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9KVxuXG4gIHJldHVybiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbjsgIFxufVxuXG5leHBvcnQgeyBtYWtlTW9kYWxNYWluIH07XG4iLCIvLyBnZXQgSFRNTCBlbGVtZW50c1xuY29uc3QgR2V0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IG1vZGFsID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnlTZWxlY3Rpb24nKTtcbiAgfVxuXG4gIGNvbnN0IG1vZGFsQ2F0ZWdvcnlJdGVtcyA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vZGFsLFxuICAgIG1vZGFsQ2F0ZWdvcnlJdGVtc1xuICB9XG59XG4gIFxuY29uc3QgZ2V0ID0gR2V0KCk7XG4gIFxuZXhwb3J0IHsgZ2V0IH1cbiIsImltcG9ydCB7IGNsb3NlTW9kYWwsIGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQgfSBmcm9tICcuL2Nsb3NlTW9kYWwuanMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXRFbGVtZW50cy5qcyc7XG5pbXBvcnQgeyBjaGFuZ2VDYXRlZ29yeSB9IGZyb20gJy4vY2hhbmdlQ2F0ZWdvcnkuanMnO1xuXG4vLyBSZWNlaXZlIGV2ZW50IG9iamVjdCBhbmQgcmV0dXJuIHRoZSBpbm5lcnRleHQgdmFsdWUgb2YgaXQuXG5jb25zdCBnZXRDYXRlZ29yeVRpdGxlID0gKGUpID0+IHtcbiAgcmV0dXJuIGUudGFyZ2V0LmlubmVyVGV4dDtcbn1cblxuLy8gZW5hYmxlIGNhdGVnb3J5IGl0ZW1zIHRvIGNoYW5nZSBjYXRlZ29yeVxuY29uc3QgZW5hYmxlQ2F0ZWdvcnlJdGVtc1RvQ2hhbmdlQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5SXRlbXMgPSBnZXQubW9kYWxDYXRlZ29yeUl0ZW1zKCk7XG5cbiAgY2F0ZWdvcnlJdGVtcy5mb3JFYWNoKGNhdGVnb3J5SXRlbSA9PiB7XG4gICAgY2F0ZWdvcnlJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNoYW5nZUNhdGVnb3J5KGdldENhdGVnb3J5VGl0bGUoZSkpO1xuICAgIH0pXG4gIH0pO1xufVxuXG4vLyBlbmFibGUgY2F0ZWdvcnkgaXRlbXMgdG8gY2xvc2UgbW9kYWxcbmNvbnN0IGVuYWJsZUNhdGVnb3J5SXRlbXNUb0Nsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5SXRlbXMgPSBnZXQubW9kYWxDYXRlZ29yeUl0ZW1zKCk7XG5cbiAgY2F0ZWdvcnlJdGVtcy5mb3JFYWNoKGNhdGVnb3J5SXRlbSA9PiB7XG4gICAgY2F0ZWdvcnlJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIH0pO1xufVxuXG4vLyBUbyBjbG9zZSB0aGUgbW9kYWwgd2hlbiBvdXRzaWRlIG1vZGFsIGlzIGNsaWNrZWQuXG5jb25zdCBlbmFibGVXaW5kb3dUb0Nsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsb3NlTW9kYWxPck5vdChldmVudCkge1xuICAgIGlmIChpc091dHNpZGVNb2RhbENvbnRlbnRDbGlja2VkKGV2ZW50KSkge1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbE9yTm90KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBTdGFydCBhbGwgc2V0dXBzIG5lZWRlZFxuY29uc3Qgc3RhcnRJbml0aWFsU2V0dXAgPSAoKSA9PiB7XG4gIGVuYWJsZVdpbmRvd1RvQ2xvc2VNb2RhbCgpO1xuICBlbmFibGVDYXRlZ29yeUl0ZW1zVG9DaGFuZ2VDYXRlZ29yeSgpO1xuICBlbmFibGVDYXRlZ29yeUl0ZW1zVG9DbG9zZU1vZGFsKCk7XG59XG5cbmV4cG9ydCB7IHN0YXJ0SW5pdGlhbFNldHVwIH07IiwiaW1wb3J0ICcuL2Nzcy9jcmVhdGVMaXN0TW9kYWwuY3NzJztcblxuaW1wb3J0IHsgc3RhcnRJbml0aWFsU2V0dXAgfSBmcm9tICcuL3N0YXJ0SW5pdGlhbFNldHVwLmpzJztcbmltcG9ydCB7IG1ha2VDcmVhdGVMaXN0TW9kYWwgfSBmcm9tICcuL2VsZW1lbnRzL21ha2VDcmVhdGVMaXN0TW9kYWwuanMnO1xuaW1wb3J0IHsgYWRkQ2F0ZWdvcnkgfSBmcm9tICcuL2FkZENhdGVnb3J5LmpzJztcbmltcG9ydCB7IGdldCB9IGZyb20gJy4vZ2V0RWxlbWVudHMuanMnO1xuXG5jb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGdldC5jb250YWluZXIoKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VDcmVhdGVMaXN0TW9kYWwoKSk7XG5cbiAgc3RhcnRJbml0aWFsU2V0dXAoKTtcbn1cblxuY29uc3QgQ3JlYXRlTGlzdE1vZGFsID0gKCkgPT4geyAgXG5cbiAgcmV0dXJuIHtcbiAgICBvcGVuTW9kYWwsXG4gICAgc3RhcnRJbml0aWFsU2V0dXAsXG4gIH1cbn1cblxuY29uc3QgY3JlYXRlTGlzdE1vZGFsID0gQ3JlYXRlTGlzdE1vZGFsKCk7XG5cbmV4cG9ydCB7IGNyZWF0ZUxpc3RNb2RhbCB9O1xuIiwiaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tICcuLi9Ub2RvTGlzdC90b2RvbGlzdC5qcyc7XG5pbXBvcnQgeyBuYXZCYXJ9IGZyb20gJy4uL25hdkJhci9uYXZCYXIuanMnO1xuXG5jb25zdCBpc0V4aXN0aW5nQ2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IHRvZG9MaXN0LmdldEFsbENhdGVnb3JpZXMoKTtcbiAgcmV0dXJuIGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpXG59XG5cbmNvbnN0IGFkZENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGlmICghaXNFeGlzdGluZ0NhdGVnb3J5KGNhdGVnb3J5KSkge1xuICAgIHRvZG9MaXN0LmFkZE5ld0NhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICBuYXZCYXIuYWRkTmV3Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9XG59XG5cbmV4cG9ydCB7IGFkZENhdGVnb3J5IH07IiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXRFbGVtZW50cy5qcyc7XG5cbmNvbnN0IGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgY2xpY2tlZFRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3QgbW9kYWwgPSBnZXQubW9kYWwoKTtcbiAgXG4gIGlmIChjbGlja2VkVGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGdldC5tb2RhbCgpO1xuICBtb2RhbC5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IHsgY2xvc2VNb2RhbCwgaXNPdXRzaWRlTW9kYWxDb250ZW50Q2xpY2tlZCB9OyIsImNvbnN0IG1ha2VDYW5jZWxCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1idXR0b25zJyk7XG4gIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnRuJywgJ2NhbmNlbCcpO1xuICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgcmV0dXJuIGNhbmNlbEJ0bjtcbn1cblxuY29uc3QgbWFrZUNyZWF0ZUJ0biA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNyZWF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdjcmVhdGVMaXN0LWJ1dHRvbnMnKTtcbiAgY3JlYXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1idG4nLCAnY3JlYXRlJyk7XG4gIGNyZWF0ZUJ0bi5pbm5lclRleHQgPSAnQ3JlYXRlJztcblxuICByZXR1cm4gY3JlYXRlQnRuO1xufVxuXG5jb25zdCBtYWtlQnV0dG9uQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZUxpc3QtbW9kYWwtYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IG1ha2VDYW5jZWxCdG4oKTtcbiAgY29uc3QgY3JlYXRlQnRuID0gbWFrZUNyZWF0ZUJ0bigpO1xuXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY2FuY2VsQnRuKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjcmVhdGVCdG4pO1xuXG4gIHJldHVybiBidXR0b25Db250YWluZXI7XG59XG5cbmV4cG9ydCB7IG1ha2VCdXR0b25Db250YWluZXIgfTsiLCJpbXBvcnQgeyBtYWtlTGFiZWxUZXh0Q29udGFpbmVyIH0gZnJvbSAnLi9sYWJlbFRleHRDb250YWluZXIuanMnO1xuaW1wb3J0IHsgbWFrZVRleHRGaWVsZENvbnRhaW5lciB9IGZyb20gJy4vdGV4dEZpZWxkQ29udGFpbmVyLmpzJztcblxuY29uc3QgbWFrZUNvbnRlbnRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVMaXN0LW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgbGFibGVUZXh0Q29udGFpbmVyID0gbWFrZUxhYmVsVGV4dENvbnRhaW5lcigpO1xuICBjb25zdCB0ZXh0RmllbGRDb250YWluZXIgPSBtYWtlVGV4dEZpZWxkQ29udGFpbmVyKCk7XG5cbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJsZVRleHRDb250YWluZXIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRGaWVsZENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRlbnRDb250YWluZXI7XG59IFxuXG5leHBvcnQgeyBtYWtlQ29udGVudENvbnRhaW5lciB9O1xuXG5cblxuXG4gIFxuXG5cbiIsImNvbnN0IG1ha2VMYWJlbFRleHQgPSAobGFiZWwpID0+IHtcbiAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVsVGV4dC5jbGFzc0xpc3QuYWRkKCdMYWJlbF9fVGV4dCcpO1xuXG4gIGlmIChsYWJlbCAhPSAnJykge1xuICAgIGxhYmVsVGV4dC5pbm5lclRleHQgPSBsYWJlbDtcbiAgfVxuXG4gIHJldHVybiBsYWJlbFRleHQ7XG59XG5cbmNvbnN0IG1ha2VMYWJlbFRleHRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVMaXN0LW1vZGFsLUxhYmVsVGV4dC1jb250YWluZXInKTtcblxuICBjb25zdCBsYWJlbFRleHQgPSBtYWtlTGFiZWxUZXh0KCdOQU1FIFRISVMgTElTVCcpO1xuICB0ZXh0Q29udGFpbmVyLmFwcGVuZChsYWJlbFRleHQpO1xuXG4gIHJldHVybiB0ZXh0Q29udGFpbmVyO1xufSBcblxuZXhwb3J0IHsgbWFrZUxhYmVsVGV4dENvbnRhaW5lciB9O1xuICAiLCJpbXBvcnQgJy4uL2Nzcy9jcmVhdGVMaXN0TW9kYWwuY3NzJztcblxuaW1wb3J0IHsgbWFrZUJ1dHRvbkNvbnRhaW5lciB9IGZyb20gJy4vYnV0dG9uQ29udGFpbmVyLmpzJztcbmltcG9ydCB7IG1ha2VDb250ZW50Q29udGFpbmVyIH0gZnJvbSAnLi9jb250ZW50Q29udGFpbmVyLmpzJztcblxuY29uc3QgbWFrZUNyZWF0ZUxpc3RNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgbW9kYWwuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVMaXN0Jyk7XG5cbiAgY29uc3QgY3JlYXRlTGlzdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZUxpc3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdjcmVhdGVMaXN0LW1vZGFsJyk7XG4gIGNyZWF0ZUxpc3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gbWFrZUJ1dHRvbkNvbnRhaW5lcigpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gbWFrZUNvbnRlbnRDb250YWluZXIoKTtcblxuICBcbiAgY3JlYXRlTGlzdE1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuICBjcmVhdGVMaXN0TW9kYWwuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICBtb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVMaXN0TW9kYWwpO1xuXG4gIHJldHVybiBtb2RhbDtcbn1cblxuZXhwb3J0IHsgbWFrZUNyZWF0ZUxpc3RNb2RhbCB9OyIsImNvbnN0IG1ha2VUZXh0RmllbGQgPSAoKSA9PiB7XG4gIGNvbnN0IHRleHRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRleHRGaWVsZC5jbGFzc0xpc3QuYWRkKCd0ZXh0RmllbGQnLCAndGV4dEZpZWxkLXRpdGxlJyk7XG4gIHRleHRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMScpO1xuXG4gIHJldHVybiB0ZXh0RmllbGQ7XG59XG5cbmNvbnN0IG1ha2VUZXh0RmllbGRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRleHRGaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZXh0RmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1tb2RhbC10ZXh0RmllbGQtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGV4dEZpZWxkID0gbWFrZVRleHRGaWVsZCgpO1xuXG4gIHRleHRGaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0RmllbGQpO1xuXG4gIHJldHVybiB0ZXh0RmllbGRDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IG1ha2VUZXh0RmllbGRDb250YWluZXIgfTsiLCJjb25zdCBHZXQgPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUJ0biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2RhdGEtYnRuPVwiY3JlYXRlXCJdJyk7XG4gIH1cblxuICBjb25zdCBjYW5jZWxCdG4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWJ0bj1cImNhbmNlbFwiXScpO1xuICB9XG5cbiAgY29uc3QgdGl0bGVUZXh0YXJlYSA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZUxpc3QtbW9kYWwtdGV4dEZpZWxkLWNvbnRhaW5lciAudGV4dEZpZWxkLXRpdGxlJyk7XG4gIH1cblxuICBjb25zdCBtb2RhbCA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZUxpc3QnKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVCdG4sXG4gICAgY2FuY2VsQnRuLFxuICAgIHRpdGxlVGV4dGFyZWEsXG4gICAgbW9kYWwsXG4gICAgY29udGFpbmVyXG4gIH1cbn1cblxuY29uc3QgZ2V0ID0gR2V0KCk7XG5cbmV4cG9ydCB7IGdldCB9IiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXRFbGVtZW50cy5qcyc7XG5cbmNvbnN0IGlzRW1wdHkgPSAoc3RyKSA9PiB7XG4gIGlmIChzdHIgPT09ICcnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IGlzVGl0bGVUZXh0YXJlYUVtcHR5ID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZVRleHRBcmVhID0gZ2V0LnRpdGxlVGV4dGFyZWEoKTtcbiAgY29uc3QgdGl0bGUgPSB0aXRsZVRleHRBcmVhLnZhbHVlO1xuXG4gIGlmIChpc0VtcHR5KHRpdGxlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgeyBpc1RpdGxlVGV4dGFyZWFFbXB0eSB9OyIsImltcG9ydCB7IGFkZENhdGVnb3J5IH0gZnJvbSAnLi9hZGRDYXRlZ29yeS5qcyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldEVsZW1lbnRzLmpzJztcbmltcG9ydCB7IGNsb3NlTW9kYWwsIGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQgfSBmcm9tICcuL2Nsb3NlTW9kYWwuanMnO1xuaW1wb3J0IHsgaXNUaXRsZVRleHRhcmVhRW1wdHkgfSBmcm9tICcuL2lzVGl0bGVUZXh0YXJlYUVtcHR5LmpzJztcblxuY29uc3QgZW5hYmxlQ3JlYXRlQnRuID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVCdG4gPSBnZXQuY3JlYXRlQnRuKCk7XG5cbiAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghaXNUaXRsZVRleHRhcmVhRW1wdHkoKSkge1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBnZXQudGl0bGVUZXh0YXJlYSgpLnZhbHVlO1xuICAgICAgYWRkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZW5hYmxlQ2FuY2VsQnRuVG9DbG9zZU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBjYW5jZWxCdG4gPSBnZXQuY2FuY2VsQnRuKCk7XG5cbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG59XG5cbmNvbnN0IGVuYWJsZVdpbmRvd1RvQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gY2xvc2VNb2RhbE9yTm90KGV2ZW50KSB7XG4gICAgaWYgKGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQoZXZlbnQpKSB7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsT3JOb3QpO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHN0YXJ0SW5pdGlhbFNldHVwID0gKCkgPT4ge1xuICBlbmFibGVDYW5jZWxCdG5Ub0Nsb3NlTW9kYWwoKTtcbiAgZW5hYmxlV2luZG93VG9DbG9zZU1vZGFsKCk7XG4gIGVuYWJsZUNyZWF0ZUJ0bigpO1xufVxuXG5leHBvcnQgeyBzdGFydEluaXRpYWxTZXR1cCB9OyIsImltcG9ydCB7IGNoYW5nZUNhdGVnb3J5IH0gZnJvbSAnLi9jaGFuZ2VDYXRlZ29yeS5qcyc7XG5pbXBvcnQgeyBtYWtlQ3JlYXRlVG9kb01vZGFsIH0gZnJvbSAnLi9lbGVtZW50cy9tYWtlQ3JlYXRlVG9kb01vZGFsLmpzJztcbmltcG9ydCB7IHN0YXJ0SW5pdGlhbFNldHVwIH0gZnJvbSAnLi9zdGFydEluaXRpYWxTZXR1cC5qcyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldEVsZW1lbnRzLmpzJztcblxuY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBnZXQuY29udGFpbmVyKCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlQ3JlYXRlVG9kb01vZGFsKCkpO1xuXG4gIHN0YXJ0SW5pdGlhbFNldHVwKCk7XG59XG5cbmNvbnN0IENyZWF0ZVRvZG9Nb2RhbCA9ICgpID0+IHtcbiAgXG4gIHJldHVybiB7XG4gICAgY2hhbmdlQ2F0ZWdvcnksXG4gICAgb3Blbk1vZGFsLFxuICB9XG59XG5cbmNvbnN0IGNyZWF0ZVRvZG9Nb2RhbCA9IENyZWF0ZVRvZG9Nb2RhbCgpO1xuXG5leHBvcnQgeyBjcmVhdGVUb2RvTW9kYWwgfTtcbiIsImltcG9ydCB7IGdldCB9IGZyb20gJy4vZ2V0RWxlbWVudHMuanMnO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL1RvZG8vdG9kby5qcyc7XG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gJy4uL1RvZG9MaXN0L3RvZG9saXN0LmpzJztcbmltcG9ydCB7IHRvZG9MaXN0Q2FyZFZpZXcgfSBmcm9tICcuLi90b2RvTGlzdENhcmRWaWV3L3RvZG9MaXN0Q2FyZFZpZXcuanMnO1xuaW1wb3J0IHsgdXBkYXRlRGF0YVRvZG9OdW1iZXIgfSBmcm9tICcuLi90b2RvTGlzdENhcmRWaWV3L2RlbGV0ZUJ1dHRvbi5qcyc7XG5cbmNvbnN0IGdldFRvZG9UaXRsZSA9ICgpID0+IHtcbiAgcmV0dXJuIGdldC50aXRsZVRleHRhcmVhKCkudmFsdWU7XG59XG5cbmNvbnN0IGdldFRvZG9EZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIGdldC5kZXNjcmlwdGlvblRleHRhcmVhKCkudmFsdWU7XG59XG5cbmNvbnN0IGdldFRvZG9DYXRlZ29yeSA9ICgpID0+IHtcbiAgcmV0dXJuIGdldC5jYXRlZ29yeUJ0bigpLmlubmVyVGV4dDtcbn1cbmNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZ2V0VG9kb1RpdGxlKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZ2V0VG9kb0Rlc2NyaXB0aW9uKCk7XG4gIGNvbnN0IGNhdGVnb3J5ID0gZ2V0VG9kb0NhdGVnb3J5KCk7XG4gIFxuICBjb25zdCB0b2RvID0gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5KTtcbiAgdG9kb0xpc3QuYWRkVG9kbyh0b2RvKTtcbiAgdG9kb0xpc3RDYXJkVmlldy5hZGRUb2RvKHRvZG8pO1xuXG5cbn1cblxuZXhwb3J0IHsgYWRkVG9kbyB9O1xuIiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXRFbGVtZW50cy5qcyc7XG5cbmNvbnN0IGNoYW5nZUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5QnRuID0gZ2V0LmNhdGVnb3J5QnRuKCk7XG4gIGNhdGVnb3J5QnRuLmlubmVyVGV4dCA9IGNhdGVnb3J5O1xufVxuXG5leHBvcnQgeyBjaGFuZ2VDYXRlZ29yeSB9OyIsImltcG9ydCB7IGdldCB9IGZyb20gJy4vZ2V0RWxlbWVudHMuanMnO1xuXG5jb25zdCBpc091dHNpZGVNb2RhbENvbnRlbnRDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGNsaWNrZWRUYXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IG1vZGFsID0gZ2V0Lm1vZGFsKCk7XG4gIFxuICBpZiAoY2xpY2tlZFRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBnZXQubW9kYWwoKTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCB7IGNsb3NlTW9kYWwsIGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQgfTsiLCJjb25zdCBtYWtlQWRkVG9kb0J0bkNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgYWRkVG9kb0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRUb2RvQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRvZG8tbW9kYWwtYWRkVG9kb0J0bi1jb250YWluZXInKTtcblxuICBjb25zdCBjcmVhdGVUb2RvQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjcmVhdGVUb2RvQnRucy5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUb2RvLWJ1dHRvbnMnKTtcbiAgY3JlYXRlVG9kb0J0bnMuaW5uZXJUZXh0ID0gXCJBZGQgVG9kb1wiO1xuXG4gIGFkZFRvZG9CdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bnMpO1xuXG4gIHJldHVybiBhZGRUb2RvQnRuQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBtYWtlQWRkVG9kb0J0bkNvbnRhaW5lciB9OyIsImNvbnN0IG1ha2VMYWJlbFRleHQgPSAobGFiZWwpID0+IHtcbiAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVsVGV4dC5jbGFzc0xpc3QuYWRkKCdMYWJlbF9fVGV4dCcpO1xuICBsYWJlbFRleHQuaW5uZXJUZXh0ID0gbGFiZWw7XG5cbiAgcmV0dXJuIGxhYmVsVGV4dDtcbn1cblxuZXhwb3J0IHsgbWFrZUxhYmVsVGV4dCB9IiwiaW1wb3J0ICcuLi9jc3MvY3JlYXRlVG9kb01vZGFsLmNzcyc7XG5pbXBvcnQgeyBtYWtlVG9kb2luZm9Db250YWluZXIgfSBmcm9tICcuL3RvZG9pbmZvQ29udGFpbmVyLmpzJztcbmltcG9ydCB7IG1ha2VBZGRUb2RvQnRuQ29udGFpbmVyIH0gZnJvbSAnLi9hZGRUb2RvQnRuQ29udGFpbmVyLmpzJztcblxuY29uc3QgbWFrZUNyZWF0ZVRvZG9Nb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgbW9kYWwuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVUb2RvJyk7XG5cbiAgY29uc3QgY3JlYXRlVG9kb01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZVRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUb2RvLW1vZGFsJyk7XG4gIGNyZWF0ZVRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgY29uc3QgdG9kb0luZm9Db250YWluZXIgPSBtYWtlVG9kb2luZm9Db250YWluZXIoKTtcbiAgY29uc3QgYWRkVG9kb0J0bkNvbnRhaW5lciA9IG1ha2VBZGRUb2RvQnRuQ29udGFpbmVyKCk7XG4gIFxuICBjcmVhdGVUb2RvTW9kYWwuYXBwZW5kQ2hpbGQodG9kb0luZm9Db250YWluZXIpO1xuICBjcmVhdGVUb2RvTW9kYWwuYXBwZW5kQ2hpbGQoYWRkVG9kb0J0bkNvbnRhaW5lcik7XG5cbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb01vZGFsKTtcblxuICByZXR1cm4gbW9kYWw7XG59XG5cbmV4cG9ydCB7IG1ha2VDcmVhdGVUb2RvTW9kYWwgfTsiLCJpbXBvcnQgeyBtYWtlTGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbFRleHQuanMnO1xuXG5jb25zdCBtYWtlVG9kb2luZm9EZXNjcmlwdGlvbkNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgdG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvaW5mb0NvbnRhaW5lckRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLWNvbnRhaW5lci1kZXNjcmlwdGlvbicpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IG1ha2VMYWJlbFRleHQoJ0RFU0NSSVBUSU9OJyk7XG5cbiAgY29uc3QgdG9kb2luZm9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvaW5mb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLWRlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dEZpZWxkJywgJ3RleHRGaWVsZC1kZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvblRleHRhcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICcxMCcpO1xuICBkZXNjcmlwdGlvblRleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnSW5zZXJ0IHlvdXIgbm90ZXMgaGVyZScpO1xuXG4gIHRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh0b2RvaW5mb0Rlc2NyaXB0aW9uKTtcbiAgdG9kb2luZm9EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRhcmVhKTtcblxuICByZXR1cm4gdG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbjtcbn1cblxuZXhwb3J0IHsgbWFrZVRvZG9pbmZvRGVzY3JpcHRpb25Db250YWluZXIgfTsiLCJpbXBvcnQgeyBtYWtlTGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbFRleHQuanMnO1xuXG5jb25zdCBtYWtlVG9kb2luZm9UaXRsZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgdG9kb2luZm9Db250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvaW5mb0NvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLWNvbnRhaW5lci10aXRsZScpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IG1ha2VMYWJlbFRleHQoJ1RJVExFJyk7XG5cbiAgY29uc3QgdG9kb2luZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvaW5mb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLXRpdGxlJyk7XG5cbiAgY29uc3QgdGl0bGVUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRpdGxlVGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dEZpZWxkJywgJ3RleHRGaWVsZC10aXRsZScpXG4gIHRpdGxlVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEnKTtcbiAgdGl0bGVUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0kgd2FudCB0by4uLicpO1xuXG4gIHRvZG9pbmZvQ29udGFpbmVyVGl0bGUuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdG9kb2luZm9Db250YWluZXJUaXRsZS5hcHBlbmRDaGlsZCh0b2RvaW5mb1RpdGxlKTtcbiAgdG9kb2luZm9UaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHRhcmVhKTtcblxuICByZXR1cm4gdG9kb2luZm9Db250YWluZXJUaXRsZTtcbn1cblxuZXhwb3J0IHsgbWFrZVRvZG9pbmZvVGl0bGVDb250YWluZXIgfTsiLCJpbXBvcnQgeyBtYWtlTGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbFRleHQuanMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vZ2V0RWxlbWVudHMuanMnXG5cbmNvbnN0IG1ha2VUb2RvaW5mb0NhdGVnb3J5Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB0b2RvaW5mb0NvbnRhaW5lckNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tY29udGFpbmVyLWNhdGVnb3J5Jyk7XG5cbiAgY29uc3QgbGFiZWxUZXh0ID0gbWFrZUxhYmVsVGV4dCgnQ0FURUdPUlknKTtcblxuICBjb25zdCB0b2RvaW5mb0NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9pbmZvQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tY2F0ZWdvcnknKTtcblxuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYXRlZ29yeVNlbGVjdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvaW5mby1jYXRlZ29yeS1zZWxlY3RCdG4nKTtcbiAgLy8gVGhpcyBuZWVkcyB0byBiZSBjaGFuZ2VkIGluIHRoZSBmdXR1cmVcbiAgY2F0ZWdvcnlTZWxlY3Rpb25CdG4uaW5uZXJUZXh0ID0gZ2V0LmN1cnJlbnRDYXRlZ29yeSgpO1xuXG4gIHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdG9kb2luZm9Db250YWluZXJDYXRlZ29yeS5hcHBlbmRDaGlsZCh0b2RvaW5mb0NhdGVnb3J5KTtcbiAgdG9kb2luZm9DYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdGlvbkJ0bik7XG5cbiAgcmV0dXJuIHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnk7XG59XG5cbmV4cG9ydCB7IG1ha2VUb2RvaW5mb0NhdGVnb3J5Q29udGFpbmVyIH07IiwiaW1wb3J0IHsgbWFrZVRvZG9pbmZvVGl0bGVDb250YWluZXIgfSBmcm9tICcuL3RvZG9JbmZvVGl0bGVDb250YWluZXIuanMnO1xuaW1wb3J0IHsgbWFrZVRvZG9pbmZvRGVzY3JpcHRpb25Db250YWluZXIgfSBmcm9tICcuL3RvZG9JbmZvRGVzY3JpcHRpb25Db250YWluZXIuanMnO1xuaW1wb3J0IHsgbWFrZVRvZG9pbmZvQ2F0ZWdvcnlDb250YWluZXIgfSBmcm9tICcuL3RvZG9pbmZvQ2F0ZWdvcnlDb250YWluZXIuanMnO1xuXG5jb25zdCBtYWtlVG9kb2luZm9Db250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9JbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRvZG8tbW9kYWwtdG9kb2luZm8tY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdG9kb2luZm9UaXRsZUNvbnRhaW5lciA9IG1ha2VUb2RvaW5mb1RpdGxlQ29udGFpbmVyKCk7XG4gIGNvbnN0IHRvZG9pbmZvRGVzY3JpcHRpb25Db250YWluZXIgPSBtYWtlVG9kb2luZm9EZXNjcmlwdGlvbkNvbnRhaW5lcigpO1xuICBjb25zdCB0b2RvaW5mb0NhdGVnb3J5Q29udGFpbmVyID0gbWFrZVRvZG9pbmZvQ2F0ZWdvcnlDb250YWluZXIoKTtcblxuICB0b2RvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvaW5mb1RpdGxlQ29udGFpbmVyKTtcbiAgdG9kb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb2luZm9EZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gIHRvZG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9pbmZvQ2F0ZWdvcnlDb250YWluZXIpO1xuXG4gIHJldHVybiB0b2RvSW5mb0NvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgbWFrZVRvZG9pbmZvQ29udGFpbmVyIH07IiwiY29uc3QgR2V0ID0gKCkgPT4ge1xuICBjb25zdCBhZGRUb2RvQnRuID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlVG9kby1idXR0b25zJyk7XG4gIH1cblxuICBjb25zdCB0aXRsZVRleHRhcmVhID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2luZm8tdGl0bGUgdGV4dGFyZWEnKTtcbiAgfVxuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mby1kZXNjcmlwdGlvbiB0ZXh0YXJlYScpO1xuICB9XG5cbiAgY29uc3QgY2F0ZWdvcnlCdG4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mby1jYXRlZ29yeSBidXR0b24nKTtcbiAgfVxuXG4gIGNvbnN0IG1vZGFsID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlVG9kbycpO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIH1cblxuICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ub2RvTGlzdC1DYXJkVmlldy1oZWFkZXInKS5pbm5lclRleHQ7XG4gIH1cbiAgXG5cbiAgcmV0dXJuIHtcbiAgICBhZGRUb2RvQnRuLFxuICAgIHRpdGxlVGV4dGFyZWEsXG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYSxcbiAgICBjYXRlZ29yeUJ0bixcbiAgICBtb2RhbCxcbiAgICBjb250YWluZXIsXG4gICAgY3VycmVudENhdGVnb3J5XG4gIH1cbn1cblxuY29uc3QgZ2V0ID0gR2V0KCk7XG5cbmV4cG9ydCB7IGdldCB9IiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXRFbGVtZW50cy5qcyc7XG5cbmNvbnN0IGlzRW1wdHkgPSAoc3RyKSA9PiB7XG4gIGlmIChzdHIgPT09ICcnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IGlzVGl0bGVUZXh0YXJlYUVtcHR5ID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZVRleHRBcmVhID0gZ2V0LnRpdGxlVGV4dGFyZWEoKTtcbiAgY29uc3QgdGl0bGUgPSB0aXRsZVRleHRBcmVhLnZhbHVlO1xuXG4gIGlmIChpc0VtcHR5KHRpdGxlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgeyBpc1RpdGxlVGV4dGFyZWFFbXB0eSB9OyIsImltcG9ydCB7IGFkZFRvZG8gfSBmcm9tICcuL2FkZFRvZG8uanMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXRFbGVtZW50cy5qcyc7XG5pbXBvcnQgeyBjbG9zZU1vZGFsLCBpc091dHNpZGVNb2RhbENvbnRlbnRDbGlja2VkIH0gZnJvbSAnLi9jbG9zZU1vZGFsLmpzJztcbmltcG9ydCB7IGlzVGl0bGVUZXh0YXJlYUVtcHR5IH0gZnJvbSAnLi9pc1RpdGxlVGV4dGFyZWFFbXB0eS5qcyc7XG5pbXBvcnQgeyBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsIH0gZnJvbSAnLi4vY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC9DYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmpzJztcblxuY29uc3QgZW5hYmxlQWRkVG9kb0J0biA9ICgpID0+IHtcbiAgY29uc3QgYWRkVG9kb0J0biA9IGdldC5hZGRUb2RvQnRuKCk7XG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFpc1RpdGxlVGV4dGFyZWFFbXB0eSgpKSB7XG4gICAgICBhZGRUb2RvKCk7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9KVxufVxuXG4vLyBDYXRlZ29yeSBTZWxlY3Rpb24gQnRuIGVuYWJsZVxuY29uc3QgZW5hYmxlQ2F0ZWdvcnlCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5QnRuID0gZ2V0LmNhdGVnb3J5QnRuKCk7XG5cbiAgY2F0ZWdvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsLm9wZW5Nb2RhbCk7XG59XG5cbmNvbnN0IGVuYWJsZVdpbmRvd1RvQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gY2xvc2VNb2RhbE9yTm90KGV2ZW50KSB7XG4gICAgaWYgKGlzT3V0c2lkZU1vZGFsQ29udGVudENsaWNrZWQoZXZlbnQpKSB7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsT3JOb3QpO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHN0YXJ0SW5pdGlhbFNldHVwID0gKCkgPT4ge1xuICBlbmFibGVBZGRUb2RvQnRuKCk7XG4gIGVuYWJsZUNhdGVnb3J5QnRuKCk7XG4gIGVuYWJsZVdpbmRvd1RvQ2xvc2VNb2RhbCgpO1xufVxuXG5cbmV4cG9ydCB7IHN0YXJ0SW5pdGlhbFNldHVwIH07IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBnZXRUb2RheSA9ICgpID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCB0b2RheSA9IGZvcm1hdChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSwgJ3l5eXktTU0tZGQnKTtcbiAgXG4gIHJldHVybiB0b2RheTtcbn1cblxuZXhwb3J0IHsgZ2V0VG9kYXkgfSAiLCJpbXBvcnQgeyBjcmVhdGVMaXN0TW9kYWwgfSBmcm9tICcuL2NyZWF0ZUxpc3RNb2RhbC9DcmVhdGVMaXN0TW9kYWwuanMnO1xuaW1wb3J0IHsgY3JlYXRlVG9kb01vZGFsIH0gZnJvbSAnLi9jcmVhdGVUb2RvTW9kYWwvQ3JlYXRlVG9kb01vZGFsLmpzJztcbmltcG9ydCB7IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgfSBmcm9tICcuL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwvQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5qcyc7XG5pbXBvcnQgeyB0b2RvRGV0YWlsc0NhcmRWaWV3IH0gZnJvbSAnLi90b2RvRGV0YWlsc0NhcmRWaWV3L3RvZG9EZXRhaWxzQ2FyZFZpZXcuanMnO1xuaW1wb3J0IHsgdG9kb0xpc3RDYXJkVmlldyB9IGZyb20gJy4vdG9kb0xpc3RDYXJkVmlldy90b2RvTGlzdENhcmRWaWV3LmpzJztcbmltcG9ydCB7IG5hdkJhciB9IGZyb20gJy4vbmF2QmFyL25hdkJhci5qcyc7XG5cbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8vdG9kby5qcyc7XG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gJy4vVG9kb0xpc3QvdG9kb2xpc3QuanMnO1xuXG5pbXBvcnQgeyBnZXRUb2RheSB9IGZyb20gJy4vZGF0ZS9nZXRUb2RheS5qcyc7XG5cbm5hdkJhci5zdGFydEluaXRpYWxTZXR1cCgpO1xudG9kb0xpc3RDYXJkVmlldy5zaG93VG9kb0xpc3RDYXJkVmlldygpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgdG9kb0xpc3RDYXJkVmlldyB9IGZyb20gJy4uL3RvZG9MaXN0Q2FyZFZpZXcvdG9kb0xpc3RDYXJkVmlldy5qcyc7XG5pbXBvcnQgeyB0b2RvRGV0YWlsc0NhcmRWaWV3IH0gZnJvbSAnLi4vdG9kb0RldGFpbHNDYXJkVmlldy90b2RvRGV0YWlsc0NhcmRWaWV3LmpzJztcblxuY29uc3Qgc2hvd1RvZG9MaXN0ID0gKGNhdGVnb3J5SXRlbSkgPT4ge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3J5SXRlbS5pbm5lclRleHQ7XG4gIHRvZG9MaXN0Q2FyZFZpZXcuc2hvd1RvZG9MaXN0Q2FyZFZpZXcoY2F0ZWdvcnkpO1xufVxuXG5jb25zdCBlbmFibGVDYXRlZ29yeUl0ZW0gPSAoY2F0ZWdvcnlJdGVtKSA9PiB7XG4gIGNhdGVnb3J5SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAodG9kb0RldGFpbHNDYXJkVmlldy5pc0NhcmRWaWV3RXhpc3QoKSkge1xuICAgICAgdG9kb0RldGFpbHNDYXJkVmlldy5yZW1vdmVUb2RvRGV0YWlsc0NhcmRWaWV3KCk7XG4gICAgfVxuICAgIHNob3dUb2RvTGlzdChjYXRlZ29yeUl0ZW0pO1xuICB9KVxufVxuXG5jb25zdCBtYWtlQ2F0ZWdvcnlJdGVtID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNhdGVnb3J5SXRlbS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1pdGVtcycpO1xuICBjYXRlZ29yeUl0ZW0uaW5uZXJUZXh0ID0gY2F0ZWdvcnk7XG5cbiAgZW5hYmxlQ2F0ZWdvcnlJdGVtKGNhdGVnb3J5SXRlbSk7XG4gIHJldHVybiBjYXRlZ29yeUl0ZW07XG59XG5cbmV4cG9ydCB7IG1ha2VDYXRlZ29yeUl0ZW0gfTsiLCJpbXBvcnQgeyBjcmVhdGVUb2RvTW9kYWwgfSBmcm9tICcuLi9jcmVhdGVUb2RvTW9kYWwvQ3JlYXRlVG9kb01vZGFsLmpzJztcbmltcG9ydCB7IGdldCB9IGZyb20gJy4vZ2V0LmpzJ1xuXG5jb25zdCBvcGVuQ3JlYXRlVG9kb01vZGFsID0gKGV2ZW50KSA9PiB7XG4gIGNyZWF0ZVRvZG9Nb2RhbC5vcGVuTW9kYWwoKTtcbn1cblxuY29uc3QgZW5hYmxlQ3JlYXRlVG9kb0J0biA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlVG9kb0J0biA9IGdldC5jcmVhdGVUb2RvQnRuKCk7XG4gIGNyZWF0ZVRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBvcGVuQ3JlYXRlVG9kb01vZGFsKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBlbmFibGVDcmVhdGVUb2RvQnRuIH07IiwiaW1wb3J0IHsgbWFrZUNhdGVnb3J5SXRlbSB9IGZyb20gJy4uL2NhdGVnb3J5SXRlbS5qcyc7XG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gJy4uLy4uL1RvZG9MaXN0L3RvZG9saXN0LmpzJztcblxuY29uc3QgbWFrZU5hdkJhckNhdGVnb3J5TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgbmF2QmFyQ2F0ZWdvcnlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbmF2QmFyQ2F0ZWdvcnlMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdmJhci1jYXRlZ29yeS1saXN0Jyk7XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IHRvZG9MaXN0LmdldEFsbENhdGVnb3JpZXMoKTtcbiAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeUl0ZW0gPSBtYWtlQ2F0ZWdvcnlJdGVtKGNhdGVnb3J5KTtcbiAgICBuYXZCYXJDYXRlZ29yeUxpc3QuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlJdGVtKTtcbiAgfSlcblxuICByZXR1cm4gbmF2QmFyQ2F0ZWdvcnlMaXN0O1xufVxuXG5leHBvcnQgeyBtYWtlTmF2QmFyQ2F0ZWdvcnlMaXN0IH07IiwiY29uc3QgR2V0ID0gKCkgPT4ge1xuICBjb25zdCBhZGRDYXRlZ29yeUJ0biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jYXRlZ29yeS1idG4nKTtcbiAgfVxuXG4gIGNvbnN0IHVuZm9sZENhdGVnb3J5QnRuID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5mb2xkLWNhdGVnb3J5LWJ0bicpO1xuICB9XG5cbiAgY29uc3QgZm9sZENhdGVnb3J5QnRuID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9sZC1jYXRlZ29yeS1idG4nKTtcbiAgfVxuXG4gIGNvbnN0IG5hdkJhckNhdGVnb3J5TGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1jYXRlZ29yeS1saXN0Jyk7XG4gIH1cblxuICBjb25zdCBjcmVhdGVUb2RvQnRuID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlVG9kb0J0bicpO1xuICB9XG5cbiAgY29uc3QgbmF2QmFyQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItY2F0ZWdvcnknKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkQ2F0ZWdvcnlCdG4sIHVuZm9sZENhdGVnb3J5QnRuLCBmb2xkQ2F0ZWdvcnlCdG4sIG5hdkJhckNhdGVnb3J5TGlzdCxcbiAgICBjcmVhdGVUb2RvQnRuLCBuYXZCYXJDYXRlZ29yeVxuICB9XG59XG5cbmNvbnN0IGdldCA9IEdldCgpO1xuXG5leHBvcnQgeyBnZXQgfTsiLCJpbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldC5qcyc7XG5pbXBvcnQgeyBzaG93Q2F0ZWdvcmllcyB9IGZyb20gJy4vbmF2QmFyQ2F0ZWdvcnlMaXN0LmpzJztcbmltcG9ydCB7IGNyZWF0ZUxpc3RNb2RhbCB9IGZyb20gJy4uL2NyZWF0ZUxpc3RNb2RhbC9DcmVhdGVMaXN0TW9kYWwuanMnO1xuXG5jb25zdCBoaWRlQnRuID0gKGJ0bikgPT4ge1xuICBidG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuY29uc3Qgc2hvd0J0biA9IChidG4pID0+IHtcbiAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xufVxuXG5jb25zdCBkZWxldGVBbGxDYXRlZ29yaWVzID0gKCkgPT4ge1xuICBjb25zdCBuYXZCYXJDYXRlZ29yaWVzID0gZ2V0Lm5hdkJhckNhdGVnb3J5TGlzdCgpO1xuICBuYXZCYXJDYXRlZ29yaWVzLnJlbW92ZSgpO1xufVxuXG5jb25zdCBlbmFibGVGb2xkQ2F0ZWdvcnlCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGZvbGRDYXRlZ29yeUJ0biA9IGdldC5mb2xkQ2F0ZWdvcnlCdG4oKTtcbiAgZm9sZENhdGVnb3J5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZUFsbENhdGVnb3JpZXMoKTtcbiAgICBoaWRlQnRuKGdldC5hZGRDYXRlZ29yeUJ0bigpKTtcbiAgICBoaWRlQnRuKGdldC5mb2xkQ2F0ZWdvcnlCdG4oKSk7XG4gICAgc2hvd0J0bihnZXQudW5mb2xkQ2F0ZWdvcnlCdG4oKSk7XG4gIH0pXG59XG5cbmNvbnN0IGVuYWJsZVVuZm9sZENhdGVnb3J5QnRuID0gKCkgPT4ge1xuICBjb25zdCB1bmZvbGRDYXRlZ29yeUJ0biA9IGdldC51bmZvbGRDYXRlZ29yeUJ0bigpO1xuICB1bmZvbGRDYXRlZ29yeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93Q2F0ZWdvcmllcygpO1xuICAgIGhpZGVCdG4oZ2V0LnVuZm9sZENhdGVnb3J5QnRuKCkpO1xuICAgIHNob3dCdG4oZ2V0LmZvbGRDYXRlZ29yeUJ0bigpKTtcbiAgICBzaG93QnRuKGdldC5hZGRDYXRlZ29yeUJ0bigpKTtcbiAgfSlcbn1cblxuY29uc3QgZW5hYmxlQWRkQ2F0ZWdvcnlCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGFkZENhdGVnb3J5QnRuID0gZ2V0LmFkZENhdGVnb3J5QnRuKCk7XG4gIGFkZENhdGVnb3J5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNyZWF0ZUxpc3RNb2RhbC5vcGVuTW9kYWwoKTtcbiAgfSlcbn1cblxuY29uc3QgZW5hYmxlQWxsQ2F0ZWdvcnlCdG5zID0gKCkgPT4ge1xuICBlbmFibGVGb2xkQ2F0ZWdvcnlCdG4oKTtcbiAgZW5hYmxlVW5mb2xkQ2F0ZWdvcnlCdG4oKTtcbiAgZW5hYmxlQWRkQ2F0ZWdvcnlCdG4oKTtcbn1cblxuZXhwb3J0IHsgaGlkZUJ0biwgc2hvd0J0biwgZW5hYmxlQWxsQ2F0ZWdvcnlCdG5zIH07XG4iLCJpbXBvcnQgeyBlbmFibGVDcmVhdGVUb2RvQnRuIH0gZnJvbSAnLi9jcmVhdGVUb2RvQnV0dG9uLmpzJztcbmltcG9ydCB7IGVuYWJsZUFsbENhdGVnb3J5QnRucywgc2hvd0J0biB9IGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCB7IHNob3dDYXRlZ29yaWVzIH0gZnJvbSAnLi9uYXZCYXJDYXRlZ29yeUxpc3QuanMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQuanMnO1xuaW1wb3J0IHsgbWFrZUNhdGVnb3J5SXRlbSB9IGZyb20gJy4vY2F0ZWdvcnlJdGVtLmpzJztcblxuY29uc3Qgc3RhcnRJbml0aWFsU2V0dXAgPSAoKSA9PiB7XG4gIHNob3dDYXRlZ29yaWVzKCk7XG4gIHNob3dCdG4oZ2V0LmZvbGRDYXRlZ29yeUJ0bigpKTtcbiAgc2hvd0J0bihnZXQuYWRkQ2F0ZWdvcnlCdG4oKSk7XG4gIFxuICBlbmFibGVDcmVhdGVUb2RvQnRuKCk7XG4gIGVuYWJsZUFsbENhdGVnb3J5QnRucygpO1xuXG59XG5cbmNvbnN0IGFkZE5ld0NhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5SXRlbSA9IG1ha2VDYXRlZ29yeUl0ZW0oY2F0ZWdvcnkpO1xuICBjb25zdCBjb250YWluZXIgPSBnZXQubmF2QmFyQ2F0ZWdvcnlMaXN0KCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeUl0ZW0pO1xufVxuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIFxuICByZXR1cm4ge1xuICAgIHN0YXJ0SW5pdGlhbFNldHVwLFxuICAgIHNob3dDYXRlZ29yaWVzLFxuICAgIGFkZE5ld0NhdGVnb3J5XG4gIH1cbn1cblxuY29uc3QgbmF2QmFyID0gTmF2QmFyKCk7XG5cbmV4cG9ydCB7IG5hdkJhciB9OyIsImltcG9ydCB7IG1ha2VOYXZCYXJDYXRlZ29yeUxpc3QgfSBmcm9tICcuL2VsZW1lbnRzL21ha2VOYXZCYXJDYXRlZ29yeUxpc3QuanMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQuanMnO1xuaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tICcuLi9Ub2RvTGlzdC90b2RvbGlzdC5qcyc7XG5pbXBvcnQgeyBuYXZCYXIgfSBmcm9tICcuL25hdkJhci5qcyc7XG5cblxuY29uc3QgYWRkQ2F0ZWdvcmllcyA9IChuYXZCYXJDYXRlZ29yeUxpc3QpID0+IHtcbiAgY29uc3QgbmF2QmFyQ2F0ZWdvcnkgPSBnZXQubmF2QmFyQ2F0ZWdvcnkoKTtcbiAgbmF2QmFyQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQobmF2QmFyQ2F0ZWdvcnlMaXN0KTtcbn1cblxuY29uc3Qgc2hvd0NhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSB0b2RvTGlzdC5nZXRBbGxDYXRlZ29yaWVzKCk7XG4gIGNvbnN0IG5hdkJhckNhdGVnb3J5TGlzdCA9IG1ha2VOYXZCYXJDYXRlZ29yeUxpc3QoY2F0ZWdvcmllcyk7XG4gIFxuICBhZGRDYXRlZ29yaWVzKG5hdkJhckNhdGVnb3J5TGlzdCk7XG59XG5cbmV4cG9ydCB7IHNob3dDYXRlZ29yaWVzIH07IiwiaW1wb3J0IHsgbWFrZVRvZG9FZGl0SGVhZGVyIH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmpzJztcbmltcG9ydCB7IG1ha2VUb2RvRWRpdE1haW4gfSBmcm9tICcuL21haW4vbWFpbi5qcyc7XG5cbmNvbnN0IG1ha2VUb2RvRWRpdFBhbmUgPSAodG9kbykgPT4ge1xuICBjb25zdCB0b2RvRWRpdFBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0VkaXRQYW5lLmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LVBhbmUnKTtcblxuICB0b2RvRWRpdFBhbmUuYXBwZW5kQ2hpbGQobWFrZVRvZG9FZGl0SGVhZGVyKCkpO1xuICB0b2RvRWRpdFBhbmUuYXBwZW5kQ2hpbGQobWFrZVRvZG9FZGl0TWFpbih0b2RvKSk7XG5cbiAgcmV0dXJuIHRvZG9FZGl0UGFuZTtcbn1cblxuZXhwb3J0IHsgbWFrZVRvZG9FZGl0UGFuZSB9OyIsImNvbnN0IG1ha2VUb2RvRWRpdEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgdG9kb0VkaXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0VkaXRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtaGVhZGVyJyk7XG4gIHRvZG9FZGl0SGVhZGVyLmlubmVyVGV4dCA9IFwiVE9ETyBERVRBSUxTXCI7XG5cbiAgcmV0dXJuIHRvZG9FZGl0SGVhZGVyO1xufVxuXG5leHBvcnQgeyBtYWtlVG9kb0VkaXRIZWFkZXIgfTtcblxuIiwiaW1wb3J0IHsgbWFrZUxhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWxUZXh0LmpzJztcbmltcG9ydCB7IGdldFRvZGF5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZGF0ZS9nZXRUb2RheS5qcyc7XG5cbmNvbnN0IGlzRW1wdHkgPSAoc3RyKSA9PiB7XG4gIGlmIChzdHIgPT09ICcnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IGlzRHVlRGF0ZVNldCA9IChkdWVEYXRlKSA9PiB7XG4gIFxuICBpZihpc0VtcHR5KGR1ZURhdGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IG1ha2VEYXRlSW5wdXQgPSAoZHVlRGF0ZSkgPT4ge1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnVG9kb0VkaXQtRHVlRGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ0R1ZURhdGUnKTtcbiAgXG4gIGlmIChpc0R1ZURhdGVTZXQoZHVlRGF0ZSkpIHtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGR1ZURhdGUpO1xuICB9IFxuICAvLyBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMjAyMC0xMS0xMCcpO1xuXG4gIHJldHVybiBkYXRlSW5wdXQ7XG59XG5cbmNvbnN0IG1ha2VEdWVEYXRlSW5wdXRCb3ggPSAoZHVlRGF0ZSkgPT4ge1xuICBjb25zdCBkdWVEYXRlSW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZUlucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LUR1ZURhdGVCb3gnKTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBtYWtlRGF0ZUlucHV0KGR1ZURhdGUpO1xuICBkdWVEYXRlSW5wdXRCb3guYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICByZXR1cm4gZHVlRGF0ZUlucHV0Qm94O1xufVxuXG5jb25zdCBtYWtlRHVlRGF0ZVJvdyA9IChkdWVEYXRlKSA9PiB7XG4gIGNvbnN0IGR1ZURhdGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZVJvdy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluLUR1ZURhdGVSb3cnLCAnVG9kb0VkaXQtcGFkZGVyJyk7XG5cbiAgY29uc3QgbGFiZWxUZXh0ID0gbWFrZUxhYmVsVGV4dCgnRFVFIERBVEUnKTtcbiAgY29uc3QgZHVlRGF0ZUlucHV0Qm94ID0gbWFrZUR1ZURhdGVJbnB1dEJveChkdWVEYXRlKTtcblxuICAvLyBBcHBlbmRpbmcgQ2hpbGRcbiAgZHVlRGF0ZVJvdy5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICBkdWVEYXRlUm93LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dEJveCk7XG4gIFxuICByZXR1cm4gZHVlRGF0ZVJvdztcbn1cblxuZXhwb3J0IHsgbWFrZUR1ZURhdGVSb3cgfTsiLCJpbXBvcnQgeyBtYWtlTGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbFRleHQuanMnO1xuXG5jb25zdCBpc0VtcHR5ID0gKHN0cikgPT4ge1xuICBpZiAoc3RyID09PSAnJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBpc1ByaW9yaXR5U2V0ID0gKHByaW9yaXR5KSA9PiB7XG4gIGlmIChpc0VtcHR5KHByaW9yaXR5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5jb25zdCBtYWtlUHJpb3JpdHlCdG4gPSAoaW1wb3J0YW5jZSwgc2VsZWN0ZWQpID0+IHtcbiAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgaWQgPSBgcHJpb3JpdHktJHtpbXBvcnRhbmNlfS1idG5gO1xuICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICBcbiAgcHJpb3JpdHlCdG4uaW5uZXJUZXh0ID0gaW1wb3J0YW5jZTtcblxuICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS10YWcnKTtcblxuICBpZiAoc2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKGltcG9ydGFuY2UgKyAnLXNlbGVjdGVkJyk7XG4gIH1cblxuICByZXR1cm4gcHJpb3JpdHlCdG47XG59XG5cbmNvbnN0IG1ha2VUYWdSb3cgPSAocHJpb3JpdHkpID0+IHtcbiAgY29uc3QgdGFnUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhZ1Jvdy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluLXRhZ1JvdycsICdUb2RvRWRpdC1wYWRkZXInKTtcblxuICBjb25zdCBsYWJlbFRleHQgPSBtYWtlTGFiZWxUZXh0KCdUQUdTJyk7XG4gIGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFncy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1UYWdzJyk7XG4gIFxuICB0YWdSb3cuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdGFnUm93LmFwcGVuZENoaWxkKHRhZ3MpO1xuXG4gIGNvbnN0IHByaW9yaXRpZXMgPSBbJ2ltcG9ydGFudCcsICdoaWdoJywgJ21pZGRsZScsICdsb3cnXTtcbiAgaWYgKGlzUHJpb3JpdHlTZXQocHJpb3JpdHkpKSB7XG4gICAgLy8gd2hlbiBtYWtpbmcgYSBidXR0b24sIGdpdmUgdGhhdCBidXR0b24gY29sb3JcbiAgICBwcmlvcml0aWVzLmZvckVhY2goZWFjaFByaW9yaXR5ID0+IHtcbiAgICAgIGlmIChlYWNoUHJpb3JpdHkgPT09IHByaW9yaXR5KSB7XG4gICAgICAgIHRhZ3MuYXBwZW5kQ2hpbGQobWFrZVByaW9yaXR5QnRuKGVhY2hQcmlvcml0eSwgdHJ1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFncy5hcHBlbmRDaGlsZChtYWtlUHJpb3JpdHlCdG4oZWFjaFByaW9yaXR5KSk7XG4gICAgICB9IFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gdGFnUm93O1xufVxuXG5leHBvcnQgeyBtYWtlVGFnUm93IH07IiwiaW1wb3J0IHsgbWFrZUxhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWxUZXh0LmpzJztcblxuY29uc3QgbWFrZUNyZWF0ZWREYXRlUm93ID0gKGRhdGUpID0+IHtcbiAgY29uc3QgY3JlYXRlZERhdGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlZERhdGVSb3cuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtbWFpbi1DcmVhdGVkRGF0ZVJvdycsICdUb2RvRWRpdC1wYWRkZXInKTtcblxuICBjb25zdCBsYWJlbFRleHQgPSBtYWtlTGFiZWxUZXh0KCdDUkVBVEVEIERBVEUnKTtcblxuICBjb25zdCBjcmVhdGVkRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcmVhdGVkRGF0ZS5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1DcmVhdGVkRGF0ZScpO1xuICBcbiAgY3JlYXRlZERhdGUuaW5uZXJUZXh0ID0gZGF0ZTtcblxuICBjcmVhdGVkRGF0ZVJvdy5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICBjcmVhdGVkRGF0ZVJvdy5hcHBlbmRDaGlsZChjcmVhdGVkRGF0ZSk7XG5cbiAgcmV0dXJuIGNyZWF0ZWREYXRlUm93O1xufVxuXG5leHBvcnQgeyBtYWtlQ3JlYXRlZERhdGVSb3cgfTsiLCJpbXBvcnQgeyBtYWtlTGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbFRleHQuanMnO1xuXG5cbmNvbnN0IG1ha2VEZXNjcmlwdGlvblJvdyA9IChkZXNjcmlwdGlvbikgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvblJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjcmlwdGlvblJvdy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluLURlc2NyaXB0aW9uUm93JywgJ1RvZG9FZGl0LXBhZGRlcicpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IG1ha2VMYWJlbFRleHQoJ0RFU0NSSVBUSU9OJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dEZpZWxkJywgJ3RleHRGaWVsZC1kZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICc3Jyk7XG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEuaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XG4gIFxuICBkZXNjcmlwdGlvblJvdy5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICBkZXNjcmlwdGlvblJvdy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRBcmVhKTtcblxuICByZXR1cm4gZGVzY3JpcHRpb25Sb3c7XG59XG5cbmV4cG9ydCB7IG1ha2VEZXNjcmlwdGlvblJvdyB9OyIsImNvbnN0IG1ha2VMYWJlbFRleHQgPSAobGFiZWwpID0+IHtcbiAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVsVGV4dC5jbGFzc0xpc3QuYWRkKCdMYWJlbF9fVGV4dCcpO1xuICBsYWJlbFRleHQuaW5uZXJUZXh0ID0gbGFiZWw7XG5cbiAgcmV0dXJuIGxhYmVsVGV4dDtcbn1cblxuZXhwb3J0IHsgbWFrZUxhYmVsVGV4dCB9OyIsImltcG9ydCB7IG1ha2VMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsVGV4dC5qcyc7XG5cbmNvbnN0IG1ha2VUaXRsZVJvdyA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCB0aXRsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZVJvdy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluLXRpdGxlUm93JywgJ1RvZG9FZGl0LXBhZGRlcicpO1xuICBcbiAgY29uc3QgbGFiZWxUZXh0ID0gbWFrZUxhYmVsVGV4dCgnVElUTEUnKTtcbiAgXG4gIGNvbnN0IHRpdGxlVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0aXRsZVRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ3RleHRGaWVsZCcsICdUb2RvRWRpdC10aXRsZS10ZXh0ZmllbGQnKTtcbiAgdGl0bGVUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMScpO1xuICB0aXRsZVRleHRBcmVhLmlubmVyVGV4dCA9IHRpdGxlO1xuXG5cbiAgdGl0bGVSb3cuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdGl0bGVSb3cuYXBwZW5kQ2hpbGQodGl0bGVUZXh0QXJlYSk7XG5cbiAgcmV0dXJuIHRpdGxlUm93O1xufVxuXG5leHBvcnQgeyBtYWtlVGl0bGVSb3cgfTsiLCJpbXBvcnQgeyBtYWtlVGl0bGVSb3cgfSBmcm9tICcuLi9tYWluL2VsZW1lbnRzL3RpdGxlUm93LmpzJ1xuaW1wb3J0IHsgbWFrZVRhZ1JvdyB9IGZyb20gJy4uL21haW4vZWxlbWVudHMvVGFnUm93LmpzJztcbmltcG9ydCB7IG1ha2VEdWVEYXRlUm93IH0gZnJvbSAnLi4vbWFpbi9lbGVtZW50cy9EdWVEYXRlUm93LmpzJztcbmltcG9ydCB7IG1ha2VEZXNjcmlwdGlvblJvdyB9IGZyb20gJy4uL21haW4vZWxlbWVudHMvZGVzY3JpcHRpb25Sb3cuanMnO1xuaW1wb3J0IHsgbWFrZUNyZWF0ZWREYXRlUm93IH0gZnJvbSAnLi4vbWFpbi9lbGVtZW50cy9jcmVhdGVkRGF0ZVJvdy5qcyc7XG5cblxuY29uc3QgbWFrZVRvZG9FZGl0TWFpbiA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvZG9FZGl0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRWRpdE1haW4uY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtbWFpbicpO1xuXG4gIGNvbnN0IHRpdGxlID0gdG9kby5nZXRUaXRsZSgpO1xuICBjb25zdCBwcmlvcml0eSA9IHRvZG8uZ2V0UHJpb3JpdHkoKTtcbiAgY29uc3QgZHVlRGF0ZSA9IHRvZG8uZ2V0RHVlRGF0ZSgpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcbiAgY29uc3QgY3JlYXRlZERhdGUgPSB0b2RvLmdldENyZWF0ZWREYXRlKCk7XG4gIFxuICB0b2RvRWRpdE1haW4uYXBwZW5kQ2hpbGQobWFrZVRpdGxlUm93KHRpdGxlKSk7XG4gIHRvZG9FZGl0TWFpbi5hcHBlbmRDaGlsZChtYWtlVGFnUm93KHByaW9yaXR5KSk7XG4gIHRvZG9FZGl0TWFpbi5hcHBlbmRDaGlsZChtYWtlRHVlRGF0ZVJvdyhkdWVEYXRlKSk7XG4gIHRvZG9FZGl0TWFpbi5hcHBlbmRDaGlsZChtYWtlRGVzY3JpcHRpb25Sb3coZGVzY3JpcHRpb24pKTtcbiAgdG9kb0VkaXRNYWluLmFwcGVuZENoaWxkKG1ha2VDcmVhdGVkRGF0ZVJvdyhjcmVhdGVkRGF0ZSkpO1xuXG4gIHJldHVybiB0b2RvRWRpdE1haW47XG59XG5cbmV4cG9ydCB7IG1ha2VUb2RvRWRpdE1haW4gfTtcbiIsImltcG9ydCAnLi4vY3NzL3RvZG9EZXRhaWxzQ2FyZFZpZXcuY3NzJztcbmltcG9ydCB7IG1ha2VUb2RvRWRpdFBhbmUgfSBmcm9tICcuL2VkaXRQYW5lLmpzJztcblxuXG4vLyBTaG91bGQgZXhwb3J0IG9ubHkgb25lIGJpZyBmdW5jdGlvblxuY29uc3QgbWFrZVRvZG9EZXRhaWxzQ2FyZFZpZXcgPSAodG9kbywgdG9kb051bWJlcikgPT4ge1xuICBjb25zdCB0b2RvRGV0YWlsc0NhcmRWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9EZXRhaWxzQ2FyZFZpZXcuY2xhc3NMaXN0LmFkZCgnVG9kb0RldGFpbHMtQ2FyZFZpZXcnKTtcbiAgdG9kb0RldGFpbHNDYXJkVmlldy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1udW1iZXInLCB0b2RvTnVtYmVyKTtcblxuICBjb25zdCB0b2RvRWRpdFBhbmUgPSBtYWtlVG9kb0VkaXRQYW5lKHRvZG8pO1xuICB0b2RvRGV0YWlsc0NhcmRWaWV3LmFwcGVuZENoaWxkKHRvZG9FZGl0UGFuZSk7XG5cbiAgcmV0dXJuIHRvZG9EZXRhaWxzQ2FyZFZpZXc7XG59XG5cbmV4cG9ydCB7IG1ha2VUb2RvRGV0YWlsc0NhcmRWaWV3IH07IiwiY29uc3QgaXNFbXB0eSA9IChzdHIpID0+IHtcbiAgaWYgKHN0ciA9PT0gJycpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgR2V0ID0gKCkgPT4ge1xuICBjb25zdCBpbXBvcnRhbnRCdG4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1pbXBvcnRhbnQtYnRuJyk7XG4gIH0gXG5cbiAgY29uc3QgaGlnaEJ0biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWhpZ2gtYnRuJyk7XG4gIH0gXG5cbiAgY29uc3QgbWlkZGxlQnRuID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktbWlkZGxlLWJ0bicpO1xuICB9XG5cbiAgY29uc3QgbG93QnRuID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktbG93LWJ0bicpO1xuICB9IFxuXG4gIGNvbnN0IGFsbFByaW9yaXR5QnRucyA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW9yaXR5LXRhZycpO1xuICB9XG5cbiAgY29uc3QgdG9kb1RpdGxlID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVG9kb0VkaXQtbWFpbi10aXRsZVJvdyB0ZXh0YXJlYScpLnZhbHVlO1xuICB9XG5cbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkQnRuID0gc2VsZWN0ZWRQcmlvcml0eUJ0bigpO1xuICAgIFxuICAgIGlmIChpc0VtcHR5KHNlbGVjdGVkQnRuKSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW9yaXR5ID0gc2VsZWN0ZWRCdG4uaW5uZXJUZXh0O1xuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfVxuICBcbiAgY29uc3QgdG9kb0R1ZURhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNUb2RvRWRpdC1EdWVEYXRlJykudmFsdWU7XG4gIH1cbiAgXG4gIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRvZG9FZGl0LW1haW4tRGVzY3JpcHRpb25Sb3cgdGV4dGFyZWEnKS52YWx1ZTtcbiAgfVxuICBcbiAgY29uc3QgdG9kb0NyZWF0ZWREYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVG9kb0VkaXQtQ3JlYXRlZERhdGUnKS5pbm5lclRleHQ7XG4gIH1cblxuICBjb25zdCBzZWxlY3RlZFByaW9yaXR5QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ2ltcG9ydGFudC1zZWxlY3RlZCcsICdoaWdoLXNlbGVjdGVkJywgJ21pZGRsZS1zZWxlY3RlZCcsXG4gICdsb3ctc2VsZWN0ZWQnXTsgIFxuICAgIGNvbnN0IHByaW9yaXR5QnRucyA9IGdldC5hbGxQcmlvcml0eUJ0bnMoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlCdG5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwcmlvcml0eUJ0biA9IHByaW9yaXR5QnRuc1tpXTtcbiAgICAgIGNvbnN0IHByaW9yaXR5QnRuQ2xhc3MgPSBwcmlvcml0eUJ0bi5jbGFzc05hbWU7XG4gICAgICBpZiAocHJpb3JpdHlCdG5DbGFzcy5pbmNsdWRlcygnc2VsZWN0ZWQnKSkge1xuICAgICAgICByZXR1cm4gcHJpb3JpdHlCdG47XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgY2FyZFZpZXdDb250YWluZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5DYXJkVmlldy1Db250YWluZXInKTtcbiAgfVxuXG4gIGNvbnN0IHRvZG9EZXRhaWxzQ2FyZFZpZXcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ub2RvRGV0YWlscy1DYXJkVmlldycpO1xuICB9XG5cbiAgY29uc3QgZGF0YVRvZG9OdW1iZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9EZXRhaWxzQ2FyZFZpZXcoKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1udW1iZXInKTtcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRvZG9MaXN0LUNhcmRWaWV3LWhlYWRlcicpLmlubmVyVGV4dDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW1wb3J0YW50QnRuLGhpZ2hCdG4sbWlkZGxlQnRuLGxvd0J0biwgYWxsUHJpb3JpdHlCdG5zLCB0b2RvVGl0bGUsXG4gICAgdG9kb1ByaW9yaXR5LCB0b2RvRHVlRGF0ZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvQ3JlYXRlZERhdGUsXG4gICAgc2VsZWN0ZWRQcmlvcml0eUJ0biwgY2FyZFZpZXdDb250YWluZXIsIHRvZG9EZXRhaWxzQ2FyZFZpZXcsIGRhdGFUb2RvTnVtYmVyLFxuICAgIGN1cnJlbnRDYXRlZ29yeVxuICB9XG59XG5cbmNvbnN0IGdldCA9IEdldCgpO1xuXG5leHBvcnQgeyBnZXQgfTsiLCJpbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldC5qcyc7XG5cbmNvbnN0IGlzU2FtZUJ1dHRvbiA9IChidXR0b25PbmUsIGJ1dHRvblR3bykgPT4ge1xuICBpZiAoYnV0dG9uT25lID09PSBidXR0b25Ud28pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgaXNQcmlvcml0eUFscmVhZHlTZXQgPSAoKSA9PiB7XG4gIGNvbnN0IHByaW9yaXR5QnRucyA9IGdldC5hbGxQcmlvcml0eUJ0bnMoKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlCdG5zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByaW9yaXR5QnRuc1tpXS5jbGFzc05hbWUuaW5jbHVkZXMoJ3NlbGVjdGVkJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3Qgc2VsZWN0UHJpb3JpdHlCdG4gPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgY2xpY2tlZEJ0biA9IGV2ZW50LnRhcmdldDtcbiAgXG4gIC8vIElmIGl0IHBhc3NlcyB0aGlzIGxpbmUsIGl0IG1lYW5zIHByaW9yaXR5IGlzIHNldFxuICBpZiAoIWlzUHJpb3JpdHlBbHJlYWR5U2V0KCkpIHtcbiAgICByZXR1cm4gY2xpY2tlZEJ0bi5jbGFzc0xpc3QudG9nZ2xlKGNsaWNrZWRCdG4uaW5uZXJUZXh0ICsgJy1zZWxlY3RlZCcpO1xuICB9XG5cbiAgLy8gSWYgaXQgcGFzc2VzIHRoaXMgbGluZSwgaXQgbWVhbnMgdGhleSBhcmUgc2FtZSBidXR0b25cbiAgY29uc3Qgc2VsZWN0ZWRCdG4gPSBnZXQuc2VsZWN0ZWRQcmlvcml0eUJ0bigpO1xuICBpZiAoIWlzU2FtZUJ1dHRvbihjbGlja2VkQnRuLCBzZWxlY3RlZEJ0bikpIHtcbiAgICBzZWxlY3RlZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdGVkQnRuLmlubmVyVGV4dCArICctc2VsZWN0ZWQnKTtcbiAgICBjbGlja2VkQnRuLmNsYXNzTGlzdC50b2dnbGUoY2xpY2tlZEJ0bi5pbm5lclRleHQgKyAnLXNlbGVjdGVkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY2xpY2tlZEJ0bi5jbGFzc0xpc3QudG9nZ2xlKGNsaWNrZWRCdG4uaW5uZXJUZXh0ICsgJy1zZWxlY3RlZCcpO1xufVxuXG5jb25zdCBlbmFibGVCdXR0b25zVG9CZVNlbGVjdGVkID0gKCkgPT4ge1xuICBjb25zdCBwcmlvcml0eUJ0bnMgPSBnZXQuYWxsUHJpb3JpdHlCdG5zKCk7XG4gIFxuICBwcmlvcml0eUJ0bnMuZm9yRWFjaChwcmlvcml0eUJ0biA9PiB7XG4gICAgcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcmlvcml0eUJ0bik7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBlbmFibGVCdXR0b25zVG9CZVNlbGVjdGVkIH0iLCJpbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldC5qcyc7XG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gJy4uL1RvZG9MaXN0L3RvZG9saXN0LmpzJztcblxuY29uc3Qgc2F2ZVRvZG9EZXRhaWxzID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZSA9IGdldC50b2RvVGl0bGUoKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBnZXQudG9kb1ByaW9yaXR5KCk7XG4gIGNvbnN0IGR1ZURhdGUgPSBnZXQudG9kb0R1ZURhdGUoKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBnZXQudG9kb0Rlc2NyaXB0aW9uKCk7XG5cbiAgY29uc3QgdG9kb051bWJlciA9IGdldC5kYXRhVG9kb051bWJlcigpO1xuICBjb25zdCBjYXRlZ29yeSA9IGdldC5jdXJyZW50Q2F0ZWdvcnkoKTtcbiAgY29uc3QgdG9kbyA9IHRvZG9MaXN0LmdldFRvZG9CeU51bWJlcih0b2RvTnVtYmVyLCBjYXRlZ29yeSk7XG4gIFxuICB0b2RvLnNldFRpdGxlKHRpdGxlKTtcbiAgdG9kby5zZXRQcmlvcml0eShwcmlvcml0eSk7XG4gIHRvZG8uc2V0RHVlRGF0ZShkdWVEYXRlKTtcbiAgdG9kby5zZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG59XG5cbmV4cG9ydCB7IHNhdmVUb2RvRGV0YWlscyB9IiwiaW1wb3J0IHsgZW5hYmxlQnV0dG9uc1RvQmVTZWxlY3RlZCB9IGZyb20gJy4vcHJpb3JpdHkuanMnO1xuXG5jb25zdCBzdGFydEluaXRpYWxTZXR1cCA9ICgpID0+IHtcbiAgZW5hYmxlQnV0dG9uc1RvQmVTZWxlY3RlZCgpO1xufVxuXG5leHBvcnQgeyBzdGFydEluaXRpYWxTZXR1cCB9OyIsImltcG9ydCB7IG1ha2VUb2RvRGV0YWlsc0NhcmRWaWV3IH0gZnJvbSAnLi9lbGVtZW50cy9tYWtlVG9kb0RldGFpbHNDYXJkVmlldy5qcyc7XG5pbXBvcnQgeyBzdGFydEluaXRpYWxTZXR1cCB9IGZyb20gJy4vc3RhcnRJbml0aWFsU2V0dXAuanMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQuanMnO1xuaW1wb3J0IHsgc2F2ZVRvZG9EZXRhaWxzIH0gZnJvbSAnLi9zYXZlVG9kb0RldGFpbHMuanMnO1xuaW1wb3J0IHsgdG9kb0xpc3RDYXJkVmlldyB9IGZyb20gJy4uL3RvZG9MaXN0Q2FyZFZpZXcvdG9kb0xpc3RDYXJkVmlldy5qcyc7XG5cbmNvbnN0IGlzQ2FyZFZpZXdFeGlzdCA9ICgpID0+IHtcbiAgY29uc3QgdG9kb0RldGFpbHNDYXJkVmlldyA9IGdldC50b2RvRGV0YWlsc0NhcmRWaWV3KClcbiAgaWYgKHRvZG9EZXRhaWxzQ2FyZFZpZXcgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgcmVtb3ZlVG9kb0RldGFpbHNDYXJkVmlldyA9ICgpID0+IHtcbiAgc2F2ZVRvZG9EZXRhaWxzKCk7XG4gIGNvbnN0IHRpdGxlID0gZ2V0LnRvZG9UaXRsZSgpO1xuICBjb25zdCB0b2RvTnVtYmVyID0gZ2V0LnRvZG9OdW1iZXIoKTtcbiAgZ2V0LnRvZG9EZXRhaWxzQ2FyZFZpZXcoKS5yZW1vdmUoKTtcbiAgXG4gIHRvZG9MaXN0Q2FyZFZpZXcuY2hhbmdlVG9kb1RpdGxlKHRpdGxlLCB0b2RvTnVtYmVyKVxufVxuXG5jb25zdCBzaG93VG9kb0RldGFpbHMgPSAodG9kbywgdG9kb051bWJlcikgPT4ge1xuICBcbiAgaWYoaXNDYXJkVmlld0V4aXN0KCkpIHtcbiAgICByZW1vdmVUb2RvRGV0YWlsc0NhcmRWaWV3KCk7XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBnZXQuY2FyZFZpZXdDb250YWluZXIoKVxuICBjb25zdCB0b2RvRGV0YWlsc0NhcmRWaWV3ID0gbWFrZVRvZG9EZXRhaWxzQ2FyZFZpZXcodG9kbywgdG9kb051bWJlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGV0YWlsc0NhcmRWaWV3KTtcblxuICBzdGFydEluaXRpYWxTZXR1cCgpO1xufVxuXG5jb25zdCBUb2RvRGV0YWlsc0NhcmRWaWV3ID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgc2hvd1RvZG9EZXRhaWxzLFxuICAgIHJlbW92ZVRvZG9EZXRhaWxzQ2FyZFZpZXcsXG4gICAgaXNDYXJkVmlld0V4aXN0XG4gIH1cbn1cblxuY29uc3QgdG9kb0RldGFpbHNDYXJkVmlldyA9IFRvZG9EZXRhaWxzQ2FyZFZpZXcoKTtcblxuZXhwb3J0IHsgdG9kb0RldGFpbHNDYXJkVmlldyB9OyIsImltcG9ydCB7IHVwZGF0ZURhdGFUb2RvTnVtYmVyIH0gZnJvbSAnLi9kZWxldGVCdXR0b24uanMnO1xuaW1wb3J0IHsgbWFrZVRvZG9MaXN0TWFpblJvd3MgfSBmcm9tICcuL2VsZW1lbnRzL3RvZG9MaXN0TWFpblJvd3MuanMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQuanMnO1xuXG5jb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgY29uc3QgdG9kb0xpc3RNYWluUm93cyA9IG1ha2VUb2RvTGlzdE1haW5Sb3dzKHRvZG8pO1xuICAvLyBnZXQgdG9kb0xpc3QgQ2FyZFZpZXcgTWFpblxuICBjb25zdCB0b2RvQ29udGFpbmVyID0gZ2V0LnRvZG9MaXN0TWFpbigpO1xuICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MaXN0TWFpblJvd3MpO1xuXG4gIHVwZGF0ZURhdGFUb2RvTnVtYmVyKGdldC5hbGxUb2RvTGlzdE1haW5Sb3dzKCkpO1xufVxuXG5leHBvcnQgeyBhZGRUb2RvIH07IiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQuanMnO1xuaW1wb3J0IHsgdG9kb0xpc3RDYXJkVmlldyB9IGZyb20gJy4vdG9kb0xpc3RDYXJkVmlldy5qcyc7XG5pbXBvcnQgeyBpc0NvbXBsZXRlZE1hcmtlciB9IGZyb20gJy4vaXNDb21wbGV0ZWQuanMnXG5pbXBvcnQgeyBtYXJrQ29tcGxldGVkRGlzcGxheSB9IGZyb20gJy4vbWFya0NvbXBsZXRlZC5qcyc7XG5pbXBvcnQgeyB1bmRvQ29tcGxldGVkRGlzcGxheSB9IGZyb20gJy4vdW5kb0NvbXBsZXRlZC5qcyc7XG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gJy4uL1RvZG9MaXN0L3RvZG9saXN0LmpzJztcblxuY29uc3QgbWFrZUVtcHR5Q2hlY2tNYXJrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGVtcHR5Q2hlY2tNYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBlbXB0eUNoZWNrTWFyay5jbGFzc0xpc3QuYWRkKCdmYXInLCAnZmEtY2lyY2xlJywgJ2NoZWNrLW1hcmtlcicpO1xuICBlbXB0eUNoZWNrTWFyay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdENvbXBsZXRlZE1hcmtlcicpO1xuXG4gIGVuYWJsZUNoZWNrTWFya2VyKGVtcHR5Q2hlY2tNYXJrKTtcbiAgcmV0dXJuIGVtcHR5Q2hlY2tNYXJrO1xufVxuXG5jb25zdCBtYWtlQ2hlY2tlZE1hcmtlciA9ICgpID0+IHtcbiAgY29uc3QgY2hlY2tlZE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY2hlY2tlZE1hcmtlci5jbGFzc0xpc3QuYWRkKCdmYXInLCAnZmEtY2hlY2stY2lyY2xlJywgJ2NoZWNrLW1hcmtlcicpO1xuICBjaGVja2VkTWFya2VyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tcGxldGVkTWFya2VyJyk7XG5cbiAgZW5hYmxlQ2hlY2tNYXJrZXIoY2hlY2tlZE1hcmtlcik7XG4gIHJldHVybiBjaGVja2VkTWFya2VyO1xufVxuXG5jb25zdCBtYXJrQ29tcGxldGVkID0gKHRvZG8sIHRvZG9EaXNwbGF5KSA9PiB7XG4gIHRvZG8ubWFya0NvbXBsZXRlZCgpO1xuICBtYXJrQ29tcGxldGVkRGlzcGxheSh0b2RvRGlzcGxheSk7XG59XG5cbmNvbnN0IHVuZG9Db21wbGV0ZWQgPSAodG9kbywgdG9kb0Rpc3BsYXkpID0+IHtcbiAgdG9kby51bmRvQ29tcGxldGVkKCk7XG4gIHVuZG9Db21wbGV0ZWREaXNwbGF5KHRvZG9EaXNwbGF5KTtcbn1cblxuY29uc3QgdG9nZ2xlQ29tcGxldGVkID0gKGV2ZW50KSA9PiB7XG4gIC8vIFNSUDogdG9nZ2xlIHRoZSBjb21wbGV0ZWQgc3RhdHVzXG4gIGNvbnN0IGNoZWNrTWFya2VyID0gZXZlbnQudGFyZ2V0O1xuICBcbiAgY29uc3QgdG9kb0Rpc3BsYXkgPSBnZXQudG9kb0l0ZW1PZkVsZW1lbnQoY2hlY2tNYXJrZXIpO1xuICBjb25zdCBjYXRlZ29yeSA9IGdldC5jdXJyZW50Q2F0ZWdvcnkoKTtcbiAgY29uc3QgdG9kb051bWJlciA9IGdldC50b2RvTnVtYmVyKHRvZG9EaXNwbGF5KTtcbiAgY29uc3QgdG9kbyA9IHRvZG9MaXN0LmdldFRvZG9CeU51bWJlcih0b2RvTnVtYmVyLCBjYXRlZ29yeSk7XG4gIFxuICBpZiAoaXNDb21wbGV0ZWRNYXJrZXIoY2hlY2tNYXJrZXIpKSB7XG4gICAgcmV0dXJuIHVuZG9Db21wbGV0ZWQodG9kbywgdG9kb0Rpc3BsYXkpO1xuICB9XG5cbiAgbWFya0NvbXBsZXRlZCh0b2RvLCB0b2RvRGlzcGxheSk7XG59XG5cbmNvbnN0IGVuYWJsZUNoZWNrTWFya2VyID0gKGNoZWNrTWFya2VyKSA9PiB7XG4gIGNoZWNrTWFya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ29tcGxldGVkKTtcbn1cblxuZXhwb3J0IHsgbWFrZUVtcHR5Q2hlY2tNYXJrZXIsIG1ha2VDaGVja2VkTWFya2VyIH07XG5cblxuIiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQuanMnO1xuaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tICcuLi9Ub2RvTGlzdC90b2RvbGlzdC5qcyc7XG5cbmNvbnN0IG1ha2VEZWxldGVCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1iYWNrc3BhY2UnLCAnVG9kb0l0ZW0tZGVsZXRlLWJ0bicpO1xuICBcbiAgZW5hYmxlRGVsZXRlQnV0dG9uKGRlbGV0ZUJ0bik7XG4gIHJldHVybiBkZWxldGVCdG47XG59XG5cbmNvbnN0IGdldFRvZG8gPSAoZGVsZXRlQnRuKSA9PiB7XG4gIHJldHVybiBnZXQudG9kb0xpc3RNYWluUm93T2ZFbGVtZW50KGRlbGV0ZUJ0bilcbn1cblxuY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gIHRvZG8ucmVtb3ZlKCk7XG59XG5cbmNvbnN0IHVwZGF0ZURhdGFUb2RvTnVtYmVyID0gKHRvZG9MaXN0TWFpblJvd3MpID0+IHtcbiAgdG9kb0xpc3RNYWluUm93cy5mb3JFYWNoKCh0b2RvTGlzdE1haW5Sb3csIHRvZG9OdW1iZXIpID0+IHtcbiAgICB0b2RvTGlzdE1haW5Sb3cuc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8tbnVtYmVyJywgdG9kb051bWJlcik7XG4gIH0pXG59XG5cbmNvbnN0IGVuYWJsZURlbGV0ZUJ1dHRvbiA9IChkZWxldGVCdG4pID0+IHtcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSBnZXRUb2RvKGRlbGV0ZUJ0bik7XG4gICAgZGVsZXRlVG9kbyh0b2RvKTtcbiAgICBcbiAgICBjb25zdCB0b2RvRGlzcGxheSA9IGdldC50b2RvSXRlbU9mRWxlbWVudChkZWxldGVCdG4pO1xuICAgIGNvbnN0IHRvZG9OdW1iZXIgPSBnZXQudG9kb051bWJlcih0b2RvRGlzcGxheSk7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBnZXQuY3VycmVudENhdGVnb3J5KCk7XG4gICAgdG9kb0xpc3QuZGVsZXRlVG9kb0J5TnVtYmVyKHRvZG9OdW1iZXIsIGNhdGVnb3J5KTtcblxuICAgIHVwZGF0ZURhdGFUb2RvTnVtYmVyKGdldC5hbGxUb2RvTGlzdE1haW5Sb3dzKCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgbWFrZURlbGV0ZUJ0biwgdXBkYXRlRGF0YVRvZG9OdW1iZXIgfTsiLCJpbXBvcnQgeyBtYWtlVG9kb0xpc3RIZWFkZXIgfSBmcm9tICcuL3RvZG9MaXN0SGVhZGVyLmpzJztcbmltcG9ydCB7IG1ha2VUb2RvTGlzdE1haW4gfSBmcm9tICcuL3RvZG9MaXN0TWFpbi5qcyc7XG5pbXBvcnQgJy4uL2Nzcy90b2RvTGlzdENhcmRWaWV3LmNzcyc7XG5cbmltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSAnLi4vLi4vVG9kb0xpc3QvdG9kb2xpc3QuanMnO1xuXG5jb25zdCBpc0VtcHR5ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGlmIChjYXRlZ29yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IG1ha2VUb2RvTGlzdENhcmRWaWV3ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGlmIChpc0VtcHR5KGNhdGVnb3J5KSkge1xuICAgIGNhdGVnb3J5ID0gJ2RlZmF1bHQnO1xuICB9XG5cbiAgY29uc3QgdG9kb0xpc3RDYXJkVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvTGlzdENhcmRWaWV3LmNsYXNzTGlzdC5hZGQoJ1RvZG9MaXN0LUNhcmRWaWV3Jyk7XG5cbiAgdG9kb0xpc3RDYXJkVmlldy5hcHBlbmRDaGlsZChtYWtlVG9kb0xpc3RIZWFkZXIoY2F0ZWdvcnkpKTtcblxuICBjb25zdCB0b2RvcyA9IHRvZG9MaXN0LmdldFRvZG9zQnlDYXRlZ29yeShjYXRlZ29yeSk7XG4gIHRvZG9MaXN0Q2FyZFZpZXcuYXBwZW5kQ2hpbGQobWFrZVRvZG9MaXN0TWFpbih0b2RvcykpO1xuICBcbiAgcmV0dXJuIHRvZG9MaXN0Q2FyZFZpZXc7XG59XG5cbmV4cG9ydCB7IG1ha2VUb2RvTGlzdENhcmRWaWV3IH07IiwiY29uc3QgbWFrZVRvZG9MaXN0SGVhZGVyID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IHRvZG9MaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9MaXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ1RvZG9MaXN0LUNhcmRWaWV3LWhlYWRlcicpO1xuICB0b2RvTGlzdEhlYWRlci5pbm5lclRleHQgPSBjYXRlZ29yeTtcblxuICByZXR1cm4gdG9kb0xpc3RIZWFkZXI7XG59XG5cbmV4cG9ydCB7IG1ha2VUb2RvTGlzdEhlYWRlciB9OyIsImltcG9ydCB7IG1ha2VUb2RvTGlzdE1haW5Sb3dzIH0gZnJvbSAnLi90b2RvTGlzdE1haW5Sb3dzLmpzJztcblxuY29uc3QgYXJlVG9kb3NFbXB0eSA9ICh0b2RvcykgPT4ge1xuICBpZiAodG9kb3MgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBtYWtlVG9kb0xpc3RNYWluID0gKHRvZG9zKSA9PiB7XG4gIGNvbnN0IHRvZG9MaXN0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvTGlzdE1haW4uY2xhc3NMaXN0LmFkZCgnVG9kb0xpc3QtQ2FyZFZpZXctbWFpbicpO1xuXG4gIGlmIChhcmVUb2Rvc0VtcHR5KHRvZG9zKSkge1xuICAgIHJldHVybiB0b2RvTGlzdE1haW47XG4gIH1cblxuICB0b2Rvcy5mb3JFYWNoKCh0b2RvLCB0b2RvTnVtYmVyKSA9PiB7XG4gICAgdG9kb0xpc3RNYWluLmFwcGVuZENoaWxkKG1ha2VUb2RvTGlzdE1haW5Sb3dzKHRvZG8sIHRvZG9OdW1iZXIpKTtcbiAgfSlcbiAgXG4gIHJldHVybiB0b2RvTGlzdE1haW47XG59XG5cbmV4cG9ydCB7IG1ha2VUb2RvTGlzdE1haW4gfTsiLCJpbXBvcnQgeyBtYWtlRGVsZXRlQnRuIH0gZnJvbSAnLi4vZGVsZXRlQnV0dG9uLmpzJztcbmltcG9ydCB7IG1ha2VDaGVja2VkTWFya2VyLCBtYWtlRW1wdHlDaGVja01hcmtlciB9IGZyb20gJy4uL2NoZWNrTWFya2VyLmpzJztcbmltcG9ydCB7IHRvZG9EZXRhaWxzQ2FyZFZpZXcgfSBmcm9tICcuLi8uLi90b2RvRGV0YWlsc0NhcmRWaWV3L3RvZG9EZXRhaWxzQ2FyZFZpZXcnO1xuaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tICcuLi8uLi9Ub2RvTGlzdC90b2RvbGlzdC5qcyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi9nZXQuanMnO1xuaW1wb3J0IHsgZW5hYmxlQnV0dG9uc1RvQmVTZWxlY3RlZCB9IGZyb20gJy4uLy4uL3RvZG9EZXRhaWxzQ2FyZFZpZXcvcHJpb3JpdHkuanMnO1xuXG5jb25zdCBtYWtlVG9kb0l0ZW1UaXRsZSA9ICh0aXRsZSwgY29tcGxldGVkKSA9PiB7XG4gIGNvbnN0IHRvZG9JdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0l0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdUb2RvSXRlbS10aXRsZScpO1xuICB0b2RvSXRlbVRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gIGlmIChjb21wbGV0ZWQpIHtcbiAgICB0b2RvSXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ1RvZG9JdGVtLXRpdGxlLWNoZWNrZWQnKTtcbiAgfVxuXG4gIHJldHVybiB0b2RvSXRlbVRpdGxlO1xufVxuXG5jb25zdCBtYWtlVG9kb0l0ZW1DaGVja0JveCA9IChjb21wbGV0ZWQpID0+IHtcbiAgY29uc3QgdG9kb0l0ZW1DaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvSXRlbUNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ1RvZG9JdGVtLWNoZWNrQm94Jyk7XG4gIGxldCBjaGVja01hcmtlcjtcblxuICBpZiAoY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgY2hlY2tNYXJrZXIgPSBtYWtlQ2hlY2tlZE1hcmtlcigpO1xuICAgIFxuICB9IGVsc2Uge1xuICAgIGNoZWNrTWFya2VyID0gbWFrZUVtcHR5Q2hlY2tNYXJrZXIoKTtcbiAgfVxuXG4gIHRvZG9JdGVtQ2hlY2tCb3guYXBwZW5kQ2hpbGQoY2hlY2tNYXJrZXIpO1xuXG4gIHJldHVybiB0b2RvSXRlbUNoZWNrQm94O1xufVxuXG5jb25zdCBlbmFibGVUb2RvSXRlbSA9ICh0b2RvSXRlbSkgPT4ge1xuICB0b2RvSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrTWFya2VyID0gdG9kb0l0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrLW1hcmtlcicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRvZG9JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5Ub2RvSXRlbS1kZWxldGUtYnRuJyk7XG5cbiAgICBpZiAoIShldmVudC50YXJnZXQgPT09IGNoZWNrTWFya2VyIHx8IGV2ZW50LnRhcmdldCA9PT0gZGVsZXRlQnRuKSkge1xuICAgICAgY29uc3QgdG9kb051bWJlciA9IGdldC50b2RvTnVtYmVyKHRvZG9JdGVtKTtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZ2V0LmN1cnJlbnRDYXRlZ29yeSgpO1xuICAgICAgY29uc3QgdG9kbyA9IHRvZG9MaXN0LmdldFRvZG9CeU51bWJlcih0b2RvTnVtYmVyLCBjYXRlZ29yeSk7XG4gICAgICB0b2RvRGV0YWlsc0NhcmRWaWV3LnNob3dUb2RvRGV0YWlscyh0b2RvLCB0b2RvTnVtYmVyKTtcbiAgICB9XG4gIH0pXG59XG5jb25zdCBtYWtlVG9kb0l0ZW0gPSAodG9kbykgPT4ge1xuICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdUb2RvSXRlbScpO1xuXG4gIGNvbnN0IHRpdGxlID0gdG9kby5nZXRUaXRsZSgpO1xuICBjb25zdCBjb21wbGV0ZWQgPSB0b2RvLmlzQ29tcGxldGVkKCk7XG5cbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQobWFrZVRvZG9JdGVtQ2hlY2tCb3goY29tcGxldGVkKSk7XG4gIHRvZG9JdGVtLmFwcGVuZENoaWxkKG1ha2VUb2RvSXRlbVRpdGxlKHRpdGxlLCBjb21wbGV0ZWQpKTtcblxuICBpZiAoY29tcGxldGVkKSB7XG4gICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgnVG9kb0l0ZW0tY2hlY2tlZCcpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IG1ha2VEZWxldGVCdG4oKTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICB9XG5cbiAgZW5hYmxlVG9kb0l0ZW0odG9kb0l0ZW0pO1xuICByZXR1cm4gdG9kb0l0ZW07XG59XG5cblxuXG5jb25zdCBtYWtlVG9kb0xpc3RNYWluUm93cyA9ICh0b2RvLCB0b2RvTnVtYmVyKSA9PiB7XG4gIC8vIFdlIG5lZWQgdG8gaW5zZXJ0IHRoZSByb3csIHRvZG9pdGVtIGlzIGluIHRoZSByb3dcbiAgY29uc3QgdG9kb0xpc3RNYWluUm93cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvTGlzdE1haW5Sb3dzLmNsYXNzTGlzdC5hZGQoJ1RvZG9MaXN0LW1haW4tcm93cycpO1xuICB0b2RvTGlzdE1haW5Sb3dzLnNldEF0dHJpYnV0ZSgnZGF0YS10b2RvLW51bWJlcicsIHRvZG9OdW1iZXIpO1xuXG4gIHRvZG9MaXN0TWFpblJvd3MuYXBwZW5kQ2hpbGQobWFrZVRvZG9JdGVtKHRvZG8pKTtcbiAgcmV0dXJuIHRvZG9MaXN0TWFpblJvd3M7XG59XG5cbmV4cG9ydCB7IG1ha2VUb2RvTGlzdE1haW5Sb3dzIH07XG5cbiIsImNvbnN0IEdldCA9ICgpID0+IHtcbiAgY29uc3QgYWxsQ2hlY2tNYXJrZXJzID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2stbWFya2VyJyk7XG4gIH1cblxuICBjb25zdCBhbGxUb2RvTGlzdE1haW5Sb3dzID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuVG9kb0xpc3QtbWFpbi1yb3dzJyk7XG4gIH1cblxuICBjb25zdCB0b2RvSXRlbU9mRWxlbWVudCA9IChjaGVja01hcmtlcikgPT4ge1xuICAgIHJldHVybiBjaGVja01hcmtlci5jbG9zZXN0KCcuVG9kb0l0ZW0nKTtcbiAgfVxuXG4gIGNvbnN0IHRvZG9MaXN0TWFpblJvd09mRWxlbWVudCA9IChlbGVtKSA9PiB7XG4gICAgcmV0dXJuIGVsZW0uY2xvc2VzdCgnLlRvZG9MaXN0LW1haW4tcm93cycpO1xuICB9XG5cbiAgY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVG9kb0xpc3QtQ2FyZFZpZXctaGVhZGVyJyk7XG4gIH1cblxuICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhlYWRlcigpLmlubmVyVGV4dDtcbiAgfVxuICBcbiAgY29uc3QgdG9kb0xpc3RNYWluID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVG9kb0xpc3QtQ2FyZFZpZXctbWFpbicpO1xuICB9XG5cbiAgY29uc3QgdG9kb051bWJlciA9ICh0b2RvSXRlbSkgPT4ge1xuICAgIGNvbnN0IHRvZG9JdGVtQ29udGFpbmVyID0gdG9kb0l0ZW0uY2xvc2VzdCgnLlRvZG9MaXN0LW1haW4tcm93cycpO1xuICAgIHJldHVybiB0b2RvSXRlbUNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1udW1iZXInKTtcbiAgfVxuXG4gIGNvbnN0IHRvZG9MaXN0Q2FyZFZpZXcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ub2RvTGlzdC1DYXJkVmlldycpO1xuICB9XG5cbiAgY29uc3QgY2FyZFZpZXdDb250YWluZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5DYXJkVmlldy1Db250YWluZXInKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWxsQ2hlY2tNYXJrZXJzLFxuICAgIGFsbFRvZG9MaXN0TWFpblJvd3MsXG4gICAgdG9kb0l0ZW1PZkVsZW1lbnQsXG4gICAgdG9kb0xpc3RNYWluUm93T2ZFbGVtZW50LFxuICAgIGN1cnJlbnRDYXRlZ29yeSxcbiAgICB0b2RvTnVtYmVyLFxuICAgIHRvZG9MaXN0TWFpbixcbiAgICB0b2RvTGlzdENhcmRWaWV3LFxuICAgIGNhcmRWaWV3Q29udGFpbmVyXG4gIH1cbn1cblxuY29uc3QgZ2V0ID0gR2V0KCk7XG5cbmV4cG9ydCB7IGdldCB9OyIsImltcG9ydCB7IGdldCB9IGZyb20gJy4vZ2V0LmpzJztcblxuY29uc3QgaXNDb21wbGV0ZWRNYXJrZXIgPSAoY2hlY2tNYXJrZXIpID0+IHtcbiAgaWYgKGNoZWNrTWFya2VyLmlkID09PSAnY29tcGxldGVkTWFya2VyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IGlzVG9kb0xpc3RDYXJkVmlld0V4aXN0ID0gKCkgPT4ge1xuICBpZiAoZ2V0LnRvZG9MaXN0Q2FyZFZpZXcoKSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7IGlzQ29tcGxldGVkTWFya2VyLCBpc1RvZG9MaXN0Q2FyZFZpZXdFeGlzdCB9IiwiaW1wb3J0IHsgZW5hYmxlRGVsZXRlQnV0dG9uIH0gZnJvbSAnLi9kZWxldGVCdXR0b24uanMnO1xuaW1wb3J0IHsgbWFrZURlbGV0ZUJ0biB9IGZyb20gJy4vZGVsZXRlQnV0dG9uLmpzJztcblxuXG5jb25zdCBzdHJpa2VUaHJvdWdoVGl0bGUgPSAodG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgdG9kb1RpdGxlID0gdG9kb0l0ZW0ucXVlcnlTZWxlY3RvcignLlRvZG9JdGVtLXRpdGxlJyk7XG4gIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCdUb2RvSXRlbS10aXRsZS1jaGVja2VkJyk7XG59XG5cbmNvbnN0IGNoYW5nZVRvQ29tcGxldGVkTWFya2VyID0gKHRvZG9JdGVtKSA9PiB7XG4gIGNvbnN0IGNoZWNrTWFya2VyID0gdG9kb0l0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrLW1hcmtlcicpO1xuICBjaGVja01hcmtlci5jbGFzc05hbWUgPSAnZmFyIGZhLWNoZWNrLWNpcmNsZSBjaGVjay1tYXJrZXInO1xuICBjaGVja01hcmtlci5pZCA9ICdjb21wbGV0ZWRNYXJrZXInO1xufVxuXG5jb25zdCBhZGREZWxldGVCdG4gPSAodG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgZGVsZXRlQnRuID0gbWFrZURlbGV0ZUJ0bigpO1xuICB0b2RvSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xufVxuXG5jb25zdCBkYXJrZW5Ub2RvSXRlbSA9ICh0b2RvSXRlbSkgPT4ge1xuICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdUb2RvSXRlbS1jaGVja2VkJyk7XG59XG5cbmNvbnN0IG1hcmtDb21wbGV0ZWREaXNwbGF5ID0gKHRvZG9JdGVtKSA9PiB7XG4gIGRhcmtlblRvZG9JdGVtKHRvZG9JdGVtKTtcbiAgY2hhbmdlVG9Db21wbGV0ZWRNYXJrZXIodG9kb0l0ZW0pO1xuICBzdHJpa2VUaHJvdWdoVGl0bGUodG9kb0l0ZW0pO1xuICBhZGREZWxldGVCdG4odG9kb0l0ZW0pO1xufVxuXG5leHBvcnQgeyBtYXJrQ29tcGxldGVkRGlzcGxheSB9OyIsImltcG9ydCB7IG1ha2VUb2RvTGlzdENhcmRWaWV3IH0gZnJvbSAnLi9lbGVtZW50cy9tYWtlVG9kb0xpc3RDYXJkVmlldy5qcyc7XG5pbXBvcnQgeyBpc1RvZG9MaXN0Q2FyZFZpZXdFeGlzdCB9IGZyb20gJy4vaXNDb21wbGV0ZWQuanMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQuanMnO1xuaW1wb3J0IHsgYWRkVG9kbyB9IGZyb20gJy4vYWRkVG9kby5qcyc7XG5cbmNvbnN0IGRlbGV0ZVRvZG9MaXN0Q2FyZFZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9MaXN0Q2FyZFZpZXcgPSBnZXQudG9kb0xpc3RDYXJkVmlldygpO1xuICB0b2RvTGlzdENhcmRWaWV3LnJlbW92ZSgpO1xufVxuXG5jb25zdCBzaG93VG9kb0xpc3RDYXJkVmlldyA9IChjYXRlZ29yeSkgPT4ge1xuICBpZiAoaXNUb2RvTGlzdENhcmRWaWV3RXhpc3QoKSkge1xuICAgIGRlbGV0ZVRvZG9MaXN0Q2FyZFZpZXcoKTtcbiAgfVxuXG4gIGNvbnN0IHRvZG9MaXN0Q2FyZFZpZXcgPSBtYWtlVG9kb0xpc3RDYXJkVmlldyhjYXRlZ29yeSk7XG5cbiAgY29uc3QgY2FyZFZpZXdDb250YWluZXIgPSBnZXQuY2FyZFZpZXdDb250YWluZXIoKTtcbiAgY2FyZFZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xpc3RDYXJkVmlldyk7XG59XG5cbmNvbnN0IGNoYW5nZVRvZG9JdGVtVGl0bGUgPSAodGl0bGUsIHRvZG9OdW1iZXIpID0+IHtcbiAgY29uc3QgdG9kb0xpc3RNYWluUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJycpXG59XG5cbmNvbnN0IFRvZG9MaXN0Q2FyZFZpZXcgPSAoKSA9PiB7XG4gIFxuICByZXR1cm4ge1xuICAgIGFkZFRvZG8sXG4gICAgY2hhbmdlVG9kb0l0ZW1UaXRsZSxcbiAgICBzaG93VG9kb0xpc3RDYXJkVmlld1xuICB9XG59XG5cbmNvbnN0IHRvZG9MaXN0Q2FyZFZpZXcgPSBUb2RvTGlzdENhcmRWaWV3KCk7XG5cbmV4cG9ydCB7IHRvZG9MaXN0Q2FyZFZpZXcgfTsiLCJjb25zdCB1blN0cmlrZVRocm91Z2hUaXRsZSA9ICh0b2RvSXRlbSkgPT4ge1xuICBjb25zdCB0b2RvVGl0bGUgPSB0b2RvSXRlbS5xdWVyeVNlbGVjdG9yKCcuVG9kb0l0ZW0tdGl0bGUnKTtcbiAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ1RvZG9JdGVtLXRpdGxlLWNoZWNrZWQnKTtcbn1cblxuY29uc3QgY2hhbmdlVG9Ob3RDb21wbGV0ZWRNYXJrZXIgPSAodG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgY2hlY2tNYXJrZXIgPSB0b2RvSXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2stbWFya2VyJyk7XG4gIGNoZWNrTWFya2VyLmNsYXNzTmFtZSA9ICdmYXIgZmEtY2lyY2xlIGNoZWNrLW1hcmtlcic7XG4gIGNoZWNrTWFya2VyLmlkID0gJ25vdENvbXBsZXRlZE1hcmtlcic7XG59XG5cbmNvbnN0IGRlbGV0ZURlbGV0ZUJ0biA9ICh0b2RvSXRlbSkgPT4ge1xuICBjb25zdCBkZWxldGVCdG4gPSB0b2RvSXRlbS5xdWVyeVNlbGVjdG9yKCcuVG9kb0l0ZW0tZGVsZXRlLWJ0bicpO1xuICBkZWxldGVCdG4ucmVtb3ZlKCk7XG59XG5cbmNvbnN0IGJyaWdodGVuVG9kb0l0ZW0gPSAodG9kb0l0ZW0pID0+IHtcbiAgdG9kb0l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnVG9kb0l0ZW0tY2hlY2tlZCcpO1xufVxuXG5jb25zdCB1bmRvQ29tcGxldGVkRGlzcGxheSA9ICh0b2RvSXRlbSkgPT4ge1xuICBicmlnaHRlblRvZG9JdGVtKHRvZG9JdGVtKTtcbiAgY2hhbmdlVG9Ob3RDb21wbGV0ZWRNYXJrZXIodG9kb0l0ZW0pO1xuICB1blN0cmlrZVRocm91Z2hUaXRsZSh0b2RvSXRlbSk7XG4gIGRlbGV0ZURlbGV0ZUJ0bih0b2RvSXRlbSk7XG59XG5cbmV4cG9ydCB7IHVuZG9Db21wbGV0ZWREaXNwbGF5IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==