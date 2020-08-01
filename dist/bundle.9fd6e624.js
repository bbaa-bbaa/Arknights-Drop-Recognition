/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle." + "9fd6e624" + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../DropRecognition/dist/DropRecognition.js":
/*!**************************************************!*\
  !*** ../DropRecognition/dist/DropRecognition.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (e, a) {
  for (var i in a) e[i] = a[i];
})(this,
/******/
function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./main.js");
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "./main.js":
  /*!*****************!*\
    !*** ./main.js ***!
    \*****************/

  /*! exports provided: DropRecognition, Rectangle, FontLoaded, default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FontLoaded", function () {
      return FontLoaded;
    });
    /* harmony import */


    var _src_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./src/Rectangle */
    "./src/Rectangle.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Rectangle", function () {
      return _src_Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
    /* harmony import */


    var _src_DropRecognition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./src/DropRecognition */
    "./src/DropRecognition.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropRecognition", function () {
      return _src_DropRecognition__WEBPACK_IMPORTED_MODULE_1__["default"];
    });
    /* harmony import */


    var webfontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! webfontloader */
    "./node_modules/webfontloader/webfontloader.js");
    /* harmony import */


    var webfontloader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_2__);

    let FontLoaded = new Promise((resolve, reject) => {
      webfontloader__WEBPACK_IMPORTED_MODULE_2___default.a.load({
        custom: {
          families: ["Novecento WideBold"]
        },
        active: function () {
          resolve();
        }
      });
    });
    /* harmony default export */

    __webpack_exports__["default"] = _src_DropRecognition__WEBPACK_IMPORTED_MODULE_1__["default"];
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/cjs.js!./src/Data/Font.css":
  /*!*****************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js!./src/Data/Font.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");
    /* harmony import */


    var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../node_modules/css-loader/dist/runtime/getUrl.js */
    "./node_modules/css-loader/dist/runtime/getUrl.js");
    /* harmony import */


    var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _Novecento_WideBold_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Novecento WideBold.woff */
    "./src/Data/Novecento WideBold.woff"); // Imports


    var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);

    var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Novecento_WideBold_woff__WEBPACK_IMPORTED_MODULE_2__["default"]); // Module


    ___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: \"Novecento WideBold\";\n  src:  url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-style: bold;\n}", "", {
      "version": 3,
      "sources": ["Font.css"],
      "names": [],
      "mappings": "AAAA;EACE,iCAAiC;EACjC,6CAAsC;EACtC,gBAAgB;AAClB",
      "file": "Font.css",
      "sourcesContent": ["@font-face {\n  font-family: \"Novecento WideBold\";\n  src:  url('./Novecento WideBold.woff');\n  font-style: bold;\n}"]
    }]); // Exports

    /* harmony default export */


    __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/css-loader/dist/runtime/getUrl.js":
  /*!********************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";

    module.exports = function (url, options) {
      if (!options) {
        // eslint-disable-next-line no-param-reassign
        options = {};
      } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


      url = url && url.__esModule ? url.default : url;

      if (typeof url !== 'string') {
        return url;
      } // If url is already wrapped in quotes, remove them


      if (/^['"].*['"]$/.test(url)) {
        // eslint-disable-next-line no-param-reassign
        url = url.slice(1, -1);
      }

      if (options.hash) {
        // eslint-disable-next-line no-param-reassign
        url += options.hash;
      } // Should url be wrapped?
      // See https://drafts.csswg.org/css-values-3/#urls


      if (/["'() \t\n]/.test(url) || options.needQuotes) {
        return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
      }

      return url;
    };
    /***/

  },

  /***/
  "./node_modules/ssim.js/dist/ssim.web.js":
  /*!***********************************************!*\
    !*** ./node_modules/ssim.js/dist/ssim.web.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    !function (t, e) {
      true ? module.exports = e() : undefined;
    }(window, function () {
      return function (t) {
        var e = {};

        function r(i) {
          if (e[i]) return e[i].exports;
          var a = e[i] = {
            i: i,
            l: !1,
            exports: {}
          };
          return t[i].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
        }

        return r.m = t, r.c = e, r.d = function (t, e, i) {
          r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
          });
        }, r.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t, "__esModule", {
            value: !0
          });
        }, r.t = function (t, e) {
          if (1 & e && (t = r(t)), 8 & e) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var i = Object.create(null);
          if (r.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
          }), 2 & e && "string" != typeof t) for (var a in t) r.d(i, a, function (e) {
            return t[e];
          }.bind(null, a));
          return i;
        }, r.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default;
          } : function () {
            return t;
          };
          return r.d(e, "a", e), e;
        }, r.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, r.p = "", r(r.s = 10);
      }([function (t, e, r) {
        "use strict";

        function i(t) {
          return a(t) / t.length;
        }

        function a(t) {
          for (var e = 0, r = 0; r < t.length; r++) e += t[r];

          return e;
        }

        function n(t) {
          for (var e = t.data, r = 0, i = 0; i < e.length; i++) r += e[i];

          return r;
        }

        function d(t, e) {
          for (var r = t.data, i = t.width, a = t.height, n = new Array(r.length), d = 0; d < r.length; d++) n[d] = r[d] + e;

          return {
            data: n,
            width: i,
            height: a
          };
        }

        function o(t, e) {
          return "number" == typeof e ? function (t, e) {
            for (var r = t.data, i = t.width, a = t.height, n = new Array(r.length), d = 0; d < r.length; d++) n[d] = r[d] * e;

            return {
              data: n,
              width: i,
              height: a
            };
          }(t, e) : function (t, e) {
            for (var r = t.data, i = t.width, a = t.height, n = e.data, d = new Array(r.length), o = 0; o < r.length; o++) d[o] = r[o] * n[o];

            return {
              data: d,
              width: i,
              height: a
            };
          }(t, e);
        }

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.covariance = e.variance = e.mean2d = e.square2d = e.multiply2d = e.divide2d = e.subtract2d = e.add2d = e.sum2d = e.floor = e.sum = e.average = void 0, e.average = i, e.sum = a, e.floor = function (t) {
          for (var e = new Array(t.length), r = 0; r < t.length; r++) e[r] = Math.floor(t[r]);

          return e;
        }, e.sum2d = n, e.add2d = function (t, e) {
          return "number" == typeof e ? d(t, e) : function (t, e) {
            for (var r = t.data, i = t.width, a = t.height, n = e.data, d = new Array(r.length), o = 0; o < a; o++) for (var u = o * i, h = 0; h < i; h++) d[u + h] = r[u + h] + n[u + h];

            return {
              data: d,
              width: i,
              height: a
            };
          }(t, e);
        }, e.subtract2d = function (t, e) {
          return "number" == typeof e ? d(t, -e) : function (t, e) {
            for (var r = t.data, i = t.width, a = t.height, n = e.data, d = new Array(r.length), o = 0; o < a; o++) for (var u = o * i, h = 0; h < i; h++) d[u + h] = r[u + h] - n[u + h];

            return {
              data: d,
              width: i,
              height: a
            };
          }(t, e);
        }, e.divide2d = function (t, e) {
          return "number" == typeof e ? function (t, e) {
            for (var r = t.data, i = t.width, a = t.height, n = new Array(r.length), d = 0; d < r.length; d++) n[d] = r[d] / e;

            return {
              data: n,
              width: i,
              height: a
            };
          }(t, e) : function (t, e) {
            for (var r = t.data, i = t.width, a = t.height, n = e.data, d = new Array(r.length), o = 0; o < r.length; o++) d[o] = r[o] / n[o];

            return {
              data: d,
              width: i,
              height: a
            };
          }(t, e);
        }, e.multiply2d = o, e.square2d = function (t) {
          return o(t, t);
        }, e.mean2d = function (t) {
          return n(t) / t.data.length;
        }, e.variance = function (t, e) {
          void 0 === e && (e = i(t));

          for (var r = 0, a = t.length; a--;) r += Math.pow(t[a] - e, 2);

          return r / t.length;
        }, e.covariance = function (t, e, r, a) {
          void 0 === r && (r = i(t)), void 0 === a && (a = i(e));

          for (var n = 0, d = t.length; d--;) n += (t[d] - r) * (e[d] - a);

          return n / t.length;
        };
      }, function (t, e, r) {
        "use strict";

        var i = this && this.__createBinding || (Object.create ? function (t, e, r, i) {
          void 0 === i && (i = r), Object.defineProperty(t, i, {
            enumerable: !0,
            get: function () {
              return e[r];
            }
          });
        } : function (t, e, r, i) {
          void 0 === i && (i = r), t[i] = e[r];
        }),
            a = this && this.__exportStar || function (t, e) {
          for (var r in t) "default" === r || e.hasOwnProperty(r) || i(e, t, r);
        };

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), a(r(2), e), a(r(7), e), a(r(11), e), a(r(12), e), a(r(13), e), a(r(3), e), a(r(9), e), a(r(14), e), a(r(15), e), a(r(5), e), a(r(16), e), a(r(6), e);
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.conv2 = void 0;
        var i = r(0),
            a = r(3),
            n = r(5),
            d = r(6);

        function o(t, e, r) {
          var i = t.data,
              a = t.width,
              n = t.height;
          void 0 === r && (r = "full");

          for (var o = a + e.width - 1, u = n + e.height - 1, h = d.zeros(u, o).data, f = 0; f < e.height; f++) for (var s = 0; s < e.width; s++) {
            var v = e.data[f * e.width + s];
            if (v) for (var c = 0; c < n; c++) for (var w = 0; w < a; w++) h[(c + f) * o + w + s] += i[c * a + w] * v;
          }

          return l({
            data: h,
            width: o,
            height: u
          }, r, n, e.height, a, e.width);
        }

        function u(t, e, r) {
          var n = e.data,
              d = e.width,
              o = e.height;
          void 0 === r && (r = "full");
          var u = f(t, a.ones(o, 1), a.ones(1, d), r);
          return i.multiply2d(u, n[0]);
        }

        function h(t) {
          for (var e = t.data, r = e[0], i = 1; i < e.length; i++) if (e[i] !== r) return !1;

          return !0;
        }

        function f(t, e, r, i) {
          void 0 === i && (i = "full");
          var a = Math.max(e.height, e.width),
              n = Math.max(r.height, r.width),
              d = o(t, e, "full");
          return l(o(d, r, "full"), i, t.height, a, t.width, n);
        }

        function l(t, e, r, i, a, d) {
          if ("full" === e) return t;

          if ("same" === e) {
            var o = Math.ceil((t.height - r) / 2),
                u = Math.ceil((t.width - a) / 2);
            return n.sub(t, o, r, u, a);
          }

          return n.sub(t, i - 1, r - i + 1, d - 1, a - d + 1);
        }

        e.conv2 = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

          return t[2] && t[2].data ? f.apply(void 0, t) : h(t[1]) ? u.apply(void 0, t) : o.apply(void 0, t);
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ones = void 0;
        var i = r(4);

        e.ones = function (t, e) {
          return void 0 === e && (e = t), i.numbers(t, e, 1);
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.numbers = void 0, e.numbers = function (t, e, r) {
          for (var i = e * t, a = new Array(i), n = 0; n < i; n++) a[n] = r;

          return {
            data: a,
            width: e,
            height: t
          };
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.sub = void 0, e.sub = function (t, e, r, i, a) {
          for (var n = t.data, d = t.width, o = new Array(a * r), u = 0; u < r; u++) for (var h = 0; h < a; h++) o[u * a + h] = n[(i + u) * d + e + h];

          return {
            data: o,
            width: a,
            height: r
          };
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.zeros = void 0;
        var i = r(4);

        e.zeros = function (t, e) {
          return void 0 === e && (e = t), i.numbers(t, e, 0);
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.filter2 = void 0;
        var i = r(2);

        e.filter2 = function (t, e, r) {
          return void 0 === r && (r = "same"), i.conv2(e, function (t) {
            for (var e = t.data, r = t.width, i = t.height, a = new Array(e.length), n = 0; n < i; n++) for (var d = 0; d < r; d++) a[n * r + d] = e[(i - 1 - n) * r + r - 1 - d];

            return {
              data: a,
              width: r,
              height: i
            };
          }(t), r);
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.mod = void 0, e.mod = function (t, e) {
          return t - e * Math.floor(t / e);
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.padarray = void 0;
        var i = r(8);

        function a(t, e) {
          for (var r = t.width + 2 * e, a = new Array(r * t.height), n = function (t, e) {
            for (var r = t.width + e.width, i = new Array(t.height * r), a = 0; a < t.height; a++) {
              for (var n = 0; n < t.width; n++) i[a * r + n] = t.data[a * t.width + n];

              for (n = 0; n < e.width; n++) i[a * r + n + t.width] = e.data[a * e.width + n];
            }

            return {
              data: i,
              width: r,
              height: t.height
            };
          }(t, function (t) {
            for (var e = t.data, r = t.width, i = t.height, a = new Array(e.length), n = 0; n < i; n++) for (var d = 0; d < r; d++) a[n * r + d] = e[n * r + r - 1 - d];

            return {
              data: a,
              width: r,
              height: i
            };
          }(t)), d = 0; d < t.height; d++) for (var o = -e; o < t.width + e; o++) a[d * r + o + e] = n.data[d * n.width + i.mod(o, n.width)];

          return {
            data: a,
            width: r,
            height: t.height
          };
        }

        function n(t, e) {
          for (var r = function (t, e) {
            return {
              data: t.data.concat(e.data),
              height: t.height + e.height,
              width: t.width
            };
          }(t, function (t) {
            for (var e = t.data, r = t.width, i = t.height, a = new Array(e.length), n = 0; n < i; n++) for (var d = 0; d < r; d++) a[n * r + d] = e[(i - 1 - n) * r + d];

            return {
              data: a,
              width: r,
              height: i
            };
          }(t)), a = t.height + 2 * e, n = new Array(t.width * a), d = -e; d < t.height + e; d++) for (var o = 0; o < t.width; o++) n[(d + e) * t.width + o] = r.data[i.mod(d, r.height) * t.width + o];

          return {
            data: n,
            width: t.width,
            height: a
          };
        }

        e.padarray = function (t, e, r, i) {
          var d = e[0],
              o = e[1];
          return t.height >= d && t.width >= o ? function (t, e) {
            for (var r = e[0], i = e[1], a = t.width + 2 * i, n = t.height + 2 * r, d = new Array(a * n), o = -r; o < 0; o++) {
              for (var u = -i; u < 0; u++) d[(o + r) * a + u + i] = t.data[(Math.abs(o) - 1) * t.width + Math.abs(u) - 1];

              for (u = 0; u < t.width; u++) d[(o + r) * a + u + i] = t.data[(Math.abs(o) - 1) * t.width + u];

              for (u = t.width; u < t.width + i; u++) d[(o + r) * a + u + i] = t.data[(Math.abs(o) - 1) * t.width + 2 * t.width - u - 1];
            }

            for (o = 0; o < t.height; o++) {
              for (u = -i; u < 0; u++) d[(o + r) * a + u + i] = t.data[o * t.width + Math.abs(u) - 1];

              for (u = 0; u < t.width; u++) d[(o + r) * a + u + i] = t.data[o * t.width + u];

              for (u = t.width; u < t.width + i; u++) d[(o + r) * a + u + i] = t.data[o * t.width + 2 * t.width - u - 1];
            }

            for (o = t.height; o < t.height + r; o++) {
              for (u = -i; u < 0; u++) d[(o + r) * a + u + i] = t.data[(2 * t.height - o - 1) * t.width + Math.abs(u) - 1];

              for (u = 0; u < t.width; u++) d[(o + r) * a + u + i] = t.data[(2 * t.height - o - 1) * t.width + u];

              for (u = t.width; u < t.width + i; u++) d[(o + r) * a + u + i] = t.data[(2 * t.height - o - 1) * t.width + 2 * t.width - u - 1];
            }

            return {
              data: d,
              width: a,
              height: n
            };
          }(t, [d, o]) : n(a(t, o), d);
        };
      }, function (t, e, r) {
        "use strict";

        var i = this && this.__assign || function () {
          return (i = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var a in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);

            return t;
          }).apply(this, arguments);
        };

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ssim = void 0;
        var a = r(1),
            n = r(0),
            d = r(17),
            o = r(18),
            u = r(19),
            h = r(20),
            f = r(21),
            l = {
          fast: d.ssim,
          original: o.originalSsim,
          bezkrovny: u.bezkrovnySsim
        };

        function s(t) {
          var e = i(i({}, f.defaults), t);
          return function (t) {
            if (Object.keys(t).forEach(function (t) {
              if (!(t in f.defaults)) throw new Error('"' + t + '" is not a valid option');
            }), "k1" in t && ("number" != typeof t.k1 || t.k1 < 0)) throw new Error("Invalid k1 value. Default is " + f.defaults.k1);
            if ("k2" in t && ("number" != typeof t.k2 || t.k2 < 0)) throw new Error("Invalid k2 value. Default is " + f.defaults.k2);
            if (!(t.ssim in l)) throw new Error("Invalid ssim option (use: " + Object.keys(l).join(", ") + ")");
          }(e), e;
        }

        function v(t, e, r) {
          var i = new Date().getTime(),
              d = function (t) {
            var e = t[0],
                r = t[1],
                i = t[2];
            return l[i.ssim](e, r, i);
          }(function (t) {
            var e = t[0],
                r = t[1],
                i = t[2],
                a = h.downsample([e, r], i);
            return [a[0], a[1], i];
          }(function (t) {
            var e = t[0],
                r = t[1],
                i = t[2];
            return [a.rgb2gray(e), a.rgb2gray(r), i];
          }(function (t) {
            var e = t[0],
                r = t[1],
                i = t[2];
            if (e.width !== r.width || e.height !== r.height) throw new Error("Image dimensions do not match");
            return [e, r, i];
          }([t, e, s(r)]))));

          return {
            ssim_map: d,
            mssim: n.mean2d(d),
            performance: new Date().getTime() - i
          };
        }

        e.ssim = v, e.default = v;
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.fspecial = void 0;
        var i = r(0);

        e.fspecial = function (t, e, r) {
          void 0 === e && (e = 3), void 0 === r && (r = 1.5);

          var a = function (t, e) {
            for (var r = t.data, i = t.width, a = t.height, n = new Array(r.length), d = 0; d < r.length; d++) n[d] = Math.exp(-r[d] / (2 * Math.pow(e, 2)));

            return {
              data: n,
              width: i,
              height: a
            };
          }(function (t) {
            for (var e = 2 * t + 1, r = new Array(Math.pow(e, 2)), i = 0; i < e; i++) for (var a = 0; a < e; a++) r[i * e + a] = Math.pow(i - t, 2) + Math.pow(a - t, 2);

            return {
              data: r,
              width: e,
              height: e
            };
          }(e = (e - 1) / 2), r),
              n = i.sum2d(a);

          return i.divide2d(a, n);
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.imfilter = void 0;
        var i = r(8),
            a = r(9),
            n = r(0),
            d = r(7);

        e.imfilter = function (t, e, r, o) {
          return void 0 === r && (r = "symmetric"), void 0 === o && (o = "same"), t = function (t, e, r, d) {
            if (t = a.padarray(t, n.floor([e / 2, r / 2]), d), 0 === i.mod(e, 2) && (t.data = t.data.slice(0, -t.width), t.height--), 0 === i.mod(r, 2)) {
              for (var o = [], u = 0; u < t.data.length; u++) (u + 1) % t.width != 0 && o.push(t.data[u]);

              t.data = o, t.width--;
            }

            return t;
          }(t, e.width, e.height, r), o = function (t) {
            return "same" === t && (t = "valid"), t;
          }(o), d.filter2(e, t, o);
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.normpdf = void 0, e.normpdf = function (t, e, r) {
          var i = t.data,
              a = t.width,
              n = t.height;
          void 0 === e && (e = 0), void 0 === r && (r = 1);

          for (var d = new Array(i.length), o = 0; o < i.length; o++) {
            var u = (i[o] - e) / r;
            d[o] = Math.exp(-Math.pow(u, 2) / 2) / (2.5066282746310007 * r);
          }

          return {
            data: d,
            width: a,
            height: n
          };
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.rgb2gray = void 0, e.rgb2gray = function (t) {
          for (var e, r, i, a = t.data, n = t.width, d = t.height, o = new Array(n * d), u = 0; u < d; u++) for (var h = 0; h < n; h++) {
            var f = h + u * n,
                l = 4 * f;
            o[f] = (e = a[l], r = a[l + 1], i = a[l + 2], Math.round(.29894 * e + .58704 * r + .11402 * i));
          }

          return {
            data: o,
            width: n,
            height: d
          };
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.skip2d = void 0, e.skip2d = function (t, e, r) {
          for (var i = e[0], a = e[1], n = e[2], d = r[0], o = r[1], u = r[2], h = Math.ceil((u - d) / o), f = Math.ceil((n - i) / a), l = new Array(h * f), s = 0; s < f; s++) for (var v = 0; v < h; v++) {
            var c = i + s * a,
                w = d + v * o;
            l[s * h + v] = t.data[c * t.width + w];
          }

          return {
            data: l,
            width: h,
            height: f
          };
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.transpose = void 0, e.transpose = function (t) {
          for (var e = t.data, r = t.width, i = t.height, a = new Array(r * i), n = 0; n < i; n++) for (var d = 0; d < r; d++) a[d * i + n] = e[n * r + d];

          return {
            data: a,
            height: r,
            width: i
          };
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ssim = void 0;
        var i = r(0),
            a = r(1);

        e.ssim = function (t, e, r) {
          var n = a.normpdf(function (t) {
            for (var e = Math.floor(t / 2), r = new Array(2 * e + 1), i = -e; i <= e; i++) r[i + e] = Math.abs(i);

            return {
              data: r,
              width: r.length,
              height: 1
            };
          }(r.windowSize), 0, 1.5),
              d = Math.pow(2, r.bitDepth) - 1,
              o = Math.pow(r.k1 * d, 2),
              u = Math.pow(r.k2 * d, 2);
          n = i.divide2d(n, i.sum2d(n));
          var h = a.transpose(n),
              f = a.conv2(t, n, h, "valid"),
              l = a.conv2(e, n, h, "valid"),
              s = i.square2d(f),
              v = i.square2d(l),
              c = i.multiply2d(f, l),
              w = i.square2d(t),
              g = i.square2d(e),
              p = i.subtract2d(a.conv2(w, n, h, "valid"), s),
              y = i.subtract2d(a.conv2(g, n, h, "valid"), v),
              m = i.subtract2d(a.conv2(i.multiply2d(t, e), n, h, "valid"), c);
          return o > 0 && u > 0 ? function (t, e, r, a, n, d, o, u) {
            var h = i.add2d(i.multiply2d(t, 2), o),
                f = i.add2d(i.multiply2d(e, 2), u),
                l = i.add2d(i.add2d(r, a), o),
                s = i.add2d(i.add2d(n, d), u);
            return i.divide2d(i.multiply2d(h, f), i.multiply2d(l, s));
          }(c, m, s, v, p, y, o, u) : function (t, e, r, a, n, d) {
            var o = i.multiply2d(t, 2),
                u = i.multiply2d(e, 2),
                h = i.add2d(r, a),
                f = i.add2d(n, d);
            return i.divide2d(i.multiply2d(o, u), i.multiply2d(h, f));
          }(c, m, s, v, p, y);
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.originalSsim = void 0;
        var i = r(0),
            a = r(1);

        e.originalSsim = function (t, e, r) {
          var n = a.fspecial("gaussian", r.windowSize, 1.5),
              d = Math.pow(2, r.bitDepth) - 1,
              o = Math.pow(r.k1 * d, 2),
              u = Math.pow(r.k2 * d, 2);
          n = i.divide2d(n, i.sum2d(n));
          var h = a.filter2(n, t, "valid"),
              f = a.filter2(n, e, "valid"),
              l = i.square2d(h),
              s = i.square2d(f),
              v = i.multiply2d(h, f),
              c = i.square2d(t),
              w = i.square2d(e),
              g = i.subtract2d(a.filter2(n, c, "valid"), l),
              p = i.subtract2d(a.filter2(n, w, "valid"), s),
              y = i.subtract2d(a.filter2(n, i.multiply2d(t, e), "valid"), v);

          if (o > 0 && u > 0) {
            var m = i.add2d(i.multiply2d(v, 2), o),
                b = i.add2d(i.multiply2d(y, 2), u),
                M = i.add2d(i.add2d(l, s), o),
                _ = i.add2d(i.add2d(g, p), u);

            return i.divide2d(i.multiply2d(m, b), i.multiply2d(M, _));
          }

          var j = i.multiply2d(v, 2),
              O = i.multiply2d(y, 2),
              P = i.add2d(l, s),
              k = i.add2d(g, p);
          return i.divide2d(i.multiply2d(j, O), i.multiply2d(P, k));
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.bezkrovnySsim = void 0;
        var i = r(0),
            a = r(1);

        function n(t, e, r) {
          var a = t.data,
              n = e.data,
              d = r.bitDepth,
              o = r.k1,
              u = r.k2,
              h = Math.pow(2, d) - 1,
              f = Math.pow(o * h, 2),
              l = Math.pow(u * h, 2),
              s = i.average(a),
              v = i.average(n),
              c = i.variance(a, s),
              w = i.variance(n, v);
          return (2 * s * v + f) * (2 * i.covariance(a, n, s, v) + l) / ((Math.pow(s, 2) + Math.pow(v, 2) + f) * (c + w + l));
        }

        e.bezkrovnySsim = function (t, e, r) {
          for (var i = r.windowSize, d = Math.ceil(t.width / i), o = Math.ceil(t.height / i), u = new Array(d * o), h = 0, f = 0; f < t.height; f += i) for (var l = 0; l < t.width; l += i) {
            var s = Math.min(i, t.width - l),
                v = Math.min(i, t.height - f),
                c = a.sub(t, l, v, f, s),
                w = a.sub(e, l, v, f, s);
            u[h++] = n(c, w, r);
          }

          return {
            data: u,
            width: d,
            height: o
          };
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.downsample = void 0;
        var i = r(0),
            a = r(1);

        function n(t, e, r) {
          var i = a.imfilter(t, e, "symmetric", "same");
          return a.skip2d(i, [0, r, i.height], [0, r, i.width]);
        }

        e.downsample = function (t, e) {
          return "original" === e.downsample ? function (t, e, r) {
            void 0 === r && (r = 256);
            var d = Math.min(t.width, e.height) / r,
                o = Math.round(d);

            if (o > 1) {
              var u = a.ones(o);
              t = n(t, u = i.divide2d(u, i.sum2d(u)), o), e = n(e, u, o);
            }

            return [t, e];
          }(t[0], t[1], e.maxSize) : t;
        };
      }, function (t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.defaults = void 0, e.defaults = {
          windowSize: 11,
          k1: .01,
          k2: .03,
          bitDepth: 8,
          downsample: "original",
          ssim: "fast",
          maxSize: 256
        };
      }]);
    }); //# sourceMappingURL=ssim.web.js.map

    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";

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

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
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
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
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
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

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
      } else {
        style.removeAttribute('media');
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
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./node_modules/webfontloader/webfontloader.js":
  /*!*****************************************************!*\
    !*** ./node_modules/webfontloader/webfontloader.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */


    (function () {
      function aa(a, b, c) {
        return a.call.apply(a.bind, arguments);
      }

      function ba(a, b, c) {
        if (!a) throw Error();

        if (2 < arguments.length) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c);
          };
        }

        return function () {
          return a.apply(b, arguments);
        };
      }

      function p(a, b, c) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return p.apply(null, arguments);
      }

      var q = Date.now || function () {
        return +new Date();
      };

      function ca(a, b) {
        this.a = a;
        this.o = b || a;
        this.c = this.o.document;
      }

      var da = !!window.FontFace;

      function t(a, b, c, d) {
        b = a.c.createElement(b);
        if (c) for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
        d && b.appendChild(a.c.createTextNode(d));
        return b;
      }

      function u(a, b, c) {
        a = a.c.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a.insertBefore(c, a.lastChild);
      }

      function v(a) {
        a.parentNode && a.parentNode.removeChild(a);
      }

      function w(a, b, c) {
        b = b || [];
        c = c || [];

        for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
          for (var f = !1, g = 0; g < d.length; g += 1) if (b[e] === d[g]) {
            f = !0;
            break;
          }

          f || d.push(b[e]);
        }

        b = [];

        for (e = 0; e < d.length; e += 1) {
          f = !1;

          for (g = 0; g < c.length; g += 1) if (d[e] === c[g]) {
            f = !0;
            break;
          }

          f || b.push(d[e]);
        }

        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
      }

      function y(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) if (c[d] == b) return !0;

        return !1;
      }

      function ea(a) {
        return a.o.location.hostname || a.a.location.hostname;
      }

      function z(a, b, c) {
        function d() {
          m && e && f && (m(g), m = null);
        }

        b = t(a, "link", {
          rel: "stylesheet",
          href: b,
          media: "all"
        });
        var e = !1,
            f = !0,
            g = null,
            m = c || null;
        da ? (b.onload = function () {
          e = !0;
          d();
        }, b.onerror = function () {
          e = !0;
          g = Error("Stylesheet failed to load");
          d();
        }) : setTimeout(function () {
          e = !0;
          d();
        }, 0);
        u(a, "head", b);
      }

      function A(a, b, c, d) {
        var e = a.c.getElementsByTagName("head")[0];

        if (e) {
          var f = t(a, "script", {
            src: b
          }),
              g = !1;

          f.onload = f.onreadystatechange = function () {
            g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
          };

          e.appendChild(f);
          setTimeout(function () {
            g || (g = !0, c && c(Error("Script load timeout")));
          }, d || 5E3);
          return f;
        }

        return null;
      }

      ;

      function B() {
        this.a = 0;
        this.c = null;
      }

      function C(a) {
        a.a++;
        return function () {
          a.a--;
          D(a);
        };
      }

      function E(a, b) {
        a.c = b;
        D(a);
      }

      function D(a) {
        0 == a.a && a.c && (a.c(), a.c = null);
      }

      ;

      function F(a) {
        this.a = a || "-";
      }

      F.prototype.c = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());

        return b.join(this.a);
      };

      function G(a, b) {
        this.c = a;
        this.f = 4;
        this.a = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.a = c[1], this.f = parseInt(c[2], 10));
      }

      function fa(a) {
        return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
      }

      function I(a) {
        var b = [];
        a = a.split(/,\s*/);

        for (var c = 0; c < a.length; c++) {
          var d = a[c].replace(/['"]/g, "");
          -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
        }

        return b.join(",");
      }

      function J(a) {
        return a.a + a.f;
      }

      function H(a) {
        var b = "normal";
        "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
        return b;
      }

      function ga(a) {
        var b = 4,
            c = "n",
            d = null;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b;
      }

      ;

      function ha(a, b) {
        this.c = a;
        this.f = a.o.document.documentElement;
        this.h = b;
        this.a = new F("-");
        this.j = !1 !== b.events;
        this.g = !1 !== b.classes;
      }

      function ia(a) {
        a.g && w(a.f, [a.a.c("wf", "loading")]);
        K(a, "loading");
      }

      function L(a) {
        if (a.g) {
          var b = y(a.f, a.a.c("wf", "active")),
              c = [],
              d = [a.a.c("wf", "loading")];
          b || c.push(a.a.c("wf", "inactive"));
          w(a.f, c, d);
        }

        K(a, "inactive");
      }

      function K(a, b, c) {
        if (a.j && a.h[b]) if (c) a.h[b](c.c, J(c));else a.h[b]();
      }

      ;

      function ja() {
        this.c = {};
      }

      function ka(a, b, c) {
        var d = [],
            e;

        for (e in b) if (b.hasOwnProperty(e)) {
          var f = a.c[e];
          f && d.push(f(b[e], c));
        }

        return d;
      }

      ;

      function M(a, b) {
        this.c = a;
        this.f = b;
        this.a = t(this.c, "span", {
          "aria-hidden": "true"
        }, this.f);
      }

      function N(a) {
        u(a.c, "body", a.a);
      }

      function O(a) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";");
      }

      ;

      function P(a, b, c, d, e, f) {
        this.g = a;
        this.j = b;
        this.a = d;
        this.c = c;
        this.f = e || 3E3;
        this.h = f || void 0;
      }

      P.prototype.start = function () {
        var a = this.c.o.document,
            b = this,
            c = q(),
            d = new Promise(function (d, e) {
          function f() {
            q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
              1 <= a.length ? d() : setTimeout(f, 25);
            }, function () {
              e();
            });
          }

          f();
        }),
            e = null,
            f = new Promise(function (a, d) {
          e = setTimeout(d, b.f);
        });
        Promise.race([f, d]).then(function () {
          e && (clearTimeout(e), e = null);
          b.g(b.a);
        }, function () {
          b.j(b.a);
        });
      };

      function Q(a, b, c, d, e, f, g) {
        this.v = a;
        this.B = b;
        this.c = c;
        this.a = d;
        this.s = g || "BESbswy";
        this.f = {};
        this.w = e || 3E3;
        this.u = f || null;
        this.m = this.j = this.h = this.g = null;
        this.g = new M(this.c, this.s);
        this.h = new M(this.c, this.s);
        this.j = new M(this.c, this.s);
        this.m = new M(this.c, this.s);
        a = new G(this.a.c + ",serif", J(this.a));
        a = O(a);
        this.g.a.style.cssText = a;
        a = new G(this.a.c + ",sans-serif", J(this.a));
        a = O(a);
        this.h.a.style.cssText = a;
        a = new G("serif", J(this.a));
        a = O(a);
        this.j.a.style.cssText = a;
        a = new G("sans-serif", J(this.a));
        a = O(a);
        this.m.a.style.cssText = a;
        N(this.g);
        N(this.h);
        N(this.j);
        N(this.m);
      }

      var R = {
        D: "serif",
        C: "sans-serif"
      },
          S = null;

      function T() {
        if (null === S) {
          var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
          S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
        }

        return S;
      }

      Q.prototype.start = function () {
        this.f.serif = this.j.a.offsetWidth;
        this.f["sans-serif"] = this.m.a.offsetWidth;
        this.A = q();
        U(this);
      };

      function la(a, b, c) {
        for (var d in R) if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return !0;

        return !1;
      }

      function U(a) {
        var b = a.g.a.offsetWidth,
            c = a.h.a.offsetWidth,
            d;
        (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
        d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v);
      }

      function ma(a) {
        setTimeout(p(function () {
          U(this);
        }, a), 50);
      }

      function V(a, b) {
        setTimeout(p(function () {
          v(this.g.a);
          v(this.h.a);
          v(this.j.a);
          v(this.m.a);
          b(this.a);
        }, a), 0);
      }

      ;

      function W(a, b, c) {
        this.c = a;
        this.a = b;
        this.f = 0;
        this.m = this.j = !1;
        this.s = c;
      }

      var X = null;

      W.prototype.g = function (a) {
        var b = this.a;
        b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"), b.a.c("wf", a.c, J(a).toString(), "inactive")]);
        K(b, "fontactive", a);
        this.m = !0;
        na(this);
      };

      W.prototype.h = function (a) {
        var b = this.a;

        if (b.g) {
          var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")),
              d = [],
              e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
          c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
          w(b.f, d, e);
        }

        K(b, "fontinactive", a);
        na(this);
      };

      function na(a) {
        0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a));
      }

      ;

      function oa(a) {
        this.j = a;
        this.a = new ja();
        this.h = 0;
        this.f = this.g = !0;
      }

      oa.prototype.load = function (a) {
        this.c = new ca(this.j, a.context || this.j);
        this.g = !1 !== a.events;
        this.f = !1 !== a.classes;
        pa(this, new ha(this.c, a), a);
      };

      function qa(a, b, c, d, e) {
        var f = 0 == --a.h;
        (a.f || a.g) && setTimeout(function () {
          var a = e || null,
              m = d || null || {};
          if (0 === c.length && f) L(b.a);else {
            b.f += c.length;
            f && (b.j = f);
            var h,
                l = [];

            for (h = 0; h < c.length; h++) {
              var k = c[h],
                  n = m[k.c],
                  r = b.a,
                  x = k;
              r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
              K(r, "fontloading", x);
              r = null;
              if (null === X) if (window.FontFace) {
                var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
                    xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                X = x ? 42 < parseInt(x[1], 10) : xa ? !1 : !0;
              } else X = !1;
              X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a, n);
              l.push(r);
            }

            for (h = 0; h < l.length; h++) l[h].start();
          }
        }, 0);
      }

      function pa(a, b, c) {
        var d = [],
            e = c.timeout;
        ia(b);
        var d = ka(a.a, c, a.c),
            f = new W(a.c, b, e);
        a.h = d.length;
        b = 0;

        for (c = d.length; b < c; b++) d[b].load(function (b, d, c) {
          qa(a, f, b, d, c);
        });
      }

      ;

      function ra(a, b) {
        this.c = a;
        this.a = b;
      }

      ra.prototype.load = function (a) {
        function b() {
          if (f["__mti_fntLst" + d]) {
            var c = f["__mti_fntLst" + d](),
                e = [],
                h;
            if (c) for (var l = 0; l < c.length; l++) {
              var k = c[l].fontfamily;
              void 0 != c[l].fontStyle && void 0 != c[l].fontWeight ? (h = c[l].fontStyle + c[l].fontWeight, e.push(new G(k, h))) : e.push(new G(k));
            }
            a(e);
          } else setTimeout(function () {
            b();
          }, 50);
        }

        var c = this,
            d = c.a.projectId,
            e = c.a.version;

        if (d) {
          var f = c.c.o;
          A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function (e) {
            e ? a([]) : (f["__MonotypeConfiguration__" + d] = function () {
              return c.a;
            }, b());
          }).id = "__MonotypeAPIScript__" + d;
        } else a([]);
      };

      function sa(a, b) {
        this.c = a;
        this.a = b;
      }

      sa.prototype.load = function (a) {
        var b,
            c,
            d = this.a.urls || [],
            e = this.a.families || [],
            f = this.a.testStrings || {},
            g = new B();
        b = 0;

        for (c = d.length; b < c; b++) z(this.c, d[b], C(g));

        var m = [];
        b = 0;

        for (c = e.length; b < c; b++) if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), l = 0; l < h.length; l += 1) m.push(new G(d[0], h[l]));else m.push(new G(d[0]));

        E(g, function () {
          a(m, f);
        });
      };

      function ta(a, b) {
        a ? this.c = a : this.c = ua;
        this.a = [];
        this.f = [];
        this.g = b || "";
      }

      var ua = "https://fonts.googleapis.com/css";

      function va(a, b) {
        for (var c = b.length, d = 0; d < c; d++) {
          var e = b[d].split(":");
          3 == e.length && a.f.push(e.pop());
          var f = "";
          2 == e.length && "" != e[1] && (f = ":");
          a.a.push(e.join(f));
        }
      }

      function wa(a) {
        if (0 == a.a.length) throw Error("No fonts to load!");
        if (-1 != a.c.indexOf("kit=")) return a.c;

        for (var b = a.a.length, c = [], d = 0; d < b; d++) c.push(a.a[d].replace(/ /g, "+"));

        b = a.c + "?family=" + c.join("%7C");
        0 < a.f.length && (b += "&subset=" + a.f.join(","));
        0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
        return b;
      }

      ;

      function ya(a) {
        this.f = a;
        this.a = [];
        this.c = {};
      }

      var za = {
        latin: "BESbswy",
        "latin-ext": "\u00e7\u00f6\u00fc\u011f\u015f",
        cyrillic: "\u0439\u044f\u0416",
        greek: "\u03b1\u03b2\u03a3",
        khmer: "\u1780\u1781\u1782",
        Hanuman: "\u1780\u1781\u1782"
      },
          Aa = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7"
      },
          Ba = {
        i: "i",
        italic: "i",
        n: "n",
        normal: "n"
      },
          Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

      function Da(a) {
        for (var b = a.f.length, c = 0; c < b; c++) {
          var d = a.f[c].split(":"),
              e = d[0].replace(/\+/g, " "),
              f = ["n4"];

          if (2 <= d.length) {
            var g;
            var m = d[1];
            g = [];
            if (m) for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
              var k;
              k = m[l];

              if (k.match(/^[\w-]+$/)) {
                var n = Ca.exec(k.toLowerCase());
                if (null == n) k = "";else {
                  k = n[2];
                  k = null == k || "" == k ? "n" : Ba[k];
                  n = n[1];
                  if (null == n || "" == n) n = "4";else var r = Aa[n],
                      n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
                  k = [k, n].join("");
                }
              } else k = "";

              k && g.push(k);
            }
            0 < g.length && (f = g);
            3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
          }

          a.c[e] || (d = za[e]) && (a.c[e] = d);

          for (d = 0; d < f.length; d += 1) a.a.push(new G(e, f[d]));
        }
      }

      ;

      function Ea(a, b) {
        this.c = a;
        this.a = b;
      }

      var Fa = {
        Arimo: !0,
        Cousine: !0,
        Tinos: !0
      };

      Ea.prototype.load = function (a) {
        var b = new B(),
            c = this.c,
            d = new ta(this.a.api, this.a.text),
            e = this.a.families;
        va(d, e);
        var f = new ya(e);
        Da(f);
        z(c, wa(d), C(b));
        E(b, function () {
          a(f.a, f.c, Fa);
        });
      };

      function Ga(a, b) {
        this.c = a;
        this.a = b;
      }

      Ga.prototype.load = function (a) {
        var b = this.a.id,
            c = this.c.o;
        b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function (b) {
          if (b) a([]);else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
            b = c.Typekit.config.fn;

            for (var e = [], f = 0; f < b.length; f += 2) for (var g = b[f], m = b[f + 1], h = 0; h < m.length; h++) e.push(new G(g, m[h]));

            try {
              c.Typekit.load({
                events: !1,
                classes: !1,
                async: !0
              });
            } catch (l) {}

            a(e);
          }
        }, 2E3) : a([]);
      };

      function Ha(a, b) {
        this.c = a;
        this.f = b;
        this.a = [];
      }

      Ha.prototype.load = function (a) {
        var b = this.f.id,
            c = this.c.o,
            d = this;
        b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
          for (var g = 0, m = c.fonts.length; g < m; ++g) {
            var h = c.fonts[g];
            d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
          }

          a(d.a);
        }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function (b) {
          b && a([]);
        })) : a([]);
      };

      var Y = new oa(window);

      Y.a.c.custom = function (a, b) {
        return new sa(b, a);
      };

      Y.a.c.fontdeck = function (a, b) {
        return new Ha(b, a);
      };

      Y.a.c.monotype = function (a, b) {
        return new ra(b, a);
      };

      Y.a.c.typekit = function (a, b) {
        return new Ga(b, a);
      };

      Y.a.c.google = function (a, b) {
        return new Ea(b, a);
      };

      var Z = {
        load: p(Y.load, Y)
      };
      true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return Z;
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })();
    /***/

  },

  /***/
  "./src/ConnectedAreaRecognition.js":
  /*!*****************************************!*\
    !*** ./src/ConnectedAreaRecognition.js ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return ConnectedAreaRecognition;
    });
    /* harmony import */


    var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Rectangle */
    "./src/Rectangle.js");

    class ConnectedAreaRecognition {
      constructor(Matrix, Node, GetMatrix) {
        this.Matrix = Matrix;
        if (Node) this.Node = Node;

        if (GetMatrix) {
          this.GetMatrix = GetMatrix;
        }
      }

      GetConnectedArea(Vertex, Callback) {
        let Result = this.BFS(this.Matrix, Vertex);

        if (this.GetMatrix) {
          let Matrix = [];

          for (let y = 0; y < Result.height; y++) {
            Matrix.push(new Array(Result.width).fill(false));
          }

          for (let aVertex of Result.matrix) {
            Matrix[aVertex[1] - Result.top][aVertex[0] - Result.left] = true;
          }

          Result.matrix = Matrix;
        }

        if (Callback) Result = Callback(Result);
        return Result;
      }

      GetAllConnectedArea(Callback) {
        let Queue = this.Node.values();
        let Ret = [];

        for (let Vertex of Queue) {
          let Result = Callback ? this.GetConnectedArea([Math.floor(Vertex / 10000), Vertex % 10000], Callback) : this.GetConnectedArea([Math.floor(Vertex / 10000), Vertex % 10000]);

          if (Result) {
            Ret.push(Result);
          }
        }

        return Ret;
      }

      BFS(Matrix, Vertex) {
        let Rect = new _Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"]({
          left: Infinity,
          right: -Infinity,
          top: Infinity,
          bottom: -Infinity,
          point: 0
        });

        if (this.GetMatrix) {
          Rect.matrix = [];
        }

        let Queue = [];
        let Direction = [[0, -1], [1, 0], [0, 1], [-1, 0]];
        Rect.update({
          left: Math.min(Rect.left, Vertex[0]),
          right: Math.max(Rect.right, Vertex[0]),
          top: Math.min(Rect.top, Vertex[1]),
          bottom: Math.max(Rect.bottom, Vertex[1])
        });
        Matrix[Vertex[1]][Vertex[0]] = false;
        if (this.Node) this.Node.delete(Vertex[0] * 10000 + Vertex[1]);
        Queue.push(Vertex);

        while (Queue.length != 0) {
          Rect.point++;
          let NowVertex = Queue.shift();

          if (this.GetMatrix) {
            Rect.matrix.push(NowVertex);
          }

          for (let d = 0; d < Direction.length; d++) {
            let NextVertex = [NowVertex[0] + Direction[d][0], NowVertex[1] + Direction[d][1]];
            if (NextVertex[0] < 0 || NextVertex[1] < 0 || NextVertex[0] >= Matrix[0].length || NextVertex[1] >= Matrix.length) continue;

            if (Matrix[NextVertex[1]][NextVertex[0]]) {
              Rect.update({
                left: Math.min(Rect.left, NextVertex[0]),
                right: Math.max(Rect.right, NextVertex[0]),
                top: Math.min(Rect.top, NextVertex[1]),
                bottom: Math.max(Rect.bottom, NextVertex[1])
              });
              Matrix[NextVertex[1]][NextVertex[0]] = false;
              if (this.Node) this.Node.delete(NextVertex[0] * 10000 + NextVertex[1]);
              Queue.push(NextVertex);
            }
          }
        }

        return Rect;
      }

    }
    /***/

  },

  /***/
  "./src/Data/Font.css":
  /*!***************************!*\
    !*** ./src/Data/Font.css ***!
    \***************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../../node_modules/css-loader/dist/cjs.js!./Font.css */
    "./node_modules/css-loader/dist/cjs.js!./src/Data/Font.css");

    content = content.__esModule ? content.default : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    module.exports = content.locals || {};
    /***/
  },

  /***/
  "./src/Data/Novecento WideBold.woff":
  /*!******************************************!*\
    !*** ./src/Data/Novecento WideBold.woff ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "data:font/woff;base64,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";
    /***/
  },

  /***/
  "./src/Data/NumberHashList.json":
  /*!**************************************!*\
    !*** ./src/Data/NumberHashList.json ***!
    \**************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */

  /***/
  function (module) {
    module.exports = JSON.parse("[{\"number\":0,\"hash\":[2,9,8,3,0,0,0,0,10,2,0,0,10,10,1,0,10,0,0,0,0,10,8,0,3,0,0,0,0,6,10,2,0,0,0,0,0,4,10,3,0,0,0,0,0,4,10,3,3,0,0,0,0,5,10,2,9,0,0,0,0,9,9,0,10,3,0,0,10,10,1,0,3,9,10,3,0,0,0,0],\"count\":10},{\"number\":1,\"hash\":[51,47,37,22,0,0,0,0,54,25,46,29,0,0,0,0,0,6,45,43,0,0,0,0,0,1,45,43,0,0,0,0,0,1,45,43,0,0,0,0,0,2,45,43,0,0,0,0,0,2,45,43,0,0,0,0,0,1,45,43,0,0,0,0,3,6,48,44,0,0,0,0,16,1,1,0,0,0,0,0],\"count\":60},{\"number\":2,\"hash\":[35,33,14,2,1,1,0,0,9,0,0,3,33,33,3,0,0,0,0,0,24,36,13,0,0,0,0,0,23,36,14,0,0,0,0,0,29,36,3,0,0,0,0,14,36,12,1,0,0,4,28,36,4,1,0,0,15,32,31,5,0,0,0,0,36,24,3,0,1,2,0,0,9,0,1,1,0,1,1,0],\"count\":36},{\"number\":3,\"hash\":[31,28,14,6,0,0,0,0,27,1,0,0,29,30,6,0,0,0,0,0,13,31,16,0,0,0,0,0,23,29,8,0,3,25,32,10,6,0,0,0,2,19,25,14,23,11,1,0,0,0,0,0,5,28,29,2,0,0,0,0,1,23,31,5,1,0,0,1,17,32,25,2,32,21,6,2,1,0,0,0],\"count\":32},{\"number\":4,\"hash\":[0,0,0,12,30,17,0,0,0,0,16,30,15,0,0,0,0,2,30,26,0,13,0,0,1,30,29,0,18,30,0,0,27,30,1,0,24,30,0,0,30,4,0,0,24,30,0,0,12,0,0,2,11,9,0,0,3,0,0,3,29,27,0,0,0,0,0,0,22,30,0,0,0,0,0,0,22,30,0,0],\"count\":30},{\"number\":5,\"hash\":[34,11,2,0,0,0,0,0,33,1,0,0,1,1,0,0,32,1,0,0,0,0,0,0,31,0,1,5,0,0,0,0,33,0,0,0,21,18,1,0,10,0,0,0,20,35,33,2,0,0,0,0,0,25,35,6,0,0,0,0,2,29,34,4,0,0,0,3,30,36,23,0,36,25,8,1,3,0,0,0],\"count\":36},{\"number\":6,\"hash\":[3,10,13,8,2,0,0,0,13,9,0,0,1,9,7,0,13,0,0,0,0,0,0,0,6,0,0,3,1,0,0,0,0,0,6,3,2,3,0,0,0,0,0,0,6,13,10,0,2,0,0,0,0,9,13,1,10,0,0,0,0,10,13,1,13,3,0,0,5,13,9,0,7,11,12,5,0,0,0,0],\"count\":13},{\"number\":7,\"hash\":[5,1,1,0,0,0,0,0,2,0,0,0,12,19,8,0,0,0,0,1,18,18,1,0,0,0,0,4,19,0,0,0,0,0,2,19,7,0,0,0,0,0,8,19,0,0,0,0,0,1,18,17,0,0,0,0,0,1,19,14,0,0,0,0,0,2,19,12,0,0,0,0,0,3,19,10,0,0,0,0],\"count\":19},{\"number\":8,\"hash\":[12,18,18,8,1,0,0,0,19,3,0,0,13,19,8,0,16,0,0,0,3,17,17,1,19,1,0,0,3,19,17,0,13,19,8,0,3,8,0,0,19,12,0,5,16,6,0,0,9,0,0,0,5,18,19,5,1,0,0,0,0,6,19,11,13,0,0,0,6,18,17,4,17,19,13,5,3,3,0,0],\"count\":19},{\"number\":9,\"hash\":[14,17,11,2,1,0,0,0,13,0,0,0,14,16,4,0,1,0,0,0,4,14,16,1,0,0,0,0,0,10,17,3,8,0,0,0,8,16,16,0,17,8,1,0,7,2,10,2,0,3,3,0,0,11,17,2,0,0,0,0,4,16,15,0,12,2,0,1,17,17,1,0,17,10,5,3,0,0,0,0],\"count\":17}]");
    /***/
  },

  /***/
  "./src/Data/StageFontSize.json":
  /*!*************************************!*\
    !*** ./src/Data/StageFontSize.json ***!
    \*************************************/

  /*! exports provided: 10px, 11px, 12px, 13px, 14px, 15px, 16px, 17px, 18px, 19px, 20px, 21px, 22px, 23px, 24px, 25px, 26px, 27px, 28px, 29px, 30px, 31px, 32px, 33px, 34px, 35px, 36px, 37px, 38px, 39px, 40px, 41px, 42px, 43px, 44px, 45px, 46px, 47px, 48px, 49px, 50px, 51px, 52px, 53px, 54px, 55px, 56px, 57px, 58px, 59px, 60px, 61px, 62px, 63px, 64px, 65px, 66px, 67px, 68px, 69px, 70px, 71px, 72px, 73px, 74px, 75px, 76px, 77px, 78px, 79px, 80px, 81px, 82px, 83px, 84px, 85px, 86px, 87px, 88px, 89px, 90px, 91px, 92px, 93px, 94px, 95px, 96px, 97px, 98px, 99px, 100px, default */

  /***/
  function (module) {
    module.exports = JSON.parse("{\"10px\":{\"width\":6,\"height\":2},\"11px\":{\"width\":6,\"height\":2},\"12px\":{\"width\":7,\"height\":2},\"13px\":{\"width\":6,\"height\":2},\"14px\":{\"width\":7,\"height\":2},\"15px\":{\"width\":7,\"height\":3},\"16px\":{\"width\":8,\"height\":3},\"17px\":{\"width\":9,\"height\":3},\"18px\":{\"width\":9,\"height\":3},\"19px\":{\"width\":10,\"height\":3},\"20px\":{\"width\":10,\"height\":3},\"21px\":{\"width\":11,\"height\":3},\"22px\":{\"width\":11,\"height\":3},\"23px\":{\"width\":12,\"height\":4},\"24px\":{\"width\":12,\"height\":4},\"25px\":{\"width\":13,\"height\":4},\"26px\":{\"width\":12,\"height\":4},\"27px\":{\"width\":13,\"height\":4},\"28px\":{\"width\":13,\"height\":4},\"29px\":{\"width\":14,\"height\":4},\"30px\":{\"width\":14,\"height\":5},\"31px\":{\"width\":15,\"height\":5},\"32px\":{\"width\":15,\"height\":5},\"33px\":{\"width\":16,\"height\":5},\"34px\":{\"width\":17,\"height\":5},\"35px\":{\"width\":17,\"height\":5},\"36px\":{\"width\":18,\"height\":5},\"37px\":{\"width\":18,\"height\":6},\"38px\":{\"width\":19,\"height\":6},\"39px\":{\"width\":18,\"height\":6},\"40px\":{\"width\":19,\"height\":6},\"41px\":{\"width\":19,\"height\":6},\"42px\":{\"width\":20,\"height\":6},\"43px\":{\"width\":20,\"height\":6},\"44px\":{\"width\":21,\"height\":7},\"45px\":{\"width\":21,\"height\":7},\"46px\":{\"width\":22,\"height\":7},\"47px\":{\"width\":22,\"height\":7},\"48px\":{\"width\":23,\"height\":7},\"49px\":{\"width\":24,\"height\":7},\"50px\":{\"width\":24,\"height\":7},\"51px\":{\"width\":25,\"height\":7},\"52px\":{\"width\":24,\"height\":8},\"53px\":{\"width\":25,\"height\":8},\"54px\":{\"width\":25,\"height\":8},\"55px\":{\"width\":26,\"height\":8},\"56px\":{\"width\":26,\"height\":8},\"57px\":{\"width\":27,\"height\":8},\"58px\":{\"width\":27,\"height\":8},\"59px\":{\"width\":28,\"height\":9},\"60px\":{\"width\":28,\"height\":9},\"61px\":{\"width\":29,\"height\":9},\"62px\":{\"width\":29,\"height\":9},\"63px\":{\"width\":30,\"height\":9},\"64px\":{\"width\":30,\"height\":9},\"65px\":{\"width\":30,\"height\":9},\"66px\":{\"width\":30,\"height\":10},\"67px\":{\"width\":31,\"height\":10},\"68px\":{\"width\":32,\"height\":10},\"69px\":{\"width\":32,\"height\":10},\"70px\":{\"width\":33,\"height\":10},\"71px\":{\"width\":33,\"height\":10},\"72px\":{\"width\":34,\"height\":10},\"73px\":{\"width\":34,\"height\":11},\"74px\":{\"width\":35,\"height\":11},\"75px\":{\"width\":35,\"height\":11},\"76px\":{\"width\":36,\"height\":11},\"77px\":{\"width\":35,\"height\":11},\"78px\":{\"width\":36,\"height\":11},\"79px\":{\"width\":36,\"height\":11},\"80px\":{\"width\":37,\"height\":11},\"81px\":{\"width\":37,\"height\":12},\"82px\":{\"width\":38,\"height\":12},\"83px\":{\"width\":39,\"height\":12},\"84px\":{\"width\":39,\"height\":12},\"85px\":{\"width\":40,\"height\":12},\"86px\":{\"width\":40,\"height\":12},\"87px\":{\"width\":41,\"height\":12},\"88px\":{\"width\":41,\"height\":13},\"89px\":{\"width\":42,\"height\":13},\"90px\":{\"width\":41,\"height\":13},\"91px\":{\"width\":42,\"height\":13},\"92px\":{\"width\":42,\"height\":13},\"93px\":{\"width\":43,\"height\":13},\"94px\":{\"width\":43,\"height\":13},\"95px\":{\"width\":44,\"height\":13},\"96px\":{\"width\":44,\"height\":14},\"97px\":{\"width\":45,\"height\":14},\"98px\":{\"width\":46,\"height\":14},\"99px\":{\"width\":46,\"height\":14},\"100px\":{\"width\":47,\"height\":14}}");
    /***/
  },

  /***/
  "./src/DropRecognition.js":
  /*!********************************!*\
    !*** ./src/DropRecognition.js ***!
    \********************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return DropsRecognition;
    });
    /* harmony import */


    var _RectRecognition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./RectRecognition */
    "./src/RectRecognition.js");
    /* harmony import */


    var _StageRecognition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./StageRecognition */
    "./src/StageRecognition.js");
    /* harmony import */


    var _ItemRecognition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ItemRecognition */
    "./src/ItemRecognition.js");

    class DropsRecognition {
      constructor(img) {
        this.Image = img;
        this.Canvas = document.createElement("canvas"); //document.body.appendChild(this.Canvas);

        this.Canvas.width = img.width;
        this.Canvas.height = img.height;
        this.ctx = this.Canvas.getContext("2d");
        this.ctx.drawImage(img, 0, 0);
        this.ctx.fillStyle = "#00ff00";
        this.ctx.strokeStyle = "#00ff00";
        this.rawImageData = this.ctx.getImageData(0, 0, img.width, img.height);
        this.matrixImageData = [[]];
        this.BoundData = {};
        this.Stage = {};
        this.Items = [];

        for (let index = 0, x = 0, y = 0; index < this.rawImageData.data.length; index += 4) {
          this.matrixImageData[y][x] = [this.rawImageData.data[index], this.rawImageData.data[index + 1], this.rawImageData.data[index + 2]];

          if (++x == img.width) {
            x = 0;
            if (++y != img.height) this.matrixImageData.push([]);
          }
        }

        this.RectRecognition();
        /*
        for (let Rect of this.BoundData.mergedRects.Right) {
          this.ctx.strokeRect(Rect.left, Rect.top, Rect.width, Rect.height);
        }
        this.ctx.strokeStyle = "#ff0000";
        this.ctx.strokeRect(
          this.BoundData.Stage.left,
          this.BoundData.Stage.top,
          this.BoundData.Stage.width,
          this.BoundData.Stage.height
        );*/

        this.detectStage();
        this.detectItem();
        delete this.ctx;
        delete this.Canvas;
        delete this.matrixImageData;
        delete this.rawImageData;
        delete this.Image;
      }
      /**
       * 识别图像边界
       */


      RectRecognition() {
        this.BoundData = new _RectRecognition__WEBPACK_IMPORTED_MODULE_0__["default"](this.matrixImageData);
      }

      detectItem() {
        let DetectType = ["NORMAL_DROP", "EXTRA_DROP", "SPECIAL_DROP", "ALL_DROP"];

        for (let Rect of this.BoundData.Items) {
          let Type = Rect.type;
          delete Rect.type;
          let Result = {
            type: Type,
            Bound: Rect
          };

          if (DetectType.includes(Type)) {
            let DropList = [];

            for (let Drop of DropsRecognition.Stage[this.Stage.Code].dropInfos) {
              if ((Drop.dropType == Type || Type == "ALL_DROP") && Drop.itemId && Drop.itemId != "furni") {
                DropList.push({
                  id: Drop.itemId,
                  range: Drop.bounds
                });
              }
            } // console.log(Type);


            let Item = new _ItemRecognition__WEBPACK_IMPORTED_MODULE_2__["default"](this.getImageMatrix(Rect.left, Rect.top, Rect.right, Rect.bottom), DropList, Rect);
            Object.assign(Result, Item);
          }

          this.Items.push(Result);
        }
      }

      getImageMatrix(x1, y1, x2, y2) {
        let Matrix = [];

        for (let y = y1; y <= y2; y++) {
          let ry = Matrix.push([]) - 1;

          for (let x = x1, rx = 0; x <= x2; x++, rx++) {
            Matrix[ry][rx] = [].concat(this.matrixImageData[y][x]);
          }
        }

        return Matrix;
      }

      detectStage() {
        [this.Stage.Code, this.Stage.Confidence] = Object(_StageRecognition__WEBPACK_IMPORTED_MODULE_1__["default"])(this.getImageMatrix(this.BoundData.Stage.left, this.BoundData.Stage.top, this.BoundData.Stage.right, this.BoundData.Stage.bottom));
      }

      static init(dataName, Data) {
        switch (dataName) {
          case "Stage":
            this.Stage = Data;
            break;

          case "ItemImage":
            _ItemRecognition__WEBPACK_IMPORTED_MODULE_2__["default"].init(Data);

            break;
        }
      }

    }
    /***/

  },

  /***/
  "./src/ItemRecognition.js":
  /*!********************************!*\
    !*** ./src/ItemRecognition.js ***!
    \********************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return ItemRecognition;
    });
    /* harmony import */


    var ssim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssim.js */
    "./node_modules/ssim.js/dist/ssim.web.js");
    /* harmony import */


    var ssim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ssim_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Rectangle */
    "./src/Rectangle.js");
    /* harmony import */


    var _ConnectedAreaRecognition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ConnectedAreaRecognition */
    "./src/ConnectedAreaRecognition.js");
    /* harmony import */


    var _Data_NumberHashList_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Data/NumberHashList.json */
    "./src/Data/NumberHashList.json");

    var _Data_NumberHashList_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./Data/NumberHashList.json */
    "./src/Data/NumberHashList.json", 1);

    for (let hash of _Data_NumberHashList_json__WEBPACK_IMPORTED_MODULE_3__) {
      if (hash.hash instanceof Array) {
        hash.hash = hash.hash.map(v => v / hash.count);
      }
    }

    class ItemRecognition {
      constructor(ImageData, Rules, Rect) {
        this.Matrix = ImageData;
        this.Width = ImageData[0].length;
        this.Height = ImageData.length;
        this.IData = new Array();
        this.Bound = Rect;
        this.Rules = Rules;
        this.Confidence = {
          ItemId: -Infinity,
          Count: []
        };
        this.prepare();
        this.ItemId = this.getItemId();
        this.getCount();
        delete this.Rules;
        delete this.IData;
        delete this.Height;
        delete this.Width;
        delete this.Matrix;
      }

      prepare() {
        let cx = this.Matrix[0].length >> 1;
        let cy = this.Matrix.length >> 1;
        let r = cx + cy >> 1;

        for (let y = 0; y < this.Height; y++) {
          for (let x = 0; x < this.Width; x++) {
            let TempColor = this.Matrix[y][x];
            if (Math.hypot(x - cx, y - cy) > r) TempColor = [255, 255, 255];
            this.IData.push(...TempColor, 255);
          }
        }

        this.IData = {
          data: this.IData,
          height: this.Height,
          width: this.Width
        };
      }

      getItemId() {
        let Images = [];
        let Canvas = document.createElement("canvas");
        Canvas.width = this.Width;
        Canvas.height = this.Height;
        let Ctx = Canvas.getContext("2d");
        let Confidence = -Infinity;
        let Result = "";

        for (let Rule of this.Rules) {
          if (!ItemRecognition.Images[Rule.id]) continue;
          Ctx.clearRect(0, 0, Canvas.width, Canvas.height);
          Ctx.drawImage(ItemRecognition.Images[Rule.id], 0, 0, ItemRecognition.Images[Rule.id].width, ItemRecognition.Images[Rule.id].height, 0, 0, Canvas.width, Canvas.height);
          let ImageD = Ctx.getImageData(0, 0, Canvas.width, Canvas.height);
          Images.push([Rule.id, ImageD]);
        }

        for (let Image of Images) {
          let SSIM = ssim_js__WEBPACK_IMPORTED_MODULE_0___default()(Image[1], this.IData, {
            windowSize: 8,
            ssim: "bezkrovny"
          }).mssim;

          if (SSIM > Confidence) {
            Confidence = SSIM;
            Result = Image[0];
          }
        }

        this.Confidence.ItemId = Confidence;
        return Result;
      }

      getCount() {
        if (this.ItemId == "") {
          this.Count = NaN;
          return;
        }

        let Range = this.Rules.find(v => v.id == this.ItemId);

        if (Range) {
          Range = Range.range;
        } else {
          return;
        }

        let NumRange = [Range.upper > 9 ? 0 : Math.max(1, Range.lower), Math.min(9, Range.upper)];
        let NumList = [];

        for (let i = NumRange[0]; i <= NumRange[1]; i++) {
          NumList.push(i);
        }

        if (NumList.length == 1) {
          this.Count = NumList[0];
          this.Confidence.Count[0] = 1;
          return;
        }

        let XStart = false,
            XEnd = false,
            YStart = 0,
            Find = false;
        let NumberRect = new _Rectangle__WEBPACK_IMPORTED_MODULE_1__["default"]();

        for (let y = this.Height >> 1; y < this.Height; y++) {
          XStart = false;
          XEnd = false;

          for (let x = this.Width >> 1; x < this.Width; x++) {
            let GreyUp = distance => (this.Matrix[y - distance][x][0] + this.Matrix[y - distance][x][1] + this.Matrix[y - distance][x][2]) / 3;

            let GreyNow = (this.Matrix[y][x][0] + this.Matrix[y][x][1] + this.Matrix[y][x][2]) / 3;

            if ((this.ItemId == "3301" ? Math.abs(GreyNow - GreyUp(1)) : Math.max(Math.abs(GreyNow - GreyUp(1)), Math.abs(GreyNow - GreyUp(2)), GreyNow - GreyUp(3))) > 20) {
              if (!XStart) {
                XStart = x;
              } else {
                XEnd = x;
              }
            } else {
              if (XEnd - XStart + 1 > 20) {
                Find = true;
                break;
              } else {
                XStart = false;
                XEnd = false;
              }
            }
          }

          if (Find) {
            YStart = y;
            break;
          }
        }

        if (Find) {
          NumberRect.update({
            left: XStart,
            right: XEnd,
            top: YStart,
            bottom: Math.round(this.Bound.height - this.Bound.height * 0.08)
          });
          /* console.log({
            left: NumberRect.left + this.Bound.left,
            right: NumberRect.right + this.Bound.left,
            top: NumberRect.top + this.Bound.top,
            bottom: NumberRect.bottom + this.Bound.top
          });*/
        } else {
          return;
        }

        let NumberMartix = [];
        let NumberNodes = new Set();

        for (let y = 0; y < NumberRect.height; y++) {
          NumberMartix.push([]);

          for (let x = 0; x < NumberRect.width; x++) {
            let [R, G, B] = this.Matrix[y + NumberRect.top][x + NumberRect.left];
            let Grey = (R + G + B) / 3;

            if (Grey >= 120) {
              NumberMartix[y][x] = true;
            } else if (Grey < 120 && Grey > 105) {
              let left, right, top, bottom;

              if (x !== 0) {
                left = this.Matrix[y + NumberRect.top][x + NumberRect.left - 1].reduce((a, b) => a + b) / 3;
              }

              if (x !== NumberRect.width - 1) {
                right = this.Matrix[y + NumberRect.top][x + NumberRect.left + 1].reduce((a, b) => a + b) / 3;
              }

              if (y != 0) {
                top = this.Matrix[y + NumberRect.top - 1][x + NumberRect.left].reduce((a, b) => a + b) / 3;
              }

              if (y !== NumberRect.height - 1) {
                bottom = this.Matrix[y + NumberRect.top + 1][x + NumberRect.left].reduce((a, b) => a + b) / 3;
              }

              if (left && left > 120 || right && right > 120 || top && top > 120 || bottom && bottom > 120) {
                NumberMartix[y][x] = true;
              } else {
                NumberMartix[y][x] = false;
              }
            } else {
              NumberMartix[y][x] = false;
            }

            NumberMartix[y][x] = Grey > 80;

            if (NumberMartix[y][x]) {
              NumberNodes.add(x * 10000 + y);
            }
          }
        }

        let GetAllNumber = new _ConnectedAreaRecognition__WEBPACK_IMPORTED_MODULE_2__["default"](NumberMartix, NumberNodes, true);
        let TempCount = "";
        let Result = GetAllNumber.GetAllConnectedArea(Rect => {
          //console.log(Rect);
          if (Rect.point < 20 || Rect.width > Rect.height || Rect.height < 8 || Rect.width < 3 || NumberRect.width - Rect.left < 5 || Rect.left < 5) {
            return false;
          }

          return Rect;
        }).sort((a, b) => a.left - b.left);
        let NumCanvas = document.createElement("canvas");
        NumCanvas.width = 9;
        NumCanvas.height = 10;
        let NumCtx = NumCanvas.getContext("2d");

        for (let Num of Result) {
          let Canvas = document.createElement("canvas");
          Canvas.width = Num.width;
          Canvas.height = Num.height;
          let Ctx = Canvas.getContext("2d");
          let ImgData = Ctx.getImageData(0, 0, Canvas.width, Canvas.height);

          for (let y = 0; y < Num.height; y++) {
            for (let x = 0; x < Num.width; x++) {
              let Index = (y * Canvas.width + x) * 4;

              if (Num.matrix[y][x]) {
                ImgData.data[Index] = 0;
                ImgData.data[Index + 1] = 0;
                ImgData.data[Index + 2] = 0;
              } else {
                ImgData.data[Index] = 255;
                ImgData.data[Index + 1] = 255;
                ImgData.data[Index + 2] = 255;
              }

              ImgData.data[Index + 3] = 255;
            }
          }

          Ctx.putImageData(ImgData, 0, 0);
          NumCtx.clearRect(0, 0, NumCanvas.width, NumCanvas.height);
          NumCtx.drawImage(Canvas, 0, 0, Canvas.width, Canvas.height, 0, 0, NumCanvas.width, NumCanvas.height);
          let DHash = this.getDHash(NumCtx.getImageData(0, 0, NumCanvas.width, NumCanvas.height));
          let NumberResult = this.dHashtoNumber(DHash, NumList);
          TempCount += NumberResult.Num;
          this.Confidence.Count.push(NumberResult.Confidence);
        }

        this.Count = Number(TempCount);
      }

      getDHash(item) {
        let HashString = "";

        for (let index = 0; index < item.data.length; index += 4) {
          if (Math.floor(index / 4) % item.width == 0) continue;

          if (Math.floor((item.data[index - 4] + item.data[index - 3] + item.data[index - 2]) / 3) > Math.floor((item.data[index] + item.data[index + 1] + item.data[index + 2]) / 3)) {
            HashString += 1;
          } else {
            HashString += 0;
          }
        }

        return HashString;
      }
      /**
       *
       * @param {string} hash
       * @param {array} Numbers
       */


      dHashtoNumber(hash, Numbers) {
        let NumConfidence = -Infinity;
        let Num = NaN;
        let AllLength = 80;

        let NumsHashList = _Data_NumberHashList_json__WEBPACK_IMPORTED_MODULE_3__.filter(v => Numbers.includes(v.number));

        for (let NumberDHash of NumsHashList) {
          let Confidence = 0;

          for (let i = 0; i < hash.length; i++) {
            if (hash[i] == "1") {
              Confidence += NumberDHash.hash[i];
            } else {
              Confidence += 1 - NumberDHash.hash[i];
            }
          }

          Confidence /= AllLength;

          if (Confidence > NumConfidence) {
            NumConfidence = Confidence;
            Num = NumberDHash.number;
          }
        }

        return {
          Num: Num,
          Confidence: NumConfidence
        };
      }

      static init(Image) {
        this.Images = Image;
      }

    }
    /***/

  },

  /***/
  "./src/RectRecognition.js":
  /*!********************************!*\
    !*** ./src/RectRecognition.js ***!
    \********************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return RectRecognition;
    });
    /* harmony import */


    var _ConnectedAreaRecognition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ConnectedAreaRecognition */
    "./src/ConnectedAreaRecognition.js");

    class RectRecognition {
      constructor(ImageData) {
        let height = ImageData.length;
        let width = ImageData[0].length;
        this.ImageData = ImageData;
        this.Node = new Set();
        /* 粗检测关卡掉落信息区域 */

        let YAxis = Array(height).fill(0);

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            YAxis[y] += ImageData[y][x][0] + ImageData[y][x][1] + ImageData[y][x][2];
          }

          YAxis[y] /= 3;
        }

        let DataAreaSpilt = -1;

        for (let y = 1; y < height; y++) {
          if (YAxis[y - 1] - YAxis[y] > 20000) {
            let cancel = false;

            for (let x = 0; x < width; x++) {
              if (ImageData[y][x].reduce((a, b) => a + b) / 3 > 100) {
                cancel = true;
                break;
              }
            }

            if (cancel) continue;
            DataAreaSpilt = y;
            break;
          }
        }

        this.DataAreaSpilt = DataAreaSpilt;
        let BinarizationMatrix = this.Binarization(width, height, ImageData);
        let ConnectedArea = new _ConnectedAreaRecognition__WEBPACK_IMPORTED_MODULE_0__["default"](BinarizationMatrix, this.Node);
        let mergedRects = this.AutomergeRect(ConnectedArea.GetAllConnectedArea(Result => {
          Result.update({
            top: Result.top + DataAreaSpilt,
            bottom: Result.bottom + DataAreaSpilt
          });

          if (Result.point > 100) {
            delete Result.point;
            return Result;
          }
        }));
        this.Bound(mergedRects);
        this.GetDropType(mergedRects.Right, ImageData);
        this.mergedRects = mergedRects;
        delete this.DataAreaSpilt;
        delete this.Node;
        delete this.ImageData;
      } // 识别边界


      Bound(Rects) {
        this.Stage = Rects.Stage;
        this.Items = [];

        for (let Rect of Rects.Right) {
          if (Math.abs(Rect.height / Rect.width - 1) < 0.2 && Rect.height > 50 && Rect.width > 50) {
            this.Items.push(Rect);
          }
        }

        this.Items.sort((a, b) => a.left - b.left);
      }

      GetDropType(Rects, ImageData) {
        let top = this.Items.reduce((a, b) => a + b.bottom, 0) / this.Items.length;
        let DropType = [];

        for (let Rect of Rects) {
          if (Rect.top > top && Rect.width / Rect.height > 3) {
            DropType.push({
              left: Rect.left,
              right: Rect.right,
              type: this.CompareType(ImageData[Rect.top][Rect.left + Rect.right >> 1])
            });
          }
        }

        for (let Rect of this.Items) {
          for (let type of DropType) {
            let [left, right] = Rect.direction(type);

            if (!left && !right) {
              Rect.type = type.type;
            }
          }
        }
      }

      RGBDiff(rgb1, rgb2) {
        return rgb1.map((v, i) => Math.abs(v - rgb2[i])).reduce((a, b) => a + b);
      }

      CompareType(rgb) {
        let Type = Object.entries(RectRecognition.DropTypeColor);

        for (let [type, color] of Type) {
          if (color(...rgb)) {
            return type;
          }
        }

        return "ALL_DROP";
      }

      Binarization(width, height, ImageData) {
        let Matrix = [];

        for (let y = this.DataAreaSpilt, ry = 0; y < height; y++) {
          Matrix.push([]);

          for (let x = 0; x < width; x++) {
            Matrix[ry][x] = (ImageData[y][x][0] + ImageData[y][x][1] + ImageData[y][x][2]) / 3 < 75 ? false : true;

            if (Matrix[ry][x]) {
              this.Node.add(x * 10000 + ry);
            }
          }

          ry++;
        }

        return Matrix;
      }

      sortRect(Rect1, Rect2) {
        let y = Rect1.top - Rect2.top,
            x = Rect1.left - Rect2.left;

        if (y == 0) {
          return x;
        } else {
          return y;
        }
      }
      /**
       * 合并边界距离在一定范围内的连通区
       * @param {*} Rects
       */


      AutomergeRect(Rects) {
        // 搜索出中间的竖线 以它为参考
        let MiddleLine = {
          top: 1,
          bottom: 0
        };

        for (let i = 0; i < Rects.length; i++) {
          if (Rects[i].bottom - Rects[i].top > MiddleLine.bottom - MiddleLine.top) {
            MiddleLine = Rects[i];
          }
        }

        let MiddleX = (MiddleLine.right + MiddleLine.left) / 2;
        let LeftRect = [],
            RightRect = [];

        for (let Rect of Rects) {
          if (Rect.right < MiddleX) {
            if (this.ISChar(Rect)) {
              LeftRect.push(Rect);
            }
          }

          if (Rect.left > MiddleX) {
            RightRect.push(Rect);
          }
        }

        LeftRect.sort(this.sortRect);
        let StageRect = LeftRect.shift();

        for (let Rect of LeftRect) {
          let [left, right, top, bottom] = StageRect.direction(Rect);

          if ((right || left) && !top && !bottom) {
            StageRect.merge(Rect);
          } else {
            break;
          }
        }

        let Merge = (Rects, q) => {
          for (let i = 0; i < Rects.length; i++) {
            for (let j = i + 1; j < Rects.length; j++) {
              if (Rects[i].distance(Rects[j]) < q) {
                Rects[i].merge(Rects[j]);
                delete Rects.splice(j, 1);
                i--;
                break;
              }
            }
          }

          return Rects;
        };

        return {
          Stage: StageRect,
          Right: Merge(RightRect, 10),
          Middle: MiddleLine
        };
      }

      ISChar(Rect) {
        let C = 0;

        for (let y = 0; y < Rect.height; y++) {
          for (let x = 0; x < Rect.width; x++) {
            let [R, G, B] = this.ImageData[y + Rect.top][x + Rect.left];
            let A = 255;
            let D = (Math.abs(R - A) + Math.abs(G - A) + Math.abs(B - A)) / 3;

            if (D < 30) {
              C++;
            }
          }
        }

        return C / (Rect.width * Rect.height) > 0.1;
      }
      /**
       * 计算矩形距离
       * https://stackoverflow.com/a/26178015
       * @param {*} Rect1
       * @param {*} Rect2
       */


    }

    RectRecognition.DropTypeColor = {
      SPECIAL_DROP: (R, G, B) => {
        return Math.abs(R - 240) < 5 && Math.abs(G - 100) < 10 && B < 50;
      },
      NORMAL_DROP: (R, G, B) => {
        return Math.abs(R - 175) + Math.abs(G - 175) + Math.abs(B - 175) < 20;
      },
      EXTRA_DROP: (R, G, B) => {
        return G > R && G > B && B < 150 && R > 200 && G > 200;
      },
      FIXED_DROP: (R, G, B) => {
        return R > 200 && Math.abs(G - 200) < 20 && B < 120;
      },
      LUCKY_DROP: (R, G, B) => {
        return Math.abs(R - 250) < 5 && Math.abs(G - 100) < 10 && B < 50;
      }
    };
    /***/
  },

  /***/
  "./src/Rectangle.js":
  /*!**************************!*\
    !*** ./src/Rectangle.js ***!
    \**************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return Rectangle;
    });

    class Rectangle {
      constructor(data = {}) {
        this.left = data.left || 0;
        this.top = data.top || 0;
        this.right = data.right || 0;
        this.bottom = data.bottom || 0;

        for (let [key, value] of Object.entries(data)) {
          if (!(key in this)) {
            this[key] = value;
          }
        }
      }

      update(data) {
        return Object.assign(this, data);
      }

      direction(Rect2) {
        let left = Rect2.right < this.left;
        let right = Rect2.left > this.right;
        let top = Rect2.bottom < this.top;
        let bottom = Rect2.top > this.bottom;
        return [left, right, top, bottom];
      }

      merge(Rect2) {
        return this.update({
          left: Math.min(this.left, Rect2.left),
          right: Math.max(this.right, Rect2.right),
          top: Math.min(this.top, Rect2.top),
          bottom: Math.max(this.bottom, Rect2.bottom)
        });
      }

      distance(Rect2) {
        let [left, right, top, bottom] = this.direction(Rect2);

        if (left && top) {
          return Math.hypot(this.left - Rect2.right, this.top - Rect2.bottom);
        } else if (right && top) {
          return Math.hypot(this.right - Rect2.left, this.top - Rect2.bottom);
        } else if (left && bottom) {
          return Math.hypot(this.left - Rect2.right, this.bottom - Rect2.top);
        } else if (right && bottom) {
          return Math.hypot(this.right - Rect2.left, this.bottom - Rect2.top);
        } else if (left) {
          return this.left - Rect2.right;
        } else if (right) {
          return Rect2.left - this.right;
        } else if (top) {
          return this.top - Rect2.bottom;
        } else if (bottom) {
          return Rect2.top - this.bottom;
        } else {
          return 0;
        }
      }

      get width() {
        return this.right - this.left + 1;
      }

      get height() {
        return this.bottom - this.top + 1;
      }

    }
    /***/

  },

  /***/
  "./src/StageRecognition.js":
  /*!*********************************!*\
    !*** ./src/StageRecognition.js ***!
    \*********************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return StageRecognition;
    });
    /* harmony import */


    var _Data_Font_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Data/Font.css */
    "./src/Data/Font.css");
    /* harmony import */


    var _Data_Font_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Data_Font_css__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _Data_StageFontSize_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Data/StageFontSize.json */
    "./src/Data/StageFontSize.json");

    var _Data_StageFontSize_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./Data/StageFontSize.json */
    "./src/Data/StageFontSize.json", 1);
    /* harmony import */


    var _ConnectedAreaRecognition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ConnectedAreaRecognition */
    "./src/ConnectedAreaRecognition.js");

    let FontCache = {};

    function StageRecognition(ImageMatrix) {
      let Matrix = [];
      let Confidence = [];
      let Node = new Set();

      for (let y = 0; y < ImageMatrix.length; y++) {
        Matrix.push([]);

        for (let x = 0; x < ImageMatrix[0].length; x++) {
          let [R, G, B] = ImageMatrix[y][x];
          Matrix[y][x] = (R + G + B) / 3 > 80;

          if (Matrix[y][x]) {
            Node.add(x * 10000 + y);
          }
        }
      }

      let getConnectedArea = new _ConnectedAreaRecognition__WEBPACK_IMPORTED_MODULE_2__["default"](Matrix, Node, true);
      let ConnectedAreas = getConnectedArea.GetAllConnectedArea().sort((a, b) => a.left - b.left);
      let Chars = [];
      let SplitChar;

      for (let Char of ConnectedAreas) {
        if (Char.height < Matrix.length >> 1) {
          Chars.push("-");
          SplitChar = Char;
        } else {
          Chars.push("");
        }
      }

      let FontSize = getFontSize(SplitChar);

      if (!FontCache[FontSize]) {
        FontCache[FontSize] = genFontData(FontSize);
      }

      for (let [Index, Char] of Chars.entries()) {
        if (Char == "-") {
          Confidence.push(1);
          continue;
        }

        let Result = compareNumber(ConnectedAreas[Index].matrix, FontCache[FontSize]);
        Chars[Index] = Result[0];
        let NumConf = Result[1];

        if (Result[1] < 0.9) {
          Result = compareChar(ConnectedAreas[Index].matrix, FontCache[FontSize]);

          if (Result[1] > NumConf) {
            Chars[Index] = Result[0];
            Confidence.push(Result[1]);
          } else {
            Confidence.push(NumConf);
          }
        } else {
          Confidence.push(NumConf);
        }
      }

      return [Chars.join(''), Confidence.reduce((a, b) => a + b) / Confidence.length];
    }

    function getFontSize(CharRect) {
      let Find = false;
      let Ret;
      let Diff = Infinity;

      for (let [Size, Rect] of Object.entries(_Data_StageFontSize_json__WEBPACK_IMPORTED_MODULE_1__)) {
        let D = Math.abs(Rect.width - CharRect.width) + Math.abs(Rect.height - CharRect.height);

        if (D <= Diff) {
          Diff = D;
          Ret = Size;

          if (D == 0) {
            Find = true;
          }
        } else if (Find) {
          break;
        }
      }

      return Ret;
    }

    function compareNumber(Matrix, Font) {
      let Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let Confidence = -Infinity;
      let Result;

      for (let Num of Number) {
        let Conf = compareMatrix(Matrix, Font[Num]);

        if (Conf > Confidence) {
          Confidence = Conf;
          Result = Num;
        }
      }

      return [Result, Confidence];
    }

    function compareChar(Matrix, Font) {
      let Chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      let Confidence = -Infinity;
      let Result;

      for (let Char of Chars) {
        let Conf = compareMatrix(Matrix, Font[Char]);

        if (Conf > Confidence) {
          Confidence = Conf;
          Result = Char;
        }
      }

      return [Result, Confidence];
    }

    function compareMatrix(Matrix1, Matrix2) {
      let Width = Math.min(Matrix1[0].length, Matrix2[0].length);
      let Height = Math.min(Matrix1.length, Matrix2.length);
      let Count = 0;

      for (let y = 0; y < Height; y++) {
        for (let x = 0; x < Width; x++) {
          if (Matrix1[y][x] == Matrix2[y][x]) {
            Count++;
          }
        }
      }

      return Count / (Matrix1[0].length * Matrix1.length);
    } // 生成每个字符数据


    function genFontData(size) {
      let Canvas = document.createElement("canvas");
      let Ctx = Canvas.getContext("2d");
      Ctx.font = `${size} 'Novecento WideBold'`;
      Ctx.fillStyle = "#000000";
      Ctx.textBaseline = "top";
      let Data = {};
      let Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

      for (let Char of Chars) {
        let Size = Ctx.measureText(Char);
        Canvas.height = Size.actualBoundingBoxAscent + Size.actualBoundingBoxDescent;
        Canvas.width = Size.width;
        Ctx.font = `${size} 'Novecento WideBold'`;
        Ctx.fillStyle = "#000000";
        Ctx.textBaseline = "top";
        Ctx.clearRect(0, 0, Canvas.width, Canvas.height);
        Ctx.fillText(Char, 0, Size.actualBoundingBoxAscent);
        let IData = Ctx.getImageData(0, 0, Canvas.width, Canvas.height);
        let XFlags = new Array(Canvas.width).fill(false);
        let XRange = [];

        for (let x = 0; x < Canvas.width; x++) {
          for (let y = 0; y < Canvas.height; y++) {
            let Index = (y * Canvas.width + x) * 4;

            if (IData.data[Index + 3] > 0) {
              XFlags[x] = true;
              break;
            }
          }
        }

        for (let x = 0; x < Canvas.width; x++) {
          if (XFlags[x] && XRange.length == 0) {
            XRange.push(x);
          } else if (XFlags[x]) {
            XRange[1] = x;
          }
        }

        IData = Ctx.getImageData(XRange[0], 0, XRange[1] - XRange[0] + 1, Canvas.height);
        let Matrix = [];

        for (let y = 0; y < IData.height; y++) {
          Matrix.push([]);

          for (let x = 0; x < IData.width; x++) {
            Matrix[y][x] = IData.data[(y * IData.width + x) * 4 + 3] > 0;
          }
        }

        Data[Char] = Matrix;
      }

      return Data;
    }
    /***/

  }
  /******/

}));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");

