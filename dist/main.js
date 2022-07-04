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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#boards, #setup {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n#player-board, #enemy-board, #placement-board, #setup .right, .ship-container {\n    display: flex;\n    height: max-content;\n    width: max-content;\n}\n\n.ship-container p::before {\n    content: 'x';\n}\n\n.ship.moveable {\n    transform: translateX(-1px) translateY(-1px);\n    overflow: visible;\n}\n\n.drag-over.available {\n    background-color: rgb(0 0 0 / 40%);\n}\n\n.row {\n    display: flex;\n    flex-direction: column;\n}\n\n.cell {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n}\n\n#player-board .ship, #enemy-board .ship.hit, #setup .ship {\n    color: red;\n    background-color: rgb(97, 97, 97);\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,4CAA4C;IAC5C,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,iCAAiC;AACrC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#boards, #setup {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n#player-board, #enemy-board, #placement-board, #setup .right, .ship-container {\n    display: flex;\n    height: max-content;\n    width: max-content;\n}\n\n.ship-container p::before {\n    content: 'x';\n}\n\n.ship.moveable {\n    transform: translateX(-1px) translateY(-1px);\n    overflow: visible;\n}\n\n.drag-over.available {\n    background-color: rgb(0 0 0 / 40%);\n}\n\n.row {\n    display: flex;\n    flex-direction: column;\n}\n\n.cell {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black;\n}\n\n#player-board .ship, #enemy-board .ship.hit, #setup .ship {\n    color: red;\n    background-color: rgb(97, 97, 97);\n}\n\n"],"sourceRoot":""}]);
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

    function updateHits (board) {
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10; j++) {
                if (board.cells[i][j].hit == true) {
                    cells[i][j].classList.add('hit');
                    cells[i][j].textContent = 'x';
                }
                else {
                    cells[i][j].classList.remove('hit');
                    cells[i][j].textContent = '';
                }
            }
        }      
    }

    function updateShips (board) {
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10; j++) {
                if (board.cells[i][j].ship > -1) cells[i][j].classList.add('ship');
                else  cells[i][j].classList.remove('ship');
                if (board.cells[i][j].ship == -2) cells[i][j].classList.add('available');
                else  cells[i][j].classList.remove('available');
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
        ship.addEventListener('dragstart', () => (0,_setup__WEBPACK_IMPORTED_MODULE_2__.saveVariables)(5 - length, length, ship, i, j))
        ship.addEventListener('dragend', _setup__WEBPACK_IMPORTED_MODULE_2__.toggleDrag);
        for (let c = 0; c < length; c++) {
            let cell = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(ship, 'div', '.cell');
        }
    }
    
    return { updateHits, updateShips, addDropEvents, createShipDiv }
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");




const startGame = () => {
    let over = false;
    let p1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.player)('carlos', 'human');
    let p2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.player)('bot', 'ai');
    let p1Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)();
    let p2Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)();
    let players = [p1, p2];
    let boards = [p1Gameboard, p2Gameboard];
    let currentP = 0;
    let currentB = 1;
    p1Gameboard.placeShipsRandomly();
    ___WEBPACK_IMPORTED_MODULE_2__.playerBoard.updateShips(p1Gameboard);

    p2Gameboard.placeShipsRandomly();
    ___WEBPACK_IMPORTED_MODULE_2__.enemyBoard.updateShips(p2Gameboard);

    function handleTurn(x, y) {
        if (over) return;
        if (players[currentP].brain == 'human') {
            let played = players[currentP].takeTurn(x, y, boards[currentB]);
            if (played) {
                ___WEBPACK_IMPORTED_MODULE_2__.enemyBoard.updateHits(boards[currentB]);
                over = checkWinner();
                changeTurns();
                if (players[currentP].brain == 'ai') handleTurn();
            }
        }
        else {
            players[currentP].takeRandomTurn(boards[currentB]);
            ___WEBPACK_IMPORTED_MODULE_2__.playerBoard.updateHits(boards[currentB]);
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
    
    return { handleTurn }
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
        if (orientation == 'down' && y+length > 9) return true;
        if (orientation == 'right' && x+length > 9) return true;
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

    return { placeShip, cells, receiveAttack, ships, areAllSunk, placeShipsRandomly,
            killShip }
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
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard)
/* harmony export */ });
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup */ "./src/setup.js");





