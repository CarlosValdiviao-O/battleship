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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    position: relative;\n}\n\n#title {\n    font-size: max(5vw, 50px);\n    padding: 20px 0 0 0;\n    text-align: center;\n}\n\n#setup {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n#setup, #passing-screen {\n    position: absolute;\n    background-color: gray;\n    height: 90vh;\n    width: 90%;\n    transform: translateX(5%) translateY(5vh);\n    border-radius: 20px;\n}  \n\n#passing-screen {\n    display: grid;\n    grid-template-columns: 1fr;\n    align-content: center;\n    justify-items: center;\n    top: 0;\n    left: 0;\n}\n\n#passing-screen h1 {\n    font-size: max(5vw, 50px);\n}\n\n#passing-screen p {\n    font-size: max(3vw, 25px);\n}\n\n#setup .left {\n    width: 60%;\n}\n\n#instructions {\n    font-size: max(2vw, 15px);\n    font-weight: bold;\n}\n\n.right {\n    padding: 10%;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n#drag-ships {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 15px;\n    max-height: max-content;\n}\n\n#player-board, #enemy-board, #placement-board, .ship-container {\n    display: flex;\n    height: max-content;\n    width: max-content;\n}\n\n#player-board, #enemy-board, #placement-board{\n    margin-bottom: 2vw;\n}\n\n\n.ships-remaining {\n    font-size: max(2vw, 15px);\n}\n\n.ship-container p::before, .small p::before {\n    content: 'x';\n}\n\n.ship-container .ship .cell, .ship.moveable .cell {\n    cursor: grabbing;\n}\n\n.ship.moveable {\n    transform: translateX(-1px) translateY(-1px);\n    overflow: visible;\n}\n\n#setting-buttons {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: 1fr 2fr;\n    height: 10vw;\n    gap: 5px;\n}\n\n#setting-buttons button {\n    padding: 0 5px;\n    border-radius: 15px;\n    min-width: max-content;\n    cursor: pointer;\n    font-size: max(2vw, 15px);\n    font-weight: bold;\n}\n\n#random {\n    grid-column: 1/3;\n}\n\n#rotate {\n    grid-column: 3/5;\n}\n\n#clear {\n    grid-column: 5/-1;\n}\n\n#start {\n    grid-column: 1/4;\n}\n\n#mode {\n    grid-column: 4/-1;\n}\n\n.drag-over.available {\n    background-color: rgb(0 0 0 / 40%);\n}\n\n.ship.hide, #setup.hide, #setup .hide {\n    display: none;\n}\n\n.rotate {\n    display: flex;\n    width: max-content;\n    margin-bottom: 1vw;\n}\n\n#cancel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-height: 30px;\n    min-width: 40px;\n    border-radius: 15px;\n    height: 4vw;\n    width: 5wv;\n    cursor: pointer;\n}\n\n#boards {\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    justify-items: center;\n}\n\n.row {\n    display: flex;\n    flex-direction: column;\n}\n\n.cell {\n    min-width: 20px;\n    min-height: 20px;\n    font-size: max(2vw, 15px);\n    height: 2.5vw;\n    width: 2.5vw;\n    border: 1px solid black;\n}\n\n.coord {\n    border: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#player-board .ship, #enemy-board .ship.hit, #setup .ship, .ships .ship {\n    color: red;\n    background-color: rgb(97, 97, 97);\n}\n\n.small {\n    display: flex;\n    font-size: max(1.5vw, 10px);\n}\n\n.small .cell {\n    min-width: 10px;\n    min-height: 10px;\n    width: 1.5vw;\n    height: 1.5vw;\n}\n\n\n.ships {\n    display: flex;\n    flex-direction: column;\n}\n\n.ship.sunk .cell {\n    background-color: rgb(148, 148, 148);\n    border: 1px solid rgb(100, 100, 100);\n}\n\n#hud {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px 25px;\n    gap: 5px;\n}\n\n#hud * {\n    font-size: max(2.5vw, 15px);\n}\n\n#hud p {\n    color: blue;\n}\n\n#hud p.p1 {\n    color: red;\n}\n\n#hud button {\n    padding: 5px 10px;\n    border-radius: 10px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n@media(max-width: 650px) {\n    #setup {\n        grid-template-columns: 1fr;\n    }\n    #setup .right {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    #settings-buttons {\n        grid-template-columns: 1fr;\n    }\n   \n    #random {\n        grid-column: 1/-1;\n    }\n\n    #rotate {\n        grid-column: 1/-1;\n    }\n\n    #clear {\n        grid-column: 1/-1;\n    }\n\n    #start {\n        grid-column: 1/-1;\n    }\n\n    #mode {\n        grid-column: 1/-1;\n    }\n}\n\n@media(max-width: 560px) {\n    #boards {\n        grid-template-columns: 1fr;\n        align-items: center;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    position: relative;\n}\n\n#title {\n    font-size: max(5vw, 50px);\n    padding: 20px 0 0 0;\n    text-align: center;\n}\n\n#setup {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n#setup, #passing-screen {\n    position: absolute;\n    background-color: gray;\n    height: 90vh;\n    width: 90%;\n    transform: translateX(5%) translateY(5vh);\n    border-radius: 20px;\n}  \n\n#passing-screen {\n    display: grid;\n    grid-template-columns: 1fr;\n    align-content: center;\n    justify-items: center;\n    top: 0;\n    left: 0;\n}\n\n#passing-screen h1 {\n    font-size: max(5vw, 50px);\n}\n\n#passing-screen p {\n    font-size: max(3vw, 25px);\n}\n\n#setup .left {\n    width: 60%;\n}\n\n#instructions {\n    font-size: max(2vw, 15px);\n    font-weight: bold;\n}\n\n.right {\n    padding: 10%;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n#drag-ships {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 15px;\n    max-height: max-content;\n}\n\n#player-board, #enemy-board, #placement-board, .ship-container {\n    display: flex;\n    height: max-content;\n    width: max-content;\n}\n\n#player-board, #enemy-board, #placement-board{\n    margin-bottom: 2vw;\n}\n\n\n.ships-remaining {\n    font-size: max(2vw, 15px);\n}\n\n.ship-container p::before, .small p::before {\n    content: 'x';\n}\n\n.ship-container .ship .cell, .ship.moveable .cell {\n    cursor: grabbing;\n}\n\n.ship.moveable {\n    transform: translateX(-1px) translateY(-1px);\n    overflow: visible;\n}\n\n#setting-buttons {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: 1fr 2fr;\n    height: 10vw;\n    gap: 5px;\n}\n\n#setting-buttons button {\n    padding: 0 5px;\n    border-radius: 15px;\n    min-width: max-content;\n    cursor: pointer;\n    font-size: max(2vw, 15px);\n    font-weight: bold;\n}\n\n#random {\n    grid-column: 1/3;\n}\n\n#rotate {\n    grid-column: 3/5;\n}\n\n#clear {\n    grid-column: 5/-1;\n}\n\n#start {\n    grid-column: 1/4;\n}\n\n#mode {\n    grid-column: 4/-1;\n}\n\n.drag-over.available {\n    background-color: rgb(0 0 0 / 40%);\n}\n\n.ship.hide, #setup.hide, #setup .hide {\n    display: none;\n}\n\n.rotate {\n    display: flex;\n    width: max-content;\n    margin-bottom: 1vw;\n}\n\n#cancel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-height: 30px;\n    min-width: 40px;\n    border-radius: 15px;\n    height: 4vw;\n    width: 5wv;\n    cursor: pointer;\n}\n\n#boards {\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr;\n    justify-items: center;\n}\n\n.row {\n    display: flex;\n    flex-direction: column;\n}\n\n.cell {\n    min-width: 20px;\n    min-height: 20px;\n    font-size: max(2vw, 15px);\n    height: 2.5vw;\n    width: 2.5vw;\n    border: 1px solid black;\n}\n\n.coord {\n    border: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#player-board .ship, #enemy-board .ship.hit, #setup .ship, .ships .ship {\n    color: red;\n    background-color: rgb(97, 97, 97);\n}\n\n.small {\n    display: flex;\n    font-size: max(1.5vw, 10px);\n}\n\n.small .cell {\n    min-width: 10px;\n    min-height: 10px;\n    width: 1.5vw;\n    height: 1.5vw;\n}\n\n\n.ships {\n    display: flex;\n    flex-direction: column;\n}\n\n.ship.sunk .cell {\n    background-color: rgb(148, 148, 148);\n    border: 1px solid rgb(100, 100, 100);\n}\n\n#hud {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px 25px;\n    gap: 5px;\n}\n\n#hud * {\n    font-size: max(2.5vw, 15px);\n}\n\n#hud p {\n    color: blue;\n}\n\n#hud p.p1 {\n    color: red;\n}\n\n#hud button {\n    padding: 5px 10px;\n    border-radius: 10px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n@media(max-width: 650px) {\n    #setup {\n        grid-template-columns: 1fr;\n    }\n    #setup .right {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    #settings-buttons {\n        grid-template-columns: 1fr;\n    }\n   \n    #random {\n        grid-column: 1/-1;\n    }\n\n    #rotate {\n        grid-column: 1/-1;\n    }\n\n    #clear {\n        grid-column: 1/-1;\n    }\n\n    #start {\n        grid-column: 1/-1;\n    }\n\n    #mode {\n        grid-column: 1/-1;\n    }\n}\n\n@media(max-width: 560px) {\n    #boards {\n        grid-template-columns: 1fr;\n        align-items: center;\n    }\n}"],"sourceRoot":""}]);
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

    const random = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button', '#random');
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
    setTimeout(() => {
        domBoard.updateBoard(placementBoard, false, true);
        placementBoard.ships.forEach(ship => {
            domBoard.createShipDiv(ship.coordinates[0][0], ship.coordinates[0][1], ship.direction, ship.coordinates.length);
        });
        ps.forEach((p) => p.textContent = 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxL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QWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaHVkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zZXR1cC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDV2dywgNTBweCk7XFxuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3NldHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZXR1cCwgI3Bhc3Npbmctc2NyZWVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1JSkgdHJhbnNsYXRlWSg1dmgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn0gIFxcblxcbiNwYXNzaW5nLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4jcGFzc2luZy1zY3JlZW4gaDEge1xcbiAgICBmb250LXNpemU6IG1heCg1dncsIDUwcHgpO1xcbn1cXG5cXG4jcGFzc2luZy1zY3JlZW4gcCB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDN2dywgMjVweCk7XFxufVxcblxcbiNzZXR1cCAubGVmdCB7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcbiNpbnN0cnVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IG1heCgydncsIDE1cHgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgcGFkZGluZzogMTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2RyYWctc2hpcHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG59XFxuXFxuI3BsYXllci1ib2FyZCwgI2VuZW15LWJvYXJkLCAjcGxhY2VtZW50LWJvYXJkLCAuc2hpcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsICNlbmVteS1ib2FyZCwgI3BsYWNlbWVudC1ib2FyZHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xcbn1cXG5cXG5cXG4uc2hpcHMtcmVtYWluaW5nIHtcXG4gICAgZm9udC1zaXplOiBtYXgoMnZ3LCAxNXB4KTtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIHA6OmJlZm9yZSwgLnNtYWxsIHA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICd4JztcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIC5zaGlwIC5jZWxsLCAuc2hpcC5tb3ZlYWJsZSAuY2VsbCB7XFxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcblxcbi5zaGlwLm1vdmVhYmxlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpIHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4jc2V0dGluZy1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgICBoZWlnaHQ6IDEwdnc7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jc2V0dGluZy1idXR0b25zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDJ2dywgMTVweCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcmFuZG9tIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI3JvdGF0ZSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzU7XFxufVxcblxcbiNjbGVhciB7XFxuICAgIGdyaWQtY29sdW1uOiA1Ly0xO1xcbn1cXG5cXG4jc3RhcnQge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbn1cXG5cXG4jbW9kZSB7XFxuICAgIGdyaWQtY29sdW1uOiA0Ly0xO1xcbn1cXG5cXG4uZHJhZy1vdmVyLmF2YWlsYWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQwJSk7XFxufVxcblxcbi5zaGlwLmhpZGUsICNzZXR1cC5oaWRlLCAjc2V0dXAgLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxdnc7XFxufVxcblxcbiNjYW5jZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIG1pbi13aWR0aDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgaGVpZ2h0OiA0dnc7XFxuICAgIHdpZHRoOiA1d3Y7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2JvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAyZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jZWxsIHtcXG4gICAgbWluLXdpZHRoOiAyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IG1heCgydncsIDE1cHgpO1xcbiAgICBoZWlnaHQ6IDIuNXZ3O1xcbiAgICB3aWR0aDogMi41dnc7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29vcmQge1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQgLnNoaXAsICNlbmVteS1ib2FyZCAuc2hpcC5oaXQsICNzZXR1cCAuc2hpcCwgLnNoaXBzIC5zaGlwIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NywgOTcpO1xcbn1cXG5cXG4uc21hbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IG1heCgxLjV2dywgMTBweCk7XFxufVxcblxcbi5zbWFsbCAuY2VsbCB7XFxuICAgIG1pbi13aWR0aDogMTBweDtcXG4gICAgbWluLWhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEuNXZ3O1xcbiAgICBoZWlnaHQ6IDEuNXZ3O1xcbn1cXG5cXG5cXG4uc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcC5zdW5rIC5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxufVxcblxcbiNodWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI2h1ZCAqIHtcXG4gICAgZm9udC1zaXplOiBtYXgoMi41dncsIDE1cHgpO1xcbn1cXG5cXG4jaHVkIHAge1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuI2h1ZCBwLnAxIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2h1ZCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgI3NldHVwIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuICAgICNzZXR1cCAucmlnaHQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxuXFxuICAgICNzZXR0aW5ncy1idXR0b25zIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuICAgXFxuICAgICNyYW5kb20ge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIH1cXG5cXG4gICAgI3JvdGF0ZSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgfVxcblxcbiAgICAjY2xlYXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIH1cXG5cXG4gICAgI3N0YXJ0IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB9XFxuXFxuICAgICNtb2RlIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAgICNib2FyZHMge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIs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O1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtRQUMxQixtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgICBmb250LXNpemU6IG1heCg1dncsIDUwcHgpO1xcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNzZXR1cCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2V0dXAsICNwYXNzaW5nLXNjcmVlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNSUpIHRyYW5zbGF0ZVkoNXZoKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59ICBcXG5cXG4jcGFzc2luZy1zY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuI3Bhc3Npbmctc2NyZWVuIGgxIHtcXG4gICAgZm9udC1zaXplOiBtYXgoNXZ3LCA1MHB4KTtcXG59XFxuXFxuI3Bhc3Npbmctc2NyZWVuIHAge1xcbiAgICBmb250LXNpemU6IG1heCgzdncsIDI1cHgpO1xcbn1cXG5cXG4jc2V0dXAgLmxlZnQge1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4jaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiBtYXgoMnZ3LCAxNXB4KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkcmFnLXNoaXBzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsICNlbmVteS1ib2FyZCwgI3BsYWNlbWVudC1ib2FyZCwgLnNoaXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZW1lbnQtYm9hcmR7XFxuICAgIG1hcmdpbi1ib3R0b206IDJ2dztcXG59XFxuXFxuXFxuLnNoaXBzLXJlbWFpbmluZyB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDJ2dywgMTVweCk7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciBwOjpiZWZvcmUsIC5zbWFsbCBwOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAneCc7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciAuc2hpcCAuY2VsbCwgLnNoaXAubW92ZWFibGUgLmNlbGwge1xcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG5cXG4uc2hpcC5tb3ZlYWJsZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KSB0cmFuc2xhdGVZKC0xcHgpO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuI3NldHRpbmctYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gICAgaGVpZ2h0OiAxMHZ3O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI3NldHRpbmctYnV0dG9ucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IG1heCgydncsIDE1cHgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3JhbmRvbSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbiNyb3RhdGUge1xcbiAgICBncmlkLWNvbHVtbjogMy81O1xcbn1cXG5cXG4jY2xlYXIge1xcbiAgICBncmlkLWNvbHVtbjogNS8tMTtcXG59XFxuXFxuI3N0YXJ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG59XFxuXFxuI21vZGUge1xcbiAgICBncmlkLWNvbHVtbjogNC8tMTtcXG59XFxuXFxuLmRyYWctb3Zlci5hdmFpbGFibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0MCUpO1xcbn1cXG5cXG4uc2hpcC5oaWRlLCAjc2V0dXAuaGlkZSwgI3NldHVwIC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXZ3O1xcbn1cXG5cXG4jY2FuY2VsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGhlaWdodDogNHZ3O1xcbiAgICB3aWR0aDogNXd2O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMmZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIG1pbi13aWR0aDogMjBweDtcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiBtYXgoMnZ3LCAxNXB4KTtcXG4gICAgaGVpZ2h0OiAyLjV2dztcXG4gICAgd2lkdGg6IDIuNXZ3O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvb3JkIHtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIC5zaGlwLCAjZW5lbXktYm9hcmQgLnNoaXAuaGl0LCAjc2V0dXAgLnNoaXAsIC5zaGlwcyAuc2hpcCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTcsIDk3KTtcXG59XFxuXFxuLnNtYWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiBtYXgoMS41dncsIDEwcHgpO1xcbn1cXG5cXG4uc21hbGwgLmNlbGwge1xcbiAgICBtaW4td2lkdGg6IDEwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxLjV2dztcXG4gICAgaGVpZ2h0OiAxLjV2dztcXG59XFxuXFxuXFxuLnNoaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXAuc3VuayAuY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMCwgMTAwLCAxMDApO1xcbn1cXG5cXG4jaHVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNodWQgKiB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDIuNXZ3LCAxNXB4KTtcXG59XFxuXFxuI2h1ZCBwIHtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblxcbiNodWQgcC5wMSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbiNodWQgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICNzZXR1cCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcbiAgICAjc2V0dXAgLnJpZ2h0IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgfVxcblxcbiAgICAjc2V0dGluZ3MtYnV0dG9ucyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcbiAgIFxcbiAgICAjcmFuZG9tIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB9XFxuXFxuICAgICNyb3RhdGUge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIH1cXG5cXG4gICAgI2NsZWFyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB9XFxuXFxuICAgICNzdGFydCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgfVxcblxcbiAgICAjbW9kZSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgICAjYm9hcmRzIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZENoaWxkRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBwbGFjZVNoaXAsIGNoZWNrRHJhZywgdG9nZ2xlRHJhZywgc2F2ZVZhcmlhYmxlcywgc29sdmVPdXRPZkJvdW5kYXJpZXMgfSBmcm9tIFwiLi9zZXR1cFwiO1xuXG5jb25zdCBjcmVhdGVCb2FyZCA9IChib2FyZCwgZW5lbXkpID0+IHtcbiAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcbiAgICBsZXQgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGZvciAobGV0IGkgPSAtMTsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgbGV0IGRpdiA9IGFkZENoaWxkRWxlbWVudChib2FyZCwgJ2RpdicsICcucm93Jyk7XG4gICAgICAgIGlmIChpID4gLTEpIGNlbGxzW2ldID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgaWYgKGogPT0gMCkge1xuICAgICAgICAgICAgICAgbGV0IGxldHRlciA9IGFkZENoaWxkRWxlbWVudChkaXYsICdwJywgJy5jZWxsJyk7XG4gICAgICAgICAgICAgICBsZXR0ZXIuY2xhc3NMaXN0LmFkZCgnY29vcmQnKTtcbiAgICAgICAgICAgICAgIGxldHRlci50ZXh0Q29udGVudCA9IGxldHRlcnNbaV07IFxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBpZiAoaSA9PSAtMSkge1xuICAgICAgICAgICAgICAgbGV0IGxldHRlciA9IGFkZENoaWxkRWxlbWVudChkaXYsICdwJywgJy5jZWxsJyk7XG4gICAgICAgICAgICAgICBsZXR0ZXIudGV4dENvbnRlbnQgPSBqICsgMTtcbiAgICAgICAgICAgICAgIGxldHRlci5jbGFzc0xpc3QuYWRkKCdjb29yZCcpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAnYnV0dG9uJywgJy5jZWxsJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICBjZWxsc1tpXS5wdXNoKGNlbGwpOyBcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdhbWUuaGFuZGxlVHVybihpLCBqKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJvYXJkIChib2FyZCwgZW5lbXksIHNldHVwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghc2V0dXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmNlbGxzW2ldW2pdLmhpdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLnRleHRDb250ZW50ID0gJ3gnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZW5lbXkpIHtcbiAgICAgICAgICAgICAgICAgICAgKGJvYXJkLmNlbGxzW2ldW2pdLnNoaXAgPiAtMSkgPyBjZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgIChib2FyZC5jZWxsc1tpXVtqXS5zaGlwID09IC0yKSA/IGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5hZGQoJ2F2YWlsYWJsZScpOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LnJlbW92ZSgnYXZhaWxhYmxlJyk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKGJvYXJkLmNlbGxzW2ldW2pdLnNoaXAgPiAtMSAmJiBib2FyZC5jZWxsc1tpXVtqXS5oaXQgPT0gdHJ1ZSkgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGREcm9wRXZlbnRzICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpXG4gICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKCkgPT4gZHJvcChjZWxsc1tpXVtqXSwgaSwgaikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdFbnRlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnLW92ZXInKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJhZ0xlYXZlKGUpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1vdmVyJyk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRyb3AoY2VsbCwgaSwgaikge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuICAgICAgICBpZiAoIWNoZWNrRHJhZygpKSByZXR1cm47XG4gICAgICAgIHggPSBpO1xuICAgICAgICB5ID0gajtcbiAgICAgICAgcGxhY2VTaGlwKHgsIHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNoaXBEaXYgKGksIGosIG9yaWVudGF0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgbGV0IHNoaXAgPSBhZGRDaGlsZEVsZW1lbnQoY2VsbHNbaV1bal0sICdkaXYnLCAnLnNoaXAnKTtcbiAgICAgICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ21vdmVhYmxlJyk7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdG9nZ2xlRHJhZyk7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiBzYXZlVmFyaWFibGVzKDUgLSBsZW5ndGgsIGxlbmd0aCwgc2hpcCwgaSwgaikpXG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRvZ2dsZURyYWcpO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBzb2x2ZU91dE9mQm91bmRhcmllcyk7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gYWRkQ2hpbGRFbGVtZW50KHNoaXAsICdkaXYnLCAnLmNlbGwnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ3JpZ2h0Jykgc2hpcC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVDbGlja0V2ZW50cyAoKSB7XG4gICAgICAgIGxldCBkaXNhYmxlZDtcbiAgICAgICAgKGNlbGxzWzBdWzBdLmRpc2FibGVkID09IHRydWUpID8gZGlzYWJsZWQgPSBmYWxzZTpcbiAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgdXBkYXRlQm9hcmQsIGFkZERyb3BFdmVudHMsIGNyZWF0ZVNoaXBEaXYsIHRvZ2dsZUNsaWNrRXZlbnRzIH1cbn1cblxuY29uc3QgY3JlYXRlQWxpdmVTaGlwcyA9IChkaXYpID0+IHtcbiAgICBsZXQgcHMgPSBbXTtcbiAgICBsZXQgc2hpcHMgPSBbXTtcbiAgICBsZXQgbGVuZ2h0cyA9IFs1LCA0LCAzLCAyXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ2RpdicsICcuc21hbGwnKTtcbiAgICAgICAgbGV0IHAgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gaSArIDE7XG4gICAgICAgIHBzLnB1c2gocCk7XG4gICAgICAgIGxldCBzaGlwID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2RpdicsICcuc2hpcCcpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDUgLSBpOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gYWRkQ2hpbGRFbGVtZW50KHNoaXAsICdkaXYnLCAnLmNlbGwnKTtcbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNoaXBzIChib2FyZCkge1xuICAgICAgICBwcy5mb3JFYWNoKHAgPT4gcC50ZXh0Q29udGVudCA9IDApO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5jbGFzc0xpc3QuYWRkKCdzdW5rJykpO1xuICAgICAgICBib2FyZC5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ2h0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGVuZ2h0c1tpXSA9PSBzaGlwLmNlbGxzLmxlbmd0aCkgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwc1tpbmRleF0udGV4dENvbnRlbnQgPSArcHNbaW5kZXhdLnRleHRDb250ZW50ICsgMTtcbiAgICAgICAgICAgICAgICBzaGlwc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc3VuaycpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4geyB1cGRhdGVTaGlwcyB9XG59XG5cbmZ1bmN0aW9uIHNob3dQYXNzaW5nU2NyZWVuKG51bSkge1xuICAgIGxldCBwbGF5ZXI7XG4gICAgKG51bSA9PSAwKSA/IHBsYXllciA9ICdPbmUnOiBwbGF5ZXIgPSAnVHdvJztcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBsZXQgZGl2ID0gYWRkQ2hpbGRFbGVtZW50KGJvZHksICdkaXYnLCAnI3Bhc3Npbmctc2NyZWVuJyk7XG4gICAgbGV0IGgyID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ2gxJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSBgUGxheWVyICR7cGxheWVyfSdzIFR1cm5gO1xuICAgIGxldCBwID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gJ0NsaWNrIHRvIGNvbnRpbnVlJztcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXYucmVtb3ZlKCkpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVCb2FyZCwgY3JlYXRlQWxpdmVTaGlwcywgc2hvd1Bhc3NpbmdTY3JlZW4gfSIsImNvbnN0IGFkZENoaWxkRWxlbWVudCA9IChwYXJlbnQsIGVsZW1lbnQsIGNzcykgPT4ge1xuICAgIGxldCBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1lbnR9YCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsbSk7IFxuICAgIGlmIChjc3MgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChjc3NbMF0gPT0gJy4nIClcbiAgICAgICAgZWxtLmNsYXNzTmFtZSA9IGNzcy5zdWJzdHIoMSk7XG4gICAgICAgIGVsc2UgaWYgKGNzc1swXSA9PSAnIycpXG4gICAgICAgIGVsbS5pZCA9IGNzcy5zdWJzdHIoMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsbTtcbn1cblxuZnVuY3Rpb24gaGlkZUNvbnRlbnRzIChkaXYpIHtcbiAgICBmb3IgKGxldCBpPTA7IGk8ZGl2LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGl2LmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzdG9yZUNvbnRlbnRzIChkaXYpIHtcbiAgICBmb3IgKGxldCBpPTA7IGk8ZGl2LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGl2LmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cbn1cblxuXG5leHBvcnQge2FkZENoaWxkRWxlbWVudCwgaGlkZUNvbnRlbnRzLCByZXN0b3JlQ29udGVudHN9OyIsImltcG9ydCB7IGRpc3BsYXlXaW5uZXIsIHVwZGF0ZU1lc3NhZ2UgfSBmcm9tIFwiLi9odWRcIlxuaW1wb3J0IHsgcGxheWVyQm9hcmQsIGVuZW15Qm9hcmQsIHAxR2FtZWJvYXJkLCBwMkdhbWVib2FyZCwgZW5lbXlTaGlwcywgcGxheWVyU2hpcHMsXG4gICAgICAgIHAxLCBwMiwgcHZwIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IHNob3dQYXNzaW5nU2NyZWVuIH0gZnJvbSBcIi4vZG9tU3R1ZmZcIjtcblxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGxldCBvdmVyID0gZmFsc2U7XG4gICAgbGV0IHBsYXllcnMgPSBbcDEsIHAyXTtcbiAgICBsZXQgYm9hcmRzID0gW3AxR2FtZWJvYXJkLCBwMkdhbWVib2FyZF07XG4gICAgbGV0IGN1cnJlbnRQID0gMDtcbiAgICBsZXQgY3VycmVudEIgPSAxO1xuICAgIHAxR2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIHBsYXllckJvYXJkLnVwZGF0ZUJvYXJkKHAxR2FtZWJvYXJkLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgcDJHYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgZW5lbXlCb2FyZC51cGRhdGVCb2FyZChwMkdhbWVib2FyZCwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlVHVybih4LCB5KSB7XG4gICAgICAgIGlmIChvdmVyKSByZXR1cm47XG4gICAgICAgIGlmIChwbGF5ZXJzW2N1cnJlbnRQXS5icmFpbiA9PSAnaHVtYW4nKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVkID0gcGxheWVyc1tjdXJyZW50UF0udGFrZVR1cm4oeCwgeSwgYm9hcmRzW2N1cnJlbnRCXSk7XG4gICAgICAgICAgICBpZiAocGxheWVkKSB7XG4gICAgICAgICAgICAgICAgZW5lbXlTaGlwcy51cGRhdGVTaGlwcyhib2FyZHNbY3VycmVudEJdKTtcbiAgICAgICAgICAgICAgICBlbmVteUJvYXJkLnVwZGF0ZUJvYXJkKGJvYXJkc1tjdXJyZW50Ql0sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvdmVyID0gY2hlY2tXaW5uZXIoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocHZwID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVycyA9IFtwMSwgcDJdO1xuICAgICAgICAgICAgICAgICAgICBlbmVteUJvYXJkLnRvZ2dsZUNsaWNrRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVR1cm5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGFzc2luZ1NjcmVlbihjdXJyZW50UCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTWVzc2FnZShjdXJyZW50UCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwcy51cGRhdGVTaGlwcyhib2FyZHNbY3VycmVudFBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLnVwZGF0ZUJvYXJkKGJvYXJkc1tjdXJyZW50UF0sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteVNoaXBzLnVwZGF0ZVNoaXBzKGJvYXJkc1tjdXJyZW50Ql0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlCb2FyZC51cGRhdGVCb2FyZChib2FyZHNbY3VycmVudEJdLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteUJvYXJkLnRvZ2dsZUNsaWNrRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUdXJucygpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNZXNzYWdlKGN1cnJlbnRQKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVHVybigpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbmVteUJvYXJkLnRvZ2dsZUNsaWNrRXZlbnRzKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzW2N1cnJlbnRQXS50YWtlQ29tcHV0ZXJUdXJuKGJvYXJkc1tjdXJyZW50Ql0pO1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBzLnVwZGF0ZVNoaXBzKGJvYXJkc1tjdXJyZW50Ql0pO1xuICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLnVwZGF0ZUJvYXJkKGJvYXJkc1tjdXJyZW50Ql0sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgb3ZlciA9IGNoZWNrV2lubmVyKCk7XG4gICAgICAgICAgICAgICAgY2hhbmdlVHVybnMoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVNZXNzYWdlKGN1cnJlbnRQKTtcbiAgICAgICAgICAgICAgICBlbmVteUJvYXJkLnRvZ2dsZUNsaWNrRXZlbnRzKCk7XG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvdmVyKSB7XG4gICAgICAgICAgICBkaXNwbGF5V2lubmVyKGN1cnJlbnRCKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrV2lubmVyICgpIHtcbiAgICAgICAgaWYgKGJvYXJkc1tjdXJyZW50Ql0uYXJlQWxsU3VuaygpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7d2lubmVyOiBwbGF5ZXJzW2N1cnJlbnRQXX0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZVR1cm5zKCkge1xuICAgICAgICBpZiAoY3VycmVudFAgPT0gMCkge1xuICAgICAgICAgICAgY3VycmVudFAgPSAxO1xuICAgICAgICAgICAgY3VycmVudEIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFAgPSAwO1xuICAgICAgICAgICAgY3VycmVudEIgPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHJlU3RhcnQgKCkge1xuICAgICAgICBwbGF5ZXJCb2FyZC51cGRhdGVCb2FyZChwMUdhbWVib2FyZCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgZW5lbXlCb2FyZC51cGRhdGVCb2FyZChwMkdhbWVib2FyZCwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICBwbGF5ZXJTaGlwcy51cGRhdGVTaGlwcyhwMUdhbWVib2FyZCk7XG4gICAgICAgIGVuZW15U2hpcHMudXBkYXRlU2hpcHMocDJHYW1lYm9hcmQpO1xuICAgICAgICBib2FyZHMgPSBbcDFHYW1lYm9hcmQsIHAyR2FtZWJvYXJkXTtcbiAgICAgICAgY3VycmVudFAgPSAwO1xuICAgICAgICBjdXJyZW50QiA9IDE7XG4gICAgICAgIHAyLmNsZWFyVmFyaWFibGVzKCk7XG4gICAgICAgIHBsYXllcnMgPSBbcDEsIHAyXTtcbiAgICAgICAgb3ZlciA9IGZhbHNlO1xuICAgICAgICB1cGRhdGVNZXNzYWdlKDApO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBoYW5kbGVUdXJuLCByZVN0YXJ0IH1cbn1cblxuZXhwb3J0IHsgc3RhcnRHYW1lIH0iLCJpbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcHNcIjtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGxldCBjZWxscyA9IFtdO1xuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgY2xlYXJCb2FyZCgpO1xuXG4gICAgZnVuY3Rpb24gY2xlYXJCb2FyZCAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IDEwIDsgaSsrKXtcbiAgICAgICAgICAgIGNlbGxzW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCAxMCA7IGorKyl7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV1bal0gPSB7aGl0OiBmYWxzZSwgc2hpcDogLTJ9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgbGV0IGludmFsaWRDb29yZCA9IGZhbHNlO1xuICAgICAgICBpbnZhbGlkQ29vcmQgPSBjaGVja1ZhbGlkQ29vcmRpbmF0ZXMoeCwgeSwgb3JpZW50YXRpb24sIGxlbmd0aCk7XG4gICAgICAgIGlmIChpbnZhbGlkQ29vcmQgPT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICBsZXQgbmV3U2hpcCA9IHNoaXAobGVuZ3RoKTtcbiAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgbmV3U2hpcC5jb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkID0gW107XG4gICAgICAgIG5ld1NoaXAuZGlyZWN0aW9uID0gb3JpZW50YXRpb247XG4gICAgICAgIGxldCBhdXhYID0geDtcbiAgICAgICAgbGV0IGF1eFkgPSB5O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsc1t4XVt5XS5zaGlwID0gaTtcbiAgICAgICAgICAgIG5ld1NoaXAuY29vcmRpbmF0ZXNbaV0gPSBbeCwgeV07XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2Rvd24nKSB5Kys7XG4gICAgICAgICAgICBlbHNlIHgrKztcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWxsIGFkamFjZW50IGNlbGxzIHdpdGggLTFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggKyAyOyBpKyspIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WS0xKSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WC0xXVthdXhZLTFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLTEsIGF1eFktMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgrMSwgYXV4WS0xKSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WCsxXVthdXhZLTFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYKzEsIGF1eFktMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgsIGF1eFktMSkgJiYgaSA9PSAwIHx8IGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLCBhdXhZLTEpICYmIGkgPT0gbGVuZ3RoKzEpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFhdW2F1eFktMV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgsIGF1eFktMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WC0xLCBhdXhZLTEpKXtcbiAgICAgICAgICAgICAgICAgICBjZWxsc1thdXhYLTFdW2F1eFktMV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgtMSwgYXV4WS0xXSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZihjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WC0xLCBhdXhZKzEpKXtcbiAgICAgICAgICAgICAgICAgICBjZWxsc1thdXhYLTFdW2F1eFkrMV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgtMSwgYXV4WSsxXSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZihjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WC0xLCBhdXhZKSAmJiBpID09IDAgfHwgY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WSkgJiYgaSA9PSBsZW5ndGgrMSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WC0xXVthdXhZXS5zaGlwID0gLTE7IFxuICAgICAgICAgICAgICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQucHVzaChbYXV4WC0xLCBhdXhZXSk7XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnZG93bicpIGF1eFkrKztcbiAgICAgICAgICAgIGVsc2UgYXV4WCsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tWYWxpZENvb3JkaW5hdGVzKHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKHggPiA5IHx8IHggPCAwIHx8IHkgPiA5IHx8IHkgPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdkb3duJyAmJiB5K2xlbmd0aCA+IDEwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdyaWdodCcgJiYgeCtsZW5ndGggPiAxMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBpZihjZWxsc1t4XVt5XS5zaGlwID4gLTIpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdkb3duJykgeSsrO1xuICAgICAgICAgICAgZWxzZSB4Kys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVmFsaWRBdXhDb29yZCAoeCwgeSkge1xuICAgICAgICBpZiAoeCA+IDkgfHwgeCA8IDAgfHwgeSA+IDkgfHwgeSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTsgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayAoeCwgeSkge1xuICAgICAgICBpZiAoY2VsbHNbeF1beV0uaGl0ID09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY2VsbHNbeF1beV0uaGl0ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwc1tpXS5jb29yZGluYXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwc1tpXS5jb29yZGluYXRlc1tqXVswXSA9PSB4ICYmIHNoaXBzW2ldLmNvb3JkaW5hdGVzW2pdWzFdID09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNbaV0uaGl0KGNlbGxzW3hdW3ldLnNoaXApO1xuICAgICAgICAgICAgICAgICAgICBtYXJrQWRqYWNlbnRDZWxscyhzaGlwc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXJrQWRqYWNlbnRDZWxscyhzaGlwKSB7XG4gICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubmV4dFRvQ29vcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNlbGxzW3NoaXAubmV4dFRvQ29vcmRbaV1bMF1dW3NoaXAubmV4dFRvQ29vcmRbaV1bMV1dLmhpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcmVBbGxTdW5rKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXNoaXBzW2ldLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5ICgpIHtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgNCwgMywgMywgMywgMiwgMiwgMiwgMl07XG4gICAgICAgIGNvbnN0IG1pc3NpbmdTaGlwcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdHJpZXMgPSA1ICogKGkrMSk7XG4gICAgICAgICAgICB3aGlsZSAoc2hpcHMubGVuZ3RoICsgbWlzc2luZ1NoaXBzLmxlbmd0aCA8PSBpICYmIHRyaWVzID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gcGlja1JhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKHgsIHksIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3Roc1tpXSk7XG4gICAgICAgICAgICAgICAgdHJpZXMtLTtcbiAgICAgICAgICAgICAgICBpZiAodHJpZXMgPT0gMCAmJiBzaGlwcy5sZW5ndGggKyBtaXNzaW5nU2hpcHMubGVuZ3RoIDw9IGkpIG1pc3NpbmdTaGlwcy5wdXNoKHNoaXBMZW5ndGhzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaXNzaW5nU2hpcHMubGVuZ3RoID4gMCkgc29sdmVNaXNzaW5nU2hpcHMobWlzc2luZ1NoaXBzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwaWNrUmFuZG9tT3JpZW50YXRpb24gKCkge1xuICAgICAgICBsZXQgYXV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpO1xuICAgICAgICBpZiAoYXV4ID09IDEpIHJldHVybiAncmlnaHQnO1xuICAgICAgICBlbHNlIHJldHVybiAnZG93bic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc29sdmVNaXNzaW5nU2hpcHMgKGFycikge1xuICAgICAgICBsZXQgYXZhaWxhYmxlID0gW107XG4gICAgICAgIGxldCBsZW5ndGggPSBzaGlwcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IDEwIDsgaSsrKXtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IDEwIDsgaisrKXtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbHNbaV1bal0uc2hpcCA9PSAtMikgYXZhaWxhYmxlLnB1c2goW2ksIGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhdmFpbGFibGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoYXZhaWxhYmxlW2pdWzBdLCBhdmFpbGFibGVbal1bMV0sICdyaWdodCcsIGFycltpXSk7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKGF2YWlsYWJsZVtqXVswXSwgYXZhaWxhYmxlW2pdWzFdLCAnZG93bicsIGFycltpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA8IHNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBzaGlwcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlwcy5sZW5ndGggIT0gMTApIHtcbiAgICAgICAgICAgIGNsZWFyQm9hcmQoKTsgXG4gICAgICAgICAgICBzaGlwcyA9IFtdO1xuICAgICAgICAgICAgcGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTaGlwSW5kZXgoeCwgeSkge1xuICAgICAgICBpZiAoY2VsbHNbeF1beV0uc2hpcCA+IC0xKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoc2hpcHNbaV0uY29vcmRpbmF0ZXNbY2VsbHNbeF1beV0uc2hpcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBzW2ldLmNvb3JkaW5hdGVzW2NlbGxzW3hdW3ldLnNoaXBdWzBdID09IHggJiYgc2hpcHNbaV0uY29vcmRpbmF0ZXNbY2VsbHNbeF1beV0uc2hpcF1bMV0gPT0geSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBraWxsU2hpcCAoeCwgeSkge1xuICAgICAgICBsZXQgaW5kZXggPSBnZXRTaGlwSW5kZXgoeCwgeSk7XG4gICAgICAgIHNoaXBzW2luZGV4XS5jb29yZGluYXRlcy5mb3JFYWNoKHZhbCA9PiBjZWxsc1t2YWxbMF1dW3ZhbFsxXV0uc2hpcCA9IC0yKTtcbiAgICAgICAgc2hpcHNbaW5kZXhdLm5leHRUb0Nvb3JkLmZvckVhY2godmFsID0+IGNlbGxzW3ZhbFswXV1bdmFsWzFdXS5zaGlwID0gLTIpO1xuICAgICAgICBzaGlwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzaGlwc1tpXS5uZXh0VG9Db29yZC5mb3JFYWNoKHZhbCA9PiBjZWxsc1t2YWxbMF1dW3ZhbFsxXV0uc2hpcCA9IC0xKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2hpcE9yaWVudGF0aW9uICh4LCB5KSB7XG4gICAgICAgIGxldCBpbmRleCA9IGdldFNoaXBJbmRleCh4LCB5KTtcbiAgICAgICAgcmV0dXJuIHNoaXBzW2luZGV4XS5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hpcElzU3VuayAoeCwgeSkge1xuICAgICAgICBsZXQgaW5kZXggPSBnZXRTaGlwSW5kZXgoeCwgeSk7XG4gICAgICAgIHJldHVybiBzaGlwc1tpbmRleF0uaXNTdW5rKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGxhY2VTaGlwLCBjZWxscywgcmVjZWl2ZUF0dGFjaywgc2hpcHMsIGFyZUFsbFN1bmssIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgICAgICAgICAgIGtpbGxTaGlwLCBnZXRTaGlwT3JpZW50YXRpb24sIHNoaXBJc1N1bmsgfVxufVxuXG5leHBvcnQgeyBnYW1lYm9hcmQgfVxuXG4iLCJpbXBvcnQgeyBhZGRDaGlsZEVsZW1lbnQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGRpc3BsYXlTZXR1cCB9IGZyb20gXCIuL3NldHVwXCJcblxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWQnKTtcblxubGV0IG1lc3NhZ2U7XG5cbmZ1bmN0aW9uIHJ1bkh1ZCgpIHtcbiAgICBtZXNzYWdlID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ3AnKTtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYFBsYXllciBPbmUncyBUdXJuYDtcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3AxJyk7XG4gICAgbGV0IHJlc3RhcnQgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnYnV0dG9uJyk7XG4gICAgcmVzdGFydC50ZXh0Q29udGVudCA9ICdOZXcgR2FtZSc7XG4gICAgcmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlTZXR1cClcbn1cblxuZnVuY3Rpb24gdXBkYXRlTWVzc2FnZSAobnVtKSB7XG4gICAgaWYgKG51bSA9PSAxKSB7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAgYFBsYXllciBUd28ncyBUdXJuYDtcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdwMScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgT25lJ3MgVHVybmA7XG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgncDEnKTtcbiAgICB9ICAgICAgIFxufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2lubmVyIChudW0pIHtcbiAgICBpZiAobnVtID09IDEpIHtcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICBgUGxheWVyIFR3byBoYXMgV29uIHRoZSBNYXRjaCFgO1xuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3AxJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYFBsYXllciBPbmUgaGFzIFdvbiB0aGUgTWF0Y2ghYDtcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdwMScpO1xuICAgIH0gXG59XG5cbmV4cG9ydCB7IHJ1bkh1ZCwgdXBkYXRlTWVzc2FnZSwgZGlzcGxheVdpbm5lciB9IiwiaW1wb3J0IHsgY3JlYXRlQm9hcmQsIGNyZWF0ZUFsaXZlU2hpcHMgfSBmcm9tIFwiLi9kb21TdHVmZlwiO1xuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHJ1blNldHVwIH0gZnJvbSBcIi4vc2V0dXBcIjtcbmltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgcnVuSHVkIH0gZnJvbSBcIi4vaHVkXCI7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItYm9hcmQnKTtcbmNvbnN0IGVuZW15ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZW15LWJvYXJkJyk7XG5sZXQgcGxheWVyQm9hcmQgPSBjcmVhdGVCb2FyZChwbGF5ZXIxLCBmYWxzZSk7XG5sZXQgZW5lbXlCb2FyZCA9IGNyZWF0ZUJvYXJkKGVuZW15LCB0cnVlKTtcbmxldCBwbGF5ZXJTaGlwcyA9IGNyZWF0ZUFsaXZlU2hpcHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1zaGlwcycpKTtcbmxldCBlbmVteVNoaXBzID0gY3JlYXRlQWxpdmVTaGlwcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5lbXktc2hpcHMnKSk7XG5cbmxldCBwMUdhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xubGV0IHAyR2FtZWJvYXJkID0gZ2FtZWJvYXJkKCk7XG5cbmxldCBwMSA9IHBsYXllcignUGxheWVyIDEnLCAnaHVtYW4nKTtcbmxldCBwMiA9IHBsYXllcignUGxheWVyIDInLCAnYWknKTtcbmxldCBwdnAgPSBmYWxzZTtcblxucnVuU2V0dXAoKTtcbmxldCBnYW1lID0gc3RhcnRHYW1lKCk7XG5ydW5IdWQoKTtcblxuXG5mdW5jdGlvbiBzZXRQMSAoYm9hcmQpIHtcbiAgICBwMUdhbWVib2FyZCA9IGJvYXJkO1xufVxuXG5mdW5jdGlvbiBzZXRQMiAoYm9hcmQpIHtcbiAgICBwMkdhbWVib2FyZCA9IGJvYXJkO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VNb2RlICgpIHtcbiAgICBpZiAocHZwKSB7XG4gICAgICAgIHB2cCA9IGZhbHNlO1xuICAgICAgICBwMiA9IHBsYXllcignUGxheWVyIDInLCAnYWknKTsgIFxuICAgIH0gIFxuICAgIGVsc2Uge1xuICAgICAgICBwdnAgPSB0cnVlO1xuICAgICAgICBwMiA9IHBsYXllcignUGxheWVyIDInLCAnaHVtYW4nKTsgXG4gICAgfVxufVxuXG5cbmV4cG9ydCB7IGdhbWUsIHBsYXllckJvYXJkLCBlbmVteUJvYXJkLCBzZXRQMSwgc2V0UDIsIHAxR2FtZWJvYXJkLCBwMkdhbWVib2FyZCxcbiAgICAgICAgZW5lbXlTaGlwcywgcGxheWVyU2hpcHMsIHAxLCBwMiwgcHZwLCBjaGFuZ2VNb2RlIH1cblxuXG4vL2FkZCBjb21wdXRlciBzbWFydCBwbGF5XG4vL2FkZCBzbWFsbCBkZWxheSBmb3IgY29tcHV0ZXIgcGxheVxuLy9zZXR1cCBmb3Igc2Vjb25kIHBsYXllciIsImNvbnN0IHBsYXllciA9IChuYW1lLCBicmFpbikgPT4ge1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBsZXQgc2Vjb25kSGl0ID0gZmFsc2U7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBkaXJlY3Rpb247XG4gICAgbGV0IHRyaWVzID0gW107XG4gICAgbGV0IHRyaWVzMiA9IFtdO1xuICAgIGxldCBmb3VuZFNoaXAgPSBbXTtcbiAgICBmdW5jdGlvbiB0YWtlVHVybih4LCB5LCBnYW1lYm9hcmQpIHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRha2VDb21wdXRlclR1cm4oZ2FtZWJvYXJkKSB7XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIHRyeVNtYXJ0UGxheShnYW1lYm9hcmQpO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIGxldCB2YWxpZEhpdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICAgICAgd2hpbGUodmFsaWRIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgICAgICB2YWxpZEhpdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuY2VsbHNbeF1beV0uc2hpcCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3VuZFNoaXAucHVzaChbeCwgeV0pO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyeVNtYXJ0UGxheShnYW1lYm9hcmQpIHtcbiAgICAgICAgaWYgKCFzZWNvbmRIaXQpIHtcbiAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkQXV4Q29vcmQgKGZvdW5kU2hpcFswXVswXSArIDEsIGZvdW5kU2hpcFswXVsxXSkpIHRyaWVzLnB1c2goW2ZvdW5kU2hpcFswXVswXSArIDEsIGZvdW5kU2hpcFswXVsxXV0pO1xuICAgICAgICAgICAgaWYgKGNoZWNrVmFsaWRBdXhDb29yZCAoZm91bmRTaGlwWzBdWzBdIC0gMSwgZm91bmRTaGlwWzBdWzFdKSkgdHJpZXMucHVzaChbZm91bmRTaGlwWzBdWzBdIC0gMSwgZm91bmRTaGlwWzBdWzFdXSk7XG4gICAgICAgICAgICBpZiAoY2hlY2tWYWxpZEF1eENvb3JkIChmb3VuZFNoaXBbMF1bMF0sIGZvdW5kU2hpcFswXVsxXSArIDEpKSB0cmllcy5wdXNoKFtmb3VuZFNoaXBbMF1bMF0sIGZvdW5kU2hpcFswXVsxXSArIDFdKTtcbiAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkQXV4Q29vcmQgKGZvdW5kU2hpcFswXVswXSwgZm91bmRTaGlwWzBdWzFdIC0gMSkpIHRyaWVzLnB1c2goW2ZvdW5kU2hpcFswXVswXSwgZm91bmRTaGlwWzBdWzFdIC0gMV0pO1xuICAgICAgICAgICAgbGV0IHZhbGlkSGl0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sodHJpZXNbaV1bMF0sIHRyaWVzW2ldWzFdKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIHdoaWxlKHZhbGlkSGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRIaXQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0cmllc1tpXVswXSwgdHJpZXNbaV1bMV0pO1xuICAgICAgICAgICAgaSsrOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5jZWxsc1t0cmllc1tpIC0gMV1bMF1dW3RyaWVzW2kgLSAxXVsxXV0uc2hpcCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgc2Vjb25kSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRTaGlwWzBdWzBdID09IHRyaWVzW2kgLSAxXVswXSkge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3VuZFNoaXAucHVzaChbdHJpZXNbaSAtIDFdWzBdLCB0cmllc1tpIC0gMV1bMV1dKTtcbiAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgZm91bmRTaGlwLmZvckVhY2goY29vcmRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrVmFsaWRBdXhDb29yZChjb29yZHNbMF0sIGNvb3Jkc1sxXSArIDEpKSB0cmllczIucHVzaChbY29vcmRzWzBdLCBjb29yZHNbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkQXV4Q29vcmQoY29vcmRzWzBdLCBjb29yZHNbMV0gLSAxKSkgdHJpZXMyLnB1c2goW2Nvb3Jkc1swXSwgY29vcmRzWzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm91bmRTaGlwLmZvckVhY2goY29vcmRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrVmFsaWRBdXhDb29yZChjb29yZHNbMF0gKyAxLCBjb29yZHNbMV0pKSB0cmllczIucHVzaChbY29vcmRzWzBdICsgMSwgY29vcmRzWzFdXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkQXV4Q29vcmQoY29vcmRzWzBdIC0gMSwgY29vcmRzWzFdKSkgdHJpZXMyLnB1c2goW2Nvb3Jkc1swXSAtIDEsIGNvb3Jkc1sxXV0pO1xuICAgICAgICAgICAgICAgIH0pICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB2YWxpZEhpdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHRyaWVzMltpXVswXSwgdHJpZXMyW2ldWzFdKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIHdoaWxlKHZhbGlkSGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRIaXQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0cmllczJbaV1bMF0sIHRyaWVzMltpXVsxXSk7XG4gICAgICAgICAgICAgICAgaSsrOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuY2VsbHNbdHJpZXMyW2kgLSAxXVswXV1bdHJpZXMyW2kgLSAxXVsxXV0uc2hpcCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgZm91bmRTaGlwLnB1c2goW3RyaWVzMltpIC0gMV1bMF0sIHRyaWVzMltpIC0gMV1bMV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGdhbWVib2FyZC5zaGlwSXNTdW5rKGZvdW5kU2hpcFswXVswXSwgZm91bmRTaGlwWzBdWzFdKSkge1xuICAgICAgICAgICAgY2xlYXJWYXJpYWJsZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVmFsaWRBdXhDb29yZCAoeCwgeSkge1xuICAgICAgICBpZiAoeCA+IDkgfHwgeCA8IDAgfHwgeSA+IDkgfHwgeSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTsgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJWYXJpYWJsZXMoKSB7XG4gICAgICAgIGhpdCA9IGZhbHNlO1xuICAgICAgICBzZWNvbmRIaXQgPSBmYWxzZTtcbiAgICAgICAgdHJpZXMgPSBbXTtcbiAgICAgICAgdHJpZXMyID0gW107XG4gICAgICAgIGkgPSAwO1xuICAgICAgICBmb3VuZFNoaXAgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0YWtlVHVybiwgbmFtZSwgYnJhaW4sIHRha2VDb21wdXRlclR1cm4sIGNsZWFyVmFyaWFibGVzIH1cbn1cblxuZXhwb3J0IHsgcGxheWVyIH0iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZCwgc2hvd1Bhc3NpbmdTY3JlZW4gfSBmcm9tIFwiLi9kb21TdHVmZlwiO1xuaW1wb3J0IHsgYWRkQ2hpbGRFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGdhbWUsIHNldFAxLCBzZXRQMiwgcHZwLCBjaGFuZ2VNb2RlIH0gZnJvbSBcIi5cIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHVwJyk7XG5sZXQgYm9hcmQ7XG5sZXQgZG9tQm9hcmQ7XG5sZXQgcGxhY2VtZW50Qm9hcmQ7XG5sZXQgaW5kZXg7XG5sZXQgbGVuZ3RoO1xubGV0IG9yaWVudGF0aW9uID0gJ2Rvd24nO1xubGV0IHJlbWFpbmluZyA9IDA7XG5sZXQgZHJhZ0l0ZW07XG5sZXQgZHJhZyA9IGZhbHNlO1xubGV0IGtpbGwgPSBmYWxzZTtcbmxldCBwcyA9IFtdO1xubGV0IGRvbVNoaXBzID0gW107XG5sZXQgY2FuY2VsO1xubGV0IHN0YXJ0O1xubGV0IGNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBydW5TZXR1cCAoKSB7XG4gICAgY29uc3QgbGVmdCA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdkaXYnLCAnLmxlZnQnKTtcbiAgICBib2FyZCA9IGFkZENoaWxkRWxlbWVudChsZWZ0LCAnZGl2JywgJyNwbGFjZW1lbnQtYm9hcmQnKTtcbiAgICBkb21Cb2FyZCA9IGNyZWF0ZUJvYXJkKGJvYXJkLCBmYWxzZSk7XG4gICAgZG9tQm9hcmQuYWRkRHJvcEV2ZW50cygpO1xuICAgIHBsYWNlbWVudEJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gICAgbGV0IGluc3RydWN0aW9ucyA9IGFkZENoaWxkRWxlbWVudChsZWZ0LCAncCcsICcjaW5zdHJ1Y3Rpb25zJyk7XG4gICAgaW5zdHJ1Y3Rpb25zLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgc2hpcHMgb24gdGhlIGJvYXJkIGJ5IGRyYWdnaW5nIHRoZW0nO1xuXG4gICAgY29uc3QgcmlnaHQgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnZGl2JywgJy5yaWdodCcpO1xuICAgIGNvbnN0IHNoaXBzID0gYWRkQ2hpbGRFbGVtZW50KHJpZ2h0LCAnZGl2JywgJyNkcmFnLXNoaXBzJyk7XG5cbiAgICBmb3IgKGxldCBpID0gNTsgaSA+IDE7IGktLSkge1xuICAgICAgICBsZXQgZGl2ID0gYWRkQ2hpbGRFbGVtZW50KHNoaXBzLCAnZGl2JywgJy5zaGlwLWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgcCA9IGFkZENoaWxkRWxlbWVudChkaXYsICdwJywgJy5zaGlwcy1yZW1haW5pbmcnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IDYgLSBpO1xuICAgICAgICBwLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICBwcy5wdXNoKHApO1xuICAgICAgICBsZXQgc2hpcCA9IGFkZENoaWxkRWxlbWVudChkaXYsICdkaXYnLCAnLnNoaXAnKTtcbiAgICAgICAgZG9tU2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIChkb21TaGlwc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSA/IG9yaWVudGF0aW9uID0gJ3JpZ2h0JyA6IG9yaWVudGF0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgaW5kZXggPSA1IC0gaTtcbiAgICAgICAgICAgIGxlbmd0aCA9IGk7XG4gICAgICAgICAgICBkcmFnSXRlbSA9IHNoaXA7XG4gICAgICAgICAgICBpZiAoK3AudGV4dENvbnRlbnQgPiAwKSBkcmFnID0gdHJ1ZTtcbiAgICAgICAgICAgIGtpbGwgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IGRyYWcgPSBmYWxzZSk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGFkZENoaWxkRWxlbWVudChzaGlwLCAnZGl2JywgJy5jZWxsJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25zID0gYWRkQ2hpbGRFbGVtZW50KHJpZ2h0LCAnZGl2JywgJyNzZXR0aW5nLWJ1dHRvbnMnKTtcblxuICAgIGNvbnN0IHJhbmRvbSA9IGFkZENoaWxkRWxlbWVudChidXR0b25zLCAnYnV0dG9uJywgJyNyYW5kb20nKTtcbiAgICByYW5kb20udGV4dENvbnRlbnQgPSAnUmFuZG9tJztcbiAgICByYW5kb20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwaWNrUmFuZG9tKTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9IGFkZENoaWxkRWxlbWVudChidXR0b25zLCAnYnV0dG9uJywgJyNyb3RhdGUnKTtcbiAgICByb3RhdGUudGV4dENvbnRlbnQgPSAnUm90YXRlJztcbiAgICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwcyk7XG5cbiAgICBjb25zdCBjbGVhciA9IGFkZENoaWxkRWxlbWVudChidXR0b25zLCAnYnV0dG9uJywgJyNjbGVhcicpO1xuICAgIGNsZWFyLnRleHRDb250ZW50ID0gJ0NsZWFyJztcbiAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyQm9hcmQpO1xuXG4gICAgc3RhcnQgPSBhZGRDaGlsZEVsZW1lbnQoYnV0dG9ucywgJ2J1dHRvbicsICcjc3RhcnQnKTtcbiAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCc7XG4gICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdHYW1lKTtcblxuICAgIGxldCBtb2RlID0gYWRkQ2hpbGRFbGVtZW50KGJ1dHRvbnMsICdidXR0b24nLCAnI21vZGUnKTtcbiAgICBtb2RlLnRleHRDb250ZW50ID0gJ1BsYXllciBWcy4gQWknO1xuICAgIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChwdnApIHtcbiAgICAgICAgICAgIG1vZGUudGV4dENvbnRlbnQgPSAnUGxheWVyIFZzLiBBaSc7XG4gICAgICAgICAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCc7XG4gICAgICAgICAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0dhbWUpO1xuICAgICAgICAgICAgc3RhcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQdlBHYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGUudGV4dENvbnRlbnQgPSAnUGxheWVyIFZzLiBQbGF5ZXInO1xuICAgICAgICAgICAgc3RhcnQudGV4dENvbnRlbnQgPSAnU2V0IFAxIEJvYXJkJzsgXG4gICAgICAgICAgICBzdGFydC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0dhbWUpO1xuICAgICAgICAgICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQdlBHYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIGNoYW5nZU1vZGUoKTtcbiAgICAgICAgdG9nZ2xlQ2FuY2VsKCk7XG4gICAgfSlcblxuICAgIGNhbmNlbCA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdidXR0b24nLCAnLmhpZGUnKTtcbiAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAneCc7XG4gICAgY2FuY2VsLmlkID0gJ2NhbmNlbCc7XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKSk7XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcCAoeCwgeSkge1xuICAgIGlmIChwbGFjZW1lbnRCb2FyZC5zaGlwcy5sZW5ndGggPj0gMTApIHJldHVybjtcbiAgICBwbGFjZW1lbnRCb2FyZC5wbGFjZVNoaXAoeCwgeSwgb3JpZW50YXRpb24sIGxlbmd0aCk7XG4gICAgZG9tQm9hcmQudXBkYXRlQm9hcmQocGxhY2VtZW50Qm9hcmQsIGZhbHNlLCB0cnVlKTtcbiAgICBpZihraWxsKXtcbiAgICAgICAgZHJhZ0l0ZW0ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudEJvYXJkLnNoaXBzLmxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgcHNbaW5kZXhdLnRleHRDb250ZW50ID0gK3BzW2luZGV4XS50ZXh0Q29udGVudCAtIDE7XG4gICAgICAgIGRvbUJvYXJkLmNyZWF0ZVNoaXBEaXYoeCwgeSwgb3JpZW50YXRpb24sIGxlbmd0aCk7XG4gICAgfVxuICAgIFxuICAgICtwc1tpbmRleF0udGV4dENvbnRlbnQgPT0gMCA/XG4gICAgICAgIGRvbVNoaXBzW2luZGV4XS5kcmFnZ2FibGUgPSBmYWxzZTpcbiAgICAgICAgZG9tU2hpcHNbaW5kZXhdLmRyYWdnYWJsZSA9IHRydWU7XG5cbiAgICBraWxsID0gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGNoZWNrRHJhZyAoKSB7XG4gICAgcmV0dXJuIGRyYWc7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURyYWcgKCkge1xuICAgIGRyYWcgPT0gdHJ1ZSA/IGRyYWcgPSBmYWxzZTogZHJhZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHNhdmVWYXJpYWJsZXMoaW5kLCBsZW4sIGRyYSwgeCwgeSkge1xuICAgIGluZGV4ID0gaW5kO1xuICAgIGxlbmd0aCA9IGxlbjtcbiAgICBraWxsID0gdHJ1ZTtcbiAgICBkcmFnSXRlbSA9IGRyYTtcbiAgICBvcmllbnRhdGlvbiA9IHBsYWNlbWVudEJvYXJkLmdldFNoaXBPcmllbnRhdGlvbih4LCB5KTtcbiAgICBwbGFjZW1lbnRCb2FyZC5raWxsU2hpcCh4LCB5KTtcbiAgICBkb21Cb2FyZC51cGRhdGVCb2FyZChwbGFjZW1lbnRCb2FyZCwgZmFsc2UsIHRydWUpOyAgXG4gICAgcHNbaW5kZXhdLnRleHRDb250ZW50ID0gK3BzW2luZGV4XS50ZXh0Q29udGVudCArIDE7IFxuICAgIHJlbWFpbmluZy0tO1xuICAgIGRvbVNoaXBzW2luZGV4XS5kcmFnZ2FibGUgPSB0cnVlOyBcbn1cblxuZnVuY3Rpb24gcGlja1JhbmRvbSAoKSB7XG4gICAgY2xlYXJCb2FyZCgpO1xuICAgIHBsYWNlbWVudEJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb21Cb2FyZC51cGRhdGVCb2FyZChwbGFjZW1lbnRCb2FyZCwgZmFsc2UsIHRydWUpO1xuICAgICAgICBwbGFjZW1lbnRCb2FyZC5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgZG9tQm9hcmQuY3JlYXRlU2hpcERpdihzaGlwLmNvb3JkaW5hdGVzWzBdWzBdLCBzaGlwLmNvb3JkaW5hdGVzWzBdWzFdLCBzaGlwLmRpcmVjdGlvbiwgc2hpcC5jb29yZGluYXRlcy5sZW5ndGgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHMuZm9yRWFjaCgocCkgPT4gcC50ZXh0Q29udGVudCA9IDApO1xuICAgIH0sIDUwMCk7XG4gICAgZG9tU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5kcmFnZ2FibGUgPSBmYWxzZSk7XG4gICAgcmVtYWluaW5nID0gMTA7ICBcbn1cblxuZnVuY3Rpb24gY2xlYXJCb2FyZCgpIHtcbiAgICBwbGFjZW1lbnRCb2FyZCA9IGdhbWVib2FyZCgpO1xuICAgIGxldCBzaGlwcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW92ZWFibGUnKSk7XG4gICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXAucmVtb3ZlKCkpO1xuICAgIGRvbUJvYXJkLnVwZGF0ZUJvYXJkKHBsYWNlbWVudEJvYXJkLCBmYWxzZSwgdHJ1ZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcy5sZW5ndGg7IGkgKyspIHBzW2ldLnRleHRDb250ZW50ID0gNCAtIGk7XG4gICAgZG9tU2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZSk7XG4gICAgcmVtYWluaW5nID0gMDtcbn1cblxuZnVuY3Rpb24gcm90YXRlU2hpcHMoKSB7XG4gICAgKGRvbVNoaXBzWzBdLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpID8gb3JpZW50YXRpb24gPSAnZG93bicgOiBvcmllbnRhdGlvbiA9ICdyaWdodCc7IFxuICAgIGRvbVNoaXBzLmZvckVhY2goc2hpcCA9PiBzaGlwLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpKTtcbn1cblxuZnVuY3Rpb24gc29sdmVPdXRPZkJvdW5kYXJpZXMgKCkge1xuICAgIGlmIChwbGFjZW1lbnRCb2FyZC5zaGlwcy5sZW5ndGggPCByZW1haW5pbmcpIHtcbiAgICAgICAgcmVtYWluaW5nLS07XG4gICAgfVxuICAgIGVsc2UgZHJhZ0l0ZW0ucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWUgKCkge1xuICAgIGlmIChwbGFjZW1lbnRCb2FyZC5zaGlwcy5sZW5ndGggPCAxMCkgcmV0dXJuO1xuICAgIGxldCBjb21wdXRlciA9IGdhbWVib2FyZCgpO1xuICAgIGNvbXB1dGVyLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIHNldFAxKHBsYWNlbWVudEJvYXJkKTtcbiAgICBzZXRQMihjb21wdXRlcik7XG4gICAgZ2FtZS5yZVN0YXJ0KCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICBjYW5jZWwuZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNldHVwICgpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIGNsZWFyQm9hcmQoKTtcbiAgICBjYW5jZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDYW5jZWwoKSB7XG4gICAgKGNhbmNlbC5kaXNhYmxlZCA9PSB0cnVlKSA/IGNhbmNlbC5kaXNhYmxlZCA9IGZhbHNlOiBjYW5jZWwuZGlzYWJsZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBuZXdQdlBHYW1lKCkge1xuICAgIGlmIChwbGFjZW1lbnRCb2FyZC5zaGlwcy5sZW5ndGggPCAxMCkgcmV0dXJuO1xuICAgIGlmIChjb3VudGVyID09IDApIHtcbiAgICAgICAgc2V0UDEocGxhY2VtZW50Qm9hcmQpO1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIHNob3dQYXNzaW5nU2NyZWVuKDEpO1xuICAgICAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXRQMihwbGFjZW1lbnRCb2FyZCk7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBnYW1lLnJlU3RhcnQoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgY2FuY2VsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHNob3dQYXNzaW5nU2NyZWVuKDApO1xuICAgICAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTZXQgUDEgQm9hcmQnO1xuICAgIH0gXG4gICAgY2xlYXJCb2FyZCgpO1xufVxuXG5cbmV4cG9ydCB7IHJ1blNldHVwLCBwbGFjZVNoaXAsIGNoZWNrRHJhZywgdG9nZ2xlRHJhZywgc2F2ZVZhcmlhYmxlcyxcbiAgICAgICAgIHNvbHZlT3V0T2ZCb3VuZGFyaWVzLCBkaXNwbGF5U2V0dXB9XG5cbiIsImNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiB7XG5cbiAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIGNlbGxzW2ldID0gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGl0IChudW0pIHtcbiAgICAgICAgY2VsbHNbbnVtXSA9ICdoaXQnO1xuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2VsbHNbaV0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VuayA9IHRydWU7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cblxuICAgIHJldHVybiB7IGhpdCwgaXNTdW5rLCBjZWxscyB9XG59XG5cbmV4cG9ydCB7IHNoaXAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9