var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");

var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");

var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");

var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js"); // Add xsrf header


      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");

var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js"); // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports.default = axios;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");

var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config); // Set config.method

  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  } // Hook up interceptors middleware


  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
module.exports = Axios;

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");

var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");

var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Ensure headers exist

  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = ['baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'];
  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });
  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys);
  var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  return config;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js"); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function deepMerge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/mdui/dist/css/mdui.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/mdui/dist/css/mdui.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_material_icons_MaterialIcons_Regular_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/material-icons/MaterialIcons-Regular.woff2 */ "./node_modules/mdui/dist/icons/material-icons/MaterialIcons-Regular.woff2");
/* harmony import */ var _icons_material_icons_MaterialIcons_Regular_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/material-icons/MaterialIcons-Regular.woff */ "./node_modules/mdui/dist/icons/material-icons/MaterialIcons-Regular.woff");
/* harmony import */ var _fonts_roboto_Roboto_Thin_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/roboto/Roboto-Thin.woff2 */ "./node_modules/mdui/dist/fonts/roboto/Roboto-Thin.woff2");
/* harmony import */ var _fonts_roboto_Roboto_Thin_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/roboto/Roboto-Thin.woff */ "./node_modules/mdui/dist/fonts/roboto/Roboto-Thin.woff");
/* harmony import */ var _fonts_roboto_Roboto_ThinItalic_woff2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/roboto/Roboto-ThinItalic.woff2 */ "./node_modules/mdui/dist/fonts/roboto/Roboto-ThinItalic.woff2");
/* harmony import */ var _fonts_roboto_Roboto_ThinItalic_woff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fonts/roboto/Roboto-ThinItalic.woff */ "./node_modules/mdui/dist/fonts/roboto/Roboto-ThinItalic.woff");
/* harmony import */ var _fonts_roboto_Roboto_Light_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fonts/roboto/Roboto-Light.woff2 */ "./node_modules/mdui/dist/fonts/roboto/Roboto-Light.woff2");
/* harmony import */ var _fonts_roboto_Roboto_Light_woff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fonts/roboto/Roboto-Light.woff */ "./node_modules/mdui/dist/fonts/roboto/Roboto-Light.woff");
/* harmony import */ var _fonts_roboto_Roboto_LightItalic_woff2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fonts/roboto/Roboto-LightItalic.woff2 */ "./node_modules/mdui/dist/fonts/roboto/Roboto-LightItalic.woff2");
/* harmony import */ var _fonts_roboto_Roboto_LightItalic_woff__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../fonts/roboto/Roboto-LightItalic.woff */ "./node_modules/mdui/dist/fonts/roboto/Roboto-LightItalic.woff");
/* harmony import */ var _fonts_roboto_Roboto_Regular_woff2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../fonts/roboto/Roboto-Regular.woff2 */ "./node_modules/mdui/dist/fonts/roboto/Roboto-Regular.woff2");
/* harmony import */ var _fonts_roboto_Roboto_Regular_woff__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../fonts/roboto/Roboto-Regular.woff */ "./node_modules/mdui/dist/fonts/roboto/Roboto-Regular.woff");
/* harmony import */ var _fonts_roboto_Roboto_RegularItalic_woff2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../fonts/roboto/Roboto-RegularItalic.woff2 */ "./node_modules/mdui/dist/fonts/roboto/Roboto-RegularItalic.woff2");
/* harmony import */ var _fonts_roboto_Roboto_RegularItalic_woff__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../fonts/roboto/Roboto-RegularItalic.woff */ "./node_modules/mdui/dist/fonts/roboto/Roboto-RegularItalic.woff");
/* harmony import */ var _fonts_roboto_Roboto_Medium_woff2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../fonts/roboto/Roboto-Medium.woff2 */ "./node_modules/mdui/dist/fonts/roboto/Roboto-Medium.woff2");
/* harmony import */ var _fonts_roboto_Roboto_Medium_woff__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../fonts/roboto/Roboto-Medium.woff */ "./node_modules/mdui/dist/fonts/roboto/Roboto-Medium.woff");
/* harmony import */ var _fonts_roboto_Roboto_MediumItalic_woff2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../fonts/roboto/Roboto-MediumItalic.woff2 */ "./node_modules/mdui/dist/fonts/roboto/Roboto-MediumItalic.woff2");
/* harmony import */ var _fonts_roboto_Roboto_MediumItalic_woff__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../fonts/roboto/Roboto-MediumItalic.woff */ "./node_modules/mdui/dist/fonts/roboto/Roboto-MediumItalic.woff");
/* harmony import */ var _fonts_roboto_Roboto_Bold_woff2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../fonts/roboto/Roboto-Bold.woff2 */ "./node_modules/mdui/dist/fonts/roboto/Roboto-Bold.woff2");
/* harmony import */ var _fonts_roboto_Roboto_Bold_woff__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../fonts/roboto/Roboto-Bold.woff */ "./node_modules/mdui/dist/fonts/roboto/Roboto-Bold.woff");
/* harmony import */ var _fonts_roboto_Roboto_BoldItalic_woff2__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../fonts/roboto/Roboto-BoldItalic.woff2 */ "./node_modules/mdui/dist/fonts/roboto/Roboto-BoldItalic.woff2");
/* harmony import */ var _fonts_roboto_Roboto_BoldItalic_woff__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../fonts/roboto/Roboto-BoldItalic.woff */ "./node_modules/mdui/dist/fonts/roboto/Roboto-BoldItalic.woff");
/* harmony import */ var _fonts_roboto_Roboto_Black_woff2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../fonts/roboto/Roboto-Black.woff2 */ "./node_modules/mdui/dist/fonts/roboto/Roboto-Black.woff2");
/* harmony import */ var _fonts_roboto_Roboto_Black_woff__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../fonts/roboto/Roboto-Black.woff */ "./node_modules/mdui/dist/fonts/roboto/Roboto-Black.woff");
/* harmony import */ var _fonts_roboto_Roboto_BlackItalic_woff2__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../fonts/roboto/Roboto-BlackItalic.woff2 */ "./node_modules/mdui/dist/fonts/roboto/Roboto-BlackItalic.woff2");
/* harmony import */ var _fonts_roboto_Roboto_BlackItalic_woff__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../fonts/roboto/Roboto-BlackItalic.woff */ "./node_modules/mdui/dist/fonts/roboto/Roboto-BlackItalic.woff");
// Imports




























