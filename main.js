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
/* harmony export */   "createBoard": () => (/* binding */ createBoard)
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
    
    return { updateBoard, addDropEvents, createShipDiv }
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



//checkpoint
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
                changeTurns();
                (0,_hud__WEBPACK_IMPORTED_MODULE_0__.updateMessage)(currentP);
                if (___WEBPACK_IMPORTED_MODULE_1__.pvp == true) {
                    players = [___WEBPACK_IMPORTED_MODULE_1__.p1, ___WEBPACK_IMPORTED_MODULE_1__.p2];
                    ___WEBPACK_IMPORTED_MODULE_1__.playerShips.updateShips(boards[currentP]);
                    ___WEBPACK_IMPORTED_MODULE_1__.playerBoard.updateBoard(boards[currentP], false, false);
                    ___WEBPACK_IMPORTED_MODULE_1__.enemyShips.updateShips(boards[currentB]);
                    ___WEBPACK_IMPORTED_MODULE_1__.enemyBoard.updateBoard(boards[currentB], true, false);
                }
                if (players[currentP].brain == 'ai') handleTurn();
            }
        }
        else {
            players[currentP].takeRandomTurn(boards[currentB]);
            ___WEBPACK_IMPORTED_MODULE_1__.playerShips.updateShips(boards[currentB]);
            ___WEBPACK_IMPORTED_MODULE_1__.playerBoard.updateBoard(boards[currentB], false, false);
            over = checkWinner();
            changeTurns();
            (0,_hud__WEBPACK_IMPORTED_MODULE_0__.updateMessage)(currentP);
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

    return { placeShip, cells, receiveAttack, ships, areAllSunk, placeShipsRandomly,
            killShip, getShipOrientation }
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
//add two player mode done but add a disable for cancel when change modes

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

    function takeTurn(x, y, gameboard) {
        return gameboard.receiveAttack(x, y);
    }

    function takeRandomTurn(gameboard) {
        let x = Math.floor(Math.random()*10);
        let y = Math.floor(Math.random()*10);
        let validHit = gameboard.receiveAttack(x, y);
        while(validHit == false) {
            x = Math.floor(Math.random()*10);
            y = Math.floor(Math.random()*10);
            validHit = gameboard.receiveAttack(x, y);
        }   
    }

    return { takeTurn, name, brain, takeRandomTurn }
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

    const start = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button');
    start.textContent = 'Start';
    start.addEventListener('click', newGame);

    let mode = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(buttons, 'button');
    mode.textContent = 'Player Vs. Ai';
    mode.addEventListener('click', () => {
        (___WEBPACK_IMPORTED_MODULE_3__.pvp) ? mode.textContent = 'Player Vs. Ai':
            mode.textContent = 'Player Vs. Player';
        (0,___WEBPACK_IMPORTED_MODULE_3__.changeMode)();
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
}

function displaySetup () {
    container.classList.toggle('hide');
    clearBoard();
    cancel.classList.remove('hide');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9odWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NldHVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2JvYXJkcywgI3NldHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZW1lbnQtYm9hcmQsICNzZXR1cCAjZHJhZy1zaGlwcywgLnNoaXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIgcDo6YmVmb3JlLCAuc21hbGwgcDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ3gnO1xcbn1cXG5cXG4uc2hpcC5tb3ZlYWJsZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KSB0cmFuc2xhdGVZKC0xcHgpO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLmRyYWctb3Zlci5hdmFpbGFibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0MCUpO1xcbn1cXG5cXG4uc2hpcC5oaWRlLCAjc2V0dXAuaGlkZSwgI3NldHVwIC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb29yZCB7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllci1ib2FyZCAuc2hpcCwgI2VuZW15LWJvYXJkIC5zaGlwLmhpdCwgI3NldHVwIC5zaGlwLCAuc2hpcHMgLnNoaXAge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk3LCA5Nyk7XFxufVxcblxcbi5zbWFsbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zbWFsbCAuY2VsbCB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcblxcbi5zaGlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2hpcC5zdW5rIC5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jYm9hcmRzLCAjc2V0dXAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsICNlbmVteS1ib2FyZCwgI3BsYWNlbWVudC1ib2FyZCwgI3NldHVwICNkcmFnLXNoaXBzLCAuc2hpcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciBwOjpiZWZvcmUsIC5zbWFsbCBwOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAneCc7XFxufVxcblxcbi5zaGlwLm1vdmVhYmxlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpIHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uZHJhZy1vdmVyLmF2YWlsYWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQwJSk7XFxufVxcblxcbi5zaGlwLmhpZGUsICNzZXR1cC5oaWRlLCAjc2V0dXAgLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvb3JkIHtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIC5zaGlwLCAjZW5lbXktYm9hcmQgLnNoaXAuaGl0LCAjc2V0dXAgLnNoaXAsIC5zaGlwcyAuc2hpcCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTcsIDk3KTtcXG59XFxuXFxuLnNtYWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNtYWxsIC5jZWxsIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuXFxuXFxuLnNoaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5zaGlwLnN1bmsgLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDAsIDEwMCwgMTAwKTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhZGRDaGlsZEVsZW1lbnQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgcGxhY2VTaGlwLCBjaGVja0RyYWcsIHRvZ2dsZURyYWcsIHNhdmVWYXJpYWJsZXMsIHNvbHZlT3V0T2ZCb3VuZGFyaWVzIH0gZnJvbSBcIi4vc2V0dXBcIjtcblxuY29uc3QgY3JlYXRlQm9hcmQgPSAoYm9hcmQsIGVuZW15KSA9PiB7XG4gICAgbGV0IGNlbGxzID0gW107XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgbGV0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGxldCBkaXYgPSBhZGRDaGlsZEVsZW1lbnQoYm9hcmQsICdkaXYnLCAnLnJvdycpO1xuICAgICAgICBpZiAoaSA+IC0xKSBjZWxsc1tpXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChqID09IDApIHtcbiAgICAgICAgICAgICAgIGxldCBsZXR0ZXIgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAncCcsICcuY2VsbCcpO1xuICAgICAgICAgICAgICAgbGV0dGVyLmNsYXNzTGlzdC5hZGQoJ2Nvb3JkJyk7XG4gICAgICAgICAgICAgICBsZXR0ZXIudGV4dENvbnRlbnQgPSBsZXR0ZXJzW2ldOyBcbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgaWYgKGkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgIGxldCBsZXR0ZXIgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAncCcsICcuY2VsbCcpO1xuICAgICAgICAgICAgICAgbGV0dGVyLnRleHRDb250ZW50ID0gaiArIDE7XG4gICAgICAgICAgICAgICBsZXR0ZXIuY2xhc3NMaXN0LmFkZCgnY29vcmQnKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgIGxldCBjZWxsID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ2J1dHRvbicsICcuY2VsbCcpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXZhaWxhYmxlJyk7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV0ucHVzaChjZWxsKTsgXG4gICAgICAgICAgICAgICAgaWYgKGVuZW15KSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnYW1lLmhhbmRsZVR1cm4oaSwgaikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVCb2FyZCAoYm9hcmQsIGVuZW15LCBzZXR1cCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNldHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5jZWxsc1tpXVtqXS5oaXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICAgICAgICAgIChib2FyZC5jZWxsc1tpXVtqXS5zaGlwID4gLTEpID8gY2VsbHNbaV1bal0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICAoYm9hcmQuY2VsbHNbaV1bal0uc2hpcCA9PSAtMikgPyBjZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdhdmFpbGFibGUnKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2F2YWlsYWJsZScpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIChib2FyZC5jZWxsc1tpXVtqXS5zaGlwID4gLTEgJiYgYm9hcmQuY2VsbHNbaV1bal0uaGl0ID09IHRydWUpID8gXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRHJvcEV2ZW50cyAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKVxuICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsICgpID0+IGRyb3AoY2VsbHNbaV1bal0sIGksIGopKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnRW50ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRyYWdMZWF2ZShlKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcm9wKGNlbGwsIGksIGopIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgICAgICAgaWYgKCFjaGVja0RyYWcoKSkgcmV0dXJuO1xuICAgICAgICB4ID0gaTtcbiAgICAgICAgeSA9IGo7XG4gICAgICAgIHBsYWNlU2hpcCh4LCB5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTaGlwRGl2IChpLCBqLCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBzaGlwID0gYWRkQ2hpbGRFbGVtZW50KGNlbGxzW2ldW2pdLCAnZGl2JywgJy5zaGlwJyk7XG4gICAgICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdtb3ZlYWJsZScpO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRvZ2dsZURyYWcpO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pXG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4gc2F2ZVZhcmlhYmxlcyg1IC0gbGVuZ3RoLCBsZW5ndGgsIHNoaXAsIGksIGopKVxuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0b2dnbGVEcmFnKTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgc29sdmVPdXRPZkJvdW5kYXJpZXMpO1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGFkZENoaWxkRWxlbWVudChzaGlwLCAnZGl2JywgJy5jZWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdyaWdodCcpIHNoaXAuY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IHVwZGF0ZUJvYXJkLCBhZGREcm9wRXZlbnRzLCBjcmVhdGVTaGlwRGl2IH1cbn1cblxuY29uc3QgY3JlYXRlQWxpdmVTaGlwcyA9IChkaXYpID0+IHtcbiAgICBsZXQgcHMgPSBbXTtcbiAgICBsZXQgc2hpcHMgPSBbXTtcbiAgICBsZXQgbGVuZ2h0cyA9IFs1LCA0LCAzLCAyXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ2RpdicsICcuc21hbGwnKTtcbiAgICAgICAgbGV0IHAgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gaSArIDE7XG4gICAgICAgIHBzLnB1c2gocCk7XG4gICAgICAgIGxldCBzaGlwID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2RpdicsICcuc2hpcCcpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDUgLSBpOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gYWRkQ2hpbGRFbGVtZW50KHNoaXAsICdkaXYnLCAnLmNlbGwnKTtcbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNoaXBzIChib2FyZCkge1xuICAgICAgICBwcy5mb3JFYWNoKHAgPT4gcC50ZXh0Q29udGVudCA9IDApO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5jbGFzc0xpc3QuYWRkKCdzdW5rJykpO1xuICAgICAgICBib2FyZC5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ2h0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGVuZ2h0c1tpXSA9PSBzaGlwLmNlbGxzLmxlbmd0aCkgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwc1tpbmRleF0udGV4dENvbnRlbnQgPSArcHNbaW5kZXhdLnRleHRDb250ZW50ICsgMTtcbiAgICAgICAgICAgICAgICBzaGlwc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc3VuaycpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4geyB1cGRhdGVTaGlwcyB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUJvYXJkLCBjcmVhdGVBbGl2ZVNoaXBzIH0iLCJjb25zdCBhZGRDaGlsZEVsZW1lbnQgPSAocGFyZW50LCBlbGVtZW50LCBjc3MpID0+IHtcbiAgICBsZXQgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtZW50fWApO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbG0pOyBcbiAgICBpZiAoY3NzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY3NzWzBdID09ICcuJyApXG4gICAgICAgIGVsbS5jbGFzc05hbWUgPSBjc3Muc3Vic3RyKDEpO1xuICAgICAgICBlbHNlIGlmIChjc3NbMF0gPT0gJyMnKVxuICAgICAgICBlbG0uaWQgPSBjc3Muc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIHJldHVybiBlbG07XG59XG5cbmZ1bmN0aW9uIGhpZGVDb250ZW50cyAoZGl2KSB7XG4gICAgZm9yIChsZXQgaT0wOyBpPGRpdi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpdi5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVDb250ZW50cyAoZGl2KSB7XG4gICAgZm9yIChsZXQgaT0wOyBpPGRpdi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpdi5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IHthZGRDaGlsZEVsZW1lbnQsIGhpZGVDb250ZW50cywgcmVzdG9yZUNvbnRlbnRzfTsiLCJpbXBvcnQgeyB1cGRhdGVNZXNzYWdlIH0gZnJvbSBcIi4vaHVkXCJcbmltcG9ydCB7IHBsYXllckJvYXJkLCBlbmVteUJvYXJkLCBwMUdhbWVib2FyZCwgcDJHYW1lYm9hcmQsIGVuZW15U2hpcHMsIHBsYXllclNoaXBzLFxuICAgICAgICBwMSwgcDIsIHB2cCB9IGZyb20gXCIuXCI7XG5cbi8vY2hlY2twb2ludFxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGxldCBvdmVyID0gZmFsc2U7XG4gICAgbGV0IHBsYXllcnMgPSBbcDEsIHAyXTtcbiAgICBsZXQgYm9hcmRzID0gW3AxR2FtZWJvYXJkLCBwMkdhbWVib2FyZF07XG4gICAgbGV0IGN1cnJlbnRQID0gMDtcbiAgICBsZXQgY3VycmVudEIgPSAxO1xuICAgIHAxR2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIHBsYXllckJvYXJkLnVwZGF0ZUJvYXJkKHAxR2FtZWJvYXJkLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgcDJHYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgZW5lbXlCb2FyZC51cGRhdGVCb2FyZChwMkdhbWVib2FyZCwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlVHVybih4LCB5KSB7XG4gICAgICAgIGlmIChvdmVyKSByZXR1cm47XG4gICAgICAgIGlmIChwbGF5ZXJzW2N1cnJlbnRQXS5icmFpbiA9PSAnaHVtYW4nKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVkID0gcGxheWVyc1tjdXJyZW50UF0udGFrZVR1cm4oeCwgeSwgYm9hcmRzW2N1cnJlbnRCXSk7XG4gICAgICAgICAgICBpZiAocGxheWVkKSB7XG4gICAgICAgICAgICAgICAgZW5lbXlTaGlwcy51cGRhdGVTaGlwcyhib2FyZHNbY3VycmVudEJdKTtcbiAgICAgICAgICAgICAgICBlbmVteUJvYXJkLnVwZGF0ZUJvYXJkKGJvYXJkc1tjdXJyZW50Ql0sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvdmVyID0gY2hlY2tXaW5uZXIoKTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VUdXJucygpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoY3VycmVudFApO1xuICAgICAgICAgICAgICAgIGlmIChwdnAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzID0gW3AxLCBwMl07XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBzLnVwZGF0ZVNoaXBzKGJvYXJkc1tjdXJyZW50UF0pO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC51cGRhdGVCb2FyZChib2FyZHNbY3VycmVudFBdLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBlbmVteVNoaXBzLnVwZGF0ZVNoaXBzKGJvYXJkc1tjdXJyZW50Ql0pO1xuICAgICAgICAgICAgICAgICAgICBlbmVteUJvYXJkLnVwZGF0ZUJvYXJkKGJvYXJkc1tjdXJyZW50Ql0sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcnNbY3VycmVudFBdLmJyYWluID09ICdhaScpIGhhbmRsZVR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBsYXllcnNbY3VycmVudFBdLnRha2VSYW5kb21UdXJuKGJvYXJkc1tjdXJyZW50Ql0pO1xuICAgICAgICAgICAgcGxheWVyU2hpcHMudXBkYXRlU2hpcHMoYm9hcmRzW2N1cnJlbnRCXSk7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC51cGRhdGVCb2FyZChib2FyZHNbY3VycmVudEJdLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgb3ZlciA9IGNoZWNrV2lubmVyKCk7XG4gICAgICAgICAgICBjaGFuZ2VUdXJucygpO1xuICAgICAgICAgICAgdXBkYXRlTWVzc2FnZShjdXJyZW50UCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1dpbm5lciAoKSB7XG4gICAgICAgIGlmIChib2FyZHNbY3VycmVudEJdLmFyZUFsbFN1bmsoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coe3dpbm5lcjogcGxheWVyc1tjdXJyZW50UF19KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUdXJucygpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRQID09IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRQID0gMTtcbiAgICAgICAgICAgIGN1cnJlbnRCID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRQID0gMDtcbiAgICAgICAgICAgIGN1cnJlbnRCID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZVN0YXJ0ICgpIHtcbiAgICAgICAgcGxheWVyQm9hcmQudXBkYXRlQm9hcmQocDFHYW1lYm9hcmQsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIGVuZW15Qm9hcmQudXBkYXRlQm9hcmQocDJHYW1lYm9hcmQsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcGxheWVyU2hpcHMudXBkYXRlU2hpcHMocDFHYW1lYm9hcmQpO1xuICAgICAgICBlbmVteVNoaXBzLnVwZGF0ZVNoaXBzKHAyR2FtZWJvYXJkKTtcbiAgICAgICAgYm9hcmRzID0gW3AxR2FtZWJvYXJkLCBwMkdhbWVib2FyZF07XG4gICAgICAgIHBsYXllcnMgPSBbcDEsIHAyXTtcbiAgICAgICAgb3ZlciA9IGZhbHNlO1xuICAgICAgICB1cGRhdGVNZXNzYWdlKDApO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBoYW5kbGVUdXJuLCByZVN0YXJ0IH1cbn1cblxuZXhwb3J0IHsgc3RhcnRHYW1lIH0iLCJpbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcHNcIjtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGxldCBjZWxscyA9IFtdO1xuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgY2xlYXJCb2FyZCgpO1xuXG4gICAgZnVuY3Rpb24gY2xlYXJCb2FyZCAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IDEwIDsgaSsrKXtcbiAgICAgICAgICAgIGNlbGxzW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCAxMCA7IGorKyl7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV1bal0gPSB7aGl0OiBmYWxzZSwgc2hpcDogLTJ9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgbGV0IGludmFsaWRDb29yZCA9IGZhbHNlO1xuICAgICAgICBpbnZhbGlkQ29vcmQgPSBjaGVja1ZhbGlkQ29vcmRpbmF0ZXMoeCwgeSwgb3JpZW50YXRpb24sIGxlbmd0aCk7XG4gICAgICAgIGlmIChpbnZhbGlkQ29vcmQgPT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICBsZXQgbmV3U2hpcCA9IHNoaXAobGVuZ3RoKTtcbiAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgbmV3U2hpcC5jb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkID0gW107XG4gICAgICAgIG5ld1NoaXAuZGlyZWN0aW9uID0gb3JpZW50YXRpb247XG4gICAgICAgIGxldCBhdXhYID0geDtcbiAgICAgICAgbGV0IGF1eFkgPSB5O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsc1t4XVt5XS5zaGlwID0gaTtcbiAgICAgICAgICAgIG5ld1NoaXAuY29vcmRpbmF0ZXNbaV0gPSBbeCwgeV07XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2Rvd24nKSB5Kys7XG4gICAgICAgICAgICBlbHNlIHgrKztcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWxsIGFkamFjZW50IGNlbGxzIHdpdGggLTFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggKyAyOyBpKyspIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WS0xKSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WC0xXVthdXhZLTFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLTEsIGF1eFktMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgrMSwgYXV4WS0xKSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WCsxXVthdXhZLTFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYKzEsIGF1eFktMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgsIGF1eFktMSkgJiYgaSA9PSAwIHx8IGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLCBhdXhZLTEpICYmIGkgPT0gbGVuZ3RoKzEpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFhdW2F1eFktMV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgsIGF1eFktMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WC0xLCBhdXhZLTEpKXtcbiAgICAgICAgICAgICAgICAgICBjZWxsc1thdXhYLTFdW2F1eFktMV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgtMSwgYXV4WS0xXSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZihjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WC0xLCBhdXhZKzEpKXtcbiAgICAgICAgICAgICAgICAgICBjZWxsc1thdXhYLTFdW2F1eFkrMV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgtMSwgYXV4WSsxXSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZihjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WC0xLCBhdXhZKSAmJiBpID09IDAgfHwgY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WSkgJiYgaSA9PSBsZW5ndGgrMSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WC0xXVthdXhZXS5zaGlwID0gLTE7IFxuICAgICAgICAgICAgICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQucHVzaChbYXV4WC0xLCBhdXhZXSk7XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnZG93bicpIGF1eFkrKztcbiAgICAgICAgICAgIGVsc2UgYXV4WCsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tWYWxpZENvb3JkaW5hdGVzKHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKHggPiA5IHx8IHggPCAwIHx8IHkgPiA5IHx8IHkgPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdkb3duJyAmJiB5K2xlbmd0aCA+IDEwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdyaWdodCcgJiYgeCtsZW5ndGggPiAxMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBpZihjZWxsc1t4XVt5XS5zaGlwID4gLTIpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdkb3duJykgeSsrO1xuICAgICAgICAgICAgZWxzZSB4Kys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVmFsaWRBdXhDb29yZCAoeCwgeSkge1xuICAgICAgICBpZiAoeCA+IDkgfHwgeCA8IDAgfHwgeSA+IDkgfHwgeSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTsgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayAoeCwgeSkge1xuICAgICAgICBpZiAoY2VsbHNbeF1beV0uaGl0ID09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY2VsbHNbeF1beV0uaGl0ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwc1tpXS5jb29yZGluYXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwc1tpXS5jb29yZGluYXRlc1tqXVswXSA9PSB4ICYmIHNoaXBzW2ldLmNvb3JkaW5hdGVzW2pdWzFdID09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNbaV0uaGl0KGNlbGxzW3hdW3ldLnNoaXApO1xuICAgICAgICAgICAgICAgICAgICBtYXJrQWRqYWNlbnRDZWxscyhzaGlwc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXJrQWRqYWNlbnRDZWxscyhzaGlwKSB7XG4gICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubmV4dFRvQ29vcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNlbGxzW3NoaXAubmV4dFRvQ29vcmRbaV1bMF1dW3NoaXAubmV4dFRvQ29vcmRbaV1bMV1dLmhpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcmVBbGxTdW5rKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXNoaXBzW2ldLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5ICgpIHtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgNCwgMywgMywgMywgMiwgMiwgMiwgMl07XG4gICAgICAgIGNvbnN0IG1pc3NpbmdTaGlwcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdHJpZXMgPSA1ICogKGkrMSk7XG4gICAgICAgICAgICB3aGlsZSAoc2hpcHMubGVuZ3RoICsgbWlzc2luZ1NoaXBzLmxlbmd0aCA8PSBpICYmIHRyaWVzID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gcGlja1JhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKHgsIHksIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3Roc1tpXSk7XG4gICAgICAgICAgICAgICAgdHJpZXMtLTtcbiAgICAgICAgICAgICAgICBpZiAodHJpZXMgPT0gMCAmJiBzaGlwcy5sZW5ndGggKyBtaXNzaW5nU2hpcHMubGVuZ3RoIDw9IGkpIG1pc3NpbmdTaGlwcy5wdXNoKHNoaXBMZW5ndGhzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaXNzaW5nU2hpcHMubGVuZ3RoID4gMCkgc29sdmVNaXNzaW5nU2hpcHMobWlzc2luZ1NoaXBzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwaWNrUmFuZG9tT3JpZW50YXRpb24gKCkge1xuICAgICAgICBsZXQgYXV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpO1xuICAgICAgICBpZiAoYXV4ID09IDEpIHJldHVybiAncmlnaHQnO1xuICAgICAgICBlbHNlIHJldHVybiAnZG93bic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc29sdmVNaXNzaW5nU2hpcHMgKGFycikge1xuICAgICAgICBsZXQgYXZhaWxhYmxlID0gW107XG4gICAgICAgIGxldCBsZW5ndGggPSBzaGlwcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IDEwIDsgaSsrKXtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IDEwIDsgaisrKXtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbHNbaV1bal0uc2hpcCA9PSAtMikgYXZhaWxhYmxlLnB1c2goW2ksIGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhdmFpbGFibGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoYXZhaWxhYmxlW2pdWzBdLCBhdmFpbGFibGVbal1bMV0sICdyaWdodCcsIGFycltpXSk7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKGF2YWlsYWJsZVtqXVswXSwgYXZhaWxhYmxlW2pdWzFdLCAnZG93bicsIGFycltpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA8IHNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBzaGlwcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlwcy5sZW5ndGggIT0gMTApIHtcbiAgICAgICAgICAgIGNsZWFyQm9hcmQoKTsgXG4gICAgICAgICAgICBzaGlwcyA9IFtdO1xuICAgICAgICAgICAgcGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTaGlwSW5kZXgoeCwgeSkge1xuICAgICAgICBpZiAoY2VsbHNbeF1beV0uc2hpcCA+IC0xKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoc2hpcHNbaV0uY29vcmRpbmF0ZXNbY2VsbHNbeF1beV0uc2hpcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBzW2ldLmNvb3JkaW5hdGVzW2NlbGxzW3hdW3ldLnNoaXBdWzBdID09IHggJiYgc2hpcHNbaV0uY29vcmRpbmF0ZXNbY2VsbHNbeF1beV0uc2hpcF1bMV0gPT0geSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBraWxsU2hpcCAoeCwgeSkge1xuICAgICAgICBsZXQgaW5kZXggPSBnZXRTaGlwSW5kZXgoeCwgeSk7XG4gICAgICAgIHNoaXBzW2luZGV4XS5jb29yZGluYXRlcy5mb3JFYWNoKHZhbCA9PiBjZWxsc1t2YWxbMF1dW3ZhbFsxXV0uc2hpcCA9IC0yKTtcbiAgICAgICAgc2hpcHNbaW5kZXhdLm5leHRUb0Nvb3JkLmZvckVhY2godmFsID0+IGNlbGxzW3ZhbFswXV1bdmFsWzFdXS5zaGlwID0gLTIpO1xuICAgICAgICBzaGlwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzaGlwc1tpXS5uZXh0VG9Db29yZC5mb3JFYWNoKHZhbCA9PiBjZWxsc1t2YWxbMF1dW3ZhbFsxXV0uc2hpcCA9IC0xKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2hpcE9yaWVudGF0aW9uICh4LCB5KSB7XG4gICAgICAgIGxldCBpbmRleCA9IGdldFNoaXBJbmRleCh4LCB5KTtcbiAgICAgICAgcmV0dXJuIHNoaXBzW2luZGV4XS5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGxhY2VTaGlwLCBjZWxscywgcmVjZWl2ZUF0dGFjaywgc2hpcHMsIGFyZUFsbFN1bmssIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgICAgICAgICAgIGtpbGxTaGlwLCBnZXRTaGlwT3JpZW50YXRpb24gfVxufVxuXG5leHBvcnQgeyBnYW1lYm9hcmQgfVxuXG4iLCJpbXBvcnQgeyBhZGRDaGlsZEVsZW1lbnQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGRpc3BsYXlTZXR1cCB9IGZyb20gXCIuL3NldHVwXCJcblxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWQnKTtcblxubGV0IG1lc3NhZ2U7XG5cbmZ1bmN0aW9uIHJ1bkh1ZCgpIHtcbiAgICBtZXNzYWdlID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ3AnKTtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYFBsYXllciBPbmUncyBUdXJuYDtcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3AxJyk7XG4gICAgbGV0IHJlc3RhcnQgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnYnV0dG9uJyk7XG4gICAgcmVzdGFydC50ZXh0Q29udGVudCA9ICdOZXcgR2FtZSc7XG4gICAgcmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlTZXR1cClcbn1cblxuZnVuY3Rpb24gdXBkYXRlTWVzc2FnZSAobnVtKSB7XG4gICAgaWYgKG51bSA9PSAxKSB7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAgYFBsYXllciBUd28ncyBUdXJuYDtcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdwMScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgT25lJ3MgVHVybmA7XG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgncDEnKTtcbiAgICB9XG4gICAgICAgIFxufVxuXG5leHBvcnQgeyBydW5IdWQsIHVwZGF0ZU1lc3NhZ2UgfSIsImltcG9ydCB7IGNyZWF0ZUJvYXJkLCBjcmVhdGVBbGl2ZVNoaXBzIH0gZnJvbSBcIi4vZG9tU3R1ZmZcIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBydW5TZXR1cCB9IGZyb20gXCIuL3NldHVwXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHJ1bkh1ZCB9IGZyb20gXCIuL2h1ZFwiO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWJvYXJkJyk7XG5jb25zdCBlbmVteSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmVteS1ib2FyZCcpO1xubGV0IHBsYXllckJvYXJkID0gY3JlYXRlQm9hcmQocGxheWVyMSwgZmFsc2UpO1xubGV0IGVuZW15Qm9hcmQgPSBjcmVhdGVCb2FyZChlbmVteSwgdHJ1ZSk7XG5sZXQgcGxheWVyU2hpcHMgPSBjcmVhdGVBbGl2ZVNoaXBzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItc2hpcHMnKSk7XG5sZXQgZW5lbXlTaGlwcyA9IGNyZWF0ZUFsaXZlU2hpcHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZW15LXNoaXBzJykpO1xuXG5sZXQgcDFHYW1lYm9hcmQgPSBnYW1lYm9hcmQoKTtcbmxldCBwMkdhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xuXG5sZXQgcDEgPSBwbGF5ZXIoJ1BsYXllciAxJywgJ2h1bWFuJyk7XG5sZXQgcDIgPSBwbGF5ZXIoJ1BsYXllciAyJywgJ2FpJyk7XG5sZXQgcHZwID0gZmFsc2U7XG5cbnJ1blNldHVwKCk7XG5sZXQgZ2FtZSA9IHN0YXJ0R2FtZSgpO1xucnVuSHVkKCk7XG5cblxuZnVuY3Rpb24gc2V0UDEgKGJvYXJkKSB7XG4gICAgcDFHYW1lYm9hcmQgPSBib2FyZDtcbn1cblxuZnVuY3Rpb24gc2V0UDIgKGJvYXJkKSB7XG4gICAgcDJHYW1lYm9hcmQgPSBib2FyZDtcbn1cblxuZnVuY3Rpb24gY2hhbmdlTW9kZSAoKSB7XG4gICAgaWYgKHB2cCkge1xuICAgICAgICBwdnAgPSBmYWxzZTtcbiAgICAgICAgcDIgPSBwbGF5ZXIoJ1BsYXllciAyJywgJ2FpJyk7ICBcbiAgICB9ICBcbiAgICBlbHNlIHtcbiAgICAgICAgcHZwID0gdHJ1ZTtcbiAgICAgICAgcDIgPSBwbGF5ZXIoJ1BsYXllciAyJywgJ2h1bWFuJyk7IFxuICAgIH1cbn1cblxuXG5leHBvcnQgeyBnYW1lLCBwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZCwgc2V0UDEsIHNldFAyLCBwMUdhbWVib2FyZCwgcDJHYW1lYm9hcmQsXG4gICAgICAgIGVuZW15U2hpcHMsIHBsYXllclNoaXBzLCBwMSwgcDIsIHB2cCwgY2hhbmdlTW9kZSB9XG5cblxuLy9hZGQgY29tcHV0ZXIgc21hcnQgcGxheVxuLy9hZGQgc21hbGwgZGVsYXkgZm9yIGNvbXB1dGVyIHBsYXlcbi8vYWRkIHR3byBwbGF5ZXIgbW9kZSBkb25lIGJ1dCBhZGQgYSBkaXNhYmxlIGZvciBjYW5jZWwgd2hlbiBjaGFuZ2UgbW9kZXMiLCJjb25zdCBwbGF5ZXIgPSAobmFtZSwgYnJhaW4pID0+IHtcblxuICAgIGZ1bmN0aW9uIHRha2VUdXJuKHgsIHksIGdhbWVib2FyZCkge1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGFrZVJhbmRvbVR1cm4oZ2FtZWJvYXJkKSB7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBsZXQgdmFsaWRIaXQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgd2hpbGUodmFsaWRIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICB2YWxpZEhpdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdGFrZVR1cm4sIG5hbWUsIGJyYWluLCB0YWtlUmFuZG9tVHVybiB9XG59XG5cbmV4cG9ydCB7IHBsYXllciB9IiwiaW1wb3J0IHsgY3JlYXRlQm9hcmQgfSBmcm9tIFwiLi9kb21TdHVmZlwiO1xuaW1wb3J0IHsgYWRkQ2hpbGRFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGdhbWUsIHNldFAxLCBzZXRQMiwgcHZwLCBjaGFuZ2VNb2RlIH0gZnJvbSBcIi5cIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHVwJyk7XG5sZXQgYm9hcmQ7XG5sZXQgZG9tQm9hcmQ7XG5sZXQgcGxhY2VtZW50Qm9hcmQ7XG5sZXQgaW5kZXg7XG5sZXQgbGVuZ3RoO1xubGV0IG9yaWVudGF0aW9uID0gJ2Rvd24nO1xubGV0IHJlbWFpbmluZyA9IDA7XG5sZXQgZHJhZ0l0ZW07XG5sZXQgZHJhZyA9IGZhbHNlO1xubGV0IGtpbGwgPSBmYWxzZTtcbmxldCBwcyA9IFtdO1xubGV0IGRvbVNoaXBzID0gW107XG5sZXQgY2FuY2VsO1xuXG5mdW5jdGlvbiBydW5TZXR1cCAoKSB7XG4gICAgY29uc3QgbGVmdCA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdkaXYnLCAnLmxlZnQnKTtcbiAgICBib2FyZCA9IGFkZENoaWxkRWxlbWVudChsZWZ0LCAnZGl2JywgJyNwbGFjZW1lbnQtYm9hcmQnKTtcbiAgICBkb21Cb2FyZCA9IGNyZWF0ZUJvYXJkKGJvYXJkLCBmYWxzZSk7XG4gICAgZG9tQm9hcmQuYWRkRHJvcEV2ZW50cygpO1xuICAgIHBsYWNlbWVudEJvYXJkID0gZ2FtZWJvYXJkKCk7XG5cbiAgICBjb25zdCByaWdodCA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdkaXYnLCAnLnJpZ2h0Jyk7XG4gICAgY29uc3Qgc2hpcHMgPSBhZGRDaGlsZEVsZW1lbnQocmlnaHQsICdkaXYnLCAnI2RyYWctc2hpcHMnKTtcblxuICAgIGZvciAobGV0IGkgPSA1OyBpID4gMTsgaS0tKSB7XG4gICAgICAgIGxldCBkaXYgPSBhZGRDaGlsZEVsZW1lbnQoc2hpcHMsICdkaXYnLCAnLnNoaXAtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBwID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ3AnLCAnLnNoaXBzLXJlbWFpbmluZycpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gNiAtIGk7XG4gICAgICAgIHAuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIHBzLnB1c2gocCk7XG4gICAgICAgIGxldCBzaGlwID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ2RpdicsICcuc2hpcCcpO1xuICAgICAgICBkb21TaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICBzaGlwLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgKGRvbVNoaXBzWzBdLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpID8gb3JpZW50YXRpb24gPSAncmlnaHQnIDogb3JpZW50YXRpb24gPSAnZG93bic7XG4gICAgICAgICAgICBpbmRleCA9IDUgLSBpO1xuICAgICAgICAgICAgbGVuZ3RoID0gaTtcbiAgICAgICAgICAgIGRyYWdJdGVtID0gc2hpcDtcbiAgICAgICAgICAgIGlmICgrcC50ZXh0Q29udGVudCA+IDApIGRyYWcgPSB0cnVlO1xuICAgICAgICAgICAga2lsbCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4gZHJhZyA9IGZhbHNlKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gYWRkQ2hpbGRFbGVtZW50KHNoaXAsICdkaXYnLCAnLmNlbGwnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbnMgPSBhZGRDaGlsZEVsZW1lbnQocmlnaHQsICdkaXYnLCAnI3NldHRpbmctYnV0dG9ucycpO1xuXG4gICAgY29uc3QgcmFuZG9tID0gYWRkQ2hpbGRFbGVtZW50KGJ1dHRvbnMsICdidXR0b24nKTtcbiAgICByYW5kb20udGV4dENvbnRlbnQgPSAnUmFuZG9tJztcbiAgICByYW5kb20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwaWNrUmFuZG9tKTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9IGFkZENoaWxkRWxlbWVudChidXR0b25zLCAnYnV0dG9uJyk7XG4gICAgcm90YXRlLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gICAgcm90YXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcHMpO1xuXG4gICAgY29uc3QgY2xlYXIgPSBhZGRDaGlsZEVsZW1lbnQoYnV0dG9ucywgJ2J1dHRvbicpO1xuICAgIGNsZWFyLnRleHRDb250ZW50ID0gJ0NsZWFyJztcbiAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyQm9hcmQpO1xuXG4gICAgY29uc3Qgc3RhcnQgPSBhZGRDaGlsZEVsZW1lbnQoYnV0dG9ucywgJ2J1dHRvbicpO1xuICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0JztcbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0dhbWUpO1xuXG4gICAgbGV0IG1vZGUgPSBhZGRDaGlsZEVsZW1lbnQoYnV0dG9ucywgJ2J1dHRvbicpO1xuICAgIG1vZGUudGV4dENvbnRlbnQgPSAnUGxheWVyIFZzLiBBaSc7XG4gICAgbW9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgKHB2cCkgPyBtb2RlLnRleHRDb250ZW50ID0gJ1BsYXllciBWcy4gQWknOlxuICAgICAgICAgICAgbW9kZS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgVnMuIFBsYXllcic7XG4gICAgICAgIGNoYW5nZU1vZGUoKTtcbiAgICB9KVxuXG4gICAgY2FuY2VsID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2J1dHRvbicsICcuaGlkZScpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICd4JztcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpKTtcbn1cbi8vY2hlY2twb2ludFxuZnVuY3Rpb24gcGxhY2VTaGlwICh4LCB5KSB7XG4gICAgaWYgKHBsYWNlbWVudEJvYXJkLnNoaXBzLmxlbmd0aCA+PSAxMCkgcmV0dXJuO1xuICAgIHBsYWNlbWVudEJvYXJkLnBsYWNlU2hpcCh4LCB5LCBvcmllbnRhdGlvbiwgbGVuZ3RoKTtcbiAgICBkb21Cb2FyZC51cGRhdGVCb2FyZChwbGFjZW1lbnRCb2FyZCwgZmFsc2UsIHRydWUpO1xuICAgIGlmKGtpbGwpe1xuICAgICAgICBkcmFnSXRlbS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50Qm9hcmQuc2hpcHMubGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBwc1tpbmRleF0udGV4dENvbnRlbnQgPSArcHNbaW5kZXhdLnRleHRDb250ZW50IC0gMTtcbiAgICAgICAgZG9tQm9hcmQuY3JlYXRlU2hpcERpdih4LCB5LCBvcmllbnRhdGlvbiwgbGVuZ3RoKTtcbiAgICB9XG4gICAgXG4gICAgK3BzW2luZGV4XS50ZXh0Q29udGVudCA9PSAwID9cbiAgICAgICAgZG9tU2hpcHNbaW5kZXhdLmRyYWdnYWJsZSA9IGZhbHNlOlxuICAgICAgICBkb21TaGlwc1tpbmRleF0uZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgIGtpbGwgPSBmYWxzZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gY2hlY2tEcmFnICgpIHtcbiAgICByZXR1cm4gZHJhZztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRHJhZyAoKSB7XG4gICAgZHJhZyA9PSB0cnVlID8gZHJhZyA9IGZhbHNlOiBkcmFnID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2F2ZVZhcmlhYmxlcyhpbmQsIGxlbiwgZHJhLCB4LCB5KSB7XG4gICAgaW5kZXggPSBpbmQ7XG4gICAgbGVuZ3RoID0gbGVuO1xuICAgIGtpbGwgPSB0cnVlO1xuICAgIGRyYWdJdGVtID0gZHJhO1xuICAgIG9yaWVudGF0aW9uID0gcGxhY2VtZW50Qm9hcmQuZ2V0U2hpcE9yaWVudGF0aW9uKHgsIHkpO1xuICAgIHBsYWNlbWVudEJvYXJkLmtpbGxTaGlwKHgsIHkpO1xuICAgIGRvbUJvYXJkLnVwZGF0ZUJvYXJkKHBsYWNlbWVudEJvYXJkLCBmYWxzZSwgdHJ1ZSk7ICBcbiAgICBwc1tpbmRleF0udGV4dENvbnRlbnQgPSArcHNbaW5kZXhdLnRleHRDb250ZW50ICsgMTsgXG4gICAgcmVtYWluaW5nLS07XG4gICAgZG9tU2hpcHNbaW5kZXhdLmRyYWdnYWJsZSA9IHRydWU7IFxufVxuXG5mdW5jdGlvbiBwaWNrUmFuZG9tICgpIHtcbiAgICBjbGVhckJvYXJkKCk7XG4gICAgcGxhY2VtZW50Qm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvbUJvYXJkLnVwZGF0ZUJvYXJkKHBsYWNlbWVudEJvYXJkLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHBsYWNlbWVudEJvYXJkLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBkb21Cb2FyZC5jcmVhdGVTaGlwRGl2KHNoaXAuY29vcmRpbmF0ZXNbMF1bMF0sIHNoaXAuY29vcmRpbmF0ZXNbMF1bMV0sIHNoaXAuZGlyZWN0aW9uLCBzaGlwLmNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gICAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG4gICAgcHMuZm9yRWFjaCgocCkgPT4gcC50ZXh0Q29udGVudCA9IDApO1xuICAgIGRvbVNoaXBzLmZvckVhY2goKHNoaXApID0+IHNoaXAuZHJhZ2dhYmxlID0gZmFsc2UpO1xuICAgIHJlbWFpbmluZyA9IDEwOyAgXG59XG5cbmZ1bmN0aW9uIGNsZWFyQm9hcmQoKSB7XG4gICAgcGxhY2VtZW50Qm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgICBsZXQgc2hpcHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vdmVhYmxlJykpO1xuICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiBzaGlwLnJlbW92ZSgpKTtcbiAgICBkb21Cb2FyZC51cGRhdGVCb2FyZChwbGFjZW1lbnRCb2FyZCwgZmFsc2UsIHRydWUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHMubGVuZ3RoOyBpICsrKSBwc1tpXS50ZXh0Q29udGVudCA9IDQgLSBpO1xuICAgIGRvbVNoaXBzLmZvckVhY2goc2hpcCA9PiBzaGlwLmRyYWdnYWJsZSA9IHRydWUpO1xuICAgIHJlbWFpbmluZyA9IDA7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVNoaXBzKCkge1xuICAgIChkb21TaGlwc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSA/IG9yaWVudGF0aW9uID0gJ2Rvd24nIDogb3JpZW50YXRpb24gPSAncmlnaHQnOyBcbiAgICBkb21TaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKSk7XG59XG5cbmZ1bmN0aW9uIHNvbHZlT3V0T2ZCb3VuZGFyaWVzICgpIHtcbiAgICBpZiAocGxhY2VtZW50Qm9hcmQuc2hpcHMubGVuZ3RoIDwgcmVtYWluaW5nKSB7XG4gICAgICAgIHJlbWFpbmluZy0tO1xuICAgIH1cbiAgICBlbHNlIGRyYWdJdGVtLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBuZXdHYW1lICgpIHtcbiAgICBpZiAocGxhY2VtZW50Qm9hcmQuc2hpcHMubGVuZ3RoIDwgMTApIHJldHVybjtcbiAgICBsZXQgY29tcHV0ZXIgPSBnYW1lYm9hcmQoKTtcbiAgICBjb21wdXRlci5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICBzZXRQMShwbGFjZW1lbnRCb2FyZCk7XG4gICAgc2V0UDIoY29tcHV0ZXIpO1xuICAgIGdhbWUucmVTdGFydCgpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTZXR1cCAoKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICBjbGVhckJvYXJkKCk7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn1cblxuXG5leHBvcnQgeyBydW5TZXR1cCwgcGxhY2VTaGlwLCBjaGVja0RyYWcsIHRvZ2dsZURyYWcsIHNhdmVWYXJpYWJsZXMsXG4gICAgICAgICBzb2x2ZU91dE9mQm91bmRhcmllcywgZGlzcGxheVNldHVwfVxuXG4iLCJjb25zdCBzaGlwID0gKGxlbmd0aCkgPT4ge1xuXG4gICAgbGV0IGNlbGxzID0gW107XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICBjZWxsc1tpXSA9ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdCAobnVtKSB7XG4gICAgICAgIGNlbGxzW251bV0gPSAnaGl0JztcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3VuayAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNlbGxzW2ldID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdW5rO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1bmsgPSB0cnVlO1xuICAgICAgICByZXR1cm4gc3VuaztcbiAgICB9XG5cbiAgICByZXR1cm4geyBoaXQsIGlzU3VuaywgY2VsbHMgfVxufVxuXG5leHBvcnQgeyBzaGlwIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==