const player = document.getElementById('player-board');
const enemy = document.getElementById('enemy-board');
let playerBoard = (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createBoard)(player, false);
let enemyBoard = (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createBoard)(enemy, true);

(0,_setup__WEBPACK_IMPORTED_MODULE_3__.runSetup)();
let game = (0,_game__WEBPACK_IMPORTED_MODULE_1__.startGame)();





//add settings module
//add messages module
//add drag and drope for placement ships
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
/* harmony export */   "placeShip": () => (/* binding */ placeShip),
/* harmony export */   "runSetup": () => (/* binding */ runSetup),
/* harmony export */   "saveVariables": () => (/* binding */ saveVariables),
/* harmony export */   "toggleDrag": () => (/* binding */ toggleDrag)
/* harmony export */ });
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ships */ "./src/ships.js");





const container = document.getElementById('setup');
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

function runSetup () {
    const left = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(container, 'div', '.left');
    const board = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(left, 'div', '#placement-board');
    domBoard = (0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createBoard)(board, false);
    domBoard.addDropEvents();
    placementBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.gameboard)();

    const right = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(container, 'div', '.right');
    for (let i = 5; i > 1; i--) {
        let div = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(right, 'div', '.ship-container');
        let p = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(div, 'p', '.ships-remaining');
        p.textContent = 6 - i;
        ps.push(p);
        let ship = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(div, 'div', '.ship');
        ship.draggable = true;
        ship.addEventListener('dragstart', () => {
            index = 5 - i;
            length = i;
            dragItem = ship;
            drag = true;
            kill = false;
        });
        ship.addEventListener('dragend', () => drag = false);
        for (let j = 0; j < i; j++) {
            let cell = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(ship, 'div', '.cell');
        }
    }
}
//checkpoint
function placeShip (x, y) {
    placementBoard.placeShip(x, y, orientation, length);
    domBoard.updateShips(placementBoard);
    if(kill){
        if (placementBoard.ships.length > remaining) {
            domBoard.createShipDiv(x, y, orientation, length);      
        } 
        else{
            ps[index].textContent = +ps[index].textContent + 1; 
            remaining--;
        } 
        dragItem.remove();
    }
    else if (+ps[index].textContent == 0){
        dragItem.draggable = false;
    }

    if (placementBoard.ships.length > remaining) {
        remaining++;
        ps[index].textContent = +ps[index].textContent - 1;
        domBoard.createShipDiv(x, y, orientation, length);
    }

    kill = false;
    
}

function checkDrag () {
    return drag;
}

function toggleDrag () {
    drag == true ? drag = false: drag = true;
}

