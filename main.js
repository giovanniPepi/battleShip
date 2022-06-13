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
___CSS_LOADER_EXPORT___.push([module.id, "body,\nhtml {\n  margin: 0;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n}\n:root {\n  --slate0: #94a3b8;\n  --slate1: #64748b;\n  --slate2: #475569;\n  --semiWhite: #f1f5f9;\n  --amber1: #fffbeb;\n  --fontSizeSemiHighlight: 1.2rem;\n  --fontSizeHighlight: 1.8rem;\n  --borderRadiusBig: 2rem;\n  --borderRadiusSmall: 0.8rem;\n  --miniPadding: 0.5rem;\n  --bigPadding: 1.5rem;\n  --myBorder: 1px solid var(--slate0);\n  --normalGap: 1rem;\n  --megaGap: 10rem;\n  --shipBlocks: 4rem;\n  --shipBlocksBorder: #475569 solid 0.1rem;\n}\n.header {\n  background: var(--slate2);\n  color: var(--semiWhite);\n  height: 8vh;\n  font-size: var(--fontSizeHighlight);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nameForm {\n  position: relative;\n  align-self: center;\n  padding: var(--bigPadding);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 35vw;\n  min-height: 20vh;\n  gap: 1rem;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bolder;\n  background-color: var(--slate2);\n  color: var(--semiWhite);\n  box-shadow: 0 6px 10px 0 rgba(1, 1, 1, 0.2), 0 8px 30px 0 rgba(2, 2, 2, 0.25);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusBig);\n}\n/* removes excess margins */\n.nameForm > *,\n#playerName {\n  margin: 0;\n}\n#submitBtn,\n#playAgainButton {\n  max-width: 25vw;\n  min-height: 5vh;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bold;\n  color: var(--slate2);\n  background-color: var(--semiWhite);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  padding: var(--miniPadding);\n}\n.content {\n  height: 92vh;\n  background-color: var(--amber1);\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  gap: var(--megaGap);\n}\n.gameBoard,\n.enemy,\n.draggable,\n.player {\n  display: flex;\n  flex-direction: column;\n  align-content: space-around;\n  justify-content: center;\n}\n.enemy {\n  display: none;\n}\n.draggable {\n  flex-direction: row;\n  justify-content: space-around;\n  justify-self: flex-end;\n}\n.shipBlock {\n  background-color: rgb(89, 179, 71);\n  min-width: var(--shipBlocks);\n  min-height: var(--shipBlocks);\n  border: var(--shipBlocksBorder);\n}\n.cell {\n  border: var(--shipBlocksBorder);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: var(--shipBlocks);\n  min-width: var(--shipBlocks);\n}\n.playerBoard,\n.aiBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.hit {\n  background-color: tomato;\n  color: #5a5a5a;\n  font-size: large;\n  font-weight: bold;\n}\n.occupied {\n  background-color: rgb(89, 179, 71);\n}\n.missed {\n  background-color: lightblue;\n  color: #5a5a5a;\n  font-size: large;\n  font-weight: bold;\n}\n\n.modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  z-index: 9999;\n  padding-top: 130px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#modalContent p {\n  padding: 0;\n  margin: 0;\n}\n#nameInpt {\n  width: 100%;\n  height: 40px;\n  font-size: 20px;\n  color: indigo;\n  margin-top: 14px;\n  border: #5a5a5a 2px solid;\n  border-radius: 7px;\n}\n.endgame {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  z-index: 9999;\n  padding-top: 130px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#endGameContent {\n  position: relative;\n  margin: auto;\n  background-color: #fefefe;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  box-sizing: border-box;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 30px;\n  border: 1px solid #888;\n  border-radius: 15px;\n  height: 30%;\n  width: 340px;\n  font-size: 23px;\n  color: indigo;\n  font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,iBAAiB;EACjB,+BAA+B;EAC/B,2BAA2B;EAC3B,uBAAuB;EACvB,2BAA2B;EAC3B,qBAAqB;EACrB,oBAAoB;EACpB,mCAAmC;EACnC,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,wCAAwC;AAC1C;AACA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,mCAAmC;EACnC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,0BAA0B;EAC1B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,SAAS;EACT,uCAAuC;EACvC,mBAAmB;EACnB,+BAA+B;EAC/B,uBAAuB;EACvB,6EAA6E;EAC7E,uBAAuB;EACvB,qCAAqC;AACvC;AACA,2BAA2B;AAC3B;;EAEE,SAAS;AACX;AACA;;EAEE,eAAe;EACf,eAAe;EACf,uCAAuC;EACvC,iBAAiB;EACjB,oBAAoB;EACpB,kCAAkC;EAClC,uBAAuB;EACvB,uCAAuC;EACvC,2BAA2B;AAC7B;AACA;EACE,YAAY;EACZ,+BAA+B;EAC/B,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,eAAe;EACf,mBAAmB;AACrB;AACA;;;;EAIE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;AACA;EACE,mBAAmB;EACnB,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;EACE,kCAAkC;EAClC,4BAA4B;EAC5B,6BAA6B;EAC7B,+BAA+B;AACjC;AACA;EACE,+BAA+B;EAC/B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;EAC7B,4BAA4B;AAC9B;AACA;;EAEE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;AACA;EACE,wBAAwB;EACxB,cAAc;EACd,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,kCAAkC;AACpC;AACA;EACE,2BAA2B;EAC3B,cAAc;EACd,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,oCAAoC;AACtC;AACA;EACE,UAAU;EACV,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,oCAAoC;AACtC;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,sBAAsB;EACtB,4EAA4E;EAC5E,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,aAAa;EACb,iBAAiB;AACnB","sourcesContent":["body,\nhtml {\n  margin: 0;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n}\n:root {\n  --slate0: #94a3b8;\n  --slate1: #64748b;\n  --slate2: #475569;\n  --semiWhite: #f1f5f9;\n  --amber1: #fffbeb;\n  --fontSizeSemiHighlight: 1.2rem;\n  --fontSizeHighlight: 1.8rem;\n  --borderRadiusBig: 2rem;\n  --borderRadiusSmall: 0.8rem;\n  --miniPadding: 0.5rem;\n  --bigPadding: 1.5rem;\n  --myBorder: 1px solid var(--slate0);\n  --normalGap: 1rem;\n  --megaGap: 10rem;\n  --shipBlocks: 4rem;\n  --shipBlocksBorder: #475569 solid 0.1rem;\n}\n.header {\n  background: var(--slate2);\n  color: var(--semiWhite);\n  height: 8vh;\n  font-size: var(--fontSizeHighlight);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nameForm {\n  position: relative;\n  align-self: center;\n  padding: var(--bigPadding);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 35vw;\n  min-height: 20vh;\n  gap: 1rem;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bolder;\n  background-color: var(--slate2);\n  color: var(--semiWhite);\n  box-shadow: 0 6px 10px 0 rgba(1, 1, 1, 0.2), 0 8px 30px 0 rgba(2, 2, 2, 0.25);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusBig);\n}\n/* removes excess margins */\n.nameForm > *,\n#playerName {\n  margin: 0;\n}\n#submitBtn,\n#playAgainButton {\n  max-width: 25vw;\n  min-height: 5vh;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bold;\n  color: var(--slate2);\n  background-color: var(--semiWhite);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  padding: var(--miniPadding);\n}\n.content {\n  height: 92vh;\n  background-color: var(--amber1);\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  gap: var(--megaGap);\n}\n.gameBoard,\n.enemy,\n.draggable,\n.player {\n  display: flex;\n  flex-direction: column;\n  align-content: space-around;\n  justify-content: center;\n}\n.enemy {\n  display: none;\n}\n.draggable {\n  flex-direction: row;\n  justify-content: space-around;\n  justify-self: flex-end;\n}\n.shipBlock {\n  background-color: rgb(89, 179, 71);\n  min-width: var(--shipBlocks);\n  min-height: var(--shipBlocks);\n  border: var(--shipBlocksBorder);\n}\n.cell {\n  border: var(--shipBlocksBorder);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: var(--shipBlocks);\n  min-width: var(--shipBlocks);\n}\n.playerBoard,\n.aiBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.hit {\n  background-color: tomato;\n  color: #5a5a5a;\n  font-size: large;\n  font-weight: bold;\n}\n.occupied {\n  background-color: rgb(89, 179, 71);\n}\n.missed {\n  background-color: lightblue;\n  color: #5a5a5a;\n  font-size: large;\n  font-weight: bold;\n}\n\n.modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  z-index: 9999;\n  padding-top: 130px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#modalContent p {\n  padding: 0;\n  margin: 0;\n}\n#nameInpt {\n  width: 100%;\n  height: 40px;\n  font-size: 20px;\n  color: indigo;\n  margin-top: 14px;\n  border: #5a5a5a 2px solid;\n  border-radius: 7px;\n}\n.endgame {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  z-index: 9999;\n  padding-top: 130px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#endGameContent {\n  position: relative;\n  margin: auto;\n  background-color: #fefefe;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  box-sizing: border-box;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 30px;\n  border: 1px solid #888;\n  border-radius: 15px;\n  height: 30%;\n  width: 340px;\n  font-size: 23px;\n  color: indigo;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class GameBoard {
  constructor() {
    this.gameBoardArray = this.buildGameBoard();
    this.missedAttacks = [];
  }

  buildGameBoard() {
    const array = [];
    let arrayItem = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        arrayItem.push({ shipName: undefined, shipIndex: undefined });
      }
      array.push(arrayItem);
      // reset before next iteration
      arrayItem = [];
    }
    return array;
  }

  getGameBoard() {
    return this.gameBoardArray;
  }

  checkShipPlacement(length, x, y) {
    // conditions that extrapolate the gameboard
    const invalidConditions =
      x > 10 || x < 0 || y > 10 || y < 0 || y + length > 10;

    if (invalidConditions) return false;

    // checks existing ships
    for (let i = 0; i < y + length; i += 1) {
      if (this.gameBoardArray[i][x].shipName !== undefined) return false;
    }
    return true;
  }

  placeShip(ship, x, y) {
    // checks if the position is valid before placing
    if (this.checkShipPlacement(ship.getShipLength(), x, y)) {
      // fills ship array
      for (let i = 0; i < ship.getShipLength(); i += 1) {
        this.gameBoardArray[y + i][x].shipName = ship;
        this.gameBoardArray[y + i][x].shipIndex = i;
      }
    }
  }

  receiveAttack(x, y) {
    if (this.gameBoardArray[y][x].shipName === undefined) {
      this.missedAttacks.push({ x, y });
    } else {
      this.gameBoardArray[y][x].shipName.hit(
        this.gameBoardArray[y][x].shipIndex
      );
    }
  }

  getMissedAttacks() {
    return this.missedAttacks;
  }

  // changes boolean to true if any ship inside is not sunk
  checkAllSunk() {
    let key = true;
    this.gameBoardArray.forEach((item) => {
      item.forEach((e) => {
        if (e.shipName) {
          if (e.shipName.isSunk() === false) {
            key = false;
          }
        }
      });
    });
    return key;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Player {
  constructor(name) {
    this.name = name;
    this.turn = true;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  endTurn(player2) {
    if (this.turn === true) {
      this.turn = false;
      player2.startTurn();
    }
  }

  startTurn() {
    if (this.turn === false) {
      this.turn = true;
    }
  }

  checkTurn() {
    return this.turn;
  }

  // attacks place the hit and ends turn
  attack(x, y, player2, player2Board) {
    if (this.checkTurn()) {
      player2Board.receiveAttack(x, y);
      this.endTurn(player2);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.ship = this.buildShip();
  }

  buildShip() {
    const shipArray = [];
    let i = this.length;

    while (i > 0) {
      shipArray.push({ hit: false });
      i -= 1;
    }
    return shipArray;
  }

  getShip() {
    return this.ship;
  }

  getShipLength() {
    return this.ship.length;
  }

  hit(index) {
    this.ship[index].hit = true;
  }

  // eslint-disable-next-line class-methods-use-this
  checkHit(item) {
    if (item.hit === true) {
      return true;
    }
    return false;
  }

  isSunk() {
    if (this.ship.every(this.checkHit)) {
      return true;
    }
    return false;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/Player.js");


class AI extends _Player__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(name, enemy, enemyBoard) {
    super(name, enemyBoard);
    this.turn = false;
    this.enemyPlayer = enemy;
    this.enemyBoard = enemyBoard;
    this.attackArray = [];
  }

  generateRandomAttack() {
    if (this.checkTurn()) {
      const numberObj = { x: undefined, y: undefined };

      // loops forever until it finds a valid attack
      while (typeof x === 'undefined') {
        const firstNumber = Math.floor(Math.random() * 10);
        const secondNumber = Math.floor(Math.random() * 10);
        numberObj.x = firstNumber;
        numberObj.y = secondNumber;

        // checks if move has already been played
        const previousAttack = this.attackArray.some(
          (e) => e.x === numberObj.x && e.y === numberObj.y
        );

        if (!previousAttack) {
          this.attackArray.push(numberObj);
          this.attack(
            numberObj.x,
            numberObj.y,
            this.enemyPlayer,
            this.enemyBoard
          );
          break;
        }
      }
    }
  }

  getAttackArray() {
    return this.attackArray;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AI);


/***/ }),

/***/ "./src/buildGame.js":
/*!**************************!*\
  !*** ./src/buildGame.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameBoard */ "./src/GameBoard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ai */ "./src/ai.js");
/* harmony import */ var _placeAIShip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeAIShip */ "./src/placeAIShip.js");
/* harmony import */ var _domQueries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domQueries */ "./src/domQueries.js");
/* harmony import */ var _makeDraggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./makeDraggable */ "./src/makeDraggable.js");
/* harmony import */ var _updateDisplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateDisplay */ "./src/updateDisplay.js");
/* harmony import */ var _endgame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./endgame */ "./src/endgame.js");










