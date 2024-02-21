/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    position: relative;\n    color: white;\n    background-color: rgb(8, 49, 76);\n    border: 10px solid gray;\n    min-height: 100vh;\n}\n\n#title {\n    font-size: max(5vw, 50px);\n    padding: 10px 0 0 0;\n    text-align: center;\n}\n\n#setup {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n#setup, #passing-screen {\n    position: absolute;\n    background-color: rgb(0 90 117 / 98%);\n    height: 100%;\n    width: 90%;\n    transform: translateX(5%);\n    border-radius: 20px;\n}  \n\n#passing-screen {\n    display: grid;\n    grid-template-columns: 1fr;\n    align-content: center;\n    justify-items: center;\n    top: 0;\n    left: 0;\n}\n\n#passing-screen h1 {\n    font-size: max(5vw, 50px);\n    color: rgb(8, 49, 76);\n}\n\n#passing-screen.p1 h1 {\n    color: red;\n}\n\n#passing-screen p {\n    font-size: max(3vw, 25px);\n}\n\n#setup .left {\n    width: 60%;\n}\n\n#instructions {\n    font-size: max(2vw, 15px);\n    font-weight: bold;\n}\n\n.right {\n    padding: 10%;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n#drag-ships {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 15px;\n    max-height: max-content;\n}\n\n#player-board, #enemy-board, #placement-board, .ship-container {\n    display: flex;\n    height: max-content;\n    width: max-content;\n}\n\n#player-board, #enemy-board, #placement-board{\n    margin-bottom: 2vw;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n\n.ships-remaining {\n    font-size: max(2vw, 15px);\n}\n\n.ship-container p::before, .small p::before {\n    content: 'x';\n}\n\n.ship-container .ship .cell, .ship.moveable .cell {\n    cursor: grabbing;\n}\n\n.ship.moveable {\n    transform: translateX(-1px) translateY(-1px);\n    overflow: visible;\n}\n\n#setting-buttons {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: 1fr 2fr;\n    height: 10vw;\n    gap: 5px;\n}\n\n#setting-buttons button {\n    padding: 0 5px;\n    border-radius: 15px;\n    min-width: max-content;\n    cursor: pointer;\n    font-size: max(2vw, 15px);\n    font-weight: bold;\n    background-color: #3F5F7D;\n    color: white;\n}\n\n#random {\n    grid-column: 1/3;\n}\n\n#rotate {\n    grid-column: 3/5;\n}\n\n#clear {\n    grid-column: 5/-1;\n}\n\n#start {\n    grid-column: 1/4;\n}\n\n#mode {\n    grid-column: 4/-1;\n}\n\n.drag-over.available, #enemy-board .cell:hover {\n    background-color: rgb(0 0 0 / 40%);\n}\n\n#enemy-board .cell:hover {\n    cursor: pointer;\n}\n\n.ship.hide, #setup.hide, #setup .hide {\n    display: none;\n}\n\n.rotate {\n    display: flex;\n    width: max-content;\n    margin-bottom: 1vw;\n}\n\n#cancel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-height: 30px;\n    min-width: 40px;\n    border-radius: 15px;\n    height: 4vw;\n    width: 5wv;\n    cursor: pointer;\n}\n\n#boards {\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    justify-items: center;\n}\n\n.row {\n    display: flex;\n    flex-direction: column;\n}\n\n.cell {\n    min-width: 20px;\n    min-height: 20px;\n    font-size: max(2vw, 15px);\n    height: 2.5vw;\n    width: 2.5vw;\n    border: 1px solid black;\n    background: transparent;\n    color: white;\n    font-weight: bold;\n}\n\n.coord {\n    border: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#player-board .ship, #enemy-board .ship.hit, #setup .ship, .ships .ship {\n    color: red;\n    background-color: rgb(97, 97, 97);\n}\n\n.small {\n    display: flex;\n    font-size: max(1.5vw, 10px);\n}\n\n.small .cell {\n    min-width: 10px;\n    min-height: 10px;\n    width: 1.5vw;\n    height: 1.5vw;\n}\n\n.ships {\n    display: flex;\n    flex-direction: column;\n}\n\n.ship.sunk .cell {\n    background-color: rgb(148, 148, 148);\n    border: 1px solid rgb(100, 100, 100);\n}\n\n#hud {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px 25px;\n    gap: 5px;\n}\n\n#hud * {\n    font-size: max(2.5vw, 15px);\n}\n\n#hud p {\n    color: #005A75;\n}\n\n#hud p.p1 {\n    color: red;\n}\n\n#hud button {\n    padding: 5px 10px;\n    border-radius: 10px;\n    font-weight: bold;\n    cursor: pointer;\n    background-color: #3F5F7D;\n    color: white;\n}\n\n@media(max-width: 650px) {\n    #setup {\n        grid-template-columns: 1fr;\n    }\n    #setup .right {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    #settings-buttons {\n        grid-template-columns: 1fr;\n    }\n   \n    #random {\n        grid-column: 1/-1;\n    }\n\n    #rotate {\n        grid-column: 1/-1;\n    }\n\n    #clear {\n        grid-column: 1/-1;\n    }\n\n    #start {\n        grid-column: 1/-1;\n    }\n\n    #mode {\n        grid-column: 1/-1;\n    }\n}\n\n@media(max-width: 560px) {\n    #boards {\n        grid-template-columns: 1fr;\n        align-items: center;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    position: relative;\n    color: white;\n    background-color: rgb(8, 49, 76);\n    border: 10px solid gray;\n    min-height: 100vh;\n}\n\n#title {\n    font-size: max(5vw, 50px);\n    padding: 10px 0 0 0;\n    text-align: center;\n}\n\n#setup {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n#setup, #passing-screen {\n    position: absolute;\n    background-color: rgb(0 90 117 / 98%);\n    height: 100%;\n    width: 90%;\n    transform: translateX(5%);\n    border-radius: 20px;\n}  \n\n#passing-screen {\n    display: grid;\n    grid-template-columns: 1fr;\n    align-content: center;\n    justify-items: center;\n    top: 0;\n    left: 0;\n}\n\n#passing-screen h1 {\n    font-size: max(5vw, 50px);\n    color: rgb(8, 49, 76);\n}\n\n#passing-screen.p1 h1 {\n    color: red;\n}\n\n#passing-screen p {\n    font-size: max(3vw, 25px);\n}\n\n#setup .left {\n    width: 60%;\n}\n\n#instructions {\n    font-size: max(2vw, 15px);\n    font-weight: bold;\n}\n\n.right {\n    padding: 10%;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n#drag-ships {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 15px;\n    max-height: max-content;\n}\n\n#player-board, #enemy-board, #placement-board, .ship-container {\n    display: flex;\n    height: max-content;\n    width: max-content;\n}\n\n#player-board, #enemy-board, #placement-board{\n    margin-bottom: 2vw;\n    background: url('/src/background.jpg');\n}\n\n\n.ships-remaining {\n    font-size: max(2vw, 15px);\n}\n\n.ship-container p::before, .small p::before {\n    content: 'x';\n}\n\n.ship-container .ship .cell, .ship.moveable .cell {\n    cursor: grabbing;\n}\n\n.ship.moveable {\n    transform: translateX(-1px) translateY(-1px);\n    overflow: visible;\n}\n\n#setting-buttons {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: 1fr 2fr;\n    height: 10vw;\n    gap: 5px;\n}\n\n#setting-buttons button {\n    padding: 0 5px;\n    border-radius: 15px;\n    min-width: max-content;\n    cursor: pointer;\n    font-size: max(2vw, 15px);\n    font-weight: bold;\n    background-color: #3F5F7D;\n    color: white;\n}\n\n#random {\n    grid-column: 1/3;\n}\n\n#rotate {\n    grid-column: 3/5;\n}\n\n#clear {\n    grid-column: 5/-1;\n}\n\n#start {\n    grid-column: 1/4;\n}\n\n#mode {\n    grid-column: 4/-1;\n}\n\n.drag-over.available, #enemy-board .cell:hover {\n    background-color: rgb(0 0 0 / 40%);\n}\n\n#enemy-board .cell:hover {\n    cursor: pointer;\n}\n\n.ship.hide, #setup.hide, #setup .hide {\n    display: none;\n}\n\n.rotate {\n    display: flex;\n    width: max-content;\n    margin-bottom: 1vw;\n}\n\n#cancel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-height: 30px;\n    min-width: 40px;\n    border-radius: 15px;\n    height: 4vw;\n    width: 5wv;\n    cursor: pointer;\n}\n\n#boards {\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    justify-items: center;\n}\n\n.row {\n    display: flex;\n    flex-direction: column;\n}\n\n.cell {\n    min-width: 20px;\n    min-height: 20px;\n    font-size: max(2vw, 15px);\n    height: 2.5vw;\n    width: 2.5vw;\n    border: 1px solid black;\n    background: transparent;\n    color: white;\n    font-weight: bold;\n}\n\n.coord {\n    border: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#player-board .ship, #enemy-board .ship.hit, #setup .ship, .ships .ship {\n    color: red;\n    background-color: rgb(97, 97, 97);\n}\n\n.small {\n    display: flex;\n    font-size: max(1.5vw, 10px);\n}\n\n.small .cell {\n    min-width: 10px;\n    min-height: 10px;\n    width: 1.5vw;\n    height: 1.5vw;\n}\n\n.ships {\n    display: flex;\n    flex-direction: column;\n}\n\n.ship.sunk .cell {\n    background-color: rgb(148, 148, 148);\n    border: 1px solid rgb(100, 100, 100);\n}\n\n#hud {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px 25px;\n    gap: 5px;\n}\n\n#hud * {\n    font-size: max(2.5vw, 15px);\n}\n\n#hud p {\n    color: #005A75;\n}\n\n#hud p.p1 {\n    color: red;\n}\n\n#hud button {\n    padding: 5px 10px;\n    border-radius: 10px;\n    font-weight: bold;\n    cursor: pointer;\n    background-color: #3F5F7D;\n    color: white;\n}\n\n@media(max-width: 650px) {\n    #setup {\n        grid-template-columns: 1fr;\n    }\n    #setup .right {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    #settings-buttons {\n        grid-template-columns: 1fr;\n    }\n   \n    #random {\n        grid-column: 1/-1;\n    }\n\n    #rotate {\n        grid-column: 1/-1;\n    }\n\n    #clear {\n        grid-column: 1/-1;\n    }\n\n    #start {\n        grid-column: 1/-1;\n    }\n\n    #mode {\n        grid-column: 1/-1;\n    }\n}\n\n@media(max-width: 560px) {\n    #boards {\n        grid-template-columns: 1fr;\n        align-items: center;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domStuff.js":
/*!*************************!*\
  !*** ./src/domStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAliveShips": () => (/* binding */ createAliveShips),
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "showPassingScreen": () => (/* binding */ showPassingScreen)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup */ "./src/setup.js");




const createBoard = (board, enemy) => {
    let cells = [];
    let x;
    let y;
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    for (let i = -1; i < 10; i++) {
        let div = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(board, 'div', '.row');
        if (i > -1) cells[i] = [];
        for (let j = 0; j < 10; j++) {
            if (j == 0) {
               let letter = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(div, 'p', '.cell');
               letter.classList.add('coord');
               letter.textContent = letters[i]; 
            }  
            if (i == -1) {
               let letter = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(div, 'p', '.cell');
               letter.textContent = j + 1;
               letter.classList.add('coord');
            } 
            else {
               let cell = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(div, 'button', '.cell');
                cell.classList.add('available');
                cells[i].push(cell); 
                if (enemy) {
                    cell.addEventListener('click', () => ___WEBPACK_IMPORTED_MODULE_1__.game.handleTurn(i, j))
                }
            }
            
        }
    }

    function updateBoard (board, enemy, setup) {
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10; j++) {
                if (!setup) {
                    if (board.cells[i][j].hit == true) {
                        cells[i][j].classList.add('hit');
                        cells[i][j].textContent = 'x';
                    }
                    else {
                        cells[i][j].classList.remove('hit');
                        cells[i][j].textContent = '';
                    }
                }
                if (!enemy) {
                    (board.cells[i][j].ship > -1) ? cells[i][j].classList.add('ship'):
                        cells[i][j].classList.remove('ship');
                    (board.cells[i][j].ship == -2) ? cells[i][j].classList.add('available'):
                        cells[i][j].classList.remove('available');
                } 
                else {
                    (board.cells[i][j].ship > -1 && board.cells[i][j].hit == true) ? 
                        cells[i][j].classList.add('ship'):
                        cells[i][j].classList.remove('ship');
                }
            }
        }      
    }

    function addDropEvents () {
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10; j++) {
               cells[i][j].addEventListener('dragenter', dragEnter)
               cells[i][j].addEventListener('dragover', dragOver);
               cells[i][j].addEventListener('dragleave', dragLeave);
               cells[i][j].addEventListener('drop', () => drop(cells[i][j], i, j));
            }
        } 
    }

    function dragEnter(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }
    
    function dragOver(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }
    
    function dragLeave(e) {
        e.target.classList.remove('drag-over');
    }
    
    function drop(cell, i, j) {
        cell.classList.remove('drag-over');
        if (!(0,_setup__WEBPACK_IMPORTED_MODULE_2__.checkDrag)()) return;
        x = i;
        y = j;
        (0,_setup__WEBPACK_IMPORTED_MODULE_2__.placeShip)(x, y);
    }

    function createShipDiv (i, j, orientation, length) {
        let ship = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(cells[i][j], 'div', '.ship');
        ship.draggable = true;
        ship.classList.add('moveable');
        ship.addEventListener('dragstart', _setup__WEBPACK_IMPORTED_MODULE_2__.toggleDrag);
        ship.addEventListener('dragstart', () => {
            setTimeout(() => {
                ship.classList.add('hide');
            }, 0);
        })
        ship.addEventListener('dragstart', () => (0,_setup__WEBPACK_IMPORTED_MODULE_2__.saveVariables)(5 - length, length, ship, i, j))
        ship.addEventListener('dragend', _setup__WEBPACK_IMPORTED_MODULE_2__.toggleDrag);
        ship.addEventListener('dragend', _setup__WEBPACK_IMPORTED_MODULE_2__.solveOutOfBoundaries);
        for (let c = 0; c < length; c++) {
            let cell = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(ship, 'div', '.cell');
        }
        if (orientation == 'right') ship.classList.add('rotate');
    }

    function toggleClickEvents () {
        let disabled;
        (cells[0][0].disabled == true) ? disabled = false:
            disabled = true;
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10; j++) {
                cells[i][j].disabled = disabled;
            }
        }    
    }
    
    return { updateBoard, addDropEvents, createShipDiv, toggleClickEvents }
}

