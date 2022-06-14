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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  --slate0: #94a3b8;\n  --slate1: #64748b;\n  --slate2: #475569;\n  --slate3: #f1f5f9;\n  --limte5: #84cc16;\n  --semiWhite: #f1f5f9;\n  --amber1: #fde68a;\n  --amber2: #fffbeb;\n  --occupied: #d97706;\n  --hit: #dc2626;\n  --fontSizeSemiHighlight: 1.2rem;\n  --fontSizeHighlight: 1.8rem;\n  --fontSizeExtra: 1.9rem;\n  --fontSizeHitMob: 1.3rem;\n  --borderRadiusBig: 2rem;\n  --borderRadiusSmall: 0.8rem;\n  --miniPadding: 0.5rem;\n  --bigPadding: 1.5rem;\n  --myBorder: 1px solid var(--slate0);\n  --normalGap: 1.5rem;\n  --megaGap: 5rem;\n  --shipBlocksPc: 3rem;\n  --shipBlocksMob: 1.9rem;\n  --svgSize: 1.5rem;\n  --shipBlocksBorder: #475569 solid 0.1rem;\n}\nbody,\nhtml {\n  margin: 0;\n  min-height: 100vh;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\nsvg {\n  width: var(--svgSize);\n  height: var(--svgSize);\n  padding: var(--miniPadding);\n}\n@media screen and (min-width: 1060px) {\n  .content {\n    flex-wrap: nowrap;\n  }\n  .cell,\n  .shipBlock {\n    min-width: var(--shipBlocksPc);\n    min-height: var(--shipBlocksPc);\n    max-width: var(--shipBlocksPc);\n    max-height: var(--shipBlocksPc);\n  }\n  .header {\n    min-height: 8vh;\n    font-size: var(--fontSizeExtra);\n  }\n  #playerName {\n    font-size: var(--fontSizeSemiHighlight);\n    font-weight: bold;\n  }\n  .hit,\n  .missed {\n    font-size: var(--fontSizeExtra);\n  }\n}\n\n@media screen and (max-width: 1059px) {\n  .content {\n    flex-wrap: wrap;\n  }\n  .cell,\n  .shipBlock {\n    min-width: var(--shipBlocksMob);\n    min-height: var(--shipBlocksMob);\n  }\n  .shipBlock {\n    max-width: var(--shipBlocksMob);\n    max-height: var(--shipBlocksMob);\n  }\n  .header {\n    height: 5vh;\n    font-size: var(--fontSizeSemiHighlight);\n  }\n  #playerName {\n    font-size: var(--fontSizeSemiHighlight);\n    font-weight: bold;\n  }\n  .hit,\n  .missed {\n    font-size: var(--fontSizeHitMob);\n  }\n}\n\n.header {\n  background: var(--slate2);\n  color: var(--semiWhite);\n}\n\n.header,\n.nameForm,\n.content,\n.cell,\n.gameBoard,\n.enemy,\n.draggable,\n.player,\n.modal,\n.dragSvg,\n.carrier,\n.ship,\n#endGameContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nameForm {\n  position: relative;\n  align-self: center;\n  padding: var(--bigPadding);\n  flex-direction: column;\n  gap: 1rem;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bolder;\n  background-color: var(--slate2);\n  color: var(--semiWhite);\n  box-shadow: 0 6px 10px 0 rgba(1, 1, 1, 0.2), 0 8px 30px 0 rgba(2, 2, 2, 0.25);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusBig);\n}\n/* removes excess margins */\n.nameForm > *,\n#playerName {\n  margin: 0;\n}\n#playerName {\n  padding: var(--miniPadding);\n}\n#submitBtn,\n#playAgainButton,\n#endGameContent {\n  max-width: 85vw;\n  min-height: 5vh;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bold;\n  color: var(--slate2);\n  background-color: var(--semiWhite);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  padding: var(--miniPadding);\n}\n#endGameContent {\n  min-width: 50vw;\n  min-height: 15vh;\n  gap: var(--normalGap);\n}\n.content {\n  padding: var(--bigPadding);\n  min-height: 90vh;\n  background-color: var(--slate3);\n  justify-content: space-evenly;\n  gap: var(--normalGap);\n}\n.gameBoard,\n.enemy,\n.draggable,\n.player {\n  flex-direction: column;\n  align-content: space-around;\n  min-width: 45vw;\n}\n.enemy {\n  display: none;\n}\n.draggable {\n  min-width: 45vw;\n  flex-direction: row;\n  justify-self: flex-end;\n  gap: var(--normalGap);\n}\n.shipBlock,\n.cell {\n  border: var(--shipBlocksBorder);\n  background-color: var(--slate0);\n}\n.shipBlock {\n  background-color: var(--limte5);\n}\n.playerBoard,\n.aiBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.hit,\n.missed {\n  color: var(--semiWhite);\n  font-weight: bold;\n}\n.hit {\n  background-color: var(--hit);\n}\n.missed {\n  background-color: var(--slate1);\n}\n.occupied {\n  background-color: var(--occupied);\n}\n.modal {\n  position: fixed;\n  z-index: 9999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#modalContent p {\n  padding: 0;\n  margin: 0;\n}\n#nameInpt {\n  height: auto;\n  color: var(--slate2);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  font-size: var(--fontSizeSemiHighlight);\n  padding: var(--miniPadding);\n}\n.endgame {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  z-index: 9999;\n  padding-top: 130px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n/* center ships and SVGs */\n.ship {\n  flex-direction: column;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  --slate0: #94a3b8;\n  --slate1: #64748b;\n  --slate2: #475569;\n  --slate3: #f1f5f9;\n  --limte5: #84cc16;\n  --semiWhite: #f1f5f9;\n  --amber1: #fde68a;\n  --amber2: #fffbeb;\n  --occupied: #d97706;\n  --hit: #dc2626;\n  --fontSizeSemiHighlight: 1.2rem;\n  --fontSizeHighlight: 1.8rem;\n  --fontSizeExtra: 1.9rem;\n  --fontSizeHitMob: 1.3rem;\n  --borderRadiusBig: 2rem;\n  --borderRadiusSmall: 0.8rem;\n  --miniPadding: 0.5rem;\n  --bigPadding: 1.5rem;\n  --myBorder: 1px solid var(--slate0);\n  --normalGap: 1.5rem;\n  --megaGap: 5rem;\n  --shipBlocksPc: 3rem;\n  --shipBlocksMob: 1.9rem;\n  --svgSize: 1.5rem;\n  --shipBlocksBorder: #475569 solid 0.1rem;\n}\nbody,\nhtml {\n  margin: 0;\n  min-height: 100vh;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\nsvg {\n  width: var(--svgSize);\n  height: var(--svgSize);\n  padding: var(--miniPadding);\n}\n@media screen and (min-width: 1060px) {\n  .content {\n    flex-wrap: nowrap;\n  }\n  .cell,\n  .shipBlock {\n    min-width: var(--shipBlocksPc);\n    min-height: var(--shipBlocksPc);\n    max-width: var(--shipBlocksPc);\n    max-height: var(--shipBlocksPc);\n  }\n  .header {\n    min-height: 8vh;\n    font-size: var(--fontSizeExtra);\n  }\n  #playerName {\n    font-size: var(--fontSizeSemiHighlight);\n    font-weight: bold;\n  }\n  .hit,\n  .missed {\n    font-size: var(--fontSizeExtra);\n  }\n}\n\n@media screen and (max-width: 1059px) {\n  .content {\n    flex-wrap: wrap;\n  }\n  .cell,\n  .shipBlock {\n    min-width: var(--shipBlocksMob);\n    min-height: var(--shipBlocksMob);\n  }\n  .shipBlock {\n    max-width: var(--shipBlocksMob);\n    max-height: var(--shipBlocksMob);\n  }\n  .header {\n    height: 5vh;\n    font-size: var(--fontSizeSemiHighlight);\n  }\n  #playerName {\n    font-size: var(--fontSizeSemiHighlight);\n    font-weight: bold;\n  }\n  .hit,\n  .missed {\n    font-size: var(--fontSizeHitMob);\n  }\n}\n\n.header {\n  background: var(--slate2);\n  color: var(--semiWhite);\n}\n\n.header,\n.nameForm,\n.content,\n.cell,\n.gameBoard,\n.enemy,\n.draggable,\n.player,\n.modal,\n.dragSvg,\n.carrier,\n.ship,\n#endGameContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nameForm {\n  position: relative;\n  align-self: center;\n  padding: var(--bigPadding);\n  flex-direction: column;\n  gap: 1rem;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bolder;\n  background-color: var(--slate2);\n  color: var(--semiWhite);\n  box-shadow: 0 6px 10px 0 rgba(1, 1, 1, 0.2), 0 8px 30px 0 rgba(2, 2, 2, 0.25);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusBig);\n}\n/* removes excess margins */\n.nameForm > *,\n#playerName {\n  margin: 0;\n}\n#playerName {\n  padding: var(--miniPadding);\n}\n#submitBtn,\n#playAgainButton,\n#endGameContent {\n  max-width: 85vw;\n  min-height: 5vh;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bold;\n  color: var(--slate2);\n  background-color: var(--semiWhite);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  padding: var(--miniPadding);\n}\n#endGameContent {\n  min-width: 50vw;\n  min-height: 15vh;\n  gap: var(--normalGap);\n}\n.content {\n  padding: var(--bigPadding);\n  min-height: 90vh;\n  background-color: var(--slate3);\n  justify-content: space-evenly;\n  gap: var(--normalGap);\n}\n.gameBoard,\n.enemy,\n.draggable,\n.player {\n  flex-direction: column;\n  align-content: space-around;\n  min-width: 45vw;\n}\n.enemy {\n  display: none;\n}\n.draggable {\n  min-width: 45vw;\n  flex-direction: row;\n  justify-self: flex-end;\n  gap: var(--normalGap);\n}\n.shipBlock,\n.cell {\n  border: var(--shipBlocksBorder);\n  background-color: var(--slate0);\n}\n.shipBlock {\n  background-color: var(--limte5);\n}\n.playerBoard,\n.aiBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.hit,\n.missed {\n  color: var(--semiWhite);\n  font-weight: bold;\n}\n.hit {\n  background-color: var(--hit);\n}\n.missed {\n  background-color: var(--slate1);\n}\n.occupied {\n  background-color: var(--occupied);\n}\n.modal {\n  position: fixed;\n  z-index: 9999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#modalContent p {\n  padding: 0;\n  margin: 0;\n}\n#nameInpt {\n  height: auto;\n  color: var(--slate2);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  font-size: var(--fontSizeSemiHighlight);\n  padding: var(--miniPadding);\n}\n.endgame {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  z-index: 9999;\n  padding-top: 130px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n/* center ships and SVGs */\n.ship {\n  flex-direction: column;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/img/gesture-tap.svg":
/*!*********************************!*\
  !*** ./src/img/gesture-tap.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z\"></path></svg>"

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

  // eslint-disable-next-line class-methods-use-this
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

  // builds an array of hittable entries for every ship
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
  // checks array position for hit
  checkHit(item) {
    if (item.hit === true) {
      return true;
    }
    return false;
  }

  // checks wether every position on the array is hit
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


const createEventListeners = () => {
  // reloader
  (0,_domQueries__WEBPACK_IMPORTED_MODULE_0__["default"])().playAgainButton.addEventListener('click', () => {
    window.location.reload();
  });

  // focus on name window
  const processKbdInpt = (e, key) => {
    if (key === 'Enter') {
      const submit = document.querySelector('#submitBtn');
      submit.submit();
    } else (0,_domQueries__WEBPACK_IMPORTED_MODULE_0__["default"])().nameInpt.focus();
  };
  window.addEventListener('keydown', (e) => {
    processKbdInpt(e, e.key);
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
/* harmony import */ var _img_gesture_tap_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/gesture-tap.svg */ "./src/img/gesture-tap.svg");
/* harmony import */ var _img_gesture_tap_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_gesture_tap_svg__WEBPACK_IMPORTED_MODULE_0__);