var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_icons_material_icons_MaterialIcons_Regular_woff2__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_icons_material_icons_MaterialIcons_Regular_woff__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_Thin_woff2__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_Thin_woff__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_ThinItalic_woff2__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_ThinItalic_woff__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_Light_woff2__WEBPACK_IMPORTED_MODULE_8__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_Light_woff__WEBPACK_IMPORTED_MODULE_9__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_LightItalic_woff2__WEBPACK_IMPORTED_MODULE_10__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_LightItalic_woff__WEBPACK_IMPORTED_MODULE_11__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_Regular_woff2__WEBPACK_IMPORTED_MODULE_12__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_Regular_woff__WEBPACK_IMPORTED_MODULE_13__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_RegularItalic_woff2__WEBPACK_IMPORTED_MODULE_14__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_RegularItalic_woff__WEBPACK_IMPORTED_MODULE_15__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_Medium_woff2__WEBPACK_IMPORTED_MODULE_16__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_Medium_woff__WEBPACK_IMPORTED_MODULE_17__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_MediumItalic_woff2__WEBPACK_IMPORTED_MODULE_18__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_MediumItalic_woff__WEBPACK_IMPORTED_MODULE_19__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_Bold_woff2__WEBPACK_IMPORTED_MODULE_20__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_Bold_woff__WEBPACK_IMPORTED_MODULE_21__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_BoldItalic_woff2__WEBPACK_IMPORTED_MODULE_22__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_BoldItalic_woff__WEBPACK_IMPORTED_MODULE_23__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_Black_woff2__WEBPACK_IMPORTED_MODULE_24__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_Black_woff__WEBPACK_IMPORTED_MODULE_25__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_BlackItalic_woff2__WEBPACK_IMPORTED_MODULE_26__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_roboto_Roboto_BlackItalic_woff__WEBPACK_IMPORTED_MODULE_27__["default"]);
// Module
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/mdui/dist/css/mdui.css":
/*!*********************************************!*\
  !*** ./node_modules/mdui/dist/css/mdui.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js!./mdui.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/mdui/dist/css/mdui.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-Black.woff":
/*!***************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-Black.woff ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "82ada96d1354cece118ce4ba73cea813.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-Black.woff2":
/*!****************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-Black.woff2 ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bcccd7dfcdeddf586f5e0bd77dda204d.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-BlackItalic.woff":
/*!*********************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-BlackItalic.woff ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "358ab56556eca0b75d021b4e938b830a.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-BlackItalic.woff2":
/*!**********************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-BlackItalic.woff2 ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6d1acccbf11ac5f449b88b037ff46165.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-Bold.woff":
/*!**************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-Bold.woff ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8bd7856b64b4313341ebfbc0136c9d74.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-Bold.woff2":
/*!***************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-Bold.woff2 ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3b52bc86749058f144deb815c481ca5b.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-BoldItalic.woff":
/*!********************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-BoldItalic.woff ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d85436fa35b78a399a68b44491fa3478.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-BoldItalic.woff2":
/*!*********************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-BoldItalic.woff2 ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f21b7e045fd077321cdaf92cab817cd3.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-Light.woff":
/*!***************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-Light.woff ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8dc942c71385e7509b87af5d07f3db78.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-Light.woff2":
/*!****************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-Light.woff2 ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3b9222bb69292e15261d91b1e6393369.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-LightItalic.woff":
/*!*********************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-LightItalic.woff ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "821fb0bb1ae8e8761798bc5a277b9ac3.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-LightItalic.woff2":
/*!**********************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-LightItalic.woff2 ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4b2a79f0765ff216b9a3a7ce4b421e1b.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-Medium.woff":
/*!****************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-Medium.woff ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "eb797abfa6a5cca2463e423c07c4f6ea.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-Medium.woff2":
/*!*****************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-Medium.woff2 ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b92cc2170a4d5438fd3d19f349ce3785.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-MediumItalic.woff":
/*!**********************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-MediumItalic.woff ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8be651082cc0d07c84f633965e8ced59.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-MediumItalic.woff2":
/*!***********************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-MediumItalic.woff2 ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "113e7623163d4cb7f965cd8f8d3859eb.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-Regular.woff":
/*!*****************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-Regular.woff ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "770a8fca674a3550e241a6de7fa82d8b.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-Regular.woff2":
/*!******************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-Regular.woff2 ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c065bd9fa03a7a797d95ba7f198a9dcf.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-RegularItalic.woff":
/*!***********************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-RegularItalic.woff ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "33d48155cd9f38c64e71b9d016dd61fb.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-RegularItalic.woff2":
/*!************************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-RegularItalic.woff2 ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3a0ee5b0beec8d0ead1336016cbe19ad.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-Thin.woff":
/*!**************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-Thin.woff ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9b3e35eb0a402cc52306ca1cdcbb3786.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-Thin.woff2":
/*!***************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-Thin.woff2 ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e11b2308d1ace9c25083c7bd0fb9b66e.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-ThinItalic.woff":
/*!********************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-ThinItalic.woff ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "be84e94690a6a2d140485d4d3c74a8e5.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/fonts/roboto/Roboto-ThinItalic.woff2":
/*!*********************************************************************!*\
  !*** ./node_modules/mdui/dist/fonts/roboto/Roboto-ThinItalic.woff2 ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "271f60b07567ee405bb46112957fa3cb.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/icons/material-icons/MaterialIcons-Regular.woff":
/*!********************************************************************************!*\
  !*** ./node_modules/mdui/dist/icons/material-icons/MaterialIcons-Regular.woff ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "83bebaf37c09c7e1c3ee52682892ae14.woff");

/***/ }),

/***/ "./node_modules/mdui/dist/icons/material-icons/MaterialIcons-Regular.woff2":
/*!*********************************************************************************!*\
  !*** ./node_modules/mdui/dist/icons/material-icons/MaterialIcons-Regular.woff2 ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cff684e59ffb052d72cb8d5e49471553.woff2");

/***/ }),

/***/ "./node_modules/mdui/dist/js/mdui.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/mdui/dist/js/mdui.esm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * mdui 1.0.0 (https://mdui.org)
 * Copyright 2016-2020 zdhxiong
 * Licensed under MIT
 */
function isFunction(target) {
  return typeof target === 'function';
}

function isString(target) {
  return typeof target === 'string';
}

function isNumber(target) {
  return typeof target === 'number';
}

function isBoolean(target) {
  return typeof target === 'boolean';
}