const createAliveShips = (div) => {
    let ps = [];
    let ships = [];
    let lenghts = [5, 4, 3, 2];
    for (let i = 0; i < 4; i++) {
        let container = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(div, 'div', '.small');
        let p = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'p');
        p.textContent = i + 1;
        ps.push(p);
        let ship = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'div', '.ship');
        ship.classList.add('rotate');
        for (let j = 0; j < 5 - i; j++) {
            let cell = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(ship, 'div', '.cell');
        }
        ships.push(ship);
    }

    function updateShips (board) {
        ps.forEach(p => p.textContent = 0);
        ships.forEach(ship => ship.classList.add('sunk'));
        board.ships.forEach(ship => {
            if (!ship.isSunk()) {
                let index;
                for (let i = 0; i < lenghts.length; i++) {
                    if (lenghts[i] == ship.cells.length) index = i;
                }
                ps[index].textContent = +ps[index].textContent + 1;
                ships[index].classList.remove('sunk'); 
            }
        })
    }

    return { updateShips }
}

function showPassingScreen(num) {
    let player;
    (num == 0) ? player = 'One': player = 'Two';    
    let body = document.querySelector('body');
    let div = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(body, 'div', '#passing-screen');
    (num == 0) ? div.classList.add('p1'): div.classList.remove('p1')
    let h2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(div, 'h1');
    h2.textContent = `Player ${player}'s Turn`;
    let p = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(div, 'p');
    p.textContent = 'Click to continue';
    div.addEventListener('click', () => div.remove());
}



/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addChildElement": () => (/* binding */ addChildElement),
/* harmony export */   "hideContents": () => (/* binding */ hideContents),
/* harmony export */   "restoreContents": () => (/* binding */ restoreContents)
/* harmony export */ });
const addChildElement = (parent, element, css) => {
    let elm = document.createElement(`${element}`);
    parent.appendChild(elm); 
    if (css != undefined) {
        if (css[0] == '.' )
        elm.className = css.substr(1);
        else if (css[0] == '#')
        elm.id = css.substr(1);
    }

    return elm;
}

function hideContents (div) {
    for (let i=0; i<div.childNodes.length; i++) {
        div.childNodes[i].classList.add('hide');
    }
}

function restoreContents (div) {
    for (let i=0; i<div.childNodes.length; i++) {
        div.childNodes[i].classList.remove('hide');
    }
}




/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _hud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hud */ "./src/hud.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");




const startGame = () => {
    let over = false;
    let players = [___WEBPACK_IMPORTED_MODULE_1__.p1, ___WEBPACK_IMPORTED_MODULE_1__.p2];
    let boards = [___WEBPACK_IMPORTED_MODULE_1__.p1Gameboard, ___WEBPACK_IMPORTED_MODULE_1__.p2Gameboard];
    let currentP = 0;
    let currentB = 1;
    ___WEBPACK_IMPORTED_MODULE_1__.p1Gameboard.placeShipsRandomly();
    ___WEBPACK_IMPORTED_MODULE_1__.playerBoard.updateBoard(___WEBPACK_IMPORTED_MODULE_1__.p1Gameboard, false, false);

    ___WEBPACK_IMPORTED_MODULE_1__.p2Gameboard.placeShipsRandomly();
    ___WEBPACK_IMPORTED_MODULE_1__.enemyBoard.updateBoard(___WEBPACK_IMPORTED_MODULE_1__.p2Gameboard, true, false);

    function handleTurn(x, y) {
        if (over) return;
        if (players[currentP].brain == 'human') {
            let played = players[currentP].takeTurn(x, y, boards[currentB]);
            if (played) {
                ___WEBPACK_IMPORTED_MODULE_1__.enemyShips.updateShips(boards[currentB]);
                ___WEBPACK_IMPORTED_MODULE_1__.enemyBoard.updateBoard(boards[currentB], true, false);
                over = checkWinner();
                
                if (___WEBPACK_IMPORTED_MODULE_1__.pvp == true) {
                    players = [___WEBPACK_IMPORTED_MODULE_1__.p1, ___WEBPACK_IMPORTED_MODULE_1__.p2];
                    ___WEBPACK_IMPORTED_MODULE_1__.enemyBoard.toggleClickEvents();
                    setTimeout(() => { 
                        changeTurns();
                        if (!over) {
                            (0,_domStuff__WEBPACK_IMPORTED_MODULE_2__.showPassingScreen)(currentP);
                            (0,_hud__WEBPACK_IMPORTED_MODULE_0__.updateMessage)(currentP);
                        }                        
                        ___WEBPACK_IMPORTED_MODULE_1__.playerShips.updateShips(boards[currentP]);
                        ___WEBPACK_IMPORTED_MODULE_1__.playerBoard.updateBoard(boards[currentP], false, false);
                        ___WEBPACK_IMPORTED_MODULE_1__.enemyShips.updateShips(boards[currentB]);
                        ___WEBPACK_IMPORTED_MODULE_1__.enemyBoard.updateBoard(boards[currentB], true, false);
                        ___WEBPACK_IMPORTED_MODULE_1__.enemyBoard.toggleClickEvents();
                    }, 1000)
                }
                else {
                    changeTurns();
                    (0,_hud__WEBPACK_IMPORTED_MODULE_0__.updateMessage)(currentP);
                    handleTurn();
                } 
            }
        }
        else {
            ___WEBPACK_IMPORTED_MODULE_1__.enemyBoard.toggleClickEvents();
            setTimeout(() => {
                players[currentP].takeComputerTurn(boards[currentB]);
                ___WEBPACK_IMPORTED_MODULE_1__.playerShips.updateShips(boards[currentB]);
                ___WEBPACK_IMPORTED_MODULE_1__.playerBoard.updateBoard(boards[currentB], false, false);
                over = checkWinner();
                changeTurns();
                (0,_hud__WEBPACK_IMPORTED_MODULE_0__.updateMessage)(currentP);
                ___WEBPACK_IMPORTED_MODULE_1__.enemyBoard.toggleClickEvents();
            }, 1000)
        }
        if (over) {
            (0,_hud__WEBPACK_IMPORTED_MODULE_0__.displayWinner)(currentB);
        }
    }

    function checkWinner () {
        if (boards[currentB].areAllSunk()) {
            console.log({winner: players[currentP]});
            return true;
        } 
        else return false;
    }

    function changeTurns() {
        if (currentP == 0) {
            currentP = 1;
            currentB = 0;
        }
        else {
            currentP = 0;
            currentB = 1;
        }
    }
    
    function reStart () {
        ___WEBPACK_IMPORTED_MODULE_1__.playerBoard.updateBoard(___WEBPACK_IMPORTED_MODULE_1__.p1Gameboard, false, false);
        ___WEBPACK_IMPORTED_MODULE_1__.enemyBoard.updateBoard(___WEBPACK_IMPORTED_MODULE_1__.p2Gameboard, true, false);
        ___WEBPACK_IMPORTED_MODULE_1__.playerShips.updateShips(___WEBPACK_IMPORTED_MODULE_1__.p1Gameboard);
        ___WEBPACK_IMPORTED_MODULE_1__.enemyShips.updateShips(___WEBPACK_IMPORTED_MODULE_1__.p2Gameboard);
        boards = [___WEBPACK_IMPORTED_MODULE_1__.p1Gameboard, ___WEBPACK_IMPORTED_MODULE_1__.p2Gameboard];
        currentP = 0;
        currentB = 1;
        ___WEBPACK_IMPORTED_MODULE_1__.p2.clearVariables();
        players = [___WEBPACK_IMPORTED_MODULE_1__.p1, ___WEBPACK_IMPORTED_MODULE_1__.p2];
        over = false;
        (0,_hud__WEBPACK_IMPORTED_MODULE_0__.updateMessage)(0);
    }
    
    return { handleTurn, reStart }
}



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/ships.js");


const gameboard = () => {
    let cells = [];
    let ships = [];

    clearBoard();

    function clearBoard () {
        for (let i = 0 ; i < 10 ; i++){
            cells[i] = [];
            for (let j = 0 ; j < 10 ; j++){
                cells[i][j] = {hit: false, ship: -2};
            }
        }
    }

    function placeShip(x, y, orientation, length) {
        let invalidCoord = false;
        invalidCoord = checkValidCoordinates(x, y, orientation, length);
        if (invalidCoord == true) return;
        let newShip = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.ship)(length);
        ships.push(newShip);
        newShip.coordinates = [];
        newShip.nextToCoord = [];
        newShip.direction = orientation;
        let auxX = x;
        let auxY = y;

        for (let i = 0; i < length ; i++) {
            cells[x][y].ship = i;
            newShip.coordinates[i] = [x, y];
            if (orientation == 'down') y++;
            else x++;
        }
        // fill adjacent cells with -1
        for (let i = 0; i < length + 2; i++) {
           
            if (orientation == 'down') {
                if(checkValidAuxCoord(auxX-1, auxY-1)){
                   cells[auxX-1][auxY-1].ship = -1; 
                   newShip.nextToCoord.push([auxX-1, auxY-1]);
                } 
                if(checkValidAuxCoord(auxX+1, auxY-1)){
                   cells[auxX+1][auxY-1].ship = -1; 
                   newShip.nextToCoord.push([auxX+1, auxY-1]);
                } 
                if(checkValidAuxCoord(auxX, auxY-1) && i == 0 || checkValidAuxCoord(auxX, auxY-1) && i == length+1){
                   cells[auxX][auxY-1].ship = -1; 
                   newShip.nextToCoord.push([auxX, auxY-1]);
                } 
            }
            else {
                if(checkValidAuxCoord(auxX-1, auxY-1)){
                   cells[auxX-1][auxY-1].ship = -1; 
                   newShip.nextToCoord.push([auxX-1, auxY-1]);
                } 
                if(checkValidAuxCoord(auxX-1, auxY+1)){
                   cells[auxX-1][auxY+1].ship = -1; 
                   newShip.nextToCoord.push([auxX-1, auxY+1]);
                } 
                if(checkValidAuxCoord(auxX-1, auxY) && i == 0 || checkValidAuxCoord(auxX-1, auxY) && i == length+1){
                   cells[auxX-1][auxY].ship = -1; 
                   newShip.nextToCoord.push([auxX-1, auxY]);
                }  
            }
            
            if (orientation == 'down') auxY++;
            else auxX++;
        }
    }

    function checkValidCoordinates(x, y, orientation, length) {
        if (x > 9 || x < 0 || y > 9 || y < 0) return true;
        if (orientation == 'down' && y+length > 10) return true;
        if (orientation == 'right' && x+length > 10) return true;
        for (let i = 0; i < length ; i++) {
            if(cells[x][y].ship > -2) return true;
            if (orientation == 'down') y++;
            else x++;
        }
        return false;
    }

    function checkValidAuxCoord (x, y) {
        if (x > 9 || x < 0 || y > 9 || y < 0) return false;
        else return true;    
    }

    function receiveAttack (x, y) {
        if (cells[x][y].hit == true) return false;
        cells[x][y].hit = true;
        for (let i = 0; i < ships.length; i++) {
            for (let j = 0; j < ships[i].coordinates.length; j++) {
                if (ships[i].coordinates[j][0] == x && ships[i].coordinates[j][1] == y) {
                    ships[i].hit(cells[x][y].ship);
                    markAdjacentCells(ships[i]);
                    break;
                }
            }
        }
        return true;
    }

    function markAdjacentCells(ship) {
        if (!ship.isSunk()) return;
        for (let i = 0; i < ship.nextToCoord.length; i++) {
            cells[ship.nextToCoord[i][0]][ship.nextToCoord[i][1]].hit = true;
        }
    }

    function areAllSunk() {
        for (let i = 0; i < ships.length; i++) {
            if (!ships[i].isSunk()) return false;
        }
        return true;
    }

    function placeShipsRandomly () {
        const shipLengths = [5, 4, 4, 3, 3, 3, 2, 2, 2, 2];
        const missingShips = [];
        for (let i = 0; i < shipLengths.length; i++) {
            let tries = 5 * (i+1);
            while (ships.length + missingShips.length <= i && tries > 0) {
                let x = Math.floor(Math.random()*10);
                let y = Math.floor(Math.random()*10);
                let orientation = pickRandomOrientation();
                placeShip(x, y, orientation, shipLengths[i]);
                tries--;
                if (tries == 0 && ships.length + missingShips.length <= i) missingShips.push(shipLengths[i]);
            }
        }

        if (missingShips.length > 0) solveMissingShips(missingShips);
    }

    function pickRandomOrientation () {
        let aux = Math.floor(Math.random()*2);
        if (aux == 1) return 'right';
        else return 'down';
    }

    function solveMissingShips (arr) {
        let available = [];
        let length = ships.length;
        for (let i = 0 ; i < 10 ; i++){
            for (let j = 0 ; j < 10 ; j++){
                if (cells[i][j].ship == -2) available.push([i, j]);
            }
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < available.length; j++) {
                placeShip(available[j][0], available[j][1], 'right', arr[i]);
                placeShip(available[j][0], available[j][1], 'down', arr[i]);
                if (length < ships.length) {
                    length = ships.length;
                    break;
                }
            }
        }

        if (ships.length != 10) {
            clearBoard(); 
            ships = [];
            placeShipsRandomly();
        }
    }

    function getShipIndex(x, y) {
        if (cells[x][y].ship > -1) {
            for (let i = 0; i < ships.length; i++) {
                if(ships[i].coordinates[cells[x][y].ship]) {
                    if (ships[i].coordinates[cells[x][y].ship][0] == x && ships[i].coordinates[cells[x][y].ship][1] == y) {
                        return i;                     
                    } 
                }
            }
        }
        return -1;
    }

    function killShip (x, y) {
        let index = getShipIndex(x, y);
        ships[index].coordinates.forEach(val => cells[val[0]][val[1]].ship = -2);
        ships[index].nextToCoord.forEach(val => cells[val[0]][val[1]].ship = -2);
        ships.splice(index, 1);
        for (let i = 0; i < ships.length; i++) {
            ships[i].nextToCoord.forEach(val => cells[val[0]][val[1]].ship = -1)
        }
    }

    function getShipOrientation (x, y) {
        let index = getShipIndex(x, y);
        return ships[index].direction;
    }

    function shipIsSunk (x, y) {
        let index = getShipIndex(x, y);
        return ships[index].isSunk();
    }

    return { placeShip, cells, receiveAttack, ships, areAllSunk, placeShipsRandomly,
            killShip, getShipOrientation, shipIsSunk }
}





