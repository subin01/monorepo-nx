(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/maps/src/index.ts":
/*!*********************************************************************************!*\
  !*** /Users/subpaul/Documents/primary-connect-workspace/libs/maps/src/index.ts ***!
  \*********************************************************************************/
/*! exports provided: Maps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/maps */ "../../../libs/maps/src/lib/maps.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Maps", function() { return _lib_maps__WEBPACK_IMPORTED_MODULE_0__["Maps"]; });



/***/ }),

/***/ "../../../libs/maps/src/lib/maps.module.scss":
/*!*********************************************************************************************!*\
  !*** /Users/subpaul/Documents/primary-connect-workspace/libs/maps/src/lib/maps.module.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../node_modules/sass-loader/dist/cjs.js!./maps.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!../../../libs/maps/src/lib/maps.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/maps/src/lib/maps.tsx":
/*!*************************************************************************************!*\
  !*** /Users/subpaul/Documents/primary-connect-workspace/libs/maps/src/lib/maps.tsx ***!
  \*************************************************************************************/
/*! exports provided: Maps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Maps", function() { return Maps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _maps_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.module.scss */ "../../../libs/maps/src/lib/maps.module.scss");
/* harmony import */ var _maps_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_maps_module_scss__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable-next-line */

function Maps(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      background: '#ccc',
      height: '10rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '2rem 0',
      padding: '1rem',
      color: '#992200',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      width: '100%'
    }
  }, "Library: MAP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: {
      width: '20%',
      padding: '0.5rem'
    }
  }, props.location || 'No location'));
}
/* harmony default export */ __webpack_exports__["default"] = (Maps);

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!../../../libs/maps/src/lib/maps.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/subpaul/Documents/primary-connect-workspace/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!/Users/subpaul/Documents/primary-connect-workspace/node_modules/sass-loader/dist/cjs.js!/Users/subpaul/Documents/primary-connect-workspace/libs/maps/src/lib/maps.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/app.module.scss":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/subpaul/Documents/primary-connect-workspace/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!/Users/subpaul/Documents/primary-connect-workspace/node_modules/sass-loader/dist/cjs.js!./app/app.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/subpaul/Documents/primary-connect-workspace/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/Blog/Blog.jsx":
/*!***************************!*\
  !*** ./app/Blog/Blog.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "../../../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "../../../node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "../../../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "../../../node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ "../../../node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "../../../node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "../../../node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ "../../../node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Input */ "../../../node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "../../../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "../../../node_modules/@apollo/client/index.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../graphql/queries */ "./app/graphql/queries.js");













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  nowrap: {
    whiteSpace: 'nowrap'
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'left',
    marginBottom: theme.spacing(3),
    width: '50%',
    '& > *': {
      marginRight: theme.spacing(3)
    }
  }
}));
function Blog() {
  var _data$posts;

  const classes = useStyles();
  const [createPost, {
    createData
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_11__["useMutation"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_12__["ADD_POST"]);
  const {
    loading,
    error,
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_11__["useQuery"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_12__["GET_POSTS"], {});
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  const handleSubmit = e => {
    e.preventDefault();
    createPost({
      variables: {
        input: {
          title: inputRef.current.value,
          user_id: '1',
          date: '2019-10-10'
        }
      }
    });
  };

  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    borderTop: 4,
    borderColor: "secondary.main",
    bgcolor: "primary.contrastText",
    my: 2,
    p: 2,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h3"
  }, "Loading ..."));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    borderTop: 4,
    borderColor: "primary.main",
    bgcolor: "primary.contrastText",
    my: 2,
    p: 2,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: e => handleSubmit(e)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    my: 2,
    width: "100%",
    className: classes.searchBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h3"
  }, "Posts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: inputRef,
    placeholder: "Enter title"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "primary",
    variant: "contained",
    type: "submit"
  }, "Add"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
    align: "right"
  }, "Age"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], null, data === null || data === void 0 ? void 0 : (_data$posts = data.posts) === null || _data$posts === void 0 ? void 0 : _data$posts.map(p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    key: p.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, p.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, p.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.nowrap
  }, p.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, p.user.firstname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
    align: "right"
  }, p.user.age))))));
}

/***/ }),