function isUndefined(target) {
  return typeof target === 'undefined';
}

function isNull(target) {
  return target === null;
}

function isWindow(target) {
  return target instanceof Window;
}

function isDocument(target) {
  return target instanceof Document;
}

function isElement(target) {
  return target instanceof Element;
}

function isNode(target) {
  return target instanceof Node;
}
/**
 * 是否是 IE 浏览器
 */


function isIE() {
  // @ts-ignore
  return !!window.document.documentMode;
}

function isArrayLike(target) {
  if (isFunction(target) || isWindow(target)) {
    return false;
  }

  return isNumber(target.length);
}

function isObjectLike(target) {
  return typeof target === 'object' && target !== null;
}

function toElement(target) {
  return isDocument(target) ? target.documentElement : target;
}
/**
 * 把用 - 分隔的字符串转为驼峰（如 box-sizing 转换为 boxSizing）
 * @param string
 */


function toCamelCase(string) {
  return string.replace(/^-ms-/, 'ms-').replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}
/**
 * 把驼峰法转为用 - 分隔的字符串（如 boxSizing 转换为 box-sizing）
 * @param string
 */


function toKebabCase(string) {
  return string.replace(/[A-Z]/g, replacer => '-' + replacer.toLowerCase());
}
/**
 * 获取元素的样式值
 * @param element
 * @param name
 */


function getComputedStyleValue(element, name) {
  return window.getComputedStyle(element).getPropertyValue(toKebabCase(name));
}
/**
 * 检查元素的 box-sizing 是否是 border-box
 * @param element
 */


function isBorderBox(element) {
  return getComputedStyleValue(element, 'box-sizing') === 'border-box';
}
/**
 * 获取元素的 padding, border, margin 宽度（两侧宽度的和，单位为px）
 * @param element
 * @param direction
 * @param extra
 */


function getExtraWidth(element, direction, extra) {
  const position = direction === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  return [0, 1].reduce((prev, _, index) => {
    let prop = extra + position[index];

    if (extra === 'border') {
      prop += 'Width';
    }

    return prev + parseFloat(getComputedStyleValue(element, prop) || '0');
  }, 0);
}
/**
 * 获取元素的样式值，对 width 和 height 进行过处理
 * @param element
 * @param name
 */


function getStyle(element, name) {
  // width、height 属性使用 getComputedStyle 得到的值不准确，需要使用 getBoundingClientRect 获取
  if (name === 'width' || name === 'height') {
    const valueNumber = element.getBoundingClientRect()[name];

    if (isBorderBox(element)) {
      return `${valueNumber}px`;
    }

    return `${valueNumber - getExtraWidth(element, name, 'border') - getExtraWidth(element, name, 'padding')}px`;
  }

  return getComputedStyleValue(element, name);
}
/**
 * 获取子节点组成的数组
 * @param target
 * @param parent
 */


function getChildNodesArray(target, parent) {
  const tempParent = document.createElement(parent);
  tempParent.innerHTML = target;
  return [].slice.call(tempParent.childNodes);
}
/**
 * 始终返回 false 的函数
 */


function returnFalse() {
  return false;
}
/**
 * 数值单位的 CSS 属性
 */


const cssNumber = ['animationIterationCount', 'columnCount', 'fillOpacity', 'flexGrow', 'flexShrink', 'fontWeight', 'gridArea', 'gridColumn', 'gridColumnEnd', 'gridColumnStart', 'gridRow', 'gridRowEnd', 'gridRowStart', 'lineHeight', 'opacity', 'order', 'orphans', 'widows', 'zIndex', 'zoom'];

function each(target, callback) {
  if (isArrayLike(target)) {
    for (let i = 0; i < target.length; i += 1) {
      if (callback.call(target[i], i, target[i]) === false) {
        return target;
      }
    }
  } else {
    const keys = Object.keys(target);

    for (let i = 0; i < keys.length; i += 1) {
      if (callback.call(target[keys[i]], keys[i], target[keys[i]]) === false) {
        return target;
      }
    }
  }

  return target;
}
/**
 * 为了使用模块扩充，这里不能使用默认导出
 */


class JQ {
  constructor(arr) {
    this.length = 0;

    if (!arr) {
      return this;
    }

    each(arr, (i, item) => {
      // @ts-ignore
      this[i] = item;
    });
    this.length = arr.length;
    return this;
  }

}

function get$() {
  const $ = function (selector) {
    if (!selector) {
      return new JQ();
    } // JQ


    if (selector instanceof JQ) {
      return selector;
    } // function


    if (isFunction(selector)) {
      if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
        selector.call(document, $);
      } else {
        document.addEventListener('DOMContentLoaded', () => selector.call(document, $), false);
      }

      return new JQ([document]);
    } // String


    if (isString(selector)) {
      const html = selector.trim(); // 根据 HTML 字符串创建 JQ 对象

      if (html[0] === '<' && html[html.length - 1] === '>') {
        let toCreate = 'div';
        const tags = {
          li: 'ul',
          tr: 'tbody',
          td: 'tr',
          th: 'tr',
          tbody: 'table',
          option: 'select'
        };
        each(tags, (childTag, parentTag) => {
          if (html.indexOf(`<${childTag}`) === 0) {
            toCreate = parentTag;
            return false;
          }

          return;
        });
        return new JQ(getChildNodesArray(html, toCreate));
      } // 根据 CSS 选择器创建 JQ 对象


      const isIdSelector = selector[0] === '#' && !selector.match(/[ .<>:~]/);

      if (!isIdSelector) {
        return new JQ(document.querySelectorAll(selector));
      }

      const element = document.getElementById(selector.slice(1));

      if (element) {
        return new JQ([element]);
      }

      return new JQ();
    }

    if (isArrayLike(selector) && !isNode(selector)) {
      return new JQ(selector);
    }

    return new JQ([selector]);
  };

  $.fn = JQ.prototype;
  return $;
}

const $ = get$();
const $document = $(document);
const $window = $(window);
const $body = $('body'); // 避免页面加载完后直接执行css动画
// https://css-tricks.com/transitions-only-after-page-load/

setTimeout(() => $body.addClass('mdui-loaded'));
const mdui = {
  $: $
};

$.fn.each = function (callback) {
  return each(this, callback);
};
/**
 * 检查 container 元素内是否包含 contains 元素
 * @param container 父元素
 * @param contains 子元素
 * @example
```js
contains( document, document.body ); // true
contains( document.getElementById('test'), document ); // false
contains( $('.container').get(0), $('.contains').get(0) ); // false
```
 */


function contains(container, contains) {
  return container !== contains && toElement(container).contains(contains);
}
/**
 * 把第二个数组的元素追加到第一个数组中，并返回合并后的数组
 * @param first 第一个数组
 * @param second 该数组的元素将被追加到第一个数组中
 * @example
```js
merge( [ 0, 1, 2 ], [ 2, 3, 4 ] )
// [ 0, 1, 2, 2, 3, 4 ]
```
 */


function merge(first, second) {
  each(second, (_, value) => {
    first.push(value);
  });
  return first;
}

$.fn.get = function (index) {
  return index === undefined ? [].slice.call(this) : this[index >= 0 ? index : index + this.length];
};

$.fn.find = function (selector) {
  const foundElements = [];
  this.each((_, element) => {
    merge(foundElements, $(element.querySelectorAll(selector)).get());
  });
  return new JQ(foundElements);
}; // 存储事件


const handlers = {}; // 元素ID

let mduiElementId = 1;
/**
 * 为元素赋予一个唯一的ID
 */

function getElementId(element) {
  const key = '_mduiEventId'; // @ts-ignore

  if (!element[key]) {
    // @ts-ignore
    element[key] = ++mduiElementId;
  } // @ts-ignore


  return element[key];
}
/**
 * 解析事件名中的命名空间
 */


function parse(type) {
  const parts = type.split('.');
  return {
    type: parts[0],
    ns: parts.slice(1).sort().join(' ')
  };
}
/**
 * 命名空间匹配规则
 */


function matcherFor(ns) {
  return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
}
/**
 * 获取匹配的事件
 * @param element
 * @param type
 * @param func
 * @param selector
 */


function getHandlers(element, type, func, selector) {
  const event = parse(type);
  return (handlers[getElementId(element)] || []).filter(handler => handler && (!event.type || handler.type === event.type) && (!event.ns || matcherFor(event.ns).test(handler.ns)) && (!func || getElementId(handler.func) === getElementId(func)) && (!selector || handler.selector === selector));
}
/**
 * 添加事件监听
 * @param element
 * @param types
 * @param func
 * @param data
 * @param selector
 */


function add(element, types, func, data, selector) {
  const elementId = getElementId(element);

  if (!handlers[elementId]) {
    handlers[elementId] = [];
  } // 传入 data.useCapture 来设置 useCapture: true


  let useCapture = false;

  if (isObjectLike(data) && data.useCapture) {
    useCapture = true;
  }

  types.split(' ').forEach(type => {
    if (!type) {
      return;
    }

    const event = parse(type);

    function callFn(e, elem) {
      // 因为鼠标事件模拟事件的 detail 属性是只读的，因此在 e._detail 中存储参数
      const result = func.apply(elem, // @ts-ignore
      e._detail === undefined ? [e] : [e].concat(e._detail));

      if (result === false) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    function proxyFn(e) {
      // @ts-ignore
      if (e._ns && !matcherFor(e._ns).test(event.ns)) {
        return;
      } // @ts-ignore


      e._data = data;

      if (selector) {
        // 事件代理
        $(element).find(selector).get().reverse().forEach(elem => {
          if (elem === e.target || contains(elem, e.target)) {
            callFn(e, elem);
          }
        });
      } else {
        // 不使用事件代理
        callFn(e, element);
      }
    }

    const handler = {
      type: event.type,
      ns: event.ns,
      func,
      selector,
      id: handlers[elementId].length,
      proxy: proxyFn
    };
    handlers[elementId].push(handler);
    element.addEventListener(handler.type, proxyFn, useCapture);
  });
}
/**
 * 移除事件监听
 * @param element
 * @param types
 * @param func
 * @param selector
 */


function remove(element, types, func, selector) {
  const handlersInElement = handlers[getElementId(element)] || [];

  const removeEvent = handler => {
    delete handlersInElement[handler.id];
    element.removeEventListener(handler.type, handler.proxy, false);
  };

  if (!types) {
    handlersInElement.forEach(handler => removeEvent(handler));
  } else {
    types.split(' ').forEach(type => {
      if (type) {
        getHandlers(element, type, func, selector).forEach(handler => removeEvent(handler));
      }
    });
  }
}

$.fn.trigger = function (type, extraParameters) {
  const event = parse(type);
  let eventObject;
  const eventParams = {
    bubbles: true,
    cancelable: true
  };
  const isMouseEvent = ['click', 'mousedown', 'mouseup', 'mousemove'].indexOf(event.type) > -1;

  if (isMouseEvent) {
    // Note: MouseEvent 无法传入 detail 参数
    eventObject = new MouseEvent(event.type, eventParams);
  } else {
    eventParams.detail = extraParameters;
    eventObject = new CustomEvent(event.type, eventParams);
  } // @ts-ignore


  eventObject._detail = extraParameters; // @ts-ignore

  eventObject._ns = event.ns;
  return this.each(function () {
    this.dispatchEvent(eventObject);
  });
};

function extend(target, object1, ...objectN) {
  objectN.unshift(object1);
  each(objectN, (_, object) => {
    each(object, (prop, value) => {
      if (!isUndefined(value)) {
        target[prop] = value;
      }
    });
  });
  return target;
}
/**
 * 将数组或对象序列化，序列化后的字符串可作为 URL 查询字符串使用
 *
 * 若传入数组，则格式必须和 serializeArray 方法的返回值一样
 * @param obj 对象或数组
 * @example
```js
param({ width: 1680, height: 1050 });
// width=1680&height=1050
```
 * @example
```js
param({ foo: { one: 1, two: 2 }})
// foo[one]=1&foo[two]=2
```
 * @example
```js
param({ids: [1, 2, 3]})
// ids[]=1&ids[]=2&ids[]=3
```
 * @example
```js
param([
  {"name":"name","value":"mdui"},
  {"name":"password","value":"123456"}
])
// name=mdui&password=123456
```
 */


function param(obj) {
  if (!isObjectLike(obj) && !Array.isArray(obj)) {
    return '';
  }

  const args = [];

  function destructure(key, value) {
    let keyTmp;

    if (isObjectLike(value)) {
      each(value, (i, v) => {
        if (Array.isArray(value) && !isObjectLike(v)) {
          keyTmp = '';
        } else {
          keyTmp = i;
        }

        destructure(`${key}[${keyTmp}]`, v);
      });
    } else {
      if (value == null || value === '') {
        keyTmp = '=';
      } else {
        keyTmp = `=${encodeURIComponent(value)}`;
      }

      args.push(encodeURIComponent(key) + keyTmp);
    }
  }

  if (Array.isArray(obj)) {
    each(obj, function () {
      destructure(this.name, this.value);
    });
  } else {
    each(obj, destructure);
  }

  return args.join('&');
} // 全局配置参数


const globalOptions = {}; // 全局事件名

const ajaxEvents = {
  ajaxStart: 'start.mdui.ajax',
  ajaxSuccess: 'success.mdui.ajax',
  ajaxError: 'error.mdui.ajax',
  ajaxComplete: 'complete.mdui.ajax'
};
/**
 * 判断此请求方法是否通过查询字符串提交参数
 * @param method 请求方法，大写
 */

function isQueryStringData(method) {
  return ['GET', 'HEAD'].indexOf(method) >= 0;
}
/**
 * 添加参数到 URL 上，且 URL 中不存在 ? 时，自动把第一个 & 替换为 ?
 * @param url
 * @param query
 */


function appendQuery(url, query) {
  return `${url}&${query}`.replace(/[&?]{1,2}/, '?');
}
/**
 * 合并请求参数，参数优先级：options > globalOptions > defaults
 * @param options
 */


function mergeOptions(options) {
  // 默认参数
  const defaults = {
    url: '',
    method: 'GET',
    data: '',
    processData: true,
    async: true,
    cache: true,
    username: '',
    password: '',
    headers: {},
    xhrFields: {},
    statusCode: {},
    dataType: 'text',
    contentType: 'application/x-www-form-urlencoded',
    timeout: 0,
    global: true
  }; // globalOptions 中的回调函数不合并

  each(globalOptions, (key, value) => {
    const callbacks = ['beforeSend', 'success', 'error', 'complete', 'statusCode']; // @ts-ignore

    if (callbacks.indexOf(key) < 0 && !isUndefined(value)) {
      defaults[key] = value;
    }
  });
  return extend({}, defaults, options);
}
/**
 * 发送 ajax 请求
 * @param options
 * @example
```js
ajax({
  method: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
}).then(function( msg ) {
  alert( "Data Saved: " + msg );
});
```
 */


function ajax(options) {
  // 是否已取消请求
  let isCanceled = false; // 事件参数

  const eventParams = {}; // 参数合并

  const mergedOptions = mergeOptions(options);
  let url = mergedOptions.url || window.location.toString();
  const method = mergedOptions.method.toUpperCase();
  let data = mergedOptions.data;
  const processData = mergedOptions.processData;
  const async = mergedOptions.async;
  const cache = mergedOptions.cache;
  const username = mergedOptions.username;
  const password = mergedOptions.password;
  const headers = mergedOptions.headers;
  const xhrFields = mergedOptions.xhrFields;
  const statusCode = mergedOptions.statusCode;
  const dataType = mergedOptions.dataType;
  const contentType = mergedOptions.contentType;
  const timeout = mergedOptions.timeout;
  const global = mergedOptions.global; // 需要发送的数据
  // GET/HEAD 请求和 processData 为 true 时，转换为查询字符串格式，特殊格式不转换

  if (data && (isQueryStringData(method) || processData) && !isString(data) && !(data instanceof ArrayBuffer) && !(data instanceof Blob) && !(data instanceof Document) && !(data instanceof FormData)) {
    data = param(data);
  } // 对于 GET、HEAD 类型的请求，把 data 数据添加到 URL 中


  if (data && isQueryStringData(method)) {
    // 查询字符串拼接到 URL 中
    url = appendQuery(url, data);
    data = null;
  }
  /**
   * 触发事件和回调函数
   * @param event
   * @param params
   * @param callback
   * @param args
   */


  function trigger(event, params, callback, ...args) {
    // 触发全局事件
    if (global) {
      $(document).trigger(event, params);
    } // 触发 ajax 回调和事件


    let result1;
    let result2;

    if (callback) {
      // 全局回调
      if (callback in globalOptions) {
        // @ts-ignore
        result1 = globalOptions[callback](...args);
      } // 自定义回调


      if (mergedOptions[callback]) {
        // @ts-ignore
        result2 = mergedOptions[callback](...args);
      } // beforeSend 回调返回 false 时取消 ajax 请求


      if (callback === 'beforeSend' && (result1 === false || result2 === false)) {
        isCanceled = true;
      }
    }
  } // XMLHttpRequest 请求


  function XHR() {
    let textStatus;
    return new Promise((resolve, reject) => {
      // GET/HEAD 请求的缓存处理
      if (isQueryStringData(method) && !cache) {
        url = appendQuery(url, `_=${Date.now()}`);
      } // 创建 XHR


      const xhr = new XMLHttpRequest();
      xhr.open(method, url, async, username, password);

      if (contentType || data && !isQueryStringData(method) && contentType !== false) {
        xhr.setRequestHeader('Content-Type', contentType);
      } // 设置 Accept


      if (dataType === 'json') {
        xhr.setRequestHeader('Accept', 'application/json, text/javascript');
      } // 添加 headers


      if (headers) {
        each(headers, (key, value) => {
          // undefined 值不发送，string 和 null 需要发送
          if (!isUndefined(value)) {
            xhr.setRequestHeader(key, value + ''); // 把 null 转换成字符串
          }
        });
      } // 检查是否是跨域请求，跨域请求时不添加 X-Requested-With


      const crossDomain = /^([\w-]+:)?\/\/([^/]+)/.test(url) && RegExp.$2 !== window.location.host;

      if (!crossDomain) {
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      }

      if (xhrFields) {
        each(xhrFields, (key, value) => {
          // @ts-ignore
          xhr[key] = value;
        });
      }

      eventParams.xhr = xhr;
      eventParams.options = mergedOptions;
      let xhrTimeout;

      xhr.onload = function () {
        if (xhrTimeout) {
          clearTimeout(xhrTimeout);
        } // AJAX 返回的 HTTP 响应码是否表示成功


        const isHttpStatusSuccess = xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 || xhr.status === 0;
        let responseData;

        if (isHttpStatusSuccess) {
          if (xhr.status === 204 || method === 'HEAD') {
            textStatus = 'nocontent';
          } else if (xhr.status === 304) {
            textStatus = 'notmodified';
          } else {
            textStatus = 'success';
          }

          if (dataType === 'json') {
            try {
              responseData = method === 'HEAD' ? undefined : JSON.parse(xhr.responseText);
              eventParams.data = responseData;
            } catch (err) {
              textStatus = 'parsererror';
              trigger(ajaxEvents.ajaxError, eventParams, 'error', xhr, textStatus);
              reject(new Error(textStatus));
            }

            if (textStatus !== 'parsererror') {
              trigger(ajaxEvents.ajaxSuccess, eventParams, 'success', responseData, textStatus, xhr);
              resolve(responseData);
            }
          } else {
            responseData = method === 'HEAD' ? undefined : xhr.responseType === 'text' || xhr.responseType === '' ? xhr.responseText : xhr.response;
            eventParams.data = responseData;
            trigger(ajaxEvents.ajaxSuccess, eventParams, 'success', responseData, textStatus, xhr);
            resolve(responseData);
          }
        } else {
          textStatus = 'error';
          trigger(ajaxEvents.ajaxError, eventParams, 'error', xhr, textStatus);
          reject(new Error(textStatus));
        } // statusCode


        each([globalOptions.statusCode, statusCode], (_, func) => {
          if (func && func[xhr.status]) {
            if (isHttpStatusSuccess) {
              func[xhr.status](responseData, textStatus, xhr);
            } else {
              func[xhr.status](xhr, textStatus);
            }
          }
        });
        trigger(ajaxEvents.ajaxComplete, eventParams, 'complete', xhr, textStatus);
      };

      xhr.onerror = function () {
        if (xhrTimeout) {
          clearTimeout(xhrTimeout);
        }

        trigger(ajaxEvents.ajaxError, eventParams, 'error', xhr, xhr.statusText);
        trigger(ajaxEvents.ajaxComplete, eventParams, 'complete', xhr, 'error');
        reject(new Error(xhr.statusText));
      };

      xhr.onabort = function () {
        let statusText = 'abort';

        if (xhrTimeout) {
          statusText = 'timeout';
          clearTimeout(xhrTimeout);
        }

        trigger(ajaxEvents.ajaxError, eventParams, 'error', xhr, statusText);
        trigger(ajaxEvents.ajaxComplete, eventParams, 'complete', xhr, statusText);
        reject(new Error(statusText));
      }; // ajax start 回调


      trigger(ajaxEvents.ajaxStart, eventParams, 'beforeSend', xhr);

      if (isCanceled) {
        reject(new Error('cancel'));
        return;
      } // Timeout


      if (timeout > 0) {
        xhrTimeout = setTimeout(() => {
          xhr.abort();
        }, timeout);
      } // 发送 XHR


      xhr.send(data);
    });
  }

  return XHR();
}

$.ajax = ajax;
/**
 * 为 Ajax 请求设置全局配置参数
 * @param options 键值对参数
 * @example
```js
ajaxSetup({
  dataType: 'json',
  method: 'POST',
});
```
 */

function ajaxSetup(options) {
  return extend(globalOptions, options);
}

$.ajaxSetup = ajaxSetup;
$.contains = contains;
const dataNS = '_mduiElementDataStorage';
/**
 * 在元素上设置键值对数据
 * @param element
 * @param object
 */

function setObjectToElement(element, object) {
  // @ts-ignore
  if (!element[dataNS]) {
    // @ts-ignore
    element[dataNS] = {};
  }

  each(object, (key, value) => {
    // @ts-ignore
    element[dataNS][toCamelCase(key)] = value;
  });
}

function data(element, key, value) {
  // 根据键值对设置值
  // data(element, { 'key' : 'value' })
  if (isObjectLike(key)) {
    setObjectToElement(element, key);
    return key;
  } // 根据 key、value 设置值
  // data(element, 'key', 'value')


  if (!isUndefined(value)) {
    setObjectToElement(element, {
      [key]: value
    });
    return value;
  } // 获取所有值
  // data(element)


  if (isUndefined(key)) {
    // @ts-ignore
    return element[dataNS] ? element[dataNS] : {};
  } // 从 dataNS 中获取指定值
  // data(element, 'key')


  key = toCamelCase(key); // @ts-ignore

  if (element[dataNS] && key in element[dataNS]) {
    // @ts-ignore
    return element[dataNS][key];
  }

  return undefined;
}

$.data = data;
$.each = each;

$.extend = function (...objectN) {
  if (objectN.length === 1) {
    each(objectN[0], (prop, value) => {
      this[prop] = value;
    });
    return this;
  }

  return extend(objectN.shift(), objectN.shift(), ...objectN);
};

function map(elements, callback) {
  let value;
  const ret = [];
  each(elements, (i, element) => {
    value = callback.call(window, element, i);

    if (value != null) {
      ret.push(value);
    }
  });
  return [].concat(...ret);
}

$.map = map;
$.merge = merge;
$.param = param;
/**
 * 移除指定元素上存放的数据
 * @param element 存放数据的元素
 * @param name
 * 数据键名
 *
 * 若未指定键名，将移除元素上所有数据
 *
 * 多个键名可以用空格分隔，或者用数组表示多个键名
  @example
```js
// 移除元素上键名为 name 的数据
removeData(document.body, 'name');
```
 * @example
```js
// 移除元素上键名为 name1 和 name2 的数据
removeData(document.body, 'name1 name2');
```
 * @example
```js
// 移除元素上键名为 name1 和 name2 的数据
removeData(document.body, ['name1', 'name2']);
```
 * @example
```js
// 移除元素上所有数据
removeData(document.body);
```
 */

function removeData(element, name) {
  // @ts-ignore
  if (!element[dataNS]) {
    return;
  }

  const remove = nameItem => {
    nameItem = toCamelCase(nameItem); // @ts-ignore

    if (element[dataNS][nameItem]) {
      // @ts-ignore
      element[dataNS][nameItem] = null; // @ts-ignore

      delete element[dataNS][nameItem];
    }
  };

  if (isUndefined(name)) {
    // @ts-ignore
    element[dataNS] = null; // @ts-ignore

    delete element[dataNS]; // @ts-ignore
  } else if (isString(name)) {
    name.split(' ').filter(nameItem => nameItem).forEach(nameItem => remove(nameItem));
  } else {
    each(name, (_, nameItem) => remove(nameItem));
  }
}

$.removeData = removeData;
/**
 * 过滤掉数组中的重复元素
 * @param arr 数组
 * @example
```js
unique([1, 2, 12, 3, 2, 1, 2, 1, 1]);
// [1, 2, 12, 3]
```
 */

function unique(arr) {
  const result = [];
  each(arr, (_, val) => {
    if (result.indexOf(val) === -1) {
      result.push(val);
    }
  });
  return result;
}

$.unique = unique;

$.fn.add = function (selector) {
  return new JQ(unique(merge(this.get(), $(selector).get())));
};

each(['add', 'remove', 'toggle'], (_, name) => {
  $.fn[`${name}Class`] = function (className) {
    if (name === 'remove' && !arguments.length) {
      return this.each((_, element) => {
        element.setAttribute('class', '');
      });
    }

    return this.each((i, element) => {
      if (!isElement(element)) {
        return;
      }

      const classes = (isFunction(className) ? className.call(element, i, element.getAttribute('class') || '') : className).split(' ').filter(name => name);
      each(classes, (_, cls) => {
        element.classList[name](cls);
      });
    });
  };
});
each(['insertBefore', 'insertAfter'], (nameIndex, name) => {
  $.fn[name] = function (target) {
    const $element = nameIndex ? $(this.get().reverse()) : this; // 顺序和 jQuery 保持一致

    const $target = $(target);
    const result = [];
    $target.each((index, target) => {
      if (!target.parentNode) {
        return;
      }

      $element.each((_, element) => {
        const newItem = index ? element.cloneNode(true) : element;
        const existingItem = nameIndex ? target.nextSibling : target;
        result.push(newItem);
        target.parentNode.insertBefore(newItem, existingItem);
      });
    });
    return $(nameIndex ? result.reverse() : result);
  };
});
/**
 * 是否不是 HTML 字符串（包裹在 <> 中）
 * @param target
 */

function isPlainText(target) {
  return isString(target) && (target[0] !== '<' || target[target.length - 1] !== '>');
}

each(['before', 'after'], (nameIndex, name) => {
  $.fn[name] = function (...args) {
    // after 方法，多个参数需要按参数顺序添加到元素后面，所以需要将参数顺序反向处理
    if (nameIndex === 1) {
      args = args.reverse();
    }

    return this.each((index, element) => {
      const targets = isFunction(args[0]) ? [args[0].call(element, index, element.innerHTML)] : args;
      each(targets, (_, target) => {
        let $target;

        if (isPlainText(target)) {
          $target = $(getChildNodesArray(target, 'div'));
        } else if (index && isElement(target)) {
          $target = $(target.cloneNode(true));
        } else {
          $target = $(target);
        }

        $target[nameIndex ? 'insertAfter' : 'insertBefore'](element);
      });
    });
  };
});

$.fn.off = function (types, selector, callback) {
  // types 是对象
  if (isObjectLike(types)) {
    each(types, (type, fn) => {
      // this.off('click', undefined, function () {})
      // this.off('click', '.box', function () {})
      this.off(type, selector, fn);
    });
    return this;
  } // selector 不存在


  if (selector === false || isFunction(selector)) {
    callback = selector;
    selector = undefined; // this.off('click', undefined, function () {})
  } // callback 传入 `false`，相当于 `return false`


  if (callback === false) {
    callback = returnFalse;
  }

  return this.each(function () {
    remove(this, types, callback, selector);
  });
};

$.fn.on = function (types, selector, data, callback, one) {
  // types 可以是 type/func 对象
  if (isObjectLike(types)) {
    // (types-Object, selector, data)
    if (!isString(selector)) {
      // (types-Object, data)
      data = data || selector;
      selector = undefined;
    }

    each(types, (type, fn) => {
      // selector 和 data 都可能是 undefined
      // @ts-ignore
      this.on(type, selector, data, fn, one);
    });
    return this;
  }

  if (data == null && callback == null) {
    // (types, fn)
    callback = selector;
    data = selector = undefined;
  } else if (callback == null) {
    if (isString(selector)) {
      // (types, selector, fn)
      callback = data;
      data = undefined;
    } else {
      // (types, data, fn)
      callback = data;
      data = selector;
      selector = undefined;
    }
  }

  if (callback === false) {
    callback = returnFalse;
  } else if (!callback) {
    return this;
  } // $().one()


  if (one) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;

    const origCallback = callback;

    callback = function (event) {
      _this.off(event.type, selector, callback); // eslint-disable-next-line prefer-rest-params


      return origCallback.apply(this, arguments);
    };
  }

  return this.each(function () {
    add(this, types, callback, data, selector);
  });
};

each(ajaxEvents, (name, eventName) => {
  $.fn[name] = function (fn) {
    return this.on(eventName, (e, params) => {
      fn(e, params.xhr, params.options, params.data);
    });
  };
});

$.fn.map = function (callback) {
  return new JQ(map(this, (element, i) => callback.call(element, i, element)));
};

$.fn.clone = function () {
  return this.map(function () {
    return this.cloneNode(true);
  });
};

$.fn.is = function (selector) {
  let isMatched = false;

  if (isFunction(selector)) {
    this.each((index, element) => {
      if (selector.call(element, index, element)) {
        isMatched = true;
      }
    });
    return isMatched;
  }

  if (isString(selector)) {
    this.each((_, element) => {
      if (isDocument(element) || isWindow(element)) {
        return;
      } // @ts-ignore


      const matches = element.matches || element.msMatchesSelector;

      if (matches.call(element, selector)) {
        isMatched = true;
      }
    });
    return isMatched;
  }

  const $compareWith = $(selector);
  this.each((_, element) => {
    $compareWith.each((_, compare) => {
      if (element === compare) {
        isMatched = true;
      }
    });
  });
  return isMatched;
};

$.fn.remove = function (selector) {
  return this.each((_, element) => {
    if (element.parentNode && (!selector || $(element).is(selector))) {
      element.parentNode.removeChild(element);
    }
  });
};

each(['prepend', 'append'], (nameIndex, name) => {
  $.fn[name] = function (...args) {
    return this.each((index, element) => {
      const childNodes = element.childNodes;
      const childLength = childNodes.length;
      const child = childLength ? childNodes[nameIndex ? childLength - 1 : 0] : document.createElement('div');

      if (!childLength) {
        element.appendChild(child);
      }

      let contents = isFunction(args[0]) ? [args[0].call(element, index, element.innerHTML)] : args; // 如果不是字符串，则仅第一个元素使用原始元素，其他的都克隆自第一个元素

      if (index) {
        contents = contents.map(content => {
          return isString(content) ? content : $(content).clone();
        });
      }

      $(child)[nameIndex ? 'after' : 'before'](...contents);

      if (!childLength) {
        element.removeChild(child);
      }
    });
  };
});
each(['appendTo', 'prependTo'], (nameIndex, name) => {
  $.fn[name] = function (target) {
    const extraChilds = [];
    const $target = $(target).map((_, element) => {
      const childNodes = element.childNodes;
      const childLength = childNodes.length;

      if (childLength) {
        return childNodes[nameIndex ? 0 : childLength - 1];
      }

      const child = document.createElement('div');
      element.appendChild(child);
      extraChilds.push(child);
      return child;
    });
    const $result = this[nameIndex ? 'insertBefore' : 'insertAfter']($target);
    $(extraChilds).remove();
    return $result;
  };
});
each(['attr', 'prop', 'css'], (nameIndex, name) => {
  function set(element, key, value) {
    // 值为 undefined 时，不修改
    if (isUndefined(value)) {
      return;
    }

    switch (nameIndex) {
      // attr
      case 0:
        if (isNull(value)) {
          element.removeAttribute(key);
        } else {
          element.setAttribute(key, value);
        }

        break;
      // prop

      case 1:
        // @ts-ignore
        element[key] = value;
        break;
      // css

      default:
        key = toCamelCase(key); // @ts-ignore

        element.style[key] = isNumber(value) ? `${value}${cssNumber.indexOf(key) > -1 ? '' : 'px'}` : value;
        break;
    }
  }

  function get(element, key) {
    switch (nameIndex) {
      // attr
      case 0:
        // 属性不存在时，原生 getAttribute 方法返回 null，而 jquery 返回 undefined。这里和 jquery 保持一致
        const value = element.getAttribute(key);
        return isNull(value) ? undefined : value;
      // prop

      case 1:
        // @ts-ignore
        return element[key];
      // css

      default:
        return getStyle(element, key);
    }
  }

  $.fn[name] = function (key, value) {
    if (isObjectLike(key)) {
      each(key, (k, v) => {
        // @ts-ignore
        this[name](k, v);
      });
      return this;
    }

    if (arguments.length === 1) {
      const element = this[0];
      return isElement(element) ? get(element, key) : undefined;
    }

    return this.each((i, element) => {
      set(element, key, isFunction(value) ? value.call(element, i, get(element, key)) : value);
    });
  };
});