function saveVariables(ind, len, dra, xKill, yKill) {
    index = ind;
    length = len;
    kill = true;
    dragItem = dra;
    placementBoard.killShip(xKill, yKill);
    domBoard.updateShips(placementBoard);   
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvRTs7Ozs7Ozs7Ozs7Ozs7OztBQzFGcEU7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NldHVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2JvYXJkcywgI3NldHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLCAjZW5lbXktYm9hcmQsICNwbGFjZW1lbnQtYm9hcmQsICNzZXR1cCAucmlnaHQsIC5zaGlwLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIHA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICd4JztcXG59XFxuXFxuLnNoaXAubW92ZWFibGUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFweCkgdHJhbnNsYXRlWSgtMXB4KTtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5kcmFnLW92ZXIuYXZhaWxhYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gNDAlKTtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQgLnNoaXAsICNlbmVteS1ib2FyZCAuc2hpcC5oaXQsICNzZXR1cCAuc2hpcCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTcsIDk3KTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNib2FyZHMsICNzZXR1cCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuI3BsYXllci1ib2FyZCwgI2VuZW15LWJvYXJkLCAjcGxhY2VtZW50LWJvYXJkLCAjc2V0dXAgLnJpZ2h0LCAuc2hpcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciBwOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAneCc7XFxufVxcblxcbi5zaGlwLm1vdmVhYmxlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpIHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uZHJhZy1vdmVyLmF2YWlsYWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQwJSk7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIC5zaGlwLCAjZW5lbXktYm9hcmQgLnNoaXAuaGl0LCAjc2V0dXAgLnNoaXAge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk3LCA5Nyk7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWRkQ2hpbGRFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IHBsYWNlU2hpcCwgY2hlY2tEcmFnLCB0b2dnbGVEcmFnLCBzYXZlVmFyaWFibGVzIH0gZnJvbSBcIi4vc2V0dXBcIjtcblxuY29uc3QgY3JlYXRlQm9hcmQgPSAoYm9hcmQsIGVuZW15KSA9PiB7XG4gICAgbGV0IGNlbGxzID0gW107XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGxldCBkaXYgPSBhZGRDaGlsZEVsZW1lbnQoYm9hcmQsICdkaXYnLCAnLnJvdycpO1xuICAgICAgICBjZWxsc1tpXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gYWRkQ2hpbGRFbGVtZW50KGRpdiwgJ2J1dHRvbicsICcuY2VsbCcpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLnB1c2goY2VsbCk7XG4gICAgICAgICAgICBpZiAoZW5lbXkpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ2FtZS5oYW5kbGVUdXJuKGksIGopKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlSGl0cyAoYm9hcmQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLmNlbGxzW2ldW2pdLmhpdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNoaXBzIChib2FyZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmQuY2VsbHNbaV1bal0uc2hpcCA+IC0xKSBjZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgZWxzZSAgY2VsbHNbaV1bal0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIGlmIChib2FyZC5jZWxsc1tpXVtqXS5zaGlwID09IC0yKSBjZWxsc1tpXVtqXS5jbGFzc0xpc3QuYWRkKCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICBlbHNlICBjZWxsc1tpXVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZERyb3BFdmVudHMgKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwIDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcilcbiAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgICAgICAgICAgICAgY2VsbHNbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ0xlYXZlKTtcbiAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoKSA9PiBkcm9wKGNlbGxzW2ldW2pdLCBpLCBqKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnLW92ZXInKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcmFnTGVhdmUoZSkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJvcChjZWxsLCBpLCBqKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1vdmVyJyk7XG4gICAgICAgIGlmICghY2hlY2tEcmFnKCkpIHJldHVybjtcbiAgICAgICAgeCA9IGk7XG4gICAgICAgIHkgPSBqO1xuICAgICAgICBwbGFjZVNoaXAoeCwgeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU2hpcERpdiAoaSwgaiwgb3JpZW50YXRpb24sIGxlbmd0aCkge1xuICAgICAgICBsZXQgc2hpcCA9IGFkZENoaWxkRWxlbWVudChjZWxsc1tpXVtqXSwgJ2RpdicsICcuc2hpcCcpO1xuICAgICAgICBzaGlwLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnbW92ZWFibGUnKTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0b2dnbGVEcmFnKTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiBzYXZlVmFyaWFibGVzKDUgLSBsZW5ndGgsIGxlbmd0aCwgc2hpcCwgaSwgaikpXG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRvZ2dsZURyYWcpO1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGFkZENoaWxkRWxlbWVudChzaGlwLCAnZGl2JywgJy5jZWxsJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgdXBkYXRlSGl0cywgdXBkYXRlU2hpcHMsIGFkZERyb3BFdmVudHMsIGNyZWF0ZVNoaXBEaXYgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVCb2FyZCB9IiwiY29uc3QgYWRkQ2hpbGRFbGVtZW50ID0gKHBhcmVudCwgZWxlbWVudCwgY3NzKSA9PiB7XG4gICAgbGV0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudH1gKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxtKTsgXG4gICAgaWYgKGNzcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGNzc1swXSA9PSAnLicgKVxuICAgICAgICBlbG0uY2xhc3NOYW1lID0gY3NzLnN1YnN0cigxKTtcbiAgICAgICAgZWxzZSBpZiAoY3NzWzBdID09ICcjJylcbiAgICAgICAgZWxtLmlkID0gY3NzLnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxtO1xufVxuXG5mdW5jdGlvbiBoaWRlQ29udGVudHMgKGRpdikge1xuICAgIGZvciAobGV0IGk9MDsgaTxkaXYuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXYuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXN0b3JlQ29udGVudHMgKGRpdikge1xuICAgIGZvciAobGV0IGk9MDsgaTxkaXYuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXYuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7YWRkQ2hpbGRFbGVtZW50LCBoaWRlQ29udGVudHMsIHJlc3RvcmVDb250ZW50c307IiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHBsYXllckJvYXJkLCBlbmVteUJvYXJkIH0gZnJvbSBcIi5cIjtcblxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGxldCBvdmVyID0gZmFsc2U7XG4gICAgbGV0IHAxID0gcGxheWVyKCdjYXJsb3MnLCAnaHVtYW4nKTtcbiAgICBsZXQgcDIgPSBwbGF5ZXIoJ2JvdCcsICdhaScpO1xuICAgIGxldCBwMUdhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xuICAgIGxldCBwMkdhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xuICAgIGxldCBwbGF5ZXJzID0gW3AxLCBwMl07XG4gICAgbGV0IGJvYXJkcyA9IFtwMUdhbWVib2FyZCwgcDJHYW1lYm9hcmRdO1xuICAgIGxldCBjdXJyZW50UCA9IDA7XG4gICAgbGV0IGN1cnJlbnRCID0gMTtcbiAgICBwMUdhbWVib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICBwbGF5ZXJCb2FyZC51cGRhdGVTaGlwcyhwMUdhbWVib2FyZCk7XG5cbiAgICBwMkdhbWVib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICBlbmVteUJvYXJkLnVwZGF0ZVNoaXBzKHAyR2FtZWJvYXJkKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVR1cm4oeCwgeSkge1xuICAgICAgICBpZiAob3ZlcikgcmV0dXJuO1xuICAgICAgICBpZiAocGxheWVyc1tjdXJyZW50UF0uYnJhaW4gPT0gJ2h1bWFuJykge1xuICAgICAgICAgICAgbGV0IHBsYXllZCA9IHBsYXllcnNbY3VycmVudFBdLnRha2VUdXJuKHgsIHksIGJvYXJkc1tjdXJyZW50Ql0pO1xuICAgICAgICAgICAgaWYgKHBsYXllZCkge1xuICAgICAgICAgICAgICAgIGVuZW15Qm9hcmQudXBkYXRlSGl0cyhib2FyZHNbY3VycmVudEJdKTtcbiAgICAgICAgICAgICAgICBvdmVyID0gY2hlY2tXaW5uZXIoKTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VUdXJucygpO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJzW2N1cnJlbnRQXS5icmFpbiA9PSAnYWknKSBoYW5kbGVUdXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwbGF5ZXJzW2N1cnJlbnRQXS50YWtlUmFuZG9tVHVybihib2FyZHNbY3VycmVudEJdKTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnVwZGF0ZUhpdHMoYm9hcmRzW2N1cnJlbnRCXSk7XG4gICAgICAgICAgICBvdmVyID0gY2hlY2tXaW5uZXIoKTtcbiAgICAgICAgICAgIGNoYW5nZVR1cm5zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1dpbm5lciAoKSB7XG4gICAgICAgIGlmIChib2FyZHNbY3VycmVudEJdLmFyZUFsbFN1bmsoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coe3dpbm5lcjogcGxheWVyc1tjdXJyZW50UF19KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUdXJucygpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRQID09IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRQID0gMTtcbiAgICAgICAgICAgIGN1cnJlbnRCID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRQID0gMDtcbiAgICAgICAgICAgIGN1cnJlbnRCID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBoYW5kbGVUdXJuIH1cbn1cblxuZXhwb3J0IHsgc3RhcnRHYW1lIH0iLCJpbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcHNcIjtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGxldCBjZWxscyA9IFtdO1xuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgY2xlYXJCb2FyZCgpO1xuXG4gICAgZnVuY3Rpb24gY2xlYXJCb2FyZCAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IDEwIDsgaSsrKXtcbiAgICAgICAgICAgIGNlbGxzW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCAxMCA7IGorKyl7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV1bal0gPSB7aGl0OiBmYWxzZSwgc2hpcDogLTJ9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgbGV0IGludmFsaWRDb29yZCA9IGZhbHNlO1xuICAgICAgICBpbnZhbGlkQ29vcmQgPSBjaGVja1ZhbGlkQ29vcmRpbmF0ZXMoeCwgeSwgb3JpZW50YXRpb24sIGxlbmd0aCk7XG4gICAgICAgIGlmIChpbnZhbGlkQ29vcmQgPT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICBsZXQgbmV3U2hpcCA9IHNoaXAobGVuZ3RoKTtcbiAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgbmV3U2hpcC5jb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkID0gW107XG4gICAgICAgIGxldCBhdXhYID0geDtcbiAgICAgICAgbGV0IGF1eFkgPSB5O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsc1t4XVt5XS5zaGlwID0gaTtcbiAgICAgICAgICAgIG5ld1NoaXAuY29vcmRpbmF0ZXNbaV0gPSBbeCwgeV07XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2Rvd24nKSB5Kys7XG4gICAgICAgICAgICBlbHNlIHgrKztcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWxsIGFkamFjZW50IGNlbGxzIHdpdGggLTFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggKyAyOyBpKyspIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WS0xKSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WC0xXVthdXhZLTFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYLTEsIGF1eFktMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgrMSwgYXV4WS0xKSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WCsxXVthdXhZLTFdLnNoaXAgPSAtMTsgXG4gICAgICAgICAgICAgICAgICAgbmV3U2hpcC5uZXh0VG9Db29yZC5wdXNoKFthdXhYKzEsIGF1eFktMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgsIGF1eFktMSkgJiYgaSA9PSAwIHx8IGNoZWNrVmFsaWRBdXhDb29yZChhdXhYLCBhdXhZLTEpICYmIGkgPT0gbGVuZ3RoKzEpe1xuICAgICAgICAgICAgICAgICAgIGNlbGxzW2F1eFhdW2F1eFktMV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgsIGF1eFktMV0pO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WC0xLCBhdXhZLTEpKXtcbiAgICAgICAgICAgICAgICAgICBjZWxsc1thdXhYLTFdW2F1eFktMV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgtMSwgYXV4WS0xXSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZihjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WC0xLCBhdXhZKzEpKXtcbiAgICAgICAgICAgICAgICAgICBjZWxsc1thdXhYLTFdW2F1eFkrMV0uc2hpcCA9IC0xOyBcbiAgICAgICAgICAgICAgICAgICBuZXdTaGlwLm5leHRUb0Nvb3JkLnB1c2goW2F1eFgtMSwgYXV4WSsxXSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZihjaGVja1ZhbGlkQXV4Q29vcmQoYXV4WC0xLCBhdXhZKSAmJiBpID09IDAgfHwgY2hlY2tWYWxpZEF1eENvb3JkKGF1eFgtMSwgYXV4WSkgJiYgaSA9PSBsZW5ndGgrMSl7XG4gICAgICAgICAgICAgICAgICAgY2VsbHNbYXV4WC0xXVthdXhZXS5zaGlwID0gLTE7IFxuICAgICAgICAgICAgICAgICAgIG5ld1NoaXAubmV4dFRvQ29vcmQucHVzaChbYXV4WC0xLCBhdXhZXSk7XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnZG93bicpIGF1eFkrKztcbiAgICAgICAgICAgIGVsc2UgYXV4WCsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tWYWxpZENvb3JkaW5hdGVzKHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKHggPiA5IHx8IHggPCAwIHx8IHkgPiA5IHx8IHkgPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09ICdkb3duJyAmJiB5K2xlbmd0aCA+IDkpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ3JpZ2h0JyAmJiB4K2xlbmd0aCA+IDkpIHJldHVybiB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYoY2VsbHNbeF1beV0uc2hpcCA+IC0yKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAnZG93bicpIHkrKztcbiAgICAgICAgICAgIGVsc2UgeCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkQXV4Q29vcmQgKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPiA5IHx8IHggPCAwIHx8IHkgPiA5IHx8IHkgPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7ICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2sgKHgsIHkpIHtcbiAgICAgICAgaWYgKGNlbGxzW3hdW3ldLmhpdCA9PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNlbGxzW3hdW3ldLmhpdCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0uY29vcmRpbmF0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcHNbaV0uY29vcmRpbmF0ZXNbal1bMF0gPT0geCAmJiBzaGlwc1tpXS5jb29yZGluYXRlc1tqXVsxXSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdChjZWxsc1t4XVt5XS5zaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya0FkamFjZW50Q2VsbHMoc2hpcHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFya0FkamFjZW50Q2VsbHMoc2hpcCkge1xuICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHJldHVybjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLm5leHRUb0Nvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsc1tzaGlwLm5leHRUb0Nvb3JkW2ldWzBdXVtzaGlwLm5leHRUb0Nvb3JkW2ldWzFdXS5oaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJlQWxsU3VuaygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFzaGlwc1tpXS5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSAoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzUsIDQsIDQsIDMsIDMsIDMsIDIsIDIsIDIsIDJdO1xuICAgICAgICBjb25zdCBtaXNzaW5nU2hpcHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Rocy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRyaWVzID0gNSAqIChpKzEpO1xuICAgICAgICAgICAgd2hpbGUgKHNoaXBzLmxlbmd0aCArIG1pc3NpbmdTaGlwcy5sZW5ndGggPD0gaSAmJiB0cmllcyA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9IHBpY2tSYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcCh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aHNbaV0pO1xuICAgICAgICAgICAgICAgIHRyaWVzLS07XG4gICAgICAgICAgICAgICAgaWYgKHRyaWVzID09IDAgJiYgc2hpcHMubGVuZ3RoICsgbWlzc2luZ1NoaXBzLmxlbmd0aCA8PSBpKSBtaXNzaW5nU2hpcHMucHVzaChzaGlwTGVuZ3Roc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWlzc2luZ1NoaXBzLmxlbmd0aCA+IDApIHNvbHZlTWlzc2luZ1NoaXBzKG1pc3NpbmdTaGlwcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGlja1JhbmRvbU9yaWVudGF0aW9uICgpIHtcbiAgICAgICAgbGV0IGF1eCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTtcbiAgICAgICAgaWYgKGF1eCA9PSAxKSByZXR1cm4gJ3JpZ2h0JztcbiAgICAgICAgZWxzZSByZXR1cm4gJ2Rvd24nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNvbHZlTWlzc2luZ1NoaXBzIChhcnIpIHtcbiAgICAgICAgbGV0IGF2YWlsYWJsZSA9IFtdO1xuICAgICAgICBsZXQgbGVuZ3RoID0gc2hpcHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCAxMCA7IGkrKyl7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCAxMCA7IGorKyl7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxzW2ldW2pdLnNoaXAgPT0gLTIpIGF2YWlsYWJsZS5wdXNoKFtpLCBqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXZhaWxhYmxlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKGF2YWlsYWJsZVtqXVswXSwgYXZhaWxhYmxlW2pdWzFdLCAncmlnaHQnLCBhcnJbaV0pO1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcChhdmFpbGFibGVbal1bMF0sIGF2YWlsYWJsZVtqXVsxXSwgJ2Rvd24nLCBhcnJbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPCBzaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gc2hpcHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpcHMubGVuZ3RoICE9IDEwKSB7XG4gICAgICAgICAgICBjbGVhckJvYXJkKCk7IFxuICAgICAgICAgICAgc2hpcHMgPSBbXTtcbiAgICAgICAgICAgIHBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2hpcEluZGV4KHgsIHkpIHtcbiAgICAgICAgaWYgKGNlbGxzW3hdW3ldLnNoaXAgPiAtMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHNoaXBzW2ldLmNvb3JkaW5hdGVzW2NlbGxzW3hdW3ldLnNoaXBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwc1tpXS5jb29yZGluYXRlc1tjZWxsc1t4XVt5XS5zaGlwXVswXSA9PSB4ICYmIHNoaXBzW2ldLmNvb3JkaW5hdGVzW2NlbGxzW3hdW3ldLnNoaXBdWzFdID09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpOyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2lsbFNoaXAgKHgsIHkpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gZ2V0U2hpcEluZGV4KHgsIHkpO1xuICAgICAgICBzaGlwc1tpbmRleF0uY29vcmRpbmF0ZXMuZm9yRWFjaCh2YWwgPT4gY2VsbHNbdmFsWzBdXVt2YWxbMV1dLnNoaXAgPSAtMik7XG4gICAgICAgIHNoaXBzW2luZGV4XS5uZXh0VG9Db29yZC5mb3JFYWNoKHZhbCA9PiBjZWxsc1t2YWxbMF1dW3ZhbFsxXV0uc2hpcCA9IC0yKTtcbiAgICAgICAgc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2hpcHNbaV0ubmV4dFRvQ29vcmQuZm9yRWFjaCh2YWwgPT4gY2VsbHNbdmFsWzBdXVt2YWxbMV1dLnNoaXAgPSAtMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHBsYWNlU2hpcCwgY2VsbHMsIHJlY2VpdmVBdHRhY2ssIHNoaXBzLCBhcmVBbGxTdW5rLCBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgICAgICAgICBraWxsU2hpcCB9XG59XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9XG5cbiIsImltcG9ydCB7IGNyZWF0ZUJvYXJkIH0gZnJvbSBcIi4vZG9tU3R1ZmZcIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBydW5TZXR1cCB9IGZyb20gXCIuL3NldHVwXCI7XG5cbmNvbnN0IHBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItYm9hcmQnKTtcbmNvbnN0IGVuZW15ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZW15LWJvYXJkJyk7XG5sZXQgcGxheWVyQm9hcmQgPSBjcmVhdGVCb2FyZChwbGF5ZXIsIGZhbHNlKTtcbmxldCBlbmVteUJvYXJkID0gY3JlYXRlQm9hcmQoZW5lbXksIHRydWUpO1xuXG5ydW5TZXR1cCgpO1xubGV0IGdhbWUgPSBzdGFydEdhbWUoKTtcblxuXG5leHBvcnQgeyBnYW1lLCBwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZCB9XG5cblxuLy9hZGQgc2V0dGluZ3MgbW9kdWxlXG4vL2FkZCBtZXNzYWdlcyBtb2R1bGVcbi8vYWRkIGRyYWcgYW5kIGRyb3BlIGZvciBwbGFjZW1lbnQgc2hpcHNcbi8vYWRkIGNvbXB1dGVyIHNtYXJ0IHBsYXlcbi8vYWRkIHNtYWxsIGRlbGF5IGZvciBjb21wdXRlciBwbGF5XG4vL2FkZCB0d28gcGxheWVyIG1vZGUiLCJjb25zdCBwbGF5ZXIgPSAobmFtZSwgYnJhaW4pID0+IHtcblxuICAgIGZ1bmN0aW9uIHRha2VUdXJuKHgsIHksIGdhbWVib2FyZCkge1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGFrZVJhbmRvbVR1cm4oZ2FtZWJvYXJkKSB7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBsZXQgdmFsaWRIaXQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgd2hpbGUodmFsaWRIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICB2YWxpZEhpdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdGFrZVR1cm4sIG5hbWUsIGJyYWluLCB0YWtlUmFuZG9tVHVybiB9XG59XG5cbmV4cG9ydCB7IHBsYXllciB9IiwiaW1wb3J0IHsgY3JlYXRlQm9hcmQgfSBmcm9tIFwiLi9kb21TdHVmZlwiO1xuaW1wb3J0IHsgYWRkQ2hpbGRFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwc1wiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dXAnKTtcbmxldCBkb21Cb2FyZDtcbmxldCBwbGFjZW1lbnRCb2FyZDtcbmxldCBpbmRleDtcbmxldCBsZW5ndGg7XG5sZXQgb3JpZW50YXRpb24gPSAnZG93bic7XG5sZXQgcmVtYWluaW5nID0gMDtcbmxldCBkcmFnSXRlbTtcbmxldCBkcmFnID0gZmFsc2U7XG5sZXQga2lsbCA9IGZhbHNlO1xubGV0IHBzID0gW107XG5cbmZ1bmN0aW9uIHJ1blNldHVwICgpIHtcbiAgICBjb25zdCBsZWZ0ID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2RpdicsICcubGVmdCcpO1xuICAgIGNvbnN0IGJvYXJkID0gYWRkQ2hpbGRFbGVtZW50KGxlZnQsICdkaXYnLCAnI3BsYWNlbWVudC1ib2FyZCcpO1xuICAgIGRvbUJvYXJkID0gY3JlYXRlQm9hcmQoYm9hcmQsIGZhbHNlKTtcbiAgICBkb21Cb2FyZC5hZGREcm9wRXZlbnRzKCk7XG4gICAgcGxhY2VtZW50Qm9hcmQgPSBnYW1lYm9hcmQoKTtcblxuICAgIGNvbnN0IHJpZ2h0ID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2RpdicsICcucmlnaHQnKTtcbiAgICBmb3IgKGxldCBpID0gNTsgaSA+IDE7IGktLSkge1xuICAgICAgICBsZXQgZGl2ID0gYWRkQ2hpbGRFbGVtZW50KHJpZ2h0LCAnZGl2JywgJy5zaGlwLWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgcCA9IGFkZENoaWxkRWxlbWVudChkaXYsICdwJywgJy5zaGlwcy1yZW1haW5pbmcnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IDYgLSBpO1xuICAgICAgICBwcy5wdXNoKHApO1xuICAgICAgICBsZXQgc2hpcCA9IGFkZENoaWxkRWxlbWVudChkaXYsICdkaXYnLCAnLnNoaXAnKTtcbiAgICAgICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIGluZGV4ID0gNSAtIGk7XG4gICAgICAgICAgICBsZW5ndGggPSBpO1xuICAgICAgICAgICAgZHJhZ0l0ZW0gPSBzaGlwO1xuICAgICAgICAgICAgZHJhZyA9IHRydWU7XG4gICAgICAgICAgICBraWxsID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiBkcmFnID0gZmFsc2UpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBhZGRDaGlsZEVsZW1lbnQoc2hpcCwgJ2RpdicsICcuY2VsbCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy9jaGVja3BvaW50XG5mdW5jdGlvbiBwbGFjZVNoaXAgKHgsIHkpIHtcbiAgICBwbGFjZW1lbnRCb2FyZC5wbGFjZVNoaXAoeCwgeSwgb3JpZW50YXRpb24sIGxlbmd0aCk7XG4gICAgZG9tQm9hcmQudXBkYXRlU2hpcHMocGxhY2VtZW50Qm9hcmQpO1xuICAgIGlmKGtpbGwpe1xuICAgICAgICBpZiAocGxhY2VtZW50Qm9hcmQuc2hpcHMubGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICAgICAgICBkb21Cb2FyZC5jcmVhdGVTaGlwRGl2KHgsIHksIG9yaWVudGF0aW9uLCBsZW5ndGgpOyAgICAgIFxuICAgICAgICB9IFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcHNbaW5kZXhdLnRleHRDb250ZW50ID0gK3BzW2luZGV4XS50ZXh0Q29udGVudCArIDE7IFxuICAgICAgICAgICAgcmVtYWluaW5nLS07XG4gICAgICAgIH0gXG4gICAgICAgIGRyYWdJdGVtLnJlbW92ZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmICgrcHNbaW5kZXhdLnRleHRDb250ZW50ID09IDApe1xuICAgICAgICBkcmFnSXRlbS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50Qm9hcmQuc2hpcHMubGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBwc1tpbmRleF0udGV4dENvbnRlbnQgPSArcHNbaW5kZXhdLnRleHRDb250ZW50IC0gMTtcbiAgICAgICAgZG9tQm9hcmQuY3JlYXRlU2hpcERpdih4LCB5LCBvcmllbnRhdGlvbiwgbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBraWxsID0gZmFsc2U7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGNoZWNrRHJhZyAoKSB7XG4gICAgcmV0dXJuIGRyYWc7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURyYWcgKCkge1xuICAgIGRyYWcgPT0gdHJ1ZSA/IGRyYWcgPSBmYWxzZTogZHJhZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHNhdmVWYXJpYWJsZXMoaW5kLCBsZW4sIGRyYSwgeEtpbGwsIHlLaWxsKSB7XG4gICAgaW5kZXggPSBpbmQ7XG4gICAgbGVuZ3RoID0gbGVuO1xuICAgIGtpbGwgPSB0cnVlO1xuICAgIGRyYWdJdGVtID0gZHJhO1xuICAgIHBsYWNlbWVudEJvYXJkLmtpbGxTaGlwKHhLaWxsLCB5S2lsbCk7XG4gICAgZG9tQm9hcmQudXBkYXRlU2hpcHMocGxhY2VtZW50Qm9hcmQpOyAgIFxufVxuXG5leHBvcnQgeyBydW5TZXR1cCwgcGxhY2VTaGlwLCBjaGVja0RyYWcsIHRvZ2dsZURyYWcsIHNhdmVWYXJpYWJsZXMgfVxuXG4iLCJjb25zdCBzaGlwID0gKGxlbmd0aCkgPT4ge1xuXG4gICAgbGV0IGNlbGxzID0gW107XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICBjZWxsc1tpXSA9ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdCAobnVtKSB7XG4gICAgICAgIGNlbGxzW251bV0gPSAnaGl0JztcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3VuayAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNlbGxzW2ldID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdW5rO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1bmsgPSB0cnVlO1xuICAgICAgICByZXR1cm4gc3VuaztcbiAgICB9XG5cbiAgICByZXR1cm4geyBoaXQsIGlzU3VuaywgY2VsbHMgfVxufVxuXG5leHBvcnQgeyBzaGlwIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==