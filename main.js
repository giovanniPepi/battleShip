/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --slate0: #94a3b8;\n  --slate1: #64748b;\n  --slate2: #475569;\n  --semiWhite: #f1f5f9;\n  --amber1: #fffbeb;\n  --occupied: #d97706;\n  --hit: #dc2626;\n  --fontSizeSemiHighlight: 1.2rem;\n  --fontSizeHighlight: 1.8rem;\n  --fontSizeExtra: 2rem;\n  --fontSizeHitMob: 1.3rem;\n  --borderRadiusBig: 2rem;\n  --borderRadiusSmall: 0.8rem;\n  --miniPadding: 0.5rem;\n  --bigPadding: 1.5rem;\n  --myBorder: 1px solid var(--slate0);\n  --normalGap: 1.5rem;\n  --megaGap: 5rem;\n  --shipBlocksPc: 3rem;\n  --shipBlocksMob: 1.9rem;\n  --svgSize: 2rem;\n  --shipBlocksBorder: #475569 solid 0.1rem;\n}\nbody,\nhtml {\n  margin: 0;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n}\nsvg {\n  width: var(--svgSize);\n  height: var(--svgSize);\n  padding: var(--miniPadding);\n}\n@media screen and (min-width: 1060px) {\n  .content {\n    flex-wrap: nowrap;\n  }\n  .cell,\n  .shipBlock {\n    min-width: var(--shipBlocksPc);\n    min-height: var(--shipBlocksPc);\n    max-width: var(--shipBlocksPc);\n    max-height: var(--shipBlocksPc);\n  }\n  .header {\n    height: 10vh;\n    font-size: var(--fontSizeExtra);\n  }\n  #playerName {\n    font-size: var(--fontSizeHighlight);\n    font-weight: bold;\n  }\n  .hit,\n  .missed {\n    font-size: var(--fontSizeExtra);\n  }\n}\n\n@media screen and (max-width: 1059px) {\n  .content {\n    flex-wrap: wrap;\n  }\n  .cell,\n  .shipBlock {\n    min-width: var(--shipBlocksMob);\n    min-height: var(--shipBlocksMob);\n  }\n  .shipBlock {\n    max-width: var(--shipBlocksMob);\n    max-height: var(--shipBlocksMob);\n  }\n  .header {\n    height: 5vh;\n    font-size: var(--fontSizeSemiHighlight);\n  }\n  #playerName {\n    font-size: var(--fontSizeSemiHighlight);\n    font-weight: bold;\n  }\n  .hit,\n  .missed {\n    font-size: var(--fontSizeHitMob);\n  }\n}\n\n.header {\n  background: var(--slate2);\n  color: var(--semiWhite);\n}\n\n.header,\n.nameForm,\n.content,\n.cell,\n.gameBoard,\n.enemy,\n.draggable,\n.player,\n.modal,\n.dragSvg,\n#endGameContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nameForm {\n  position: relative;\n  align-self: center;\n  padding: var(--bigPadding);\n  flex-direction: column;\n  gap: 1rem;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bolder;\n  background-color: var(--slate2);\n  color: var(--semiWhite);\n  box-shadow: 0 6px 10px 0 rgba(1, 1, 1, 0.2), 0 8px 30px 0 rgba(2, 2, 2, 0.25);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusBig);\n}\n/* removes excess margins */\n.nameForm > *,\n#playerName {\n  margin: 0;\n}\n#playerName {\n  padding: var(--miniPadding);\n}\n#submitBtn,\n#playAgainButton,\n#endGameContent {\n  max-width: 25vw;\n  min-height: 5vh;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bold;\n  color: var(--slate2);\n  background-color: var(--semiWhite);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  padding: var(--miniPadding);\n}\n#endGameContent {\n  min-width: 40vw;\n  min-height: 25vh;\n  gap: var(--normalGap);\n}\n.content {\n  padding: var(--bigPadding);\n  min-height: 90vh;\n  background-color: var(--amber1);\n  justify-content: space-evenly;\n  gap: var(--normalGap);\n}\n.gameBoard,\n.enemy,\n.draggable,\n.player {\n  flex-direction: column;\n  align-content: space-around;\n}\n.enemy {\n  display: none;\n}\n.draggable {\n  flex-direction: row;\n  justify-self: flex-end;\n  gap: var(--normalGap);\n}\n.shipBlock,\n.cell {\n  border: var(--shipBlocksBorder);\n}\n.shipBlock {\n  background-color: rgb(89, 179, 71);\n}\n.playerBoard,\n.aiBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.hit,\n.missed {\n  color: var(--semiWhite);\n  font-weight: bold;\n}\n.hit {\n  background-color: var(--hit);\n}\n.missed {\n  background-color: var(--slate1);\n}\n.occupied {\n  background-color: var(--occupied);\n}\n.modal {\n  position: fixed;\n  z-index: 9999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#modalContent p {\n  padding: 0;\n  margin: 0;\n}\n#nameInpt {\n  height: auto;\n  color: var(--slate2);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  font-size: var(--fontSizeSemiHighlight);\n  padding: var(--miniPadding);\n}\n.endgame {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  z-index: 9999;\n  padding-top: 130px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,+BAA+B;EAC/B,2BAA2B;EAC3B,qBAAqB;EACrB,wBAAwB;EACxB,uBAAuB;EACvB,2BAA2B;EAC3B,qBAAqB;EACrB,oBAAoB;EACpB,mCAAmC;EACnC,mBAAmB;EACnB,eAAe;EACf,oBAAoB;EACpB,uBAAuB;EACvB,eAAe;EACf,wCAAwC;AAC1C;AACA;;EAEE,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE;IACE,iBAAiB;EACnB;EACA;;IAEE,8BAA8B;IAC9B,+BAA+B;IAC/B,8BAA8B;IAC9B,+BAA+B;EACjC;EACA;IACE,YAAY;IACZ,+BAA+B;EACjC;EACA;IACE,mCAAmC;IACnC,iBAAiB;EACnB;EACA;;IAEE,+BAA+B;EACjC;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;;IAEE,+BAA+B;IAC/B,gCAAgC;EAClC;EACA;IACE,+BAA+B;IAC/B,gCAAgC;EAClC;EACA;IACE,WAAW;IACX,uCAAuC;EACzC;EACA;IACE,uCAAuC;IACvC,iBAAiB;EACnB;EACA;;IAEE,gCAAgC;EAClC;AACF;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;;;;;;;;;;;EAWE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,0BAA0B;EAC1B,sBAAsB;EACtB,SAAS;EACT,uCAAuC;EACvC,mBAAmB;EACnB,+BAA+B;EAC/B,uBAAuB;EACvB,6EAA6E;EAC7E,uBAAuB;EACvB,qCAAqC;AACvC;AACA,2BAA2B;AAC3B;;EAEE,SAAS;AACX;AACA;EACE,2BAA2B;AAC7B;AACA;;;EAGE,eAAe;EACf,eAAe;EACf,uCAAuC;EACvC,iBAAiB;EACjB,oBAAoB;EACpB,kCAAkC;EAClC,uBAAuB;EACvB,uCAAuC;EACvC,2BAA2B;AAC7B;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,+BAA+B;EAC/B,6BAA6B;EAC7B,qBAAqB;AACvB;AACA;;;;EAIE,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,aAAa;AACf;AACA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,qBAAqB;AACvB;AACA;;EAEE,+BAA+B;AACjC;AACA;EACE,kCAAkC;AACpC;AACA;;EAEE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;AACA;;EAEE,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,+BAA+B;AACjC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,aAAa;EACb,oCAAoC;AACtC;AACA;EACE,UAAU;EACV,SAAS;AACX;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,uBAAuB;EACvB,uCAAuC;EACvC,uCAAuC;EACvC,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,oCAAoC;AACtC","sourcesContent":[":root {\n  --slate0: #94a3b8;\n  --slate1: #64748b;\n  --slate2: #475569;\n  --semiWhite: #f1f5f9;\n  --amber1: #fffbeb;\n  --occupied: #d97706;\n  --hit: #dc2626;\n  --fontSizeSemiHighlight: 1.2rem;\n  --fontSizeHighlight: 1.8rem;\n  --fontSizeExtra: 2rem;\n  --fontSizeHitMob: 1.3rem;\n  --borderRadiusBig: 2rem;\n  --borderRadiusSmall: 0.8rem;\n  --miniPadding: 0.5rem;\n  --bigPadding: 1.5rem;\n  --myBorder: 1px solid var(--slate0);\n  --normalGap: 1.5rem;\n  --megaGap: 5rem;\n  --shipBlocksPc: 3rem;\n  --shipBlocksMob: 1.9rem;\n  --svgSize: 2rem;\n  --shipBlocksBorder: #475569 solid 0.1rem;\n}\nbody,\nhtml {\n  margin: 0;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n}\nsvg {\n  width: var(--svgSize);\n  height: var(--svgSize);\n  padding: var(--miniPadding);\n}\n@media screen and (min-width: 1060px) {\n  .content {\n    flex-wrap: nowrap;\n  }\n  .cell,\n  .shipBlock {\n    min-width: var(--shipBlocksPc);\n    min-height: var(--shipBlocksPc);\n    max-width: var(--shipBlocksPc);\n    max-height: var(--shipBlocksPc);\n  }\n  .header {\n    height: 10vh;\n    font-size: var(--fontSizeExtra);\n  }\n  #playerName {\n    font-size: var(--fontSizeHighlight);\n    font-weight: bold;\n  }\n  .hit,\n  .missed {\n    font-size: var(--fontSizeExtra);\n  }\n}\n\n@media screen and (max-width: 1059px) {\n  .content {\n    flex-wrap: wrap;\n  }\n  .cell,\n  .shipBlock {\n    min-width: var(--shipBlocksMob);\n    min-height: var(--shipBlocksMob);\n  }\n  .shipBlock {\n    max-width: var(--shipBlocksMob);\n    max-height: var(--shipBlocksMob);\n  }\n  .header {\n    height: 5vh;\n    font-size: var(--fontSizeSemiHighlight);\n  }\n  #playerName {\n    font-size: var(--fontSizeSemiHighlight);\n    font-weight: bold;\n  }\n  .hit,\n  .missed {\n    font-size: var(--fontSizeHitMob);\n  }\n}\n\n.header {\n  background: var(--slate2);\n  color: var(--semiWhite);\n}\n\n.header,\n.nameForm,\n.content,\n.cell,\n.gameBoard,\n.enemy,\n.draggable,\n.player,\n.modal,\n.dragSvg,\n#endGameContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nameForm {\n  position: relative;\n  align-self: center;\n  padding: var(--bigPadding);\n  flex-direction: column;\n  gap: 1rem;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bolder;\n  background-color: var(--slate2);\n  color: var(--semiWhite);\n  box-shadow: 0 6px 10px 0 rgba(1, 1, 1, 0.2), 0 8px 30px 0 rgba(2, 2, 2, 0.25);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusBig);\n}\n/* removes excess margins */\n.nameForm > *,\n#playerName {\n  margin: 0;\n}\n#playerName {\n  padding: var(--miniPadding);\n}\n#submitBtn,\n#playAgainButton,\n#endGameContent {\n  max-width: 25vw;\n  min-height: 5vh;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bold;\n  color: var(--slate2);\n  background-color: var(--semiWhite);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  padding: var(--miniPadding);\n}\n#endGameContent {\n  min-width: 40vw;\n  min-height: 25vh;\n  gap: var(--normalGap);\n}\n.content {\n  padding: var(--bigPadding);\n  min-height: 90vh;\n  background-color: var(--amber1);\n  justify-content: space-evenly;\n  gap: var(--normalGap);\n}\n.gameBoard,\n.enemy,\n.draggable,\n.player {\n  flex-direction: column;\n  align-content: space-around;\n}\n.enemy {\n  display: none;\n}\n.draggable {\n  flex-direction: row;\n  justify-self: flex-end;\n  gap: var(--normalGap);\n}\n.shipBlock,\n.cell {\n  border: var(--shipBlocksBorder);\n}\n.shipBlock {\n  background-color: rgb(89, 179, 71);\n}\n.playerBoard,\n.aiBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.hit,\n.missed {\n  color: var(--semiWhite);\n  font-weight: bold;\n}\n.hit {\n  background-color: var(--hit);\n}\n.missed {\n  background-color: var(--slate1);\n}\n.occupied {\n  background-color: var(--occupied);\n}\n.modal {\n  position: fixed;\n  z-index: 9999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#modalContent p {\n  padding: 0;\n  margin: 0;\n}\n#nameInpt {\n  height: auto;\n  color: var(--slate2);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  font-size: var(--fontSizeSemiHighlight);\n  padding: var(--miniPadding);\n}\n.endgame {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  z-index: 9999;\n  padding-top: 130px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/img/mouse-move-vertical.svg":
/*!*****************************************!*\
  !*** ./src/img/mouse-move-vertical.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M20 6H23L19 2L15 6H18V18H15L19 22L23 18H20V6M9 3.09C11.83 3.57 14 6.04 14 9H9V3.09M14 11V15C14 18.3 11.3 21 8 21S2 18.3 2 15V11H14M7 9H2C2 6.04 4.17 3.57 7 3.09V9Z\"></path></svg>"

/***/ }),

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domQueries */ "./src/domQueries.js");