$.fn.children = function (selector) {
  const children = [];
  this.each((_, element) => {
    each(element.childNodes, (__, childNode) => {
      if (!isElement(childNode)) {
        return;
      }

      if (!selector || $(childNode).is(selector)) {
        children.push(childNode);
      }
    });
  });
  return new JQ(unique(children));
};

$.fn.slice = function (...args) {
  return new JQ([].slice.apply(this, args));
};

$.fn.eq = function (index) {
  const ret = index === -1 ? this.slice(index) : this.slice(index, +index + 1);
  return new JQ(ret);
};

function dir($elements, nameIndex, node, selector, filter) {
  const ret = [];
  let target;
  $elements.each((_, element) => {
    target = element[node]; // 不能包含最顶层的 document 元素

    while (target && isElement(target)) {
      // prevUntil, nextUntil, parentsUntil
      if (nameIndex === 2) {
        if (selector && $(target).is(selector)) {
          break;
        }

        if (!filter || $(target).is(filter)) {
          ret.push(target);
        }
      } // prev, next, parent
      else if (nameIndex === 0) {
          if (!selector || $(target).is(selector)) {
            ret.push(target);
          }

          break;
        } // prevAll, nextAll, parents
        else {
            if (!selector || $(target).is(selector)) {
              ret.push(target);
            }
          } // @ts-ignore


      target = target[node];
    }
  });
  return new JQ(unique(ret));
}

each(['', 's', 'sUntil'], (nameIndex, name) => {
  $.fn[`parent${name}`] = function (selector, filter) {
    // parents、parentsUntil 需要把元素的顺序反向处理，以便和 jQuery 的结果一致
    const $nodes = !nameIndex ? this : $(this.get().reverse());
    return dir($nodes, nameIndex, 'parentNode', selector, filter);
  };
});

$.fn.closest = function (selector) {
  if (this.is(selector)) {
    return this;
  }

  const matched = [];
  this.parents().each((_, element) => {
    if ($(element).is(selector)) {
      matched.push(element);
      return false;
    }
  });
  return new JQ(matched);
};

const rbrace = /^(?:{[\w\W]*\}|\[[\w\W]*\])$/; // 从 `data-*` 中获取的值，需要经过该函数转换

function getData(value) {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  if (value === 'null') {
    return null;
  }

  if (value === +value + '') {
    return +value;
  }

  if (rbrace.test(value)) {
    return JSON.parse(value);
  }

  return value;
} // 若 value 不存在，则从 `data-*` 中获取值


function dataAttr(element, key, value) {
  if (isUndefined(value) && element.nodeType === 1) {
    const name = 'data-' + toKebabCase(key);
    value = element.getAttribute(name);

    if (isString(value)) {
      try {
        value = getData(value);
      } catch (e) {}
    } else {
      value = undefined;
    }
  }

  return value;
}

$.fn.data = function (key, value) {
  // 获取所有值
  if (isUndefined(key)) {
    if (!this.length) {
      return undefined;
    }

    const element = this[0];
    const resultData = data(element); // window, document 上不存在 `data-*` 属性

    if (element.nodeType !== 1) {
      return resultData;
    } // 从 `data-*` 中获取值


    const attrs = element.attributes;
    let i = attrs.length;

    while (i--) {
      if (attrs[i]) {
        let name = attrs[i].name;

        if (name.indexOf('data-') === 0) {
          name = toCamelCase(name.slice(5));
          resultData[name] = dataAttr(element, name, resultData[name]);
        }
      }
    }

    return resultData;
  } // 同时设置多个值


  if (isObjectLike(key)) {
    return this.each(function () {
      data(this, key);
    });
  } // value 传入了 undefined


  if (arguments.length === 2 && isUndefined(value)) {
    return this;
  } // 设置值


  if (!isUndefined(value)) {
    return this.each(function () {
      data(this, key, value);
    });
  } // 获取值


  if (!this.length) {
    return undefined;
  }

  return dataAttr(this[0], key, data(this[0], key));
};

$.fn.empty = function () {
  return this.each(function () {
    this.innerHTML = '';
  });
};

$.fn.extend = function (obj) {
  each(obj, (prop, value) => {
    // 在 JQ 对象上扩展方法时，需要自己添加 typescript 的类型定义
    $.fn[prop] = value;
  });
  return this;
};

$.fn.filter = function (selector) {
  if (isFunction(selector)) {
    return this.map((index, element) => selector.call(element, index, element) ? element : undefined);
  }

  if (isString(selector)) {
    return this.map((_, element) => $(element).is(selector) ? element : undefined);
  }

  const $selector = $(selector);
  return this.map((_, element) => $selector.get().indexOf(element) > -1 ? element : undefined);
};

$.fn.first = function () {
  return this.eq(0);
};

$.fn.has = function (selector) {
  const $targets = isString(selector) ? this.find(selector) : $(selector);
  const {
    length
  } = $targets;
  return this.map(function () {
    for (let i = 0; i < length; i += 1) {
      if (contains(this, $targets[i])) {
        return this;
      }
    }

    return;
  });
};

$.fn.hasClass = function (className) {
  return this[0].classList.contains(className);
};
/**
 * 值上面的 padding、border、margin 处理
 * @param element
 * @param name
 * @param value
 * @param funcIndex
 * @param includeMargin
 * @param multiply
 */


function handleExtraWidth(element, name, value, funcIndex, includeMargin, multiply) {
  // 获取元素的 padding, border, margin 宽度（两侧宽度的和）
  const getExtraWidthValue = extra => {
    return getExtraWidth(element, name.toLowerCase(), extra) * multiply;
  };

  if (funcIndex === 2 && includeMargin) {
    value += getExtraWidthValue('margin');
  }

  if (isBorderBox(element)) {
    // IE 为 box-sizing: border-box 时，得到的值不含 border 和 padding，这里先修复
    // 仅获取时需要处理，multiply === 1 为 get
    if (isIE() && multiply === 1) {
      value += getExtraWidthValue('border');
      value += getExtraWidthValue('padding');
    }

    if (funcIndex === 0) {
      value -= getExtraWidthValue('border');
    }

    if (funcIndex === 1) {
      value -= getExtraWidthValue('border');
      value -= getExtraWidthValue('padding');
    }
  } else {
    if (funcIndex === 0) {
      value += getExtraWidthValue('padding');
    }

    if (funcIndex === 2) {
      value += getExtraWidthValue('border');
      value += getExtraWidthValue('padding');
    }
  }

  return value;
}
/**
 * 获取元素的样式值
 * @param element
 * @param name
 * @param funcIndex 0: innerWidth, innerHeight; 1: width, height; 2: outerWidth, outerHeight
 * @param includeMargin
 */


function get(element, name, funcIndex, includeMargin) {
  const clientProp = `client${name}`;
  const scrollProp = `scroll${name}`;
  const offsetProp = `offset${name}`;
  const innerProp = `inner${name}`; // $(window).width()

  if (isWindow(element)) {
    // outerWidth, outerHeight 需要包含滚动条的宽度
    return funcIndex === 2 ? element[innerProp] : toElement(document)[clientProp];
  } // $(document).width()


  if (isDocument(element)) {
    const doc = toElement(element);
    return Math.max( // @ts-ignore
    element.body[scrollProp], doc[scrollProp], // @ts-ignore
    element.body[offsetProp], doc[offsetProp], doc[clientProp]);
  }

  const value = parseFloat(getComputedStyleValue(element, name.toLowerCase()) || '0');
  return handleExtraWidth(element, name, value, funcIndex, includeMargin, 1);
}
/**
 * 设置元素的样式值
 * @param element
 * @param elementIndex
 * @param name
 * @param funcIndex 0: innerWidth, innerHeight; 1: width, height; 2: outerWidth, outerHeight
 * @param includeMargin
 * @param value
 */


function set(element, elementIndex, name, funcIndex, includeMargin, value) {
  let computedValue = isFunction(value) ? value.call(element, elementIndex, get(element, name, funcIndex, includeMargin)) : value;

  if (computedValue == null) {
    return;
  }

  const $element = $(element);
  const dimension = name.toLowerCase(); // 特殊的值，不需要计算 padding、border、margin

  if (['auto', 'inherit', ''].indexOf(computedValue) > -1) {
    $element.css(dimension, computedValue);
    return;
  } // 其他值保留原始单位。注意：如果不使用 px 作为单位，则算出的值一般是不准确的


  const suffix = computedValue.toString().replace(/\b[0-9.]*/, '');
  const numerical = parseFloat(computedValue);
  computedValue = handleExtraWidth(element, name, numerical, funcIndex, includeMargin, -1) + (suffix || 'px');
  $element.css(dimension, computedValue);
}

each(['Width', 'Height'], (_, name) => {
  each([`inner${name}`, name.toLowerCase(), `outer${name}`], (funcIndex, funcName) => {
    $.fn[funcName] = function (margin, value) {
      // 是否是赋值操作
      const isSet = arguments.length && (funcIndex < 2 || !isBoolean(margin));
      const includeMargin = margin === true || value === true; // 获取第一个元素的值

      if (!isSet) {
        return this.length ? get(this[0], name, funcIndex, includeMargin) : undefined;
      } // 设置每个元素的值


      return this.each((index, element) => set(element, index, name, funcIndex, includeMargin, margin));
    };
  });
});

$.fn.hide = function () {
  return this.each(function () {
    this.style.display = 'none';
  });
};

each(['val', 'html', 'text'], (nameIndex, name) => {
  const props = {
    0: 'value',
    1: 'innerHTML',
    2: 'textContent'
  };
  const propName = props[nameIndex];

  function get($elements) {
    // text() 获取所有元素的文本
    if (nameIndex === 2) {
      // @ts-ignore
      return map($elements, element => toElement(element)[propName]).join('');
    } // 空集合时，val() 和 html() 返回 undefined


    if (!$elements.length) {
      return undefined;
    } // val() 和 html() 仅获取第一个元素的内容


    const firstElement = $elements[0]; // select multiple 返回数组

    if (nameIndex === 0 && $(firstElement).is('select[multiple]')) {
      return map($(firstElement).find('option:checked'), element => element.value);
    } // @ts-ignore


    return firstElement[propName];
  }

  function set(element, value) {
    // text() 和 html() 赋值为 undefined，则保持原内容不变
    // val() 赋值为 undefined 则赋值为空
    if (isUndefined(value)) {
      if (nameIndex !== 0) {
        return;
      }

      value = '';
    }

    if (nameIndex === 1 && isElement(value)) {
      value = value.outerHTML;
    } // @ts-ignore


    element[propName] = value;
  }

  $.fn[name] = function (value) {
    // 获取值
    if (!arguments.length) {
      return get(this);
    } // 设置值


    return this.each((i, element) => {
      const computedValue = isFunction(value) ? value.call(element, i, get($(element))) : value; // value 是数组，则选中数组中的元素，反选不在数组中的元素

      if (nameIndex === 0 && Array.isArray(computedValue)) {
        // select[multiple]
        if ($(element).is('select[multiple]')) {
          map($(element).find('option'), option => option.selected = computedValue.indexOf(option.value) > -1);
        } // 其他 checkbox, radio 等元素
        else {
            element.checked = computedValue.indexOf(element.value) > -1;
          }
      } else {
        set(element, computedValue);
      }
    });
  };
});

$.fn.index = function (selector) {
  if (!arguments.length) {
    return this.eq(0).parent().children().get().indexOf(this[0]);
  }

  if (isString(selector)) {
    return $(selector).get().indexOf(this[0]);
  }

  return this.get().indexOf($(selector)[0]);
};

$.fn.last = function () {
  return this.eq(-1);
};

each(['', 'All', 'Until'], (nameIndex, name) => {
  $.fn[`next${name}`] = function (selector, filter) {
    return dir(this, nameIndex, 'nextElementSibling', selector, filter);
  };
});

$.fn.not = function (selector) {
  const $excludes = this.filter(selector);
  return this.map((_, element) => $excludes.index(element) > -1 ? undefined : element);
};
/**
 * 返回最近的用于定位的父元素
 */


$.fn.offsetParent = function () {
  return this.map(function () {
    let offsetParent = this.offsetParent;

    while (offsetParent && $(offsetParent).css('position') === 'static') {
      offsetParent = offsetParent.offsetParent;
    }

    return offsetParent || document.documentElement;
  });
};

function floatStyle($element, name) {
  return parseFloat($element.css(name));
}

$.fn.position = function () {
  if (!this.length) {
    return undefined;
  }

  const $element = this.eq(0);
  let currentOffset;
  let parentOffset = {
    left: 0,
    top: 0
  };

  if ($element.css('position') === 'fixed') {
    currentOffset = $element[0].getBoundingClientRect();
  } else {
    currentOffset = $element.offset();
    const $offsetParent = $element.offsetParent();
    parentOffset = $offsetParent.offset();
    parentOffset.top += floatStyle($offsetParent, 'border-top-width');
    parentOffset.left += floatStyle($offsetParent, 'border-left-width');
  }

  return {
    top: currentOffset.top - parentOffset.top - floatStyle($element, 'margin-top'),
    left: currentOffset.left - parentOffset.left - floatStyle($element, 'margin-left')
  };
};

function get$1(element) {
  if (!element.getClientRects().length) {
    return {
      top: 0,
      left: 0
    };
  }

  const rect = element.getBoundingClientRect();
  const win = element.ownerDocument.defaultView;
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  };
}

function set$1(element, value, index) {
  const $element = $(element);
  const position = $element.css('position');

  if (position === 'static') {
    $element.css('position', 'relative');
  }

  const currentOffset = get$1(element);
  const currentTopString = $element.css('top');
  const currentLeftString = $element.css('left');
  let currentTop;
  let currentLeft;
  const calculatePosition = (position === 'absolute' || position === 'fixed') && (currentTopString + currentLeftString).indexOf('auto') > -1;

  if (calculatePosition) {
    const currentPosition = $element.position();
    currentTop = currentPosition.top;
    currentLeft = currentPosition.left;
  } else {
    currentTop = parseFloat(currentTopString);
    currentLeft = parseFloat(currentLeftString);
  }

  const computedValue = isFunction(value) ? value.call(element, index, extend({}, currentOffset)) : value;
  $element.css({
    top: computedValue.top != null ? computedValue.top - currentOffset.top + currentTop : undefined,
    left: computedValue.left != null ? computedValue.left - currentOffset.left + currentLeft : undefined
  });
}

$.fn.offset = function (value) {
  // 获取坐标
  if (!arguments.length) {
    if (!this.length) {
      return undefined;
    }

    return get$1(this[0]);
  } // 设置坐标


  return this.each(function (index) {
    set$1(this, value, index);
  });
};

$.fn.one = function (types, selector, data, callback) {
  // @ts-ignore
  return this.on(types, selector, data, callback, true);
};

each(['', 'All', 'Until'], (nameIndex, name) => {
  $.fn[`prev${name}`] = function (selector, filter) {
    // prevAll、prevUntil 需要把元素的顺序倒序处理，以便和 jQuery 的结果一致
    const $nodes = !nameIndex ? this : $(this.get().reverse());
    return dir($nodes, nameIndex, 'previousElementSibling', selector, filter);
  };
});

$.fn.removeAttr = function (attributeName) {
  const names = attributeName.split(' ').filter(name => name);
  return this.each(function () {
    each(names, (_, name) => {
      this.removeAttribute(name);
    });
  });
};

$.fn.removeData = function (name) {
  return this.each(function () {
    removeData(this, name);
  });
};

$.fn.removeProp = function (name) {
  return this.each(function () {
    try {
      // @ts-ignore
      delete this[name];
    } catch (e) {}
  });
};

$.fn.replaceWith = function (newContent) {
  this.each((index, element) => {
    let content = newContent;

    if (isFunction(content)) {
      content = content.call(element, index, element.innerHTML);
    } else if (index && !isString(content)) {
      content = $(content).clone();
    }

    $(element).before(content);
  });
  return this.remove();
};

$.fn.replaceAll = function (target) {
  return $(target).map((index, element) => {
    $(element).replaceWith(index ? this.clone() : this);
    return this.get();
  });
};
/**
 * 将表单元素的值组合成键值对数组
 * @returns {Array}
 */


$.fn.serializeArray = function () {
  const result = [];
  this.each((_, element) => {
    const elements = element instanceof HTMLFormElement ? element.elements : [element];
    $(elements).each((_, element) => {
      const $element = $(element);
      const type = element.type;
      const nodeName = element.nodeName.toLowerCase();

      if (nodeName !== 'fieldset' && element.name && !element.disabled && ['input', 'select', 'textarea', 'keygen'].indexOf(nodeName) > -1 && ['submit', 'button', 'image', 'reset', 'file'].indexOf(type) === -1 && (['radio', 'checkbox'].indexOf(type) === -1 || element.checked)) {
        const value = $element.val();
        const valueArr = Array.isArray(value) ? value : [value];
        valueArr.forEach(value => {
          result.push({
            name: element.name,
            value
          });
        });
      }
    });
  });
  return result;
};

$.fn.serialize = function () {
  return param(this.serializeArray());
};

const elementDisplay = {};
/**
 * 获取元素的初始 display 值，用于 .show() 方法
 * @param nodeName
 */

function defaultDisplay(nodeName) {
  let element;
  let display;

  if (!elementDisplay[nodeName]) {
    element = document.createElement(nodeName);
    document.body.appendChild(element);
    display = getStyle(element, 'display');
    element.parentNode.removeChild(element);

    if (display === 'none') {
      display = 'block';
    }

    elementDisplay[nodeName] = display;
  }

  return elementDisplay[nodeName];
}
/**
 * 显示指定元素
 * @returns {JQ}
 */


$.fn.show = function () {
  return this.each(function () {
    if (this.style.display === 'none') {
      this.style.display = '';
    }

    if (getStyle(this, 'display') === 'none') {
      this.style.display = defaultDisplay(this.nodeName);
    }
  });
};
/**
 * 取得同辈元素的集合
 * @param selector {String=}
 * @returns {JQ}
 */


$.fn.siblings = function (selector) {
  return this.prevAll(selector).add(this.nextAll(selector));
};
/**
 * 切换元素的显示状态
 */


$.fn.toggle = function () {
  return this.each(function () {
    getStyle(this, 'display') === 'none' ? $(this).show() : $(this).hide();
  });
};

$.fn.reflow = function () {
  return this.each(function () {
    return this.clientLeft;
  });
};

$.fn.transition = function (duration) {
  if (isNumber(duration)) {
    duration = `${duration}ms`;
  }

  return this.each(function () {
    this.style.webkitTransitionDuration = duration;
    this.style.transitionDuration = duration;
  });
};

$.fn.transitionEnd = function (callback) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const that = this;
  const events = ['webkitTransitionEnd', 'transitionend'];

  function fireCallback(e) {
    if (e.target !== this) {
      return;
    } // @ts-ignore


    callback.call(this, e);
    each(events, (_, event) => {
      that.off(event, fireCallback);
    });
  }

  each(events, (_, event) => {
    that.on(event, fireCallback);
  });
  return this;
};

$.fn.transformOrigin = function (transformOrigin) {
  return this.each(function () {
    this.style.webkitTransformOrigin = transformOrigin;
    this.style.transformOrigin = transformOrigin;
  });
};

$.fn.transform = function (transform) {
  return this.each(function () {
    this.style.webkitTransform = transform;
    this.style.transform = transform;
  });
};
/**
 * CSS 选择器和初始化函数组成的对象
 */


const entries = {};
/**
 * 注册并执行初始化函数
 * @param selector CSS 选择器
 * @param apiInit 初始化函数
 * @param i 元素索引
 * @param element 元素
 */

function mutation(selector, apiInit, i, element) {
  let selectors = data(element, '_mdui_mutation');

  if (!selectors) {
    selectors = [];
    data(element, '_mdui_mutation', selectors);
  }

  if (selectors.indexOf(selector) === -1) {
    selectors.push(selector);
    apiInit.call(element, i, element);
  }
}

$.fn.mutation = function () {
  return this.each((i, element) => {
    const $this = $(element);
    each(entries, (selector, apiInit) => {
      if ($this.is(selector)) {
        mutation(selector, apiInit, i, element);
      }

      $this.find(selector).each((i, element) => {
        mutation(selector, apiInit, i, element);
      });
    });
  });
};

$.showOverlay = function (zIndex) {
  let $overlay = $('.mdui-overlay');

  if ($overlay.length) {
    $overlay.data('_overlay_is_deleted', false);

    if (!isUndefined(zIndex)) {
      $overlay.css('z-index', zIndex);
    }
  } else {
    if (isUndefined(zIndex)) {
      zIndex = 2000;
    }

    $overlay = $('<div class="mdui-overlay">').appendTo(document.body).reflow().css('z-index', zIndex);
  }

  let level = $overlay.data('_overlay_level') || 0;
  return $overlay.data('_overlay_level', ++level).addClass('mdui-overlay-show');
};

$.hideOverlay = function (force = false) {
  const $overlay = $('.mdui-overlay');

  if (!$overlay.length) {
    return;
  }

  let level = force ? 1 : $overlay.data('_overlay_level');

  if (level > 1) {
    $overlay.data('_overlay_level', --level);
    return;
  }

  $overlay.data('_overlay_level', 0).removeClass('mdui-overlay-show').data('_overlay_is_deleted', true).transitionEnd(() => {
    if ($overlay.data('_overlay_is_deleted')) {
      $overlay.remove();
    }
  });
};

$.lockScreen = function () {
  // 不直接把 body 设为 box-sizing: border-box，避免污染全局样式
  const newBodyWidth = $body.width();
  let level = $body.data('_lockscreen_level') || 0;
  $body.addClass('mdui-locked').width(newBodyWidth).data('_lockscreen_level', ++level);
};

$.unlockScreen = function (force = false) {
  let level = force ? 1 : $body.data('_lockscreen_level');

  if (level > 1) {
    $body.data('_lockscreen_level', --level);
    return;
  }

  $body.data('_lockscreen_level', 0).removeClass('mdui-locked').width('');
};

$.throttle = function (fn, delay = 16) {
  let timer = null;
  return function (...args) {
    if (isNull(timer)) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  };
};

const GUID = {};

$.guid = function (name) {
  if (!isUndefined(name) && !isUndefined(GUID[name])) {
    return GUID[name];
  }

  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  const guid = '_' + s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();

  if (!isUndefined(name)) {
    GUID[name] = guid;
  }

  return guid;
};

mdui.mutation = function (selector, apiInit) {
  if (isUndefined(selector) || isUndefined(apiInit)) {
    $(document).mutation();
    return;
  }

  entries[selector] = apiInit;
  $(selector).each((i, element) => mutation(selector, apiInit, i, element));
};
/**
 * 触发组件上的事件
 * @param eventName 事件名
 * @param componentName 组件名
 * @param target 在该元素上触发事件
 * @param instance 组件实例
 * @param parameters 事件参数
 */


function componentEvent(eventName, componentName, target, instance, parameters) {
  if (!parameters) {
    parameters = {};
  } // @ts-ignore


  parameters.inst = instance;
  const fullEventName = `${eventName}.mdui.${componentName}`; // jQuery 事件
  // @ts-ignore

  if (typeof jQuery !== 'undefined') {
    // @ts-ignore
    jQuery(target).trigger(fullEventName, parameters);
  }

  const $target = $(target); // mdui.jq 事件

  $target.trigger(fullEventName, parameters);
  const eventParams = {
    bubbles: true,
    cancelable: true,
    detail: parameters
  };
  const eventObject = new CustomEvent(fullEventName, eventParams); // @ts-ignore

  eventObject._detail = parameters;
  $target[0].dispatchEvent(eventObject);
}

const DEFAULT_OPTIONS = {
  tolerance: 5,
  offset: 0,
  initialClass: 'mdui-headroom',
  pinnedClass: 'mdui-headroom-pinned-top',
  unpinnedClass: 'mdui-headroom-unpinned-top'
};

class Headroom {
  constructor(selector, options = {}) {
    /**
     * 配置参数
     */
    this.options = extend({}, DEFAULT_OPTIONS);
    /**
     * 当前 headroom 的状态
     */

    this.state = 'pinned';
    /**
     * 当前是否启用
     */

    this.isEnable = false;
    /**
     * 上次滚动后，垂直方向的距离
     */

    this.lastScrollY = 0;
    /**
     * AnimationFrame ID
     */

    this.rafId = 0;
    this.$element = $(selector).first();
    extend(this.options, options); // tolerance 参数若为数值，转换为对象

    const tolerance = this.options.tolerance;

    if (isNumber(tolerance)) {
      this.options.tolerance = {
        down: tolerance,
        up: tolerance
      };
    }

    this.enable();
  }
  /**
   * 滚动时的处理
   */


  onScroll() {
    this.rafId = window.requestAnimationFrame(() => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > this.lastScrollY ? 'down' : 'up';
      const tolerance = this.options.tolerance[direction];
      const scrolled = Math.abs(currentScrollY - this.lastScrollY);
      const toleranceExceeded = scrolled >= tolerance;

      if (currentScrollY > this.lastScrollY && currentScrollY >= this.options.offset && toleranceExceeded) {
        this.unpin();
      } else if (currentScrollY < this.lastScrollY && toleranceExceeded || currentScrollY <= this.options.offset) {
        this.pin();
      }

      this.lastScrollY = currentScrollY;
    });
  }
  /**
   * 触发组件事件
   * @param name
   */


  triggerEvent(name) {
    componentEvent(name, 'headroom', this.$element, this);
  }
  /**
   * 动画结束的回调
   */


  transitionEnd() {
    if (this.state === 'pinning') {
      this.state = 'pinned';
      this.triggerEvent('pinned');
    }

    if (this.state === 'unpinning') {
      this.state = 'unpinned';
      this.triggerEvent('unpinned');
    }
  }
  /**
   * 使元素固定住
   */


  pin() {
    if (this.state === 'pinning' || this.state === 'pinned' || !this.$element.hasClass(this.options.initialClass)) {
      return;
    }

    this.triggerEvent('pin');
    this.state = 'pinning';
    this.$element.removeClass(this.options.unpinnedClass).addClass(this.options.pinnedClass).transitionEnd(() => this.transitionEnd());
  }
  /**
   * 使元素隐藏
   */


  unpin() {
    if (this.state === 'unpinning' || this.state === 'unpinned' || !this.$element.hasClass(this.options.initialClass)) {
      return;
    }

    this.triggerEvent('unpin');
    this.state = 'unpinning';
    this.$element.removeClass(this.options.pinnedClass).addClass(this.options.unpinnedClass).transitionEnd(() => this.transitionEnd());
  }
  /**
   * 启用 headroom 插件
   */


  enable() {
    if (this.isEnable) {
      return;
    }

    this.isEnable = true;
    this.state = 'pinned';
    this.$element.addClass(this.options.initialClass).removeClass(this.options.pinnedClass).removeClass(this.options.unpinnedClass);
    this.lastScrollY = window.pageYOffset;
    $window.on('scroll', () => this.onScroll());
  }
  /**
   * 禁用 headroom 插件
   */


  disable() {
    if (!this.isEnable) {
      return;
    }

    this.isEnable = false;
    this.$element.removeClass(this.options.initialClass).removeClass(this.options.pinnedClass).removeClass(this.options.unpinnedClass);
    $window.off('scroll', () => this.onScroll());
    window.cancelAnimationFrame(this.rafId);
  }
  /**
   * 获取当前状态。共包含四种状态：`pinning`、`pinned`、`unpinning`、`unpinned`
   */


  getState() {
    return this.state;
  }

}

mdui.Headroom = Headroom;
/**
 * 解析 DATA API 参数
 * @param element 元素
 * @param name 属性名
 */

function parseOptions(element, name) {
  const attr = $(element).attr(name);

  if (!attr) {
    return {};
  }

  return new Function('', `var json = ${attr}; return JSON.parse(JSON.stringify(json));`)();
}

const customAttr = 'mdui-headroom';
$(() => {
  mdui.mutation(`[${customAttr}]`, function () {
    new mdui.Headroom(this, parseOptions(this, customAttr));
  });
});
const DEFAULT_OPTIONS$1 = {
  accordion: false
};

class CollapseAbstract {
  constructor(selector, options = {}) {
    /**
     * 配置参数
     */
    this.options = extend({}, DEFAULT_OPTIONS$1); // CSS 类名

    const classPrefix = `mdui-${this.getNamespace()}-item`;
    this.classItem = classPrefix;
    this.classItemOpen = `${classPrefix}-open`;
    this.classHeader = `${classPrefix}-header`;
    this.classBody = `${classPrefix}-body`;
    this.$element = $(selector).first();
    extend(this.options, options);
    this.bindEvent();
  }
  /**
   * 绑定事件
   */


  bindEvent() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    const $items = this.getItems(); // 点击 header 时，打开/关闭 item

    this.$element.on('click', `.${this.classHeader}`, function () {
      const $header = $(this);
      const $item = $header.parent();
      $items.each((_, item) => {
        if ($item.is(item)) {
          that.toggle(item);
        }
      });
    }); // 点击关闭按钮时，关闭 item

    this.$element.on('click', `[mdui-${this.getNamespace()}-item-close]`, function () {
      const $target = $(this);
      const $item = $target.parents(`.${that.classItem}`).first();
      that.close($item);
    });
  }
  /**
   * 指定 item 是否处于打开状态
   * @param $item
   */


  isOpen($item) {
    return $item.hasClass(this.classItemOpen);
  }
  /**
   * 获取所有 item
   */


  getItems() {
    return this.$element.children(`.${this.classItem}`);
  }
  /**
   * 获取指定 item
   * @param item
   */


  getItem(item) {
    if (isNumber(item)) {
      return this.getItems().eq(item);
    }

    return $(item).first();
  }
  /**
   * 触发组件事件
   * @param name 事件名
   * @param $item 事件触发的目标 item
   */


  triggerEvent(name, $item) {
    componentEvent(name, this.getNamespace(), $item, this);
  }
  /**
   * 动画结束回调
   * @param $content body 元素
   * @param $item item 元素
   */


  transitionEnd($content, $item) {
    if (this.isOpen($item)) {
      $content.transition(0).height('auto').reflow().transition('');
      this.triggerEvent('opened', $item);
    } else {
      $content.height('');
      this.triggerEvent('closed', $item);
    }
  }
  /**
   * 打开指定面板项
   * @param item 面板项的索引号、或 CSS 选择器、或 DOM 元素、或 JQ 对象
   */


  open(item) {
    const $item = this.getItem(item);

    if (this.isOpen($item)) {
      return;
    } // 关闭其他项


    if (this.options.accordion) {
      this.$element.children(`.${this.classItemOpen}`).each((_, element) => {
        const $element = $(element);

        if (!$element.is($item)) {
          this.close($element);
        }
      });
    }

    const $content = $item.children(`.${this.classBody}`);
    $content.height($content[0].scrollHeight).transitionEnd(() => this.transitionEnd($content, $item));
    this.triggerEvent('open', $item);
    $item.addClass(this.classItemOpen);
  }
  /**
   * 关闭指定面板项
   * @param item 面板项的索引号、或 CSS 选择器、或 DOM 元素、或 JQ 对象
   */


  close(item) {
    const $item = this.getItem(item);

    if (!this.isOpen($item)) {
      return;
    }

    const $content = $item.children(`.${this.classBody}`);
    this.triggerEvent('close', $item);
    $item.removeClass(this.classItemOpen);
    $content.transition(0).height($content[0].scrollHeight).reflow().transition('').height('').transitionEnd(() => this.transitionEnd($content, $item));
  }
  /**
   * 切换指定面板项的打开状态
   * @param item 面板项的索引号、或 CSS 选择器、或 DOM 元素、或 JQ 对象
   */


  toggle(item) {
    const $item = this.getItem(item);
    this.isOpen($item) ? this.close($item) : this.open($item);
  }
  /**
   * 打开所有面板项
   */


  openAll() {
    this.getItems().each((_, element) => this.open(element));
  }
  /**
   * 关闭所有面板项
   */


  closeAll() {
    this.getItems().each((_, element) => this.close(element));
  }

}

class Collapse extends CollapseAbstract {
  getNamespace() {
    return 'collapse';
  }

}

mdui.Collapse = Collapse;
const customAttr$1 = 'mdui-collapse';
$(() => {
  mdui.mutation(`[${customAttr$1}]`, function () {
    new mdui.Collapse(this, parseOptions(this, customAttr$1));
  });
});

class Panel extends CollapseAbstract {
  getNamespace() {
    return 'panel';
  }

}

mdui.Panel = Panel;
const customAttr$2 = 'mdui-panel';
$(() => {
  mdui.mutation(`[${customAttr$2}]`, function () {
    new mdui.Panel(this, parseOptions(this, customAttr$2));
  });
});

class Table {
  constructor(selector) {
    /**
     * 表头 tr 元素
     */
    this.$thRow = $();
    /**
     * 表格 body 中的 tr 元素
     */

    this.$tdRows = $();
    /**
     * 表头的 checkbox 元素
     */

    this.$thCheckbox = $();
    /**
     * 表格 body 中的 checkbox 元素
     */

    this.$tdCheckboxs = $();
    /**
     * 表格行是否可选择
     */

    this.selectable = false;
    /**
     * 已选中的行数
     */

    this.selectedRow = 0;
    this.$element = $(selector).first();
    this.init();
  }
  /**
   * 初始化表格
   */