const setSvg = () => {
  const svgContainers = document.querySelectorAll('.dragSvg');

  svgContainers.forEach((e) => {
    e.innerHTML = (_img_gesture_tap_svg__WEBPACK_IMPORTED_MODULE_0___default());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsV0FBVyxXQUFXLEVBQUUsY0FBYyxFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsV0FBVyxXQUFXLEVBQUUsY0FBYyxFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxVQUFVLFdBQVcsV0FBVyxTQUFTLGNBQWMsU0FBUztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7O1VDekM3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FnQztBQUNJO0FBQ3NCO0FBQzVCOztBQUU5QjtBQUNBO0FBQ0EsRUFBRSxzREFBUztBQUNYLEVBQUUsaUVBQW9CO0FBQ3RCLEVBQUUsbURBQU07QUFDUixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ltZy9nZXN0dXJlLXRhcC5zdmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9idWlsZEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jcmVhdGVFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbVF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbmRnYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFrZURyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYWNlQUlTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2V0U3ZnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXBkYXRlRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgLS1zbGF0ZTA6ICM5NGEzYjg7XFxuICAtLXNsYXRlMTogIzY0NzQ4YjtcXG4gIC0tc2xhdGUyOiAjNDc1NTY5O1xcbiAgLS1zbGF0ZTM6ICNmMWY1Zjk7XFxuICAtLWxpbXRlNTogIzg0Y2MxNjtcXG4gIC0tc2VtaVdoaXRlOiAjZjFmNWY5O1xcbiAgLS1hbWJlcjE6ICNmZGU2OGE7XFxuICAtLWFtYmVyMjogI2ZmZmJlYjtcXG4gIC0tb2NjdXBpZWQ6ICNkOTc3MDY7XFxuICAtLWhpdDogI2RjMjYyNjtcXG4gIC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0OiAxLjJyZW07XFxuICAtLWZvbnRTaXplSGlnaGxpZ2h0OiAxLjhyZW07XFxuICAtLWZvbnRTaXplRXh0cmE6IDEuOXJlbTtcXG4gIC0tZm9udFNpemVIaXRNb2I6IDEuM3JlbTtcXG4gIC0tYm9yZGVyUmFkaXVzQmlnOiAycmVtO1xcbiAgLS1ib3JkZXJSYWRpdXNTbWFsbDogMC44cmVtO1xcbiAgLS1taW5pUGFkZGluZzogMC41cmVtO1xcbiAgLS1iaWdQYWRkaW5nOiAxLjVyZW07XFxuICAtLW15Qm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2xhdGUwKTtcXG4gIC0tbm9ybWFsR2FwOiAxLjVyZW07XFxuICAtLW1lZ2FHYXA6IDVyZW07XFxuICAtLXNoaXBCbG9ja3NQYzogM3JlbTtcXG4gIC0tc2hpcEJsb2Nrc01vYjogMS45cmVtO1xcbiAgLS1zdmdTaXplOiAxLjVyZW07XFxuICAtLXNoaXBCbG9ja3NCb3JkZXI6ICM0NzU1Njkgc29saWQgMC4xcmVtO1xcbn1cXG5ib2R5LFxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5zdmcge1xcbiAgd2lkdGg6IHZhcigtLXN2Z1NpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zdmdTaXplKTtcXG4gIHBhZGRpbmc6IHZhcigtLW1pbmlQYWRkaW5nKTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA2MHB4KSB7XFxuICAuY29udGVudCB7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgfVxcbiAgLmNlbGwsXFxuICAuc2hpcEJsb2NrIHtcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzUGMpO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1zaGlwQmxvY2tzUGMpO1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLXNoaXBCbG9ja3NQYyk7XFxuICAgIG1heC1oZWlnaHQ6IHZhcigtLXNoaXBCbG9ja3NQYyk7XFxuICB9XFxuICAuaGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogOHZoO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplRXh0cmEpO1xcbiAgfVxcbiAgI3BsYXllck5hbWUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmhpdCxcXG4gIC5taXNzZWQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplRXh0cmEpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDU5cHgpIHtcXG4gIC5jb250ZW50IHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbiAgLmNlbGwsXFxuICAuc2hpcEJsb2NrIHtcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzTW9iKTtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tc2hpcEJsb2Nrc01vYik7XFxuICB9XFxuICAuc2hpcEJsb2NrIHtcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzTW9iKTtcXG4gICAgbWF4LWhlaWdodDogdmFyKC0tc2hpcEJsb2Nrc01vYik7XFxuICB9XFxuICAuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0KTtcXG4gIH1cXG4gICNwbGF5ZXJOYW1lIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC5oaXQsXFxuICAubWlzc2VkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUhpdE1vYik7XFxuICB9XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2xhdGUyKTtcXG4gIGNvbG9yOiB2YXIoLS1zZW1pV2hpdGUpO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5uYW1lRm9ybSxcXG4uY29udGVudCxcXG4uY2VsbCxcXG4uZ2FtZUJvYXJkLFxcbi5lbmVteSxcXG4uZHJhZ2dhYmxlLFxcbi5wbGF5ZXIsXFxuLm1vZGFsLFxcbi5kcmFnU3ZnLFxcbi5jYXJyaWVyLFxcbi5zaGlwLFxcbiNlbmRHYW1lQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmFtZUZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tYmlnUGFkZGluZyk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlMik7XFxuICBjb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKDEsIDEsIDEsIDAuMiksIDAgOHB4IDMwcHggMCByZ2JhKDIsIDIsIDIsIDAuMjUpO1xcbiAgYm9yZGVyOiB2YXIoLS1teUJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXNCaWcpO1xcbn1cXG4vKiByZW1vdmVzIGV4Y2VzcyBtYXJnaW5zICovXFxuLm5hbWVGb3JtID4gKixcXG4jcGxheWVyTmFtZSB7XFxuICBtYXJnaW46IDA7XFxufVxcbiNwbGF5ZXJOYW1lIHtcXG4gIHBhZGRpbmc6IHZhcigtLW1pbmlQYWRkaW5nKTtcXG59XFxuI3N1Ym1pdEJ0bixcXG4jcGxheUFnYWluQnV0dG9uLFxcbiNlbmRHYW1lQ29udGVudCB7XFxuICBtYXgtd2lkdGg6IDg1dnc7XFxuICBtaW4taGVpZ2h0OiA1dmg7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGJvcmRlcjogdmFyKC0tbXlCb3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzU21hbGwpO1xcbiAgcGFkZGluZzogdmFyKC0tbWluaVBhZGRpbmcpO1xcbn1cXG4jZW5kR2FtZUNvbnRlbnQge1xcbiAgbWluLXdpZHRoOiA1MHZ3O1xcbiAgbWluLWhlaWdodDogMTV2aDtcXG4gIGdhcDogdmFyKC0tbm9ybWFsR2FwKTtcXG59XFxuLmNvbnRlbnQge1xcbiAgcGFkZGluZzogdmFyKC0tYmlnUGFkZGluZyk7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUzKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZ2FwOiB2YXIoLS1ub3JtYWxHYXApO1xcbn1cXG4uZ2FtZUJvYXJkLFxcbi5lbmVteSxcXG4uZHJhZ2dhYmxlLFxcbi5wbGF5ZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1pbi13aWR0aDogNDV2dztcXG59XFxuLmVuZW15IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5kcmFnZ2FibGUge1xcbiAgbWluLXdpZHRoOiA0NXZ3O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBnYXA6IHZhcigtLW5vcm1hbEdhcCk7XFxufVxcbi5zaGlwQmxvY2ssXFxuLmNlbGwge1xcbiAgYm9yZGVyOiB2YXIoLS1zaGlwQmxvY2tzQm9yZGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlMCk7XFxufVxcbi5zaGlwQmxvY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltdGU1KTtcXG59XFxuLnBsYXllckJvYXJkLFxcbi5haUJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4uaGl0LFxcbi5taXNzZWQge1xcbiAgY29sb3I6IHZhcigtLXNlbWlXaGl0ZSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlMSk7XFxufVxcbi5vY2N1cGllZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2N1cGllZCk7XFxufVxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuI21vZGFsQ29udGVudCBwIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbiNuYW1lSW5wdCB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBjb2xvcjogdmFyKC0tc2xhdGUyKTtcXG4gIGJvcmRlcjogdmFyKC0tbXlCb3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzU21hbGwpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgcGFkZGluZzogdmFyKC0tbWluaVBhZGRpbmcpO1xcbn1cXG4uZW5kZ2FtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHBhZGRpbmctdG9wOiAxMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4vKiBjZW50ZXIgc2hpcHMgYW5kIFNWR3MgKi9cXG4uc2hpcCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJB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QUFhO0VBQ2Isb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsdUNBQXVDO0VBQ3ZDLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7QUFDQSwwQkFBMEI7QUFDMUI7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgLS1zbGF0ZTA6ICM5NGEzYjg7XFxuICAtLXNsYXRlMTogIzY0NzQ4YjtcXG4gIC0tc2xhdGUyOiAjNDc1NTY5O1xcbiAgLS1zbGF0ZTM6ICNmMWY1Zjk7XFxuICAtLWxpbXRlNTogIzg0Y2MxNjtcXG4gIC0tc2VtaVdoaXRlOiAjZjFmNWY5O1xcbiAgLS1hbWJlcjE6ICNmZGU2OGE7XFxuICAtLWFtYmVyMjogI2ZmZmJlYjtcXG4gIC0tb2NjdXBpZWQ6ICNkOTc3MDY7XFxuICAtLWhpdDogI2RjMjYyNjtcXG4gIC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0OiAxLjJyZW07XFxuICAtLWZvbnRTaXplSGlnaGxpZ2h0OiAxLjhyZW07XFxuICAtLWZvbnRTaXplRXh0cmE6IDEuOXJlbTtcXG4gIC0tZm9udFNpemVIaXRNb2I6IDEuM3JlbTtcXG4gIC0tYm9yZGVyUmFkaXVzQmlnOiAycmVtO1xcbiAgLS1ib3JkZXJSYWRpdXNTbWFsbDogMC44cmVtO1xcbiAgLS1taW5pUGFkZGluZzogMC41cmVtO1xcbiAgLS1iaWdQYWRkaW5nOiAxLjVyZW07XFxuICAtLW15Qm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2xhdGUwKTtcXG4gIC0tbm9ybWFsR2FwOiAxLjVyZW07XFxuICAtLW1lZ2FHYXA6IDVyZW07XFxuICAtLXNoaXBCbG9ja3NQYzogM3JlbTtcXG4gIC0tc2hpcEJsb2Nrc01vYjogMS45cmVtO1xcbiAgLS1zdmdTaXplOiAxLjVyZW07XFxuICAtLXNoaXBCbG9ja3NCb3JkZXI6ICM0NzU1Njkgc29saWQgMC4xcmVtO1xcbn1cXG5ib2R5LFxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5zdmcge1xcbiAgd2lkdGg6IHZhcigtLXN2Z1NpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zdmdTaXplKTtcXG4gIHBhZGRpbmc6IHZhcigtLW1pbmlQYWRkaW5nKTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA2MHB4KSB7XFxuICAuY29udGVudCB7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgfVxcbiAgLmNlbGwsXFxuICAuc2hpcEJsb2NrIHtcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzUGMpO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1zaGlwQmxvY2tzUGMpO1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLXNoaXBCbG9ja3NQYyk7XFxuICAgIG1heC1oZWlnaHQ6IHZhcigtLXNoaXBCbG9ja3NQYyk7XFxuICB9XFxuICAuaGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogOHZoO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplRXh0cmEpO1xcbiAgfVxcbiAgI3BsYXllck5hbWUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmhpdCxcXG4gIC5taXNzZWQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplRXh0cmEpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDU5cHgpIHtcXG4gIC5jb250ZW50IHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbiAgLmNlbGwsXFxuICAuc2hpcEJsb2NrIHtcXG4gICAgbWluLXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzTW9iKTtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tc2hpcEJsb2Nrc01vYik7XFxuICB9XFxuICAuc2hpcEJsb2NrIHtcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1zaGlwQmxvY2tzTW9iKTtcXG4gICAgbWF4LWhlaWdodDogdmFyKC0tc2hpcEJsb2Nrc01vYik7XFxuICB9XFxuICAuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0KTtcXG4gIH1cXG4gICNwbGF5ZXJOYW1lIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC5oaXQsXFxuICAubWlzc2VkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUhpdE1vYik7XFxuICB9XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2xhdGUyKTtcXG4gIGNvbG9yOiB2YXIoLS1zZW1pV2hpdGUpO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5uYW1lRm9ybSxcXG4uY29udGVudCxcXG4uY2VsbCxcXG4uZ2FtZUJvYXJkLFxcbi5lbmVteSxcXG4uZHJhZ2dhYmxlLFxcbi5wbGF5ZXIsXFxuLm1vZGFsLFxcbi5kcmFnU3ZnLFxcbi5jYXJyaWVyLFxcbi5zaGlwLFxcbiNlbmRHYW1lQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmFtZUZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tYmlnUGFkZGluZyk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlMik7XFxuICBjb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKDEsIDEsIDEsIDAuMiksIDAgOHB4IDMwcHggMCByZ2JhKDIsIDIsIDIsIDAuMjUpO1xcbiAgYm9yZGVyOiB2YXIoLS1teUJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXNCaWcpO1xcbn1cXG4vKiByZW1vdmVzIGV4Y2VzcyBtYXJnaW5zICovXFxuLm5hbWVGb3JtID4gKixcXG4jcGxheWVyTmFtZSB7XFxuICBtYXJnaW46IDA7XFxufVxcbiNwbGF5ZXJOYW1lIHtcXG4gIHBhZGRpbmc6IHZhcigtLW1pbmlQYWRkaW5nKTtcXG59XFxuI3N1Ym1pdEJ0bixcXG4jcGxheUFnYWluQnV0dG9uLFxcbiNlbmRHYW1lQ29udGVudCB7XFxuICBtYXgtd2lkdGg6IDg1dnc7XFxuICBtaW4taGVpZ2h0OiA1dmg7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGJvcmRlcjogdmFyKC0tbXlCb3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzU21hbGwpO1xcbiAgcGFkZGluZzogdmFyKC0tbWluaVBhZGRpbmcpO1xcbn1cXG4jZW5kR2FtZUNvbnRlbnQge1xcbiAgbWluLXdpZHRoOiA1MHZ3O1xcbiAgbWluLWhlaWdodDogMTV2aDtcXG4gIGdhcDogdmFyKC0tbm9ybWFsR2FwKTtcXG59XFxuLmNvbnRlbnQge1xcbiAgcGFkZGluZzogdmFyKC0tYmlnUGFkZGluZyk7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUzKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZ2FwOiB2YXIoLS1ub3JtYWxHYXApO1xcbn1cXG4uZ2FtZUJvYXJkLFxcbi5lbmVteSxcXG4uZHJhZ2dhYmxlLFxcbi5wbGF5ZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1pbi13aWR0aDogNDV2dztcXG59XFxuLmVuZW15IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5kcmFnZ2FibGUge1xcbiAgbWluLXdpZHRoOiA0NXZ3O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBnYXA6IHZhcigtLW5vcm1hbEdhcCk7XFxufVxcbi5zaGlwQmxvY2ssXFxuLmNlbGwge1xcbiAgYm9yZGVyOiB2YXIoLS1zaGlwQmxvY2tzQm9yZGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlMCk7XFxufVxcbi5zaGlwQmxvY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltdGU1KTtcXG59XFxuLnBsYXllckJvYXJkLFxcbi5haUJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4uaGl0LFxcbi5taXNzZWQge1xcbiAgY29sb3I6IHZhcigtLXNlbWlXaGl0ZSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlMSk7XFxufVxcbi5vY2N1cGllZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2N1cGllZCk7XFxufVxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuI21vZGFsQ29udGVudCBwIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbiNuYW1lSW5wdCB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBjb2xvcjogdmFyKC0tc2xhdGUyKTtcXG4gIGJvcmRlcjogdmFyKC0tbXlCb3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzU21hbGwpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgcGFkZGluZzogdmFyKC0tbWluaVBhZGRpbmcpO1xcbn1cXG4uZW5kZ2FtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHBhZGRpbmctdG9wOiAxMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4vKiBjZW50ZXIgc2hpcHMgYW5kIFNWR3MgKi9cXG4uc2hpcCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTAsOUExLDEgMCAwLDEgMTEsOEExLDEgMCAwLDEgMTIsOVYxMy40N0wxMy4yMSwxMy42TDE4LjE1LDE1Ljc5QzE4LjY4LDE2LjAzIDE5LDE2LjU2IDE5LDE3LjE0VjIxLjVDMTguOTcsMjIuMzIgMTguMzIsMjIuOTcgMTcuNSwyM0gxMUMxMC42MiwyMyAxMC4yNiwyMi44NSAxMCwyMi41N0w1LjEsMTguMzdMNS44NCwxNy42QzYuMDMsMTcuMzkgNi4zLDE3LjI4IDYuNTgsMTcuMjhINi44TDEwLDE5VjlNMTEsNUE0LDQgMCAwLDEgMTUsOUMxNSwxMC41IDE0LjIsMTEuNzcgMTMsMTIuNDZWMTEuMjRDMTMuNjEsMTAuNjkgMTQsOS44OSAxNCw5QTMsMyAwIDAsMCAxMSw2QTMsMyAwIDAsMCA4LDlDOCw5Ljg5IDguMzksMTAuNjkgOSwxMS4yNFYxMi40NkM3LjgsMTEuNzcgNywxMC41IDcsOUE0LDQgMCAwLDEgMTEsNVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXkgPSB0aGlzLmJ1aWxkR2FtZUJvYXJkKCk7XG4gICAgdGhpcy5taXNzZWRBdHRhY2tzID0gW107XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBidWlsZEdhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBhcnJheUl0ZW0gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBhcnJheUl0ZW0ucHVzaCh7IHNoaXBOYW1lOiB1bmRlZmluZWQsIHNoaXBJbmRleDogdW5kZWZpbmVkIH0pO1xuICAgICAgfVxuICAgICAgYXJyYXkucHVzaChhcnJheUl0ZW0pO1xuICAgICAgLy8gcmVzZXQgYmVmb3JlIG5leHQgaXRlcmF0aW9uXG4gICAgICBhcnJheUl0ZW0gPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgZ2V0R2FtZUJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZEFycmF5O1xuICB9XG5cbiAgY2hlY2tTaGlwUGxhY2VtZW50KGxlbmd0aCwgeCwgeSkge1xuICAgIC8vIGNvbmRpdGlvbnMgdGhhdCBleHRyYXBvbGF0ZSB0aGUgZ2FtZWJvYXJkXG4gICAgY29uc3QgaW52YWxpZENvbmRpdGlvbnMgPVxuICAgICAgeCA+IDEwIHx8IHggPCAwIHx8IHkgPiAxMCB8fCB5IDwgMCB8fCB5ICsgbGVuZ3RoID4gMTA7XG4gICAgaWYgKGludmFsaWRDb25kaXRpb25zKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjaGVja3MgZXhpc3Rpbmcgc2hpcHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHkgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuZ2FtZUJvYXJkQXJyYXlbaV1beF0uc2hpcE5hbWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCB4LCB5KSB7XG4gICAgLy8gY2hlY2tzIGlmIHRoZSBwb3NpdGlvbiBpcyB2YWxpZCBiZWZvcmUgcGxhY2luZ1xuICAgIGlmICh0aGlzLmNoZWNrU2hpcFBsYWNlbWVudChzaGlwLmdldFNoaXBMZW5ndGgoKSwgeCwgeSkpIHtcbiAgICAgIC8vIGZpbGxzIHNoaXAgYXJyYXlcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRTaGlwTGVuZ3RoKCk7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmdhbWVCb2FyZEFycmF5W3kgKyBpXVt4XS5zaGlwTmFtZSA9IHNoaXA7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXlbeSArIGldW3hdLnNoaXBJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgaWYgKHRoaXMuZ2FtZUJvYXJkQXJyYXlbeV1beF0uc2hpcE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goeyB4LCB5IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdhbWVCb2FyZEFycmF5W3ldW3hdLnNoaXBOYW1lLmhpdChcbiAgICAgICAgdGhpcy5nYW1lQm9hcmRBcnJheVt5XVt4XS5zaGlwSW5kZXhcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TWlzc2VkQXR0YWNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5taXNzZWRBdHRhY2tzO1xuICB9XG5cbiAgLy8gY2hhbmdlcyBib29sZWFuIHRvIHRydWUgaWYgYW55IHNoaXAgaW5zaWRlIGlzIG5vdCBzdW5rXG4gIGNoZWNrQWxsU3VuaygpIHtcbiAgICBsZXQga2V5ID0gdHJ1ZTtcbiAgICB0aGlzLmdhbWVCb2FyZEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5zaGlwTmFtZSkge1xuICAgICAgICAgIGlmIChlLnNoaXBOYW1lLmlzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAga2V5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHVybiA9IHRydWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZW5kVHVybihwbGF5ZXIyKSB7XG4gICAgaWYgKHRoaXMudHVybiA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgICBwbGF5ZXIyLnN0YXJ0VHVybigpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VHVybigpIHtcbiAgICBpZiAodGhpcy50dXJuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy50dXJuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjaGVja1R1cm4oKSB7XG4gICAgcmV0dXJuIHRoaXMudHVybjtcbiAgfVxuXG4gIC8vIGF0dGFja3MgcGxhY2UgdGhlIGhpdCBhbmQgZW5kcyB0dXJuXG4gIGF0dGFjayh4LCB5LCBwbGF5ZXIyLCBwbGF5ZXIyQm9hcmQpIHtcbiAgICBpZiAodGhpcy5jaGVja1R1cm4oKSkge1xuICAgICAgcGxheWVyMkJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICB0aGlzLmVuZFR1cm4ocGxheWVyMik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLnNoaXAgPSB0aGlzLmJ1aWxkU2hpcCgpO1xuICB9XG5cbiAgLy8gYnVpbGRzIGFuIGFycmF5IG9mIGhpdHRhYmxlIGVudHJpZXMgZm9yIGV2ZXJ5IHNoaXBcbiAgYnVpbGRTaGlwKCkge1xuICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICAgIGxldCBpID0gdGhpcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgIHNoaXBBcnJheS5wdXNoKHsgaGl0OiBmYWxzZSB9KTtcbiAgICAgIGkgLT0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBBcnJheTtcbiAgfVxuXG4gIGdldFNoaXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcDtcbiAgfVxuXG4gIGdldFNoaXBMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcC5sZW5ndGg7XG4gIH1cblxuICBoaXQoaW5kZXgpIHtcbiAgICB0aGlzLnNoaXBbaW5kZXhdLmhpdCA9IHRydWU7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAvLyBjaGVja3MgYXJyYXkgcG9zaXRpb24gZm9yIGhpdFxuICBjaGVja0hpdChpdGVtKSB7XG4gICAgaWYgKGl0ZW0uaGl0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gY2hlY2tzIHdldGhlciBldmVyeSBwb3NpdGlvbiBvbiB0aGUgYXJyYXkgaXMgaGl0XG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5zaGlwLmV2ZXJ5KHRoaXMuY2hlY2tIaXQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcblxuY2xhc3MgQUkgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbmVteSwgZW5lbXlCb2FyZCkge1xuICAgIHN1cGVyKG5hbWUsIGVuZW15Qm9hcmQpO1xuICAgIHRoaXMudHVybiA9IGZhbHNlO1xuICAgIHRoaXMuZW5lbXlQbGF5ZXIgPSBlbmVteTtcbiAgICB0aGlzLmVuZW15Qm9hcmQgPSBlbmVteUJvYXJkO1xuICAgIHRoaXMuYXR0YWNrQXJyYXkgPSBbXTtcbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tQXR0YWNrKCkge1xuICAgIGlmICh0aGlzLmNoZWNrVHVybigpKSB7XG4gICAgICBjb25zdCBudW1iZXJPYmogPSB7IHg6IHVuZGVmaW5lZCwgeTogdW5kZWZpbmVkIH07XG5cbiAgICAgIC8vIGxvb3BzIGZvcmV2ZXIgdW50aWwgaXQgZmluZHMgYSB2YWxpZCBhdHRhY2tcbiAgICAgIHdoaWxlICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgZmlyc3ROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGNvbnN0IHNlY29uZE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgbnVtYmVyT2JqLnggPSBmaXJzdE51bWJlcjtcbiAgICAgICAgbnVtYmVyT2JqLnkgPSBzZWNvbmROdW1iZXI7XG5cbiAgICAgICAgLy8gY2hlY2tzIGlmIG1vdmUgaGFzIGFscmVhZHkgYmVlbiBwbGF5ZWRcbiAgICAgICAgY29uc3QgcHJldmlvdXNBdHRhY2sgPSB0aGlzLmF0dGFja0FycmF5LnNvbWUoXG4gICAgICAgICAgKGUpID0+IGUueCA9PT0gbnVtYmVyT2JqLnggJiYgZS55ID09PSBudW1iZXJPYmoueVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcHJldmlvdXNBdHRhY2spIHtcbiAgICAgICAgICB0aGlzLmF0dGFja0FycmF5LnB1c2gobnVtYmVyT2JqKTtcbiAgICAgICAgICB0aGlzLmF0dGFjayhcbiAgICAgICAgICAgIG51bWJlck9iai54LFxuICAgICAgICAgICAgbnVtYmVyT2JqLnksXG4gICAgICAgICAgICB0aGlzLmVuZW15UGxheWVyLFxuICAgICAgICAgICAgdGhpcy5lbmVteUJvYXJkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEF0dGFja0FycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmF0dGFja0FycmF5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFJO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9HYW1lQm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgQUkgZnJvbSAnLi9haSc7XG5pbXBvcnQgcGxhY2VBSVNoaXAgZnJvbSAnLi9wbGFjZUFJU2hpcCc7XG5pbXBvcnQgZG9tUXVlcmllcyBmcm9tICcuL2RvbVF1ZXJpZXMnO1xuaW1wb3J0IG1ha2VEcmFnZ2FibGUgZnJvbSAnLi9tYWtlRHJhZ2dhYmxlJztcbmltcG9ydCB1cGRhdGVEaXNwbGF5IGZyb20gJy4vdXBkYXRlRGlzcGxheSc7XG5pbXBvcnQgZW5kR2FtZSBmcm9tICcuL2VuZGdhbWUnO1xuXG5jb25zdCBidWlsZEdhbWUgPSAoKSA9PiB7XG4gIC8vIGdhbWVib2FyZHNcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gIGNvbnN0IGFpQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG5cbiAgLy8gcGxheWVyc1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gIGNvbnN0IGFpID0gbmV3IEFJKCdBSScsIHBsYXllciwgcGxheWVyQm9hcmQpO1xuXG4gIC8vIHBsYXllclNoaXBzXG4gIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBuZXcgU2hpcCgzKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gbmV3IFNoaXAoMyk7XG4gIGNvbnN0IHBhdHJvbGJvYXQgPSBuZXcgU2hpcCgyKTtcblxuICAvLyBBSSBTaGlwc1xuICBjb25zdCBBSWNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbiAgY29uc3QgQUliYXR0bGVzaGlwID0gbmV3IFNoaXAoNCk7XG4gIGNvbnN0IEFJZGVzdHJveWVyID0gbmV3IFNoaXAoMyk7XG4gIGNvbnN0IEFJc3VibWFyaW5lID0gbmV3IFNoaXAoMyk7XG4gIGNvbnN0IEFJcGF0cm9sYm9hdCA9IG5ldyBTaGlwKDIpO1xuXG4gIC8vIG1ha2VzIHBsYXllciBib2F0cyBkcmFnZ2FibGVcbiAgbWFrZURyYWdnYWJsZShkb21RdWVyaWVzKCkuYmF0dGxlc2hpcEhUTUwpO1xuICBtYWtlRHJhZ2dhYmxlKGRvbVF1ZXJpZXMoKS5jYXJyaWVySFRNTCk7XG4gIG1ha2VEcmFnZ2FibGUoZG9tUXVlcmllcygpLnN1Ym1hcmluZWhpcEhUTUwpO1xuICBtYWtlRHJhZ2dhYmxlKGRvbVF1ZXJpZXMoKS5kZXN0cm95ZXJIVE1MKTtcbiAgbWFrZURyYWdnYWJsZShkb21RdWVyaWVzKCkucGF0cm9sYm9hdEhUTUwpO1xuXG4gIC8vIHBsYWNlcyBBSSBTaGlwc1xuICBwbGFjZUFJU2hpcChBSWNhcnJpZXIsIGFpQm9hcmQpO1xuICBwbGFjZUFJU2hpcChBSWJhdHRsZXNoaXAsIGFpQm9hcmQpO1xuICBwbGFjZUFJU2hpcChBSWRlc3Ryb3llciwgYWlCb2FyZCk7XG4gIHBsYWNlQUlTaGlwKEFJc3VibWFyaW5lLCBhaUJvYXJkKTtcbiAgcGxhY2VBSVNoaXAoQUlwYXRyb2xib2F0LCBhaUJvYXJkKTtcblxuICAvLyBhdHRhY2tzXG4gIGNvbnN0IGF0dGFjayA9IChlKSA9PiB7XG4gICAgY29uc3QgeCA9IGUuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKTtcbiAgICBjb25zdCB5ID0gZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpO1xuICAgIHBsYXllci5hdHRhY2soeCwgeSwgYWksIGFpQm9hcmQpO1xuICAgIHVwZGF0ZURpc3BsYXkoJ2FpQm9hcmQnLCBhaUJvYXJkKTtcbiAgICBlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICAvLyBjaGVja3MgaWYgYWxsIHNoaXBzIGFyZSBtZXQgYW5kIGNhbGxzIGZvciB3aW5uZXIgYmVmb3JlIGVhY2ggcm91bmRcbiAgICBpZiAoYWlCb2FyZC5jaGVja0FsbFN1bmsoKSkge1xuICAgICAgZW5kR2FtZShwbGF5ZXIuZ2V0TmFtZSgpKTtcbiAgICB9XG5cbiAgICBhaS5nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgIHVwZGF0ZURpc3BsYXkoJ3BsYXllckJvYXJkJywgcGxheWVyQm9hcmQpO1xuXG4gICAgaWYgKHBsYXllckJvYXJkLmNoZWNrQWxsU3VuaygpKSB7XG4gICAgICBlbmRHYW1lKCdBSScpO1xuICAgIH1cbiAgfTtcblxuICAvLyBkcm9wU2hpcCAtIHRocm91Z2ggZHJhZ2dpbmdcbiAgY29uc3QgZHJvcFNoaXAgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgY29uc3QgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgICBjb25zdCB5ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uXG4gICAgY29uc3Qgc2V0Qm9hcmRUb0RvbSA9IChib2F0KSA9PiB7XG4gICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoYm9hdCwgeCwgeSk7XG4gICAgICB1cGRhdGVEaXNwbGF5KCdwbGF5ZXJCb2FyZCcsIHBsYXllckJvYXJkKTtcbiAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYXRhfWApO1xuICAgICAgZG9tUXVlcmllcygpLmRyYWdnYWJsZS5yZW1vdmVDaGlsZChzaGlwKTtcbiAgICAgIGlmIChkb21RdWVyaWVzKCkuZHJhZ2dhYmxlLmNoaWxkTm9kZXMubGVuZ3RoIDw9IDYpIHtcbiAgICAgICAgZG9tUXVlcmllcygpLmRyYWdnYWJsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb21RdWVyaWVzKCkuZW5lbXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3dpdGNoIChkYXRhKSB7XG4gICAgICBjYXNlICdiYXR0bGVzaGlwJzpcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmNoZWNrU2hpcFBsYWNlbWVudChiYXR0bGVzaGlwLmxlbmd0aCwgeCwgeSkpIHtcbiAgICAgICAgICBzZXRCb2FyZFRvRG9tKGJhdHRsZXNoaXApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2Fycmllcic6XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja1NoaXBQbGFjZW1lbnQoY2Fycmllci5sZW5ndGgsIHgsIHkpKSB7XG4gICAgICAgICAgc2V0Qm9hcmRUb0RvbShjYXJyaWVyKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1Ym1hcmluZSc6XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja1NoaXBQbGFjZW1lbnQoc3VibWFyaW5lLmxlbmd0aCwgeCwgeSkpIHtcbiAgICAgICAgICBzZXRCb2FyZFRvRG9tKHN1Ym1hcmluZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXN0cm95ZXInOlxuICAgICAgICBpZiAocGxheWVyQm9hcmQuY2hlY2tTaGlwUGxhY2VtZW50KGRlc3Ryb3llci5sZW5ndGgsIHgsIHkpKSB7XG4gICAgICAgICAgc2V0Qm9hcmRUb0RvbShkZXN0cm95ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGF0cm9sYm9hdCc6XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja1NoaXBQbGFjZW1lbnQocGF0cm9sYm9hdC5sZW5ndGgsIHgsIHkpKSB7XG4gICAgICAgICAgc2V0Qm9hcmRUb0RvbShwYXRyb2xib2F0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBkYXRhJyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHBsYWNlcyBib2FyZHMgb24gRE9NXG4gIGNvbnN0IGJ1aWxkRE9NYm9hcmQgPSAoYm9hcmROYW1lKSA9PiB7XG4gICAgY29uc3QgYm9hcmRDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkTmFtZX1gKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS14Jywgaik7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBpKTtcblxuICAgICAgICAvLyBhZGRzIGF0dGFja2luZyB0aHJvdWdoIERPTVxuICAgICAgICBpZiAoYm9hcmROYW1lID09PSAnYWlCb2FyZCcpIHtcbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGF0dGFjayhlLnRhcmdldCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmROYW1lID09PSAncGxheWVyQm9hcmQnKSB7XG4gICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRyb3BTaGlwKGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkQ2xhc3MuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGJ1aWxkRE9NYm9hcmQoJ3BsYXllckJvYXJkJyk7XG4gIGJ1aWxkRE9NYm9hcmQoJ2FpQm9hcmQnKTtcblxuICAvLyBuYW1lU2V0dGVyXG4gIGRvbVF1ZXJpZXMoKS5uYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuYW1lID0gZG9tUXVlcmllcygpLm5hbWVJbnB0LnZhbHVlIHx8ICdQbGF5ZXIgMSc7XG4gICAgcGxheWVyLnNldE5hbWUobmFtZSk7XG4gICAgZG9tUXVlcmllcygpLnBsYXllck5hbWUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuZ2V0TmFtZSgpfSdzIGJvYXJkYDtcbiAgICBkb21RdWVyaWVzKCkubmFtZU1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2FycmllcixcbiAgICBiYXR0bGVzaGlwLFxuICAgIGRlc3Ryb3llcixcbiAgICBzdWJtYXJpbmUsXG4gICAgcGF0cm9sYm9hdCxcbiAgICBBSWNhcnJpZXIsXG4gICAgQUliYXR0bGVzaGlwLFxuICAgIEFJZGVzdHJveWVyLFxuICAgIEFJc3VibWFyaW5lLFxuICAgIEFJcGF0cm9sYm9hdCxcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBhaUJvYXJkLFxuICAgIHBsYXllcixcbiAgICBhaVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRHYW1lO1xuIiwiaW1wb3J0IGRvbVF1ZXJpZXMgZnJvbSAnLi9kb21RdWVyaWVzJztcblxuY29uc3QgY3JlYXRlRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIC8vIHJlbG9hZGVyXG4gIGRvbVF1ZXJpZXMoKS5wbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcblxuICAvLyBmb2N1cyBvbiBuYW1lIHdpbmRvd1xuICBjb25zdCBwcm9jZXNzS2JkSW5wdCA9IChlLCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0QnRuJyk7XG4gICAgICBzdWJtaXQuc3VibWl0KCk7XG4gICAgfSBlbHNlIGRvbVF1ZXJpZXMoKS5uYW1lSW5wdC5mb2N1cygpO1xuICB9O1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgcHJvY2Vzc0tiZElucHQoZSwgZS5rZXkpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUV2ZW50TGlzdGVuZXJzO1xuIiwiY29uc3QgZG9tUXVlcmllcyA9ICgpID0+IHtcbiAgY29uc3QgYmF0dGxlc2hpcEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmF0dGxlc2hpcCcpO1xuICBjb25zdCBjYXJyaWVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJyaWVyJyk7XG4gIGNvbnN0IHN1Ym1hcmluZUhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG4gIGNvbnN0IGRlc3Ryb3llckhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzdHJveWVyJyk7XG4gIGNvbnN0IHBhdHJvbGJvYXRIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhdHJvbGJvYXQnKTtcbiAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnYWJsZScpO1xuICBjb25zdCBlbmVteSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteScpO1xuICBjb25zdCBuYW1lTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgY29uc3QgbmFtZUlucHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZUlucHQnKTtcbiAgY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUZvcm0nKTtcbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJOYW1lJyk7XG4gIGNvbnN0IGVuZEdhbWVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZEdhbWVDb250ZW50Jyk7XG4gIGNvbnN0IGVuZEdhbWVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmRnYW1lJyk7XG4gIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5QWdhaW5CdXR0b24nKTtcbiAgY29uc3Qgd2lubmVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uZXJUZXh0Jyk7XG5cbiAgcmV0dXJuIHtcbiAgICBiYXR0bGVzaGlwSFRNTCxcbiAgICBjYXJyaWVySFRNTCxcbiAgICBzdWJtYXJpbmVIVE1MLFxuICAgIGRlc3Ryb3llckhUTUwsXG4gICAgcGF0cm9sYm9hdEhUTUwsXG4gICAgZHJhZ2dhYmxlLFxuICAgIGVuZW15LFxuICAgIG5hbWVNb2RhbCxcbiAgICBuYW1lSW5wdCxcbiAgICBuYW1lRm9ybSxcbiAgICBwbGF5ZXJOYW1lLFxuICAgIGVuZEdhbWVDb250ZW50LFxuICAgIGVuZEdhbWVNb2RhbCxcbiAgICBwbGF5QWdhaW5CdXR0b24sXG4gICAgd2lubmVyVGV4dFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tUXVlcmllcztcbiIsImltcG9ydCBkb21RdWVyaWVzIGZyb20gJy4vZG9tUXVlcmllcyc7XG5cbi8vIGNhbGxzIGZvciB3aW5uZXJcbmNvbnN0IGVuZEdhbWUgPSAod2lubmVyKSA9PiB7XG4gIGRvbVF1ZXJpZXMoKS5lbmRHYW1lTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgZG9tUXVlcmllcygpLndpbm5lclRleHQudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IGlzIHRoZSB3aW5uZXIhYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuZEdhbWU7XG4iLCJjb25zdCBtYWtlRHJhZ2dhYmxlID0gKCkgPT4ge1xuICAvLyBET01cbiAgY29uc3QgYmF0dGxlU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVzaGlwJyk7XG4gIGNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FycmllcicpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXN0cm95ZXInKTtcbiAgY29uc3QgcGF0cm9sYm9hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXRyb2xib2F0Jyk7XG5cbiAgY29uc3Qgc2V0RHJhZ2dlciA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmlkKTtcbiAgICB9KTtcbiAgfTtcblxuICBzZXREcmFnZ2VyKGJhdHRsZVNoaXApO1xuICBzZXREcmFnZ2VyKGNhcnJpZXIpO1xuICBzZXREcmFnZ2VyKHN1Ym1hcmluZSk7XG4gIHNldERyYWdnZXIoZGVzdHJveWVyKTtcbiAgc2V0RHJhZ2dlcihwYXRyb2xib2F0KTtcblxuICByZXR1cm4ge1xuICAgIGJhdHRsZVNoaXAsXG4gICAgY2FycmllcixcbiAgICBzdWJtYXJpbmUsXG4gICAgZGVzdHJveWVyLFxuICAgIHBhdHJvbGJvYXRcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VEcmFnZ2FibGU7XG4iLCJjb25zdCBwbGFjZUFJU2hpcCA9IChzaGlwLCBBSUJvYXJkKSA9PiB7XG4gIHdoaWxlICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgbnVtYmVyQXJyYXkgPSBbXTtcbiAgICBjb25zdCBmaXJzdE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBzZWNvbmROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbnVtYmVyQXJyYXkgPSBbZmlyc3ROdW1iZXIsIHNlY29uZE51bWJlcl07XG5cbiAgICBpZiAoXG4gICAgICBBSUJvYXJkLmNoZWNrU2hpcFBsYWNlbWVudChcbiAgICAgICAgc2hpcC5nZXRTaGlwTGVuZ3RoKCksXG4gICAgICAgIG51bWJlckFycmF5WzBdLFxuICAgICAgICBudW1iZXJBcnJheVsxXVxuICAgICAgKVxuICAgICkge1xuICAgICAgQUlCb2FyZC5wbGFjZVNoaXAoc2hpcCwgbnVtYmVyQXJyYXlbMF0sIG51bWJlckFycmF5WzFdKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxhY2VBSVNoaXA7XG4iLCJpbXBvcnQgbW91c2VTdmcgZnJvbSAnLi9pbWcvZ2VzdHVyZS10YXAuc3ZnJztcblxuY29uc3Qgc2V0U3ZnID0gKCkgPT4ge1xuICBjb25zdCBzdmdDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdTdmcnKTtcblxuICBzdmdDb250YWluZXJzLmZvckVhY2goKGUpID0+IHtcbiAgICBlLmlubmVySFRNTCA9IG1vdXNlU3ZnO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldFN2ZztcbiIsIi8vIHVwZGF0ZXMgRE9NXG5jb25zdCB1cGRhdGVEaXNwbGF5ID0gKGJvYXJkTmFtZSwgYm9hcmQpID0+IHtcbiAgY29uc3QgYm9hcmRBcnJheSA9IGJvYXJkLmdldEdhbWVCb2FyZCgpO1xuICBjb25zdCBtaXNzZWQgPSBib2FyZC5nZXRNaXNzZWRBdHRhY2tzKCk7XG5cbiAgYm9hcmRBcnJheS5mb3JFYWNoKChyb3csIHkpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoY2VsbCwgeCkgPT4ge1xuICAgICAgaWYgKGNlbGwuc2hpcE5hbWUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNlbGwuc2hpcE5hbWUuY2hlY2tIaXQoY2VsbC5zaGlwTmFtZS5nZXRTaGlwKClbY2VsbC5zaGlwSW5kZXhdKSA9PT1cbiAgICAgICAgICB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLiR7Ym9hcmROYW1lfSBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXkgPVwiJHt5fVwiYFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2VsZWN0ZWRDZWxsLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgIHNlbGVjdGVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICBzZWxlY3RlZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnb2NjdXBpZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBjZWxsLnNoaXBOYW1lLmNoZWNrSGl0KGNlbGwuc2hpcE5hbWUuZ2V0U2hpcCgpW2NlbGwuc2hpcEluZGV4XSkgPT09XG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKGJvYXJkTmFtZSA9PT0gJ3BsYXllckJvYXJkJykge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC4ke2JvYXJkTmFtZX0gW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15ID1cIiR7eX1cIl1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBtaXNzZWQuZm9yRWFjaCgoYXR0YWNrKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtib2FyZE5hbWV9IFtkYXRhLXg9XCIke2F0dGFjay54fVwiXVtkYXRhLXkgPVwiJHthdHRhY2sueX1cIl1gXG4gICAgKTtcbiAgICBzZWxlY3RlZENlbGwudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZURpc3BsYXk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGJ1aWxkR2FtZSBmcm9tICcuL2J1aWxkR2FtZSc7XG5pbXBvcnQgY3JlYXRlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9jcmVhdGVFdmVudExpc3RlbmVycyc7XG5pbXBvcnQgc2V0U3ZnIGZyb20gJy4vc2V0U3ZnJztcblxuY29uc3QgbWFpbiA9ICgoKSA9PiB7XG4gIC8vIGluaXRpYWxpemVyXG4gIGJ1aWxkR2FtZSgpO1xuICBjcmVhdGVFdmVudExpc3RlbmVycygpO1xuICBzZXRTdmcoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=