/***/ }),

/***/ "./src/hud.js":
/*!********************!*\
  !*** ./src/hud.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayWinner": () => (/* binding */ displayWinner),
/* harmony export */   "runHud": () => (/* binding */ runHud),
/* harmony export */   "updateMessage": () => (/* binding */ updateMessage)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ "./src/setup.js");



let container = document.getElementById('hud');

let message;

function runHud() {
    message = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'p');
    message.textContent = `Player One's Turn`;
    message.classList.add('p1');
    let restart = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'button');
    restart.textContent = 'New Game';
    restart.addEventListener('click', _setup__WEBPACK_IMPORTED_MODULE_1__.displaySetup)
}

function updateMessage (num) {
    if (num == 1) {
        message.textContent =  `Player Two's Turn`;
        message.classList.remove('p1');
    }
    else {
        message.textContent = `Player One's Turn`;
        message.classList.add('p1');
    }       
}

function displayWinner (num) {
    if (num == 1) {
        message.textContent =  `Player Two has Won the Match!`;
        message.classList.remove('p1');
    }
    else {
        message.textContent = `Player One has Won the Match!`;
        message.classList.add('p1');
    } 
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeMode": () => (/* binding */ changeMode),
/* harmony export */   "enemyBoard": () => (/* binding */ enemyBoard),
/* harmony export */   "enemyShips": () => (/* binding */ enemyShips),
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "p1": () => (/* binding */ p1),
/* harmony export */   "p1Gameboard": () => (/* binding */ p1Gameboard),
/* harmony export */   "p2": () => (/* binding */ p2),
/* harmony export */   "p2Gameboard": () => (/* binding */ p2Gameboard),
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard),
/* harmony export */   "playerShips": () => (/* binding */ playerShips),
/* harmony export */   "pvp": () => (/* binding */ pvp),
/* harmony export */   "setP1": () => (/* binding */ setP1),
/* harmony export */   "setP2": () => (/* binding */ setP2)
/* harmony export */ });
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _hud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hud */ "./src/hud.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player */ "./src/player.js");








const player1 = document.getElementById('player-board');
const enemy = document.getElementById('enemy-board');
let playerBoard = (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createBoard)(player1, false);
let enemyBoard = (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createBoard)(enemy, true);
let playerShips = (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createAliveShips)(document.getElementById('player-ships'));
let enemyShips = (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createAliveShips)(document.getElementById('enemy-ships'));

let p1Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_4__.gameboard)();
let p2Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_4__.gameboard)();

let p1 = (0,_player__WEBPACK_IMPORTED_MODULE_6__.player)('Player 1', 'human');
let p2 = (0,_player__WEBPACK_IMPORTED_MODULE_6__.player)('Player 2', 'ai');
let pvp = false;

(0,_setup__WEBPACK_IMPORTED_MODULE_3__.runSetup)();
let game = (0,_game__WEBPACK_IMPORTED_MODULE_1__.startGame)();
(0,_hud__WEBPACK_IMPORTED_MODULE_5__.runHud)();


function setP1 (board) {
    p1Gameboard = board;
}

function setP2 (board) {
    p2Gameboard = board;
}

function changeMode () {
    game.reStart();
    (0,_setup__WEBPACK_IMPORTED_MODULE_3__.clearBoard)();
    if (pvp) {
        pvp = false;
        p2 = (0,_player__WEBPACK_IMPORTED_MODULE_6__.player)('Player 2', 'ai');  
    }  
    else {
        pvp = true;
        p2 = (0,_player__WEBPACK_IMPORTED_MODULE_6__.player)('Player 2', 'human'); 
    }
}





//add computer smart play
//add small delay for computer play
//setup for second player

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
const player = (name, brain) => {
    let hit = false;
    let secondHit = false;
    let i = 0;
    let direction;
    let tries = [];
    let tries2 = [];
    let foundShip = [];
    function takeTurn(x, y, gameboard) {
        return gameboard.receiveAttack(x, y);
    }

    function takeComputerTurn(gameboard) {
        if (hit) {
            trySmartPlay(gameboard);
        } 
        else {
            let x = Math.floor(Math.random()*10);
            let y = Math.floor(Math.random()*10);
            let validHit = gameboard.receiveAttack(x, y);
            while(validHit == false) {
                x = Math.floor(Math.random()*10);
                y = Math.floor(Math.random()*10);
                validHit = gameboard.receiveAttack(x, y);
            } 
            if (gameboard.cells[x][y].ship > -1) {
                hit = true;
                foundShip.push([x, y]);
            } 
        }
    }

    function trySmartPlay(gameboard) {
        if (!secondHit) {
            if (checkValidAuxCoord (foundShip[0][0] + 1, foundShip[0][1])) tries.push([foundShip[0][0] + 1, foundShip[0][1]]);
            if (checkValidAuxCoord (foundShip[0][0] - 1, foundShip[0][1])) tries.push([foundShip[0][0] - 1, foundShip[0][1]]);
            if (checkValidAuxCoord (foundShip[0][0], foundShip[0][1] + 1)) tries.push([foundShip[0][0], foundShip[0][1] + 1]);
            if (checkValidAuxCoord (foundShip[0][0], foundShip[0][1] - 1)) tries.push([foundShip[0][0], foundShip[0][1] - 1]);
            let validHit = gameboard.receiveAttack(tries[i][0], tries[i][1]);
            i++;
            while(validHit == false) {
                validHit = gameboard.receiveAttack(tries[i][0], tries[i][1]);
            i++;   
            }
            if (gameboard.cells[tries[i - 1][0]][tries[i - 1][1]].ship > -1) {
                secondHit = true;
                if (foundShip[0][0] == tries[i - 1][0]) {
                    direction = 'right';
                }
                else {
                    direction = 'down';
                }
                foundShip.push([tries[i - 1][0], tries[i - 1][1]]);
                i = 0;
            }
        }

        else {
            if (direction == 'right') {
                foundShip.forEach(coords => {
                    if (checkValidAuxCoord(coords[0], coords[1] + 1)) tries2.push([coords[0], coords[1] + 1]);
                    if (checkValidAuxCoord(coords[0], coords[1] - 1)) tries2.push([coords[0], coords[1] - 1]);
                })
            } 
            else {
                foundShip.forEach(coords => {
                    if (checkValidAuxCoord(coords[0] + 1, coords[1])) tries2.push([coords[0] + 1, coords[1]]);
                    if (checkValidAuxCoord(coords[0] - 1, coords[1])) tries2.push([coords[0] - 1, coords[1]]);
                })           
            }            
            let validHit = gameboard.receiveAttack(tries2[i][0], tries2[i][1]);
            i++;
            while(validHit == false) {
                validHit = gameboard.receiveAttack(tries2[i][0], tries2[i][1]);
                i++; 
            }
            if (gameboard.cells[tries2[i - 1][0]][tries2[i - 1][1]].ship > -1) {
                foundShip.push([tries2[i - 1][0], tries2[i - 1][1]]);
            }
        }
        
        if (gameboard.shipIsSunk(foundShip[0][0], foundShip[0][1])) {
            clearVariables();
        }
    }

    function checkValidAuxCoord (x, y) {
        if (x > 9 || x < 0 || y > 9 || y < 0) return false;
        else return true;    
    }

    function clearVariables() {
        hit = false;
        secondHit = false;
        tries = [];
        tries2 = [];
        i = 0;
        foundShip = [];
    }

    return { takeTurn, name, brain, takeComputerTurn, clearVariables }
}



/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDrag": () => (/* binding */ checkDrag),
/* harmony export */   "clearBoard": () => (/* binding */ clearBoard),
/* harmony export */   "displaySetup": () => (/* binding */ displaySetup),
/* harmony export */   "placeShip": () => (/* binding */ placeShip),
/* harmony export */   "runSetup": () => (/* binding */ runSetup),
/* harmony export */   "saveVariables": () => (/* binding */ saveVariables),
/* harmony export */   "solveOutOfBoundaries": () => (/* binding */ solveOutOfBoundaries),
/* harmony export */   "toggleDrag": () => (/* binding */ toggleDrag)
/* harmony export */ });
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");





const container = document.getElementById('setup');
let board;
let domBoard;
let placementBoard;
let index;
let length;
let orientation = 'down';
let remaining = 0;
let dragItem;
let drag = false;
let kill = false;
let ps = [];
let domShips = [];
let cancel;
let start;
let random;
let counter = 0;

function runSetup () {
    const left = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(container, 'div', '.left');
    board = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(left, 'div', '#placement-board');
    domBoard = (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createBoard)(board, false);
    domBoard.addDropEvents();
    placementBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.gameboard)();
    let instructions = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(left, 'p', '#instructions');
    instructions.textContent = 'Place your ships on the board by dragging them';

    const right = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(container, 'div', '.right');
    const ships = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(right, 'div', '#drag-ships');

    for (let i = 5; i > 1; i--) {
        let div = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(ships, 'div', '.ship-container');
        let p = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(div, 'p', '.ships-remaining');
        p.textContent = 6 - i;
        p.draggable = false;
        ps.push(p);
        let ship = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(div, 'div', '.ship');
        domShips.push(ship);
        ship.draggable = true;
        ship.addEventListener('dragstart', () => {
            (domShips[0].classList.contains('rotate')) ? orientation = 'right' : orientation = 'down';
            index = 5 - i;
            length = i;
            dragItem = ship;
            if (+p.textContent > 0) drag = true;
            kill = false;
        });
        ship.addEventListener('dragend', () => drag = false);
        for (let j = 0; j < i; j++) {
            let cell = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(ship, 'div', '.cell');
        }
    }

    const buttons = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(right, 'div', '#setting-buttons');

    random = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button', '#random');
    random.textContent = 'Random';
    random.addEventListener('click', pickRandom);

    const rotate = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button', '#rotate');
    rotate.textContent = 'Rotate';
    rotate.addEventListener('click', rotateShips);

    const clear = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button', '#clear');
    clear.textContent = 'Clear';
    clear.addEventListener('click', clearBoard);

    start = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button', '#start');
    start.textContent = 'Start';
    start.addEventListener('click', newGame);

    let mode = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button', '#mode');
    mode.textContent = 'Player Vs. Ai';
    mode.addEventListener('click', () => {
        if (___WEBPACK_IMPORTED_MODULE_3__.pvp) {
            mode.textContent = 'Player Vs. Ai';
            start.textContent = 'Start';
            start.addEventListener('click', newGame);
            start.removeEventListener('click', newPvPGame);
        }
        else {
            mode.textContent = 'Player Vs. Player';
            start.textContent = 'Set P1 Board'; 
            start.removeEventListener('click', newGame);
            start.addEventListener('click', newPvPGame);
        }
            
        (0,___WEBPACK_IMPORTED_MODULE_3__.changeMode)();
        toggleCancel();
    })

    cancel = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(container, 'button', '.hide');
    cancel.textContent = 'x';
    cancel.id = 'cancel';
    cancel.addEventListener('click', () => container.classList.toggle('hide'));
}

