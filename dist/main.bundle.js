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
___CSS_LOADER_EXPORT___.push([module.id, ".main-wrapper {\n  padding: 3vw;\n  display: grid;\n  /* grid-template-columns: 1fr 3fr; */\n}\n\n.navbar {\n  display: flex;\n}\n\n.project-title.selected,\n.view.selected {\n  background-color: lightblue;\n}\n\n.task-card {\n  background-color: rgb(183, 183, 183);\n  display: grid;\n  margin-bottom: 5px;\n}\n\nh2,\n.task-card h3,\n.task-card p {\n  outline: none;\n}\n\n.task-title {\n  display: flex;\n}\n\n.task-title > h3 {\n  margin: 5px 0;\n}\n\n.task-details {\n  opacity: 0;\n  height: 0;\n  transition: all 0.3s;\n}\n\n.expanded > .task-details {\n  opacity: 1;\n  height: 8vh;\n  transition: all 0.3s;\n}\n\np {\n  margin: 0;\n}\n\np:empty:not(:focus)::before {\n  content: attr(data-placeholder);\n}\nh2:empty:not(:focus)::before {\n  content: attr(data-placeholder);\n  color: grey;\n}\n\n.done {\n  text-decoration: line-through;\n}\n\n@media (min-width: 500px) {\n  .main-wrapper {\n    grid-template-columns: 1fr 3fr;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,2BAA2B;AAC7B;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,kBAAkB;AACpB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,+BAA+B;AACjC;AACA;EACE,+BAA+B;EAC/B,WAAW;AACb;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE;IACE,8BAA8B;EAChC;AACF","sourcesContent":[".main-wrapper {\n  padding: 3vw;\n  display: grid;\n  /* grid-template-columns: 1fr 3fr; */\n}\n\n.navbar {\n  display: flex;\n}\n\n.project-title.selected,\n.view.selected {\n  background-color: lightblue;\n}\n\n.task-card {\n  background-color: rgb(183, 183, 183);\n  display: grid;\n  margin-bottom: 5px;\n}\n\nh2,\n.task-card h3,\n.task-card p {\n  outline: none;\n}\n\n.task-title {\n  display: flex;\n}\n\n.task-title > h3 {\n  margin: 5px 0;\n}\n\n.task-details {\n  opacity: 0;\n  height: 0;\n  transition: all 0.3s;\n}\n\n.expanded > .task-details {\n  opacity: 1;\n  height: 8vh;\n  transition: all 0.3s;\n}\n\np {\n  margin: 0;\n}\n\np:empty:not(:focus)::before {\n  content: attr(data-placeholder);\n}\nh2:empty:not(:focus)::before {\n  content: attr(data-placeholder);\n  color: grey;\n}\n\n.done {\n  text-decoration: line-through;\n}\n\n@media (min-width: 500px) {\n  .main-wrapper {\n    grid-template-columns: 1fr 3fr;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flattenProjects": () => (/* binding */ flattenProjects),
/* harmony export */   "projectsList": () => (/* binding */ projectsList),
/* harmony export */   "taskList": () => (/* binding */ taskList)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/interface.js */ "./src/modules/interface.js");


// import { createTask } from "./modules/tasks.js";

let project1 = {
  title: "Test1",
  dueDate: "",
  notes: "",
  project: "",
  priority: false,
  tasks: [],
};
let project3 = {
  title: "Project 3",
  dueDate: "",
  notes: "",
  project: "",
  priority: false,
  tasks: [
    {
      title: "Project 3 task 1",
      dueDate: Date.parse("2022-12-01"),
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
    },

    {
      title: "Project 3 task 2",
      dueDate: Date.parse("2022-12-11"),
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
      completed: true,
    },
  ],
};
let project2 = {
  title: "Testing 2",
  dueDate: "",
  notes: "",
  project: "",
  priority: false,
  tasks: [
    {
      title: "Project 2 task 1",
      dueDate: Date.parse("2022-12-01"),
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
    },

    {
      title: "Project 2 task 2",
      dueDate: Date.parse("2022-12-11"),
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
      completed: true,
    },
  ],
};
let taskList = [];
const projectsList = [
  {
    title: "Inbox",
    dueDate: "",
    notes: "",
    project: "Inbox",
    priority: false,
    tasks: [
      {
        title: "Inbox task 1",
        dueDate: Date.parse("2022-11-11"),
        notes: "",
        project: "project 2",
        priority: false,
        checklist: [],
        completed: true,
      },
      {
        title: "Inbox task 2",
        dueDate: Date.parse("2022-10-11"),
        notes: "",
        project: "project 2",
        priority: false,
        checklist: [],
      },
    ],
  },
  project1,
  project2,
  project3,
];

projectsList.slice(1).forEach((task) => {
  (0,_modules_interface_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectsList)(task);
});
console.log(projectsList);
(0,_modules_interface_js__WEBPACK_IMPORTED_MODULE_1__.switchToTodayView)();
//element selectors
const addTaskBtn = document.querySelector("#add-task-btn");
const addProjectBtn = document.querySelector("#add-project-btn");
const titleInput = document.querySelector("#title");
const projectTitleInput = document.querySelector("#project-title");

addTaskBtn.addEventListener("click", createTask);
addProjectBtn.addEventListener("click", createProject);

class Project {
  constructor(title, dueDate, notes, project, tasks, completed) {
    this.title = title === "" ? "New Project" : title;
    this.dueDate = Date.parse(dueDate);
    this.notes = notes === undefined ? "" : notes;
    this.tasks = [];
    this.completed = false;
  }
}

class Task extends Project {
  constructor(title, dueDate, notes, project, priority, checklist, completed) {
    super();
    this.title = title;
    this.dueDate = Date.parse(dueDate);
    this.notes = notes === undefined ? "" : notes;
    this.project = project === "Inbox" ? "Inbox" : project;
    this.priority = priority.checked ? true : false;
    this.checklist = [];
    this.completed = false;
    delete this.tasks;
  }
}

function clearFields() {
  titleInput.value = dueDate.value = notes.value = "";
  priority.checked = false;
}

function createTask() {
  let currentProjectName =
    document.querySelector(".tasks-display > h2").textContent == "Today"
      ? "Inbox"
      : document.querySelector(".tasks-display > h2").textContent;
  const newTask = new Task(
    titleInput.value,
    dueDate.value,
    notes.value,
    currentProjectName,
    priority
  );

  // if (currentProjectName == "Today") {
  const found = projectsList.find(
    (project) => project.title === currentProjectName
  );
  found.tasks.push(newTask);
  (0,_modules_interface_js__WEBPACK_IMPORTED_MODULE_1__.updateTasksUI)(found.tasks.at(-1));
  // } else {
  //   taskList.push(newTask);
  //   updateTasksUI(taskList.at(-1));
  // }
  clearFields();
  console.log(taskList, projectsList);
}

function createProject() {
  const newProject = new Project(
    projectTitleInput.value,
    dueDate.value,
    notes.value,
    projectTitleInput.value
  );
  projectsList.push(newProject);
  clearFields();
  console.log(taskList, projectsList);
  (0,_modules_interface_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectsList)(projectsList.at(-1));
  (0,_modules_interface_js__WEBPACK_IMPORTED_MODULE_1__.newProjectView)(newProject);
}

function flattenProjects(array) {
  let flattenedArray = [];
  array.forEach((object) => {
    flattenedArray.push(object);
    if (Array.isArray(object.tasks)) {
      flattenedArray = flattenedArray.concat(flattenProjects(object.tasks));
    }
  });
  return flattenedArray;
}

window.checkTask = _modules_interface_js__WEBPACK_IMPORTED_MODULE_1__.checkTask;
window.expandCard = _modules_interface_js__WEBPACK_IMPORTED_MODULE_1__.expandCard;


/*
Projects = {
    name: ,
    due date:,
    Notes: ,
    Priority: ,
    Status: ,
    tasks: ,

}
Tasks = {
    name: ,
    due date:,
    Notes: ,
    Priority: ,
    Status: ,
    Checklist: ,
    Project: ,

}

    


*/


/***/ }),

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTask": () => (/* binding */ checkTask),
/* harmony export */   "expandCard": () => (/* binding */ expandCard),
/* harmony export */   "newProjectView": () => (/* binding */ newProjectView),
/* harmony export */   "selectProject": () => (/* binding */ selectProject),
/* harmony export */   "switchToTodayView": () => (/* binding */ switchToTodayView),
/* harmony export */   "tasksDisplay": () => (/* binding */ tasksDisplay),
/* harmony export */   "updateProjectsList": () => (/* binding */ updateProjectsList),
/* harmony export */   "updateTasksUI": () => (/* binding */ updateTasksUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");


const tasksDisplay = document.querySelector(".tasks-display");
const projectsDisplay = document.querySelector(".projects-display");
const sidebar = document.querySelector(".sidebar");

const taskCards = document.getElementsByClassName("task-card");

//task functions
function updateTasksUI(task) {
  const html = `<div class="task-card" ondblclick="expandCard()" >
  <div class='task-title'>
    <input type="checkbox" onchange="checkTask(this)" >
      
        <h3 class="" contenteditable>${task.title}</h3>
  </div>
    <div class='task-details'>
    <p data-placeholder="Notes" contenteditable>${task.notes}</p>
    </div>
    </div>`;

  tasksDisplay.insertAdjacentHTML("beforeend", html);
}

function checkTask(checkboxElem) {
  if (checkboxElem.checked) {
    event.target.parentElement.classList.add("done");
  } else {
    event.target.parentElement.classList.remove("done");
  }
}

function expandCard() {
  if (event.target.parentElement.classList.contains("task-card")) {
    event.target.parentElement.classList.add("expanded");
  }
}

//check if click is within closest task-card that is already expanded, if not remove expanded class from everything
function closeCard() {
  if (!event.target.closest(".task-card")?.classList.contains("expanded")) {
    for (let card of taskCards) {
      card.classList.remove("expanded");
    }
  }
}

//project functions

//use appendchild so it's easier to set conditional for when project title is New
function updateProjectsList(project) {
  clearSelectedProject();
  const newProjectCard = document.createElement("div");
  newProjectCard.classList.add("project-card");

  const newProjectTitle = document.createElement("h3");
  newProjectTitle.classList.add("project-title");
  newProjectTitle.textContent = `${project.title}`;
  if (project.title === "New Project") {
    newProjectTitle.classList.add("selected");
  }

  newProjectCard.appendChild(newProjectTitle);
  projectsDisplay.appendChild(newProjectCard);
}

function newProjectView(project) {
  tasksDisplay.innerHTML = "";
  const html = `
  <h2 class='project-heading' contenteditable>${project.title}</h2> 
  `;
  projectsDisplay.lastChild.firstChild.classList.add("selected");
  tasksDisplay.insertAdjacentHTML("beforeend", html);
}

function switchCurrentView() {
  let targetTitle = event.target.textContent;
  if (event.target.closest(".project-title")) {
    tasksDisplay.innerHTML = `<h2 class="project-title" contenteditable>${targetTitle}</h2>`;
    const found = ___WEBPACK_IMPORTED_MODULE_0__.projectsList.find((project) => project.title === targetTitle);
    found.tasks.forEach((task) => {
      updateTasksUI(task);
    });
  } else {
    tasksDisplay.innerHTML = `<h2 class="project-title">${targetTitle}</h2>`;
    if (event.target.closest("#completed-view")) {
      switchToCompletedView();
    } else if (event.target.closest("#today-view")) {
      switchToTodayView();
    } else {
      switchToInboxView();
    }
  }
}

function switchToTodayView() {
  const today = Date.now();
  //flatten our array and find projects that dueDate before today
  const projectsWithDates = (0,___WEBPACK_IMPORTED_MODULE_0__.flattenProjects)(___WEBPACK_IMPORTED_MODULE_0__.projectsList).filter(
    (projects) => projects.dueDate != "" && projects.dueDate < today
  );
  // const yesterday = new Date(2022 - 12 - 19);
  projectsWithDates.forEach((project) => {
    updateTasksUI(project);
  });
}

function switchToCompletedView() {
  const completedProjects = (0,___WEBPACK_IMPORTED_MODULE_0__.flattenProjects)(___WEBPACK_IMPORTED_MODULE_0__.projectsList).filter(
    (projects) => projects.completed === true
  );
  completedProjects.forEach((project) => updateTasksUI(project));
}

function switchToInboxView() {
  let inbox = ___WEBPACK_IMPORTED_MODULE_0__.projectsList.find((project) => project.title === "Inbox");
  inbox.tasks.forEach((task) => {
    updateTasksUI(task);
  });
}

function clearSelectedProject() {
  document.querySelector(".selected")?.classList.remove("selected");
}

function selectProject() {
  if (event.target.closest(".project-title") || event.target.closest(".view")) {
    clearSelectedProject();
    event.target.classList.add("selected");
    switchCurrentView();
  }
}

//event listeners
sidebar.addEventListener("click", selectProject);

window.addEventListener("click", () => {
  closeCard();
});




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsQ0FBQzs7QUFXQzs7Ozs7OztVQ3JKRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluLXdyYXBwZXIge1xcbiAgcGFkZGluZzogM3Z3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjsgKi9cXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZS5zZWxlY3RlZCxcXG4udmlldy5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi50YXNrLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MywgMTgzLCAxODMpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuaDIsXFxuLnRhc2stY2FyZCBoMyxcXG4udGFzay1jYXJkIHAge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stdGl0bGUgPiBoMyB7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmV4cGFuZGVkID4gLnRhc2stZGV0YWlscyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgaGVpZ2h0OiA4dmg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbnA6ZW1wdHk6bm90KDpmb2N1cyk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xcbn1cXG5oMjplbXB0eTpub3QoOmZvY3VzKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xcbiAgLm1haW4td3JhcHBlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDN2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7ICovXFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUuc2VsZWN0ZWQsXFxuLnZpZXcuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODMsIDE4MywgMTgzKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbmgyLFxcbi50YXNrLWNhcmQgaDMsXFxuLnRhc2stY2FyZCBwIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrLXRpdGxlID4gaDMge1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuLnRhc2stZGV0YWlscyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5leHBhbmRlZCA+IC50YXNrLWRldGFpbHMge1xcbiAgb3BhY2l0eTogMTtcXG4gIGhlaWdodDogOHZoO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5wOmVtcHR5Om5vdCg6Zm9jdXMpOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLXBsYWNlaG9sZGVyKTtcXG59XFxuaDI6ZW1wdHk6bm90KDpmb2N1cyk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcXG4gIC5tYWluLXdyYXBwZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuICB1cGRhdGVUYXNrc1VJLFxuICB1cGRhdGVQcm9qZWN0c0xpc3QsXG4gIGNoZWNrVGFzayxcbiAgZXhwYW5kQ2FyZCxcbiAgbmV3UHJvamVjdFZpZXcsXG4gIHN3aXRjaFRvVG9kYXlWaWV3LFxufSBmcm9tIFwiLi9tb2R1bGVzL2ludGVyZmFjZS5qc1wiO1xuLy8gaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL21vZHVsZXMvdGFza3MuanNcIjtcblxubGV0IHByb2plY3QxID0ge1xuICB0aXRsZTogXCJUZXN0MVwiLFxuICBkdWVEYXRlOiBcIlwiLFxuICBub3RlczogXCJcIixcbiAgcHJvamVjdDogXCJcIixcbiAgcHJpb3JpdHk6IGZhbHNlLFxuICB0YXNrczogW10sXG59O1xubGV0IHByb2plY3QzID0ge1xuICB0aXRsZTogXCJQcm9qZWN0IDNcIixcbiAgZHVlRGF0ZTogXCJcIixcbiAgbm90ZXM6IFwiXCIsXG4gIHByb2plY3Q6IFwiXCIsXG4gIHByaW9yaXR5OiBmYWxzZSxcbiAgdGFza3M6IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJQcm9qZWN0IDMgdGFzayAxXCIsXG4gICAgICBkdWVEYXRlOiBEYXRlLnBhcnNlKFwiMjAyMi0xMi0wMVwiKSxcbiAgICAgIG5vdGVzOiBcIlwiLFxuICAgICAgcHJvamVjdDogXCJwcm9qZWN0IDJcIixcbiAgICAgIHByaW9yaXR5OiBmYWxzZSxcbiAgICAgIGNoZWNrbGlzdDogW10sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlByb2plY3QgMyB0YXNrIDJcIixcbiAgICAgIGR1ZURhdGU6IERhdGUucGFyc2UoXCIyMDIyLTEyLTExXCIpLFxuICAgICAgbm90ZXM6IFwiXCIsXG4gICAgICBwcm9qZWN0OiBcInByb2plY3QgMlwiLFxuICAgICAgcHJpb3JpdHk6IGZhbHNlLFxuICAgICAgY2hlY2tsaXN0OiBbXSxcbiAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICB9LFxuICBdLFxufTtcbmxldCBwcm9qZWN0MiA9IHtcbiAgdGl0bGU6IFwiVGVzdGluZyAyXCIsXG4gIGR1ZURhdGU6IFwiXCIsXG4gIG5vdGVzOiBcIlwiLFxuICBwcm9qZWN0OiBcIlwiLFxuICBwcmlvcml0eTogZmFsc2UsXG4gIHRhc2tzOiBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiUHJvamVjdCAyIHRhc2sgMVwiLFxuICAgICAgZHVlRGF0ZTogRGF0ZS5wYXJzZShcIjIwMjItMTItMDFcIiksXG4gICAgICBub3RlczogXCJcIixcbiAgICAgIHByb2plY3Q6IFwicHJvamVjdCAyXCIsXG4gICAgICBwcmlvcml0eTogZmFsc2UsXG4gICAgICBjaGVja2xpc3Q6IFtdLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICB0aXRsZTogXCJQcm9qZWN0IDIgdGFzayAyXCIsXG4gICAgICBkdWVEYXRlOiBEYXRlLnBhcnNlKFwiMjAyMi0xMi0xMVwiKSxcbiAgICAgIG5vdGVzOiBcIlwiLFxuICAgICAgcHJvamVjdDogXCJwcm9qZWN0IDJcIixcbiAgICAgIHByaW9yaXR5OiBmYWxzZSxcbiAgICAgIGNoZWNrbGlzdDogW10sXG4gICAgICBjb21wbGV0ZWQ6IHRydWUsXG4gICAgfSxcbiAgXSxcbn07XG5sZXQgdGFza0xpc3QgPSBbXTtcbmNvbnN0IHByb2plY3RzTGlzdCA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkluYm94XCIsXG4gICAgZHVlRGF0ZTogXCJcIixcbiAgICBub3RlczogXCJcIixcbiAgICBwcm9qZWN0OiBcIkluYm94XCIsXG4gICAgcHJpb3JpdHk6IGZhbHNlLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkluYm94IHRhc2sgMVwiLFxuICAgICAgICBkdWVEYXRlOiBEYXRlLnBhcnNlKFwiMjAyMi0xMS0xMVwiKSxcbiAgICAgICAgbm90ZXM6IFwiXCIsXG4gICAgICAgIHByb2plY3Q6IFwicHJvamVjdCAyXCIsXG4gICAgICAgIHByaW9yaXR5OiBmYWxzZSxcbiAgICAgICAgY2hlY2tsaXN0OiBbXSxcbiAgICAgICAgY29tcGxldGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiSW5ib3ggdGFzayAyXCIsXG4gICAgICAgIGR1ZURhdGU6IERhdGUucGFyc2UoXCIyMDIyLTEwLTExXCIpLFxuICAgICAgICBub3RlczogXCJcIixcbiAgICAgICAgcHJvamVjdDogXCJwcm9qZWN0IDJcIixcbiAgICAgICAgcHJpb3JpdHk6IGZhbHNlLFxuICAgICAgICBjaGVja2xpc3Q6IFtdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBwcm9qZWN0MSxcbiAgcHJvamVjdDIsXG4gIHByb2plY3QzLFxuXTtcblxucHJvamVjdHNMaXN0LnNsaWNlKDEpLmZvckVhY2goKHRhc2spID0+IHtcbiAgdXBkYXRlUHJvamVjdHNMaXN0KHRhc2spO1xufSk7XG5jb25zb2xlLmxvZyhwcm9qZWN0c0xpc3QpO1xuc3dpdGNoVG9Ub2RheVZpZXcoKTtcbi8vZWxlbWVudCBzZWxlY3RvcnNcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ0blwiKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ0blwiKTtcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIik7XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRhc2spO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdCk7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgbm90ZXMsIHByb2plY3QsIHRhc2tzLCBjb21wbGV0ZWQpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGUgPT09IFwiXCIgPyBcIk5ldyBQcm9qZWN0XCIgOiB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBEYXRlLnBhcnNlKGR1ZURhdGUpO1xuICAgIHRoaXMubm90ZXMgPSBub3RlcyA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IG5vdGVzO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG59XG5cbmNsYXNzIFRhc2sgZXh0ZW5kcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIG5vdGVzLCBwcm9qZWN0LCBwcmlvcml0eSwgY2hlY2tsaXN0LCBjb21wbGV0ZWQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBEYXRlLnBhcnNlKGR1ZURhdGUpO1xuICAgIHRoaXMubm90ZXMgPSBub3RlcyA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IG5vdGVzO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3QgPT09IFwiSW5ib3hcIiA/IFwiSW5ib3hcIiA6IHByb2plY3Q7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LmNoZWNrZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5jaGVja2xpc3QgPSBbXTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGRlbGV0ZSB0aGlzLnRhc2tzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyRmllbGRzKCkge1xuICB0aXRsZUlucHV0LnZhbHVlID0gZHVlRGF0ZS52YWx1ZSA9IG5vdGVzLnZhbHVlID0gXCJcIjtcbiAgcHJpb3JpdHkuY2hlY2tlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICBsZXQgY3VycmVudFByb2plY3ROYW1lID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWRpc3BsYXkgPiBoMlwiKS50ZXh0Q29udGVudCA9PSBcIlRvZGF5XCJcbiAgICAgID8gXCJJbmJveFwiXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtZGlzcGxheSA+IGgyXCIpLnRleHRDb250ZW50O1xuICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICBkdWVEYXRlLnZhbHVlLFxuICAgIG5vdGVzLnZhbHVlLFxuICAgIGN1cnJlbnRQcm9qZWN0TmFtZSxcbiAgICBwcmlvcml0eVxuICApO1xuXG4gIC8vIGlmIChjdXJyZW50UHJvamVjdE5hbWUgPT0gXCJUb2RheVwiKSB7XG4gIGNvbnN0IGZvdW5kID0gcHJvamVjdHNMaXN0LmZpbmQoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IGN1cnJlbnRQcm9qZWN0TmFtZVxuICApO1xuICBmb3VuZC50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICB1cGRhdGVUYXNrc1VJKGZvdW5kLnRhc2tzLmF0KC0xKSk7XG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgdGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgLy8gICB1cGRhdGVUYXNrc1VJKHRhc2tMaXN0LmF0KC0xKSk7XG4gIC8vIH1cbiAgY2xlYXJGaWVsZHMoKTtcbiAgY29uc29sZS5sb2codGFza0xpc3QsIHByb2plY3RzTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSxcbiAgICBkdWVEYXRlLnZhbHVlLFxuICAgIG5vdGVzLnZhbHVlLFxuICAgIHByb2plY3RUaXRsZUlucHV0LnZhbHVlXG4gICk7XG4gIHByb2plY3RzTGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICBjbGVhckZpZWxkcygpO1xuICBjb25zb2xlLmxvZyh0YXNrTGlzdCwgcHJvamVjdHNMaXN0KTtcbiAgdXBkYXRlUHJvamVjdHNMaXN0KHByb2plY3RzTGlzdC5hdCgtMSkpO1xuICBuZXdQcm9qZWN0VmlldyhuZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlblByb2plY3RzKGFycmF5KSB7XG4gIGxldCBmbGF0dGVuZWRBcnJheSA9IFtdO1xuICBhcnJheS5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBmbGF0dGVuZWRBcnJheS5wdXNoKG9iamVjdCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0LnRhc2tzKSkge1xuICAgICAgZmxhdHRlbmVkQXJyYXkgPSBmbGF0dGVuZWRBcnJheS5jb25jYXQoZmxhdHRlblByb2plY3RzKG9iamVjdC50YXNrcykpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmbGF0dGVuZWRBcnJheTtcbn1cblxud2luZG93LmNoZWNrVGFzayA9IGNoZWNrVGFzaztcbndpbmRvdy5leHBhbmRDYXJkID0gZXhwYW5kQ2FyZDtcblxuZXhwb3J0IHsgdGFza0xpc3QsIHByb2plY3RzTGlzdCwgZmxhdHRlblByb2plY3RzIH07XG4vKlxuUHJvamVjdHMgPSB7XG4gICAgbmFtZTogLFxuICAgIGR1ZSBkYXRlOixcbiAgICBOb3RlczogLFxuICAgIFByaW9yaXR5OiAsXG4gICAgU3RhdHVzOiAsXG4gICAgdGFza3M6ICxcblxufVxuVGFza3MgPSB7XG4gICAgbmFtZTogLFxuICAgIGR1ZSBkYXRlOixcbiAgICBOb3RlczogLFxuICAgIFByaW9yaXR5OiAsXG4gICAgU3RhdHVzOiAsXG4gICAgQ2hlY2tsaXN0OiAsXG4gICAgUHJvamVjdDogLFxuXG59XG5cbiAgICBcblxuXG4qL1xuIiwiaW1wb3J0IHsgcHJvamVjdHNMaXN0LCBmbGF0dGVuUHJvamVjdHMgfSBmcm9tIFwiLi5cIjtcblxuY29uc3QgdGFza3NEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1kaXNwbGF5XCIpO1xuY29uc3QgcHJvamVjdHNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1kaXNwbGF5XCIpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcblxuY29uc3QgdGFza0NhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2stY2FyZFwiKTtcblxuLy90YXNrIGZ1bmN0aW9uc1xuZnVuY3Rpb24gdXBkYXRlVGFza3NVSSh0YXNrKSB7XG4gIGNvbnN0IGh0bWwgPSBgPGRpdiBjbGFzcz1cInRhc2stY2FyZFwiIG9uZGJsY2xpY2s9XCJleHBhbmRDYXJkKClcIiA+XG4gIDxkaXYgY2xhc3M9J3Rhc2stdGl0bGUnPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbmNoYW5nZT1cImNoZWNrVGFzayh0aGlzKVwiID5cbiAgICAgIFxuICAgICAgICA8aDMgY2xhc3M9XCJcIiBjb250ZW50ZWRpdGFibGU+JHt0YXNrLnRpdGxlfTwvaDM+XG4gIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J3Rhc2stZGV0YWlscyc+XG4gICAgPHAgZGF0YS1wbGFjZWhvbGRlcj1cIk5vdGVzXCIgY29udGVudGVkaXRhYmxlPiR7dGFzay5ub3Rlc308L3A+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcblxuICB0YXNrc0Rpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGh0bWwpO1xufVxuXG5mdW5jdGlvbiBjaGVja1Rhc2soY2hlY2tib3hFbGVtKSB7XG4gIGlmIChjaGVja2JveEVsZW0uY2hlY2tlZCkge1xuICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkb25lXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4cGFuZENhcmQoKSB7XG4gIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLWNhcmRcIikpIHtcbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XG4gIH1cbn1cblxuLy9jaGVjayBpZiBjbGljayBpcyB3aXRoaW4gY2xvc2VzdCB0YXNrLWNhcmQgdGhhdCBpcyBhbHJlYWR5IGV4cGFuZGVkLCBpZiBub3QgcmVtb3ZlIGV4cGFuZGVkIGNsYXNzIGZyb20gZXZlcnl0aGluZ1xuZnVuY3Rpb24gY2xvc2VDYXJkKCkge1xuICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY2FyZFwiKT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhwYW5kZWRcIikpIHtcbiAgICBmb3IgKGxldCBjYXJkIG9mIHRhc2tDYXJkcykge1xuICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kZWRcIik7XG4gICAgfVxuICB9XG59XG5cbi8vcHJvamVjdCBmdW5jdGlvbnNcblxuLy91c2UgYXBwZW5kY2hpbGQgc28gaXQncyBlYXNpZXIgdG8gc2V0IGNvbmRpdGlvbmFsIGZvciB3aGVuIHByb2plY3QgdGl0bGUgaXMgTmV3XG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0c0xpc3QocHJvamVjdCkge1xuICBjbGVhclNlbGVjdGVkUHJvamVjdCgpO1xuICBjb25zdCBuZXdQcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld1Byb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRcIik7XG5cbiAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBuZXdQcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gIG5ld1Byb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgaWYgKHByb2plY3QudGl0bGUgPT09IFwiTmV3IFByb2plY3RcIikge1xuICAgIG5ld1Byb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBuZXdQcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuICBwcm9qZWN0c0Rpc3BsYXkuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENhcmQpO1xufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0Vmlldyhwcm9qZWN0KSB7XG4gIHRhc2tzRGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBodG1sID0gYFxuICA8aDIgY2xhc3M9J3Byb2plY3QtaGVhZGluZycgY29udGVudGVkaXRhYmxlPiR7cHJvamVjdC50aXRsZX08L2gyPiBcbiAgYDtcbiAgcHJvamVjdHNEaXNwbGF5Lmxhc3RDaGlsZC5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgdGFza3NEaXNwbGF5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBodG1sKTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoQ3VycmVudFZpZXcoKSB7XG4gIGxldCB0YXJnZXRUaXRsZSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtdGl0bGVcIikpIHtcbiAgICB0YXNrc0Rpc3BsYXkuaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cInByb2plY3QtdGl0bGVcIiBjb250ZW50ZWRpdGFibGU+JHt0YXJnZXRUaXRsZX08L2gyPmA7XG4gICAgY29uc3QgZm91bmQgPSBwcm9qZWN0c0xpc3QuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gdGFyZ2V0VGl0bGUpO1xuICAgIGZvdW5kLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHVwZGF0ZVRhc2tzVUkodGFzayk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGFza3NEaXNwbGF5LmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+JHt0YXJnZXRUaXRsZX08L2gyPmA7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiI2NvbXBsZXRlZC12aWV3XCIpKSB7XG4gICAgICBzd2l0Y2hUb0NvbXBsZXRlZFZpZXcoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiI3RvZGF5LXZpZXdcIikpIHtcbiAgICAgIHN3aXRjaFRvVG9kYXlWaWV3KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaFRvSW5ib3hWaWV3KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFRvVG9kYXlWaWV3KCkge1xuICBjb25zdCB0b2RheSA9IERhdGUubm93KCk7XG4gIC8vZmxhdHRlbiBvdXIgYXJyYXkgYW5kIGZpbmQgcHJvamVjdHMgdGhhdCBkdWVEYXRlIGJlZm9yZSB0b2RheVxuICBjb25zdCBwcm9qZWN0c1dpdGhEYXRlcyA9IGZsYXR0ZW5Qcm9qZWN0cyhwcm9qZWN0c0xpc3QpLmZpbHRlcihcbiAgICAocHJvamVjdHMpID0+IHByb2plY3RzLmR1ZURhdGUgIT0gXCJcIiAmJiBwcm9qZWN0cy5kdWVEYXRlIDwgdG9kYXlcbiAgKTtcbiAgLy8gY29uc3QgeWVzdGVyZGF5ID0gbmV3IERhdGUoMjAyMiAtIDEyIC0gMTkpO1xuICBwcm9qZWN0c1dpdGhEYXRlcy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgdXBkYXRlVGFza3NVSShwcm9qZWN0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFRvQ29tcGxldGVkVmlldygpIHtcbiAgY29uc3QgY29tcGxldGVkUHJvamVjdHMgPSBmbGF0dGVuUHJvamVjdHMocHJvamVjdHNMaXN0KS5maWx0ZXIoXG4gICAgKHByb2plY3RzKSA9PiBwcm9qZWN0cy5jb21wbGV0ZWQgPT09IHRydWVcbiAgKTtcbiAgY29tcGxldGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gdXBkYXRlVGFza3NVSShwcm9qZWN0KSk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFRvSW5ib3hWaWV3KCkge1xuICBsZXQgaW5ib3ggPSBwcm9qZWN0c0xpc3QuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gXCJJbmJveFwiKTtcbiAgaW5ib3gudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHVwZGF0ZVRhc2tzVUkodGFzayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhclNlbGVjdGVkUHJvamVjdCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKT8uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RQcm9qZWN0KCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC10aXRsZVwiKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdChcIi52aWV3XCIpKSB7XG4gICAgY2xlYXJTZWxlY3RlZFByb2plY3QoKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIHN3aXRjaEN1cnJlbnRWaWV3KCk7XG4gIH1cbn1cblxuLy9ldmVudCBsaXN0ZW5lcnNcbnNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdFByb2plY3QpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xvc2VDYXJkKCk7XG59KTtcblxuZXhwb3J0IHtcbiAgdXBkYXRlVGFza3NVSSxcbiAgdXBkYXRlUHJvamVjdHNMaXN0LFxuICBjaGVja1Rhc2ssXG4gIGV4cGFuZENhcmQsXG4gIHRhc2tzRGlzcGxheSxcbiAgbmV3UHJvamVjdFZpZXcsXG4gIHNlbGVjdFByb2plY3QsXG4gIHN3aXRjaFRvVG9kYXlWaWV3LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9