const buildGame = () => {
  // gameboards
  const playerBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const aiBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_1__["default"]();

  // players
  const player = new _Player__WEBPACK_IMPORTED_MODULE_2__["default"]();
  const ai = new _ai__WEBPACK_IMPORTED_MODULE_3__["default"]('AI', player, playerBoard);

  // playerShips
  const carrier = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](5);
  const battleship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](4);
  const destroyer = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](3);
  const submarine = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](3);
  const patrolboat = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](2);

  // AI Ships
  const AIcarrier = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](5);
  const AIbattleship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](4);
  const AIdestroyer = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](3);
  const AIsubmarine = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](3);
  const AIpatrolboat = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](2);

  // makes player boats draggable
  (0,_makeDraggable__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().battleshipHTML);
  (0,_makeDraggable__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().carrierHTML);
  (0,_makeDraggable__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().submarinehipHTML);
  (0,_makeDraggable__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().destroyerHTML);
  (0,_makeDraggable__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().patrolboatHTML);

  // places AI Ships
  (0,_placeAIShip__WEBPACK_IMPORTED_MODULE_4__["default"])(AIcarrier, aiBoard);
  (0,_placeAIShip__WEBPACK_IMPORTED_MODULE_4__["default"])(AIbattleship, aiBoard);
  (0,_placeAIShip__WEBPACK_IMPORTED_MODULE_4__["default"])(AIdestroyer, aiBoard);
  (0,_placeAIShip__WEBPACK_IMPORTED_MODULE_4__["default"])(AIsubmarine, aiBoard);
  (0,_placeAIShip__WEBPACK_IMPORTED_MODULE_4__["default"])(AIpatrolboat, aiBoard);

  // attacks
  const attack = (e) => {
    const x = e.getAttribute('data-x');
    const y = e.getAttribute('data-y');
    player.attack(x, y, ai, aiBoard);
    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_7__["default"])('aiBoard', aiBoard);
    e.style.pointerEvents = 'none';

    // checks if all ships are met and calls for winner before each round
    if (aiBoard.checkAllSunk()) {
      (0,_endgame__WEBPACK_IMPORTED_MODULE_8__["default"])(player.getName());
    }

    ai.generateRandomAttack();
    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_7__["default"])('playerBoard', playerBoard);

    if (playerBoard.checkAllSunk()) {
      (0,_endgame__WEBPACK_IMPORTED_MODULE_8__["default"])('AI');
    }
  };

  // dropShip - through dragging
  const dropShip = (e) => {
    const data = e.dataTransfer.getData('text');
    const x = parseInt(e.target.getAttribute('data-x'), 10);
    const y = parseInt(e.target.getAttribute('data-y'), 10);

    // helper function
    const setBoardToDom = (boat) => {
      playerBoard.placeShip(boat, x, y);
      (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_7__["default"])('playerBoard', playerBoard);
      const ship = document.querySelector(`#${data}`);
      (0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().draggable.removeChild(ship);
      if ((0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().draggable.childNodes.length <= 6) {
        (0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().draggable.style.display = 'none';
        (0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().enemy.style.display = 'flex';
      }
    };

    switch (data) {
      case 'battleship':
        if (playerBoard.checkShipPlacement(battleship.length, x, y)) {
          setBoardToDom(battleship);
        }
        break;
      case 'carrier':
        if (playerBoard.checkShipPlacement(carrier.length, x, y)) {
          setBoardToDom(carrier);
        }
        break;
      case 'submarine':
        if (playerBoard.checkShipPlacement(submarine.length, x, y)) {
          setBoardToDom(submarine);
        }
        break;
      case 'destroyer':
        if (playerBoard.checkShipPlacement(destroyer.length, x, y)) {
          setBoardToDom(destroyer);
        }
        break;
      case 'patrolboat':
        if (playerBoard.checkShipPlacement(patrolboat.length, x, y)) {
          setBoardToDom(patrolboat);
        }
        break;
      default:
        console.log('error in data');
    }
  };

  // places boards on DOM
  const buildDOMboard = (boardName) => {
    const boardClass = document.querySelector(`.${boardName}`);
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-x', j);
        cell.setAttribute('data-y', i);

        // adds attacking through DOM
        if (boardName === 'aiBoard') {
          cell.addEventListener('click', (e) => {
            attack(e.target);
          });
        } else if (boardName === 'playerBoard') {
          cell.addEventListener('dragover', (e) => {
            e.preventDefault();
          });
          cell.addEventListener('drop', (e) => {
            e.preventDefault();
            dropShip(e);
          });
        }
        boardClass.appendChild(cell);
      }
    }
  };

  buildDOMboard('playerBoard');
  buildDOMboard('aiBoard');

  // nameSetter
  (0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().nameInpt.value || 'Player 1';
    player.setName(name);
    (0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().playerName.textContent = `${player.getName()}'s board`;
    (0,_domQueries__WEBPACK_IMPORTED_MODULE_5__["default"])().nameModal.style.display = 'none';
  });

  return {
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolboat,
    AIcarrier,
    AIbattleship,
    AIdestroyer,
    AIsubmarine,
    AIpatrolboat,
    playerBoard,
    aiBoard,
    player,
    ai
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildGame);


/***/ }),