function placeShip (x, y) {
    if (placementBoard.ships.length >= 10) return;
    placementBoard.placeShip(x, y, orientation, length);
    domBoard.updateBoard(placementBoard, false, true);
    if(kill){
        dragItem.remove();
    }

    if (placementBoard.ships.length > remaining) {
        remaining++;
        ps[index].textContent = +ps[index].textContent - 1;
        domBoard.createShipDiv(x, y, orientation, length);
    }
    
    +ps[index].textContent == 0 ?
        domShips[index].draggable = false:
        domShips[index].draggable = true;

    kill = false;
    
}

function checkDrag () {
    return drag;
}

function toggleDrag () {
    drag == true ? drag = false: drag = true;
}

function saveVariables(ind, len, dra, x, y) {
    index = ind;
    length = len;
    kill = true;
    dragItem = dra;
    orientation = placementBoard.getShipOrientation(x, y);
    placementBoard.killShip(x, y);
    domBoard.updateBoard(placementBoard, false, true);  
    ps[index].textContent = +ps[index].textContent + 1; 
    remaining--;
    domShips[index].draggable = true; 
}

function pickRandom () {
    clearBoard();
    placementBoard.placeShipsRandomly();
    random.disabled = true;
    setTimeout(() => {
        domBoard.updateBoard(placementBoard, false, true);
        placementBoard.ships.forEach(ship => {
            domBoard.createShipDiv(ship.coordinates[0][0], ship.coordinates[0][1], ship.direction, ship.coordinates.length);
        });
        ps.forEach((p) => p.textContent = 0);
        random.disabled = false;
    }, 500);
    domShips.forEach((ship) => ship.draggable = false);
    remaining = 10;  
}

function clearBoard() {
    placementBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.gameboard)();
    let ships = Array.from(document.getElementsByClassName('moveable'));
    ships.forEach(ship => ship.remove());
    domBoard.updateBoard(placementBoard, false, true);
    for (let i = 0; i < ps.length; i ++) ps[i].textContent = i + 1;
    domShips.forEach(ship => ship.draggable = true);
    remaining = 0;
}

function rotateShips() {
    (domShips[0].classList.contains('rotate')) ? orientation = 'down' : orientation = 'right'; 
    domShips.forEach(ship => ship.classList.toggle('rotate'));
}

function solveOutOfBoundaries () {
    if (placementBoard.ships.length < remaining) {
        remaining--;
    }
    else dragItem.remove();
}

function newGame () {
    if (placementBoard.ships.length < 10 || ___WEBPACK_IMPORTED_MODULE_3__.pvp) return;
    let computer = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.gameboard)();
    computer.placeShipsRandomly();
    (0,___WEBPACK_IMPORTED_MODULE_3__.setP1)(placementBoard);
    (0,___WEBPACK_IMPORTED_MODULE_3__.setP2)(computer);
    ___WEBPACK_IMPORTED_MODULE_3__.game.reStart();
    container.classList.toggle('hide');
    cancel.disabled = false;
}

function displaySetup () {
    container.classList.toggle('hide');
    clearBoard();
    cancel.classList.remove('hide');
}

function toggleCancel() {
    (cancel.disabled == true) ? cancel.disabled = false: cancel.disabled = true;
}

function newPvPGame() {
    if (placementBoard.ships.length < 10 || !___WEBPACK_IMPORTED_MODULE_3__.pvp) return;
    if (counter == 0) {
        (0,___WEBPACK_IMPORTED_MODULE_3__.setP1)(placementBoard);
        counter++;
        (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.showPassingScreen)(1);
        start.textContent = 'Start';
    }
    else {
        (0,___WEBPACK_IMPORTED_MODULE_3__.setP2)(placementBoard);
        counter = 0;
        ___WEBPACK_IMPORTED_MODULE_3__.game.reStart();
        container.classList.toggle('hide');
        cancel.disabled = false;
        (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.showPassingScreen)(0);
        start.textContent = 'Set P1 Board';
    } 
    clearBoard();
}






/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
const ship = (length) => {

    let cells = [];
    let sunk = false;

    for (let i = 0 ; i < length ; i++) {
        cells[i] = '';
    }

    function hit (num) {
        cells[num] = 'hit';
        return cells;
    }

    function isSunk () {
        for (let i = 0 ; i < length ; i++) {
            if (cells[i] === '') {
                return sunk;
            }
        }
        sunk = true;
        return sunk;
    }

    return { hit, isSunk, cells }
}



