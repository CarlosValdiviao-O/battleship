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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#boards, #setup {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n#player-board, #enemy-board, #placement-board, #setup #drag-ships, .ship-container {\n    display: flex;\n    height: max-content;\n    width: max-content;\n}\n\n.ship-container p::before, .small p::before {\n    content: 'x';\n}\n\n.ship.moveable {\n    transform: translateX(-1px) translateY(-1px);\n    overflow: visible;\n}\n\n.drag-over.available {\n    background-color: rgb(0 0 0 / 40%);\n}\n\n.ship.hide, #setup.hide, #setup .hide {\n    display: none;\n}\n\n.rotate {\n    display: flex;\n    width: max-content;\n}\n\n.row {\n    display: flex;\n    flex-direction: column;\n}\n\n.cell {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n}\n\n#player-board .ship, #enemy-board .ship.hit, #setup .ship, .ships .ship {\n    color: red;\n    background-color: rgb(97, 97, 97);\n}\n\n.small {\n    display: flex;\n    align-items: center;\n}\n\n.small .cell {\n    width: 15px;\n    height: 15px;\n}\n\n\n.ships {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.ship.sunk .cell {\n    background-color: rgb(148, 148, 148);\n    border: 1px solid rgb(100, 100, 100);\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,4CAA4C;IAC5C,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,oCAAoC;IACpC,oCAAoC;AACxC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#boards, #setup {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n#player-board, #enemy-board, #placement-board, #setup #drag-ships, .ship-container {\n    display: flex;\n    height: max-content;\n    width: max-content;\n}\n\n.ship-container p::before, .small p::before {\n    content: 'x';\n}\n\n.ship.moveable {\n    transform: translateX(-1px) translateY(-1px);\n    overflow: visible;\n}\n\n.drag-over.available {\n    background-color: rgb(0 0 0 / 40%);\n}\n\n.ship.hide, #setup.hide, #setup .hide {\n    display: none;\n}\n\n.rotate {\n    display: flex;\n    width: max-content;\n}\n\n.row {\n    display: flex;\n    flex-direction: column;\n}\n\n.cell {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n}\n\n#player-board .ship, #enemy-board .ship.hit, #setup .ship, .ships .ship {\n    color: red;\n    background-color: rgb(97, 97, 97);\n}\n\n.small {\n    display: flex;\n    align-items: center;\n}\n\n.small .cell {\n    width: 15px;\n    height: 15px;\n}\n\n\n.ships {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.ship.sunk .cell {\n    background-color: rgb(148, 148, 148);\n    border: 1px solid rgb(100, 100, 100);\n}\n\n"],"sourceRoot":""}]);
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
    for (let i = 0; i < 10; i++) {
        let div = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(board, 'div', '.row');
        cells[i] = [];
        for (let j = 0; j < 10; j++) {
            let cell = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(div, 'button', '.cell');
            cell.classList.add('available');
            cells[i].push(cell);
            if (enemy) {
                cell.addEventListener('click', () => ___WEBPACK_IMPORTED_MODULE_1__.game.handleTurn(i, j))
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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");




//checkpoint
const startGame = () => {
    let over = false;
    let p1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.player)('Player 1', 'human');
    let p2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.player)('Player 2', 'ai');
    let players = [p1, p2];
    let boards = [___WEBPACK_IMPORTED_MODULE_2__.p1Gameboard, ___WEBPACK_IMPORTED_MODULE_2__.p2Gameboard];
    let currentP = 0;
    let currentB = 1;
    ___WEBPACK_IMPORTED_MODULE_2__.p1Gameboard.placeShipsRandomly();
    ___WEBPACK_IMPORTED_MODULE_2__.playerBoard.updateBoard(___WEBPACK_IMPORTED_MODULE_2__.p1Gameboard, false, false);

    ___WEBPACK_IMPORTED_MODULE_2__.p2Gameboard.placeShipsRandomly();
    ___WEBPACK_IMPORTED_MODULE_2__.enemyBoard.updateBoard(___WEBPACK_IMPORTED_MODULE_2__.p2Gameboard, true, false);

    function handleTurn(x, y) {
        if (over) return;
        if (players[currentP].brain == 'human') {
            let played = players[currentP].takeTurn(x, y, boards[currentB]);
            if (played) {
                (0,_hud__WEBPACK_IMPORTED_MODULE_0__.updateMessage)();
                ___WEBPACK_IMPORTED_MODULE_2__.enemyShips.updateShips(boards[currentB]);
                ___WEBPACK_IMPORTED_MODULE_2__.enemyBoard.updateBoard(boards[currentB], true, false);
                over = checkWinner();
                changeTurns();
                if (players[currentP].brain == 'ai') handleTurn();
            }
        }
        else {
            (0,_hud__WEBPACK_IMPORTED_MODULE_0__.updateMessage)();
            players[currentP].takeRandomTurn(boards[currentB]);
            ___WEBPACK_IMPORTED_MODULE_2__.playerShips.updateShips(boards[currentB]);
            ___WEBPACK_IMPORTED_MODULE_2__.playerBoard.updateBoard(boards[currentB], false, false);
            over = checkWinner();
            changeTurns();
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
        ___WEBPACK_IMPORTED_MODULE_2__.playerBoard.updateBoard(___WEBPACK_IMPORTED_MODULE_2__.p1Gameboard, false, false);
        ___WEBPACK_IMPORTED_MODULE_2__.enemyBoard.updateBoard(___WEBPACK_IMPORTED_MODULE_2__.p2Gameboard, true, false);
        ___WEBPACK_IMPORTED_MODULE_2__.playerShips.updateShips(___WEBPACK_IMPORTED_MODULE_2__.p1Gameboard);
        ___WEBPACK_IMPORTED_MODULE_2__.enemyShips.updateShips(___WEBPACK_IMPORTED_MODULE_2__.p2Gameboard);
        boards = [___WEBPACK_IMPORTED_MODULE_2__.p1Gameboard, ___WEBPACK_IMPORTED_MODULE_2__.p2Gameboard];
        over = false;
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

function updateMessage () {
    (message.classList.contains('p1')) ? message.textContent =  `Player Two's Turn`:
        message.textContent = `Player One's Turn`;
    message.classList.toggle('p1');
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enemyBoard": () => (/* binding */ enemyBoard),
/* harmony export */   "enemyShips": () => (/* binding */ enemyShips),
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "p1Gameboard": () => (/* binding */ p1Gameboard),
/* harmony export */   "p2Gameboard": () => (/* binding */ p2Gameboard),
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard),
/* harmony export */   "playerShips": () => (/* binding */ playerShips),
/* harmony export */   "setP1": () => (/* binding */ setP1),
/* harmony export */   "setP2": () => (/* binding */ setP2)
/* harmony export */ });
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _hud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hud */ "./src/hud.js");







const player = document.getElementById('player-board');
const enemy = document.getElementById('enemy-board');
let playerBoard = (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createBoard)(player, false);
let enemyBoard = (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createBoard)(enemy, true);
let playerShips = (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createAliveShips)(document.getElementById('player-ships'));
let enemyShips = (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createAliveShips)(document.getElementById('enemy-ships'));

let p1Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_4__.gameboard)();
let p2Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_4__.gameboard)();