/***/ "./src/createEventListeners.js":
/*!*************************************!*\
  !*** ./src/createEventListeners.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domQueries */ "./src/domQueries.js");
/* harmony import */ var _buildGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildGame */ "./src/buildGame.js");



const createEventListeners = () => {
  // reloader
  (0,_domQueries__WEBPACK_IMPORTED_MODULE_0__["default"])().playAgainButton.addEventListener('click', () => {
    window.location.reload();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEventListeners);


/***/ }),

/***/ "./src/domQueries.js":
/*!***************************!*\
  !*** ./src/domQueries.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domQueries = () => {
  const battleshipHTML = document.querySelector('#battleship');
  const carrierHTML = document.querySelector('#carrier');
  const submarineHTML = document.querySelector('#submarine');
  const destroyerHTML = document.querySelector('#destroyer');
  const patrolboatHTML = document.querySelector('#patrolboat');
  const draggable = document.querySelector('.draggable');
  const enemy = document.querySelector('.enemy');
  const nameModal = document.querySelector('.modal');
  const nameInpt = document.querySelector('#nameInpt');
  const nameForm = document.querySelector('.nameForm');
  const playerName = document.querySelector('#playerName');
  const endGameContent = document.querySelector('#endGameContent');
  const endGameModal = document.querySelector('.endgame');
  const playAgainButton = document.querySelector('#playAgainButton');
  const winnerText = document.querySelector('#winnerText');

  return {
    battleshipHTML,
    carrierHTML,
    submarineHTML,
    destroyerHTML,
    patrolboatHTML,
    draggable,
    enemy,
    nameModal,
    nameInpt,
    nameForm,
    playerName,
    endGameContent,
    endGameModal,
    playAgainButton,
    winnerText
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domQueries);


/***/ }),

/***/ "./src/endgame.js":
/*!************************!*\
  !*** ./src/endgame.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domQueries */ "./src/domQueries.js");


// calls for winner
const endGame = (winner) => {
  (0,_domQueries__WEBPACK_IMPORTED_MODULE_0__["default"])().endGameModal.style.display = 'block';
  (0,_domQueries__WEBPACK_IMPORTED_MODULE_0__["default"])().winnerText.textContent = `${winner} is the winner!`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endGame);


/***/ }),

/***/ "./src/makeDraggable.js":
/*!******************************!*\
  !*** ./src/makeDraggable.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeDraggable = () => {
  // DOM
  const battleShip = document.querySelector('#battleship');
  const carrier = document.querySelector('#carrier');
  const submarine = document.querySelector('#submarine');
  const destroyer = document.querySelector('#destroyer');
  const patrolboat = document.querySelector('#patrolboat');

  const setDragger = (element) => {
    element.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
    });
  };

  setDragger(battleShip);
  setDragger(carrier);
  setDragger(submarine);
  setDragger(destroyer);
  setDragger(patrolboat);

  return {
    battleShip,
    carrier,
    submarine,
    destroyer,
    patrolboat
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeDraggable);


/***/ }),

/***/ "./src/placeAIShip.js":
/*!****************************!*\
  !*** ./src/placeAIShip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const placeAIShip = (ship, AIBoard) => {
  while (typeof x === 'undefined') {
    let numberArray = [];
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    numberArray = [firstNumber, secondNumber];

    if (
      AIBoard.checkShipPlacement(
        ship.getShipLength(),
        numberArray[0],
        numberArray[1]
      )
    ) {
      AIBoard.placeShip(ship, numberArray[0], numberArray[1]);
      break;
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeAIShip);


/***/ }),

/***/ "./src/updateDisplay.js":
/*!******************************!*\
  !*** ./src/updateDisplay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// updates DOM
const updateDisplay = (boardName, board) => {
  const boardArray = board.getGameBoard();
  const missed = board.getMissedAttacks();

  boardArray.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell.shipName) {
        if (
          cell.shipName.checkHit(cell.shipName.getShip()[cell.shipIndex]) ===
          true
        ) {
          const selectedCell = document.querySelector(
            `.${boardName} [data-x="${x}"][data-y ="${y}"`
          );
          selectedCell.textContent = 'X';
          selectedCell.classList.add('hit');
          selectedCell.classList.remove('occupied');
        } else if (
          cell.shipName.checkHit(cell.shipName.getShip()[cell.shipIndex]) ===
          false
        ) {
          if (boardName === 'playerBoard') {
            const selectedCell = document.querySelector(
              `.${boardName} [data-x="${x}"][data-y ="${y}"]`
            );
            selectedCell.classList.add('occupied');
          }
        }
      }
    });
  });
  missed.forEach((attack) => {
    const selectedCell = document.querySelector(
      `.${boardName} [data-x="${attack.x}"][data-y ="${attack.y}"]`
    );
    selectedCell.textContent = 'X';
    selectedCell.classList.add('missed');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDisplay);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _buildGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildGame */ "./src/buildGame.js");
/* harmony import */ var _createEventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createEventListeners */ "./src/createEventListeners.js");