/***/ "./app/Elements/Elements.tsx":
/*!***********************************!*\
  !*** ./app/Elements/Elements.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Elements; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "../../../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "../../../node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "../../../node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "../../../node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "../../../node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "../../../node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "../../../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ "../../../node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardActions */ "../../../node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardContent */ "../../../node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "../../../node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Box */ "../../../node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Divider */ "../../../node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Stepper */ "../../../node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Step */ "../../../node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "../../../node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/StepContent */ "../../../node_modules/@material-ui/core/esm/StepContent/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/lab/Alert */ "../../../node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/styles */ "../../../node_modules/@material-ui/core/esm/styles/index.js");




















const TextFieldBox = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__["withStyles"])({
  root: {
    '& .MuiInput-underline:before': {
      border: 'none !important'
    },
    '& .MuiInput-underline:after': {
      border: 'none'
    }
  }
})(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"]);
const steps = ['Quote Created', 'Quote Accepted', 'Delivery'];
function Elements() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    className: "elements"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 4,
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__["default"], {
    borderTop: 4,
    borderColor: "primary.main",
    bgcolor: "primary.contrastText",
    my: 2,
    p: 2,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6"
  }, "From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextFieldBox, {
    label: "Country or origin",
    value: "Darwin",
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6"
  }, "To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextFieldBox, {
    label: "Country or origin",
    value: "",
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h3"
  }, "Tell us a little more about your cargo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextFieldBox, {
    label: "Number of Units",
    value: "150",
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextFieldBox, {
    label: "Weight per piece (kg)",
    value: "150",
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  }), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextFieldBox, {
    label: "Length (cm)",
    value: "150",
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  }), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextFieldBox, {
    label: "Width (cm)",
    value: "120",
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  }), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextFieldBox, {
    label: "Height (cm)",
    value: "100",
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  }), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "primary",
    variant: "contained",
    fullWidth: true
  }, "Get a Quote"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 6,
    className: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h1"
  }, "Heading 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h2"
  }, "Heading 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h3"
  }, "Heading 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h4"
  }, "Heading 4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h5"
  }, "Heading 5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6"
  }, "Heading 6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "primary",
    variant: "contained"
  }, "Primary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "secondary",
    variant: "contained",
    disableElevation: true
  }, "Secondary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "secondary",
    variant: "outlined",
    disableElevation: true
  }, "Tertiary"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_14__["default"], {
    activeStep: 1,
    orientation: "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Quote Created", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Mon 2 Nov, 2020 11:45am"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_17__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Quote Accepted ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Mon 2 Nov, 2020 11:45am")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Receive goods Estimated ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Mon 9 Nov, 2020 1:00pm"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_18__["default"], {
    severity: "info"
  }, "Your order no: #1234567 has been scheduled. Please review the timeline and accept this quote before 5:00pm to proceed with the shipment."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_18__["default"], {
    severity: "success"
  }, "Thank you for confirming order no: #1234567. A Primary Connect planner will confirm scheduling with Linfox Logistics shortly."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h5",
    align: "center"
  }, "recommended"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h3",
    align: "center",
    gutterBottom: true
  }, "$5000"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Carrier:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "right",
    style: {
      fontWeight: 'bold'
    }
  }, "Fedex")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Quote ID:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "right",
    style: {
      fontWeight: 'bold'
    }
  }, "123232")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Est Transit Time:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "right",
    style: {
      fontWeight: 'bold'
    }
  }, "1-2days"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "primary",
    variant: "contained",
    fullWidth: true
  }, "choose")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h5",
    align: "center"
  }, "cheapest"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h3",
    align: "center",
    gutterBottom: true
  }, "$3000"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Carrier:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "right",
    style: {
      fontWeight: 'bold'
    }
  }, "Aus Post")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Quote ID:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "right",
    style: {
      fontWeight: 'bold'
    }
  }, "123232")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Est Transit Time:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "right",
    style: {
      fontWeight: 'bold'
    }
  }, "1-2days"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "primary",
    variant: "contained",
    fullWidth: true
  }, "choose")))))))));
}

/***/ }),

/***/ "./app/Orders/Orders.tsx":
/*!*******************************!*\
  !*** ./app/Orders/Orders.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Orders; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "../../../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "../../../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "../../../node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "../../../node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "../../../node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "../../../node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "../../../node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "../../../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Select */ "../../../node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "../../../node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Input */ "../../../node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Search */ "../../../node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../../../node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Box */ "../../../node_modules/@material-ui/core/esm/Box/index.js");














 // Generate Order Data

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return {
    id,
    date,
    name,
    shipTo,
    paymentMethod,
    amount
  };
}

