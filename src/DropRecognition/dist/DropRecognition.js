(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: DropRecognition, Rectangle, FontLoaded, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontLoaded", function() { return FontLoaded; });
/* harmony import */ var _src_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Rectangle */ "./src/Rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _src_Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_DropRecognition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/DropRecognition */ "./src/DropRecognition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropRecognition", function() { return _src_DropRecognition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_2__);



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

/* harmony default export */ __webpack_exports__["default"] = (_src_DropRecognition__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Data/Font.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Data/Font.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Novecento_WideBold_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Novecento WideBold.woff */ "./src/Data/Novecento WideBold.woff");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Novecento_WideBold_woff__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: \"Novecento WideBold\";\n  src:  url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-style: bold;\n}", "",{"version":3,"sources":["Font.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,6CAAsC;EACtC,gBAAgB;AAClB","file":"Font.css","sourcesContent":["@font-face {\n  font-family: \"Novecento WideBold\";\n  src:  url('./Novecento WideBold.woff');\n  font-style: bold;\n}"]}]);
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

/***/ "./node_modules/ssim.js/dist/ssim.web.js":
/*!***********************************************!*\
  !*** ./node_modules/ssim.js/dist/ssim.web.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=10)}([function(t,e,r){"use strict";function i(t){return a(t)/t.length}function a(t){for(var e=0,r=0;r<t.length;r++)e+=t[r];return e}function n(t){for(var e=t.data,r=0,i=0;i<e.length;i++)r+=e[i];return r}function d(t,e){for(var r=t.data,i=t.width,a=t.height,n=new Array(r.length),d=0;d<r.length;d++)n[d]=r[d]+e;return{data:n,width:i,height:a}}function o(t,e){return"number"==typeof e?function(t,e){for(var r=t.data,i=t.width,a=t.height,n=new Array(r.length),d=0;d<r.length;d++)n[d]=r[d]*e;return{data:n,width:i,height:a}}(t,e):function(t,e){for(var r=t.data,i=t.width,a=t.height,n=e.data,d=new Array(r.length),o=0;o<r.length;o++)d[o]=r[o]*n[o];return{data:d,width:i,height:a}}(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.covariance=e.variance=e.mean2d=e.square2d=e.multiply2d=e.divide2d=e.subtract2d=e.add2d=e.sum2d=e.floor=e.sum=e.average=void 0,e.average=i,e.sum=a,e.floor=function(t){for(var e=new Array(t.length),r=0;r<t.length;r++)e[r]=Math.floor(t[r]);return e},e.sum2d=n,e.add2d=function(t,e){return"number"==typeof e?d(t,e):function(t,e){for(var r=t.data,i=t.width,a=t.height,n=e.data,d=new Array(r.length),o=0;o<a;o++)for(var u=o*i,h=0;h<i;h++)d[u+h]=r[u+h]+n[u+h];return{data:d,width:i,height:a}}(t,e)},e.subtract2d=function(t,e){return"number"==typeof e?d(t,-e):function(t,e){for(var r=t.data,i=t.width,a=t.height,n=e.data,d=new Array(r.length),o=0;o<a;o++)for(var u=o*i,h=0;h<i;h++)d[u+h]=r[u+h]-n[u+h];return{data:d,width:i,height:a}}(t,e)},e.divide2d=function(t,e){return"number"==typeof e?function(t,e){for(var r=t.data,i=t.width,a=t.height,n=new Array(r.length),d=0;d<r.length;d++)n[d]=r[d]/e;return{data:n,width:i,height:a}}(t,e):function(t,e){for(var r=t.data,i=t.width,a=t.height,n=e.data,d=new Array(r.length),o=0;o<r.length;o++)d[o]=r[o]/n[o];return{data:d,width:i,height:a}}(t,e)},e.multiply2d=o,e.square2d=function(t){return o(t,t)},e.mean2d=function(t){return n(t)/t.data.length},e.variance=function(t,e){void 0===e&&(e=i(t));for(var r=0,a=t.length;a--;)r+=Math.pow(t[a]-e,2);return r/t.length},e.covariance=function(t,e,r,a){void 0===r&&(r=i(t)),void 0===a&&(a=i(e));for(var n=0,d=t.length;d--;)n+=(t[d]-r)*(e[d]-a);return n/t.length}},function(t,e,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(t,e,r,i){void 0===i&&(i=r),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,i){void 0===i&&(i=r),t[i]=e[r]}),a=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||e.hasOwnProperty(r)||i(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),a(r(2),e),a(r(7),e),a(r(11),e),a(r(12),e),a(r(13),e),a(r(3),e),a(r(9),e),a(r(14),e),a(r(15),e),a(r(5),e),a(r(16),e),a(r(6),e)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.conv2=void 0;var i=r(0),a=r(3),n=r(5),d=r(6);function o(t,e,r){var i=t.data,a=t.width,n=t.height;void 0===r&&(r="full");for(var o=a+e.width-1,u=n+e.height-1,h=d.zeros(u,o).data,f=0;f<e.height;f++)for(var s=0;s<e.width;s++){var v=e.data[f*e.width+s];if(v)for(var c=0;c<n;c++)for(var w=0;w<a;w++)h[(c+f)*o+w+s]+=i[c*a+w]*v}return l({data:h,width:o,height:u},r,n,e.height,a,e.width)}function u(t,e,r){var n=e.data,d=e.width,o=e.height;void 0===r&&(r="full");var u=f(t,a.ones(o,1),a.ones(1,d),r);return i.multiply2d(u,n[0])}function h(t){for(var e=t.data,r=e[0],i=1;i<e.length;i++)if(e[i]!==r)return!1;return!0}function f(t,e,r,i){void 0===i&&(i="full");var a=Math.max(e.height,e.width),n=Math.max(r.height,r.width),d=o(t,e,"full");return l(o(d,r,"full"),i,t.height,a,t.width,n)}function l(t,e,r,i,a,d){if("full"===e)return t;if("same"===e){var o=Math.ceil((t.height-r)/2),u=Math.ceil((t.width-a)/2);return n.sub(t,o,r,u,a)}return n.sub(t,i-1,r-i+1,d-1,a-d+1)}e.conv2=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t[2]&&t[2].data?f.apply(void 0,t):h(t[1])?u.apply(void 0,t):o.apply(void 0,t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ones=void 0;var i=r(4);e.ones=function(t,e){return void 0===e&&(e=t),i.numbers(t,e,1)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.numbers=void 0,e.numbers=function(t,e,r){for(var i=e*t,a=new Array(i),n=0;n<i;n++)a[n]=r;return{data:a,width:e,height:t}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sub=void 0,e.sub=function(t,e,r,i,a){for(var n=t.data,d=t.width,o=new Array(a*r),u=0;u<r;u++)for(var h=0;h<a;h++)o[u*a+h]=n[(i+u)*d+e+h];return{data:o,width:a,height:r}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.zeros=void 0;var i=r(4);e.zeros=function(t,e){return void 0===e&&(e=t),i.numbers(t,e,0)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.filter2=void 0;var i=r(2);e.filter2=function(t,e,r){return void 0===r&&(r="same"),i.conv2(e,function(t){for(var e=t.data,r=t.width,i=t.height,a=new Array(e.length),n=0;n<i;n++)for(var d=0;d<r;d++)a[n*r+d]=e[(i-1-n)*r+r-1-d];return{data:a,width:r,height:i}}(t),r)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mod=void 0,e.mod=function(t,e){return t-e*Math.floor(t/e)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.padarray=void 0;var i=r(8);function a(t,e){for(var r=t.width+2*e,a=new Array(r*t.height),n=function(t,e){for(var r=t.width+e.width,i=new Array(t.height*r),a=0;a<t.height;a++){for(var n=0;n<t.width;n++)i[a*r+n]=t.data[a*t.width+n];for(n=0;n<e.width;n++)i[a*r+n+t.width]=e.data[a*e.width+n]}return{data:i,width:r,height:t.height}}(t,function(t){for(var e=t.data,r=t.width,i=t.height,a=new Array(e.length),n=0;n<i;n++)for(var d=0;d<r;d++)a[n*r+d]=e[n*r+r-1-d];return{data:a,width:r,height:i}}(t)),d=0;d<t.height;d++)for(var o=-e;o<t.width+e;o++)a[d*r+o+e]=n.data[d*n.width+i.mod(o,n.width)];return{data:a,width:r,height:t.height}}function n(t,e){for(var r=function(t,e){return{data:t.data.concat(e.data),height:t.height+e.height,width:t.width}}(t,function(t){for(var e=t.data,r=t.width,i=t.height,a=new Array(e.length),n=0;n<i;n++)for(var d=0;d<r;d++)a[n*r+d]=e[(i-1-n)*r+d];return{data:a,width:r,height:i}}(t)),a=t.height+2*e,n=new Array(t.width*a),d=-e;d<t.height+e;d++)for(var o=0;o<t.width;o++)n[(d+e)*t.width+o]=r.data[i.mod(d,r.height)*t.width+o];return{data:n,width:t.width,height:a}}e.padarray=function(t,e,r,i){var d=e[0],o=e[1];return t.height>=d&&t.width>=o?function(t,e){for(var r=e[0],i=e[1],a=t.width+2*i,n=t.height+2*r,d=new Array(a*n),o=-r;o<0;o++){for(var u=-i;u<0;u++)d[(o+r)*a+u+i]=t.data[(Math.abs(o)-1)*t.width+Math.abs(u)-1];for(u=0;u<t.width;u++)d[(o+r)*a+u+i]=t.data[(Math.abs(o)-1)*t.width+u];for(u=t.width;u<t.width+i;u++)d[(o+r)*a+u+i]=t.data[(Math.abs(o)-1)*t.width+2*t.width-u-1]}for(o=0;o<t.height;o++){for(u=-i;u<0;u++)d[(o+r)*a+u+i]=t.data[o*t.width+Math.abs(u)-1];for(u=0;u<t.width;u++)d[(o+r)*a+u+i]=t.data[o*t.width+u];for(u=t.width;u<t.width+i;u++)d[(o+r)*a+u+i]=t.data[o*t.width+2*t.width-u-1]}for(o=t.height;o<t.height+r;o++){for(u=-i;u<0;u++)d[(o+r)*a+u+i]=t.data[(2*t.height-o-1)*t.width+Math.abs(u)-1];for(u=0;u<t.width;u++)d[(o+r)*a+u+i]=t.data[(2*t.height-o-1)*t.width+u];for(u=t.width;u<t.width+i;u++)d[(o+r)*a+u+i]=t.data[(2*t.height-o-1)*t.width+2*t.width-u-1]}return{data:d,width:a,height:n}}(t,[d,o]):n(a(t,o),d)}},function(t,e,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.ssim=void 0;var a=r(1),n=r(0),d=r(17),o=r(18),u=r(19),h=r(20),f=r(21),l={fast:d.ssim,original:o.originalSsim,bezkrovny:u.bezkrovnySsim};function s(t){var e=i(i({},f.defaults),t);return function(t){if(Object.keys(t).forEach((function(t){if(!(t in f.defaults))throw new Error('"'+t+'" is not a valid option')})),"k1"in t&&("number"!=typeof t.k1||t.k1<0))throw new Error("Invalid k1 value. Default is "+f.defaults.k1);if("k2"in t&&("number"!=typeof t.k2||t.k2<0))throw new Error("Invalid k2 value. Default is "+f.defaults.k2);if(!(t.ssim in l))throw new Error("Invalid ssim option (use: "+Object.keys(l).join(", ")+")")}(e),e}function v(t,e,r){var i=(new Date).getTime(),d=function(t){var e=t[0],r=t[1],i=t[2];return l[i.ssim](e,r,i)}(function(t){var e=t[0],r=t[1],i=t[2],a=h.downsample([e,r],i);return[a[0],a[1],i]}(function(t){var e=t[0],r=t[1],i=t[2];return[a.rgb2gray(e),a.rgb2gray(r),i]}(function(t){var e=t[0],r=t[1],i=t[2];if(e.width!==r.width||e.height!==r.height)throw new Error("Image dimensions do not match");return[e,r,i]}([t,e,s(r)]))));return{ssim_map:d,mssim:n.mean2d(d),performance:(new Date).getTime()-i}}e.ssim=v,e.default=v},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fspecial=void 0;var i=r(0);e.fspecial=function(t,e,r){void 0===e&&(e=3),void 0===r&&(r=1.5);var a=function(t,e){for(var r=t.data,i=t.width,a=t.height,n=new Array(r.length),d=0;d<r.length;d++)n[d]=Math.exp(-r[d]/(2*Math.pow(e,2)));return{data:n,width:i,height:a}}(function(t){for(var e=2*t+1,r=new Array(Math.pow(e,2)),i=0;i<e;i++)for(var a=0;a<e;a++)r[i*e+a]=Math.pow(i-t,2)+Math.pow(a-t,2);return{data:r,width:e,height:e}}(e=(e-1)/2),r),n=i.sum2d(a);return i.divide2d(a,n)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imfilter=void 0;var i=r(8),a=r(9),n=r(0),d=r(7);e.imfilter=function(t,e,r,o){return void 0===r&&(r="symmetric"),void 0===o&&(o="same"),t=function(t,e,r,d){if(t=a.padarray(t,n.floor([e/2,r/2]),d),0===i.mod(e,2)&&(t.data=t.data.slice(0,-t.width),t.height--),0===i.mod(r,2)){for(var o=[],u=0;u<t.data.length;u++)(u+1)%t.width!=0&&o.push(t.data[u]);t.data=o,t.width--}return t}(t,e.width,e.height,r),o=function(t){return"same"===t&&(t="valid"),t}(o),d.filter2(e,t,o)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.normpdf=void 0,e.normpdf=function(t,e,r){var i=t.data,a=t.width,n=t.height;void 0===e&&(e=0),void 0===r&&(r=1);for(var d=new Array(i.length),o=0;o<i.length;o++){var u=(i[o]-e)/r;d[o]=Math.exp(-Math.pow(u,2)/2)/(2.5066282746310007*r)}return{data:d,width:a,height:n}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.rgb2gray=void 0,e.rgb2gray=function(t){for(var e,r,i,a=t.data,n=t.width,d=t.height,o=new Array(n*d),u=0;u<d;u++)for(var h=0;h<n;h++){var f=h+u*n,l=4*f;o[f]=(e=a[l],r=a[l+1],i=a[l+2],Math.round(.29894*e+.58704*r+.11402*i))}return{data:o,width:n,height:d}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.skip2d=void 0,e.skip2d=function(t,e,r){for(var i=e[0],a=e[1],n=e[2],d=r[0],o=r[1],u=r[2],h=Math.ceil((u-d)/o),f=Math.ceil((n-i)/a),l=new Array(h*f),s=0;s<f;s++)for(var v=0;v<h;v++){var c=i+s*a,w=d+v*o;l[s*h+v]=t.data[c*t.width+w]}return{data:l,width:h,height:f}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.transpose=void 0,e.transpose=function(t){for(var e=t.data,r=t.width,i=t.height,a=new Array(r*i),n=0;n<i;n++)for(var d=0;d<r;d++)a[d*i+n]=e[n*r+d];return{data:a,height:r,width:i}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ssim=void 0;var i=r(0),a=r(1);e.ssim=function(t,e,r){var n=a.normpdf(function(t){for(var e=Math.floor(t/2),r=new Array(2*e+1),i=-e;i<=e;i++)r[i+e]=Math.abs(i);return{data:r,width:r.length,height:1}}(r.windowSize),0,1.5),d=Math.pow(2,r.bitDepth)-1,o=Math.pow(r.k1*d,2),u=Math.pow(r.k2*d,2);n=i.divide2d(n,i.sum2d(n));var h=a.transpose(n),f=a.conv2(t,n,h,"valid"),l=a.conv2(e,n,h,"valid"),s=i.square2d(f),v=i.square2d(l),c=i.multiply2d(f,l),w=i.square2d(t),g=i.square2d(e),p=i.subtract2d(a.conv2(w,n,h,"valid"),s),y=i.subtract2d(a.conv2(g,n,h,"valid"),v),m=i.subtract2d(a.conv2(i.multiply2d(t,e),n,h,"valid"),c);return o>0&&u>0?function(t,e,r,a,n,d,o,u){var h=i.add2d(i.multiply2d(t,2),o),f=i.add2d(i.multiply2d(e,2),u),l=i.add2d(i.add2d(r,a),o),s=i.add2d(i.add2d(n,d),u);return i.divide2d(i.multiply2d(h,f),i.multiply2d(l,s))}(c,m,s,v,p,y,o,u):function(t,e,r,a,n,d){var o=i.multiply2d(t,2),u=i.multiply2d(e,2),h=i.add2d(r,a),f=i.add2d(n,d);return i.divide2d(i.multiply2d(o,u),i.multiply2d(h,f))}(c,m,s,v,p,y)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.originalSsim=void 0;var i=r(0),a=r(1);e.originalSsim=function(t,e,r){var n=a.fspecial("gaussian",r.windowSize,1.5),d=Math.pow(2,r.bitDepth)-1,o=Math.pow(r.k1*d,2),u=Math.pow(r.k2*d,2);n=i.divide2d(n,i.sum2d(n));var h=a.filter2(n,t,"valid"),f=a.filter2(n,e,"valid"),l=i.square2d(h),s=i.square2d(f),v=i.multiply2d(h,f),c=i.square2d(t),w=i.square2d(e),g=i.subtract2d(a.filter2(n,c,"valid"),l),p=i.subtract2d(a.filter2(n,w,"valid"),s),y=i.subtract2d(a.filter2(n,i.multiply2d(t,e),"valid"),v);if(o>0&&u>0){var m=i.add2d(i.multiply2d(v,2),o),b=i.add2d(i.multiply2d(y,2),u),M=i.add2d(i.add2d(l,s),o),_=i.add2d(i.add2d(g,p),u);return i.divide2d(i.multiply2d(m,b),i.multiply2d(M,_))}var j=i.multiply2d(v,2),O=i.multiply2d(y,2),P=i.add2d(l,s),k=i.add2d(g,p);return i.divide2d(i.multiply2d(j,O),i.multiply2d(P,k))}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.bezkrovnySsim=void 0;var i=r(0),a=r(1);function n(t,e,r){var a=t.data,n=e.data,d=r.bitDepth,o=r.k1,u=r.k2,h=Math.pow(2,d)-1,f=Math.pow(o*h,2),l=Math.pow(u*h,2),s=i.average(a),v=i.average(n),c=i.variance(a,s),w=i.variance(n,v);return(2*s*v+f)*(2*i.covariance(a,n,s,v)+l)/((Math.pow(s,2)+Math.pow(v,2)+f)*(c+w+l))}e.bezkrovnySsim=function(t,e,r){for(var i=r.windowSize,d=Math.ceil(t.width/i),o=Math.ceil(t.height/i),u=new Array(d*o),h=0,f=0;f<t.height;f+=i)for(var l=0;l<t.width;l+=i){var s=Math.min(i,t.width-l),v=Math.min(i,t.height-f),c=a.sub(t,l,v,f,s),w=a.sub(e,l,v,f,s);u[h++]=n(c,w,r)}return{data:u,width:d,height:o}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.downsample=void 0;var i=r(0),a=r(1);function n(t,e,r){var i=a.imfilter(t,e,"symmetric","same");return a.skip2d(i,[0,r,i.height],[0,r,i.width])}e.downsample=function(t,e){return"original"===e.downsample?function(t,e,r){void 0===r&&(r=256);var d=Math.min(t.width,e.height)/r,o=Math.round(d);if(o>1){var u=a.ones(o);t=n(t,u=i.divide2d(u,i.sum2d(u)),o),e=n(e,u,o)}return[t,e]}(t[0],t[1],e.maxSize):t}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.defaults=void 0,e.defaults={windowSize:11,k1:.01,k2:.03,bitDepth:8,downsample:"original",ssim:"fast",maxSize:256}}])}));
//# sourceMappingURL=ssim.web.js.map

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

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());


/***/ }),

/***/ "./src/ConnectedAreaRecognition.js":
/*!*****************************************!*\
  !*** ./src/ConnectedAreaRecognition.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConnectedAreaRecognition; });
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle */ "./src/Rectangle.js");

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
        Matrix[aVertex[1]-Result.top][aVertex[0]-Result.left] = true;
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
      let Result = Callback
        ? this.GetConnectedArea([Math.floor(Vertex / 10000), Vertex % 10000], Callback)
        : this.GetConnectedArea([Math.floor(Vertex / 10000), Vertex % 10000]);
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
    let Direction = [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0]
    ];
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
        if (
          NextVertex[0] < 0 ||
          NextVertex[1] < 0 ||
          NextVertex[0] >= Matrix[0].length ||
          NextVertex[1] >= Matrix.length
        )
          continue;
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


/***/ }),

/***/ "./src/Data/Font.css":
/*!***************************!*\
  !*** ./src/Data/Font.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Font.css */ "./node_modules/css-loader/dist/cjs.js!./src/Data/Font.css");

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

/***/ "./src/Data/Novecento WideBold.woff":
/*!******************************************!*\
  !*** ./src/Data/Novecento WideBold.woff ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:font/woff;base64,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");

/***/ }),

/***/ "./src/Data/NumberHashList.json":
/*!**************************************!*\
  !*** ./src/Data/NumberHashList.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"number\":0,\"hash\":[2,9,8,3,0,0,0,0,10,2,0,0,10,10,1,0,10,0,0,0,0,10,8,0,3,0,0,0,0,6,10,2,0,0,0,0,0,4,10,3,0,0,0,0,0,4,10,3,3,0,0,0,0,5,10,2,9,0,0,0,0,9,9,0,10,3,0,0,10,10,1,0,3,9,10,3,0,0,0,0],\"count\":10},{\"number\":1,\"hash\":[51,47,37,22,0,0,0,0,54,25,46,29,0,0,0,0,0,6,45,43,0,0,0,0,0,1,45,43,0,0,0,0,0,1,45,43,0,0,0,0,0,2,45,43,0,0,0,0,0,2,45,43,0,0,0,0,0,1,45,43,0,0,0,0,3,6,48,44,0,0,0,0,16,1,1,0,0,0,0,0],\"count\":60},{\"number\":2,\"hash\":[35,33,14,2,1,1,0,0,9,0,0,3,33,33,3,0,0,0,0,0,24,36,13,0,0,0,0,0,23,36,14,0,0,0,0,0,29,36,3,0,0,0,0,14,36,12,1,0,0,4,28,36,4,1,0,0,15,32,31,5,0,0,0,0,36,24,3,0,1,2,0,0,9,0,1,1,0,1,1,0],\"count\":36},{\"number\":3,\"hash\":[31,28,14,6,0,0,0,0,27,1,0,0,29,30,6,0,0,0,0,0,13,31,16,0,0,0,0,0,23,29,8,0,3,25,32,10,6,0,0,0,2,19,25,14,23,11,1,0,0,0,0,0,5,28,29,2,0,0,0,0,1,23,31,5,1,0,0,1,17,32,25,2,32,21,6,2,1,0,0,0],\"count\":32},{\"number\":4,\"hash\":[0,0,0,12,30,17,0,0,0,0,16,30,15,0,0,0,0,2,30,26,0,13,0,0,1,30,29,0,18,30,0,0,27,30,1,0,24,30,0,0,30,4,0,0,24,30,0,0,12,0,0,2,11,9,0,0,3,0,0,3,29,27,0,0,0,0,0,0,22,30,0,0,0,0,0,0,22,30,0,0],\"count\":30},{\"number\":5,\"hash\":[34,11,2,0,0,0,0,0,33,1,0,0,1,1,0,0,32,1,0,0,0,0,0,0,31,0,1,5,0,0,0,0,33,0,0,0,21,18,1,0,10,0,0,0,20,35,33,2,0,0,0,0,0,25,35,6,0,0,0,0,2,29,34,4,0,0,0,3,30,36,23,0,36,25,8,1,3,0,0,0],\"count\":36},{\"number\":6,\"hash\":[3,10,13,8,2,0,0,0,13,9,0,0,1,9,7,0,13,0,0,0,0,0,0,0,6,0,0,3,1,0,0,0,0,0,6,3,2,3,0,0,0,0,0,0,6,13,10,0,2,0,0,0,0,9,13,1,10,0,0,0,0,10,13,1,13,3,0,0,5,13,9,0,7,11,12,5,0,0,0,0],\"count\":13},{\"number\":7,\"hash\":[5,1,1,0,0,0,0,0,2,0,0,0,12,19,8,0,0,0,0,1,18,18,1,0,0,0,0,4,19,0,0,0,0,0,2,19,7,0,0,0,0,0,8,19,0,0,0,0,0,1,18,17,0,0,0,0,0,1,19,14,0,0,0,0,0,2,19,12,0,0,0,0,0,3,19,10,0,0,0,0],\"count\":19},{\"number\":8,\"hash\":[12,18,18,8,1,0,0,0,19,3,0,0,13,19,8,0,16,0,0,0,3,17,17,1,19,1,0,0,3,19,17,0,13,19,8,0,3,8,0,0,19,12,0,5,16,6,0,0,9,0,0,0,5,18,19,5,1,0,0,0,0,6,19,11,13,0,0,0,6,18,17,4,17,19,13,5,3,3,0,0],\"count\":19},{\"number\":9,\"hash\":[14,17,11,2,1,0,0,0,13,0,0,0,14,16,4,0,1,0,0,0,4,14,16,1,0,0,0,0,0,10,17,3,8,0,0,0,8,16,16,0,17,8,1,0,7,2,10,2,0,3,3,0,0,11,17,2,0,0,0,0,4,16,15,0,12,2,0,1,17,17,1,0,17,10,5,3,0,0,0,0],\"count\":17}]");

/***/ }),

/***/ "./src/Data/StageFontSize.json":
/*!*************************************!*\
  !*** ./src/Data/StageFontSize.json ***!
  \*************************************/
/*! exports provided: 10px, 11px, 12px, 13px, 14px, 15px, 16px, 17px, 18px, 19px, 20px, 21px, 22px, 23px, 24px, 25px, 26px, 27px, 28px, 29px, 30px, 31px, 32px, 33px, 34px, 35px, 36px, 37px, 38px, 39px, 40px, 41px, 42px, 43px, 44px, 45px, 46px, 47px, 48px, 49px, 50px, 51px, 52px, 53px, 54px, 55px, 56px, 57px, 58px, 59px, 60px, 61px, 62px, 63px, 64px, 65px, 66px, 67px, 68px, 69px, 70px, 71px, 72px, 73px, 74px, 75px, 76px, 77px, 78px, 79px, 80px, 81px, 82px, 83px, 84px, 85px, 86px, 87px, 88px, 89px, 90px, 91px, 92px, 93px, 94px, 95px, 96px, 97px, 98px, 99px, 100px, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"10px\":{\"width\":6,\"height\":2},\"11px\":{\"width\":6,\"height\":2},\"12px\":{\"width\":7,\"height\":2},\"13px\":{\"width\":6,\"height\":2},\"14px\":{\"width\":7,\"height\":2},\"15px\":{\"width\":7,\"height\":3},\"16px\":{\"width\":8,\"height\":3},\"17px\":{\"width\":9,\"height\":3},\"18px\":{\"width\":9,\"height\":3},\"19px\":{\"width\":10,\"height\":3},\"20px\":{\"width\":10,\"height\":3},\"21px\":{\"width\":11,\"height\":3},\"22px\":{\"width\":11,\"height\":3},\"23px\":{\"width\":12,\"height\":4},\"24px\":{\"width\":12,\"height\":4},\"25px\":{\"width\":13,\"height\":4},\"26px\":{\"width\":12,\"height\":4},\"27px\":{\"width\":13,\"height\":4},\"28px\":{\"width\":13,\"height\":4},\"29px\":{\"width\":14,\"height\":4},\"30px\":{\"width\":14,\"height\":5},\"31px\":{\"width\":15,\"height\":5},\"32px\":{\"width\":15,\"height\":5},\"33px\":{\"width\":16,\"height\":5},\"34px\":{\"width\":17,\"height\":5},\"35px\":{\"width\":17,\"height\":5},\"36px\":{\"width\":18,\"height\":5},\"37px\":{\"width\":18,\"height\":6},\"38px\":{\"width\":19,\"height\":6},\"39px\":{\"width\":18,\"height\":6},\"40px\":{\"width\":19,\"height\":6},\"41px\":{\"width\":19,\"height\":6},\"42px\":{\"width\":20,\"height\":6},\"43px\":{\"width\":20,\"height\":6},\"44px\":{\"width\":21,\"height\":7},\"45px\":{\"width\":21,\"height\":7},\"46px\":{\"width\":22,\"height\":7},\"47px\":{\"width\":22,\"height\":7},\"48px\":{\"width\":23,\"height\":7},\"49px\":{\"width\":24,\"height\":7},\"50px\":{\"width\":24,\"height\":7},\"51px\":{\"width\":25,\"height\":7},\"52px\":{\"width\":24,\"height\":8},\"53px\":{\"width\":25,\"height\":8},\"54px\":{\"width\":25,\"height\":8},\"55px\":{\"width\":26,\"height\":8},\"56px\":{\"width\":26,\"height\":8},\"57px\":{\"width\":27,\"height\":8},\"58px\":{\"width\":27,\"height\":8},\"59px\":{\"width\":28,\"height\":9},\"60px\":{\"width\":28,\"height\":9},\"61px\":{\"width\":29,\"height\":9},\"62px\":{\"width\":29,\"height\":9},\"63px\":{\"width\":30,\"height\":9},\"64px\":{\"width\":30,\"height\":9},\"65px\":{\"width\":30,\"height\":9},\"66px\":{\"width\":30,\"height\":10},\"67px\":{\"width\":31,\"height\":10},\"68px\":{\"width\":32,\"height\":10},\"69px\":{\"width\":32,\"height\":10},\"70px\":{\"width\":33,\"height\":10},\"71px\":{\"width\":33,\"height\":10},\"72px\":{\"width\":34,\"height\":10},\"73px\":{\"width\":34,\"height\":11},\"74px\":{\"width\":35,\"height\":11},\"75px\":{\"width\":35,\"height\":11},\"76px\":{\"width\":36,\"height\":11},\"77px\":{\"width\":35,\"height\":11},\"78px\":{\"width\":36,\"height\":11},\"79px\":{\"width\":36,\"height\":11},\"80px\":{\"width\":37,\"height\":11},\"81px\":{\"width\":37,\"height\":12},\"82px\":{\"width\":38,\"height\":12},\"83px\":{\"width\":39,\"height\":12},\"84px\":{\"width\":39,\"height\":12},\"85px\":{\"width\":40,\"height\":12},\"86px\":{\"width\":40,\"height\":12},\"87px\":{\"width\":41,\"height\":12},\"88px\":{\"width\":41,\"height\":13},\"89px\":{\"width\":42,\"height\":13},\"90px\":{\"width\":41,\"height\":13},\"91px\":{\"width\":42,\"height\":13},\"92px\":{\"width\":42,\"height\":13},\"93px\":{\"width\":43,\"height\":13},\"94px\":{\"width\":43,\"height\":13},\"95px\":{\"width\":44,\"height\":13},\"96px\":{\"width\":44,\"height\":14},\"97px\":{\"width\":45,\"height\":14},\"98px\":{\"width\":46,\"height\":14},\"99px\":{\"width\":46,\"height\":14},\"100px\":{\"width\":47,\"height\":14}}");

/***/ }),

/***/ "./src/DropRecognition.js":
/*!********************************!*\
  !*** ./src/DropRecognition.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropsRecognition; });
/* harmony import */ var _RectRecognition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RectRecognition */ "./src/RectRecognition.js");
/* harmony import */ var _StageRecognition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StageRecognition */ "./src/StageRecognition.js");
/* harmony import */ var _ItemRecognition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemRecognition */ "./src/ItemRecognition.js");



class DropsRecognition {
  constructor(img) {
    this.Image = img;
    this.Canvas = document.createElement("canvas");
    //document.body.appendChild(this.Canvas);
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
      this.matrixImageData[y][x] = [
        this.rawImageData.data[index],
        this.rawImageData.data[index + 1],
        this.rawImageData.data[index + 2]
      ];
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
      let Result = { type: Type, Bound: Rect };
      if (DetectType.includes(Type)) {
        let DropList = [];
        for (let Drop of DropsRecognition.Stage[this.Stage.Code].dropInfos) {
          if ((Drop.dropType == Type || Type == "ALL_DROP") && Drop.itemId && Drop.itemId != "furni") {
            DropList.push({ id: Drop.itemId, range: Drop.bounds });
          }
        }
       // console.log(Type);
        let Item = new _ItemRecognition__WEBPACK_IMPORTED_MODULE_2__["default"](
          this.getImageMatrix(Rect.left, Rect.top, Rect.right, Rect.bottom),
          DropList,
          Rect
        );
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
    [this.Stage.Code, this.Stage.Confidence] = Object(_StageRecognition__WEBPACK_IMPORTED_MODULE_1__["default"])(
      this.getImageMatrix(
        this.BoundData.Stage.left,
        this.BoundData.Stage.top,
        this.BoundData.Stage.right,
        this.BoundData.Stage.bottom
      )
    );
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


/***/ }),

/***/ "./src/ItemRecognition.js":
/*!********************************!*\
  !*** ./src/ItemRecognition.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemRecognition; });
/* harmony import */ var ssim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssim.js */ "./node_modules/ssim.js/dist/ssim.web.js");
/* harmony import */ var ssim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ssim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rectangle */ "./src/Rectangle.js");
/* harmony import */ var _ConnectedAreaRecognition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConnectedAreaRecognition */ "./src/ConnectedAreaRecognition.js");
/* harmony import */ var _Data_NumberHashList_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Data/NumberHashList.json */ "./src/Data/NumberHashList.json");
var _Data_NumberHashList_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Data/NumberHashList.json */ "./src/Data/NumberHashList.json", 1);




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
    let r = (cx + cy) >> 1;

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
      Ctx.drawImage(
        ItemRecognition.Images[Rule.id],
        0,
        0,
        ItemRecognition.Images[Rule.id].width,
        ItemRecognition.Images[Rule.id].height,
        0,
        0,
        Canvas.width,
        Canvas.height
      );
      let ImageD = Ctx.getImageData(0, 0, Canvas.width, Canvas.height);
      Images.push([Rule.id, ImageD]);
    }
    for (let Image of Images) {
      let SSIM = ssim_js__WEBPACK_IMPORTED_MODULE_0___default()(Image[1], this.IData, { windowSize: 8, ssim: "bezkrovny" }).mssim;
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
        let GreyUp = distance =>
          (this.Matrix[y - distance][x][0] + this.Matrix[y - distance][x][1] + this.Matrix[y - distance][x][2]) / 3;
        let GreyNow = (this.Matrix[y][x][0] + this.Matrix[y][x][1] + this.Matrix[y][x][2]) / 3;
        if (
          (this.ItemId == "3301"
            ? Math.abs(GreyNow - GreyUp(1))
            : Math.max(Math.abs(GreyNow - GreyUp(1)), Math.abs(GreyNow - GreyUp(2)), GreyNow - GreyUp(3))) > 20
        ) {
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
          if ((left && left > 120) || (right && right > 120) || (top && top > 120) || (bottom && bottom > 120)) {
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
      if (
        Rect.point < 20 ||
        Rect.width > Rect.height ||
        Rect.height < 8 ||
        Rect.width < 3 ||
        NumberRect.width - Rect.left < 5 ||
        Rect.left < 5
      ) {
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
      if (
        Math.floor((item.data[index - 4] + item.data[index - 3] + item.data[index - 2]) / 3) >
        Math.floor((item.data[index] + item.data[index + 1] + item.data[index + 2]) / 3)
      ) {
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


/***/ }),

/***/ "./src/RectRecognition.js":
/*!********************************!*\
  !*** ./src/RectRecognition.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RectRecognition; });
/* harmony import */ var _ConnectedAreaRecognition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConnectedAreaRecognition */ "./src/ConnectedAreaRecognition.js");

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
    let mergedRects = this.AutomergeRect(
      ConnectedArea.GetAllConnectedArea(Result => {
        Result.update({
          top: Result.top + DataAreaSpilt,
          bottom: Result.bottom + DataAreaSpilt
        });
        if (Result.point > 100) {
          delete Result.point;
          return Result;
        }
      })
    );
    this.Bound(mergedRects);
    this.GetDropType(mergedRects.Right, ImageData);
    this.mergedRects = mergedRects;
    delete this.DataAreaSpilt;
    delete this.Node;
    delete this.ImageData;
  }
  // 识别边界
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
          type: this.CompareType(ImageData[Rect.top][(Rect.left + Rect.right) >> 1])
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
    let MiddleLine = { top: 1, bottom: 0 };
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


/***/ }),

/***/ "./src/Rectangle.js":
/*!**************************!*\
  !*** ./src/Rectangle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rectangle; });
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

/***/ }),