// calls for winner
const endGame = (winner) => {
  (0,_domQueries__WEBPACK_IMPORTED_MODULE_0__["default"])().endGameModal.style.display = 'flex';
  (0,_domQueries__WEBPACK_IMPORTED_MODULE_0__["default"])().winnerText.textContent = `${winner} is the winner!`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endGame);


/***/ }),

/***/ "./src/makeDraggable.js":
/*!******************************!*\
  !*** ./src/makeDraggable.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./src/setSvg.js":
/*!***********************!*\
  !*** ./src/setSvg.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_mouse_move_vertical_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/mouse-move-vertical.svg */ "./src/img/mouse-move-vertical.svg");
/* harmony import */ var _img_mouse_move_vertical_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_mouse_move_vertical_svg__WEBPACK_IMPORTED_MODULE_0__);

const setSvg = () => {
  const svgContainers = document.querySelectorAll('.dragSvg');

  svgContainers.forEach((e) => {
    e.innerHTML = (_img_mouse_move_vertical_svg__WEBPACK_IMPORTED_MODULE_0___default());
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setSvg);


/***/ }),

/***/ "./src/updateDisplay.js":
/*!******************************!*\
  !*** ./src/updateDisplay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _buildGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildGame */ "./src/buildGame.js");
/* harmony import */ var _createEventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createEventListeners */ "./src/createEventListeners.js");
/* harmony import */ var _setSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setSvg */ "./src/setSvg.js");