  init() {
    this.$thRow = this.$element.find('thead tr');
    this.$tdRows = this.$element.find('tbody tr');
    this.selectable = this.$element.hasClass('mdui-table-selectable');
    this.updateThCheckbox();
    this.updateTdCheckbox();
    this.updateNumericCol();
  }
  /**
   * 生成 checkbox 的 HTML 结构
   * @param tag 标签名
   */


  createCheckboxHTML(tag) {
    return `<${tag} class="mdui-table-cell-checkbox">` + '<label class="mdui-checkbox">' + '<input type="checkbox"/>' + '<i class="mdui-checkbox-icon"></i>' + '</label>' + `</${tag}>`;
  }
  /**
   * 更新表头 checkbox 的状态
   */


  updateThCheckboxStatus() {
    const checkbox = this.$thCheckbox[0];
    const selectedRow = this.selectedRow;
    const tdRowsLength = this.$tdRows.length;
    checkbox.checked = selectedRow === tdRowsLength;
    checkbox.indeterminate = !!selectedRow && selectedRow !== tdRowsLength;
  }
  /**
   * 更新表格行的 checkbox
   */


  updateTdCheckbox() {
    const rowSelectedClass = 'mdui-table-row-selected';
    this.$tdRows.each((_, row) => {
      const $row = $(row); // 移除旧的 checkbox

      $row.find('.mdui-table-cell-checkbox').remove();

      if (!this.selectable) {
        return;
      } // 创建 DOM


      const $checkbox = $(this.createCheckboxHTML('td')).prependTo($row).find('input[type="checkbox"]'); // 默认选中的行

      if ($row.hasClass(rowSelectedClass)) {
        $checkbox[0].checked = true;
        this.selectedRow++;
      }

      this.updateThCheckboxStatus(); // 绑定事件

      $checkbox.on('change', () => {
        if ($checkbox[0].checked) {
          $row.addClass(rowSelectedClass);
          this.selectedRow++;
        } else {
          $row.removeClass(rowSelectedClass);
          this.selectedRow--;
        }

        this.updateThCheckboxStatus();
      });
      this.$tdCheckboxs = this.$tdCheckboxs.add($checkbox);
    });
  }
  /**
   * 更新表头的 checkbox
   */


  updateThCheckbox() {
    // 移除旧的 checkbox
    this.$thRow.find('.mdui-table-cell-checkbox').remove();

    if (!this.selectable) {
      return;
    }

    this.$thCheckbox = $(this.createCheckboxHTML('th')).prependTo(this.$thRow).find('input[type="checkbox"]').on('change', () => {
      const isCheckedAll = this.$thCheckbox[0].checked;
      this.selectedRow = isCheckedAll ? this.$tdRows.length : 0;
      this.$tdCheckboxs.each((_, checkbox) => {
        checkbox.checked = isCheckedAll;
      });
      this.$tdRows.each((_, row) => {
        isCheckedAll ? $(row).addClass('mdui-table-row-selected') : $(row).removeClass('mdui-table-row-selected');
      });
    });
  }
  /**
   * 更新数值列
   */


  updateNumericCol() {
    const numericClass = 'mdui-table-col-numeric';
    this.$thRow.find('th').each((i, th) => {
      const isNumericCol = $(th).hasClass(numericClass);
      this.$tdRows.each((_, row) => {
        const $td = $(row).find('td').eq(i);
        isNumericCol ? $td.addClass(numericClass) : $td.removeClass(numericClass);
      });
    });
  }

}

const dataName = '_mdui_table';
$(() => {
  mdui.mutation('.mdui-table', function () {
    const $element = $(this);

    if (!$element.data(dataName)) {
      $element.data(dataName, new Table($element));
    }
  });
});

mdui.updateTables = function (selector) {
  const $elements = isUndefined(selector) ? $('.mdui-table') : $(selector);
  $elements.each((_, element) => {
    const $element = $(element);
    const instance = $element.data(dataName);

    if (instance) {
      instance.init();
    } else {
      $element.data(dataName, new Table($element));
    }
  });
};
/**
 * touch 事件后的 500ms 内禁用 mousedown 事件
 *
 * 不支持触控的屏幕上事件顺序为 mousedown -> mouseup -> click
 * 支持触控的屏幕上事件顺序为 touchstart -> touchend -> mousedown -> mouseup -> click
 *
 * 在每一个事件中都使用 TouchHandler.isAllow(event) 判断事件是否可执行
 * 在 touchstart 和 touchmove、touchend、touchcancel
 *
 * (function () {
 *   $document
 *     .on(start, function (e) {
 *       if (!isAllow(e)) {
 *         return;
 *       }
 *       register(e);
 *       console.log(e.type);
 *     })
 *     .on(move, function (e) {
 *       if (!isAllow(e)) {
 *         return;
 *       }
 *       console.log(e.type);
 *     })
 *     .on(end, function (e) {
 *       if (!isAllow(e)) {
 *         return;
 *       }
 *       console.log(e.type);
 *     })
 *     .on(unlock, register);
 * })();
 */


const startEvent = 'touchstart mousedown';
const moveEvent = 'touchmove mousemove';
const endEvent = 'touchend mouseup';
const cancelEvent = 'touchcancel mouseleave';
const unlockEvent = 'touchend touchmove touchcancel';
let touches = 0;
/**
 * 该事件是否被允许，在执行事件前调用该方法判断事件是否可以执行
 * 若已触发 touch 事件，则阻止之后的鼠标事件
 * @param event
 */

function isAllow(event) {
  return !(touches && ['mousedown', 'mouseup', 'mousemove', 'click', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'].indexOf(event.type) > -1);
}
/**
 * 在 touchstart 和 touchmove、touchend、touchcancel 事件中调用该方法注册事件
 * @param event
 */


function register(event) {
  if (event.type === 'touchstart') {
    // 触发了 touch 事件
    touches += 1;
  } else if (['touchmove', 'touchend', 'touchcancel'].indexOf(event.type) > -1) {
    // touch 事件结束 500ms 后解除对鼠标事件的阻止
    setTimeout(function () {
      if (touches) {
        touches -= 1;
      }
    }, 500);
  }
}
/**
 * Inspired by https://github.com/nolimits4web/Framework7/blob/master/src/js/fast-clicks.js
 * https://github.com/nolimits4web/Framework7/blob/master/LICENSE
 *
 * Inspired by https://github.com/fians/Waves
 */

/**
 * 显示涟漪动画
 * @param event
 * @param $ripple
 */


function show(event, $ripple) {
  // 鼠标右键不产生涟漪
  if (event instanceof MouseEvent && event.button === 2) {
    return;
  } // 点击位置坐标


  const touchPosition = typeof TouchEvent !== 'undefined' && event instanceof TouchEvent && event.touches.length ? event.touches[0] : event;
  const touchStartX = touchPosition.pageX;
  const touchStartY = touchPosition.pageY; // 涟漪位置

  const offset = $ripple.offset();
  const height = $ripple.innerHeight();
  const width = $ripple.innerWidth();
  const center = {
    x: touchStartX - offset.left,
    y: touchStartY - offset.top
  };
  const diameter = Math.max(Math.pow(Math.pow(height, 2) + Math.pow(width, 2), 0.5), 48); // 涟漪扩散动画

  const translate = `translate3d(${-center.x + width / 2}px,` + `${-center.y + height / 2}px, 0) scale(1)`; // 涟漪的 DOM 结构，并缓存动画效果

  $(`<div class="mdui-ripple-wave" ` + `style="width:${diameter}px;height:${diameter}px;` + `margin-top:-${diameter / 2}px;margin-left:-${diameter / 2}px;` + `left:${center.x}px;top:${center.y}px;"></div>`).data('_ripple_wave_translate', translate).prependTo($ripple).reflow().transform(translate);
}
/**
 * 隐藏并移除涟漪
 * @param $wave
 */


function removeRipple($wave) {
  if (!$wave.length || $wave.data('_ripple_wave_removed')) {
    return;
  }

  $wave.data('_ripple_wave_removed', true);
  let removeTimer = setTimeout(() => $wave.remove(), 400);
  const translate = $wave.data('_ripple_wave_translate');
  $wave.addClass('mdui-ripple-wave-fill').transform(translate.replace('scale(1)', 'scale(1.01)')).transitionEnd(() => {
    clearTimeout(removeTimer);
    $wave.addClass('mdui-ripple-wave-out').transform(translate.replace('scale(1)', 'scale(1.01)'));
    removeTimer = setTimeout(() => $wave.remove(), 700);
    setTimeout(() => {
      $wave.transitionEnd(() => {
        clearTimeout(removeTimer);
        $wave.remove();
      });
    }, 0);
  });
}
/**
 * 隐藏涟漪动画
 * @param this
 */


function hide() {
  const $ripple = $(this);
  $ripple.children('.mdui-ripple-wave').each((_, wave) => {
    removeRipple($(wave));
  });
  $ripple.off(`${moveEvent} ${endEvent} ${cancelEvent}`, hide);
}
/**
 * 显示涟漪，并绑定 touchend 等事件
 * @param event
 */


function showRipple(event) {
  if (!isAllow(event)) {
    return;
  }

  register(event); // Chrome 59 点击滚动条时，会在 document 上触发事件

  if (event.target === document) {
    return;
  }

  const $target = $(event.target); // 获取含 .mdui-ripple 类的元素

  const $ripple = $target.hasClass('mdui-ripple') ? $target : $target.parents('.mdui-ripple').first();

  if (!$ripple.length) {
    return;
  } // 禁用状态的元素上不产生涟漪效果


  if ($ripple.prop('disabled') || !isUndefined($ripple.attr('disabled'))) {
    return;
  }

  if (event.type === 'touchstart') {
    let hidden = false; // touchstart 触发指定时间后开始涟漪动画，避免手指滑动时也触发涟漪

    let timer = setTimeout(() => {
      timer = 0;
      show(event, $ripple);
    }, 200);

    const hideRipple = () => {
      // 如果手指没有移动，且涟漪动画还没有开始，则开始涟漪动画
      if (timer) {
        clearTimeout(timer);
        timer = 0;
        show(event, $ripple);
      }

      if (!hidden) {
        hidden = true;
        hide.call($ripple);
      }
    }; // 手指移动后，移除涟漪动画


    const touchMove = () => {
      if (timer) {
        clearTimeout(timer);
        timer = 0;
      }

      hideRipple();
    };

    $ripple.on('touchmove', touchMove).on('touchend touchcancel', hideRipple);
  } else {
    show(event, $ripple);
    $ripple.on(`${moveEvent} ${endEvent} ${cancelEvent}`, hide);
  }
}

$(() => {
  $document.on(startEvent, showRipple).on(unlockEvent, register);
});
const defaultData = {
  reInit: false,
  domLoadedEvent: false
};
/**
 * 输入框事件
 * @param event
 * @param data
 */

function inputEvent(event, data = {}) {
  data = extend({}, defaultData, data);
  const input = event.target;
  const $input = $(input);
  const eventType = event.type;
  const value = $input.val(); // 文本框类型

  const inputType = $input.attr('type') || '';

  if (['checkbox', 'button', 'submit', 'range', 'radio', 'image'].indexOf(inputType) > -1) {
    return;
  }

  const $textfield = $input.parent('.mdui-textfield'); // 输入框是否聚焦

  if (eventType === 'focus') {
    $textfield.addClass('mdui-textfield-focus');
  }

  if (eventType === 'blur') {
    $textfield.removeClass('mdui-textfield-focus');
  } // 输入框是否为空


  if (eventType === 'blur' || eventType === 'input') {
    value ? $textfield.addClass('mdui-textfield-not-empty') : $textfield.removeClass('mdui-textfield-not-empty');
  } // 输入框是否禁用


  input.disabled ? $textfield.addClass('mdui-textfield-disabled') : $textfield.removeClass('mdui-textfield-disabled'); // 表单验证

  if ((eventType === 'input' || eventType === 'blur') && !data.domLoadedEvent && input.validity) {
    input.validity.valid ? $textfield.removeClass('mdui-textfield-invalid-html5') : $textfield.addClass('mdui-textfield-invalid-html5');
  } // textarea 高度自动调整


  if ($input.is('textarea')) {
    // IE bug：textarea 的值仅为多个换行，不含其他内容时，textarea 的高度不准确
    //         此时，在计算高度前，在值的开头加入一个空格，计算完后，移除空格
    const inputValue = value;
    let hasExtraSpace = false;

    if (inputValue.replace(/[\r\n]/g, '') === '') {
      $input.val(' ' + inputValue);
      hasExtraSpace = true;
    } // 设置 textarea 高度


    $input.outerHeight('');
    const height = $input.outerHeight();
    const scrollHeight = input.scrollHeight;

    if (scrollHeight > height) {
      $input.outerHeight(scrollHeight);
    } // 计算完，还原 textarea 的值


    if (hasExtraSpace) {
      $input.val(inputValue);
    }
  } // 实时字数统计


  if (data.reInit) {
    $textfield.find('.mdui-textfield-counter').remove();
  }

  const maxLength = $input.attr('maxlength');

  if (maxLength) {
    if (data.reInit || data.domLoadedEvent) {
      $('<div class="mdui-textfield-counter">' + `<span class="mdui-textfield-counter-inputed"></span> / ${maxLength}` + '</div>').appendTo($textfield);
    }

    $textfield.find('.mdui-textfield-counter-inputed').text(value.length.toString());
  } // 含 帮助文本、错误提示、字数统计 时，增加文本框底部内边距


  if ($textfield.find('.mdui-textfield-helper').length || $textfield.find('.mdui-textfield-error').length || maxLength) {
    $textfield.addClass('mdui-textfield-has-bottom');
  }
}

$(() => {
  // 绑定事件
  $document.on('input focus blur', '.mdui-textfield-input', {
    useCapture: true
  }, inputEvent); // 可展开文本框展开

  $document.on('click', '.mdui-textfield-expandable .mdui-textfield-icon', function () {
    $(this).parents('.mdui-textfield').addClass('mdui-textfield-expanded').find('.mdui-textfield-input')[0].focus();
  }); // 可展开文本框关闭

  $document.on('click', '.mdui-textfield-expanded .mdui-textfield-close', function () {
    $(this).parents('.mdui-textfield').removeClass('mdui-textfield-expanded').find('.mdui-textfield-input').val('');
  });
  /**
   * 初始化文本框
   */

  mdui.mutation('.mdui-textfield', function () {
    $(this).find('.mdui-textfield-input').trigger('input', {
      domLoadedEvent: true
    });
  });
});

mdui.updateTextFields = function (selector) {
  const $elements = isUndefined(selector) ? $('.mdui-textfield') : $(selector);
  $elements.each((_, element) => {
    $(element).find('.mdui-textfield-input').trigger('input', {
      reInit: true
    });
  });
};
/**
 * 滑块的值改变后修改滑块样式
 * @param $slider
 */


function updateValueStyle($slider) {
  const data = $slider.data();
  const $track = data._slider_$track;
  const $fill = data._slider_$fill;
  const $thumb = data._slider_$thumb;
  const $input = data._slider_$input;
  const min = data._slider_min;
  const max = data._slider_max;
  const isDisabled = data._slider_disabled;
  const isDiscrete = data._slider_discrete;
  const $thumbText = data._slider_$thumbText;
  const value = $input.val();
  const percent = (value - min) / (max - min) * 100;
  $fill.width(`${percent}%`);
  $track.width(`${100 - percent}%`);

  if (isDisabled) {
    $fill.css('padding-right', '6px');
    $track.css('padding-left', '6px');
  }

  $thumb.css('left', `${percent}%`);

  if (isDiscrete) {
    $thumbText.text(value);
  }

  percent === 0 ? $slider.addClass('mdui-slider-zero') : $slider.removeClass('mdui-slider-zero');
}
/**
 * 重新初始化滑块
 * @param $slider
 */


function reInit($slider) {
  const $track = $('<div class="mdui-slider-track"></div>');
  const $fill = $('<div class="mdui-slider-fill"></div>');
  const $thumb = $('<div class="mdui-slider-thumb"></div>');
  const $input = $slider.find('input[type="range"]');
  const isDisabled = $input[0].disabled;
  const isDiscrete = $slider.hasClass('mdui-slider-discrete'); // 禁用状态

  isDisabled ? $slider.addClass('mdui-slider-disabled') : $slider.removeClass('mdui-slider-disabled'); // 重新填充 HTML

  $slider.find('.mdui-slider-track').remove();
  $slider.find('.mdui-slider-fill').remove();
  $slider.find('.mdui-slider-thumb').remove();
  $slider.append($track).append($fill).append($thumb); // 间续型滑块

  let $thumbText = $();

  if (isDiscrete) {
    $thumbText = $('<span></span>');
    $thumb.empty().append($thumbText);
  }

  $slider.data('_slider_$track', $track);
  $slider.data('_slider_$fill', $fill);
  $slider.data('_slider_$thumb', $thumb);
  $slider.data('_slider_$input', $input);
  $slider.data('_slider_min', $input.attr('min'));
  $slider.data('_slider_max', $input.attr('max'));
  $slider.data('_slider_disabled', isDisabled);
  $slider.data('_slider_discrete', isDiscrete);
  $slider.data('_slider_$thumbText', $thumbText); // 设置默认值

  updateValueStyle($slider);
}

const rangeSelector = '.mdui-slider input[type="range"]';
$(() => {
  // 滑块滑动事件
  $document.on('input change', rangeSelector, function () {
    const $slider = $(this).parent();
    updateValueStyle($slider);
  }); // 开始触摸滑块事件

  $document.on(startEvent, rangeSelector, function (event) {
    if (!isAllow(event)) {
      return;
    }

    register(event);

    if (this.disabled) {
      return;
    }

    const $slider = $(this).parent();
    $slider.addClass('mdui-slider-focus');
  }); // 结束触摸滑块事件

  $document.on(endEvent, rangeSelector, function (event) {
    if (!isAllow(event)) {
      return;
    }

    if (this.disabled) {
      return;
    }

    const $slider = $(this).parent();
    $slider.removeClass('mdui-slider-focus');
  });
  $document.on(unlockEvent, rangeSelector, register);
  /**
   * 初始化滑块
   */

  mdui.mutation('.mdui-slider', function () {
    reInit($(this));
  });
});

mdui.updateSliders = function (selector) {
  const $elements = isUndefined(selector) ? $('.mdui-slider') : $(selector);
  $elements.each((_, element) => {
    reInit($(element));
  });
};

const DEFAULT_OPTIONS$2 = {
  trigger: 'hover'
};

class Fab {
  constructor(selector, options = {}) {
    /**
     * 配置参数
     */
    this.options = extend({}, DEFAULT_OPTIONS$2);
    /**
     * 当前 fab 的状态
     */

    this.state = 'closed';
    this.$element = $(selector).first();
    extend(this.options, options);
    this.$btn = this.$element.find('.mdui-fab');
    this.$dial = this.$element.find('.mdui-fab-dial');
    this.$dialBtns = this.$dial.find('.mdui-fab');

    if (this.options.trigger === 'hover') {
      this.$btn.on('touchstart mouseenter', () => this.open());
      this.$element.on('mouseleave', () => this.close());
    }

    if (this.options.trigger === 'click') {
      this.$btn.on(startEvent, () => this.open());
    } // 触摸屏幕其他地方关闭快速拨号


    $document.on(startEvent, event => {
      if ($(event.target).parents('.mdui-fab-wrapper').length) {
        return;
      }

      this.close();
    });
  }
  /**
   * 触发组件事件
   * @param name
   */


  triggerEvent(name) {
    componentEvent(name, 'fab', this.$element, this);
  }
  /**
   * 当前是否为打开状态
   */


  isOpen() {
    return this.state === 'opening' || this.state === 'opened';
  }
  /**
   * 打开快速拨号菜单
   */


  open() {
    if (this.isOpen()) {
      return;
    } // 为菜单中的按钮添加不同的 transition-delay


    this.$dialBtns.each((index, btn) => {
      const delay = `${15 * (this.$dialBtns.length - index)}ms`;
      btn.style.transitionDelay = delay;
      btn.style.webkitTransitionDelay = delay;
    });
    this.$dial.css('height', 'auto').addClass('mdui-fab-dial-show'); // 如果按钮中存在 .mdui-fab-opened 的图标，则进行图标切换

    if (this.$btn.find('.mdui-fab-opened').length) {
      this.$btn.addClass('mdui-fab-opened');
    }

    this.state = 'opening';
    this.triggerEvent('open'); // 打开顺序为从下到上逐个打开，最上面的打开后才表示动画完成

    this.$dialBtns.first().transitionEnd(() => {
      if (this.$btn.hasClass('mdui-fab-opened')) {
        this.state = 'opened';
        this.triggerEvent('opened');
      }
    });
  }
  /**
   * 关闭快速拨号菜单
   */


  close() {
    if (!this.isOpen()) {
      return;
    } // 为菜单中的按钮添加不同的 transition-delay


    this.$dialBtns.each((index, btn) => {
      const delay = `${15 * index}ms`;
      btn.style.transitionDelay = delay;
      btn.style.webkitTransitionDelay = delay;
    });
    this.$dial.removeClass('mdui-fab-dial-show');
    this.$btn.removeClass('mdui-fab-opened');
    this.state = 'closing';
    this.triggerEvent('close'); // 从上往下依次关闭，最后一个关闭后才表示动画完成

    this.$dialBtns.last().transitionEnd(() => {
      if (this.$btn.hasClass('mdui-fab-opened')) {
        return;
      }

      this.state = 'closed';
      this.triggerEvent('closed');
      this.$dial.css('height', 0);
    });
  }
  /**
   * 切换快速拨号菜单的打开状态
   */


  toggle() {
    this.isOpen() ? this.close() : this.open();
  }
  /**
   * 以动画的形式显示整个浮动操作按钮
   */


  show() {
    this.$element.removeClass('mdui-fab-hide');
  }
  /**
   * 以动画的形式隐藏整个浮动操作按钮
   */


  hide() {
    this.$element.addClass('mdui-fab-hide');
  }
  /**
   * 返回当前快速拨号菜单的打开状态。共包含四种状态：`opening`、`opened`、`closing`、`closed`
   */


  getState() {
    return this.state;
  }

}

mdui.Fab = Fab;
const customAttr$3 = 'mdui-fab';
$(() => {
  // mouseenter 不冒泡，无法进行事件委托，这里用 mouseover 代替。
  // 不管是 click 、 mouseover 还是 touchstart ，都先初始化。
  $document.on('touchstart mousedown mouseover', `[${customAttr$3}]`, function () {
    new mdui.Fab(this, parseOptions(this, customAttr$3));
  });
});
/**
 * 最终生成的元素结构为：
 *  <select class="mdui-select" mdui-select="{position: 'top'}" style="display: none;"> // $native
 *    <option value="1">State 1</option>
 *    <option value="2">State 2</option>
 *    <option value="3" disabled="">State 3</option>
 *  </select>
 *  <div class="mdui-select mdui-select-position-top" style="" id="88dec0e4-d4a2-c6d0-0e7f-1ba4501e0553"> // $element
 *    <span class="mdui-select-selected">State 1</span> // $selected
 *    <div class="mdui-select-menu" style="transform-origin: center 100% 0px;"> // $menu
 *      <div class="mdui-select-menu-item mdui-ripple" selected="">State 1</div> // $items
 *      <div class="mdui-select-menu-item mdui-ripple">State 2</div>
 *      <div class="mdui-select-menu-item mdui-ripple" disabled="">State 3</div>
 *    </div>
 *  </div>
 */

const DEFAULT_OPTIONS$3 = {
  position: 'auto',
  gutter: 16
};

class Select {
  constructor(selector, options = {}) {
    /**
     * 生成的 `<div class="mdui-select">` 元素的 JQ 对象
     */
    this.$element = $();
    /**
     * 配置参数
     */

    this.options = extend({}, DEFAULT_OPTIONS$3);
    /**
     * select 的 size 属性的值，根据该值设置 select 的高度
     */

    this.size = 0;
    /**
     * 占位元素，显示已选中菜单项的文本
     */

    this.$selected = $();
    /**
     * 菜单项的外层元素的 JQ 对象
     */

    this.$menu = $();
    /**
     * 菜单项数组的 JQ 对象
     */

    this.$items = $();
    /**
     * 当前选中的菜单项的索引号
     */

    this.selectedIndex = 0;
    /**
     * 当前选中菜单项的文本
     */

    this.selectedText = '';
    /**
     * 当前选中菜单项的值
     */

    this.selectedValue = '';
    /**
     * 当前 select 的状态
     */

    this.state = 'closed';
    this.$native = $(selector).first();
    this.$native.hide();
    extend(this.options, options); // 为当前 select 生成唯一 ID

    this.uniqueID = $.guid(); // 生成 select

    this.handleUpdate(); // 点击 select 外面区域关闭

    $document.on('click touchstart', event => {
      const $target = $(event.target);

      if (this.isOpen() && !$target.is(this.$element) && !contains(this.$element[0], $target[0])) {
        this.close();
      }
    });
  }
  /**
   * 调整菜单位置
   */


  readjustMenu() {
    const windowHeight = $window.height(); // mdui-select 高度

    const elementHeight = this.$element.height(); // 菜单项高度

    const $itemFirst = this.$items.first();
    const itemHeight = $itemFirst.height();
    const itemMargin = parseInt($itemFirst.css('margin-top')); // 菜单高度

    const menuWidth = this.$element.innerWidth() + 0.01; // 必须比真实宽度多一点，不然会出现省略号

    let menuHeight = itemHeight * this.size + itemMargin * 2; // mdui-select 在窗口中的位置

    const elementTop = this.$element[0].getBoundingClientRect().top;
    let transformOriginY;
    let menuMarginTop;

    if (this.options.position === 'bottom') {
      menuMarginTop = elementHeight;
      transformOriginY = '0px';
    } else if (this.options.position === 'top') {
      menuMarginTop = -menuHeight - 1;
      transformOriginY = '100%';
    } else {
      // 菜单高度不能超过窗口高度
      const menuMaxHeight = windowHeight - this.options.gutter * 2;

      if (menuHeight > menuMaxHeight) {
        menuHeight = menuMaxHeight;
      } // 菜单的 margin-top


      menuMarginTop = -(itemMargin + this.selectedIndex * itemHeight + (itemHeight - elementHeight) / 2);
      const menuMaxMarginTop = -(itemMargin + (this.size - 1) * itemHeight + (itemHeight - elementHeight) / 2);

      if (menuMarginTop < menuMaxMarginTop) {
        menuMarginTop = menuMaxMarginTop;
      } // 菜单不能超出窗口


      const menuTop = elementTop + menuMarginTop;

      if (menuTop < this.options.gutter) {
        // 不能超出窗口上方
        menuMarginTop = -(elementTop - this.options.gutter);
      } else if (menuTop + menuHeight + this.options.gutter > windowHeight) {
        // 不能超出窗口下方
        menuMarginTop = -(elementTop + menuHeight + this.options.gutter - windowHeight);
      } // transform 的 Y 轴坐标


      transformOriginY = `${this.selectedIndex * itemHeight + itemHeight / 2 + itemMargin}px`;
    } // 设置样式


    this.$element.innerWidth(menuWidth);
    this.$menu.innerWidth(menuWidth).height(menuHeight).css({
      'margin-top': menuMarginTop + 'px',
      'transform-origin': 'center ' + transformOriginY + ' 0'
    });
  }
  /**
   * select 是否为打开状态
   */


  isOpen() {
    return this.state === 'opening' || this.state === 'opened';
  }
  /**
   * 对原生 select 组件进行了修改后，需要调用该方法
   */


  handleUpdate() {
    if (this.isOpen()) {
      this.close();
    }

    this.selectedValue = this.$native.val();
    const itemsData = [];
    this.$items = $(); // 生成 HTML

    this.$native.find('option').each((index, option) => {
      const text = option.textContent || '';
      const value = option.value;
      const disabled = option.disabled;
      const selected = this.selectedValue === value;
      itemsData.push({
        value,
        text,
        disabled,
        selected,
        index
      });

      if (selected) {
        this.selectedText = text;
        this.selectedIndex = index;
      }

      this.$items = this.$items.add('<div class="mdui-select-menu-item mdui-ripple"' + (disabled ? ' disabled' : '') + (selected ? ' selected' : '') + `>${text}</div>`);
    });
    this.$selected = $(`<span class="mdui-select-selected">${this.selectedText}</span>`);
    this.$element = $(`<div class="mdui-select mdui-select-position-${this.options.position}" ` + `style="${this.$native.attr('style')}" ` + `id="${this.uniqueID}"></div>`).show().append(this.$selected);
    this.$menu = $('<div class="mdui-select-menu"></div>').appendTo(this.$element).append(this.$items);
    $(`#${this.uniqueID}`).remove();
    this.$native.after(this.$element); // 根据 select 的 size 属性设置高度

    this.size = parseInt(this.$native.attr('size') || '0');

    if (this.size <= 0) {
      this.size = this.$items.length;

      if (this.size > 8) {
        this.size = 8;
      }
    } // 点击选项时关闭下拉菜单
    // eslint-disable-next-line @typescript-eslint/no-this-alias


    const that = this;
    this.$items.on('click', function () {
      if (that.state === 'closing') {
        return;
      }

      const $item = $(this);
      const index = $item.index();
      const data = itemsData[index];

      if (data.disabled) {
        return;
      }

      that.$selected.text(data.text);
      that.$native.val(data.value);
      that.$items.removeAttr('selected');
      $item.attr('selected', '');
      that.selectedIndex = data.index;
      that.selectedValue = data.value;
      that.selectedText = data.text;
      that.$native.trigger('change');
      that.close();
    }); // 点击 $element 时打开下拉菜单

    this.$element.on('click', event => {
      const $target = $(event.target); // 在菜单上点击时不打开

      if ($target.is('.mdui-select-menu') || $target.is('.mdui-select-menu-item')) {
        return;
      }

      this.toggle();
    });
  }
  /**
   * 动画结束的回调
   */


  transitionEnd() {
    this.$element.removeClass('mdui-select-closing');

    if (this.state === 'opening') {
      this.state = 'opened';
      this.triggerEvent('opened');
      this.$menu.css('overflow-y', 'auto');
    }

    if (this.state === 'closing') {
      this.state = 'closed';
      this.triggerEvent('closed'); // 恢复样式

      this.$element.innerWidth('');
      this.$menu.css({
        'margin-top': '',
        height: '',
        width: ''
      });
    }
  }
  /**
   * 触发组件事件
   * @param name
   */


  triggerEvent(name) {
    componentEvent(name, 'select', this.$native, this);
  }
  /**
   * 切换下拉菜单的打开状态
   */


  toggle() {
    this.isOpen() ? this.close() : this.open();
  }
  /**
   * 打开下拉菜单
   */


  open() {
    if (this.isOpen()) {
      return;
    }

    this.state = 'opening';
    this.triggerEvent('open');
    this.readjustMenu();
    this.$element.addClass('mdui-select-open');
    this.$menu.transitionEnd(() => this.transitionEnd());
  }
  /**
   * 关闭下拉菜单
   */


  close() {
    if (!this.isOpen()) {
      return;
    }

    this.state = 'closing';
    this.triggerEvent('close');
    this.$menu.css('overflow-y', '');
    this.$element.removeClass('mdui-select-open').addClass('mdui-select-closing');
    this.$menu.transitionEnd(() => this.transitionEnd());
  }
  /**
   * 获取当前菜单的状态。共包含四种状态：`opening`、`opened`、`closing`、`closed`
   */


  getState() {
    return this.state;
  }

}

mdui.Select = Select;
const customAttr$4 = 'mdui-select';
$(() => {
  mdui.mutation(`[${customAttr$4}]`, function () {
    new mdui.Select(this, parseOptions(this, customAttr$4));
  });
});
$(() => {
  // 滚动时隐藏应用栏
  mdui.mutation('.mdui-appbar-scroll-hide', function () {
    new mdui.Headroom(this);
  }); // 滚动时只隐藏应用栏中的工具栏

  mdui.mutation('.mdui-appbar-scroll-toolbar-hide', function () {
    new mdui.Headroom(this, {
      pinnedClass: 'mdui-headroom-pinned-toolbar',
      unpinnedClass: 'mdui-headroom-unpinned-toolbar'
    });
  });
});
const DEFAULT_OPTIONS$4 = {
  trigger: 'click',
  loop: false
};

class Tab {
  constructor(selector, options = {}) {
    /**
     * 配置参数
     */
    this.options = extend({}, DEFAULT_OPTIONS$4);
    /**
     * 当前激活的 tab 的索引号。为 -1 时表示没有激活的选项卡，或不存在选项卡
     */

    this.activeIndex = -1;
    this.$element = $(selector).first();
    extend(this.options, options);
    this.$tabs = this.$element.children('a');
    this.$indicator = $('<div class="mdui-tab-indicator"></div>').appendTo(this.$element); // 根据 url hash 获取默认激活的选项卡

    const hash = window.location.hash;

    if (hash) {
      this.$tabs.each((index, tab) => {
        if ($(tab).attr('href') === hash) {
          this.activeIndex = index;
          return false;
        }

        return true;
      });
    } // 含 .mdui-tab-active 的元素默认激活


    if (this.activeIndex === -1) {
      this.$tabs.each((index, tab) => {
        if ($(tab).hasClass('mdui-tab-active')) {
          this.activeIndex = index;
          return false;
        }

        return true;
      });
    } // 存在选项卡时，默认激活第一个选项卡


    if (this.$tabs.length && this.activeIndex === -1) {
      this.activeIndex = 0;
    } // 设置激活状态选项卡


    this.setActive(); // 监听窗口大小变化事件，调整指示器位置

    $window.on('resize', $.throttle(() => this.setIndicatorPosition(), 100)); // 监听点击选项卡事件

    this.$tabs.each((_, tab) => {
      this.bindTabEvent(tab);
    });
  }
  /**
   * 指定选项卡是否已禁用
   * @param $tab
   */


  isDisabled($tab) {
    return $tab.attr('disabled') !== undefined;
  }
  /**
   * 绑定在 Tab 上点击或悬浮的事件
   * @param tab
   */


  bindTabEvent(tab) {
    const $tab = $(tab); // 点击或鼠标移入触发的事件

    const clickEvent = () => {
      // 禁用状态的选项卡无法选中
      if (this.isDisabled($tab)) {
        return false;
      }

      this.activeIndex = this.$tabs.index(tab);
      this.setActive();
    }; // 无论 trigger 是 click 还是 hover，都会响应 click 事件


    $tab.on('click', clickEvent); // trigger 为 hover 时，额外响应 mouseenter 事件

    if (this.options.trigger === 'hover') {
      $tab.on('mouseenter', clickEvent);
    } // 阻止链接的默认点击动作


    $tab.on('click', () => {
      if (($tab.attr('href') || '').indexOf('#') === 0) {
        return false;
      }
    });
  }
  /**
   * 触发组件事件
   * @param name
   * @param $element
   * @param parameters
   */


  triggerEvent(name, $element, parameters = {}) {
    componentEvent(name, 'tab', $element, this, parameters);
  }
  /**
   * 设置激活状态的选项卡
   */


  setActive() {
    this.$tabs.each((index, tab) => {
      const $tab = $(tab);
      const targetId = $tab.attr('href') || ''; // 设置选项卡激活状态

      if (index === this.activeIndex && !this.isDisabled($tab)) {
        if (!$tab.hasClass('mdui-tab-active')) {
          this.triggerEvent('change', this.$element, {
            index: this.activeIndex,
            id: targetId.substr(1)
          });
          this.triggerEvent('show', $tab);
          $tab.addClass('mdui-tab-active');
        }

        $(targetId).show();
        this.setIndicatorPosition();
      } else {
        $tab.removeClass('mdui-tab-active');
        $(targetId).hide();
      }
    });
  }
  /**
   * 设置选项卡指示器的位置
   */


  setIndicatorPosition() {
    // 选项卡数量为 0 时，不显示指示器
    if (this.activeIndex === -1) {
      this.$indicator.css({
        left: 0,
        width: 0
      });
      return;
    }

    const $activeTab = this.$tabs.eq(this.activeIndex);

    if (this.isDisabled($activeTab)) {
      return;
    }

    const activeTabOffset = $activeTab.offset();
    this.$indicator.css({
      left: `${activeTabOffset.left + this.$element[0].scrollLeft - this.$element[0].getBoundingClientRect().left}px`,
      width: `${$activeTab.innerWidth()}px`
    });
  }
  /**
   * 切换到下一个选项卡
   */


  next() {
    if (this.activeIndex === -1) {
      return;
    }

    if (this.$tabs.length > this.activeIndex + 1) {
      this.activeIndex++;
    } else if (this.options.loop) {
      this.activeIndex = 0;
    }

    this.setActive();
  }
  /**
   * 切换到上一个选项卡
   */


  prev() {
    if (this.activeIndex === -1) {
      return;
    }

    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else if (this.options.loop) {
      this.activeIndex = this.$tabs.length - 1;
    }

    this.setActive();
  }
  /**
   * 显示指定索引号、或指定id的选项卡
   * @param index 索引号、或id
   */


  show(index) {
    if (this.activeIndex === -1) {
      return;
    }

    if (isNumber(index)) {
      this.activeIndex = index;
    } else {
      this.$tabs.each((i, tab) => {
        if (tab.id === index) {
          this.activeIndex === i;
          return false;
        }
      });
    }

    this.setActive();
  }
  /**
   * 在父元素的宽度变化时，需要调用该方法重新调整指示器位置
   * 在添加或删除选项卡时，需要调用该方法
   */


  handleUpdate() {
    const $oldTabs = this.$tabs; // 旧的 tabs JQ对象

    const $newTabs = this.$element.children('a'); // 新的 tabs JQ对象

    const oldTabsElement = $oldTabs.get(); // 旧的 tabs 元素数组

    const newTabsElement = $newTabs.get(); // 新的 tabs 元素数组

    if (!$newTabs.length) {
      this.activeIndex = -1;
      this.$tabs = $newTabs;
      this.setIndicatorPosition();
      return;
    } // 重新遍历选项卡，找出新增的选项卡


    $newTabs.each((index, tab) => {
      // 有新增的选项卡
      if (oldTabsElement.indexOf(tab) < 0) {
        this.bindTabEvent(tab);

        if (this.activeIndex === -1) {
          this.activeIndex = 0;
        } else if (index <= this.activeIndex) {
          this.activeIndex++;
        }
      }
    }); // 找出被移除的选项卡

    $oldTabs.each((index, tab) => {
      // 有被移除的选项卡
      if (newTabsElement.indexOf(tab) < 0) {
        if (index < this.activeIndex) {
          this.activeIndex--;
        } else if (index === this.activeIndex) {
          this.activeIndex = 0;
        }
      }
    });
    this.$tabs = $newTabs;
    this.setActive();
  }

}

mdui.Tab = Tab;
const customAttr$5 = 'mdui-tab';
$(() => {
  mdui.mutation(`[${customAttr$5}]`, function () {
    new mdui.Tab(this, parseOptions(this, customAttr$5));
  });
});
/**
 * 在桌面设备上默认显示抽屉栏，不显示遮罩层
 * 在手机和平板设备上默认不显示抽屉栏，始终显示遮罩层，且覆盖导航栏
 */

const DEFAULT_OPTIONS$5 = {
  overlay: false,
  swipe: false
};

class Drawer {
  constructor(selector, options = {}) {
    /**
     * 配置参数
     */
    this.options = extend({}, DEFAULT_OPTIONS$5);
    /**
     * 当前是否显示着遮罩层
     */

    this.overlay = false;
    this.$element = $(selector).first();
    extend(this.options, options);
    this.position = this.$element.hasClass('mdui-drawer-right') ? 'right' : 'left';

    if (this.$element.hasClass('mdui-drawer-close')) {
      this.state = 'closed';
    } else if (this.$element.hasClass('mdui-drawer-open')) {
      this.state = 'opened';
    } else if (this.isDesktop()) {
      this.state = 'opened';
    } else {
      this.state = 'closed';
    } // 浏览器窗口大小调整时


    $window.on('resize', $.throttle(() => {
      if (this.isDesktop()) {
        // 由手机平板切换到桌面时
        // 如果显示着遮罩，则隐藏遮罩
        if (this.overlay && !this.options.overlay) {
          $.hideOverlay();
          this.overlay = false;
          $.unlockScreen();
        } // 没有强制关闭，则状态为打开状态


        if (!this.$element.hasClass('mdui-drawer-close')) {
          this.state = 'opened';
        }
      } else if (!this.overlay && this.state === 'opened') {
        // 由桌面切换到手机平板时。如果抽屉栏是打开着的且没有遮罩层，则关闭抽屉栏
        if (this.$element.hasClass('mdui-drawer-open')) {
          $.showOverlay();
          this.overlay = true;
          $.lockScreen();
          $('.mdui-overlay').one('click', () => this.close());
        } else {
          this.state = 'closed';
        }
      }
    }, 100)); // 绑定关闭按钮事件

    this.$element.find('[mdui-drawer-close]').each((_, close) => {
      $(close).on('click', () => this.close());
    });
    this.swipeSupport();
  }
  /**
   * 是否是桌面设备
   */


  isDesktop() {
    return $window.width() >= 1024;
  }
  /**
   * 滑动手势支持
   */


  swipeSupport() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this; // 抽屉栏滑动手势控制

    let openNavEventHandler;
    let touchStartX;
    let touchStartY;
    let swipeStartX;
    let swiping = null;
    let maybeSwiping = false; // 手势触发的范围

    const swipeAreaWidth = 24;

    function setPosition(translateX) {
      const rtlTranslateMultiplier = that.position === 'right' ? -1 : 1;
      const transformCSS = `translate(${-1 * rtlTranslateMultiplier * translateX}px, 0) !important;`;
      const transitionCSS = 'initial !important;';
      that.$element.css('cssText', `transform: ${transformCSS}; transition: ${transitionCSS};`);
    }

    function cleanPosition() {
      that.$element[0].style.transform = '';
      that.$element[0].style.webkitTransform = '';
      that.$element[0].style.transition = '';
      that.$element[0].style.webkitTransition = '';
    }

    function getMaxTranslateX() {
      return that.$element.width() + 10;
    }

    function getTranslateX(currentX) {
      return Math.min(Math.max(swiping === 'closing' ? swipeStartX - currentX : getMaxTranslateX() + swipeStartX - currentX, 0), getMaxTranslateX());
    }

    function onBodyTouchEnd(event) {
      if (swiping) {
        let touchX = event.changedTouches[0].pageX;

        if (that.position === 'right') {
          touchX = $body.width() - touchX;
        }

        const translateRatio = getTranslateX(touchX) / getMaxTranslateX();
        maybeSwiping = false;
        const swipingState = swiping;
        swiping = null;

        if (swipingState === 'opening') {
          if (translateRatio < 0.92) {
            cleanPosition();
            that.open();
          } else {
            cleanPosition();
          }
        } else {
          if (translateRatio > 0.08) {
            cleanPosition();
            that.close();
          } else {
            cleanPosition();
          }
        }

        $.unlockScreen();
      } else {
        maybeSwiping = false;
      }

      $body.off({
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        touchmove: onBodyTouchMove,
        touchend: onBodyTouchEnd,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        touchcancel: onBodyTouchMove
      });
    }

    function onBodyTouchMove(event) {
      let touchX = event.touches[0].pageX;

      if (that.position === 'right') {
        touchX = $body.width() - touchX;
      }

      const touchY = event.touches[0].pageY;

      if (swiping) {
        setPosition(getTranslateX(touchX));
      } else if (maybeSwiping) {
        const dXAbs = Math.abs(touchX - touchStartX);
        const dYAbs = Math.abs(touchY - touchStartY);
        const threshold = 8;

        if (dXAbs > threshold && dYAbs <= threshold) {
          swipeStartX = touchX;
          swiping = that.state === 'opened' ? 'closing' : 'opening';
          $.lockScreen();
          setPosition(getTranslateX(touchX));
        } else if (dXAbs <= threshold && dYAbs > threshold) {
          onBodyTouchEnd();
        }
      }
    }

    function onBodyTouchStart(event) {
      touchStartX = event.touches[0].pageX;

      if (that.position === 'right') {
        touchStartX = $body.width() - touchStartX;
      }

      touchStartY = event.touches[0].pageY;

      if (that.state !== 'opened') {
        if (touchStartX > swipeAreaWidth || openNavEventHandler !== onBodyTouchStart) {
          return;
        }
      }

      maybeSwiping = true;
      $body.on({
        touchmove: onBodyTouchMove,
        touchend: onBodyTouchEnd,
        touchcancel: onBodyTouchMove
      });
    }

    function enableSwipeHandling() {
      if (!openNavEventHandler) {
        $body.on('touchstart', onBodyTouchStart);
        openNavEventHandler = onBodyTouchStart;
      }
    }

    if (this.options.swipe) {
      enableSwipeHandling();
    }
  }
  /**
   * 触发组件事件
   * @param name
   */


  triggerEvent(name) {
    componentEvent(name, 'drawer', this.$element, this);
  }
  /**
   * 动画结束回调
   */


  transitionEnd() {
    if (this.$element.hasClass('mdui-drawer-open')) {
      this.state = 'opened';
      this.triggerEvent('opened');
    } else {
      this.state = 'closed';
      this.triggerEvent('closed');
    }
  }
  /**
   * 是否处于打开状态
   */


  isOpen() {
    return this.state === 'opening' || this.state === 'opened';
  }
  /**
   * 打开抽屉栏
   */


  open() {
    if (this.isOpen()) {
      return;
    }

    this.state = 'opening';
    this.triggerEvent('open');

    if (!this.options.overlay) {
      $body.addClass(`mdui-drawer-body-${this.position}`);
    }

    this.$element.removeClass('mdui-drawer-close').addClass('mdui-drawer-open').transitionEnd(() => this.transitionEnd());

    if (!this.isDesktop() || this.options.overlay) {
      this.overlay = true;
      $.showOverlay().one('click', () => this.close());
      $.lockScreen();
    }
  }
  /**
   * 关闭抽屉栏
   */


  close() {
    if (!this.isOpen()) {
      return;
    }

    this.state = 'closing';
    this.triggerEvent('close');

    if (!this.options.overlay) {
      $body.removeClass(`mdui-drawer-body-${this.position}`);
    }

    this.$element.addClass('mdui-drawer-close').removeClass('mdui-drawer-open').transitionEnd(() => this.transitionEnd());

    if (this.overlay) {
      $.hideOverlay();
      this.overlay = false;
      $.unlockScreen();
    }
  }
  /**
   * 切换抽屉栏打开/关闭状态
   */


  toggle() {
    this.isOpen() ? this.close() : this.open();
  }
  /**
   * 返回当前抽屉栏的状态。共包含四种状态：`opening`、`opened`、`closing`、`closed`
   */


  getState() {
    return this.state;
  }

}

mdui.Drawer = Drawer;
const customAttr$6 = 'mdui-drawer';
$(() => {
  mdui.mutation(`[${customAttr$6}]`, function () {
    const $element = $(this);
    const options = parseOptions(this, customAttr$6);
    const selector = options.target;
    delete options.target;
    const $drawer = $(selector).first();
    const instance = new mdui.Drawer($drawer, options);
    $element.on('click', () => instance.toggle());
  });
});
const container = {};

function queue(name, func) {
  if (isUndefined(container[name])) {
    container[name] = [];
  }

  if (isUndefined(func)) {
    return container[name];
  }

  container[name].push(func);
}
/**
 * 从队列中移除第一个函数，并执行该函数
 * @param name 队列满
 */


function dequeue(name) {
  if (isUndefined(container[name])) {
    return;
  }

  if (!container[name].length) {
    return;
  }

  const func = container[name].shift();
  func();
}

const DEFAULT_OPTIONS$6 = {
  history: true,
  overlay: true,
  modal: false,
  closeOnEsc: true,
  closeOnCancel: true,
  closeOnConfirm: true,
  destroyOnClosed: false
};
/**
 * 当前显示的对话框实例
 */

let currentInst = null;
/**
 * 队列名
 */

const queueName = '_mdui_dialog';
/**
 * 窗口是否已锁定
 */

let isLockScreen = false;
/**
 * 遮罩层元素
 */

let $overlay;

class Dialog {
  constructor(selector, options = {}) {
    /**
     * 配置参数
     */
    this.options = extend({}, DEFAULT_OPTIONS$6);
    /**
     * 当前 dialog 的状态
     */

    this.state = 'closed';
    /**
     * dialog 元素是否是动态添加的
     */

    this.append = false;
    this.$element = $(selector).first(); // 如果对话框元素没有在当前文档中，则需要添加

    if (!contains(document.body, this.$element[0])) {
      this.append = true;
      $body.append(this.$element);
    }

    extend(this.options, options); // 绑定取消按钮事件

    this.$element.find('[mdui-dialog-cancel]').each((_, cancel) => {
      $(cancel).on('click', () => {
        this.triggerEvent('cancel');

        if (this.options.closeOnCancel) {
          this.close();
        }
      });
    }); // 绑定确认按钮事件

    this.$element.find('[mdui-dialog-confirm]').each((_, confirm) => {
      $(confirm).on('click', () => {
        this.triggerEvent('confirm');

        if (this.options.closeOnConfirm) {
          this.close();
        }
      });
    }); // 绑定关闭按钮事件

    this.$element.find('[mdui-dialog-close]').each((_, close) => {
      $(close).on('click', () => this.close());
    });
  }
  /**
   * 触发组件事件
   * @param name
   */


  triggerEvent(name) {
    componentEvent(name, 'dialog', this.$element, this);
  }
  /**
   * 窗口宽度变化，或对话框内容变化时，调整对话框位置和对话框内的滚动条
   */


  readjust() {
    if (!currentInst) {
      return;
    }

    const $element = currentInst.$element;
    const $title = $element.children('.mdui-dialog-title');
    const $content = $element.children('.mdui-dialog-content');
    const $actions = $element.children('.mdui-dialog-actions'); // 调整 dialog 的 top 和 height 值

    $element.height('');
    $content.height('');
    const elementHeight = $element.height();
    $element.css({
      top: `${($window.height() - elementHeight) / 2}px`,
      height: `${elementHeight}px`
    }); // 调整 mdui-dialog-content 的高度

    $content.innerHeight(elementHeight - ($title.innerHeight() || 0) - ($actions.innerHeight() || 0));
  }
  /**
   * hashchange 事件触发时关闭对话框
   */


  hashchangeEvent() {
    if (window.location.hash.substring(1).indexOf('mdui-dialog') < 0) {
      currentInst.close(true);
    }
  }
  /**
   * 点击遮罩层关闭对话框
   * @param event
   */


  overlayClick(event) {
    if ($(event.target).hasClass('mdui-overlay') && currentInst) {
      currentInst.close();
    }
  }
  /**
   * 动画结束回调
   */


  transitionEnd() {
    if (this.$element.hasClass('mdui-dialog-open')) {
      this.state = 'opened';
      this.triggerEvent('opened');
    } else {
      this.state = 'closed';
      this.triggerEvent('closed');
      this.$element.hide(); // 所有对话框都关闭，且当前没有打开的对话框时，解锁屏幕

      if (!queue(queueName).length && !currentInst && isLockScreen) {
        $.unlockScreen();
        isLockScreen = false;
      }

      $window.off('resize', $.throttle(this.readjust, 100));

      if (this.options.destroyOnClosed) {
        this.destroy();
      }
    }
  }
  /**
   * 打开指定对话框
   */


  doOpen() {
    currentInst = this;

    if (!isLockScreen) {
      $.lockScreen();
      isLockScreen = true;
    }

    this.$element.show();
    this.readjust();
    $window.on('resize', $.throttle(this.readjust, 100)); // 打开消息框

    this.state = 'opening';
    this.triggerEvent('open');
    this.$element.addClass('mdui-dialog-open').transitionEnd(() => this.transitionEnd()); // 不存在遮罩层元素时，添加遮罩层

    if (!$overlay) {
      $overlay = $.showOverlay(5100);
    } // 点击遮罩层时是否关闭对话框


    if (this.options.modal) {
      $overlay.off('click', this.overlayClick);
    } else {
      $overlay.on('click', this.overlayClick);
    } // 是否显示遮罩层，不显示时，把遮罩层背景透明


    $overlay.css('opacity', this.options.overlay ? '' : 0);

    if (this.options.history) {
      // 如果 hash 中原来就有 mdui-dialog，先删除，避免后退历史纪录后仍然有 mdui-dialog 导致无法关闭
      // 包括 mdui-dialog 和 &mdui-dialog 和 ?mdui-dialog
      let hash = window.location.hash.substring(1);

      if (hash.indexOf('mdui-dialog') > -1) {
        hash = hash.replace(/[&?]?mdui-dialog/g, '');
      } // 后退按钮关闭对话框


      if (hash) {
        window.location.hash = `${hash}${hash.indexOf('?') > -1 ? '&' : '?'}mdui-dialog`;
      } else {
        window.location.hash = 'mdui-dialog';
      }

      $window.on('hashchange', this.hashchangeEvent);
    }
  }
  /**
   * 当前对话框是否为打开状态
   */


  isOpen() {
    return this.state === 'opening' || this.state === 'opened';
  }
  /**
   * 打开对话框
   */


  open() {
    if (this.isOpen()) {
      return;
    } // 如果当前有正在打开或已经打开的对话框,或队列不为空，则先加入队列，等旧对话框开始关闭时再打开


    if (currentInst && (currentInst.state === 'opening' || currentInst.state === 'opened') || queue(queueName).length) {
      queue(queueName, () => this.doOpen());
      return;
    }

    this.doOpen();
  }
  /**
   * 关闭对话框
   */


  close(historyBack = false) {
    // historyBack 是否需要后退历史纪录，默认为 `false`。该参数仅内部使用
    // 为 `false` 时是通过 js 关闭，需要后退一个历史记录
    // 为 `true` 时是通过后退按钮关闭，不需要后退历史记录
    // setTimeout 的作用是：
    // 当同时关闭一个对话框，并打开另一个对话框时，使打开对话框的操作先执行，以使需要打开的对话框先加入队列
    setTimeout(() => {
      if (!this.isOpen()) {
        return;
      }

      currentInst = null;
      this.state = 'closing';
      this.triggerEvent('close'); // 所有对话框都关闭，且当前没有打开的对话框时，隐藏遮罩

      if (!queue(queueName).length && $overlay) {
        $.hideOverlay();
        $overlay = null; // 若仍存在遮罩，恢复遮罩的 z-index

        $('.mdui-overlay').css('z-index', 2000);
      }

      this.$element.removeClass('mdui-dialog-open').transitionEnd(() => this.transitionEnd());

      if (this.options.history && !queue(queueName).length) {
        if (!historyBack) {
          window.history.back();
        }

        $window.off('hashchange', this.hashchangeEvent);
      } // 关闭旧对话框，打开新对话框。
      // 加一点延迟，仅仅为了视觉效果更好。不加延时也不影响功能


      setTimeout(() => {
        dequeue(queueName);
      }, 100);
    });
  }
  /**
   * 切换对话框打开/关闭状态
   */


  toggle() {
    this.isOpen() ? this.close() : this.open();
  }
  /**
   * 获取对话框状态。共包含四种状态：`opening`、`opened`、`closing`、`closed`
   */


  getState() {
    return this.state;
  }
  /**
   * 销毁对话框
   */


  destroy() {
    if (this.append) {
      this.$element.remove();
    }

    if (!queue(queueName).length && !currentInst) {
      if ($overlay) {
        $.hideOverlay();
        $overlay = null;
      }

      if (isLockScreen) {
        $.unlockScreen();
        isLockScreen = false;
      }
    }
  }
  /**
   * 对话框内容变化时，需要调用该方法来调整对话框位置和滚动条高度
   */


  handleUpdate() {
    this.readjust();
  }

} // esc 按下时关闭对话框


$document.on('keydown', event => {
  if (currentInst && currentInst.options.closeOnEsc && currentInst.state === 'opened' && event.keyCode === 27) {
    currentInst.close();
  }
});
mdui.Dialog = Dialog;
const customAttr$7 = 'mdui-dialog';
const dataName$1 = '_mdui_dialog';
$(() => {
  $document.on('click', `[${customAttr$7}]`, function () {
    const options = parseOptions(this, customAttr$7);
    const selector = options.target;
    delete options.target;
    const $dialog = $(selector).first();
    let instance = $dialog.data(dataName$1);

    if (!instance) {
      instance = new mdui.Dialog($dialog, options);
      $dialog.data(dataName$1, instance);
    }

    instance.open();
  });
});
const DEFAULT_BUTTON = {
  text: '',
  bold: false,
  close: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {}
};
const DEFAULT_OPTIONS$7 = {
  title: '',
  content: '',
  buttons: [],
  stackedButtons: false,
  cssClass: '',
  history: true,
  overlay: true,
  modal: false,
  closeOnEsc: true,
  destroyOnClosed: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onOpen: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onOpened: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClosed: () => {}
};

mdui.dialog = function (options) {
  var _a, _b; // 合并配置参数


  options = extend({}, DEFAULT_OPTIONS$7, options);
  each(options.buttons, (i, button) => {
    options.buttons[i] = extend({}, DEFAULT_BUTTON, button);
  }); // 按钮的 HTML

  let buttonsHTML = '';

  if ((_a = options.buttons) === null || _a === void 0 ? void 0 : _a.length) {
    buttonsHTML = `<div class="mdui-dialog-actions${options.stackedButtons ? ' mdui-dialog-actions-stacked' : ''}">`;
    each(options.buttons, (_, button) => {
      buttonsHTML += '<a href="javascript:void(0)" ' + `class="mdui-btn mdui-ripple mdui-text-color-primary ${button.bold ? 'mdui-btn-bold' : ''}">${button.text}</a>`;
    });
    buttonsHTML += '</div>';
  } // Dialog 的 HTML


  const HTML = `<div class="mdui-dialog ${options.cssClass}">` + (options.title ? `<div class="mdui-dialog-title">${options.title}</div>` : '') + (options.content ? `<div class="mdui-dialog-content">${options.content}</div>` : '') + buttonsHTML + '</div>'; // 实例化 Dialog

  const instance = new mdui.Dialog(HTML, {
    history: options.history,
    overlay: options.overlay,
    modal: options.modal,
    closeOnEsc: options.closeOnEsc,
    destroyOnClosed: options.destroyOnClosed
  }); // 绑定按钮事件

  if ((_b = options.buttons) === null || _b === void 0 ? void 0 : _b.length) {
    instance.$element.find('.mdui-dialog-actions .mdui-btn').each((index, button) => {
      $(button).on('click', () => {
        options.buttons[index].onClick(instance);

        if (options.buttons[index].close) {
          instance.close();
        }
      });
    });
  } // 绑定打开关闭事件


  instance.$element.on('open.mdui.dialog', () => {
    options.onOpen(instance);
  }).on('opened.mdui.dialog', () => {
    options.onOpened(instance);
  }).on('close.mdui.dialog', () => {
    options.onClose(instance);
  }).on('closed.mdui.dialog', () => {
    options.onClosed(instance);
  });
  instance.open();
  return instance;
};

const DEFAULT_OPTIONS$8 = {
  confirmText: 'ok',
  history: true,
  modal: false,
  closeOnEsc: true,
  closeOnConfirm: true
};

mdui.alert = function (text, title, onConfirm, options) {
  if (isFunction(title)) {
    options = onConfirm;
    onConfirm = title;
    title = '';
  }

  if (isUndefined(onConfirm)) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onConfirm = () => {};
  }

  if (isUndefined(options)) {
    options = {};
  }

  options = extend({}, DEFAULT_OPTIONS$8, options);
  return mdui.dialog({
    title: title,
    content: text,
    buttons: [{
      text: options.confirmText,
      bold: false,
      close: options.closeOnConfirm,
      onClick: onConfirm
    }],
    cssClass: 'mdui-dialog-alert',
    history: options.history,
    modal: options.modal,
    closeOnEsc: options.closeOnEsc
  });
};

