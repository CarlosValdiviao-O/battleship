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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    position: relative;\n    color: white;\n    background-color: rgb(8, 49, 76);\n    border: 10px solid gray;\n}\n\n#title {\n    font-size: max(5vw, 50px);\n    padding: 10px 0 0 0;\n    text-align: center;\n}\n\n#setup {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n#setup, #passing-screen {\n    position: absolute;\n    background-color: rgb(0 90 117 / 90%);\n    height: 90vh;\n    width: 90%;\n    transform: translateX(5%) translateY(5vh);\n    border-radius: 20px;\n}  \n\n#passing-screen {\n    display: grid;\n    grid-template-columns: 1fr;\n    align-content: center;\n    justify-items: center;\n    top: 0;\n    left: 0;\n}\n\n#passing-screen h1 {\n    font-size: max(5vw, 50px);\n    color: rgb(8, 49, 76);\n}\n\n#passing-screen.p1 h1 {\n    color: red;\n}\n\n#passing-screen p {\n    font-size: max(3vw, 25px);\n}\n\n#setup .left {\n    width: 60%;\n}\n\n#instructions {\n    font-size: max(2vw, 15px);\n    font-weight: bold;\n}\n\n.right {\n    padding: 10%;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n#drag-ships {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 15px;\n    max-height: max-content;\n}\n\n#player-board, #enemy-board, #placement-board, .ship-container {\n    display: flex;\n    height: max-content;\n    width: max-content;\n}\n\n#player-board, #enemy-board, #placement-board{\n    margin-bottom: 2vw;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n\n.ships-remaining {\n    font-size: max(2vw, 15px);\n}\n\n.ship-container p::before, .small p::before {\n    content: 'x';\n}\n\n.ship-container .ship .cell, .ship.moveable .cell {\n    cursor: grabbing;\n}\n\n.ship.moveable {\n    transform: translateX(-1px) translateY(-1px);\n    overflow: visible;\n}\n\n#setting-buttons {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: 1fr 2fr;\n    height: 10vw;\n    gap: 5px;\n}\n\n#setting-buttons button {\n    padding: 0 5px;\n    border-radius: 15px;\n    min-width: max-content;\n    cursor: pointer;\n    font-size: max(2vw, 15px);\n    font-weight: bold;\n    background-color: #3F5F7D;\n    color: white;\n}\n\n#random {\n    grid-column: 1/3;\n}\n\n#rotate {\n    grid-column: 3/5;\n}\n\n#clear {\n    grid-column: 5/-1;\n}\n\n#start {\n    grid-column: 1/4;\n}\n\n#mode {\n    grid-column: 4/-1;\n}\n\n.drag-over.available, #enemy-board .cell:hover {\n    background-color: rgb(0 0 0 / 40%);\n}\n\n#enemy-board .cell:hover {\n    cursor: pointer;\n}\n\n.ship.hide, #setup.hide, #setup .hide {\n    display: none;\n}\n\n.rotate {\n    display: flex;\n    width: max-content;\n    margin-bottom: 1vw;\n}\n\n#cancel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-height: 30px;\n    min-width: 40px;\n    border-radius: 15px;\n    height: 4vw;\n    width: 5wv;\n    cursor: pointer;\n}\n\n#boards {\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    justify-items: center;\n}\n\n.row {\n    display: flex;\n    flex-direction: column;\n}\n\n.cell {\n    min-width: 20px;\n    min-height: 20px;\n    font-size: max(2vw, 15px);\n    height: 2.5vw;\n    width: 2.5vw;\n    border: 1px solid black;\n    background: transparent;\n    color: white;\n    font-weight: bold;\n}\n\n.coord {\n    border: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#player-board .ship, #enemy-board .ship.hit, #setup .ship, .ships .ship {\n    color: red;\n    background-color: rgb(97, 97, 97);\n}\n\n.small {\n    display: flex;\n    font-size: max(1.5vw, 10px);\n}\n\n.small .cell {\n    min-width: 10px;\n    min-height: 10px;\n    width: 1.5vw;\n    height: 1.5vw;\n}\n\n\n.ships {\n    display: flex;\n    flex-direction: column;\n}\n\n.ship.sunk .cell {\n    background-color: rgb(148, 148, 148);\n    border: 1px solid rgb(100, 100, 100);\n}\n\n#hud {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px 25px;\n    gap: 5px;\n}\n\n#hud * {\n    font-size: max(2.5vw, 15px);\n}\n\n#hud p {\n    color: #005A75;\n}\n\n#hud p.p1 {\n    color: red;\n}\n\n#hud button {\n    padding: 5px 10px;\n    border-radius: 10px;\n    font-weight: bold;\n    cursor: pointer;\n    background-color: #3F5F7D;\n    color: white;\n}\n\n@media(max-width: 650px) {\n    #setup {\n        grid-template-columns: 1fr;\n    }\n    #setup .right {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    #settings-buttons {\n        grid-template-columns: 1fr;\n    }\n   \n    #random {\n        grid-column: 1/-1;\n    }\n\n    #rotate {\n        grid-column: 1/-1;\n    }\n\n    #clear {\n        grid-column: 1/-1;\n    }\n\n    #start {\n        grid-column: 1/-1;\n    }\n\n    #mode {\n        grid-column: 1/-1;\n    }\n}\n\n@media(max-width: 560px) {\n    #boards {\n        grid-template-columns: 1fr;\n        align-items: center;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    position: relative;\n    color: white;\n    background-color: rgb(8, 49, 76);\n    border: 10px solid gray;\n}\n\n#title {\n    font-size: max(5vw, 50px);\n    padding: 10px 0 0 0;\n    text-align: center;\n}\n\n#setup {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n#setup, #passing-screen {\n    position: absolute;\n    background-color: rgb(0 90 117 / 90%);\n    height: 90vh;\n    width: 90%;\n    transform: translateX(5%) translateY(5vh);\n    border-radius: 20px;\n}  \n\n#passing-screen {\n    display: grid;\n    grid-template-columns: 1fr;\n    align-content: center;\n    justify-items: center;\n    top: 0;\n    left: 0;\n}\n\n#passing-screen h1 {\n    font-size: max(5vw, 50px);\n    color: rgb(8, 49, 76);\n}\n\n#passing-screen.p1 h1 {\n    color: red;\n}\n\n#passing-screen p {\n    font-size: max(3vw, 25px);\n}\n\n#setup .left {\n    width: 60%;\n}\n\n#instructions {\n    font-size: max(2vw, 15px);\n    font-weight: bold;\n}\n\n.right {\n    padding: 10%;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n#drag-ships {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 15px;\n    max-height: max-content;\n}\n\n#player-board, #enemy-board, #placement-board, .ship-container {\n    display: flex;\n    height: max-content;\n    width: max-content;\n}\n\n#player-board, #enemy-board, #placement-board{\n    margin-bottom: 2vw;\n    background: url('/src/background.jpg');\n}\n\n\n.ships-remaining {\n    font-size: max(2vw, 15px);\n}\n\n.ship-container p::before, .small p::before {\n    content: 'x';\n}\n\n.ship-container .ship .cell, .ship.moveable .cell {\n    cursor: grabbing;\n}\n\n.ship.moveable {\n    transform: translateX(-1px) translateY(-1px);\n    overflow: visible;\n}\n\n#setting-buttons {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: 1fr 2fr;\n    height: 10vw;\n    gap: 5px;\n}\n\n#setting-buttons button {\n    padding: 0 5px;\n    border-radius: 15px;\n    min-width: max-content;\n    cursor: pointer;\n    font-size: max(2vw, 15px);\n    font-weight: bold;\n    background-color: #3F5F7D;\n    color: white;\n}\n\n#random {\n    grid-column: 1/3;\n}\n\n#rotate {\n    grid-column: 3/5;\n}\n\n#clear {\n    grid-column: 5/-1;\n}\n\n#start {\n    grid-column: 1/4;\n}\n\n#mode {\n    grid-column: 4/-1;\n}\n\n.drag-over.available, #enemy-board .cell:hover {\n    background-color: rgb(0 0 0 / 40%);\n}\n\n#enemy-board .cell:hover {\n    cursor: pointer;\n}\n\n.ship.hide, #setup.hide, #setup .hide {\n    display: none;\n}\n\n.rotate {\n    display: flex;\n    width: max-content;\n    margin-bottom: 1vw;\n}\n\n#cancel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-height: 30px;\n    min-width: 40px;\n    border-radius: 15px;\n    height: 4vw;\n    width: 5wv;\n    cursor: pointer;\n}\n\n#boards {\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    justify-items: center;\n}\n\n.row {\n    display: flex;\n    flex-direction: column;\n}\n\n.cell {\n    min-width: 20px;\n    min-height: 20px;\n    font-size: max(2vw, 15px);\n    height: 2.5vw;\n    width: 2.5vw;\n    border: 1px solid black;\n    background: transparent;\n    color: white;\n    font-weight: bold;\n}\n\n.coord {\n    border: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#player-board .ship, #enemy-board .ship.hit, #setup .ship, .ships .ship {\n    color: red;\n    background-color: rgb(97, 97, 97);\n}\n\n.small {\n    display: flex;\n    font-size: max(1.5vw, 10px);\n}\n\n.small .cell {\n    min-width: 10px;\n    min-height: 10px;\n    width: 1.5vw;\n    height: 1.5vw;\n}\n\n\n.ships {\n    display: flex;\n    flex-direction: column;\n}\n\n.ship.sunk .cell {\n    background-color: rgb(148, 148, 148);\n    border: 1px solid rgb(100, 100, 100);\n}\n\n#hud {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px 25px;\n    gap: 5px;\n}\n\n#hud * {\n    font-size: max(2.5vw, 15px);\n}\n\n#hud p {\n    color: #005A75;\n}\n\n#hud p.p1 {\n    color: red;\n}\n\n#hud button {\n    padding: 5px 10px;\n    border-radius: 10px;\n    font-weight: bold;\n    cursor: pointer;\n    background-color: #3F5F7D;\n    color: white;\n}\n\n@media(max-width: 650px) {\n    #setup {\n        grid-template-columns: 1fr;\n    }\n    #setup .right {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    #settings-buttons {\n        grid-template-columns: 1fr;\n    }\n   \n    #random {\n        grid-column: 1/-1;\n    }\n\n    #rotate {\n        grid-column: 1/-1;\n    }\n\n    #clear {\n        grid-column: 1/-1;\n    }\n\n    #start {\n        grid-column: 1/-1;\n    }\n\n    #mode {\n        grid-column: 1/-1;\n    }\n}\n\n@media(max-width: 560px) {\n    #boards {\n        grid-template-columns: 1fr;\n        align-items: center;\n    }\n}"],"sourceRoot":""}]);
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
    for (let i = 0; i < ps.length; i ++) ps[i].textContent = 4 - i;
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
    if (placementBoard.ships.length < 10) return;
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
    if (placementBoard.ships.length < 10) return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdB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Y2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaHVkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zZXR1cC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgNDksIDc2KTtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIGdyYXk7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDV2dywgNTBweCk7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3NldHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZXR1cCwgI3Bhc3Npbmctc2NyZWVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCA5MCAxMTcgLyA5MCUpO1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1JSkgdHJhbnNsYXRlWSg1dmgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn0gIFxcblxcbiNwYXNzaW5nLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4jcGFzc2luZy1zY3JlZW4gaDEge1xcbiAgICBmb250LXNpemU6IG1heCg1dncsIDUwcHgpO1xcbiAgICBjb2xvcjogcmdiKDgsIDQ5LCA3Nik7XFxufVxcblxcbiNwYXNzaW5nLXNjcmVlbi5wMSBoMSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbiNwYXNzaW5nLXNjcmVlbiBwIHtcXG4gICAgZm9udC1zaXplOiBtYXgoM3Z3LCAyNXB4KTtcXG59XFxuXFxuI3NldHVwIC5sZWZ0IHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuI2luc3RydWN0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDJ2dywgMTVweCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgICBwYWRkaW5nOiAxMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZHJhZy1zaGlwcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZW1lbnQtYm9hcmQsIC5zaGlwLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuI3BsYXllci1ib2FyZCwgI2VuZW15LWJvYXJkLCAjcGxhY2VtZW50LWJvYXJke1xcbiAgICBtYXJnaW4tYm90dG9tOiAydnc7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcblxcbi5zaGlwcy1yZW1haW5pbmcge1xcbiAgICBmb250LXNpemU6IG1heCgydncsIDE1cHgpO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIgcDo6YmVmb3JlLCAuc21hbGwgcDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ3gnO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIgLnNoaXAgLmNlbGwsIC5zaGlwLm1vdmVhYmxlIC5jZWxsIHtcXG4gICAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuXFxuLnNoaXAubW92ZWFibGUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFweCkgdHJhbnNsYXRlWSgtMXB4KTtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbiNzZXR0aW5nLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICAgIGhlaWdodDogMTB2dztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNzZXR0aW5nLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiBtYXgoMnZ3LCAxNXB4KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjVGN0Q7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3JhbmRvbSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbiNyb3RhdGUge1xcbiAgICBncmlkLWNvbHVtbjogMy81O1xcbn1cXG5cXG4jY2xlYXIge1xcbiAgICBncmlkLWNvbHVtbjogNS8tMTtcXG59XFxuXFxuI3N0YXJ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG59XFxuXFxuI21vZGUge1xcbiAgICBncmlkLWNvbHVtbjogNC8tMTtcXG59XFxuXFxuLmRyYWctb3Zlci5hdmFpbGFibGUsICNlbmVteS1ib2FyZCAuY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQwJSk7XFxufVxcblxcbiNlbmVteS1ib2FyZCAuY2VsbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAuaGlkZSwgI3NldHVwLmhpZGUsICNzZXR1cCAuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDF2dztcXG59XFxuXFxuI2NhbmNlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgbWluLXdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDR2dztcXG4gICAgd2lkdGg6IDV3djtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDJmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBtaW4td2lkdGg6IDIwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDJ2dywgMTVweCk7XFxuICAgIGhlaWdodDogMi41dnc7XFxuICAgIHdpZHRoOiAyLjV2dztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29vcmQge1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQgLnNoaXAsICNlbmVteS1ib2FyZCAuc2hpcC5oaXQsICNzZXR1cCAuc2hpcCwgLnNoaXBzIC5zaGlwIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NywgOTcpO1xcbn1cXG5cXG4uc21hbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IG1heCgxLjV2dywgMTBweCk7XFxufVxcblxcbi5zbWFsbCAuY2VsbCB7XFxuICAgIG1pbi13aWR0aDogMTBweDtcXG4gICAgbWluLWhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEuNXZ3O1xcbiAgICBoZWlnaHQ6IDEuNXZ3O1xcbn1cXG5cXG5cXG4uc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcC5zdW5rIC5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxufVxcblxcbiNodWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI2h1ZCAqIHtcXG4gICAgZm9udC1zaXplOiBtYXgoMi41dncsIDE1cHgpO1xcbn1cXG5cXG4jaHVkIHAge1xcbiAgICBjb2xvcjogIzAwNUE3NTtcXG59XFxuXFxuI2h1ZCBwLnAxIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2h1ZCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNUY3RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgICAjc2V0dXAge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG4gICAgI3NldHVwIC5yaWdodCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIH1cXG5cXG4gICAgI3NldHRpbmdzLWJ1dHRvbnMge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG4gICBcXG4gICAgI3JhbmRvbSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgfVxcblxcbiAgICAjcm90YXRlIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB9XFxuXFxuICAgICNjbGVhciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgfVxcblxcbiAgICAjc3RhcnQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIH1cXG5cXG4gICAgI21vZGUge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhKG1heC13aWR0aDogNTYwcHgpIHtcXG4gICAgI2JvYXJkcyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixr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Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO1FBQzFCLG1CQUFtQjtJQUN2QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDQ5LCA3Nik7XFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgICBmb250LXNpemU6IG1heCg1dncsIDUwcHgpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNzZXR1cCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2V0dXAsICNwYXNzaW5nLXNjcmVlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgOTAgMTE3IC8gOTAlKTtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNSUpIHRyYW5zbGF0ZVkoNXZoKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59ICBcXG5cXG4jcGFzc2luZy1zY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuI3Bhc3Npbmctc2NyZWVuIGgxIHtcXG4gICAgZm9udC1zaXplOiBtYXgoNXZ3LCA1MHB4KTtcXG4gICAgY29sb3I6IHJnYig4LCA0OSwgNzYpO1xcbn1cXG5cXG4jcGFzc2luZy1zY3JlZW4ucDEgaDEge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jcGFzc2luZy1zY3JlZW4gcCB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDN2dywgMjVweCk7XFxufVxcblxcbiNzZXR1cCAubGVmdCB7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcbiNpbnN0cnVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IG1heCgydncsIDE1cHgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgcGFkZGluZzogMTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2RyYWctc2hpcHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG59XFxuXFxuI3BsYXllci1ib2FyZCwgI2VuZW15LWJvYXJkLCAjcGxhY2VtZW50LWJvYXJkLCAuc2hpcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsICNlbmVteS1ib2FyZCwgI3BsYWNlbWVudC1ib2FyZHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zcmMvYmFja2dyb3VuZC5qcGcnKTtcXG59XFxuXFxuXFxuLnNoaXBzLXJlbWFpbmluZyB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDJ2dywgMTVweCk7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciBwOjpiZWZvcmUsIC5zbWFsbCBwOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAneCc7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciAuc2hpcCAuY2VsbCwgLnNoaXAubW92ZWFibGUgLmNlbGwge1xcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG5cXG4uc2hpcC5tb3ZlYWJsZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KSB0cmFuc2xhdGVZKC0xcHgpO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuI3NldHRpbmctYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gICAgaGVpZ2h0OiAxMHZ3O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI3NldHRpbmctYnV0dG9ucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IG1heCgydncsIDE1cHgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNUY3RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jcmFuZG9tIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI3JvdGF0ZSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzU7XFxufVxcblxcbiNjbGVhciB7XFxuICAgIGdyaWQtY29sdW1uOiA1Ly0xO1xcbn1cXG5cXG4jc3RhcnQge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbn1cXG5cXG4jbW9kZSB7XFxuICAgIGdyaWQtY29sdW1uOiA0Ly0xO1xcbn1cXG5cXG4uZHJhZy1vdmVyLmF2YWlsYWJsZSwgI2VuZW15LWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gNDAlKTtcXG59XFxuXFxuI2VuZW15LWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hpcC5oaWRlLCAjc2V0dXAuaGlkZSwgI3NldHVwIC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXZ3O1xcbn1cXG5cXG4jY2FuY2VsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGhlaWdodDogNHZ3O1xcbiAgICB3aWR0aDogNXd2O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMmZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIG1pbi13aWR0aDogMjBweDtcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiBtYXgoMnZ3LCAxNXB4KTtcXG4gICAgaGVpZ2h0OiAyLjV2dztcXG4gICAgd2lkdGg6IDIuNXZ3O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb29yZCB7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllci1ib2FyZCAuc2hpcCwgI2VuZW15LWJvYXJkIC5zaGlwLmhpdCwgI3NldHVwIC5zaGlwLCAuc2hpcHMgLnNoaXAge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk3LCA5Nyk7XFxufVxcblxcbi5zbWFsbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDEuNXZ3LCAxMHB4KTtcXG59XFxuXFxuLnNtYWxsIC5jZWxsIHtcXG4gICAgbWluLXdpZHRoOiAxMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMS41dnc7XFxuICAgIGhlaWdodDogMS41dnc7XFxufVxcblxcblxcbi5zaGlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwLnN1bmsgLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDAsIDEwMCwgMTAwKTtcXG59XFxuXFxuI2h1ZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jaHVkICoge1xcbiAgICBmb250LXNpemU6IG1heCgyLjV2dywgMTVweCk7XFxufVxcblxcbiNodWQgcCB7XFxuICAgIGNvbG9yOiAjMDA1QTc1O1xcbn1cXG5cXG4jaHVkIHAucDEge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jaHVkIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1RjdEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICNzZXR1cCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcbiAgICAjc2V0dXAgLnJpZ2h0IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgfVxcblxcbiAgICAjc2V0dGluZ3MtYnV0dG9ucyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcbiAgIFxcbiAgICAjcmFuZG9tIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB9XFxuXFxuICAgICNyb3RhdGUge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIH1cXG5cXG4gICAgI2NsZWFyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB9XFxuXFxuICAgICNzdGFydCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgfVxcblxcbiAgICAjbW9kZSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgICAjYm9hcmRzIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWRkQ2hpbGRFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IHBsYWNlU2hpcCwgY2hlY2tEcmFnLCB0b2dnbGVEcmFnLCBzYXZlVmFyaWFibGVzLCBzb2x2ZU91dE9mQm91bmRhcmllcyB9IGZyb20gXCIuL3NldHVwXCI7XG5cbmNvbnN0IGNyZWF0ZUJvYXJkID0gKGJvYXJkLCBlbmVteSkgPT4ge1xuICAgIGxldCBjZWxscyA9IFtdO1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIGxldCBsZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgZm9yIChsZXQgaSA9IC0xOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBsZXQgZGl2ID0gYWRkQ2hpbGRFbGVtZW50KGJvYXJkLCAnZGl2JywgJy5yb3cnKTtcbiAgICAgICAgaWYgKGkgPiAtMSkgY2VsbHNbaV0gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaiA9PSAwKSB7XG4gICAgICAgICAgICAgICBsZXQgbGV0dGVyID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ3AnLCAnLmNlbGwnKTtcbiAgICAgICAgICAgICAgIGxldHRlci5jbGFzc0xpc3QuYWRkKCdjb29yZCcpO1xuICAgICAgICAgICAgICAgbGV0dGVyLnRleHRDb250ZW50ID0gbGV0dGVyc1tpXTsgXG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIGlmIChpID09IC0xKSB7XG4gICAgICAgICAgICAgICBsZXQgbGV0dGVyID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ3AnLCAnLmNlbGwnKTtcbiAgICAgICAgICAgICAgIGxldHRlci50ZXh0Q29udGVudCA9IGogKyAxO1xuICAgICAgICAgICAgICAgbGV0dGVyLmNsYXNzTGlzdC5hZGQoJ2Nvb3JkJyk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICBsZXQgY2VsbCA9IGFkZENoaWxkRWxlbWVudChkaXYsICdidXR0b24nLCAnLmNlbGwnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F2YWlsYWJsZScpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnB1c2goY2VsbCk7IFxuICAgICAgICAgICAgICAgIGlmIChlbmVteSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ2FtZS5oYW5kbGVUdXJuKGksIGopKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQm9hcmQgKGJvYXJkLCBlbmVteSwgc2V0dXApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZXR1cCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuY2VsbHNbaV1bal0uaGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0udGV4dENvbnRlbnQgPSAneCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgICAgICAgICAoYm9hcmQuY2VsbHNbaV1bal0uc2hpcCA+IC0xKSA/IGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgKGJvYXJkLmNlbGxzW2ldW2pdLnNoaXAgPT0gLTIpID8gY2VsbHNbaV1bal0uY2xhc3NMaXN0LmFkZCgnYXZhaWxhYmxlJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAoYm9hcmQuY2VsbHNbaV1bal0uc2hpcCA+IC0xICYmIGJvYXJkLmNlbGxzW2ldW2pdLmhpdCA9PSB0cnVlKSA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZERyb3BFdmVudHMgKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcilcbiAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ0xlYXZlKTtcbiAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoKSA9PiBkcm9wKGNlbGxzW2ldW2pdLCBpLCBqKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnLW92ZXInKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcmFnTGVhdmUoZSkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJvcChjZWxsLCBpLCBqKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1vdmVyJyk7XG4gICAgICAgIGlmICghY2hlY2tEcmFnKCkpIHJldHVybjtcbiAgICAgICAgeCA9IGk7XG4gICAgICAgIHkgPSBqO1xuICAgICAgICBwbGFjZVNoaXAoeCwgeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU2hpcERpdiAoaSwgaiwgb3JpZW50YXRpb24sIGxlbmd0aCkge1xuICAgICAgICBsZXQgc2hpcCA9IGFkZENoaWxkRWxlbWVudChjZWxsc1tpXVtqXSwgJ2RpdicsICcuc2hpcCcpO1xuICAgICAgICBzaGlwLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnbW92ZWFibGUnKTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0b2dnbGVEcmFnKTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KVxuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHNhdmVWYXJpYWJsZXMoNSAtIGxlbmd0aCwgbGVuZ3RoLCBzaGlwLCBpLCBqKSlcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdG9nZ2xlRHJhZyk7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHNvbHZlT3V0T2ZCb3VuZGFyaWVzKTtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBhZGRDaGlsZEVsZW1lbnQoc2hpcCwgJ2RpdicsICcuY2VsbCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAncmlnaHQnKSBzaGlwLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUNsaWNrRXZlbnRzICgpIHtcbiAgICAgICAgbGV0IGRpc2FibGVkO1xuICAgICAgICAoY2VsbHNbMF1bMF0uZGlzYWJsZWQgPT0gdHJ1ZSkgPyBkaXNhYmxlZCA9IGZhbHNlOlxuICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyB1cGRhdGVCb2FyZCwgYWRkRHJvcEV2ZW50cywgY3JlYXRlU2hpcERpdiwgdG9nZ2xlQ2xpY2tFdmVudHMgfVxufVxuXG5jb25zdCBjcmVhdGVBbGl2ZVNoaXBzID0gKGRpdikgPT4ge1xuICAgIGxldCBwcyA9IFtdO1xuICAgIGxldCBzaGlwcyA9IFtdO1xuICAgIGxldCBsZW5naHRzID0gWzUsIDQsIDMsIDJdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAnZGl2JywgJy5zbWFsbCcpO1xuICAgICAgICBsZXQgcCA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdwJyk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBpICsgMTtcbiAgICAgICAgcHMucHVzaChwKTtcbiAgICAgICAgbGV0IHNoaXAgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnZGl2JywgJy5zaGlwJyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNSAtIGk7IGorKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBhZGRDaGlsZEVsZW1lbnQoc2hpcCwgJ2RpdicsICcuY2VsbCcpO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2hpcHMgKGJvYXJkKSB7XG4gICAgICAgIHBzLmZvckVhY2gocCA9PiBwLnRleHRDb250ZW50ID0gMCk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiBzaGlwLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKSk7XG4gICAgICAgIGJvYXJkLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5naHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZW5naHRzW2ldID09IHNoaXAuY2VsbHMubGVuZ3RoKSBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBzW2luZGV4XS50ZXh0Q29udGVudCA9ICtwc1tpbmRleF0udGV4dENvbnRlbnQgKyAxO1xuICAgICAgICAgICAgICAgIHNoaXBzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdzdW5rJyk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7IHVwZGF0ZVNoaXBzIH1cbn1cblxuZnVuY3Rpb24gc2hvd1Bhc3NpbmdTY3JlZW4obnVtKSB7XG4gICAgbGV0IHBsYXllcjtcbiAgICAobnVtID09IDApID8gcGxheWVyID0gJ09uZSc6IHBsYXllciA9ICdUd28nOyAgICBcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBsZXQgZGl2ID0gYWRkQ2hpbGRFbGVtZW50KGJvZHksICdkaXYnLCAnI3Bhc3Npbmctc2NyZWVuJyk7XG4gICAgKG51bSA9PSAwKSA/IGRpdi5jbGFzc0xpc3QuYWRkKCdwMScpOiBkaXYuY2xhc3NMaXN0LnJlbW92ZSgncDEnKVxuICAgIGxldCBoMiA9IGFkZENoaWxkRWxlbWVudChkaXYsICdoMScpO1xuICAgIGgyLnRleHRDb250ZW50ID0gYFBsYXllciAke3BsYXllcn0ncyBUdXJuYDtcbiAgICBsZXQgcCA9IGFkZENoaWxkRWxlbWVudChkaXYsICdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9ICdDbGljayB0byBjb250aW51ZSc7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGl2LnJlbW92ZSgpKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQm9hcmQsIGNyZWF0ZUFsaXZlU2hpcHMsIHNob3dQYXNzaW5nU2NyZWVuIH0iLCJjb25zdCBhZGRDaGlsZEVsZW1lbnQgPSAocGFyZW50LCBlbGVtZW50LCBjc3MpID0+IHtcbiAgICBsZXQgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtZW50fWApO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbG0pOyBcbiAgICBpZiAoY3NzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY3NzWzBdID09ICcuJyApXG4gICAgICAgIGVsbS5jbGFzc05hbWUgPSBjc3Muc3Vic3RyKDEpO1xuICAgICAgICBlbHNlIGlmIChjc3NbMF0gPT0gJyMnKVxuICAgICAgICBlbG0uaWQgPSBjc3Muc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIHJldHVybiBlbG07XG59XG5cbmZ1bmN0aW9uIGhpZGVDb250ZW50cyAoZGl2KSB7XG4gICAgZm9yIChsZXQgaT0wOyBpPGRpdi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpdi5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVDb250ZW50cyAoZGl2KSB7XG4gICAgZm9yIChsZXQgaT0wOyBpPGRpdi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpdi5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IHthZGRDaGlsZEVsZW1lbnQsIGhpZGVDb250ZW50cywgcmVzdG9yZUNvbnRlbnRzfTsiLCJpbXBvcnQgeyBkaXNwbGF5V2lubmVyLCB1cGRhdGVNZXNzYWdlIH0gZnJvbSBcIi4vaHVkXCJcbmltcG9ydCB7IHBsYXllckJvYXJkLCBlbmVteUJvYXJkLCBwMUdhbWVib2FyZCwgcDJHYW1lYm9hcmQsIGVuZW15U2hpcHMsIHBsYXllclNoaXBzLFxuICAgICAgICBwMSwgcDIsIHB2cCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBzaG93UGFzc2luZ1NjcmVlbiB9IGZyb20gXCIuL2RvbVN0dWZmXCI7XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBsZXQgb3ZlciA9IGZhbHNlO1xuICAgIGxldCBwbGF5ZXJzID0gW3AxLCBwMl07XG4gICAgbGV0IGJvYXJkcyA9IFtwMUdhbWVib2FyZCwgcDJHYW1lYm9hcmRdO1xuICAgIGxldCBjdXJyZW50UCA9IDA7XG4gICAgbGV0IGN1cnJlbnRCID0gMTtcbiAgICBwMUdhbWVib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICBwbGF5ZXJCb2FyZC51cGRhdGVCb2FyZChwMUdhbWVib2FyZCwgZmFsc2UsIGZhbHNlKTtcblxuICAgIHAyR2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIGVuZW15Qm9hcmQudXBkYXRlQm9hcmQocDJHYW1lYm9hcmQsIHRydWUsIGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVR1cm4oeCwgeSkge1xuICAgICAgICBpZiAob3ZlcikgcmV0dXJuO1xuICAgICAgICBpZiAocGxheWVyc1tjdXJyZW50UF0uYnJhaW4gPT0gJ2h1bWFuJykge1xuICAgICAgICAgICAgbGV0IHBsYXllZCA9IHBsYXllcnNbY3VycmVudFBdLnRha2VUdXJuKHgsIHksIGJvYXJkc1tjdXJyZW50Ql0pO1xuICAgICAgICAgICAgaWYgKHBsYXllZCkge1xuICAgICAgICAgICAgICAgIGVuZW15U2hpcHMudXBkYXRlU2hpcHMoYm9hcmRzW2N1cnJlbnRCXSk7XG4gICAgICAgICAgICAgICAgZW5lbXlCb2FyZC51cGRhdGVCb2FyZChib2FyZHNbY3VycmVudEJdLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgb3ZlciA9IGNoZWNrV2lubmVyKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHB2cCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnMgPSBbcDEsIHAyXTtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlCb2FyZC50b2dnbGVDbGlja0V2ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUdXJucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bhc3NpbmdTY3JlZW4oY3VycmVudFApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoY3VycmVudFApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcHMudXBkYXRlU2hpcHMoYm9hcmRzW2N1cnJlbnRQXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC51cGRhdGVCb2FyZChib2FyZHNbY3VycmVudFBdLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlTaGlwcy51cGRhdGVTaGlwcyhib2FyZHNbY3VycmVudEJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Qm9hcmQudXBkYXRlQm9hcmQoYm9hcmRzW2N1cnJlbnRCXSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlCb2FyZC50b2dnbGVDbGlja0V2ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlVHVybnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTWVzc2FnZShjdXJyZW50UCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVR1cm4oKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW5lbXlCb2FyZC50b2dnbGVDbGlja0V2ZW50cygpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGxheWVyc1tjdXJyZW50UF0udGFrZUNvbXB1dGVyVHVybihib2FyZHNbY3VycmVudEJdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwcy51cGRhdGVTaGlwcyhib2FyZHNbY3VycmVudEJdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC51cGRhdGVCb2FyZChib2FyZHNbY3VycmVudEJdLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG92ZXIgPSBjaGVja1dpbm5lcigpO1xuICAgICAgICAgICAgICAgIGNoYW5nZVR1cm5zKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTWVzc2FnZShjdXJyZW50UCk7XG4gICAgICAgICAgICAgICAgZW5lbXlCb2FyZC50b2dnbGVDbGlja0V2ZW50cygpO1xuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgICAgICBpZiAob3Zlcikge1xuICAgICAgICAgICAgZGlzcGxheVdpbm5lcihjdXJyZW50Qik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1dpbm5lciAoKSB7XG4gICAgICAgIGlmIChib2FyZHNbY3VycmVudEJdLmFyZUFsbFN1bmsoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coe3dpbm5lcjogcGxheWVyc1tjdXJyZW50UF19KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUdXJucygpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRQID09IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRQID0gMTtcbiAgICAgICAgICAgIGN1cnJlbnRCID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRQID0gMDtcbiAgICAgICAgICAgIGN1cnJlbnRCID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZVN0YXJ0ICgpIHtcbiAgICAgICAgcGxheWVyQm9hcmQudXBkYXRlQm9hcmQocDFHYW1lYm9hcmQsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIGVuZW15Qm9hcmQudXBkYXRlQm9hcmQocDJHYW1lYm9hcmQsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcGxheWVyU2hpcHMudXBkYXRlU2hpcHMocDFHYW1lYm9hcmQpO1xuICAgICAgICBlbmVteVNoaXBzLnVwZGF0ZVNoaXBzKHAyR2FtZWJvYXJkKTtcbiAgICAgICAgYm9hcmRzID0gW3AxR2FtZWJvYXJkLCBwMkdhbWVib2FyZF07XG4gICAgICAgIGN1cnJlbnRQID0gMDtcbiAgICAgICAgY3VycmVudEIgPSAxO1xuICAgICAgICBwMi5jbGVhclZhcmlhYmxlcygpO1xuICAgICAgICBwbGF5ZXJzID0gW3AxLCBwMl07XG4gICAgICAgIG92ZXIgPSBmYWxzZTtcbiAgICAgICAgdXBkYXRlTWVzc2FnZSgwKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgaGFuZGxlVHVybiwgcmVTdGFydCB9XG59XG5cbmV4cG9ydCB7IHN0YXJ0R2FtZSB9IiwiaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXBzXCI7XG5cbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICBsZXQgc2hpcHMgPSBbXTtcblxuICAgIGNsZWFyQm9hcmQoKTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyQm9hcmQgKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCAxMCA7IGkrKyl7XG4gICAgICAgICAgICBjZWxsc1tpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgMTAgOyBqKyspe1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdID0ge2hpdDogZmFsc2UsIHNoaXA6IC0yfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcCh4LCB5LCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBpbnZhbGlkQ29vcmQgPSBmYWxzZTtcbiAgICAgICAgaW52YWxpZENvb3JkID0gY2hlY2tWYWxpZENvb3JkaW5hdGVzKHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpO1xuICAgICAgICBpZiAoaW52YWxpZENvb3JkID09IHRydWUpIHJldHVybjtcbiAgICAgICAgbGV0IG5ld1NoaXAgPSBzaGlwKGxlbmd0aCk7XG4gICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIG5ld1NoaXAuY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZCA9IFtdO1xuICAgICAgICBuZXdTaGlwLmRpcmVjdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgICAgICBsZXQgYXV4WCA9IHg7XG4gICAgICAgIGxldCBhdXhZID0geTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgY2VsbHNbeF1beV0uc2hpcCA9IGk7XG4gICAgICAgICAgICBuZXdTaGlwLmNvb3JkaW5hdGVzW2ldID0gW3gsIHldO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdkb3duJykgeSsrO1xuICAgICAgICAgICAgZWxzZSB4Kys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmlsbCBhZGphY2VudCBjZWxscyB3aXRoIC0xXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoICsgMjsgaSsrKSB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdkb3duJykge1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLTEsIGF1eFktMSkpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFgtMV1bYXV4WS0xXS5zaGlwID0gLTE7IFxuICAgICAgICAgICAgICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQucHVzaChbYXV4WC0xLCBhdXhZLTFdKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRBdXhDb29yZChhdXhYKzEsIGF1eFktMSkpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFgrMV1bYXV4WS0xXS5zaGlwID0gLTE7IFxuICAgICAgICAgICAgICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQucHVzaChbYXV4WCsxLCBhdXhZLTFdKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLCBhdXhZLTEpICYmIGkgPT0gMCB8fCBjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WCwgYXV4WS0xKSAmJiBpID09IGxlbmd0aCsxKXtcbiAgICAgICAgICAgICAgICAgICBjZWxsc1thdXhYXVthdXhZLTFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLCBhdXhZLTFdKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WS0xKSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WC0xXVthdXhZLTFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLTEsIGF1eFktMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WSsxKSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WC0xXVthdXhZKzFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLTEsIGF1eFkrMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WSkgJiYgaSA9PSAwIHx8IGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLTEsIGF1eFkpICYmIGkgPT0gbGVuZ3RoKzEpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFgtMV1bYXV4WV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgtMSwgYXV4WV0pO1xuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2Rvd24nKSBhdXhZKys7XG4gICAgICAgICAgICBlbHNlIGF1eFgrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVmFsaWRDb29yZGluYXRlcyh4LCB5LCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICh4ID4gOSB8fCB4IDwgMCB8fCB5ID4gOSB8fCB5IDwgMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnZG93bicgJiYgeStsZW5ndGggPiAxMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAncmlnaHQnICYmIHgrbGVuZ3RoID4gMTApIHJldHVybiB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYoY2VsbHNbeF1beV0uc2hpcCA+IC0yKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnZG93bicpIHkrKztcbiAgICAgICAgICAgIGVsc2UgeCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkQXV4Q29vcmQgKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPiA5IHx8IHggPCAwIHx8IHkgPiA5IHx8IHkgPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7ICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2sgKHgsIHkpIHtcbiAgICAgICAgaWYgKGNlbGxzW3hdW3ldLmhpdCA9PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNlbGxzW3hdW3ldLmhpdCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0uY29vcmRpbmF0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcHNbaV0uY29vcmRpbmF0ZXNbal1bMF0gPT0geCAmJiBzaGlwc1tpXS5jb29yZGluYXRlc1tqXVsxXSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdChjZWxsc1t4XVt5XS5zaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya0FkamFjZW50Q2VsbHMoc2hpcHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFya0FkamFjZW50Q2VsbHMoc2hpcCkge1xuICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHJldHVybjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLm5leHRUb0Nvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsc1tzaGlwLm5leHRUb0Nvb3JkW2ldWzBdXVtzaGlwLm5leHRUb0Nvb3JkW2ldWzFdXS5oaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJlQWxsU3VuaygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFzaGlwc1tpXS5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSAoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzUsIDQsIDQsIDMsIDMsIDMsIDIsIDIsIDIsIDJdO1xuICAgICAgICBjb25zdCBtaXNzaW5nU2hpcHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Rocy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRyaWVzID0gNSAqIChpKzEpO1xuICAgICAgICAgICAgd2hpbGUgKHNoaXBzLmxlbmd0aCArIG1pc3NpbmdTaGlwcy5sZW5ndGggPD0gaSAmJiB0cmllcyA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9IHBpY2tSYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcCh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aHNbaV0pO1xuICAgICAgICAgICAgICAgIHRyaWVzLS07XG4gICAgICAgICAgICAgICAgaWYgKHRyaWVzID09IDAgJiYgc2hpcHMubGVuZ3RoICsgbWlzc2luZ1NoaXBzLmxlbmd0aCA8PSBpKSBtaXNzaW5nU2hpcHMucHVzaChzaGlwTGVuZ3Roc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWlzc2luZ1NoaXBzLmxlbmd0aCA+IDApIHNvbHZlTWlzc2luZ1NoaXBzKG1pc3NpbmdTaGlwcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGlja1JhbmRvbU9yaWVudGF0aW9uICgpIHtcbiAgICAgICAgbGV0IGF1eCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTtcbiAgICAgICAgaWYgKGF1eCA9PSAxKSByZXR1cm4gJ3JpZ2h0JztcbiAgICAgICAgZWxzZSByZXR1cm4gJ2Rvd24nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNvbHZlTWlzc2luZ1NoaXBzIChhcnIpIHtcbiAgICAgICAgbGV0IGF2YWlsYWJsZSA9IFtdO1xuICAgICAgICBsZXQgbGVuZ3RoID0gc2hpcHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCAxMCA7IGkrKyl7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCAxMCA7IGorKyl7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxzW2ldW2pdLnNoaXAgPT0gLTIpIGF2YWlsYWJsZS5wdXNoKFtpLCBqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXZhaWxhYmxlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKGF2YWlsYWJsZVtqXVswXSwgYXZhaWxhYmxlW2pdWzFdLCAncmlnaHQnLCBhcnJbaV0pO1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcChhdmFpbGFibGVbal1bMF0sIGF2YWlsYWJsZVtqXVsxXSwgJ2Rvd24nLCBhcnJbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPCBzaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gc2hpcHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpcHMubGVuZ3RoICE9IDEwKSB7XG4gICAgICAgICAgICBjbGVhckJvYXJkKCk7IFxuICAgICAgICAgICAgc2hpcHMgPSBbXTtcbiAgICAgICAgICAgIHBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2hpcEluZGV4KHgsIHkpIHtcbiAgICAgICAgaWYgKGNlbGxzW3hdW3ldLnNoaXAgPiAtMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHNoaXBzW2ldLmNvb3JkaW5hdGVzW2NlbGxzW3hdW3ldLnNoaXBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwc1tpXS5jb29yZGluYXRlc1tjZWxsc1t4XVt5XS5zaGlwXVswXSA9PSB4ICYmIHNoaXBzW2ldLmNvb3JkaW5hdGVzW2NlbGxzW3hdW3ldLnNoaXBdWzFdID09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpOyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2lsbFNoaXAgKHgsIHkpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gZ2V0U2hpcEluZGV4KHgsIHkpO1xuICAgICAgICBzaGlwc1tpbmRleF0uY29vcmRpbmF0ZXMuZm9yRWFjaCh2YWwgPT4gY2VsbHNbdmFsWzBdXVt2YWxbMV1dLnNoaXAgPSAtMik7XG4gICAgICAgIHNoaXBzW2luZGV4XS5uZXh0VG9Db29yZC5mb3JFYWNoKHZhbCA9PiBjZWxsc1t2YWxbMF1dW3ZhbFsxXV0uc2hpcCA9IC0yKTtcbiAgICAgICAgc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2hpcHNbaV0ubmV4dFRvQ29vcmQuZm9yRWFjaCh2YWwgPT4gY2VsbHNbdmFsWzBdXVt2YWxbMV1dLnNoaXAgPSAtMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNoaXBPcmllbnRhdGlvbiAoeCwgeSkge1xuICAgICAgICBsZXQgaW5kZXggPSBnZXRTaGlwSW5kZXgoeCwgeSk7XG4gICAgICAgIHJldHVybiBzaGlwc1tpbmRleF0uZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoaXBJc1N1bmsgKHgsIHkpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gZ2V0U2hpcEluZGV4KHgsIHkpO1xuICAgICAgICByZXR1cm4gc2hpcHNbaW5kZXhdLmlzU3VuaygpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBsYWNlU2hpcCwgY2VsbHMsIHJlY2VpdmVBdHRhY2ssIHNoaXBzLCBhcmVBbGxTdW5rLCBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgICAgICAgICBraWxsU2hpcCwgZ2V0U2hpcE9yaWVudGF0aW9uLCBzaGlwSXNTdW5rIH1cbn1cblxuZXhwb3J0IHsgZ2FtZWJvYXJkIH1cblxuIiwiaW1wb3J0IHsgYWRkQ2hpbGRFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5U2V0dXAgfSBmcm9tIFwiLi9zZXR1cFwiXG5cbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkJyk7XG5cbmxldCBtZXNzYWdlO1xuXG5mdW5jdGlvbiBydW5IdWQoKSB7XG4gICAgbWVzc2FnZSA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdwJyk7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgT25lJ3MgVHVybmA7XG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdwMScpO1xuICAgIGxldCByZXN0YXJ0ID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2J1dHRvbicpO1xuICAgIHJlc3RhcnQudGV4dENvbnRlbnQgPSAnTmV3IEdhbWUnO1xuICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5U2V0dXApXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2UgKG51bSkge1xuICAgIGlmIChudW0gPT0gMSkge1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gIGBQbGF5ZXIgVHdvJ3MgVHVybmA7XG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncDEnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgUGxheWVyIE9uZSdzIFR1cm5gO1xuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3AxJyk7XG4gICAgfSAgICAgICBcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdpbm5lciAobnVtKSB7XG4gICAgaWYgKG51bSA9PSAxKSB7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAgYFBsYXllciBUd28gaGFzIFdvbiB0aGUgTWF0Y2ghYDtcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdwMScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgT25lIGhhcyBXb24gdGhlIE1hdGNoIWA7XG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgncDEnKTtcbiAgICB9IFxufVxuXG5leHBvcnQgeyBydW5IdWQsIHVwZGF0ZU1lc3NhZ2UsIGRpc3BsYXlXaW5uZXIgfSIsImltcG9ydCB7IGNyZWF0ZUJvYXJkLCBjcmVhdGVBbGl2ZVNoaXBzIH0gZnJvbSBcIi4vZG9tU3R1ZmZcIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBydW5TZXR1cCB9IGZyb20gXCIuL3NldHVwXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHJ1bkh1ZCB9IGZyb20gXCIuL2h1ZFwiO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWJvYXJkJyk7XG5jb25zdCBlbmVteSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmVteS1ib2FyZCcpO1xubGV0IHBsYXllckJvYXJkID0gY3JlYXRlQm9hcmQocGxheWVyMSwgZmFsc2UpO1xubGV0IGVuZW15Qm9hcmQgPSBjcmVhdGVCb2FyZChlbmVteSwgdHJ1ZSk7XG5sZXQgcGxheWVyU2hpcHMgPSBjcmVhdGVBbGl2ZVNoaXBzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItc2hpcHMnKSk7XG5sZXQgZW5lbXlTaGlwcyA9IGNyZWF0ZUFsaXZlU2hpcHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZW15LXNoaXBzJykpO1xuXG5sZXQgcDFHYW1lYm9hcmQgPSBnYW1lYm9hcmQoKTtcbmxldCBwMkdhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xuXG5sZXQgcDEgPSBwbGF5ZXIoJ1BsYXllciAxJywgJ2h1bWFuJyk7XG5sZXQgcDIgPSBwbGF5ZXIoJ1BsYXllciAyJywgJ2FpJyk7XG5sZXQgcHZwID0gZmFsc2U7XG5cbnJ1blNldHVwKCk7XG5sZXQgZ2FtZSA9IHN0YXJ0R2FtZSgpO1xucnVuSHVkKCk7XG5cblxuZnVuY3Rpb24gc2V0UDEgKGJvYXJkKSB7XG4gICAgcDFHYW1lYm9hcmQgPSBib2FyZDtcbn1cblxuZnVuY3Rpb24gc2V0UDIgKGJvYXJkKSB7XG4gICAgcDJHYW1lYm9hcmQgPSBib2FyZDtcbn1cblxuZnVuY3Rpb24gY2hhbmdlTW9kZSAoKSB7XG4gICAgaWYgKHB2cCkge1xuICAgICAgICBwdnAgPSBmYWxzZTtcbiAgICAgICAgcDIgPSBwbGF5ZXIoJ1BsYXllciAyJywgJ2FpJyk7ICBcbiAgICB9ICBcbiAgICBlbHNlIHtcbiAgICAgICAgcHZwID0gdHJ1ZTtcbiAgICAgICAgcDIgPSBwbGF5ZXIoJ1BsYXllciAyJywgJ2h1bWFuJyk7IFxuICAgIH1cbn1cblxuXG5leHBvcnQgeyBnYW1lLCBwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZCwgc2V0UDEsIHNldFAyLCBwMUdhbWVib2FyZCwgcDJHYW1lYm9hcmQsXG4gICAgICAgIGVuZW15U2hpcHMsIHBsYXllclNoaXBzLCBwMSwgcDIsIHB2cCwgY2hhbmdlTW9kZSB9XG5cblxuLy9hZGQgY29tcHV0ZXIgc21hcnQgcGxheVxuLy9hZGQgc21hbGwgZGVsYXkgZm9yIGNvbXB1dGVyIHBsYXlcbi8vc2V0dXAgZm9yIHNlY29uZCBwbGF5ZXIiLCJjb25zdCBwbGF5ZXIgPSAobmFtZSwgYnJhaW4pID0+IHtcbiAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgbGV0IHNlY29uZEhpdCA9IGZhbHNlO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZGlyZWN0aW9uO1xuICAgIGxldCB0cmllcyA9IFtdO1xuICAgIGxldCB0cmllczIgPSBbXTtcbiAgICBsZXQgZm91bmRTaGlwID0gW107XG4gICAgZnVuY3Rpb24gdGFrZVR1cm4oeCwgeSwgZ2FtZWJvYXJkKSB7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0YWtlQ29tcHV0ZXJUdXJuKGdhbWVib2FyZCkge1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICB0cnlTbWFydFBsYXkoZ2FtZWJvYXJkKTtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICBsZXQgdmFsaWRIaXQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgICAgIHdoaWxlKHZhbGlkSGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICAgICAgdmFsaWRIaXQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmNlbGxzW3hdW3ldLnNoaXAgPiAtMSkge1xuICAgICAgICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm91bmRTaGlwLnB1c2goW3gsIHldKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cnlTbWFydFBsYXkoZ2FtZWJvYXJkKSB7XG4gICAgICAgIGlmICghc2Vjb25kSGl0KSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tWYWxpZEF1eENvb3JkIChmb3VuZFNoaXBbMF1bMF0gKyAxLCBmb3VuZFNoaXBbMF1bMV0pKSB0cmllcy5wdXNoKFtmb3VuZFNoaXBbMF1bMF0gKyAxLCBmb3VuZFNoaXBbMF1bMV1dKTtcbiAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkQXV4Q29vcmQgKGZvdW5kU2hpcFswXVswXSAtIDEsIGZvdW5kU2hpcFswXVsxXSkpIHRyaWVzLnB1c2goW2ZvdW5kU2hpcFswXVswXSAtIDEsIGZvdW5kU2hpcFswXVsxXV0pO1xuICAgICAgICAgICAgaWYgKGNoZWNrVmFsaWRBdXhDb29yZCAoZm91bmRTaGlwWzBdWzBdLCBmb3VuZFNoaXBbMF1bMV0gKyAxKSkgdHJpZXMucHVzaChbZm91bmRTaGlwWzBdWzBdLCBmb3VuZFNoaXBbMF1bMV0gKyAxXSk7XG4gICAgICAgICAgICBpZiAoY2hlY2tWYWxpZEF1eENvb3JkIChmb3VuZFNoaXBbMF1bMF0sIGZvdW5kU2hpcFswXVsxXSAtIDEpKSB0cmllcy5wdXNoKFtmb3VuZFNoaXBbMF1bMF0sIGZvdW5kU2hpcFswXVsxXSAtIDFdKTtcbiAgICAgICAgICAgIGxldCB2YWxpZEhpdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHRyaWVzW2ldWzBdLCB0cmllc1tpXVsxXSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB3aGlsZSh2YWxpZEhpdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHZhbGlkSGl0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sodHJpZXNbaV1bMF0sIHRyaWVzW2ldWzFdKTtcbiAgICAgICAgICAgIGkrKzsgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuY2VsbHNbdHJpZXNbaSAtIDFdWzBdXVt0cmllc1tpIC0gMV1bMV1dLnNoaXAgPiAtMSkge1xuICAgICAgICAgICAgICAgIHNlY29uZEhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kU2hpcFswXVswXSA9PSB0cmllc1tpIC0gMV1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm91bmRTaGlwLnB1c2goW3RyaWVzW2kgLSAxXVswXSwgdHJpZXNbaSAtIDFdWzFdXSk7XG4gICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIGZvdW5kU2hpcC5mb3JFYWNoKGNvb3JkcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkQXV4Q29vcmQoY29vcmRzWzBdLCBjb29yZHNbMV0gKyAxKSkgdHJpZXMyLnB1c2goW2Nvb3Jkc1swXSwgY29vcmRzWzFdICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tWYWxpZEF1eENvb3JkKGNvb3Jkc1swXSwgY29vcmRzWzFdIC0gMSkpIHRyaWVzMi5wdXNoKFtjb29yZHNbMF0sIGNvb3Jkc1sxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvdW5kU2hpcC5mb3JFYWNoKGNvb3JkcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkQXV4Q29vcmQoY29vcmRzWzBdICsgMSwgY29vcmRzWzFdKSkgdHJpZXMyLnB1c2goW2Nvb3Jkc1swXSArIDEsIGNvb3Jkc1sxXV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tWYWxpZEF1eENvb3JkKGNvb3Jkc1swXSAtIDEsIGNvb3Jkc1sxXSkpIHRyaWVzMi5wdXNoKFtjb29yZHNbMF0gLSAxLCBjb29yZHNbMV1dKTtcbiAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdmFsaWRIaXQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0cmllczJbaV1bMF0sIHRyaWVzMltpXVsxXSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB3aGlsZSh2YWxpZEhpdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHZhbGlkSGl0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sodHJpZXMyW2ldWzBdLCB0cmllczJbaV1bMV0pO1xuICAgICAgICAgICAgICAgIGkrKzsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmNlbGxzW3RyaWVzMltpIC0gMV1bMF1dW3RyaWVzMltpIC0gMV1bMV1dLnNoaXAgPiAtMSkge1xuICAgICAgICAgICAgICAgIGZvdW5kU2hpcC5wdXNoKFt0cmllczJbaSAtIDFdWzBdLCB0cmllczJbaSAtIDFdWzFdXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChnYW1lYm9hcmQuc2hpcElzU3Vuayhmb3VuZFNoaXBbMF1bMF0sIGZvdW5kU2hpcFswXVsxXSkpIHtcbiAgICAgICAgICAgIGNsZWFyVmFyaWFibGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkQXV4Q29vcmQgKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPiA5IHx8IHggPCAwIHx8IHkgPiA5IHx8IHkgPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7ICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyVmFyaWFibGVzKCkge1xuICAgICAgICBoaXQgPSBmYWxzZTtcbiAgICAgICAgc2Vjb25kSGl0ID0gZmFsc2U7XG4gICAgICAgIHRyaWVzID0gW107XG4gICAgICAgIHRyaWVzMiA9IFtdO1xuICAgICAgICBpID0gMDtcbiAgICAgICAgZm91bmRTaGlwID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdGFrZVR1cm4sIG5hbWUsIGJyYWluLCB0YWtlQ29tcHV0ZXJUdXJuLCBjbGVhclZhcmlhYmxlcyB9XG59XG5cbmV4cG9ydCB7IHBsYXllciB9IiwiaW1wb3J0IHsgY3JlYXRlQm9hcmQsIHNob3dQYXNzaW5nU2NyZWVuIH0gZnJvbSBcIi4vZG9tU3R1ZmZcIjtcbmltcG9ydCB7IGFkZENoaWxkRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBnYW1lLCBzZXRQMSwgc2V0UDIsIHB2cCwgY2hhbmdlTW9kZSB9IGZyb20gXCIuXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR1cCcpO1xubGV0IGJvYXJkO1xubGV0IGRvbUJvYXJkO1xubGV0IHBsYWNlbWVudEJvYXJkO1xubGV0IGluZGV4O1xubGV0IGxlbmd0aDtcbmxldCBvcmllbnRhdGlvbiA9ICdkb3duJztcbmxldCByZW1haW5pbmcgPSAwO1xubGV0IGRyYWdJdGVtO1xubGV0IGRyYWcgPSBmYWxzZTtcbmxldCBraWxsID0gZmFsc2U7XG5sZXQgcHMgPSBbXTtcbmxldCBkb21TaGlwcyA9IFtdO1xubGV0IGNhbmNlbDtcbmxldCBzdGFydDtcbmxldCByYW5kb207XG5sZXQgY291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIHJ1blNldHVwICgpIHtcbiAgICBjb25zdCBsZWZ0ID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2RpdicsICcubGVmdCcpO1xuICAgIGJvYXJkID0gYWRkQ2hpbGRFbGVtZW50KGxlZnQsICdkaXYnLCAnI3BsYWNlbWVudC1ib2FyZCcpO1xuICAgIGRvbUJvYXJkID0gY3JlYXRlQm9hcmQoYm9hcmQsIGZhbHNlKTtcbiAgICBkb21Cb2FyZC5hZGREcm9wRXZlbnRzKCk7XG4gICAgcGxhY2VtZW50Qm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgICBsZXQgaW5zdHJ1Y3Rpb25zID0gYWRkQ2hpbGRFbGVtZW50KGxlZnQsICdwJywgJyNpbnN0cnVjdGlvbnMnKTtcbiAgICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBzaGlwcyBvbiB0aGUgYm9hcmQgYnkgZHJhZ2dpbmcgdGhlbSc7XG5cbiAgICBjb25zdCByaWdodCA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdkaXYnLCAnLnJpZ2h0Jyk7XG4gICAgY29uc3Qgc2hpcHMgPSBhZGRDaGlsZEVsZW1lbnQocmlnaHQsICdkaXYnLCAnI2RyYWctc2hpcHMnKTtcblxuICAgIGZvciAobGV0IGkgPSA1OyBpID4gMTsgaS0tKSB7XG4gICAgICAgIGxldCBkaXYgPSBhZGRDaGlsZEVsZW1lbnQoc2hpcHMsICdkaXYnLCAnLnNoaXAtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBwID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ3AnLCAnLnNoaXBzLXJlbWFpbmluZycpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gNiAtIGk7XG4gICAgICAgIHAuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIHBzLnB1c2gocCk7XG4gICAgICAgIGxldCBzaGlwID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ2RpdicsICcuc2hpcCcpO1xuICAgICAgICBkb21TaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICBzaGlwLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgKGRvbVNoaXBzWzBdLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpID8gb3JpZW50YXRpb24gPSAncmlnaHQnIDogb3JpZW50YXRpb24gPSAnZG93bic7XG4gICAgICAgICAgICBpbmRleCA9IDUgLSBpO1xuICAgICAgICAgICAgbGVuZ3RoID0gaTtcbiAgICAgICAgICAgIGRyYWdJdGVtID0gc2hpcDtcbiAgICAgICAgICAgIGlmICgrcC50ZXh0Q29udGVudCA+IDApIGRyYWcgPSB0cnVlO1xuICAgICAgICAgICAga2lsbCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4gZHJhZyA9IGZhbHNlKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gYWRkQ2hpbGRFbGVtZW50KHNoaXAsICdkaXYnLCAnLmNlbGwnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbnMgPSBhZGRDaGlsZEVsZW1lbnQocmlnaHQsICdkaXYnLCAnI3NldHRpbmctYnV0dG9ucycpO1xuXG4gICAgcmFuZG9tID0gYWRkQ2hpbGRFbGVtZW50KGJ1dHRvbnMsICdidXR0b24nLCAnI3JhbmRvbScpO1xuICAgIHJhbmRvbS50ZXh0Q29udGVudCA9ICdSYW5kb20nO1xuICAgIHJhbmRvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBpY2tSYW5kb20pO1xuXG4gICAgY29uc3Qgcm90YXRlID0gYWRkQ2hpbGRFbGVtZW50KGJ1dHRvbnMsICdidXR0b24nLCAnI3JvdGF0ZScpO1xuICAgIHJvdGF0ZS50ZXh0Q29udGVudCA9ICdSb3RhdGUnO1xuICAgIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVNoaXBzKTtcblxuICAgIGNvbnN0IGNsZWFyID0gYWRkQ2hpbGRFbGVtZW50KGJ1dHRvbnMsICdidXR0b24nLCAnI2NsZWFyJyk7XG4gICAgY2xlYXIudGV4dENvbnRlbnQgPSAnQ2xlYXInO1xuICAgIGNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJCb2FyZCk7XG5cbiAgICBzdGFydCA9IGFkZENoaWxkRWxlbWVudChidXR0b25zLCAnYnV0dG9uJywgJyNzdGFydCcpO1xuICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0JztcbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0dhbWUpO1xuXG4gICAgbGV0IG1vZGUgPSBhZGRDaGlsZEVsZW1lbnQoYnV0dG9ucywgJ2J1dHRvbicsICcjbW9kZScpO1xuICAgIG1vZGUudGV4dENvbnRlbnQgPSAnUGxheWVyIFZzLiBBaSc7XG4gICAgbW9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHB2cCkge1xuICAgICAgICAgICAgbW9kZS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgVnMuIEFpJztcbiAgICAgICAgICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0JztcbiAgICAgICAgICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3R2FtZSk7XG4gICAgICAgICAgICBzdGFydC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1B2UEdhbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kZS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgVnMuIFBsYXllcic7XG4gICAgICAgICAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTZXQgUDEgQm9hcmQnOyBcbiAgICAgICAgICAgIHN0YXJ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3R2FtZSk7XG4gICAgICAgICAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1B2UEdhbWUpO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgY2hhbmdlTW9kZSgpO1xuICAgICAgICB0b2dnbGVDYW5jZWwoKTtcbiAgICB9KVxuXG4gICAgY2FuY2VsID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2J1dHRvbicsICcuaGlkZScpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICd4JztcbiAgICBjYW5jZWwuaWQgPSAnY2FuY2VsJztcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwICh4LCB5KSB7XG4gICAgaWYgKHBsYWNlbWVudEJvYXJkLnNoaXBzLmxlbmd0aCA+PSAxMCkgcmV0dXJuO1xuICAgIHBsYWNlbWVudEJvYXJkLnBsYWNlU2hpcCh4LCB5LCBvcmllbnRhdGlvbiwgbGVuZ3RoKTtcbiAgICBkb21Cb2FyZC51cGRhdGVCb2FyZChwbGFjZW1lbnRCb2FyZCwgZmFsc2UsIHRydWUpO1xuICAgIGlmKGtpbGwpe1xuICAgICAgICBkcmFnSXRlbS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50Qm9hcmQuc2hpcHMubGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBwc1tpbmRleF0udGV4dENvbnRlbnQgPSArcHNbaW5kZXhdLnRleHRDb250ZW50IC0gMTtcbiAgICAgICAgZG9tQm9hcmQuY3JlYXRlU2hpcERpdih4LCB5LCBvcmllbnRhdGlvbiwgbGVuZ3RoKTtcbiAgICB9XG4gICAgXG4gICAgK3BzW2luZGV4XS50ZXh0Q29udGVudCA9PSAwID9cbiAgICAgICAgZG9tU2hpcHNbaW5kZXhdLmRyYWdnYWJsZSA9IGZhbHNlOlxuICAgICAgICBkb21TaGlwc1tpbmRleF0uZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgIGtpbGwgPSBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gY2hlY2tEcmFnICgpIHtcbiAgICByZXR1cm4gZHJhZztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRHJhZyAoKSB7XG4gICAgZHJhZyA9PSB0cnVlID8gZHJhZyA9IGZhbHNlOiBkcmFnID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2F2ZVZhcmlhYmxlcyhpbmQsIGxlbiwgZHJhLCB4LCB5KSB7XG4gICAgaW5kZXggPSBpbmQ7XG4gICAgbGVuZ3RoID0gbGVuO1xuICAgIGtpbGwgPSB0cnVlO1xuICAgIGRyYWdJdGVtID0gZHJhO1xuICAgIG9yaWVudGF0aW9uID0gcGxhY2VtZW50Qm9hcmQuZ2V0U2hpcE9yaWVudGF0aW9uKHgsIHkpO1xuICAgIHBsYWNlbWVudEJvYXJkLmtpbGxTaGlwKHgsIHkpO1xuICAgIGRvbUJvYXJkLnVwZGF0ZUJvYXJkKHBsYWNlbWVudEJvYXJkLCBmYWxzZSwgdHJ1ZSk7ICBcbiAgICBwc1tpbmRleF0udGV4dENvbnRlbnQgPSArcHNbaW5kZXhdLnRleHRDb250ZW50ICsgMTsgXG4gICAgcmVtYWluaW5nLS07XG4gICAgZG9tU2hpcHNbaW5kZXhdLmRyYWdnYWJsZSA9IHRydWU7IFxufVxuXG5mdW5jdGlvbiBwaWNrUmFuZG9tICgpIHtcbiAgICBjbGVhckJvYXJkKCk7XG4gICAgcGxhY2VtZW50Qm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgcmFuZG9tLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9tQm9hcmQudXBkYXRlQm9hcmQocGxhY2VtZW50Qm9hcmQsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgcGxhY2VtZW50Qm9hcmQuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGRvbUJvYXJkLmNyZWF0ZVNoaXBEaXYoc2hpcC5jb29yZGluYXRlc1swXVswXSwgc2hpcC5jb29yZGluYXRlc1swXVsxXSwgc2hpcC5kaXJlY3Rpb24sIHNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBzLmZvckVhY2goKHApID0+IHAudGV4dENvbnRlbnQgPSAwKTtcbiAgICAgICAgcmFuZG9tLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSwgNTAwKTtcbiAgICBkb21TaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBzaGlwLmRyYWdnYWJsZSA9IGZhbHNlKTtcbiAgICByZW1haW5pbmcgPSAxMDsgIFxufVxuXG5mdW5jdGlvbiBjbGVhckJvYXJkKCkge1xuICAgIHBsYWNlbWVudEJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gICAgbGV0IHNoaXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb3ZlYWJsZScpKTtcbiAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5yZW1vdmUoKSk7XG4gICAgZG9tQm9hcmQudXBkYXRlQm9hcmQocGxhY2VtZW50Qm9hcmQsIGZhbHNlLCB0cnVlKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArKykgcHNbaV0udGV4dENvbnRlbnQgPSA0IC0gaTtcbiAgICBkb21TaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5kcmFnZ2FibGUgPSB0cnVlKTtcbiAgICByZW1haW5pbmcgPSAwO1xufVxuXG5mdW5jdGlvbiByb3RhdGVTaGlwcygpIHtcbiAgICAoZG9tU2hpcHNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkgPyBvcmllbnRhdGlvbiA9ICdkb3duJyA6IG9yaWVudGF0aW9uID0gJ3JpZ2h0JzsgXG4gICAgZG9tU2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXAuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlJykpO1xufVxuXG5mdW5jdGlvbiBzb2x2ZU91dE9mQm91bmRhcmllcyAoKSB7XG4gICAgaWYgKHBsYWNlbWVudEJvYXJkLnNoaXBzLmxlbmd0aCA8IHJlbWFpbmluZykge1xuICAgICAgICByZW1haW5pbmctLTtcbiAgICB9XG4gICAgZWxzZSBkcmFnSXRlbS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gbmV3R2FtZSAoKSB7XG4gICAgaWYgKHBsYWNlbWVudEJvYXJkLnNoaXBzLmxlbmd0aCA8IDEwKSByZXR1cm47XG4gICAgbGV0IGNvbXB1dGVyID0gZ2FtZWJvYXJkKCk7XG4gICAgY29tcHV0ZXIucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgc2V0UDEocGxhY2VtZW50Qm9hcmQpO1xuICAgIHNldFAyKGNvbXB1dGVyKTtcbiAgICBnYW1lLnJlU3RhcnQoKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIGNhbmNlbC5kaXNhYmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2V0dXAgKCkge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgY2xlYXJCb2FyZCgpO1xuICAgIGNhbmNlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNhbmNlbCgpIHtcbiAgICAoY2FuY2VsLmRpc2FibGVkID09IHRydWUpID8gY2FuY2VsLmRpc2FibGVkID0gZmFsc2U6IGNhbmNlbC5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIG5ld1B2UEdhbWUoKSB7XG4gICAgaWYgKHBsYWNlbWVudEJvYXJkLnNoaXBzLmxlbmd0aCA8IDEwKSByZXR1cm47XG4gICAgaWYgKGNvdW50ZXIgPT0gMCkge1xuICAgICAgICBzZXRQMShwbGFjZW1lbnRCb2FyZCk7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgc2hvd1Bhc3NpbmdTY3JlZW4oMSk7XG4gICAgICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0JztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNldFAyKHBsYWNlbWVudEJvYXJkKTtcbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIGdhbWUucmVTdGFydCgpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICBjYW5jZWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgc2hvd1Bhc3NpbmdTY3JlZW4oMCk7XG4gICAgICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1NldCBQMSBCb2FyZCc7XG4gICAgfSBcbiAgICBjbGVhckJvYXJkKCk7XG59XG5cblxuZXhwb3J0IHsgcnVuU2V0dXAsIHBsYWNlU2hpcCwgY2hlY2tEcmFnLCB0b2dnbGVEcmFnLCBzYXZlVmFyaWFibGVzLFxuICAgICAgICAgc29sdmVPdXRPZkJvdW5kYXJpZXMsIGRpc3BsYXlTZXR1cH1cblxuIiwiY29uc3Qgc2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGxldCBjZWxscyA9IFtdO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsZW5ndGggOyBpKyspIHtcbiAgICAgICAgY2VsbHNbaV0gPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaXQgKG51bSkge1xuICAgICAgICBjZWxsc1tudW1dID0gJ2hpdCc7XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsgKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjZWxsc1tpXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VuaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdW5rID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaGl0LCBpc1N1bmssIGNlbGxzIH1cbn1cblxuZXhwb3J0IHsgc2hpcCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9