const columns = [{
  field: 'id',
  headerName: 'ID',
  width: 70
}, {
  field: 'date',
  headerName: 'date',
  width: 160
}, {
  field: 'name',
  headerName: 'First name',
  width: 230
}, {
  field: 'shipTo',
  headerName: 'Last name',
  width: 230
}, {
  field: 'paymentMethod',
  headerName: 'Payment Method',
  type: 'number',
  width: 190
}, {
  field: 'amount',
  headerName: 'Amount',
  type: 'number',
  width: 190
}];
const rows = [createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44), createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99), createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81), createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39), createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79)];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
    width: '30%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'left',
    marginBottom: theme.spacing(3),
    width: '50%',
    '& > *': {
      marginRight: theme.spacing(3)
    }
  }
}));
function Orders() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
    borderTop: 4,
    borderColor: "primary.main",
    bgcolor: "primary.contrastText",
    my: 2,
    p: 2,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.searchBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h3"
  }, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    defaultValue: "Orders"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "Orders"
  }, "Orders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "Quotes"
  }, "Quotes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "search",
    placeholder: "Order number...",
    fullWidth: true,
    margin: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
    type: "submit",
    "aria-label": "search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Ship To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Payment Method"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "right"
  }, "Sale Amount"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__["default"], null, rows.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: row.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, row.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, row.shipTo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, row.paymentMethod), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "right"
  }, row.amount))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.seeMore
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "primary",
    variant: "contained",
    onClick: preventDefault
  }, "Primary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "secondary",
    variant: "contained",
    disableElevation: true
  }, "Secondary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "secondary",
    variant: "outlined",
    disableElevation: true
  }, "Tertiary")));
}

/***/ }),

/***/ "./app/app.module.scss":
/*!*****************************!*\
  !*** ./app/app.module.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../node_modules/sass-loader/dist/cjs.js!./app.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/app.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "../../../node_modules/@apollo/client/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "../../../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "../../../node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "../../../node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "../../../node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../../../node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ "../../../node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Search */ "../../../node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Person */ "../../../node_modules/@material-ui/icons/Person.js");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "../../../node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.module.scss */ "./app/app.module.scss");
/* harmony import */ var _app_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_app_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme */ "./app/theme.tsx");
/* harmony import */ var _Orders_Orders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Orders/Orders */ "./app/Orders/Orders.tsx");
/* harmony import */ var _Elements_Elements__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Elements/Elements */ "./app/Elements/Elements.tsx");
/* harmony import */ var _Blog_Blog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Blog/Blog */ "./app/Blog/Blog.jsx");
/* harmony import */ var _primary_connect_maps__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @primary-connect/maps */ "../../../libs/maps/src/index.ts");

















const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
  uri: 'https://fakeql.com/graphql/73d05b0dfa68b3bcd440a20f5ae2d929',
  // uri: 'https://graphqlzero.almansi.me/api',
  // uri: 'http://api.spacex.land/graphql/',
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]()
});
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])(_theme__WEBPACK_IMPORTED_MODULE_12__["themeOptions"]);
function App() {
  const classes = Object(_theme__WEBPACK_IMPORTED_MODULE_12__["useStyles"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _app_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "fixed",
    color: "secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../assets/pc-logo.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.menuIcons
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_9___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: 80,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Elements_Elements__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Orders_Orders__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blog_Blog__WEBPACK_IMPORTED_MODULE_15__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primary_connect_maps__WEBPACK_IMPORTED_MODULE_16__["Maps"], {
    location: "Perth"
  }))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/graphql/queries.js":
/*!********************************!*\
  !*** ./app/graphql/queries.js ***!
  \********************************/
/*! exports provided: GET_LAUNCHES, GET_POSTS, ADD_POST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LAUNCHES", function() { return GET_LAUNCHES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return GET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST", function() { return ADD_POST; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "../../../node_modules/@apollo/client/index.js");
let _ = t => t,
    _t,
    _t2,
    _t3;


const GET_LAUNCHES = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"])(_t || (_t = _`
  query {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      rocket {
        rocket_name
      }
    }
  }
`));
const GET_POSTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"])(_t2 || (_t2 = _`
  query {
    posts(sort: "id", dir: "asc", limit: 10) {
      id
      title
      date
      user {
        firstname
        age
      }
    }
  }
`));
const ADD_POST = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"])(_t3 || (_t3 = _`
  mutation($input: CreatePostInput!) {
    createPost(input: $input) {
      title
      date
    }
  }
`));

/***/ }),