(0,_setup__WEBPACK_IMPORTED_MODULE_3__.runSetup)();
let game = (0,_game__WEBPACK_IMPORTED_MODULE_1__.startGame)();
(0,_hud__WEBPACK_IMPORTED_MODULE_5__.runHud)();


function setP1 (board) {
    p1Gameboard = board;
}

function setP2 (board) {
    p2Gameboard = board;
}





//add coordinates and remaining ships to display
//add computer smart play
//add small delay for computer play
//add two player mode

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsNkJBQTZCLEdBQUcscUJBQXFCLG9CQUFvQixxQ0FBcUMsR0FBRyx3RkFBd0Ysb0JBQW9CLDBCQUEwQix5QkFBeUIsR0FBRyxpREFBaUQsbUJBQW1CLEdBQUcsb0JBQW9CLG1EQUFtRCx3QkFBd0IsR0FBRywwQkFBMEIseUNBQXlDLEdBQUcsMkNBQTJDLG9CQUFvQixHQUFHLGFBQWEsb0JBQW9CLHlCQUF5QixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QixHQUFHLFdBQVcsbUJBQW1CLGtCQUFrQiw4QkFBOEIsR0FBRyw2RUFBNkUsaUJBQWlCLHdDQUF3QyxHQUFHLFlBQVksb0JBQW9CLDBCQUEwQixHQUFHLGtCQUFrQixrQkFBa0IsbUJBQW1CLEdBQUcsY0FBYyxvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyxzQkFBc0IsMkNBQTJDLDJDQUEyQyxHQUFHLFdBQVcsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSw2QkFBNkIsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxxQkFBcUIsb0JBQW9CLHFDQUFxQyxHQUFHLHdGQUF3RixvQkFBb0IsMEJBQTBCLHlCQUF5QixHQUFHLGlEQUFpRCxtQkFBbUIsR0FBRyxvQkFBb0IsbURBQW1ELHdCQUF3QixHQUFHLDBCQUEwQix5Q0FBeUMsR0FBRywyQ0FBMkMsb0JBQW9CLEdBQUcsYUFBYSxvQkFBb0IseUJBQXlCLEdBQUcsVUFBVSxvQkFBb0IsNkJBQTZCLEdBQUcsV0FBVyxtQkFBbUIsa0JBQWtCLDhCQUE4QixHQUFHLDZFQUE2RSxpQkFBaUIsd0NBQXdDLEdBQUcsWUFBWSxvQkFBb0IsMEJBQTBCLEdBQUcsa0JBQWtCLGtCQUFrQixtQkFBbUIsR0FBRyxjQUFjLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLHNCQUFzQiwyQ0FBMkMsMkNBQTJDLEdBQUcsdUJBQXVCO0FBQzlwRztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmOEM7QUFDckI7QUFDdUU7O0FBRWhHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsa0JBQWtCLDJEQUFlO0FBQ2pDO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsdUJBQXVCLDJEQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCw4Q0FBZTtBQUNwRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsU0FBUztBQUNqQyw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsU0FBUztBQUNqQyw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQVM7QUFDdEI7QUFDQTtBQUNBLFFBQVEsaURBQVM7QUFDakI7O0FBRUE7QUFDQSxtQkFBbUIsMkRBQWU7QUFDbEM7QUFDQTtBQUNBLDJDQUEyQyw4Q0FBVTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULGlEQUFpRCxxREFBYTtBQUM5RCx5Q0FBeUMsOENBQVU7QUFDbkQseUNBQXlDLHdEQUFvQjtBQUM3RCx3QkFBd0IsWUFBWTtBQUNwQyx1QkFBdUIsMkRBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQix3QkFBd0IsMkRBQWU7QUFDdkMsZ0JBQWdCLDJEQUFlO0FBQy9CO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQWU7QUFDbEM7QUFDQSx3QkFBd0IsV0FBVztBQUNuQyx1QkFBdUIsMkRBQWU7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCcUM7QUFDSDtBQUM2RDs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQ0FBTTtBQUNuQixhQUFhLCtDQUFNO0FBQ25CO0FBQ0Esa0JBQWtCLDBDQUFXLEVBQUUsMENBQVc7QUFDMUM7QUFDQTtBQUNBLElBQUksNkRBQThCO0FBQ2xDLElBQUksc0RBQXVCLENBQUMsMENBQVc7O0FBRXZDLElBQUksNkRBQThCO0FBQ2xDLElBQUkscURBQXNCLENBQUMsMENBQVc7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQWE7QUFDN0IsZ0JBQWdCLHFEQUFzQjtBQUN0QyxnQkFBZ0IscURBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQWE7QUFDekI7QUFDQSxZQUFZLHNEQUF1QjtBQUNuQyxZQUFZLHNEQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUF1QixDQUFDLDBDQUFXO0FBQzNDLFFBQVEscURBQXNCLENBQUMsMENBQVc7QUFDMUMsUUFBUSxzREFBdUIsQ0FBQywwQ0FBVztBQUMzQyxRQUFRLHFEQUFzQixDQUFDLDBDQUFXO0FBQzFDLGtCQUFrQiwwQ0FBVyxFQUFFLDBDQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RStCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx5QkFBeUIsU0FBUztBQUNsQztBQUNBLDZCQUE2QixTQUFTO0FBQ3RDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNENBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixhQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQyw0QkFBNEIsaUNBQWlDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDZCQUE2QjtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDLDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEMsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hNMEI7QUFDUjs7QUFFdEM7O0FBRUE7O0FBRUE7QUFDQSxjQUFjLDJEQUFlO0FBQzdCO0FBQ0E7QUFDQSxrQkFBa0IsMkRBQWU7QUFDakM7QUFDQSxzQ0FBc0MsZ0RBQVk7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEIyRDtBQUN4QjtBQUNkO0FBQ2M7QUFDSztBQUNUOztBQUUvQjtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFXO0FBQzdCLGlCQUFpQixzREFBVztBQUM1QixrQkFBa0IsMkRBQWdCO0FBQ2xDLGlCQUFpQiwyREFBZ0I7O0FBRWpDLGtCQUFrQixxREFBUztBQUMzQixrQkFBa0IscURBQVM7O0FBRTNCLGdEQUFRO0FBQ1IsV0FBVyxnREFBUztBQUNwQiw0Q0FBTTs7O0FBR047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBSWlDOzs7QUFHakM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ5QztBQUNLO0FBQ047QUFDRDs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiwyREFBZTtBQUNoQyxZQUFZLDJEQUFlO0FBQzNCLGVBQWUsc0RBQVc7QUFDMUI7QUFDQSxxQkFBcUIscURBQVM7O0FBRTlCLGtCQUFrQiwyREFBZTtBQUNqQyxrQkFBa0IsMkRBQWU7O0FBRWpDLG9CQUFvQixPQUFPO0FBQzNCLGtCQUFrQiwyREFBZTtBQUNqQyxnQkFBZ0IsMkRBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLHVCQUF1QiwyREFBZTtBQUN0QztBQUNBOztBQUVBLG9CQUFvQiwyREFBZTs7QUFFbkMsbUJBQW1CLDJEQUFlO0FBQ2xDO0FBQ0E7O0FBRUEsbUJBQW1CLDJEQUFlO0FBQ2xDO0FBQ0E7O0FBRUEsa0JBQWtCLDJEQUFlO0FBQ2pDO0FBQ0E7O0FBRUEsa0JBQWtCLDJEQUFlO0FBQ2pDO0FBQ0E7O0FBRUEsYUFBYSwyREFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHFEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixxREFBUztBQUM1QjtBQUNBLElBQUksd0NBQUs7QUFDVCxJQUFJLHdDQUFLO0FBQ1QsSUFBSSwyQ0FBWTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUk0Qzs7Ozs7Ozs7Ozs7Ozs7OztBQzdLNUM7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9odWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NldHVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2JvYXJkcywgI3NldHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZW1lbnQtYm9hcmQsICNzZXR1cCAjZHJhZy1zaGlwcywgLnNoaXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIgcDo6YmVmb3JlLCAuc21hbGwgcDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ3gnO1xcbn1cXG5cXG4uc2hpcC5tb3ZlYWJsZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KSB0cmFuc2xhdGVZKC0xcHgpO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLmRyYWctb3Zlci5hdmFpbGFibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0MCUpO1xcbn1cXG5cXG4uc2hpcC5oaWRlLCAjc2V0dXAuaGlkZSwgI3NldHVwIC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQgLnNoaXAsICNlbmVteS1ib2FyZCAuc2hpcC5oaXQsICNzZXR1cCAuc2hpcCwgLnNoaXBzIC5zaGlwIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NywgOTcpO1xcbn1cXG5cXG4uc21hbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc21hbGwgLmNlbGwge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG5cXG4uc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnNoaXAuc3VuayAuY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMCwgMTAwLCAxMDApO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2JvYXJkcywgI3NldHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZW1lbnQtYm9hcmQsICNzZXR1cCAjZHJhZy1zaGlwcywgLnNoaXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIgcDo6YmVmb3JlLCAuc21hbGwgcDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ3gnO1xcbn1cXG5cXG4uc2hpcC5tb3ZlYWJsZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KSB0cmFuc2xhdGVZKC0xcHgpO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLmRyYWctb3Zlci5hdmFpbGFibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0MCUpO1xcbn1cXG5cXG4uc2hpcC5oaWRlLCAjc2V0dXAuaGlkZSwgI3NldHVwIC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQgLnNoaXAsICNlbmVteS1ib2FyZCAuc2hpcC5oaXQsICNzZXR1cCAuc2hpcCwgLnNoaXBzIC5zaGlwIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NywgOTcpO1xcbn1cXG5cXG4uc21hbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc21hbGwgLmNlbGwge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG5cXG4uc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnNoaXAuc3VuayAuY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMCwgMTAwLCAxMDApO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZENoaWxkRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBwbGFjZVNoaXAsIGNoZWNrRHJhZywgdG9nZ2xlRHJhZywgc2F2ZVZhcmlhYmxlcywgc29sdmVPdXRPZkJvdW5kYXJpZXMgfSBmcm9tIFwiLi9zZXR1cFwiO1xuXG5jb25zdCBjcmVhdGVCb2FyZCA9IChib2FyZCwgZW5lbXkpID0+IHtcbiAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgbGV0IGRpdiA9IGFkZENoaWxkRWxlbWVudChib2FyZCwgJ2RpdicsICcucm93Jyk7XG4gICAgICAgIGNlbGxzW2ldID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAnYnV0dG9uJywgJy5jZWxsJyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F2YWlsYWJsZScpO1xuICAgICAgICAgICAgY2VsbHNbaV0ucHVzaChjZWxsKTtcbiAgICAgICAgICAgIGlmIChlbmVteSkge1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnYW1lLmhhbmRsZVR1cm4oaSwgaikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVCb2FyZCAoYm9hcmQsIGVuZW15LCBzZXR1cCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNldHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5jZWxsc1tpXVtqXS5oaXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICAgICAgICAgIChib2FyZC5jZWxsc1tpXVtqXS5zaGlwID4gLTEpID8gY2VsbHNbaV1bal0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICAoYm9hcmQuY2VsbHNbaV1bal0uc2hpcCA9PSAtMikgPyBjZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdhdmFpbGFibGUnKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2F2YWlsYWJsZScpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIChib2FyZC5jZWxsc1tpXVtqXS5zaGlwID4gLTEgJiYgYm9hcmQuY2VsbHNbaV1bal0uaGl0ID09IHRydWUpID8gXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk6XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRHJvcEV2ZW50cyAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKVxuICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgICAgICAgICAgICBjZWxsc1tpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsICgpID0+IGRyb3AoY2VsbHNbaV1bal0sIGksIGopKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnRW50ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRyYWdMZWF2ZShlKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcm9wKGNlbGwsIGksIGopIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgICAgICAgaWYgKCFjaGVja0RyYWcoKSkgcmV0dXJuO1xuICAgICAgICB4ID0gaTtcbiAgICAgICAgeSA9IGo7XG4gICAgICAgIHBsYWNlU2hpcCh4LCB5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTaGlwRGl2IChpLCBqLCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBzaGlwID0gYWRkQ2hpbGRFbGVtZW50KGNlbGxzW2ldW2pdLCAnZGl2JywgJy5zaGlwJyk7XG4gICAgICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdtb3ZlYWJsZScpO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRvZ2dsZURyYWcpO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pXG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4gc2F2ZVZhcmlhYmxlcyg1IC0gbGVuZ3RoLCBsZW5ndGgsIHNoaXAsIGksIGopKVxuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0b2dnbGVEcmFnKTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgc29sdmVPdXRPZkJvdW5kYXJpZXMpO1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGFkZENoaWxkRWxlbWVudChzaGlwLCAnZGl2JywgJy5jZWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdyaWdodCcpIHNoaXAuY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IHVwZGF0ZUJvYXJkLCBhZGREcm9wRXZlbnRzLCBjcmVhdGVTaGlwRGl2IH1cbn1cblxuY29uc3QgY3JlYXRlQWxpdmVTaGlwcyA9IChkaXYpID0+IHtcbiAgICBsZXQgcHMgPSBbXTtcbiAgICBsZXQgc2hpcHMgPSBbXTtcbiAgICBsZXQgbGVuZ2h0cyA9IFs1LCA0LCAzLCAyXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ2RpdicsICcuc21hbGwnKTtcbiAgICAgICAgbGV0IHAgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gaSArIDE7XG4gICAgICAgIHBzLnB1c2gocCk7XG4gICAgICAgIGxldCBzaGlwID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2RpdicsICcuc2hpcCcpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDUgLSBpOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gYWRkQ2hpbGRFbGVtZW50KHNoaXAsICdkaXYnLCAnLmNlbGwnKTtcbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNoaXBzIChib2FyZCkge1xuICAgICAgICBwcy5mb3JFYWNoKHAgPT4gcC50ZXh0Q29udGVudCA9IDApO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcC5jbGFzc0xpc3QuYWRkKCdzdW5rJykpO1xuICAgICAgICBib2FyZC5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ2h0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGVuZ2h0c1tpXSA9PSBzaGlwLmNlbGxzLmxlbmd0aCkgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwc1tpbmRleF0udGV4dENvbnRlbnQgPSArcHNbaW5kZXhdLnRleHRDb250ZW50ICsgMTtcbiAgICAgICAgICAgICAgICBzaGlwc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc3VuaycpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4geyB1cGRhdGVTaGlwcyB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUJvYXJkLCBjcmVhdGVBbGl2ZVNoaXBzIH0iLCJjb25zdCBhZGRDaGlsZEVsZW1lbnQgPSAocGFyZW50LCBlbGVtZW50LCBjc3MpID0+IHtcbiAgICBsZXQgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtZW50fWApO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbG0pOyBcbiAgICBpZiAoY3NzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY3NzWzBdID09ICcuJyApXG4gICAgICAgIGVsbS5jbGFzc05hbWUgPSBjc3Muc3Vic3RyKDEpO1xuICAgICAgICBlbHNlIGlmIChjc3NbMF0gPT0gJyMnKVxuICAgICAgICBlbG0uaWQgPSBjc3Muc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIHJldHVybiBlbG07XG59XG5cbmZ1bmN0aW9uIGhpZGVDb250ZW50cyAoZGl2KSB7XG4gICAgZm9yIChsZXQgaT0wOyBpPGRpdi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpdi5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVDb250ZW50cyAoZGl2KSB7XG4gICAgZm9yIChsZXQgaT0wOyBpPGRpdi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpdi5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IHthZGRDaGlsZEVsZW1lbnQsIGhpZGVDb250ZW50cywgcmVzdG9yZUNvbnRlbnRzfTsiLCJpbXBvcnQgeyB1cGRhdGVNZXNzYWdlIH0gZnJvbSBcIi4vaHVkXCJcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgcGxheWVyQm9hcmQsIGVuZW15Qm9hcmQsIHAxR2FtZWJvYXJkLCBwMkdhbWVib2FyZCwgZW5lbXlTaGlwcywgcGxheWVyU2hpcHMgfSBmcm9tIFwiLlwiO1xuXG4vL2NoZWNrcG9pbnRcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBsZXQgb3ZlciA9IGZhbHNlO1xuICAgIGxldCBwMSA9IHBsYXllcignUGxheWVyIDEnLCAnaHVtYW4nKTtcbiAgICBsZXQgcDIgPSBwbGF5ZXIoJ1BsYXllciAyJywgJ2FpJyk7XG4gICAgbGV0IHBsYXllcnMgPSBbcDEsIHAyXTtcbiAgICBsZXQgYm9hcmRzID0gW3AxR2FtZWJvYXJkLCBwMkdhbWVib2FyZF07XG4gICAgbGV0IGN1cnJlbnRQID0gMDtcbiAgICBsZXQgY3VycmVudEIgPSAxO1xuICAgIHAxR2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIHBsYXllckJvYXJkLnVwZGF0ZUJvYXJkKHAxR2FtZWJvYXJkLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgcDJHYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgZW5lbXlCb2FyZC51cGRhdGVCb2FyZChwMkdhbWVib2FyZCwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlVHVybih4LCB5KSB7XG4gICAgICAgIGlmIChvdmVyKSByZXR1cm47XG4gICAgICAgIGlmIChwbGF5ZXJzW2N1cnJlbnRQXS5icmFpbiA9PSAnaHVtYW4nKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVkID0gcGxheWVyc1tjdXJyZW50UF0udGFrZVR1cm4oeCwgeSwgYm9hcmRzW2N1cnJlbnRCXSk7XG4gICAgICAgICAgICBpZiAocGxheWVkKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIGVuZW15U2hpcHMudXBkYXRlU2hpcHMoYm9hcmRzW2N1cnJlbnRCXSk7XG4gICAgICAgICAgICAgICAgZW5lbXlCb2FyZC51cGRhdGVCb2FyZChib2FyZHNbY3VycmVudEJdLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgb3ZlciA9IGNoZWNrV2lubmVyKCk7XG4gICAgICAgICAgICAgICAgY2hhbmdlVHVybnMoKTtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyc1tjdXJyZW50UF0uYnJhaW4gPT0gJ2FpJykgaGFuZGxlVHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlTWVzc2FnZSgpO1xuICAgICAgICAgICAgcGxheWVyc1tjdXJyZW50UF0udGFrZVJhbmRvbVR1cm4oYm9hcmRzW2N1cnJlbnRCXSk7XG4gICAgICAgICAgICBwbGF5ZXJTaGlwcy51cGRhdGVTaGlwcyhib2FyZHNbY3VycmVudEJdKTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnVwZGF0ZUJvYXJkKGJvYXJkc1tjdXJyZW50Ql0sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICBvdmVyID0gY2hlY2tXaW5uZXIoKTtcbiAgICAgICAgICAgIGNoYW5nZVR1cm5zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1dpbm5lciAoKSB7XG4gICAgICAgIGlmIChib2FyZHNbY3VycmVudEJdLmFyZUFsbFN1bmsoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coe3dpbm5lcjogcGxheWVyc1tjdXJyZW50UF19KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUdXJucygpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRQID09IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRQID0gMTtcbiAgICAgICAgICAgIGN1cnJlbnRCID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRQID0gMDtcbiAgICAgICAgICAgIGN1cnJlbnRCID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZVN0YXJ0ICgpIHtcbiAgICAgICAgcGxheWVyQm9hcmQudXBkYXRlQm9hcmQocDFHYW1lYm9hcmQsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIGVuZW15Qm9hcmQudXBkYXRlQm9hcmQocDJHYW1lYm9hcmQsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcGxheWVyU2hpcHMudXBkYXRlU2hpcHMocDFHYW1lYm9hcmQpO1xuICAgICAgICBlbmVteVNoaXBzLnVwZGF0ZVNoaXBzKHAyR2FtZWJvYXJkKTtcbiAgICAgICAgYm9hcmRzID0gW3AxR2FtZWJvYXJkLCBwMkdhbWVib2FyZF07XG4gICAgICAgIG92ZXIgPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgaGFuZGxlVHVybiwgcmVTdGFydCB9XG59XG5cbmV4cG9ydCB7IHN0YXJ0R2FtZSB9IiwiaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXBzXCI7XG5cbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICBsZXQgc2hpcHMgPSBbXTtcblxuICAgIGNsZWFyQm9hcmQoKTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyQm9hcmQgKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCAxMCA7IGkrKyl7XG4gICAgICAgICAgICBjZWxsc1tpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgMTAgOyBqKyspe1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdID0ge2hpdDogZmFsc2UsIHNoaXA6IC0yfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcCh4LCB5LCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBpbnZhbGlkQ29vcmQgPSBmYWxzZTtcbiAgICAgICAgaW52YWxpZENvb3JkID0gY2hlY2tWYWxpZENvb3JkaW5hdGVzKHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpO1xuICAgICAgICBpZiAoaW52YWxpZENvb3JkID09IHRydWUpIHJldHVybjtcbiAgICAgICAgbGV0IG5ld1NoaXAgPSBzaGlwKGxlbmd0aCk7XG4gICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIG5ld1NoaXAuY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZCA9IFtdO1xuICAgICAgICBuZXdTaGlwLmRpcmVjdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgICAgICBsZXQgYXV4WCA9IHg7XG4gICAgICAgIGxldCBhdXhZID0geTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgY2VsbHNbeF1beV0uc2hpcCA9IGk7XG4gICAgICAgICAgICBuZXdTaGlwLmNvb3JkaW5hdGVzW2ldID0gW3gsIHldO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdkb3duJykgeSsrO1xuICAgICAgICAgICAgZWxzZSB4Kys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmlsbCBhZGphY2VudCBjZWxscyB3aXRoIC0xXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoICsgMjsgaSsrKSB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdkb3duJykge1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLTEsIGF1eFktMSkpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFgtMV1bYXV4WS0xXS5zaGlwID0gLTE7IFxuICAgICAgICAgICAgICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQucHVzaChbYXV4WC0xLCBhdXhZLTFdKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRBdXhDb29yZChhdXhYKzEsIGF1eFktMSkpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFgrMV1bYXV4WS0xXS5zaGlwID0gLTE7IFxuICAgICAgICAgICAgICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQucHVzaChbYXV4WCsxLCBhdXhZLTFdKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmKGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLCBhdXhZLTEpICYmIGkgPT0gMCB8fCBjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WCwgYXV4WS0xKSAmJiBpID09IGxlbmd0aCsxKXtcbiAgICAgICAgICAgICAgICAgICBjZWxsc1thdXhYXVthdXhZLTFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLCBhdXhZLTFdKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WS0xKSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WC0xXVthdXhZLTFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLTEsIGF1eFktMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WSsxKSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WC0xXVthdXhZKzFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLTEsIGF1eFkrMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WSkgJiYgaSA9PSAwIHx8IGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLTEsIGF1eFkpICYmIGkgPT0gbGVuZ3RoKzEpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFgtMV1bYXV4WV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgtMSwgYXV4WV0pO1xuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2Rvd24nKSBhdXhZKys7XG4gICAgICAgICAgICBlbHNlIGF1eFgrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVmFsaWRDb29yZGluYXRlcyh4LCB5LCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICh4ID4gOSB8fCB4IDwgMCB8fCB5ID4gOSB8fCB5IDwgMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnZG93bicgJiYgeStsZW5ndGggPiAxMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAncmlnaHQnICYmIHgrbGVuZ3RoID4gMTApIHJldHVybiB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYoY2VsbHNbeF1beV0uc2hpcCA+IC0yKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnZG93bicpIHkrKztcbiAgICAgICAgICAgIGVsc2UgeCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkQXV4Q29vcmQgKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPiA5IHx8IHggPCAwIHx8IHkgPiA5IHx8IHkgPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7ICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2sgKHgsIHkpIHtcbiAgICAgICAgaWYgKGNlbGxzW3hdW3ldLmhpdCA9PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNlbGxzW3hdW3ldLmhpdCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0uY29vcmRpbmF0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcHNbaV0uY29vcmRpbmF0ZXNbal1bMF0gPT0geCAmJiBzaGlwc1tpXS5jb29yZGluYXRlc1tqXVsxXSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdChjZWxsc1t4XVt5XS5zaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya0FkamFjZW50Q2VsbHMoc2hpcHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFya0FkamFjZW50Q2VsbHMoc2hpcCkge1xuICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHJldHVybjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLm5leHRUb0Nvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsc1tzaGlwLm5leHRUb0Nvb3JkW2ldWzBdXVtzaGlwLm5leHRUb0Nvb3JkW2ldWzFdXS5oaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJlQWxsU3VuaygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFzaGlwc1tpXS5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSAoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzUsIDQsIDQsIDMsIDMsIDMsIDIsIDIsIDIsIDJdO1xuICAgICAgICBjb25zdCBtaXNzaW5nU2hpcHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Rocy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRyaWVzID0gNSAqIChpKzEpO1xuICAgICAgICAgICAgd2hpbGUgKHNoaXBzLmxlbmd0aCArIG1pc3NpbmdTaGlwcy5sZW5ndGggPD0gaSAmJiB0cmllcyA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9IHBpY2tSYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcCh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aHNbaV0pO1xuICAgICAgICAgICAgICAgIHRyaWVzLS07XG4gICAgICAgICAgICAgICAgaWYgKHRyaWVzID09IDAgJiYgc2hpcHMubGVuZ3RoICsgbWlzc2luZ1NoaXBzLmxlbmd0aCA8PSBpKSBtaXNzaW5nU2hpcHMucHVzaChzaGlwTGVuZ3Roc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWlzc2luZ1NoaXBzLmxlbmd0aCA+IDApIHNvbHZlTWlzc2luZ1NoaXBzKG1pc3NpbmdTaGlwcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGlja1JhbmRvbU9yaWVudGF0aW9uICgpIHtcbiAgICAgICAgbGV0IGF1eCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTtcbiAgICAgICAgaWYgKGF1eCA9PSAxKSByZXR1cm4gJ3JpZ2h0JztcbiAgICAgICAgZWxzZSByZXR1cm4gJ2Rvd24nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNvbHZlTWlzc2luZ1NoaXBzIChhcnIpIHtcbiAgICAgICAgbGV0IGF2YWlsYWJsZSA9IFtdO1xuICAgICAgICBsZXQgbGVuZ3RoID0gc2hpcHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCAxMCA7IGkrKyl7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCAxMCA7IGorKyl7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxzW2ldW2pdLnNoaXAgPT0gLTIpIGF2YWlsYWJsZS5wdXNoKFtpLCBqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXZhaWxhYmxlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKGF2YWlsYWJsZVtqXVswXSwgYXZhaWxhYmxlW2pdWzFdLCAncmlnaHQnLCBhcnJbaV0pO1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcChhdmFpbGFibGVbal1bMF0sIGF2YWlsYWJsZVtqXVsxXSwgJ2Rvd24nLCBhcnJbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPCBzaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gc2hpcHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpcHMubGVuZ3RoICE9IDEwKSB7XG4gICAgICAgICAgICBjbGVhckJvYXJkKCk7IFxuICAgICAgICAgICAgc2hpcHMgPSBbXTtcbiAgICAgICAgICAgIHBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2hpcEluZGV4KHgsIHkpIHtcbiAgICAgICAgaWYgKGNlbGxzW3hdW3ldLnNoaXAgPiAtMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHNoaXBzW2ldLmNvb3JkaW5hdGVzW2NlbGxzW3hdW3ldLnNoaXBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwc1tpXS5jb29yZGluYXRlc1tjZWxsc1t4XVt5XS5zaGlwXVswXSA9PSB4ICYmIHNoaXBzW2ldLmNvb3JkaW5hdGVzW2NlbGxzW3hdW3ldLnNoaXBdWzFdID09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpOyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2lsbFNoaXAgKHgsIHkpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gZ2V0U2hpcEluZGV4KHgsIHkpO1xuICAgICAgICBzaGlwc1tpbmRleF0uY29vcmRpbmF0ZXMuZm9yRWFjaCh2YWwgPT4gY2VsbHNbdmFsWzBdXVt2YWxbMV1dLnNoaXAgPSAtMik7XG4gICAgICAgIHNoaXBzW2luZGV4XS5uZXh0VG9Db29yZC5mb3JFYWNoKHZhbCA9PiBjZWxsc1t2YWxbMF1dW3ZhbFsxXV0uc2hpcCA9IC0yKTtcbiAgICAgICAgc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2hpcHNbaV0ubmV4dFRvQ29vcmQuZm9yRWFjaCh2YWwgPT4gY2VsbHNbdmFsWzBdXVt2YWxbMV1dLnNoaXAgPSAtMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNoaXBPcmllbnRhdGlvbiAoeCwgeSkge1xuICAgICAgICBsZXQgaW5kZXggPSBnZXRTaGlwSW5kZXgoeCwgeSk7XG4gICAgICAgIHJldHVybiBzaGlwc1tpbmRleF0uZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBsYWNlU2hpcCwgY2VsbHMsIHJlY2VpdmVBdHRhY2ssIHNoaXBzLCBhcmVBbGxTdW5rLCBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgICAgICAgICBraWxsU2hpcCwgZ2V0U2hpcE9yaWVudGF0aW9uIH1cbn1cblxuZXhwb3J0IHsgZ2FtZWJvYXJkIH1cblxuIiwiaW1wb3J0IHsgYWRkQ2hpbGRFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5U2V0dXAgfSBmcm9tIFwiLi9zZXR1cFwiXG5cbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkJyk7XG5cbmxldCBtZXNzYWdlO1xuXG5mdW5jdGlvbiBydW5IdWQoKSB7XG4gICAgbWVzc2FnZSA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdwJyk7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgT25lJ3MgVHVybmA7XG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdwMScpO1xuICAgIGxldCByZXN0YXJ0ID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2J1dHRvbicpO1xuICAgIHJlc3RhcnQudGV4dENvbnRlbnQgPSAnTmV3IEdhbWUnO1xuICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5U2V0dXApXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2UgKCkge1xuICAgIChtZXNzYWdlLmNsYXNzTGlzdC5jb250YWlucygncDEnKSkgPyBtZXNzYWdlLnRleHRDb250ZW50ID0gIGBQbGF5ZXIgVHdvJ3MgVHVybmA6XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgUGxheWVyIE9uZSdzIFR1cm5gO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgncDEnKTtcbn1cblxuZXhwb3J0IHsgcnVuSHVkLCB1cGRhdGVNZXNzYWdlIH0iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZCwgY3JlYXRlQWxpdmVTaGlwcyB9IGZyb20gXCIuL2RvbVN0dWZmXCI7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcnVuU2V0dXAgfSBmcm9tIFwiLi9zZXR1cFwiO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBydW5IdWQgfSBmcm9tIFwiLi9odWRcIjtcblxuY29uc3QgcGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuY29uc3QgZW5lbXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5lbXktYm9hcmQnKTtcbmxldCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUJvYXJkKHBsYXllciwgZmFsc2UpO1xubGV0IGVuZW15Qm9hcmQgPSBjcmVhdGVCb2FyZChlbmVteSwgdHJ1ZSk7XG5sZXQgcGxheWVyU2hpcHMgPSBjcmVhdGVBbGl2ZVNoaXBzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItc2hpcHMnKSk7XG5sZXQgZW5lbXlTaGlwcyA9IGNyZWF0ZUFsaXZlU2hpcHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZW15LXNoaXBzJykpO1xuXG5sZXQgcDFHYW1lYm9hcmQgPSBnYW1lYm9hcmQoKTtcbmxldCBwMkdhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xuXG5ydW5TZXR1cCgpO1xubGV0IGdhbWUgPSBzdGFydEdhbWUoKTtcbnJ1bkh1ZCgpO1xuXG5cbmZ1bmN0aW9uIHNldFAxIChib2FyZCkge1xuICAgIHAxR2FtZWJvYXJkID0gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIHNldFAyIChib2FyZCkge1xuICAgIHAyR2FtZWJvYXJkID0gYm9hcmQ7XG59XG5cblxuZXhwb3J0IHsgZ2FtZSwgcGxheWVyQm9hcmQsIGVuZW15Qm9hcmQsIHNldFAxLCBzZXRQMiwgcDFHYW1lYm9hcmQsIHAyR2FtZWJvYXJkLFxuICAgICAgICBlbmVteVNoaXBzLCBwbGF5ZXJTaGlwcyB9XG5cblxuLy9hZGQgY29vcmRpbmF0ZXMgYW5kIHJlbWFpbmluZyBzaGlwcyB0byBkaXNwbGF5XG4vL2FkZCBjb21wdXRlciBzbWFydCBwbGF5XG4vL2FkZCBzbWFsbCBkZWxheSBmb3IgY29tcHV0ZXIgcGxheVxuLy9hZGQgdHdvIHBsYXllciBtb2RlIiwiY29uc3QgcGxheWVyID0gKG5hbWUsIGJyYWluKSA9PiB7XG5cbiAgICBmdW5jdGlvbiB0YWtlVHVybih4LCB5LCBnYW1lYm9hcmQpIHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRha2VSYW5kb21UdXJuKGdhbWVib2FyZCkge1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgbGV0IHZhbGlkSGl0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIHdoaWxlKHZhbGlkSGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgdmFsaWRIaXQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgfSAgIFxuICAgIH1cblxuICAgIHJldHVybiB7IHRha2VUdXJuLCBuYW1lLCBicmFpbiwgdGFrZVJhbmRvbVR1cm4gfVxufVxuXG5leHBvcnQgeyBwbGF5ZXIgfSIsImltcG9ydCB7IGNyZWF0ZUJvYXJkIH0gZnJvbSBcIi4vZG9tU3R1ZmZcIjtcbmltcG9ydCB7IGFkZENoaWxkRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBnYW1lLCBzZXRQMSwgc2V0UDIgfSBmcm9tIFwiLlwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dXAnKTtcbmxldCBib2FyZDtcbmxldCBkb21Cb2FyZDtcbmxldCBwbGFjZW1lbnRCb2FyZDtcbmxldCBpbmRleDtcbmxldCBsZW5ndGg7XG5sZXQgb3JpZW50YXRpb24gPSAnZG93bic7XG5sZXQgcmVtYWluaW5nID0gMDtcbmxldCBkcmFnSXRlbTtcbmxldCBkcmFnID0gZmFsc2U7XG5sZXQga2lsbCA9IGZhbHNlO1xubGV0IHBzID0gW107XG5sZXQgZG9tU2hpcHMgPSBbXTtcbmxldCBjYW5jZWw7XG5cbmZ1bmN0aW9uIHJ1blNldHVwICgpIHtcbiAgICBjb25zdCBsZWZ0ID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2RpdicsICcubGVmdCcpO1xuICAgIGJvYXJkID0gYWRkQ2hpbGRFbGVtZW50KGxlZnQsICdkaXYnLCAnI3BsYWNlbWVudC1ib2FyZCcpO1xuICAgIGRvbUJvYXJkID0gY3JlYXRlQm9hcmQoYm9hcmQsIGZhbHNlKTtcbiAgICBkb21Cb2FyZC5hZGREcm9wRXZlbnRzKCk7XG4gICAgcGxhY2VtZW50Qm9hcmQgPSBnYW1lYm9hcmQoKTtcblxuICAgIGNvbnN0IHJpZ2h0ID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2RpdicsICcucmlnaHQnKTtcbiAgICBjb25zdCBzaGlwcyA9IGFkZENoaWxkRWxlbWVudChyaWdodCwgJ2RpdicsICcjZHJhZy1zaGlwcycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDU7IGkgPiAxOyBpLS0pIHtcbiAgICAgICAgbGV0IGRpdiA9IGFkZENoaWxkRWxlbWVudChzaGlwcywgJ2RpdicsICcuc2hpcC1jb250YWluZXInKTtcbiAgICAgICAgbGV0IHAgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAncCcsICcuc2hpcHMtcmVtYWluaW5nJyk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSA2IC0gaTtcbiAgICAgICAgcC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgcHMucHVzaChwKTtcbiAgICAgICAgbGV0IHNoaXAgPSBhZGRDaGlsZEVsZW1lbnQoZGl2LCAnZGl2JywgJy5zaGlwJyk7XG4gICAgICAgIGRvbVNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAoZG9tU2hpcHNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkgPyBvcmllbnRhdGlvbiA9ICdyaWdodCcgOiBvcmllbnRhdGlvbiA9ICdkb3duJztcbiAgICAgICAgICAgIGluZGV4ID0gNSAtIGk7XG4gICAgICAgICAgICBsZW5ndGggPSBpO1xuICAgICAgICAgICAgZHJhZ0l0ZW0gPSBzaGlwO1xuICAgICAgICAgICAgaWYgKCtwLnRleHRDb250ZW50ID4gMCkgZHJhZyA9IHRydWU7XG4gICAgICAgICAgICBraWxsID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiBkcmFnID0gZmFsc2UpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBhZGRDaGlsZEVsZW1lbnQoc2hpcCwgJ2RpdicsICcuY2VsbCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9ucyA9IGFkZENoaWxkRWxlbWVudChyaWdodCwgJ2RpdicsICcjc2V0dGluZy1idXR0b25zJyk7XG5cbiAgICBjb25zdCByYW5kb20gPSBhZGRDaGlsZEVsZW1lbnQoYnV0dG9ucywgJ2J1dHRvbicpO1xuICAgIHJhbmRvbS50ZXh0Q29udGVudCA9ICdSYW5kb20nO1xuICAgIHJhbmRvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBpY2tSYW5kb20pO1xuXG4gICAgY29uc3Qgcm90YXRlID0gYWRkQ2hpbGRFbGVtZW50KGJ1dHRvbnMsICdidXR0b24nKTtcbiAgICByb3RhdGUudGV4dENvbnRlbnQgPSAnUm90YXRlJztcbiAgICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwcyk7XG5cbiAgICBjb25zdCBjbGVhciA9IGFkZENoaWxkRWxlbWVudChidXR0b25zLCAnYnV0dG9uJyk7XG4gICAgY2xlYXIudGV4dENvbnRlbnQgPSAnQ2xlYXInO1xuICAgIGNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJCb2FyZCk7XG5cbiAgICBjb25zdCBzdGFydCA9IGFkZENoaWxkRWxlbWVudChidXR0b25zLCAnYnV0dG9uJyk7XG4gICAgc3RhcnQudGV4dENvbnRlbnQgPSAnU3RhcnQnO1xuICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3R2FtZSk7XG5cbiAgICBjYW5jZWwgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnYnV0dG9uJywgJy5oaWRlJyk7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ3gnO1xuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJykpO1xufVxuLy9jaGVja3BvaW50XG5mdW5jdGlvbiBwbGFjZVNoaXAgKHgsIHkpIHtcbiAgICBpZiAocGxhY2VtZW50Qm9hcmQuc2hpcHMubGVuZ3RoID49IDEwKSByZXR1cm47XG4gICAgcGxhY2VtZW50Qm9hcmQucGxhY2VTaGlwKHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpO1xuICAgIGRvbUJvYXJkLnVwZGF0ZUJvYXJkKHBsYWNlbWVudEJvYXJkLCBmYWxzZSwgdHJ1ZSk7XG4gICAgaWYoa2lsbCl7XG4gICAgICAgIGRyYWdJdGVtLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnRCb2FyZC5zaGlwcy5sZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIHBzW2luZGV4XS50ZXh0Q29udGVudCA9ICtwc1tpbmRleF0udGV4dENvbnRlbnQgLSAxO1xuICAgICAgICBkb21Cb2FyZC5jcmVhdGVTaGlwRGl2KHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpO1xuICAgIH1cbiAgICBcbiAgICArcHNbaW5kZXhdLnRleHRDb250ZW50ID09IDAgP1xuICAgICAgICBkb21TaGlwc1tpbmRleF0uZHJhZ2dhYmxlID0gZmFsc2U6XG4gICAgICAgIGRvbVNoaXBzW2luZGV4XS5kcmFnZ2FibGUgPSB0cnVlO1xuXG4gICAga2lsbCA9IGZhbHNlO1xuICAgIFxufVxuXG5mdW5jdGlvbiBjaGVja0RyYWcgKCkge1xuICAgIHJldHVybiBkcmFnO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEcmFnICgpIHtcbiAgICBkcmFnID09IHRydWUgPyBkcmFnID0gZmFsc2U6IGRyYWcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBzYXZlVmFyaWFibGVzKGluZCwgbGVuLCBkcmEsIHgsIHkpIHtcbiAgICBpbmRleCA9IGluZDtcbiAgICBsZW5ndGggPSBsZW47XG4gICAga2lsbCA9IHRydWU7XG4gICAgZHJhZ0l0ZW0gPSBkcmE7XG4gICAgb3JpZW50YXRpb24gPSBwbGFjZW1lbnRCb2FyZC5nZXRTaGlwT3JpZW50YXRpb24oeCwgeSk7XG4gICAgcGxhY2VtZW50Qm9hcmQua2lsbFNoaXAoeCwgeSk7XG4gICAgZG9tQm9hcmQudXBkYXRlQm9hcmQocGxhY2VtZW50Qm9hcmQsIGZhbHNlLCB0cnVlKTsgIFxuICAgIHBzW2luZGV4XS50ZXh0Q29udGVudCA9ICtwc1tpbmRleF0udGV4dENvbnRlbnQgKyAxOyBcbiAgICByZW1haW5pbmctLTtcbiAgICBkb21TaGlwc1tpbmRleF0uZHJhZ2dhYmxlID0gdHJ1ZTsgXG59XG5cbmZ1bmN0aW9uIHBpY2tSYW5kb20gKCkge1xuICAgIGNsZWFyQm9hcmQoKTtcbiAgICBwbGFjZW1lbnRCb2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9tQm9hcmQudXBkYXRlQm9hcmQocGxhY2VtZW50Qm9hcmQsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgcGxhY2VtZW50Qm9hcmQuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGRvbUJvYXJkLmNyZWF0ZVNoaXBEaXYoc2hpcC5jb29yZGluYXRlc1swXVswXSwgc2hpcC5jb29yZGluYXRlc1swXVsxXSwgc2hpcC5kaXJlY3Rpb24sIHNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgMTAwKTtcbiAgICBwcy5mb3JFYWNoKChwKSA9PiBwLnRleHRDb250ZW50ID0gMCk7XG4gICAgZG9tU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5kcmFnZ2FibGUgPSBmYWxzZSk7XG4gICAgcmVtYWluaW5nID0gMTA7ICBcbn1cblxuZnVuY3Rpb24gY2xlYXJCb2FyZCgpIHtcbiAgICBwbGFjZW1lbnRCb2FyZCA9IGdhbWVib2FyZCgpO1xuICAgIGxldCBzaGlwcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW92ZWFibGUnKSk7XG4gICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXAucmVtb3ZlKCkpO1xuICAgIGRvbUJvYXJkLnVwZGF0ZUJvYXJkKHBsYWNlbWVudEJvYXJkLCBmYWxzZSwgdHJ1ZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcy5sZW5ndGg7IGkgKyspIHBzW2ldLnRleHRDb250ZW50ID0gNCAtIGk7XG4gICAgZG9tU2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZSk7XG4gICAgcmVtYWluaW5nID0gMDtcbn1cblxuZnVuY3Rpb24gcm90YXRlU2hpcHMoKSB7XG4gICAgKGRvbVNoaXBzWzBdLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpID8gb3JpZW50YXRpb24gPSAnZG93bicgOiBvcmllbnRhdGlvbiA9ICdyaWdodCc7IFxuICAgIGRvbVNoaXBzLmZvckVhY2goc2hpcCA9PiBzaGlwLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpKTtcbn1cblxuZnVuY3Rpb24gc29sdmVPdXRPZkJvdW5kYXJpZXMgKCkge1xuICAgIGlmIChwbGFjZW1lbnRCb2FyZC5zaGlwcy5sZW5ndGggPCByZW1haW5pbmcpIHtcbiAgICAgICAgcmVtYWluaW5nLS07XG4gICAgfVxuICAgIGVsc2UgZHJhZ0l0ZW0ucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWUgKCkge1xuICAgIGlmIChwbGFjZW1lbnRCb2FyZC5zaGlwcy5sZW5ndGggPCAxMCkgcmV0dXJuO1xuICAgIGxldCBjb21wdXRlciA9IGdhbWVib2FyZCgpO1xuICAgIGNvbXB1dGVyLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIHNldFAxKHBsYWNlbWVudEJvYXJkKTtcbiAgICBzZXRQMihjb21wdXRlcik7XG4gICAgZ2FtZS5yZVN0YXJ0KCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNldHVwICgpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIGNsZWFyQm9hcmQoKTtcbiAgICBjYW5jZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xufVxuXG5cbmV4cG9ydCB7IHJ1blNldHVwLCBwbGFjZVNoaXAsIGNoZWNrRHJhZywgdG9nZ2xlRHJhZywgc2F2ZVZhcmlhYmxlcyxcbiAgICAgICAgIHNvbHZlT3V0T2ZCb3VuZGFyaWVzLCBkaXNwbGF5U2V0dXB9XG5cbiIsImNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiB7XG5cbiAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIGNlbGxzW2ldID0gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGl0IChudW0pIHtcbiAgICAgICAgY2VsbHNbbnVtXSA9ICdoaXQnO1xuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2VsbHNbaV0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VuayA9IHRydWU7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cblxuICAgIHJldHVybiB7IGhpdCwgaXNTdW5rLCBjZWxscyB9XG59XG5cbmV4cG9ydCB7IHNoaXAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9