/***/ "./src/StageRecognition.js":
/*!*********************************!*\
  !*** ./src/StageRecognition.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StageRecognition; });
/* harmony import */ var _Data_Font_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data/Font.css */ "./src/Data/Font.css");
/* harmony import */ var _Data_Font_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Data_Font_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Data_StageFontSize_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data/StageFontSize.json */ "./src/Data/StageFontSize.json");
var _Data_StageFontSize_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Data/StageFontSize.json */ "./src/Data/StageFontSize.json", 1);
/* harmony import */ var _ConnectedAreaRecognition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConnectedAreaRecognition */ "./src/ConnectedAreaRecognition.js");




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
  return [Chars.join(''),Confidence.reduce((a,b)=>a+b)/Confidence.length]
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
    let Conf = compareMatrix(Matrix,Font[Num]);
    if (Conf > Confidence) {
      Confidence = Conf;
      Result = Num;
    }
  }
  return [Result, Confidence];
}
function compareChar(Matrix, Font) {
  let Chars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  let Confidence = -Infinity;
  let Result;
  for (let Char of Chars) {
    let Conf = compareMatrix(Matrix,Font[Char]);
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
}
// 生成每个字符数据
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


/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGF0YS9Gb250LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NzaW0uanMvZGlzdC9zc2ltLndlYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYmZvbnRsb2FkZXIvd2ViZm9udGxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29ubmVjdGVkQXJlYVJlY29nbml0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9EYXRhL0ZvbnQuY3NzPzNjOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RhdGEvTm92ZWNlbnRvIFdpZGVCb2xkLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Ryb3BSZWNvZ25pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSXRlbVJlY29nbml0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWN0UmVjb2duaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RhZ2VSZWNvZ25pdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0IsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixLQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsS0FBSztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckMscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiRHJvcFJlY29nbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tYWluLmpzXCIpO1xuIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9zcmMvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgRHJvcFJlY29nbml0aW9uIGZyb20gXCIuL3NyYy9Ecm9wUmVjb2duaXRpb25cIjtcbmltcG9ydCBXZWJGb250IGZyb20gXCJ3ZWJmb250bG9hZGVyXCI7XG5sZXQgRm9udExvYWRlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgV2ViRm9udC5sb2FkKHtcbiAgICBjdXN0b206IHtcbiAgICAgIGZhbWlsaWVzOiBbXCJOb3ZlY2VudG8gV2lkZUJvbGRcIl1cbiAgICB9LFxuICAgIGFjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH1cbiAgfSk7XG59KTtcbmV4cG9ydCB7IERyb3BSZWNvZ25pdGlvbiwgUmVjdGFuZ2xlLEZvbnRMb2FkZWQgfTtcbmV4cG9ydCBkZWZhdWx0IERyb3BSZWNvZ25pdGlvbjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vTm92ZWNlbnRvIFdpZGVCb2xkLndvZmZcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm92ZWNlbnRvIFdpZGVCb2xkXFxcIjtcXG4gIHNyYzogIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXN0eWxlOiBib2xkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJGb250LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyw2Q0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCXCIsXCJmaWxlXCI6XCJGb250LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm92ZWNlbnRvIFdpZGVCb2xkXFxcIjtcXG4gIHNyYzogIHVybCgnLi9Ob3ZlY2VudG8gV2lkZUJvbGQud29mZicpO1xcbiAgZm9udC1zdHlsZTogYm9sZDtcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLnNzaW09ZSgpOnQuc3NpbT1lKCl9KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gcihpKXtpZihlW2ldKXJldHVybiBlW2ldLmV4cG9ydHM7dmFyIGE9ZVtpXT17aTppLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbaV0uY2FsbChhLmV4cG9ydHMsYSxhLmV4cG9ydHMsciksYS5sPSEwLGEuZXhwb3J0c31yZXR1cm4gci5tPXQsci5jPWUsci5kPWZ1bmN0aW9uKHQsZSxpKXtyLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6aX0pfSxyLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1yKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBpPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKGkpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgYSBpbiB0KXIuZChpLGEsZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxhKSk7cmV0dXJuIGl9LHIubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gci5kKGUsXCJhXCIsZSksZX0sci5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxyLnA9XCJcIixyKHIucz0xMCl9KFtmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaSh0KXtyZXR1cm4gYSh0KS90Lmxlbmd0aH1mdW5jdGlvbiBhKHQpe2Zvcih2YXIgZT0wLHI9MDtyPHQubGVuZ3RoO3IrKyllKz10W3JdO3JldHVybiBlfWZ1bmN0aW9uIG4odCl7Zm9yKHZhciBlPXQuZGF0YSxyPTAsaT0wO2k8ZS5sZW5ndGg7aSsrKXIrPWVbaV07cmV0dXJuIHJ9ZnVuY3Rpb24gZCh0LGUpe2Zvcih2YXIgcj10LmRhdGEsaT10LndpZHRoLGE9dC5oZWlnaHQsbj1uZXcgQXJyYXkoci5sZW5ndGgpLGQ9MDtkPHIubGVuZ3RoO2QrKyluW2RdPXJbZF0rZTtyZXR1cm57ZGF0YTpuLHdpZHRoOmksaGVpZ2h0OmF9fWZ1bmN0aW9uIG8odCxlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZT9mdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10LmRhdGEsaT10LndpZHRoLGE9dC5oZWlnaHQsbj1uZXcgQXJyYXkoci5sZW5ndGgpLGQ9MDtkPHIubGVuZ3RoO2QrKyluW2RdPXJbZF0qZTtyZXR1cm57ZGF0YTpuLHdpZHRoOmksaGVpZ2h0OmF9fSh0LGUpOmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPXQuZGF0YSxpPXQud2lkdGgsYT10LmhlaWdodCxuPWUuZGF0YSxkPW5ldyBBcnJheShyLmxlbmd0aCksbz0wO288ci5sZW5ndGg7bysrKWRbb109cltvXSpuW29dO3JldHVybntkYXRhOmQsd2lkdGg6aSxoZWlnaHQ6YX19KHQsZSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5jb3ZhcmlhbmNlPWUudmFyaWFuY2U9ZS5tZWFuMmQ9ZS5zcXVhcmUyZD1lLm11bHRpcGx5MmQ9ZS5kaXZpZGUyZD1lLnN1YnRyYWN0MmQ9ZS5hZGQyZD1lLnN1bTJkPWUuZmxvb3I9ZS5zdW09ZS5hdmVyYWdlPXZvaWQgMCxlLmF2ZXJhZ2U9aSxlLnN1bT1hLGUuZmxvb3I9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPW5ldyBBcnJheSh0Lmxlbmd0aCkscj0wO3I8dC5sZW5ndGg7cisrKWVbcl09TWF0aC5mbG9vcih0W3JdKTtyZXR1cm4gZX0sZS5zdW0yZD1uLGUuYWRkMmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZT9kKHQsZSk6ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dC5kYXRhLGk9dC53aWR0aCxhPXQuaGVpZ2h0LG49ZS5kYXRhLGQ9bmV3IEFycmF5KHIubGVuZ3RoKSxvPTA7bzxhO28rKylmb3IodmFyIHU9byppLGg9MDtoPGk7aCsrKWRbdStoXT1yW3UraF0rblt1K2hdO3JldHVybntkYXRhOmQsd2lkdGg6aSxoZWlnaHQ6YX19KHQsZSl9LGUuc3VidHJhY3QyZD1mdW5jdGlvbih0LGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlP2QodCwtZSk6ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dC5kYXRhLGk9dC53aWR0aCxhPXQuaGVpZ2h0LG49ZS5kYXRhLGQ9bmV3IEFycmF5KHIubGVuZ3RoKSxvPTA7bzxhO28rKylmb3IodmFyIHU9byppLGg9MDtoPGk7aCsrKWRbdStoXT1yW3UraF0tblt1K2hdO3JldHVybntkYXRhOmQsd2lkdGg6aSxoZWlnaHQ6YX19KHQsZSl9LGUuZGl2aWRlMmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZT9mdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10LmRhdGEsaT10LndpZHRoLGE9dC5oZWlnaHQsbj1uZXcgQXJyYXkoci5sZW5ndGgpLGQ9MDtkPHIubGVuZ3RoO2QrKyluW2RdPXJbZF0vZTtyZXR1cm57ZGF0YTpuLHdpZHRoOmksaGVpZ2h0OmF9fSh0LGUpOmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPXQuZGF0YSxpPXQud2lkdGgsYT10LmhlaWdodCxuPWUuZGF0YSxkPW5ldyBBcnJheShyLmxlbmd0aCksbz0wO288ci5sZW5ndGg7bysrKWRbb109cltvXS9uW29dO3JldHVybntkYXRhOmQsd2lkdGg6aSxoZWlnaHQ6YX19KHQsZSl9LGUubXVsdGlwbHkyZD1vLGUuc3F1YXJlMmQ9ZnVuY3Rpb24odCl7cmV0dXJuIG8odCx0KX0sZS5tZWFuMmQ9ZnVuY3Rpb24odCl7cmV0dXJuIG4odCkvdC5kYXRhLmxlbmd0aH0sZS52YXJpYW5jZT1mdW5jdGlvbih0LGUpe3ZvaWQgMD09PWUmJihlPWkodCkpO2Zvcih2YXIgcj0wLGE9dC5sZW5ndGg7YS0tOylyKz1NYXRoLnBvdyh0W2FdLWUsMik7cmV0dXJuIHIvdC5sZW5ndGh9LGUuY292YXJpYW5jZT1mdW5jdGlvbih0LGUscixhKXt2b2lkIDA9PT1yJiYocj1pKHQpKSx2b2lkIDA9PT1hJiYoYT1pKGUpKTtmb3IodmFyIG49MCxkPXQubGVuZ3RoO2QtLTspbis9KHRbZF0tcikqKGVbZF0tYSk7cmV0dXJuIG4vdC5sZW5ndGh9fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKHQsZSxyLGkpe3ZvaWQgMD09PWkmJihpPXIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGVbcl19fSl9OmZ1bmN0aW9uKHQsZSxyLGkpe3ZvaWQgMD09PWkmJihpPXIpLHRbaV09ZVtyXX0pLGE9dGhpcyYmdGhpcy5fX2V4cG9ydFN0YXJ8fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIHQpXCJkZWZhdWx0XCI9PT1yfHxlLmhhc093blByb3BlcnR5KHIpfHxpKGUsdCxyKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksYShyKDIpLGUpLGEocig3KSxlKSxhKHIoMTEpLGUpLGEocigxMiksZSksYShyKDEzKSxlKSxhKHIoMyksZSksYShyKDkpLGUpLGEocigxNCksZSksYShyKDE1KSxlKSxhKHIoNSksZSksYShyKDE2KSxlKSxhKHIoNiksZSl9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmNvbnYyPXZvaWQgMDt2YXIgaT1yKDApLGE9cigzKSxuPXIoNSksZD1yKDYpO2Z1bmN0aW9uIG8odCxlLHIpe3ZhciBpPXQuZGF0YSxhPXQud2lkdGgsbj10LmhlaWdodDt2b2lkIDA9PT1yJiYocj1cImZ1bGxcIik7Zm9yKHZhciBvPWErZS53aWR0aC0xLHU9bitlLmhlaWdodC0xLGg9ZC56ZXJvcyh1LG8pLmRhdGEsZj0wO2Y8ZS5oZWlnaHQ7ZisrKWZvcih2YXIgcz0wO3M8ZS53aWR0aDtzKyspe3ZhciB2PWUuZGF0YVtmKmUud2lkdGgrc107aWYodilmb3IodmFyIGM9MDtjPG47YysrKWZvcih2YXIgdz0wO3c8YTt3KyspaFsoYytmKSpvK3crc10rPWlbYyphK3ddKnZ9cmV0dXJuIGwoe2RhdGE6aCx3aWR0aDpvLGhlaWdodDp1fSxyLG4sZS5oZWlnaHQsYSxlLndpZHRoKX1mdW5jdGlvbiB1KHQsZSxyKXt2YXIgbj1lLmRhdGEsZD1lLndpZHRoLG89ZS5oZWlnaHQ7dm9pZCAwPT09ciYmKHI9XCJmdWxsXCIpO3ZhciB1PWYodCxhLm9uZXMobywxKSxhLm9uZXMoMSxkKSxyKTtyZXR1cm4gaS5tdWx0aXBseTJkKHUsblswXSl9ZnVuY3Rpb24gaCh0KXtmb3IodmFyIGU9dC5kYXRhLHI9ZVswXSxpPTE7aTxlLmxlbmd0aDtpKyspaWYoZVtpXSE9PXIpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gZih0LGUscixpKXt2b2lkIDA9PT1pJiYoaT1cImZ1bGxcIik7dmFyIGE9TWF0aC5tYXgoZS5oZWlnaHQsZS53aWR0aCksbj1NYXRoLm1heChyLmhlaWdodCxyLndpZHRoKSxkPW8odCxlLFwiZnVsbFwiKTtyZXR1cm4gbChvKGQscixcImZ1bGxcIiksaSx0LmhlaWdodCxhLHQud2lkdGgsbil9ZnVuY3Rpb24gbCh0LGUscixpLGEsZCl7aWYoXCJmdWxsXCI9PT1lKXJldHVybiB0O2lmKFwic2FtZVwiPT09ZSl7dmFyIG89TWF0aC5jZWlsKCh0LmhlaWdodC1yKS8yKSx1PU1hdGguY2VpbCgodC53aWR0aC1hKS8yKTtyZXR1cm4gbi5zdWIodCxvLHIsdSxhKX1yZXR1cm4gbi5zdWIodCxpLTEsci1pKzEsZC0xLGEtZCsxKX1lLmNvbnYyPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXRbZV09YXJndW1lbnRzW2VdO3JldHVybiB0WzJdJiZ0WzJdLmRhdGE/Zi5hcHBseSh2b2lkIDAsdCk6aCh0WzFdKT91LmFwcGx5KHZvaWQgMCx0KTpvLmFwcGx5KHZvaWQgMCx0KX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLm9uZXM9dm9pZCAwO3ZhciBpPXIoNCk7ZS5vbmVzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXQpLGkubnVtYmVycyh0LGUsMSl9fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5udW1iZXJzPXZvaWQgMCxlLm51bWJlcnM9ZnVuY3Rpb24odCxlLHIpe2Zvcih2YXIgaT1lKnQsYT1uZXcgQXJyYXkoaSksbj0wO248aTtuKyspYVtuXT1yO3JldHVybntkYXRhOmEsd2lkdGg6ZSxoZWlnaHQ6dH19fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5zdWI9dm9pZCAwLGUuc3ViPWZ1bmN0aW9uKHQsZSxyLGksYSl7Zm9yKHZhciBuPXQuZGF0YSxkPXQud2lkdGgsbz1uZXcgQXJyYXkoYSpyKSx1PTA7dTxyO3UrKylmb3IodmFyIGg9MDtoPGE7aCsrKW9bdSphK2hdPW5bKGkrdSkqZCtlK2hdO3JldHVybntkYXRhOm8sd2lkdGg6YSxoZWlnaHQ6cn19fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS56ZXJvcz12b2lkIDA7dmFyIGk9cig0KTtlLnplcm9zPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXQpLGkubnVtYmVycyh0LGUsMCl9fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5maWx0ZXIyPXZvaWQgMDt2YXIgaT1yKDIpO2UuZmlsdGVyMj1mdW5jdGlvbih0LGUscil7cmV0dXJuIHZvaWQgMD09PXImJihyPVwic2FtZVwiKSxpLmNvbnYyKGUsZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQuZGF0YSxyPXQud2lkdGgsaT10LmhlaWdodCxhPW5ldyBBcnJheShlLmxlbmd0aCksbj0wO248aTtuKyspZm9yKHZhciBkPTA7ZDxyO2QrKylhW24qcitkXT1lWyhpLTEtbikqcityLTEtZF07cmV0dXJue2RhdGE6YSx3aWR0aDpyLGhlaWdodDppfX0odCkscil9fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5tb2Q9dm9pZCAwLGUubW9kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQtZSpNYXRoLmZsb29yKHQvZSl9fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5wYWRhcnJheT12b2lkIDA7dmFyIGk9cig4KTtmdW5jdGlvbiBhKHQsZSl7Zm9yKHZhciByPXQud2lkdGgrMiplLGE9bmV3IEFycmF5KHIqdC5oZWlnaHQpLG49ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dC53aWR0aCtlLndpZHRoLGk9bmV3IEFycmF5KHQuaGVpZ2h0KnIpLGE9MDthPHQuaGVpZ2h0O2ErKyl7Zm9yKHZhciBuPTA7bjx0LndpZHRoO24rKylpW2EqcituXT10LmRhdGFbYSp0LndpZHRoK25dO2ZvcihuPTA7bjxlLndpZHRoO24rKylpW2EqcituK3Qud2lkdGhdPWUuZGF0YVthKmUud2lkdGgrbl19cmV0dXJue2RhdGE6aSx3aWR0aDpyLGhlaWdodDp0LmhlaWdodH19KHQsZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQuZGF0YSxyPXQud2lkdGgsaT10LmhlaWdodCxhPW5ldyBBcnJheShlLmxlbmd0aCksbj0wO248aTtuKyspZm9yKHZhciBkPTA7ZDxyO2QrKylhW24qcitkXT1lW24qcityLTEtZF07cmV0dXJue2RhdGE6YSx3aWR0aDpyLGhlaWdodDppfX0odCkpLGQ9MDtkPHQuaGVpZ2h0O2QrKylmb3IodmFyIG89LWU7bzx0LndpZHRoK2U7bysrKWFbZCpyK28rZV09bi5kYXRhW2Qqbi53aWR0aCtpLm1vZChvLG4ud2lkdGgpXTtyZXR1cm57ZGF0YTphLHdpZHRoOnIsaGVpZ2h0OnQuaGVpZ2h0fX1mdW5jdGlvbiBuKHQsZSl7Zm9yKHZhciByPWZ1bmN0aW9uKHQsZSl7cmV0dXJue2RhdGE6dC5kYXRhLmNvbmNhdChlLmRhdGEpLGhlaWdodDp0LmhlaWdodCtlLmhlaWdodCx3aWR0aDp0LndpZHRofX0odCxmdW5jdGlvbih0KXtmb3IodmFyIGU9dC5kYXRhLHI9dC53aWR0aCxpPXQuaGVpZ2h0LGE9bmV3IEFycmF5KGUubGVuZ3RoKSxuPTA7bjxpO24rKylmb3IodmFyIGQ9MDtkPHI7ZCsrKWFbbipyK2RdPWVbKGktMS1uKSpyK2RdO3JldHVybntkYXRhOmEsd2lkdGg6cixoZWlnaHQ6aX19KHQpKSxhPXQuaGVpZ2h0KzIqZSxuPW5ldyBBcnJheSh0LndpZHRoKmEpLGQ9LWU7ZDx0LmhlaWdodCtlO2QrKylmb3IodmFyIG89MDtvPHQud2lkdGg7bysrKW5bKGQrZSkqdC53aWR0aCtvXT1yLmRhdGFbaS5tb2QoZCxyLmhlaWdodCkqdC53aWR0aCtvXTtyZXR1cm57ZGF0YTpuLHdpZHRoOnQud2lkdGgsaGVpZ2h0OmF9fWUucGFkYXJyYXk9ZnVuY3Rpb24odCxlLHIsaSl7dmFyIGQ9ZVswXSxvPWVbMV07cmV0dXJuIHQuaGVpZ2h0Pj1kJiZ0LndpZHRoPj1vP2Z1bmN0aW9uKHQsZSl7Zm9yKHZhciByPWVbMF0saT1lWzFdLGE9dC53aWR0aCsyKmksbj10LmhlaWdodCsyKnIsZD1uZXcgQXJyYXkoYSpuKSxvPS1yO288MDtvKyspe2Zvcih2YXIgdT0taTt1PDA7dSsrKWRbKG8rcikqYSt1K2ldPXQuZGF0YVsoTWF0aC5hYnMobyktMSkqdC53aWR0aCtNYXRoLmFicyh1KS0xXTtmb3IodT0wO3U8dC53aWR0aDt1KyspZFsobytyKSphK3UraV09dC5kYXRhWyhNYXRoLmFicyhvKS0xKSp0LndpZHRoK3VdO2Zvcih1PXQud2lkdGg7dTx0LndpZHRoK2k7dSsrKWRbKG8rcikqYSt1K2ldPXQuZGF0YVsoTWF0aC5hYnMobyktMSkqdC53aWR0aCsyKnQud2lkdGgtdS0xXX1mb3Iobz0wO288dC5oZWlnaHQ7bysrKXtmb3IodT0taTt1PDA7dSsrKWRbKG8rcikqYSt1K2ldPXQuZGF0YVtvKnQud2lkdGgrTWF0aC5hYnModSktMV07Zm9yKHU9MDt1PHQud2lkdGg7dSsrKWRbKG8rcikqYSt1K2ldPXQuZGF0YVtvKnQud2lkdGgrdV07Zm9yKHU9dC53aWR0aDt1PHQud2lkdGgraTt1KyspZFsobytyKSphK3UraV09dC5kYXRhW28qdC53aWR0aCsyKnQud2lkdGgtdS0xXX1mb3Iobz10LmhlaWdodDtvPHQuaGVpZ2h0K3I7bysrKXtmb3IodT0taTt1PDA7dSsrKWRbKG8rcikqYSt1K2ldPXQuZGF0YVsoMip0LmhlaWdodC1vLTEpKnQud2lkdGgrTWF0aC5hYnModSktMV07Zm9yKHU9MDt1PHQud2lkdGg7dSsrKWRbKG8rcikqYSt1K2ldPXQuZGF0YVsoMip0LmhlaWdodC1vLTEpKnQud2lkdGgrdV07Zm9yKHU9dC53aWR0aDt1PHQud2lkdGgraTt1KyspZFsobytyKSphK3UraV09dC5kYXRhWygyKnQuaGVpZ2h0LW8tMSkqdC53aWR0aCsyKnQud2lkdGgtdS0xXX1yZXR1cm57ZGF0YTpkLHdpZHRoOmEsaGVpZ2h0Om59fSh0LFtkLG9dKTpuKGEodCxvKSxkKX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihpPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsaT1hcmd1bWVudHMubGVuZ3RoO3I8aTtyKyspZm9yKHZhciBhIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLGEpJiYodFthXT1lW2FdKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5zc2ltPXZvaWQgMDt2YXIgYT1yKDEpLG49cigwKSxkPXIoMTcpLG89cigxOCksdT1yKDE5KSxoPXIoMjApLGY9cigyMSksbD17ZmFzdDpkLnNzaW0sb3JpZ2luYWw6by5vcmlnaW5hbFNzaW0sYmV6a3Jvdm55OnUuYmV6a3Jvdm55U3NpbX07ZnVuY3Rpb24gcyh0KXt2YXIgZT1pKGkoe30sZi5kZWZhdWx0cyksdCk7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKE9iamVjdC5rZXlzKHQpLmZvckVhY2goKGZ1bmN0aW9uKHQpe2lmKCEodCBpbiBmLmRlZmF1bHRzKSl0aHJvdyBuZXcgRXJyb3IoJ1wiJyt0KydcIiBpcyBub3QgYSB2YWxpZCBvcHRpb24nKX0pKSxcImsxXCJpbiB0JiYoXCJudW1iZXJcIiE9dHlwZW9mIHQuazF8fHQuazE8MCkpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBrMSB2YWx1ZS4gRGVmYXVsdCBpcyBcIitmLmRlZmF1bHRzLmsxKTtpZihcImsyXCJpbiB0JiYoXCJudW1iZXJcIiE9dHlwZW9mIHQuazJ8fHQuazI8MCkpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBrMiB2YWx1ZS4gRGVmYXVsdCBpcyBcIitmLmRlZmF1bHRzLmsyKTtpZighKHQuc3NpbSBpbiBsKSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNzaW0gb3B0aW9uICh1c2U6IFwiK09iamVjdC5rZXlzKGwpLmpvaW4oXCIsIFwiKStcIilcIil9KGUpLGV9ZnVuY3Rpb24gdih0LGUscil7dmFyIGk9KG5ldyBEYXRlKS5nZXRUaW1lKCksZD1mdW5jdGlvbih0KXt2YXIgZT10WzBdLHI9dFsxXSxpPXRbMl07cmV0dXJuIGxbaS5zc2ltXShlLHIsaSl9KGZ1bmN0aW9uKHQpe3ZhciBlPXRbMF0scj10WzFdLGk9dFsyXSxhPWguZG93bnNhbXBsZShbZSxyXSxpKTtyZXR1cm5bYVswXSxhWzFdLGldfShmdW5jdGlvbih0KXt2YXIgZT10WzBdLHI9dFsxXSxpPXRbMl07cmV0dXJuW2EucmdiMmdyYXkoZSksYS5yZ2IyZ3JheShyKSxpXX0oZnVuY3Rpb24odCl7dmFyIGU9dFswXSxyPXRbMV0saT10WzJdO2lmKGUud2lkdGghPT1yLndpZHRofHxlLmhlaWdodCE9PXIuaGVpZ2h0KXRocm93IG5ldyBFcnJvcihcIkltYWdlIGRpbWVuc2lvbnMgZG8gbm90IG1hdGNoXCIpO3JldHVybltlLHIsaV19KFt0LGUscyhyKV0pKSkpO3JldHVybntzc2ltX21hcDpkLG1zc2ltOm4ubWVhbjJkKGQpLHBlcmZvcm1hbmNlOihuZXcgRGF0ZSkuZ2V0VGltZSgpLWl9fWUuc3NpbT12LGUuZGVmYXVsdD12fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5mc3BlY2lhbD12b2lkIDA7dmFyIGk9cigwKTtlLmZzcGVjaWFsPWZ1bmN0aW9uKHQsZSxyKXt2b2lkIDA9PT1lJiYoZT0zKSx2b2lkIDA9PT1yJiYocj0xLjUpO3ZhciBhPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPXQuZGF0YSxpPXQud2lkdGgsYT10LmhlaWdodCxuPW5ldyBBcnJheShyLmxlbmd0aCksZD0wO2Q8ci5sZW5ndGg7ZCsrKW5bZF09TWF0aC5leHAoLXJbZF0vKDIqTWF0aC5wb3coZSwyKSkpO3JldHVybntkYXRhOm4sd2lkdGg6aSxoZWlnaHQ6YX19KGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0yKnQrMSxyPW5ldyBBcnJheShNYXRoLnBvdyhlLDIpKSxpPTA7aTxlO2krKylmb3IodmFyIGE9MDthPGU7YSsrKXJbaSplK2FdPU1hdGgucG93KGktdCwyKStNYXRoLnBvdyhhLXQsMik7cmV0dXJue2RhdGE6cix3aWR0aDplLGhlaWdodDplfX0oZT0oZS0xKS8yKSxyKSxuPWkuc3VtMmQoYSk7cmV0dXJuIGkuZGl2aWRlMmQoYSxuKX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmltZmlsdGVyPXZvaWQgMDt2YXIgaT1yKDgpLGE9cig5KSxuPXIoMCksZD1yKDcpO2UuaW1maWx0ZXI9ZnVuY3Rpb24odCxlLHIsbyl7cmV0dXJuIHZvaWQgMD09PXImJihyPVwic3ltbWV0cmljXCIpLHZvaWQgMD09PW8mJihvPVwic2FtZVwiKSx0PWZ1bmN0aW9uKHQsZSxyLGQpe2lmKHQ9YS5wYWRhcnJheSh0LG4uZmxvb3IoW2UvMixyLzJdKSxkKSwwPT09aS5tb2QoZSwyKSYmKHQuZGF0YT10LmRhdGEuc2xpY2UoMCwtdC53aWR0aCksdC5oZWlnaHQtLSksMD09PWkubW9kKHIsMikpe2Zvcih2YXIgbz1bXSx1PTA7dTx0LmRhdGEubGVuZ3RoO3UrKykodSsxKSV0LndpZHRoIT0wJiZvLnB1c2godC5kYXRhW3VdKTt0LmRhdGE9byx0LndpZHRoLS19cmV0dXJuIHR9KHQsZS53aWR0aCxlLmhlaWdodCxyKSxvPWZ1bmN0aW9uKHQpe3JldHVyblwic2FtZVwiPT09dCYmKHQ9XCJ2YWxpZFwiKSx0fShvKSxkLmZpbHRlcjIoZSx0LG8pfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUubm9ybXBkZj12b2lkIDAsZS5ub3JtcGRmPWZ1bmN0aW9uKHQsZSxyKXt2YXIgaT10LmRhdGEsYT10LndpZHRoLG49dC5oZWlnaHQ7dm9pZCAwPT09ZSYmKGU9MCksdm9pZCAwPT09ciYmKHI9MSk7Zm9yKHZhciBkPW5ldyBBcnJheShpLmxlbmd0aCksbz0wO288aS5sZW5ndGg7bysrKXt2YXIgdT0oaVtvXS1lKS9yO2Rbb109TWF0aC5leHAoLU1hdGgucG93KHUsMikvMikvKDIuNTA2NjI4Mjc0NjMxMDAwNypyKX1yZXR1cm57ZGF0YTpkLHdpZHRoOmEsaGVpZ2h0Om59fX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUucmdiMmdyYXk9dm9pZCAwLGUucmdiMmdyYXk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHIsaSxhPXQuZGF0YSxuPXQud2lkdGgsZD10LmhlaWdodCxvPW5ldyBBcnJheShuKmQpLHU9MDt1PGQ7dSsrKWZvcih2YXIgaD0wO2g8bjtoKyspe3ZhciBmPWgrdSpuLGw9NCpmO29bZl09KGU9YVtsXSxyPWFbbCsxXSxpPWFbbCsyXSxNYXRoLnJvdW5kKC4yOTg5NCplKy41ODcwNCpyKy4xMTQwMippKSl9cmV0dXJue2RhdGE6byx3aWR0aDpuLGhlaWdodDpkfX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLnNraXAyZD12b2lkIDAsZS5za2lwMmQ9ZnVuY3Rpb24odCxlLHIpe2Zvcih2YXIgaT1lWzBdLGE9ZVsxXSxuPWVbMl0sZD1yWzBdLG89clsxXSx1PXJbMl0saD1NYXRoLmNlaWwoKHUtZCkvbyksZj1NYXRoLmNlaWwoKG4taSkvYSksbD1uZXcgQXJyYXkoaCpmKSxzPTA7czxmO3MrKylmb3IodmFyIHY9MDt2PGg7disrKXt2YXIgYz1pK3MqYSx3PWQrdipvO2xbcypoK3ZdPXQuZGF0YVtjKnQud2lkdGgrd119cmV0dXJue2RhdGE6bCx3aWR0aDpoLGhlaWdodDpmfX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLnRyYW5zcG9zZT12b2lkIDAsZS50cmFuc3Bvc2U9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQuZGF0YSxyPXQud2lkdGgsaT10LmhlaWdodCxhPW5ldyBBcnJheShyKmkpLG49MDtuPGk7bisrKWZvcih2YXIgZD0wO2Q8cjtkKyspYVtkKmkrbl09ZVtuKnIrZF07cmV0dXJue2RhdGE6YSxoZWlnaHQ6cix3aWR0aDppfX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLnNzaW09dm9pZCAwO3ZhciBpPXIoMCksYT1yKDEpO2Uuc3NpbT1mdW5jdGlvbih0LGUscil7dmFyIG49YS5ub3JtcGRmKGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1NYXRoLmZsb29yKHQvMikscj1uZXcgQXJyYXkoMiplKzEpLGk9LWU7aTw9ZTtpKyspcltpK2VdPU1hdGguYWJzKGkpO3JldHVybntkYXRhOnIsd2lkdGg6ci5sZW5ndGgsaGVpZ2h0OjF9fShyLndpbmRvd1NpemUpLDAsMS41KSxkPU1hdGgucG93KDIsci5iaXREZXB0aCktMSxvPU1hdGgucG93KHIuazEqZCwyKSx1PU1hdGgucG93KHIuazIqZCwyKTtuPWkuZGl2aWRlMmQobixpLnN1bTJkKG4pKTt2YXIgaD1hLnRyYW5zcG9zZShuKSxmPWEuY29udjIodCxuLGgsXCJ2YWxpZFwiKSxsPWEuY29udjIoZSxuLGgsXCJ2YWxpZFwiKSxzPWkuc3F1YXJlMmQoZiksdj1pLnNxdWFyZTJkKGwpLGM9aS5tdWx0aXBseTJkKGYsbCksdz1pLnNxdWFyZTJkKHQpLGc9aS5zcXVhcmUyZChlKSxwPWkuc3VidHJhY3QyZChhLmNvbnYyKHcsbixoLFwidmFsaWRcIikscykseT1pLnN1YnRyYWN0MmQoYS5jb252MihnLG4saCxcInZhbGlkXCIpLHYpLG09aS5zdWJ0cmFjdDJkKGEuY29udjIoaS5tdWx0aXBseTJkKHQsZSksbixoLFwidmFsaWRcIiksYyk7cmV0dXJuIG8+MCYmdT4wP2Z1bmN0aW9uKHQsZSxyLGEsbixkLG8sdSl7dmFyIGg9aS5hZGQyZChpLm11bHRpcGx5MmQodCwyKSxvKSxmPWkuYWRkMmQoaS5tdWx0aXBseTJkKGUsMiksdSksbD1pLmFkZDJkKGkuYWRkMmQocixhKSxvKSxzPWkuYWRkMmQoaS5hZGQyZChuLGQpLHUpO3JldHVybiBpLmRpdmlkZTJkKGkubXVsdGlwbHkyZChoLGYpLGkubXVsdGlwbHkyZChsLHMpKX0oYyxtLHMsdixwLHksbyx1KTpmdW5jdGlvbih0LGUscixhLG4sZCl7dmFyIG89aS5tdWx0aXBseTJkKHQsMiksdT1pLm11bHRpcGx5MmQoZSwyKSxoPWkuYWRkMmQocixhKSxmPWkuYWRkMmQobixkKTtyZXR1cm4gaS5kaXZpZGUyZChpLm11bHRpcGx5MmQobyx1KSxpLm11bHRpcGx5MmQoaCxmKSl9KGMsbSxzLHYscCx5KX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLm9yaWdpbmFsU3NpbT12b2lkIDA7dmFyIGk9cigwKSxhPXIoMSk7ZS5vcmlnaW5hbFNzaW09ZnVuY3Rpb24odCxlLHIpe3ZhciBuPWEuZnNwZWNpYWwoXCJnYXVzc2lhblwiLHIud2luZG93U2l6ZSwxLjUpLGQ9TWF0aC5wb3coMixyLmJpdERlcHRoKS0xLG89TWF0aC5wb3coci5rMSpkLDIpLHU9TWF0aC5wb3coci5rMipkLDIpO249aS5kaXZpZGUyZChuLGkuc3VtMmQobikpO3ZhciBoPWEuZmlsdGVyMihuLHQsXCJ2YWxpZFwiKSxmPWEuZmlsdGVyMihuLGUsXCJ2YWxpZFwiKSxsPWkuc3F1YXJlMmQoaCkscz1pLnNxdWFyZTJkKGYpLHY9aS5tdWx0aXBseTJkKGgsZiksYz1pLnNxdWFyZTJkKHQpLHc9aS5zcXVhcmUyZChlKSxnPWkuc3VidHJhY3QyZChhLmZpbHRlcjIobixjLFwidmFsaWRcIiksbCkscD1pLnN1YnRyYWN0MmQoYS5maWx0ZXIyKG4sdyxcInZhbGlkXCIpLHMpLHk9aS5zdWJ0cmFjdDJkKGEuZmlsdGVyMihuLGkubXVsdGlwbHkyZCh0LGUpLFwidmFsaWRcIiksdik7aWYobz4wJiZ1PjApe3ZhciBtPWkuYWRkMmQoaS5tdWx0aXBseTJkKHYsMiksbyksYj1pLmFkZDJkKGkubXVsdGlwbHkyZCh5LDIpLHUpLE09aS5hZGQyZChpLmFkZDJkKGwscyksbyksXz1pLmFkZDJkKGkuYWRkMmQoZyxwKSx1KTtyZXR1cm4gaS5kaXZpZGUyZChpLm11bHRpcGx5MmQobSxiKSxpLm11bHRpcGx5MmQoTSxfKSl9dmFyIGo9aS5tdWx0aXBseTJkKHYsMiksTz1pLm11bHRpcGx5MmQoeSwyKSxQPWkuYWRkMmQobCxzKSxrPWkuYWRkMmQoZyxwKTtyZXR1cm4gaS5kaXZpZGUyZChpLm11bHRpcGx5MmQoaixPKSxpLm11bHRpcGx5MmQoUCxrKSl9fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5iZXprcm92bnlTc2ltPXZvaWQgMDt2YXIgaT1yKDApLGE9cigxKTtmdW5jdGlvbiBuKHQsZSxyKXt2YXIgYT10LmRhdGEsbj1lLmRhdGEsZD1yLmJpdERlcHRoLG89ci5rMSx1PXIuazIsaD1NYXRoLnBvdygyLGQpLTEsZj1NYXRoLnBvdyhvKmgsMiksbD1NYXRoLnBvdyh1KmgsMikscz1pLmF2ZXJhZ2UoYSksdj1pLmF2ZXJhZ2UobiksYz1pLnZhcmlhbmNlKGEscyksdz1pLnZhcmlhbmNlKG4sdik7cmV0dXJuKDIqcyp2K2YpKigyKmkuY292YXJpYW5jZShhLG4scyx2KStsKS8oKE1hdGgucG93KHMsMikrTWF0aC5wb3codiwyKStmKSooYyt3K2wpKX1lLmJlemtyb3ZueVNzaW09ZnVuY3Rpb24odCxlLHIpe2Zvcih2YXIgaT1yLndpbmRvd1NpemUsZD1NYXRoLmNlaWwodC53aWR0aC9pKSxvPU1hdGguY2VpbCh0LmhlaWdodC9pKSx1PW5ldyBBcnJheShkKm8pLGg9MCxmPTA7Zjx0LmhlaWdodDtmKz1pKWZvcih2YXIgbD0wO2w8dC53aWR0aDtsKz1pKXt2YXIgcz1NYXRoLm1pbihpLHQud2lkdGgtbCksdj1NYXRoLm1pbihpLHQuaGVpZ2h0LWYpLGM9YS5zdWIodCxsLHYsZixzKSx3PWEuc3ViKGUsbCx2LGYscyk7dVtoKytdPW4oYyx3LHIpfXJldHVybntkYXRhOnUsd2lkdGg6ZCxoZWlnaHQ6b319fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5kb3duc2FtcGxlPXZvaWQgMDt2YXIgaT1yKDApLGE9cigxKTtmdW5jdGlvbiBuKHQsZSxyKXt2YXIgaT1hLmltZmlsdGVyKHQsZSxcInN5bW1ldHJpY1wiLFwic2FtZVwiKTtyZXR1cm4gYS5za2lwMmQoaSxbMCxyLGkuaGVpZ2h0XSxbMCxyLGkud2lkdGhdKX1lLmRvd25zYW1wbGU9ZnVuY3Rpb24odCxlKXtyZXR1cm5cIm9yaWdpbmFsXCI9PT1lLmRvd25zYW1wbGU/ZnVuY3Rpb24odCxlLHIpe3ZvaWQgMD09PXImJihyPTI1Nik7dmFyIGQ9TWF0aC5taW4odC53aWR0aCxlLmhlaWdodCkvcixvPU1hdGgucm91bmQoZCk7aWYobz4xKXt2YXIgdT1hLm9uZXMobyk7dD1uKHQsdT1pLmRpdmlkZTJkKHUsaS5zdW0yZCh1KSksbyksZT1uKGUsdSxvKX1yZXR1cm5bdCxlXX0odFswXSx0WzFdLGUubWF4U2l6ZSk6dH19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmRlZmF1bHRzPXZvaWQgMCxlLmRlZmF1bHRzPXt3aW5kb3dTaXplOjExLGsxOi4wMSxrMjouMDMsYml0RGVwdGg6OCxkb3duc2FtcGxlOlwib3JpZ2luYWxcIixzc2ltOlwiZmFzdFwiLG1heFNpemU6MjU2fX1dKX0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNzaW0ud2ViLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIFdlYiBGb250IExvYWRlciB2MS42LjI4IC0gKGMpIEFkb2JlIFN5c3RlbXMsIEdvb2dsZS4gTGljZW5zZTogQXBhY2hlIDIuMCAqLyhmdW5jdGlvbigpe2Z1bmN0aW9uIGFhKGEsYixjKXtyZXR1cm4gYS5jYWxsLmFwcGx5KGEuYmluZCxhcmd1bWVudHMpfWZ1bmN0aW9uIGJhKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYyxkKTtyZXR1cm4gYS5hcHBseShiLGMpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHAoYSxiLGMpe3A9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT9hYTpiYTtyZXR1cm4gcC5hcHBseShudWxsLGFyZ3VtZW50cyl9dmFyIHE9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfTtmdW5jdGlvbiBjYShhLGIpe3RoaXMuYT1hO3RoaXMubz1ifHxhO3RoaXMuYz10aGlzLm8uZG9jdW1lbnR9dmFyIGRhPSEhd2luZG93LkZvbnRGYWNlO2Z1bmN0aW9uIHQoYSxiLGMsZCl7Yj1hLmMuY3JlYXRlRWxlbWVudChiKTtpZihjKWZvcih2YXIgZSBpbiBjKWMuaGFzT3duUHJvcGVydHkoZSkmJihcInN0eWxlXCI9PWU/Yi5zdHlsZS5jc3NUZXh0PWNbZV06Yi5zZXRBdHRyaWJ1dGUoZSxjW2VdKSk7ZCYmYi5hcHBlbmRDaGlsZChhLmMuY3JlYXRlVGV4dE5vZGUoZCkpO3JldHVybiBifWZ1bmN0aW9uIHUoYSxiLGMpe2E9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKGIpWzBdO2F8fChhPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7YS5pbnNlcnRCZWZvcmUoYyxhLmxhc3RDaGlsZCl9ZnVuY3Rpb24gdihhKXthLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKX1cbmZ1bmN0aW9uIHcoYSxiLGMpe2I9Ynx8W107Yz1jfHxbXTtmb3IodmFyIGQ9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxlPTA7ZTxiLmxlbmd0aDtlKz0xKXtmb3IodmFyIGY9ITEsZz0wO2c8ZC5sZW5ndGg7Zys9MSlpZihiW2VdPT09ZFtnXSl7Zj0hMDticmVha31mfHxkLnB1c2goYltlXSl9Yj1bXTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSs9MSl7Zj0hMTtmb3IoZz0wO2c8Yy5sZW5ndGg7Zys9MSlpZihkW2VdPT09Y1tnXSl7Zj0hMDticmVha31mfHxiLnB1c2goZFtlXSl9YS5jbGFzc05hbWU9Yi5qb2luKFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnJlcGxhY2UoL15cXHMrfFxccyskLyxcIlwiKX1mdW5jdGlvbiB5KGEsYil7Zm9yKHZhciBjPWEuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKylpZihjW2RdPT1iKXJldHVybiEwO3JldHVybiExfVxuZnVuY3Rpb24gZWEoYSl7cmV0dXJuIGEuby5sb2NhdGlvbi5ob3N0bmFtZXx8YS5hLmxvY2F0aW9uLmhvc3RuYW1lfWZ1bmN0aW9uIHooYSxiLGMpe2Z1bmN0aW9uIGQoKXttJiZlJiZmJiYobShnKSxtPW51bGwpfWI9dChhLFwibGlua1wiLHtyZWw6XCJzdHlsZXNoZWV0XCIsaHJlZjpiLG1lZGlhOlwiYWxsXCJ9KTt2YXIgZT0hMSxmPSEwLGc9bnVsbCxtPWN8fG51bGw7ZGE/KGIub25sb2FkPWZ1bmN0aW9uKCl7ZT0hMDtkKCl9LGIub25lcnJvcj1mdW5jdGlvbigpe2U9ITA7Zz1FcnJvcihcIlN0eWxlc2hlZXQgZmFpbGVkIHRvIGxvYWRcIik7ZCgpfSk6c2V0VGltZW91dChmdW5jdGlvbigpe2U9ITA7ZCgpfSwwKTt1KGEsXCJoZWFkXCIsYil9XG5mdW5jdGlvbiBBKGEsYixjLGQpe3ZhciBlPWEuYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07aWYoZSl7dmFyIGY9dChhLFwic2NyaXB0XCIse3NyYzpifSksZz0hMTtmLm9ubG9hZD1mLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2d8fHRoaXMucmVhZHlTdGF0ZSYmXCJsb2FkZWRcIiE9dGhpcy5yZWFkeVN0YXRlJiZcImNvbXBsZXRlXCIhPXRoaXMucmVhZHlTdGF0ZXx8KGc9ITAsYyYmYyhudWxsKSxmLm9ubG9hZD1mLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiSEVBRFwiPT1mLnBhcmVudE5vZGUudGFnTmFtZSYmZS5yZW1vdmVDaGlsZChmKSl9O2UuYXBwZW5kQ2hpbGQoZik7c2V0VGltZW91dChmdW5jdGlvbigpe2d8fChnPSEwLGMmJmMoRXJyb3IoXCJTY3JpcHQgbG9hZCB0aW1lb3V0XCIpKSl9LGR8fDVFMyk7cmV0dXJuIGZ9cmV0dXJuIG51bGx9O2Z1bmN0aW9uIEIoKXt0aGlzLmE9MDt0aGlzLmM9bnVsbH1mdW5jdGlvbiBDKGEpe2EuYSsrO3JldHVybiBmdW5jdGlvbigpe2EuYS0tO0QoYSl9fWZ1bmN0aW9uIEUoYSxiKXthLmM9YjtEKGEpfWZ1bmN0aW9uIEQoYSl7MD09YS5hJiZhLmMmJihhLmMoKSxhLmM9bnVsbCl9O2Z1bmN0aW9uIEYoYSl7dGhpcy5hPWF8fFwiLVwifUYucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIucHVzaChhcmd1bWVudHNbY10ucmVwbGFjZSgvW1xcV19dKy9nLFwiXCIpLnRvTG93ZXJDYXNlKCkpO3JldHVybiBiLmpvaW4odGhpcy5hKX07ZnVuY3Rpb24gRyhhLGIpe3RoaXMuYz1hO3RoaXMuZj00O3RoaXMuYT1cIm5cIjt2YXIgYz0oYnx8XCJuNFwiKS5tYXRjaCgvXihbbmlvXSkoWzEtOV0pJC9pKTtjJiYodGhpcy5hPWNbMV0sdGhpcy5mPXBhcnNlSW50KGNbMl0sMTApKX1mdW5jdGlvbiBmYShhKXtyZXR1cm4gSChhKStcIiBcIisoYS5mK1wiMDBcIikrXCIgMzAwcHggXCIrSShhLmMpfWZ1bmN0aW9uIEkoYSl7dmFyIGI9W107YT1hLnNwbGl0KC8sXFxzKi8pO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLnJlcGxhY2UoL1snXCJdL2csXCJcIik7LTEhPWQuaW5kZXhPZihcIiBcIil8fC9eXFxkLy50ZXN0KGQpP2IucHVzaChcIidcIitkK1wiJ1wiKTpiLnB1c2goZCl9cmV0dXJuIGIuam9pbihcIixcIil9ZnVuY3Rpb24gSihhKXtyZXR1cm4gYS5hK2EuZn1mdW5jdGlvbiBIKGEpe3ZhciBiPVwibm9ybWFsXCI7XCJvXCI9PT1hLmE/Yj1cIm9ibGlxdWVcIjpcImlcIj09PWEuYSYmKGI9XCJpdGFsaWNcIik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBnYShhKXt2YXIgYj00LGM9XCJuXCIsZD1udWxsO2EmJigoZD1hLm1hdGNoKC8obm9ybWFsfG9ibGlxdWV8aXRhbGljKS9pKSkmJmRbMV0mJihjPWRbMV0uc3Vic3RyKDAsMSkudG9Mb3dlckNhc2UoKSksKGQ9YS5tYXRjaCgvKFsxLTldMDB8bm9ybWFsfGJvbGQpL2kpKSYmZFsxXSYmKC9ib2xkL2kudGVzdChkWzFdKT9iPTc6L1sxLTldMDAvLnRlc3QoZFsxXSkmJihiPXBhcnNlSW50KGRbMV0uc3Vic3RyKDAsMSksMTApKSkpO3JldHVybiBjK2J9O2Z1bmN0aW9uIGhhKGEsYil7dGhpcy5jPWE7dGhpcy5mPWEuby5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7dGhpcy5oPWI7dGhpcy5hPW5ldyBGKFwiLVwiKTt0aGlzLmo9ITEhPT1iLmV2ZW50czt0aGlzLmc9ITEhPT1iLmNsYXNzZXN9ZnVuY3Rpb24gaWEoYSl7YS5nJiZ3KGEuZixbYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKV0pO0soYSxcImxvYWRpbmdcIil9ZnVuY3Rpb24gTChhKXtpZihhLmcpe3ZhciBiPXkoYS5mLGEuYS5jKFwid2ZcIixcImFjdGl2ZVwiKSksYz1bXSxkPVthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXTtifHxjLnB1c2goYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIikpO3coYS5mLGMsZCl9SyhhLFwiaW5hY3RpdmVcIil9ZnVuY3Rpb24gSyhhLGIsYyl7aWYoYS5qJiZhLmhbYl0paWYoYylhLmhbYl0oYy5jLEooYykpO2Vsc2UgYS5oW2JdKCl9O2Z1bmN0aW9uIGphKCl7dGhpcy5jPXt9fWZ1bmN0aW9uIGthKGEsYixjKXt2YXIgZD1bXSxlO2ZvcihlIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIGY9YS5jW2VdO2YmJmQucHVzaChmKGJbZV0sYykpfXJldHVybiBkfTtmdW5jdGlvbiBNKGEsYil7dGhpcy5jPWE7dGhpcy5mPWI7dGhpcy5hPXQodGhpcy5jLFwic3BhblwiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9LHRoaXMuZil9ZnVuY3Rpb24gTihhKXt1KGEuYyxcImJvZHlcIixhLmEpfWZ1bmN0aW9uIE8oYSl7cmV0dXJuXCJkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OXB4O2xlZnQ6LTk5OTlweDtmb250LXNpemU6MzAwcHg7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bztsaW5lLWhlaWdodDpub3JtYWw7bWFyZ2luOjA7cGFkZGluZzowO2ZvbnQtdmFyaWFudDpub3JtYWw7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtZmFtaWx5OlwiK0koYS5jKStcIjtcIisoXCJmb250LXN0eWxlOlwiK0goYSkrXCI7Zm9udC13ZWlnaHQ6XCIrKGEuZitcIjAwXCIpK1wiO1wiKX07ZnVuY3Rpb24gUChhLGIsYyxkLGUsZil7dGhpcy5nPWE7dGhpcy5qPWI7dGhpcy5hPWQ7dGhpcy5jPWM7dGhpcy5mPWV8fDNFMzt0aGlzLmg9Znx8dm9pZCAwfVAucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jLm8uZG9jdW1lbnQsYj10aGlzLGM9cSgpLGQ9bmV3IFByb21pc2UoZnVuY3Rpb24oZCxlKXtmdW5jdGlvbiBmKCl7cSgpLWM+PWIuZj9lKCk6YS5mb250cy5sb2FkKGZhKGIuYSksYi5oKS50aGVuKGZ1bmN0aW9uKGEpezE8PWEubGVuZ3RoP2QoKTpzZXRUaW1lb3V0KGYsMjUpfSxmdW5jdGlvbigpe2UoKX0pfWYoKX0pLGU9bnVsbCxmPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsZCl7ZT1zZXRUaW1lb3V0KGQsYi5mKX0pO1Byb21pc2UucmFjZShbZixkXSkudGhlbihmdW5jdGlvbigpe2UmJihjbGVhclRpbWVvdXQoZSksZT1udWxsKTtiLmcoYi5hKX0sZnVuY3Rpb24oKXtiLmooYi5hKX0pfTtmdW5jdGlvbiBRKGEsYixjLGQsZSxmLGcpe3RoaXMudj1hO3RoaXMuQj1iO3RoaXMuYz1jO3RoaXMuYT1kO3RoaXMucz1nfHxcIkJFU2Jzd3lcIjt0aGlzLmY9e307dGhpcy53PWV8fDNFMzt0aGlzLnU9Znx8bnVsbDt0aGlzLm09dGhpcy5qPXRoaXMuaD10aGlzLmc9bnVsbDt0aGlzLmc9bmV3IE0odGhpcy5jLHRoaXMucyk7dGhpcy5oPW5ldyBNKHRoaXMuYyx0aGlzLnMpO3RoaXMuaj1uZXcgTSh0aGlzLmMsdGhpcy5zKTt0aGlzLm09bmV3IE0odGhpcy5jLHRoaXMucyk7YT1uZXcgRyh0aGlzLmEuYytcIixzZXJpZlwiLEoodGhpcy5hKSk7YT1PKGEpO3RoaXMuZy5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBHKHRoaXMuYS5jK1wiLHNhbnMtc2VyaWZcIixKKHRoaXMuYSkpO2E9TyhhKTt0aGlzLmguYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgRyhcInNlcmlmXCIsSih0aGlzLmEpKTthPU8oYSk7dGhpcy5qLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEcoXCJzYW5zLXNlcmlmXCIsSih0aGlzLmEpKTthPVxuTyhhKTt0aGlzLm0uYS5zdHlsZS5jc3NUZXh0PWE7Tih0aGlzLmcpO04odGhpcy5oKTtOKHRoaXMuaik7Tih0aGlzLm0pfXZhciBSPXtEOlwic2VyaWZcIixDOlwic2Fucy1zZXJpZlwifSxTPW51bGw7ZnVuY3Rpb24gVCgpe2lmKG51bGw9PT1TKXt2YXIgYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7Uz0hIWEmJig1MzY+cGFyc2VJbnQoYVsxXSwxMCl8fDUzNj09PXBhcnNlSW50KGFbMV0sMTApJiYxMT49cGFyc2VJbnQoYVsyXSwxMCkpfXJldHVybiBTfVEucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dGhpcy5mLnNlcmlmPXRoaXMuai5hLm9mZnNldFdpZHRoO3RoaXMuZltcInNhbnMtc2VyaWZcIl09dGhpcy5tLmEub2Zmc2V0V2lkdGg7dGhpcy5BPXEoKTtVKHRoaXMpfTtcbmZ1bmN0aW9uIGxhKGEsYixjKXtmb3IodmFyIGQgaW4gUilpZihSLmhhc093blByb3BlcnR5KGQpJiZiPT09YS5mW1JbZF1dJiZjPT09YS5mW1JbZF1dKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIFUoYSl7dmFyIGI9YS5nLmEub2Zmc2V0V2lkdGgsYz1hLmguYS5vZmZzZXRXaWR0aCxkOyhkPWI9PT1hLmYuc2VyaWYmJmM9PT1hLmZbXCJzYW5zLXNlcmlmXCJdKXx8KGQ9VCgpJiZsYShhLGIsYykpO2Q/cSgpLWEuQT49YS53P1QoKSYmbGEoYSxiLGMpJiYobnVsbD09PWEudXx8YS51Lmhhc093blByb3BlcnR5KGEuYS5jKSk/VihhLGEudik6VihhLGEuQik6bWEoYSk6VihhLGEudil9ZnVuY3Rpb24gbWEoYSl7c2V0VGltZW91dChwKGZ1bmN0aW9uKCl7VSh0aGlzKX0sYSksNTApfWZ1bmN0aW9uIFYoYSxiKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXt2KHRoaXMuZy5hKTt2KHRoaXMuaC5hKTt2KHRoaXMuai5hKTt2KHRoaXMubS5hKTtiKHRoaXMuYSl9LGEpLDApfTtmdW5jdGlvbiBXKGEsYixjKXt0aGlzLmM9YTt0aGlzLmE9Yjt0aGlzLmY9MDt0aGlzLm09dGhpcy5qPSExO3RoaXMucz1jfXZhciBYPW51bGw7Vy5wcm90b3R5cGUuZz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmE7Yi5nJiZ3KGIuZixbYi5hLmMoXCJ3ZlwiLGEuYyxKKGEpLnRvU3RyaW5nKCksXCJhY3RpdmVcIildLFtiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImxvYWRpbmdcIiksYi5hLmMoXCJ3ZlwiLGEuYyxKKGEpLnRvU3RyaW5nKCksXCJpbmFjdGl2ZVwiKV0pO0soYixcImZvbnRhY3RpdmVcIixhKTt0aGlzLm09ITA7bmEodGhpcyl9O1xuVy5wcm90b3R5cGUuaD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmE7aWYoYi5nKXt2YXIgYz15KGIuZixiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKSksZD1bXSxlPVtiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImxvYWRpbmdcIildO2N8fGQucHVzaChiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpKTt3KGIuZixkLGUpfUsoYixcImZvbnRpbmFjdGl2ZVwiLGEpO25hKHRoaXMpfTtmdW5jdGlvbiBuYShhKXswPT0tLWEuZiYmYS5qJiYoYS5tPyhhPWEuYSxhLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJhY3RpdmVcIildLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpLGEuYS5jKFwid2ZcIixcImluYWN0aXZlXCIpXSksSyhhLFwiYWN0aXZlXCIpKTpMKGEuYSkpfTtmdW5jdGlvbiBvYShhKXt0aGlzLmo9YTt0aGlzLmE9bmV3IGphO3RoaXMuaD0wO3RoaXMuZj10aGlzLmc9ITB9b2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dGhpcy5jPW5ldyBjYSh0aGlzLmosYS5jb250ZXh0fHx0aGlzLmopO3RoaXMuZz0hMSE9PWEuZXZlbnRzO3RoaXMuZj0hMSE9PWEuY2xhc3NlcztwYSh0aGlzLG5ldyBoYSh0aGlzLmMsYSksYSl9O1xuZnVuY3Rpb24gcWEoYSxiLGMsZCxlKXt2YXIgZj0wPT0tLWEuaDsoYS5mfHxhLmcpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFyIGE9ZXx8bnVsbCxtPWR8fG51bGx8fHt9O2lmKDA9PT1jLmxlbmd0aCYmZilMKGIuYSk7ZWxzZXtiLmYrPWMubGVuZ3RoO2YmJihiLmo9Zik7dmFyIGgsbD1bXTtmb3IoaD0wO2g8Yy5sZW5ndGg7aCsrKXt2YXIgaz1jW2hdLG49bVtrLmNdLHI9Yi5hLHg9aztyLmcmJncoci5mLFtyLmEuYyhcIndmXCIseC5jLEooeCkudG9TdHJpbmcoKSxcImxvYWRpbmdcIildKTtLKHIsXCJmb250bG9hZGluZ1wiLHgpO3I9bnVsbDtpZihudWxsPT09WClpZih3aW5kb3cuRm9udEZhY2Upe3ZhciB4PS9HZWNrby4qRmlyZWZveFxcLyhcXGQrKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkseGE9L09TIFguKlZlcnNpb25cXC8xMFxcLi4qU2FmYXJpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSYmL0FwcGxlLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yKTtcblg9eD80MjxwYXJzZUludCh4WzFdLDEwKTp4YT8hMTohMH1lbHNlIFg9ITE7WD9yPW5ldyBQKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxrLGIucyxuKTpyPW5ldyBRKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxrLGIucyxhLG4pO2wucHVzaChyKX1mb3IoaD0wO2g8bC5sZW5ndGg7aCsrKWxbaF0uc3RhcnQoKX19LDApfWZ1bmN0aW9uIHBhKGEsYixjKXt2YXIgZD1bXSxlPWMudGltZW91dDtpYShiKTt2YXIgZD1rYShhLmEsYyxhLmMpLGY9bmV3IFcoYS5jLGIsZSk7YS5oPWQubGVuZ3RoO2I9MDtmb3IoYz1kLmxlbmd0aDtiPGM7YisrKWRbYl0ubG9hZChmdW5jdGlvbihiLGQsYyl7cWEoYSxmLGIsZCxjKX0pfTtmdW5jdGlvbiByYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifVxucmEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe2lmKGZbXCJfX210aV9mbnRMc3RcIitkXSl7dmFyIGM9ZltcIl9fbXRpX2ZudExzdFwiK2RdKCksZT1bXSxoO2lmKGMpZm9yKHZhciBsPTA7bDxjLmxlbmd0aDtsKyspe3ZhciBrPWNbbF0uZm9udGZhbWlseTt2b2lkIDAhPWNbbF0uZm9udFN0eWxlJiZ2b2lkIDAhPWNbbF0uZm9udFdlaWdodD8oaD1jW2xdLmZvbnRTdHlsZStjW2xdLmZvbnRXZWlnaHQsZS5wdXNoKG5ldyBHKGssaCkpKTplLnB1c2gobmV3IEcoaykpfWEoZSl9ZWxzZSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YigpfSw1MCl9dmFyIGM9dGhpcyxkPWMuYS5wcm9qZWN0SWQsZT1jLmEudmVyc2lvbjtpZihkKXt2YXIgZj1jLmMubztBKHRoaXMuYywoYy5hLmFwaXx8XCJodHRwczovL2Zhc3QuZm9udHMubmV0L2pzYXBpXCIpK1wiL1wiK2QrXCIuanNcIisoZT9cIj92PVwiK2U6XCJcIiksZnVuY3Rpb24oZSl7ZT9hKFtdKTooZltcIl9fTW9ub3R5cGVDb25maWd1cmF0aW9uX19cIitcbmRdPWZ1bmN0aW9uKCl7cmV0dXJuIGMuYX0sYigpKX0pLmlkPVwiX19Nb25vdHlwZUFQSVNjcmlwdF9fXCIrZH1lbHNlIGEoW10pfTtmdW5jdGlvbiBzYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXNhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD10aGlzLmEudXJsc3x8W10sZT10aGlzLmEuZmFtaWxpZXN8fFtdLGY9dGhpcy5hLnRlc3RTdHJpbmdzfHx7fSxnPW5ldyBCO2I9MDtmb3IoYz1kLmxlbmd0aDtiPGM7YisrKXoodGhpcy5jLGRbYl0sQyhnKSk7dmFyIG09W107Yj0wO2ZvcihjPWUubGVuZ3RoO2I8YztiKyspaWYoZD1lW2JdLnNwbGl0KFwiOlwiKSxkWzFdKWZvcih2YXIgaD1kWzFdLnNwbGl0KFwiLFwiKSxsPTA7bDxoLmxlbmd0aDtsKz0xKW0ucHVzaChuZXcgRyhkWzBdLGhbbF0pKTtlbHNlIG0ucHVzaChuZXcgRyhkWzBdKSk7RShnLGZ1bmN0aW9uKCl7YShtLGYpfSl9O2Z1bmN0aW9uIHRhKGEsYil7YT90aGlzLmM9YTp0aGlzLmM9dWE7dGhpcy5hPVtdO3RoaXMuZj1bXTt0aGlzLmc9Ynx8XCJcIn12YXIgdWE9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzc1wiO2Z1bmN0aW9uIHZhKGEsYil7Zm9yKHZhciBjPWIubGVuZ3RoLGQ9MDtkPGM7ZCsrKXt2YXIgZT1iW2RdLnNwbGl0KFwiOlwiKTszPT1lLmxlbmd0aCYmYS5mLnB1c2goZS5wb3AoKSk7dmFyIGY9XCJcIjsyPT1lLmxlbmd0aCYmXCJcIiE9ZVsxXSYmKGY9XCI6XCIpO2EuYS5wdXNoKGUuam9pbihmKSl9fVxuZnVuY3Rpb24gd2EoYSl7aWYoMD09YS5hLmxlbmd0aCl0aHJvdyBFcnJvcihcIk5vIGZvbnRzIHRvIGxvYWQhXCIpO2lmKC0xIT1hLmMuaW5kZXhPZihcImtpdD1cIikpcmV0dXJuIGEuYztmb3IodmFyIGI9YS5hLmxlbmd0aCxjPVtdLGQ9MDtkPGI7ZCsrKWMucHVzaChhLmFbZF0ucmVwbGFjZSgvIC9nLFwiK1wiKSk7Yj1hLmMrXCI/ZmFtaWx5PVwiK2Muam9pbihcIiU3Q1wiKTswPGEuZi5sZW5ndGgmJihiKz1cIiZzdWJzZXQ9XCIrYS5mLmpvaW4oXCIsXCIpKTswPGEuZy5sZW5ndGgmJihiKz1cIiZ0ZXh0PVwiK2VuY29kZVVSSUNvbXBvbmVudChhLmcpKTtyZXR1cm4gYn07ZnVuY3Rpb24geWEoYSl7dGhpcy5mPWE7dGhpcy5hPVtdO3RoaXMuYz17fX1cbnZhciB6YT17bGF0aW46XCJCRVNic3d5XCIsXCJsYXRpbi1leHRcIjpcIlxcdTAwZTdcXHUwMGY2XFx1MDBmY1xcdTAxMWZcXHUwMTVmXCIsY3lyaWxsaWM6XCJcXHUwNDM5XFx1MDQ0ZlxcdTA0MTZcIixncmVlazpcIlxcdTAzYjFcXHUwM2IyXFx1MDNhM1wiLGtobWVyOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCIsSGFudW1hbjpcIlxcdTE3ODBcXHUxNzgxXFx1MTc4MlwifSxBYT17dGhpbjpcIjFcIixleHRyYWxpZ2h0OlwiMlwiLFwiZXh0cmEtbGlnaHRcIjpcIjJcIix1bHRyYWxpZ2h0OlwiMlwiLFwidWx0cmEtbGlnaHRcIjpcIjJcIixsaWdodDpcIjNcIixyZWd1bGFyOlwiNFwiLGJvb2s6XCI0XCIsbWVkaXVtOlwiNVwiLFwic2VtaS1ib2xkXCI6XCI2XCIsc2VtaWJvbGQ6XCI2XCIsXCJkZW1pLWJvbGRcIjpcIjZcIixkZW1pYm9sZDpcIjZcIixib2xkOlwiN1wiLFwiZXh0cmEtYm9sZFwiOlwiOFwiLGV4dHJhYm9sZDpcIjhcIixcInVsdHJhLWJvbGRcIjpcIjhcIix1bHRyYWJvbGQ6XCI4XCIsYmxhY2s6XCI5XCIsaGVhdnk6XCI5XCIsbDpcIjNcIixyOlwiNFwiLGI6XCI3XCJ9LEJhPXtpOlwiaVwiLGl0YWxpYzpcImlcIixuOlwiblwiLG5vcm1hbDpcIm5cIn0sXG5DYT0vXih0aGlufCg/Oig/OmV4dHJhfHVsdHJhKS0/KT9saWdodHxyZWd1bGFyfGJvb2t8bWVkaXVtfCg/Oig/OnNlbWl8ZGVtaXxleHRyYXx1bHRyYSktPyk/Ym9sZHxibGFja3xoZWF2eXxsfHJ8YnxbMS05XTAwKT8obnxpfG5vcm1hbHxpdGFsaWMpPyQvO1xuZnVuY3Rpb24gRGEoYSl7Zm9yKHZhciBiPWEuZi5sZW5ndGgsYz0wO2M8YjtjKyspe3ZhciBkPWEuZltjXS5zcGxpdChcIjpcIiksZT1kWzBdLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSxmPVtcIm40XCJdO2lmKDI8PWQubGVuZ3RoKXt2YXIgZzt2YXIgbT1kWzFdO2c9W107aWYobSlmb3IodmFyIG09bS5zcGxpdChcIixcIiksaD1tLmxlbmd0aCxsPTA7bDxoO2wrKyl7dmFyIGs7az1tW2xdO2lmKGsubWF0Y2goL15bXFx3LV0rJC8pKXt2YXIgbj1DYS5leGVjKGsudG9Mb3dlckNhc2UoKSk7aWYobnVsbD09bilrPVwiXCI7ZWxzZXtrPW5bMl07az1udWxsPT1rfHxcIlwiPT1rP1wiblwiOkJhW2tdO249blsxXTtpZihudWxsPT1ufHxcIlwiPT1uKW49XCI0XCI7ZWxzZSB2YXIgcj1BYVtuXSxuPXI/cjppc05hTihuKT9cIjRcIjpuLnN1YnN0cigwLDEpO2s9W2ssbl0uam9pbihcIlwiKX19ZWxzZSBrPVwiXCI7ayYmZy5wdXNoKGspfTA8Zy5sZW5ndGgmJihmPWcpOzM9PWQubGVuZ3RoJiYoZD1kWzJdLGc9W10sZD1kP2Quc3BsaXQoXCIsXCIpOlxuZywwPGQubGVuZ3RoJiYoZD16YVtkWzBdXSkmJihhLmNbZV09ZCkpfWEuY1tlXXx8KGQ9emFbZV0pJiYoYS5jW2VdPWQpO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKz0xKWEuYS5wdXNoKG5ldyBHKGUsZltkXSkpfX07ZnVuY3Rpb24gRWEoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn12YXIgRmE9e0FyaW1vOiEwLENvdXNpbmU6ITAsVGlub3M6ITB9O0VhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPW5ldyBCLGM9dGhpcy5jLGQ9bmV3IHRhKHRoaXMuYS5hcGksdGhpcy5hLnRleHQpLGU9dGhpcy5hLmZhbWlsaWVzO3ZhKGQsZSk7dmFyIGY9bmV3IHlhKGUpO0RhKGYpO3ooYyx3YShkKSxDKGIpKTtFKGIsZnVuY3Rpb24oKXthKGYuYSxmLmMsRmEpfSl9O2Z1bmN0aW9uIEdhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9R2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hLmlkLGM9dGhpcy5jLm87Yj9BKHRoaXMuYywodGhpcy5hLmFwaXx8XCJodHRwczovL3VzZS50eXBla2l0Lm5ldFwiKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7aWYoYilhKFtdKTtlbHNlIGlmKGMuVHlwZWtpdCYmYy5UeXBla2l0LmNvbmZpZyYmYy5UeXBla2l0LmNvbmZpZy5mbil7Yj1jLlR5cGVraXQuY29uZmlnLmZuO2Zvcih2YXIgZT1bXSxmPTA7ZjxiLmxlbmd0aDtmKz0yKWZvcih2YXIgZz1iW2ZdLG09YltmKzFdLGg9MDtoPG0ubGVuZ3RoO2grKyllLnB1c2gobmV3IEcoZyxtW2hdKSk7dHJ5e2MuVHlwZWtpdC5sb2FkKHtldmVudHM6ITEsY2xhc3NlczohMSxhc3luYzohMH0pfWNhdGNoKGwpe31hKGUpfX0sMkUzKTphKFtdKX07ZnVuY3Rpb24gSGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9W119SGEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5mLmlkLGM9dGhpcy5jLm8sZD10aGlzO2I/KGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfX3x8KGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfXz17fSksYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fW2JdPWZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBnPTAsbT1jLmZvbnRzLmxlbmd0aDtnPG07KytnKXt2YXIgaD1jLmZvbnRzW2ddO2QuYS5wdXNoKG5ldyBHKGgubmFtZSxnYShcImZvbnQtd2VpZ2h0OlwiK2gud2VpZ2h0K1wiO2ZvbnQtc3R5bGU6XCIraC5zdHlsZSkpKX1hKGQuYSl9LEEodGhpcy5jLCh0aGlzLmYuYXBpfHxcImh0dHBzOi8vZi5mb250ZGVjay5jb20vcy9jc3MvanMvXCIpK2VhKHRoaXMuYykrXCIvXCIrYitcIi5qc1wiLGZ1bmN0aW9uKGIpe2ImJmEoW10pfSkpOmEoW10pfTt2YXIgWT1uZXcgb2Eod2luZG93KTtZLmEuYy5jdXN0b209ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHNhKGIsYSl9O1kuYS5jLmZvbnRkZWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBIYShiLGEpfTtZLmEuYy5tb25vdHlwZT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgcmEoYixhKX07WS5hLmMudHlwZWtpdD1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgR2EoYixhKX07WS5hLmMuZ29vZ2xlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBFYShiLGEpfTt2YXIgWj17bG9hZDpwKFkubG9hZCxZKX07XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gWn0pOlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1aOih3aW5kb3cuV2ViRm9udD1aLHdpbmRvdy5XZWJGb250Q29uZmlnJiZZLmxvYWQod2luZG93LldlYkZvbnRDb25maWcpKTt9KCkpO1xuIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3RlZEFyZWFSZWNvZ25pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKE1hdHJpeCwgTm9kZSwgR2V0TWF0cml4KSB7XG4gICAgdGhpcy5NYXRyaXggPSBNYXRyaXg7XG4gICAgaWYgKE5vZGUpIHRoaXMuTm9kZSA9IE5vZGU7XG4gICAgaWYgKEdldE1hdHJpeCkge1xuICAgICAgdGhpcy5HZXRNYXRyaXggPSBHZXRNYXRyaXg7XG4gICAgfVxuICB9XG4gIEdldENvbm5lY3RlZEFyZWEoVmVydGV4LCBDYWxsYmFjaykge1xuICAgIGxldCBSZXN1bHQgPSB0aGlzLkJGUyh0aGlzLk1hdHJpeCwgVmVydGV4KTtcbiAgICBpZiAodGhpcy5HZXRNYXRyaXgpIHtcbiAgICAgIGxldCBNYXRyaXggPSBbXTtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgUmVzdWx0LmhlaWdodDsgeSsrKSB7XG4gICAgICAgIE1hdHJpeC5wdXNoKG5ldyBBcnJheShSZXN1bHQud2lkdGgpLmZpbGwoZmFsc2UpKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGFWZXJ0ZXggb2YgUmVzdWx0Lm1hdHJpeCkge1xuICAgICAgICBNYXRyaXhbYVZlcnRleFsxXS1SZXN1bHQudG9wXVthVmVydGV4WzBdLVJlc3VsdC5sZWZ0XSA9IHRydWU7XG4gICAgICB9XG4gICAgICBSZXN1bHQubWF0cml4ID0gTWF0cml4O1xuICAgIH1cbiAgICBpZiAoQ2FsbGJhY2spIFJlc3VsdCA9IENhbGxiYWNrKFJlc3VsdCk7XG4gICAgcmV0dXJuIFJlc3VsdDtcbiAgfVxuICBHZXRBbGxDb25uZWN0ZWRBcmVhKENhbGxiYWNrKSB7XG4gICAgbGV0IFF1ZXVlID0gdGhpcy5Ob2RlLnZhbHVlcygpO1xuICAgIGxldCBSZXQgPSBbXTtcbiAgICBmb3IgKGxldCBWZXJ0ZXggb2YgUXVldWUpIHtcbiAgICAgIGxldCBSZXN1bHQgPSBDYWxsYmFja1xuICAgICAgICA/IHRoaXMuR2V0Q29ubmVjdGVkQXJlYShbTWF0aC5mbG9vcihWZXJ0ZXggLyAxMDAwMCksIFZlcnRleCAlIDEwMDAwXSwgQ2FsbGJhY2spXG4gICAgICAgIDogdGhpcy5HZXRDb25uZWN0ZWRBcmVhKFtNYXRoLmZsb29yKFZlcnRleCAvIDEwMDAwKSwgVmVydGV4ICUgMTAwMDBdKTtcbiAgICAgIGlmIChSZXN1bHQpIHtcbiAgICAgICAgUmV0LnB1c2goUmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFJldDtcbiAgfVxuICBCRlMoTWF0cml4LCBWZXJ0ZXgpIHtcbiAgICBsZXQgUmVjdCA9IG5ldyBSZWN0YW5nbGUoe1xuICAgICAgbGVmdDogSW5maW5pdHksXG4gICAgICByaWdodDogLUluZmluaXR5LFxuICAgICAgdG9wOiBJbmZpbml0eSxcbiAgICAgIGJvdHRvbTogLUluZmluaXR5LFxuICAgICAgcG9pbnQ6IDBcbiAgICB9KTtcbiAgICBpZiAodGhpcy5HZXRNYXRyaXgpIHtcbiAgICAgIFJlY3QubWF0cml4ID0gW107XG4gICAgfVxuICAgIGxldCBRdWV1ZSA9IFtdO1xuICAgIGxldCBEaXJlY3Rpb24gPSBbXG4gICAgICBbMCwgLTFdLFxuICAgICAgWzEsIDBdLFxuICAgICAgWzAsIDFdLFxuICAgICAgWy0xLCAwXVxuICAgIF07XG4gICAgUmVjdC51cGRhdGUoe1xuICAgICAgbGVmdDogTWF0aC5taW4oUmVjdC5sZWZ0LCBWZXJ0ZXhbMF0pLFxuICAgICAgcmlnaHQ6IE1hdGgubWF4KFJlY3QucmlnaHQsIFZlcnRleFswXSksXG4gICAgICB0b3A6IE1hdGgubWluKFJlY3QudG9wLCBWZXJ0ZXhbMV0pLFxuICAgICAgYm90dG9tOiBNYXRoLm1heChSZWN0LmJvdHRvbSwgVmVydGV4WzFdKVxuICAgIH0pO1xuICAgIE1hdHJpeFtWZXJ0ZXhbMV1dW1ZlcnRleFswXV0gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5Ob2RlKSB0aGlzLk5vZGUuZGVsZXRlKFZlcnRleFswXSAqIDEwMDAwICsgVmVydGV4WzFdKTtcbiAgICBRdWV1ZS5wdXNoKFZlcnRleCk7XG4gICAgd2hpbGUgKFF1ZXVlLmxlbmd0aCAhPSAwKSB7XG4gICAgICBSZWN0LnBvaW50Kys7XG4gICAgICBsZXQgTm93VmVydGV4ID0gUXVldWUuc2hpZnQoKTtcbiAgICAgIGlmICh0aGlzLkdldE1hdHJpeCkge1xuICAgICAgICBSZWN0Lm1hdHJpeC5wdXNoKE5vd1ZlcnRleCk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBkID0gMDsgZCA8IERpcmVjdGlvbi5sZW5ndGg7IGQrKykge1xuICAgICAgICBsZXQgTmV4dFZlcnRleCA9IFtOb3dWZXJ0ZXhbMF0gKyBEaXJlY3Rpb25bZF1bMF0sIE5vd1ZlcnRleFsxXSArIERpcmVjdGlvbltkXVsxXV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBOZXh0VmVydGV4WzBdIDwgMCB8fFxuICAgICAgICAgIE5leHRWZXJ0ZXhbMV0gPCAwIHx8XG4gICAgICAgICAgTmV4dFZlcnRleFswXSA+PSBNYXRyaXhbMF0ubGVuZ3RoIHx8XG4gICAgICAgICAgTmV4dFZlcnRleFsxXSA+PSBNYXRyaXgubGVuZ3RoXG4gICAgICAgIClcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgaWYgKE1hdHJpeFtOZXh0VmVydGV4WzFdXVtOZXh0VmVydGV4WzBdXSkge1xuICAgICAgICAgIFJlY3QudXBkYXRlKHtcbiAgICAgICAgICAgIGxlZnQ6IE1hdGgubWluKFJlY3QubGVmdCwgTmV4dFZlcnRleFswXSksXG4gICAgICAgICAgICByaWdodDogTWF0aC5tYXgoUmVjdC5yaWdodCwgTmV4dFZlcnRleFswXSksXG4gICAgICAgICAgICB0b3A6IE1hdGgubWluKFJlY3QudG9wLCBOZXh0VmVydGV4WzFdKSxcbiAgICAgICAgICAgIGJvdHRvbTogTWF0aC5tYXgoUmVjdC5ib3R0b20sIE5leHRWZXJ0ZXhbMV0pXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgTWF0cml4W05leHRWZXJ0ZXhbMV1dW05leHRWZXJ0ZXhbMF1dID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuTm9kZSkgdGhpcy5Ob2RlLmRlbGV0ZShOZXh0VmVydGV4WzBdICogMTAwMDAgKyBOZXh0VmVydGV4WzFdKTtcbiAgICAgICAgICBRdWV1ZS5wdXNoKE5leHRWZXJ0ZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBSZWN0O1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRm9udC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTpmb250L3dvZmY7YmFzZTY0LGQwOUdSazlVVkU4QUFIWTBBQWtBQUFBQlNid0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCRFJrWWdBQUFLV0FBQWE5b0FBVGVNZW4wNUhVOVRMeklBQUFGRUFBQUFTZ0FBQUdCbnc2ZUVZMjFoY0FBQUEzQUFBQVBnQUFBRmVQTTBnVlZvWldGa0FBQUE0QUFBQURZQUFBQTIrNSs1Tldob1pXRUFBQUVZQUFBQUlRQUFBQ1FIMkFVbGFHMTBlQUFBQjFBQUFBTHhBQUFIYkttUlNRMXRZWGh3QUFBQlBBQUFBQVlBQUFBR0FkdFFBRzVoYldVQUFBR1FBQUFCM3dBQUE4dnR1TXhLY0c5emRBQUFDa1FBQUFBVEFBQUFJUCtDQUpnQUFRQUFBQUVBQUFPeFlTSmZEenoxQUFNRDZBQUFBQURMbHJPQUFBQUFBTXpLd2lqL0VmN2NCUlVEMFFBQkFBTUFBZ0FBQUFBQUFIamFZMkJrWUdCZS8rOC9Bd09yMVgvQi93S3NvZ3hBRVdUQWVCc0FpalVHQmdBQUFBQUFVQUFCMndBQWVOcGpZR1pxWnRyRHdNckF3ZFRGRk1IQXdPQU5vUm5qR0dZd0xtRkFCZXpJbk9Dd0VCY0dCUVlGMVZQTTN2K1RHVTR3WDJRVVZHQmdtQXlTWTlvRE5CTW94OEFBQUVxQURVc0FBSGphalZIQmJ0TkFFSDEyMHphUnVGQXUzRHBJRmJkYVRvNDlnTktLUXk5VklWSjdkdXh4YmRYeGh0MXRLbDk2NFFQNEJGUXUvQS8vZ0xoejVjTHNacE1XTlVJNDhzNmJlZS9OamljQW51TTdJaXlmdC9JdWNZUVhraTN4RnZieEllQWU5dkF4NEcwOHc2ZUFkNlQrT2VCZHZNZDl3SDBNOEVzNlJMMkJaSGY0SFhDRTExRVhjSXgrOUNYZ0xieUp2Z1hjdzBIMEkrQnR2SXdIQWUvZ0lINFY4QzYreHU4QzdtTXYvbm1pNXAydXJ5cExvM1E0b25HaHBreVR6bGllR1RwdGM2WG5TbWVXaTRUR1RVTmVha2l6WWIyUTRwbGFjTTZ0VlhSWkYwekhxaWttWFd1clJjMjNSL1EzNjhoTnRRdldwbFl0RFpNMFhiT0hLL2E4NGN5dzNGaXlKbkhaaXVsaGFNTzVkZDVTYWMrVXFyVmtkVmJ3TE5QWGxGbXI2K21ObDdUSzFqbWJaRDBmVHFBd1J3ZU5HbGVvWUVFWUljVlFUc0lZaGZCVHNPQ0pxSXp3akpsRXdpbGE1TUpxOGJzejgxeUJ4UHNhK2RHanJzWm5MSkVsTG9MeVRKd081L0syb2xLaXVoUlA0Vzg4bHJ3UnZJcHVBcWVxeEZPTDRoWkhvdnBYajVYemYzVVhmam9qVlNVYWtpMGtzb3QwZy9md2lmZGNUcFl0R0QrNys5YlNkNk53bDV2Yk1aczJibnh2dTc2MzlCdDk4SlMrYm4zRmJicncvMEltK0ZwcWJ2UFc5NXZpNWxHWFZxTExjci8zNU9uKy9nQ3RvOGc3QUhqYWZaUUpWQlpsR0lXZis0TWlLQzZBaUlBdy9Bb3VHTzdndm9HS0M0cjdnaUtWWnBsbG9sbFprYWFZdGxEWllsbVpWcVlsV2FtNWxFYWhhV3BwZ2x2bUFtYldLU3ZUVXV1VTlQNXpPQzJuWmM1NVorYWI1WDdmdlBlNUEvamhsaWNNNGR1aWJTUjNYRldYYlJ6SXBjbzcvSEg4LzAxNFRNT2ZLbFFsZ090TklZanExQ0NZbXRTaU5uVUlJWlF3NmhKT1BTS29UeVJSTm04RFlvakZJUTR2RFdsRVBBazBwZ2xOYVVZaXpibUtKRnJRa2xhMHBnMXRhVWN5S2JTbkF4M3BSR2U2MEpWdWRHY1dQVWtsalY3MHBnL3A5S1VmL1JsQUJnTVpSQ2FER2NKUWhqR2NFWXhrRktNWlF4WmpHVWMyNDIzOUw3T0tWMW5OT2phd2hmZlpUakhiMk1FSDdPUkQ5ckNMM1h6RVBqNW1MNSt3bndPVVVNcEJEbk9VSTN6S3pUekwxVnpEZGVReWpjZDRuaGQ1bkR1Wm8wTXM0QUdiWWJFTzZnQVQvdGExaFR4ayt3SWU1UTV5M0NzVDNmMWtabklibjdPU1Y5akVneXppSnU3akJtNmxCOVZZb3NNY280aHJPY1dOVEhIZm1Nb3RUR2NHdDdPQ1FsN2lOZGJ3T20vd0ptdFp6MXYyeEViZTVoMjI4akIzY1RkNTNNTnM3bVV1ODhoblB2NSt2cFZsV3llcm1DTStEOGJiaXZKWVp0K3htdlVLVUtnYUsxRXBTbGVHSmlsUGl6eFJuaFRQVHM5eHY0U1kvSmlsTVJlY0FDZklDWE1pblJqSDZ5UTRMWjJPVHBwVDZHeU9DNC96eG1WN1E3dzUzb254dXlzcWJCN0g5VGpIT3JhTTVlNXFOeWhJNFdxbUpIVlFQMlZxc3VsSG1QNE96eEhUbjIzNjUwMC8wQWwxSXB4b3gzSDFPL3hGUDh2Vm4rRFRyeWluaDFXa1ZXcEYwYi9qZXFYVTZxSjd0ZzVPallQeVhYL2VMUnRjbGw3V3VpeTJMTGs4c3F6NFpPN0p1U2NLVHM2RVk4SC9TRU9tOVd5S2FzcFJUNlZwaEdab2xsWlpIUFphbFpqZjZKalZhVi9wakw3U1daMzdqd0NkY0ErVGpKQm5qS0k1MXZlRnhzRnBJeW5QMkZyTUY1d3hucWFaejNQNTByaVp5ZE04eVZJalo2VjFjSVdSNG1ONGdWRzh4aHdydEo2dXJTVGdDYU42bzB2QkpxUDdCYU54cTh2Q0Z0N2xLV04xdS9GZWJLeHZNOW9MalBjOVJyeVA5MzFHdkkvMzVVYjhBV08reEhndlpZblJldFM0OTFIL0djOFppZDhvZ2E4VnoxazE1bHMxNFhzMTR6czE1WndTK1VITitWRXR1YUFXWEZScnppdUp5MnJMSmJYaEZ5WHpzOXJ4bTlyenE1R0ZPa3JxUklVeGVzVTQ4S2l6L05SRi91cXFxdXF1S3VwbUhQYmdmaDVSTmV0M2tIVThVS244cEZhcW9kNnFybDYrckNoWWZWUkxmYzJWZE5VMm1rSTBRSFhVbjgwY01zWXlWVmVERkthQml0UXdSV2lJb3MyMytocXFLQTFYakVZcFRsa1VxYUhHcVpHeWVZL2p4bjZHNm1td0pXZCtaVzd5TFVQenpQVXhhcUNSaXRWb2VUWFdITi92SnRXWDB1bHVYbWZZbjJFcXViN3Mvdzd1bWliMGVOck5sVXRJVkdFVXgvL2Z1ZE9NTTc1R1V5bW1mTXlvaFJDaElWWktKRWlRNDh3b1pra1BJWklJa25BUnZSZlJvb1cxaUFna0NIZFJteFp0QlpkSkd4TUtMSHBBMENhamxkQWlVVy8vODgwMTcxUURMYUs2OE9QY2UrNzNuZmQzcjl4Q0JvdUE2VUphamlEdDNFZE1UcUxVR1VWUW5pQm1ra2liTVNSSXVWbmlta2xjTnBWb2t1UFVWNkpEUW9ETThQMGNFaktNRnU2dGxkdG9sQkhza0dPb2w3Mm9saUhFeVhwZGI3Wnd6eVRPcWgxeVZkS0lPd25VeUt6cnloMWtaSUhQeGZRelRvWVp6d2JVVVplMjhUMUFXTjRoS1FQVUgwS1BFNlhjVFBzM2tLS3NrWWZvMGRqbEJDTHlHWjB5Q3dSaUtKSEhLSlFYS0pDbmFEZlhhWWN4VTBaa2xQdExhWnM1L2pYLzA3UlZTNllSWXY0N3JkMTlyTThZa3JqbWxzbHpGSmliN29KVW9rd21XTmRkZk45TSt4dTU1ME1XMFhoTDZJTm9UWjAyeE0wOUpHMGV6Y3lCNkhxbkNCM3Jkak0rMXRoMHVzdVdpKzVITWE1cmV0eDVjOWlkd3lOMzBVeFJYKzkrTXNXVVg5eGxHVVNYcmdzVUlSMEFheldLQ3BzemN3dzBvZEdjUm9IVmErdyt2Yk9IOXhXSU9ERWtuQkRFOW5pTWErWVpxODZONXQySHFPcWNCbFJ4WDYzcWRUM2xKVDV2c24zSVpkbktCZFozM091TEIvMDNtQzczTlhsRzNxLzI0MGZZazZqdGh4L3RoOWVUZitMeks0Sk9LOHFkYXM3TEZPREVFZGR6YU0vVkFVVE5FS3BNR0JGNGx5KzJGWjFSVXVmTmFzcld6eGVqeGtTWjB0bjFxTGVTL2VHZW9NNno4eFlwN1I5eldDUnZ2Tm5XZnJab1Qwa2Z5YzU0bGo3dGw4MU41enhMeHM3N0d1VjI5dGNvL3FrR1JNK0VuNXk2NVBiajE3bHFyTCtSYjI2dS8yR2VtbHNRaWNBRTRvRzd6TzhsVXZxY2g3Q05uVERHbEJkcnlrZXZsVHAvN1p4YmpYUFZuNTlWdjJvcmo2OWZ4UFBuZk0rZzNweEh5SnhDb1RuSWYwSS93cWFkMzdFT3lpNzduV2dsNTBpUzdDZHQzbjAzT1VONnlYYlNZdTM0NFhteFp5ZkRzNVBIZnM2Nm9menJQTDlSTWtnR1NMTk11a3RraGZjanZuOFpzSlZjNEJrOWF2K1BWNzcvMzE3eCs5K1BOTjl1YzRMby9nYnRLbjhsQUFBQWVOcGpZR1lBZy8vMURETVlzQUFBTUVZQ0dnQjQydXg5QjN3YlJmYi95TEtrQllJQkx3cXlGS1RRQWtjZ0pIRXFoQm9DZ2FQazZJR1FRcXE3cmQ1N3M2MjJxMTR0eVhKM2VpR2hoSG9jSFk0L0xkVEFjWlFMRU82T1kxYXN3LzFuWlVFTUpIZUJ1K1AzKzl3dk80U1ZWN3R2WnQ2OGVlLzczc3hic1VBbEc3QllMUHlHRnVYcWxhdWI1UzNuMzE2M2F2VVZMWTJybU10VHFCTkI4ZVNLSXA5TjFWVFNLOGF4NFhuaktta2J2WE1DaC8vMWFzNkVZMDgrWWNLeDU1NlVQaFd3Wm11ckFWMEJXSUFEeGdFY0NNRnA0Qnd3QmN3QUY0TEx3VUp3QTdnRkxBV3JRRDFvQlZwZ0FYYlFDUWlRQXYxZ0M5Z0ZIZ1JQZ3FmQnkrQk44RDc0REJUQjMxa2Mxa2tzUGt2RU9vMTFQdXRDMXVXc3ExblhzeGF6bHJIV3NxUXNJOHZLY3JOQ3JDUXJ4OXJBMnM1NmdQVUk2M2VzbDFodnN0NWpmY3I2QzR1cXFLakFLazZvR0Y4eG9lTDBpdk1xcGxmTXFiaTBZa0hGalJXM1ZTeXVXRjZ4cHFLdHdsRGhxdWlzaUZURUtyb3FlaXMyVnp4WThWakZVeFd2Vk95cGVMZmlqeFYvcnZpR3pXRWZ4ejZKZlNyN0RQWms5aXoyRmV5cjJOZXg3MkF2WTY5bVM5a2F0cG50WUhleUkrd3VkZzk3RTNzSCt3SDJFK3puMmEreTMyRi95UDZjL1JYN20wcHVaVlhsK0VweDVhVEtLWld6S2krcHZLcnloc3JiS3BkV3JxbHNybFJXR2l1ZGxiN0tTR1dtc3JkeVErV095dDJWVDFRK1gvbHE1VHVWSDFaK1h2bFY1VGNjTHFlS001NGo1a3ppVE9ITTRsekN1WXB6QStjMnpsTE9HazR6UjhreGNwd2NIeWZDeVhCNk9SczRPemk3T1U5d251ZTh5bm1IOHlIbmM4NVhuRys0WEc0VmR6eFh6SjNFbmNLZHhiMkVleFgzQnU1dDNLWGNOZHhtcnBKcjVEcTVQbTZFbStIMmNqZHdkM0IzYzUvZ1BzOTlsZnNPOTBQdTU5eXZ1Ti93dUx3cTNuaWVtRGVKTjRVM2kzY0o3eXJlRGJ4YmVVdDRLM24xUENYUHhIUHhmTHdvTDhQcjVlM2tQYk5BSVcxUk5OZE5uWHI1MU5IVGxhWFRGZE5IVDdXanA3bHJHeld0NjZhVi9qLzk4bnVrcTVXckwyOWFzVkxhMG54NXk5cVc1dFVOODFlc1ZNaFh6MSs1QWwyYXY2cEZ2bUlsSTVOWGx2NitFdDIzUXI2ZzlIbkJkOTh0R0gxK1FmUGFCYU1rcmk2UnZYcGxuWFNsb21sTjQycjExU3RibXBwV2pONTk5WGZQb1FaTld6QjN3Y0o3VmtnWEhyejNtbXV2K2U2T2EwWXBYek5LOXRxRE4vMTZETUhyU2cyK3J0U282OFplUjJSdUtIMTNRK203RzhaOGQrTTZSZlBhRlZKRlUrTUtoZnpHMFZwdUt0MTdVK25lbThiY2UzUHArczByVjYrcWEyeGNjZlBCUnR3ODVxWmJVQ2R1S1QxNnk1aXJETXVuVDd2ODFoSS9iaDFiNTYyamRkNDYyck5icFhYTmEyOHYxWFA3UWZxM3I2cGJMVjB0cTVQZHZsYTZRcmw2OGNGdkZwY3UzRmw2NE03dnVMV2lWTTJLVWNvclJpbXZMTjJ6c3RTeWxkL2R1YXIwOTZyU2FKYmFXRHQ3ZGVuUzZ1OXVXVDFLWm5YejJ0V2psTmFXcUs4OTJJaTFZenE2OXJ2bjFpRkdyRHQ0VTExOTNTaWh1bEVxOVFlL2FoanpmR09wbVkybE5qU092WTdvTnBlK2F5NTkxenptdTVheC9Hd1pyVVZhdWxkYXVsYzY1bDVaNmJxc1BJYXlnNDJRamJsSmpwb3VMejBxLzlFWVhxRW9kVjh4dGs3RmFKMkswWjRwbURGVWxlcFJIYVN2K25ZTVZhVWgweHo4UmxPNm9DMDlvUDJPZmFQemNzYjA4cm0yZko1UlBzOHNuMmVWejdQTDV6bmw4K2pzbmo1emF2bGNudWN6eS9SbWx1bk5MTk9iV2FZM3MweHZacG5lekRLOW1XVjZzOHIwWnBYcHpTclRtMVdtTjZ0TWIxYVozcXd5dlZsbGVyUEs5R2FWNmMwdTA1dGRwamU3VEc5Mm1kN3NNcjNaWlhxenkvUm1sK25OTHRPYlhhWTNwMHh2VHBuZW5ESzlPV1Y2YzhyMDVwVHB6U25UbTFPbU42ZE1iMDZaM3R3eXZibGxlblBMOU9hVzZjMHQwNXRicGplM1RHOXVtZDdjTXIyNW8vUnFwMDR0bjZlVno2UDBhcWZQS3A5bmw4OXp5dWZ5YzdYbDUyckx6OVdXbjZ1dExaOW5sTTh6eStjeXZkb3l2ZG95dmRveXZSbGxlalBLOU1weVZsdVdzOXF5bk5XVzVheTJMR2UxWlRtckxjdFpiVm5PYXN0eVZsdVdzOXF5bk5XVzVheTJMR2UxWlRtckxjdFpiVm5PYXN0eVZsdVdzOXF5bk5XVzVheTJMR2UxWlRtckxjdFpiVm5PYXN0eVZsdVdzOXF5bk5XVzVheTJMR2UxWlRtckxjdFpiVm5PYXN0eVZsdVdzeG5UWnBUUE05R3NuejUxNnV6UjArV2pwN21sRTdLZzB0VXJrSkpaM2FaWTBkaTRXaVlyZldodWtZOWVhTkV5T25QRm1ycTZXZE1RUXhqMThlMDR6NWc5OVR1TU4vRmJqUGY5S3hOTHNBOUJPRllEYUprRTRzZUNIallZdkpCMUdadmxvbGh2c3BtdndNTUFQQWJBQjRCMUxHQjFnb3BuUU9WaXdERUN6aGVBYXdXOGt3SHZNc0JiQjNpdkE5N25BRHNQWUZlQlkyckJNUXB3N0dYZ3VPWGd1TitEY2R2QjhTNXcvTXZnaEF2QkNWK0RFMXZCU1VKdzBxWGdwRFhncEU1UWZTVTRlUlU0K1duQWo0THh5OEQ0ejhBcEluREtsVUF3QXdoV0FZRUdDTjRETmRlQW1qVkFXQTJFWVNBeUFOR1hZTUkrY0tvT2lLTkF2Qk5JcGdDSkVVdzhBVXpzQVJQM2c5UFdnTk02d0dsOTRMUm53R21mZ2ROWjRIUVpPSDBQT0tNWG5Oa016aHdCWjUwTHpyb1pUSm9QSnNuQUpEZVk5QVU0K3c1d3RnS2Nnd0JzQWZ6S0E4NWxnM08vQnBNN3dIbTk0THpmZ2ZNdkJ1ZDd3UlF4bUxJTlRQa0dYS0FBVTVlQXFWSXdiVEdZWGdXbVR3UFRYd08xZmFEMk1URGpRakJqR015NkVNdytHOHkrQk15cEFYTVdnVGx0WUU0UXpCa0VjemxnYmlPWXV4N00zUWN1WEFrdS9IL2dvdTFnbmhmTWV3eGNyQVNYZG9QTGxvRExWT0F5RWx5MkdWeCtLN2k4RVZ6K0xMamlCSEJGRU15L0RNemZDdWEvRHE1Y0M2NTBnU3N6WU1FeFlFRWRXQkFCVjFuQTFSZUNxLzhNRmk0QkM5dkF3Z3k0cGgxY2V3WDR0UkQ4dWdkY054OWNQdzljM3dhdS94emNFQUUzbmdGdXZBYmMrQlZZSkFPL2VRWGNqSU9iSjRPYm53SzM4TUN0Wm5BckJMZkp3ZTIzZ051ZkJYZnNCSXUzZ0R0ZkJIZU5BM2ZkQU82aXdKSlpZTWxkWUlrZDNJMkR1K2VDcFl2QXNvVmcrUUt3WWdqYzB3MVduUTFXWHcxV1B3UFczQUxXWGdyV1BnN1dUUURyM2daMTYwRGR1NkIrQ1dpWUJ4cTJnY1lzYUVxQTVwMmcrVXZRTWd1MDdBV3RZdEE2SDdRMmdsWWF0SjBHcEhPQWJDcVFudzhVUWFEc0JPb1RnT1lDb05rS3RQT0E3bXlnR3diNlNxRC9MVEFzQXNiOXdISWpzQzBIam5IQThSVndGSUh6Qk9COEhyZ2VCMjRBM0d6ZzVnTDNFNkI5SHVnUWdvNC9nODZuZ09jNTRHMEV2bU9CNzlmQXR3djR2Z0wrSEFnc0JFUVVrR2tRL0JzSW53SENOSWpjRENKUkVPV0RhQk9JRWlCMkxvajFnSGdyaUtkQTRneVFHQVNKdjRNa2NtWk9CZWtLa0RrT2RMRkJWemZJTGdTNXkwQytIblIvQ1hyT0FMMTUwUHN5NkRzRzlBVkIvMm1nLzNNd29BTURmd2VEYjROaEZoak9nZlZYZ1EwM2dnMzd3Y2Jyd2NaZXNPazhzT2w5c0RrUHRnakFscS9BMXVmQXRoNndmUURzV0FoMmZBanV2UUhjNndmM0hnQTdMd1E3L3doMmVjQjliNEw3M3dNUHpnVzcxNExkRDRHSDJPQWhDM2lvQnp4OENYaDRGM2pFRGg3WkJCNmREUjdkRFI3RHdXTTk0UEZwNExmandSTVM4THRUd08vdUJVOHVBVS9kQXA0MmdtY3g4TnhzOFB3TzhQekg0SVZUd1F0OTRNVmE4SHNBZnU4Rkw1MEVYdG9QWHNiQnkxdkJLM2VBVjFlQTExamd0V1hndFozZzlVdkE2MStDUGMrQVBSQzgwUUhlUEF1ODJRUGUzQXZlT2cyODlWdnc5blR3ZGhONHV4Kzhjemw0WndONGR3cDR0eGZzblFQMjdnYnZYUW5lZXdxODN3MytzQmw4TUFEK21BQWZQZzQrRW9LUGpPQ2pqOEhIOTRKUEpvQlA4dUJQR3ZDbkQ4RythckR2ZXJEUEJ6NmREajd0QXArK0FUNXJBcDlqNEhNMytQd3hzSDhKMlA4VStPSWE4TVVqNE04M2d6L3ZBWDlaQnY3eUFmanJidkRscytCdmo0T3Z0Z1A0THFCbUFpb09pbXhRZkFsOFBSdDgvU0NnZThESVlqQ3lIUnhZQXI0NUVYeHpIZmo3ZWhaWXlrSXVKeXZHcWxqSll0dFk3QzlabGErek9JTXNEc1hpTFdWaEV0WXhYTll4dTFuSGFsbkhUV2NkOXdscjNCbXNjWHRaeC8rZVZUV0hWZlVPNjRRbzY0UlhXQ2ZOWkoyMG4xVTl4S3Ira0lYM3NFNk9zazcrSzR1ZllJMy9EV3U4bDNYSzV5eEJGNnZtWFpab09rdjBHbXRDSCt2VUVFdDhIRXY4UEV0eUlVdXlpelZ4Sld2aWF0YkVkYXlKRGF5SnI3Sk80N0pPbThVNlRjODZiWWgxK2w5WVo2eG1uWDNmUFoxZHhYTzZXRy9rcUR1NzJYQk9jUkZmcXJMcGRSS2QzcVpzRlk3MDhscUN5cVJCYkVoMjJRc2krQTYzMEVYR2s1SmtQSmp0RTFLOXZGNWJWcGNRSjNRcVVpcnk4SjRjK1lMZjRsQ1p6R0t6U2UyUWl1Z251SElORVRGS2pCRjdGN28vd09zanVxSVJjU1NhSTRaRWNBdTNQK3N3eHlWeE02bHFFZEpuODJnMlpOTVlLanpJcFN2cFNzaWp1VXlCekdjdUtqd2FnNVhvTHg3RW1MODRWU00zVjNYQ2FkUldGV3NQbk1mZUF4djRjQjZsb2VkeER5eXFoUFBnTlBTcDZueEtCWnZROTlOZ0Raekcza09wK09oakV6Mk5DM2ZRVGQ5K3JvTG1yQklLNENRb1FmOU9WYkY2aTM5bkY1K25adkpmZzVNNGs3alB3MU01OUV6dUFocWRKR1AvUXE0eFBZbnpQdmRLV3NLWlhmNThOUzNnd1BuY1p5RTZuVEwycjQrNERMWEozQmVnaEVOYmFRbWZyaWw5aGhPNFZYT21RU1U5VHBsVFVpOUErWFJWdDZwNkY3dzhET2ZSYytHOEFMd2FQOU5NdlVsbCtNYnRpazBOUXcxRHEvSkw0OWdIOUx4WnZCYTcxQ0kzeW8xcXZVNnIweHJWVmlWbVZUb1ZjbUZqb0MyaUVFY1VjWFZLbDlKbGpGa0xLdGFzcldETjIzSjJERC9IbkxObmJFbFVZdGF3RmNPbm1zUFdnTWtnMU5yMUJwTVlWV2d5S0J4Tkl0eDVtVnJySS9RU2ZKSlpUeGlDcHJBcGJJbllZcmFZUGVhTTBUT1hDekszOVM3YnVHN2p1bnRsRDVtd21YRGVYbDQvMFJQT3gvS3hya1F5blV4SHUwSjVMSlQzZC9jSUJ4dzlwcnpZbE5kMXFWS3FsRHdoalVsamJaRzJrREtvSXRVRWhwOEYxSVNPTktCaUR0cUNHTzRBdHFBckhCSEd5V2c4SXNZWGdFZzhFeWlJQ3QxMmZWNkNUNzhzcjAvS1E0MCtyNkFLL3RvR0s2WXIrNVJ3Q3dUVElCditHb0pPVlRVQk9WQUlLK0N2UnM5NDdWNTRBM3lNMzlNZENPY2t1WEFtbmtoaitPUzlpWFEwRytyR1F0MyszbjVodjZ2WFdoQmJDNmFzUHExUHErT0tNQlpXeUFKdG9sYVowNktRS0N4cWcwNmowNWlVVmlsbWxicGFtNFg0K1h1Yi9hMGhtVGdraXlxVG1xUW1ZOGhaTUV1dTI5a3J1bzErbkE4Qmwrb28zc2loQVhma0Zub2pYNmtOcFUwU1U5cVJMUWdMUkRhYUZxZWp5VkJXbEUxYU5WRkpWRU1vcEVLcFEyblNpRFVtblZVcFFpMzBlRGo0elhzcDc4aEZUT05EM3piK3NBM0g4T0RlSTJ2OElWcHVMYlhjQTlrL3ZhVzFURXVyb2xZMGtXYkJVeERmSjFiM3drdnA2WEFCWEF2UHh6OHQzazVkeEI4NWxWc25KUk42aVQ1aFMyZUZwQ2ZvQzRsOUlYK1FJQWt5U0lRRFdDQWM4eVpGeVhpN0t5S0p1TUtPa0Mxa0MxcElFMmtpREFFZFBHMkxRUDlrMC8zTE5tQWJsdDJjdmtxMGNxM1QzQ2hwTkxmcEZScUZScXN3U3pHejFJRTZKL2VyZ2xweFVCdldSMDBZL21YVUZMY2s3QWw3M0JYcndEcDRhcmZHb2JWcXJYcXp5V2d5V3ZSMkxXYlh1alJxWVQzUkZHc1Z4MXJUOG01MXQ3cFBQMnpHTE1PYm5OdEVEKzRnWXhzbEcrUDk2VHc2VWoyUkFTd3lFQmdjRmo3Qmc5VU9EajEwSjMrRnVWbXBGV3VWamJhVm9rWnBNS21TcUpLV1RGNllEMlpTU0ZtbWVvSWJSYkFhTVdta29uaVhxbm9QbkU5UGhWUHhoK0VVNmhHK3JkM2lOSW1kSm9mSmpvck5iR1dLemVyRW51UW1ZNGw0UEJGUFJKUGhWRGdWVEJFcGpFajVra2tobmtWNldKOFVKL1dhb0ZLa1VOdjBpTEY2bTBZcFZCTGFtRWtjTTZHcDJoNXZGMVRSajlFVHZyNlZ0UUhPWmNQM2k4L3g5VTZOWFdsVDJoUW1oUjRWdFVLdWtLdWJ0WFhhT3NOS3k5Mlk1VzducmRjTHJ3L2NHcjViSEw0N3ZqSlZsNnJMTk9jVU9YbE9uZFBuOUZrVDBpZld0RDNoM0E1ckJmWGgxcmdpbzhobzhvWmVRNjlsMExFQmMyeHdiOWtoM09IYlFtd1FFeHZDZy9IZWVHODZuOHZrTXIzeDRiQm50RVhpcjI5bndWdFJrOUxGOC9uRGxsNERJcTVPeStPdDhkWndJN0VPSTliNVZpMFhMbmV2Y3F3VE85WlpHZzJ0aGxhTkhEVlczV3FvdDJ5bmF3V0pRSnJNaGxDSjVoS29aSEw1WEQ3VGwxcWZXaC9mR3Q2RmhYY0ZIbmxLK0pUekVjc3VzV1dYWWF0MnZYYTl1bCtSUnlXalNLQVNWUWFWUVEycEQzaVFJcUYvVTF5a1lzRzcvOHFtVGkrTzQwOXA1SHgreGptOHFZTU5aLytwOVlhTDNyditzWGNmbjczMzZSdmUrRk12cDhxRGxNMnBMTmdQSjdHcGw1RmMwMVBnVEhvU1BaTStuejRWVHFGbklsc3lFNTdQclJxWmsxSldiLzl1b0krMS9hUnhUaDc1T0R0R3g3bTIxSzQ5MUdKazcxQ3JUcVVXdzFONXFCVmhKZXQzY0NvYlNzejhiRG9ZVDBnU2lXQW1KOHphMG5va21UOGlxd2lxRTNxeElaR3g1VVJWOUZWWkpjT1pUaXJKN3F4RUZnMStXbHpFbU1HcUxpT2NTNStwcEg0TDUzaFYxUnZnRlhBM3ZBSmZBcjh1THVVdlhtcFJyNVNzVk5lMXRkUzMxQ3RYNlpkaCttWDJKWXVGaThrbGlXWGl4TExzcXI3NnZ2cjFiVnZWbUdiclRzdURvZ2QzaHRKYkpWc3o2M3Y2aHZ1R3Mxc1M5MktKZThuN0hoUSthTHRQZjY5WWY2OWlTOHR3eTNCZHo4b01oZzluVmk0TkxSWjV2Uno2d3NxZW5OT1NrV1FzQ1VOVUU5V0VsSVFNSTJTK3RoWmhpN3ZOSVJNN1pGYWtwMHdhdlVHTmRMTmE0V3dUdFNrQ1liVkVIZGJIVFdsVDJwcDFkR09PYm5kUG43RFAxME4waTRsdUpGTHBhRG9SenlBdG1za0ZlaEFiVkYzSzRtK1FnTWdSNG9COUNESFJkdHJ4bDNNR0J4T0pXRHdTcTRsRkNOSWo4cGk0dGs1TGgxbmNZZTR3R2d5ZFJwT1EvZ0RPSy82R1Z6V0xnU3pudzhuVkQxSnAraEk0RDk4TFYxSlNQbEovb1VBNEVDYkR3VkF3RkNhakJFWkU0NzZrcUM5bjB5SE1wUXVxbGNKR2RjT2FCdkZkeSs5YVVTN0xNVFM2RVlSMGp1UGR0cUtqdlZIUzNxanI2QkIxZU1Ja0dRZ1JrV0JOSkJnTHhjT2pKWnRBSlpsTlp0S3BybFJYTEJjdVlPRkNvSDlZT09RWU1QV0pUWDNhYmtXWG9xczEyUmpGb28zcmlOVWkvTVYxRFU1THM2VFowbVpRYUJWYXRWSW4wOGxNYmJZV0w1S3pPVG80R1U1SGF2NTBlSHIxRUxXZHZoR3AraG53U3Z3TGVBZnFVbVF3bmt2RnNYZ3FTL2FJZXJOMkkrcUdNYWhWQ3RWMnJRR2hTb1BjM2loYVJKL3lCSGV3MjI1SVM5S0drRVl1eEQ4MnVrMU9pOWhwc2R1c2Rxc2RUUlFYNWpLWjJvMmloclpSZFdwQUtJWStiNFdBYkltMnBXVnBXVlpaMEJhMGZZWkJLMllaSEhJT2k3WnNDRVNHSkVQaHZrUjNWM2RYT2gvcnhXSzl4TUNRc051VnRXWEV0b3c1YVlnWllycXdoc1JJamNhblJ2QTE1b243azJTU2pJZGkwVmcwa2dnaEcvcEJLTzN2eWd2N0hiM21ndGhjME9ZVWFVVzZMZDRZd1NLTmF3TXJSWFVOVGl0aWpyWE5LTmRpK01keXJXcVVQNjIySm9JUVZLMUNvTElhVHFJdVU3RW9BWnpPTHJKZ2dYOFpkUmt0NW80Z0pNQ2hxK0ZmMEwvcHNQcFZIdjBzbk1TWHF6djFlcXQ3M09rZTN1WmRqejFIQnNsUU1Gd1RSRUpCaHNnUVFRWUlNaVR3Y0R0MG5BNnp4OUNwUTBXakhuZVd1bE90RWJyck9GV1hHTkZRTElIOGQrRzA2dDFVTjMweHZCai9BdjhZV3FsRmZJK0g4RVhGdm1nZ1Q2NzNoZ1Z3QUU0Yk9aMTczY2dKOEt5VjNvQXY0Q2RxL0VRZ1FLSVM4a2Q4bUM4Uzh5WkV2WG1yQmswcVRWaldKR3kyeXRScXNWb3RzelNMZEFadkFBR0RnSVd3a1RiU0huU0duQ0ZYMEIya3A5d2pJT1FSUlVLWlVHYlVlUjJHZjVIWDlSZ0hFS2dZR0hadUVHM2FRREFqRSsxTElTV2RTL2ZFQnJEWUFEbTBRVGhzSHpUMmlZMTk2bTVabDZ5ckpkbUFlTnhRUjZ3UnFYWHRib1BFNExhNDdDNi9SMUIxZ1JhaGlpVUl6UnRWMVJ2aHhmVEYxRTY2RnRiaUgxTnR4UnY1OURWY1drUmZyWlpxWlhwNWpSNGhZek1xVnBsRGhqbGticVFNVnBIcjRvM2llR05YVzBGWlVQYnJoaTJZZVhpRFk1Tm95MFlpc2w2eVB0eWZMR1FMMlV3aDNvL0YrMHN0Y3c2YUI4VG1BWDJQS3EvS1M5UE5NU3pXWEUraWxobmJuWGFKM2Vsd09kMGRBVUUzL1JLL29TMlVWa3FVYVV2M2dMQS8zTjJWRVdlNmVrUERvcUVlcXlZcndiL01qakxTSWxNaFJxcGFMZlZJOEtybzQ3dVUxRFk0alRWQURiTUhHSlV5RFpwNG9YQm5KQklKanpzOUhPb2tSV0d1cHdNQkZJdk5hTkhWV0hSbWpVbFZLa3E2YnVSWUFWekloUjlTbjNzKzUxUk4xVUloMVFhUHIxNlBiTkZNYXNOSUFKNEZGOEhUYUJ6T3hGK2tycVNPNFllODRVQTBpRW80RW92RVFvbGdHZ3NpT2M4SmV4MkZNanhYcHBRcGFhdzVqT0hQaHBzYkFuV01wSmZVZ05TbzFDcTFPcFZKanBua0RtbXJVSUVRbGtZYzFJUjBFU01xNXFndGFvczRRKzBJWHVIdjYxdzZ1dzc1RmkvcXJIcVRVVy9VbTdVMkZXWlR1UlF5WVJQWkVtc1R4OW95MzJJc1ppQTJPcmFVQm1KWU1zeE0za3gzSnBPTDlXQ3hIckp2QUUzZTNPamtUUmtUeG9RK3FndWpRdXI4THA4QWY1YVd3YlA0dVZDNmhMSHlaSitvTjFmV0tXcTVVR25WYXBIQzBjcnRMYUpXT1JuWFNEUnhheW9yOUhBTjlIUDhRampibFJLbnVucUN3NkxCSHB1dVM5S2xDeXZiaEZLTFVvV1FuS3JOVmkvQzMyOHNLeDlMdGtkWU5SWE5iQjBVSVRuOEZmSXlNbkEyYkVXYS9LM1B4c09idVhBdXZHWEg3b0g3VTd0cVVydENPN1lKdDlnMzZBZkYra0ZWanpRcnpUWW42NUZvMTY5RG9vMS91bXFOdzF3bnFUTTM2NlJLcVZJdE5UUmhoaVo3L1JwaGZhQXgzQ3dPTnlmYWtFSldGRFFEUnN3NHNNRytWUlFKZTN4aFNkZ1g5QWNJajF1Z2dLL3dSNFhyeDZKMU9HSDBqR0lCdUIxT0xlTUJPTWdBZ3NTUkFRSjlDUkRRMnl0L01vWVltWlJTd2cxd2F2WHZ5bGdvaTNUZlQ2OWFRVy81V1FEcVNPQVRrdFY0TzRQc3FpZ0RDMkxVbld6NENzWG1ReTkwYytpYnVIU0tkc01VM2M2Qk4zSFJUVlBocVg5aEVPQUpDR3FoL3cxOGk3VkdGdFAyNzNCWG1kYkpESzJUWVJVZlBRcFRzSjFPalpLRVh0ck5xWnJJb0lJTDRGblY4QjQ0ejRjYy9yM29BeFBQZUluYmpUenBYRHdYenlSUzZJaGx3am5VeURCQ0l3UC8yREExU1pwS2h1bWdWYkkzd2ROV0NTSkRpWHdhbWVWMGdSd1NKV1B0VHVSaU9ZTU93azdZQXphZkRmUFpQRGE3ME9RMk95eGloOFZpTnFDaU1Ta01Da09ydGtHTjRYdDlYUHF6NytJcmY5UHQvZDJibDhQajRQeFBQLzFEOWVBbmowRWNudmZuTDc3QUh6SlR5Nms4djc2RDErRnorMTBCVjhBUnNLRmlEWmo5bU45czhocEZMVzFPaTF3aXQ2aEtQcWx4MUNkMXRqUUptL3l0UWFrNEtJMHFFOXFFTm4zUW00N0Z2SUdZSkJhSUVoRVN3OTgxUjVDQlpQQlNJT1FMZVRvRVBuUEFURnBJUzhnYXRvZnRFVWNNSVlkWXJEMG1HdW9sNDhobmpxZFQ4V3c4Rzg0VEJZd28rTHJ6d29ldEQyaDJpalU3MjdiVUQ5Y1ByK3BabXNiU1MrOE0zU2E2N1U2clpwbGttV1pWV3owNnBLczBTekhOVXV1ZHR3bHZEOTJWWGlaT0x5dXNIbTRZYnRnc3ZWZURhZTk5d1Bxd2FOc0dmNmhmMGgvc0RtY2ltVWc4SEFwaG9WQ0E4QXF2Mk1ocGQ3VzdIQktIeStvMG9hSnpxbEREVk5MMlp0R3F0V1M4WGxJZmI4bkl1bVhkNm43amVzeTQzcjVwcTNBcnVTbTJYaHhibitudkxuUVgrakxEYU1TR041S01lclFia0hvMElFc3A3WlptbW1KMVdLeU9YTE5TcU8vUWRlakVIVHEzM21WMEdSMW1tdzJ6MlN3dWswaHJKbUtvOHBnYmFUdy83T1NjU2QvS1I4T0RiaXZCTElmTjdyQTdiQzZyRzdPNmJSMTJxOVZqSFhlbTFZY0dpekh0SVdjRWMwYmM4WlF3NlkwRkl1SkFoQWdGRVRJSklwNWp2bERJR3hLUndZNzJrQ1RVSG5RRkhVaVEwQWdIekY1OWg5cUhNR0lPYVVvV1BJZTZRY1hxS043RHBvYkhRMlNpaDVsb1NDMlhIanB3SXdjWnI2MlF4WUVEWExvTm5zTi9FRTd3aC8wUmY3VEdIL1ZGZkdGVVFsN1NGMGE0eDJmMjJuMVduNlhHWi9HWi9TWlV6SDdMUTdSSVVMWEdpNVRZZERTOUJQQU0xaHZ3SXJnS0xtQy9VYnlKZjJBUmZKUzNZMU1nTWlnWmpQUWtzcGxzSnBFTDkyRGhua0J2dnpEdFR0dlRZbnZhbWpRbnpBbGpUQi9SUjNSQmJRRHo4Q0wrTUJFT0lqQWVaaXdsR1Fza3NFRENtMHdKQzg1dVMxNXN5ZXU3MUNsMVNoRnJRNzVCVzNPZ1VZU214UVM2anc4RlgvRHlHWWNKYVRRVHFWTWpzS3ZUbThRbXZkb2hGN1h6emtLNkN6WDBHQjVqbmxLU2xDR29sZ3JsTnJVT0tUZWRBcG1uRG03VjQxcDRFVFVCWHNKYUR5OWpGNWRUQmI2K1QxMWdIRlpwcGpYWm1teU9OaURSYXFqM3J4TXRYbEtXVW1sOVEzMUQyeXIxVWt5OTFJS2s5TGJRblptbDRzelNubFZqcFBRKzY0TUlnQVhDQ09hRUJ1Tjk2YjUwSVpjcjVBcnB2c1FnZmNtOUFyMU1vV3JXWS9ybUJsdWRxRlhxRDZISkdWTEZ0Q2x0eXBpMWRtTldOQVdSMHZIM2hMckZvZTVvTnBsS3BycmllY1NBZkUrZ1g5VFg2ekQxU25wTldWMVNSWkNDcW5jWm5UWWVHWms5U0ZtOEFhOWc3MEVBN2NDTjhBbmVnL2VSeVhzbDl5WTM1NGNIaGdkNk5tWjJZSmtkb2ZzZkZqNXN1Vis5UTZ6ZTBiYXBmckIrY0hYM3NoU1dXcllrdUZqa1FTNmVlR1FMSDlFVDh3cmRUbXRla3JkMkdWSEx0SEZsV0lhRlpZRldwRGVjclJhWjJDSXpxTFM2RWtpeFlsYTV6TVZFcDZ2cVVHdmdpZkJzeUVOSWk0a1h3dzQ0alkrdWRNR3o2UzUwOVJNRWlJa0RpNmdvbklhOE5DUzJRZVRkbkZxK21YcUYyc3BITjdpUVFNMUQzNFRoWkRyTWFQYy9hZUE4bXErRWNZUUdKc001MWNOd0FYVUNQQk9YVSs4OXp1L3M2SFIxMmxIUnk4ZWRoVDhBejZRbTBtL1NJbmhkQjlkcHRCdXRxSmhNZW92ZW9yR3E3SmhkSlhPM2lKcGJBeUdaUkJaU2x2aHV5Rm9LbUtYZzdCdjg1M3pQNlZJcWVPbE9RY1BqeTNiZVBJd04zM3g5NnFwRFNRZ3UveWN5a2twN2ZRZzYrVklCVklna21RZ2xRdEZ3T09JTENLb2VSNHdwSUU1Mmw0THVNTUh3SnNCZzFtNDZBYnZwZVNYK0ZHQ0NMaUIzZHhHdmFqUnFNTXJ2OGNWRnpBMjhLbzBXMWxLUElxL29KbmdSbTdvSlBUNGk0UzAycm14ckZqZTNyZFhmTFdxV0VoRUVYU0xhcENsTHoxMG1pTFFsWkJsRlJwRlRGM1FGWFo5eHdJYjhDY2JUMjdXZGpHMlJiSWtQWi92UWtWdWYySW9sdGdaM1BTejBVS2R5cWpabWxUbGw4VVpWVmxYOUtzSm5kK0Q5eFdYajZZZW9TZkJCdUp0RDM4T2xMNkV2MW1qMGVwT3BCci9EWkxKYTdPaHdPdDF1cDFQUVFYSTdBNTNCemlncWljeTRzektkM2YxQ3lDMTNVYzk3NGdrT0hvTU45RTVPMWRsamxpRktZa1Z0Wlc2alhJd293ZW1qUEhnTnpxVjRjQzZiK2p2RHJsUG9kVWFsUldzejF0aU1Eb3ZMNXJLNW5lMXV0MHZRd1hYNzIzM3VnQ3RZZzlScG1JbTBXOUQwbzArQjZ3VDBkRlQzWEhncDk1Mk9wOXEzaWJlMWQzUjVSQjV1U0U5WVNIUFFXQk0wa2liU1RKcjlkby83YlhxaTRIM3UyM0NpeCtjbnlVZ05HU0dqd1Znd1JrYUljQ2lCdEttblEzbFB1NlQ5bm83cjV3anBTK0JjWnJUZVR5dnpUSHlqbWhuYm5ZaGxhbW9EMDlvWlBIeG5aME5uWTJjVEtxMUltRy9pS1RwNG1tNVQwcERSNVd0MGVXMWUyNjN0Tm1UTUNScDVaMHhEYjBRVXBuQTdOM2R1NkJ4Q3BUYy83cXhIZUJrUEw2bUk2R1BxcEtJbXFVakowbTNwdHBRc3FZQm4wTGNoRDdsNE03ZHF2dzVwdjRsd0Rtc1l6a2N6NlZMMk1QeUNmMWhSZmZDK1VBcHBrdlNXd3ZEUThGRFA1c3hPTExNejlBQ2pTUjVRN3hTcmQ3WnRyaCtxSDFwVldJWU0rN0lsb2NXSFY1aytMd2N1OFBMNy9iMmxhUllibldheDhqVHJFL1gzT0MxSTYxaTZESXpXaVNsRE1pd2s4ek1SZEdlclZTYTJ5cEJyaEE2VlFZN1FpcnpOMll6d1RTQ01WR2hZRmRPbGRBZFZhTC9RNitWVTNZMG1VaXVhU0JjaURmTTY0dFVTT0ovOU91SjFTYnBhUCtmdDJCeGcvTkZJZjdJNzI1MU5GMHFlTWpHOFNiakpNV3djRUJzSE5BVlpWb2JjaVRvRSt1cFdCWllqUWZnVi9Sb2ZYcmlQTjF5dzY5RUUxb2RVYmNJMnEwcURqSXVtelk2Y1RjVGVCTFBJZEQrY1d6MElyOTZQcW1MQnkzQTlmSnF1UVdBVDR0eHR3VTJKOWRuMTJZR2V3bUJoc0d0RGZBc1czMEp1My9rekdMcVVYQkZmSlk2dnlxd3JOQllhKzl2V0s5Y3JOK20zMmp4ZUFmN0FIOUFzT1N4Ly9yVXh3SEQ5OTRhQjRiYTJTd2xWOEZlb2l4ZWdpVGdQTGtQbXFIaHFCNSsrQUlhM1pRWjdjK3RyY3VzajIrNFRiclFQRy92RnhuNTFpYnROeVhWUkxMcHVKYkZNUk1kTElxMTZqd3RQb1ZVY3VvSGF4b2NZTnhGemx3QjB5STdBRWtLM1Bndm1zM2dzVnFHMTNlSzJpTjBXcDlWdVl5SlpaaWZtTkJ2ZGVoSE5RKzJaWTRTL29oWWd2SitnbmgxQmRoN2VDSy9DOTViVytHeTl4Z0l6bVZSZHNwUXMxUnByUXAxdmFnalVpMWF2YzVnYkpBM21GcjFjTFZkckZFWXBacFRhMjFyL3lWTGY5NWI1eHE3eGpTN3dqYTd1SFhwcEwzL05wdHNmWEkydGZ2QXB6Y3VpYlp0S3lDSFMvNzJnV3YvUVAxblZHMTNSdy9EWHk0dDZZMWYweGk3bmphN2xZWDV1MWN5c2t0cUtaZ1hqVTdQRG8vR1FOU05iNFR4MHRZN1JxTHYxU04wK3dtajFaOUdJYklBWDRUdngxNmtvWTBiNHZCdE15MlN0NGxiWk9zUGRvcnZYeFhxUkxlMDEzZnVra09MVDgwWnFlTGVSU3hJcnhZbVYyYnJlRmd6ZjJkc3lwTnhzd0l5YnQ5dnZLeG1UelpMTjhhRnNiMTl2WDNiVW1KQWxZeUxpVk9VNjRRMzAzTEk1NlN5dVpNd0pOY1EwVHpReTNyREsydWlRMThnZExsTUh3bkFkcmtnZVFlNjhkZEN3aFJaUjR3WDBkVno4RHBoajRPNDFYSmdyTHVKVXdhKzZsTlIxOExiblZhejQxMTUyOFdORWFpYjlqclhlM3VwVTFpaWRibk9Ka2p1Y1JaU3kxbDdUOExrd0phQ25jYytsVTZaNmE2c0QzZVE0ZUpOVDRzemFlNjNETStFN0F2cHFMbHpIMURXZCsxZjRhbVJEc00rZnE4bjV2UkhHV25pOFpvVmY0bGNFV3lMci9rcS9pdFF1RjdZV2Y4T3BzbVhMbllzVXArR2I4QmZoWjdDZVQ1b1luNDJ3MUJDVzBlSzNlNUZ0T1VrQWwzQnBJeXhDT2R6SHdUZlJTN216NlZQZExyZkRaYXN4eVpFOXM3c2ROVTRyQnlHZG9KdHdrY2ljbWZJdTlOSHRyNW5OTEtBdjVVSTV2WTgyMGhRSGtYb2JudWoxK1FraVhFT0VSMHNnRkFnRzRvS3FubEhyQ2ZzWnFKQmoySTNUTjFyME5wUGRXbU8xdTV5ajdBNkU3Qko3eUJhMUpHZ2MzaWlnRjNGaGRrVElvWjlHdnNEVFBKaW5oSnlxaEJ0T3BZUklzSjZnL3NndVRtVEU1UTBrV21GdUpOb1ppMFVqNDA2UE1LRzJDTEtNZG9mTDVYRGFIVFVsMXdoTllEdjZRRDlMdnlXZ3AxSWZ3S2swd1d0cTYraFFTanFVNWxLOG5TRDgva0NBSUdvSWdpU0Q1UU0rQk44VVZORy9veWZEcWNWcnY0T2RDQVZEMUF6NjBXOXM4RkZFUzhqOTN1b0tuTWwwY2lZWGZucGdFYk4xWUN3QmVDWkQ0Y3dBbnhiU1UrR2pYOXZvUjFFUEVJRXJpa3NRL0tEV3Nha2RWQnNmRFl3SmNkYjAvNjZEc3hBRFp0RVhjYXJlb3dWUXdOcFQ1TEgzaktjRlJSNFU4SmdseUxzWld6OFZFWnVQWnhGMGZZOGZaS0tEWXVSaFIwbFVncEVRVTVDSGpkM0ExUm4xQm9QZW9EZnBMRm9FWGJRT0xlYlF1clU2SWY1d2ExQ1owSWwxaWJRdEs4cGx5dkdjZEZhWWRhU01VYkV4YWlTTVBvUHZxRHQ0MUIwODZnNGVkUWVQdW9OSDNjR2o3dUJSZC9Db08zalVIVHpxRGg1MUIvOVB1WU11K2lyay9FMzdlanVxYkZvMVBCM0o2eUw0TlBVaWY5amZFK3dTQjd2Q2lWZ2tGb21UU1IvbVN5WTlLUkVTOHNYTDdJYlZrdFdHQnJVVUhlcG1ZeDFtckhPc1dTbWN6S3R6dDlwVllydktyck9aclVhejFlU01PaVBXa0RGb0puV2tDaU5WdnRZNmROdEtZazJzWGh5cnl6UVhwQVhwb0JxSnVXSHp2ZllIR2VwYW5jZW5rK2g4QnRJWU5rWXNDVnNHczJWY1BjeTIxdlh1WG1kVzdNdzZrbzRvS2tHSEgvTTdYTjRPa2NmdjlSTVN3azhFQ2VRckVzbEFGc00zQmJMZTN2VkNMOEdwR2puL2l1SUhDQUVKMkhETkZmemlCN1Rnd0FjOHB2UHp4M2IrakZMbno2VEMvRHB2UzBBcERpZ0pIV0ZDeFVhNE1CZmhiL2VJT3NwTHB3NmJ3NFNLenFuRW5FcDNTNTF3RWEvZTFXWlRpMjFxaTk1b05sb01kcDBiYyt0MDdWb1JQWTMzNEwxa25KbThnNWtDT2pMOXNmVlliSmpZdEZXNGo3ZmUxMHQyaWNrdU1vbTgyMWdrRkEyWUF1YVFOV2FMMkpQMkxzemU1VVo5d0RmdDQyMTFiREt1Rnh2WHEvc1J4d29ObWRWeExMNTZHYm1Zb1o5S3RydVRrcVE3Ym8rWlkrYXdQcWpDZ2lwL1c3M1FXOW8rNElNbi9ocWVXUDBZdFEvUFVqSHFhcjZqdzk1dUY3ZmIzWGFudyttd08yMm9melp6dTBGa05Jd3FYQzJwQ1dMNGNrMVFUU29KakZBcWZIS1JSdTEycWlWcXA4YW1OV2xOQ0plcVRXcWIzTlVLVDEwaklEeWtseFFqVjVnTUVBR0MyYlNGK1VNUmIxd1VpN3NkeU50MHBPeHBHNFpuMDdhTXZjdUJPYnB5N3J3b25mRUZNcEpNSUIxTVJWUFJSQ0thaVdhQ2VYOHY1dVZXbGRWc0taVmlWTXZPUTZKQno2TWIrQ01hSnJFQ0RSL1BBQTMwT2lXbGdlNU9WZlY2T1BWZUtNUnZvYzZIRy9uTGxldVVkNHJXdGtSeUtva3FaeG5jS3R3YUh1ektpWE5kZlpHTm9uekdaVVBzc3NWTUVUMDhlN05BdTBrMjJORFQwTE0ydlRLRS9ZMFdUdVExMjF0Tk1wMU1wMVJwNUJxNW9jM1NnbGxhbkkzMXBhMHdMZUp3Uzd3dExVL0xzNnB1WGJldXg5UnZ4eVpENFo5NE84S2JNOFA5dy8zZGpIckdoMzBlVHRVU05MRWhZNVp4ZUFwOENtRjlhdjNJTUZUVHY0RVhJOHV3RGZiQTgvbVJVQ2hPcEltME4rZnU3UWdMNEpYbzlrVmMrd3Z0M2Y1Y0xGTVR5M1NGZXoxOW5ydzlvOHZvNG9wUUM3UG4zTHBKUDZnc0tBdnlMbWtTdzdkSWsyMlJWZ0xEWDJvbFpENWxSME5IbzczWjFHeHEweXFVQ3FWV1ptbzF0YnFhZlkzQjJZSWw5Q20vNDNyMEhuMm5zY05jMDJGMmx4QyszV0YxV3AxbWw4R040UzhqUlRLSUZNa052THZYZExTM1N0cGJEVWlSNE50OEFUU1ZuaG5WZWJTTitodWJ0bzFuMGduYW1jMjNnRnRWeURKQUJneEFBRldxYWtZcjRxOFg3MmFHYnhHWDBZd2NuQnBWanRnL1ZJNVRFWVNaaWVqaHI4TVozR3dUaDc2RytZT0NkOUlxcERGVjhDNEk2R3U1MlFFT25BbkJMRzRWL1FnOTdYVnF3ZStoNmsyV2dSSWlVUDQzL2o3dUxTUEh1MW90V3IyalJ1OVF0Y3U4Mk9XOElWZGZaN2UvMjU4Skp4TFpiR3lRMlA0SWRiSUFudng3K2xodUhzNzA5MGN5NlZCTk90VHYyK2JHWHVPdERLenJiSFkwTzJSR2pWcXRORGM1VmtucHl3VVRPemhWOUJ6amwxVHFpK29VcGFQUGdoSUVqaXpVVzN4NzJwd3lKQTFKYlZ3VlVVVVVJUm1Ka2JJMlg0dW9vY2xsYTVXMDJ1Um10VUZ0ME92TUdzeXNjV2pVd2haU0VkZUs0OXEwSVd1V29pOE5Xc3lndGFzVVFrVkFIZEtMUS9xb01XRk9tRlBXakQxalQ5dlRqaHlhUFJsbnhwbDB4bEdKT0lKMkxHajNXeTFDazhOaXNvcXRKcFdyOWJ1ZHFYcjBIRDFocmFCcjZlRGFIVzJZZE1mRHhxZEZHNGI4d1g1SlAxbUlkTVc3NHNsa0pJTkZNa1EyTCt5MTVYVVpNZjZpTHFOTVNtT0ZVRmMwbnNUaVNUSmJFR2FkYVV0U2JFa2E0dHFvTnFvT0swUEtrQ0tvSURVQnJWK0hpcUVVNzdJRTdBUm1KMXpCc0RCTWhDS2ttSXdrL1ZsUkx1dTBkRW02TEhFZHFmQjFDT2dGOUsvNU1TSVNDWWtqb1FTUjlpVmRDVmZjSFhkSFhSSG42TllmakxEN2JCYWh3V20yMnNSVzVJTHEzTnFBenE5SFpiUW02OEdhbUNuVytqUThIK200TTFoUHdYT2dCMDVtVXhycVNiNGlMb3UwQmJGZ1c2dS9SWFRMbmZxbTVaS3JYNWc3OTRXcmtXc3J0OHRxN0RJWGdxY3Q1YzA5RVZsY2NlMjFncmZuUHZjY3AyWEgvWWFIUmIwOS9tQkJVZ2ptdzluWTh3c0ZiNzk5elhQeGJDUWZMTlFFQy83ZVB1SERodnRiZG9oZmZISE9PeHk2aGI2UW4wcU9hcnFZTldLT21FTkdVbytSZXA5V0xWUzdFYVFWMi9YSUhLTERhTlVqL2FkSFhSSnBkYVBLRmhsSDlJZzFaazlnOW9RN2xSRm1mQ2t5SVNZVHlCNmdJeFpNSUJXY1NQcFNJaSt2YXVUa2IzUEl4dWFQVmRFVGlrc1llUFE2RXo2bHprV0diU3F5WlZkU2UzOVdDUFVmQjFEeHdIY2hWTmdSK0hreDJ1dy9xV0xod1NqdFBuZ01WY2ZhVXp5SlRRbmdsM3hvb2swZmZVUlBSdWI2WEhqR3RBODVJenRvNDQrdlZ0SDFvOC9CTjlsN0R2WFkyQnZneGRRNy9HbFQ0Ym4wR2ZSaytveVBMb0FtYUVKM1ZDQWRob3dRTlIveGVnRXlRdFI4QnVMVGx5THJkQVk4RGM1QTBBOEJCamF5cVp2NDlFSTRnejZIbmtGZlJaOEdyenFQdTl5ejBydEc3RjNqYmZDMm9xTHc2bnh5QWRLV3ZwdzM2VVhJcE1iYjZ4M3lic0s4bXp4YmR5RGJBYTlEcmhkREdnM3BhVitVcUZjajZ1ZlFaMEl4VW40ZlVHZnc4Uy9oUW5qYTJJb1l0WWpxY3BVcXZaYm51OHUzeXRlTU5mdThCbzhJMWVYeHh2cDlFbCsvYjdQdmZneGV4enpMTGVHaE9YRHdYOWx2V1FXcmtYK3dHYzVnd1QvQTZlOHlrYVVkU00xZmVKMW16VkxKMGpXSzJ4Y0tGK1p1MzdsR3ZHYm4wNXEzUkR2cElUaWQydnp1eUdZbTZ3QUo2MmFvZ0JIV3F6RENoaXVoRWswZEg0bXFKMk9oS0RwQ0NHeGlDRyttMHNLVU8ybFBpTzBKYTh3VU5VVU5JVDNTcUhxZFR5dlNhTjEyaEJIdEJxc0pIVmFEWFkvWjlXNmRWcWp4YVVtZG1OU0ZET2dCVTl5YXRHUDJaTXFkRm5sS1NVNHA1ZGdjcC85MDZnczlnUmJBNnJ5eStnM3FuQkUrblBveXFuWTV2T0Q3MVNKVTlPL2RNeHFJdDNOZ3Zlc0hsU3c2NHU2NWo2eWFoY3pXVkhvQ3RRQld3L05VWTd1NEYxN3dNN1BIampCMzdJZTlPK0xrdE5lUE5EbnRvTTQ1dEdwNEJSb1BvUy9lTWNHVHEzOEh4OVBqaStlTW5Bbkh3NGx3UEo2Rko1bjQ2UVFSalVsaU1TS0JoTnFSTU1iRU1hT2UwSWcwZW9mUktERWFIWG9rdW9RK1poU2JZZ2xIV2dSajQzL3lJL21mOEFqKyt1aERWVVcrRmJMbktPSFdydzdtcVE1OFAwOTFONEt2UXNqQzEzNEIxOEJIZjVDdWVncjRGOU5WLzZPNXFtalNIM21XNnIrWW9VcWROLzZuVjRPTHdHaE5pSkUvcFRJOCs4WEk1SitSRXNzdzVIelBUOCtrdlFJdytuT2lBWG5INXlOWGVUMjhnb0R6OEJlcDZ1SjFmSG9lRjkvTE9HZzg3NjNvanl1NU1xUGN3T3pRVnV1Wm1MTlJiVkZnRm9XenJVbllUTFJHcE9LSU5LbklhWEthSHYyZ0diTU1ibkJ1RmEwZkNvUUdKQVBCbmxnK2xVOWxzc251WkhlMGx4eWdrWjlqYnRETE5RYk1vSkhhRzBRSW5ocTlBYlBFSExBU0R0SkJPb1B1SU9ZT3RnZEpZZFFYSWNKaUlod094eVB4U0RySzdGTHZUUTVsdkg1QjFjaTRZZ05zWkxuaC9Xem9MamJ3Ny84RGJZTW4zMHh6T04vN3l2VDFmRDV0cFUrK3J4WjYvb0tVMjh2RmV1aGx5YWdKYkZueEFmNmJjeUcyRDJLVDMzeWJ2Z05laEw2K3JxaUUwNUhkblY3ZEFmazBuOUlpeFBYVjF5ZnpqUzZMelNhMjJjd3VvOGhzOWhFV2lZVXdrNmFnS1dna0RRaktHYlErdFFnUHlKVXVHL0tuYlZxekFSMW1yVTJOMmRSdXBWd0krZHlZUHh3TWlvUEJpRDhtaWtUY2pvZ0VYeFJ4Uk94TVFrdk1Ia2NJTXA1MFowVDQ4bnpXSDBRK2REQVZpYU1qa2d4bXNHREdqK0E4SHVoZ0xCNnJPQVh5V1hMNE9WdGUzSWdhQ1QrSGZJUmcvbHBVLzVXMWdqcUZ2ZUxyOGZ5QVBLaU1xcVBxbURabFNCa3k1cHdOcytYeXJvSW9uL01IczVKc01CTkp4VlB4ZUpKeDBFUFpRQjZqeDNIZFJwdkphTWJNUnAxRExWTHBBcVZYSzlpaXJoakdnTlJza1lEbnNCendiUFlMeFNBL215TGpjVWs4VHFZUXZyT25ESEZ4M0tBaGxTS2x4bTR3U0F3R1Iwa0RhK0lHc1NHZXNtZExRWEU2VUNUaE9kVnVPSW1lUkNHOEE4L0JzNzgvREMzdGoyaHBTN1RTaUphSEIvT2VmOW9DTy9NVWVmQXAvTVVTWHZoVlVmUVpCUHRZaXM4aCtJUU54eGRGL0d6R0gweEwwc0ZrSkJhUE1Rd3Y1U3RsRUZsWHhwWVcyOUxtcERGdWpPc2lHdVI3YUZSK1ZJZktaZE5JTkRaZGFad3RPcHNHczJsY2FsU2hYMTNLVmdycjRvYTRJV2xPSTc2bk15N1VmKzVubFFaVElJTGtQT0tNeG9XSkFISUV4SkZJTkJBWEpXSk9jMFFTTVFlTWV1UWhtY3htTWZJcG5IcFIxY2hsZE0vNzkwRUpZcGxyNm9mSUNKODNmaXIzTGxyQytZb2I2aURiQXk0czRQSTU3RUpIdTlQbEZEdGR0bmF6YUJxM2ZnWUhuc0JOSnJ4K3hCNC84c3NRZGtlK1d4d2o0NzVVRndKZ3lLRkJUcUVqWm90WVFwYVFpVFFHc0lEUjREVXd2Z2g5eCtqY29WcllWR1B4SmY1TmtFT2ZmdW5xMThwejZPd25oMi9nVkoxTGU3NkNzNVRWTDhCeDlEaDRBSDhSN3B2RnQycE5CaDNTOURxdFV5dVNhNGtvNm1yVUVVOElFNzRvR1JhVDRWQXd3aXdLQm1JK3pCZUxlYU1pbXZVY3gycHkyZEZvMlkwV0l6ck1lcXNhczZxZGFNYTBCZVFobGJpMEhRQkpjSmM1ajFCZnZ1QkNlbkx2OEZBb05TUVpTaFY2TWhzWTBVU1RlbTE1VXNQTGltdjVFTTNsaTk2bXNjazB0dStpdVp3cStORW81dis2c296NXY2NHNMWlMrMlFtbkxZRm5kNDh1MGxkVGkrQXNmQ2YxbHg4czAvTndOWngyNEFJZVBYeGdFUWZmQ2EvaGJvVVZISFJSU2xkUUpKekdIU0gyOCttTHVRL0FDWUVFa1NUU05VU2FTQVlTcUVSOTRVQkM4QUpDeDIvRHV2MlEreHJrZklTTWNSZDhDMzhkaXFoTCtmdTRpZHM1ZitiU3g4TDNPRk80OURIMGU1ejkzR2VnZysveFdMVmVpVmNiVUpKU0RQK1lsSEZ1NVpMZFpDR1E5YVZxVWo1dnlDT2laNCtjellkdjdhZmY0djU0UVJpS2VOQUJUK1RBV2g3dG9FL2lRTi9CQmVMOU9qaVBGaXVwM1hBdWFzeGdhUVBCeGZpUzRwTGlpWHo2dUEvVzNJV2M3RkFyVVVPMHR2aWFENy9jZGxkd1dXbGxJN2UycjJITlhRSjhHQjQzZmROOWVYUEIzdU9vY2ZUMHV2c092MXA2bjIySGZxdFl2MVc1c1hYSTd4V01MS0kvNE92NzdjT2JEcjhVbDgyME81TVNOSVdSdXViSG1vbUd1c012aEdxMVhyOU80dVZXVVp4T09JdWVBYWQ4dXhQRHI2cmVEQzlENGpBSGx4YkZjT29QTjJSNGVIaXpUNm4yYUVVcnVYZmViZFV1bHl6WHJwRTFORFkwU3Rkb2xtT2E1ZGE3Ymk5bDZDd1hwNWNYMWd3MURqVnVrdTNRWXRvZHUyd1BwRktkU1ZFeTJlbE5TSkJnVE9IaU8wYUNlYjY1dGQ2eHFyUzlCWUdQa0RxbVQrcVRwaTViSHJQbFhUMTl3c2VUdTRiV2k5Y1A3VWc5S3RvMjdEQVhKSXlTcDk5SEF2UG9wM0R5UGxaNFB6eDlQenVNM0ZHcFh4NVNpa1BLcUNhaFQralRwcXdWczJaenJtNVJkODRmUWtvOWhDeCtJcG1JcGtOWkxKVDE1eEVRY09hdFdiRTFhMHJyRXJxRUpxb01ZU0dsd2k4VHlSUXVxMUtpdEdwTWVuU1lOS052ZFpGTGhWN3UvdkY1TWgxRDJqU1dJaEY4U05rTkNIOGFTSTFjcUxCcmpFaWJHclYycEFHMVpCeVpoN2c5blJOT28xWDhzK0ZyKzMvUktYWElqUjVINThGLzJUeUFOUVo0K2tRbHZBK09nM3drVUdoZ3FSTVJUTlh2S1c5ZG9MYkNpM2lwUktjbkp2SEV5RTZQeU5QaHRyZTczRTYzbzhidGNOdVpPRGhUbXE4WDBNZERMbTh3Zi9CdEIzSzd5cUFWYXcxeWE2TklaL0FSQ0Q0VHBwQTVTdGN1RitBUDVGY08xMitYWXJMdDl4c2ZGVzNaUURCYitxSTl5VncyaDdCc3BCZUw5Qkw5ZzhJK1I0KzVXMnp1MW1mVkdYVkdrWkJHc0lpME5kQWljbkU3UFA2UWovQUhBK0VhNXNVTFJHUzBmQW9YQ2FvK3BCWi91V3NmQzFidWgyZnZneGZ2US9QN0MvNmZhYzErcVBuelB2cHhMdlhOK052bW9XbXBkNXBxVEtndm82dXVSTlFwY1VhdENWUDZ0amNFRjlCNzluM01MWFJrT3RCYzdlZ2tTMnV0ZnFlRmxKQ1drQ0dpTGF3V2JPTVdOb2VUNFdnd1VoTUorb25TSFoxMlE0ZWt3OUNobGdxbjdJTjdlRldmTVJ2VmpvZVRrVXM0bGZWUmVldmNSMHlxZS9kTjlPVEg2WUYvYVFNZFBQNHJPSGtpb3YwenQ5SHRhZjhJTHYrc0doNzNGVlRBSFdkQ052NHgvZ1djWEx5ZVQvK0tGajIvcUNzZFJlZ21FS3dKQm54K3BvUDR4eDBkdG5hOXVGM2ZvVlVMNmF1KzRubW9HZzU5eVlFYng3cWVtMFlnM3hOQTdvVTRRc1NDaVZBaUhBdEhJb2tZQXNScExKb21zdDNDakN0bFQ0cnRTVXZjR0RWRzlhSFNxeHpVUHFUNjFDNmJWcUsxNlMxR2s5RmtObGoxVnIxRDc5Wi9JaFY0QXQ2QWwvQVNhTmdKNW1VSGhCL3pFMEZ2V0JRSnVlMUJDUlBYTnd1MURyM1JKRGFhOUFhTm5xNDZYWEFWM1BIUk1sNWpXNGRiSlhHckxCMGRvcUNQVStXeHdRbHcrbmV2ZjdtUXVvZy85dVV2VStHa0QrSDVwVlRna2ZsOGFqR2NNTEtZVzdXa2k5bjlXZ3N2aEJlVXRzdmRCZWNqUFVqdDVjTUtwUGVZL1NTc0wzamJOaEhSOVpMMTBmNVVlYWRQUHhicko0WTJDRGZZaDhic1JXbE8xVVd4YU4wYTRoNEd2RStpWCtIREM3ODhPSDlVTXFITXB0THB4RHFkM05iSVFNZjdPK0Q1dFgrb2hpZC9CZi95SjN6VFoxU0dQem8yMkxkajg0T1JvVTY1bE1lTTRnczNjU2dqdkkwLzBzSHNJU2dQMHM2UkhmeDdvR0V1bDE1S2V6aFh3TjljKzZkbmVYanJOaTU5NVIvNFpzUWxtd1RmMUdGemxwYkRPWGhyQjBIR0V1SmREd2NDZmxSYkRiN0o3L042bVVvN096cWRuVGFtMk1lZDFYRXI0dXh1T1BVTmVPb2VPTFdhU2F5bW55bkYxVCtsMm45NmpucmJ4ZDltWWRQNkVld25QSTkvWEk2NmpweC9CZHdPaCtCd2FTbDdUekhKcDRlaEFBN3phTUhJWTN4Nk8vcThIU0hjRWVxWmt0ZVMzRi95V2k2bW52bVh2UmJ6ajcyV3lML0ZhL2tmRlVJSVNsSUlKMzMweGlzdi9iRWFUb1JYVGRrUFgvNFR2Z3M2S1pKUEJyMitrQ1RrQ3dhQ0pJWnJnaVNCMURNV0NQc2lNZUd3c1ZlYUUrZWs2eUxMUkt2cUxjcFdTYXRTMjJKZjk0Rk1FTWdFWTJFMC84TXhYMElVQ1pmbnNzMHF0TGlzTnJ2WVhrcURYbmY1Qm00aTZyS0hKUGl1a0QxZ01Rck5McXNWZldzMXV3d2lsZDRmdEVnc1FYdlVuWmdxRmZoMGhENXNDQnVZTjRiRkxVbGJDdm4vcVRUeS83TmRQZ0lOSzVFTU1aczB3akV5Z1pFSmZ5b3RqTG1qenJEWUdiWUhtYlJwYThDQ2RJdkY0cldJdkFFT05SNys1a2ltaitaNzArZkJnOVBuL2g5T253Y1BPMzBRYkRvRzN2N3ljMis5QmJtc0lZakRZLzc0eGgrK2hNZXhxWW5GdS9rL2ZZZjRUOTlTNmZOeXZDTVVmMTBERVcyV05FZWxLV1ZPbWRQMm1BWXcwNEJqZUtOd0U3RStPaWlPRGlaN2tLM09GVkw5U0lUNmg0Z05vZzFERHRPQVpNQlUwR1lWV1VXcUxkcUlSUnVKdWpYQ3RZNTZVNVBZMUtSdFV5cVVpalp0a3drek5UVTQxcUVKUUZkUnRYeDY3eDloWlIvdlNicVNzNDk3S2NRem9YZzBuS3dKSndOb3BxODM5Y3E3eEYzeSt2QUtVZDJGL0YzY2NOQmxKeVRNaXFkTmFIUGJIVWdFSERhM1JYUzM1N3RYZXBWZjZIRHc1Vm4vdTYyd0J4NVBMV0hCS3VvdU5yV2Flb1YveEsvUlJBVkpqQVllOStZbjhMeFBYb09WckQ1WS9kcm44QWw0TEp1YVVMenJGNU1YbXN2LzZhUC8weVhNeTMyQlJvNmFVV2xzL3M1RmNxVHp3bTRpRTR1Sll5V1hLaFpwZHlJZDVBemFTZXNuQllHeFg1VnZSVTF0YlF6VmllVElMMU5KVkQvd3l4Ukl6ZmtWMy9QOXV0RG9kR1ZkZVZFNjVRMGdYUmhJa1BGUVBCUkZHaU1jQzhhSmhQOFF5VENGNHU5TEFSMGJmZkw5dFJ3WU9sRFAvMDlreC95Z1d2aTM0bFA4NzRLczlHTDZvcmZtY3VCREIrcit3NVZYbzhwSGZvLzhuU3A0RHNLTXpVWHluMFlhZnhnei9KbVJ4aytSZTNiL2dlQXZ3VnhxYWZGUlBoUDV2b25tUU0rWkhGajlueHJVTGpRSElFQTEzNmlDeXo2cGhpcytoK0JQdVBGZ2hsVTJsa3JIY2pXeEhOSGQrek5BU0NzcGpTbkVNVVZLa3pVeXJSYU10aG9PZVRpMHBCam5IdzV2NExzUGgxRG1IdUQ4cXp6KzdiZXJBY1Y3OEMrcHhxL3hJMXNKT09RNmdJdFpCeGgvaUhXQVE2d0NISFlOQUJucmE3N0J4NDR3L3VsUEhHUDh5OFAzSEJtYTkrOTcrMFVsOVJpY3pScUVWMEhsaDJ6cVVXam0veHR6dFppY29aK2VZWFpYY0dueUhuSHludHphdnNhK3h1RzJ6YXJOcW0ybWV4M0w2UEdDZnhnT3I1dkJnU2YrczNENElZTGh5WHVmSTU3bzJyMnBadmVtSFR2elQzZ0RnaC9uZEZISmNvaDhWS05LUjU0L2JJYlhqL1BCUGkwKy9TTzFtQjU1N29nb01JRVFtdjJkYmx0OUJLc29oOVp0K0tjL1Zic2gzVVlia1B0OHFHYnlVRnNPMVZmcTF1SmpZN1VVZmNFLzROU1l5RjQvczNwWDRpMnplamZqd0V2OGJ5TjlCMjlhL2VOMXZEOThzL0w3TjFZdmhwTTBjRjRMWXRhTCtSL3dDdi80ZTl6Uy9yalhxWjl0Q1JDdmxod0lsZHJDdzEvOGZydGh3L2RXTGVIZ21ONTlteGYxU0ZuOWZKc2UxVXo1dno2eHJJSnc1ZitrRWpxSHZvVkowL29wU1ZwNDg1R2thZUhLUXlScWNmRU54WnQ1QjNPMUJ1QkM2bmg0S1pzS2ZYM3BHQUVaR1I2Ui9qZm1idjJvMzNCeGNTZi9yZThMUFgzZ0FQdS91ZlBWcVBQU1VZMm5oNWZpTDhObzBmOUxBYm9QMEVRZXNZL00rRVg0aTcrTU9JeC9jSkRIK092L0F5SkczVjVjVzFaUFNHbHo2RXYrdTZkV3ZxeHB5OTNIMzZMQzMybmEvNXlleFQ4dGIvcDQ2eC9wMnBHdlJyWWhRLzJMY3g5LzY5L0NmL3pUdzQ0QS9wYTNsSno0ZFJNclNUM1BwdVpTVXI1MVVKZVhKN0NFWEVaS1JWS1YwNHhtcE5sdU1nZ1JSZzNheEVGYnhCYTN4KzFKZThhUmNYVFpzN1llYTQrNVlDd1k4L291YlpjMnFZcktzYWljYUdzU050aWJqYTFpWTZ0YUxsUEpFSHF0TTJPV3VqWE9lMFJYWEovZXZGaXllUE9haCtUUHdaazdCQUVqWVF5aUVqWkhMVkZMM0paQUZqQ1JRdU15a0NPaVNGRkV5VVJLR0hkR0xTR3hKV1FNNmxCUmt3cFVaRUZwU0JsVWhwUmhaVmdkMHlhMVNXYXZEV2JPT1hvR2hiMUVUNndnamhYU3VYd21uK2xMREVXd3lOQUdZck5vZU5CcEdaQU1XSHFOeUR4cXUxUXBXVW9XYlF1MkJud0NPZ0h2L3Q3K2hRdm5jZzZUZjZqLyt2SXhwcStKUHZrZlp5UHk4SjFNUWlKM2JFTGlUOGhHUEdRYjRPWEYrMzVvaHVCWmRNK2hXNEx2UEd4bTVNOXR5UHhSZTNBZGFzNFdmQmlhaXNUUGhjRmJqc1FtNEMvOUFOeUZyL21KS2FCSDFsRjh5K0Y1VGwxYXJCdWpsK0VILytHQi8xNCtaTlAzOExpVEh2L3pzeU5INlZiRFNmQnNMYnlvaE14aDZ5SGRHUHpqLzRSTlI2TzM0ZXFmMDN6VXp0SDB6dUp2NEJYbDNFNXFLNS9lVGI5aUt4MDFOcHZkN2tDSDArbHlPUndDVHdmSEUrbjBaQ1dlYktGelFBUUpldHJJQjNBYUZ6NEwzeUpJa2d5U05VR1NaSDZhaEFnRS9INkNFSFI0ekIwY3U3WFRiRFlaeDUxdU5IV2FSWFFZUFVHOTVlYlFXL0kvVWhCSDQzeEg0M3hINDN4SDQzeEg0M3hINDN4SDQzeEg0M3ovZlhFKzh2dHh2c0gvSzNHKzJ3OFI1NlAvKytOOHJhTWF6MWlLODRWLzRUaWY5ZjlXbk8vVzc4ZjU1djFmaS9NRi8vZkUrYjQ4R3VmN3Z4TG5DeHlOOHgyTjgvMnZqZk0xZncrUE8vNGRjYjZ6NGRrYWVGRnJLYzdYOXN2RytkYi90OFQ1bmpHK3NWZ0ozM3loR3A3d0ZaUi9jc2s3bjd4NzJZZTRFbDVRdkxhY0RzSEJkLzBvSStKSThpRWdlOFRDRDNnSUgvUHpqQVRCTkRJUTlJY3hmOWdiaVFvVDduakpkN1pHVENGVHlFRHFrTytzSzJVOEs5VWF0MU1uMFRrTmRwUFZaTFdhSFViTVlYUWI5RUtURitseHNkOFNzREkvL0VVNFNDZnBKTndFODdQSVZyZlZ4YnlaQ3JIUFpyYzVyRTR6NWpTM200eENyVjlQR3NUNEx0SVFOakZ2UFV2YTBrN01rZTV5WjcvZEZoMUlCa3Zib3FNbHY5NlAxSFdzUGVxTWlKMFJSOGdlWkxaR1d3T28rSzArcjBkQUgvcytQK3dQaGtneEdZcjRZcUpZeEcwUFNVS2xKQXhjT1haenR0SHNJNjBTSytrTVJZUmVIOGRHeitkSEErRndTQndLeC94SlVTTG1zaUdMYmd1WWpVS2owMnl4aXEwV28wc24waHY5UWJQRUhIUkdZa0ptNy9tSnBmRjU5S09GTCt4NTVhVzkxZW5pNElFWjhNcXArK0d0MzQ3VlVnRFoxSlA4bjdpZi9CL3ZKc2Z3SlZPblNrYzNsTmY4VzNhVWUzaGo5OG1YTjhuanFZWC9lSis4TnlENGZPU1AvdzZwV25MaXZ5cFdERThPSlZycGhiK0ViRFdhLzgzQ2hkOE5rSHg5WWR4enB4SSs5c2Rybi8vMDlVMGZWOE9HZlhEaEo1ZTgrOGs3U0xCdWV4Z2VUOTNIOTNnRC9yQVlqMDcwaC8xUlh3eURreittRmR6VjlMcjNaWnhNS0JuT2k1SXhwelVzWWQ3TFdncXZqbGJuUk5XWi9DR2J4Qlp5aE4yUjg5c0VYbU9nQkpVaXBwZ2xaa21NU2xPR1lWYkdSeUpta1lrdzh6TzI0WGd3aFFWVC9uUkd1TVU0Mk5ZdDdtNWJHNzFiWkxTTXZsUFI2WEs3UFY0QkpZVm5mVDg5d2ZmekJPTzJoLzhUK21ianhIK1RVRndKVCtDUEZZU3hVb0RhUGxZUXhzb09FZ282VkRsMnZJOUVQcEJBK0kxdjNLR0ViNzBBMTM1YzNWbThrcjd2V3pXakJvN0tzUzlhc1h2NFV5Q0xsMDEzZXVJU1QzdzBUNUxUNFhSWXpXS3IyYXcxeXVrVGFaWGdTeTVjQ04vbTRETGdlWUlEbi94NVk3VE4vSzlQM2pad3FIR1NnVjlpOG03N3QwOWVOVE41dnpURE9TK1hYcVQ0R3B4VnZiNm9QWEFWbkl2dnBMNkVKcjVlcWxDMTZERjlTNk85VHRUUVJNU1FTbzNKMDVvOEJ1ZENRTi9EN2ZCMUJqcEpWQUsrY1dmQmxlamFSVnljeXVUejZkNDRGdS90SjRkRUEzMU16bXpCWElxOFg3TDljSkgzT3RHcTFRN3pXc2xhYzcydVNkbWtiSk1xbWhYTjJuclRXdXhLR3V6V2MvVzMwK0QvOGZBdm8ydFQ5YmxtRE4rV2ErNlJEaWdIbE1PNmpjaXYycmpac1VXRWY3bHBReURFL0ladStXY2RzcU0vNnhBZnhIemNxcEdiRC9NRDhYU1JhdnlZeWVaTXdoMzBEcmliWmtNMkhzQ2ZoRE9wM3g1Wk5pYWUvUVh5TVJmQUhSOHY0K0dCSDJaazB2dXAxUis5c1dFZFk5cHo4REg2ZXNhMDR6c2hyOWo2OHd3NkVyV3hDbUxMZnk1RkRIL3BrQ2I5Y1BZY2YvazdpMTQxY2lYVlJOV3dJUDRWRzlZVy8zSzR0TnREZ2N5cUE5Y3oveDFjWlhzQ1RoOWR6THppYXo3LzhHK2JvYXU0Mzc2L0puN0U3Ni94OGd6Zi9QLzJ2Z1RNcWVyc1A4T1k1TnJTcVozcnhabEVFcW9DK2xsMXdGSTN0TGpVN1hPaDFvb29NaWc0c2d5ekpKbnMrNTdNemI3ZjdNbGtOb1pkbWNFRnNXb1gvMUQ1YWx1cG9xS2lwVzd3Vk50end3MSsvM09UR1pqQUlNTUlDUDBtNTRFa2szdnVlYzk3emozdjlqdm54VTV4SlBaOWdKWG9YM1dnR3FQMlVSall4OElQZWs1TnF4VCtML0F6dXVYTEtzZ3BZR0psL3VwWll6aGpaYyt4S0l2VzYrd2FzOXBRcXphb2RmQzVVZXRVcFJDdFJIenNzMWZLVGw3QjJRVXhlY25ZZWxlV2M0WjBISmc5ek53RVYxTFBuYVVwYUY3UkhHaXM2TXZmWFVrK1Ewb3dSYkl0MmhKQ1FpM05ubVp1MCtGY3hIS0ZYQzNXQ3hHOWtENFFiS1c3ZENCWVdFdzcycExxakI3Ulp6ck1uZHpWdlQ2aW05OU5wSk5FRnR4VVg2TnNsRGEzQ2RvRWdyWm1XYk9zVWJWTWgraVhMVFUzUUpiNFk1QWw4U1VkdFB1dmRiMTBBSkVPNkdpL29QLzV4QUF2TVpCYlR6c00xM2YweDVGNC83UCtGN2hyK3N4Nk9JNzZibldub2xQUklVbUwwcUpFSzlIc2hMTHhEVER2S01OeitIQ0JDZURTU3BLYkg2MHBYbllHRlBnYnBUeHIwd3NkV0ZTOU16K2pZQU52b1Z0SkZNekFPckl1ZjRhZjhTZERzR28wa2d4a2tVRFdEVy9hWSs3VVpYbTZyQ3BKdHlZSmkyQVBSVUszZ0V2eENwTllnRTl1eEY1NFZpL3Y1L2ZMMXd2N0d2c2FjdzJKUlVoaWtmOVIyRmZkbzlKRlBPbWkxb2JsSzVldmZGSlVyMEFVOVFzTTg3blViMWw0Zmk3VXk0WWNBMHcwZFhpSXp1d05wRWRIaXA4K1VJVWRubUpnUG5VRGMycmh0VkVIeFR1TDhmRDlvemlKYklSWk9MWHdid3dsUnhuWTNnNFgvU0xGbVFQbzBLSlA5UlgrZFV4U1A2Q2NnQU11cE9PNkZZTUIzY3FodERhblBLbk5Va096UXNLVEtFUzZsZHhXaXZNMGEzV3ZKd1JYa1ZCSGpONnFHczJGZXBCUWo2ZHZMU2YvSU93blpmOEsvQmpVSGVMc1RqQmJENzZQa3FSM0xBZDZvVitCYWxCSDdTdm5ETlJVSVhQdUIvZXdqTkFVTUtzUXM4cW1WSHpEQVY5ZmxZa1pPK3ZJcEZmWkx3K2x2UktnY3ZEb2dSOWh3L1VGQk4xMFVvNjhBNm1ETzh0VGFwMUFRaTFVY0NwVGFvMHhvUmFDeXVuejNvK1pRd3c4bE84ditmbVo2UFBEWFAyUGZEMTF6SXdZS3hzUVNNN1BCMHFNcUQzWmpLQXppMzBpaFZ3NFh3ekNnMXhZQzM0QnpnRVh3N2tMcHhXNTUrVmhQVzRyOXBoZjNtTUVmZlpiZGhvVm5PclI5OFRjWloybUdpa05aclRwTFZxZVJXdldtbUF4Nmd4ME1Sck15RzlZUkRBU0RrY1FWQnlPQkNPd0d1RWwzRkhFSFhVU0VVN1dtRkFSUEVJbDk4SW5aUWc5UTUrRjdsRUd0YndnWEJyQzlxQzlacVRaUmFzTVVEWmRnb3BKZnQ1WmpzclpNbHJONGFHRHZ6NVZreEIyK0x0NEhPbForSjk2d05WZzNyNDN3R1JxTW5pMGVqQjNIN29ycjgxWFk3ZitnWnA5TDBYUS85OUtUWDZqWUdPaG45RnAvRmpvTGpxVFgvRWJDZis0NncwV1pid1ZReitqaURlS3Y3Rkd6QWQ0N2dnQU8rQnFQV2FPUU5BdkIxZFQ1NG56djZJUDE1OU5lc0VOcUJUWXJGaitmdnFBR25iKyt2eXZUaVJESUlJT25FQ1N3Rkk4ak1iMVhRMTFtTjNnWjBmaTFIYU04b2w0NzZCdkVIRzIreERpN1AxQlpjVkU2eXFsazJHditCbzloRGVqMm1tYk1uKy9wTG9CZk04Q3gyTXYwSTVGMEc5bG9mdUx6UG9CdTJSRndxTFZGSlBrUUNNUzNYdWtHUms5UXNMdkh5N2g3WGhOZVlaRzhNN1JxS2NicU95cFM5cFlTa01GK2ZZYmNERzZqcnlHbklxTmtMSHhoUE0xZ3FWVVB4TTh4cUwrUmQyS3FTek00UXN2Z3U0WWNlMDk0WVVYSFNndHZWYkl4YkxqRDc4b2c2eUNTd3QvTEVzVE9YanRxbUsvL3dIcTBBR3ltcndkRytHZ2RYVG42RTl5SjJ3MVNndnptQWU1MjFsenFKNGp5YWlEWkZUdkFyTVRrUG03Z1FQVWxTNjRIMTVReDZadzZyMmplYmYvNVBCdUdPZnMwR3A2RTh6K0N0cTJ3QXF1S2lQaGN2RFRzVmdaSTJXM2RBN2lHSm5vUU1uWklhQ3FUNHRkVUVwMitRRzBZU3VBSFF4VTVoOHF5aGRxSnB1NkdNeFRwT1ZaV2E1V2xwTm5GV2xGV2gzWEVvcDBqVjNDK2pXN1hkVGVES2xiMGI3MHlZbFRxU3VwMmZuN3dVdzJ1SXhhRUZSR0pERmhiVXdZRTBWaGlVaENpcmlnQmsreFhtYTNaOW83MjN0ZzZWMEY1ZlMxYkdyYTBjSHNEMktEM0lGRC96YTRlQWZrajRoY1R4dXNKNGNkNlBQSFp3ajE3dGNUanE4UGZRdGxhSis4QkR0elNLcFhnZHZKSDRDYml0aU8ybndIMW5jZkhQOUR4eXNQUHFWWGFzdE9SSUtTNVpRZW92WEtxY3FKZVZSQ3pDSDgzUllvb0E2aFcyVUhma2hMcVgxUVNoVTJGamIrSitJT1Iwb0VTcHJ5TzRZdHplUWxCNWQvWjRsQlI2UXZjV0Rpa2I0WjhPYkJodStPeU1RaElxdmZBck83d01XcndDM29WNlFKK0xBU1BjaW82R0doQlVnU0cweUNKSUZmc2dyVHZ3MVZIeFdlTzFJd25XeXBkSXlzcmJlV29iTStvWDUvZHVkd2hRckdzZEs0ampxSDY3WDBRZm52YktkekRiOEpwclZMRG5Ic2lvOGZnRHdMTWs1aHFsc0UvV2pPbUZpVnVxL3ZrWUdHZ1liZmlMZVo2aW4wbTdjM29YL1dqbldIVTJ4em43dmJsd3ZYNXNMcGFBSytJcW1TcHpyWE5jcGt1cEU1b3hvSjF6SG5MRUR5engrRklNMFU1cDk5TXhmZE9ScVdqWDdpcWdiWkZTK3hLMFN2YmZSRC9pNFpIek56MEQrZjBjbVpSOHNjNnNjSEx4bVRkb2IrZnJUNjJheVVHRHdQVURCeEtQOHorVG01RVFNekNoL1NTYUNwaWRNb2RELzFQQlE4eis4SDZEUXdrVjJlTFpva2pvNWlVTnRFUjJXUW5sVmNudjVXckZsTjEzem9ZNVFrYXliUnY3UFJyNGJhSzJ6c1pCODN2UWRLam5VZFNMM0NMSksvZ1NaQ0NHWlRVMm1MSzB5cjNIVGpHd0M5ZVEzK1NwTk1QWHZ3YTFxOG9idFBwWUE3aEh4KzljdEQyT2ZuMFYzZzlnUG5ZeWNPQVRqc3owZWZIOW1qdjRKNitKUUF1YjhCeGwyUjd4eFoxWDlCY0pnVWRPQ1VFZk1ld01wWSsvaUJIdzNwM0EzVXI0OEhLWC8rVyswbG9OcS9CRDhSNXg4ZDVNa2Z3TG4vaEZiZVcvbWYwOEd3MlFXTWRaeUJlTVN6S1B3a0wveGtmSG1tSmRQUzFkYW42Rk9zMHo5dDBXcjFhcU1LTWFvc2NFNkozQksvak9lWGhaVlJkVlNkMEtXTWlER1ZzV2E1c2FpemVESnExRXNFaUVBNEdBcUh3b0dJTC9xemwydG9qNWRTaTJpVlNwT1NLMVc2Z3pvKytvVXVhQTRUbkpBajZBN3czQUdQajRiSitJdkp3WVB1b092VjlNQ2F2aTFJMzVibzlyYzV1R09Rd3oyZjN3dzdCeDc3bE82ZmhqNmMyd0Q1SE5PaS80OUJmaTkvemJjOHBCdUJkeHJkUWQxb24zWXNaM1dESDk5eWFqWTJ4TFRGR1hCa3p2bUpaWHRad0RYVStkOXRDdm9qNkFQL004SStsNCtwM0psQ1pEVWs4dUR5d2QzZzY4Z2ZqbmtiekJnMlVZRDZ1NzRyTnFDZmpUaGE1T3RsTzJUSTNIYzltNFp2b1FFelIxQjRiNks2dnUxR21zRU5PbldIOXBRWE53Y2QvRFk3ZEFncnFDTTVVS1doOTdpUXdnTTNEbjlFRWVvOHJQQVcxQThDckdDb1BSd09CU2RlRlBTM2U3bEJGbTQzbWl3V2s5bG9xaldhakNhb0V4aU44QU8xamRwVlE5V1JlMEFkNVdHdmJMWGJ4WHk3V0ZzOGFON2pjYm5jYm8rbjF1UHhlbjJETC9BaWVMdm1FQlhWa0FycWF6b3lBa1duWTB3WW80MzNuV3FTRVhRSFRUVnpITnM0am0wY3h6YU9ZeHZIc1kzL2g3R05aYkZyOGdGbzI1eWFRUFU0aHZLc3dWRGFpeGhLWW93WXl1OGRHMFA1NERpR2NoeERPWTZoSE1kUWptTW9EOC9DY2F6aE4ySU54ekdCM3dvVHVQWFVZQUxCbVk0SmZLK0lDVVJPQXlidzdtTmpBaGVOaUFsOGJTUk00STV4VE9BNEp2QXN4Z1JlY0N4TVlOMy9LVXlnWkJnbWNQMDRKbkFjRXpnNlRPQmFjSEgydThjRWZ2NmRZUUx2TGNNRTdoN0hCQjdHQkdiRjVCdmcwa09Zd0orRGF6NitDL3ppRE1VRXB1OVpQWDl6dythR1Z5Ui90Q3c2aFpqQStITzk3aTVmUjdpMmcxN3RFckZFT0JYSXdPWE8zZEY1Y2pHQmJ1YzRKbkFjRXppT0NUd2JNSUdOVUF1K0VPcmNPOG94Z2J1SE1JRTdTNWpBY1VUZ09DSndIQkU0amdnOEdZakFDZVdJd0p2UE5FVGc3MFpBQk80L3d4Q0Jva09JUU9acFJRUXVPK01RZ2ErV0l3TFhubEdJd0t0SFVIZHZQR21Jd0JubGlNRENPQ0x3dTBFRWxxTy8vdnZBWTloRjFBTmZ6Z1UvQkhjeHdWV0ZjODlTaEJCMVJ6dVlUdjRYbUY0QmJxVWpDWitDNlJqOGVpR1lYcmlIbWc0dUxQd1hOWVdhVGo0SXByT3JTRHB5UTAwRjAranJYWkpxY0F2VWVyK0VVckFSZkVKdXhvNm9OQTFXbWtaTllaRmZraThkRHVlZ3NaTWEwQ0ZGUXlSZEFtWlFsNFBwSmFLK09CNVI0QStRS0RoeE5sUDZJY0lXbkN6QzBMNGlhV0JES1VKSWJpcGhSMGdISFNMY2FjWEFiRHFjeGlMUGM1VlRNSEw3Nk1BWVdYUEV5SkszbGNlSXJpN3NQT1pBSHprcEFpTUZSeGNXM2p6K0RhcWZBOU1sWUhack1UMUExZGl6bk8wZGd4eDc1R0RGaUFUU0dRREthS1E3Q1VlQ1ByUWxNamJRMURzSEdSaTZZK1RHZG8vRTBhL0w4NmwxajJZd2FMQlZhU2lGQjFBTVhvaVI5N0NvQ3d2Lyt3MVZLZXRYZ0QvWThwcC9iS1lyU3lhQjZkU1VvNnBNWXh0MWd3Z2s2emNoa0laSGMyZTlVbk9DOFdROHhMWGJtYVVROEZRb2lFb3g0Q3RvSytINGo4SVlINFR5eHNqSy9HK1Btc3lYdFozQzlqK0kweWlCQ3JnRWdHZkFUWU53TjVTOXFIMHAzc0xEVzlwVmRvNmRKU00wQVdWWUZxMlZSY1Z4VVJLV2xDaEZUZGczRlBKNmo3WEp2c2JleGJOMzJTTTRCMmNScW9BK3JJbXFhcU9xdUlMT201T0FCVlJQcWFIRTBMUjM1WDgxWWtqeW5nT0xhTEhGUkFjR0paZVFXblE2UTVKSGNPTE9Fam1EdEVob1drNFBYOHFvc0pmbG9CUFRRZHJUUVlYOXdPTVZ3QVkySHdyUHpnWVNObFg5YjJtTTlxYlZTbUt5cUNLaWlLaERPcjhpVWdOVnZIWWwzc3pEbTl1ZldzU2gzaHVLelU2WW5vR2puSkhVWmlSSldWd1JWeEN3UWt4WkE1WFg5b2k5azJmdnRLL0JOem5BajJxT0VaZWxXZkUybUwwTFhMeU5aa1l4S0h2cXUzL0tnN0dsUVI3S3Z6ZzQxdWd1c3YwMFpBVTdmdmJGbjlEWkYwZkZaUVQ5RERLYU9UcEdJK2l1STNpTmZsYWNiRWRuaDN1ZzdORXJyQ3BzL1UrTXlJSkpGdGp4U2VCNk9oY3U3UGljeW53RVhJTzFTTzAySGQrbU14ZjEva1JYcENmUVZ4dm9jNjlaejNsUjk1eTBueWZ0UDJhWG5peDE2VWxwUFNLdDF6MDZqelBQLzJpaW5wZW96ejE1aUcyeS9tY05MM0RKUzFoT2FBc1czZ1VQWWQzdVhDRExDMlREeVJoOHdRNUQ0eUNUZGVXNHVUSmtlbGd5aUV4dktpTFRSVHlkU0NVcGRsZzlpRXh2NWJZS3kzVCtwQzZENkRLMHpvOFhVN0dOR0VXc09MQmsyR2gvV3BnMEhrV0VSalpvQVpQQnA0T0dkdjR4V2l6UFpZM1d1TlpTbnpLblU1TkJEZFVDTGV3V3dBR1RweDk5VjdLelRPc21iMjA1K1cwQU1JSjZUamExbnN5V3FzRTBNQjFhd0hRRzNyMmc1YmlLUFByVnlYUklDZS80bG4xaG9YdEhHcHhGNVZvNGVPa2tqRTY1ajJYR2dZWEQvUVRuVWd0UGo0L2xQOVJiY1ZydGhoTnhqWXdiMi84Wnh2YTRpK3VzZEhHTnUwYkdYU1BqcnBGeDE4aTRhMlRjTlRMdUdobDNqWXk3UnNaZEkrT3VrWEhYeUVpdWthUWFYRWRkSWlaZkxlN1VXZ3VOcVMzZ0ZuUUJvUElMc2ZrTGRkTEYvTVhTWmEzTnk1dVhpNWNvNnhGbHZYSEJmTTU4N3dLaW5rZlVwNVowTGU5YXZycDFveFNSYlJ6UVFRRXc0STl2NUc5TXJNNTE5WFgxcFRZUS9RamFSL1I3bjMyQjg0TGhXV1UvVDluZnRxRzVyN2x2V1c1eEFra3NYZ2pYUzdqOFV0VUZLV2FNbWVLV0pHSkoydElaVHBjejU4bnlQRmwvS2hRUHhZbElBcTQ2aWJRN3gwMG5MWVlZZi9zZG1FL2hrYmtraUV2aWdLSzIyZHBxRXZKTVFyMVlJOVBJbENvcFhQU2xiZVpXYnB2VTVaWHo3YXdxNnE5a0E2Z0UvdzBZRlY3QWhFTXdvUkxjVHpaZ3VhdzdrT2FuQTRrSUVTZmlvWlEvaS9pekxub1htS1ZUMzhIVGQyaFN5cmd5TG8yMFFRcmFoTzVXYm92UXJHdmp0K21rS29WTUlkT0k5UUpFTDZDUEFXcHlsWTRCQ29tanNxZ3NvVXBESXRKUXduQnhjQTRtbHZ2akdyNG1ia3AxY0RvOHNGZThlQ2pxVDNGVFViMHN4QS9KUEcwQ2pzQUV5ZWZKTkFxOW1KN05WZFJINU5vUEs4Q0NUeXJCbmp3YmV3S29ybU5SQ3ltY2VRdjQ1VjJmYkgrYVRkMzJJYWJWMmUwR3Z0MVFFbEZNdThjYkpuaWJ0N3JkTHJmVFZldHlPaHcwZHF2ZDNtNXVOOURGT0hHcS9kZnczb0JzK09pTG5ldjJWb0RtVHl2QmovSlBER2JWUHFOU2FsZFJCOGluOW55K3M4TC9CV0JBTXNOMGF0WUsxcytuU1ZvVUFvMndWaU0wdFRRVzBhRnluazhlVkVVMEVVMVVuNEJOSm9abFRSNUtJVHZVWkpJVHQ4Wk1VWjRwcW85b1E5cVFLaUQzSWw2NXpDbmhtaTEydTRWdnNWdnRkanRzMzBITndSUnFseDhxZm41ekNOcXE3dENocE1qUnNPVVFQNVJEL0xBb3VGV0Y2bnhnYjBVQWJLME1RSEpIbjVFYS95MnpxdkFqOHZHM2dmLzFhdjgvcmdEUFVqMmxSTmM3Z0N4LzdWaXlWRy83OWttcVB4Z3BSL1VydzFKVW04cFRWSHRPV29ycWJTYzdRL1VIRG5ZVnVXL1g1KzlYQkQ0QmpQMlZXOGhtRExCWjcrNVBkVVE3Z3RuYVlOYlQyVnRFS01kNGhwZzJvZ3FwUWdxL0ZDcjZVZ21kZ1ZsaU5jbjRNcE5DcjlhcXRWcVZRWTRZNUJhWmhDTnp5ajBLbmtmaFZ3VTFRVTFFRnpNaXhoaGN5N2hPRjQ2NytXN2NpZU80QzY4eGdKdXhZODJhWTgyeUtsd0tiaVMzU25LUzZxM2dkcUFEYzlBQnNEKy9BSnRmcnhVMzhCdkVqYzNDWmNKbHNpV2Fla1JUYjFxNGtMUFFzekJVend2Vng1ZGtsMldYOVRTdkV5T1NkWnUwY0hIZUZFaXU0NjlMOVhabVYyZFh4emVFK3BGUXY2ZC9nRE5nNnRmMDh6VDlzZzNDMWNMVmpaME5LU1RWVUIrWXozVjZtT2hPNnRwemNpbWppdUNqQTRRcUpQZEwvQkpQbTFPRU9FVzR1RjNXTHJPTFJST25Xa1dtTnIxRUw5SElsU3BFcFJRYm9mb3A5a2JnMUl0b1lvYWtJV2xPMnpLSUxXTlB0c2ZiNDNneU0zR3FJK05PKzVJKyt1U3RDQktKcHJ3NU90azdib2RTOFJrb2QzOUh1NkNhd1F4NlAvcTViTXBJbWY1NWFXOHZRVUJUTDF3YkRucTg4RkhTc0F6dE9ydVdaOWZhMVNwVnUxckRvZTZrcm9kQzBBUXQzaXFjM3VkL0JiaTgrcTlrbkxvSnpFWjNBeVVwd0p4K2w1OU81T1VOK1B3K2Y4QWJndU1iaWppajNLNzA0WnhpamRJVkRTdDRqeTU2OVBIQnNnaWhKcE5CTUlQNlB2dWh4KzIyUnI2dFVWRmNjUU5lcjl2dkNmcHFnNzZ3UHhJb2xSUUJTelFWVGNSalNhakVwd01kU0tERDNkM0hXV1hxMFhUeE5GM3liRnV5TGRrU2JRd2hvY2FsbmllNTZJNmxLOHk2Sm42VHJsWFZKbStUUzhVS29VS29hVFUwTzJ3MVZiZ0NYQTVtZ2d2QVJlQ2k2aitUejFEM2c1OVRQd1czb2Z1QkRuWXAyQnRKeHlBVFl6UVRPMU5HTmV5RzJpY1hjNlJHdVFycVJ5cVJzWkU3bDdyZ3Q2emVyRkVGSDFLVlh5YmlvSHZWVm8xWnh6UHI2QjJlZXFQT3JMRWdGbzNHcHVhdWFQVkZKWHhKVkFXMWR1b25qOWQ0bTBPdGNXRmNtQkozeUR2a1hhcGVQYUxycFIxYUc5YTRnNnY0cXdKZFpWcDR6eXBPMXBJeUpIaUdoRGFxQ3F2Q2lrQXhqN2tNcmtrNE80eEhYRkZ2MUJ2eDA0SWdTUGpqQ0xySEgzY2xNNXh1VTZlMmc2ZnRrS2ZiNG0zeDFraGpFQWsyUHVWZXpGMjJ3cXlIek5HM3FrWFFlTjBya2t0Sy9Ha3hyUFI0SUgrZ3dnWTFUM0tPcElLOERNeXN6RmVERG13T09ZZmlzUXFzd29OUXdRRC9oUDltZ3VxL3NxbHRZQm9ta3JZcmxYcnJ4SXR3OXZyTkwyK25keno0QXJVK09DbThmcThmcnE0ZXI3OEdaOWtWVExzV1Y3VXJZSkZKSjA2VnRrdGxIT3N5WmhXdWhrT3hBR0R2Z1Jsd2VtV3BHOEdONkg2bzhCTGtYQXlINjNTSTV3eTVNOTdWamtBTjZBRXpDaGV4N2luOEVFeGQ3SEE3M1M1UExaMmxuVjdLL2E2Z0UzRUd3dzZDMjVuUnl4TDhoQ3dnWE1scDBndWxVcDVVS3RRMWNSVXFoeHNxRG02ZGg4NTJidlNaL1dhL3hXZjFVVmMrVWVNUkJkc0lNU0ZPU0RNS0JOMmZVZVRVUFRwRTM5Tm5Yc05kdDhaRGoweW9LNVpKWjlMeFhMZ0hDZmQ0VjYzaDlCbDcxVjA4ZFpjMEswd0trODNSRlpESEs1WjVHcmhTaGMwS0ZXdXJ6bUswMERrT2NEbTREUGF4RnFnbDFYOEJOMUkza2dQVTFlQnFkQzhab24wL2Q3RW9MbldIVkNBWEtrVzFTcEZhcElWRkx6UUpFWlBRMnRyTVdlSmRHbW5rUlJxVHJSM2lEbkczb2srSGFQdldtTlp4TjZ6MUJLSGxGdWlPZHFRNlVvbU9TRGNTNlM1U1p1N1Y5dkMwUGNxY0pDUEpDT0pOWVNUY3ROd0xLVlBiekZDck5rTzl3R3AzMTJTcFAyRXJXdjF4TVY4YzEyVjdPTjJCYkRMQlN5UTcvWDNjVlRtOUxBV3RpbFNKa1RxaEJESlMwcUpiVHA5aGh5ZkY1TlAwRHJZSlpGOGxtRkJ5Sm12WS9rQjdNQmdNVEx3b1FHdllBYWhoNjVSR25VR3RVOVRxRkZxWlJsSXNZbXBaNFhzMTRFNFcrSmo4QXYrQ1NmT0hRN2FDSDFTL0RXWlJzOGcxQlRlWUN1YUNIME85ZnhhNmd4U1E1MkorUjhBZDhzRVNnQ0l4N0NkSzIyQ1NhVTZucVdQUVNCWEh4REZCdUNtQW9Oc0NUU3ZjeStpcFhsd0hCR3F4WEZ3OGhRL1JpRXlDRms2YlMxTGNCT05YQk5Xd2FHazNVdERzdDBHUmpYNmdzQ2lNQ2oyQzdsRG9sUnExVXEzVXlnMFN4Q0N4dEFrNUs3M040VlpldURVaHlrcXowaTVsY1NUV21qWVVSNktQMzBjL3ZZbHNJcEVPNTVCd3p0dlZBNS9lZE9ucGpha0pOYUVNS1FLd2VCVXVpN01HM1VZSndWUXM3WS9IQ0I0UnkzaTd1SjNwd1VWRkt1S0k5WEk1WEhIa0ltTXp0MFhralVDQkdkRkRDdzVucWFqdFdFY2dsWXp4WXNtY3I0L2Jtek1va3Z5a0lpQnU1UWgwWW9tY0o1ZTBHcFp6MFE4YUIxY2ZYU3JIS1Q3YUNzQ0ZFL0d5ZGtuMXMrQWFlaE1odWd0VVR3Sy9Zb0hyd0lPYnR2UThGOXRjRzl2czMvUTBaNE54amJLWHAreVY1QVFwUWFvcHVoeE83dVZMNGVSR1AxdlNZTkl1NHkvVE5pa0VZb0ZZS2xDdFJGUXJqY3NiT012ZGpZRW1YcUNKYUlWTGNsdUhyRWVOcUh2V0dEZHlnd0hjQ1dXMTArZHllM0JyVFJ2NEMxYWFYa2RQcm1OTlIzclNLY0VOOUFFL0wwRHhyYWZQZnZnOHYraDBTZThwaGNjeFM4d2FzOGNRZTh4T2hEbFE5RG95dkJGRWJ5aG9zOEsrV24wV3J4bTMxYngwRmVaVU9wUzRFc0dWdUVyTmdWTGVLdUtOSU9YRk1yZGZ5WGZRQmhaNEZVd0FkNEhLb29IRkJSWFF3TXJQdzA3Y1hEcHhrK3lYRkk2WndsWWlYbVphK2IxMnE1dVBzemJVWTI2dFF5VXZzNjlNSnR4aDRzUGhvZjVxQkJWWGk4RW1VRms5U0RncWhhWWhieVRLMFlGajBxNGZvdDEvT21rbm56cWE1L216Z09jR01HR21HR3dHak9wQmE1em11UUU3Y2ZiUk8waEgzMW45b0QxZU9TWjd2SEJiVWx3QjBIOVhncXZKQ3pEcU1vcjd4N25KZUNqbzk3dDl0VDVvYnRPV05yVEdiVXFlVFdtWFN6blVMLzdOeHNrYWFHM25iWDhIaXo2dmpvSk4xQ2F3aGFvRWxhZ2IvVDJZOVQ2R3U1MUJEeS9vQ2ZzSVB6U05BOEVnVkhHam9UZ1NpbnRTV1U3Q0VqTkdlV2pLR05WRjFDRjFTT2t2YWxKUzJoNlJXZ3h5dnR5ZzFLazFhbzFXcFZmcWxTYWxWZmtQUVEzdWRyZ2RIb2ZINlhGNWFGM0Q0MEpjSHA4andBMzZyVVlmMzFjMHNPUW1wVnJEVTJ1VUtwbVNxcnFvNW5hdzZlLzFiTlRkMkdxM1N2aFdpUTdxdHo0bkpQNXIvY2R2L2VWUHU2dlQ0R1hxWG5CYjNUNm9kckpCQUhNbmZPRUFwQ1lRZGhKd3NSeThzMEhQMFZuMEJtaTRHWFFXRFhmcHpXdFlSTWhTTk92Y09qWFVPb2ViZFJLbHl3Zk5IcDh4WkNYcUJEVk9oVWNaVUFWVUlXaEZSWFJSUTh5TW1HSnhhMkxJdUhRUFd2SmhMNEY0Q1Zjc3pnbGJRK1lBenh5Z0RVdmF0TlRCbnVwMERoMFgzWU96dlQ2SEU3YnI5TG5wUGEwZW56dUF1QU5RM2VMMHFUc0ZhVjVhc0RSWXoxMnlYQ2R1NGFON1c4VHladU5TaDd1bWl2cklEcTY0K3NOcXNPQVROQVgyZ0orVXUxN3UvbVRiMDJ4MDBXSG5DNW82NUg1QkZ4M2hnRUZUMytDQ01ld1o1b0VCbGxQbmdURVBlV0E4WS9EQUdEKzhVd3p1MjFsZDlNSEE1elJNVC83Uk9HSFFBZk9RRzhiOVhiaGhvT2J3N0tBakJwSjhmRWVNdU9TSTJWVnl4S2pmR3NrUEF4NDdVLzB3NW5JL2pQdk05c08wZ3llcHVXSncvcTdQMzY4dWVtTlFKUnJiTXVsWTdoaFVlY1k0WktDaTgwckprd3oxMFNIcE5ZRHVCUGVEVjBiblRvWVB4bmZrVVM3Y1Z0eEtXeFJodFBVekNoRjJPeTNDYW1rUkJsN2JlNlFNMjBITE1QTGlVUXF4M2FkQmlQMENiTm9MaGRpT280VFlQdkR5MzQrV1l1UWZUNGNVTTVWTE1jOXBrbUxrRDRhaUIrU1RKenQ2QUY0WkhqMGd0NTZoMFFQdzZwN1BkNElMSkljRENIUFBoZ0FDK2VWUUFHSHVDUWNRd0lzakJoREk0SGdBNGFRRUVPNGRGa0FBMjgrQ0FNSU1JS1ltMGpsalh3ZWltWktzcFBwOWNITUF6S2F1QTdQZDRBNzBFbTIra2t4ZzZtZmExcTFZdFdMVmtzekNDTEtIbXYwemRyTlJvQk9wUldxcHNwanZSS29YSTNxeHVVMTBISUFIZ2w2cUxRTjVvSFhhNFRnUDJHQUo2b0dhNTVUUUh1ZzA3Y2lBajhSRG5mVnJsNjVkMmk5OFVZUE1Bck4zczdzOXVVQW1uQWtuaVdnOEdnOGwvUm5FbjNGbGM4YzVmUXRCcHpMS1lCK29pVEVjK1lIK2dqRWMvSUhPbkZQQ2Z6amhJb0xyUWVVTWNiY1liUGozekpMY2h5S1FTYzRCRFBRYTlDcnlwZng5R01WZzNVVE5zZVZNV1gyNlZwL1dKSlJSWlZRV0V2c1J2MWprRW5EUmVTY3U0dnU2ZlVRSG41cEd2YzBFRE5ZT2NBVVRkVG1GM3JhQUpDQUp5UWtWb1lwcGt3YkVtRXhiTW1Od083UUlURm9SSCtvRWFJaGF1V0ZVeWdUcU9rS2RnT3ZMdGpHcEliZ0txS2lsWWxJR3JGQ0graERVOVFNTytpQzVHS3pGRm9tWGloL2hQdFVjVEV2NGtyU3VkeU5uWTZBM0NhVmNzaXU0bHB0SldBeFJQcHhYbXFBU1RGOWZJMThuN0YyUlc1RjdLcjdZai95TDRreGhOeGxiTkVLRlVDR1d5RVF5a2FwVjE0em9tczJOeTR0ZXZtWmVvRG5TR2hmRlJTbEpWcEZWNURUZFJ1Unl3UG1FdlNtd1B0SFgzZGVkcFNHNWFKK1RKdElLNmdCOWlDY0tMZ0Iva0ZUdkpsY1grb0NVK2lXNEVhcDdUNE8xNEFvTTZrMFJUOXdUZDZTdG5mWkFEYmdOWGo2WFpYemRsbldsdzRuYWNDSVo2TVM3OEl3eG9VZ29JbTMrWnZEakRUWDZkY3BlY1llNFE1UVVSQkYwZ3lEYUdteUJNL1JQTFI2aFUyeGZZVzgwTm1tYU5LM3lObkdiV0M3VXRHaGFMRTNPUnQ4MU5RdW9DMzdId3BXNHNsMXQxOWJhdFZhZHhXQXhHRTMwV2d1WE9DdUMvcG1xSTN0QkhYVWYrN0VHdTYyRmIydFJRY0dPUGszbmNzQmZBMWNBSjdpNDRrMXdLY0RCNVpXa2hmdzkxaFlSQmx0OWlLKzF4ZFhNZmZBUjVjcEYvRHRldis2NjErOVFpM1VpbzdEV0tMUzB0bkNhWFMwK0FjOG5DQW9qYlhmZlhmUE9kZHUzTTVzM1BhZmF5dTNNdVh3ZC9BNWZKcEFLLy9IT21uZmV1V3Q3SkJYTStEcHFmUjJ1emk3T1Z0Vnp6WnQ0TzNaYyt5NlRhcWF1eDJKUnE0bmdFN1NzMFFhMWZyVlhpWGlWVGhxWGFZWExBOCtvaEdzamZLbWhGb2lZbEFxcm5DdFhsQkJoYWgrc0VOU0hqUVJpSkt5eEJDZmhqSGtKbnBlQXNobStvT29KMTFraTZvd1Z3NGdwK3R4VVJnOWdBSW1rR2tUQkRlak8vTnpEd0MwbVNwYVFPOGl4a1R2M3M4QlZsSVE1Q3o3ZFVMdi9LU3Uxa2tuZFJYOGh3U09VQk53QUczZ1VNS2k3V2FrZUpwZ0ZHRDlqMGI3ZUdlOFdtMzBmWEZYZFJSK0ZSa2FCQ2xNMXRiVTFLUkJGY2VOUGM0c25KT0FMUXBLMHNoZWhLMUwzRWl3QzNNZUdOMlpRMTdDSlZjbDBSeGdKZCtROFhkemVMcE1teDg5cGtqSkNCSzdaV05QODh1S0JoMWNqcXgrK04zWXJ0K0dwa2t1N1VkRWliaEVMQlpLVmtwV0s1ZG9HNURHSzBhMWtLVmV5MFFHSzhTdzcyRUFzVDY1TXJzd0tPc1VJU25hS2V4U3J0WWh1TlIyTmVYTmJmTjFML0pmV2JYd2g5d2VYQ3k1M1VGQmNCcW9HQUZvQkdLU3hrdHhQL2c4RzBJSVJNbVVTTzBaWURCRit4QUNIVG9WUURWUVZhR0FabEhCQmg0eFVLY3d5N2cxVUZRdk1vbFJNOENzV2RUTXdid3F2U1hWMTFYWjFKVllITmlKZmdxcUxXT2FZaVRDR29aNVFWYmkybUFXbWpueUFxZ04xMWI4RGRlaGN3Q2QvZ3FYaVBnTE9Fc0tYU0hOU2hyaVM0QkZISGI3ZTVwTVNTcDZTU0JqU1hHclRPYU92Z3E0clZhb3FUSXVJeVN1TERkOUtFNENtd0V4eStnazMza1p0eEVZODk5Mm9OeU8vWjBWRFI1MHJQL3BUNVJGMFI4UUduOTJxZzFPckNuK3B1dkx3NFB5Tkhwcy9uYnF4d1EzZ3dncHdIcm13RXRUVCtjVG1zY0E5WUE0VkExWW05UUFMT0NqNDdxRU1HSFVoT1I5Y09IUTlRbC8vQTNEKzBKOHBEekJnd0ZHcVJNVW9LN2lIbXNPRU42dkM0ZW82K1o5Z2NnWDRJVG0va3Z3ek9RVURrK2V5ZndNWVRJckxlcENDYnlGcU1wakxtbmNKazdxUW1yeU5OZjh5SnVDelh2aWNDZTgzbWJxVDllSS9tVlc5UG5GK2hhU2lQZDlZU1RMVUdNa0EvMXRna0l3Q0xFejQ1VllNanV4Z0FiY3lxOGdyNmEwT1lQbStMZnZCNVg4M0hOcnhBRGJ0UXlYYXZKbnN3d1F1a1YvTTg0dERNa0pKS09PYUZPUmVLbTNKY3JOcGx6L0ZSeFhhbEI5S09DSktoT0wrRk9KUHVUSlE4Smt6K2hSUG45TEVGWVNDR0pUOGJTNGhWOWhtMFl2NVlyMU1vNFF2amF5a1E0a0VIQWVMYWdUWG52aVdDaGFrczdTdGdqM1N0Z29tcEsrMHRRS0JGNDY4dXdKY1N2MFV5M2pqNFFnUDdkZEd3akV2bE5ZeG95ck1ENnU4TWhHbnpTaFRxM2dxdGR3SVZWYTVONkxtcXlQR2VKb3pnNUpnMDhHYis5aFZCKytsQm9DN2VnQmNUVjBNTGthM2drcnFqckVkVjVvYUxVeC9welZnQ09oZWZEam1DRHJqMm1EM2grVDllMlorVlAyWHFQcUR1MkwrU0RxY0NpZkNDU0llK1IzaEkxN3pyWS9rd3Btb2M4K3M4S293ZXNzVHo5U1JGaHRtYWJjNTJwM3RMb2VqZmVKVVY3dkQxbTVwdDlwczhNdjJIQlowZVh4ZWwwbXJ0WmlOQm9zN3lQdElnRVZZdGhlWlVwWittV0UxZkxQTVl4SWJXTUVubVFGV2NEMlRXcjRFSTFqZTFaNWx6Q2dyL0NKVHhUSStaVnJMVkxKTVR4bUxieXV3b0RTUUNqN0ZSaEVHd3BpM05pQU9zTkZiNEVmUktrdzVqMkE5TkNuS2lyMElyOVF0MFc5Z0tsZ05rK0JmazNGSjVFV1ZSTVphNE1lZUNEOGRDVDZoWmM5N0FndXZaaVdXTVlrWFdlZ1V4Z1NHZWdWTHNZb3BZejAxRDRza1dMRStXTmtnWXFKejRFL0dERlBPaWkxbmtsSVg1ck41elc2ZTIyeDA2cmw2bzlWczVwdk5OcU9CWTNTWVhHYWV4ZVcxK3Jtb0hsYnllUnd1YUdXNEhWNC94MlZqUHR5SjRWWXpidVFhWUNVVEg5NlhjWjdKYkRYcUIydENHaGgxZFBVQTErMkdkZ25mR21UYWJGYTdoYXN6dTROODlEd0dZNG9iZHptZFBLZlRpYnU0THFmZDV1QzdjR2JodmhEbUtON1phTFpab1pWc3RWbk1IS1BiSExEeVBEYW56Y2FCbzJHMld0dHhXN0dSS1RiY2h0dHhpNllHOG8weHhlNXkyNzFjdndkM3V2Z3VKeVNaQS91bmQvS01Ub3ZEd2FHYnJZTW1vWnNITDlhZTUzVFk3UTYrd3c3cjJ4R2NadndjQnZnbDRHRTZtOHdtc0F2c0xmWm1PMVROY25nSEFnZG9EZ1B2d09ONDhLMDlOZkRiRk1ic1BVeFlaUXJESHJESDdCMndkTnE3a2VJdjNmQWovWWNZL0tsVTg4UHJQOTRGdVQrQndRamdNWGdiQkQwSGZ1NkF0KzdDWVNNdGRybzVtVjE3L1V6WWp3b0dZMWNkRXowUHZ1TTZYSTRMWVduRm14RjBDcXpUaExmZ0FsaGZ6NmhnQ0hBWnJuWFFueG5hV1c4eHdXdlVIR3lBL2J4OXZhMkxWN3pBMW1WTDJRZ0VoZlcwTnNJV3NMcExGYTF1bTh2bUZIVFhhTVBCRUxOWVA1MkRJK0Z5dW11ZGJtZkFRY0NTZG5RamptNTg0eFpPZnozNzRjVjJleE8veWQ1bVUxcEw5MU5hZFZZekxCYXJGZjVsRHVNY2hrUXVWOGlpVERnczhIUEM2clE0emM1YXlLTHpHV2FuenFHRWhFNWhuTWRRT3RvY1RRN0UwYlFZZjVpTHpqbUh3VmhVRCtjc2ZKK1BMOGFiZUhnVHZFQUppdzVXTjhPYldMTXRrQ21YUU5acGRScGhDMnpPWWpYWHdwWjFOaVVzYmZZbUJMMEZZVERzVGZiRkQzTVdiV0tqRlhNWmMxN1lnT1BkL0c0OFhleExBUGJLRGJ2bmRIWm1hb0tCc0s0VFBnd01MV09PMCtxeXVtRUpXQW5Jb0xTdDI0Yll1amZhdDNDTE40RmFvanFjbnh0aGdSbmZBN08vRDNhZW43OFgrLy95Rk5ZWUFBQT1cIiIsImltcG9ydCBSZWN0UmVjb2duaXRpb24gZnJvbSBcIi4vUmVjdFJlY29nbml0aW9uXCI7XG5pbXBvcnQgU3RhZ2VSZWNvZ25pdGlvbiBmcm9tIFwiLi9TdGFnZVJlY29nbml0aW9uXCI7XG5pbXBvcnQgSXRlbVJlY29nbml0aW9uIGZyb20gXCIuL0l0ZW1SZWNvZ25pdGlvblwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcHNSZWNvZ25pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGltZykge1xuICAgIHRoaXMuSW1hZ2UgPSBpbWc7XG4gICAgdGhpcy5DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIC8vZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLkNhbnZhcyk7XG4gICAgdGhpcy5DYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgdGhpcy5DYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICB0aGlzLmN0eCA9IHRoaXMuQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMGZmMDBcIjtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiIzAwZmYwMFwiO1xuICAgIHRoaXMucmF3SW1hZ2VEYXRhID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG4gICAgdGhpcy5tYXRyaXhJbWFnZURhdGEgPSBbW11dO1xuICAgIHRoaXMuQm91bmREYXRhID0ge307XG4gICAgdGhpcy5TdGFnZSA9IHt9O1xuICAgIHRoaXMuSXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDAsIHggPSAwLCB5ID0gMDsgaW5kZXggPCB0aGlzLnJhd0ltYWdlRGF0YS5kYXRhLmxlbmd0aDsgaW5kZXggKz0gNCkge1xuICAgICAgdGhpcy5tYXRyaXhJbWFnZURhdGFbeV1beF0gPSBbXG4gICAgICAgIHRoaXMucmF3SW1hZ2VEYXRhLmRhdGFbaW5kZXhdLFxuICAgICAgICB0aGlzLnJhd0ltYWdlRGF0YS5kYXRhW2luZGV4ICsgMV0sXG4gICAgICAgIHRoaXMucmF3SW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAyXVxuICAgICAgXTtcbiAgICAgIGlmICgrK3ggPT0gaW1nLndpZHRoKSB7XG4gICAgICAgIHggPSAwO1xuICAgICAgICBpZiAoKyt5ICE9IGltZy5oZWlnaHQpIHRoaXMubWF0cml4SW1hZ2VEYXRhLnB1c2goW10pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLlJlY3RSZWNvZ25pdGlvbigpO1xuICAgIC8qXG4gICAgZm9yIChsZXQgUmVjdCBvZiB0aGlzLkJvdW5kRGF0YS5tZXJnZWRSZWN0cy5SaWdodCkge1xuICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdChSZWN0LmxlZnQsIFJlY3QudG9wLCBSZWN0LndpZHRoLCBSZWN0LmhlaWdodCk7XG4gICAgfVxuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCIjZmYwMDAwXCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlUmVjdChcbiAgICAgIHRoaXMuQm91bmREYXRhLlN0YWdlLmxlZnQsXG4gICAgICB0aGlzLkJvdW5kRGF0YS5TdGFnZS50b3AsXG4gICAgICB0aGlzLkJvdW5kRGF0YS5TdGFnZS53aWR0aCxcbiAgICAgIHRoaXMuQm91bmREYXRhLlN0YWdlLmhlaWdodFxuICAgICk7Ki9cbiAgICB0aGlzLmRldGVjdFN0YWdlKCk7XG4gICAgdGhpcy5kZXRlY3RJdGVtKCk7XG4gICAgZGVsZXRlIHRoaXMuY3R4O1xuICAgIGRlbGV0ZSB0aGlzLkNhbnZhcztcbiAgICBkZWxldGUgdGhpcy5tYXRyaXhJbWFnZURhdGE7XG4gICAgZGVsZXRlIHRoaXMucmF3SW1hZ2VEYXRhO1xuICAgIGRlbGV0ZSB0aGlzLkltYWdlO1xuICB9XG4gIC8qKlxuICAgKiDor4bliKvlm77lg4/ovrnnlYxcbiAgICovXG4gIFJlY3RSZWNvZ25pdGlvbigpIHtcbiAgICB0aGlzLkJvdW5kRGF0YSA9IG5ldyBSZWN0UmVjb2duaXRpb24odGhpcy5tYXRyaXhJbWFnZURhdGEpO1xuICB9XG4gIGRldGVjdEl0ZW0oKSB7XG4gICAgbGV0IERldGVjdFR5cGUgPSBbXCJOT1JNQUxfRFJPUFwiLCBcIkVYVFJBX0RST1BcIiwgXCJTUEVDSUFMX0RST1BcIiwgXCJBTExfRFJPUFwiXTtcbiAgICBmb3IgKGxldCBSZWN0IG9mIHRoaXMuQm91bmREYXRhLkl0ZW1zKSB7XG4gICAgICBsZXQgVHlwZSA9IFJlY3QudHlwZTtcbiAgICAgIGRlbGV0ZSBSZWN0LnR5cGU7XG4gICAgICBsZXQgUmVzdWx0ID0geyB0eXBlOiBUeXBlLCBCb3VuZDogUmVjdCB9O1xuICAgICAgaWYgKERldGVjdFR5cGUuaW5jbHVkZXMoVHlwZSkpIHtcbiAgICAgICAgbGV0IERyb3BMaXN0ID0gW107XG4gICAgICAgIGZvciAobGV0IERyb3Agb2YgRHJvcHNSZWNvZ25pdGlvbi5TdGFnZVt0aGlzLlN0YWdlLkNvZGVdLmRyb3BJbmZvcykge1xuICAgICAgICAgIGlmICgoRHJvcC5kcm9wVHlwZSA9PSBUeXBlIHx8IFR5cGUgPT0gXCJBTExfRFJPUFwiKSAmJiBEcm9wLml0ZW1JZCAmJiBEcm9wLml0ZW1JZCAhPSBcImZ1cm5pXCIpIHtcbiAgICAgICAgICAgIERyb3BMaXN0LnB1c2goeyBpZDogRHJvcC5pdGVtSWQsIHJhbmdlOiBEcm9wLmJvdW5kcyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAvLyBjb25zb2xlLmxvZyhUeXBlKTtcbiAgICAgICAgbGV0IEl0ZW0gPSBuZXcgSXRlbVJlY29nbml0aW9uKFxuICAgICAgICAgIHRoaXMuZ2V0SW1hZ2VNYXRyaXgoUmVjdC5sZWZ0LCBSZWN0LnRvcCwgUmVjdC5yaWdodCwgUmVjdC5ib3R0b20pLFxuICAgICAgICAgIERyb3BMaXN0LFxuICAgICAgICAgIFJlY3RcbiAgICAgICAgKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihSZXN1bHQsIEl0ZW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5JdGVtcy5wdXNoKFJlc3VsdCk7XG4gICAgfVxuICB9XG4gIGdldEltYWdlTWF0cml4KHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgbGV0IE1hdHJpeCA9IFtdO1xuICAgIGZvciAobGV0IHkgPSB5MTsgeSA8PSB5MjsgeSsrKSB7XG4gICAgICBsZXQgcnkgPSBNYXRyaXgucHVzaChbXSkgLSAxO1xuICAgICAgZm9yIChsZXQgeCA9IHgxLCByeCA9IDA7IHggPD0geDI7IHgrKywgcngrKykge1xuICAgICAgICBNYXRyaXhbcnldW3J4XSA9IFtdLmNvbmNhdCh0aGlzLm1hdHJpeEltYWdlRGF0YVt5XVt4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBNYXRyaXg7XG4gIH1cbiAgZGV0ZWN0U3RhZ2UoKSB7XG4gICAgW3RoaXMuU3RhZ2UuQ29kZSwgdGhpcy5TdGFnZS5Db25maWRlbmNlXSA9IFN0YWdlUmVjb2duaXRpb24oXG4gICAgICB0aGlzLmdldEltYWdlTWF0cml4KFxuICAgICAgICB0aGlzLkJvdW5kRGF0YS5TdGFnZS5sZWZ0LFxuICAgICAgICB0aGlzLkJvdW5kRGF0YS5TdGFnZS50b3AsXG4gICAgICAgIHRoaXMuQm91bmREYXRhLlN0YWdlLnJpZ2h0LFxuICAgICAgICB0aGlzLkJvdW5kRGF0YS5TdGFnZS5ib3R0b21cbiAgICAgIClcbiAgICApO1xuICB9XG4gIHN0YXRpYyBpbml0KGRhdGFOYW1lLCBEYXRhKSB7XG4gICAgc3dpdGNoIChkYXRhTmFtZSkge1xuICAgICAgY2FzZSBcIlN0YWdlXCI6XG4gICAgICAgIHRoaXMuU3RhZ2UgPSBEYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJJdGVtSW1hZ2VcIjpcbiAgICAgICAgSXRlbVJlY29nbml0aW9uLmluaXQoRGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHNzaW0gZnJvbSBcInNzaW0uanNcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XG5pbXBvcnQgQ29ubmVjdGVkQXJlYVJlY29nbml0aW9uIGZyb20gXCIuL0Nvbm5lY3RlZEFyZWFSZWNvZ25pdGlvblwiO1xuaW1wb3J0IE51bWJlcnNIYXNoTGlzdCBmcm9tIFwiLi9EYXRhL051bWJlckhhc2hMaXN0Lmpzb25cIjtcbmZvciAobGV0IGhhc2ggb2YgTnVtYmVyc0hhc2hMaXN0KSB7XG4gIGlmIChoYXNoLmhhc2ggaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGhhc2guaGFzaCA9IGhhc2guaGFzaC5tYXAodiA9PiB2IC8gaGFzaC5jb3VudCk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1SZWNvZ25pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKEltYWdlRGF0YSwgUnVsZXMsIFJlY3QpIHtcbiAgICB0aGlzLk1hdHJpeCA9IEltYWdlRGF0YTtcbiAgICB0aGlzLldpZHRoID0gSW1hZ2VEYXRhWzBdLmxlbmd0aDtcbiAgICB0aGlzLkhlaWdodCA9IEltYWdlRGF0YS5sZW5ndGg7XG4gICAgdGhpcy5JRGF0YSA9IG5ldyBBcnJheSgpO1xuICAgIHRoaXMuQm91bmQgPSBSZWN0O1xuICAgIHRoaXMuUnVsZXMgPSBSdWxlcztcbiAgICB0aGlzLkNvbmZpZGVuY2UgPSB7XG4gICAgICBJdGVtSWQ6IC1JbmZpbml0eSxcbiAgICAgIENvdW50OiBbXVxuICAgIH07XG4gICAgdGhpcy5wcmVwYXJlKCk7XG4gICAgdGhpcy5JdGVtSWQgPSB0aGlzLmdldEl0ZW1JZCgpO1xuICAgIHRoaXMuZ2V0Q291bnQoKTtcbiAgICBkZWxldGUgdGhpcy5SdWxlcztcbiAgICBkZWxldGUgdGhpcy5JRGF0YTtcbiAgICBkZWxldGUgdGhpcy5IZWlnaHQ7XG4gICAgZGVsZXRlIHRoaXMuV2lkdGg7XG4gICAgZGVsZXRlIHRoaXMuTWF0cml4O1xuICB9XG4gIHByZXBhcmUoKSB7XG4gICAgbGV0IGN4ID0gdGhpcy5NYXRyaXhbMF0ubGVuZ3RoID4+IDE7XG4gICAgbGV0IGN5ID0gdGhpcy5NYXRyaXgubGVuZ3RoID4+IDE7XG4gICAgbGV0IHIgPSAoY3ggKyBjeSkgPj4gMTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5IZWlnaHQ7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLldpZHRoOyB4KyspIHtcbiAgICAgICAgbGV0IFRlbXBDb2xvciA9IHRoaXMuTWF0cml4W3ldW3hdO1xuICAgICAgICBpZiAoTWF0aC5oeXBvdCh4IC0gY3gsIHkgLSBjeSkgPiByKSBUZW1wQ29sb3IgPSBbMjU1LCAyNTUsIDI1NV07XG4gICAgICAgIHRoaXMuSURhdGEucHVzaCguLi5UZW1wQ29sb3IsIDI1NSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuSURhdGEgPSB7XG4gICAgICBkYXRhOiB0aGlzLklEYXRhLFxuICAgICAgaGVpZ2h0OiB0aGlzLkhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLldpZHRoXG4gICAgfTtcbiAgfVxuICBnZXRJdGVtSWQoKSB7XG4gICAgbGV0IEltYWdlcyA9IFtdO1xuICAgIGxldCBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIENhbnZhcy53aWR0aCA9IHRoaXMuV2lkdGg7XG4gICAgQ2FudmFzLmhlaWdodCA9IHRoaXMuSGVpZ2h0O1xuICAgIGxldCBDdHggPSBDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBDb25maWRlbmNlID0gLUluZmluaXR5O1xuICAgIGxldCBSZXN1bHQgPSBcIlwiO1xuICAgIGZvciAobGV0IFJ1bGUgb2YgdGhpcy5SdWxlcykge1xuICAgICAgaWYgKCFJdGVtUmVjb2duaXRpb24uSW1hZ2VzW1J1bGUuaWRdKSBjb250aW51ZTtcbiAgICAgIEN0eC5jbGVhclJlY3QoMCwgMCwgQ2FudmFzLndpZHRoLCBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIEN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIEl0ZW1SZWNvZ25pdGlvbi5JbWFnZXNbUnVsZS5pZF0sXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIEl0ZW1SZWNvZ25pdGlvbi5JbWFnZXNbUnVsZS5pZF0ud2lkdGgsXG4gICAgICAgIEl0ZW1SZWNvZ25pdGlvbi5JbWFnZXNbUnVsZS5pZF0uaGVpZ2h0LFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBDYW52YXMud2lkdGgsXG4gICAgICAgIENhbnZhcy5oZWlnaHRcbiAgICAgICk7XG4gICAgICBsZXQgSW1hZ2VEID0gQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBDYW52YXMud2lkdGgsIENhbnZhcy5oZWlnaHQpO1xuICAgICAgSW1hZ2VzLnB1c2goW1J1bGUuaWQsIEltYWdlRF0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBJbWFnZSBvZiBJbWFnZXMpIHtcbiAgICAgIGxldCBTU0lNID0gc3NpbShJbWFnZVsxXSwgdGhpcy5JRGF0YSwgeyB3aW5kb3dTaXplOiA4LCBzc2ltOiBcImJlemtyb3ZueVwiIH0pLm1zc2ltO1xuICAgICAgaWYgKFNTSU0gPiBDb25maWRlbmNlKSB7XG4gICAgICAgIENvbmZpZGVuY2UgPSBTU0lNO1xuICAgICAgICBSZXN1bHQgPSBJbWFnZVswXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5Db25maWRlbmNlLkl0ZW1JZCA9IENvbmZpZGVuY2U7XG4gICAgcmV0dXJuIFJlc3VsdDtcbiAgfVxuICBnZXRDb3VudCgpIHtcbiAgICBpZiAodGhpcy5JdGVtSWQgPT0gXCJcIikge1xuICAgICAgdGhpcy5Db3VudCA9IE5hTjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IFJhbmdlID0gdGhpcy5SdWxlcy5maW5kKHYgPT4gdi5pZCA9PSB0aGlzLkl0ZW1JZCk7XG4gICAgaWYgKFJhbmdlKSB7XG4gICAgICBSYW5nZSA9IFJhbmdlLnJhbmdlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBOdW1SYW5nZSA9IFtSYW5nZS51cHBlciA+IDkgPyAwIDogTWF0aC5tYXgoMSwgUmFuZ2UubG93ZXIpLCBNYXRoLm1pbig5LCBSYW5nZS51cHBlcildO1xuICAgIGxldCBOdW1MaXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IE51bVJhbmdlWzBdOyBpIDw9IE51bVJhbmdlWzFdOyBpKyspIHtcbiAgICAgIE51bUxpc3QucHVzaChpKTtcbiAgICB9XG4gICAgaWYgKE51bUxpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgIHRoaXMuQ291bnQgPSBOdW1MaXN0WzBdO1xuICAgICAgdGhpcy5Db25maWRlbmNlLkNvdW50WzBdID0gMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IFhTdGFydCA9IGZhbHNlLFxuICAgICAgWEVuZCA9IGZhbHNlLFxuICAgICAgWVN0YXJ0ID0gMCxcbiAgICAgIEZpbmQgPSBmYWxzZTtcbiAgICBsZXQgTnVtYmVyUmVjdCA9IG5ldyBSZWN0YW5nbGUoKTtcbiAgICBmb3IgKGxldCB5ID0gdGhpcy5IZWlnaHQgPj4gMTsgeSA8IHRoaXMuSGVpZ2h0OyB5KyspIHtcbiAgICAgIFhTdGFydCA9IGZhbHNlO1xuICAgICAgWEVuZCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgeCA9IHRoaXMuV2lkdGggPj4gMTsgeCA8IHRoaXMuV2lkdGg7IHgrKykge1xuICAgICAgICBsZXQgR3JleVVwID0gZGlzdGFuY2UgPT5cbiAgICAgICAgICAodGhpcy5NYXRyaXhbeSAtIGRpc3RhbmNlXVt4XVswXSArIHRoaXMuTWF0cml4W3kgLSBkaXN0YW5jZV1beF1bMV0gKyB0aGlzLk1hdHJpeFt5IC0gZGlzdGFuY2VdW3hdWzJdKSAvIDM7XG4gICAgICAgIGxldCBHcmV5Tm93ID0gKHRoaXMuTWF0cml4W3ldW3hdWzBdICsgdGhpcy5NYXRyaXhbeV1beF1bMV0gKyB0aGlzLk1hdHJpeFt5XVt4XVsyXSkgLyAzO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKHRoaXMuSXRlbUlkID09IFwiMzMwMVwiXG4gICAgICAgICAgICA/IE1hdGguYWJzKEdyZXlOb3cgLSBHcmV5VXAoMSkpXG4gICAgICAgICAgICA6IE1hdGgubWF4KE1hdGguYWJzKEdyZXlOb3cgLSBHcmV5VXAoMSkpLCBNYXRoLmFicyhHcmV5Tm93IC0gR3JleVVwKDIpKSwgR3JleU5vdyAtIEdyZXlVcCgzKSkpID4gMjBcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKCFYU3RhcnQpIHtcbiAgICAgICAgICAgIFhTdGFydCA9IHg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFhFbmQgPSB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoWEVuZCAtIFhTdGFydCArIDEgPiAyMCkge1xuICAgICAgICAgICAgRmluZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgWFN0YXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICBYRW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoRmluZCkge1xuICAgICAgICBZU3RhcnQgPSB5O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKEZpbmQpIHtcbiAgICAgIE51bWJlclJlY3QudXBkYXRlKHtcbiAgICAgICAgbGVmdDogWFN0YXJ0LFxuICAgICAgICByaWdodDogWEVuZCxcbiAgICAgICAgdG9wOiBZU3RhcnQsXG4gICAgICAgIGJvdHRvbTogTWF0aC5yb3VuZCh0aGlzLkJvdW5kLmhlaWdodCAtIHRoaXMuQm91bmQuaGVpZ2h0ICogMC4wOClcbiAgICAgIH0pO1xuICAgICAgLyogY29uc29sZS5sb2coe1xuICAgICAgICBsZWZ0OiBOdW1iZXJSZWN0LmxlZnQgKyB0aGlzLkJvdW5kLmxlZnQsXG4gICAgICAgIHJpZ2h0OiBOdW1iZXJSZWN0LnJpZ2h0ICsgdGhpcy5Cb3VuZC5sZWZ0LFxuICAgICAgICB0b3A6IE51bWJlclJlY3QudG9wICsgdGhpcy5Cb3VuZC50b3AsXG4gICAgICAgIGJvdHRvbTogTnVtYmVyUmVjdC5ib3R0b20gKyB0aGlzLkJvdW5kLnRvcFxuICAgICAgfSk7Ki9cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgTnVtYmVyTWFydGl4ID0gW107XG4gICAgbGV0IE51bWJlck5vZGVzID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgTnVtYmVyUmVjdC5oZWlnaHQ7IHkrKykge1xuICAgICAgTnVtYmVyTWFydGl4LnB1c2goW10pO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBOdW1iZXJSZWN0LndpZHRoOyB4KyspIHtcbiAgICAgICAgbGV0IFtSLCBHLCBCXSA9IHRoaXMuTWF0cml4W3kgKyBOdW1iZXJSZWN0LnRvcF1beCArIE51bWJlclJlY3QubGVmdF07XG4gICAgICAgIGxldCBHcmV5ID0gKFIgKyBHICsgQikgLyAzO1xuICAgICAgICBpZiAoR3JleSA+PSAxMjApIHtcbiAgICAgICAgICBOdW1iZXJNYXJ0aXhbeV1beF0gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKEdyZXkgPCAxMjAgJiYgR3JleSA+IDEwNSkge1xuICAgICAgICAgIGxldCBsZWZ0LCByaWdodCwgdG9wLCBib3R0b207XG4gICAgICAgICAgaWYgKHggIT09IDApIHtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLk1hdHJpeFt5ICsgTnVtYmVyUmVjdC50b3BdW3ggKyBOdW1iZXJSZWN0LmxlZnQgLSAxXS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIDM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh4ICE9PSBOdW1iZXJSZWN0LndpZHRoIC0gMSkge1xuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLk1hdHJpeFt5ICsgTnVtYmVyUmVjdC50b3BdW3ggKyBOdW1iZXJSZWN0LmxlZnQgKyAxXS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIDM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh5ICE9IDApIHtcbiAgICAgICAgICAgIHRvcCA9IHRoaXMuTWF0cml4W3kgKyBOdW1iZXJSZWN0LnRvcCAtIDFdW3ggKyBOdW1iZXJSZWN0LmxlZnRdLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gMztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHkgIT09IE51bWJlclJlY3QuaGVpZ2h0IC0gMSkge1xuICAgICAgICAgICAgYm90dG9tID0gdGhpcy5NYXRyaXhbeSArIE51bWJlclJlY3QudG9wICsgMV1beCArIE51bWJlclJlY3QubGVmdF0ucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyAzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoKGxlZnQgJiYgbGVmdCA+IDEyMCkgfHwgKHJpZ2h0ICYmIHJpZ2h0ID4gMTIwKSB8fCAodG9wICYmIHRvcCA+IDEyMCkgfHwgKGJvdHRvbSAmJiBib3R0b20gPiAxMjApKSB7XG4gICAgICAgICAgICBOdW1iZXJNYXJ0aXhbeV1beF0gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOdW1iZXJNYXJ0aXhbeV1beF0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTnVtYmVyTWFydGl4W3ldW3hdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgTnVtYmVyTWFydGl4W3ldW3hdID0gR3JleSA+IDgwO1xuICAgICAgICBpZiAoTnVtYmVyTWFydGl4W3ldW3hdKSB7XG4gICAgICAgICAgTnVtYmVyTm9kZXMuYWRkKHggKiAxMDAwMCArIHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBHZXRBbGxOdW1iZXIgPSBuZXcgQ29ubmVjdGVkQXJlYVJlY29nbml0aW9uKE51bWJlck1hcnRpeCwgTnVtYmVyTm9kZXMsIHRydWUpO1xuICAgIGxldCBUZW1wQ291bnQgPSBcIlwiO1xuICAgIGxldCBSZXN1bHQgPSBHZXRBbGxOdW1iZXIuR2V0QWxsQ29ubmVjdGVkQXJlYShSZWN0ID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coUmVjdCk7XG4gICAgICBpZiAoXG4gICAgICAgIFJlY3QucG9pbnQgPCAyMCB8fFxuICAgICAgICBSZWN0LndpZHRoID4gUmVjdC5oZWlnaHQgfHxcbiAgICAgICAgUmVjdC5oZWlnaHQgPCA4IHx8XG4gICAgICAgIFJlY3Qud2lkdGggPCAzIHx8XG4gICAgICAgIE51bWJlclJlY3Qud2lkdGggLSBSZWN0LmxlZnQgPCA1IHx8XG4gICAgICAgIFJlY3QubGVmdCA8IDVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVjdDtcbiAgICB9KS5zb3J0KChhLCBiKSA9PiBhLmxlZnQgLSBiLmxlZnQpO1xuICAgIGxldCBOdW1DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIE51bUNhbnZhcy53aWR0aCA9IDk7XG4gICAgTnVtQ2FudmFzLmhlaWdodCA9IDEwO1xuICAgIGxldCBOdW1DdHggPSBOdW1DYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGZvciAobGV0IE51bSBvZiBSZXN1bHQpIHtcbiAgICAgIGxldCBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgQ2FudmFzLndpZHRoID0gTnVtLndpZHRoO1xuICAgICAgQ2FudmFzLmhlaWdodCA9IE51bS5oZWlnaHQ7XG4gICAgICBsZXQgQ3R4ID0gQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGxldCBJbWdEYXRhID0gQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBDYW52YXMud2lkdGgsIENhbnZhcy5oZWlnaHQpO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBOdW0uaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBOdW0ud2lkdGg7IHgrKykge1xuICAgICAgICAgIGxldCBJbmRleCA9ICh5ICogQ2FudmFzLndpZHRoICsgeCkgKiA0O1xuICAgICAgICAgIGlmIChOdW0ubWF0cml4W3ldW3hdKSB7XG4gICAgICAgICAgICBJbWdEYXRhLmRhdGFbSW5kZXhdID0gMDtcbiAgICAgICAgICAgIEltZ0RhdGEuZGF0YVtJbmRleCArIDFdID0gMDtcbiAgICAgICAgICAgIEltZ0RhdGEuZGF0YVtJbmRleCArIDJdID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgSW1nRGF0YS5kYXRhW0luZGV4XSA9IDI1NTtcbiAgICAgICAgICAgIEltZ0RhdGEuZGF0YVtJbmRleCArIDFdID0gMjU1O1xuICAgICAgICAgICAgSW1nRGF0YS5kYXRhW0luZGV4ICsgMl0gPSAyNTU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEltZ0RhdGEuZGF0YVtJbmRleCArIDNdID0gMjU1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBDdHgucHV0SW1hZ2VEYXRhKEltZ0RhdGEsIDAsIDApO1xuICAgICAgTnVtQ3R4LmNsZWFyUmVjdCgwLCAwLCBOdW1DYW52YXMud2lkdGgsIE51bUNhbnZhcy5oZWlnaHQpO1xuICAgICAgTnVtQ3R4LmRyYXdJbWFnZShDYW52YXMsIDAsIDAsIENhbnZhcy53aWR0aCwgQ2FudmFzLmhlaWdodCwgMCwgMCwgTnVtQ2FudmFzLndpZHRoLCBOdW1DYW52YXMuaGVpZ2h0KTtcbiAgICAgIGxldCBESGFzaCA9IHRoaXMuZ2V0REhhc2goTnVtQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBOdW1DYW52YXMud2lkdGgsIE51bUNhbnZhcy5oZWlnaHQpKTtcbiAgICAgIGxldCBOdW1iZXJSZXN1bHQgPSB0aGlzLmRIYXNodG9OdW1iZXIoREhhc2gsIE51bUxpc3QpO1xuICAgICAgVGVtcENvdW50ICs9IE51bWJlclJlc3VsdC5OdW07XG4gICAgICB0aGlzLkNvbmZpZGVuY2UuQ291bnQucHVzaChOdW1iZXJSZXN1bHQuQ29uZmlkZW5jZSk7XG4gICAgfVxuICAgIHRoaXMuQ291bnQgPSBOdW1iZXIoVGVtcENvdW50KTtcbiAgfVxuICBnZXRESGFzaChpdGVtKSB7XG4gICAgbGV0IEhhc2hTdHJpbmcgPSBcIlwiO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtLmRhdGEubGVuZ3RoOyBpbmRleCArPSA0KSB7XG4gICAgICBpZiAoTWF0aC5mbG9vcihpbmRleCAvIDQpICUgaXRlbS53aWR0aCA9PSAwKSBjb250aW51ZTtcbiAgICAgIGlmIChcbiAgICAgICAgTWF0aC5mbG9vcigoaXRlbS5kYXRhW2luZGV4IC0gNF0gKyBpdGVtLmRhdGFbaW5kZXggLSAzXSArIGl0ZW0uZGF0YVtpbmRleCAtIDJdKSAvIDMpID5cbiAgICAgICAgTWF0aC5mbG9vcigoaXRlbS5kYXRhW2luZGV4XSArIGl0ZW0uZGF0YVtpbmRleCArIDFdICsgaXRlbS5kYXRhW2luZGV4ICsgMl0pIC8gMylcbiAgICAgICkge1xuICAgICAgICBIYXNoU3RyaW5nICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBIYXNoU3RyaW5nICs9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBIYXNoU3RyaW5nO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcGFyYW0ge2FycmF5fSBOdW1iZXJzXG4gICAqL1xuICBkSGFzaHRvTnVtYmVyKGhhc2gsIE51bWJlcnMpIHtcbiAgICBsZXQgTnVtQ29uZmlkZW5jZSA9IC1JbmZpbml0eTtcbiAgICBsZXQgTnVtID0gTmFOO1xuICAgIGxldCBBbGxMZW5ndGggPSA4MDtcbiAgICBsZXQgTnVtc0hhc2hMaXN0ID0gTnVtYmVyc0hhc2hMaXN0LmZpbHRlcih2ID0+IE51bWJlcnMuaW5jbHVkZXModi5udW1iZXIpKTtcbiAgICBmb3IgKGxldCBOdW1iZXJESGFzaCBvZiBOdW1zSGFzaExpc3QpIHtcbiAgICAgIGxldCBDb25maWRlbmNlID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFzaC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaGFzaFtpXSA9PSBcIjFcIikge1xuICAgICAgICAgIENvbmZpZGVuY2UgKz0gTnVtYmVyREhhc2guaGFzaFtpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBDb25maWRlbmNlICs9IDEgLSBOdW1iZXJESGFzaC5oYXNoW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBDb25maWRlbmNlIC89IEFsbExlbmd0aDtcbiAgICAgIGlmIChDb25maWRlbmNlID4gTnVtQ29uZmlkZW5jZSkge1xuICAgICAgICBOdW1Db25maWRlbmNlID0gQ29uZmlkZW5jZTtcbiAgICAgICAgTnVtID0gTnVtYmVyREhhc2gubnVtYmVyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgTnVtOiBOdW0sXG4gICAgICBDb25maWRlbmNlOiBOdW1Db25maWRlbmNlXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgaW5pdChJbWFnZSkge1xuICAgIHRoaXMuSW1hZ2VzID0gSW1hZ2U7XG4gIH1cbn1cbiIsImltcG9ydCBDb25uZWN0ZWRBcmVhUmVjb2duaXRpb24gZnJvbSBcIi4vQ29ubmVjdGVkQXJlYVJlY29nbml0aW9uXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0UmVjb2duaXRpb24ge1xuICBjb25zdHJ1Y3RvcihJbWFnZURhdGEpIHtcbiAgICBsZXQgaGVpZ2h0ID0gSW1hZ2VEYXRhLmxlbmd0aDtcbiAgICBsZXQgd2lkdGggPSBJbWFnZURhdGFbMF0ubGVuZ3RoO1xuICAgIHRoaXMuSW1hZ2VEYXRhID0gSW1hZ2VEYXRhO1xuICAgIHRoaXMuTm9kZSA9IG5ldyBTZXQoKTtcbiAgICAvKiDnspfmo4DmtYvlhbPljaHmjonokL3kv6Hmga/ljLrln58gKi9cbiAgICBsZXQgWUF4aXMgPSBBcnJheShoZWlnaHQpLmZpbGwoMCk7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgIFlBeGlzW3ldICs9IEltYWdlRGF0YVt5XVt4XVswXSArIEltYWdlRGF0YVt5XVt4XVsxXSArIEltYWdlRGF0YVt5XVt4XVsyXTtcbiAgICAgIH1cbiAgICAgIFlBeGlzW3ldIC89IDM7XG4gICAgfVxuICAgIGxldCBEYXRhQXJlYVNwaWx0ID0gLTE7XG4gICAgZm9yIChsZXQgeSA9IDE7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgaWYgKFlBeGlzW3kgLSAxXSAtIFlBeGlzW3ldID4gMjAwMDApIHtcbiAgICAgICAgbGV0IGNhbmNlbCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICBpZiAoSW1hZ2VEYXRhW3ldW3hdLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gMyA+IDEwMCkge1xuICAgICAgICAgICAgY2FuY2VsID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsKSBjb250aW51ZTtcbiAgICAgICAgRGF0YUFyZWFTcGlsdCA9IHk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLkRhdGFBcmVhU3BpbHQgPSBEYXRhQXJlYVNwaWx0O1xuICAgIGxldCBCaW5hcml6YXRpb25NYXRyaXggPSB0aGlzLkJpbmFyaXphdGlvbih3aWR0aCwgaGVpZ2h0LCBJbWFnZURhdGEpO1xuICAgIGxldCBDb25uZWN0ZWRBcmVhID0gbmV3IENvbm5lY3RlZEFyZWFSZWNvZ25pdGlvbihCaW5hcml6YXRpb25NYXRyaXgsIHRoaXMuTm9kZSk7XG4gICAgbGV0IG1lcmdlZFJlY3RzID0gdGhpcy5BdXRvbWVyZ2VSZWN0KFxuICAgICAgQ29ubmVjdGVkQXJlYS5HZXRBbGxDb25uZWN0ZWRBcmVhKFJlc3VsdCA9PiB7XG4gICAgICAgIFJlc3VsdC51cGRhdGUoe1xuICAgICAgICAgIHRvcDogUmVzdWx0LnRvcCArIERhdGFBcmVhU3BpbHQsXG4gICAgICAgICAgYm90dG9tOiBSZXN1bHQuYm90dG9tICsgRGF0YUFyZWFTcGlsdFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFJlc3VsdC5wb2ludCA+IDEwMCkge1xuICAgICAgICAgIGRlbGV0ZSBSZXN1bHQucG9pbnQ7XG4gICAgICAgICAgcmV0dXJuIFJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuQm91bmQobWVyZ2VkUmVjdHMpO1xuICAgIHRoaXMuR2V0RHJvcFR5cGUobWVyZ2VkUmVjdHMuUmlnaHQsIEltYWdlRGF0YSk7XG4gICAgdGhpcy5tZXJnZWRSZWN0cyA9IG1lcmdlZFJlY3RzO1xuICAgIGRlbGV0ZSB0aGlzLkRhdGFBcmVhU3BpbHQ7XG4gICAgZGVsZXRlIHRoaXMuTm9kZTtcbiAgICBkZWxldGUgdGhpcy5JbWFnZURhdGE7XG4gIH1cbiAgLy8g6K+G5Yir6L6555WMXG4gIEJvdW5kKFJlY3RzKSB7XG4gICAgdGhpcy5TdGFnZSA9IFJlY3RzLlN0YWdlO1xuICAgIHRoaXMuSXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBSZWN0IG9mIFJlY3RzLlJpZ2h0KSB7XG4gICAgICBpZiAoTWF0aC5hYnMoUmVjdC5oZWlnaHQgLyBSZWN0LndpZHRoIC0gMSkgPCAwLjIgJiYgUmVjdC5oZWlnaHQgPiA1MCAmJiBSZWN0LndpZHRoID4gNTApIHtcbiAgICAgICAgdGhpcy5JdGVtcy5wdXNoKFJlY3QpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLkl0ZW1zLnNvcnQoKGEsIGIpID0+IGEubGVmdCAtIGIubGVmdCk7XG4gIH1cbiAgR2V0RHJvcFR5cGUoUmVjdHMsIEltYWdlRGF0YSkge1xuICAgIGxldCB0b3AgPSB0aGlzLkl0ZW1zLnJlZHVjZSgoYSwgYikgPT4gYSArIGIuYm90dG9tLCAwKSAvIHRoaXMuSXRlbXMubGVuZ3RoO1xuICAgIGxldCBEcm9wVHlwZSA9IFtdO1xuICAgIGZvciAobGV0IFJlY3Qgb2YgUmVjdHMpIHtcbiAgICAgIGlmIChSZWN0LnRvcCA+IHRvcCAmJiBSZWN0LndpZHRoIC8gUmVjdC5oZWlnaHQgPiAzKSB7XG4gICAgICAgIERyb3BUeXBlLnB1c2goe1xuICAgICAgICAgIGxlZnQ6IFJlY3QubGVmdCxcbiAgICAgICAgICByaWdodDogUmVjdC5yaWdodCxcbiAgICAgICAgICB0eXBlOiB0aGlzLkNvbXBhcmVUeXBlKEltYWdlRGF0YVtSZWN0LnRvcF1bKFJlY3QubGVmdCArIFJlY3QucmlnaHQpID4+IDFdKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgUmVjdCBvZiB0aGlzLkl0ZW1zKSB7XG4gICAgICBmb3IgKGxldCB0eXBlIG9mIERyb3BUeXBlKSB7XG4gICAgICAgIGxldCBbbGVmdCwgcmlnaHRdID0gUmVjdC5kaXJlY3Rpb24odHlwZSk7XG4gICAgICAgIGlmICghbGVmdCAmJiAhcmlnaHQpIHtcbiAgICAgICAgICBSZWN0LnR5cGUgPSB0eXBlLnR5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgUkdCRGlmZihyZ2IxLCByZ2IyKSB7XG4gICAgcmV0dXJuIHJnYjEubWFwKCh2LCBpKSA9PiBNYXRoLmFicyh2IC0gcmdiMltpXSkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuICB9XG4gIENvbXBhcmVUeXBlKHJnYikge1xuICAgIGxldCBUeXBlID0gT2JqZWN0LmVudHJpZXMoUmVjdFJlY29nbml0aW9uLkRyb3BUeXBlQ29sb3IpO1xuICAgIGZvciAobGV0IFt0eXBlLCBjb2xvcl0gb2YgVHlwZSkge1xuICAgICAgaWYgKGNvbG9yKC4uLnJnYikpIHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIkFMTF9EUk9QXCI7XG4gIH1cbiAgQmluYXJpemF0aW9uKHdpZHRoLCBoZWlnaHQsIEltYWdlRGF0YSkge1xuICAgIGxldCBNYXRyaXggPSBbXTtcbiAgICBmb3IgKGxldCB5ID0gdGhpcy5EYXRhQXJlYVNwaWx0LCByeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgTWF0cml4LnB1c2goW10pO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgIE1hdHJpeFtyeV1beF0gPSAoSW1hZ2VEYXRhW3ldW3hdWzBdICsgSW1hZ2VEYXRhW3ldW3hdWzFdICsgSW1hZ2VEYXRhW3ldW3hdWzJdKSAvIDMgPCA3NSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgaWYgKE1hdHJpeFtyeV1beF0pIHtcbiAgICAgICAgICB0aGlzLk5vZGUuYWRkKHggKiAxMDAwMCArIHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcnkrKztcbiAgICB9XG4gICAgcmV0dXJuIE1hdHJpeDtcbiAgfVxuICBzb3J0UmVjdChSZWN0MSwgUmVjdDIpIHtcbiAgICBsZXQgeSA9IFJlY3QxLnRvcCAtIFJlY3QyLnRvcCxcbiAgICAgIHggPSBSZWN0MS5sZWZ0IC0gUmVjdDIubGVmdDtcbiAgICBpZiAoeSA9PSAwKSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDlkIjlubbovrnnlYzot53nprvlnKjkuIDlrprojIPlm7TlhoXnmoTov57pgJrljLpcbiAgICogQHBhcmFtIHsqfSBSZWN0c1xuICAgKi9cbiAgQXV0b21lcmdlUmVjdChSZWN0cykge1xuICAgIC8vIOaQnOe0ouWHuuS4remXtOeahOerlue6vyDku6XlroPkuLrlj4LogINcbiAgICBsZXQgTWlkZGxlTGluZSA9IHsgdG9wOiAxLCBib3R0b206IDAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFJlY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoUmVjdHNbaV0uYm90dG9tIC0gUmVjdHNbaV0udG9wID4gTWlkZGxlTGluZS5ib3R0b20gLSBNaWRkbGVMaW5lLnRvcCkge1xuICAgICAgICBNaWRkbGVMaW5lID0gUmVjdHNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBNaWRkbGVYID0gKE1pZGRsZUxpbmUucmlnaHQgKyBNaWRkbGVMaW5lLmxlZnQpIC8gMjtcbiAgICBsZXQgTGVmdFJlY3QgPSBbXSxcbiAgICAgIFJpZ2h0UmVjdCA9IFtdO1xuICAgIGZvciAobGV0IFJlY3Qgb2YgUmVjdHMpIHtcbiAgICAgIGlmIChSZWN0LnJpZ2h0IDwgTWlkZGxlWCkge1xuICAgICAgICBpZiAodGhpcy5JU0NoYXIoUmVjdCkpIHtcbiAgICAgICAgICBMZWZ0UmVjdC5wdXNoKFJlY3QpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChSZWN0LmxlZnQgPiBNaWRkbGVYKSB7XG4gICAgICAgIFJpZ2h0UmVjdC5wdXNoKFJlY3QpO1xuICAgICAgfVxuICAgIH1cbiAgICBMZWZ0UmVjdC5zb3J0KHRoaXMuc29ydFJlY3QpO1xuICAgIGxldCBTdGFnZVJlY3QgPSBMZWZ0UmVjdC5zaGlmdCgpO1xuICAgIGZvciAobGV0IFJlY3Qgb2YgTGVmdFJlY3QpIHtcbiAgICAgIGxldCBbbGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tXSA9IFN0YWdlUmVjdC5kaXJlY3Rpb24oUmVjdCk7XG4gICAgICBpZiAoKHJpZ2h0IHx8IGxlZnQpICYmICF0b3AgJiYgIWJvdHRvbSkge1xuICAgICAgICBTdGFnZVJlY3QubWVyZ2UoUmVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IE1lcmdlID0gKFJlY3RzLCBxKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFJlY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IFJlY3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKFJlY3RzW2ldLmRpc3RhbmNlKFJlY3RzW2pdKSA8IHEpIHtcbiAgICAgICAgICAgIFJlY3RzW2ldLm1lcmdlKFJlY3RzW2pdKTtcbiAgICAgICAgICAgIGRlbGV0ZSBSZWN0cy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWN0cztcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBTdGFnZTogU3RhZ2VSZWN0LFxuICAgICAgUmlnaHQ6IE1lcmdlKFJpZ2h0UmVjdCwgMTApLFxuICAgICAgTWlkZGxlOiBNaWRkbGVMaW5lXG4gICAgfTtcbiAgfVxuICBJU0NoYXIoUmVjdCkge1xuICAgIGxldCBDID0gMDtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IFJlY3QuaGVpZ2h0OyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgUmVjdC53aWR0aDsgeCsrKSB7XG4gICAgICAgIGxldCBbUiwgRywgQl0gPSB0aGlzLkltYWdlRGF0YVt5ICsgUmVjdC50b3BdW3ggKyBSZWN0LmxlZnRdO1xuICAgICAgICBsZXQgQSA9IDI1NTtcbiAgICAgICAgbGV0IEQgPSAoTWF0aC5hYnMoUiAtIEEpICsgTWF0aC5hYnMoRyAtIEEpICsgTWF0aC5hYnMoQiAtIEEpKSAvIDM7XG4gICAgICAgIGlmIChEIDwgMzApIHtcbiAgICAgICAgICBDKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEMgLyAoUmVjdC53aWR0aCAqIFJlY3QuaGVpZ2h0KSA+IDAuMTtcbiAgfVxuICAvKipcbiAgICog6K6h566X55+p5b2i6Led56a7XG4gICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjE3ODAxNVxuICAgKiBAcGFyYW0geyp9IFJlY3QxXG4gICAqIEBwYXJhbSB7Kn0gUmVjdDJcbiAgICovXG59XG5SZWN0UmVjb2duaXRpb24uRHJvcFR5cGVDb2xvciA9IHtcbiAgU1BFQ0lBTF9EUk9QOiAoUiwgRywgQikgPT4ge1xuICAgIHJldHVybiBNYXRoLmFicyhSIC0gMjQwKSA8IDUgJiYgTWF0aC5hYnMoRyAtIDEwMCkgPCAxMCAmJiBCIDwgNTA7XG4gIH0sXG4gIE5PUk1BTF9EUk9QOiAoUiwgRywgQikgPT4ge1xuICAgIHJldHVybiBNYXRoLmFicyhSIC0gMTc1KSArIE1hdGguYWJzKEcgLSAxNzUpICsgTWF0aC5hYnMoQiAtIDE3NSkgPCAyMDtcbiAgfSxcbiAgRVhUUkFfRFJPUDogKFIsIEcsIEIpID0+IHtcbiAgICByZXR1cm4gRyA+IFIgJiYgRyA+IEIgJiYgQiA8IDE1MCAmJiBSID4gMjAwICYmIEcgPiAyMDA7XG4gIH0sXG4gIEZJWEVEX0RST1A6IChSLCBHLCBCKSA9PiB7XG4gICAgcmV0dXJuIFIgPiAyMDAgJiYgTWF0aC5hYnMoRyAtIDIwMCkgPCAyMCAmJiBCIDwgMTIwO1xuICB9LFxuICBMVUNLWV9EUk9QOiAoUiwgRywgQikgPT4ge1xuICAgIHJldHVybiBNYXRoLmFicyhSIC0gMjUwKSA8IDUgJiYgTWF0aC5hYnMoRyAtIDEwMCkgPCAxMCAmJiBCIDwgNTA7XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3RvcihkYXRhID0ge30pIHtcbiAgICB0aGlzLmxlZnQgPSBkYXRhLmxlZnQgfHwgMDtcbiAgICB0aGlzLnRvcCA9IGRhdGEudG9wIHx8IDA7XG4gICAgdGhpcy5yaWdodCA9IGRhdGEucmlnaHQgfHwgMDtcbiAgICB0aGlzLmJvdHRvbSA9IGRhdGEuYm90dG9tIHx8IDA7XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICBpZiAoIShrZXkgaW4gdGhpcykpIHtcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVwZGF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cbiAgZGlyZWN0aW9uKFJlY3QyKSB7XG4gICAgbGV0IGxlZnQgPSBSZWN0Mi5yaWdodCA8IHRoaXMubGVmdDtcbiAgICBsZXQgcmlnaHQgPSBSZWN0Mi5sZWZ0ID4gdGhpcy5yaWdodDtcbiAgICBsZXQgdG9wID0gUmVjdDIuYm90dG9tIDwgdGhpcy50b3A7XG4gICAgbGV0IGJvdHRvbSA9IFJlY3QyLnRvcCA+IHRoaXMuYm90dG9tO1xuICAgIHJldHVybiBbbGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tXTtcbiAgfVxuICBtZXJnZShSZWN0Mikge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZSh7XG4gICAgICBsZWZ0OiBNYXRoLm1pbih0aGlzLmxlZnQsIFJlY3QyLmxlZnQpLFxuICAgICAgcmlnaHQ6IE1hdGgubWF4KHRoaXMucmlnaHQsIFJlY3QyLnJpZ2h0KSxcbiAgICAgIHRvcDogTWF0aC5taW4odGhpcy50b3AsIFJlY3QyLnRvcCksXG4gICAgICBib3R0b206IE1hdGgubWF4KHRoaXMuYm90dG9tLCBSZWN0Mi5ib3R0b20pXG4gICAgfSk7XG4gIH1cbiAgZGlzdGFuY2UoUmVjdDIpIHtcbiAgICBsZXQgW2xlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbV0gPSB0aGlzLmRpcmVjdGlvbihSZWN0Mik7XG4gICAgaWYgKGxlZnQgJiYgdG9wKSB7XG4gICAgICByZXR1cm4gTWF0aC5oeXBvdCh0aGlzLmxlZnQgLSBSZWN0Mi5yaWdodCwgdGhpcy50b3AgLSBSZWN0Mi5ib3R0b20pO1xuICAgIH0gZWxzZSBpZiAocmlnaHQgJiYgdG9wKSB7XG4gICAgICByZXR1cm4gTWF0aC5oeXBvdCh0aGlzLnJpZ2h0IC0gUmVjdDIubGVmdCwgdGhpcy50b3AgLSBSZWN0Mi5ib3R0b20pO1xuICAgIH0gZWxzZSBpZiAobGVmdCAmJiBib3R0b20pIHtcbiAgICAgIHJldHVybiBNYXRoLmh5cG90KHRoaXMubGVmdCAtIFJlY3QyLnJpZ2h0LCB0aGlzLmJvdHRvbSAtIFJlY3QyLnRvcCk7XG4gICAgfSBlbHNlIGlmIChyaWdodCAmJiBib3R0b20pIHtcbiAgICAgIHJldHVybiBNYXRoLmh5cG90KHRoaXMucmlnaHQgLSBSZWN0Mi5sZWZ0LCB0aGlzLmJvdHRvbSAtIFJlY3QyLnRvcCk7XG4gICAgfSBlbHNlIGlmIChsZWZ0KSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWZ0IC0gUmVjdDIucmlnaHQ7XG4gICAgfSBlbHNlIGlmIChyaWdodCkge1xuICAgICAgcmV0dXJuIFJlY3QyLmxlZnQgLSB0aGlzLnJpZ2h0O1xuICAgIH0gZWxzZSBpZiAodG9wKSB7XG4gICAgICByZXR1cm4gdGhpcy50b3AgLSBSZWN0Mi5ib3R0b207XG4gICAgfSBlbHNlIGlmIChib3R0b20pIHtcbiAgICAgIHJldHVybiBSZWN0Mi50b3AgLSB0aGlzLmJvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodCAtIHRoaXMubGVmdCArIDE7XG4gIH1cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b20gLSB0aGlzLnRvcCArIDE7XG4gIH1cbn0iLCJpbXBvcnQgXCIuL0RhdGEvRm9udC5jc3NcIjtcbmltcG9ydCBGb250U2l6ZURhdGEgZnJvbSBcIi4vRGF0YS9TdGFnZUZvbnRTaXplLmpzb25cIjtcbmltcG9ydCBDb25uZWN0ZWRBcmVhUmVjb2duaXRpb24gZnJvbSBcIi4vQ29ubmVjdGVkQXJlYVJlY29nbml0aW9uXCI7XG5cbmxldCBGb250Q2FjaGUgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YWdlUmVjb2duaXRpb24oSW1hZ2VNYXRyaXgpIHtcbiAgbGV0IE1hdHJpeCA9IFtdO1xuICBsZXQgQ29uZmlkZW5jZSA9IFtdO1xuICBsZXQgTm9kZSA9IG5ldyBTZXQoKTtcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBJbWFnZU1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgIE1hdHJpeC5wdXNoKFtdKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEltYWdlTWF0cml4WzBdLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgW1IsIEcsIEJdID0gSW1hZ2VNYXRyaXhbeV1beF07XG4gICAgICBNYXRyaXhbeV1beF0gPSAoUiArIEcgKyBCKSAvIDMgPiA4MDtcbiAgICAgIGlmIChNYXRyaXhbeV1beF0pIHtcbiAgICAgICAgTm9kZS5hZGQoeCAqIDEwMDAwICsgeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCBnZXRDb25uZWN0ZWRBcmVhID0gbmV3IENvbm5lY3RlZEFyZWFSZWNvZ25pdGlvbihNYXRyaXgsIE5vZGUsIHRydWUpO1xuICBsZXQgQ29ubmVjdGVkQXJlYXMgPSBnZXRDb25uZWN0ZWRBcmVhLkdldEFsbENvbm5lY3RlZEFyZWEoKS5zb3J0KChhLCBiKSA9PiBhLmxlZnQgLSBiLmxlZnQpO1xuICBsZXQgQ2hhcnMgPSBbXTtcbiAgbGV0IFNwbGl0Q2hhcjtcbiAgZm9yIChsZXQgQ2hhciBvZiBDb25uZWN0ZWRBcmVhcykge1xuICAgIGlmIChDaGFyLmhlaWdodCA8IE1hdHJpeC5sZW5ndGggPj4gMSkge1xuICAgICAgQ2hhcnMucHVzaChcIi1cIik7XG4gICAgICBTcGxpdENoYXIgPSBDaGFyO1xuICAgIH0gZWxzZSB7XG4gICAgICBDaGFycy5wdXNoKFwiXCIpO1xuICAgIH1cbiAgfVxuICBsZXQgRm9udFNpemUgPSBnZXRGb250U2l6ZShTcGxpdENoYXIpO1xuICBpZiAoIUZvbnRDYWNoZVtGb250U2l6ZV0pIHtcbiAgICBGb250Q2FjaGVbRm9udFNpemVdID0gZ2VuRm9udERhdGEoRm9udFNpemUpO1xuICB9XG4gIGZvciAobGV0IFtJbmRleCwgQ2hhcl0gb2YgQ2hhcnMuZW50cmllcygpKSB7XG4gICAgaWYgKENoYXIgPT0gXCItXCIpIHtcbiAgICAgIENvbmZpZGVuY2UucHVzaCgxKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgUmVzdWx0ID0gY29tcGFyZU51bWJlcihDb25uZWN0ZWRBcmVhc1tJbmRleF0ubWF0cml4LCBGb250Q2FjaGVbRm9udFNpemVdKTtcbiAgICBDaGFyc1tJbmRleF0gPSBSZXN1bHRbMF07XG4gICAgbGV0IE51bUNvbmYgPSBSZXN1bHRbMV07XG4gICAgaWYgKFJlc3VsdFsxXSA8IDAuOSkge1xuICAgICAgUmVzdWx0ID0gY29tcGFyZUNoYXIoQ29ubmVjdGVkQXJlYXNbSW5kZXhdLm1hdHJpeCwgRm9udENhY2hlW0ZvbnRTaXplXSk7XG4gICAgICBpZiAoUmVzdWx0WzFdID4gTnVtQ29uZikge1xuICAgICAgICBDaGFyc1tJbmRleF0gPSBSZXN1bHRbMF07XG4gICAgICAgIENvbmZpZGVuY2UucHVzaChSZXN1bHRbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ29uZmlkZW5jZS5wdXNoKE51bUNvbmYpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBDb25maWRlbmNlLnB1c2goTnVtQ29uZik7XG4gICAgfVxuICB9XG4gIHJldHVybiBbQ2hhcnMuam9pbignJyksQ29uZmlkZW5jZS5yZWR1Y2UoKGEsYik9PmErYikvQ29uZmlkZW5jZS5sZW5ndGhdXG59XG5mdW5jdGlvbiBnZXRGb250U2l6ZShDaGFyUmVjdCkge1xuICBsZXQgRmluZCA9IGZhbHNlO1xuICBsZXQgUmV0O1xuICBsZXQgRGlmZiA9IEluZmluaXR5O1xuICBmb3IgKGxldCBbU2l6ZSwgUmVjdF0gb2YgT2JqZWN0LmVudHJpZXMoRm9udFNpemVEYXRhKSkge1xuICAgIGxldCBEID0gTWF0aC5hYnMoUmVjdC53aWR0aCAtIENoYXJSZWN0LndpZHRoKSArIE1hdGguYWJzKFJlY3QuaGVpZ2h0IC0gQ2hhclJlY3QuaGVpZ2h0KTtcbiAgICBpZiAoRCA8PSBEaWZmKSB7XG4gICAgICBEaWZmID0gRDtcbiAgICAgIFJldCA9IFNpemU7XG4gICAgICBpZiAoRCA9PSAwKSB7XG4gICAgICAgIEZpbmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoRmluZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBSZXQ7XG59XG5mdW5jdGlvbiBjb21wYXJlTnVtYmVyKE1hdHJpeCwgRm9udCkge1xuICBsZXQgTnVtYmVyID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuICBsZXQgQ29uZmlkZW5jZSA9IC1JbmZpbml0eTtcbiAgbGV0IFJlc3VsdDtcbiAgZm9yIChsZXQgTnVtIG9mIE51bWJlcikge1xuICAgIGxldCBDb25mID0gY29tcGFyZU1hdHJpeChNYXRyaXgsRm9udFtOdW1dKTtcbiAgICBpZiAoQ29uZiA+IENvbmZpZGVuY2UpIHtcbiAgICAgIENvbmZpZGVuY2UgPSBDb25mO1xuICAgICAgUmVzdWx0ID0gTnVtO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW1Jlc3VsdCwgQ29uZmlkZW5jZV07XG59XG5mdW5jdGlvbiBjb21wYXJlQ2hhcihNYXRyaXgsIEZvbnQpIHtcbiAgbGV0IENoYXJzID0gW1xuICAgIFwiQVwiLFxuICAgIFwiQlwiLFxuICAgIFwiQ1wiLFxuICAgIFwiRFwiLFxuICAgIFwiRVwiLFxuICAgIFwiRlwiLFxuICAgIFwiR1wiLFxuICAgIFwiSFwiLFxuICAgIFwiSVwiLFxuICAgIFwiSlwiLFxuICAgIFwiS1wiLFxuICAgIFwiTFwiLFxuICAgIFwiTVwiLFxuICAgIFwiTlwiLFxuICAgIFwiT1wiLFxuICAgIFwiUFwiLFxuICAgIFwiUVwiLFxuICAgIFwiUlwiLFxuICAgIFwiU1wiLFxuICAgIFwiVFwiLFxuICAgIFwiVVwiLFxuICAgIFwiVlwiLFxuICAgIFwiV1wiLFxuICAgIFwiWFwiLFxuICAgIFwiWVwiLFxuICAgIFwiWlwiXG4gIF07XG4gIGxldCBDb25maWRlbmNlID0gLUluZmluaXR5O1xuICBsZXQgUmVzdWx0O1xuICBmb3IgKGxldCBDaGFyIG9mIENoYXJzKSB7XG4gICAgbGV0IENvbmYgPSBjb21wYXJlTWF0cml4KE1hdHJpeCxGb250W0NoYXJdKTtcbiAgICBpZiAoQ29uZiA+IENvbmZpZGVuY2UpIHtcbiAgICAgIENvbmZpZGVuY2UgPSBDb25mO1xuICAgICAgUmVzdWx0ID0gQ2hhcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtSZXN1bHQsIENvbmZpZGVuY2VdO1xufVxuZnVuY3Rpb24gY29tcGFyZU1hdHJpeChNYXRyaXgxLCBNYXRyaXgyKSB7XG4gIGxldCBXaWR0aCA9IE1hdGgubWluKE1hdHJpeDFbMF0ubGVuZ3RoLCBNYXRyaXgyWzBdLmxlbmd0aCk7XG4gIGxldCBIZWlnaHQgPSBNYXRoLm1pbihNYXRyaXgxLmxlbmd0aCwgTWF0cml4Mi5sZW5ndGgpO1xuICBsZXQgQ291bnQgPSAwO1xuICBmb3IgKGxldCB5ID0gMDsgeSA8IEhlaWdodDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBXaWR0aDsgeCsrKSB7XG4gICAgICBpZiAoTWF0cml4MVt5XVt4XSA9PSBNYXRyaXgyW3ldW3hdKSB7XG4gICAgICAgIENvdW50Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBDb3VudCAvIChNYXRyaXgxWzBdLmxlbmd0aCAqIE1hdHJpeDEubGVuZ3RoKTtcbn1cbi8vIOeUn+aIkOavj+S4quWtl+espuaVsOaNrlxuZnVuY3Rpb24gZ2VuRm9udERhdGEoc2l6ZSkge1xuICBsZXQgQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgbGV0IEN0eCA9IENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIEN0eC5mb250ID0gYCR7c2l6ZX0gJ05vdmVjZW50byBXaWRlQm9sZCdgO1xuICBDdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gIEN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuICBsZXQgRGF0YSA9IHt9O1xuICBsZXQgQ2hhcnMgPSBcIjAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiLnNwbGl0KFwiXCIpO1xuICBmb3IgKGxldCBDaGFyIG9mIENoYXJzKSB7XG4gICAgbGV0IFNpemUgPSBDdHgubWVhc3VyZVRleHQoQ2hhcik7XG4gICAgQ2FudmFzLmhlaWdodCA9IFNpemUuYWN0dWFsQm91bmRpbmdCb3hBc2NlbnQgKyBTaXplLmFjdHVhbEJvdW5kaW5nQm94RGVzY2VudDtcbiAgICBDYW52YXMud2lkdGggPSBTaXplLndpZHRoO1xuICAgIEN0eC5mb250ID0gYCR7c2l6ZX0gJ05vdmVjZW50byBXaWRlQm9sZCdgO1xuICAgIEN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICBDdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICBDdHguY2xlYXJSZWN0KDAsIDAsIENhbnZhcy53aWR0aCwgQ2FudmFzLmhlaWdodCk7XG4gICAgQ3R4LmZpbGxUZXh0KENoYXIsIDAsIFNpemUuYWN0dWFsQm91bmRpbmdCb3hBc2NlbnQpO1xuICAgIGxldCBJRGF0YSA9IEN0eC5nZXRJbWFnZURhdGEoMCwgMCwgQ2FudmFzLndpZHRoLCBDYW52YXMuaGVpZ2h0KTtcbiAgICBsZXQgWEZsYWdzID0gbmV3IEFycmF5KENhbnZhcy53aWR0aCkuZmlsbChmYWxzZSk7XG4gICAgbGV0IFhSYW5nZSA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgQ2FudmFzLndpZHRoOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQ2FudmFzLmhlaWdodDsgeSsrKSB7XG4gICAgICAgIGxldCBJbmRleCA9ICh5ICogQ2FudmFzLndpZHRoICsgeCkgKiA0O1xuICAgICAgICBpZiAoSURhdGEuZGF0YVtJbmRleCArIDNdID4gMCkge1xuICAgICAgICAgIFhGbGFnc1t4XSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBDYW52YXMud2lkdGg7IHgrKykge1xuICAgICAgaWYgKFhGbGFnc1t4XSAmJiBYUmFuZ2UubGVuZ3RoID09IDApIHtcbiAgICAgICAgWFJhbmdlLnB1c2goeCk7XG4gICAgICB9IGVsc2UgaWYgKFhGbGFnc1t4XSkge1xuICAgICAgICBYUmFuZ2VbMV0gPSB4O1xuICAgICAgfVxuICAgIH1cbiAgICBJRGF0YSA9IEN0eC5nZXRJbWFnZURhdGEoWFJhbmdlWzBdLCAwLCBYUmFuZ2VbMV0gLSBYUmFuZ2VbMF0gKyAxLCBDYW52YXMuaGVpZ2h0KTtcbiAgICBsZXQgTWF0cml4ID0gW107XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBJRGF0YS5oZWlnaHQ7IHkrKykge1xuICAgICAgTWF0cml4LnB1c2goW10pO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBJRGF0YS53aWR0aDsgeCsrKSB7XG4gICAgICAgIE1hdHJpeFt5XVt4XSA9IElEYXRhLmRhdGFbKHkgKiBJRGF0YS53aWR0aCArIHgpICogNCArIDNdID4gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgRGF0YVtDaGFyXSA9IE1hdHJpeDtcbiAgfVxuICByZXR1cm4gRGF0YTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=