/***/ "./app/theme.tsx":
/*!***********************!*\
  !*** ./app/theme.tsx ***!
  \***********************/
/*! exports provided: themeOptions, useStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeOptions", function() { return themeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "../../../node_modules/@material-ui/core/esm/styles/index.js");

const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#97bb3a',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#5b6288'
    },
    background: {
      default: '#e5e5e5'
    },
    text: {
      primary: '#39464e'
    }
  },
  typography: {
    fontFamily: 'Open Sans',
    fontWeightRegular: 400,
    h1: {
      fontFamily: 'Montserrat',
      fontSize: '2rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: '#39464e'
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '1.7rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: '#39464e'
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: '1.4rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: '#39464e'
    },
    h4: {
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: '#39464e'
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: '0.9rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: '#39464e'
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 800
    },
    body1: {
      fontFamily: 'Open Sans'
    },
    button: {
      fontFamily: 'Montserrat',
      fontSize: '0.8rem'
    }
  },
  spacing: 8,
  shape: {
    borderRadius: 0
  },
  // Customisable props for each components
  // Eg: https://material-ui.com/api/button/
  props: {
    MuiAppBar: {
      color: 'inherit'
    },
    MuiButtonBase: {
      disableRipple: true,
      color: 'contrastText'
    },
    MuiButton: {
      disableElevation: true
    },
    MuiButtonGroup: {
      size: 'small'
    },
    MuiIconButton: {
      size: 'small'
    },
    MuiList: {
      dense: true
    },
    MuiMenuItem: {
      dense: true
    },
    MuiTable: {
      size: 'small'
    },
    MuiCheckbox: {
      size: 'small'
    },
    MuiFab: {
      size: 'small'
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small'
    },
    MuiFormHelperText: {
      margin: 'dense'
    },
    MuiInputBase: {
      margin: 'dense'
    },
    MuiInputLabel: {
      margin: 'dense'
    },
    MuiRadio: {
      size: 'small'
    },
    MuiSwitch: {
      size: 'small'
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small'
    }
  },
  // Overrides for each components, CSS section in doc.
  // Eg: https://material-ui.com/api/button/#css
  // .MuiButton-root, .MuiButton-containedPrimary
  // <Base>-<Rule-name>
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'uppercase'
      },
      containedPrimary: {
        textAlign: 'center'
      }
    },
    // MuiTextField: {
    //   root: {
    //     boxSizing: 'border-box',
    //     border: '1px solid #889095',
    //     padding: '0.5rem',
    //     borderRadius: '0.5rem',
    //   },
    // },
    // MuiFilledInput: {
    //   root: {
    //     backgroundColor: 'none',
    //   },
    // },
    // MuiAlert: {
    //   root: {
    //     boxShadow:
    //       '0px 2px 4px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 1px 16px rgba(0, 0, 0, 0.08)',
    //     borderRadius: '2px',
    //   },
    //   standardInfo: {
    //     backgroundColor: '#fff',
    //     color: ' #39464e',
    //     borderLeft: '4px solid #2D9CDB',
    //   },
    //   standardSuccess: {
    //     backgroundColor: '#fff',
    //     color: ' #39464e',
    //     borderLeft: '4px solid #27AE60',
    //   },
    // },
    MuiTableHead: {
      root: {
        background: '#f6f6f6'
      }
    },
    MuiTableCell: {
      head: {
        fontWeight: 'bold'
      }
    },
    MuiCard: {
      root: {
        padding: '1rem 0.5rem 0.5rem 0.5rem',
        borderRadius: '0.5rem',
        border: '1px solid #889095'
      }
    },
    MuiDivider: {
      root: {
        margin: '2rem 0',
        borderTop: '3px dotted #97bb3a',
        backgroundColor: 'none'
      }
    }
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '7rem'
  }
}));

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/subpaul/Documents/primary-connect-workspace/apps/connect-smart/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map