const main = (() => {
  // initializer
  (0,_buildGame__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_createEventListeners__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsdURBQXVELGNBQWMsR0FBRyxRQUFRLGtCQUFrQiwyQkFBMkIsR0FBRyxTQUFTLHNCQUFzQixzQkFBc0Isc0JBQXNCLHlCQUF5QixzQkFBc0Isb0NBQW9DLGdDQUFnQyw0QkFBNEIsZ0NBQWdDLDBCQUEwQix5QkFBeUIsd0NBQXdDLHNCQUFzQixxQkFBcUIsdUJBQXVCLDZDQUE2QyxHQUFHLFdBQVcsOEJBQThCLDRCQUE0QixnQkFBZ0Isd0NBQXdDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsYUFBYSx1QkFBdUIsdUJBQXVCLCtCQUErQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLHFCQUFxQixjQUFjLDRDQUE0Qyx3QkFBd0Isb0NBQW9DLDRCQUE0QixrRkFBa0YsNEJBQTRCLDBDQUEwQyxHQUFHLDZEQUE2RCxjQUFjLEdBQUcsaUNBQWlDLG9CQUFvQixvQkFBb0IsNENBQTRDLHNCQUFzQix5QkFBeUIsdUNBQXVDLDRCQUE0Qiw0Q0FBNEMsZ0NBQWdDLEdBQUcsWUFBWSxpQkFBaUIsb0NBQW9DLGtCQUFrQix3QkFBd0Isa0NBQWtDLG9CQUFvQix3QkFBd0IsR0FBRyw4Q0FBOEMsa0JBQWtCLDJCQUEyQixnQ0FBZ0MsNEJBQTRCLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyxjQUFjLHdCQUF3QixrQ0FBa0MsMkJBQTJCLEdBQUcsY0FBYyx1Q0FBdUMsaUNBQWlDLGtDQUFrQyxvQ0FBb0MsR0FBRyxTQUFTLG9DQUFvQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixrQ0FBa0MsaUNBQWlDLEdBQUcsMkJBQTJCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLEdBQUcsUUFBUSw2QkFBNkIsbUJBQW1CLHFCQUFxQixzQkFBc0IsR0FBRyxhQUFhLHVDQUF1QyxHQUFHLFdBQVcsZ0NBQWdDLG1CQUFtQixxQkFBcUIsc0JBQXNCLEdBQUcsWUFBWSxrQkFBa0Isd0JBQXdCLDRCQUE0QixvQkFBb0Isa0JBQWtCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLHlDQUF5QyxHQUFHLG1CQUFtQixlQUFlLGNBQWMsR0FBRyxhQUFhLGdCQUFnQixpQkFBaUIsb0JBQW9CLGtCQUFrQixxQkFBcUIsOEJBQThCLHVCQUF1QixHQUFHLFlBQVksa0JBQWtCLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLGtCQUFrQix1QkFBdUIsaUJBQWlCLGdCQUFnQix5Q0FBeUMsR0FBRyxtQkFBbUIsdUJBQXVCLGlCQUFpQiw4QkFBOEIsa0JBQWtCLDJCQUEyQixrQ0FBa0Msd0JBQXdCLDJCQUEyQixpRkFBaUYsa0JBQWtCLDJCQUEyQix3QkFBd0IsZ0JBQWdCLGlCQUFpQixvQkFBb0Isa0JBQWtCLHNCQUFzQixHQUFHLFNBQVMsaUZBQWlGLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sUUFBUSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLHVDQUF1QyxjQUFjLEdBQUcsUUFBUSxrQkFBa0IsMkJBQTJCLEdBQUcsU0FBUyxzQkFBc0Isc0JBQXNCLHNCQUFzQix5QkFBeUIsc0JBQXNCLG9DQUFvQyxnQ0FBZ0MsNEJBQTRCLGdDQUFnQywwQkFBMEIseUJBQXlCLHdDQUF3QyxzQkFBc0IscUJBQXFCLHVCQUF1Qiw2Q0FBNkMsR0FBRyxXQUFXLDhCQUE4Qiw0QkFBNEIsZ0JBQWdCLHdDQUF3QyxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGFBQWEsdUJBQXVCLHVCQUF1QiwrQkFBK0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixxQkFBcUIsY0FBYyw0Q0FBNEMsd0JBQXdCLG9DQUFvQyw0QkFBNEIsa0ZBQWtGLDRCQUE0QiwwQ0FBMEMsR0FBRyw2REFBNkQsY0FBYyxHQUFHLGlDQUFpQyxvQkFBb0Isb0JBQW9CLDRDQUE0QyxzQkFBc0IseUJBQXlCLHVDQUF1Qyw0QkFBNEIsNENBQTRDLGdDQUFnQyxHQUFHLFlBQVksaUJBQWlCLG9DQUFvQyxrQkFBa0Isd0JBQXdCLGtDQUFrQyxvQkFBb0Isd0JBQXdCLEdBQUcsOENBQThDLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLDRCQUE0QixHQUFHLFVBQVUsa0JBQWtCLEdBQUcsY0FBYyx3QkFBd0Isa0NBQWtDLDJCQUEyQixHQUFHLGNBQWMsdUNBQXVDLGlDQUFpQyxrQ0FBa0Msb0NBQW9DLEdBQUcsU0FBUyxvQ0FBb0Msa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0NBQWtDLGlDQUFpQyxHQUFHLDJCQUEyQixrQkFBa0IsMkNBQTJDLHdDQUF3QyxHQUFHLFFBQVEsNkJBQTZCLG1CQUFtQixxQkFBcUIsc0JBQXNCLEdBQUcsYUFBYSx1Q0FBdUMsR0FBRyxXQUFXLGdDQUFnQyxtQkFBbUIscUJBQXFCLHNCQUFzQixHQUFHLFlBQVksa0JBQWtCLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLGtCQUFrQix1QkFBdUIsaUJBQWlCLGdCQUFnQix5Q0FBeUMsR0FBRyxtQkFBbUIsZUFBZSxjQUFjLEdBQUcsYUFBYSxnQkFBZ0IsaUJBQWlCLG9CQUFvQixrQkFBa0IscUJBQXFCLDhCQUE4Qix1QkFBdUIsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0IsNEJBQTRCLG9CQUFvQixrQkFBa0IsdUJBQXVCLGlCQUFpQixnQkFBZ0IseUNBQXlDLEdBQUcsbUJBQW1CLHVCQUF1QixpQkFBaUIsOEJBQThCLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHdCQUF3QiwyQkFBMkIsaUZBQWlGLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGdCQUFnQixpQkFBaUIsb0JBQW9CLGtCQUFrQixzQkFBc0IsR0FBRyxxQkFBcUI7QUFDaHhUO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5Qix5QkFBeUIsMkNBQTJDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEJBQTBCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxNQUFNO0FBQ3RDLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0V6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4Q3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NVOztBQUU5QixpQkFBaUIsK0NBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNRO0FBQ1U7QUFDTjtBQUNSO0FBQ2tCO0FBQ0Y7QUFDTTtBQUNBO0FBQ1o7O0FBRWhDO0FBQ0E7QUFDQSwwQkFBMEIsa0RBQVM7QUFDbkMsc0JBQXNCLGtEQUFTOztBQUUvQjtBQUNBLHFCQUFxQiwrQ0FBTTtBQUMzQixpQkFBaUIsMkNBQUU7O0FBRW5CO0FBQ0Esc0JBQXNCLDZDQUFJO0FBQzFCLHlCQUF5Qiw2Q0FBSTtBQUM3Qix3QkFBd0IsNkNBQUk7QUFDNUIsd0JBQXdCLDZDQUFJO0FBQzVCLHlCQUF5Qiw2Q0FBSTs7QUFFN0I7QUFDQSx3QkFBd0IsNkNBQUk7QUFDNUIsMkJBQTJCLDZDQUFJO0FBQy9CLDBCQUEwQiw2Q0FBSTtBQUM5QiwwQkFBMEIsNkNBQUk7QUFDOUIsMkJBQTJCLDZDQUFJOztBQUUvQjtBQUNBLEVBQUUsMERBQWEsQ0FBQyx1REFBVTtBQUMxQixFQUFFLDBEQUFhLENBQUMsdURBQVU7QUFDMUIsRUFBRSwwREFBYSxDQUFDLHVEQUFVO0FBQzFCLEVBQUUsMERBQWEsQ0FBQyx1REFBVTtBQUMxQixFQUFFLDBEQUFhLENBQUMsdURBQVU7O0FBRTFCO0FBQ0EsRUFBRSx3REFBVztBQUNiLEVBQUUsd0RBQVc7QUFDYixFQUFFLHdEQUFXO0FBQ2IsRUFBRSx3REFBVztBQUNiLEVBQUUsd0RBQVc7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakI7O0FBRUE7QUFDQTtBQUNBLE1BQU0sb0RBQU87QUFDYjs7QUFFQTtBQUNBLElBQUksMERBQWE7O0FBRWpCO0FBQ0EsTUFBTSxvREFBTztBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFhO0FBQ25CLDhDQUE4QyxLQUFLO0FBQ25ELE1BQU0sdURBQVU7QUFDaEIsVUFBVSx1REFBVTtBQUNwQixRQUFRLHVEQUFVO0FBQ2xCLFFBQVEsdURBQVU7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCxVQUFVO0FBQzVELG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHVEQUFVO0FBQ1o7QUFDQSxpQkFBaUIsdURBQVU7QUFDM0I7QUFDQSxJQUFJLHVEQUFVLCtCQUErQixpQkFBaUI7QUFDOUQsSUFBSSx1REFBVTtBQUNkLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaExhO0FBQ0Y7O0FBRXBDO0FBQ0E7QUFDQSxFQUFFLHVEQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1ZwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENZOztBQUV0QztBQUNBO0FBQ0EsRUFBRSx1REFBVTtBQUNaLEVBQUUsdURBQVUsK0JBQStCLFFBQVE7QUFDbkQ7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNSdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdCN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BCM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXLFdBQVcsRUFBRSxjQUFjLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixXQUFXLFdBQVcsRUFBRSxjQUFjLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLFVBQVUsV0FBVyxXQUFXLFNBQVMsY0FBYyxTQUFTO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7VUN6QzdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FnQztBQUNJO0FBQ3NCOztBQUUxRDtBQUNBO0FBQ0EsRUFBRSxzREFBUztBQUNYLEVBQUUsaUVBQW9CO0FBQ3RCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYnVpbGRHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3JlYXRlRXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21RdWVyaWVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW5kZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21ha2VEcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGFjZUFJU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VwZGF0ZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbjpyb290IHtcXG4gIC0tc2xhdGUwOiAjOTRhM2I4O1xcbiAgLS1zbGF0ZTE6ICM2NDc0OGI7XFxuICAtLXNsYXRlMjogIzQ3NTU2OTtcXG4gIC0tc2VtaVdoaXRlOiAjZjFmNWY5O1xcbiAgLS1hbWJlcjE6ICNmZmZiZWI7XFxuICAtLWZvbnRTaXplU2VtaUhpZ2hsaWdodDogMS4ycmVtO1xcbiAgLS1mb250U2l6ZUhpZ2hsaWdodDogMS44cmVtO1xcbiAgLS1ib3JkZXJSYWRpdXNCaWc6IDJyZW07XFxuICAtLWJvcmRlclJhZGl1c1NtYWxsOiAwLjhyZW07XFxuICAtLW1pbmlQYWRkaW5nOiAwLjVyZW07XFxuICAtLWJpZ1BhZGRpbmc6IDEuNXJlbTtcXG4gIC0tbXlCb3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zbGF0ZTApO1xcbiAgLS1ub3JtYWxHYXA6IDFyZW07XFxuICAtLW1lZ2FHYXA6IDEwcmVtO1xcbiAgLS1zaGlwQmxvY2tzOiA0cmVtO1xcbiAgLS1zaGlwQmxvY2tzQm9yZGVyOiAjNDc1NTY5IHNvbGlkIDAuMXJlbTtcXG59XFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbGF0ZTIpO1xcbiAgY29sb3I6IHZhcigtLXNlbWlXaGl0ZSk7XFxuICBoZWlnaHQ6IDh2aDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVIaWdobGlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hbWVGb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLWJpZ1BhZGRpbmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDM1dnc7XFxuICBtaW4taGVpZ2h0OiAyMHZoO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlMik7XFxuICBjb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKDEsIDEsIDEsIDAuMiksIDAgOHB4IDMwcHggMCByZ2JhKDIsIDIsIDIsIDAuMjUpO1xcbiAgYm9yZGVyOiB2YXIoLS1teUJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXNCaWcpO1xcbn1cXG4vKiByZW1vdmVzIGV4Y2VzcyBtYXJnaW5zICovXFxuLm5hbWVGb3JtID4gKixcXG4jcGxheWVyTmFtZSB7XFxuICBtYXJnaW46IDA7XFxufVxcbiNzdWJtaXRCdG4sXFxuI3BsYXlBZ2FpbkJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDI1dnc7XFxuICBtaW4taGVpZ2h0OiA1dmg7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGJvcmRlcjogdmFyKC0tbXlCb3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzU21hbGwpO1xcbiAgcGFkZGluZzogdmFyKC0tbWluaVBhZGRpbmcpO1xcbn1cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDkydmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbWJlcjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogdmFyKC0tbWVnYUdhcCk7XFxufVxcbi5nYW1lQm9hcmQsXFxuLmVuZW15LFxcbi5kcmFnZ2FibGUsXFxuLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZW5lbXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmRyYWdnYWJsZSB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbn1cXG4uc2hpcEJsb2NrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4OSwgMTc5LCA3MSk7XFxuICBtaW4td2lkdGg6IHZhcigtLXNoaXBCbG9ja3MpO1xcbiAgbWluLWhlaWdodDogdmFyKC0tc2hpcEJsb2Nrcyk7XFxuICBib3JkZXI6IHZhcigtLXNoaXBCbG9ja3NCb3JkZXIpO1xcbn1cXG4uY2VsbCB7XFxuICBib3JkZXI6IHZhcigtLXNoaXBCbG9ja3NCb3JkZXIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IHZhcigtLXNoaXBCbG9ja3MpO1xcbiAgbWluLXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzKTtcXG59XFxuLnBsYXllckJvYXJkLFxcbi5haUJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcXG4gIGNvbG9yOiAjNWE1YTVhO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ub2NjdXBpZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg5LCAxNzksIDcxKTtcXG59XFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBjb2xvcjogIzVhNWE1YTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcbiNtb2RhbENvbnRlbnQgcCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4jbmFtZUlucHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogaW5kaWdvO1xcbiAgbWFyZ2luLXRvcDogMTRweDtcXG4gIGJvcmRlcjogIzVhNWE1YSAycHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcbi5lbmRnYW1lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcbiNlbmRHYW1lQ29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGhlaWdodDogMzAlO1xcbiAgd2lkdGg6IDM0MHB4O1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbiAgY29sb3I6IGluZGlnbztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGlCQUFp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IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG46cm9vdCB7XFxuICAtLXNsYXRlMDogIzk0YTNiODtcXG4gIC0tc2xhdGUxOiAjNjQ3NDhiO1xcbiAgLS1zbGF0ZTI6ICM0NzU1Njk7XFxuICAtLXNlbWlXaGl0ZTogI2YxZjVmOTtcXG4gIC0tYW1iZXIxOiAjZmZmYmViO1xcbiAgLS1mb250U2l6ZVNlbWlIaWdobGlnaHQ6IDEuMnJlbTtcXG4gIC0tZm9udFNpemVIaWdobGlnaHQ6IDEuOHJlbTtcXG4gIC0tYm9yZGVyUmFkaXVzQmlnOiAycmVtO1xcbiAgLS1ib3JkZXJSYWRpdXNTbWFsbDogMC44cmVtO1xcbiAgLS1taW5pUGFkZGluZzogMC41cmVtO1xcbiAgLS1iaWdQYWRkaW5nOiAxLjVyZW07XFxuICAtLW15Qm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2xhdGUwKTtcXG4gIC0tbm9ybWFsR2FwOiAxcmVtO1xcbiAgLS1tZWdhR2FwOiAxMHJlbTtcXG4gIC0tc2hpcEJsb2NrczogNHJlbTtcXG4gIC0tc2hpcEJsb2Nrc0JvcmRlcjogIzQ3NTU2OSBzb2xpZCAwLjFyZW07XFxufVxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2xhdGUyKTtcXG4gIGNvbG9yOiB2YXIoLS1zZW1pV2hpdGUpO1xcbiAgaGVpZ2h0OiA4dmg7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplSGlnaGxpZ2h0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYW1lRm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1iaWdQYWRkaW5nKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAzNXZ3O1xcbiAgbWluLWhlaWdodDogMjB2aDtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgY29sb3I6IHZhcigtLXNlbWlXaGl0ZSk7XFxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgcmdiYSgxLCAxLCAxLCAwLjIpLCAwIDhweCAzMHB4IDAgcmdiYSgyLCAyLCAyLCAwLjI1KTtcXG4gIGJvcmRlcjogdmFyKC0tbXlCb3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzQmlnKTtcXG59XFxuLyogcmVtb3ZlcyBleGNlc3MgbWFyZ2lucyAqL1xcbi5uYW1lRm9ybSA+ICosXFxuI3BsYXllck5hbWUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4jc3VibWl0QnRuLFxcbiNwbGF5QWdhaW5CdXR0b24ge1xcbiAgbWF4LXdpZHRoOiAyNXZ3O1xcbiAgbWluLWhlaWdodDogNXZoO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tc2xhdGUyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbWlXaGl0ZSk7XFxuICBib3JkZXI6IHZhcigtLW15Qm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1c1NtYWxsKTtcXG4gIHBhZGRpbmc6IHZhcigtLW1pbmlQYWRkaW5nKTtcXG59XFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiA5MnZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXIxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IHZhcigtLW1lZ2FHYXApO1xcbn1cXG4uZ2FtZUJvYXJkLFxcbi5lbmVteSxcXG4uZHJhZ2dhYmxlLFxcbi5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmVuZW15IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5kcmFnZ2FibGUge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuLnNoaXBCbG9jayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODksIDE3OSwgNzEpO1xcbiAgbWluLXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzKTtcXG4gIG1pbi1oZWlnaHQ6IHZhcigtLXNoaXBCbG9ja3MpO1xcbiAgYm9yZGVyOiB2YXIoLS1zaGlwQmxvY2tzQm9yZGVyKTtcXG59XFxuLmNlbGwge1xcbiAgYm9yZGVyOiB2YXIoLS1zaGlwQmxvY2tzQm9yZGVyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiB2YXIoLS1zaGlwQmxvY2tzKTtcXG4gIG1pbi13aWR0aDogdmFyKC0tc2hpcEJsb2Nrcyk7XFxufVxcbi5wbGF5ZXJCb2FyZCxcXG4uYWlCb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XFxuICBjb2xvcjogIzVhNWE1YTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLm9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4OSwgMTc5LCA3MSk7XFxufVxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgY29sb3I6ICM1YTVhNWE7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHBhZGRpbmctdG9wOiAxMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4jbW9kYWxDb250ZW50IHAge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuI25hbWVJbnB0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IGluZGlnbztcXG4gIG1hcmdpbi10b3A6IDE0cHg7XFxuICBib3JkZXI6ICM1YTVhNWEgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG4uZW5kZ2FtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHBhZGRpbmctdG9wOiAxMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4jZW5kR2FtZUNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiAzNDBweDtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGNvbG9yOiBpbmRpZ287XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVCb2FyZEFycmF5ID0gdGhpcy5idWlsZEdhbWVCb2FyZCgpO1xuICAgIHRoaXMubWlzc2VkQXR0YWNrcyA9IFtdO1xuICB9XG5cbiAgYnVpbGRHYW1lQm9hcmQoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgYXJyYXlJdGVtID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgYXJyYXlJdGVtLnB1c2goeyBzaGlwTmFtZTogdW5kZWZpbmVkLCBzaGlwSW5kZXg6IHVuZGVmaW5lZCB9KTtcbiAgICAgIH1cbiAgICAgIGFycmF5LnB1c2goYXJyYXlJdGVtKTtcbiAgICAgIC8vIHJlc2V0IGJlZm9yZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgYXJyYXlJdGVtID0gW107XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGdldEdhbWVCb2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmRBcnJheTtcbiAgfVxuXG4gIGNoZWNrU2hpcFBsYWNlbWVudChsZW5ndGgsIHgsIHkpIHtcbiAgICAvLyBjb25kaXRpb25zIHRoYXQgZXh0cmFwb2xhdGUgdGhlIGdhbWVib2FyZFxuICAgIGNvbnN0IGludmFsaWRDb25kaXRpb25zID1cbiAgICAgIHggPiAxMCB8fCB4IDwgMCB8fCB5ID4gMTAgfHwgeSA8IDAgfHwgeSArIGxlbmd0aCA+IDEwO1xuXG4gICAgaWYgKGludmFsaWRDb25kaXRpb25zKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjaGVja3MgZXhpc3Rpbmcgc2hpcHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHkgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuZ2FtZUJvYXJkQXJyYXlbaV1beF0uc2hpcE5hbWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCB4LCB5KSB7XG4gICAgLy8gY2hlY2tzIGlmIHRoZSBwb3NpdGlvbiBpcyB2YWxpZCBiZWZvcmUgcGxhY2luZ1xuICAgIGlmICh0aGlzLmNoZWNrU2hpcFBsYWNlbWVudChzaGlwLmdldFNoaXBMZW5ndGgoKSwgeCwgeSkpIHtcbiAgICAgIC8vIGZpbGxzIHNoaXAgYXJyYXlcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRTaGlwTGVuZ3RoKCk7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmdhbWVCb2FyZEFycmF5W3kgKyBpXVt4XS5zaGlwTmFtZSA9IHNoaXA7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXlbeSArIGldW3hdLnNoaXBJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgaWYgKHRoaXMuZ2FtZUJvYXJkQXJyYXlbeV1beF0uc2hpcE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goeyB4LCB5IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdhbWVCb2FyZEFycmF5W3ldW3hdLnNoaXBOYW1lLmhpdChcbiAgICAgICAgdGhpcy5nYW1lQm9hcmRBcnJheVt5XVt4XS5zaGlwSW5kZXhcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TWlzc2VkQXR0YWNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5taXNzZWRBdHRhY2tzO1xuICB9XG5cbiAgLy8gY2hhbmdlcyBib29sZWFuIHRvIHRydWUgaWYgYW55IHNoaXAgaW5zaWRlIGlzIG5vdCBzdW5rXG4gIGNoZWNrQWxsU3VuaygpIHtcbiAgICBsZXQga2V5ID0gdHJ1ZTtcbiAgICB0aGlzLmdhbWVCb2FyZEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5zaGlwTmFtZSkge1xuICAgICAgICAgIGlmIChlLnNoaXBOYW1lLmlzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAga2V5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHVybiA9IHRydWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZW5kVHVybihwbGF5ZXIyKSB7XG4gICAgaWYgKHRoaXMudHVybiA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgICBwbGF5ZXIyLnN0YXJ0VHVybigpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VHVybigpIHtcbiAgICBpZiAodGhpcy50dXJuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy50dXJuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjaGVja1R1cm4oKSB7XG4gICAgcmV0dXJuIHRoaXMudHVybjtcbiAgfVxuXG4gIC8vIGF0dGFja3MgcGxhY2UgdGhlIGhpdCBhbmQgZW5kcyB0dXJuXG4gIGF0dGFjayh4LCB5LCBwbGF5ZXIyLCBwbGF5ZXIyQm9hcmQpIHtcbiAgICBpZiAodGhpcy5jaGVja1R1cm4oKSkge1xuICAgICAgcGxheWVyMkJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICB0aGlzLmVuZFR1cm4ocGxheWVyMik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLnNoaXAgPSB0aGlzLmJ1aWxkU2hpcCgpO1xuICB9XG5cbiAgYnVpbGRTaGlwKCkge1xuICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICAgIGxldCBpID0gdGhpcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgIHNoaXBBcnJheS5wdXNoKHsgaGl0OiBmYWxzZSB9KTtcbiAgICAgIGkgLT0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBBcnJheTtcbiAgfVxuXG4gIGdldFNoaXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcDtcbiAgfVxuXG4gIGdldFNoaXBMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcC5sZW5ndGg7XG4gIH1cblxuICBoaXQoaW5kZXgpIHtcbiAgICB0aGlzLnNoaXBbaW5kZXhdLmhpdCA9IHRydWU7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBjaGVja0hpdChpdGVtKSB7XG4gICAgaWYgKGl0ZW0uaGl0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLnNoaXAuZXZlcnkodGhpcy5jaGVja0hpdCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuXG5jbGFzcyBBSSBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVuZW15LCBlbmVteUJvYXJkKSB7XG4gICAgc3VwZXIobmFtZSwgZW5lbXlCb2FyZCk7XG4gICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgdGhpcy5lbmVteVBsYXllciA9IGVuZW15O1xuICAgIHRoaXMuZW5lbXlCb2FyZCA9IGVuZW15Qm9hcmQ7XG4gICAgdGhpcy5hdHRhY2tBcnJheSA9IFtdO1xuICB9XG5cbiAgZ2VuZXJhdGVSYW5kb21BdHRhY2soKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tUdXJuKCkpIHtcbiAgICAgIGNvbnN0IG51bWJlck9iaiA9IHsgeDogdW5kZWZpbmVkLCB5OiB1bmRlZmluZWQgfTtcblxuICAgICAgLy8gbG9vcHMgZm9yZXZlciB1bnRpbCBpdCBmaW5kcyBhIHZhbGlkIGF0dGFja1xuICAgICAgd2hpbGUgKHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBmaXJzdE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBudW1iZXJPYmoueCA9IGZpcnN0TnVtYmVyO1xuICAgICAgICBudW1iZXJPYmoueSA9IHNlY29uZE51bWJlcjtcblxuICAgICAgICAvLyBjaGVja3MgaWYgbW92ZSBoYXMgYWxyZWFkeSBiZWVuIHBsYXllZFxuICAgICAgICBjb25zdCBwcmV2aW91c0F0dGFjayA9IHRoaXMuYXR0YWNrQXJyYXkuc29tZShcbiAgICAgICAgICAoZSkgPT4gZS54ID09PSBudW1iZXJPYmoueCAmJiBlLnkgPT09IG51bWJlck9iai55XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFwcmV2aW91c0F0dGFjaykge1xuICAgICAgICAgIHRoaXMuYXR0YWNrQXJyYXkucHVzaChudW1iZXJPYmopO1xuICAgICAgICAgIHRoaXMuYXR0YWNrKFxuICAgICAgICAgICAgbnVtYmVyT2JqLngsXG4gICAgICAgICAgICBudW1iZXJPYmoueSxcbiAgICAgICAgICAgIHRoaXMuZW5lbXlQbGF5ZXIsXG4gICAgICAgICAgICB0aGlzLmVuZW15Qm9hcmRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0QXR0YWNrQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0YWNrQXJyYXk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQUk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL0dhbWVCb2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbmltcG9ydCBBSSBmcm9tICcuL2FpJztcbmltcG9ydCBwbGFjZUFJU2hpcCBmcm9tICcuL3BsYWNlQUlTaGlwJztcbmltcG9ydCBkb21RdWVyaWVzIGZyb20gJy4vZG9tUXVlcmllcyc7XG5pbXBvcnQgbWFrZURyYWdnYWJsZSBmcm9tICcuL21ha2VEcmFnZ2FibGUnO1xuaW1wb3J0IHVwZGF0ZURpc3BsYXkgZnJvbSAnLi91cGRhdGVEaXNwbGF5JztcbmltcG9ydCBlbmRHYW1lIGZyb20gJy4vZW5kZ2FtZSc7XG5cbmNvbnN0IGJ1aWxkR2FtZSA9ICgpID0+IHtcbiAgLy8gZ2FtZWJvYXJkc1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgY29uc3QgYWlCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcblxuICAvLyBwbGF5ZXJzXG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgY29uc3QgYWkgPSBuZXcgQUkoJ0FJJywgcGxheWVyLCBwbGF5ZXJCb2FyZCk7XG5cbiAgLy8gcGxheWVyU2hpcHNcbiAgY29uc3QgY2FycmllciA9IG5ldyBTaGlwKDUpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoNCk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKDMpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcCgzKTtcbiAgY29uc3QgcGF0cm9sYm9hdCA9IG5ldyBTaGlwKDIpO1xuXG4gIC8vIEFJIFNoaXBzXG4gIGNvbnN0IEFJY2FycmllciA9IG5ldyBTaGlwKDUpO1xuICBjb25zdCBBSWJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0KTtcbiAgY29uc3QgQUlkZXN0cm95ZXIgPSBuZXcgU2hpcCgzKTtcbiAgY29uc3QgQUlzdWJtYXJpbmUgPSBuZXcgU2hpcCgzKTtcbiAgY29uc3QgQUlwYXRyb2xib2F0ID0gbmV3IFNoaXAoMik7XG5cbiAgLy8gbWFrZXMgcGxheWVyIGJvYXRzIGRyYWdnYWJsZVxuICBtYWtlRHJhZ2dhYmxlKGRvbVF1ZXJpZXMoKS5iYXR0bGVzaGlwSFRNTCk7XG4gIG1ha2VEcmFnZ2FibGUoZG9tUXVlcmllcygpLmNhcnJpZXJIVE1MKTtcbiAgbWFrZURyYWdnYWJsZShkb21RdWVyaWVzKCkuc3VibWFyaW5laGlwSFRNTCk7XG4gIG1ha2VEcmFnZ2FibGUoZG9tUXVlcmllcygpLmRlc3Ryb3llckhUTUwpO1xuICBtYWtlRHJhZ2dhYmxlKGRvbVF1ZXJpZXMoKS5wYXRyb2xib2F0SFRNTCk7XG5cbiAgLy8gcGxhY2VzIEFJIFNoaXBzXG4gIHBsYWNlQUlTaGlwKEFJY2FycmllciwgYWlCb2FyZCk7XG4gIHBsYWNlQUlTaGlwKEFJYmF0dGxlc2hpcCwgYWlCb2FyZCk7XG4gIHBsYWNlQUlTaGlwKEFJZGVzdHJveWVyLCBhaUJvYXJkKTtcbiAgcGxhY2VBSVNoaXAoQUlzdWJtYXJpbmUsIGFpQm9hcmQpO1xuICBwbGFjZUFJU2hpcChBSXBhdHJvbGJvYXQsIGFpQm9hcmQpO1xuXG4gIC8vIGF0dGFja3NcbiAgY29uc3QgYXR0YWNrID0gKGUpID0+IHtcbiAgICBjb25zdCB4ID0gZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xuICAgIGNvbnN0IHkgPSBlLmdldEF0dHJpYnV0ZSgnZGF0YS15Jyk7XG4gICAgcGxheWVyLmF0dGFjayh4LCB5LCBhaSwgYWlCb2FyZCk7XG4gICAgdXBkYXRlRGlzcGxheSgnYWlCb2FyZCcsIGFpQm9hcmQpO1xuICAgIGUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgIC8vIGNoZWNrcyBpZiBhbGwgc2hpcHMgYXJlIG1ldCBhbmQgY2FsbHMgZm9yIHdpbm5lciBiZWZvcmUgZWFjaCByb3VuZFxuICAgIGlmIChhaUJvYXJkLmNoZWNrQWxsU3VuaygpKSB7XG4gICAgICBlbmRHYW1lKHBsYXllci5nZXROYW1lKCkpO1xuICAgIH1cblxuICAgIGFpLmdlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgdXBkYXRlRGlzcGxheSgncGxheWVyQm9hcmQnLCBwbGF5ZXJCb2FyZCk7XG5cbiAgICBpZiAocGxheWVyQm9hcmQuY2hlY2tBbGxTdW5rKCkpIHtcbiAgICAgIGVuZEdhbWUoJ0FJJyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGRyb3BTaGlwIC0gdGhyb3VnaCBkcmFnZ2luZ1xuICBjb25zdCBkcm9wU2hpcCA9IChlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcbiAgICBjb25zdCB4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICAgIGNvbnN0IHkgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG5cbiAgICAvLyBoZWxwZXIgZnVuY3Rpb25cbiAgICBjb25zdCBzZXRCb2FyZFRvRG9tID0gKGJvYXQpID0+IHtcbiAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChib2F0LCB4LCB5KTtcbiAgICAgIHVwZGF0ZURpc3BsYXkoJ3BsYXllckJvYXJkJywgcGxheWVyQm9hcmQpO1xuICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RhdGF9YCk7XG4gICAgICBkb21RdWVyaWVzKCkuZHJhZ2dhYmxlLnJlbW92ZUNoaWxkKHNoaXApO1xuICAgICAgaWYgKGRvbVF1ZXJpZXMoKS5kcmFnZ2FibGUuY2hpbGROb2Rlcy5sZW5ndGggPD0gNikge1xuICAgICAgICBkb21RdWVyaWVzKCkuZHJhZ2dhYmxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvbVF1ZXJpZXMoKS5lbmVteS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzd2l0Y2ggKGRhdGEpIHtcbiAgICAgIGNhc2UgJ2JhdHRsZXNoaXAnOlxuICAgICAgICBpZiAocGxheWVyQm9hcmQuY2hlY2tTaGlwUGxhY2VtZW50KGJhdHRsZXNoaXAubGVuZ3RoLCB4LCB5KSkge1xuICAgICAgICAgIHNldEJvYXJkVG9Eb20oYmF0dGxlc2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjYXJyaWVyJzpcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmNoZWNrU2hpcFBsYWNlbWVudChjYXJyaWVyLmxlbmd0aCwgeCwgeSkpIHtcbiAgICAgICAgICBzZXRCb2FyZFRvRG9tKGNhcnJpZXIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3VibWFyaW5lJzpcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmNoZWNrU2hpcFBsYWNlbWVudChzdWJtYXJpbmUubGVuZ3RoLCB4LCB5KSkge1xuICAgICAgICAgIHNldEJvYXJkVG9Eb20oc3VibWFyaW5lKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc3Ryb3llcic6XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja1NoaXBQbGFjZW1lbnQoZGVzdHJveWVyLmxlbmd0aCwgeCwgeSkpIHtcbiAgICAgICAgICBzZXRCb2FyZFRvRG9tKGRlc3Ryb3llcik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYXRyb2xib2F0JzpcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmNoZWNrU2hpcFBsYWNlbWVudChwYXRyb2xib2F0Lmxlbmd0aCwgeCwgeSkpIHtcbiAgICAgICAgICBzZXRCb2FyZFRvRG9tKHBhdHJvbGJvYXQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGRhdGEnKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gcGxhY2VzIGJvYXJkcyBvbiBET01cbiAgY29uc3QgYnVpbGRET01ib2FyZCA9IChib2FyZE5hbWUpID0+IHtcbiAgICBjb25zdCBib2FyZENsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmROYW1lfWApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBqKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIGkpO1xuXG4gICAgICAgIC8vIGFkZHMgYXR0YWNraW5nIHRocm91Z2ggRE9NXG4gICAgICAgIGlmIChib2FyZE5hbWUgPT09ICdhaUJvYXJkJykge1xuICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgYXR0YWNrKGUudGFyZ2V0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZE5hbWUgPT09ICdwbGF5ZXJCb2FyZCcpIHtcbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZHJvcFNoaXAoZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmRDbGFzcy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgYnVpbGRET01ib2FyZCgncGxheWVyQm9hcmQnKTtcbiAgYnVpbGRET01ib2FyZCgnYWlCb2FyZCcpO1xuXG4gIC8vIG5hbWVTZXR0ZXJcbiAgZG9tUXVlcmllcygpLm5hbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5hbWUgPSBkb21RdWVyaWVzKCkubmFtZUlucHQudmFsdWUgfHwgJ1BsYXllciAxJztcbiAgICBwbGF5ZXIuc2V0TmFtZShuYW1lKTtcbiAgICBkb21RdWVyaWVzKCkucGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGAke3BsYXllci5nZXROYW1lKCl9J3MgYm9hcmRgO1xuICAgIGRvbVF1ZXJpZXMoKS5uYW1lTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjYXJyaWVyLFxuICAgIGJhdHRsZXNoaXAsXG4gICAgZGVzdHJveWVyLFxuICAgIHN1Ym1hcmluZSxcbiAgICBwYXRyb2xib2F0LFxuICAgIEFJY2FycmllcixcbiAgICBBSWJhdHRsZXNoaXAsXG4gICAgQUlkZXN0cm95ZXIsXG4gICAgQUlzdWJtYXJpbmUsXG4gICAgQUlwYXRyb2xib2F0LFxuICAgIHBsYXllckJvYXJkLFxuICAgIGFpQm9hcmQsXG4gICAgcGxheWVyLFxuICAgIGFpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZEdhbWU7XG4iLCJpbXBvcnQgZG9tUXVlcmllcyBmcm9tICcuL2RvbVF1ZXJpZXMnO1xuaW1wb3J0IGJ1aWxkR2FtZSBmcm9tICcuL2J1aWxkR2FtZSc7XG5cbmNvbnN0IGNyZWF0ZUV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAvLyByZWxvYWRlclxuICBkb21RdWVyaWVzKCkucGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFdmVudExpc3RlbmVycztcbiIsImNvbnN0IGRvbVF1ZXJpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGJhdHRsZXNoaXBIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhdHRsZXNoaXAnKTtcbiAgY29uc3QgY2FycmllckhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FycmllcicpO1xuICBjb25zdCBzdWJtYXJpbmVIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1hcmluZScpO1xuICBjb25zdCBkZXN0cm95ZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc3Ryb3llcicpO1xuICBjb25zdCBwYXRyb2xib2F0SFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXRyb2xib2F0Jyk7XG4gIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2FibGUnKTtcbiAgY29uc3QgZW5lbXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXknKTtcbiAgY29uc3QgbmFtZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIGNvbnN0IG5hbWVJbnB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVJbnB0Jyk7XG4gIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVGb3JtJyk7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyTmFtZScpO1xuICBjb25zdCBlbmRHYW1lQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmRHYW1lQ29udGVudCcpO1xuICBjb25zdCBlbmRHYW1lTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kZ2FtZScpO1xuICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheUFnYWluQnV0dG9uJyk7XG4gIGNvbnN0IHdpbm5lclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lubmVyVGV4dCcpO1xuXG4gIHJldHVybiB7XG4gICAgYmF0dGxlc2hpcEhUTUwsXG4gICAgY2FycmllckhUTUwsXG4gICAgc3VibWFyaW5lSFRNTCxcbiAgICBkZXN0cm95ZXJIVE1MLFxuICAgIHBhdHJvbGJvYXRIVE1MLFxuICAgIGRyYWdnYWJsZSxcbiAgICBlbmVteSxcbiAgICBuYW1lTW9kYWwsXG4gICAgbmFtZUlucHQsXG4gICAgbmFtZUZvcm0sXG4gICAgcGxheWVyTmFtZSxcbiAgICBlbmRHYW1lQ29udGVudCxcbiAgICBlbmRHYW1lTW9kYWwsXG4gICAgcGxheUFnYWluQnV0dG9uLFxuICAgIHdpbm5lclRleHRcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVF1ZXJpZXM7XG4iLCJpbXBvcnQgZG9tUXVlcmllcyBmcm9tICcuL2RvbVF1ZXJpZXMnO1xuXG4vLyBjYWxscyBmb3Igd2lubmVyXG5jb25zdCBlbmRHYW1lID0gKHdpbm5lcikgPT4ge1xuICBkb21RdWVyaWVzKCkuZW5kR2FtZU1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBkb21RdWVyaWVzKCkud2lubmVyVGV4dC50ZXh0Q29udGVudCA9IGAke3dpbm5lcn0gaXMgdGhlIHdpbm5lciFgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5kR2FtZTtcbiIsImNvbnN0IG1ha2VEcmFnZ2FibGUgPSAoKSA9PiB7XG4gIC8vIERPTVxuICBjb25zdCBiYXR0bGVTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhdHRsZXNoaXAnKTtcbiAgY29uc3QgY2FycmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJyaWVyJyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtYXJpbmUnKTtcbiAgY29uc3QgZGVzdHJveWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc3Ryb3llcicpO1xuICBjb25zdCBwYXRyb2xib2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhdHJvbGJvYXQnKTtcblxuICBjb25zdCBzZXREcmFnZ2VyID0gKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuaWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHNldERyYWdnZXIoYmF0dGxlU2hpcCk7XG4gIHNldERyYWdnZXIoY2Fycmllcik7XG4gIHNldERyYWdnZXIoc3VibWFyaW5lKTtcbiAgc2V0RHJhZ2dlcihkZXN0cm95ZXIpO1xuICBzZXREcmFnZ2VyKHBhdHJvbGJvYXQpO1xuXG4gIHJldHVybiB7XG4gICAgYmF0dGxlU2hpcCxcbiAgICBjYXJyaWVyLFxuICAgIHN1Ym1hcmluZSxcbiAgICBkZXN0cm95ZXIsXG4gICAgcGF0cm9sYm9hdFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZURyYWdnYWJsZTtcbiIsImNvbnN0IHBsYWNlQUlTaGlwID0gKHNoaXAsIEFJQm9hcmQpID0+IHtcbiAgd2hpbGUgKHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCBudW1iZXJBcnJheSA9IFtdO1xuICAgIGNvbnN0IGZpcnN0TnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHNlY29uZE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBudW1iZXJBcnJheSA9IFtmaXJzdE51bWJlciwgc2Vjb25kTnVtYmVyXTtcblxuICAgIGlmIChcbiAgICAgIEFJQm9hcmQuY2hlY2tTaGlwUGxhY2VtZW50KFxuICAgICAgICBzaGlwLmdldFNoaXBMZW5ndGgoKSxcbiAgICAgICAgbnVtYmVyQXJyYXlbMF0sXG4gICAgICAgIG51bWJlckFycmF5WzFdXG4gICAgICApXG4gICAgKSB7XG4gICAgICBBSUJvYXJkLnBsYWNlU2hpcChzaGlwLCBudW1iZXJBcnJheVswXSwgbnVtYmVyQXJyYXlbMV0pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGFjZUFJU2hpcDtcbiIsIi8vIHVwZGF0ZXMgRE9NXG5jb25zdCB1cGRhdGVEaXNwbGF5ID0gKGJvYXJkTmFtZSwgYm9hcmQpID0+IHtcbiAgY29uc3QgYm9hcmRBcnJheSA9IGJvYXJkLmdldEdhbWVCb2FyZCgpO1xuICBjb25zdCBtaXNzZWQgPSBib2FyZC5nZXRNaXNzZWRBdHRhY2tzKCk7XG5cbiAgYm9hcmRBcnJheS5mb3JFYWNoKChyb3csIHkpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoY2VsbCwgeCkgPT4ge1xuICAgICAgaWYgKGNlbGwuc2hpcE5hbWUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNlbGwuc2hpcE5hbWUuY2hlY2tIaXQoY2VsbC5zaGlwTmFtZS5nZXRTaGlwKClbY2VsbC5zaGlwSW5kZXhdKSA9PT1cbiAgICAgICAgICB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLiR7Ym9hcmROYW1lfSBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXkgPVwiJHt5fVwiYFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2VsZWN0ZWRDZWxsLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgIHNlbGVjdGVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICBzZWxlY3RlZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnb2NjdXBpZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBjZWxsLnNoaXBOYW1lLmNoZWNrSGl0KGNlbGwuc2hpcE5hbWUuZ2V0U2hpcCgpW2NlbGwuc2hpcEluZGV4XSkgPT09XG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKGJvYXJkTmFtZSA9PT0gJ3BsYXllckJvYXJkJykge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC4ke2JvYXJkTmFtZX0gW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15ID1cIiR7eX1cIl1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBtaXNzZWQuZm9yRWFjaCgoYXR0YWNrKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtib2FyZE5hbWV9IFtkYXRhLXg9XCIke2F0dGFjay54fVwiXVtkYXRhLXkgPVwiJHthdHRhY2sueX1cIl1gXG4gICAgKTtcbiAgICBzZWxlY3RlZENlbGwudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZURpc3BsYXk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGJ1aWxkR2FtZSBmcm9tICcuL2J1aWxkR2FtZSc7XG5pbXBvcnQgY3JlYXRlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9jcmVhdGVFdmVudExpc3RlbmVycyc7XG5cbmNvbnN0IG1haW4gPSAoKCkgPT4ge1xuICAvLyBpbml0aWFsaXplclxuICBidWlsZEdhbWUoKTtcbiAgY3JlYXRlRXZlbnRMaXN0ZW5lcnMoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=