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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#boards, #setup {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n#player-board, #enemy-board, #placement-board, #setup #drag-ships, .ship-container {\n    display: flex;\n    height: max-content;\n    width: max-content;\n}\n\n.ship-container p::before, .small p::before {\n    content: 'x';\n}\n\n.ship.moveable {\n    transform: translateX(-1px) translateY(-1px);\n    overflow: visible;\n}\n\n.drag-over.available {\n    background-color: rgb(0 0 0 / 40%);\n}\n\n.ship.hide, #setup.hide, #setup .hide {\n    display: none;\n}\n\n.rotate {\n    display: flex;\n    width: max-content;\n}\n\n.row {\n    display: flex;\n    flex-direction: column;\n}\n\n.cell {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n}\n\n.coord {\n    border: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#player-board .ship, #enemy-board .ship.hit, #setup .ship, .ships .ship {\n    color: red;\n    background-color: rgb(97, 97, 97);\n}\n\n.small {\n    display: flex;\n    align-items: center;\n}\n\n.small .cell {\n    width: 15px;\n    height: 15px;\n}\n\n\n.ships {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.ship.sunk .cell {\n    background-color: rgb(148, 148, 148);\n    border: 1px solid rgb(100, 100, 100);\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,4CAA4C;IAC5C,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,oCAAoC;IACpC,oCAAoC;AACxC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#boards, #setup {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n#player-board, #enemy-board, #placement-board, #setup #drag-ships, .ship-container {\n    display: flex;\n    height: max-content;\n    width: max-content;\n}\n\n.ship-container p::before, .small p::before {\n    content: 'x';\n}\n\n.ship.moveable {\n    transform: translateX(-1px) translateY(-1px);\n    overflow: visible;\n}\n\n.drag-over.available {\n    background-color: rgb(0 0 0 / 40%);\n}\n\n.ship.hide, #setup.hide, #setup .hide {\n    display: none;\n}\n\n.rotate {\n    display: flex;\n    width: max-content;\n}\n\n.row {\n    display: flex;\n    flex-direction: column;\n}\n\n.cell {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n}\n\n.coord {\n    border: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#player-board .ship, #enemy-board .ship.hit, #setup .ship, .ships .ship {\n    color: red;\n    background-color: rgb(97, 97, 97);\n}\n\n.small {\n    display: flex;\n    align-items: center;\n}\n\n.small .cell {\n    width: 15px;\n    height: 15px;\n}\n\n\n.ships {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.ship.sunk .cell {\n    background-color: rgb(148, 148, 148);\n    border: 1px solid rgb(100, 100, 100);\n}\n\n"],"sourceRoot":""}]);
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
                        (0,_domStuff__WEBPACK_IMPORTED_MODULE_2__.showPassingScreen)(currentP);
                        (0,_hud__WEBPACK_IMPORTED_MODULE_0__.updateMessage)(currentP);
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

    const random = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button');
    random.textContent = 'Random';
    random.addEventListener('click', pickRandom);

    const rotate = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button');
    rotate.textContent = 'Rotate';
    rotate.addEventListener('click', rotateShips);

    const clear = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button');
    clear.textContent = 'Clear';
    clear.addEventListener('click', clearBoard);

    start = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button');
    start.textContent = 'Start';
    start.addEventListener('click', newGame);

    let mode = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button');
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
    cancel.addEventListener('click', () => container.classList.toggle('hide'));
}
//checkpoint
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
    }, 100);
    ps.forEach((p) => p.textContent = 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsNkJBQTZCLEdBQUcscUJBQXFCLG9CQUFvQixxQ0FBcUMsR0FBRyx3RkFBd0Ysb0JBQW9CLDBCQUEwQix5QkFBeUIsR0FBRyxpREFBaUQsbUJBQW1CLEdBQUcsb0JBQW9CLG1EQUFtRCx3QkFBd0IsR0FBRywwQkFBMEIseUNBQXlDLEdBQUcsMkNBQTJDLG9CQUFvQixHQUFHLGFBQWEsb0JBQW9CLHlCQUF5QixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QixHQUFHLFdBQVcsbUJBQW1CLGtCQUFrQiw4QkFBOEIsR0FBRyxZQUFZLGtCQUFrQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLDZFQUE2RSxpQkFBaUIsd0NBQXdDLEdBQUcsWUFBWSxvQkFBb0IsMEJBQTBCLEdBQUcsa0JBQWtCLGtCQUFrQixtQkFBbUIsR0FBRyxjQUFjLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLHNCQUFzQiwyQ0FBMkMsMkNBQTJDLEdBQUcsV0FBVyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLDZCQUE2QixnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLHFCQUFxQixvQkFBb0IscUNBQXFDLEdBQUcsd0ZBQXdGLG9CQUFvQiwwQkFBMEIseUJBQXlCLEdBQUcsaURBQWlELG1CQUFtQixHQUFHLG9CQUFvQixtREFBbUQsd0JBQXdCLEdBQUcsMEJBQTBCLHlDQUF5QyxHQUFHLDJDQUEyQyxvQkFBb0IsR0FBRyxhQUFhLG9CQUFvQix5QkFBeUIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsR0FBRyxXQUFXLG1CQUFtQixrQkFBa0IsOEJBQThCLEdBQUcsWUFBWSxrQkFBa0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsR0FBRyw2RUFBNkUsaUJBQWlCLHdDQUF3QyxHQUFHLFlBQVksb0JBQW9CLDBCQUEwQixHQUFHLGtCQUFrQixrQkFBa0IsbUJBQW1CLEdBQUcsY0FBYyxvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyxzQkFBc0IsMkNBQTJDLDJDQUEyQyxHQUFHLHVCQUF1QjtBQUNqN0c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y4QztBQUNyQjtBQUN1RTs7QUFFaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCLGtCQUFrQiwyREFBZTtBQUNqQztBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0EsNEJBQTRCLDJEQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJEQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJEQUFlO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw4Q0FBZTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLFNBQVM7QUFDakMsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLFNBQVM7QUFDakMsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlEQUFTO0FBQ3RCO0FBQ0E7QUFDQSxRQUFRLGlEQUFTO0FBQ2pCOztBQUVBO0FBQ0EsbUJBQW1CLDJEQUFlO0FBQ2xDO0FBQ0E7QUFDQSwyQ0FBMkMsOENBQVU7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxpREFBaUQscURBQWE7QUFDOUQseUNBQXlDLDhDQUFVO0FBQ25ELHlDQUF5Qyx3REFBb0I7QUFDN0Qsd0JBQXdCLFlBQVk7QUFDcEMsdUJBQXVCLDJEQUFlO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQix3QkFBd0IsMkRBQWU7QUFDdkMsZ0JBQWdCLDJEQUFlO0FBQy9CO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQWU7QUFDbEM7QUFDQSx3QkFBd0IsV0FBVztBQUNuQyx1QkFBdUIsMkRBQWU7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJEQUFlO0FBQzdCLGFBQWEsMkRBQWU7QUFDNUIsK0JBQStCLE9BQU87QUFDdEMsWUFBWSwyREFBZTtBQUMzQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlLQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCcUM7QUFFTjtBQUNnQjs7QUFFL0M7QUFDQTtBQUNBLG1CQUFtQixpQ0FBRSxFQUFFLGlDQUFFO0FBQ3pCLGtCQUFrQiwwQ0FBVyxFQUFFLDBDQUFXO0FBQzFDO0FBQ0E7QUFDQSxJQUFJLDZEQUE4QjtBQUNsQyxJQUFJLHNEQUF1QixDQUFDLDBDQUFXOztBQUV2QyxJQUFJLDZEQUE4QjtBQUNsQyxJQUFJLHFEQUFzQixDQUFDLDBDQUFXOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFEQUFzQjtBQUN0QyxnQkFBZ0IscURBQXNCO0FBQ3RDO0FBQ0E7QUFDQSxvQkFBb0Isa0NBQUc7QUFDdkIsK0JBQStCLGlDQUFFLEVBQUUsaUNBQUU7QUFDckMsb0JBQW9CLDJEQUE0QjtBQUNoRDtBQUNBO0FBQ0Esd0JBQXdCLDREQUFpQjtBQUN6Qyx3QkFBd0IsbURBQWE7QUFDckMsd0JBQXdCLHNEQUF1QjtBQUMvQyx3QkFBd0Isc0RBQXVCO0FBQy9DLHdCQUF3QixxREFBc0I7QUFDOUMsd0JBQXdCLHFEQUFzQjtBQUM5Qyx3QkFBd0IsMkRBQTRCO0FBQ3BELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbURBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQTRCO0FBQ3hDO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQXVCO0FBQ3ZDLGdCQUFnQixzREFBdUI7QUFDdkM7QUFDQTtBQUNBLGdCQUFnQixtREFBYTtBQUM3QixnQkFBZ0IsMkRBQTRCO0FBQzVDLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXVCLENBQUMsMENBQVc7QUFDM0MsUUFBUSxxREFBc0IsQ0FBQywwQ0FBVztBQUMxQyxRQUFRLHNEQUF1QixDQUFDLDBDQUFXO0FBQzNDLFFBQVEscURBQXNCLENBQUMsMENBQVc7QUFDMUMsa0JBQWtCLDBDQUFXLEVBQUUsMENBQVc7QUFDMUMsUUFBUSxnREFBaUI7QUFDekIsbUJBQW1CLGlDQUFFLEVBQUUsaUNBQUU7QUFDekI7QUFDQSxRQUFRLG1EQUFhO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0YrQjs7QUFFL0I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUJBQXlCLFNBQVM7QUFDbEM7QUFDQSw2QkFBNkIsU0FBUztBQUN0QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsYUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGFBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUMsNEJBQTRCLGlDQUFpQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUztBQUNsQyw2QkFBNkIsU0FBUztBQUN0QztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TTBCO0FBQ1I7O0FBRXRDOztBQUVBOztBQUVBO0FBQ0EsY0FBYywyREFBZTtBQUM3QjtBQUNBO0FBQ0Esa0JBQWtCLDJEQUFlO0FBQ2pDO0FBQ0Esc0NBQXNDLGdEQUFZO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUIyRDtBQUN4QjtBQUNkO0FBQ2M7QUFDSztBQUNUO0FBQ0c7O0FBRWxDO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQVc7QUFDN0IsaUJBQWlCLHNEQUFXO0FBQzVCLGtCQUFrQiwyREFBZ0I7QUFDbEMsaUJBQWlCLDJEQUFnQjs7QUFFakMsa0JBQWtCLHFEQUFTO0FBQzNCLGtCQUFrQixxREFBUzs7QUFFM0IsU0FBUywrQ0FBTTtBQUNmLFNBQVMsK0NBQU07QUFDZjs7QUFFQSxnREFBUTtBQUNSLFdBQVcsZ0RBQVM7QUFDcEIsNENBQU07OztBQUdOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQ0FBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtDQUFNO0FBQ25CO0FBQ0E7OztBQUkwRDs7O0FBRzFEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRzREO0FBQ2Q7QUFDTjtBQUNnQjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMkRBQWU7QUFDaEMsWUFBWSwyREFBZTtBQUMzQixlQUFlLHNEQUFXO0FBQzFCO0FBQ0EscUJBQXFCLHFEQUFTOztBQUU5QixrQkFBa0IsMkRBQWU7QUFDakMsa0JBQWtCLDJEQUFlOztBQUVqQyxvQkFBb0IsT0FBTztBQUMzQixrQkFBa0IsMkRBQWU7QUFDakMsZ0JBQWdCLDJEQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3QkFBd0IsT0FBTztBQUMvQix1QkFBdUIsMkRBQWU7QUFDdEM7QUFDQTs7QUFFQSxvQkFBb0IsMkRBQWU7O0FBRW5DLG1CQUFtQiwyREFBZTtBQUNsQztBQUNBOztBQUVBLG1CQUFtQiwyREFBZTtBQUNsQztBQUNBOztBQUVBLGtCQUFrQiwyREFBZTtBQUNqQztBQUNBOztBQUVBLFlBQVksMkRBQWU7QUFDM0I7QUFDQTs7QUFFQSxlQUFlLDJEQUFlO0FBQzlCO0FBQ0E7QUFDQSxZQUFZLGtDQUFHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2Q0FBVTtBQUNsQjtBQUNBLEtBQUs7O0FBRUwsYUFBYSwyREFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHFEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixxREFBUztBQUM1QjtBQUNBLElBQUksd0NBQUs7QUFDVCxJQUFJLHdDQUFLO0FBQ1QsSUFBSSwyQ0FBWTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3Q0FBSztBQUNiO0FBQ0EsUUFBUSw0REFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3Q0FBSztBQUNiO0FBQ0EsUUFBUSwyQ0FBWTtBQUNwQjtBQUNBO0FBQ0EsUUFBUSw0REFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7OztBQUk0Qzs7Ozs7Ozs7Ozs7Ozs7OztBQzVONUM7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9odWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NldHVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2JvYXJkcywgI3NldHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZW1lbnQtYm9hcmQsICNzZXR1cCAjZHJhZy1zaGlwcywgLnNoaXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIgcDo6YmVmb3JlLCAuc21hbGwgcDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ3gnO1xcbn1cXG5cXG4uc2hpcC5tb3ZlYWJsZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KSB0cmFuc2xhdGVZKC0xcHgpO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLmRyYWctb3Zlci5hdmFpbGFibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0MCUpO1xcbn1cXG5cXG4uc2hpcC5oaWRlLCAjc2V0dXAuaGlkZSwgI3NldHVwIC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb29yZCB7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllci1ib2FyZCAuc2hpcCwgI2VuZW15LWJvYXJkIC5zaGlwLmhpdCwgI3NldHVwIC5zaGlwLCAuc2hpcHMgLnNoaXAge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk3LCA5Nyk7XFxufVxcblxcbi5zbWFsbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zbWFsbCAuY2VsbCB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcblxcbi5zaGlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2hpcC5zdW5rIC5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jYm9hcmRzLCAjc2V0dXAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsICNlbmVteS1ib2FyZCwgI3BsYWNlbWVudC1ib2FyZCwgI3NldHVwICNkcmFnLXNoaXBzLCAuc2hpcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciBwOjpiZWZvcmUsIC5zbWFsbCBwOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAneCc7XFxufVxcblxcbi5zaGlwLm1vdmVhYmxlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpIHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uZHJhZy1vdmVyLmF2YWlsYWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQwJSk7XFxufVxcblxcbi5zaGlwLmhpZGUsICNzZXR1cC5oaWRlLCAjc2V0dXAgLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvb3JkIHtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIC5zaGlwLCAjZW5lbXktYm9hcmQgLnNoaXAuaGl0LCAjc2V0dXAgLnNoaXAsIC5zaGlwcyAuc2hpcCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTcsIDk3KTtcXG59XFxuXFxuLnNtYWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNtYWxsIC5jZWxsIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuXFxuXFxuLnNoaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5zaGlwLnN1bmsgLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDAsIDEwMCwgMTAwKTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhZGRDaGlsZEVsZW1lbnQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgcGxhY2VTaGlwLCBjaGVja0RyYWcsIHRvZ2dsZURyYWcsIHNhdmVWYXJpYWJsZXMsIHNvbHZlT3V0T2ZCb3VuZGFyaWVzIH0gZnJvbSBcIi4vc2V0dXBcIjtcblxuY29uc3QgY3JlYXRlQm9hcmQgPSAoYm9hcmQsIGVuZW15KSA9PiB7XG4gICAgbGV0IGNlbGxzID0gW107XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgbGV0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGxldCBkaXYgPSBhZGRDaGlsZEVsZW1lbnQoYm9hcmQsICdkaXYnLCAnLnJvdycpO1xuICAgICAgICBpZiAoaSA+IC0xKSBjZWxsc1tpXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChqID09IDApIHtcbiAgICAgICAgICAgICAgIGxldCBsZXR0ZXIgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAncCcsICcuY2VsbCcpO1xuICAgICAgICAgICAgICAgbGV0dGVyLmNsYXNzTGlzdC5hZGQoJ2Nvb3JkJyk7XG4gICAgICAgICAgICAgICBsZXR0ZXIudGV4dENvbnRlbnQgPSBsZXR0ZXJzW2ldOyBcbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgaWYgKGkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgIGxldCBsZXR0ZXIgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAncCcsICcuY2VsbCcpO1xuICAgICAgICAgICAgICAgbGV0dGVyLnRleHRDb250ZW50ID0gaiArIDE7XG4gICAgICAgICAgICAgICBsZXR0ZXIuY2xhc3NMaXN0LmFkZCgnY29vcmQnKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgIGxldCBjZWxsID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ2J1dHRvbicsICcuY2VsbCcpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXZhaWxhYmxlJyk7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV0ucHVzaChjZWxsKTsgXG4gICAgICAgICAgICAgICAgaWYgKGVuZW15KSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnYW1lLmhhbmRsZVR1cm4oaSwgaikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVCb2FyZCAoYm9hcmQsIGVuZW15LCBzZXR1cCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNldHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5jZWxsc1tpXVtqXS5oaXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICAgICAgICAgIChib2FyZC5jZWxsc1tpXVtqXS5zaGlwID4gLTEpID8gY2VsbHNbaV1bal0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICAoYm9hcmQuY2VsbHNbaV1bal0uc2hpcCA9PSAtMikgPyBjZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdhdmFpbGFibGUnKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2F2YWlsYWJsZScpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIChib2FyZC5jZWxsc1tpXVtqXS5zaGlwID4gLTEgJiYgYm9hcmQuY2VsbHNbaV1bal0uaGl0ID09IHRydWUpID8gXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRHJvcEV2ZW50cyAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKVxuICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsICgpID0+IGRyb3AoY2VsbHNbaV1bal0sIGksIGopKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnRW50ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRyYWdMZWF2ZShlKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcm9wKGNlbGwsIGksIGopIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgICAgICAgaWYgKCFjaGVja0RyYWcoKSkgcmV0dXJuO1xuICAgICAgICB4ID0gaTtcbiAgICAgICAgeSA9IGo7XG4gICAgICAgIHBsYWNlU2hpcCh4LCB5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTaGlwRGl2IChpLCBqLCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBzaGlwID0gYWRkQ2hpbGRFbGVtZW50KGNlbGxzW2ldW2pdLCAnZGl2JywgJy5zaGlwJyk7XG4gICAgICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdtb3ZlYWJsZScpO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRvZ2dsZURyYWcpO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pXG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4gc2F2ZVZhcmlhYmxlcyg1IC0gbGVuZ3RoLCBsZW5ndGgsIHNoaXAsIGksIGopKVxuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0b2dnbGVEcmFnKTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgc29sdmVPdXRPZkJvdW5kYXJpZXMpO1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGFkZENoaWxkRWxlbWVudChzaGlwLCAnZGl2JywgJy5jZWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdyaWdodCcpIHNoaXAuY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlQ2xpY2tFdmVudHMgKCkge1xuICAgICAgICBsZXQgZGlzYWJsZWQ7XG4gICAgICAgIChjZWxsc1swXVswXS5kaXNhYmxlZCA9PSB0cnVlKSA/IGRpc2FibGVkID0gZmFsc2U6XG4gICAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IHVwZGF0ZUJvYXJkLCBhZGREcm9wRXZlbnRzLCBjcmVhdGVTaGlwRGl2LCB0b2dnbGVDbGlja0V2ZW50cyB9XG59XG5cbmNvbnN0IGNyZWF0ZUFsaXZlU2hpcHMgPSAoZGl2KSA9PiB7XG4gICAgbGV0IHBzID0gW107XG4gICAgbGV0IHNoaXBzID0gW107XG4gICAgbGV0IGxlbmdodHMgPSBbNSwgNCwgMywgMl07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGFkZENoaWxkRWxlbWVudChkaXYsICdkaXYnLCAnLnNtYWxsJyk7XG4gICAgICAgIGxldCBwID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ3AnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGkgKyAxO1xuICAgICAgICBwcy5wdXNoKHApO1xuICAgICAgICBsZXQgc2hpcCA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdkaXYnLCAnLnNoaXAnKTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1IC0gaTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGFkZENoaWxkRWxlbWVudChzaGlwLCAnZGl2JywgJy5jZWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTaGlwcyAoYm9hcmQpIHtcbiAgICAgICAgcHMuZm9yRWFjaChwID0+IHAudGV4dENvbnRlbnQgPSAwKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXAuY2xhc3NMaXN0LmFkZCgnc3VuaycpKTtcbiAgICAgICAgYm9hcmQuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmdodHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlbmdodHNbaV0gPT0gc2hpcC5jZWxscy5sZW5ndGgpIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHNbaW5kZXhdLnRleHRDb250ZW50ID0gK3BzW2luZGV4XS50ZXh0Q29udGVudCArIDE7XG4gICAgICAgICAgICAgICAgc2hpcHNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3N1bmsnKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXBkYXRlU2hpcHMgfVxufVxuXG5mdW5jdGlvbiBzaG93UGFzc2luZ1NjcmVlbihudW0pIHtcbiAgICBsZXQgcGxheWVyO1xuICAgIChudW0gPT0gMCkgPyBwbGF5ZXIgPSAnT25lJzogcGxheWVyID0gJ1R3byc7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgbGV0IGRpdiA9IGFkZENoaWxkRWxlbWVudChib2R5LCAnZGl2JywgJyNwYXNzaW5nLXNjcmVlbicpO1xuICAgIGxldCBoMiA9IGFkZENoaWxkRWxlbWVudChkaXYsICdoMScpO1xuICAgIGgyLnRleHRDb250ZW50ID0gYFBsYXllciAke3BsYXllcn0ncyBUdXJuYDtcbiAgICBsZXQgcCA9IGFkZENoaWxkRWxlbWVudChkaXYsICdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9ICdDbGljayB0byBjb250aW51ZSc7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGl2LnJlbW92ZSgpKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQm9hcmQsIGNyZWF0ZUFsaXZlU2hpcHMsIHNob3dQYXNzaW5nU2NyZWVuIH0iLCJjb25zdCBhZGRDaGlsZEVsZW1lbnQgPSAocGFyZW50LCBlbGVtZW50LCBjc3MpID0+IHtcbiAgICBsZXQgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtZW50fWApO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbG0pOyBcbiAgICBpZiAoY3NzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY3NzWzBdID09ICcuJyApXG4gICAgICAgIGVsbS5jbGFzc05hbWUgPSBjc3Muc3Vic3RyKDEpO1xuICAgICAgICBlbHNlIGlmIChjc3NbMF0gPT0gJyMnKVxuICAgICAgICBlbG0uaWQgPSBjc3Muc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIHJldHVybiBlbG07XG59XG5cbmZ1bmN0aW9uIGhpZGVDb250ZW50cyAoZGl2KSB7XG4gICAgZm9yIChsZXQgaT0wOyBpPGRpdi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpdi5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVDb250ZW50cyAoZGl2KSB7XG4gICAgZm9yIChsZXQgaT0wOyBpPGRpdi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpdi5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IHthZGRDaGlsZEVsZW1lbnQsIGhpZGVDb250ZW50cywgcmVzdG9yZUNvbnRlbnRzfTsiLCJpbXBvcnQgeyB1cGRhdGVNZXNzYWdlIH0gZnJvbSBcIi4vaHVkXCJcbmltcG9ydCB7IHBsYXllckJvYXJkLCBlbmVteUJvYXJkLCBwMUdhbWVib2FyZCwgcDJHYW1lYm9hcmQsIGVuZW15U2hpcHMsIHBsYXllclNoaXBzLFxuICAgICAgICBwMSwgcDIsIHB2cCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBzaG93UGFzc2luZ1NjcmVlbiB9IGZyb20gXCIuL2RvbVN0dWZmXCI7XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBsZXQgb3ZlciA9IGZhbHNlO1xuICAgIGxldCBwbGF5ZXJzID0gW3AxLCBwMl07XG4gICAgbGV0IGJvYXJkcyA9IFtwMUdhbWVib2FyZCwgcDJHYW1lYm9hcmRdO1xuICAgIGxldCBjdXJyZW50UCA9IDA7XG4gICAgbGV0IGN1cnJlbnRCID0gMTtcbiAgICBwMUdhbWVib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICBwbGF5ZXJCb2FyZC51cGRhdGVCb2FyZChwMUdhbWVib2FyZCwgZmFsc2UsIGZhbHNlKTtcblxuICAgIHAyR2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIGVuZW15Qm9hcmQudXBkYXRlQm9hcmQocDJHYW1lYm9hcmQsIHRydWUsIGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVR1cm4oeCwgeSkge1xuICAgICAgICBpZiAob3ZlcikgcmV0dXJuO1xuICAgICAgICBpZiAocGxheWVyc1tjdXJyZW50UF0uYnJhaW4gPT0gJ2h1bWFuJykge1xuICAgICAgICAgICAgbGV0IHBsYXllZCA9IHBsYXllcnNbY3VycmVudFBdLnRha2VUdXJuKHgsIHksIGJvYXJkc1tjdXJyZW50Ql0pO1xuICAgICAgICAgICAgaWYgKHBsYXllZCkge1xuICAgICAgICAgICAgICAgIGVuZW15U2hpcHMudXBkYXRlU2hpcHMoYm9hcmRzW2N1cnJlbnRCXSk7XG4gICAgICAgICAgICAgICAgZW5lbXlCb2FyZC51cGRhdGVCb2FyZChib2FyZHNbY3VycmVudEJdLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgb3ZlciA9IGNoZWNrV2lubmVyKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHB2cCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnMgPSBbcDEsIHAyXTtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlCb2FyZC50b2dnbGVDbGlja0V2ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUdXJucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Bhc3NpbmdTY3JlZW4oY3VycmVudFApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTWVzc2FnZShjdXJyZW50UCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwcy51cGRhdGVTaGlwcyhib2FyZHNbY3VycmVudFBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLnVwZGF0ZUJvYXJkKGJvYXJkc1tjdXJyZW50UF0sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteVNoaXBzLnVwZGF0ZVNoaXBzKGJvYXJkc1tjdXJyZW50Ql0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlCb2FyZC51cGRhdGVCb2FyZChib2FyZHNbY3VycmVudEJdLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteUJvYXJkLnRvZ2dsZUNsaWNrRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUdXJucygpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNZXNzYWdlKGN1cnJlbnRQKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVHVybigpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbmVteUJvYXJkLnRvZ2dsZUNsaWNrRXZlbnRzKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzW2N1cnJlbnRQXS50YWtlQ29tcHV0ZXJUdXJuKGJvYXJkc1tjdXJyZW50Ql0pO1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBzLnVwZGF0ZVNoaXBzKGJvYXJkc1tjdXJyZW50Ql0pO1xuICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLnVwZGF0ZUJvYXJkKGJvYXJkc1tjdXJyZW50Ql0sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgb3ZlciA9IGNoZWNrV2lubmVyKCk7XG4gICAgICAgICAgICAgICAgY2hhbmdlVHVybnMoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVNZXNzYWdlKGN1cnJlbnRQKTtcbiAgICAgICAgICAgICAgICBlbmVteUJvYXJkLnRvZ2dsZUNsaWNrRXZlbnRzKCk7XG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tXaW5uZXIgKCkge1xuICAgICAgICBpZiAoYm9hcmRzW2N1cnJlbnRCXS5hcmVBbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHt3aW5uZXI6IHBsYXllcnNbY3VycmVudFBdfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlVHVybnMoKSB7XG4gICAgICAgIGlmIChjdXJyZW50UCA9PSAwKSB7XG4gICAgICAgICAgICBjdXJyZW50UCA9IDE7XG4gICAgICAgICAgICBjdXJyZW50QiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50UCA9IDA7XG4gICAgICAgICAgICBjdXJyZW50QiA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcmVTdGFydCAoKSB7XG4gICAgICAgIHBsYXllckJvYXJkLnVwZGF0ZUJvYXJkKHAxR2FtZWJvYXJkLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBlbmVteUJvYXJkLnVwZGF0ZUJvYXJkKHAyR2FtZWJvYXJkLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHBsYXllclNoaXBzLnVwZGF0ZVNoaXBzKHAxR2FtZWJvYXJkKTtcbiAgICAgICAgZW5lbXlTaGlwcy51cGRhdGVTaGlwcyhwMkdhbWVib2FyZCk7XG4gICAgICAgIGJvYXJkcyA9IFtwMUdhbWVib2FyZCwgcDJHYW1lYm9hcmRdO1xuICAgICAgICBwMi5jbGVhclZhcmlhYmxlcygpO1xuICAgICAgICBwbGF5ZXJzID0gW3AxLCBwMl07XG4gICAgICAgIG92ZXIgPSBmYWxzZTtcbiAgICAgICAgdXBkYXRlTWVzc2FnZSgwKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgaGFuZGxlVHVybiwgcmVTdGFydCB9XG59XG5cbmV4cG9ydCB7IHN0YXJ0R2FtZSB9IiwiaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXBzXCI7XG5cbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICBsZXQgc2hpcHMgPSBbXTtcblxuICAgIGNsZWFyQm9hcmQoKTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyQm9hcmQgKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCAxMCA7IGkrKyl7XG4gICAgICAgICAgICBjZWxsc1tpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgMTAgOyBqKyspe1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdID0ge2hpdDogZmFsc2UsIHNoaXA6IC0yfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcCh4LCB5LCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBpbnZhbGlkQ29vcmQgPSBmYWxzZTtcbiAgICAgICAgaW52YWxpZENvb3JkID0gY2hlY2tWYWxpZENvb3JkaW5hdGVzKHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpO1xuICAgICAgICBpZiAoaW52YWxpZENvb3JkID09IHRydWUpIHJldHVybjtcbiAgICAgICAgbGV0IG5ld1NoaXAgPSBzaGlwKGxlbmd0aCk7XG4gICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIG5ld1NoaXAuY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZCA9IFtdO1xuICAgICAgICBuZXdTaGlwLmRpcmVjdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgICAgICBsZXQgYXV4WCA9IHg7XG4gICAgICAgIGxldCBhdXhZID0geTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgY2VsbHNbeF1beV0uc2hpcCA9IGk7XG4gICAgICAgICAgICBuZXdTaGlwLmNvb3JkaW5hdGVzW2ldID0gW3gsIHldO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdkb3duJykgeSsrO1xuICAgICAgICAgICAgZWxzZSB4Kys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmlsbCBhZGphY2VudCBjZWxscyB3aXRoIC0xXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoICsgMjsgaSsrKSB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdkb3duJykge1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLTEsIGF1eFktMSkpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFgtMV1bYXV4WS0xXS5zaGlwID0gLTE7IFxuICAgICAgICAgICAgICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQucHVzaChbYXV4WC0xLCBhdXhZLTFdKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRBdXhDb29yZChhdXhYKzEsIGF1eFktMSkpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFgrMV1bYXV4WS0xXS5zaGlwID0gLTE7IFxuICAgICAgICAgICAgICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQucHVzaChbYXV4WCsxLCBhdXhZLTFdKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLCBhdXhZLTEpICYmIGkgPT0gMCB8fCBjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WCwgYXV4WS0xKSAmJiBpID09IGxlbmd0aCsxKXtcbiAgICAgICAgICAgICAgICAgICBjZWxsc1thdXhYXVthdXhZLTFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLCBhdXhZLTFdKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WS0xKSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WC0xXVthdXhZLTFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLTEsIGF1eFktMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WSsxKSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WC0xXVthdXhZKzFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLTEsIGF1eFkrMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WSkgJiYgaSA9PSAwIHx8IGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLTEsIGF1eFkpICYmIGkgPT0gbGVuZ3RoKzEpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFgtMV1bYXV4WV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgtMSwgYXV4WV0pO1xuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2Rvd24nKSBhdXhZKys7XG4gICAgICAgICAgICBlbHNlIGF1eFgrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVmFsaWRDb29yZGluYXRlcyh4LCB5LCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICh4ID4gOSB8fCB4IDwgMCB8fCB5ID4gOSB8fCB5IDwgMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnZG93bicgJiYgeStsZW5ndGggPiAxMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAncmlnaHQnICYmIHgrbGVuZ3RoID4gMTApIHJldHVybiB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYoY2VsbHNbeF1beV0uc2hpcCA+IC0yKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnZG93bicpIHkrKztcbiAgICAgICAgICAgIGVsc2UgeCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkQXV4Q29vcmQgKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPiA5IHx8IHggPCAwIHx8IHkgPiA5IHx8IHkgPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7ICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2sgKHgsIHkpIHtcbiAgICAgICAgaWYgKGNlbGxzW3hdW3ldLmhpdCA9PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNlbGxzW3hdW3ldLmhpdCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0uY29vcmRpbmF0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcHNbaV0uY29vcmRpbmF0ZXNbal1bMF0gPT0geCAmJiBzaGlwc1tpXS5jb29yZGluYXRlc1tqXVsxXSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdChjZWxsc1t4XVt5XS5zaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya0FkamFjZW50Q2VsbHMoc2hpcHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFya0FkamFjZW50Q2VsbHMoc2hpcCkge1xuICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHJldHVybjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLm5leHRUb0Nvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsc1tzaGlwLm5leHRUb0Nvb3JkW2ldWzBdXVtzaGlwLm5leHRUb0Nvb3JkW2ldWzFdXS5oaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJlQWxsU3VuaygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFzaGlwc1tpXS5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSAoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzUsIDQsIDQsIDMsIDMsIDMsIDIsIDIsIDIsIDJdO1xuICAgICAgICBjb25zdCBtaXNzaW5nU2hpcHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Rocy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRyaWVzID0gNSAqIChpKzEpO1xuICAgICAgICAgICAgd2hpbGUgKHNoaXBzLmxlbmd0aCArIG1pc3NpbmdTaGlwcy5sZW5ndGggPD0gaSAmJiB0cmllcyA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9IHBpY2tSYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcCh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aHNbaV0pO1xuICAgICAgICAgICAgICAgIHRyaWVzLS07XG4gICAgICAgICAgICAgICAgaWYgKHRyaWVzID09IDAgJiYgc2hpcHMubGVuZ3RoICsgbWlzc2luZ1NoaXBzLmxlbmd0aCA8PSBpKSBtaXNzaW5nU2hpcHMucHVzaChzaGlwTGVuZ3Roc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWlzc2luZ1NoaXBzLmxlbmd0aCA+IDApIHNvbHZlTWlzc2luZ1NoaXBzKG1pc3NpbmdTaGlwcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGlja1JhbmRvbU9yaWVudGF0aW9uICgpIHtcbiAgICAgICAgbGV0IGF1eCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTtcbiAgICAgICAgaWYgKGF1eCA9PSAxKSByZXR1cm4gJ3JpZ2h0JztcbiAgICAgICAgZWxzZSByZXR1cm4gJ2Rvd24nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNvbHZlTWlzc2luZ1NoaXBzIChhcnIpIHtcbiAgICAgICAgbGV0IGF2YWlsYWJsZSA9IFtdO1xuICAgICAgICBsZXQgbGVuZ3RoID0gc2hpcHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCAxMCA7IGkrKyl7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCAxMCA7IGorKyl7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxzW2ldW2pdLnNoaXAgPT0gLTIpIGF2YWlsYWJsZS5wdXNoKFtpLCBqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXZhaWxhYmxlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKGF2YWlsYWJsZVtqXVswXSwgYXZhaWxhYmxlW2pdWzFdLCAncmlnaHQnLCBhcnJbaV0pO1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcChhdmFpbGFibGVbal1bMF0sIGF2YWlsYWJsZVtqXVsxXSwgJ2Rvd24nLCBhcnJbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPCBzaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gc2hpcHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpcHMubGVuZ3RoICE9IDEwKSB7XG4gICAgICAgICAgICBjbGVhckJvYXJkKCk7IFxuICAgICAgICAgICAgc2hpcHMgPSBbXTtcbiAgICAgICAgICAgIHBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2hpcEluZGV4KHgsIHkpIHtcbiAgICAgICAgaWYgKGNlbGxzW3hdW3ldLnNoaXAgPiAtMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHNoaXBzW2ldLmNvb3JkaW5hdGVzW2NlbGxzW3hdW3ldLnNoaXBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwc1tpXS5jb29yZGluYXRlc1tjZWxsc1t4XVt5XS5zaGlwXVswXSA9PSB4ICYmIHNoaXBzW2ldLmNvb3JkaW5hdGVzW2NlbGxzW3hdW3ldLnNoaXBdWzFdID09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpOyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2lsbFNoaXAgKHgsIHkpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gZ2V0U2hpcEluZGV4KHgsIHkpO1xuICAgICAgICBzaGlwc1tpbmRleF0uY29vcmRpbmF0ZXMuZm9yRWFjaCh2YWwgPT4gY2VsbHNbdmFsWzBdXVt2YWxbMV1dLnNoaXAgPSAtMik7XG4gICAgICAgIHNoaXBzW2luZGV4XS5uZXh0VG9Db29yZC5mb3JFYWNoKHZhbCA9PiBjZWxsc1t2YWxbMF1dW3ZhbFsxXV0uc2hpcCA9IC0yKTtcbiAgICAgICAgc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2hpcHNbaV0ubmV4dFRvQ29vcmQuZm9yRWFjaCh2YWwgPT4gY2VsbHNbdmFsWzBdXVt2YWxbMV1dLnNoaXAgPSAtMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNoaXBPcmllbnRhdGlvbiAoeCwgeSkge1xuICAgICAgICBsZXQgaW5kZXggPSBnZXRTaGlwSW5kZXgoeCwgeSk7XG4gICAgICAgIHJldHVybiBzaGlwc1tpbmRleF0uZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoaXBJc1N1bmsgKHgsIHkpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gZ2V0U2hpcEluZGV4KHgsIHkpO1xuICAgICAgICByZXR1cm4gc2hpcHNbaW5kZXhdLmlzU3VuaygpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBsYWNlU2hpcCwgY2VsbHMsIHJlY2VpdmVBdHRhY2ssIHNoaXBzLCBhcmVBbGxTdW5rLCBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgICAgICAgICBraWxsU2hpcCwgZ2V0U2hpcE9yaWVudGF0aW9uLCBzaGlwSXNTdW5rIH1cbn1cblxuZXhwb3J0IHsgZ2FtZWJvYXJkIH1cblxuIiwiaW1wb3J0IHsgYWRkQ2hpbGRFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5U2V0dXAgfSBmcm9tIFwiLi9zZXR1cFwiXG5cbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkJyk7XG5cbmxldCBtZXNzYWdlO1xuXG5mdW5jdGlvbiBydW5IdWQoKSB7XG4gICAgbWVzc2FnZSA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdwJyk7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgT25lJ3MgVHVybmA7XG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdwMScpO1xuICAgIGxldCByZXN0YXJ0ID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2J1dHRvbicpO1xuICAgIHJlc3RhcnQudGV4dENvbnRlbnQgPSAnTmV3IEdhbWUnO1xuICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5U2V0dXApXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2UgKG51bSkge1xuICAgIGlmIChudW0gPT0gMSkge1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gIGBQbGF5ZXIgVHdvJ3MgVHVybmA7XG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncDEnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgUGxheWVyIE9uZSdzIFR1cm5gO1xuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3AxJyk7XG4gICAgfVxuICAgICAgICBcbn1cblxuZXhwb3J0IHsgcnVuSHVkLCB1cGRhdGVNZXNzYWdlIH0iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZCwgY3JlYXRlQWxpdmVTaGlwcyB9IGZyb20gXCIuL2RvbVN0dWZmXCI7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcnVuU2V0dXAgfSBmcm9tIFwiLi9zZXR1cFwiO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBydW5IdWQgfSBmcm9tIFwiLi9odWRcIjtcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuY29uc3QgZW5lbXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5lbXktYm9hcmQnKTtcbmxldCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUJvYXJkKHBsYXllcjEsIGZhbHNlKTtcbmxldCBlbmVteUJvYXJkID0gY3JlYXRlQm9hcmQoZW5lbXksIHRydWUpO1xubGV0IHBsYXllclNoaXBzID0gY3JlYXRlQWxpdmVTaGlwcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXNoaXBzJykpO1xubGV0IGVuZW15U2hpcHMgPSBjcmVhdGVBbGl2ZVNoaXBzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmVteS1zaGlwcycpKTtcblxubGV0IHAxR2FtZWJvYXJkID0gZ2FtZWJvYXJkKCk7XG5sZXQgcDJHYW1lYm9hcmQgPSBnYW1lYm9hcmQoKTtcblxubGV0IHAxID0gcGxheWVyKCdQbGF5ZXIgMScsICdodW1hbicpO1xubGV0IHAyID0gcGxheWVyKCdQbGF5ZXIgMicsICdhaScpO1xubGV0IHB2cCA9IGZhbHNlO1xuXG5ydW5TZXR1cCgpO1xubGV0IGdhbWUgPSBzdGFydEdhbWUoKTtcbnJ1bkh1ZCgpO1xuXG5cbmZ1bmN0aW9uIHNldFAxIChib2FyZCkge1xuICAgIHAxR2FtZWJvYXJkID0gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIHNldFAyIChib2FyZCkge1xuICAgIHAyR2FtZWJvYXJkID0gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vZGUgKCkge1xuICAgIGlmIChwdnApIHtcbiAgICAgICAgcHZwID0gZmFsc2U7XG4gICAgICAgIHAyID0gcGxheWVyKCdQbGF5ZXIgMicsICdhaScpOyAgXG4gICAgfSAgXG4gICAgZWxzZSB7XG4gICAgICAgIHB2cCA9IHRydWU7XG4gICAgICAgIHAyID0gcGxheWVyKCdQbGF5ZXIgMicsICdodW1hbicpOyBcbiAgICB9XG59XG5cblxuZXhwb3J0IHsgZ2FtZSwgcGxheWVyQm9hcmQsIGVuZW15Qm9hcmQsIHNldFAxLCBzZXRQMiwgcDFHYW1lYm9hcmQsIHAyR2FtZWJvYXJkLFxuICAgICAgICBlbmVteVNoaXBzLCBwbGF5ZXJTaGlwcywgcDEsIHAyLCBwdnAsIGNoYW5nZU1vZGUgfVxuXG5cbi8vYWRkIGNvbXB1dGVyIHNtYXJ0IHBsYXlcbi8vYWRkIHNtYWxsIGRlbGF5IGZvciBjb21wdXRlciBwbGF5XG4vL3NldHVwIGZvciBzZWNvbmQgcGxheWVyIiwiY29uc3QgcGxheWVyID0gKG5hbWUsIGJyYWluKSA9PiB7XG4gICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgIGxldCBzZWNvbmRIaXQgPSBmYWxzZTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGRpcmVjdGlvbjtcbiAgICBsZXQgdHJpZXMgPSBbXTtcbiAgICBsZXQgdHJpZXMyID0gW107XG4gICAgbGV0IGZvdW5kU2hpcCA9IFtdO1xuICAgIGZ1bmN0aW9uIHRha2VUdXJuKHgsIHksIGdhbWVib2FyZCkge1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGFrZUNvbXB1dGVyVHVybihnYW1lYm9hcmQpIHtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgdHJ5U21hcnRQbGF5KGdhbWVib2FyZCk7XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgbGV0IHZhbGlkSGl0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgICAgICB3aGlsZSh2YWxpZEhpdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgICAgIHZhbGlkSGl0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5jZWxsc1t4XVt5XS5zaGlwID4gLTEpIHtcbiAgICAgICAgICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvdW5kU2hpcC5wdXNoKFt4LCB5XSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJ5U21hcnRQbGF5KGdhbWVib2FyZCkge1xuICAgICAgICBpZiAoIXNlY29uZEhpdCkge1xuICAgICAgICAgICAgaWYgKGNoZWNrVmFsaWRBdXhDb29yZCAoZm91bmRTaGlwWzBdWzBdICsgMSwgZm91bmRTaGlwWzBdWzFdKSkgdHJpZXMucHVzaChbZm91bmRTaGlwWzBdWzBdICsgMSwgZm91bmRTaGlwWzBdWzFdXSk7XG4gICAgICAgICAgICBpZiAoY2hlY2tWYWxpZEF1eENvb3JkIChmb3VuZFNoaXBbMF1bMF0gLSAxLCBmb3VuZFNoaXBbMF1bMV0pKSB0cmllcy5wdXNoKFtmb3VuZFNoaXBbMF1bMF0gLSAxLCBmb3VuZFNoaXBbMF1bMV1dKTtcbiAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkQXV4Q29vcmQgKGZvdW5kU2hpcFswXVswXSwgZm91bmRTaGlwWzBdWzFdICsgMSkpIHRyaWVzLnB1c2goW2ZvdW5kU2hpcFswXVswXSwgZm91bmRTaGlwWzBdWzFdICsgMV0pO1xuICAgICAgICAgICAgaWYgKGNoZWNrVmFsaWRBdXhDb29yZCAoZm91bmRTaGlwWzBdWzBdLCBmb3VuZFNoaXBbMF1bMV0gLSAxKSkgdHJpZXMucHVzaChbZm91bmRTaGlwWzBdWzBdLCBmb3VuZFNoaXBbMF1bMV0gLSAxXSk7XG4gICAgICAgICAgICBsZXQgdmFsaWRIaXQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0cmllc1tpXVswXSwgdHJpZXNbaV1bMV0pO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgd2hpbGUodmFsaWRIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB2YWxpZEhpdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHRyaWVzW2ldWzBdLCB0cmllc1tpXVsxXSk7XG4gICAgICAgICAgICBpKys7ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmNlbGxzW3RyaWVzW2kgLSAxXVswXV1bdHJpZXNbaSAtIDFdWzFdXS5zaGlwID4gLTEpIHtcbiAgICAgICAgICAgICAgICBzZWNvbmRIaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChmb3VuZFNoaXBbMF1bMF0gPT0gdHJpZXNbaSAtIDFdWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvdW5kU2hpcC5wdXNoKFt0cmllc1tpIC0gMV1bMF0sIHRyaWVzW2kgLSAxXVsxXV0pO1xuICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICBmb3VuZFNoaXAuZm9yRWFjaChjb29yZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tWYWxpZEF1eENvb3JkKGNvb3Jkc1swXSwgY29vcmRzWzFdICsgMSkpIHRyaWVzMi5wdXNoKFtjb29yZHNbMF0sIGNvb3Jkc1sxXSArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrVmFsaWRBdXhDb29yZChjb29yZHNbMF0sIGNvb3Jkc1sxXSAtIDEpKSB0cmllczIucHVzaChbY29vcmRzWzBdLCBjb29yZHNbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3VuZFNoaXAuZm9yRWFjaChjb29yZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tWYWxpZEF1eENvb3JkKGNvb3Jkc1swXSArIDEsIGNvb3Jkc1sxXSkpIHRyaWVzMi5wdXNoKFtjb29yZHNbMF0gKyAxLCBjb29yZHNbMV1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrVmFsaWRBdXhDb29yZChjb29yZHNbMF0gLSAxLCBjb29yZHNbMV0pKSB0cmllczIucHVzaChbY29vcmRzWzBdIC0gMSwgY29vcmRzWzFdXSk7XG4gICAgICAgICAgICAgICAgfSkgICAgICAgICAgIFxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHZhbGlkSGl0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sodHJpZXMyW2ldWzBdLCB0cmllczJbaV1bMV0pO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgd2hpbGUodmFsaWRIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB2YWxpZEhpdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHRyaWVzMltpXVswXSwgdHJpZXMyW2ldWzFdKTtcbiAgICAgICAgICAgICAgICBpKys7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5jZWxsc1t0cmllczJbaSAtIDFdWzBdXVt0cmllczJbaSAtIDFdWzFdXS5zaGlwID4gLTEpIHtcbiAgICAgICAgICAgICAgICBmb3VuZFNoaXAucHVzaChbdHJpZXMyW2kgLSAxXVswXSwgdHJpZXMyW2kgLSAxXVsxXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZ2FtZWJvYXJkLnNoaXBJc1N1bmsoZm91bmRTaGlwWzBdWzBdLCBmb3VuZFNoaXBbMF1bMV0pKSB7XG4gICAgICAgICAgICBjbGVhclZhcmlhYmxlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tWYWxpZEF1eENvb3JkICh4LCB5KSB7XG4gICAgICAgIGlmICh4ID4gOSB8fCB4IDwgMCB8fCB5ID4gOSB8fCB5IDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBlbHNlIHJldHVybiB0cnVlOyAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhclZhcmlhYmxlcygpIHtcbiAgICAgICAgaGl0ID0gZmFsc2U7XG4gICAgICAgIHNlY29uZEhpdCA9IGZhbHNlO1xuICAgICAgICB0cmllcyA9IFtdO1xuICAgICAgICBpID0gMDtcbiAgICAgICAgZm91bmRTaGlwID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdGFrZVR1cm4sIG5hbWUsIGJyYWluLCB0YWtlQ29tcHV0ZXJUdXJuLCBjbGVhclZhcmlhYmxlcyB9XG59XG5cbmV4cG9ydCB7IHBsYXllciB9IiwiaW1wb3J0IHsgY3JlYXRlQm9hcmQsIHNob3dQYXNzaW5nU2NyZWVuIH0gZnJvbSBcIi4vZG9tU3R1ZmZcIjtcbmltcG9ydCB7IGFkZENoaWxkRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBnYW1lLCBzZXRQMSwgc2V0UDIsIHB2cCwgY2hhbmdlTW9kZSB9IGZyb20gXCIuXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR1cCcpO1xubGV0IGJvYXJkO1xubGV0IGRvbUJvYXJkO1xubGV0IHBsYWNlbWVudEJvYXJkO1xubGV0IGluZGV4O1xubGV0IGxlbmd0aDtcbmxldCBvcmllbnRhdGlvbiA9ICdkb3duJztcbmxldCByZW1haW5pbmcgPSAwO1xubGV0IGRyYWdJdGVtO1xubGV0IGRyYWcgPSBmYWxzZTtcbmxldCBraWxsID0gZmFsc2U7XG5sZXQgcHMgPSBbXTtcbmxldCBkb21TaGlwcyA9IFtdO1xubGV0IGNhbmNlbDtcbmxldCBzdGFydDtcbmxldCBjb3VudGVyID0gMDtcblxuZnVuY3Rpb24gcnVuU2V0dXAgKCkge1xuICAgIGNvbnN0IGxlZnQgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnZGl2JywgJy5sZWZ0Jyk7XG4gICAgYm9hcmQgPSBhZGRDaGlsZEVsZW1lbnQobGVmdCwgJ2RpdicsICcjcGxhY2VtZW50LWJvYXJkJyk7XG4gICAgZG9tQm9hcmQgPSBjcmVhdGVCb2FyZChib2FyZCwgZmFsc2UpO1xuICAgIGRvbUJvYXJkLmFkZERyb3BFdmVudHMoKTtcbiAgICBwbGFjZW1lbnRCb2FyZCA9IGdhbWVib2FyZCgpO1xuXG4gICAgY29uc3QgcmlnaHQgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnZGl2JywgJy5yaWdodCcpO1xuICAgIGNvbnN0IHNoaXBzID0gYWRkQ2hpbGRFbGVtZW50KHJpZ2h0LCAnZGl2JywgJyNkcmFnLXNoaXBzJyk7XG5cbiAgICBmb3IgKGxldCBpID0gNTsgaSA+IDE7IGktLSkge1xuICAgICAgICBsZXQgZGl2ID0gYWRkQ2hpbGRFbGVtZW50KHNoaXBzLCAnZGl2JywgJy5zaGlwLWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgcCA9IGFkZENoaWxkRWxlbWVudChkaXYsICdwJywgJy5zaGlwcy1yZW1haW5pbmcnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IDYgLSBpO1xuICAgICAgICBwLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICBwcy5wdXNoKHApO1xuICAgICAgICBsZXQgc2hpcCA9IGFkZENoaWxkRWxlbWVudChkaXYsICdkaXYnLCAnLnNoaXAnKTtcbiAgICAgICAgZG9tU2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIChkb21TaGlwc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSA/IG9yaWVudGF0aW9uID0gJ3JpZ2h0JyA6IG9yaWVudGF0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgaW5kZXggPSA1IC0gaTtcbiAgICAgICAgICAgIGxlbmd0aCA9IGk7XG4gICAgICAgICAgICBkcmFnSXRlbSA9IHNoaXA7XG4gICAgICAgICAgICBpZiAoK3AudGV4dENvbnRlbnQgPiAwKSBkcmFnID0gdHJ1ZTtcbiAgICAgICAgICAgIGtpbGwgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IGRyYWcgPSBmYWxzZSk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGFkZENoaWxkRWxlbWVudChzaGlwLCAnZGl2JywgJy5jZWxsJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25zID0gYWRkQ2hpbGRFbGVtZW50KHJpZ2h0LCAnZGl2JywgJyNzZXR0aW5nLWJ1dHRvbnMnKTtcblxuICAgIGNvbnN0IHJhbmRvbSA9IGFkZENoaWxkRWxlbWVudChidXR0b25zLCAnYnV0dG9uJyk7XG4gICAgcmFuZG9tLnRleHRDb250ZW50ID0gJ1JhbmRvbSc7XG4gICAgcmFuZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGlja1JhbmRvbSk7XG5cbiAgICBjb25zdCByb3RhdGUgPSBhZGRDaGlsZEVsZW1lbnQoYnV0dG9ucywgJ2J1dHRvbicpO1xuICAgIHJvdGF0ZS50ZXh0Q29udGVudCA9ICdSb3RhdGUnO1xuICAgIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVNoaXBzKTtcblxuICAgIGNvbnN0IGNsZWFyID0gYWRkQ2hpbGRFbGVtZW50KGJ1dHRvbnMsICdidXR0b24nKTtcbiAgICBjbGVhci50ZXh0Q29udGVudCA9ICdDbGVhcic7XG4gICAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckJvYXJkKTtcblxuICAgIHN0YXJ0ID0gYWRkQ2hpbGRFbGVtZW50KGJ1dHRvbnMsICdidXR0b24nKTtcbiAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCc7XG4gICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdHYW1lKTtcblxuICAgIGxldCBtb2RlID0gYWRkQ2hpbGRFbGVtZW50KGJ1dHRvbnMsICdidXR0b24nKTtcbiAgICBtb2RlLnRleHRDb250ZW50ID0gJ1BsYXllciBWcy4gQWknO1xuICAgIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChwdnApIHtcbiAgICAgICAgICAgIG1vZGUudGV4dENvbnRlbnQgPSAnUGxheWVyIFZzLiBBaSc7XG4gICAgICAgICAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCc7XG4gICAgICAgICAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0dhbWUpO1xuICAgICAgICAgICAgc3RhcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQdlBHYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGUudGV4dENvbnRlbnQgPSAnUGxheWVyIFZzLiBQbGF5ZXInO1xuICAgICAgICAgICAgc3RhcnQudGV4dENvbnRlbnQgPSAnU2V0IFAxIEJvYXJkJzsgXG4gICAgICAgICAgICBzdGFydC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0dhbWUpO1xuICAgICAgICAgICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQdlBHYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIGNoYW5nZU1vZGUoKTtcbiAgICAgICAgdG9nZ2xlQ2FuY2VsKCk7XG4gICAgfSlcblxuICAgIGNhbmNlbCA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdidXR0b24nLCAnLmhpZGUnKTtcbiAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAneCc7XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKSk7XG59XG4vL2NoZWNrcG9pbnRcbmZ1bmN0aW9uIHBsYWNlU2hpcCAoeCwgeSkge1xuICAgIGlmIChwbGFjZW1lbnRCb2FyZC5zaGlwcy5sZW5ndGggPj0gMTApIHJldHVybjtcbiAgICBwbGFjZW1lbnRCb2FyZC5wbGFjZVNoaXAoeCwgeSwgb3JpZW50YXRpb24sIGxlbmd0aCk7XG4gICAgZG9tQm9hcmQudXBkYXRlQm9hcmQocGxhY2VtZW50Qm9hcmQsIGZhbHNlLCB0cnVlKTtcbiAgICBpZihraWxsKXtcbiAgICAgICAgZHJhZ0l0ZW0ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudEJvYXJkLnNoaXBzLmxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgcHNbaW5kZXhdLnRleHRDb250ZW50ID0gK3BzW2luZGV4XS50ZXh0Q29udGVudCAtIDE7XG4gICAgICAgIGRvbUJvYXJkLmNyZWF0ZVNoaXBEaXYoeCwgeSwgb3JpZW50YXRpb24sIGxlbmd0aCk7XG4gICAgfVxuICAgIFxuICAgICtwc1tpbmRleF0udGV4dENvbnRlbnQgPT0gMCA/XG4gICAgICAgIGRvbVNoaXBzW2luZGV4XS5kcmFnZ2FibGUgPSBmYWxzZTpcbiAgICAgICAgZG9tU2hpcHNbaW5kZXhdLmRyYWdnYWJsZSA9IHRydWU7XG5cbiAgICBraWxsID0gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGNoZWNrRHJhZyAoKSB7XG4gICAgcmV0dXJuIGRyYWc7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURyYWcgKCkge1xuICAgIGRyYWcgPT0gdHJ1ZSA/IGRyYWcgPSBmYWxzZTogZHJhZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHNhdmVWYXJpYWJsZXMoaW5kLCBsZW4sIGRyYSwgeCwgeSkge1xuICAgIGluZGV4ID0gaW5kO1xuICAgIGxlbmd0aCA9IGxlbjtcbiAgICBraWxsID0gdHJ1ZTtcbiAgICBkcmFnSXRlbSA9IGRyYTtcbiAgICBvcmllbnRhdGlvbiA9IHBsYWNlbWVudEJvYXJkLmdldFNoaXBPcmllbnRhdGlvbih4LCB5KTtcbiAgICBwbGFjZW1lbnRCb2FyZC5raWxsU2hpcCh4LCB5KTtcbiAgICBkb21Cb2FyZC51cGRhdGVCb2FyZChwbGFjZW1lbnRCb2FyZCwgZmFsc2UsIHRydWUpOyAgXG4gICAgcHNbaW5kZXhdLnRleHRDb250ZW50ID0gK3BzW2luZGV4XS50ZXh0Q29udGVudCArIDE7IFxuICAgIHJlbWFpbmluZy0tO1xuICAgIGRvbVNoaXBzW2luZGV4XS5kcmFnZ2FibGUgPSB0cnVlOyBcbn1cblxuZnVuY3Rpb24gcGlja1JhbmRvbSAoKSB7XG4gICAgY2xlYXJCb2FyZCgpO1xuICAgIHBsYWNlbWVudEJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb21Cb2FyZC51cGRhdGVCb2FyZChwbGFjZW1lbnRCb2FyZCwgZmFsc2UsIHRydWUpO1xuICAgICAgICBwbGFjZW1lbnRCb2FyZC5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgZG9tQm9hcmQuY3JlYXRlU2hpcERpdihzaGlwLmNvb3JkaW5hdGVzWzBdWzBdLCBzaGlwLmNvb3JkaW5hdGVzWzBdWzFdLCBzaGlwLmRpcmVjdGlvbiwgc2hpcC5jb29yZGluYXRlcy5sZW5ndGgpO1xuICAgICAgICB9KTtcbiAgICB9LCAxMDApO1xuICAgIHBzLmZvckVhY2goKHApID0+IHAudGV4dENvbnRlbnQgPSAwKTtcbiAgICBkb21TaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBzaGlwLmRyYWdnYWJsZSA9IGZhbHNlKTtcbiAgICByZW1haW5pbmcgPSAxMDsgIFxufVxuXG5mdW5jdGlvbiBjbGVhckJvYXJkKCkge1xuICAgIHBsYWNlbWVudEJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gICAgbGV0IHNoaXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb3ZlYWJsZScpKTtcbiAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5yZW1vdmUoKSk7XG4gICAgZG9tQm9hcmQudXBkYXRlQm9hcmQocGxhY2VtZW50Qm9hcmQsIGZhbHNlLCB0cnVlKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArKykgcHNbaV0udGV4dENvbnRlbnQgPSA0IC0gaTtcbiAgICBkb21TaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5kcmFnZ2FibGUgPSB0cnVlKTtcbiAgICByZW1haW5pbmcgPSAwO1xufVxuXG5mdW5jdGlvbiByb3RhdGVTaGlwcygpIHtcbiAgICAoZG9tU2hpcHNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkgPyBvcmllbnRhdGlvbiA9ICdkb3duJyA6IG9yaWVudGF0aW9uID0gJ3JpZ2h0JzsgXG4gICAgZG9tU2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXAuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlJykpO1xufVxuXG5mdW5jdGlvbiBzb2x2ZU91dE9mQm91bmRhcmllcyAoKSB7XG4gICAgaWYgKHBsYWNlbWVudEJvYXJkLnNoaXBzLmxlbmd0aCA8IHJlbWFpbmluZykge1xuICAgICAgICByZW1haW5pbmctLTtcbiAgICB9XG4gICAgZWxzZSBkcmFnSXRlbS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gbmV3R2FtZSAoKSB7XG4gICAgaWYgKHBsYWNlbWVudEJvYXJkLnNoaXBzLmxlbmd0aCA8IDEwKSByZXR1cm47XG4gICAgbGV0IGNvbXB1dGVyID0gZ2FtZWJvYXJkKCk7XG4gICAgY29tcHV0ZXIucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgc2V0UDEocGxhY2VtZW50Qm9hcmQpO1xuICAgIHNldFAyKGNvbXB1dGVyKTtcbiAgICBnYW1lLnJlU3RhcnQoKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIGNhbmNlbC5kaXNhYmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2V0dXAgKCkge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgY2xlYXJCb2FyZCgpO1xuICAgIGNhbmNlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNhbmNlbCgpIHtcbiAgICAoY2FuY2VsLmRpc2FibGVkID09IHRydWUpID8gY2FuY2VsLmRpc2FibGVkID0gZmFsc2U6IGNhbmNlbC5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIG5ld1B2UEdhbWUoKSB7XG4gICAgaWYgKHBsYWNlbWVudEJvYXJkLnNoaXBzLmxlbmd0aCA8IDEwKSByZXR1cm47XG4gICAgaWYgKGNvdW50ZXIgPT0gMCkge1xuICAgICAgICBzZXRQMShwbGFjZW1lbnRCb2FyZCk7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgc2hvd1Bhc3NpbmdTY3JlZW4oMSk7XG4gICAgICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0JztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNldFAyKHBsYWNlbWVudEJvYXJkKTtcbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIGdhbWUucmVTdGFydCgpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICBjYW5jZWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgc2hvd1Bhc3NpbmdTY3JlZW4oMCk7XG4gICAgICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1NldCBQMSBCb2FyZCc7XG4gICAgfSBcbiAgICBjbGVhckJvYXJkKCk7XG59XG5cblxuZXhwb3J0IHsgcnVuU2V0dXAsIHBsYWNlU2hpcCwgY2hlY2tEcmFnLCB0b2dnbGVEcmFnLCBzYXZlVmFyaWFibGVzLFxuICAgICAgICAgc29sdmVPdXRPZkJvdW5kYXJpZXMsIGRpc3BsYXlTZXR1cH1cblxuIiwiY29uc3Qgc2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGxldCBjZWxscyA9IFtdO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsZW5ndGggOyBpKyspIHtcbiAgICAgICAgY2VsbHNbaV0gPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaXQgKG51bSkge1xuICAgICAgICBjZWxsc1tudW1dID0gJ2hpdCc7XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsgKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjZWxsc1tpXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VuaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdW5rID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaGl0LCBpc1N1bmssIGNlbGxzIH1cbn1cblxuZXhwb3J0IHsgc2hpcCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=