const main = (() => {
  // initializer
  (0,_buildGame__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_createEventListeners__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_setSvg__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FnQztBQUNJO0FBQ3NCO0FBQzVCOztBQUU5QjtBQUNBO0FBQ0EsRUFBRSxzREFBUztBQUNYLEVBQUUsaUVBQW9CO0FBQ3RCLEVBQUUsbURBQU07QUFDUixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ltZy9tb3VzZS1tb3ZlLXZlcnRpY2FsLnN2ZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9haS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2J1aWxkR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NyZWF0ZUV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tUXVlcmllcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VuZGdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWtlRHJhZ2dhYmxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxhY2VBSVNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zZXRTdmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91cGRhdGVEaXNwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXNsYXRlMDogIzk0YTNiODtcXG4gIC0tc2xhdGUxOiAjNjQ3NDhiO1xcbiAgLS1zbGF0ZTI6ICM0NzU1Njk7XFxuICAtLXNlbWlXaGl0ZTogI2YxZjVmOTtcXG4gIC0tYW1iZXIxOiAjZmZmYmViO1xcbiAgLS1vY2N1cGllZDogI2Q5NzcwNjtcXG4gIC0taGl0OiAjZGMyNjI2O1xcbiAgLS1mb250U2l6ZVNlbWlIaWdobGlnaHQ6IDEuMnJlbTtcXG4gIC0tZm9udFNpemVIaWdobGlnaHQ6IDEuOHJlbTtcXG4gIC0tZm9udFNpemVFeHRyYTogMnJlbTtcXG4gIC0tZm9udFNpemVIaXRNb2I6IDEuM3JlbTtcXG4gIC0tYm9yZGVyUmFkaXVzQmlnOiAycmVtO1xcbiAgLS1ib3JkZXJSYWRpdXNTbWFsbDogMC44cmVtO1xcbiAgLS1taW5pUGFkZGluZzogMC41cmVtO1xcbiAgLS1iaWdQYWRkaW5nOiAxLjVyZW07XFxuICAtLW15Qm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2xhdGUwKTtcXG4gIC0tbm9ybWFsR2FwOiAxLjVyZW07XFxuICAtLW1lZ2FHYXA6IDVyZW07XFxuICAtLXNoaXBCbG9ja3NQYzogM3JlbTtcXG4gIC0tc2hpcEJsb2Nrc01vYjogMS45cmVtO1xcbiAgLS1zdmdTaXplOiAycmVtO1xcbiAgLS1zaGlwQmxvY2tzQm9yZGVyOiAjNDc1NTY5IHNvbGlkIDAuMXJlbTtcXG59XFxuYm9keSxcXG5odG1sIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuc3ZnIHtcXG4gIHdpZHRoOiB2YXIoLS1zdmdTaXplKTtcXG4gIGhlaWdodDogdmFyKC0tc3ZnU2l6ZSk7XFxuICBwYWRkaW5nOiB2YXIoLS1taW5pUGFkZGluZyk7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNjBweCkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIH1cXG4gIC5jZWxsLFxcbiAgLnNoaXBCbG9jayB7XFxuICAgIG1pbi13aWR0aDogdmFyKC0tc2hpcEJsb2Nrc1BjKTtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tc2hpcEJsb2Nrc1BjKTtcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzUGMpO1xcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1zaGlwQmxvY2tzUGMpO1xcbiAgfVxcbiAgLmhlYWRlciB7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUV4dHJhKTtcXG4gIH1cXG4gICNwbGF5ZXJOYW1lIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUhpZ2hsaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmhpdCxcXG4gIC5taXNzZWQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplRXh0cmEpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDU5cHgpIHtcXG4gIC5jb250ZW50IHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbiAgLmNlbGwsXFxuICAuc2hpcEJsb2NrIHtcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzTW9iKTtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tc2hpcEJsb2Nrc01vYik7XFxuICB9XFxuICAuc2hpcEJsb2NrIHtcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzTW9iKTtcXG4gICAgbWF4LWhlaWdodDogdmFyKC0tc2hpcEJsb2Nrc01vYik7XFxuICB9XFxuICAuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0KTtcXG4gIH1cXG4gICNwbGF5ZXJOYW1lIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC5oaXQsXFxuICAubWlzc2VkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUhpdE1vYik7XFxuICB9XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2xhdGUyKTtcXG4gIGNvbG9yOiB2YXIoLS1zZW1pV2hpdGUpO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5uYW1lRm9ybSxcXG4uY29udGVudCxcXG4uY2VsbCxcXG4uZ2FtZUJvYXJkLFxcbi5lbmVteSxcXG4uZHJhZ2dhYmxlLFxcbi5wbGF5ZXIsXFxuLm1vZGFsLFxcbi5kcmFnU3ZnLFxcbiNlbmRHYW1lQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmFtZUZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tYmlnUGFkZGluZyk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlMik7XFxuICBjb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKDEsIDEsIDEsIDAuMiksIDAgOHB4IDMwcHggMCByZ2JhKDIsIDIsIDIsIDAuMjUpO1xcbiAgYm9yZGVyOiB2YXIoLS1teUJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXNCaWcpO1xcbn1cXG4vKiByZW1vdmVzIGV4Y2VzcyBtYXJnaW5zICovXFxuLm5hbWVGb3JtID4gKixcXG4jcGxheWVyTmFtZSB7XFxuICBtYXJnaW46IDA7XFxufVxcbiNwbGF5ZXJOYW1lIHtcXG4gIHBhZGRpbmc6IHZhcigtLW1pbmlQYWRkaW5nKTtcXG59XFxuI3N1Ym1pdEJ0bixcXG4jcGxheUFnYWluQnV0dG9uLFxcbiNlbmRHYW1lQ29udGVudCB7XFxuICBtYXgtd2lkdGg6IDI1dnc7XFxuICBtaW4taGVpZ2h0OiA1dmg7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGJvcmRlcjogdmFyKC0tbXlCb3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzU21hbGwpO1xcbiAgcGFkZGluZzogdmFyKC0tbWluaVBhZGRpbmcpO1xcbn1cXG4jZW5kR2FtZUNvbnRlbnQge1xcbiAgbWluLXdpZHRoOiA0MHZ3O1xcbiAgbWluLWhlaWdodDogMjV2aDtcXG4gIGdhcDogdmFyKC0tbm9ybWFsR2FwKTtcXG59XFxuLmNvbnRlbnQge1xcbiAgcGFkZGluZzogdmFyKC0tYmlnUGFkZGluZyk7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXIxKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZ2FwOiB2YXIoLS1ub3JtYWxHYXApO1xcbn1cXG4uZ2FtZUJvYXJkLFxcbi5lbmVteSxcXG4uZHJhZ2dhYmxlLFxcbi5wbGF5ZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmVuZW15IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5kcmFnZ2FibGUge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBnYXA6IHZhcigtLW5vcm1hbEdhcCk7XFxufVxcbi5zaGlwQmxvY2ssXFxuLmNlbGwge1xcbiAgYm9yZGVyOiB2YXIoLS1zaGlwQmxvY2tzQm9yZGVyKTtcXG59XFxuLnNoaXBCbG9jayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODksIDE3OSwgNzEpO1xcbn1cXG4ucGxheWVyQm9hcmQsXFxuLmFpQm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5oaXQsXFxuLm1pc3NlZCB7XFxuICBjb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdCk7XFxufVxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUxKTtcXG59XFxuLm9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jY3VwaWVkKTtcXG59XFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4jbW9kYWxDb250ZW50IHAge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuI25hbWVJbnB0IHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgYm9yZGVyOiB2YXIoLS1teUJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXNTbWFsbCk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICBwYWRkaW5nOiB2YXIoLS1taW5pUGFkZGluZyk7XFxufVxcbi5lbmRnYW1lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZix3Q0FBd0M7QUFDMUM7QUFDQTs7RUFFRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsWUFBWTtJQUNaLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLCtCQUErQjtFQUNqQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsK0JBQStCO0lBQy9CLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsK0JBQStCO0lBQy9CLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsV0FBVztJQUNYLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLGdDQUFnQztFQUNsQztBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7Ozs7Ozs7Ozs7RUFXRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCx1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsNkVBQTZFO0VBQzdFLHVCQUF1QjtFQUN2QixxQ0FBcUM7QUFDdkM7QUFDQSwyQkFBMkI7QUFDM0I7O0VBRUUsU0FBUztBQUNYO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTs7O0VBR0UsZUFBZTtFQUNmLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2QywyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCO0FBQ0E7Ozs7RUFJRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTs7RUFFRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQztBQUNBOztFQUVFLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2Qyx1Q0FBdUM7RUFDdkMsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXNsYXRlMDogIzk0YTNiODtcXG4gIC0tc2xhdGUxOiAjNjQ3NDhiO1xcbiAgLS1zbGF0ZTI6ICM0NzU1Njk7XFxuICAtLXNlbWlXaGl0ZTogI2YxZjVmOTtcXG4gIC0tYW1iZXIxOiAjZmZmYmViO1xcbiAgLS1vY2N1cGllZDogI2Q5NzcwNjtcXG4gIC0taGl0OiAjZGMyNjI2O1xcbiAgLS1mb250U2l6ZVNlbWlIaWdobGlnaHQ6IDEuMnJlbTtcXG4gIC0tZm9udFNpemVIaWdobGlnaHQ6IDEuOHJlbTtcXG4gIC0tZm9udFNpemVFeHRyYTogMnJlbTtcXG4gIC0tZm9udFNpemVIaXRNb2I6IDEuM3JlbTtcXG4gIC0tYm9yZGVyUmFkaXVzQmlnOiAycmVtO1xcbiAgLS1ib3JkZXJSYWRpdXNTbWFsbDogMC44cmVtO1xcbiAgLS1taW5pUGFkZGluZzogMC41cmVtO1xcbiAgLS1iaWdQYWRkaW5nOiAxLjVyZW07XFxuICAtLW15Qm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2xhdGUwKTtcXG4gIC0tbm9ybWFsR2FwOiAxLjVyZW07XFxuICAtLW1lZ2FHYXA6IDVyZW07XFxuICAtLXNoaXBCbG9ja3NQYzogM3JlbTtcXG4gIC0tc2hpcEJsb2Nrc01vYjogMS45cmVtO1xcbiAgLS1zdmdTaXplOiAycmVtO1xcbiAgLS1zaGlwQmxvY2tzQm9yZGVyOiAjNDc1NTY5IHNvbGlkIDAuMXJlbTtcXG59XFxuYm9keSxcXG5odG1sIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuc3ZnIHtcXG4gIHdpZHRoOiB2YXIoLS1zdmdTaXplKTtcXG4gIGhlaWdodDogdmFyKC0tc3ZnU2l6ZSk7XFxuICBwYWRkaW5nOiB2YXIoLS1taW5pUGFkZGluZyk7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNjBweCkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIH1cXG4gIC5jZWxsLFxcbiAgLnNoaXBCbG9jayB7XFxuICAgIG1pbi13aWR0aDogdmFyKC0tc2hpcEJsb2Nrc1BjKTtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tc2hpcEJsb2Nrc1BjKTtcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzUGMpO1xcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1zaGlwQmxvY2tzUGMpO1xcbiAgfVxcbiAgLmhlYWRlciB7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUV4dHJhKTtcXG4gIH1cXG4gICNwbGF5ZXJOYW1lIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUhpZ2hsaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmhpdCxcXG4gIC5taXNzZWQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplRXh0cmEpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDU5cHgpIHtcXG4gIC5jb250ZW50IHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbiAgLmNlbGwsXFxuICAuc2hpcEJsb2NrIHtcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzTW9iKTtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tc2hpcEJsb2Nrc01vYik7XFxuICB9XFxuICAuc2hpcEJsb2NrIHtcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzTW9iKTtcXG4gICAgbWF4LWhlaWdodDogdmFyKC0tc2hpcEJsb2Nrc01vYik7XFxuICB9XFxuICAuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0KTtcXG4gIH1cXG4gICNwbGF5ZXJOYW1lIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC5oaXQsXFxuICAubWlzc2VkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUhpdE1vYik7XFxuICB9XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2xhdGUyKTtcXG4gIGNvbG9yOiB2YXIoLS1zZW1pV2hpdGUpO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5uYW1lRm9ybSxcXG4uY29udGVudCxcXG4uY2VsbCxcXG4uZ2FtZUJvYXJkLFxcbi5lbmVteSxcXG4uZHJhZ2dhYmxlLFxcbi5wbGF5ZXIsXFxuLm1vZGFsLFxcbi5kcmFnU3ZnLFxcbiNlbmRHYW1lQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmFtZUZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tYmlnUGFkZGluZyk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlMik7XFxuICBjb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKDEsIDEsIDEsIDAuMiksIDAgOHB4IDMwcHggMCByZ2JhKDIsIDIsIDIsIDAuMjUpO1xcbiAgYm9yZGVyOiB2YXIoLS1teUJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXNCaWcpO1xcbn1cXG4vKiByZW1vdmVzIGV4Y2VzcyBtYXJnaW5zICovXFxuLm5hbWVGb3JtID4gKixcXG4jcGxheWVyTmFtZSB7XFxuICBtYXJnaW46IDA7XFxufVxcbiNwbGF5ZXJOYW1lIHtcXG4gIHBhZGRpbmc6IHZhcigtLW1pbmlQYWRkaW5nKTtcXG59XFxuI3N1Ym1pdEJ0bixcXG4jcGxheUFnYWluQnV0dG9uLFxcbiNlbmRHYW1lQ29udGVudCB7XFxuICBtYXgtd2lkdGg6IDI1dnc7XFxuICBtaW4taGVpZ2h0OiA1dmg7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGJvcmRlcjogdmFyKC0tbXlCb3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzU21hbGwpO1xcbiAgcGFkZGluZzogdmFyKC0tbWluaVBhZGRpbmcpO1xcbn1cXG4jZW5kR2FtZUNvbnRlbnQge1xcbiAgbWluLXdpZHRoOiA0MHZ3O1xcbiAgbWluLWhlaWdodDogMjV2aDtcXG4gIGdhcDogdmFyKC0tbm9ybWFsR2FwKTtcXG59XFxuLmNvbnRlbnQge1xcbiAgcGFkZGluZzogdmFyKC0tYmlnUGFkZGluZyk7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXIxKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZ2FwOiB2YXIoLS1ub3JtYWxHYXApO1xcbn1cXG4uZ2FtZUJvYXJkLFxcbi5lbmVteSxcXG4uZHJhZ2dhYmxlLFxcbi5wbGF5ZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmVuZW15IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5kcmFnZ2FibGUge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBnYXA6IHZhcigtLW5vcm1hbEdhcCk7XFxufVxcbi5zaGlwQmxvY2ssXFxuLmNlbGwge1xcbiAgYm9yZGVyOiB2YXIoLS1zaGlwQmxvY2tzQm9yZGVyKTtcXG59XFxuLnNoaXBCbG9jayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODksIDE3OSwgNzEpO1xcbn1cXG4ucGxheWVyQm9hcmQsXFxuLmFpQm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5oaXQsXFxuLm1pc3NlZCB7XFxuICBjb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdCk7XFxufVxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUxKTtcXG59XFxuLm9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jY3VwaWVkKTtcXG59XFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4jbW9kYWxDb250ZW50IHAge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuI25hbWVJbnB0IHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgYm9yZGVyOiB2YXIoLS1teUJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXNTbWFsbCk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICBwYWRkaW5nOiB2YXIoLS1taW5pUGFkZGluZyk7XFxufVxcbi5lbmRnYW1lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0yMCA2SDIzTDE5IDJMMTUgNkgxOFYxOEgxNUwxOSAyMkwyMyAxOEgyMFY2TTkgMy4wOUMxMS44MyAzLjU3IDE0IDYuMDQgMTQgOUg5VjMuMDlNMTQgMTFWMTVDMTQgMTguMyAxMS4zIDIxIDggMjFTMiAxOC4zIDIgMTVWMTFIMTRNNyA5SDJDMiA2LjA0IDQuMTcgMy41NyA3IDMuMDlWOVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXkgPSB0aGlzLmJ1aWxkR2FtZUJvYXJkKCk7XG4gICAgdGhpcy5taXNzZWRBdHRhY2tzID0gW107XG4gIH1cblxuICBidWlsZEdhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBhcnJheUl0ZW0gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBhcnJheUl0ZW0ucHVzaCh7IHNoaXBOYW1lOiB1bmRlZmluZWQsIHNoaXBJbmRleDogdW5kZWZpbmVkIH0pO1xuICAgICAgfVxuICAgICAgYXJyYXkucHVzaChhcnJheUl0ZW0pO1xuICAgICAgLy8gcmVzZXQgYmVmb3JlIG5leHQgaXRlcmF0aW9uXG4gICAgICBhcnJheUl0ZW0gPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgZ2V0R2FtZUJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZEFycmF5O1xuICB9XG5cbiAgY2hlY2tTaGlwUGxhY2VtZW50KGxlbmd0aCwgeCwgeSkge1xuICAgIC8vIGNvbmRpdGlvbnMgdGhhdCBleHRyYXBvbGF0ZSB0aGUgZ2FtZWJvYXJkXG4gICAgY29uc3QgaW52YWxpZENvbmRpdGlvbnMgPVxuICAgICAgeCA+IDEwIHx8IHggPCAwIHx8IHkgPiAxMCB8fCB5IDwgMCB8fCB5ICsgbGVuZ3RoID4gMTA7XG5cbiAgICBpZiAoaW52YWxpZENvbmRpdGlvbnMpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIGNoZWNrcyBleGlzdGluZyBzaGlwc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeSArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5nYW1lQm9hcmRBcnJheVtpXVt4XS5zaGlwTmFtZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHkpIHtcbiAgICAvLyBjaGVja3MgaWYgdGhlIHBvc2l0aW9uIGlzIHZhbGlkIGJlZm9yZSBwbGFjaW5nXG4gICAgaWYgKHRoaXMuY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAuZ2V0U2hpcExlbmd0aCgpLCB4LCB5KSkge1xuICAgICAgLy8gZmlsbHMgc2hpcCBhcnJheVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldFNoaXBMZW5ndGgoKTsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXlbeSArIGldW3hdLnNoaXBOYW1lID0gc2hpcDtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmRBcnJheVt5ICsgaV1beF0uc2hpcEluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBpZiAodGhpcy5nYW1lQm9hcmRBcnJheVt5XVt4XS5zaGlwTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1pc3NlZEF0dGFja3MucHVzaCh7IHgsIHkgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXlbeV1beF0uc2hpcE5hbWUuaGl0KFxuICAgICAgICB0aGlzLmdhbWVCb2FyZEFycmF5W3ldW3hdLnNoaXBJbmRleFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBnZXRNaXNzZWRBdHRhY2tzKCkge1xuICAgIHJldHVybiB0aGlzLm1pc3NlZEF0dGFja3M7XG4gIH1cblxuICAvLyBjaGFuZ2VzIGJvb2xlYW4gdG8gdHJ1ZSBpZiBhbnkgc2hpcCBpbnNpZGUgaXMgbm90IHN1bmtcbiAgY2hlY2tBbGxTdW5rKCkge1xuICAgIGxldCBrZXkgPSB0cnVlO1xuICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLnNoaXBOYW1lKSB7XG4gICAgICAgICAgaWYgKGUuc2hpcE5hbWUuaXNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBrZXkgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBrZXk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkO1xuIiwiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50dXJuID0gdHJ1ZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBlbmRUdXJuKHBsYXllcjIpIHtcbiAgICBpZiAodGhpcy50dXJuID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnR1cm4gPSBmYWxzZTtcbiAgICAgIHBsYXllcjIuc3RhcnRUdXJuKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRUdXJuKCkge1xuICAgIGlmICh0aGlzLnR1cm4gPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnR1cm4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrVHVybigpIHtcbiAgICByZXR1cm4gdGhpcy50dXJuO1xuICB9XG5cbiAgLy8gYXR0YWNrcyBwbGFjZSB0aGUgaGl0IGFuZCBlbmRzIHR1cm5cbiAgYXR0YWNrKHgsIHksIHBsYXllcjIsIHBsYXllcjJCb2FyZCkge1xuICAgIGlmICh0aGlzLmNoZWNrVHVybigpKSB7XG4gICAgICBwbGF5ZXIyQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgIHRoaXMuZW5kVHVybihwbGF5ZXIyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuc2hpcCA9IHRoaXMuYnVpbGRTaGlwKCk7XG4gIH1cblxuICBidWlsZFNoaXAoKSB7XG4gICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4gICAgbGV0IGkgPSB0aGlzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgc2hpcEFycmF5LnB1c2goeyBoaXQ6IGZhbHNlIH0pO1xuICAgICAgaSAtPSAxO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcEFycmF5O1xuICB9XG5cbiAgZ2V0U2hpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlwO1xuICB9XG5cbiAgZ2V0U2hpcExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlwLmxlbmd0aDtcbiAgfVxuXG4gIGhpdChpbmRleCkge1xuICAgIHRoaXMuc2hpcFtpbmRleF0uaGl0ID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gIGNoZWNrSGl0KGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5oaXQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuc2hpcC5ldmVyeSh0aGlzLmNoZWNrSGl0KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5cbmNsYXNzIEFJIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW5lbXksIGVuZW15Qm9hcmQpIHtcbiAgICBzdXBlcihuYW1lLCBlbmVteUJvYXJkKTtcbiAgICB0aGlzLnR1cm4gPSBmYWxzZTtcbiAgICB0aGlzLmVuZW15UGxheWVyID0gZW5lbXk7XG4gICAgdGhpcy5lbmVteUJvYXJkID0gZW5lbXlCb2FyZDtcbiAgICB0aGlzLmF0dGFja0FycmF5ID0gW107XG4gIH1cblxuICBnZW5lcmF0ZVJhbmRvbUF0dGFjaygpIHtcbiAgICBpZiAodGhpcy5jaGVja1R1cm4oKSkge1xuICAgICAgY29uc3QgbnVtYmVyT2JqID0geyB4OiB1bmRlZmluZWQsIHk6IHVuZGVmaW5lZCB9O1xuXG4gICAgICAvLyBsb29wcyBmb3JldmVyIHVudGlsIGl0IGZpbmRzIGEgdmFsaWQgYXR0YWNrXG4gICAgICB3aGlsZSAodHlwZW9mIHggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCBzZWNvbmROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIG51bWJlck9iai54ID0gZmlyc3ROdW1iZXI7XG4gICAgICAgIG51bWJlck9iai55ID0gc2Vjb25kTnVtYmVyO1xuXG4gICAgICAgIC8vIGNoZWNrcyBpZiBtb3ZlIGhhcyBhbHJlYWR5IGJlZW4gcGxheWVkXG4gICAgICAgIGNvbnN0IHByZXZpb3VzQXR0YWNrID0gdGhpcy5hdHRhY2tBcnJheS5zb21lKFxuICAgICAgICAgIChlKSA9PiBlLnggPT09IG51bWJlck9iai54ICYmIGUueSA9PT0gbnVtYmVyT2JqLnlcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXByZXZpb3VzQXR0YWNrKSB7XG4gICAgICAgICAgdGhpcy5hdHRhY2tBcnJheS5wdXNoKG51bWJlck9iaik7XG4gICAgICAgICAgdGhpcy5hdHRhY2soXG4gICAgICAgICAgICBudW1iZXJPYmoueCxcbiAgICAgICAgICAgIG51bWJlck9iai55LFxuICAgICAgICAgICAgdGhpcy5lbmVteVBsYXllcixcbiAgICAgICAgICAgIHRoaXMuZW5lbXlCb2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRBdHRhY2tBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2tBcnJheTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBSTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vR2FtZUJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IEFJIGZyb20gJy4vYWknO1xuaW1wb3J0IHBsYWNlQUlTaGlwIGZyb20gJy4vcGxhY2VBSVNoaXAnO1xuaW1wb3J0IGRvbVF1ZXJpZXMgZnJvbSAnLi9kb21RdWVyaWVzJztcbmltcG9ydCBtYWtlRHJhZ2dhYmxlIGZyb20gJy4vbWFrZURyYWdnYWJsZSc7XG5pbXBvcnQgdXBkYXRlRGlzcGxheSBmcm9tICcuL3VwZGF0ZURpc3BsYXknO1xuaW1wb3J0IGVuZEdhbWUgZnJvbSAnLi9lbmRnYW1lJztcblxuY29uc3QgYnVpbGRHYW1lID0gKCkgPT4ge1xuICAvLyBnYW1lYm9hcmRzXG4gIGNvbnN0IHBsYXllckJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICBjb25zdCBhaUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuXG4gIC8vIHBsYXllcnNcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuICBjb25zdCBhaSA9IG5ldyBBSSgnQUknLCBwbGF5ZXIsIHBsYXllckJvYXJkKTtcblxuICAvLyBwbGF5ZXJTaGlwc1xuICBjb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoNSk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0KTtcbiAgY29uc3QgZGVzdHJveWVyID0gbmV3IFNoaXAoMyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKDMpO1xuICBjb25zdCBwYXRyb2xib2F0ID0gbmV3IFNoaXAoMik7XG5cbiAgLy8gQUkgU2hpcHNcbiAgY29uc3QgQUljYXJyaWVyID0gbmV3IFNoaXAoNSk7XG4gIGNvbnN0IEFJYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpO1xuICBjb25zdCBBSWRlc3Ryb3llciA9IG5ldyBTaGlwKDMpO1xuICBjb25zdCBBSXN1Ym1hcmluZSA9IG5ldyBTaGlwKDMpO1xuICBjb25zdCBBSXBhdHJvbGJvYXQgPSBuZXcgU2hpcCgyKTtcblxuICAvLyBtYWtlcyBwbGF5ZXIgYm9hdHMgZHJhZ2dhYmxlXG4gIG1ha2VEcmFnZ2FibGUoZG9tUXVlcmllcygpLmJhdHRsZXNoaXBIVE1MKTtcbiAgbWFrZURyYWdnYWJsZShkb21RdWVyaWVzKCkuY2FycmllckhUTUwpO1xuICBtYWtlRHJhZ2dhYmxlKGRvbVF1ZXJpZXMoKS5zdWJtYXJpbmVoaXBIVE1MKTtcbiAgbWFrZURyYWdnYWJsZShkb21RdWVyaWVzKCkuZGVzdHJveWVySFRNTCk7XG4gIG1ha2VEcmFnZ2FibGUoZG9tUXVlcmllcygpLnBhdHJvbGJvYXRIVE1MKTtcblxuICAvLyBwbGFjZXMgQUkgU2hpcHNcbiAgcGxhY2VBSVNoaXAoQUljYXJyaWVyLCBhaUJvYXJkKTtcbiAgcGxhY2VBSVNoaXAoQUliYXR0bGVzaGlwLCBhaUJvYXJkKTtcbiAgcGxhY2VBSVNoaXAoQUlkZXN0cm95ZXIsIGFpQm9hcmQpO1xuICBwbGFjZUFJU2hpcChBSXN1Ym1hcmluZSwgYWlCb2FyZCk7XG4gIHBsYWNlQUlTaGlwKEFJcGF0cm9sYm9hdCwgYWlCb2FyZCk7XG5cbiAgLy8gYXR0YWNrc1xuICBjb25zdCBhdHRhY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHggPSBlLmdldEF0dHJpYnV0ZSgnZGF0YS14Jyk7XG4gICAgY29uc3QgeSA9IGUuZ2V0QXR0cmlidXRlKCdkYXRhLXknKTtcbiAgICBwbGF5ZXIuYXR0YWNrKHgsIHksIGFpLCBhaUJvYXJkKTtcbiAgICB1cGRhdGVEaXNwbGF5KCdhaUJvYXJkJywgYWlCb2FyZCk7XG4gICAgZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgLy8gY2hlY2tzIGlmIGFsbCBzaGlwcyBhcmUgbWV0IGFuZCBjYWxscyBmb3Igd2lubmVyIGJlZm9yZSBlYWNoIHJvdW5kXG4gICAgaWYgKGFpQm9hcmQuY2hlY2tBbGxTdW5rKCkpIHtcbiAgICAgIGVuZEdhbWUocGxheWVyLmdldE5hbWUoKSk7XG4gICAgfVxuXG4gICAgYWkuZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICB1cGRhdGVEaXNwbGF5KCdwbGF5ZXJCb2FyZCcsIHBsYXllckJvYXJkKTtcblxuICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja0FsbFN1bmsoKSkge1xuICAgICAgZW5kR2FtZSgnQUknKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gZHJvcFNoaXAgLSB0aHJvdWdoIGRyYWdnaW5nXG4gIGNvbnN0IGRyb3BTaGlwID0gKGUpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpO1xuICAgIGNvbnN0IHggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpLCAxMCk7XG4gICAgY29uc3QgeSA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS15JyksIDEwKTtcblxuICAgIC8vIGhlbHBlciBmdW5jdGlvblxuICAgIGNvbnN0IHNldEJvYXJkVG9Eb20gPSAoYm9hdCkgPT4ge1xuICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKGJvYXQsIHgsIHkpO1xuICAgICAgdXBkYXRlRGlzcGxheSgncGxheWVyQm9hcmQnLCBwbGF5ZXJCb2FyZCk7XG4gICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGF0YX1gKTtcbiAgICAgIGRvbVF1ZXJpZXMoKS5kcmFnZ2FibGUucmVtb3ZlQ2hpbGQoc2hpcCk7XG4gICAgICBpZiAoZG9tUXVlcmllcygpLmRyYWdnYWJsZS5jaGlsZE5vZGVzLmxlbmd0aCA8PSA2KSB7XG4gICAgICAgIGRvbVF1ZXJpZXMoKS5kcmFnZ2FibGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9tUXVlcmllcygpLmVuZW15LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHN3aXRjaCAoZGF0YSkge1xuICAgICAgY2FzZSAnYmF0dGxlc2hpcCc6XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja1NoaXBQbGFjZW1lbnQoYmF0dGxlc2hpcC5sZW5ndGgsIHgsIHkpKSB7XG4gICAgICAgICAgc2V0Qm9hcmRUb0RvbShiYXR0bGVzaGlwKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NhcnJpZXInOlxuICAgICAgICBpZiAocGxheWVyQm9hcmQuY2hlY2tTaGlwUGxhY2VtZW50KGNhcnJpZXIubGVuZ3RoLCB4LCB5KSkge1xuICAgICAgICAgIHNldEJvYXJkVG9Eb20oY2Fycmllcik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdWJtYXJpbmUnOlxuICAgICAgICBpZiAocGxheWVyQm9hcmQuY2hlY2tTaGlwUGxhY2VtZW50KHN1Ym1hcmluZS5sZW5ndGgsIHgsIHkpKSB7XG4gICAgICAgICAgc2V0Qm9hcmRUb0RvbShzdWJtYXJpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVzdHJveWVyJzpcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmNoZWNrU2hpcFBsYWNlbWVudChkZXN0cm95ZXIubGVuZ3RoLCB4LCB5KSkge1xuICAgICAgICAgIHNldEJvYXJkVG9Eb20oZGVzdHJveWVyKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BhdHJvbGJvYXQnOlxuICAgICAgICBpZiAocGxheWVyQm9hcmQuY2hlY2tTaGlwUGxhY2VtZW50KHBhdHJvbGJvYXQubGVuZ3RoLCB4LCB5KSkge1xuICAgICAgICAgIHNldEJvYXJkVG9Eb20ocGF0cm9sYm9hdCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gZGF0YScpO1xuICAgIH1cbiAgfTtcblxuICAvLyBwbGFjZXMgYm9hcmRzIG9uIERPTVxuICBjb25zdCBidWlsZERPTWJvYXJkID0gKGJvYXJkTmFtZSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZE5hbWV9YCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIGopO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgaSk7XG5cbiAgICAgICAgLy8gYWRkcyBhdHRhY2tpbmcgdGhyb3VnaCBET01cbiAgICAgICAgaWYgKGJvYXJkTmFtZSA9PT0gJ2FpQm9hcmQnKSB7XG4gICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBhdHRhY2soZS50YXJnZXQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkTmFtZSA9PT0gJ3BsYXllckJvYXJkJykge1xuICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkcm9wU2hpcChlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZENsYXNzLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBidWlsZERPTWJvYXJkKCdwbGF5ZXJCb2FyZCcpO1xuICBidWlsZERPTWJvYXJkKCdhaUJvYXJkJyk7XG5cbiAgLy8gbmFtZVNldHRlclxuICBkb21RdWVyaWVzKCkubmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZSA9IGRvbVF1ZXJpZXMoKS5uYW1lSW5wdC52YWx1ZSB8fCAnUGxheWVyIDEnO1xuICAgIHBsYXllci5zZXROYW1lKG5hbWUpO1xuICAgIGRvbVF1ZXJpZXMoKS5wbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmdldE5hbWUoKX0ncyBib2FyZGA7XG4gICAgZG9tUXVlcmllcygpLm5hbWVNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGNhcnJpZXIsXG4gICAgYmF0dGxlc2hpcCxcbiAgICBkZXN0cm95ZXIsXG4gICAgc3VibWFyaW5lLFxuICAgIHBhdHJvbGJvYXQsXG4gICAgQUljYXJyaWVyLFxuICAgIEFJYmF0dGxlc2hpcCxcbiAgICBBSWRlc3Ryb3llcixcbiAgICBBSXN1Ym1hcmluZSxcbiAgICBBSXBhdHJvbGJvYXQsXG4gICAgcGxheWVyQm9hcmQsXG4gICAgYWlCb2FyZCxcbiAgICBwbGF5ZXIsXG4gICAgYWlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkR2FtZTtcbiIsImltcG9ydCBkb21RdWVyaWVzIGZyb20gJy4vZG9tUXVlcmllcyc7XG5pbXBvcnQgYnVpbGRHYW1lIGZyb20gJy4vYnVpbGRHYW1lJztcblxuY29uc3QgY3JlYXRlRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIC8vIHJlbG9hZGVyXG4gIGRvbVF1ZXJpZXMoKS5wbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUV2ZW50TGlzdGVuZXJzO1xuIiwiY29uc3QgZG9tUXVlcmllcyA9ICgpID0+IHtcbiAgY29uc3QgYmF0dGxlc2hpcEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmF0dGxlc2hpcCcpO1xuICBjb25zdCBjYXJyaWVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJyaWVyJyk7XG4gIGNvbnN0IHN1Ym1hcmluZUhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG4gIGNvbnN0IGRlc3Ryb3llckhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzdHJveWVyJyk7XG4gIGNvbnN0IHBhdHJvbGJvYXRIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhdHJvbGJvYXQnKTtcbiAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnYWJsZScpO1xuICBjb25zdCBlbmVteSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteScpO1xuICBjb25zdCBuYW1lTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgY29uc3QgbmFtZUlucHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZUlucHQnKTtcbiAgY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUZvcm0nKTtcbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJOYW1lJyk7XG4gIGNvbnN0IGVuZEdhbWVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZEdhbWVDb250ZW50Jyk7XG4gIGNvbnN0IGVuZEdhbWVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmRnYW1lJyk7XG4gIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5QWdhaW5CdXR0b24nKTtcbiAgY29uc3Qgd2lubmVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uZXJUZXh0Jyk7XG5cbiAgcmV0dXJuIHtcbiAgICBiYXR0bGVzaGlwSFRNTCxcbiAgICBjYXJyaWVySFRNTCxcbiAgICBzdWJtYXJpbmVIVE1MLFxuICAgIGRlc3Ryb3llckhUTUwsXG4gICAgcGF0cm9sYm9hdEhUTUwsXG4gICAgZHJhZ2dhYmxlLFxuICAgIGVuZW15LFxuICAgIG5hbWVNb2RhbCxcbiAgICBuYW1lSW5wdCxcbiAgICBuYW1lRm9ybSxcbiAgICBwbGF5ZXJOYW1lLFxuICAgIGVuZEdhbWVDb250ZW50LFxuICAgIGVuZEdhbWVNb2RhbCxcbiAgICBwbGF5QWdhaW5CdXR0b24sXG4gICAgd2lubmVyVGV4dFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tUXVlcmllcztcbiIsImltcG9ydCBkb21RdWVyaWVzIGZyb20gJy4vZG9tUXVlcmllcyc7XG5cbi8vIGNhbGxzIGZvciB3aW5uZXJcbmNvbnN0IGVuZEdhbWUgPSAod2lubmVyKSA9PiB7XG4gIGRvbVF1ZXJpZXMoKS5lbmRHYW1lTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgZG9tUXVlcmllcygpLndpbm5lclRleHQudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IGlzIHRoZSB3aW5uZXIhYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuZEdhbWU7XG4iLCJjb25zdCBtYWtlRHJhZ2dhYmxlID0gKCkgPT4ge1xuICAvLyBET01cbiAgY29uc3QgYmF0dGxlU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVzaGlwJyk7XG4gIGNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FycmllcicpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXN0cm95ZXInKTtcbiAgY29uc3QgcGF0cm9sYm9hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXRyb2xib2F0Jyk7XG5cbiAgY29uc3Qgc2V0RHJhZ2dlciA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmlkKTtcbiAgICB9KTtcbiAgfTtcblxuICBzZXREcmFnZ2VyKGJhdHRsZVNoaXApO1xuICBzZXREcmFnZ2VyKGNhcnJpZXIpO1xuICBzZXREcmFnZ2VyKHN1Ym1hcmluZSk7XG4gIHNldERyYWdnZXIoZGVzdHJveWVyKTtcbiAgc2V0RHJhZ2dlcihwYXRyb2xib2F0KTtcblxuICByZXR1cm4ge1xuICAgIGJhdHRsZVNoaXAsXG4gICAgY2FycmllcixcbiAgICBzdWJtYXJpbmUsXG4gICAgZGVzdHJveWVyLFxuICAgIHBhdHJvbGJvYXRcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VEcmFnZ2FibGU7XG4iLCJjb25zdCBwbGFjZUFJU2hpcCA9IChzaGlwLCBBSUJvYXJkKSA9PiB7XG4gIHdoaWxlICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgbnVtYmVyQXJyYXkgPSBbXTtcbiAgICBjb25zdCBmaXJzdE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBzZWNvbmROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbnVtYmVyQXJyYXkgPSBbZmlyc3ROdW1iZXIsIHNlY29uZE51bWJlcl07XG5cbiAgICBpZiAoXG4gICAgICBBSUJvYXJkLmNoZWNrU2hpcFBsYWNlbWVudChcbiAgICAgICAgc2hpcC5nZXRTaGlwTGVuZ3RoKCksXG4gICAgICAgIG51bWJlckFycmF5WzBdLFxuICAgICAgICBudW1iZXJBcnJheVsxXVxuICAgICAgKVxuICAgICkge1xuICAgICAgQUlCb2FyZC5wbGFjZVNoaXAoc2hpcCwgbnVtYmVyQXJyYXlbMF0sIG51bWJlckFycmF5WzFdKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxhY2VBSVNoaXA7XG4iLCJpbXBvcnQgbW91c2VTdmcgZnJvbSAnLi9pbWcvbW91c2UtbW92ZS12ZXJ0aWNhbC5zdmcnO1xuY29uc3Qgc2V0U3ZnID0gKCkgPT4ge1xuICBjb25zdCBzdmdDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdTdmcnKTtcblxuICBzdmdDb250YWluZXJzLmZvckVhY2goKGUpID0+IHtcbiAgICBlLmlubmVySFRNTCA9IG1vdXNlU3ZnO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldFN2ZztcbiIsIi8vIHVwZGF0ZXMgRE9NXG5jb25zdCB1cGRhdGVEaXNwbGF5ID0gKGJvYXJkTmFtZSwgYm9hcmQpID0+IHtcbiAgY29uc3QgYm9hcmRBcnJheSA9IGJvYXJkLmdldEdhbWVCb2FyZCgpO1xuICBjb25zdCBtaXNzZWQgPSBib2FyZC5nZXRNaXNzZWRBdHRhY2tzKCk7XG5cbiAgYm9hcmRBcnJheS5mb3JFYWNoKChyb3csIHkpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoY2VsbCwgeCkgPT4ge1xuICAgICAgaWYgKGNlbGwuc2hpcE5hbWUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNlbGwuc2hpcE5hbWUuY2hlY2tIaXQoY2VsbC5zaGlwTmFtZS5nZXRTaGlwKClbY2VsbC5zaGlwSW5kZXhdKSA9PT1cbiAgICAgICAgICB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLiR7Ym9hcmROYW1lfSBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXkgPVwiJHt5fVwiYFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2VsZWN0ZWRDZWxsLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgIHNlbGVjdGVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICBzZWxlY3RlZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnb2NjdXBpZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBjZWxsLnNoaXBOYW1lLmNoZWNrSGl0KGNlbGwuc2hpcE5hbWUuZ2V0U2hpcCgpW2NlbGwuc2hpcEluZGV4XSkgPT09XG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKGJvYXJkTmFtZSA9PT0gJ3BsYXllckJvYXJkJykge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC4ke2JvYXJkTmFtZX0gW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15ID1cIiR7eX1cIl1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBtaXNzZWQuZm9yRWFjaCgoYXR0YWNrKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtib2FyZE5hbWV9IFtkYXRhLXg9XCIke2F0dGFjay54fVwiXVtkYXRhLXkgPVwiJHthdHRhY2sueX1cIl1gXG4gICAgKTtcbiAgICBzZWxlY3RlZENlbGwudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZURpc3BsYXk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGJ1aWxkR2FtZSBmcm9tICcuL2J1aWxkR2FtZSc7XG5pbXBvcnQgY3JlYXRlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9jcmVhdGVFdmVudExpc3RlbmVycyc7XG5pbXBvcnQgc2V0U3ZnIGZyb20gJy4vc2V0U3ZnJztcblxuY29uc3QgbWFpbiA9ICgoKSA9PiB7XG4gIC8vIGluaXRpYWxpemVyXG4gIGJ1aWxkR2FtZSgpO1xuICBjcmVhdGVFdmVudExpc3RlbmVycygpO1xuICBzZXRTdmcoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=