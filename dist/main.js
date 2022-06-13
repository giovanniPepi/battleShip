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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --slate0: #94a3b8;\n  --slate1: #64748b;\n  --slate2: #475569;\n  --semiWhite: #f1f5f9;\n  --amber1: #fffbeb;\n  --occupied: #d97706;\n  --hit: #dc2626;\n  --fontSizeSemiHighlight: 1.2rem;\n  --fontSizeHighlight: 1.8rem;\n  --fontSizeExtra: 2rem;\n  --borderRadiusBig: 2rem;\n  --borderRadiusSmall: 0.8rem;\n  --miniPadding: 0.5rem;\n  --bigPadding: 1.5rem;\n  --myBorder: 1px solid var(--slate0);\n  --normalGap: 1.5rem;\n  --megaGap: 5rem;\n  --shipBlocksPc: 3rem;\n  --shipBlocksMob: 1.9rem;\n  --svgSize: 2rem;\n  --shipBlocksBorder: #475569 solid 0.1rem;\n}\nbody,\nhtml {\n  margin: 0;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n}\nsvg {\n  width: var(--svgSize);\n  height: var(--svgSize);\n  padding: var(--miniPadding);\n}\n@media screen and (min-width: 1060px) {\n  .content {\n    flex-wrap: nowrap;\n  }\n  .cell,\n  .shipBlock {\n    min-width: var(--shipBlocksPc);\n    min-height: var(--shipBlocksPc);\n  }\n  .header {\n    height: 10vh;\n    font-size: var(--fontSizeExtra);\n  }\n  #playerName {\n    font-size: var(--fontSizeHighlight);\n    font-weight: bold;\n  }\n}\n\n@media screen and (max-width: 1059px) {\n  .content {\n    flex-wrap: wrap;\n  }\n  .cell,\n  .shipBlock {\n    min-width: var(--shipBlocksMob);\n    min-height: var(--shipBlocksMob);\n  }\n  .shipBlock {\n    max-width: var(--shipBlocksMob);\n    max-height: var(--shipBlocksMob);\n  }\n  .header {\n    height: 5vh;\n    font-size: var(--fontSizeSemiHighlight);\n  }\n  #playerName {\n    font-size: var(--fontSizeSemiHighlight);\n    font-weight: bold;\n  }\n}\n\n.header {\n  background: var(--slate2);\n  color: var(--semiWhite);\n}\n\n.header,\n.nameForm,\n.content,\n.cell,\n.gameBoard,\n.enemy,\n.draggable,\n.player,\n.modal,\n.dragSvg,\n#endGameContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nameForm {\n  position: relative;\n  align-self: center;\n  padding: var(--bigPadding);\n  flex-direction: column;\n  gap: 1rem;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bolder;\n  background-color: var(--slate2);\n  color: var(--semiWhite);\n  box-shadow: 0 6px 10px 0 rgba(1, 1, 1, 0.2), 0 8px 30px 0 rgba(2, 2, 2, 0.25);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusBig);\n}\n/* removes excess margins */\n.nameForm > *,\n#playerName {\n  margin: 0;\n}\n#playerName {\n  padding: var(--miniPadding);\n}\n#submitBtn,\n#playAgainButton {\n  max-width: 25vw;\n  min-height: 5vh;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bold;\n  color: var(--slate2);\n  background-color: var(--semiWhite);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  padding: var(--miniPadding);\n}\n.content {\n  padding: var(--bigPadding);\n  min-height: 90vh;\n  background-color: var(--amber1);\n  justify-content: space-evenly;\n  gap: var(--normalGap);\n}\n.gameBoard,\n.enemy,\n.draggable,\n.player {\n  flex-direction: column;\n  align-content: space-around;\n}\n.enemy {\n  display: none;\n}\n.draggable {\n  flex-direction: row;\n  justify-self: flex-end;\n  gap: var(--normalGap);\n}\n.shipBlock,\n.cell {\n  border: var(--shipBlocksBorder);\n}\n.shipBlock {\n  background-color: rgb(89, 179, 71);\n}\n.cell {\n  border: var(--shipBlocksBorder);\n}\n.playerBoard,\n.aiBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.hit,\n.missed {\n  color: var(--semiWhite);\n  font-size: var(--fontSizeExtra);\n  font-weight: bold;\n}\n.hit {\n  background-color: var(--hit);\n}\n.missed {\n  background-color: var(--slate1);\n}\n.occupied {\n  background-color: var(--occupied);\n}\n.modal {\n  position: fixed;\n  z-index: 9999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#modalContent p {\n  padding: 0;\n  margin: 0;\n}\n#nameInpt {\n  height: auto;\n  color: var(--slate2);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  font-size: var(--fontSizeSemiHighlight);\n  padding: var(--miniPadding);\n}\n.endgame {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  z-index: 9999;\n  padding-top: 130px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#endGameContent {\n  position: relative;\n  margin: auto;\n  background-color: #fefefe;\n  flex-direction: column;\n  justify-content: space-around;\n  box-sizing: border-box;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 30px;\n  border: 1px solid #888;\n  border-radius: 15px;\n  height: 30%;\n  width: 340px;\n  font-size: 23px;\n  color: indigo;\n  font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --slate0: #94a3b8;\n  --slate1: #64748b;\n  --slate2: #475569;\n  --semiWhite: #f1f5f9;\n  --amber1: #fffbeb;\n  --occupied: #d97706;\n  --hit: #dc2626;\n  --fontSizeSemiHighlight: 1.2rem;\n  --fontSizeHighlight: 1.8rem;\n  --fontSizeExtra: 2rem;\n  --borderRadiusBig: 2rem;\n  --borderRadiusSmall: 0.8rem;\n  --miniPadding: 0.5rem;\n  --bigPadding: 1.5rem;\n  --myBorder: 1px solid var(--slate0);\n  --normalGap: 1.5rem;\n  --megaGap: 5rem;\n  --shipBlocksPc: 3rem;\n  --shipBlocksMob: 1.9rem;\n  --svgSize: 2rem;\n  --shipBlocksBorder: #475569 solid 0.1rem;\n}\nbody,\nhtml {\n  margin: 0;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n}\nsvg {\n  width: var(--svgSize);\n  height: var(--svgSize);\n  padding: var(--miniPadding);\n}\n@media screen and (min-width: 1060px) {\n  .content {\n    flex-wrap: nowrap;\n  }\n  .cell,\n  .shipBlock {\n    min-width: var(--shipBlocksPc);\n    min-height: var(--shipBlocksPc);\n  }\n  .header {\n    height: 10vh;\n    font-size: var(--fontSizeExtra);\n  }\n  #playerName {\n    font-size: var(--fontSizeHighlight);\n    font-weight: bold;\n  }\n}\n\n@media screen and (max-width: 1059px) {\n  .content {\n    flex-wrap: wrap;\n  }\n  .cell,\n  .shipBlock {\n    min-width: var(--shipBlocksMob);\n    min-height: var(--shipBlocksMob);\n  }\n  .shipBlock {\n    max-width: var(--shipBlocksMob);\n    max-height: var(--shipBlocksMob);\n  }\n  .header {\n    height: 5vh;\n    font-size: var(--fontSizeSemiHighlight);\n  }\n  #playerName {\n    font-size: var(--fontSizeSemiHighlight);\n    font-weight: bold;\n  }\n}\n\n.header {\n  background: var(--slate2);\n  color: var(--semiWhite);\n}\n\n.header,\n.nameForm,\n.content,\n.cell,\n.gameBoard,\n.enemy,\n.draggable,\n.player,\n.modal,\n.dragSvg,\n#endGameContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nameForm {\n  position: relative;\n  align-self: center;\n  padding: var(--bigPadding);\n  flex-direction: column;\n  gap: 1rem;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bolder;\n  background-color: var(--slate2);\n  color: var(--semiWhite);\n  box-shadow: 0 6px 10px 0 rgba(1, 1, 1, 0.2), 0 8px 30px 0 rgba(2, 2, 2, 0.25);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusBig);\n}\n/* removes excess margins */\n.nameForm > *,\n#playerName {\n  margin: 0;\n}\n#playerName {\n  padding: var(--miniPadding);\n}\n#submitBtn,\n#playAgainButton {\n  max-width: 25vw;\n  min-height: 5vh;\n  font-size: var(--fontSizeSemiHighlight);\n  font-weight: bold;\n  color: var(--slate2);\n  background-color: var(--semiWhite);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  padding: var(--miniPadding);\n}\n.content {\n  padding: var(--bigPadding);\n  min-height: 90vh;\n  background-color: var(--amber1);\n  justify-content: space-evenly;\n  gap: var(--normalGap);\n}\n.gameBoard,\n.enemy,\n.draggable,\n.player {\n  flex-direction: column;\n  align-content: space-around;\n}\n.enemy {\n  display: none;\n}\n.draggable {\n  flex-direction: row;\n  justify-self: flex-end;\n  gap: var(--normalGap);\n}\n.shipBlock,\n.cell {\n  border: var(--shipBlocksBorder);\n}\n.shipBlock {\n  background-color: rgb(89, 179, 71);\n}\n.cell {\n  border: var(--shipBlocksBorder);\n}\n.playerBoard,\n.aiBoard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.hit,\n.missed {\n  color: var(--semiWhite);\n  font-size: var(--fontSizeExtra);\n  font-weight: bold;\n}\n.hit {\n  background-color: var(--hit);\n}\n.missed {\n  background-color: var(--slate1);\n}\n.occupied {\n  background-color: var(--occupied);\n}\n.modal {\n  position: fixed;\n  z-index: 9999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#modalContent p {\n  padding: 0;\n  margin: 0;\n}\n#nameInpt {\n  height: auto;\n  color: var(--slate2);\n  border: var(--myBorder);\n  border-radius: var(--borderRadiusSmall);\n  font-size: var(--fontSizeSemiHighlight);\n  padding: var(--miniPadding);\n}\n.endgame {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  z-index: 9999;\n  padding-top: 130px;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#endGameContent {\n  position: relative;\n  margin: auto;\n  background-color: #fefefe;\n  flex-direction: column;\n  justify-content: space-around;\n  box-sizing: border-box;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 30px;\n  border: 1px solid #888;\n  border-radius: 15px;\n  height: 30%;\n  width: 340px;\n  font-size: 23px;\n  color: indigo;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7QUFDSDtBQUNBO0FBQ0EsVUFBVSxXQUFXLFdBQVcsU0FBUyxjQUFjLFNBQVM7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7OztVQ3pDN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDSTtBQUNzQjtBQUM1Qjs7QUFFOUI7QUFDQTtBQUNBLEVBQUUsc0RBQVM7QUFDWCxFQUFFLGlFQUFvQjtBQUN0QixFQUFFLG1EQUFNO0FBQ1IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbWcvbW91c2UtbW92ZS12ZXJ0aWNhbC5zdmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9idWlsZEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jcmVhdGVFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbVF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbmRnYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFrZURyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYWNlQUlTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2V0U3ZnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXBkYXRlRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1zbGF0ZTA6ICM5NGEzYjg7XFxuICAtLXNsYXRlMTogIzY0NzQ4YjtcXG4gIC0tc2xhdGUyOiAjNDc1NTY5O1xcbiAgLS1zZW1pV2hpdGU6ICNmMWY1Zjk7XFxuICAtLWFtYmVyMTogI2ZmZmJlYjtcXG4gIC0tb2NjdXBpZWQ6ICNkOTc3MDY7XFxuICAtLWhpdDogI2RjMjYyNjtcXG4gIC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0OiAxLjJyZW07XFxuICAtLWZvbnRTaXplSGlnaGxpZ2h0OiAxLjhyZW07XFxuICAtLWZvbnRTaXplRXh0cmE6IDJyZW07XFxuICAtLWJvcmRlclJhZGl1c0JpZzogMnJlbTtcXG4gIC0tYm9yZGVyUmFkaXVzU21hbGw6IDAuOHJlbTtcXG4gIC0tbWluaVBhZGRpbmc6IDAuNXJlbTtcXG4gIC0tYmlnUGFkZGluZzogMS41cmVtO1xcbiAgLS1teUJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNsYXRlMCk7XFxuICAtLW5vcm1hbEdhcDogMS41cmVtO1xcbiAgLS1tZWdhR2FwOiA1cmVtO1xcbiAgLS1zaGlwQmxvY2tzUGM6IDNyZW07XFxuICAtLXNoaXBCbG9ja3NNb2I6IDEuOXJlbTtcXG4gIC0tc3ZnU2l6ZTogMnJlbTtcXG4gIC0tc2hpcEJsb2Nrc0JvcmRlcjogIzQ3NTU2OSBzb2xpZCAwLjFyZW07XFxufVxcbmJvZHksXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbnN2ZyB7XFxuICB3aWR0aDogdmFyKC0tc3ZnU2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXN2Z1NpemUpO1xcbiAgcGFkZGluZzogdmFyKC0tbWluaVBhZGRpbmcpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDYwcHgpIHtcXG4gIC5jb250ZW50IHtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICB9XFxuICAuY2VsbCxcXG4gIC5zaGlwQmxvY2sge1xcbiAgICBtaW4td2lkdGg6IHZhcigtLXNoaXBCbG9ja3NQYyk7XFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLXNoaXBCbG9ja3NQYyk7XFxuICB9XFxuICAuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplRXh0cmEpO1xcbiAgfVxcbiAgI3BsYXllck5hbWUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplSGlnaGxpZ2h0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTlweCkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuICAuY2VsbCxcXG4gIC5zaGlwQmxvY2sge1xcbiAgICBtaW4td2lkdGg6IHZhcigtLXNoaXBCbG9ja3NNb2IpO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1zaGlwQmxvY2tzTW9iKTtcXG4gIH1cXG4gIC5zaGlwQmxvY2sge1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLXNoaXBCbG9ja3NNb2IpO1xcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1zaGlwQmxvY2tzTW9iKTtcXG4gIH1cXG4gIC5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgfVxcbiAgI3BsYXllck5hbWUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNsYXRlMik7XFxuICBjb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG59XFxuXFxuLmhlYWRlcixcXG4ubmFtZUZvcm0sXFxuLmNvbnRlbnQsXFxuLmNlbGwsXFxuLmdhbWVCb2FyZCxcXG4uZW5lbXksXFxuLmRyYWdnYWJsZSxcXG4ucGxheWVyLFxcbi5tb2RhbCxcXG4uZHJhZ1N2ZyxcXG4jZW5kR2FtZUNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hbWVGb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLWJpZ1BhZGRpbmcpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgY29sb3I6IHZhcigtLXNlbWlXaGl0ZSk7XFxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgcmdiYSgxLCAxLCAxLCAwLjIpLCAwIDhweCAzMHB4IDAgcmdiYSgyLCAyLCAyLCAwLjI1KTtcXG4gIGJvcmRlcjogdmFyKC0tbXlCb3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzQmlnKTtcXG59XFxuLyogcmVtb3ZlcyBleGNlc3MgbWFyZ2lucyAqL1xcbi5uYW1lRm9ybSA+ICosXFxuI3BsYXllck5hbWUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4jcGxheWVyTmFtZSB7XFxuICBwYWRkaW5nOiB2YXIoLS1taW5pUGFkZGluZyk7XFxufVxcbiNzdWJtaXRCdG4sXFxuI3BsYXlBZ2FpbkJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDI1dnc7XFxuICBtaW4taGVpZ2h0OiA1dmg7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGJvcmRlcjogdmFyKC0tbXlCb3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzU21hbGwpO1xcbiAgcGFkZGluZzogdmFyKC0tbWluaVBhZGRpbmcpO1xcbn1cXG4uY29udGVudCB7XFxuICBwYWRkaW5nOiB2YXIoLS1iaWdQYWRkaW5nKTtcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbWJlcjEpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBnYXA6IHZhcigtLW5vcm1hbEdhcCk7XFxufVxcbi5nYW1lQm9hcmQsXFxuLmVuZW15LFxcbi5kcmFnZ2FibGUsXFxuLnBsYXllciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZW5lbXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmRyYWdnYWJsZSB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGdhcDogdmFyKC0tbm9ybWFsR2FwKTtcXG59XFxuLnNoaXBCbG9jayxcXG4uY2VsbCB7XFxuICBib3JkZXI6IHZhcigtLXNoaXBCbG9ja3NCb3JkZXIpO1xcbn1cXG4uc2hpcEJsb2NrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4OSwgMTc5LCA3MSk7XFxufVxcbi5jZWxsIHtcXG4gIGJvcmRlcjogdmFyKC0tc2hpcEJsb2Nrc0JvcmRlcik7XFxufVxcbi5wbGF5ZXJCb2FyZCxcXG4uYWlCb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmhpdCxcXG4ubWlzc2VkIHtcXG4gIGNvbG9yOiB2YXIoLS1zZW1pV2hpdGUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUV4dHJhKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdCk7XFxufVxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUxKTtcXG59XFxuLm9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jY3VwaWVkKTtcXG59XFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4jbW9kYWxDb250ZW50IHAge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuI25hbWVJbnB0IHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgYm9yZGVyOiB2YXIoLS1teUJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXNTbWFsbCk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICBwYWRkaW5nOiB2YXIoLS1taW5pUGFkZGluZyk7XFxufVxcbi5lbmRnYW1lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcbiNlbmRHYW1lQ29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiAzNDBweDtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGNvbG9yOiBpbmRpZ287XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDO0FBQ0E7O0VBRUUsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTs7SUFFRSw4QkFBOEI7SUFDOUIsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxZQUFZO0lBQ1osK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTs7SUFFRSwrQkFBK0I7SUFDL0IsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0IsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSx1Q0FBdUM7SUFDdkMsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBOzs7Ozs7Ozs7OztFQVdFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2Qiw2RUFBNkU7RUFDN0UsdUJBQXVCO0VBQ3ZCLHFDQUFxQztBQUN2QztBQUNBLDJCQUEyQjtBQUMzQjs7RUFFRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLGVBQWU7RUFDZixlQUFlO0VBQ2YsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCO0FBQ0E7Ozs7RUFJRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBOztFQUVFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDO0FBQ0E7O0VBRUUsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2Qyx1Q0FBdUM7RUFDdkMsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsNEVBQTRFO0VBQzVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1zbGF0ZTA6ICM5NGEzYjg7XFxuICAtLXNsYXRlMTogIzY0NzQ4YjtcXG4gIC0tc2xhdGUyOiAjNDc1NTY5O1xcbiAgLS1zZW1pV2hpdGU6ICNmMWY1Zjk7XFxuICAtLWFtYmVyMTogI2ZmZmJlYjtcXG4gIC0tb2NjdXBpZWQ6ICNkOTc3MDY7XFxuICAtLWhpdDogI2RjMjYyNjtcXG4gIC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0OiAxLjJyZW07XFxuICAtLWZvbnRTaXplSGlnaGxpZ2h0OiAxLjhyZW07XFxuICAtLWZvbnRTaXplRXh0cmE6IDJyZW07XFxuICAtLWJvcmRlclJhZGl1c0JpZzogMnJlbTtcXG4gIC0tYm9yZGVyUmFkaXVzU21hbGw6IDAuOHJlbTtcXG4gIC0tbWluaVBhZGRpbmc6IDAuNXJlbTtcXG4gIC0tYmlnUGFkZGluZzogMS41cmVtO1xcbiAgLS1teUJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNsYXRlMCk7XFxuICAtLW5vcm1hbEdhcDogMS41cmVtO1xcbiAgLS1tZWdhR2FwOiA1cmVtO1xcbiAgLS1zaGlwQmxvY2tzUGM6IDNyZW07XFxuICAtLXNoaXBCbG9ja3NNb2I6IDEuOXJlbTtcXG4gIC0tc3ZnU2l6ZTogMnJlbTtcXG4gIC0tc2hpcEJsb2Nrc0JvcmRlcjogIzQ3NTU2OSBzb2xpZCAwLjFyZW07XFxufVxcbmJvZHksXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbnN2ZyB7XFxuICB3aWR0aDogdmFyKC0tc3ZnU2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXN2Z1NpemUpO1xcbiAgcGFkZGluZzogdmFyKC0tbWluaVBhZGRpbmcpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDYwcHgpIHtcXG4gIC5jb250ZW50IHtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICB9XFxuICAuY2VsbCxcXG4gIC5zaGlwQmxvY2sge1xcbiAgICBtaW4td2lkdGg6IHZhcigtLXNoaXBCbG9ja3NQYyk7XFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLXNoaXBCbG9ja3NQYyk7XFxuICB9XFxuICAuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplRXh0cmEpO1xcbiAgfVxcbiAgI3BsYXllck5hbWUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplSGlnaGxpZ2h0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTlweCkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuICAuY2VsbCxcXG4gIC5zaGlwQmxvY2sge1xcbiAgICBtaW4td2lkdGg6IHZhcigtLXNoaXBCbG9ja3NNb2IpO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1zaGlwQmxvY2tzTW9iKTtcXG4gIH1cXG4gIC5zaGlwQmxvY2sge1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLXNoaXBCbG9ja3NNb2IpO1xcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1zaGlwQmxvY2tzTW9iKTtcXG4gIH1cXG4gIC5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgfVxcbiAgI3BsYXllck5hbWUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNsYXRlMik7XFxuICBjb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG59XFxuXFxuLmhlYWRlcixcXG4ubmFtZUZvcm0sXFxuLmNvbnRlbnQsXFxuLmNlbGwsXFxuLmdhbWVCb2FyZCxcXG4uZW5lbXksXFxuLmRyYWdnYWJsZSxcXG4ucGxheWVyLFxcbi5tb2RhbCxcXG4uZHJhZ1N2ZyxcXG4jZW5kR2FtZUNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hbWVGb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLWJpZ1BhZGRpbmcpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgY29sb3I6IHZhcigtLXNlbWlXaGl0ZSk7XFxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgcmdiYSgxLCAxLCAxLCAwLjIpLCAwIDhweCAzMHB4IDAgcmdiYSgyLCAyLCAyLCAwLjI1KTtcXG4gIGJvcmRlcjogdmFyKC0tbXlCb3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzQmlnKTtcXG59XFxuLyogcmVtb3ZlcyBleGNlc3MgbWFyZ2lucyAqL1xcbi5uYW1lRm9ybSA+ICosXFxuI3BsYXllck5hbWUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4jcGxheWVyTmFtZSB7XFxuICBwYWRkaW5nOiB2YXIoLS1taW5pUGFkZGluZyk7XFxufVxcbiNzdWJtaXRCdG4sXFxuI3BsYXlBZ2FpbkJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDI1dnc7XFxuICBtaW4taGVpZ2h0OiA1dmg7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VtaVdoaXRlKTtcXG4gIGJvcmRlcjogdmFyKC0tbXlCb3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzU21hbGwpO1xcbiAgcGFkZGluZzogdmFyKC0tbWluaVBhZGRpbmcpO1xcbn1cXG4uY29udGVudCB7XFxuICBwYWRkaW5nOiB2YXIoLS1iaWdQYWRkaW5nKTtcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbWJlcjEpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBnYXA6IHZhcigtLW5vcm1hbEdhcCk7XFxufVxcbi5nYW1lQm9hcmQsXFxuLmVuZW15LFxcbi5kcmFnZ2FibGUsXFxuLnBsYXllciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZW5lbXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmRyYWdnYWJsZSB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGdhcDogdmFyKC0tbm9ybWFsR2FwKTtcXG59XFxuLnNoaXBCbG9jayxcXG4uY2VsbCB7XFxuICBib3JkZXI6IHZhcigtLXNoaXBCbG9ja3NCb3JkZXIpO1xcbn1cXG4uc2hpcEJsb2NrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4OSwgMTc5LCA3MSk7XFxufVxcbi5jZWxsIHtcXG4gIGJvcmRlcjogdmFyKC0tc2hpcEJsb2Nrc0JvcmRlcik7XFxufVxcbi5wbGF5ZXJCb2FyZCxcXG4uYWlCb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmhpdCxcXG4ubWlzc2VkIHtcXG4gIGNvbG9yOiB2YXIoLS1zZW1pV2hpdGUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUV4dHJhKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdCk7XFxufVxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUxKTtcXG59XFxuLm9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jY3VwaWVkKTtcXG59XFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4jbW9kYWxDb250ZW50IHAge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuI25hbWVJbnB0IHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZTIpO1xcbiAgYm9yZGVyOiB2YXIoLS1teUJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXNTbWFsbCk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxuICBwYWRkaW5nOiB2YXIoLS1taW5pUGFkZGluZyk7XFxufVxcbi5lbmRnYW1lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcbiNlbmRHYW1lQ29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiAzNDBweDtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGNvbG9yOiBpbmRpZ287XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTIwIDZIMjNMMTkgMkwxNSA2SDE4VjE4SDE1TDE5IDIyTDIzIDE4SDIwVjZNOSAzLjA5QzExLjgzIDMuNTcgMTQgNi4wNCAxNCA5SDlWMy4wOU0xNCAxMVYxNUMxNCAxOC4zIDExLjMgMjEgOCAyMVMyIDE4LjMgMiAxNVYxMUgxNE03IDlIMkMyIDYuMDQgNC4xNyAzLjU3IDcgMy4wOVY5WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lQm9hcmRBcnJheSA9IHRoaXMuYnVpbGRHYW1lQm9hcmQoKTtcbiAgICB0aGlzLm1pc3NlZEF0dGFja3MgPSBbXTtcbiAgfVxuXG4gIGJ1aWxkR2FtZUJvYXJkKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgbGV0IGFycmF5SXRlbSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGFycmF5SXRlbS5wdXNoKHsgc2hpcE5hbWU6IHVuZGVmaW5lZCwgc2hpcEluZGV4OiB1bmRlZmluZWQgfSk7XG4gICAgICB9XG4gICAgICBhcnJheS5wdXNoKGFycmF5SXRlbSk7XG4gICAgICAvLyByZXNldCBiZWZvcmUgbmV4dCBpdGVyYXRpb25cbiAgICAgIGFycmF5SXRlbSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBnZXRHYW1lQm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkQXJyYXk7XG4gIH1cblxuICBjaGVja1NoaXBQbGFjZW1lbnQobGVuZ3RoLCB4LCB5KSB7XG4gICAgLy8gY29uZGl0aW9ucyB0aGF0IGV4dHJhcG9sYXRlIHRoZSBnYW1lYm9hcmRcbiAgICBjb25zdCBpbnZhbGlkQ29uZGl0aW9ucyA9XG4gICAgICB4ID4gMTAgfHwgeCA8IDAgfHwgeSA+IDEwIHx8IHkgPCAwIHx8IHkgKyBsZW5ndGggPiAxMDtcblxuICAgIGlmIChpbnZhbGlkQ29uZGl0aW9ucykgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gY2hlY2tzIGV4aXN0aW5nIHNoaXBzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5ICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmdhbWVCb2FyZEFycmF5W2ldW3hdLnNoaXBOYW1lICE9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgeCwgeSkge1xuICAgIC8vIGNoZWNrcyBpZiB0aGUgcG9zaXRpb24gaXMgdmFsaWQgYmVmb3JlIHBsYWNpbmdcbiAgICBpZiAodGhpcy5jaGVja1NoaXBQbGFjZW1lbnQoc2hpcC5nZXRTaGlwTGVuZ3RoKCksIHgsIHkpKSB7XG4gICAgICAvLyBmaWxscyBzaGlwIGFycmF5XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0U2hpcExlbmd0aCgpOyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmRBcnJheVt5ICsgaV1beF0uc2hpcE5hbWUgPSBzaGlwO1xuICAgICAgICB0aGlzLmdhbWVCb2FyZEFycmF5W3kgKyBpXVt4XS5zaGlwSW5kZXggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGlmICh0aGlzLmdhbWVCb2FyZEFycmF5W3ldW3hdLnNoaXBOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKHsgeCwgeSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nYW1lQm9hcmRBcnJheVt5XVt4XS5zaGlwTmFtZS5oaXQoXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXlbeV1beF0uc2hpcEluZGV4XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdldE1pc3NlZEF0dGFja3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlzc2VkQXR0YWNrcztcbiAgfVxuXG4gIC8vIGNoYW5nZXMgYm9vbGVhbiB0byB0cnVlIGlmIGFueSBzaGlwIGluc2lkZSBpcyBub3Qgc3Vua1xuICBjaGVja0FsbFN1bmsoKSB7XG4gICAgbGV0IGtleSA9IHRydWU7XG4gICAgdGhpcy5nYW1lQm9hcmRBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuc2hpcE5hbWUpIHtcbiAgICAgICAgICBpZiAoZS5zaGlwTmFtZS5pc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGtleSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmQ7XG4iLCJjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR1cm4gPSB0cnVlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGVuZFR1cm4ocGxheWVyMikge1xuICAgIGlmICh0aGlzLnR1cm4gPT09IHRydWUpIHtcbiAgICAgIHRoaXMudHVybiA9IGZhbHNlO1xuICAgICAgcGxheWVyMi5zdGFydFR1cm4oKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFR1cm4oKSB7XG4gICAgaWYgKHRoaXMudHVybiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudHVybiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tUdXJuKCkge1xuICAgIHJldHVybiB0aGlzLnR1cm47XG4gIH1cblxuICAvLyBhdHRhY2tzIHBsYWNlIHRoZSBoaXQgYW5kIGVuZHMgdHVyblxuICBhdHRhY2soeCwgeSwgcGxheWVyMiwgcGxheWVyMkJvYXJkKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tUdXJuKCkpIHtcbiAgICAgIHBsYXllcjJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgdGhpcy5lbmRUdXJuKHBsYXllcjIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5zaGlwID0gdGhpcy5idWlsZFNoaXAoKTtcbiAgfVxuXG4gIGJ1aWxkU2hpcCgpIHtcbiAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgICBsZXQgaSA9IHRoaXMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICBzaGlwQXJyYXkucHVzaCh7IGhpdDogZmFsc2UgfSk7XG4gICAgICBpIC09IDE7XG4gICAgfVxuICAgIHJldHVybiBzaGlwQXJyYXk7XG4gIH1cblxuICBnZXRTaGlwKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXA7XG4gIH1cblxuICBnZXRTaGlwTGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXAubGVuZ3RoO1xuICB9XG5cbiAgaGl0KGluZGV4KSB7XG4gICAgdGhpcy5zaGlwW2luZGV4XS5oaXQgPSB0cnVlO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgY2hlY2tIaXQoaXRlbSkge1xuICAgIGlmIChpdGVtLmhpdCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5zaGlwLmV2ZXJ5KHRoaXMuY2hlY2tIaXQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcblxuY2xhc3MgQUkgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbmVteSwgZW5lbXlCb2FyZCkge1xuICAgIHN1cGVyKG5hbWUsIGVuZW15Qm9hcmQpO1xuICAgIHRoaXMudHVybiA9IGZhbHNlO1xuICAgIHRoaXMuZW5lbXlQbGF5ZXIgPSBlbmVteTtcbiAgICB0aGlzLmVuZW15Qm9hcmQgPSBlbmVteUJvYXJkO1xuICAgIHRoaXMuYXR0YWNrQXJyYXkgPSBbXTtcbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tQXR0YWNrKCkge1xuICAgIGlmICh0aGlzLmNoZWNrVHVybigpKSB7XG4gICAgICBjb25zdCBudW1iZXJPYmogPSB7IHg6IHVuZGVmaW5lZCwgeTogdW5kZWZpbmVkIH07XG5cbiAgICAgIC8vIGxvb3BzIGZvcmV2ZXIgdW50aWwgaXQgZmluZHMgYSB2YWxpZCBhdHRhY2tcbiAgICAgIHdoaWxlICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgZmlyc3ROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGNvbnN0IHNlY29uZE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgbnVtYmVyT2JqLnggPSBmaXJzdE51bWJlcjtcbiAgICAgICAgbnVtYmVyT2JqLnkgPSBzZWNvbmROdW1iZXI7XG5cbiAgICAgICAgLy8gY2hlY2tzIGlmIG1vdmUgaGFzIGFscmVhZHkgYmVlbiBwbGF5ZWRcbiAgICAgICAgY29uc3QgcHJldmlvdXNBdHRhY2sgPSB0aGlzLmF0dGFja0FycmF5LnNvbWUoXG4gICAgICAgICAgKGUpID0+IGUueCA9PT0gbnVtYmVyT2JqLnggJiYgZS55ID09PSBudW1iZXJPYmoueVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcHJldmlvdXNBdHRhY2spIHtcbiAgICAgICAgICB0aGlzLmF0dGFja0FycmF5LnB1c2gobnVtYmVyT2JqKTtcbiAgICAgICAgICB0aGlzLmF0dGFjayhcbiAgICAgICAgICAgIG51bWJlck9iai54LFxuICAgICAgICAgICAgbnVtYmVyT2JqLnksXG4gICAgICAgICAgICB0aGlzLmVuZW15UGxheWVyLFxuICAgICAgICAgICAgdGhpcy5lbmVteUJvYXJkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEF0dGFja0FycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmF0dGFja0FycmF5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFJO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9HYW1lQm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgQUkgZnJvbSAnLi9haSc7XG5pbXBvcnQgcGxhY2VBSVNoaXAgZnJvbSAnLi9wbGFjZUFJU2hpcCc7XG5pbXBvcnQgZG9tUXVlcmllcyBmcm9tICcuL2RvbVF1ZXJpZXMnO1xuaW1wb3J0IG1ha2VEcmFnZ2FibGUgZnJvbSAnLi9tYWtlRHJhZ2dhYmxlJztcbmltcG9ydCB1cGRhdGVEaXNwbGF5IGZyb20gJy4vdXBkYXRlRGlzcGxheSc7XG5pbXBvcnQgZW5kR2FtZSBmcm9tICcuL2VuZGdhbWUnO1xuXG5jb25zdCBidWlsZEdhbWUgPSAoKSA9PiB7XG4gIC8vIGdhbWVib2FyZHNcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gIGNvbnN0IGFpQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG5cbiAgLy8gcGxheWVyc1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gIGNvbnN0IGFpID0gbmV3IEFJKCdBSScsIHBsYXllciwgcGxheWVyQm9hcmQpO1xuXG4gIC8vIHBsYXllclNoaXBzXG4gIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBuZXcgU2hpcCgzKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gbmV3IFNoaXAoMyk7XG4gIGNvbnN0IHBhdHJvbGJvYXQgPSBuZXcgU2hpcCgyKTtcblxuICAvLyBBSSBTaGlwc1xuICBjb25zdCBBSWNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbiAgY29uc3QgQUliYXR0bGVzaGlwID0gbmV3IFNoaXAoNCk7XG4gIGNvbnN0IEFJZGVzdHJveWVyID0gbmV3IFNoaXAoMyk7XG4gIGNvbnN0IEFJc3VibWFyaW5lID0gbmV3IFNoaXAoMyk7XG4gIGNvbnN0IEFJcGF0cm9sYm9hdCA9IG5ldyBTaGlwKDIpO1xuXG4gIC8vIG1ha2VzIHBsYXllciBib2F0cyBkcmFnZ2FibGVcbiAgbWFrZURyYWdnYWJsZShkb21RdWVyaWVzKCkuYmF0dGxlc2hpcEhUTUwpO1xuICBtYWtlRHJhZ2dhYmxlKGRvbVF1ZXJpZXMoKS5jYXJyaWVySFRNTCk7XG4gIG1ha2VEcmFnZ2FibGUoZG9tUXVlcmllcygpLnN1Ym1hcmluZWhpcEhUTUwpO1xuICBtYWtlRHJhZ2dhYmxlKGRvbVF1ZXJpZXMoKS5kZXN0cm95ZXJIVE1MKTtcbiAgbWFrZURyYWdnYWJsZShkb21RdWVyaWVzKCkucGF0cm9sYm9hdEhUTUwpO1xuXG4gIC8vIHBsYWNlcyBBSSBTaGlwc1xuICBwbGFjZUFJU2hpcChBSWNhcnJpZXIsIGFpQm9hcmQpO1xuICBwbGFjZUFJU2hpcChBSWJhdHRsZXNoaXAsIGFpQm9hcmQpO1xuICBwbGFjZUFJU2hpcChBSWRlc3Ryb3llciwgYWlCb2FyZCk7XG4gIHBsYWNlQUlTaGlwKEFJc3VibWFyaW5lLCBhaUJvYXJkKTtcbiAgcGxhY2VBSVNoaXAoQUlwYXRyb2xib2F0LCBhaUJvYXJkKTtcblxuICAvLyBhdHRhY2tzXG4gIGNvbnN0IGF0dGFjayA9IChlKSA9PiB7XG4gICAgY29uc3QgeCA9IGUuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKTtcbiAgICBjb25zdCB5ID0gZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpO1xuICAgIHBsYXllci5hdHRhY2soeCwgeSwgYWksIGFpQm9hcmQpO1xuICAgIHVwZGF0ZURpc3BsYXkoJ2FpQm9hcmQnLCBhaUJvYXJkKTtcbiAgICBlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICAvLyBjaGVja3MgaWYgYWxsIHNoaXBzIGFyZSBtZXQgYW5kIGNhbGxzIGZvciB3aW5uZXIgYmVmb3JlIGVhY2ggcm91bmRcbiAgICBpZiAoYWlCb2FyZC5jaGVja0FsbFN1bmsoKSkge1xuICAgICAgZW5kR2FtZShwbGF5ZXIuZ2V0TmFtZSgpKTtcbiAgICB9XG5cbiAgICBhaS5nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgIHVwZGF0ZURpc3BsYXkoJ3BsYXllckJvYXJkJywgcGxheWVyQm9hcmQpO1xuXG4gICAgaWYgKHBsYXllckJvYXJkLmNoZWNrQWxsU3VuaygpKSB7XG4gICAgICBlbmRHYW1lKCdBSScpO1xuICAgIH1cbiAgfTtcblxuICAvLyBkcm9wU2hpcCAtIHRocm91Z2ggZHJhZ2dpbmdcbiAgY29uc3QgZHJvcFNoaXAgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgY29uc3QgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgICBjb25zdCB5ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uXG4gICAgY29uc3Qgc2V0Qm9hcmRUb0RvbSA9IChib2F0KSA9PiB7XG4gICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoYm9hdCwgeCwgeSk7XG4gICAgICB1cGRhdGVEaXNwbGF5KCdwbGF5ZXJCb2FyZCcsIHBsYXllckJvYXJkKTtcbiAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYXRhfWApO1xuICAgICAgZG9tUXVlcmllcygpLmRyYWdnYWJsZS5yZW1vdmVDaGlsZChzaGlwKTtcbiAgICAgIGlmIChkb21RdWVyaWVzKCkuZHJhZ2dhYmxlLmNoaWxkTm9kZXMubGVuZ3RoIDw9IDYpIHtcbiAgICAgICAgZG9tUXVlcmllcygpLmRyYWdnYWJsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb21RdWVyaWVzKCkuZW5lbXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3dpdGNoIChkYXRhKSB7XG4gICAgICBjYXNlICdiYXR0bGVzaGlwJzpcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmNoZWNrU2hpcFBsYWNlbWVudChiYXR0bGVzaGlwLmxlbmd0aCwgeCwgeSkpIHtcbiAgICAgICAgICBzZXRCb2FyZFRvRG9tKGJhdHRsZXNoaXApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2Fycmllcic6XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja1NoaXBQbGFjZW1lbnQoY2Fycmllci5sZW5ndGgsIHgsIHkpKSB7XG4gICAgICAgICAgc2V0Qm9hcmRUb0RvbShjYXJyaWVyKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1Ym1hcmluZSc6XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja1NoaXBQbGFjZW1lbnQoc3VibWFyaW5lLmxlbmd0aCwgeCwgeSkpIHtcbiAgICAgICAgICBzZXRCb2FyZFRvRG9tKHN1Ym1hcmluZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXN0cm95ZXInOlxuICAgICAgICBpZiAocGxheWVyQm9hcmQuY2hlY2tTaGlwUGxhY2VtZW50KGRlc3Ryb3llci5sZW5ndGgsIHgsIHkpKSB7XG4gICAgICAgICAgc2V0Qm9hcmRUb0RvbShkZXN0cm95ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGF0cm9sYm9hdCc6XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja1NoaXBQbGFjZW1lbnQocGF0cm9sYm9hdC5sZW5ndGgsIHgsIHkpKSB7XG4gICAgICAgICAgc2V0Qm9hcmRUb0RvbShwYXRyb2xib2F0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBkYXRhJyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHBsYWNlcyBib2FyZHMgb24gRE9NXG4gIGNvbnN0IGJ1aWxkRE9NYm9hcmQgPSAoYm9hcmROYW1lKSA9PiB7XG4gICAgY29uc3QgYm9hcmRDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkTmFtZX1gKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS14Jywgaik7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBpKTtcblxuICAgICAgICAvLyBhZGRzIGF0dGFja2luZyB0aHJvdWdoIERPTVxuICAgICAgICBpZiAoYm9hcmROYW1lID09PSAnYWlCb2FyZCcpIHtcbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGF0dGFjayhlLnRhcmdldCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmROYW1lID09PSAncGxheWVyQm9hcmQnKSB7XG4gICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRyb3BTaGlwKGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkQ2xhc3MuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGJ1aWxkRE9NYm9hcmQoJ3BsYXllckJvYXJkJyk7XG4gIGJ1aWxkRE9NYm9hcmQoJ2FpQm9hcmQnKTtcblxuICAvLyBuYW1lU2V0dGVyXG4gIGRvbVF1ZXJpZXMoKS5uYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuYW1lID0gZG9tUXVlcmllcygpLm5hbWVJbnB0LnZhbHVlIHx8ICdQbGF5ZXIgMSc7XG4gICAgcGxheWVyLnNldE5hbWUobmFtZSk7XG4gICAgZG9tUXVlcmllcygpLnBsYXllck5hbWUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuZ2V0TmFtZSgpfSdzIGJvYXJkYDtcbiAgICBkb21RdWVyaWVzKCkubmFtZU1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2FycmllcixcbiAgICBiYXR0bGVzaGlwLFxuICAgIGRlc3Ryb3llcixcbiAgICBzdWJtYXJpbmUsXG4gICAgcGF0cm9sYm9hdCxcbiAgICBBSWNhcnJpZXIsXG4gICAgQUliYXR0bGVzaGlwLFxuICAgIEFJZGVzdHJveWVyLFxuICAgIEFJc3VibWFyaW5lLFxuICAgIEFJcGF0cm9sYm9hdCxcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBhaUJvYXJkLFxuICAgIHBsYXllcixcbiAgICBhaVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRHYW1lO1xuIiwiaW1wb3J0IGRvbVF1ZXJpZXMgZnJvbSAnLi9kb21RdWVyaWVzJztcbmltcG9ydCBidWlsZEdhbWUgZnJvbSAnLi9idWlsZEdhbWUnO1xuXG5jb25zdCBjcmVhdGVFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgLy8gcmVsb2FkZXJcbiAgZG9tUXVlcmllcygpLnBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRXZlbnRMaXN0ZW5lcnM7XG4iLCJjb25zdCBkb21RdWVyaWVzID0gKCkgPT4ge1xuICBjb25zdCBiYXR0bGVzaGlwSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVzaGlwJyk7XG4gIGNvbnN0IGNhcnJpZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcnJpZXInKTtcbiAgY29uc3Qgc3VibWFyaW5lSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtYXJpbmUnKTtcbiAgY29uc3QgZGVzdHJveWVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXN0cm95ZXInKTtcbiAgY29uc3QgcGF0cm9sYm9hdEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF0cm9sYm9hdCcpO1xuICBjb25zdCBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dhYmxlJyk7XG4gIGNvbnN0IGVuZW15ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15Jyk7XG4gIGNvbnN0IG5hbWVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBjb25zdCBuYW1lSW5wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lSW5wdCcpO1xuICBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lRm9ybScpO1xuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllck5hbWUnKTtcbiAgY29uc3QgZW5kR2FtZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kR2FtZUNvbnRlbnQnKTtcbiAgY29uc3QgZW5kR2FtZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZGdhbWUnKTtcbiAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXlBZ2FpbkJ1dHRvbicpO1xuICBjb25zdCB3aW5uZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbm5lclRleHQnKTtcblxuICByZXR1cm4ge1xuICAgIGJhdHRsZXNoaXBIVE1MLFxuICAgIGNhcnJpZXJIVE1MLFxuICAgIHN1Ym1hcmluZUhUTUwsXG4gICAgZGVzdHJveWVySFRNTCxcbiAgICBwYXRyb2xib2F0SFRNTCxcbiAgICBkcmFnZ2FibGUsXG4gICAgZW5lbXksXG4gICAgbmFtZU1vZGFsLFxuICAgIG5hbWVJbnB0LFxuICAgIG5hbWVGb3JtLFxuICAgIHBsYXllck5hbWUsXG4gICAgZW5kR2FtZUNvbnRlbnQsXG4gICAgZW5kR2FtZU1vZGFsLFxuICAgIHBsYXlBZ2FpbkJ1dHRvbixcbiAgICB3aW5uZXJUZXh0XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21RdWVyaWVzO1xuIiwiaW1wb3J0IGRvbVF1ZXJpZXMgZnJvbSAnLi9kb21RdWVyaWVzJztcblxuLy8gY2FsbHMgZm9yIHdpbm5lclxuY29uc3QgZW5kR2FtZSA9ICh3aW5uZXIpID0+IHtcbiAgZG9tUXVlcmllcygpLmVuZEdhbWVNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZG9tUXVlcmllcygpLndpbm5lclRleHQudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IGlzIHRoZSB3aW5uZXIhYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuZEdhbWU7XG4iLCJjb25zdCBtYWtlRHJhZ2dhYmxlID0gKCkgPT4ge1xuICAvLyBET01cbiAgY29uc3QgYmF0dGxlU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVzaGlwJyk7XG4gIGNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FycmllcicpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXN0cm95ZXInKTtcbiAgY29uc3QgcGF0cm9sYm9hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXRyb2xib2F0Jyk7XG5cbiAgY29uc3Qgc2V0RHJhZ2dlciA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmlkKTtcbiAgICB9KTtcbiAgfTtcblxuICBzZXREcmFnZ2VyKGJhdHRsZVNoaXApO1xuICBzZXREcmFnZ2VyKGNhcnJpZXIpO1xuICBzZXREcmFnZ2VyKHN1Ym1hcmluZSk7XG4gIHNldERyYWdnZXIoZGVzdHJveWVyKTtcbiAgc2V0RHJhZ2dlcihwYXRyb2xib2F0KTtcblxuICByZXR1cm4ge1xuICAgIGJhdHRsZVNoaXAsXG4gICAgY2FycmllcixcbiAgICBzdWJtYXJpbmUsXG4gICAgZGVzdHJveWVyLFxuICAgIHBhdHJvbGJvYXRcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VEcmFnZ2FibGU7XG4iLCJjb25zdCBwbGFjZUFJU2hpcCA9IChzaGlwLCBBSUJvYXJkKSA9PiB7XG4gIHdoaWxlICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgbnVtYmVyQXJyYXkgPSBbXTtcbiAgICBjb25zdCBmaXJzdE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBzZWNvbmROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbnVtYmVyQXJyYXkgPSBbZmlyc3ROdW1iZXIsIHNlY29uZE51bWJlcl07XG5cbiAgICBpZiAoXG4gICAgICBBSUJvYXJkLmNoZWNrU2hpcFBsYWNlbWVudChcbiAgICAgICAgc2hpcC5nZXRTaGlwTGVuZ3RoKCksXG4gICAgICAgIG51bWJlckFycmF5WzBdLFxuICAgICAgICBudW1iZXJBcnJheVsxXVxuICAgICAgKVxuICAgICkge1xuICAgICAgQUlCb2FyZC5wbGFjZVNoaXAoc2hpcCwgbnVtYmVyQXJyYXlbMF0sIG51bWJlckFycmF5WzFdKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxhY2VBSVNoaXA7XG4iLCJpbXBvcnQgbW91c2VTdmcgZnJvbSAnLi9pbWcvbW91c2UtbW92ZS12ZXJ0aWNhbC5zdmcnO1xuY29uc3Qgc2V0U3ZnID0gKCkgPT4ge1xuICBjb25zdCBzdmdDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdTdmcnKTtcblxuICBzdmdDb250YWluZXJzLmZvckVhY2goKGUpID0+IHtcbiAgICBlLmlubmVySFRNTCA9IG1vdXNlU3ZnO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldFN2ZztcbiIsIi8vIHVwZGF0ZXMgRE9NXG5jb25zdCB1cGRhdGVEaXNwbGF5ID0gKGJvYXJkTmFtZSwgYm9hcmQpID0+IHtcbiAgY29uc3QgYm9hcmRBcnJheSA9IGJvYXJkLmdldEdhbWVCb2FyZCgpO1xuICBjb25zdCBtaXNzZWQgPSBib2FyZC5nZXRNaXNzZWRBdHRhY2tzKCk7XG5cbiAgYm9hcmRBcnJheS5mb3JFYWNoKChyb3csIHkpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoY2VsbCwgeCkgPT4ge1xuICAgICAgaWYgKGNlbGwuc2hpcE5hbWUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNlbGwuc2hpcE5hbWUuY2hlY2tIaXQoY2VsbC5zaGlwTmFtZS5nZXRTaGlwKClbY2VsbC5zaGlwSW5kZXhdKSA9PT1cbiAgICAgICAgICB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLiR7Ym9hcmROYW1lfSBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXkgPVwiJHt5fVwiYFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2VsZWN0ZWRDZWxsLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgIHNlbGVjdGVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICBzZWxlY3RlZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnb2NjdXBpZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBjZWxsLnNoaXBOYW1lLmNoZWNrSGl0KGNlbGwuc2hpcE5hbWUuZ2V0U2hpcCgpW2NlbGwuc2hpcEluZGV4XSkgPT09XG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKGJvYXJkTmFtZSA9PT0gJ3BsYXllckJvYXJkJykge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC4ke2JvYXJkTmFtZX0gW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15ID1cIiR7eX1cIl1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBtaXNzZWQuZm9yRWFjaCgoYXR0YWNrKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtib2FyZE5hbWV9IFtkYXRhLXg9XCIke2F0dGFjay54fVwiXVtkYXRhLXkgPVwiJHthdHRhY2sueX1cIl1gXG4gICAgKTtcbiAgICBzZWxlY3RlZENlbGwudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZURpc3BsYXk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGJ1aWxkR2FtZSBmcm9tICcuL2J1aWxkR2FtZSc7XG5pbXBvcnQgY3JlYXRlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9jcmVhdGVFdmVudExpc3RlbmVycyc7XG5pbXBvcnQgc2V0U3ZnIGZyb20gJy4vc2V0U3ZnJztcblxuY29uc3QgbWFpbiA9ICgoKSA9PiB7XG4gIC8vIGluaXRpYWxpemVyXG4gIGJ1aWxkR2FtZSgpO1xuICBjcmVhdGVFdmVudExpc3RlbmVycygpO1xuICBzZXRTdmcoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=