const DEFAULT_OPTIONS$9 = {
  confirmText: 'ok',
  cancelText: 'cancel',
  history: true,
  modal: false,
  closeOnEsc: true,
  closeOnCancel: true,
  closeOnConfirm: true
};

mdui.confirm = function (text, title, onConfirm, onCancel, options) {
  if (isFunction(title)) {
    options = onCancel;
    onCancel = onConfirm;
    onConfirm = title;
    title = '';
  }

  if (isUndefined(onConfirm)) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onConfirm = () => {};
  }

  if (isUndefined(onCancel)) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCancel = () => {};
  }

  if (isUndefined(options)) {
    options = {};
  }

  options = extend({}, DEFAULT_OPTIONS$9, options);
  return mdui.dialog({
    title: title,
    content: text,
    buttons: [{
      text: options.cancelText,
      bold: false,
      close: options.closeOnCancel,
      onClick: onCancel
    }, {
      text: options.confirmText,
      bold: false,
      close: options.closeOnConfirm,
      onClick: onConfirm
    }],
    cssClass: 'mdui-dialog-confirm',
    history: options.history,
    modal: options.modal,
    closeOnEsc: options.closeOnEsc
  });
};

const DEFAULT_OPTIONS$a = {
  confirmText: 'ok',
  cancelText: 'cancel',
  history: true,
  modal: false,
  closeOnEsc: true,
  closeOnCancel: true,
  closeOnConfirm: true,
  type: 'text',
  maxlength: 0,
  defaultValue: '',
  confirmOnEnter: false
};

mdui.prompt = function (label, title, onConfirm, onCancel, options) {
  if (isFunction(title)) {
    options = onCancel;
    onCancel = onConfirm;
    onConfirm = title;
    title = '';
  }

  if (isUndefined(onConfirm)) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onConfirm = () => {};
  }

  if (isUndefined(onCancel)) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCancel = () => {};
  }

  if (isUndefined(options)) {
    options = {};
  }

  options = extend({}, DEFAULT_OPTIONS$a, options);
  const content = '<div class="mdui-textfield">' + (label ? `<label class="mdui-textfield-label">${label}</label>` : '') + (options.type === 'text' ? `<input class="mdui-textfield-input" type="text" value="${options.defaultValue}" ${options.maxlength ? 'maxlength="' + options.maxlength + '"' : ''}/>` : '') + (options.type === 'textarea' ? `<textarea class="mdui-textfield-input" ${options.maxlength ? 'maxlength="' + options.maxlength + '"' : ''}>${options.defaultValue}</textarea>` : '') + '</div>';

  const onCancelClick = dialog => {
    const value = dialog.$element.find('.mdui-textfield-input').val();
    onCancel(value, dialog);
  };

  const onConfirmClick = dialog => {
    const value = dialog.$element.find('.mdui-textfield-input').val();
    onConfirm(value, dialog);
  };

  return mdui.dialog({
    title,
    content,
    buttons: [{
      text: options.cancelText,
      bold: false,
      close: options.closeOnCancel,
      onClick: onCancelClick
    }, {
      text: options.confirmText,
      bold: false,
      close: options.closeOnConfirm,
      onClick: onConfirmClick
    }],
    cssClass: 'mdui-dialog-prompt',
    history: options.history,
    modal: options.modal,
    closeOnEsc: options.closeOnEsc,
    onOpen: dialog => {
      // 初始化输入框
      const $input = dialog.$element.find('.mdui-textfield-input');
      mdui.updateTextFields($input); // 聚焦到输入框

      $input[0].focus(); // 捕捉文本框回车键，在单行文本框的情况下触发回调

      if (options.type !== 'textarea' && options.confirmOnEnter === true) {
        $input.on('keydown', event => {
          if (event.keyCode === 13) {
            const value = dialog.$element.find('.mdui-textfield-input').val();
            onConfirm(value, dialog);

            if (options.closeOnConfirm) {
              dialog.close();
            }

            return false;
          }

          return;
        });
      } // 如果是多行输入框，监听输入框的 input 事件，更新对话框高度


      if (options.type === 'textarea') {
        $input.on('input', () => dialog.handleUpdate());
      } // 有字符数限制时，加载完文本框后 DOM 会变化，需要更新对话框高度


      if (options.maxlength) {
        dialog.handleUpdate();
      }
    }
  });
};

const DEFAULT_OPTIONS$b = {
  position: 'auto',
  delay: 0,
  content: ''
};

class Tooltip {
  constructor(selector, options = {}) {
    /**
     * 配置参数
     */
    this.options = extend({}, DEFAULT_OPTIONS$b);
    /**
     * 当前 tooltip 的状态
     */

    this.state = 'closed';
    /**
     * setTimeout 的返回值
     */

    this.timeoutId = null;
    this.$target = $(selector).first();
    extend(this.options, options); // 创建 Tooltip HTML

    this.$element = $(`<div class="mdui-tooltip" id="${$.guid()}">${this.options.content}</div>`).appendTo(document.body); // 绑定事件。元素处于 disabled 状态时无法触发鼠标事件，为了统一，把 touch 事件也禁用
    // eslint-disable-next-line @typescript-eslint/no-this-alias

    const that = this;
    this.$target.on('touchstart mouseenter', function (event) {
      if (that.isDisabled(this)) {
        return;
      }

      if (!isAllow(event)) {
        return;
      }

      register(event);
      that.open();
    }).on('touchend mouseleave', function (event) {
      if (that.isDisabled(this)) {
        return;
      }

      if (!isAllow(event)) {
        return;
      }

      that.close();
    }).on(unlockEvent, function (event) {
      if (that.isDisabled(this)) {
        return;
      }

      register(event);
    });
  }
  /**
   * 元素是否已禁用
   * @param element
   */


  isDisabled(element) {
    return element.disabled || $(element).attr('disabled') !== undefined;
  }
  /**
   * 是否是桌面设备
   */


  isDesktop() {
    return $window.width() > 1024;
  }
  /**
   * 设置 Tooltip 的位置
   */