/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26bb9ee76a127c75e132.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUss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Q0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbVN0dWZmLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2h1ZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2V0dXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDQ5LCA3Nik7XFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCBncmF5O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiBtYXgoNXZ3LCA1MHB4KTtcXG4gICAgcGFkZGluZzogMTBweCAwIDAgMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc2V0dXAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NldHVwLCAjcGFzc2luZy1zY3JlZW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDkwIDExNyAvIDk4JSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59ICBcXG5cXG4jcGFzc2luZy1zY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuI3Bhc3Npbmctc2NyZWVuIGgxIHtcXG4gICAgZm9udC1zaXplOiBtYXgoNXZ3LCA1MHB4KTtcXG4gICAgY29sb3I6IHJnYig4LCA0OSwgNzYpO1xcbn1cXG5cXG4jcGFzc2luZy1zY3JlZW4ucDEgaDEge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jcGFzc2luZy1zY3JlZW4gcCB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDN2dywgMjVweCk7XFxufVxcblxcbiNzZXR1cCAubGVmdCB7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcbiNpbnN0cnVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IG1heCgydncsIDE1cHgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgcGFkZGluZzogMTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2RyYWctc2hpcHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG59XFxuXFxuI3BsYXllci1ib2FyZCwgI2VuZW15LWJvYXJkLCAjcGxhY2VtZW50LWJvYXJkLCAuc2hpcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsICNlbmVteS1ib2FyZCwgI3BsYWNlbWVudC1ib2FyZHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5cXG4uc2hpcHMtcmVtYWluaW5nIHtcXG4gICAgZm9udC1zaXplOiBtYXgoMnZ3LCAxNXB4KTtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIHA6OmJlZm9yZSwgLnNtYWxsIHA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICd4JztcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIC5zaGlwIC5jZWxsLCAuc2hpcC5tb3ZlYWJsZSAuY2VsbCB7XFxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcblxcbi5zaGlwLm1vdmVhYmxlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpIHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4jc2V0dGluZy1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgICBoZWlnaHQ6IDEwdnc7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jc2V0dGluZy1idXR0b25zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDJ2dywgMTVweCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1RjdEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNyYW5kb20ge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4jcm90YXRlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNTtcXG59XFxuXFxuI2NsZWFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDUvLTE7XFxufVxcblxcbiNzdGFydCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxufVxcblxcbiNtb2RlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQvLTE7XFxufVxcblxcbi5kcmFnLW92ZXIuYXZhaWxhYmxlLCAjZW5lbXktYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0MCUpO1xcbn1cXG5cXG4jZW5lbXktYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwLmhpZGUsICNzZXR1cC5oaWRlLCAjc2V0dXAgLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxdnc7XFxufVxcblxcbiNjYW5jZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIG1pbi13aWR0aDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgaGVpZ2h0OiA0dnc7XFxuICAgIHdpZHRoOiA1d3Y7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2JvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAyZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jZWxsIHtcXG4gICAgbWluLXdpZHRoOiAyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IG1heCgydncsIDE1cHgpO1xcbiAgICBoZWlnaHQ6IDIuNXZ3O1xcbiAgICB3aWR0aDogMi41dnc7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvb3JkIHtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIC5zaGlwLCAjZW5lbXktYm9hcmQgLnNoaXAuaGl0LCAjc2V0dXAgLnNoaXAsIC5zaGlwcyAuc2hpcCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTcsIDk3KTtcXG59XFxuXFxuLnNtYWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiBtYXgoMS41dncsIDEwcHgpO1xcbn1cXG5cXG4uc21hbGwgLmNlbGwge1xcbiAgICBtaW4td2lkdGg6IDEwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxLjV2dztcXG4gICAgaGVpZ2h0OiAxLjV2dztcXG59XFxuXFxuLnNoaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXAuc3VuayAuY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMCwgMTAwLCAxMDApO1xcbn1cXG5cXG4jaHVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNodWQgKiB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDIuNXZ3LCAxNXB4KTtcXG59XFxuXFxuI2h1ZCBwIHtcXG4gICAgY29sb3I6ICMwMDVBNzU7XFxufVxcblxcbiNodWQgcC5wMSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbiNodWQgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjVGN0Q7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgI3NldHVwIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuICAgICNzZXR1cCAucmlnaHQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxuXFxuICAgICNzZXR0aW5ncy1idXR0b25zIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuICAgXFxuICAgICNyYW5kb20ge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIH1cXG5cXG4gICAgI3JvdGF0ZSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgfVxcblxcbiAgICAjY2xlYXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIH1cXG5cXG4gICAgI3N0YXJ0IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB9XFxuXFxuICAgICNtb2RlIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAgICNib2FyZHMge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJ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QUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtRQUMxQixtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCA0OSwgNzYpO1xcbiAgICBib3JkZXI6IDEwcHggc29saWQgZ3JheTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDV2dywgNTBweCk7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3NldHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZXR1cCwgI3Bhc3Npbmctc2NyZWVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCA5MCAxMTcgLyA5OCUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1JSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufSAgXFxuXFxuI3Bhc3Npbmctc2NyZWVuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbiNwYXNzaW5nLXNjcmVlbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDV2dywgNTBweCk7XFxuICAgIGNvbG9yOiByZ2IoOCwgNDksIDc2KTtcXG59XFxuXFxuI3Bhc3Npbmctc2NyZWVuLnAxIGgxIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI3Bhc3Npbmctc2NyZWVuIHAge1xcbiAgICBmb250LXNpemU6IG1heCgzdncsIDI1cHgpO1xcbn1cXG5cXG4jc2V0dXAgLmxlZnQge1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4jaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiBtYXgoMnZ3LCAxNXB4KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkcmFnLXNoaXBzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsICNlbmVteS1ib2FyZCwgI3BsYWNlbWVudC1ib2FyZCwgLnNoaXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZW1lbnQtYm9hcmR7XFxuICAgIG1hcmdpbi1ib3R0b206IDJ2dztcXG4gICAgYmFja2dyb3VuZDogdXJsKCcvc3JjL2JhY2tncm91bmQuanBnJyk7XFxufVxcblxcblxcbi5zaGlwcy1yZW1haW5pbmcge1xcbiAgICBmb250LXNpemU6IG1heCgydncsIDE1cHgpO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIgcDo6YmVmb3JlLCAuc21hbGwgcDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ3gnO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIgLnNoaXAgLmNlbGwsIC5zaGlwLm1vdmVhYmxlIC5jZWxsIHtcXG4gICAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuXFxuLnNoaXAubW92ZWFibGUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFweCkgdHJhbnNsYXRlWSgtMXB4KTtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbiNzZXR0aW5nLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICAgIGhlaWdodDogMTB2dztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNzZXR0aW5nLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiBtYXgoMnZ3LCAxNXB4KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjVGN0Q7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3JhbmRvbSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbiNyb3RhdGUge1xcbiAgICBncmlkLWNvbHVtbjogMy81O1xcbn1cXG5cXG4jY2xlYXIge1xcbiAgICBncmlkLWNvbHVtbjogNS8tMTtcXG59XFxuXFxuI3N0YXJ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG59XFxuXFxuI21vZGUge1xcbiAgICBncmlkLWNvbHVtbjogNC8tMTtcXG59XFxuXFxuLmRyYWctb3Zlci5hdmFpbGFibGUsICNlbmVteS1ib2FyZCAuY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQwJSk7XFxufVxcblxcbiNlbmVteS1ib2FyZCAuY2VsbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAuaGlkZSwgI3NldHVwLmhpZGUsICNzZXR1cCAuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDF2dztcXG59XFxuXFxuI2NhbmNlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgbWluLXdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDR2dztcXG4gICAgd2lkdGg6IDV3djtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDJmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBtaW4td2lkdGg6IDIwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDJ2dywgMTVweCk7XFxuICAgIGhlaWdodDogMi41dnc7XFxuICAgIHdpZHRoOiAyLjV2dztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29vcmQge1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQgLnNoaXAsICNlbmVteS1ib2FyZCAuc2hpcC5oaXQsICNzZXR1cCAuc2hpcCwgLnNoaXBzIC5zaGlwIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NywgOTcpO1xcbn1cXG5cXG4uc21hbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IG1heCgxLjV2dywgMTBweCk7XFxufVxcblxcbi5zbWFsbCAuY2VsbCB7XFxuICAgIG1pbi13aWR0aDogMTBweDtcXG4gICAgbWluLWhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEuNXZ3O1xcbiAgICBoZWlnaHQ6IDEuNXZ3O1xcbn1cXG5cXG4uc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcC5zdW5rIC5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxufVxcblxcbiNodWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI2h1ZCAqIHtcXG4gICAgZm9udC1zaXplOiBtYXgoMi41dncsIDE1cHgpO1xcbn1cXG5cXG4jaHVkIHAge1xcbiAgICBjb2xvcjogIzAwNUE3NTtcXG59XFxuXFxuI2h1ZCBwLnAxIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2h1ZCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNUY3RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgICAjc2V0dXAge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG4gICAgI3NldHVwIC5yaWdodCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIH1cXG5cXG4gICAgI3NldHRpbmdzLWJ1dHRvbnMge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG4gICBcXG4gICAgI3JhbmRvbSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgfVxcblxcbiAgICAjcm90YXRlIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB9XFxuXFxuICAgICNjbGVhciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgfVxcblxcbiAgICAjc3RhcnQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIH1cXG5cXG4gICAgI21vZGUge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhKG1heC13aWR0aDogNTYwcHgpIHtcXG4gICAgI2JvYXJkcyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZENoaWxkRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBwbGFjZVNoaXAsIGNoZWNrRHJhZywgdG9nZ2xlRHJhZywgc2F2ZVZhcmlhYmxlcywgc29sdmVPdXRPZkJvdW5kYXJpZXMgfSBmcm9tIFwiLi9zZXR1cFwiO1xuXG5jb25zdCBjcmVhdGVCb2FyZCA9IChib2FyZCwgZW5lbXkpID0+IHtcbiAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcbiAgICBsZXQgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGZvciAobGV0IGkgPSAtMTsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgbGV0IGRpdiA9IGFkZENoaWxkRWxlbWVudChib2FyZCwgJ2RpdicsICcucm93Jyk7XG4gICAgICAgIGlmIChpID4gLTEpIGNlbGxzW2ldID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgaWYgKGogPT0gMCkge1xuICAgICAgICAgICAgICAgbGV0IGxldHRlciA9IGFkZENoaWxkRWxlbWVudChkaXYsICdwJywgJy5jZWxsJyk7XG4gICAgICAgICAgICAgICBsZXR0ZXIuY2xhc3NMaXN0LmFkZCgnY29vcmQnKTtcbiAgICAgICAgICAgICAgIGxldHRlci50ZXh0Q29udGVudCA9IGxldHRlcnNbaV07IFxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBpZiAoaSA9PSAtMSkge1xuICAgICAgICAgICAgICAgbGV0IGxldHRlciA9IGFkZENoaWxkRWxlbWVudChkaXYsICdwJywgJy5jZWxsJyk7XG4gICAgICAgICAgICAgICBsZXR0ZXIudGV4dENvbnRlbnQgPSBqICsgMTtcbiAgICAgICAgICAgICAgIGxldHRlci5jbGFzc0xpc3QuYWRkKCdjb29yZCcpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAnYnV0dG9uJywgJy5jZWxsJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICBjZWxsc1tpXS5wdXNoKGNlbGwpOyBcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdhbWUuaGFuZGxlVHVybihpLCBqKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJvYXJkIChib2FyZCwgZW5lbXksIHNldHVwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghc2V0dXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmNlbGxzW2ldW2pdLmhpdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLnRleHRDb250ZW50ID0gJ3gnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZW5lbXkpIHtcbiAgICAgICAgICAgICAgICAgICAgKGJvYXJkLmNlbGxzW2ldW2pdLnNoaXAgPiAtMSkgPyBjZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgIChib2FyZC5jZWxsc1tpXVtqXS5zaGlwID09IC0yKSA/IGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5hZGQoJ2F2YWlsYWJsZScpOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LnJlbW92ZSgnYXZhaWxhYmxlJyk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKGJvYXJkLmNlbGxzW2ldW2pdLnNoaXAgPiAtMSAmJiBib2FyZC5jZWxsc1tpXVtqXS5oaXQgPT0gdHJ1ZSkgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGREcm9wRXZlbnRzICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpXG4gICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKCkgPT4gZHJvcChjZWxsc1tpXVtqXSwgaSwgaikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdFbnRlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnLW92ZXInKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJhZ0xlYXZlKGUpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1vdmVyJyk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRyb3AoY2VsbCwgaSwgaikge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuICAgICAgICBpZiAoIWNoZWNrRHJhZygpKSByZXR1cm47XG4gICAgICAgIHggPSBpO1xuICAgICAgICB5ID0gajtcbiAgICAgICAgcGxhY2VTaGlwKHgsIHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNoaXBEaXYgKGksIGosIG9yaWVudGF0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgbGV0IHNoaXAgPSBhZGRDaGlsZEVsZW1lbnQoY2VsbHNbaV1bal0sICdkaXYnLCAnLnNoaXAnKTtcbiAgICAgICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ21vdmVhYmxlJyk7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdG9nZ2xlRHJhZyk7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiBzYXZlVmFyaWFibGVzKDUgLSBsZW5ndGgsIGxlbmd0aCwgc2hpcCwgaSwgaikpXG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRvZ2dsZURyYWcpO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBzb2x2ZU91dE9mQm91bmRhcmllcyk7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gYWRkQ2hpbGRFbGVtZW50KHNoaXAsICdkaXYnLCAnLmNlbGwnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ3JpZ2h0Jykgc2hpcC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVDbGlja0V2ZW50cyAoKSB7XG4gICAgICAgIGxldCBkaXNhYmxlZDtcbiAgICAgICAgKGNlbGxzWzBdWzBdLmRpc2FibGVkID09IHRydWUpID8gZGlzYWJsZWQgPSBmYWxzZTpcbiAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgdXBkYXRlQm9hcmQsIGFkZERyb3BFdmVudHMsIGNyZWF0ZVNoaXBEaXYsIHRvZ2dsZUNsaWNrRXZlbnRzIH1cbn1cblxuY29uc3QgY3JlYXRlQWxpdmVTaGlwcyA9IChkaXYpID0+IHtcbiAgICBsZXQgcHMgPSBbXTtcbiAgICBsZXQgc2hpcHMgPSBbXTtcbiAgICBsZXQgbGVuZ2h0cyA9IFs1LCA0LCAzLCAyXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ2RpdicsICcuc21hbGwnKTtcbiAgICAgICAgbGV0IHAgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gaSArIDE7XG4gICAgICAgIHBzLnB1c2gocCk7XG4gICAgICAgIGxldCBzaGlwID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2RpdicsICcuc2hpcCcpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDUgLSBpOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gYWRkQ2hpbGRFbGVtZW50KHNoaXAsICdkaXYnLCAnLmNlbGwnKTtcbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNoaXBzIChib2FyZCkge1xuICAgICAgICBwcy5mb3JFYWNoKHAgPT4gcC50ZXh0Q29udGVudCA9IDApO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5jbGFzc0xpc3QuYWRkKCdzdW5rJykpO1xuICAgICAgICBib2FyZC5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ2h0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGVuZ2h0c1tpXSA9PSBzaGlwLmNlbGxzLmxlbmd0aCkgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwc1tpbmRleF0udGV4dENvbnRlbnQgPSArcHNbaW5kZXhdLnRleHRDb250ZW50ICsgMTtcbiAgICAgICAgICAgICAgICBzaGlwc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc3VuaycpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4geyB1cGRhdGVTaGlwcyB9XG59XG5cbmZ1bmN0aW9uIHNob3dQYXNzaW5nU2NyZWVuKG51bSkge1xuICAgIGxldCBwbGF5ZXI7XG4gICAgKG51bSA9PSAwKSA/IHBsYXllciA9ICdPbmUnOiBwbGF5ZXIgPSAnVHdvJzsgICAgXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgbGV0IGRpdiA9IGFkZENoaWxkRWxlbWVudChib2R5LCAnZGl2JywgJyNwYXNzaW5nLXNjcmVlbicpO1xuICAgIChudW0gPT0gMCkgPyBkaXYuY2xhc3NMaXN0LmFkZCgncDEnKTogZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3AxJylcbiAgICBsZXQgaDIgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAnaDEnKTtcbiAgICBoMi50ZXh0Q29udGVudCA9IGBQbGF5ZXIgJHtwbGF5ZXJ9J3MgVHVybmA7XG4gICAgbGV0IHAgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSAnQ2xpY2sgdG8gY29udGludWUnO1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpdi5yZW1vdmUoKSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUJvYXJkLCBjcmVhdGVBbGl2ZVNoaXBzLCBzaG93UGFzc2luZ1NjcmVlbiB9IiwiY29uc3QgYWRkQ2hpbGRFbGVtZW50ID0gKHBhcmVudCwgZWxlbWVudCwgY3NzKSA9PiB7XG4gICAgbGV0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudH1gKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxtKTsgXG4gICAgaWYgKGNzcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGNzc1swXSA9PSAnLicgKVxuICAgICAgICBlbG0uY2xhc3NOYW1lID0gY3NzLnN1YnN0cigxKTtcbiAgICAgICAgZWxzZSBpZiAoY3NzWzBdID09ICcjJylcbiAgICAgICAgZWxtLmlkID0gY3NzLnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxtO1xufVxuXG5mdW5jdGlvbiBoaWRlQ29udGVudHMgKGRpdikge1xuICAgIGZvciAobGV0IGk9MDsgaTxkaXYuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXYuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXN0b3JlQ29udGVudHMgKGRpdikge1xuICAgIGZvciAobGV0IGk9MDsgaTxkaXYuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXYuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7YWRkQ2hpbGRFbGVtZW50LCBoaWRlQ29udGVudHMsIHJlc3RvcmVDb250ZW50c307IiwiaW1wb3J0IHsgZGlzcGxheVdpbm5lciwgdXBkYXRlTWVzc2FnZSB9IGZyb20gXCIuL2h1ZFwiXG5pbXBvcnQgeyBwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZCwgcDFHYW1lYm9hcmQsIHAyR2FtZWJvYXJkLCBlbmVteVNoaXBzLCBwbGF5ZXJTaGlwcyxcbiAgICAgICAgcDEsIHAyLCBwdnAgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgc2hvd1Bhc3NpbmdTY3JlZW4gfSBmcm9tIFwiLi9kb21TdHVmZlwiO1xuXG5jb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgbGV0IG92ZXIgPSBmYWxzZTtcbiAgICBsZXQgcGxheWVycyA9IFtwMSwgcDJdO1xuICAgIGxldCBib2FyZHMgPSBbcDFHYW1lYm9hcmQsIHAyR2FtZWJvYXJkXTtcbiAgICBsZXQgY3VycmVudFAgPSAwO1xuICAgIGxldCBjdXJyZW50QiA9IDE7XG4gICAgcDFHYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgcGxheWVyQm9hcmQudXBkYXRlQm9hcmQocDFHYW1lYm9hcmQsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICBwMkdhbWVib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICBlbmVteUJvYXJkLnVwZGF0ZUJvYXJkKHAyR2FtZWJvYXJkLCB0cnVlLCBmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUdXJuKHgsIHkpIHtcbiAgICAgICAgaWYgKG92ZXIpIHJldHVybjtcbiAgICAgICAgaWYgKHBsYXllcnNbY3VycmVudFBdLmJyYWluID09ICdodW1hbicpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZWQgPSBwbGF5ZXJzW2N1cnJlbnRQXS50YWtlVHVybih4LCB5LCBib2FyZHNbY3VycmVudEJdKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgICBlbmVteVNoaXBzLnVwZGF0ZVNoaXBzKGJvYXJkc1tjdXJyZW50Ql0pO1xuICAgICAgICAgICAgICAgIGVuZW15Qm9hcmQudXBkYXRlQm9hcmQoYm9hcmRzW2N1cnJlbnRCXSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG92ZXIgPSBjaGVja1dpbm5lcigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChwdnAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzID0gW3AxLCBwMl07XG4gICAgICAgICAgICAgICAgICAgIGVuZW15Qm9hcmQudG9nZ2xlQ2xpY2tFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlVHVybnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3Zlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQYXNzaW5nU2NyZWVuKGN1cnJlbnRQKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVNZXNzYWdlKGN1cnJlbnRQKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBzLnVwZGF0ZVNoaXBzKGJvYXJkc1tjdXJyZW50UF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQudXBkYXRlQm9hcmQoYm9hcmRzW2N1cnJlbnRQXSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15U2hpcHMudXBkYXRlU2hpcHMoYm9hcmRzW2N1cnJlbnRCXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteUJvYXJkLnVwZGF0ZUJvYXJkKGJvYXJkc1tjdXJyZW50Ql0sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Qm9hcmQudG9nZ2xlQ2xpY2tFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVR1cm5zKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoY3VycmVudFApO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVUdXJuKCk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVuZW15Qm9hcmQudG9nZ2xlQ2xpY2tFdmVudHMoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBsYXllcnNbY3VycmVudFBdLnRha2VDb21wdXRlclR1cm4oYm9hcmRzW2N1cnJlbnRCXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcHMudXBkYXRlU2hpcHMoYm9hcmRzW2N1cnJlbnRCXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyQm9hcmQudXBkYXRlQm9hcmQoYm9hcmRzW2N1cnJlbnRCXSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvdmVyID0gY2hlY2tXaW5uZXIoKTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VUdXJucygpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoY3VycmVudFApO1xuICAgICAgICAgICAgICAgIGVuZW15Qm9hcmQudG9nZ2xlQ2xpY2tFdmVudHMoKTtcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG92ZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlXaW5uZXIoY3VycmVudEIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tXaW5uZXIgKCkge1xuICAgICAgICBpZiAoYm9hcmRzW2N1cnJlbnRCXS5hcmVBbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHt3aW5uZXI6IHBsYXllcnNbY3VycmVudFBdfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlVHVybnMoKSB7XG4gICAgICAgIGlmIChjdXJyZW50UCA9PSAwKSB7XG4gICAgICAgICAgICBjdXJyZW50UCA9IDE7XG4gICAgICAgICAgICBjdXJyZW50QiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50UCA9IDA7XG4gICAgICAgICAgICBjdXJyZW50QiA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcmVTdGFydCAoKSB7XG4gICAgICAgIHBsYXllckJvYXJkLnVwZGF0ZUJvYXJkKHAxR2FtZWJvYXJkLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBlbmVteUJvYXJkLnVwZGF0ZUJvYXJkKHAyR2FtZWJvYXJkLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHBsYXllclNoaXBzLnVwZGF0ZVNoaXBzKHAxR2FtZWJvYXJkKTtcbiAgICAgICAgZW5lbXlTaGlwcy51cGRhdGVTaGlwcyhwMkdhbWVib2FyZCk7XG4gICAgICAgIGJvYXJkcyA9IFtwMUdhbWVib2FyZCwgcDJHYW1lYm9hcmRdO1xuICAgICAgICBjdXJyZW50UCA9IDA7XG4gICAgICAgIGN1cnJlbnRCID0gMTtcbiAgICAgICAgcDIuY2xlYXJWYXJpYWJsZXMoKTtcbiAgICAgICAgcGxheWVycyA9IFtwMSwgcDJdO1xuICAgICAgICBvdmVyID0gZmFsc2U7XG4gICAgICAgIHVwZGF0ZU1lc3NhZ2UoMCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IGhhbmRsZVR1cm4sIHJlU3RhcnQgfVxufVxuXG5leHBvcnQgeyBzdGFydEdhbWUgfSIsImltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwc1wiO1xuXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IGNlbGxzID0gW107XG4gICAgbGV0IHNoaXBzID0gW107XG5cbiAgICBjbGVhckJvYXJkKCk7XG5cbiAgICBmdW5jdGlvbiBjbGVhckJvYXJkICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgMTAgOyBpKyspe1xuICAgICAgICAgICAgY2VsbHNbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IDEwIDsgaisrKXtcbiAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXSA9IHtoaXQ6IGZhbHNlLCBzaGlwOiAtMn07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoeCwgeSwgb3JpZW50YXRpb24sIGxlbmd0aCkge1xuICAgICAgICBsZXQgaW52YWxpZENvb3JkID0gZmFsc2U7XG4gICAgICAgIGludmFsaWRDb29yZCA9IGNoZWNrVmFsaWRDb29yZGluYXRlcyh4LCB5LCBvcmllbnRhdGlvbiwgbGVuZ3RoKTtcbiAgICAgICAgaWYgKGludmFsaWRDb29yZCA9PSB0cnVlKSByZXR1cm47XG4gICAgICAgIGxldCBuZXdTaGlwID0gc2hpcChsZW5ndGgpO1xuICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICBuZXdTaGlwLmNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQgPSBbXTtcbiAgICAgICAgbmV3U2hpcC5kaXJlY3Rpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgbGV0IGF1eFggPSB4O1xuICAgICAgICBsZXQgYXV4WSA9IHk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGNlbGxzW3hdW3ldLnNoaXAgPSBpO1xuICAgICAgICAgICAgbmV3U2hpcC5jb29yZGluYXRlc1tpXSA9IFt4LCB5XTtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnZG93bicpIHkrKztcbiAgICAgICAgICAgIGVsc2UgeCsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZpbGwgYWRqYWNlbnQgY2VsbHMgd2l0aCAtMVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCArIDI7IGkrKykge1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICBpZihjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WC0xLCBhdXhZLTEpKXtcbiAgICAgICAgICAgICAgICAgICBjZWxsc1thdXhYLTFdW2F1eFktMV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgtMSwgYXV4WS0xXSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZihjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WCsxLCBhdXhZLTEpKXtcbiAgICAgICAgICAgICAgICAgICBjZWxsc1thdXhYKzFdW2F1eFktMV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgrMSwgYXV4WS0xXSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZihjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WCwgYXV4WS0xKSAmJiBpID09IDAgfHwgY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgsIGF1eFktMSkgJiYgaSA9PSBsZW5ndGgrMSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WF1bYXV4WS0xXS5zaGlwID0gLTE7IFxuICAgICAgICAgICAgICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQucHVzaChbYXV4WCwgYXV4WS0xXSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLTEsIGF1eFktMSkpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFgtMV1bYXV4WS0xXS5zaGlwID0gLTE7IFxuICAgICAgICAgICAgICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQucHVzaChbYXV4WC0xLCBhdXhZLTFdKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLTEsIGF1eFkrMSkpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFgtMV1bYXV4WSsxXS5zaGlwID0gLTE7IFxuICAgICAgICAgICAgICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQucHVzaChbYXV4WC0xLCBhdXhZKzFdKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLTEsIGF1eFkpICYmIGkgPT0gMCB8fCBjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WC0xLCBhdXhZKSAmJiBpID09IGxlbmd0aCsxKXtcbiAgICAgICAgICAgICAgICAgICBjZWxsc1thdXhYLTFdW2F1eFldLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLTEsIGF1eFldKTtcbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdkb3duJykgYXV4WSsrO1xuICAgICAgICAgICAgZWxzZSBhdXhYKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkQ29vcmRpbmF0ZXMoeCwgeSwgb3JpZW50YXRpb24sIGxlbmd0aCkge1xuICAgICAgICBpZiAoeCA+IDkgfHwgeCA8IDAgfHwgeSA+IDkgfHwgeSA8IDApIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2Rvd24nICYmIHkrbGVuZ3RoID4gMTApIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ3JpZ2h0JyAmJiB4K2xlbmd0aCA+IDEwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGNlbGxzW3hdW3ldLnNoaXAgPiAtMikgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2Rvd24nKSB5Kys7XG4gICAgICAgICAgICBlbHNlIHgrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tWYWxpZEF1eENvb3JkICh4LCB5KSB7XG4gICAgICAgIGlmICh4ID4gOSB8fCB4IDwgMCB8fCB5ID4gOSB8fCB5IDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBlbHNlIHJldHVybiB0cnVlOyAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrICh4LCB5KSB7XG4gICAgICAgIGlmIChjZWxsc1t4XVt5XS5oaXQgPT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjZWxsc1t4XVt5XS5oaXQgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBzW2ldLmNvb3JkaW5hdGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBzW2ldLmNvb3JkaW5hdGVzW2pdWzBdID09IHggJiYgc2hpcHNbaV0uY29vcmRpbmF0ZXNbal1bMV0gPT0geSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwc1tpXS5oaXQoY2VsbHNbeF1beV0uc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtBZGphY2VudENlbGxzKHNoaXBzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcmtBZGphY2VudENlbGxzKHNoaXApIHtcbiAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSByZXR1cm47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5uZXh0VG9Db29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2VsbHNbc2hpcC5uZXh0VG9Db29yZFtpXVswXV1bc2hpcC5uZXh0VG9Db29yZFtpXVsxXV0uaGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFyZUFsbFN1bmsoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghc2hpcHNbaV0uaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXBzUmFuZG9tbHkgKCkge1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LCA0LCA0LCAzLCAzLCAzLCAyLCAyLCAyLCAyXTtcbiAgICAgICAgY29uc3QgbWlzc2luZ1NoaXBzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0cmllcyA9IDUgKiAoaSsxKTtcbiAgICAgICAgICAgIHdoaWxlIChzaGlwcy5sZW5ndGggKyBtaXNzaW5nU2hpcHMubGVuZ3RoIDw9IGkgJiYgdHJpZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBwaWNrUmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoeCwgeSwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGhzW2ldKTtcbiAgICAgICAgICAgICAgICB0cmllcy0tO1xuICAgICAgICAgICAgICAgIGlmICh0cmllcyA9PSAwICYmIHNoaXBzLmxlbmd0aCArIG1pc3NpbmdTaGlwcy5sZW5ndGggPD0gaSkgbWlzc2luZ1NoaXBzLnB1c2goc2hpcExlbmd0aHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1pc3NpbmdTaGlwcy5sZW5ndGggPiAwKSBzb2x2ZU1pc3NpbmdTaGlwcyhtaXNzaW5nU2hpcHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBpY2tSYW5kb21PcmllbnRhdGlvbiAoKSB7XG4gICAgICAgIGxldCBhdXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMik7XG4gICAgICAgIGlmIChhdXggPT0gMSkgcmV0dXJuICdyaWdodCc7XG4gICAgICAgIGVsc2UgcmV0dXJuICdkb3duJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzb2x2ZU1pc3NpbmdTaGlwcyAoYXJyKSB7XG4gICAgICAgIGxldCBhdmFpbGFibGUgPSBbXTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHNoaXBzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgMTAgOyBpKyspe1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgMTAgOyBqKyspe1xuICAgICAgICAgICAgICAgIGlmIChjZWxsc1tpXVtqXS5zaGlwID09IC0yKSBhdmFpbGFibGUucHVzaChbaSwgal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGF2YWlsYWJsZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcChhdmFpbGFibGVbal1bMF0sIGF2YWlsYWJsZVtqXVsxXSwgJ3JpZ2h0JywgYXJyW2ldKTtcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoYXZhaWxhYmxlW2pdWzBdLCBhdmFpbGFibGVbal1bMV0sICdkb3duJywgYXJyW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoIDwgc2hpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IHNoaXBzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaXBzLmxlbmd0aCAhPSAxMCkge1xuICAgICAgICAgICAgY2xlYXJCb2FyZCgpOyBcbiAgICAgICAgICAgIHNoaXBzID0gW107XG4gICAgICAgICAgICBwbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNoaXBJbmRleCh4LCB5KSB7XG4gICAgICAgIGlmIChjZWxsc1t4XVt5XS5zaGlwID4gLTEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihzaGlwc1tpXS5jb29yZGluYXRlc1tjZWxsc1t4XVt5XS5zaGlwXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHNbaV0uY29vcmRpbmF0ZXNbY2VsbHNbeF1beV0uc2hpcF1bMF0gPT0geCAmJiBzaGlwc1tpXS5jb29yZGluYXRlc1tjZWxsc1t4XVt5XS5zaGlwXVsxXSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTsgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtpbGxTaGlwICh4LCB5KSB7XG4gICAgICAgIGxldCBpbmRleCA9IGdldFNoaXBJbmRleCh4LCB5KTtcbiAgICAgICAgc2hpcHNbaW5kZXhdLmNvb3JkaW5hdGVzLmZvckVhY2godmFsID0+IGNlbGxzW3ZhbFswXV1bdmFsWzFdXS5zaGlwID0gLTIpO1xuICAgICAgICBzaGlwc1tpbmRleF0ubmV4dFRvQ29vcmQuZm9yRWFjaCh2YWwgPT4gY2VsbHNbdmFsWzBdXVt2YWxbMV1dLnNoaXAgPSAtMik7XG4gICAgICAgIHNoaXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNoaXBzW2ldLm5leHRUb0Nvb3JkLmZvckVhY2godmFsID0+IGNlbGxzW3ZhbFswXV1bdmFsWzFdXS5zaGlwID0gLTEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTaGlwT3JpZW50YXRpb24gKHgsIHkpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gZ2V0U2hpcEluZGV4KHgsIHkpO1xuICAgICAgICByZXR1cm4gc2hpcHNbaW5kZXhdLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaGlwSXNTdW5rICh4LCB5KSB7XG4gICAgICAgIGxldCBpbmRleCA9IGdldFNoaXBJbmRleCh4LCB5KTtcbiAgICAgICAgcmV0dXJuIHNoaXBzW2luZGV4XS5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwbGFjZVNoaXAsIGNlbGxzLCByZWNlaXZlQXR0YWNrLCBzaGlwcywgYXJlQWxsU3VuaywgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgICAgICAgICAga2lsbFNoaXAsIGdldFNoaXBPcmllbnRhdGlvbiwgc2hpcElzU3VuayB9XG59XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9XG5cbiIsImltcG9ydCB7IGFkZENoaWxkRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZGlzcGxheVNldHVwIH0gZnJvbSBcIi4vc2V0dXBcIlxuXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1ZCcpO1xuXG5sZXQgbWVzc2FnZTtcblxuZnVuY3Rpb24gcnVuSHVkKCkge1xuICAgIG1lc3NhZ2UgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAncCcpO1xuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgUGxheWVyIE9uZSdzIFR1cm5gO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgncDEnKTtcbiAgICBsZXQgcmVzdGFydCA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdidXR0b24nKTtcbiAgICByZXN0YXJ0LnRleHRDb250ZW50ID0gJ05ldyBHYW1lJztcbiAgICByZXN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVNldHVwKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVNZXNzYWdlIChudW0pIHtcbiAgICBpZiAobnVtID09IDEpIHtcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICBgUGxheWVyIFR3bydzIFR1cm5gO1xuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3AxJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYFBsYXllciBPbmUncyBUdXJuYDtcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdwMScpO1xuICAgIH0gICAgICAgXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXaW5uZXIgKG51bSkge1xuICAgIGlmIChudW0gPT0gMSkge1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gIGBQbGF5ZXIgVHdvIGhhcyBXb24gdGhlIE1hdGNoIWA7XG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncDEnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgUGxheWVyIE9uZSBoYXMgV29uIHRoZSBNYXRjaCFgO1xuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3AxJyk7XG4gICAgfSBcbn1cblxuZXhwb3J0IHsgcnVuSHVkLCB1cGRhdGVNZXNzYWdlLCBkaXNwbGF5V2lubmVyIH0iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZCwgY3JlYXRlQWxpdmVTaGlwcyB9IGZyb20gXCIuL2RvbVN0dWZmXCI7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY2xlYXJCb2FyZCwgcnVuU2V0dXAgfSBmcm9tIFwiLi9zZXR1cFwiO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBydW5IdWQgfSBmcm9tIFwiLi9odWRcIjtcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuY29uc3QgZW5lbXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5lbXktYm9hcmQnKTtcbmxldCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUJvYXJkKHBsYXllcjEsIGZhbHNlKTtcbmxldCBlbmVteUJvYXJkID0gY3JlYXRlQm9hcmQoZW5lbXksIHRydWUpO1xubGV0IHBsYXllclNoaXBzID0gY3JlYXRlQWxpdmVTaGlwcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXNoaXBzJykpO1xubGV0IGVuZW15U2hpcHMgPSBjcmVhdGVBbGl2ZVNoaXBzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmVteS1zaGlwcycpKTtcblxubGV0IHAxR2FtZWJvYXJkID0gZ2FtZWJvYXJkKCk7XG5sZXQgcDJHYW1lYm9hcmQgPSBnYW1lYm9hcmQoKTtcblxubGV0IHAxID0gcGxheWVyKCdQbGF5ZXIgMScsICdodW1hbicpO1xubGV0IHAyID0gcGxheWVyKCdQbGF5ZXIgMicsICdhaScpO1xubGV0IHB2cCA9IGZhbHNlO1xuXG5ydW5TZXR1cCgpO1xubGV0IGdhbWUgPSBzdGFydEdhbWUoKTtcbnJ1bkh1ZCgpO1xuXG5cbmZ1bmN0aW9uIHNldFAxIChib2FyZCkge1xuICAgIHAxR2FtZWJvYXJkID0gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIHNldFAyIChib2FyZCkge1xuICAgIHAyR2FtZWJvYXJkID0gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vZGUgKCkge1xuICAgIGdhbWUucmVTdGFydCgpO1xuICAgIGNsZWFyQm9hcmQoKTtcbiAgICBpZiAocHZwKSB7XG4gICAgICAgIHB2cCA9IGZhbHNlO1xuICAgICAgICBwMiA9IHBsYXllcignUGxheWVyIDInLCAnYWknKTsgIFxuICAgIH0gIFxuICAgIGVsc2Uge1xuICAgICAgICBwdnAgPSB0cnVlO1xuICAgICAgICBwMiA9IHBsYXllcignUGxheWVyIDInLCAnaHVtYW4nKTsgXG4gICAgfVxufVxuXG5cbmV4cG9ydCB7IGdhbWUsIHBsYXllckJvYXJkLCBlbmVteUJvYXJkLCBzZXRQMSwgc2V0UDIsIHAxR2FtZWJvYXJkLCBwMkdhbWVib2FyZCxcbiAgICAgICAgZW5lbXlTaGlwcywgcGxheWVyU2hpcHMsIHAxLCBwMiwgcHZwLCBjaGFuZ2VNb2RlIH1cblxuXG4vL2FkZCBjb21wdXRlciBzbWFydCBwbGF5XG4vL2FkZCBzbWFsbCBkZWxheSBmb3IgY29tcHV0ZXIgcGxheVxuLy9zZXR1cCBmb3Igc2Vjb25kIHBsYXllciIsImNvbnN0IHBsYXllciA9IChuYW1lLCBicmFpbikgPT4ge1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBsZXQgc2Vjb25kSGl0ID0gZmFsc2U7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBkaXJlY3Rpb247XG4gICAgbGV0IHRyaWVzID0gW107XG4gICAgbGV0IHRyaWVzMiA9IFtdO1xuICAgIGxldCBmb3VuZFNoaXAgPSBbXTtcbiAgICBmdW5jdGlvbiB0YWtlVHVybih4LCB5LCBnYW1lYm9hcmQpIHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRha2VDb21wdXRlclR1cm4oZ2FtZWJvYXJkKSB7XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIHRyeVNtYXJ0UGxheShnYW1lYm9hcmQpO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIGxldCB2YWxpZEhpdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICAgICAgd2hpbGUodmFsaWRIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgICAgICB2YWxpZEhpdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuY2VsbHNbeF1beV0uc2hpcCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3VuZFNoaXAucHVzaChbeCwgeV0pO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyeVNtYXJ0UGxheShnYW1lYm9hcmQpIHtcbiAgICAgICAgaWYgKCFzZWNvbmRIaXQpIHtcbiAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkQXV4Q29vcmQgKGZvdW5kU2hpcFswXVswXSArIDEsIGZvdW5kU2hpcFswXVsxXSkpIHRyaWVzLnB1c2goW2ZvdW5kU2hpcFswXVswXSArIDEsIGZvdW5kU2hpcFswXVsxXV0pO1xuICAgICAgICAgICAgaWYgKGNoZWNrVmFsaWRBdXhDb29yZCAoZm91bmRTaGlwWzBdWzBdIC0gMSwgZm91bmRTaGlwWzBdWzFdKSkgdHJpZXMucHVzaChbZm91bmRTaGlwWzBdWzBdIC0gMSwgZm91bmRTaGlwWzBdWzFdXSk7XG4gICAgICAgICAgICBpZiAoY2hlY2tWYWxpZEF1eENvb3JkIChmb3VuZFNoaXBbMF1bMF0sIGZvdW5kU2hpcFswXVsxXSArIDEpKSB0cmllcy5wdXNoKFtmb3VuZFNoaXBbMF1bMF0sIGZvdW5kU2hpcFswXVsxXSArIDFdKTtcbiAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkQXV4Q29vcmQgKGZvdW5kU2hpcFswXVswXSwgZm91bmRTaGlwWzBdWzFdIC0gMSkpIHRyaWVzLnB1c2goW2ZvdW5kU2hpcFswXVswXSwgZm91bmRTaGlwWzBdWzFdIC0gMV0pO1xuICAgICAgICAgICAgbGV0IHZhbGlkSGl0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sodHJpZXNbaV1bMF0sIHRyaWVzW2ldWzFdKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIHdoaWxlKHZhbGlkSGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRIaXQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0cmllc1tpXVswXSwgdHJpZXNbaV1bMV0pO1xuICAgICAgICAgICAgaSsrOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5jZWxsc1t0cmllc1tpIC0gMV1bMF1dW3RyaWVzW2kgLSAxXVsxXV0uc2hpcCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgc2Vjb25kSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRTaGlwWzBdWzBdID09IHRyaWVzW2kgLSAxXVswXSkge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3VuZFNoaXAucHVzaChbdHJpZXNbaSAtIDFdWzBdLCB0cmllc1tpIC0gMV1bMV1dKTtcbiAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgZm91bmRTaGlwLmZvckVhY2goY29vcmRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrVmFsaWRBdXhDb29yZChjb29yZHNbMF0sIGNvb3Jkc1sxXSArIDEpKSB0cmllczIucHVzaChbY29vcmRzWzBdLCBjb29yZHNbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkQXV4Q29vcmQoY29vcmRzWzBdLCBjb29yZHNbMV0gLSAxKSkgdHJpZXMyLnB1c2goW2Nvb3Jkc1swXSwgY29vcmRzWzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm91bmRTaGlwLmZvckVhY2goY29vcmRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrVmFsaWRBdXhDb29yZChjb29yZHNbMF0gKyAxLCBjb29yZHNbMV0pKSB0cmllczIucHVzaChbY29vcmRzWzBdICsgMSwgY29vcmRzWzFdXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkQXV4Q29vcmQoY29vcmRzWzBdIC0gMSwgY29vcmRzWzFdKSkgdHJpZXMyLnB1c2goW2Nvb3Jkc1swXSAtIDEsIGNvb3Jkc1sxXV0pO1xuICAgICAgICAgICAgICAgIH0pICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB2YWxpZEhpdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHRyaWVzMltpXVswXSwgdHJpZXMyW2ldWzFdKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIHdoaWxlKHZhbGlkSGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRIaXQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0cmllczJbaV1bMF0sIHRyaWVzMltpXVsxXSk7XG4gICAgICAgICAgICAgICAgaSsrOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuY2VsbHNbdHJpZXMyW2kgLSAxXVswXV1bdHJpZXMyW2kgLSAxXVsxXV0uc2hpcCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgZm91bmRTaGlwLnB1c2goW3RyaWVzMltpIC0gMV1bMF0sIHRyaWVzMltpIC0gMV1bMV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGdhbWVib2FyZC5zaGlwSXNTdW5rKGZvdW5kU2hpcFswXVswXSwgZm91bmRTaGlwWzBdWzFdKSkge1xuICAgICAgICAgICAgY2xlYXJWYXJpYWJsZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVmFsaWRBdXhDb29yZCAoeCwgeSkge1xuICAgICAgICBpZiAoeCA+IDkgfHwgeCA8IDAgfHwgeSA+IDkgfHwgeSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTsgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJWYXJpYWJsZXMoKSB7XG4gICAgICAgIGhpdCA9IGZhbHNlO1xuICAgICAgICBzZWNvbmRIaXQgPSBmYWxzZTtcbiAgICAgICAgdHJpZXMgPSBbXTtcbiAgICAgICAgdHJpZXMyID0gW107XG4gICAgICAgIGkgPSAwO1xuICAgICAgICBmb3VuZFNoaXAgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0YWtlVHVybiwgbmFtZSwgYnJhaW4sIHRha2VDb21wdXRlclR1cm4sIGNsZWFyVmFyaWFibGVzIH1cbn1cblxuZXhwb3J0IHsgcGxheWVyIH0iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZCwgc2hvd1Bhc3NpbmdTY3JlZW4gfSBmcm9tIFwiLi9kb21TdHVmZlwiO1xuaW1wb3J0IHsgYWRkQ2hpbGRFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGdhbWUsIHNldFAxLCBzZXRQMiwgcHZwLCBjaGFuZ2VNb2RlIH0gZnJvbSBcIi5cIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHVwJyk7XG5sZXQgYm9hcmQ7XG5sZXQgZG9tQm9hcmQ7XG5sZXQgcGxhY2VtZW50Qm9hcmQ7XG5sZXQgaW5kZXg7XG5sZXQgbGVuZ3RoO1xubGV0IG9yaWVudGF0aW9uID0gJ2Rvd24nO1xubGV0IHJlbWFpbmluZyA9IDA7XG5sZXQgZHJhZ0l0ZW07XG5sZXQgZHJhZyA9IGZhbHNlO1xubGV0IGtpbGwgPSBmYWxzZTtcbmxldCBwcyA9IFtdO1xubGV0IGRvbVNoaXBzID0gW107XG5sZXQgY2FuY2VsO1xubGV0IHN0YXJ0O1xubGV0IHJhbmRvbTtcbmxldCBjb3VudGVyID0gMDtcblxuZnVuY3Rpb24gcnVuU2V0dXAgKCkge1xuICAgIGNvbnN0IGxlZnQgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnZGl2JywgJy5sZWZ0Jyk7XG4gICAgYm9hcmQgPSBhZGRDaGlsZEVsZW1lbnQobGVmdCwgJ2RpdicsICcjcGxhY2VtZW50LWJvYXJkJyk7XG4gICAgZG9tQm9hcmQgPSBjcmVhdGVCb2FyZChib2FyZCwgZmFsc2UpO1xuICAgIGRvbUJvYXJkLmFkZERyb3BFdmVudHMoKTtcbiAgICBwbGFjZW1lbnRCb2FyZCA9IGdhbWVib2FyZCgpO1xuICAgIGxldCBpbnN0cnVjdGlvbnMgPSBhZGRDaGlsZEVsZW1lbnQobGVmdCwgJ3AnLCAnI2luc3RydWN0aW9ucycpO1xuICAgIGluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIHNoaXBzIG9uIHRoZSBib2FyZCBieSBkcmFnZ2luZyB0aGVtJztcblxuICAgIGNvbnN0IHJpZ2h0ID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2RpdicsICcucmlnaHQnKTtcbiAgICBjb25zdCBzaGlwcyA9IGFkZENoaWxkRWxlbWVudChyaWdodCwgJ2RpdicsICcjZHJhZy1zaGlwcycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDU7IGkgPiAxOyBpLS0pIHtcbiAgICAgICAgbGV0IGRpdiA9IGFkZENoaWxkRWxlbWVudChzaGlwcywgJ2RpdicsICcuc2hpcC1jb250YWluZXInKTtcbiAgICAgICAgbGV0IHAgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAncCcsICcuc2hpcHMtcmVtYWluaW5nJyk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSA2IC0gaTtcbiAgICAgICAgcC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgcHMucHVzaChwKTtcbiAgICAgICAgbGV0IHNoaXAgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAnZGl2JywgJy5zaGlwJyk7XG4gICAgICAgIGRvbVNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAoZG9tU2hpcHNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkgPyBvcmllbnRhdGlvbiA9ICdyaWdodCcgOiBvcmllbnRhdGlvbiA9ICdkb3duJztcbiAgICAgICAgICAgIGluZGV4ID0gNSAtIGk7XG4gICAgICAgICAgICBsZW5ndGggPSBpO1xuICAgICAgICAgICAgZHJhZ0l0ZW0gPSBzaGlwO1xuICAgICAgICAgICAgaWYgKCtwLnRleHRDb250ZW50ID4gMCkgZHJhZyA9IHRydWU7XG4gICAgICAgICAgICBraWxsID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiBkcmFnID0gZmFsc2UpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBhZGRDaGlsZEVsZW1lbnQoc2hpcCwgJ2RpdicsICcuY2VsbCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9ucyA9IGFkZENoaWxkRWxlbWVudChyaWdodCwgJ2RpdicsICcjc2V0dGluZy1idXR0b25zJyk7XG5cbiAgICByYW5kb20gPSBhZGRDaGlsZEVsZW1lbnQoYnV0dG9ucywgJ2J1dHRvbicsICcjcmFuZG9tJyk7XG4gICAgcmFuZG9tLnRleHRDb250ZW50ID0gJ1JhbmRvbSc7XG4gICAgcmFuZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGlja1JhbmRvbSk7XG5cbiAgICBjb25zdCByb3RhdGUgPSBhZGRDaGlsZEVsZW1lbnQoYnV0dG9ucywgJ2J1dHRvbicsICcjcm90YXRlJyk7XG4gICAgcm90YXRlLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gICAgcm90YXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcHMpO1xuXG4gICAgY29uc3QgY2xlYXIgPSBhZGRDaGlsZEVsZW1lbnQoYnV0dG9ucywgJ2J1dHRvbicsICcjY2xlYXInKTtcbiAgICBjbGVhci50ZXh0Q29udGVudCA9ICdDbGVhcic7XG4gICAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckJvYXJkKTtcblxuICAgIHN0YXJ0ID0gYWRkQ2hpbGRFbGVtZW50KGJ1dHRvbnMsICdidXR0b24nLCAnI3N0YXJ0Jyk7XG4gICAgc3RhcnQudGV4dENvbnRlbnQgPSAnU3RhcnQnO1xuICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3R2FtZSk7XG5cbiAgICBsZXQgbW9kZSA9IGFkZENoaWxkRWxlbWVudChidXR0b25zLCAnYnV0dG9uJywgJyNtb2RlJyk7XG4gICAgbW9kZS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgVnMuIEFpJztcbiAgICBtb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAocHZwKSB7XG4gICAgICAgICAgICBtb2RlLnRleHRDb250ZW50ID0gJ1BsYXllciBWcy4gQWknO1xuICAgICAgICAgICAgc3RhcnQudGV4dENvbnRlbnQgPSAnU3RhcnQnO1xuICAgICAgICAgICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdHYW1lKTtcbiAgICAgICAgICAgIHN0YXJ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHZQR2FtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RlLnRleHRDb250ZW50ID0gJ1BsYXllciBWcy4gUGxheWVyJztcbiAgICAgICAgICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1NldCBQMSBCb2FyZCc7IFxuICAgICAgICAgICAgc3RhcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdHYW1lKTtcbiAgICAgICAgICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHZQR2FtZSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBjaGFuZ2VNb2RlKCk7XG4gICAgICAgIHRvZ2dsZUNhbmNlbCgpO1xuICAgIH0pXG5cbiAgICBjYW5jZWwgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnYnV0dG9uJywgJy5oaWRlJyk7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ3gnO1xuICAgIGNhbmNlbC5pZCA9ICdjYW5jZWwnO1xuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJykpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXAgKHgsIHkpIHtcbiAgICBpZiAocGxhY2VtZW50Qm9hcmQuc2hpcHMubGVuZ3RoID49IDEwKSByZXR1cm47XG4gICAgcGxhY2VtZW50Qm9hcmQucGxhY2VTaGlwKHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpO1xuICAgIGRvbUJvYXJkLnVwZGF0ZUJvYXJkKHBsYWNlbWVudEJvYXJkLCBmYWxzZSwgdHJ1ZSk7XG4gICAgaWYoa2lsbCl7XG4gICAgICAgIGRyYWdJdGVtLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnRCb2FyZC5zaGlwcy5sZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIHBzW2luZGV4XS50ZXh0Q29udGVudCA9ICtwc1tpbmRleF0udGV4dENvbnRlbnQgLSAxO1xuICAgICAgICBkb21Cb2FyZC5jcmVhdGVTaGlwRGl2KHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpO1xuICAgIH1cbiAgICBcbiAgICArcHNbaW5kZXhdLnRleHRDb250ZW50ID09IDAgP1xuICAgICAgICBkb21TaGlwc1tpbmRleF0uZHJhZ2dhYmxlID0gZmFsc2U6XG4gICAgICAgIGRvbVNoaXBzW2luZGV4XS5kcmFnZ2FibGUgPSB0cnVlO1xuXG4gICAga2lsbCA9IGZhbHNlO1xuICAgIFxufVxuXG5mdW5jdGlvbiBjaGVja0RyYWcgKCkge1xuICAgIHJldHVybiBkcmFnO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEcmFnICgpIHtcbiAgICBkcmFnID09IHRydWUgPyBkcmFnID0gZmFsc2U6IGRyYWcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBzYXZlVmFyaWFibGVzKGluZCwgbGVuLCBkcmEsIHgsIHkpIHtcbiAgICBpbmRleCA9IGluZDtcbiAgICBsZW5ndGggPSBsZW47XG4gICAga2lsbCA9IHRydWU7XG4gICAgZHJhZ0l0ZW0gPSBkcmE7XG4gICAgb3JpZW50YXRpb24gPSBwbGFjZW1lbnRCb2FyZC5nZXRTaGlwT3JpZW50YXRpb24oeCwgeSk7XG4gICAgcGxhY2VtZW50Qm9hcmQua2lsbFNoaXAoeCwgeSk7XG4gICAgZG9tQm9hcmQudXBkYXRlQm9hcmQocGxhY2VtZW50Qm9hcmQsIGZhbHNlLCB0cnVlKTsgIFxuICAgIHBzW2luZGV4XS50ZXh0Q29udGVudCA9ICtwc1tpbmRleF0udGV4dENvbnRlbnQgKyAxOyBcbiAgICByZW1haW5pbmctLTtcbiAgICBkb21TaGlwc1tpbmRleF0uZHJhZ2dhYmxlID0gdHJ1ZTsgXG59XG5cbmZ1bmN0aW9uIHBpY2tSYW5kb20gKCkge1xuICAgIGNsZWFyQm9hcmQoKTtcbiAgICBwbGFjZW1lbnRCb2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICByYW5kb20uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb21Cb2FyZC51cGRhdGVCb2FyZChwbGFjZW1lbnRCb2FyZCwgZmFsc2UsIHRydWUpO1xuICAgICAgICBwbGFjZW1lbnRCb2FyZC5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgZG9tQm9hcmQuY3JlYXRlU2hpcERpdihzaGlwLmNvb3JkaW5hdGVzWzBdWzBdLCBzaGlwLmNvb3JkaW5hdGVzWzBdWzFdLCBzaGlwLmRpcmVjdGlvbiwgc2hpcC5jb29yZGluYXRlcy5sZW5ndGgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHMuZm9yRWFjaCgocCkgPT4gcC50ZXh0Q29udGVudCA9IDApO1xuICAgICAgICByYW5kb20uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9LCA1MDApO1xuICAgIGRvbVNoaXBzLmZvckVhY2goKHNoaXApID0+IHNoaXAuZHJhZ2dhYmxlID0gZmFsc2UpO1xuICAgIHJlbWFpbmluZyA9IDEwOyAgXG59XG5cbmZ1bmN0aW9uIGNsZWFyQm9hcmQoKSB7XG4gICAgcGxhY2VtZW50Qm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgICBsZXQgc2hpcHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vdmVhYmxlJykpO1xuICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiBzaGlwLnJlbW92ZSgpKTtcbiAgICBkb21Cb2FyZC51cGRhdGVCb2FyZChwbGFjZW1lbnRCb2FyZCwgZmFsc2UsIHRydWUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHMubGVuZ3RoOyBpICsrKSBwc1tpXS50ZXh0Q29udGVudCA9IGkgKyAxO1xuICAgIGRvbVNoaXBzLmZvckVhY2goc2hpcCA9PiBzaGlwLmRyYWdnYWJsZSA9IHRydWUpO1xuICAgIHJlbWFpbmluZyA9IDA7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVNoaXBzKCkge1xuICAgIChkb21TaGlwc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSA/IG9yaWVudGF0aW9uID0gJ2Rvd24nIDogb3JpZW50YXRpb24gPSAncmlnaHQnOyBcbiAgICBkb21TaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKSk7XG59XG5cbmZ1bmN0aW9uIHNvbHZlT3V0T2ZCb3VuZGFyaWVzICgpIHtcbiAgICBpZiAocGxhY2VtZW50Qm9hcmQuc2hpcHMubGVuZ3RoIDwgcmVtYWluaW5nKSB7XG4gICAgICAgIHJlbWFpbmluZy0tO1xuICAgIH1cbiAgICBlbHNlIGRyYWdJdGVtLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBuZXdHYW1lICgpIHtcbiAgICBpZiAocGxhY2VtZW50Qm9hcmQuc2hpcHMubGVuZ3RoIDwgMTAgfHwgcHZwKSByZXR1cm47XG4gICAgbGV0IGNvbXB1dGVyID0gZ2FtZWJvYXJkKCk7XG4gICAgY29tcHV0ZXIucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgc2V0UDEocGxhY2VtZW50Qm9hcmQpO1xuICAgIHNldFAyKGNvbXB1dGVyKTtcbiAgICBnYW1lLnJlU3RhcnQoKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIGNhbmNlbC5kaXNhYmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2V0dXAgKCkge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgY2xlYXJCb2FyZCgpO1xuICAgIGNhbmNlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNhbmNlbCgpIHtcbiAgICAoY2FuY2VsLmRpc2FibGVkID09IHRydWUpID8gY2FuY2VsLmRpc2FibGVkID0gZmFsc2U6IGNhbmNlbC5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIG5ld1B2UEdhbWUoKSB7XG4gICAgaWYgKHBsYWNlbWVudEJvYXJkLnNoaXBzLmxlbmd0aCA8IDEwIHx8ICFwdnApIHJldHVybjtcbiAgICBpZiAoY291bnRlciA9PSAwKSB7XG4gICAgICAgIHNldFAxKHBsYWNlbWVudEJvYXJkKTtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgICBzaG93UGFzc2luZ1NjcmVlbigxKTtcbiAgICAgICAgc3RhcnQudGV4dENvbnRlbnQgPSAnU3RhcnQnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2V0UDIocGxhY2VtZW50Qm9hcmQpO1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgZ2FtZS5yZVN0YXJ0KCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgIGNhbmNlbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBzaG93UGFzc2luZ1NjcmVlbigwKTtcbiAgICAgICAgc3RhcnQudGV4dENvbnRlbnQgPSAnU2V0IFAxIEJvYXJkJztcbiAgICB9IFxuICAgIGNsZWFyQm9hcmQoKTtcbn1cblxuXG5leHBvcnQgeyBydW5TZXR1cCwgcGxhY2VTaGlwLCBjaGVja0RyYWcsIHRvZ2dsZURyYWcsIHNhdmVWYXJpYWJsZXMsXG4gICAgICAgICBzb2x2ZU91dE9mQm91bmRhcmllcywgZGlzcGxheVNldHVwLCBjbGVhckJvYXJkfVxuXG4iLCJjb25zdCBzaGlwID0gKGxlbmd0aCkgPT4ge1xuXG4gICAgbGV0IGNlbGxzID0gW107XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICBjZWxsc1tpXSA9ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdCAobnVtKSB7XG4gICAgICAgIGNlbGxzW251bV0gPSAnaGl0JztcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3VuayAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNlbGxzW2ldID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdW5rO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1bmsgPSB0cnVlO1xuICAgICAgICByZXR1cm4gc3VuaztcbiAgICB9XG5cbiAgICByZXR1cm4geyBoaXQsIGlzU3VuaywgY2VsbHMgfVxufVxuXG5leHBvcnQgeyBzaGlwIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=