  setPosition() {
    let marginLeft;
    let marginTop; // 触发的元素

    const targetProps = this.$target[0].getBoundingClientRect(); // 触发的元素和 Tooltip 之间的距离

    const targetMargin = this.isDesktop() ? 14 : 24; // Tooltip 的宽度和高度

    const tooltipWidth = this.$element[0].offsetWidth;
    const tooltipHeight = this.$element[0].offsetHeight; // Tooltip 的方向

    let position = this.options.position; // 自动判断位置，加 2px，使 Tooltip 距离窗口边框至少有 2px 的间距

    if (position === 'auto') {
      if (targetProps.top + targetProps.height + targetMargin + tooltipHeight + 2 < $window.height()) {
        position = 'bottom';
      } else if (targetMargin + tooltipHeight + 2 < targetProps.top) {
        position = 'top';
      } else if (targetMargin + tooltipWidth + 2 < targetProps.left) {
        position = 'left';
      } else if (targetProps.width + targetMargin + tooltipWidth + 2 < $window.width() - targetProps.left) {
        position = 'right';
      } else {
        position = 'bottom';
      }
    } // 设置位置


    switch (position) {
      case 'bottom':
        marginLeft = -1 * (tooltipWidth / 2);
        marginTop = targetProps.height / 2 + targetMargin;
        this.$element.transformOrigin('top center');
        break;

      case 'top':
        marginLeft = -1 * (tooltipWidth / 2);
        marginTop = -1 * (tooltipHeight + targetProps.height / 2 + targetMargin);
        this.$element.transformOrigin('bottom center');
        break;

      case 'left':
        marginLeft = -1 * (tooltipWidth + targetProps.width / 2 + targetMargin);
        marginTop = -1 * (tooltipHeight / 2);
        this.$element.transformOrigin('center right');
        break;

      case 'right':
        marginLeft = targetProps.width / 2 + targetMargin;
        marginTop = -1 * (tooltipHeight / 2);
        this.$element.transformOrigin('center left');
        break;
    }

    const targetOffset = this.$target.offset();
    this.$element.css({
      top: `${targetOffset.top + targetProps.height / 2}px`,
      left: `${targetOffset.left + targetProps.width / 2}px`,
      'margin-left': `${marginLeft}px`,
      'margin-top': `${marginTop}px`
    });
  }
  /**
   * 触发组件事件
   * @param name
   */


  triggerEvent(name) {
    componentEvent(name, 'tooltip', this.$target, this);
  }
  /**
   * 动画结束回调
   */


  transitionEnd() {
    if (this.$element.hasClass('mdui-tooltip-open')) {
      this.state = 'opened';
      this.triggerEvent('opened');
    } else {
      this.state = 'closed';
      this.triggerEvent('closed');
    }
  }
  /**
   * 当前 tooltip 是否为打开状态
   */


  isOpen() {
    return this.state === 'opening' || this.state === 'opened';
  }
  /**
   * 执行打开 tooltip
   */


  doOpen() {
    this.state = 'opening';
    this.triggerEvent('open');
    this.$element.addClass('mdui-tooltip-open').transitionEnd(() => this.transitionEnd());
  }
  /**
   * 打开 Tooltip
   * @param options 允许每次打开时设置不同的参数
   */


  open(options) {
    if (this.isOpen()) {
      return;
    }

    const oldOptions = extend({}, this.options);

    if (options) {
      extend(this.options, options);
    } // tooltip 的内容有更新


    if (oldOptions.content !== this.options.content) {
      this.$element.html(this.options.content);
    }

    this.setPosition();

    if (this.options.delay) {
      this.timeoutId = setTimeout(() => this.doOpen(), this.options.delay);
    } else {
      this.timeoutId = null;
      this.doOpen();
    }
  }
  /**
   * 关闭 Tooltip
   */


  close() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    if (!this.isOpen()) {
      return;
    }

    this.state = 'closing';
    this.triggerEvent('close');
    this.$element.removeClass('mdui-tooltip-open').transitionEnd(() => this.transitionEnd());
  }
  /**
   * 切换 Tooltip 的打开状态
   */


  toggle() {
    this.isOpen() ? this.close() : this.open();
  }
  /**
   * 获取 Tooltip 状态。共包含四种状态：`opening`、`opened`、`closing`、`closed`
   */


  getState() {
    return this.state;
  }

}

mdui.Tooltip = Tooltip;
const customAttr$8 = 'mdui-tooltip';
const dataName$2 = '_mdui_tooltip';
$(() => {
  // mouseenter 不能冒泡，所以这里用 mouseover 代替
  $document.on('touchstart mouseover', `[${customAttr$8}]`, function () {
    const $target = $(this);
    let instance = $target.data(dataName$2);

    if (!instance) {
      instance = new mdui.Tooltip(this, parseOptions(this, customAttr$8));
      $target.data(dataName$2, instance);
    }
  });
});
const DEFAULT_OPTIONS$c = {
  message: '',
  timeout: 4000,
  position: 'bottom',
  buttonText: '',
  buttonColor: '',
  closeOnButtonClick: true,
  closeOnOutsideClick: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onButtonClick: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onOpen: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onOpened: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClosed: () => {}
};
/**
 * 当前打开着的 Snackbar
 */

let currentInst$1 = null;
/**
 * 队列名
 */

const queueName$1 = '_mdui_snackbar';

class Snackbar {
  constructor(options) {
    /**
     * 配置参数
     */
    this.options = extend({}, DEFAULT_OPTIONS$c);
    /**
     * 当前 Snackbar 的状态
     */

    this.state = 'closed';
    /**
     * setTimeout 的 ID
     */

    this.timeoutId = null;
    extend(this.options, options); // 按钮颜色

    let buttonColorStyle = '';
    let buttonColorClass = '';

    if (this.options.buttonColor.indexOf('#') === 0 || this.options.buttonColor.indexOf('rgb') === 0) {
      buttonColorStyle = `style="color:${this.options.buttonColor}"`;
    } else if (this.options.buttonColor !== '') {
      buttonColorClass = `mdui-text-color-${this.options.buttonColor}`;
    } // 添加 HTML


    this.$element = $('<div class="mdui-snackbar">' + `<div class="mdui-snackbar-text">${this.options.message}</div>` + (this.options.buttonText ? `<a href="javascript:void(0)" class="mdui-snackbar-action mdui-btn mdui-ripple mdui-ripple-white ${buttonColorClass}" ${buttonColorStyle}>${this.options.buttonText}</a>` : '') + '</div>').appendTo(document.body); // 设置位置

    this.setPosition('close');
    this.$element.reflow().addClass(`mdui-snackbar-${this.options.position}`);
  }
  /**
   * 点击 Snackbar 外面的区域关闭
   * @param event
   */


  closeOnOutsideClick(event) {
    const $target = $(event.target);

    if (!$target.hasClass('mdui-snackbar') && !$target.parents('.mdui-snackbar').length) {
      currentInst$1.close();
    }
  }
  /**
   * 设置 Snackbar 的位置
   * @param state
   */


  setPosition(state) {
    const snackbarHeight = this.$element[0].clientHeight;
    const position = this.options.position;
    let translateX;
    let translateY; // translateX

    if (position === 'bottom' || position === 'top') {
      translateX = '-50%';
    } else {
      translateX = '0';
    } // translateY


    if (state === 'open') {
      translateY = '0';
    } else {
      if (position === 'bottom') {
        translateY = snackbarHeight;
      }

      if (position === 'top') {
        translateY = -snackbarHeight;
      }

      if (position === 'left-top' || position === 'right-top') {
        translateY = -snackbarHeight - 24;
      }

      if (position === 'left-bottom' || position === 'right-bottom') {
        translateY = snackbarHeight + 24;
      }
    }

    this.$element.transform(`translate(${translateX},${translateY}px`);
  }
  /**
   * 打开 Snackbar
   */


  open() {
    if (this.state === 'opening' || this.state === 'opened') {
      return;
    } // 如果当前有正在显示的 Snackbar，则先加入队列，等旧 Snackbar 关闭后再打开


    if (currentInst$1) {
      queue(queueName$1, () => this.open());
      return;
    }

    currentInst$1 = this; // 开始打开

    this.state = 'opening';
    this.options.onOpen(this);
    this.setPosition('open');
    this.$element.transitionEnd(() => {
      if (this.state !== 'opening') {
        return;
      }

      this.state = 'opened';
      this.options.onOpened(this); // 有按钮时绑定事件

      if (this.options.buttonText) {
        this.$element.find('.mdui-snackbar-action').on('click', () => {
          this.options.onButtonClick(this);

          if (this.options.closeOnButtonClick) {
            this.close();
          }
        });
      } // 点击 snackbar 的事件


      this.$element.on('click', event => {
        if (!$(event.target).hasClass('mdui-snackbar-action')) {
          this.options.onClick(this);
        }
      }); // 点击 Snackbar 外面的区域关闭

      if (this.options.closeOnOutsideClick) {
        $document.on(startEvent, this.closeOnOutsideClick);
      } // 超时后自动关闭


      if (this.options.timeout) {
        this.timeoutId = setTimeout(() => this.close(), this.options.timeout);
      }
    });
  }
  /**
   * 关闭 Snackbar
   */


  close() {
    if (this.state === 'closing' || this.state === 'closed') {
      return;
    }

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    if (this.options.closeOnOutsideClick) {
      $document.off(startEvent, this.closeOnOutsideClick);
    }

    this.state = 'closing';
    this.options.onClose(this);
    this.setPosition('close');
    this.$element.transitionEnd(() => {
      if (this.state !== 'closing') {
        return;
      }

      currentInst$1 = null;
      this.state = 'closed';
      this.options.onClosed(this);
      this.$element.remove();
      dequeue(queueName$1);
    });
  }

}

mdui.snackbar = function (message, options = {}) {
  if (isString(message)) {
    options.message = message;
  } else {
    options = message;
  }

  const instance = new Snackbar(options);
  instance.open();
  return instance;
};

$(() => {
  // 切换导航项
  $document.on('click', '.mdui-bottom-nav>a', function () {
    const $item = $(this);
    const $bottomNav = $item.parent();
    $bottomNav.children('a').each((index, item) => {
      const isThis = $item.is(item);

      if (isThis) {
        componentEvent('change', 'bottomNav', $bottomNav[0], undefined, {
          index
        });
      }

      isThis ? $(item).addClass('mdui-bottom-nav-active') : $(item).removeClass('mdui-bottom-nav-active');
    });
  }); // 滚动时隐藏 mdui-bottom-nav-scroll-hide

  mdui.mutation('.mdui-bottom-nav-scroll-hide', function () {
    new mdui.Headroom(this, {
      pinnedClass: 'mdui-headroom-pinned-down',
      unpinnedClass: 'mdui-headroom-unpinned-down'
    });
  });
});
/**
 * layer 的 HTML 结构
 * @param index
 */

function layerHTML(index = false) {
  return `<div class="mdui-spinner-layer ${index ? `mdui-spinner-layer-${index}` : ''}">` + '<div class="mdui-spinner-circle-clipper mdui-spinner-left">' + '<div class="mdui-spinner-circle"></div>' + '</div>' + '<div class="mdui-spinner-gap-patch">' + '<div class="mdui-spinner-circle"></div>' + '</div>' + '<div class="mdui-spinner-circle-clipper mdui-spinner-right">' + '<div class="mdui-spinner-circle"></div>' + '</div>' + '</div>';
}
/**
 * 填充 HTML
 * @param spinner
 */


function fillHTML(spinner) {
  const $spinner = $(spinner);
  const layer = $spinner.hasClass('mdui-spinner-colorful') ? layerHTML(1) + layerHTML(2) + layerHTML(3) + layerHTML(4) : layerHTML();
  $spinner.html(layer);
}

$(() => {
  // 页面加载完后自动填充 HTML 结构
  mdui.mutation('.mdui-spinner', function () {
    fillHTML(this);
  });
});

mdui.updateSpinners = function (selector) {
  const $elements = isUndefined(selector) ? $('.mdui-spinner') : $(selector);
  $elements.each(function () {
    fillHTML(this);
  });
};

const DEFAULT_OPTIONS$d = {
  position: 'auto',
  align: 'auto',
  gutter: 16,
  fixed: false,
  covered: 'auto',
  subMenuTrigger: 'hover',
  subMenuDelay: 200
};

class Menu {
  constructor(anchorSelector, menuSelector, options = {}) {
    /**
     * 配置参数
     */
    this.options = extend({}, DEFAULT_OPTIONS$d);
    /**
     * 当前菜单状态
     */

    this.state = 'closed';
    this.$anchor = $(anchorSelector).first();
    this.$element = $(menuSelector).first(); // 触发菜单的元素 和 菜单必须是同级的元素，否则菜单可能不能定位

    if (!this.$anchor.parent().is(this.$element.parent())) {
      throw new Error('anchorSelector and menuSelector must be siblings');
    }

    extend(this.options, options); // 是否是级联菜单

    this.isCascade = this.$element.hasClass('mdui-menu-cascade'); // covered 参数处理

    this.isCovered = this.options.covered === 'auto' ? !this.isCascade : this.options.covered; // 点击触发菜单切换

    this.$anchor.on('click', () => this.toggle()); // 点击菜单外面区域关闭菜单

    $document.on('click touchstart', event => {
      const $target = $(event.target);

      if (this.isOpen() && !$target.is(this.$element) && !contains(this.$element[0], $target[0]) && !$target.is(this.$anchor) && !contains(this.$anchor[0], $target[0])) {
        this.close();
      }
    }); // 点击不含子菜单的菜单条目关闭菜单
    // eslint-disable-next-line @typescript-eslint/no-this-alias

    const that = this;
    $document.on('click', '.mdui-menu-item', function () {
      const $item = $(this);

      if (!$item.find('.mdui-menu').length && $item.attr('disabled') === undefined) {
        that.close();
      }
    }); // 绑定点击或鼠标移入含子菜单的条目的事件

    this.bindSubMenuEvent(); // 窗口大小变化时，重新调整菜单位置

    $window.on('resize', $.throttle(() => this.readjust(), 100));
  }
  /**
   * 是否为打开状态
   */


  isOpen() {
    return this.state === 'opening' || this.state === 'opened';
  }
  /**
   * 触发组件事件
   * @param name
   */


  triggerEvent(name) {
    componentEvent(name, 'menu', this.$element, this);
  }
  /**
   * 调整主菜单位置
   */


  readjust() {
    let menuLeft;
    let menuTop; // 菜单位置和方向

    let position;
    let align; // window 窗口的宽度和高度

    const windowHeight = $window.height();
    const windowWidth = $window.width(); // 配置参数

    const gutter = this.options.gutter;
    const isCovered = this.isCovered;
    const isFixed = this.options.fixed; // 动画方向参数

    let transformOriginX;
    let transformOriginY; // 菜单的原始宽度和高度

    const menuWidth = this.$element.width();
    const menuHeight = this.$element.height(); // 触发菜单的元素在窗口中的位置

    const anchorRect = this.$anchor[0].getBoundingClientRect();
    const anchorTop = anchorRect.top;
    const anchorLeft = anchorRect.left;
    const anchorHeight = anchorRect.height;
    const anchorWidth = anchorRect.width;
    const anchorBottom = windowHeight - anchorTop - anchorHeight;
    const anchorRight = windowWidth - anchorLeft - anchorWidth; // 触发元素相对其拥有定位属性的父元素的位置

    const anchorOffsetTop = this.$anchor[0].offsetTop;
    const anchorOffsetLeft = this.$anchor[0].offsetLeft; // 自动判断菜单位置

    if (this.options.position === 'auto') {
      if (anchorBottom + (isCovered ? anchorHeight : 0) > menuHeight + gutter) {
        // 判断下方是否放得下菜单
        position = 'bottom';
      } else if (anchorTop + (isCovered ? anchorHeight : 0) > menuHeight + gutter) {
        // 判断上方是否放得下菜单
        position = 'top';
      } else {
        // 上下都放不下，居中显示
        position = 'center';
      }
    } else {
      position = this.options.position;
    } // 自动判断菜单对齐方式


    if (this.options.align === 'auto') {
      if (anchorRight + anchorWidth > menuWidth + gutter) {
        // 判断右侧是否放得下菜单
        align = 'left';
      } else if (anchorLeft + anchorWidth > menuWidth + gutter) {
        // 判断左侧是否放得下菜单
        align = 'right';
      } else {
        // 左右都放不下，居中显示
        align = 'center';
      }
    } else {
      align = this.options.align;
    } // 设置菜单位置


    if (position === 'bottom') {
      transformOriginY = '0';
      menuTop = (isCovered ? 0 : anchorHeight) + (isFixed ? anchorTop : anchorOffsetTop);
    } else if (position === 'top') {
      transformOriginY = '100%';
      menuTop = (isCovered ? anchorHeight : 0) + (isFixed ? anchorTop - menuHeight : anchorOffsetTop - menuHeight);
    } else {
      transformOriginY = '50%'; // =====================在窗口中居中
      // 显示的菜单的高度，简单菜单高度不超过窗口高度，若超过了则在菜单内部显示滚动条
      // 级联菜单内部不允许出现滚动条

      let menuHeightTemp = menuHeight; // 简单菜单比窗口高时，限制菜单高度

      if (!this.isCascade) {
        if (menuHeight + gutter * 2 > windowHeight) {
          menuHeightTemp = windowHeight - gutter * 2;
          this.$element.height(menuHeightTemp);
        }
      }

      menuTop = (windowHeight - menuHeightTemp) / 2 + (isFixed ? 0 : anchorOffsetTop - anchorTop);
    }

    this.$element.css('top', `${menuTop}px`); // 设置菜单对齐方式

    if (align === 'left') {
      transformOriginX = '0';
      menuLeft = isFixed ? anchorLeft : anchorOffsetLeft;
    } else if (align === 'right') {
      transformOriginX = '100%';
      menuLeft = isFixed ? anchorLeft + anchorWidth - menuWidth : anchorOffsetLeft + anchorWidth - menuWidth;
    } else {
      transformOriginX = '50%'; //=======================在窗口中居中
      // 显示的菜单的宽度，菜单宽度不能超过窗口宽度

      let menuWidthTemp = menuWidth; // 菜单比窗口宽，限制菜单宽度

      if (menuWidth + gutter * 2 > windowWidth) {
        menuWidthTemp = windowWidth - gutter * 2;
        this.$element.width(menuWidthTemp);
      }

      menuLeft = (windowWidth - menuWidthTemp) / 2 + (isFixed ? 0 : anchorOffsetLeft - anchorLeft);
    }

    this.$element.css('left', `${menuLeft}px`); // 设置菜单动画方向

    this.$element.transformOrigin(`${transformOriginX} ${transformOriginY}`);
  }
  /**
   * 调整子菜单的位置
   * @param $submenu
   */


  readjustSubmenu($submenu) {
    const $item = $submenu.parent('.mdui-menu-item');
    let submenuTop;
    let submenuLeft; // 子菜单位置和方向

    let position;
    let align; // window 窗口的宽度和高度

    const windowHeight = $window.height();
    const windowWidth = $window.width(); // 动画方向参数

    let transformOriginX;
    let transformOriginY; // 子菜单的原始宽度和高度

    const submenuWidth = $submenu.width();
    const submenuHeight = $submenu.height(); // 触发子菜单的菜单项的宽度高度

    const itemRect = $item[0].getBoundingClientRect();
    const itemWidth = itemRect.width;
    const itemHeight = itemRect.height;
    const itemLeft = itemRect.left;
    const itemTop = itemRect.top; // 判断菜单上下位置

    if (windowHeight - itemTop > submenuHeight) {
      // 判断下方是否放得下菜单
      position = 'bottom';
    } else if (itemTop + itemHeight > submenuHeight) {
      // 判断上方是否放得下菜单
      position = 'top';
    } else {
      // 默认放在下方
      position = 'bottom';
    } // 判断菜单左右位置


    if (windowWidth - itemLeft - itemWidth > submenuWidth) {
      // 判断右侧是否放得下菜单
      align = 'left';
    } else if (itemLeft > submenuWidth) {
      // 判断左侧是否放得下菜单
      align = 'right';
    } else {
      // 默认放在右侧
      align = 'left';
    } // 设置菜单位置


    if (position === 'bottom') {
      transformOriginY = '0';
      submenuTop = '0';
    } else if (position === 'top') {
      transformOriginY = '100%';
      submenuTop = -submenuHeight + itemHeight;
    }

    $submenu.css('top', `${submenuTop}px`); // 设置菜单对齐方式

    if (align === 'left') {
      transformOriginX = '0';
      submenuLeft = itemWidth;
    } else if (align === 'right') {
      transformOriginX = '100%';
      submenuLeft = -submenuWidth;
    }

    $submenu.css('left', `${submenuLeft}px`); // 设置菜单动画方向

    $submenu.transformOrigin(`${transformOriginX} ${transformOriginY}`);
  }
  /**
   * 打开子菜单
   * @param $submenu
   */


  openSubMenu($submenu) {
    this.readjustSubmenu($submenu);
    $submenu.addClass('mdui-menu-open').parent('.mdui-menu-item').addClass('mdui-menu-item-active');
  }
  /**
   * 关闭子菜单，及其嵌套的子菜单
   * @param $submenu
   */


  closeSubMenu($submenu) {
    // 关闭子菜单
    $submenu.removeClass('mdui-menu-open').addClass('mdui-menu-closing').transitionEnd(() => $submenu.removeClass('mdui-menu-closing')) // 移除激活状态的样式
    .parent('.mdui-menu-item').removeClass('mdui-menu-item-active'); // 循环关闭嵌套的子菜单

    $submenu.find('.mdui-menu').each((_, menu) => {
      const $subSubmenu = $(menu);
      $subSubmenu.removeClass('mdui-menu-open').addClass('mdui-menu-closing').transitionEnd(() => $subSubmenu.removeClass('mdui-menu-closing')).parent('.mdui-menu-item').removeClass('mdui-menu-item-active');
    });
  }
  /**
   * 切换子菜单状态
   * @param $submenu
   */


  toggleSubMenu($submenu) {
    $submenu.hasClass('mdui-menu-open') ? this.closeSubMenu($submenu) : this.openSubMenu($submenu);
  }
  /**
   * 绑定子菜单事件
   */


  bindSubMenuEvent() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this; // 点击打开子菜单

    this.$element.on('click', '.mdui-menu-item', function (event) {
      const $item = $(this);
      const $target = $(event.target); // 禁用状态菜单不操作

      if ($item.attr('disabled') !== undefined) {
        return;
      } // 没有点击在子菜单的菜单项上时，不操作（点在了子菜单的空白区域、或分隔线上）


      if ($target.is('.mdui-menu') || $target.is('.mdui-divider')) {
        return;
      } // 阻止冒泡，点击菜单项时只在最后一级的 mdui-menu-item 上生效，不向上冒泡


      if (!$target.parents('.mdui-menu-item').first().is($item)) {
        return;
      } // 当前菜单的子菜单


      const $submenu = $item.children('.mdui-menu'); // 先关闭除当前子菜单外的所有同级子菜单

      $item.parent('.mdui-menu').children('.mdui-menu-item').each((_, item) => {
        const $tmpSubmenu = $(item).children('.mdui-menu');

        if ($tmpSubmenu.length && (!$submenu.length || !$tmpSubmenu.is($submenu))) {
          that.closeSubMenu($tmpSubmenu);
        }
      }); // 切换当前子菜单

      if ($submenu.length) {
        that.toggleSubMenu($submenu);
      }
    });

    if (this.options.subMenuTrigger === 'hover') {
      // 临时存储 setTimeout 对象
      let timeout = null;
      let timeoutOpen = null;
      this.$element.on('mouseover mouseout', '.mdui-menu-item', function (event) {
        const $item = $(this);
        const eventType = event.type;
        const $relatedTarget = $(event.relatedTarget); // 禁用状态的菜单不操作

        if ($item.attr('disabled') !== undefined) {
          return;
        } // 用 mouseover 模拟 mouseenter


        if (eventType === 'mouseover') {
          if (!$item.is($relatedTarget) && contains($item[0], $relatedTarget[0])) {
            return;
          }
        } // 用 mouseout 模拟 mouseleave
        else if (eventType === 'mouseout') {
            if ($item.is($relatedTarget) || contains($item[0], $relatedTarget[0])) {
              return;
            }
          } // 当前菜单项下的子菜单，未必存在


        const $submenu = $item.children('.mdui-menu'); // 鼠标移入菜单项时，显示菜单项下的子菜单

        if (eventType === 'mouseover') {
          if ($submenu.length) {
            // 当前子菜单准备打开时，如果当前子菜单正准备着关闭，不用再关闭了
            const tmpClose = $submenu.data('timeoutClose.mdui.menu');

            if (tmpClose) {
              clearTimeout(tmpClose);
            } // 如果当前子菜单已经打开，不操作


            if ($submenu.hasClass('mdui-menu-open')) {
              return;
            } // 当前子菜单准备打开时，其他准备打开的子菜单不用再打开了


            clearTimeout(timeoutOpen); // 准备打开当前子菜单

            timeout = timeoutOpen = setTimeout(() => that.openSubMenu($submenu), that.options.subMenuDelay);
            $submenu.data('timeoutOpen.mdui.menu', timeout);
          }
        } // 鼠标移出菜单项时，关闭菜单项下的子菜单
        else if (eventType === 'mouseout') {
            if ($submenu.length) {
              // 鼠标移出菜单项时，如果当前菜单项下的子菜单正准备打开，不用再打开了
              const tmpOpen = $submenu.data('timeoutOpen.mdui.menu');

              if (tmpOpen) {
                clearTimeout(tmpOpen);
              } // 准备关闭当前子菜单


              timeout = setTimeout(() => that.closeSubMenu($submenu), that.options.subMenuDelay);
              $submenu.data('timeoutClose.mdui.menu', timeout);
            }
          }
      });
    }
  }
  /**
   * 动画结束回调
   */


  transitionEnd() {
    this.$element.removeClass('mdui-menu-closing');

    if (this.state === 'opening') {
      this.state = 'opened';
      this.triggerEvent('opened');
    }

    if (this.state === 'closing') {
      this.state = 'closed';
      this.triggerEvent('closed'); // 关闭后，恢复菜单样式到默认状态，并恢复 fixed 定位

      this.$element.css({
        top: '',
        left: '',
        width: '',
        position: 'fixed'
      });
    }
  }
  /**
   * 切换菜单状态
   */


  toggle() {
    this.isOpen() ? this.close() : this.open();
  }
  /**
   * 打开菜单
   */


  open() {
    if (this.isOpen()) {
      return;
    }

    this.state = 'opening';
    this.triggerEvent('open');
    this.readjust();
    this.$element // 菜单隐藏状态使用使用 fixed 定位。
    .css('position', this.options.fixed ? 'fixed' : 'absolute').addClass('mdui-menu-open').transitionEnd(() => this.transitionEnd());
  }
  /**
   * 关闭菜单
   */


  close() {
    if (!this.isOpen()) {
      return;
    }

    this.state = 'closing';
    this.triggerEvent('close'); // 菜单开始关闭时，关闭所有子菜单

    this.$element.find('.mdui-menu').each((_, submenu) => {
      this.closeSubMenu($(submenu));
    });
    this.$element.removeClass('mdui-menu-open').addClass('mdui-menu-closing').transitionEnd(() => this.transitionEnd());
  }

}

mdui.Menu = Menu;
const customAttr$9 = 'mdui-menu';
const dataName$3 = '_mdui_menu';
$(() => {
  $document.on('click', `[${customAttr$9}]`, function () {
    const $this = $(this);
    let instance = $this.data(dataName$3);

    if (!instance) {
      const options = parseOptions(this, customAttr$9);
      const menuSelector = options.target;
      delete options.target;
      instance = new mdui.Menu($this, menuSelector, options);
      $this.data(dataName$3, instance);
      instance.toggle();
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (mdui);

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
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
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

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
  } else {
    style.removeAttribute('media');
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
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdui */ "./node_modules/mdui/dist/js/mdui.esm.js");
/* harmony import */ var mdui_dist_css_mdui_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdui/dist/css/mdui.css */ "./node_modules/mdui/dist/css/mdui.css");
/* harmony import */ var mdui_dist_css_mdui_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mdui_dist_css_mdui_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DropRecognition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropRecognition */ "../DropRecognition/dist/DropRecognition.js");
/* harmony import */ var _DropRecognition__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_DropRecognition__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var $ = mdui__WEBPACK_IMPORTED_MODULE_3__["default"].$;
var ItemtoName = {};
_DropRecognition__WEBPACK_IMPORTED_MODULE_5__["FontLoaded"].then(function () {
  $("#LoadingText").text("正在从企鹅物流获取物品列表");
  return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://penguin-stats.io/PenguinStats/api/v2/items");
})["catch"](function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./item.json */ "./src/item.json", 3));
}).then(function (data) {
  var _iterator = _createForOfIteratorHelper(data.data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var Item = _step.value;
      ItemtoName[Item.itemId] = Item.name;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  $("#LoadingText").text("正在从企鹅物流获取关卡列表");
  return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://penguin-stats.io/PenguinStats/api/v2/stages?server=CN");
})["catch"](function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ./stage.json */ "./src/stage.json", 3));
}).then(function (Stages) {
  var oStage = {};

  var _iterator2 = _createForOfIteratorHelper(Stages.data),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var Stage = _step2.value;
      oStage[Stage.code] = Stage;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  _DropRecognition__WEBPACK_IMPORTED_MODULE_5__["DropRecognition"].init("Stage", oStage);
  $("#LoadingText").text("正在获取物品图片列表");
  return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://static.bbaasite.cn/akitems/Items.json");
}).then(function (Items) {
  $("#LoadingText").text("正在加载物品图片");
  return loadImages(Items.data);
}).then(function (Images) {
  _DropRecognition__WEBPACK_IMPORTED_MODULE_5__["DropRecognition"].init("ItemImage", Images);
}).then(function () {
  $("#Loading").hide();
  $("#Main").show();
  $("button").on("click", function () {
    $("#File").get(0).click();
    $("#File").on("change", function () {
      var FileList = [];

      var _iterator3 = _createForOfIteratorHelper(this.files),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var File = _step3.value;

          try {
            if (!File.type.match("image.*")) {
              continue;
            }
          } catch (e) {
            continue;
          }

          FileList.push(File);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      nextFile(FileList);
    });
  });
});

function nextFile(FileList) {
  if (FileList.length == 0) {
    requestAnimationFrame(function () {
      mdui__WEBPACK_IMPORTED_MODULE_3__["default"].mutation();
    });
    return;
  }

  var Reader = new FileReader();

  Reader.onload = function () {
    Recognition(this.result).then(function () {
      requestAnimationFrame(function () {
        nextFile(FileList);
      });
    });
  };

  Reader.readAsDataURL(FileList.shift());
}

function Recognition(data) {
  return new Promise(function (reslove) {
    var img = new Image();
    var Element = $('<div class="mdui-row"></div>');
    var showImg = new Image();
    showImg.src = data;
    $(showImg).addClass("csc");
    Element.append($('<div class="mdui-col-xs-12 image-box"></div>').append(showImg));
    $("#DataArea").append(Element);

    img.onload = function () {
      setTimeout(function () {
        var Start = new Date().getTime();
        var Result;

        try {
          Result = new _DropRecognition__WEBPACK_IMPORTED_MODULE_5__["DropRecognition"](img);
        } catch (e) {
          Element.append($("<tr></tr>").text("发生错误" + e));
        }

        var End = new Date().getTime();
        console.log(Result);
        var TBody = Element.append("\n      <table class=\"mdui-table\">\n        <thead>\n          <tr>\n            <th>\u5173\u5361\u4EE3\u7801</th>\n            <th>".concat(Result.Stage.Code, "</th>\n            <th>\u53EF\u4FE1\u5EA6</th>\n            <th>").concat(Result.Stage.Confidence.toFixed(5), "</th>\n          </tr>\n        </thead>\n        <tbody></tbody>\n      </table>\n     ")).find("tbody");

        var _iterator4 = _createForOfIteratorHelper(Result.Items.entries()),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _step4$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_step4.value, 2),
                Index = _step4$value[0],
                Item = _step4$value[1];

            var tr = TBody.append("<tr></tr>").children().last();
            tr.append("<td>\u7269\u54C1".concat(Index + 1, "</td>"));
            tr.append("<td>\u7C7B\u578B:".concat(Item.type, "</td>"));

            if (Item.ItemId) {
              tr.append("<td>\u540D\u79F0:".concat(ItemtoName[Item.ItemId], "(").concat(Item.Confidence.ItemId.toFixed(5), ")</td>"));
              tr.append("<td>\u6570\u91CF:".concat(Item.Count, "(").concat(Item.Confidence.Count.map(function (a) {
                return a.toFixed(5);
              }).join(","), ")</td>"));
            } else {
              tr.append("<td>\u672A\u53C2\u4E0E\u8BC6\u522B</td>");
              tr.append("<td>\u672A\u53C2\u4E0E\u8BC6\u522B</td>");
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        TBody.append($("<tr></tr>").text("\u8BC6\u522B\u7528\u65F6".concat(End - Start, "ms")));
        reslove();
      }, 500);
    };

    img.src = data;
  });
}

function loadImages(_x) {
  return _loadImages.apply(this, arguments);
}

function _loadImages() {
  _loadImages = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Items) {
    var Count, ImageEle;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Count = 0;
            ImageEle = {};
            _context.next = 4;
            return new Promise(function (resolve) {
              var _iterator5 = _createForOfIteratorHelper(Items),
                  _step5;

              try {
                var _loop = function _loop() {
                  var Name = _step5.value;
                  var Img = new Image();
                  Img.crossOrigin = "Anonymous";
                  ImageEle[Name] = Img;

                  Img.onload = function () {
                    $("#LoadingText").text("\u6B63\u5728\u52A0\u8F7D\u7269\u54C1\u56FE\u7247".concat(Count + 1, "/").concat(Items.length));

                    if (++Count == Items.length) {
                      resolve();
                    }
                  };

                  Img.onerror = function () {
                    var _this = this;

                    setTimeout(function () {
                      var I = new Image();
                      ImageEle[Name] = I;
                      I.crossOrigin = "Anonymous";
                      I.onerror = _this.onerror;
                      I.onload = _this.onload;
                      Img.src = "https://static.bbaasite.cn/akitems/" + Name + ".png";
                    }, 1000);
                  };

                  Img.src = "https://static.bbaasite.cn/akitems/" + Name + ".png";
                };

                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            });

          case 4:
            return _context.abrupt("return", ImageEle);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadImages.apply(this, arguments);
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.9fd6e624.js.map