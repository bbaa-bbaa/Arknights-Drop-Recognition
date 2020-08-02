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
    if (this.Debug) {
      for (let Rect of this.BoundData.mergedRects.Right) {
        this.ctx.strokeRect(Rect.left, Rect.top, Rect.width, Rect.height);
      }
      this.ctx.strokeStyle = "#ff0000";
      this.ctx.strokeRect(
        this.BoundData.Stage.left,
        this.BoundData.Stage.top,
        this.BoundData.Stage.width,
        this.BoundData.Stage.height
      );
    }
    this.detectStage();
    this.detectFurniture();
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
  detectFurniture() {
    let DetectType = ["LUCKY_DROP", "SPECIAL_DROP", "ALL_DROP"];
    for (let Rect of this.BoundData.Items) {
      if (DetectType.includes(Rect.type)) {
        let OtherItems = this.BoundData.Items.filter(a => a != Rect);
        let AreaDiff =
          OtherItems.reduce((a, OtherItem) => {
            return a + Math.abs(OtherItem.area - Rect.area);
          }, 0) / OtherItems.length;
        if (AreaDiff > 1000) {
          Rect.type = "LUCKY_DROP";
          Rect.AreaDiff = AreaDiff;
        } else if ((Rect.type == "LUCKY_DROP")) {
          Rect.type == "SPECIAL_DROP";
        }
      }
    }
  }
  detectItem() {
    let DetectType = ["NORMAL_DROP", "EXTRA_DROP", "SPECIAL_DROP", "ALL_DROP"];
    for (let Rect of this.BoundData.Items) {
      let Type = Rect.type;
      delete Rect.type;
      let Result = { type: Type };
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
      } else if (Type == "LUCKY_DROP") {
        let Item = new _ItemRecognition__WEBPACK_IMPORTED_MODULE_2__["default"](Rect);
        Item.ItemId = "furni";
        Item.Count = 1;
        Item.Confidence.Count = [1];

        Item.Confidence.ItemId = (ratio => {
          if (ratio > 1) {
            return 1;
          }
          let range,linear_val;
          if (ratio < 0.5) {
            range = 1.0 - 0.5;
            linear_val = ratio / (range * 2.0);
            return linear_val;
          } else {
            range = 0.5;
            linear_val = ratio / (range * 2.0);
            return linear_val + (1.0 - linear_val) * Math.pow((linear_val - 0.5) * 2, 0.2);
          }
        })(Rect.AreaDiff/2000);
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
    if (ImageData instanceof _Rectangle__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      this.Bound = Rect;
      this.Confidence = {
        ItemId: -Infinity,
        Count: []
      };
      this.ItemId = "";
      this.Count = NaN;
      return;
    }
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
    this.Count = this.getCount();
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
      return NaN;
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
      this.Confidence.Count[0] = 1;
      return NumList[0];
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
    return Number(TempCount);
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
  /**
   * 计算矩形距离
   * https://stackoverflow.com/a/26178015
   * @param {*} Rect2
   */
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
  get area(){
    return this.width * this.height;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGF0YS9Gb250LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NzaW0uanMvZGlzdC9zc2ltLndlYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYmZvbnRsb2FkZXIvd2ViZm9udGxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29ubmVjdGVkQXJlYVJlY29nbml0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9EYXRhL0ZvbnQuY3NzPzNjOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RhdGEvTm92ZWNlbnRvIFdpZGVCb2xkLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Ryb3BSZWNvZ25pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSXRlbVJlY29nbml0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWN0UmVjb2duaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RhZ2VSZWNvZ25pdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFD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QUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJEcm9wUmVjb2duaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21haW4uanNcIik7XG4iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL3NyYy9SZWN0YW5nbGVcIjtcbmltcG9ydCBEcm9wUmVjb2duaXRpb24gZnJvbSBcIi4vc3JjL0Ryb3BSZWNvZ25pdGlvblwiO1xuaW1wb3J0IFdlYkZvbnQgZnJvbSBcIndlYmZvbnRsb2FkZXJcIjtcbmxldCBGb250TG9hZGVkID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBXZWJGb250LmxvYWQoe1xuICAgIGN1c3RvbToge1xuICAgICAgZmFtaWxpZXM6IFtcIk5vdmVjZW50byBXaWRlQm9sZFwiXVxuICAgIH0sXG4gICAgYWN0aXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9KTtcbn0pO1xuZXhwb3J0IHsgRHJvcFJlY29nbml0aW9uLCBSZWN0YW5nbGUsRm9udExvYWRlZCB9O1xuZXhwb3J0IGRlZmF1bHQgRHJvcFJlY29nbml0aW9uO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9Ob3ZlY2VudG8gV2lkZUJvbGQud29mZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3ZlY2VudG8gV2lkZUJvbGRcXFwiO1xcbiAgc3JjOiAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtc3R5bGU6IGJvbGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkZvbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUNBQWlDO0VBQ2pDLDZDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEJcIixcImZpbGVcIjpcIkZvbnQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3ZlY2VudG8gV2lkZUJvbGRcXFwiO1xcbiAgc3JjOiAgdXJsKCcuL05vdmVjZW50byBXaWRlQm9sZC53b2ZmJyk7XFxuICBmb250LXN0eWxlOiBib2xkO1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuc3NpbT1lKCk6dC5zc2ltPWUoKX0od2luZG93LChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiByKGkpe2lmKGVbaV0pcmV0dXJuIGVbaV0uZXhwb3J0czt2YXIgYT1lW2ldPXtpOmksbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtpXS5jYWxsKGEuZXhwb3J0cyxhLGEuZXhwb3J0cyxyKSxhLmw9ITAsYS5leHBvcnRzfXJldHVybiByLm09dCxyLmM9ZSxyLmQ9ZnVuY3Rpb24odCxlLGkpe3Iubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDppfSl9LHIucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PXIodCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIGk9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIoaSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBhIGluIHQpci5kKGksYSxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLGEpKTtyZXR1cm4gaX0sci5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiByLmQoZSxcImFcIixlKSxlfSxyLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LHIucD1cIlwiLHIoci5zPTEwKX0oW2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKHQpe3JldHVybiBhKHQpL3QubGVuZ3RofWZ1bmN0aW9uIGEodCl7Zm9yKHZhciBlPTAscj0wO3I8dC5sZW5ndGg7cisrKWUrPXRbcl07cmV0dXJuIGV9ZnVuY3Rpb24gbih0KXtmb3IodmFyIGU9dC5kYXRhLHI9MCxpPTA7aTxlLmxlbmd0aDtpKyspcis9ZVtpXTtyZXR1cm4gcn1mdW5jdGlvbiBkKHQsZSl7Zm9yKHZhciByPXQuZGF0YSxpPXQud2lkdGgsYT10LmhlaWdodCxuPW5ldyBBcnJheShyLmxlbmd0aCksZD0wO2Q8ci5sZW5ndGg7ZCsrKW5bZF09cltkXStlO3JldHVybntkYXRhOm4sd2lkdGg6aSxoZWlnaHQ6YX19ZnVuY3Rpb24gbyh0LGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlP2Z1bmN0aW9uKHQsZSl7Zm9yKHZhciByPXQuZGF0YSxpPXQud2lkdGgsYT10LmhlaWdodCxuPW5ldyBBcnJheShyLmxlbmd0aCksZD0wO2Q8ci5sZW5ndGg7ZCsrKW5bZF09cltkXSplO3JldHVybntkYXRhOm4sd2lkdGg6aSxoZWlnaHQ6YX19KHQsZSk6ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dC5kYXRhLGk9dC53aWR0aCxhPXQuaGVpZ2h0LG49ZS5kYXRhLGQ9bmV3IEFycmF5KHIubGVuZ3RoKSxvPTA7bzxyLmxlbmd0aDtvKyspZFtvXT1yW29dKm5bb107cmV0dXJue2RhdGE6ZCx3aWR0aDppLGhlaWdodDphfX0odCxlKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmNvdmFyaWFuY2U9ZS52YXJpYW5jZT1lLm1lYW4yZD1lLnNxdWFyZTJkPWUubXVsdGlwbHkyZD1lLmRpdmlkZTJkPWUuc3VidHJhY3QyZD1lLmFkZDJkPWUuc3VtMmQ9ZS5mbG9vcj1lLnN1bT1lLmF2ZXJhZ2U9dm9pZCAwLGUuYXZlcmFnZT1pLGUuc3VtPWEsZS5mbG9vcj1mdW5jdGlvbih0KXtmb3IodmFyIGU9bmV3IEFycmF5KHQubGVuZ3RoKSxyPTA7cjx0Lmxlbmd0aDtyKyspZVtyXT1NYXRoLmZsb29yKHRbcl0pO3JldHVybiBlfSxlLnN1bTJkPW4sZS5hZGQyZD1mdW5jdGlvbih0LGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlP2QodCxlKTpmdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10LmRhdGEsaT10LndpZHRoLGE9dC5oZWlnaHQsbj1lLmRhdGEsZD1uZXcgQXJyYXkoci5sZW5ndGgpLG89MDtvPGE7bysrKWZvcih2YXIgdT1vKmksaD0wO2g8aTtoKyspZFt1K2hdPXJbdStoXStuW3UraF07cmV0dXJue2RhdGE6ZCx3aWR0aDppLGhlaWdodDphfX0odCxlKX0sZS5zdWJ0cmFjdDJkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGU/ZCh0LC1lKTpmdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10LmRhdGEsaT10LndpZHRoLGE9dC5oZWlnaHQsbj1lLmRhdGEsZD1uZXcgQXJyYXkoci5sZW5ndGgpLG89MDtvPGE7bysrKWZvcih2YXIgdT1vKmksaD0wO2g8aTtoKyspZFt1K2hdPXJbdStoXS1uW3UraF07cmV0dXJue2RhdGE6ZCx3aWR0aDppLGhlaWdodDphfX0odCxlKX0sZS5kaXZpZGUyZD1mdW5jdGlvbih0LGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlP2Z1bmN0aW9uKHQsZSl7Zm9yKHZhciByPXQuZGF0YSxpPXQud2lkdGgsYT10LmhlaWdodCxuPW5ldyBBcnJheShyLmxlbmd0aCksZD0wO2Q8ci5sZW5ndGg7ZCsrKW5bZF09cltkXS9lO3JldHVybntkYXRhOm4sd2lkdGg6aSxoZWlnaHQ6YX19KHQsZSk6ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dC5kYXRhLGk9dC53aWR0aCxhPXQuaGVpZ2h0LG49ZS5kYXRhLGQ9bmV3IEFycmF5KHIubGVuZ3RoKSxvPTA7bzxyLmxlbmd0aDtvKyspZFtvXT1yW29dL25bb107cmV0dXJue2RhdGE6ZCx3aWR0aDppLGhlaWdodDphfX0odCxlKX0sZS5tdWx0aXBseTJkPW8sZS5zcXVhcmUyZD1mdW5jdGlvbih0KXtyZXR1cm4gbyh0LHQpfSxlLm1lYW4yZD1mdW5jdGlvbih0KXtyZXR1cm4gbih0KS90LmRhdGEubGVuZ3RofSxlLnZhcmlhbmNlPWZ1bmN0aW9uKHQsZSl7dm9pZCAwPT09ZSYmKGU9aSh0KSk7Zm9yKHZhciByPTAsYT10Lmxlbmd0aDthLS07KXIrPU1hdGgucG93KHRbYV0tZSwyKTtyZXR1cm4gci90Lmxlbmd0aH0sZS5jb3ZhcmlhbmNlPWZ1bmN0aW9uKHQsZSxyLGEpe3ZvaWQgMD09PXImJihyPWkodCkpLHZvaWQgMD09PWEmJihhPWkoZSkpO2Zvcih2YXIgbj0wLGQ9dC5sZW5ndGg7ZC0tOyluKz0odFtkXS1yKSooZVtkXS1hKTtyZXR1cm4gbi90Lmxlbmd0aH19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10aGlzJiZ0aGlzLl9fY3JlYXRlQmluZGluZ3x8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24odCxlLHIsaSl7dm9pZCAwPT09aSYmKGk9ciksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZVtyXX19KX06ZnVuY3Rpb24odCxlLHIsaSl7dm9pZCAwPT09aSYmKGk9ciksdFtpXT1lW3JdfSksYT10aGlzJiZ0aGlzLl9fZXhwb3J0U3Rhcnx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gdClcImRlZmF1bHRcIj09PXJ8fGUuaGFzT3duUHJvcGVydHkocil8fGkoZSx0LHIpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxhKHIoMiksZSksYShyKDcpLGUpLGEocigxMSksZSksYShyKDEyKSxlKSxhKHIoMTMpLGUpLGEocigzKSxlKSxhKHIoOSksZSksYShyKDE0KSxlKSxhKHIoMTUpLGUpLGEocig1KSxlKSxhKHIoMTYpLGUpLGEocig2KSxlKX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuY29udjI9dm9pZCAwO3ZhciBpPXIoMCksYT1yKDMpLG49cig1KSxkPXIoNik7ZnVuY3Rpb24gbyh0LGUscil7dmFyIGk9dC5kYXRhLGE9dC53aWR0aCxuPXQuaGVpZ2h0O3ZvaWQgMD09PXImJihyPVwiZnVsbFwiKTtmb3IodmFyIG89YStlLndpZHRoLTEsdT1uK2UuaGVpZ2h0LTEsaD1kLnplcm9zKHUsbykuZGF0YSxmPTA7ZjxlLmhlaWdodDtmKyspZm9yKHZhciBzPTA7czxlLndpZHRoO3MrKyl7dmFyIHY9ZS5kYXRhW2YqZS53aWR0aCtzXTtpZih2KWZvcih2YXIgYz0wO2M8bjtjKyspZm9yKHZhciB3PTA7dzxhO3crKyloWyhjK2YpKm8rdytzXSs9aVtjKmErd10qdn1yZXR1cm4gbCh7ZGF0YTpoLHdpZHRoOm8saGVpZ2h0OnV9LHIsbixlLmhlaWdodCxhLGUud2lkdGgpfWZ1bmN0aW9uIHUodCxlLHIpe3ZhciBuPWUuZGF0YSxkPWUud2lkdGgsbz1lLmhlaWdodDt2b2lkIDA9PT1yJiYocj1cImZ1bGxcIik7dmFyIHU9Zih0LGEub25lcyhvLDEpLGEub25lcygxLGQpLHIpO3JldHVybiBpLm11bHRpcGx5MmQodSxuWzBdKX1mdW5jdGlvbiBoKHQpe2Zvcih2YXIgZT10LmRhdGEscj1lWzBdLGk9MTtpPGUubGVuZ3RoO2krKylpZihlW2ldIT09cilyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBmKHQsZSxyLGkpe3ZvaWQgMD09PWkmJihpPVwiZnVsbFwiKTt2YXIgYT1NYXRoLm1heChlLmhlaWdodCxlLndpZHRoKSxuPU1hdGgubWF4KHIuaGVpZ2h0LHIud2lkdGgpLGQ9byh0LGUsXCJmdWxsXCIpO3JldHVybiBsKG8oZCxyLFwiZnVsbFwiKSxpLHQuaGVpZ2h0LGEsdC53aWR0aCxuKX1mdW5jdGlvbiBsKHQsZSxyLGksYSxkKXtpZihcImZ1bGxcIj09PWUpcmV0dXJuIHQ7aWYoXCJzYW1lXCI9PT1lKXt2YXIgbz1NYXRoLmNlaWwoKHQuaGVpZ2h0LXIpLzIpLHU9TWF0aC5jZWlsKCh0LndpZHRoLWEpLzIpO3JldHVybiBuLnN1Yih0LG8scix1LGEpfXJldHVybiBuLnN1Yih0LGktMSxyLWkrMSxkLTEsYS1kKzEpfWUuY29udjI9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07cmV0dXJuIHRbMl0mJnRbMl0uZGF0YT9mLmFwcGx5KHZvaWQgMCx0KTpoKHRbMV0pP3UuYXBwbHkodm9pZCAwLHQpOm8uYXBwbHkodm9pZCAwLHQpfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUub25lcz12b2lkIDA7dmFyIGk9cig0KTtlLm9uZXM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dCksaS5udW1iZXJzKHQsZSwxKX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLm51bWJlcnM9dm9pZCAwLGUubnVtYmVycz1mdW5jdGlvbih0LGUscil7Zm9yKHZhciBpPWUqdCxhPW5ldyBBcnJheShpKSxuPTA7bjxpO24rKylhW25dPXI7cmV0dXJue2RhdGE6YSx3aWR0aDplLGhlaWdodDp0fX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLnN1Yj12b2lkIDAsZS5zdWI9ZnVuY3Rpb24odCxlLHIsaSxhKXtmb3IodmFyIG49dC5kYXRhLGQ9dC53aWR0aCxvPW5ldyBBcnJheShhKnIpLHU9MDt1PHI7dSsrKWZvcih2YXIgaD0wO2g8YTtoKyspb1t1KmEraF09blsoaSt1KSpkK2UraF07cmV0dXJue2RhdGE6byx3aWR0aDphLGhlaWdodDpyfX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLnplcm9zPXZvaWQgMDt2YXIgaT1yKDQpO2UuemVyb3M9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dCksaS5udW1iZXJzKHQsZSwwKX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmZpbHRlcjI9dm9pZCAwO3ZhciBpPXIoMik7ZS5maWx0ZXIyPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJzYW1lXCIpLGkuY29udjIoZSxmdW5jdGlvbih0KXtmb3IodmFyIGU9dC5kYXRhLHI9dC53aWR0aCxpPXQuaGVpZ2h0LGE9bmV3IEFycmF5KGUubGVuZ3RoKSxuPTA7bjxpO24rKylmb3IodmFyIGQ9MDtkPHI7ZCsrKWFbbipyK2RdPWVbKGktMS1uKSpyK3ItMS1kXTtyZXR1cm57ZGF0YTphLHdpZHRoOnIsaGVpZ2h0Oml9fSh0KSxyKX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLm1vZD12b2lkIDAsZS5tb2Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC1lKk1hdGguZmxvb3IodC9lKX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLnBhZGFycmF5PXZvaWQgMDt2YXIgaT1yKDgpO2Z1bmN0aW9uIGEodCxlKXtmb3IodmFyIHI9dC53aWR0aCsyKmUsYT1uZXcgQXJyYXkocip0LmhlaWdodCksbj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10LndpZHRoK2Uud2lkdGgsaT1uZXcgQXJyYXkodC5oZWlnaHQqciksYT0wO2E8dC5oZWlnaHQ7YSsrKXtmb3IodmFyIG49MDtuPHQud2lkdGg7bisrKWlbYSpyK25dPXQuZGF0YVthKnQud2lkdGgrbl07Zm9yKG49MDtuPGUud2lkdGg7bisrKWlbYSpyK24rdC53aWR0aF09ZS5kYXRhW2EqZS53aWR0aCtuXX1yZXR1cm57ZGF0YTppLHdpZHRoOnIsaGVpZ2h0OnQuaGVpZ2h0fX0odCxmdW5jdGlvbih0KXtmb3IodmFyIGU9dC5kYXRhLHI9dC53aWR0aCxpPXQuaGVpZ2h0LGE9bmV3IEFycmF5KGUubGVuZ3RoKSxuPTA7bjxpO24rKylmb3IodmFyIGQ9MDtkPHI7ZCsrKWFbbipyK2RdPWVbbipyK3ItMS1kXTtyZXR1cm57ZGF0YTphLHdpZHRoOnIsaGVpZ2h0Oml9fSh0KSksZD0wO2Q8dC5oZWlnaHQ7ZCsrKWZvcih2YXIgbz0tZTtvPHQud2lkdGgrZTtvKyspYVtkKnIrbytlXT1uLmRhdGFbZCpuLndpZHRoK2kubW9kKG8sbi53aWR0aCldO3JldHVybntkYXRhOmEsd2lkdGg6cixoZWlnaHQ6dC5oZWlnaHR9fWZ1bmN0aW9uIG4odCxlKXtmb3IodmFyIHI9ZnVuY3Rpb24odCxlKXtyZXR1cm57ZGF0YTp0LmRhdGEuY29uY2F0KGUuZGF0YSksaGVpZ2h0OnQuaGVpZ2h0K2UuaGVpZ2h0LHdpZHRoOnQud2lkdGh9fSh0LGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10LmRhdGEscj10LndpZHRoLGk9dC5oZWlnaHQsYT1uZXcgQXJyYXkoZS5sZW5ndGgpLG49MDtuPGk7bisrKWZvcih2YXIgZD0wO2Q8cjtkKyspYVtuKnIrZF09ZVsoaS0xLW4pKnIrZF07cmV0dXJue2RhdGE6YSx3aWR0aDpyLGhlaWdodDppfX0odCkpLGE9dC5oZWlnaHQrMiplLG49bmV3IEFycmF5KHQud2lkdGgqYSksZD0tZTtkPHQuaGVpZ2h0K2U7ZCsrKWZvcih2YXIgbz0wO288dC53aWR0aDtvKyspblsoZCtlKSp0LndpZHRoK29dPXIuZGF0YVtpLm1vZChkLHIuaGVpZ2h0KSp0LndpZHRoK29dO3JldHVybntkYXRhOm4sd2lkdGg6dC53aWR0aCxoZWlnaHQ6YX19ZS5wYWRhcnJheT1mdW5jdGlvbih0LGUscixpKXt2YXIgZD1lWzBdLG89ZVsxXTtyZXR1cm4gdC5oZWlnaHQ+PWQmJnQud2lkdGg+PW8/ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9ZVswXSxpPWVbMV0sYT10LndpZHRoKzIqaSxuPXQuaGVpZ2h0KzIqcixkPW5ldyBBcnJheShhKm4pLG89LXI7bzwwO28rKyl7Zm9yKHZhciB1PS1pO3U8MDt1KyspZFsobytyKSphK3UraV09dC5kYXRhWyhNYXRoLmFicyhvKS0xKSp0LndpZHRoK01hdGguYWJzKHUpLTFdO2Zvcih1PTA7dTx0LndpZHRoO3UrKylkWyhvK3IpKmErdStpXT10LmRhdGFbKE1hdGguYWJzKG8pLTEpKnQud2lkdGgrdV07Zm9yKHU9dC53aWR0aDt1PHQud2lkdGgraTt1KyspZFsobytyKSphK3UraV09dC5kYXRhWyhNYXRoLmFicyhvKS0xKSp0LndpZHRoKzIqdC53aWR0aC11LTFdfWZvcihvPTA7bzx0LmhlaWdodDtvKyspe2Zvcih1PS1pO3U8MDt1KyspZFsobytyKSphK3UraV09dC5kYXRhW28qdC53aWR0aCtNYXRoLmFicyh1KS0xXTtmb3IodT0wO3U8dC53aWR0aDt1KyspZFsobytyKSphK3UraV09dC5kYXRhW28qdC53aWR0aCt1XTtmb3IodT10LndpZHRoO3U8dC53aWR0aCtpO3UrKylkWyhvK3IpKmErdStpXT10LmRhdGFbbyp0LndpZHRoKzIqdC53aWR0aC11LTFdfWZvcihvPXQuaGVpZ2h0O288dC5oZWlnaHQrcjtvKyspe2Zvcih1PS1pO3U8MDt1KyspZFsobytyKSphK3UraV09dC5kYXRhWygyKnQuaGVpZ2h0LW8tMSkqdC53aWR0aCtNYXRoLmFicyh1KS0xXTtmb3IodT0wO3U8dC53aWR0aDt1KyspZFsobytyKSphK3UraV09dC5kYXRhWygyKnQuaGVpZ2h0LW8tMSkqdC53aWR0aCt1XTtmb3IodT10LndpZHRoO3U8dC53aWR0aCtpO3UrKylkWyhvK3IpKmErdStpXT10LmRhdGFbKDIqdC5oZWlnaHQtby0xKSp0LndpZHRoKzIqdC53aWR0aC11LTFdfXJldHVybntkYXRhOmQsd2lkdGg6YSxoZWlnaHQ6bn19KHQsW2Qsb10pOm4oYSh0LG8pLGQpfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKGk9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHI9MSxpPWFyZ3VtZW50cy5sZW5ndGg7cjxpO3IrKylmb3IodmFyIGEgaW4gZT1hcmd1bWVudHNbcl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsYSkmJih0W2FdPWVbYV0pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLnNzaW09dm9pZCAwO3ZhciBhPXIoMSksbj1yKDApLGQ9cigxNyksbz1yKDE4KSx1PXIoMTkpLGg9cigyMCksZj1yKDIxKSxsPXtmYXN0OmQuc3NpbSxvcmlnaW5hbDpvLm9yaWdpbmFsU3NpbSxiZXprcm92bnk6dS5iZXprcm92bnlTc2ltfTtmdW5jdGlvbiBzKHQpe3ZhciBlPWkoaSh7fSxmLmRlZmF1bHRzKSx0KTtyZXR1cm4gZnVuY3Rpb24odCl7aWYoT2JqZWN0LmtleXModCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7aWYoISh0IGluIGYuZGVmYXVsdHMpKXRocm93IG5ldyBFcnJvcignXCInK3QrJ1wiIGlzIG5vdCBhIHZhbGlkIG9wdGlvbicpfSkpLFwiazFcImluIHQmJihcIm51bWJlclwiIT10eXBlb2YgdC5rMXx8dC5rMTwwKSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGsxIHZhbHVlLiBEZWZhdWx0IGlzIFwiK2YuZGVmYXVsdHMuazEpO2lmKFwiazJcImluIHQmJihcIm51bWJlclwiIT10eXBlb2YgdC5rMnx8dC5rMjwwKSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGsyIHZhbHVlLiBEZWZhdWx0IGlzIFwiK2YuZGVmYXVsdHMuazIpO2lmKCEodC5zc2ltIGluIGwpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3NpbSBvcHRpb24gKHVzZTogXCIrT2JqZWN0LmtleXMobCkuam9pbihcIiwgXCIpK1wiKVwiKX0oZSksZX1mdW5jdGlvbiB2KHQsZSxyKXt2YXIgaT0obmV3IERhdGUpLmdldFRpbWUoKSxkPWZ1bmN0aW9uKHQpe3ZhciBlPXRbMF0scj10WzFdLGk9dFsyXTtyZXR1cm4gbFtpLnNzaW1dKGUscixpKX0oZnVuY3Rpb24odCl7dmFyIGU9dFswXSxyPXRbMV0saT10WzJdLGE9aC5kb3duc2FtcGxlKFtlLHJdLGkpO3JldHVyblthWzBdLGFbMV0saV19KGZ1bmN0aW9uKHQpe3ZhciBlPXRbMF0scj10WzFdLGk9dFsyXTtyZXR1cm5bYS5yZ2IyZ3JheShlKSxhLnJnYjJncmF5KHIpLGldfShmdW5jdGlvbih0KXt2YXIgZT10WzBdLHI9dFsxXSxpPXRbMl07aWYoZS53aWR0aCE9PXIud2lkdGh8fGUuaGVpZ2h0IT09ci5oZWlnaHQpdGhyb3cgbmV3IEVycm9yKFwiSW1hZ2UgZGltZW5zaW9ucyBkbyBub3QgbWF0Y2hcIik7cmV0dXJuW2UscixpXX0oW3QsZSxzKHIpXSkpKSk7cmV0dXJue3NzaW1fbWFwOmQsbXNzaW06bi5tZWFuMmQoZCkscGVyZm9ybWFuY2U6KG5ldyBEYXRlKS5nZXRUaW1lKCktaX19ZS5zc2ltPXYsZS5kZWZhdWx0PXZ9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmZzcGVjaWFsPXZvaWQgMDt2YXIgaT1yKDApO2UuZnNwZWNpYWw9ZnVuY3Rpb24odCxlLHIpe3ZvaWQgMD09PWUmJihlPTMpLHZvaWQgMD09PXImJihyPTEuNSk7dmFyIGE9ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dC5kYXRhLGk9dC53aWR0aCxhPXQuaGVpZ2h0LG49bmV3IEFycmF5KHIubGVuZ3RoKSxkPTA7ZDxyLmxlbmd0aDtkKyspbltkXT1NYXRoLmV4cCgtcltkXS8oMipNYXRoLnBvdyhlLDIpKSk7cmV0dXJue2RhdGE6bix3aWR0aDppLGhlaWdodDphfX0oZnVuY3Rpb24odCl7Zm9yKHZhciBlPTIqdCsxLHI9bmV3IEFycmF5KE1hdGgucG93KGUsMikpLGk9MDtpPGU7aSsrKWZvcih2YXIgYT0wO2E8ZTthKyspcltpKmUrYV09TWF0aC5wb3coaS10LDIpK01hdGgucG93KGEtdCwyKTtyZXR1cm57ZGF0YTpyLHdpZHRoOmUsaGVpZ2h0OmV9fShlPShlLTEpLzIpLHIpLG49aS5zdW0yZChhKTtyZXR1cm4gaS5kaXZpZGUyZChhLG4pfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuaW1maWx0ZXI9dm9pZCAwO3ZhciBpPXIoOCksYT1yKDkpLG49cigwKSxkPXIoNyk7ZS5pbWZpbHRlcj1mdW5jdGlvbih0LGUscixvKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJzeW1tZXRyaWNcIiksdm9pZCAwPT09byYmKG89XCJzYW1lXCIpLHQ9ZnVuY3Rpb24odCxlLHIsZCl7aWYodD1hLnBhZGFycmF5KHQsbi5mbG9vcihbZS8yLHIvMl0pLGQpLDA9PT1pLm1vZChlLDIpJiYodC5kYXRhPXQuZGF0YS5zbGljZSgwLC10LndpZHRoKSx0LmhlaWdodC0tKSwwPT09aS5tb2QociwyKSl7Zm9yKHZhciBvPVtdLHU9MDt1PHQuZGF0YS5sZW5ndGg7dSsrKSh1KzEpJXQud2lkdGghPTAmJm8ucHVzaCh0LmRhdGFbdV0pO3QuZGF0YT1vLHQud2lkdGgtLX1yZXR1cm4gdH0odCxlLndpZHRoLGUuaGVpZ2h0LHIpLG89ZnVuY3Rpb24odCl7cmV0dXJuXCJzYW1lXCI9PT10JiYodD1cInZhbGlkXCIpLHR9KG8pLGQuZmlsdGVyMihlLHQsbyl9fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5ub3JtcGRmPXZvaWQgMCxlLm5vcm1wZGY9ZnVuY3Rpb24odCxlLHIpe3ZhciBpPXQuZGF0YSxhPXQud2lkdGgsbj10LmhlaWdodDt2b2lkIDA9PT1lJiYoZT0wKSx2b2lkIDA9PT1yJiYocj0xKTtmb3IodmFyIGQ9bmV3IEFycmF5KGkubGVuZ3RoKSxvPTA7bzxpLmxlbmd0aDtvKyspe3ZhciB1PShpW29dLWUpL3I7ZFtvXT1NYXRoLmV4cCgtTWF0aC5wb3codSwyKS8yKS8oMi41MDY2MjgyNzQ2MzEwMDA3KnIpfXJldHVybntkYXRhOmQsd2lkdGg6YSxoZWlnaHQ6bn19fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5yZ2IyZ3JheT12b2lkIDAsZS5yZ2IyZ3JheT1mdW5jdGlvbih0KXtmb3IodmFyIGUscixpLGE9dC5kYXRhLG49dC53aWR0aCxkPXQuaGVpZ2h0LG89bmV3IEFycmF5KG4qZCksdT0wO3U8ZDt1KyspZm9yKHZhciBoPTA7aDxuO2grKyl7dmFyIGY9aCt1Km4sbD00KmY7b1tmXT0oZT1hW2xdLHI9YVtsKzFdLGk9YVtsKzJdLE1hdGgucm91bmQoLjI5ODk0KmUrLjU4NzA0KnIrLjExNDAyKmkpKX1yZXR1cm57ZGF0YTpvLHdpZHRoOm4saGVpZ2h0OmR9fX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuc2tpcDJkPXZvaWQgMCxlLnNraXAyZD1mdW5jdGlvbih0LGUscil7Zm9yKHZhciBpPWVbMF0sYT1lWzFdLG49ZVsyXSxkPXJbMF0sbz1yWzFdLHU9clsyXSxoPU1hdGguY2VpbCgodS1kKS9vKSxmPU1hdGguY2VpbCgobi1pKS9hKSxsPW5ldyBBcnJheShoKmYpLHM9MDtzPGY7cysrKWZvcih2YXIgdj0wO3Y8aDt2Kyspe3ZhciBjPWkrcyphLHc9ZCt2Km87bFtzKmgrdl09dC5kYXRhW2MqdC53aWR0aCt3XX1yZXR1cm57ZGF0YTpsLHdpZHRoOmgsaGVpZ2h0OmZ9fX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUudHJhbnNwb3NlPXZvaWQgMCxlLnRyYW5zcG9zZT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dC5kYXRhLHI9dC53aWR0aCxpPXQuaGVpZ2h0LGE9bmV3IEFycmF5KHIqaSksbj0wO248aTtuKyspZm9yKHZhciBkPTA7ZDxyO2QrKylhW2QqaStuXT1lW24qcitkXTtyZXR1cm57ZGF0YTphLGhlaWdodDpyLHdpZHRoOml9fX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuc3NpbT12b2lkIDA7dmFyIGk9cigwKSxhPXIoMSk7ZS5zc2ltPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1hLm5vcm1wZGYoZnVuY3Rpb24odCl7Zm9yKHZhciBlPU1hdGguZmxvb3IodC8yKSxyPW5ldyBBcnJheSgyKmUrMSksaT0tZTtpPD1lO2krKylyW2krZV09TWF0aC5hYnMoaSk7cmV0dXJue2RhdGE6cix3aWR0aDpyLmxlbmd0aCxoZWlnaHQ6MX19KHIud2luZG93U2l6ZSksMCwxLjUpLGQ9TWF0aC5wb3coMixyLmJpdERlcHRoKS0xLG89TWF0aC5wb3coci5rMSpkLDIpLHU9TWF0aC5wb3coci5rMipkLDIpO249aS5kaXZpZGUyZChuLGkuc3VtMmQobikpO3ZhciBoPWEudHJhbnNwb3NlKG4pLGY9YS5jb252Mih0LG4saCxcInZhbGlkXCIpLGw9YS5jb252MihlLG4saCxcInZhbGlkXCIpLHM9aS5zcXVhcmUyZChmKSx2PWkuc3F1YXJlMmQobCksYz1pLm11bHRpcGx5MmQoZixsKSx3PWkuc3F1YXJlMmQodCksZz1pLnNxdWFyZTJkKGUpLHA9aS5zdWJ0cmFjdDJkKGEuY29udjIodyxuLGgsXCJ2YWxpZFwiKSxzKSx5PWkuc3VidHJhY3QyZChhLmNvbnYyKGcsbixoLFwidmFsaWRcIiksdiksbT1pLnN1YnRyYWN0MmQoYS5jb252MihpLm11bHRpcGx5MmQodCxlKSxuLGgsXCJ2YWxpZFwiKSxjKTtyZXR1cm4gbz4wJiZ1PjA/ZnVuY3Rpb24odCxlLHIsYSxuLGQsbyx1KXt2YXIgaD1pLmFkZDJkKGkubXVsdGlwbHkyZCh0LDIpLG8pLGY9aS5hZGQyZChpLm11bHRpcGx5MmQoZSwyKSx1KSxsPWkuYWRkMmQoaS5hZGQyZChyLGEpLG8pLHM9aS5hZGQyZChpLmFkZDJkKG4sZCksdSk7cmV0dXJuIGkuZGl2aWRlMmQoaS5tdWx0aXBseTJkKGgsZiksaS5tdWx0aXBseTJkKGwscykpfShjLG0scyx2LHAseSxvLHUpOmZ1bmN0aW9uKHQsZSxyLGEsbixkKXt2YXIgbz1pLm11bHRpcGx5MmQodCwyKSx1PWkubXVsdGlwbHkyZChlLDIpLGg9aS5hZGQyZChyLGEpLGY9aS5hZGQyZChuLGQpO3JldHVybiBpLmRpdmlkZTJkKGkubXVsdGlwbHkyZChvLHUpLGkubXVsdGlwbHkyZChoLGYpKX0oYyxtLHMsdixwLHkpfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUub3JpZ2luYWxTc2ltPXZvaWQgMDt2YXIgaT1yKDApLGE9cigxKTtlLm9yaWdpbmFsU3NpbT1mdW5jdGlvbih0LGUscil7dmFyIG49YS5mc3BlY2lhbChcImdhdXNzaWFuXCIsci53aW5kb3dTaXplLDEuNSksZD1NYXRoLnBvdygyLHIuYml0RGVwdGgpLTEsbz1NYXRoLnBvdyhyLmsxKmQsMiksdT1NYXRoLnBvdyhyLmsyKmQsMik7bj1pLmRpdmlkZTJkKG4saS5zdW0yZChuKSk7dmFyIGg9YS5maWx0ZXIyKG4sdCxcInZhbGlkXCIpLGY9YS5maWx0ZXIyKG4sZSxcInZhbGlkXCIpLGw9aS5zcXVhcmUyZChoKSxzPWkuc3F1YXJlMmQoZiksdj1pLm11bHRpcGx5MmQoaCxmKSxjPWkuc3F1YXJlMmQodCksdz1pLnNxdWFyZTJkKGUpLGc9aS5zdWJ0cmFjdDJkKGEuZmlsdGVyMihuLGMsXCJ2YWxpZFwiKSxsKSxwPWkuc3VidHJhY3QyZChhLmZpbHRlcjIobix3LFwidmFsaWRcIikscykseT1pLnN1YnRyYWN0MmQoYS5maWx0ZXIyKG4saS5tdWx0aXBseTJkKHQsZSksXCJ2YWxpZFwiKSx2KTtpZihvPjAmJnU+MCl7dmFyIG09aS5hZGQyZChpLm11bHRpcGx5MmQodiwyKSxvKSxiPWkuYWRkMmQoaS5tdWx0aXBseTJkKHksMiksdSksTT1pLmFkZDJkKGkuYWRkMmQobCxzKSxvKSxfPWkuYWRkMmQoaS5hZGQyZChnLHApLHUpO3JldHVybiBpLmRpdmlkZTJkKGkubXVsdGlwbHkyZChtLGIpLGkubXVsdGlwbHkyZChNLF8pKX12YXIgaj1pLm11bHRpcGx5MmQodiwyKSxPPWkubXVsdGlwbHkyZCh5LDIpLFA9aS5hZGQyZChsLHMpLGs9aS5hZGQyZChnLHApO3JldHVybiBpLmRpdmlkZTJkKGkubXVsdGlwbHkyZChqLE8pLGkubXVsdGlwbHkyZChQLGspKX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmJlemtyb3ZueVNzaW09dm9pZCAwO3ZhciBpPXIoMCksYT1yKDEpO2Z1bmN0aW9uIG4odCxlLHIpe3ZhciBhPXQuZGF0YSxuPWUuZGF0YSxkPXIuYml0RGVwdGgsbz1yLmsxLHU9ci5rMixoPU1hdGgucG93KDIsZCktMSxmPU1hdGgucG93KG8qaCwyKSxsPU1hdGgucG93KHUqaCwyKSxzPWkuYXZlcmFnZShhKSx2PWkuYXZlcmFnZShuKSxjPWkudmFyaWFuY2UoYSxzKSx3PWkudmFyaWFuY2Uobix2KTtyZXR1cm4oMipzKnYrZikqKDIqaS5jb3ZhcmlhbmNlKGEsbixzLHYpK2wpLygoTWF0aC5wb3cocywyKStNYXRoLnBvdyh2LDIpK2YpKihjK3crbCkpfWUuYmV6a3Jvdm55U3NpbT1mdW5jdGlvbih0LGUscil7Zm9yKHZhciBpPXIud2luZG93U2l6ZSxkPU1hdGguY2VpbCh0LndpZHRoL2kpLG89TWF0aC5jZWlsKHQuaGVpZ2h0L2kpLHU9bmV3IEFycmF5KGQqbyksaD0wLGY9MDtmPHQuaGVpZ2h0O2YrPWkpZm9yKHZhciBsPTA7bDx0LndpZHRoO2wrPWkpe3ZhciBzPU1hdGgubWluKGksdC53aWR0aC1sKSx2PU1hdGgubWluKGksdC5oZWlnaHQtZiksYz1hLnN1Yih0LGwsdixmLHMpLHc9YS5zdWIoZSxsLHYsZixzKTt1W2grK109bihjLHcscil9cmV0dXJue2RhdGE6dSx3aWR0aDpkLGhlaWdodDpvfX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmRvd25zYW1wbGU9dm9pZCAwO3ZhciBpPXIoMCksYT1yKDEpO2Z1bmN0aW9uIG4odCxlLHIpe3ZhciBpPWEuaW1maWx0ZXIodCxlLFwic3ltbWV0cmljXCIsXCJzYW1lXCIpO3JldHVybiBhLnNraXAyZChpLFswLHIsaS5oZWlnaHRdLFswLHIsaS53aWR0aF0pfWUuZG93bnNhbXBsZT1mdW5jdGlvbih0LGUpe3JldHVyblwib3JpZ2luYWxcIj09PWUuZG93bnNhbXBsZT9mdW5jdGlvbih0LGUscil7dm9pZCAwPT09ciYmKHI9MjU2KTt2YXIgZD1NYXRoLm1pbih0LndpZHRoLGUuaGVpZ2h0KS9yLG89TWF0aC5yb3VuZChkKTtpZihvPjEpe3ZhciB1PWEub25lcyhvKTt0PW4odCx1PWkuZGl2aWRlMmQodSxpLnN1bTJkKHUpKSxvKSxlPW4oZSx1LG8pfXJldHVyblt0LGVdfSh0WzBdLHRbMV0sZS5tYXhTaXplKTp0fX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuZGVmYXVsdHM9dm9pZCAwLGUuZGVmYXVsdHM9e3dpbmRvd1NpemU6MTEsazE6LjAxLGsyOi4wMyxiaXREZXB0aDo4LGRvd25zYW1wbGU6XCJvcmlnaW5hbFwiLHNzaW06XCJmYXN0XCIsbWF4U2l6ZToyNTZ9fV0pfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3NpbS53ZWIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyogV2ViIEZvbnQgTG9hZGVyIHYxLjYuMjggLSAoYykgQWRvYmUgU3lzdGVtcywgR29vZ2xlLiBMaWNlbnNlOiBBcGFjaGUgMi4wICovKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYWEoYSxiLGMpe3JldHVybiBhLmNhbGwuYXBwbHkoYS5iaW5kLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYmEoYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShjLGQpO3JldHVybiBhLmFwcGx5KGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gcChhLGIsYyl7cD1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmLTEhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLnRvU3RyaW5nKCkuaW5kZXhPZihcIm5hdGl2ZSBjb2RlXCIpP2FhOmJhO3JldHVybiBwLmFwcGx5KG51bGwsYXJndW1lbnRzKX12YXIgcT1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9O2Z1bmN0aW9uIGNhKGEsYil7dGhpcy5hPWE7dGhpcy5vPWJ8fGE7dGhpcy5jPXRoaXMuby5kb2N1bWVudH12YXIgZGE9ISF3aW5kb3cuRm9udEZhY2U7ZnVuY3Rpb24gdChhLGIsYyxkKXtiPWEuYy5jcmVhdGVFbGVtZW50KGIpO2lmKGMpZm9yKHZhciBlIGluIGMpYy5oYXNPd25Qcm9wZXJ0eShlKSYmKFwic3R5bGVcIj09ZT9iLnN0eWxlLmNzc1RleHQ9Y1tlXTpiLnNldEF0dHJpYnV0ZShlLGNbZV0pKTtkJiZiLmFwcGVuZENoaWxkKGEuYy5jcmVhdGVUZXh0Tm9kZShkKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gdShhLGIsYyl7YT1hLmMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYilbMF07YXx8KGE9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTthLmluc2VydEJlZm9yZShjLGEubGFzdENoaWxkKX1mdW5jdGlvbiB2KGEpe2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpfVxuZnVuY3Rpb24gdyhhLGIsYyl7Yj1ifHxbXTtjPWN8fFtdO2Zvcih2YXIgZD1hLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLGU9MDtlPGIubGVuZ3RoO2UrPTEpe2Zvcih2YXIgZj0hMSxnPTA7ZzxkLmxlbmd0aDtnKz0xKWlmKGJbZV09PT1kW2ddKXtmPSEwO2JyZWFrfWZ8fGQucHVzaChiW2VdKX1iPVtdO2ZvcihlPTA7ZTxkLmxlbmd0aDtlKz0xKXtmPSExO2ZvcihnPTA7ZzxjLmxlbmd0aDtnKz0xKWlmKGRbZV09PT1jW2ddKXtmPSEwO2JyZWFrfWZ8fGIucHVzaChkW2VdKX1hLmNsYXNzTmFtZT1iLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpfWZ1bmN0aW9uIHkoYSxiKXtmb3IodmFyIGM9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWlmKGNbZF09PWIpcmV0dXJuITA7cmV0dXJuITF9XG5mdW5jdGlvbiBlYShhKXtyZXR1cm4gYS5vLmxvY2F0aW9uLmhvc3RuYW1lfHxhLmEubG9jYXRpb24uaG9zdG5hbWV9ZnVuY3Rpb24geihhLGIsYyl7ZnVuY3Rpb24gZCgpe20mJmUmJmYmJihtKGcpLG09bnVsbCl9Yj10KGEsXCJsaW5rXCIse3JlbDpcInN0eWxlc2hlZXRcIixocmVmOmIsbWVkaWE6XCJhbGxcIn0pO3ZhciBlPSExLGY9ITAsZz1udWxsLG09Y3x8bnVsbDtkYT8oYi5vbmxvYWQ9ZnVuY3Rpb24oKXtlPSEwO2QoKX0sYi5vbmVycm9yPWZ1bmN0aW9uKCl7ZT0hMDtnPUVycm9yKFwiU3R5bGVzaGVldCBmYWlsZWQgdG8gbG9hZFwiKTtkKCl9KTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZT0hMDtkKCl9LDApO3UoYSxcImhlYWRcIixiKX1cbmZ1bmN0aW9uIEEoYSxiLGMsZCl7dmFyIGU9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtpZihlKXt2YXIgZj10KGEsXCJzY3JpcHRcIix7c3JjOmJ9KSxnPSExO2Yub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Z3x8dGhpcy5yZWFkeVN0YXRlJiZcImxvYWRlZFwiIT10aGlzLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9dGhpcy5yZWFkeVN0YXRlfHwoZz0hMCxjJiZjKG51bGwpLGYub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJIRUFEXCI9PWYucGFyZW50Tm9kZS50YWdOYW1lJiZlLnJlbW92ZUNoaWxkKGYpKX07ZS5hcHBlbmRDaGlsZChmKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z3x8KGc9ITAsYyYmYyhFcnJvcihcIlNjcmlwdCBsb2FkIHRpbWVvdXRcIikpKX0sZHx8NUUzKTtyZXR1cm4gZn1yZXR1cm4gbnVsbH07ZnVuY3Rpb24gQigpe3RoaXMuYT0wO3RoaXMuYz1udWxsfWZ1bmN0aW9uIEMoYSl7YS5hKys7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hLS07RChhKX19ZnVuY3Rpb24gRShhLGIpe2EuYz1iO0QoYSl9ZnVuY3Rpb24gRChhKXswPT1hLmEmJmEuYyYmKGEuYygpLGEuYz1udWxsKX07ZnVuY3Rpb24gRihhKXt0aGlzLmE9YXx8XCItXCJ9Ri5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYi5wdXNoKGFyZ3VtZW50c1tjXS5yZXBsYWNlKC9bXFxXX10rL2csXCJcIikudG9Mb3dlckNhc2UoKSk7cmV0dXJuIGIuam9pbih0aGlzLmEpfTtmdW5jdGlvbiBHKGEsYil7dGhpcy5jPWE7dGhpcy5mPTQ7dGhpcy5hPVwiblwiO3ZhciBjPShifHxcIm40XCIpLm1hdGNoKC9eKFtuaW9dKShbMS05XSkkL2kpO2MmJih0aGlzLmE9Y1sxXSx0aGlzLmY9cGFyc2VJbnQoY1syXSwxMCkpfWZ1bmN0aW9uIGZhKGEpe3JldHVybiBIKGEpK1wiIFwiKyhhLmYrXCIwMFwiKStcIiAzMDBweCBcIitJKGEuYyl9ZnVuY3Rpb24gSShhKXt2YXIgYj1bXTthPWEuc3BsaXQoLyxcXHMqLyk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10ucmVwbGFjZSgvWydcIl0vZyxcIlwiKTstMSE9ZC5pbmRleE9mKFwiIFwiKXx8L15cXGQvLnRlc3QoZCk/Yi5wdXNoKFwiJ1wiK2QrXCInXCIpOmIucHVzaChkKX1yZXR1cm4gYi5qb2luKFwiLFwiKX1mdW5jdGlvbiBKKGEpe3JldHVybiBhLmErYS5mfWZ1bmN0aW9uIEgoYSl7dmFyIGI9XCJub3JtYWxcIjtcIm9cIj09PWEuYT9iPVwib2JsaXF1ZVwiOlwiaVwiPT09YS5hJiYoYj1cIml0YWxpY1wiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGdhKGEpe3ZhciBiPTQsYz1cIm5cIixkPW51bGw7YSYmKChkPWEubWF0Y2goLyhub3JtYWx8b2JsaXF1ZXxpdGFsaWMpL2kpKSYmZFsxXSYmKGM9ZFsxXS5zdWJzdHIoMCwxKS50b0xvd2VyQ2FzZSgpKSwoZD1hLm1hdGNoKC8oWzEtOV0wMHxub3JtYWx8Ym9sZCkvaSkpJiZkWzFdJiYoL2JvbGQvaS50ZXN0KGRbMV0pP2I9NzovWzEtOV0wMC8udGVzdChkWzFdKSYmKGI9cGFyc2VJbnQoZFsxXS5zdWJzdHIoMCwxKSwxMCkpKSk7cmV0dXJuIGMrYn07ZnVuY3Rpb24gaGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9YS5vLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt0aGlzLmg9Yjt0aGlzLmE9bmV3IEYoXCItXCIpO3RoaXMuaj0hMSE9PWIuZXZlbnRzO3RoaXMuZz0hMSE9PWIuY2xhc3Nlc31mdW5jdGlvbiBpYShhKXthLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXSk7SyhhLFwibG9hZGluZ1wiKX1mdW5jdGlvbiBMKGEpe2lmKGEuZyl7dmFyIGI9eShhLmYsYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpKSxjPVtdLGQ9W2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildO2J8fGMucHVzaChhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKSk7dyhhLmYsYyxkKX1LKGEsXCJpbmFjdGl2ZVwiKX1mdW5jdGlvbiBLKGEsYixjKXtpZihhLmomJmEuaFtiXSlpZihjKWEuaFtiXShjLmMsSihjKSk7ZWxzZSBhLmhbYl0oKX07ZnVuY3Rpb24gamEoKXt0aGlzLmM9e319ZnVuY3Rpb24ga2EoYSxiLGMpe3ZhciBkPVtdLGU7Zm9yKGUgaW4gYilpZihiLmhhc093blByb3BlcnR5KGUpKXt2YXIgZj1hLmNbZV07ZiYmZC5wdXNoKGYoYltlXSxjKSl9cmV0dXJuIGR9O2Z1bmN0aW9uIE0oYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9dCh0aGlzLmMsXCJzcGFuXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn0sdGhpcy5mKX1mdW5jdGlvbiBOKGEpe3UoYS5jLFwiYm9keVwiLGEuYSl9ZnVuY3Rpb24gTyhhKXtyZXR1cm5cImRpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7bGVmdDotOTk5OXB4O2ZvbnQtc2l6ZTozMDBweDt3aWR0aDphdXRvO2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0Om5vcm1hbDttYXJnaW46MDtwYWRkaW5nOjA7Zm9udC12YXJpYW50Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6XCIrSShhLmMpK1wiO1wiKyhcImZvbnQtc3R5bGU6XCIrSChhKStcIjtmb250LXdlaWdodDpcIisoYS5mK1wiMDBcIikrXCI7XCIpfTtmdW5jdGlvbiBQKGEsYixjLGQsZSxmKXt0aGlzLmc9YTt0aGlzLmo9Yjt0aGlzLmE9ZDt0aGlzLmM9Yzt0aGlzLmY9ZXx8M0UzO3RoaXMuaD1mfHx2b2lkIDB9UC5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmMuby5kb2N1bWVudCxiPXRoaXMsYz1xKCksZD1uZXcgUHJvbWlzZShmdW5jdGlvbihkLGUpe2Z1bmN0aW9uIGYoKXtxKCktYz49Yi5mP2UoKTphLmZvbnRzLmxvYWQoZmEoYi5hKSxiLmgpLnRoZW4oZnVuY3Rpb24oYSl7MTw9YS5sZW5ndGg/ZCgpOnNldFRpbWVvdXQoZiwyNSl9LGZ1bmN0aW9uKCl7ZSgpfSl9ZigpfSksZT1udWxsLGY9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxkKXtlPXNldFRpbWVvdXQoZCxiLmYpfSk7UHJvbWlzZS5yYWNlKFtmLGRdKS50aGVuKGZ1bmN0aW9uKCl7ZSYmKGNsZWFyVGltZW91dChlKSxlPW51bGwpO2IuZyhiLmEpfSxmdW5jdGlvbigpe2IuaihiLmEpfSl9O2Z1bmN0aW9uIFEoYSxiLGMsZCxlLGYsZyl7dGhpcy52PWE7dGhpcy5CPWI7dGhpcy5jPWM7dGhpcy5hPWQ7dGhpcy5zPWd8fFwiQkVTYnN3eVwiO3RoaXMuZj17fTt0aGlzLnc9ZXx8M0UzO3RoaXMudT1mfHxudWxsO3RoaXMubT10aGlzLmo9dGhpcy5oPXRoaXMuZz1udWxsO3RoaXMuZz1uZXcgTSh0aGlzLmMsdGhpcy5zKTt0aGlzLmg9bmV3IE0odGhpcy5jLHRoaXMucyk7dGhpcy5qPW5ldyBNKHRoaXMuYyx0aGlzLnMpO3RoaXMubT1uZXcgTSh0aGlzLmMsdGhpcy5zKTthPW5ldyBHKHRoaXMuYS5jK1wiLHNlcmlmXCIsSih0aGlzLmEpKTthPU8oYSk7dGhpcy5nLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEcodGhpcy5hLmMrXCIsc2Fucy1zZXJpZlwiLEoodGhpcy5hKSk7YT1PKGEpO3RoaXMuaC5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBHKFwic2VyaWZcIixKKHRoaXMuYSkpO2E9TyhhKTt0aGlzLmouYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgRyhcInNhbnMtc2VyaWZcIixKKHRoaXMuYSkpO2E9XG5PKGEpO3RoaXMubS5hLnN0eWxlLmNzc1RleHQ9YTtOKHRoaXMuZyk7Tih0aGlzLmgpO04odGhpcy5qKTtOKHRoaXMubSl9dmFyIFI9e0Q6XCJzZXJpZlwiLEM6XCJzYW5zLXNlcmlmXCJ9LFM9bnVsbDtmdW5jdGlvbiBUKCl7aWYobnVsbD09PVMpe3ZhciBhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtTPSEhYSYmKDUzNj5wYXJzZUludChhWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYVsxXSwxMCkmJjExPj1wYXJzZUludChhWzJdLDEwKSl9cmV0dXJuIFN9US5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLmYuc2VyaWY9dGhpcy5qLmEub2Zmc2V0V2lkdGg7dGhpcy5mW1wic2Fucy1zZXJpZlwiXT10aGlzLm0uYS5vZmZzZXRXaWR0aDt0aGlzLkE9cSgpO1UodGhpcyl9O1xuZnVuY3Rpb24gbGEoYSxiLGMpe2Zvcih2YXIgZCBpbiBSKWlmKFIuaGFzT3duUHJvcGVydHkoZCkmJmI9PT1hLmZbUltkXV0mJmM9PT1hLmZbUltkXV0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gVShhKXt2YXIgYj1hLmcuYS5vZmZzZXRXaWR0aCxjPWEuaC5hLm9mZnNldFdpZHRoLGQ7KGQ9Yj09PWEuZi5zZXJpZiYmYz09PWEuZltcInNhbnMtc2VyaWZcIl0pfHwoZD1UKCkmJmxhKGEsYixjKSk7ZD9xKCktYS5BPj1hLnc/VCgpJiZsYShhLGIsYykmJihudWxsPT09YS51fHxhLnUuaGFzT3duUHJvcGVydHkoYS5hLmMpKT9WKGEsYS52KTpWKGEsYS5CKTptYShhKTpWKGEsYS52KX1mdW5jdGlvbiBtYShhKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXtVKHRoaXMpfSxhKSw1MCl9ZnVuY3Rpb24gVihhLGIpe3NldFRpbWVvdXQocChmdW5jdGlvbigpe3YodGhpcy5nLmEpO3YodGhpcy5oLmEpO3YodGhpcy5qLmEpO3YodGhpcy5tLmEpO2IodGhpcy5hKX0sYSksMCl9O2Z1bmN0aW9uIFcoYSxiLGMpe3RoaXMuYz1hO3RoaXMuYT1iO3RoaXMuZj0wO3RoaXMubT10aGlzLmo9ITE7dGhpcy5zPWN9dmFyIFg9bnVsbDtXLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtiLmcmJncoYi5mLFtiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKV0sW2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKSxiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpXSk7SyhiLFwiZm9udGFjdGl2ZVwiLGEpO3RoaXMubT0hMDtuYSh0aGlzKX07XG5XLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtpZihiLmcpe3ZhciBjPXkoYi5mLGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpKSxkPVtdLGU9W2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKV07Y3x8ZC5wdXNoKGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIikpO3coYi5mLGQsZSl9SyhiLFwiZm9udGluYWN0aXZlXCIsYSk7bmEodGhpcyl9O2Z1bmN0aW9uIG5hKGEpezA9PS0tYS5mJiZhLmomJihhLm0/KGE9YS5hLGEuZyYmdyhhLmYsW2EuYS5jKFwid2ZcIixcImFjdGl2ZVwiKV0sW2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIiksYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIildKSxLKGEsXCJhY3RpdmVcIikpOkwoYS5hKSl9O2Z1bmN0aW9uIG9hKGEpe3RoaXMuaj1hO3RoaXMuYT1uZXcgamE7dGhpcy5oPTA7dGhpcy5mPXRoaXMuZz0hMH1vYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt0aGlzLmM9bmV3IGNhKHRoaXMuaixhLmNvbnRleHR8fHRoaXMuaik7dGhpcy5nPSExIT09YS5ldmVudHM7dGhpcy5mPSExIT09YS5jbGFzc2VzO3BhKHRoaXMsbmV3IGhhKHRoaXMuYyxhKSxhKX07XG5mdW5jdGlvbiBxYShhLGIsYyxkLGUpe3ZhciBmPTA9PS0tYS5oOyhhLmZ8fGEuZykmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYT1lfHxudWxsLG09ZHx8bnVsbHx8e307aWYoMD09PWMubGVuZ3RoJiZmKUwoYi5hKTtlbHNle2IuZis9Yy5sZW5ndGg7ZiYmKGIuaj1mKTt2YXIgaCxsPVtdO2ZvcihoPTA7aDxjLmxlbmd0aDtoKyspe3ZhciBrPWNbaF0sbj1tW2suY10scj1iLmEseD1rO3IuZyYmdyhyLmYsW3IuYS5jKFwid2ZcIix4LmMsSih4KS50b1N0cmluZygpLFwibG9hZGluZ1wiKV0pO0socixcImZvbnRsb2FkaW5nXCIseCk7cj1udWxsO2lmKG51bGw9PT1YKWlmKHdpbmRvdy5Gb250RmFjZSl7dmFyIHg9L0dlY2tvLipGaXJlZm94XFwvKFxcZCspLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSx4YT0vT1MgWC4qVmVyc2lvblxcLzEwXFwuLipTYWZhcmkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGUvLmV4ZWMod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpO1xuWD14PzQyPHBhcnNlSW50KHhbMV0sMTApOnhhPyExOiEwfWVsc2UgWD0hMTtYP3I9bmV3IFAocChiLmcsYikscChiLmgsYiksYi5jLGssYi5zLG4pOnI9bmV3IFEocChiLmcsYikscChiLmgsYiksYi5jLGssYi5zLGEsbik7bC5wdXNoKHIpfWZvcihoPTA7aDxsLmxlbmd0aDtoKyspbFtoXS5zdGFydCgpfX0sMCl9ZnVuY3Rpb24gcGEoYSxiLGMpe3ZhciBkPVtdLGU9Yy50aW1lb3V0O2lhKGIpO3ZhciBkPWthKGEuYSxjLGEuYyksZj1uZXcgVyhhLmMsYixlKTthLmg9ZC5sZW5ndGg7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspZFtiXS5sb2FkKGZ1bmN0aW9uKGIsZCxjKXtxYShhLGYsYixkLGMpfSl9O2Z1bmN0aW9uIHJhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9XG5yYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7aWYoZltcIl9fbXRpX2ZudExzdFwiK2RdKXt2YXIgYz1mW1wiX19tdGlfZm50THN0XCIrZF0oKSxlPVtdLGg7aWYoYylmb3IodmFyIGw9MDtsPGMubGVuZ3RoO2wrKyl7dmFyIGs9Y1tsXS5mb250ZmFtaWx5O3ZvaWQgMCE9Y1tsXS5mb250U3R5bGUmJnZvaWQgMCE9Y1tsXS5mb250V2VpZ2h0PyhoPWNbbF0uZm9udFN0eWxlK2NbbF0uZm9udFdlaWdodCxlLnB1c2gobmV3IEcoayxoKSkpOmUucHVzaChuZXcgRyhrKSl9YShlKX1lbHNlIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKCl9LDUwKX12YXIgYz10aGlzLGQ9Yy5hLnByb2plY3RJZCxlPWMuYS52ZXJzaW9uO2lmKGQpe3ZhciBmPWMuYy5vO0EodGhpcy5jLChjLmEuYXBpfHxcImh0dHBzOi8vZmFzdC5mb250cy5uZXQvanNhcGlcIikrXCIvXCIrZCtcIi5qc1wiKyhlP1wiP3Y9XCIrZTpcIlwiKSxmdW5jdGlvbihlKXtlP2EoW10pOihmW1wiX19Nb25vdHlwZUNvbmZpZ3VyYXRpb25fX1wiK1xuZF09ZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSxiKCkpfSkuaWQ9XCJfX01vbm90eXBlQVBJU2NyaXB0X19cIitkfWVsc2UgYShbXSl9O2Z1bmN0aW9uIHNhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9c2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMuYS51cmxzfHxbXSxlPXRoaXMuYS5mYW1pbGllc3x8W10sZj10aGlzLmEudGVzdFN0cmluZ3N8fHt9LGc9bmV3IEI7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspeih0aGlzLmMsZFtiXSxDKGcpKTt2YXIgbT1bXTtiPTA7Zm9yKGM9ZS5sZW5ndGg7YjxjO2IrKylpZihkPWVbYl0uc3BsaXQoXCI6XCIpLGRbMV0pZm9yKHZhciBoPWRbMV0uc3BsaXQoXCIsXCIpLGw9MDtsPGgubGVuZ3RoO2wrPTEpbS5wdXNoKG5ldyBHKGRbMF0saFtsXSkpO2Vsc2UgbS5wdXNoKG5ldyBHKGRbMF0pKTtFKGcsZnVuY3Rpb24oKXthKG0sZil9KX07ZnVuY3Rpb24gdGEoYSxiKXthP3RoaXMuYz1hOnRoaXMuYz11YTt0aGlzLmE9W107dGhpcy5mPVtdO3RoaXMuZz1ifHxcIlwifXZhciB1YT1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzXCI7ZnVuY3Rpb24gdmEoYSxiKXtmb3IodmFyIGM9Yi5sZW5ndGgsZD0wO2Q8YztkKyspe3ZhciBlPWJbZF0uc3BsaXQoXCI6XCIpOzM9PWUubGVuZ3RoJiZhLmYucHVzaChlLnBvcCgpKTt2YXIgZj1cIlwiOzI9PWUubGVuZ3RoJiZcIlwiIT1lWzFdJiYoZj1cIjpcIik7YS5hLnB1c2goZS5qb2luKGYpKX19XG5mdW5jdGlvbiB3YShhKXtpZigwPT1hLmEubGVuZ3RoKXRocm93IEVycm9yKFwiTm8gZm9udHMgdG8gbG9hZCFcIik7aWYoLTEhPWEuYy5pbmRleE9mKFwia2l0PVwiKSlyZXR1cm4gYS5jO2Zvcih2YXIgYj1hLmEubGVuZ3RoLGM9W10sZD0wO2Q8YjtkKyspYy5wdXNoKGEuYVtkXS5yZXBsYWNlKC8gL2csXCIrXCIpKTtiPWEuYytcIj9mYW1pbHk9XCIrYy5qb2luKFwiJTdDXCIpOzA8YS5mLmxlbmd0aCYmKGIrPVwiJnN1YnNldD1cIithLmYuam9pbihcIixcIikpOzA8YS5nLmxlbmd0aCYmKGIrPVwiJnRleHQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEuZykpO3JldHVybiBifTtmdW5jdGlvbiB5YShhKXt0aGlzLmY9YTt0aGlzLmE9W107dGhpcy5jPXt9fVxudmFyIHphPXtsYXRpbjpcIkJFU2Jzd3lcIixcImxhdGluLWV4dFwiOlwiXFx1MDBlN1xcdTAwZjZcXHUwMGZjXFx1MDExZlxcdTAxNWZcIixjeXJpbGxpYzpcIlxcdTA0MzlcXHUwNDRmXFx1MDQxNlwiLGdyZWVrOlwiXFx1MDNiMVxcdTAzYjJcXHUwM2EzXCIsa2htZXI6XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIixIYW51bWFuOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCJ9LEFhPXt0aGluOlwiMVwiLGV4dHJhbGlnaHQ6XCIyXCIsXCJleHRyYS1saWdodFwiOlwiMlwiLHVsdHJhbGlnaHQ6XCIyXCIsXCJ1bHRyYS1saWdodFwiOlwiMlwiLGxpZ2h0OlwiM1wiLHJlZ3VsYXI6XCI0XCIsYm9vazpcIjRcIixtZWRpdW06XCI1XCIsXCJzZW1pLWJvbGRcIjpcIjZcIixzZW1pYm9sZDpcIjZcIixcImRlbWktYm9sZFwiOlwiNlwiLGRlbWlib2xkOlwiNlwiLGJvbGQ6XCI3XCIsXCJleHRyYS1ib2xkXCI6XCI4XCIsZXh0cmFib2xkOlwiOFwiLFwidWx0cmEtYm9sZFwiOlwiOFwiLHVsdHJhYm9sZDpcIjhcIixibGFjazpcIjlcIixoZWF2eTpcIjlcIixsOlwiM1wiLHI6XCI0XCIsYjpcIjdcIn0sQmE9e2k6XCJpXCIsaXRhbGljOlwiaVwiLG46XCJuXCIsbm9ybWFsOlwiblwifSxcbkNhPS9eKHRoaW58KD86KD86ZXh0cmF8dWx0cmEpLT8pP2xpZ2h0fHJlZ3VsYXJ8Ym9va3xtZWRpdW18KD86KD86c2VtaXxkZW1pfGV4dHJhfHVsdHJhKS0/KT9ib2xkfGJsYWNrfGhlYXZ5fGx8cnxifFsxLTldMDApPyhufGl8bm9ybWFsfGl0YWxpYyk/JC87XG5mdW5jdGlvbiBEYShhKXtmb3IodmFyIGI9YS5mLmxlbmd0aCxjPTA7YzxiO2MrKyl7dmFyIGQ9YS5mW2NdLnNwbGl0KFwiOlwiKSxlPWRbMF0ucmVwbGFjZSgvXFwrL2csXCIgXCIpLGY9W1wibjRcIl07aWYoMjw9ZC5sZW5ndGgpe3ZhciBnO3ZhciBtPWRbMV07Zz1bXTtpZihtKWZvcih2YXIgbT1tLnNwbGl0KFwiLFwiKSxoPW0ubGVuZ3RoLGw9MDtsPGg7bCsrKXt2YXIgaztrPW1bbF07aWYoay5tYXRjaCgvXltcXHctXSskLykpe3ZhciBuPUNhLmV4ZWMoay50b0xvd2VyQ2FzZSgpKTtpZihudWxsPT1uKWs9XCJcIjtlbHNle2s9blsyXTtrPW51bGw9PWt8fFwiXCI9PWs/XCJuXCI6QmFba107bj1uWzFdO2lmKG51bGw9PW58fFwiXCI9PW4pbj1cIjRcIjtlbHNlIHZhciByPUFhW25dLG49cj9yOmlzTmFOKG4pP1wiNFwiOm4uc3Vic3RyKDAsMSk7az1bayxuXS5qb2luKFwiXCIpfX1lbHNlIGs9XCJcIjtrJiZnLnB1c2goayl9MDxnLmxlbmd0aCYmKGY9Zyk7Mz09ZC5sZW5ndGgmJihkPWRbMl0sZz1bXSxkPWQ/ZC5zcGxpdChcIixcIik6XG5nLDA8ZC5sZW5ndGgmJihkPXphW2RbMF1dKSYmKGEuY1tlXT1kKSl9YS5jW2VdfHwoZD16YVtlXSkmJihhLmNbZV09ZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrPTEpYS5hLnB1c2gobmV3IEcoZSxmW2RdKSl9fTtmdW5jdGlvbiBFYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXZhciBGYT17QXJpbW86ITAsQ291c2luZTohMCxUaW5vczohMH07RWEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IEIsYz10aGlzLmMsZD1uZXcgdGEodGhpcy5hLmFwaSx0aGlzLmEudGV4dCksZT10aGlzLmEuZmFtaWxpZXM7dmEoZCxlKTt2YXIgZj1uZXcgeWEoZSk7RGEoZik7eihjLHdhKGQpLEMoYikpO0UoYixmdW5jdGlvbigpe2EoZi5hLGYuYyxGYSl9KX07ZnVuY3Rpb24gR2EoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn1HYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEuaWQsYz10aGlzLmMubztiP0EodGhpcy5jLCh0aGlzLmEuYXBpfHxcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0XCIpK1wiL1wiK2IrXCIuanNcIixmdW5jdGlvbihiKXtpZihiKWEoW10pO2Vsc2UgaWYoYy5UeXBla2l0JiZjLlR5cGVraXQuY29uZmlnJiZjLlR5cGVraXQuY29uZmlnLmZuKXtiPWMuVHlwZWtpdC5jb25maWcuZm47Zm9yKHZhciBlPVtdLGY9MDtmPGIubGVuZ3RoO2YrPTIpZm9yKHZhciBnPWJbZl0sbT1iW2YrMV0saD0wO2g8bS5sZW5ndGg7aCsrKWUucHVzaChuZXcgRyhnLG1baF0pKTt0cnl7Yy5UeXBla2l0LmxvYWQoe2V2ZW50czohMSxjbGFzc2VzOiExLGFzeW5jOiEwfSl9Y2F0Y2gobCl7fWEoZSl9fSwyRTMpOmEoW10pfTtmdW5jdGlvbiBIYShhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYT1bXX1IYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmYuaWQsYz10aGlzLmMubyxkPXRoaXM7Yj8oYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9ffHwoYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fPXt9KSxjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX19bYl09ZnVuY3Rpb24oYixjKXtmb3IodmFyIGc9MCxtPWMuZm9udHMubGVuZ3RoO2c8bTsrK2cpe3ZhciBoPWMuZm9udHNbZ107ZC5hLnB1c2gobmV3IEcoaC5uYW1lLGdhKFwiZm9udC13ZWlnaHQ6XCIraC53ZWlnaHQrXCI7Zm9udC1zdHlsZTpcIitoLnN0eWxlKSkpfWEoZC5hKX0sQSh0aGlzLmMsKHRoaXMuZi5hcGl8fFwiaHR0cHM6Ly9mLmZvbnRkZWNrLmNvbS9zL2Nzcy9qcy9cIikrZWEodGhpcy5jKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7YiYmYShbXSl9KSk6YShbXSl9O3ZhciBZPW5ldyBvYSh3aW5kb3cpO1kuYS5jLmN1c3RvbT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgc2EoYixhKX07WS5hLmMuZm9udGRlY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEhhKGIsYSl9O1kuYS5jLm1vbm90eXBlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyByYShiLGEpfTtZLmEuYy50eXBla2l0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBHYShiLGEpfTtZLmEuYy5nb29nbGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEVhKGIsYSl9O3ZhciBaPXtsb2FkOnAoWS5sb2FkLFkpfTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBafSk6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPVo6KHdpbmRvdy5XZWJGb250PVosd2luZG93LldlYkZvbnRDb25maWcmJlkubG9hZCh3aW5kb3cuV2ViRm9udENvbmZpZykpO30oKSk7XG4iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL1JlY3RhbmdsZVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdGVkQXJlYVJlY29nbml0aW9uIHtcbiAgY29uc3RydWN0b3IoTWF0cml4LCBOb2RlLCBHZXRNYXRyaXgpIHtcbiAgICB0aGlzLk1hdHJpeCA9IE1hdHJpeDtcbiAgICBpZiAoTm9kZSkgdGhpcy5Ob2RlID0gTm9kZTtcbiAgICBpZiAoR2V0TWF0cml4KSB7XG4gICAgICB0aGlzLkdldE1hdHJpeCA9IEdldE1hdHJpeDtcbiAgICB9XG4gIH1cbiAgR2V0Q29ubmVjdGVkQXJlYShWZXJ0ZXgsIENhbGxiYWNrKSB7XG4gICAgbGV0IFJlc3VsdCA9IHRoaXMuQkZTKHRoaXMuTWF0cml4LCBWZXJ0ZXgpO1xuICAgIGlmICh0aGlzLkdldE1hdHJpeCkge1xuICAgICAgbGV0IE1hdHJpeCA9IFtdO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBSZXN1bHQuaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgTWF0cml4LnB1c2gobmV3IEFycmF5KFJlc3VsdC53aWR0aCkuZmlsbChmYWxzZSkpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgYVZlcnRleCBvZiBSZXN1bHQubWF0cml4KSB7XG4gICAgICAgIE1hdHJpeFthVmVydGV4WzFdLVJlc3VsdC50b3BdW2FWZXJ0ZXhbMF0tUmVzdWx0LmxlZnRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIFJlc3VsdC5tYXRyaXggPSBNYXRyaXg7XG4gICAgfVxuICAgIGlmIChDYWxsYmFjaykgUmVzdWx0ID0gQ2FsbGJhY2soUmVzdWx0KTtcbiAgICByZXR1cm4gUmVzdWx0O1xuICB9XG4gIEdldEFsbENvbm5lY3RlZEFyZWEoQ2FsbGJhY2spIHtcbiAgICBsZXQgUXVldWUgPSB0aGlzLk5vZGUudmFsdWVzKCk7XG4gICAgbGV0IFJldCA9IFtdO1xuICAgIGZvciAobGV0IFZlcnRleCBvZiBRdWV1ZSkge1xuICAgICAgbGV0IFJlc3VsdCA9IENhbGxiYWNrXG4gICAgICAgID8gdGhpcy5HZXRDb25uZWN0ZWRBcmVhKFtNYXRoLmZsb29yKFZlcnRleCAvIDEwMDAwKSwgVmVydGV4ICUgMTAwMDBdLCBDYWxsYmFjaylcbiAgICAgICAgOiB0aGlzLkdldENvbm5lY3RlZEFyZWEoW01hdGguZmxvb3IoVmVydGV4IC8gMTAwMDApLCBWZXJ0ZXggJSAxMDAwMF0pO1xuICAgICAgaWYgKFJlc3VsdCkge1xuICAgICAgICBSZXQucHVzaChSZXN1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUmV0O1xuICB9XG4gIEJGUyhNYXRyaXgsIFZlcnRleCkge1xuICAgIGxldCBSZWN0ID0gbmV3IFJlY3RhbmdsZSh7XG4gICAgICBsZWZ0OiBJbmZpbml0eSxcbiAgICAgIHJpZ2h0OiAtSW5maW5pdHksXG4gICAgICB0b3A6IEluZmluaXR5LFxuICAgICAgYm90dG9tOiAtSW5maW5pdHksXG4gICAgICBwb2ludDogMFxuICAgIH0pO1xuICAgIGlmICh0aGlzLkdldE1hdHJpeCkge1xuICAgICAgUmVjdC5tYXRyaXggPSBbXTtcbiAgICB9XG4gICAgbGV0IFF1ZXVlID0gW107XG4gICAgbGV0IERpcmVjdGlvbiA9IFtcbiAgICAgIFswLCAtMV0sXG4gICAgICBbMSwgMF0sXG4gICAgICBbMCwgMV0sXG4gICAgICBbLTEsIDBdXG4gICAgXTtcbiAgICBSZWN0LnVwZGF0ZSh7XG4gICAgICBsZWZ0OiBNYXRoLm1pbihSZWN0LmxlZnQsIFZlcnRleFswXSksXG4gICAgICByaWdodDogTWF0aC5tYXgoUmVjdC5yaWdodCwgVmVydGV4WzBdKSxcbiAgICAgIHRvcDogTWF0aC5taW4oUmVjdC50b3AsIFZlcnRleFsxXSksXG4gICAgICBib3R0b206IE1hdGgubWF4KFJlY3QuYm90dG9tLCBWZXJ0ZXhbMV0pXG4gICAgfSk7XG4gICAgTWF0cml4W1ZlcnRleFsxXV1bVmVydGV4WzBdXSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLk5vZGUpIHRoaXMuTm9kZS5kZWxldGUoVmVydGV4WzBdICogMTAwMDAgKyBWZXJ0ZXhbMV0pO1xuICAgIFF1ZXVlLnB1c2goVmVydGV4KTtcbiAgICB3aGlsZSAoUXVldWUubGVuZ3RoICE9IDApIHtcbiAgICAgIFJlY3QucG9pbnQrKztcbiAgICAgIGxldCBOb3dWZXJ0ZXggPSBRdWV1ZS5zaGlmdCgpO1xuICAgICAgaWYgKHRoaXMuR2V0TWF0cml4KSB7XG4gICAgICAgIFJlY3QubWF0cml4LnB1c2goTm93VmVydGV4KTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGQgPSAwOyBkIDwgRGlyZWN0aW9uLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgIGxldCBOZXh0VmVydGV4ID0gW05vd1ZlcnRleFswXSArIERpcmVjdGlvbltkXVswXSwgTm93VmVydGV4WzFdICsgRGlyZWN0aW9uW2RdWzFdXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIE5leHRWZXJ0ZXhbMF0gPCAwIHx8XG4gICAgICAgICAgTmV4dFZlcnRleFsxXSA8IDAgfHxcbiAgICAgICAgICBOZXh0VmVydGV4WzBdID49IE1hdHJpeFswXS5sZW5ndGggfHxcbiAgICAgICAgICBOZXh0VmVydGV4WzFdID49IE1hdHJpeC5sZW5ndGhcbiAgICAgICAgKVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBpZiAoTWF0cml4W05leHRWZXJ0ZXhbMV1dW05leHRWZXJ0ZXhbMF1dKSB7XG4gICAgICAgICAgUmVjdC51cGRhdGUoe1xuICAgICAgICAgICAgbGVmdDogTWF0aC5taW4oUmVjdC5sZWZ0LCBOZXh0VmVydGV4WzBdKSxcbiAgICAgICAgICAgIHJpZ2h0OiBNYXRoLm1heChSZWN0LnJpZ2h0LCBOZXh0VmVydGV4WzBdKSxcbiAgICAgICAgICAgIHRvcDogTWF0aC5taW4oUmVjdC50b3AsIE5leHRWZXJ0ZXhbMV0pLFxuICAgICAgICAgICAgYm90dG9tOiBNYXRoLm1heChSZWN0LmJvdHRvbSwgTmV4dFZlcnRleFsxXSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBNYXRyaXhbTmV4dFZlcnRleFsxXV1bTmV4dFZlcnRleFswXV0gPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy5Ob2RlKSB0aGlzLk5vZGUuZGVsZXRlKE5leHRWZXJ0ZXhbMF0gKiAxMDAwMCArIE5leHRWZXJ0ZXhbMV0pO1xuICAgICAgICAgIFF1ZXVlLnB1c2goTmV4dFZlcnRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFJlY3Q7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Gb250LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmZvbnQvd29mZjtiYXNlNjQsZDA5R1JrOVVWRThBQUhZMEFBa0FBQUFCU2J3QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJEUmtZZ0FBQUtXQUFBYTlvQUFUZU1lbjA1SFU5VEx6SUFBQUZFQUFBQVNnQUFBR0JudzZlRVkyMWhjQUFBQTNBQUFBUGdBQUFGZVBNMGdWVm9aV0ZrQUFBQTRBQUFBRFlBQUFBMis1KzVOV2hvWldFQUFBRVlBQUFBSVFBQUFDUUgyQVVsYUcxMGVBQUFCMUFBQUFMeEFBQUhiS21SU1ExdFlYaHdBQUFCUEFBQUFBWUFBQUFHQWR0UUFHNWhiV1VBQUFHUUFBQUIzd0FBQTh2dHVNeEtjRzl6ZEFBQUNrUUFBQUFUQUFBQUlQK0NBSmdBQVFBQUFBRUFBQU94WVNKZkR6ejFBQU1ENkFBQUFBRExsck9BQUFBQUFNekt3aWovRWY3Y0JSVUQwUUFCQUFNQUFnQUFBQUFBQUhqYVkyQmtZR0JlLys4L0F3T3IxWC9CL3dLc29neEFFV1RBZUJzQWlqVUdCZ0FBQUFBQVVBQUIyd0FBZU5wallHWnFadHJEd01yQXdkVEZGTUhBd09BTm9SbmpHR1l3TG1GQUJlekluT0N3RUJjR0JRWUYxVlBNM3YrVEdVNHdYMlFVVkdCZ21BeVNZOW9ETkJNb3g4QUFBRXFBRFVzQUFIamFqVkhCYnROQUVIMTIwemFSdUZBdTNEcElGYmRhVG80OWdOS0tReTlWSVZKN2R1eHhiZFh4aHQxdEtsOTY0UVA0QkZRdS9BLy9nTGh6NWNMc1pwTVdOVUk0OHM2YmVlL05qaWNBbnVNN0lpeWZ0L0l1Y1lRWGtpM3hGdmJ4SWVBZTl2QXg0RzA4dzZlQWQ2VCtPZUJkdk1kOXdIME04RXM2UkwyQlpIZjRIWENFMTFFWGNJeCs5Q1hnTGJ5SnZnWGN3MEgwSStCdHZJd0hBZS9nSUg0VjhDNit4dThDN21Ndi9ubWk1cDJ1cnlwTG8zUTRvbkdocGt5VHpsaWVHVHB0YzZYblNtZVdpNFRHVFVOZWFraXpZYjJRNHBsYWNNNnRWWFJaRjB6SHFpa21YV3VyUmMyM1IvUTM2OGhOdFF2V3BsWXREWk0wWGJPSEsvYTg0Y3l3M0ZpeUpuSFppdWxoYU1PNWRkNVNhYytVcXJWa2RWYndMTlBYbEZtcjYrbU5sN1RLMWptYlpEMGZUcUF3UndlTkdsZW9ZRUVZSWNWUVRzSVloZkJUc09DSnFJendqSmxFd2lsYTVNSnE4YnN6ODF5QnhQc2ErZEdqcnNabkxKRWxMb0x5VEp3TzUvSzJvbEtpdWhSUDRXODhscndSdklwdUFxZXF4Rk9MNGhaSG92cFhqNVh6ZjNVWGZqb2pWU1Vha2kwa3NvdDBnL2Z3aWZkY1RwWXRHRCs3KzliU2Q2TndsNXZiTVpzMmJueHZ1NzYzOUJ0OThKUytibjNGYmJydy8wSW0rRnBxYnZQVzk1dmk1bEdYVnFMTGNyLzM1T24rL2dDdG84ZzdBSGphZlpRSlZCWmxHSVdmKzRNaUtDNkFpSUF3L0FvdUdPN2d2b0dLQzRyN2dpS1ZacGxsb2xsWmthYVl0bERaWWxtWlZxWWxXYW01bEVhaGFXcHBnbHZtQW1iV0tTdlRVdXVVOVA1ek9DMm5aYzU1WithYjVYN2Z2UGU1QS9qaGxpY000ZHVpYlNSM1hGV1hiUnpJcGNvNy9ISDgvMDE0VE1PZktsUWxnT3ROSVlqcTFDQ1ltdFNpTm5VSUlaUXc2aEpPUFNLb1R5UlJObThEWW9qRklRNHZEV2xFUEFrMHBnbE5hVVlpemJtS0pGclFrbGEwcGcxdGFVY3lLYlNuQXgzcFJHZTYwSlZ1ZEdjV1BVa2xqVjcwcGcvcDlLVWYvUmxBQmdNWlJDYURHY0pRaGpHY0VZeGtGS01aUXhaakdVYzI0MjM5TDdPS1Yxbk5PamF3aGZmWlRqSGIyTUVIN09SRDlyQ0wzWHpFUGo1bUw1K3dud09VVU1wQkRuT1VJM3pLelR6TDFWekRkZVF5amNkNG5oZDVuRHVabzBNczRBR2JZYkVPNmdBVC90YTFoVHhrK3dJZTVRNXkzQ3NUM2Yxa1puSWJuN09TVjlqRWd5emlKdTdqQm02bEI5Vllvc01jbzRock9jV05USEhmbU1vdFRHY0d0N09DUWw3aU5kYndPbS93Sm10WnoxdjJ4RWJlNWgyMjhqQjNjVGQ1M01OczdtVXU4OGhuUHY1K3ZwVmxXeWVybUNNK0Q4YmJpdkpZWnQreG12VUtVS2dhSzFFcFNsZUdKaWxQaXp4Um5oVFBUczl4djRTWS9KaWxNUmVjQUNmSUNYTWluUmpINnlRNExaMk9UcHBUNkd5T0M0L3p4bVY3UTd3NTNvbnh1eXNxYkI3SDlUakhPcmFNNWU1cU55aEk0V3FtSkhWUVAyVnFzdWxIbVA0T3p4SFRuMjM2NTAwLzBBbDFJcHhveDNIMU8veEZQOHZWbitEVHJ5aW5oMVdrVldwRjBiL2plcVhVNnFKN3RnNU9qWVB5WFgvZUxSdGNsbDdXdWl5MkxMazhzcXo0Wk83SnVTY0tUczZFWThIL1NFT205V3lLYXNwUlQ2VnBoR1pvbGxaWkhQWmFsWmpmNkpqVmFWL3BqTDdTV1ozN2p3Q2RjQStUakpCbmpLSTUxdmVGeHNGcEl5blAyRnJNRjV3eG5xYVp6M1A1MHJpWnlkTTh5VklqWjZWMWNJV1I0bU40Z1ZHOHhod3J0SjZ1clNUZ0NhTjZvMHZCSnFQN0JhTnhxOHZDRnQ3bEtXTjF1L0ZlYkt4dk05b0xqUGM5UnJ5UDkzMUd2SS8zNVViOEFXTyt4SGd2WlluUmV0UzQ5MUgvR2M4WmlkOG9nYThWejFrMTVsczE0WHMxNHpzMTVad1MrVUhOK1ZFdHVhQVdYRlJyeml1SnkyckxKYlhoRnlYenM5cnhtOXJ6cTVHRk9rcnFSSVV4ZXNVNDhLaXovTlJGL3VxcXF1cXVLdXBtSFBiZ2ZoNVJOZXQza0hVOFVLbjhwRmFxb2Q2cXJsNityQ2hZZlZSTGZjMlZkTlUybWtJMFFIWFVuODBjTXNZeVZWZURGS2FCaXRRd1JXaUlvczIzK2hxcUtBMVhqRVlwVGxrVXFhSEdxWkd5ZVkvanhuNkc2bW13SldkK1pXN3lMVVB6elBVeGFxQ1JpdFZvZVRYV0hOL3ZKdFdYMHVsdVhtZlluMkVxdWI3cy93N3VtaWIwZU5yTmxVdElWR0VVeC8vZnVkT01NNzVHVXltbWZNeW9oUkNoSVZaS0pFaVE0OHdvWmtrUElaSUlrbkFSdlJmUm9vVzFpQWdrQ0hkUm14WnRCWmRKR3hNS0xIcEEwQ2FqbGRBaVVXLy84ODAxNzFRRExhSzY4T1BjZSs3M25mZDNyOXhDQm91QTZVSmFqaUR0M0VkTVRxTFVHVVZRbmlCbWtraWJNU1JJdVZuaW1rbGNOcFZva3VQVVY2SkRRb0RNOFAwY0VqS01GdTZ0bGR0b2xCSHNrR09vbDcyb2xpSEV5WHBkYjdad3p5VE9xaDF5VmRLSU93blV5S3pyeWgxa1pJSFB4ZlF6VG9ZWnp3YlVVWmUyOFQxQVdONGhLUVBVSDBLUEU2WGNUUHMza0tLc2tZZm8wZGpsQkNMeUdaMHlDd1JpS0pISEtKUVhLSkNuYURmWGFZY3hVMFprbFB0TGFaczUvalgvMDdSVlM2WVJZdjQ3cmQxOXJNOFlrcmptbHNsekZKaWI3b0pVb2t3bVdOZGRmTjlNK3h1NTUwTVcwWGhMNklOb1RaMDJ4TTA5SkcwZXpjeUI2SHFuQ0IzcmRqTSsxdGgwdXN1V2krNUhNYTVyZXR4NWM5aWR3eU4zMFV4UlgrOStNc1dVWDl4bEdVU1hyZ3NVSVIwQWF6V0tDcHN6Y3d3MG9kR2NSb0hWYSt3K3ZiT0g5eFdJT0RFa25CREU5bmlNYStZWnE4Nk41dDJIcU9xY0JsUnhYNjNxZFQzbEpUNXZzbjNJWmRuS0JkWjMzT3VMQi8wM21DNzNOWGxHM3EvMjQwZllrNmp0aHgvdGg5ZVRmK0x6SzRKT0s4cWRhczdMRk9ERUVkZHphTS9WQVVUTkVLcE1HQkY0bHkrMkZaMVJVdWZOYXNyV3p4ZWp4a1NaMHRuMXFMZVMvZUdlb002ejh4WXA3Ujl6V0NSdnZObldmclpvVDBrZnljNTRsajd0bDgxTjV6eEx4czc3R3VWMjl0Y28vcWtHUk0rRW41eTY1UGJqMTdscXJMK1JiMjZ1LzJHZW1sc1FpY0FFNG9HN3pPOGxVdnFjaDdDTm5UREdsQmRyeWtldmxUcC83WnhialhQVm41OVZ2Mm9yajY5ZnhQUG5mTStnM3B4SHlKeENvVG5JZjBJL3dxYWQzN0VPeWk3N25XZ2w1MGlTN0NkdDNuMDNPVU42eVhiU1l1MzQ0WG14WnlmRHM1UEhmczY2b2Z6clBMOVJNa2dHU0xOTXVrdGtoZmNqdm44WnNKVmM0Qms5YXYrUFY3Ny8zMTd4KzkrUE5OOXVjNExvL2didEtuOGxBQUFBZU5wallHWUFnLy8xRERNWXNBQUFNRVlDR2dCNDJ1eDlCM3diUmZiL3lMS2tCWUlCTHdxeUZLVFFBa2NnSkhFcWhCb0NnYVBrNklHUVFxcTdyZDU3czYyMnExNHR5WEozZWlHaGhIb2NIWTQvTGRUQWNaUUxFTzZPWTFhc3cvMW5aVUVNSkhlQnUrUDMrOXd2TzRTVlY3dHZadDY4ZWUvNzNzeGJzVUFsRzdCWUxQeUdGdVhxbGF1YjVTM24zMTYzYXZVVkxZMnJtTXRUcUJOQjhlU0tJcDlOMVZUU0s4YXg0WG5qS21rYnZYTUNoLy8xYXM2RVkwOCtZY0t4NTU2VVBoV3dabXVyQVYwQldJQUR4Z0VjQ01GcDRCd3dCY3dBRjRMTHdVSndBN2dGTEFXclFEMW9CVnBnQVhiUUNRaVFBdjFnQzlnRkhnUlBncWZCeStCTjhENzREQlRCMzFrYzFra3NQa3ZFT28xMVB1dEMxdVdzcTFuWHN4YXpsckhXc3FRc0k4dktjck5DckNRcng5ckEyczU2Z1BVSTYzZXNsMWh2c3Q1amZjcjZDNHVxcUtqQUtrNm9HRjh4b2VMMGl2TXFwbGZNcWJpMFlrSEZqUlczVlN5dVdGNnhwcUt0d2xEaHF1aXNpRlRFS3JvcWVpczJWenhZOFZqRlV4V3ZWT3lwZUxmaWp4Vi9ydmlHeldFZnh6NkpmU3I3RFBaazlpejJGZXlyMk5leDcyQXZZNjltUzlrYXRwbnRZSGV5SSt3dWRnOTdFM3NIK3dIMkUrem4yYSt5MzJGL3lQNmMvUlg3bTBwdVpWWGwrRXB4NWFUS0taV3pLaStwdktyeWhzcmJLcGRXcnFsc3JsUldHaXVkbGI3S1NHV21zcmR5UStXT3l0MlZUMVErWC9scTVUdVZIMVorWHZsVjVUY2NMcWVLTTU0ajVremlUT0hNNGx6Q3VZcHpBK2MyemxMT0drNHpSOGt4Y3B3Y0h5ZkN5WEI2T1JzNE96aTdPVTl3bnVlOHlubUg4eUhuYzg1WG5HKzRYRzRWZHp4WHpKM0VuY0tkeGIyRWV4WDNCdTV0M0tYY05keG1ycEpyNURxNVBtNkVtK0gyY2pkd2QzQjNjNS9nUHM5OWxmc085MFB1NTl5dnVOL3d1THdxM25pZW1EZUpONFUzaTNjSjd5cmVEYnhiZVV0NEszbjFQQ1hQeEhQeGZMd29MOFByNWUza1BiTkFJVzFSTk5kTm5YcjUxTkhUbGFYVEZkTkhUN1dqcDdsckd6V3Q2NmFWL2ovOThudWtxNVdyTDI5YXNWTGEwbng1eTlxVzV0VU44MWVzVk1oWHoxKzVBbDJhdjZwRnZtSWxJNU5YbHY2K0V0MjNRcjZnOUhuQmQ5OHRHSDErUWZQYUJhTWtyaTZSdlhwbG5YU2xvbWxONDJyMTFTdGJtcHBXak41OTlYZlBvUVpOV3pCM3djSjdWa2dYSHJ6M21tdXYrZTZPYTBZcFh6Tks5dHFETi8xNkRNSHJTZzIrcnRTbzY4WmVSMlJ1S0gxM1ErbTdHOFo4ZCtNNlJmUGFGVkpGVStNS2hmekcwVnB1S3QxN1UrbmVtOGJjZTNQcCtzMHJWNitxYTJ4Y2NmUEJSdHc4NXFaYlVDZHVLVDE2eTVpckRNdW5UN3Y4MWhJL2JoMWI1NjJqZGQ0NjJyTmJwWFhOYTI4djFYUDdRZnEzcjZwYkxWMHRxNVBkdmxhNlFybDY4Y0Z2RnBjdTNGbDY0TTd2dUxXaVZNMktVY29yUmltdkxOMnpzdFN5bGQvZHVhcjA5NnJTYUpiYVdEdDdkZW5TNnU5dVdUMUtablh6MnRXamxOYVdxSzg5MklpMVl6cTY5cnZuMWlGR3JEdDRVMTE5M1NpaHVsRXE5UWUvYWhqemZHT3BtWTJsTmpTT3ZZN29OcGUrYXk1OTF6em11NWF4L0d3WnJVVmF1bGRhdWxjNjVsNVo2YnFzUElheWc0MlFqYmxKanBvdUx6MHEvOUVZWHFFb2RWOHh0azdGYUoySzBaNHBtREZVbGVwUkhhU3YrbllNVmFVaDB4ejhSbE82b0MwOW9QMk9mYVB6Y3NiMDhybTJmSjVSUHM4c24yZVZ6N1BMNXpubDgranNuajV6YXZsY251Y3p5L1JtbHVuTkxOT2JXYVkzczB4dlpwbmV6REs5bVdWNnM4cjBacFhwelNyVG0xV21ONnRNYjFhWjNxd3l2VmxsZXJQSzlHYVY2YzB1MDV0ZHBqZTdURzkybWQ3c01yM1paWHF6eS9SbWwrbk5MdE9iWGFZM3AweHZUcG5lbkRLOU9XVjZjOHIwNXBUcHpTblRtMU9tTjZkTWIwNlozdHd5dmJsbGVuUEw5T2FXNmMwdDA1dGJwamUzVEc5dW1kN2NNcjI1by9ScXAwNHRuNmVWejZQMGFxZlBLcDlubDg5enl1ZnljN1hsNTJyTHo5V1duNnV0TFo5bmxNOHp5K2N5dmRveXZkb3l2ZG95dlJsbGVqUEs5TXB5Vmx1V3M5cXluTldXNWF5MkxHZTFaVG1yTGN0WmJWbk9hc3R5Vmx1V3M5cXluTldXNWF5MkxHZTFaVG1yTGN0WmJWbk9hc3R5Vmx1V3M5cXluTldXNWF5MkxHZTFaVG1yTGN0WmJWbk9hc3R5Vmx1V3M5cXluTldXNWF5MkxHZTFaVG1yTGN0WmJWbk9hc3R5Vmx1V3N4blRacFRQTTlHc256NTE2dXpSMCtXanA3bWxFN0tnMHRVcmtKSlozYVpZMGRpNFdpWXJmV2h1a1k5ZWFORXlPblBGbXJxNldkTVFReGoxOGUwNHo1Zzk5VHVNTi9GYmpQZjlLeE5Mc0E5Qk9GWURhSmtFNHNlQ0hqWVl2SkIxR1p2bG9saHZzcG12d01NQVBBYkFCNEIxTEdCMWdvcG5RT1Zpd0RFQ3poZUFhd1c4a3dIdk1zQmJCM2l2QTk3bkFEc1BZRmVCWTJyQk1RcHc3R1hndU9YZ3VOK0RjZHZCOFM1dy9NdmdoQXZCQ1YrREUxdkJTVUp3MHFYZ3BEWGdwRTVRZlNVNGVSVTQrV25BajRMeHk4RDR6OEFwSW5ES2xVQXdBd2hXQVlFR0NONEROZGVBbWpWQVdBMkVZU0F5QU5HWFlNSStjS29PaUtOQXZCTklwZ0NKRVV3OEFVenNBUlAzZzlQV2dOTTZ3R2w5NExSbndHbWZnZE5aNEhRWk9IMFBPS01Ybk5rTXpod0JaNTBMenJvWlRKb1BKc25BSkRlWTlBVTQrdzV3dGdLY2d3QnNBZnpLQTg1bGczTy9CcE03d0htOTRMemZnZk12QnVkN3dSUXhtTElOVFBrR1hLQUFVNWVBcVZJd2JUR1lYZ1dtVHdQVFh3TzFmYUQyTVREalFqQmpHTXk2RU13K0c4eStCTXlwQVhNV2dUbHRZRTRRekJrRWN6bGdiaU9ZdXg3TTNRY3VYQWt1L0gvZ291MWduaGZNZXd4Y3JBU1hkb1BMbG9ETFZPQXlFbHkyR1Z4K0s3aThFVnorTExqaUJIQkZFTXkvRE16ZkN1YS9EcTVjQzY1MGdTc3pZTUV4WUVFZFdCQUJWMW5BMVJlQ3EvOE1GaTRCQzl2QXdneTRwaDFjZXdYNHRSRDh1Z2RjTng5Y1B3OWMzd2F1L3h6Y0VBRTNuZ0Z1dkFiYytCVllKQU8vZVFYY2pJT2JKNE9ibndLMzhNQ3RabkFyQkxmSndlMjNnTnVmQlhmc0JJdTNnRHRmQkhlTkEzZmRBTzZpd0pKWllNbGRZSWtkM0kyRHUrZUNwWXZBc29WZytRS3dZZ2pjMHcxV25RMVdYdzFXUHdQVzNBTFdYZ3JXUGc3V1RRRHIzZ1oxNjBEZHU2QitDV2lZQnhxMmdjWXNhRXFBNXAyZytVdlFNZ3UwN0FXdFl0QTZIN1EyZ2xZYXRKMEdwSE9BYkNxUW53OFVRYURzQk9vVGdPWUNvTmtLdFBPQTdteWdHd2I2U3FEL0xUQXNBc2I5d0hJanNDMEhqbkhBOFJWd0ZJSHpCT0I4SHJnZUIyNEEzR3pnNWdMM0U2QjlIdWdRZ280L2c4Nm5nT2M1NEcwRXZtT0I3OWZBdHd2NHZnTCtIQWdzQkVRVWtHa1EvQnNJbndIQ05JamNEQ0pSRU9XRGFCT0lFaUIyTG9qMWdIZ3JpS2RBNGd5UUdBU0p2NE1rY21aT0Jla0trRGtPZExGQlZ6ZklMZ1M1eTBDK0huUi9DWHJPQUwxNTBQc3k2RHNHOUFWQi8ybWcvM013b0FNRGZ3ZURiNE5oRmhqT2dmVlhnUTAzZ2czN3djYnJ3Y1plc09rOHNPbDlzRGtQdGdqQWxxL0ExdWZBdGg2d2ZRRHNXQWgyZkFqdXZRSGM2d2YzSGdBN0x3UTcvd2gyZWNCOWI0TDczd01QemdXNzE0TGRENEdIMk9BaEMzaW9Ceng4Q1hoNEYzakVEaDdaQkI2ZERSN2REUjdEd1dNOTRQRnA0TGZqd1JNUzhMdFR3Ty91QlU4dUFVL2RBcDQyZ21jeDhOeHM4UHdPOFB6SDRJVlR3UXQ5NE1WYThIc0FmdThGTDUwRVh0b1BYc2JCeTF2QkszZUFWMWVBMTFqZ3RXWGd0WjNnOVV2QTYxK0NQYytBUFJDODBRSGVQQXU4MlFQZTNBdmVPZzI4OVZ2dzluVHdkaE40dXgrOGN6bDRad040ZHdwNHR4ZnNuUVAyN2didlhRbmVld3E4M3czK3NCbDhNQUQrbUFBZlBnNCtFb0tQak9Damo4SEg5NEpQSm9CUDh1QlBHdkNuRDhHK2FyRHZlckRQQno2ZERqN3RBcCsrQVQ1ckFwOWo0SE0zK1B3eHNIOEoyUDhVK09JYThNVWo0TTgzZ3ovdkFYOVpCdjd5QWZqcmJ2RGxzK0J2ajRPdnRnUDRMcUJtQWlvT2lteFFmQWw4UFJ0OC9TQ2dlOERJWWpDeUhSeFlBcjQ1RVh4ekhmajdlaFpZeWtJdUp5dkdxbGpKWXR0WTdDOVpsYSt6T0lNc0RzWGlMV1ZoRXRZeFhOWXh1MW5IYWxuSFRXY2Q5d2xyM0Jtc2NYdFp4LytlVlRXSFZmVU82NFFvNjRSWFdDZk5aSjIwbjFVOXhLcitrSVgzc0U2T3NrNytLNHVmWUkzL0RXdThsM1hLNXl4QkY2dm1YWlpvT2t2MEdtdENIK3ZVRUV0OEhFdjhQRXR5SVV1eWl6VnhKV3ZpYXRiRWRheUpEYXlKcjdKTzQ3Sk9tOFU2VGM4NmJZaDErbDlZWjZ4bW5YM2ZQWjFkeFhPNldHL2txRHU3MlhCT2NSRmZxckxwZFJLZDNxWnNGWTcwOGxxQ3lxUkJiRWgyMlFzaStBNjMwRVhHazVKa1BKanRFMUs5dkY1YlZwY1FKM1FxVWlyeThKNGMrWUxmNGxDWnpHS3pTZTJRaXVnbnVISU5FVEZLakJGN0Y3by93T3NqdXFJUmNTU2FJNFpFY0F1M1Arc3d4eVZ4TTZscUVkSm44MmcyWk5NWUtqeklwU3ZwU3NpanVVeUJ6R2N1S2p3YWc1WG9MeDdFbUw4NFZTTTNWM1hDYWRSV0ZXc1BuTWZlQXh2NGNCNmxvZWR4RHl5cWhQUGdOUFNwNm54S0JadlE5OU5nRFp6RzNrT3ArT2hqRXoyTkMzZlFUZDkrcm9MbXJCSUs0Q1FvUWY5T1ZiRjZpMzluRjUrblp2SmZnNU00azdqUHcxTTU5RXp1QWhxZEpHUC9RcTR4UFluelB2ZEtXc0taWGY1OE5TM2d3UG5jWnlFNm5UTDJyNCs0RExYSjNCZWdoRU5iYVFtZnJpbDloaE80VlhPbVFTVTlUcGxUVWk5QStYUlZ0NnA2Rjd3OERPZlJjK0c4QUx3YVA5Tk12VWxsK01idGlrME5RdzFEcS9KTDQ5Z0g5THhadkJhNzFDSTN5bzFxdlU2cjB4clZWaVZtVlRvVmNtRmpvQzJpRUVjVWNYVktsOUpsakZrTEt0YXNyV0ROMjNKMkREL0huTE5uYkVsVVl0YXdGY09ubXNQV2dNa2cxTnIxQnBNWVZXZ3lLQnhOSXR4NW1WcnJJL1FTZkpKWlR4aUNwckFwYkluWVlyYVlQZWFNMFRPWEN6SzM5UzdidUc3anVudGxENW13bVhEZVhsNC8wUlBPeC9LeHJrUXluVXhIdTBKNUxKVDNkL2NJQnh3OXByellsTmQxcVZLcWxEd2hqVWxqYlpHMmtES29JdFVFaHA4RjFJU09OS0JpRHRxQ0dPNEF0cUFySEJIR3lXZzhJc1lYZ0VnOEV5aUlDdDEyZlY2Q1Q3OHNyMC9LUTQwK3I2QUsvdG9HSzZZcis1UndDd1RUSUJ2K0dvSk9WVFVCT1ZBSUsrQ3ZSczk0N1Y1NEEzeU0zOU1kQ09ja3VYQW1ua2hqK09TOWlYUTBHK3JHUXQzKzNuNWh2NnZYV2hCYkM2YXNQcTFQcStPS01CWld5QUp0b2xhWjA2S1FLQ3hxZzA2ajA1aVVWaWxtbGJwYW00WDQrWHViL2EwaG1UZ2tpeXFUbXFRbVk4aFpNRXV1MjlrcnVvMStuQThCbCtvbzNzaWhBWGZrRm5valg2a05wVTBTVTlxUkxRZ0xSRGFhRnFlanlWQldsRTFhTlZGSlZFTW9wRUtwUTJuU2lEVW1uVlVwUWkzMGVEajR6WHNwNzhoRlRPTkQzemIrc0EzSDhPRGVJMnY4SVZwdUxiWGNBOWsvdmFXMVRFdXJvbFkwa1diQlV4RGZKMWIzd2t2cDZYQUJYQXZQeHo4dDNrNWR4Qjg1bFZzbkpSTjZpVDVoUzJlRnBDZm9DNGw5SVgrUUlBa3lTSVFEV0NBYzh5WkZ5WGk3S3lLSnVNS09rQzFrQzFwSUUya2lEQUVkUEcyTFFQOWswLzNMTm1BYmx0MmN2a3EwY3EzVDNDaHBOTGZwRlJxRlJxc3dTekd6MUlFNkovZXJnbHB4VUJ2V1IwMFkvbVhVRkxjazdBbDczQlhyd0RwNGFyZkdvYlZxclhxenlXZ3lXdlIyTFdiWHVqUnFZVDNSRkdzVngxclQ4bTUxdDdwUFAyekdMTU9ibk50RUQrNGdZeHNsRytQOTZUdzZVajJSQVN3eUVCZ2NGajdCZzlVT0RqMTBKMytGdVZtcEZXdVZqYmFWb2tacE1LbVNxSktXVEY2WUQyWlNTRm1tZW9JYlJiQWFNV21rb25pWHFub1BuRTlQaFZQeGgrRVU2aEcrcmQzaU5JbWRKb2ZKam9yTmJHV0t6ZXJFbnVRbVk0bDRQQkZQUkpQaFZEZ1ZUQkVwakVqNWtra2hua1Y2V0o4VUovV2FvRktrVU52MGlMRjZtMFlwVkJMYW1Fa2NNNkdwMmg1dkYxVFJqOUVUdnI2VnRRSE9aY1AzaTgveDlVNk5YV2xUMmhRbWhSNFZ0VUt1a0t1YnRYWGFPc05LeTkyWTVXN25yZGNMcncvY0dyNWJITDQ3dmpKVmw2ckxOT2NVT1hsT25kUG45RmtUMGlmV3REM2gzQTVyQmZYaDFyZ2lvOGhvOG9aZVE2OWwwTEVCYzJ4d2I5a2gzT0hiUW13UUV4dkNnL0hlZUc4Nm44dmtNcjN4NGJCbnRFWGlyMjlud1Z0Ums5TEY4L25EbGw0RElxNU95K090OGRad0k3RU9JOWI1VmkwWExuZXZjcXdUTzlaWkdnMnRobGFOSERWVzNXcW90MnluYXdXSlFKck1obENKNWhLb1pITDVYRDdUbDFxZldoL2ZHdDZGaFhjRkhubEsrSlR6RWNzdXNXV1hZYXQydlhhOXVsK1JSeVdqU0tBU1ZRYVZRUTJwRDNpUUlxRi9VMXlrWXNHNy84cW1UaStPNDA5cDVIeCt4am04cVlNTlovK3A5WWFMM3J2K3NYY2ZuNzMzNlJ2ZStGTXZwOHFEbE0ycExOZ1BKN0dwbDVGYzAxUGdUSG9TUFpNK256NFZUcUZuSWxzeUU1N1ByUnFaazFKV2IvOXVvSSsxL2FSeFRoNzVPRHRHeDdtMjFLNDkxR0prNzFDclRxVVd3MU41cUJWaEpldDNjQ29iU3N6OGJEb1lUMGdTaVdBbUo4emEwbm9rbVQ4aXF3aXFFM3F4SVpHeDVVUlY5RlZaSmNPWlRpcko3cXhFRmcxK1dsekVtTUdxTGlPY1M1K3BwSDRMNTNoVjFSdmdGWEEzdkFKZkFyOHVMdVV2WG1wUnI1U3NWTmUxdGRTMzFDdFg2WmRoK21YMkpZdUZpOGtsaVdYaXhMTHNxcjc2dnZyMWJWdlZtR2JyVHN1RG9nZDNodEpiSlZzejYzdjZodnVHczFzUzkyS0plOG43SGhRK2FMdFBmNjlZZjY5aVM4dHd5M0JkejhvTWhnOW5WaTROTFJaNXZSejZ3c3Flbk5PU2tXUXNDVU5VRTlXRWxJUU1JMlMrdGhaaGk3dk5JUk03WkZha3Awd2F2VUdOZExOYTRXd1R0U2tDWWJWRUhkYkhUV2xUMnBwMWRHT09ibmRQbjdEUDEwTjBpNGx1SkZMcGFEb1J6eUF0bXNrRmVoQWJWRjNLNG0rUWdNZ1I0b0I5Q0RIUmR0cnhsM01HQnhPSldEd1NxNGxGQ05JajhwaTR0azVMaDFuY1llNHdHZ3lkUnBPUS9nRE9LLzZHVnpXTGdTem53OG5WRDFKcCtoSTREOThMVjFKU1BsSi9vVUE0RUNiRHdWQXdGQ2FqQkVaRTQ3NmtxQzluMHlITXBRdXFsY0pHZGNPYUJ2RmR5KzlhVVM3TE1UUzZFWVIwanVQZHRxS2p2VkhTM3FqcjZCQjFlTUlrR1FnUmtXQk5KQmdMeGNPakpadEFKWmxOWnRLcHJsUlhMQmN1WU9GQ29IOVlPT1FZTVBXSlRYM2Fia1dYb3FzMTJSakZvbzNyaU5VaS9NVjFEVTVMczZUWjBtWlFhQlZhdFZJbjA4bE1iYllXTDVLek9UbzRHVTVIYXY1MGVIcjFFTFdkdmhHcCtobndTdndMZUFmcVVtUXdua3ZGc1hncVMvYUllck4ySStxR01haFZDdFYyclFHaFNvUGMzaWhhUkoveUJIZXcyMjVJUzlLR2tFWXV4RDgydWsxT2k5aHBzZHVzZHFzZFRSUVg1aktaMm8yaWhyWlJkV3BBS0lZK2I0V0FiSW0ycFdWcFdWWlowQmEwZllaQksyWVpISElPaTdac0NFU0dKRVBodmtSM1YzZFhPaC9yeFdLOXhNQ1FzTnVWdFdYRXRvdzVhWWdaWXJxd2hzUklqY2FuUnZBMTVvbjdrMlNTaklkaTBWZzBrZ2doRy9wQktPM3Z5Z3Y3SGIzbWd0aGMwT1lVYVVXNkxkNFl3U0tOYXdNclJYVU5UaXRpanJYTktOZGkrTWR5cldxVVA2MjJKb0lRVksxQ29MSWFUcUl1VTdFb0Faek9MckpnZ1g4WmRSa3Q1bzRnSk1DaHErRmYwTC9wc1BwVkh2MHNuTVNYcXp2MWVxdDczT2tlM3VaZGp6MUhCc2xRTUZ3VFJFSkJoc2dRUVFZSU1pVHdjRHQwbkE2eng5Q3BRMFdqSG5lV3VsT3RFYnJyT0ZXWEdORlFMSUg4ZCtHMDZ0MVVOMzB4dkJqL0F2OFlXcWxGZkkrSDhFWEZ2bWdnVDY3M2hnVndBRTRiT1oxNzNjZ0o4S3lWM29BdjRDZHEvRVFnUUtJUzhrZDhtQzhTOHlaRXZYbXJCazBxVFZqV0pHeTJ5dFJxc1ZvdHN6U0xkQVp2QUFHRGdJV3drVGJTSG5TR25DRlgwQjJrcDl3aklPUVJSVUtaVUdiVWVSMkdmNUhYOVJnSEVLZ1lHSFp1RUczYVFEQWpFKzFMSVNXZFMvZkVCckRZQURtMFFUaHNIelQyaVkxOTZtNVpsNnlySmRtQWVOeFFSNndScVhYdGJvUEU0TGE0N0M2L1IxQjFnUmFoaWlVSXpSdFYxUnZoeGZURjFFNjZGdGJpSDFOdHhSdjU5RFZjV2tSZnJaWnFaWHA1alI0aFl6TXFWcGxEaGpsa2JxUU1WcEhyNG8zaWVHTlhXMEZaVVBicmhpMlllWGlEWTVOb3kwWWlzbDZ5UHR5ZkxHUUwyVXdoM28vRiswc3RjdzZhQjhUbUFYMlBLcS9LUzlQTk1TeldYRStpbGhuYm5YYUozZWx3T2QwZEFVRTMvUksvb1MyVVZrcVVhVXYzZ0xBLzNOMlZFV2U2ZWtQRG9xRWVxeVlyd2IvTWpqTFNJbE1oUnFwYUxmVkk4S3JvNDd1VTFEWTRqVFZBRGJNSEdKVXlEWnA0b1hCbkpCSUpqenM5SE9va1JXR3Vwd01CRkl2TmFOSFZXSFJtalVsVktrcTZidVJZQVZ6SWhSOVNuM3MrNTFSTjFVSWgxUWFQcjE2UGJORk1hc05JQUo0RkY4SFRhQnpPeEYra3JxU080WWU4NFVBMGlFbzRFb3ZFUW9sZ0dnc2lPYzhKZXgyRk1qeFhwcFFwYWF3NWpPSFBocHNiQW5XTXBKZlVnTlNvMUNxMU9wVkpqcG5rRG1tclVJRVFsa1ljMUlSMEVTTXE1cWd0YW9zNFErMElYdUh2NjF3NnV3NzVGaS9xckhxVFVXL1VtN1UyRldaVHVSUXlZUlBaRW1zVHg5b3kzMklzWmlBMk9yYVVCbUpZTXN4TTNreDNKcE9MOVdDeEhySnZBRTNlM09qa1RSa1R4b1ErcWd1alF1cjhMcDhBZjVhV3diUDR1VkM2aExIeVpKK29OMWZXS1dxNVVHblZhcEhDMGNydExhSldPUm5YU0RSeGF5b3I5SEFOOUhQOFFqamJsUktudW5xQ3c2TEJIcHV1UzlLbEN5dmJoRktMVW9XUW5Lck5WaS9DMzI4c0t4OUx0a2RZTlJYTmJCMFVJVG44RmZJeU1uQTJiRVdhL0szUHhzT2J1WEF1dkdYSDdvSDdVN3RxVXJ0Q083WUp0OWczNkFmRitrRlZqelFyelRZbjY1Rm8xNjlEb28xL3VtcU53MXducVRNMzY2UktxVkl0TlRSaGhpWjcvUnBoZmFBeDNDd09OeWZha0VKV0ZEUURSc3c0c01HK1ZSUUplM3hoU2RnWDlBY0lqMXVnZ0svd1I0WHJ4NkoxT0dIMGpHSUJ1QjFPTGVNQk9NZ0Fnc1NSQVFKOUNSRFEyeXQvTW9ZWW1aUlN3ZzF3YXZYdnlsZ29pM1RmVDY5YVFXLzVXUURxU09BVGt0VjRPNFBzcWlnREMyTFVuV3o0Q3NYbVF5OTBjK2lidUhTS2RzTVUzYzZCTjNIUlRWUGhxWDloRU9BSkNHcWgvdzE4aTdWR0Z0UDI3M0JYbWRiSkRLMlRZUlVmUFFwVHNKMU9qWktFWHRyTnFacklvSUlMNEZuVjhCNDR6NGNjL3Izb0F4UFBlSW5ialR6cFhEd1h6eVJTNklobHdqblV5REJDSXdQLzJEQTFTWnBLaHVtZ1ZiSTN3ZE5XQ1NKRGlYd2FtZVYwZ1J3U0pXUHRUdVJpT1lNT3drN1lBemFmRGZQWlBEYTcwT1EyT3l4aWg4VmlOcUNpTVNrTUNrT3J0a0dONFh0OVhQcXo3K0lyZjlQdC9kMmJsOFBqNFB4UFAvMUQ5ZUFuajBFY252Zm5MNzdBSHpKVHk2azh2NzZEMStGeisxMEJWOEFSc0tGaURaajltTjlzOGhwRkxXMU9pMXdpdDZoS1BxbHgxQ2QxdGpRSm0veXRRYWs0S0kwcUU5cUVObjNRbTQ3RnZJR1lKQmFJRWhFU3c5ODFSNUNCWlBCU0lPUUxlVG9FUG5QQVRGcElTOGdhdG9mdEVVY01JWWRZckQwbUd1b2w0OGhuanFkVDhXdzhHODRUQll3bytMcnp3b2V0RDJoMmlqVTcyN2JVRDljUHIrcFptc2JTUys4TTNTYTY3VTZyWnBsa21XWlZXejA2cEtzMFN6SE5VdXVkdHdsdkQ5MlZYaVpPTHl1c0htNFlidGdzdlZlRGFlOTl3UHF3YU5zR2Y2aGYwaC9zRG1jaW1VZzhIQXBob1ZDQThBcXYyTWhwZDdXN0hCS0h5K28wb2FKenFsRERWTkwyWnRHcXRXUzhYbElmYjhuSXVtWGQ2bjdqZXN5NDNyNXBxM0FydVNtMlhoeGJuK252TG5RWCtqTERhTVNHTjVLTWVyUWJrSG8wSUVzcDdaWm1tbUoxV0t5T1hMTlNxTy9RZGVqRUhUcTMzbVYwR1IxbW13MnoyU3d1azBockptS284cGdiYVR3LzdPU2NTZC9LUjhPRGJpdkJMSWZON3JBN2JDNnJHN082YlIxMnE5VmpIWGVtMVljR2l6SHRJV2NFYzBiYzhaUXc2WTBGSXVKQWhBZ0ZFVElKSXA1anZsRElHeEtSd1k3MmtDVFVIblFGSFVpUTBBZ0h6RjU5aDlxSE1HSU9hVW9XUEllNlFjWHFLTjdEcG9iSFEyU2loNWxvU0MyWEhqcHdJd2NacjYyUXhZRURYTG9ObnNOL0VFN3doLzBSZjdUR0gvVkZmR0ZVUWw3U0YwYTR4MmYyMm4xV242WEdaL0daL1NaVXpIN0xRN1JJVUxYR2k1VFlkRFM5QlBBTTFodndJcmdLTG1DL1VieUpmMkFSZkpTM1kxTWdNaWdaalBRa3NwbHNKcEVMOTJEaG5rQnZ2ekR0VHR2VFludmFtalFuekFsalRCL1JSM1JCYlFEejhDTCtNQkVPSWpBZVppd2xHUXNrc0VEQ20wd0pDODV1UzE1c3lldTcxQ2wxU2hGclE3NUJXM09nVVlTbXhRUzZqdzhGWC9EeUdZY0phVFFUcVZNanNLdlRtOFFtdmRvaEY3WHp6a0s2Q3pYMEdCNWpubEtTbENHb2xncmxOclVPS1RlZEFwbW5EbTdWNDFwNEVUVUJYc0phRHk5akY1ZFRCYjYrVDExZ0hGWnBwalhabW15T05pRFJhcWozcnhNdFhsS1dVbWw5UTMxRDJ5cjFVa3k5MUlLazlMYlFuWm1sNHN6U25sVmpwUFErNjRNSWdBWENDT2FFQnVOOTZiNTBJWmNyNUFycHZzUWdmY205QXIxTW9XcldZL3JtQmx1ZHFGWHFENkhKR1ZMRnRDbHR5cGkxZG1OV05BV1IwdkgzaExyRm9lNW9OcGxLcHJyaWVjU0FmRStnWDlUWDZ6RDFTbnBOV1YxU1JaQ0NxbmNablRZZUdaazlTRm04QWE5ZzcwRUE3Y0NOOEFuZWcvZVJ5WHNsOXlZMzU0Y0hoZ2Q2Tm1aMllKa2RvZnNmRmo1c3VWKzlRNnplMGJhcGZyQitjSFgzc2hTV1dyWWt1RmprUVM2ZWVHUUxIOUVUOHdyZFRtdGVrcmQyR1ZITHRIRmxXSWFGWllGV3BEZWNyUmFaMkNJenFMUzZFa2l4WWxhNXpNVkVwNnZxVUd2Z2lmQnN5RU5JaTRrWHd3NDRqWSt1ZE1HejZTNTA5Uk1FaUlrRGk2Z29uSWE4TkNTMlFlVGRuRnErbVhxRjJzcEhON2lRUU0xRDM0VGhaRHJNYVBjL2FlQThtcStFY1lRR0pzTTUxY053QVhVQ1BCT1hVKzg5enUvczZIUjEybEhSeThlZGhUOEF6NlFtMG0vU0luaGRCOWRwdEJ1dHFKaE1lb3Zlb3JHcTdKaGRKWE8zaUpwYkF5R1pSQlpTbHZodXlGb0ttS1hnN0J2ODUzelA2VklxZU9sT1FjUGp5M2JlUEl3TjMzeDk2cXBEU1FndS95Y3lra3A3ZlFnNitWSUJWSWdrbVFnbFF0RndPT0lMQ0tvZVI0d3BJRTUybDRMdU1NSHdKc0JnMW00NkFidnBlU1grRkdDQ0xpQjNkeEd2YWpScU1NcnY4Y1ZGekEyOEtvMFcxbEtQSXEvb0puZ1JtN29KUFQ0aTRTMDJybXhyRmplM3JkWGZMV3FXRWhFRVhTTGFwQ2xMejEwbWlMUWxaQmxGUnBGVEYzUUZYWjl4d0liOENjYlQyN1dkakcyUmJJa1BaL3ZRa1Z1ZjJJb2x0Z1ozUFN6MFVLZHlxalptbFRsbDhVWlZWbFg5S3NKbmQrRDl4V1hqNlllb1NmQkJ1SnREMzhPbEw2RXYxbWowZXBPcEJyL0RaTEphN09od090MXVwMVBRUVhJN0E1M0J6aWdxaWN5NHN6S2QzZjFDeUMxM1VjOTc0Z2tPSG9NTjlFNU8xZGxqbGlGS1lrVnRaVzZqWEl3b3dlbWpQSGdOenFWNGNDNmIranZEcmxQb2RVYWxSV3N6MXRpTURvdkw1cks1bmUxdXQwdlF3WFg3MjMzdWdDdFlnOVJwbUltMFc5RDBvMCtCNndUMGRGVDNYSGdwOTUyT3A5cTNpYmUxZDNSNVJCNXVTRTlZU0hQUVdCTTBraWJTVEpyOWRvLzdiWHFpNEgzdTIzQ2l4K2NueVVnTkdTR2p3Vmd3UmthSWNDaUJ0S21uUTNsUHU2VDlubzdyNXdqcFMrQmNaclRlVHl2elRIeWptaG5ibllobGFtb0QwOW9aUEh4blowTm5ZMmNUS3ExSW1HL2lLVHA0bW01VDBwRFI1V3QwZVcxZTI2M3RObVRNQ1JwNVoweERiMFFVcG5BN04zZHU2QnhDcFRjLzdxeEhlQmtQTDZtSTZHUHFwS0ltcVVqSjBtM3B0cFFzcVlCbjBMY2hEN2w0TTdkcXZ3NXB2NGx3RG1zWXprY3o2VkwyTVB5Q2YxaFJmZkMrVUFwcGt2U1d3dkRROEZEUDVzeE9MTE16OUFDalNSNVE3eFNyZDdadHJoK3FIMXBWV0lZTSs3SWxvY1dIVjVrK0x3Y3U4UEw3L2IybGFSWWJuV2F4OGpUckUvWDNPQzFJNjFpNkRJeldpU2xETWl3azh6TVJkR2VyVlNhMnlwQnJoQTZWUVk3UWlyek4yWXp3VFNDTVZHaFlGZE9sZEFkVmFML1E2K1ZVM1kwbVVpdWFTQmNpRGZNNjR0VVNPSi85T3VKMVNicGFQK2Z0MkJ4Zy9ORklmN0k3MjUxTkYwcWVNakc4U2JqSk1Xd2NFQnNITkFWWlZvYmNpVG9FK3VwV0JaWWpRZmdWL1JvZlhyaVBOMXl3NjlFRTFvZFViY0kycTBxRGpJdW16WTZjVGNUZUJMUElkRCtjV3owSXI5NlBxbUxCeTNBOWZKcXVRV0FUNHR4dHdVMko5ZG4xMllHZXdtQmhzR3REZkFzVzMwSnUzL2t6R0xxVVhCRmZKWTZ2eXF3ck5CWWErOXZXSzljck4rbTMyanhlQWY3QUg5QXNPU3gvL3JVeHdIRDk5NGFCNGJhMlN3bFY4RmVvaXhlZ2lUZ1BMa1BtcUhocUI1KytBSWEzWlFaN2MrdHJjdXNqMis0VGJyUVBHL3ZGeG41MWlidE55WFZSTExwdUpiRk1STWRMSXExNmp3dFBvVlVjdW9IYXhvY1lOeEZ6bHdCMHlJN0FFa0szUGd2bXMzZ3NWcUcxM2VLMmlOMFdwOVZ1WXlKWlppZm1OQnZkZWhITlErMlpZNFMvb2hZZ3ZKK2duaDFCZGg3ZUNLL0M5NWJXK0d5OXhnSXptVlJkc3BRczFScHJRcDF2YWdqVWkxYXZjNWdiSkEzbUZyMWNMVmRyRkVZcFpwVGEyMXIveVZMZjk1YjV4cTd4alM3d2phN3VIWHBwTDMvTnB0c2ZYSTJ0ZnZBcHpjdWliWnRLeUNIUy83MmdXdi9RUDFuVkcxM1J3L0RYeTR0NlkxZjB4aTduamE3bFlYNXUxY3lza3RxS1pnWGpVN1BEby9HUU5TTmI0VHgwdFk3UnFMdjFTTjArd21qMVo5R0liSUFYNFR2eDE2a29ZMGI0dkJ0TXkyU3Q0bGJaT3NQZG9ydlh4WHFSTGUwMTNmdWtrT0xUODBacWVMZVJTeElyeFltVjJicmVGZ3pmMmRzeXBOeHN3SXlidDl2dkt4bVR6WkxOOGFGc2IxOXZYM2JVbUpBbFl5TGlWT1U2NFEzMDNMSTU2U3l1Wk13Sk5jUTBUelF5M3JESzJ1aVExOGdkTGxNSHduQWRya2dlUWU2OGRkQ3doUlpSNHdYMGRWejhEcGhqNE80MVhKZ3JMdUpVd2ErNmxOUjE4TGJuVmF6NDExNTI4V05FYWliOWpyWGUzdXBVMWlpZGJuT0pranVjUlpTeTFsN1Q4TGt3SmFDbmNjK2xVNlo2YTZzRDNlUTRlSk5UNHN6YWU2M0RNK0U3QXZwcUxsekgxRFdkKzFmNGFtUkRzTStmcThuNXZSSEdXbmk4Wm9WZjRsY0VXeUxyL2txL2l0UXVGN1lXZjhPcHNtWExuWXNVcCtHYjhCZmhaN0NlVDVvWW40MncxQkNXMGVLM2U1RnRPVWtBbDNCcEl5eENPZHpId1RmUlM3bXo2VlBkTHJmRFphc3h5WkU5czdzZE5VNHJCeUdkb0p0d2tjaWNtZkl1OU5IdHI1bk5MS0F2NVVJNXZZODIwaFFIa1hvYm51ajErUWtpWEVPRVIwc2dGQWdHNG9LcW5sSHJDZnNacUpCajJJM1ROMXIwTnBQZFdtTzF1NXlqN0E2RTdCSjd5QmExSkdnYzNpaWdGM0ZoZGtUSW9aOUd2c0RUUEppbmhKeXFoQnRPcFlSSXNKNmcvc2d1VG1URTVRMGtXbUZ1Sk5vWmkwVWo0MDZQTUtHMkNMS01kb2ZMNVhEYUhUVWwxd2hOWUR2NlFEOUx2eVdncDFJZndLazB3V3RxNitoUVNqcVU1bEs4blNEOC9rQ0FJR29JZ2lTRDVRTStCTjhVVk5HL295ZkRxY1ZydjRPZENBVkQxQXo2MFc5czhGRkVTOGo5M3VvS25NbDBjaVlYZm5wZ0ViTjFZQ3dCZUNaRDRjd0FueGJTVStHalg5dm9SMUVQRUlFcmlrc1EvS0RXc2FrZFZCc2ZEWXdKY2RiMC82NkRzeEFEWnRFWGNhcmVvd1ZRd05wVDVMSDNqS2NGUlI0VThKZ2x5THNaV3o4VkVadVBaeEYwZlk4ZlpLS0RZdVJoUjBsVWdwRVFVNUNIamQzQTFSbjFCb1Blb0RmcExGb0VYYlFPTGViUXVyVTZJZjV3YTFDWjBJbDFpYlF0SzhwbHl2R2NkRmFZZGFTTVViRXhhaVNNUG9QdnFEdDQxQjA4Nmc0ZWRRZVB1b05IM2NHajd1QlJkL0NvTzNqVUhUenFEaDUxQi85UHVZTXUraXJrL0UzN2VqdXFiRm8xUEIzSjZ5TDROUFVpZjlqZkUrd1NCN3ZDaVZna0ZvbVRTUi9tU3lZOUtSRVM4c1hMN0liVmt0V0dCclVVSGVwbVl4MW1ySE9zV1NtY3pLdHp0OXBWWXJ2S3JyT1pyVWF6MWVTTU9pUFdrREZvSm5Xa0NpTlZ2dFk2ZE50S1lrMnNYaHlyeXpRWHBBWHBvQnFKdVdIenZmWUhHZXBhbmNlbmsraDhCdElZTmtZc0NWc0dzMlZjUGN5MjF2WHVYbWRXN013NmtvNG9La0dISC9NN1hONE9rY2Z2OVJNU3drOEVDZVFyRXNsQUZzTTNCYkxlM3ZWQ0w4R3BHam4vaXVJSENBRUoySERORmZ6aUI3VGd3QWM4cHZQengzYitqRkxuejZUQy9EcHZTMEFwRGlnSkhXRkN4VWE0TUJmaGIvZUlPc3BMcHc2Ync0U0t6cW5FbkVwM1M1MXdFYS9lMVdaVGkyMXFpOTVvTmxvTWRwMGJjK3QwN1ZvUlBZMzM0TDFrbkptOGc1a0NPakw5c2ZWWWJKall0Rlc0ajdmZTEwdDJpY2t1TW9tODIxZ2tGQTJZQXVhUU5XYUwySlAyTHN6ZTVVWjl3RGZ0NDIxMWJES3VGeHZYcS9zUnh3b05tZFZ4TEw1NkdibVlvWjlLdHJ1VGtxUTdibytaWSthd1BxakNnaXAvVzczUVc5bys0SU1uL2hxZVdQMFl0US9QVWpIcWFyNmp3OTV1RjdmYjNYYW53K213TzIyb2Z6Wnp1MEZrTkl3cVhDMnBDV0w0Y2sxUVRTb0pqRkFxZkhLUlJ1MTJxaVZxcDhhbU5XbE5DSmVxVFdxYjNOVUtUMTBqSUR5a2x4UWpWNWdNRUFHQzJiU0YrVU1SYjF3VWk3c2R5TnQwcE94cEc0Wm4wN2FNdmN1Qk9icHk3cndvbmZFRk1wSk1JQjFNUlZQUlJDS2FpV2FDZVg4djV1VldsZFZzS1pWaVZNdk9RNkpCejZNYitDTWFKckVDRFIvUEFBMzBPaVdsZ2U1T1ZmVjZPUFZlS01Sdm9jNkhHL25MbGV1VWQ0cld0a1J5S29rcVp4bmNLdHdhSHV6S2lYTmRmWkdOb256R1pVUHNzc1ZNRVQwOGU3TkF1MGsyMk5EVDBMTTJ2VEtFL1kwV1R1UTEyMXROTXAxTXAxUnA1QnE1b2MzU2dsbGFuSTMxcGEwd0xlSndTN3d0TFUvTHM2cHVYYmV1eDlSdnh5WkQ0Wjk0TzhLYk04UDl3LzNkakhyR2gzMGVUdFVTTkxFaFk1WnhlQXA4Q21GOWF2M0lNRlRUdjRFWEk4dXdEZmJBOC9tUlVDaE9wSW0wTitmdTdRZ0w0SlhvOWtWYyt3dnQzZjVjTEZNVHkzU0ZlejE5bnJ3OW84dm80b3BRQzdQbjNMcEpQNmdzS0F2eUxta1N3N2RJazIyUlZnTERYMm9sWkQ1bFIwTkhvNzNaMUd4cTB5cVVDcVZXWm1vMXRicWFmWTNCMllJbDlDbS80M3IwSG4ybnNjTmMwMkYybHhDKzNXRjFXcDFtbDhHTjRTOGpSVEtJRk1rTnZMdlhkTFMzU3RwYkRVaVI0TnQ4QVRTVm5oblZlYlNOK2h1YnRvMW4wZ25hbWMyM2dGdFZ5REpBQmd4QUFGV3Fha1lyNHE4WDcyYUdieEdYMFl3Y25CcFZqdGcvVkk1VEVZU1ppZWpocjhNWjNHd1RoNzZHK1lPQ2Q5SXFwREZWOEM0STZHdTUyUUVPbkFuQkxHNFYvUWc5N1hWcXdlK2g2azJXZ1JJaVVQNDMvajd1TFNQSHUxb3RXcjJqUnU5UXRjdTgyT1c4SVZkZlo3ZS8yNThKSnhMWmJHeVEyUDRJZGJJQW52eDcrbGh1SHM3MDkwY3k2VkJOT3RUdjIrYkdYdU90REt6cmJIWTBPMlJHalZxdE5EYzVWa25weXdVVE96aFY5QnpqbDFUcWkrb1VwYVBQZ2hJRWppelVXM3g3MnB3eUpBMUpiVndWVVVVVUlSbUprYkkyWDR1b29jbGxhNVcwMnVSbXRVRnQwT3ZNR3N5c2NXalV3aFpTRWRlSzQ5cTBJV3VXb2k4TldzeWd0YXNVUWtWQUhkS0xRL3FvTVdGT21GUFdqRDFqVDl2VGpoeWFQUmxueHBsMHhsR0pPSUoyTEdqM1d5MUNrOE5pc29xdEpwV3I5YnVkcVhyMEhEMWhyYUJyNmVEYUhXMllkTWZEeHFkRkc0Yjh3WDVKUDFtSWRNVzc0c2xrSklORk1rUTJMK3kxNVhVWk1mNmlMcU5NU21PRlVGYzBuc1RpU1RKYkVHYWRhVXRTYkVrYTR0cW9OcW9PSzBQS2tDS29JRFVCclYrSGlxRVU3N0lFN0FSbUoxekJzREJNaENLa21Jd2svVmxSTHV1MGRFbTZMSEVkcWZCMUNPZ0Y5Sy81TVNJU0NZa2pvUVNSOWlWZENWZmNIWGRIWFJIbjZOWWZqTEQ3YkJhaHdXbTIyc1JXNUlMcTNOcUF6cTlIWmJRbTY4R2FtQ25XK2pROEgrbTRNMWhQd1hPZ0IwNW1VeHJxU2I0aUxvdTBCYkZnVzZ1L1JYVExuZnFtNVpLclg1Zzc5NFdya1dzcnQ4dHE3RElYZ3FjdDVjMDlFVmxjY2UyMWdyZm5QdmNjcDJYSC9ZYUhSYjA5L21CQlVnam13OW5ZOHdzRmI3OTl6WFB4YkNRZkxOUUVDLzdlUHVIRGh2dGJkb2hmZkhIT094eTZoYjZRbjBxT2FycVlOV0tPbUVOR1VvK1JlcDlXTFZTN0VhUVYyL1hJSEtMRGFOVWovYWRIWFJKcGRhUEtGaGxIOUlnMVprOWc5b1E3bFJGbWZDa3lJU1lUeUI2Z0l4Wk1JQldjU1BwU0lpK3ZhdVRrYjNQSXh1YVBWZEVUaWtzWWVQUTZFejZsemtXR2JTcXlaVmRTZTM5V0NQVWZCMUR4d0hjaFZOZ1IrSGt4MnV3L3FXTGh3U2p0UG5nTVZjZmFVenlKVFFuZ2wzeG9vazBmZlVSUFJ1YjZYSGpHdEE4NUl6dG80NCt2VnRIMW84L0JOOWw3RHZYWTJCdmd4ZFE3L0dsVDRibjBHZlJrK295UExvQW1hRUozVkNBZGhvd1FOUi94ZWdFeVF0UjhCdUxUbHlMcmRBWThEYzVBMEE4QkJqYXlxWnY0OUVJNGd6Nkhua0ZmUlo4R3J6cVB1OXl6MHJ0RzdGM2piZkMyb3FMdzZueHlBZEtXdnB3MzZVWElwTWJiNngzeWJzSzhtenhiZHlEYkFhOURyaGRER2czcGFWK1VxRmNqNnVmUVowSXhVbjRmVUdmdzhTL2hRbmphMklvWXRZanFjcFVxdlpibnU4dTN5dGVNTmZ1OEJvOEkxZVh4eHZwOUVsKy9iN1B2Zmd4ZXh6ekxMZUdoT1hEd1g5bHZXUVdya1grd0djNWd3VC9BNmU4eWthVWRTTTFmZUoxbXpWTEowaldLMnhjS0YrWnUzN2xHdkdibjA1cTNSRHZwSVRpZDJ2enV5R1ltNndBSjYyYW9nQkhXcXpEQ2hpdWhFazBkSDRtcUoyT2hLRHBDQ0d4aUNHK20wc0tVTzJsUGlPMEphOHdVTlVVTklUM1NxSHFkVHl2U2FOMTJoQkh0QnFzSkhWYURYWS9aOVc2ZFZxanhhVW1kbU5TRkRPZ0JVOXlhdEdQMlpNcWRGbmxLU1U0cDVkZ2NwLzkwNmdzOWdSYkE2cnl5K2czcW5CRStuUG95cW5ZNXZPRDcxU0pVOU8vZE14cUl0M05ndmVzSGxTdzY0dTY1ajZ5YWhjeldWSG9DdFFCV3cvTlVZN3U0RjE3d003UEhqakIzN0llOU8rTGt0TmVQTkRudG9NNDV0R3A0QlJvUG9TL2VNY0dUcTM4SHg5UGppK2VNbkFuSHc0bHdQSjZGSjVuNDZRUVJqVWxpTVNLQmhOcVJNTWJFTWFPZTBJZzBlb2ZSS0RFYUhYb2t1b1ErWmhTYllnbEhXZ1JqNDMveUkvbWY4QWorK3VoRFZVVytGYkxuS09IV3J3N21xUTU4UDA5MU40S3ZRc2pDMTM0QjE4QkhmNUN1ZWdyNEY5TlYvNk81cW1qU0gzbVc2citZb1VxZE4vNm5WNE9Md0doTmlKRS9wVEk4KzhYSTVKK1JFc3N3NUh6UFQ4K2t2UUl3K25PaUFYbkg1eU5YZVQyOGdvRHo4QmVwNnVKMWZIb2VGOS9MT0dnODc2M29qeXU1TXFQY3dPelFWdXVabUxOUmJWRmdGb1d6clVuWVRMUkdwT0tJTktuSWFYS2FIdjJnR2JNTWJuQnVGYTBmQ29RR0pBUEJubGcrbFU5bHNzbnVaSGUwbHh5Z2taOWpidERMTlFiTW9KSGFHMFFJbmhxOUFiUEVITEFTRHRKQk9vUHVJT1lPdGdkSllkUVhJY0ppSWh3T3h5UHhTRHJLN0ZMdlRRNWx2SDVCMWNpNFlnTnNaTG5oL1d6b0xqYnc3LzhEYllNbjMweHpPTi83eXZUMWZENXRwVSsrcnhaNi9vS1UyOHZGZXVobHlhZ0piRm54QWY2YmN5RzJEMktUMzN5YnZnTmVoTDYrcnFpRTA1SGRuVjdkQWZrMG45SWl4UFhWMXlmempTNkx6U2EyMmN3dW84aHM5aEVXaVlVd2s2YWdLV2drRFFqS0diUSt0UWdQeUpVdUcvS25iVnF6QVIxbXJVMk4yZFJ1cFZ3SStkeVlQeHdNaW9QQmlEOG1pa1Rjam9nRVh4UnhST3hNUWt2TUhrY0lNcDUwWjBUNDhueldIMFErZERBVmlhTWprZ3htc0dER2orQThIdWhnTEI2ck9BWHlXWEw0T1Z0ZTNJZ2FDVCtIZklSZy9scFUvNVcxZ2pxRnZlTHI4ZnlBUEtpTXFxUHFtRFpsU0JreTVwd05zK1h5cm9Jb24vTUhzNUpzTUJOSnhWUHhlSkp4MEVQWlFCNmp4M0hkUnB2SmFNYk1ScDFETFZMcEFxVlhLOWlpcmhqR2dOUnNrWURuc0J6d2JQWUx4U0EvbXlMamNVazhUcVlRdnJPbkRIRngzS0FobFNLbHhtNHdTQXdHUjBrRGErSUdzU0dlc21kTFFYRTZVQ1RoT2RWdU9JbWVSQ0c4QTgvQnM3OC9EQzN0ajJocFM3VFNpSmFIQi9PZWY5b0NPL01VZWZBcC9NVVNYdmhWVWZRWkJQdFlpczhoK0lRTnh4ZEYvR3pHSDB4TDBzRmtKQmFQTVF3djVTdGxFRmxYeHBZVzI5TG1wREZ1ak9zaUd1UjdhRlIrVklmS1pkTklORFpkYVp3dE9wc0dzMmxjYWxTaFgxM0tWZ3JyNG9hNElXbE9JNzZuTXk3VWYrNW5sUVpUSUlMa1BPS014b1dKQUhJRXhKRklOQkFYSldKT2MwUVNNUWVNZXVRaG1jeG1NZklwbkhwUjFjaGxkTS83OTBFSllwbHI2b2ZJQ0o4M2ZpcjNMbHJDK1lvYjZpRGJBeTRzNFBJNTdFSkh1OVBsRkR0ZHRuYXphQnEzZmdZSG5zQk5KcngreEI0Lzhzc1Fka2UrV3h3ajQ3NVVGd0pneUtGQlRxRWpab3RZUXBhUWlUUUdzSURSNERVd3ZnaDl4K2pjb1ZyWVZHUHhKZjVOa0VPZmZ1bnExOHB6Nk93bmgyL2dWSjFMZTc2Q3M1VFZMOEJ4OURoNEFIOFI3cHZGdDJwTkJoM1M5RHF0VXl1U2E0a282bXJVRVU4SUU3NG9HUmFUNFZBd3dpd0tCbUkrekJlTGVhTWltdlVjeDJweTJkRm8yWTBXSXpyTWVxc2FzNnFkYU1hMEJlUWhsYmkwSFFCSmNKYzVqMUJmdnVCQ2VuTHY4RkFvTlNRWlNoVjZNaHNZMFVTVGVtMTVVc1BMaW12NUVNM2xpOTZtc2NrMHR1K2l1WndxK05FbzV2KzZzb3o1djY0c0xaUysyUW1uTFlGbmQ0OHUwbGRUaStBc2ZDZjFseDhzMC9Od05aeDI0QUllUFh4Z0VRZmZDYS9oYm9VVkhIUlJTbGRRSkp6R0hTSDI4K21MdVEvQUNZRUVrU1RTTlVTYVNBWVNxRVI5NFVCQzhBSkN4Mi9EdXYyUSt4cmtmSVNNY1JkOEMzOGRpcWhMK2Z1NGlkczVmK2JTeDhMM09GTzQ5REgwZTV6OTNHZWdnKy94V0xWZWlWY2JVSkpTRFArWWxIRnU1WkxkWkNHUTlhVnFVajV2eUNPaVo0K2N6WWR2N2FmZjR2NTRRUmlLZU5BQlQrVEFXaDd0b0UvaVFOL0JCZUw5T2ppUEZpdXAzWEF1YXN4Z2FRUEJ4ZmlTNHBMaWlYejZ1QS9XM0lXYzdGQXJVVU8wdHZpYUQ3L2NkbGR3V1dsbEk3ZTJyMkhOWFFKOEdCNDNmZE45ZVhQQjN1T29jZlQwdXZzT3YxcDZuMjJIZnF0WXYxVzVzWFhJN3hXTUxLSS80T3Y3N2NPYkRyOFVsODIwTzVNU05JV1J1dWJIbW9tR3VzTXZoR3ExWHI5TzR1VldVWnhPT0l1ZUFhZDh1eFBEcjZyZURDOUQ0akFIbHhiRmNPb1BOMlI0ZUhpelQ2bjJhRVVydVhmZWJkVXVseXpYcnBFMU5EWTBTdGRvbG1PYTVkYTdiaTlsNkN3WHA1Y1gxZ3cxRGpWdWt1M1FZdG9kdTJ3UHBGS2RTVkV5MmVsTlNKQmdUT0hpTzBhQ2ViNjV0ZDZ4cXJTOUJZR1BrRHFtVCtxVHBpNWJIclBsWFQxOXdzZVR1NGJXaTljUDdVZzlLdG8yN0RBWEpJeVNwOTlIQXZQb3AzRHlQbFo0UHp4OVB6dU0zRkdwWHg1U2lrUEtxQ2FoVCtqVHBxd1ZzMlp6cm01UmQ4NGZRa285aEN4K0lwbUlwa05aTEpUMTV4RVFjT2F0V2JFMWEwcnJFcnFFSnFvTVlTR2x3aThUeVJRdXExS2l0R3BNZW5TWU5LTnZkWkZMaFY3dS92RjVNaDFEMmpTV0loRjhTTmtOQ0g4YVNJMWNxTEJyakVpYkdyVjJwQUcxWkJ5Wmg3ZzluUk5PbzFYOHMrRnIrMy9SS1hYSWpSNUg1OEYvMlR5QU5RWjQra1FsdkErT2czd2tVR2hncVJNUlROWHZLVzlkb0xiQ2kzaXBSS2NuSnZIRXlFNlB5TlBodHJlNzNFNjNvOGJ0Y051Wk9EaFRtcThYME1kRExtOHdmL0J0QjNLN3lxQVZhdzF5YTZOSVovQVJDRDRUcHBBNVN0Y3VGK0FQNUZjTzEyK1hZckx0OXhzZkZXM1pRREJiK3FJOXlWdzJoN0JzcEJlTDlCTDlnOEkrUjQrNVcyenUxbWZWR1hWR2taQkdzSWkwTmRBaWNuRTdQUDZRai9BSEErRWE1c1VMUkdTMGZBb1hDYW8rcEJaL3VXc2ZDMWJ1aDJmdmd4ZnZRL1A3Qy82ZmFjMStxUG56UHZweEx2WE4rTnZtb1dtcGQ1cHFUS2d2bzZ1dVJOUXBjVWF0Q1ZQNnRqY0VGOUI3OW4zTUxYUmtPdEJjN2Vna1MydXRmcWVGbEpDV2tDR2lMYXdXYk9NV05vZVQ0V2d3VWhNSitvblNIWjEyUTRla3c5Q2hsZ3FuN0lON2VGV2ZNUnZWam9lVGtVczRsZlZSZWV2Y1IweXFlL2ROOU9USDZZRi9hUU1kUFA0ck9Ia2lvdjB6dDlIdGFmOElMditzR2g3M0ZWVEFIV2RDTnY0eC9nV2NYTHllVC8rS0ZqMi9xQ3NkUmVnbUVLd0pCbngrcG9QNHh4MGR0bmE5dUYzZm9WVUw2YXUrNG5tb0dnNTl5WUVieDdxZW0wWWczeE5BN29VNFFzU0NpVkFpSEF0SElva1lBc1JwTEpvbXN0M0NqQ3RsVDRydFNVdmNHRFZHOWFIU3F4elVQcVQ2MUM2YlZxSzE2UzFHazlGa05sajFWcjFENzlaL0loVjRBdDZBbC9BU2FOZ0o1bVVIaEIvekUwRnZXQlFKdWUxQkNSUFhOd3UxRHIzUkpEYWE5QWFObnE0NlhYQVYzUEhSTWw1alc0ZGJKWEdyTEIwZG9xQ1BVK1d4d1FsdytuZXZmN21RdW9nLzl1VXZVK0drRCtINXBWVGdrZmw4YWpHY01MS1lXN1draTluOVdnc3ZoQmVVdHN2ZEJlY2pQVWp0NWNNS3BQZVkvU1NzTDNqYk5oSFI5WkwxMGY1VWVhZFBQeGJySjRZMkNEZlloOGJzUldsTzFVV3hhTjBhNGg0R3ZFK2lYK0hEQzc4OE9IOVVNcUhNcHRMcHhEcWQzTmJJUU1mN08rRDV0WCtvaGlkL0JmL3lKM3pUWjFTR1B6bzIyTGRqODRPUm9VNjVsTWVNNGdzM2NTZ2p2STAvMHNIc0lTZ1AwczZSSGZ4N29HRXVsMTVLZXpoWHdOOWMrNmRuZVhqck5pNTk1Ui80WnNRbG13VGYxR0Z6bHBiRE9YaHJCMEhHRXVKZER3Y0NmbFJiRGI3SjcvTjZtVW83T3pxZG5UYW0yTWVkMVhFcjR1eHVPUFVOZU9vZU9MV2FTYXltbnluRjFUK2wybjk2am5yYnhkOW1ZZFA2RWV3blBJOS9YSTY2anB4L0Jkd09oK0J3YVNsN1R6SEpwNGVoQUE3emFNSElZM3g2Ty9xOEhTSGNFZXFaa3RlUzNGL3lXaTZtbnZtWHZSYnpqNzJXeUwvRmEva2ZGVUlJU2xJSUozMzB4aXN2L2JFYVRvUlhUZGtQWC80VHZnczZLWkpQQnIyK2tDVGtDd2FDSklacmdpU0IxRE1XQ1BzaU1lR3dzVmVhRStlazZ5TExSS3ZxTGNwV1NhdFMyMkpmOTRGTUVNZ0VZMkUwLzhNeFgwSVVDWmZuc3MwcXRMaXNOcnZZWGtxRFhuZjVCbTRpNnJLSEpQaXVrRDFnTVFyTkxxc1ZmV3MxdXd3aWxkNGZ0RWdzUVh2VW5aZ3FGZmgwaEQ1c0NCdVlONGJGTFVsYkN2bi9xVFR5LzdOZFBnSU5LNUVNTVpzMHdqRXlnWkVKZnlvdGpMbWp6ckRZR2JZSG1iUnBhOENDZEl2RjRyV0l2QUVPTlI3KzVraW1qK1o3MCtmQmc5UG4vaDlPbndjUE8zMFFiRG9HM3Y3eWMyKzlCYm1zSVlqRFkvNzR4aCsraE1leHFZbkZ1L2svZllmNFQ5OVM2Zk55dkNNVWYxMERFVzJXTkVlbEtXVk9tZFAybUFZdzA0QmplS053RTdFK09paU9EaVo3a0szT0ZWTDlTSVQ2aDRnTm9nMUREdE9BWk1CVTBHWVZXVVdxTGRxSVJSdUp1alhDdFk1NlU1UFkxS1J0VXlxVWlqWnRrd2t6TlRVNDFxRUpRRmRSdFh4Njd4OWhaUi92U2JxU3M0OTdLY1F6b1hnMG5Ld0pKd05vcHE4MzljcTd4RjN5K3ZBS1VkMkYvRjNjY05CbEp5VE1pcWROYUhQYkhVZ0VIRGEzUlhTMzU3dFhlcFZmNkhEdzVWbi91NjJ3Qng1UExXSEJLdW91TnJXYWVvVi94Sy9SUkFWSmpBWWU5K1luOEx4UFhvT1ZyRDVZL2RybjhBbDRMSnVhVUx6ckY1TVhtc3YvNmFQLzB5WE15MzJCUm82YVVXbHMvczVGY3FUendtNGlFNHVKWXlXWEtoWnBkeUlkNUF6YVNlc25CWUd4WDVWdlJVMXRiUXpWaWVUSUwxTkpWRC93eXhSSXpma1YzL1A5dXREb2RHVmRlVkU2NVEwZ1hSaElrUEZRUEJSRkdpTWNDOGFKaFA4UXlUQ0Y0dTlMQVIwYmZmTDl0UndZT2xEUC8wOWt4L3lnV3ZpMzRsUDg3NEtzOUdMNm9yZm1jdUJEQityK3c1VlhvOHBIZm8vOG5TcDREc0tNelVYeW4wWWFmeGd6L0ptUnhrK1JlM2IvZ2VBdndWeHFhZkZSUGhQNXZvbm1RTStaSEZqOW54clVMalFISUVBMTM2aUN5ejZwaGlzK2grQlB1UEZnaGxVMmxrckhjald4SE5IZCt6TkFTQ3NwalNuRU1VVktrelV5clJhTXRob09lVGkwcEJqbkh3NXY0THNQaDFEbUh1RDhxenorN2JlckFjVjc4QytweHEveEkxc0pPT1E2Z0l0WkJ4aC9pSFdBUTZ3Q0hIWU5BQm5yYTc3Qng0NHcvdWxQSEdQOHk4UDNIQm1hOSs5NyswVWw5UmljelJxRVYwSGxoMnpxVVdqbS94dHp0Wmljb1orZVlYWlhjR255SG5IeW50emF2c2EreHVHMnphck5xbTJtZXgzTDZQR0NmeGdPcjV2QmdTZitzM0Q0SVlMaHlYdWZJNTdvMnIycFp2ZW1IVHZ6VDNnRGdoL25kRkhKY29oOFZLTktSNTQvYkliWGovUEJQaTArL1NPMW1CNTU3b2dvTUlFUW12MmRibHQ5Qktzb2g5WnQrS2MvVmJzaDNVWWJrUHQ4cUdieVVGc08xVmZxMXVKalk3VVVmY0UvNE5TWXlGNC9zM3BYNGkyemVqZmp3RXY4YnlOOUIyOWEvZU4xdkQ5OHMvTDdOMVl2aHBNMGNGNExZdGFMK1Ivd0N2LzRlOXpTL3JqWHFaOXRDUkN2bGh3SWxkckN3MS84ZnJ0aHcvZFdMZUhnbU41OW14ZjFTRm45ZkpzZTFVejV2ejZ4cklKdzVmK2tFanFIdm9WSjAvb3BTVnA0ODVHa2FlSEtReVJxY2ZFTnhadDVCM08xQnVCQzZuaDRLWnNLZlgzcEdBRVpHUjZSL2pmbWJ2Mm8zM0J4Y1NmL3JlOExQWDNnQVB1L3VmUFZxUFBTVVkybmg1ZmlMOE5vMGY5TEFib1AwRVFlc1kvTStFWDRpNytNT0l4L2NKREgrT3YvQXlKRzNWNWNXMVpQU0dsejZFdit1NmRXdnF4cHk5M0gzNkxDMzJuYS81eWV4VDh0Yi9wNDZ4L3AycEd2UnJZaFEvMkxjeDkvNjkvQ2YvelR3NDRBL3BhM2xKejRkUk1yU1QzUHB1WlNVcjUxVUplWEo3Q0VYRVpLUlZLVjA0eG1wTmx1TWdnUlJnM2F4RUZieEJhM3grMUplOGFSY1hUWnM3WWVhNCs1WUN3WTgvb3ViWmMycVlyS3NhaWNhR3NTTnRpYmphMWlZNnRhTGxQSkVIcXRNMk9XdWpYT2UwUlhYSi9ldkZpeWVQT2FoK1RQd1prN0JBRWpZUXlpRWpaSExWRkwzSlpBRmpDUlF1TXlrQ09pU0ZGRXlVUktHSGRHTFNHeEpXUU02bEJSa3dwVVpFRnBTQmxVaHBSaFpWZ2QweWExU1dhdkRXYk9PWG9HaGIxRVQ2d2dqaFhTdVh3bW4rbExERVd3eU5BR1lyTm9lTkJwR1pBTVdIcU55RHhxdTFRcFdVb1diUXUyQm53Q09nSHYvdDcraFF2bmNnNlRmNmovK3ZJeHBxK0pQdmtmWnlQeThKMU1RaUozYkVMaVQ4aEdQR1FiNE9YRiszNW9odUJaZE0raFc0THZQR3htNU05dHlQeFJlM0FkYXM0V2ZCaWFpc1RQaGNGYmpzUW00Qy85QU55RnIvbUpLYUJIMWxGOHkrRjVUbDFhckJ1amwrRUgvK0dCLzE0K1pOUDM4TGlUSHYvenN5Tkg2VmJEU2ZCc0xieW9oTXhoNnlIZEdQemovNFJOUjZPMzRlcWYwM3pVenRIMHp1SnY0QlhsM0U1cUs1L2VUYjlpS3gwMU5wdmQ3a0NIMCtseU9Sd0NUd2ZIRStuMFpDV2ViS0Z6UUFRSmV0cklCM0FhRno0TDN5SklrZ3lTTlVHU1pINmFoQWdFL0g2Q0VIUjR6QjBjdTdYVGJEWVp4NTF1TkhXYVJYUVlQVUc5NWViUVcvSS9VaEJINDN4SDQzeEg0M3hINDN4SDQzeEg0M3hINDN4SDQzei9mWEUrOHZ0eHZzSC9LM0crMnc4UjU2UC8rK044cmFNYXoxaUs4NFYvNFRpZjlmOVduTy9XNzhmNTV2MWZpL01GLy9mRStiNDhHdWY3dnhMbkN4eU44eDJOOC8ydmpmTTFmdytQTy80ZGNiNno0ZGthZUZGcktjN1g5c3ZHK2RiL3Q4VDVuakcrc1ZnSjMzeWhHcDd3RlpSL2NzazduN3g3MlllNEVsNVF2TGFjRHNIQmQvMG9JK0pJOGlFZ2U4VENEM2dJSC9QempBVEJORElROUljeGY5Z2JpUW9UN25qSmQ3WkdUQ0ZUeUVEcWtPK3NLMlU4SzlVYXQxTW4wVGtOZHBQVlpMV2FIVWJNWVhRYjlFS1RGK2x4c2Q4U3NESS8vRVU0U0NmcEpOd0U4N1BJVnJmVnhieVpDckhQWnJjNXJFNHo1alMzbTR4Q3JWOVBHc1Q0THRJUU5qRnZQVXZhMGs3TWtlNXlaNy9kRmgxSUJrdmJvcU1sdjk2UDFIV3NQZXFNaUowUlI4Z2VaTFpHV3dPbytLMCtyMGRBSC9zK1Ard1Boa2d4R1lyNFlxSll4RzBQU1VLbEpBeGNPWFp6dHRIc0k2MFNLK2tNUllSZUg4ZEd6K2RIQStGd1NCd0t4L3hKVVNMbXNpR0xiZ3VZalVLajAyeXhpcTBXbzBzbjBodjlRYlBFSEhSR1lrSm03L21KcGZGNTlLT0ZMK3g1NWFXOTFlbmk0SUVaOE1xcCsrR3QzNDdWVWdEWjFKUDhuN2lmL0IvdkpzZndKVk9uU2tjM2xOZjhXM2FVZTNoajk4bVhOOG5qcVlYL2VKKzhOeUQ0Zk9TUC93NnBXbkxpdnlwV0RFOE9KVnJwaGIrRWJEV2EvODNDaGQ4TmtIeDlZZHh6cHhJKzlzZHJuLy8wOVUwZlY4T0dmWERoSjVlOCs4azdTTEJ1ZXhnZVQ5M0g5M2dEL3JBWWowNzBoLzFSWHd5RGt6K21GZHpWOUxyM1paeE1LQm5PaTVJeHB6VXNZZDdMV2dxdmpsYm5STldaL0NHYnhCWnloTjJSODlzRVhtT2dCSlVpcHBnbFprbU1TbE9HWVZiR1J5Sm1rWWt3OHpPMjRYZ3doUVZUL25SR3VNVTQyTll0N201Ykc3MWJaTFNNdmxQUjZYSzdQVjRCSllWbmZUODl3ZmZ6Qk9PMmgvOFQrbWJqeEgrVFVGd0pUK0NQRllTeFVvRGFQbFlReHNvT0VnbzZWRGwydkk5RVBwQkErSTF2M0tHRWI3MEExMzVjM1ZtOGtyN3ZXeldqQm83S3NTOWFzWHY0VXlDTGwwMTNldUlTVDN3MFQ1TFQ0WFJZeldLcjJhdzF5dWtUYVpYZ1N5NWNDTi9tNERMZ2VZSURuL3g1WTdUTi9LOVAzalp3cUhHU2dWOWk4bTc3dDA5ZU5UTjV2elRET1MrWFhxVDRHcHhWdmI2b1BYQVZuSXZ2cEw2RUpyNWVxbEMxNkRGOVM2TzlUdFRRUk1TUVNvM0owNW84QnVkQ1FOL0Q3ZkIxQmpwSlZBSytjV2ZCbGVqYVJWeWN5dVR6NmQ0NEZ1L3RKNGRFQTMxTXptekJYSXE4WDdMOWNKSDNPdEdxMVE3eldzbGFjNzJ1U2Rta2JKTXFtaFhOMm5yVFd1eEtHdXpXYy9XMzArRC84ZkF2bzJ0VDlibG1ETitXYSs2UkRpZ0hsTU82amNpdjJyalpzVVdFZjdscFF5REUvSVp1K1djZHNxTS82eEFmeEh6Y3FwR2JEL01EOFhTUmF2eVl5ZVpNd2gzMERyaWJaa00ySHNDZmhET3AzeDVaTmlhZS9RWHlNUmZBSFI4djQrR0JIMlprMHZ1cDFSKzlzV0VkWTlwejhESDZlc2EwNHpzaHI5ajY4d3c2RXJXeENtTExmeTVGREgvcGtDYjljUFljZi9rN2kxNDFjaVhWUk5Xd0lQNFZHOVlXLzNLNHROdERnY3lxQTljei94MWNaWHNDVGg5ZHpMemlhejcvOEcrYm9hdTQzNzYvSm43RTc2L3g4Z3pmL1AvMnZnVE1xZXJzUDhPWTVOclNxWjNyeFpsRUVxb0MrbGwxd0ZJM3RMalU3WE9oMW9vb01pZzRzZ3l6Skpucys1N016YjdmN01sa05vWmRtY0VGc1dvWC8xRDVhbHVwb3FLaXBXN3dWTnR6d3cxKy8zT1RHWmpBSU1NSUNQMG01NEVrazN2dWVjOTd6ajN2OWp2bnhVNXhKUFo5Z0pYb1gzV2dHcVAyVVJqWXg4SVBlazVOcXhUK0wvQXp1dVhMS3NncFlHSmwvdXBaWXpoalpjK3hLSXZXNit3YXM5cFFxemFvZGZDNVVldFVwUkN0Ukh6c3MxZktUbDdCMlFVeGVjblllbGVXYzRaMEhKZzl6TndFVjFMUG5hVXBhRjdSSEdpczZNdmZYVWsrUTBvd1JiSXQyaEpDUWkzTm5tWnUwK0ZjeEhLRlhDM1dDeEc5a0Q0UWJLVzdkQ0JZV0V3NzJwTHFqQjdSWnpyTW5kelZ2VDZpbTk5TnBKTkVGdHhVWDZOc2xEYTNDZG9FZ3JabVdiT3NVYlZNaCtpWExUVTNRSmI0WTVBbDhTVWR0UHV2ZGIxMEFKRU82R2kvb1AvNXhBQXZNWkJiVHpzTTEzZjB4NUY0LzdQK0Y3aHIrc3g2T0k3NmJuV25vbFBSSVVtTDBxSkVLOUhzaExMeERURHZLTU56K0hDQkNlRFNTcEtiSDYwcFhuWUdGUGdicFR4cjB3c2RXRlM5TXorallBTnZvVnRKRk16QU9ySXVmNGFmOFNkRHNHbzBrZ3hra1VEV0RXL2FZKzdVWlhtNnJDcEp0eVlKaTJBUFJVSzNnRXZ4Q3BOWWdFOXV4RjU0VmkvdjUvZkwxd3Y3R3ZzYWN3MkpSVWhpa2Y5UjJGZmRvOUpGUE9taTFvYmxLNWV2ZkZKVXIwQVU5UXNNODduVWIxbDRmaTdVeTRZY0EwdzBkWGlJenV3TnBFZEhpcDgrVUlVZG5tSmdQblVEYzJyaHRWRUh4VHVMOGZEOW96aUpiSVJaT0xYd2J3d2xSeG5ZM2c0WC9TTEZtUVBvMEtKUDlSWCtkVXhTUDZDY2dBTXVwT082RllNQjNjcWh0RGFuUEtuTlVrT3pRc0tUS0VTNmxkeFdpdk0wYTNXdkp3UlhrVkJIak42cUdzMkZlcEJRajZkdkxTZi9JT3duWmY4Sy9CalVIZUxzVGpCYkQ3NlBrcVIzTEFkNm9WK0JhbEJIN1N2bkROUlVJWFB1Qi9ld2pOQVVNS3NRczhxbVZIekRBVjlmbFlrWk8rdklwRmZaTHcrbHZSS2djdkRvZ1I5aHcvVUZCTjEwVW82OEE2bURPOHRUYXAxQVFpMVVjQ3BUYW8weG9SYUN5dW56M28rWlF3dzhsTzh2K2ZtWjZQUERYUDJQZkQxMXpJd1lLeHNRU003UEIwcU1xRDNaaktBemkzMGloVnc0WHd6Q2cxeFlDMzRCemdFWHc3a0xweFc1NStWaFBXNHI5cGhmM21NRWZmWmJkaG9Wbk9yUjk4VGNaWjJtR2lrTlpyVHBMVnFlUld2V21tQXg2Z3gwTVJyTXlHOVlSREFTRGtjUVZCeU9CQ093R3VFbDNGSEVIWFVTRVU3V21GQVJQRUlsOThJblpRZzlRNStGN2xFR3Rid2dYQnJDOXFDOVpxVFpSYXNNVURaZGdvcEpmdDVaanNyWk1sck40YUdEdno1Vmt4QjIrTHQ0SE9sWitKOTZ3TlZnM3I0M3dHUnFNbmkwZWpCM0g3b3JyODFYWTdmK2dacDlMMFhRLzk5S1RYNmpZR09objlGcC9Gam9ManFUWC9FYkNmKzQ2dzBXWmJ3VlF6K2ppRGVLdjdGR3pBZDQ3Z2dBTytCcVBXYU9RTkF2QjFkVDU0bnp2NklQMTU5TmVzRU5xQlRZckZqK2Z2cUFHbmIrK3Z5dlRpUkRJSUlPbkVDU3dGSThqTWIxWFExMW1OM2daMGZpMUhhTThvbDQ3NkJ2RUhHMit4RGk3UDFCWmNWRTZ5cWxrMkd2K0JvOWhEZWoybW1iTW4rL3BMb0JmTThDeDJNdjBJNUYwRzlsb2Z1THpQb0J1MlJGd3FMVkZKUGtRQ01TM1h1a0dSazlRc0x2SHk3aDdYaE5lWVpHOE03UnFLY2JxT3lwUzlwWVNrTUYrZlliY0RHNmpyeUduSXFOa0xIeGhQTTFncVZVUHhNOHhxTCtSZDJLcVN6TTRRc3ZndTRZY2UwOTRZVVhIU2d0dlZiSXhiTGpENzhvZzZ5Q1N3dC9MRXNUT1hqdHFtSy8vd0hxMEFHeW1yd2RHK0dnZFhUbjZFOXlKMncxU2d2em1BZTUyMWx6cUo0anlhaURaRlR2QXJNVGtQbTdnUVBVbFM2NEgxNVF4Nlp3NnIyamViZi81UEJ1R09mczBHcDZFOHorQ3RxMndBcXVLaVBoY3ZEVHNWZ1pJMlczZEE3aUdKbm9RTW5aSWFDcVQ0dGRVRXAyK1FHMFlTdUFIUXhVNWg4cXloZHFKcHU2R014VHBPVlpXYTVXbHBObkZXbEZXaDNYRW9wMGpWM0Mralc3WGRUZURLbGIwYjcweVlsVHFTdXAyZm43d1V3MnVJeGFFRlJHSkRGaGJVd1lFMFZoaVVoQ2lyaWdCayt4WG1hM1o5bzcyM3RnNlYwRjVmUzFiR3JhMGNIc0QyS0QzSUZEL3phNGVBZmtqNGhjVHh1c0o0Y2Q2UFBIWndqMTd0Y1RqcThQZlF0bGFKKzhCRHR6U0twWGdkdkpINENiaXRpTzJud0gxbmNmSFA5RHh5c1BQcVZYYXN0T1JJS1M1WlFlb3ZYS3FjcUplVlJDekNIODNSWW9vQTZoVzJVSGZraExxWDFRU2hVMkZqYitKK0lPUjBvRVNwcnlPNFl0emVRbEI1ZC9aNGxCUjZRdmNXRGlrYjRaOE9iQmh1K095TVFoSXF2ZkFyTzd3TVdyd0Mzb1Y2UUorTEFTUGNpbzZHR2hCVWdTRzB5Q0pJRmZzZ3JUdncxVkh4V2VPMUl3bld5cGRJeXNyYmVXb2JNK29YNS9kdWR3aFFyR3NkSzRqanFINjdYMFFmbnZiS2R6RGI4SnByVkxEbkhzaW84ZmdEd0xNazVocWxzRS9Xak9tRmlWdXEvdmtZR0dnWWJmaUxlWjZpbjBtN2Mzb1gvV2puV0hVMnh6bjd2Ymx3dlg1c0xwYUFLK0lxbVNwenJYTmNwa3VwRTVveG9KMXpIbkxFRHl6eCtGSU0wVTVwOTlNeGZkT1JxV2pYN2lxZ2JaRlMreEswU3ZiZlJEL2k0Wkh6TnowRCtmMGNtWlI4c2M2c2NITHhtVGRvYitmclQ2MmF5VUdEd1BVREJ4S1A4eitUbTVFUU16Q2gvU1NhQ3BpZE1vZEQvMVBCUTh6KzhINkRRd2tWMmVMWm9ram81aVVOdEVSMldRbmxWY252NVdyRmxOMTN6b1k1UWtheWJSdjdQUnI0YmFLMnpzWkI4M3ZRZEtqblVkU0wzQ0xKSy9nU1pDQ0daVFUybUxLMHlyM0hUakd3QzllUTMrU3BOTVBYdndhMXE4b2J0UHBZQTdoSHgrOWN0RDJPZm4wVjNnOWdQbll5Y09BVGpzejBlZkg5bWp2NEo2K0pRQXViOEJ4bDJSN3h4WjFYOUJjSmdVZE9DVUVmTWV3TXBZKy9pQkh3M3AzQTNVcjQ4SEtYLytXKzBsb05xL0JEOFI1eDhkNU1rZndMbi9oRmJlVy9tZjA4R3cyUVdNZFp5QmVNU3pLUHdrTC94a2ZIbW1KZFBTMWRhbjZGT3Mwejl0MFdyMWFxTUtNYW9zY0U2SjNCSy9qT2VYaFpWUmRWU2QwS1dNaURHVnNXYTVzYWl6ZURKcTFFc0VpRUE0R0FxSHdvR0lML3F6bDJ0b2o1ZFNpMmlWU3BPU0sxVzZnem8rK29VdWFBNFRuSkFqNkE3dzNBR1BqNGJKK0l2SndZUHVvT3ZWOU1DYXZpMUkzNWJvOXJjNXVHT1F3ejJmM3d3N0J4NzdsTzZmaGo2YzJ3RDVITk9pLzQ5QmZpOS96YmM4cEJ1QmR4cmRRZDFvbjNZc1ozV0RIOTl5YWpZMnhMVEZHWEJrenZtSlpYdFp3RFhVK2Q5dEN2b2o2QVAvTThJK2w0K3AzSmxDWkRVazh1RHl3ZDNnNjhnZmpua2J6QmcyVVlENnU3NHJOcUNmalRoYTVPdGxPMlRJM0hjOW00WnZvUUV6UjFCNGI2SzZ2dTFHbXNFTk9uV0g5cFFYTndjZC9EWTdkQWdycUNNNVVLV2g5N2lRd2dNM0RuOUVFZW84clBBVzFBOENyR0NvUFJ3T0JTZGVGUFMzZTdsQkZtNDNtaXdXazlsb3FqV2FqQ2FvRXhpTjhBTzFqZHBWUTlXUmUwQWQ1V0d2YkxYYnhYeTdXRnM4YU43amNibmNibytuMXVQeGVuMkRML0FpZUx2bUVCWFZrQXJxYXpveUFrV25ZMHdZbzQzM25XcVNFWFFIVFRWekhOczRqbTBjeHphT1l4dkhzWTMvaDdHTlpiRnI4Z0ZvMjV5YVFQVTRodktzd1ZEYWl4aEtZb3dZeXU4ZEcwUDU0RGlHY2h4RE9ZNmhITWRRam1Nb0Q4L0NjYXpoTjJJTnh6R0Izd29UdVBYVVlBTEJtWTRKZksrSUNVUk9BeWJ3N21OakFoZU5pQWw4YlNSTTRJNXhUT0E0SnZBc3hnUmVjQ3hNWU4zL0tVeWdaQmdtY1AwNEpuQWNFemc2VE9CYWNISDJ1OGNFZnY2ZFlRTHZMY01FN2g3SEJCN0dCR2JGNUJ2ZzBrT1l3SitEYXo2K0MvemlETVVFcHU5WlBYOXp3K2FHVnlSL3RDdzZoWmpBK0hPOTdpNWZSN2kyZzE3dEVyRkVPQlhJd09YTzNkRjVjakdCYnVjNEpuQWNFemlPQ1R3Yk1JR05VQXUrRU9yY084b3hnYnVITUlFN1M1akFjVVRnT0NKd0hCRTRqZ2c4R1lqQUNlV0l3SnZQTkVUZzcwWkFCTzQvd3hDQm9rT0lRT1pwUlFRdU8rTVFnYStXSXdMWG5sR0l3S3RIVUhkdlBHbUl3Qm5saU1EQ09DTHd1MEVFbHFPLy92dkFZOWhGMUFOZnpnVS9CSGN4d1ZXRmM4OVNoQkIxUnp1WVR2NFhtRjRCYnFVakNaK0M2Umo4ZWlHWVhyaUhtZzR1TFB3WE5ZV2FUajRJcHJPclNEcHlRMDBGMCtqclhaSnFjQXZVZXIrRVVyQVJmRUp1eG82b05BMVdta1pOWVpGZmtpOGREdWVnc1pNYTBDRkZReVJkQW1aUWw0UHBKYUsrT0I1UjRBK1FLRGh4TmxQNkljSVduQ3pDMEw0aWFXQkRLVUpJYmlwaFIwZ0hIU0xjYWNYQWJEcWN4aUxQYzVWVE1ITDc2TUFZV1hQRXlKSzNsY2VJcmk3c1BPWkFIemtwQWlNRlJ4Y1czanorRGFxZkE5TWxZSFpyTVQxQTFkaXpuTzBkZ3h4NzVHREZpQVRTR1FES2FLUTdDVWVDUHJRbE1qYlExRHNIR1JpNlkrVEdkby9FMGEvTDg2bDFqMll3YUxCVmFTaUZCMUFNWG9pUjk3Q29Dd3YvK3cxVktldFhnRC9ZOHBwL2JLWXJTeWFCNmRTVW82cE1ZeHQxZ3dnazZ6Y2hrSVpIYzJlOVVuT0M4V1E4eExYYm1hVVE4RlFvaUVveDRDdG9LK0g0ajhJWUg0VHl4c2pLL0crUG1zeVh0WjNDOWorSTB5aUJDcmdFZ0dmQVRZTndONVM5cUgwcDNzTERXOXBWZG82ZEpTTTBBV1ZZRnEyVlJjVnhVUktXbENoRlRkZzNGUEo2ajdYSnZzYmV4Yk4zMlNNNEIyY1Jxb0ErckltcWFxT3F1SUxPbTVPQUJWUlBxYUhFMExSMzVYODFZa2p5bmdPTGFMSEZSQWNHSlplUVduUTZRNUpIY09MT0VqbUR0RWhvV2s0UFg4cW9zSmZsb0JQVFFkclRRWVg5d09NVndBWTJId3JQemdZU05sWDliMm1NOXFiVlNtS3lxQ0tpaUtoRE9yOGlVZ05WdkhZbDNzekRtOXVmV3NTaDNodUt6VTZZbm9Ham5KSFVaaVJKV1Z3UlZ4Q3dRa3haQTVYWDlvaTlrMmZ2dEsvQk56bkFqMnFPRVplbFdmRTJtTDBMWEx5TlprWXhLSHZxdTMvS2c3R2xRUjdLdnpnNDF1Z3VzdjAwWkFVN2Z2YkZuOURaRjBmRlpRVDlEREthT1RwR0kraXVJM2lOZmxhY2JFZG5oM3VnN05FcnJDcHMvVStNeUlKSkZ0anhTZUI2T2hjdTdQaWN5bndFWElPMVNPMDJIZCttTXhmMS9rUlhwQ2ZRVnh2b2M2OVp6M2xSOTV5MG55ZnRQMmFYbml4MTZVbHBQU0t0MXowNmp6UFAvMmlpbnBlb3p6MTVpRzJ5L21jTkwzREpTMWhPYUFzVzNnVVBZZDN1WENETEMyVER5Umg4d1E1RDR5Q1RkZVc0dVRKa2VsZ3lpRXh2S2lMVFJUeWRTQ1VwZGxnOWlFeHY1YllLeTNUK3BDNkQ2REswem84WFU3R05HRVdzT0xCazJHaC9XcGcwSGtXRVJqWm9BWlBCcDRPR2R2NHhXaXpQWlkzV3VOWlNuektuVTVOQkRkVUNMZXdXd0FHVHB4OTlWN0t6VE9zbWIyMDUrVzBBTUlKNlRqYTFuc3lXcXNFME1CMWF3SFFHM3IyZzViaUtQUHJWeVhSSUNlLzRsbjFob1h0SEdweEY1Vm80ZU9ra2pFNjVqMlhHZ1lYRC9RVG5VZ3RQajQvbFA5UmJjVnJ0aGhOeGpZd2IyLzhaeHZhNGkrdXNkSEdOdTBiR1hTUGpycEZ4MThpNGEyVGNOVEx1R2hsM2pZeTdSc1pkSStPdWtYSFh5RWl1a2FRYVhFZGRJaVpmTGU3VVdndU5xUzNnRm5RQm9QSUxzZmtMZGRMRi9NWFNaYTNOeTV1WGk1Y282eEZsdlhIQmZNNTg3d0tpbmtmVXA1WjBMZTlhdnJwMW94U1JiUnpRUVFFdzRJOXY1RzlNck01MTlYWDFwVFlRL1FqYVIvUjduMzJCODRMaFdXVS9UOW5mdHFHNXI3bHZXVzV4QWtrc1hnalhTN2o4VXRVRktXYU1tZUtXSkdKSjJ0SVpUcGN6NThueVBGbC9LaFFQeFlsSUFxNDZpYlE3eDAwbkxZWVlmL3NkbUUvaGtia2tpRXZpZ0tLMjJkcHFFdkpNUXIxWUk5UElsQ29wWFBTbGJlWldicHZVNVpYejdhd3E2cTlrQTZnRS93MFlGVjdBaEVNd29STGNUelpndWF3N2tPYW5BNGtJRVNmaW9aUS9pL2l6TG5vWG1LVlQzOEhUZDJoU3lyZ3lMbzIwUVFyYWhPNVdib3ZRckd2anQrbWtLb1ZNSWRPSTlRSkVMNkNQQVdweWxZNEJDb21qc3Fnc29VcERJdEpRd25CeGNBNG1sdnZqR3I0bWJrcDFjRG84c0ZlOGVDanFUM0ZUVWIwc3hBL0pQRzBDanNBRXllZkpOQXE5bUo3TlZkUkg1Tm9QSzhDQ1R5ckJuandiZXdLb3JtTlJDeW1jZVF2NDVWMmZiSCthVGQzMklhYlYyZTBHdnQxUUVsRk11OGNiSm5pYnQ3cmRMcmZUVmV0eU9odzBkcXZkM201dU45REZPSEdxL2RmdzNvQnMrT2lMbmV2MlZvRG1UeXZCai9KUERHYlZQcU5TYWxkUkI4aW45bnkrczhML0JXQkFNc04wYXRZSzFzK25TVm9VQW8yd1ZpTTB0VFFXMGFGeW5rOGVWRVUwRVUxVW40Qk5Kb1psVFI1S0lUdlVaSklUdDhaTVVaNHBxbzlvUTlxUUtpRDNJbDY1ekNuaG1pMTJ1NFZ2c1Z2dGRqdHMzMEhOd1JScWx4OHFmbjV6Q05xcTd0Q2hwTWpSc09VUVA1UkQvTEFvdUZXRjZueGdiMFVBYkswTVFISkhuNUVhL3kyenF2QWo4dkczZ2YvMWF2OC9yZ0RQVWoybFJOYzdnQ3gvN1ZpeVZHLzc5a21xUHhncFIvVXJ3MUpVbThwVFZIdE9Xb3JxYlNjN1EvVUhEbllWdVcvWDUrOVhCRDRCalAyVlc4aG1ETEJaNys1UGRVUTdndG5hWU5iVDJWdEVLTWQ0aHBnMm9ncXBRZ3EvRkNyNlVnbWRnVmxpTmNuNE1wTkNyOWFxdFZxVlFZNFk1QmFaaENOenlqMEtua2ZoVndVMVFVMUVGek1peGhoY3k3aE9GNDY3K1c3Y2llTzRDNjh4Z0p1eFk4MmFZODJ5S2x3S2JpUzNTbktTNnEzZ2RxQURjOUFCc0QrL0FKdGZyeFUzOEJ2RWpjM0NaY0psc2lXYWVrUlRiMXE0a0xQUXN6QlV6d3ZWeDVka2wyV1g5VFN2RXlPU2RadTBjSEhlRkVpdTQ2OUw5WFptVjJkWHh6ZUUrcEZRdjZkL2dETmc2dGYwOHpUOXNnM0MxY0xWalowTktTVFZVQitZejNWNm1PaE82dHB6Y2ltaml1Q2pBNFFxSlBkTC9CSlBtMU9FT0VXNHVGM1dMck9MUlJPbldrV21OcjFFTDlISWxTcEVwUlFib2ZvcDlrYmcxSXRvWW9ha0lXbE8yektJTFdOUHRzZmI0M2d5TTNHcUkrTk8rNUkrK3VTdENCS0pwcnc1T3RrN2JvZFM4UmtvZDM5SHU2Q2F3UXg2UC9xNWJNcEltZjU1YVc4dlFVQlRMMXdiRG5xODhGSFNzQXp0T3J1V1o5ZmExU3BWdTFyRG9lNmtyb2RDMEFRdDNpcWMzdWQvQmJpOCtxOWtuTG9KekVaM0F5VXB3SngrbDU5TzVPVU4rUHcrZjhBYmd1TWJpamlqM0s3MDRaeGlqZElWRFN0NGp5NTY5UEhCc2dpaEpwTkJNSVA2UHZ1aHgrMjJScjZ0VVZGY2NRTmVyOXZ2Q2ZwcWc3NndQeElvbFJRQlN6UVZUY1JqU2FqRXB3TWRTS0REM2QzSFdXWHEwWFR4TkYzeWJGdXlMZGtTYlF3aG9jYWxuaWU1Nkk2bEs4eTZKbjZUcmxYVkptK1RTOFVLb1VLb2FUVTBPMncxVmJnQ1hBNW1nZ3ZBUmVDaTZqK1R6MUQzZzU5VFB3VzNvZnVCRG5ZcDJCdEp4eUFUWXpRVE8xTkdOZXlHMmljWGM2Ukd1UXJxUnlxUnNaRTdsN3JndDZ6ZXJGRUZIMUtWWHliaW9IdlZWbzFaeHpQcjZCMmVlcVBPckxFZ0ZvM0dwdWF1YVBWRkpYeEpWQVcxZHVvbmo5ZDRtME90Y1dGY21CSjN5RHZrWGFwZVBhTHJwUjFhRzlhNGc2djRxd0pkWlZwNHp5cE8xcEl5SkhpR2hEYXFDcXZDaWtBeGo3a01ya2s0TzR4SFhGRnYxQnZ4MDRJZ1NQampDTHJISDNjbE01eHVVNmUyZzZmdGtLZmI0bTN4MWtoakVBazJQdVZlekYyMndxeUh6TkczcWtYUWVOMHJra3RLL0dreHJQUjRJSCtnd2dZMVQzS09wSUs4RE15c3pGZUREbXdPT1lmaXNRcXN3b05Rd1FEL2hQOW1ndXEvc3FsdFlCb21rcllybFhycnhJdHc5dnJOTDIrbmR6ejRBclUrT0NtOGZxOGZycTRlcjc4R1o5a1ZUTHNXVjdVcllKRkpKMDZWdGt0bEhPc3laaFd1aGtPeEFHRHZnUmx3ZW1XcEc4R042SDZvOEJMa1hBeUg2M1NJNXd5NU05N1Zqa0FONkFFekNoZXg3aW44RUV4ZDdIQTczUzVQTFoybG5WN0svYTZnRTNFR3d3NkMyNW5SeXhMOGhDd2dYTWxwMGd1bFVwNVVLdFExY1JVcWh4c3FEbTZkaDg1MmJ2U1ovV2EveFdmMVVWYytVZU1SQmRzSU1TRk9TRE1LQk4yZlVlVFVQVHBFMzlOblhzTmR0OFpEajB5b0s1WkpaOUx4WExnSENmZDRWNjNoOUJsNzFWMDhkWmMwSzB3S2s4M1JGWkRISzVaNUdyaFNoYzBLRld1cnptSzAwRGtPY0RtNERQYXhGcWdsMVg4Qk4xSTNrZ1BVMWVCcWRDOFpvbjAvZDdFb0xuV0hWQ0FYS2tXMVNwRmFwSVZGTHpRSkVaUFEydHJNV2VKZEdtbmtSUnFUclIzaURuRzNvaytIYVB2V21OWnhONnoxQktIbEZ1aU9kcVE2VW9tT1NEY1M2UzVTWnU3Vjl2QzBQY3FjSkNQSkNPSk5ZU1RjdE53TEtWUGJ6RkNyTmtPOXdHcDMxMlNwUDJFcld2MXhNVjhjMTJWN09OMkJiRExCU3lRNy9YM2NWVG05TEFXdGlsU0prVHFoQkRKUzBxSmJUcDloaHlmRjVOUDBEcllKWkY4bG1GQnlKbXZZL2tCN01CZ01UTHdvUUd2WUFhaGg2NVJHblVHdFU5VHFGRnFaUmxJc1ltcFo0WHMxNEU0VytKajhBditDU2ZPSFE3YUNIMVMvRFdaUnM4ZzFCVGVZQ3VhQ0gwTzlmeGE2Z3hTUTUySitSOEFkOHNFU2dDSXg3Q2RLMjJDU2FVNm5xV1BRU0JYSHhERkJ1Q21Bb05zQ1RTdmN5K2lwWGx3SEJHcXhYRnc4aFEvUmlFeUNGazZiUzFMY0JPTlhCTld3YUdrM1V0RHN0MEdSalg2Z3NDaU1DajJDN2xEb2xScTFVcTNVeWcwU3hDQ3h0QWs1SzczTjRWWmV1RFVoeWtxejBpNWxjU1RXbWpZVVI2S1AzMGMvdllsc0lwRU81NUJ3enR2VkE1L2VkT25wamFrSk5hRU1LUUt3ZUJVdWk3TUczVVlKd1ZRczdZL0hDQjRSeTNpN3VKM3B3VVZGS3VLSTlYSTVYSEhrSW1NenQwWGtqVUNCR2RGREN3NW5xYWp0V0VjZ2xZenhZc21jcjQvYm16TW9rdnlrSWlCdTVRaDBZb21jSjVlMEdwWnowUThhQjFjZlhTckhLVDdhQ3NDRkUvR3lka24xcytBYWVoTWh1Z3RVVHdLL1lvSHJ3SU9idHZROEY5dGNHOXZzMy9RMFo0TnhqYktYcCt5VjVBUXBRYW9wdWh4Tzd1Vkw0ZVJHUDF2U1lOSXU0eS9UTmlrRVlvRllLbEN0UkZRcmpjc2JPTXZkallFbVhxQ0phSVZMY2x1SHJFZU5xSHZXR0RkeWd3SGNDV1cxMCtkeWUzQnJUUnY0QzFhYVhrZFBybU5OUjNyU0tjRU45QUUvTDBEeHJhZlBmdmc4ditoMFNlOHBoY2N4Uzh3YXM4Y1FlOHhPaERsUTlEb3l2QkZFYnlob3M4SytXbjBXcnhtMzFieDBGZVpVT3BTNEVzR1Z1RXJOZ1ZMZUt1S05JT1hGTXJkZnlYZlFCaFo0RlV3QWQ0SEtvb0hGQlJYUXdNclB3MDdjWERweGsreVhGSTZad2xZaVhtWmErYjEycTV1UHN6YlVZMjZ0UXlVdnM2OU1KdHhoNHNQaG9mNXFCQlZYaThFbVVGazlTRGdxaGFZaGJ5VEswWUZqMHE0Zm90MS9PbWtubnpxYTUvbXpnT2NHTUdHbUdHd0dqT3BCYTV6bXVRRTdjZmJSTzBoSDMxbjlvRDFlT1NaN3ZIQmJVbHdCMEg5WGdxdkpDekRxTW9yN3g3bkplQ2pvOTd0OXRUNW9idE9XTnJUR2JVcWVUV21YU3puVUwvN054c2thYUczbmJYOEhpejZ2am9KTjFDYXdoYW9FbGFnYi9UMlk5VDZHdTUxQkR5L29DZnNJUHpTTkE4RWdWSEdqb1RnU2ludFNXVTdDRWpOR2VXaktHTlZGMUNGMVNPa3ZhbEpTMmg2UldneHl2dHlnMUtrMWFvMVdwVmZxbFNhbFZma1BRUTN1ZHJnZEhvZkg2WEY1YUYzRDQwSmNIcDhqd0EzNnJVWWYzMWMwc09RbXBWckRVMnVVS3BtU3FycW81bmF3NmUvMWJOVGQyR3EzU3ZoV2lRN3F0ejRuSlA1ci9jZHYvZVZQdTZ2VDRHWHFYbkJiM1Q2b2RySkJBSE1uZk9FQXBDWVFkaEp3c1J5OHMwSFAwVm4wQm1pNEdYUVdEWGZweld0WVJNaFNOT3ZjT2pYVU9vZWJkUktseXdmTkhwOHhaQ1hxQkRWT2hVY1pVQVZVSVdoRlJYUlJROHlNbUdKeGEyTEl1SFFQV3ZKaEw0RjRDVmNzemdsYlErWUF6eHlnRFV2YXROVEJudXAwRGgwWDNZT3p2VDZIRTdicjlMbnBQYTBlbnp1QXVBTlEzZUwwcVRzRmFWNWFzRFJZejEyeVhDZHU0YU43VzhUeVp1TlNoN3VtaXZySURxNjQrc05xc09BVE5BWDJnSitVdTE3dS9tVGIwMngwMFdIbkM1bzY1SDVCRngzaGdFRlQzK0NDTWV3WjVvRUJsbFBuZ1RFUGVXQThZL0RBR0QrOFV3enUyMWxkOU1IQTV6Uk1ULzdST0dIUUFmT1FHOGI5WGJoaG9PYnc3S0FqQnBKOGZFZU11T1NJMlZWeXhLamZHc2tQQXg0N1UvMHc1bkkvalB2TTlzTzBneWVwdVdKdy9xN1AzNjh1ZW1OUUpScmJNdWxZN2hoVWVjWTRaS0NpODBySmt3ejEwU0hwTllEdUJQZURWMGJuVG9ZUHhuZmtVUzdjVnR4S1d4Umh0UFV6Q2hGMk95M0NhbWtSQmw3YmU2UU0yMEhMTVBMaVVRcXgzYWRCaVAwQ2JOb0xoZGlPbzRUWVB2RHkzNCtXWXVRZlQ0Y1VNNVZMTWM5cGttTGtENGFpQitTVEp6dDZBRjRaSGowZ3Q1NmgwUVB3NnA3UGQ0SUxKSWNEQ0hQUGhnQUMrZVZRQUdIdUNRY1F3SXNqQmhESTRIZ0E0YVFFRU80ZEZrQUEyOCtDQU1JTUlLWW0wamxqWHdlaW1aS3NwUHA5Y0hNQXpLYXVBN1BkNEE3MEVtMitra3hnNm1mYTFxMVl0V0xWa3N6Q0NMS0htdjB6ZHJOUm9CT3BSV3Fwc3BqdlJLb1hJM3F4dVUxMEhJQUhnbDZxTFFONW9IWGE0VGdQMkdBSjZvR2E1NVRRSHVnMDdjaUFqOFJEbmZWcmw2NWQyaTk4VVlQTUFyTjNzN3M5dVVBbW5Ba25pV2c4R2c4bC9SbkVuM0ZsYzhjNWZRdEJwekxLWUIrb2lURWMrWUgrZ2pFYy9JSE9uRlBDZnpqaElvTHJRZVVNY2JjWWJQajN6SkxjaHlLUVNjNEJEUFFhOUNyeXBmeDlHTVZnM1VUTnNlVk1XWDI2VnAvV0pKUlJaVlFXRXZzUnYxamtFbkRSZVNjdTR2dTZmVVFIbjVwR3ZjMEVETllPY0FVVGRUbUYzcmFBSkNBSnlRa1ZvWXBwa3diRW1FeGJNbU53TzdRSVRGb1JIK29FYUloYXVXRlV5Z1RxT2tLZGdPdkx0akdwSWJnS3FLaWxZbElHckZDSCtoRFU5UU1PK2lDNUdLekZGb21YaWgvaFB0VWNURXY0a3JTdWR5Tm5ZNkEzQ2FWY3NpdTRscHRKV0F4UlBweFhtcUFTVEY5ZkkxOG43RjJSVzVGN0tyN1lqL3lMNGt4aE54bGJORUtGVUNHV3lFUXlrYXBWMTR6b21zMk55NHRldm1aZW9EblNHaGZGUlNsSlZwRlY1RFRkUnVSeXdQbUV2U213UHRIWDNkZWRwU0c1YUorVEp0SUs2Z0I5aUNjS0xnQi9rRlR2SmxjWCtvQ1UraVc0RWFwN1Q0TzE0QW9NNmswUlQ5d1RkNlN0bmZaQURiZ05YajZYWlh6ZGxuV2x3NG5hY0NJWjZNUzc4SXd4b1Vnb0ltMytadkRqRFRYNmRjcGVjWWU0UTVRVVJCRjBneURhR215Qk0vUlBMUjZoVTJ4ZllXODBObW1hTkszeU5uR2JXQzdVdEdoYUxFM09SdDgxTlF1b0MzN0h3cFc0c2wxdDE5YmF0VmFkeFdBeEdFMzBXZ3VYT0N1Qy9wbXFJM3RCSFhVZis3RUd1NjJGYjJ0UlFjR09QazNuY3NCZkExY0FKN2k0NGsxd0tjREI1WldraGZ3OTFoWVJCbHQ5aUsrMXhkWE1mZkFSNWNwRi9EdGV2KzY2MSs5UWkzVWlvN0RXS0xTMHRuQ2FYUzArQWM4bkNBb2piWGZmWGZQT2RkdTNNNXMzUGFmYXl1M011WHdkL0E1ZkpwQUsvL0hPbW5mZXVXdDdKQlhNK0RwcWZSMnV6aTdPVnRWenpadDRPM1pjK3k2VGFxYXV4MkpScTRuZ0U3U3MwUWExZnJWWGlYaVZUaHFYYVlYTEE4K29oR3NqZkttaEZvaVlsQXFybkN0WGxCQmhhaCtzRU5TSGpRUmlKS3l4QkNmaGpIa0pucGVBc2htK29Pb0oxMWtpNm93Vnc0Z3ArdHhVUmc5Z0FJbWtHa1RCRGVqTy9OekR3QzBtU3BhUU84aXhrVHYzczhCVmxJUTVDejdkVUx2L0tTdTFra25kUlg4aHdTT1VCTndBRzNnVU1LaTdXYWtlSnBnRkdEOWowYjdlR2U4V20zMGZYRlhkUlIrRlJrYUJDbE0xdGJVMUtSQkZjZU5QYzRzbkpPQUxRcEswc2hlaEsxTDNFaXdDM01lR04yWlExN0NKVmNsMFJ4Z0pkK1E4WGR6ZUxwTW14ODlwa2pKQ0JLN1pXTlA4OHVLQmgxY2pxeCsrTjNZcnQrR3Bra3U3VWRFaWJoRUxCWktWa3BXSzVkb0c1REdLMGExa0tWZXkwUUdLOFN3NzJFQXNUNjVNcnN3S09zVUlTbmFLZXhTcnRZaHVOUjJOZVhOYmZOMUwvSmZXYlh3aDl3ZVhDeTUzVUZCY0Jxb0dBRm9CR0tTeGt0eFAvZzhHMElJUk1tVVNPMFpZREJGK3hBQ0hUb1ZRRFZRVmFHQVpsSEJCaDR4VUtjd3k3ZzFVRlF2TW9sUk04Q3NXZFRNd2J3cXZTWFYxMVhaMUpWWUhOaUpmZ3FxTFdPYVlpVENHb1o1UVZiaTJtQVdtam55QXFnTjExYjhEZGVoY3dDZC9ncVhpUGdMT0VzS1hTSE5TaHJpUzRCRkhIYjdlNXBNU1NwNlNTQmpTWEdyVE9hT3ZncTRyVmFvcVRJdUl5U3VMRGQ5S0U0Q213RXh5K2drMzNrWnR4RVk4OTkyb055Ty9aMFZEUjUwclAvcFQ1UkYwUjhRR245MnFnMU9yQ24rcHV2THc0UHlOSHBzL25icXh3UTNnd2dwd0hybXdFdFRUK2NUbXNjQTlZQTRWQTFZbTlRQUxPQ2o0N3FFTUdIVWhPUjljT0hROVFsLy9BM0QrMEo4cER6Qmd3RkdxUk1Vb0s3aUhtc09FTjZ2QzRlbzYrWjlnY2dYNElUbS9rdnd6T1FVRGsrZXlmd01ZVElyTGVwQ0NieUZxTXBqTG1uY0prN3FRbXJ5Tk5mOHlKdUN6WHZpY0NlODNtYnFUOWVJL21WVzlQbkYraGFTaVBkOVlTVExVR01rQS8xdGdrSXdDTEV6NDVWWU1qdXhnQWJjeXE4Z3I2YTBPWVBtK0xmdkI1WDgzSE5yeEFEYnRReVhhdkpuc3d3UXVrVi9NODR0RE1rSkpLT09hRk9SZUttM0pjck5wbHovRlJ4WGFsQjlLT0NKS2hPTCtGT0pQdVRKUThKa3oraFJQbjlMRUZZU0NHSlQ4YlM0aFY5aG0wWXY1WXIxTW80UXZqYXlrUTRrRUhBZUxhZ1RYbnZpV0NoYWtzN1N0Z2ozU3Rnb21wSyswdFFLQkY0Njh1d0pjU3YwVXkzamo0UWdQN2RkR3dqRXZsTll4b3lyTUQ2dThNaEduelNoVHEzZ3F0ZHdJVlZhNU42TG1xeVBHZUpvemc1SmcwOEdiKzloVkIrK2xCb0M3ZWdCY1RWME1Ma2EzZ2tycWpyRWRWNW9hTFV4L3B6VmdDT2hlZkRqbUNEcmoybUQzaCtUOWUyWitWUDJYcVBxRHUyTCtTRHFjQ2lmQ0NTSWUrUjNoSTE3enJZL2t3cG1vYzgrczhLb3dlc3NUejlTUkZodG1hYmM1MnAzdExvZWpmZUpVVjd2RDFtNXB0OXBzOE12MkhCWjBlWHhlbDBtcnRaaU5Cb3M3eVB0SWdFVll0aGVaVXBaK21XRTFmTFBNWXhJYldNRW5tUUZXY0QyVFdyNEVJMWplMVo1bHpDZ3IvQ0pUeFRJK1pWckxWTEpNVHhtTGJ5dXdvRFNRQ2o3RlJoRUd3cGkzTmlBT3NORmI0RWZSS2t3NWoyQTlOQ25LaXIwSXI5UXQwVzlnS2xnTmsrQmZrM0ZKNUVXVlJNWmE0TWVlQ0Q4ZENUNmhaYzk3QWd1dlppV1dNWWtYV2VnVXhnU0dlZ1ZMc1lvcFl6MDFENHNrV0xFK1dOa2dZcUp6NEUvR0RGUE9paTFua2xJWDVyTjV6VzZlMjJ4MDZybDZvOVZzNXB2Tk5xT0JZM1NZWEdhZXhlVzErcm1vSGxieWVSd3VhR1c0SFY0L3gyVmpQdHlKNFZZemJ1UWFZQ1VUSDk2WGNaN0piRFhxQjJ0Q0doaDFkUFVBMSsyR2RnbmZHbVRhYkZhN2hhc3p1NE44OUR3R1k0b2Jkem1kUEtmVGlidTRMcWZkNXVDN2NHYmh2aERtS043WmFMWlpvWlZzdFZuTUhLUGJITER5UERhbnpjYUJvMkcyV3R0eFc3R1JLVGJjaHR0eGk2WUc4bzB4eGU1eTI3MWN2d2QzdXZndUp5U1pBL3VuZC9LTVRvdkR3YUdicllNbW9ac0hMOWFlNTNUWTdRNit3dzdyMnhHY1p2d2NCdmdsNEdFNm04d21zQXZzTGZabU8xVE5jbmdIQWdkb0RnUHZ3T040OEswOU5mRGJGTWJzUFV4WVpRckRIckRIN0Iyd2ROcTdrZUl2M2ZBai9ZY1kvS2xVODhQclA5NEZ1VCtCd1FqZ01YZ2JCRDBIZnU2QXQrN0NZU010ZHJvNW1WMTcvVXpZandvR1kxY2RFejBQdnVNNlhJNExZV25GbXhGMENxelRoTGZnQWxoZno2aGdDSEFacm5YUW54bmFXVzh4d1d2VUhHeUEvYng5dmEyTFY3ekExbVZMMlFnRWhmVzBOc0lXc0xwTEZhMXVtOHZtRkhUWGFNUEJFTE5ZUDUyREkrRnl1bXVkYm1mQVFjQ1NkblFqam01ODR4Wk9mejM3NGNWMmV4Ty95ZDVtVTFwTDkxTmFkVll6TEJhckZmNWxEdU1jaGtRdVY4aWlURGdzOEhQQzZyUTR6YzVheUtMekdXYW56cUdFaEU1aG5NZFFPdG9jVFE3RTBiUVlmNWlMemptSHdWaFVEK2NzZkorUEw4YWJlSGdUdkVBSml3NVdOOE9iV0xNdGtDbVhRTlpwZFJwaEMyek9ZalhYd3BaMU5pVXNiZlltQkwwRllURHNUZmJGRDNNV2JXS2pGWE1aYzE3WWdPUGQvRzQ4WGV4TEFQYktEYnZuZEhabWFvS0JzSzRUUGd3TUxXT08wK3F5dW1FSldBbklvTFN0MjRiWXVqZmF0M0NMTjRGYW9qcWNueHRoZ1JuZkE3Ty9EM2Flbjc4WCsvL3lGTllZQUFBPVwiIiwiaW1wb3J0IFJlY3RSZWNvZ25pdGlvbiBmcm9tIFwiLi9SZWN0UmVjb2duaXRpb25cIjtcbmltcG9ydCBTdGFnZVJlY29nbml0aW9uIGZyb20gXCIuL1N0YWdlUmVjb2duaXRpb25cIjtcbmltcG9ydCBJdGVtUmVjb2duaXRpb24gZnJvbSBcIi4vSXRlbVJlY29nbml0aW9uXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wc1JlY29nbml0aW9uIHtcbiAgY29uc3RydWN0b3IoaW1nKSB7XG4gICAgdGhpcy5JbWFnZSA9IGltZztcbiAgICB0aGlzLkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuQ2FudmFzKTtcbiAgICB0aGlzLkNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICB0aGlzLkNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgIHRoaXMuY3R4ID0gdGhpcy5DYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwZmYwMFwiO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCIjMDBmZjAwXCI7XG4gICAgdGhpcy5yYXdJbWFnZURhdGEgPSB0aGlzLmN0eC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTtcbiAgICB0aGlzLm1hdHJpeEltYWdlRGF0YSA9IFtbXV07XG4gICAgdGhpcy5Cb3VuZERhdGEgPSB7fTtcbiAgICB0aGlzLlN0YWdlID0ge307XG4gICAgdGhpcy5JdGVtcyA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMCwgeCA9IDAsIHkgPSAwOyBpbmRleCA8IHRoaXMucmF3SW1hZ2VEYXRhLmRhdGEubGVuZ3RoOyBpbmRleCArPSA0KSB7XG4gICAgICB0aGlzLm1hdHJpeEltYWdlRGF0YVt5XVt4XSA9IFtcbiAgICAgICAgdGhpcy5yYXdJbWFnZURhdGEuZGF0YVtpbmRleF0sXG4gICAgICAgIHRoaXMucmF3SW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAxXSxcbiAgICAgICAgdGhpcy5yYXdJbWFnZURhdGEuZGF0YVtpbmRleCArIDJdXG4gICAgICBdO1xuICAgICAgaWYgKCsreCA9PSBpbWcud2lkdGgpIHtcbiAgICAgICAgeCA9IDA7XG4gICAgICAgIGlmICgrK3kgIT0gaW1nLmhlaWdodCkgdGhpcy5tYXRyaXhJbWFnZURhdGEucHVzaChbXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuUmVjdFJlY29nbml0aW9uKCk7XG4gICAgaWYgKHRoaXMuRGVidWcpIHtcbiAgICAgIGZvciAobGV0IFJlY3Qgb2YgdGhpcy5Cb3VuZERhdGEubWVyZ2VkUmVjdHMuUmlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdChSZWN0LmxlZnQsIFJlY3QudG9wLCBSZWN0LndpZHRoLCBSZWN0LmhlaWdodCk7XG4gICAgICB9XG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiI2ZmMDAwMFwiO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdChcbiAgICAgICAgdGhpcy5Cb3VuZERhdGEuU3RhZ2UubGVmdCxcbiAgICAgICAgdGhpcy5Cb3VuZERhdGEuU3RhZ2UudG9wLFxuICAgICAgICB0aGlzLkJvdW5kRGF0YS5TdGFnZS53aWR0aCxcbiAgICAgICAgdGhpcy5Cb3VuZERhdGEuU3RhZ2UuaGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdFN0YWdlKCk7XG4gICAgdGhpcy5kZXRlY3RGdXJuaXR1cmUoKTtcbiAgICB0aGlzLmRldGVjdEl0ZW0oKTtcbiAgICBkZWxldGUgdGhpcy5jdHg7XG4gICAgZGVsZXRlIHRoaXMuQ2FudmFzO1xuICAgIGRlbGV0ZSB0aGlzLm1hdHJpeEltYWdlRGF0YTtcbiAgICBkZWxldGUgdGhpcy5yYXdJbWFnZURhdGE7XG4gICAgZGVsZXRlIHRoaXMuSW1hZ2U7XG4gIH1cbiAgLyoqXG4gICAqIOivhuWIq+WbvuWDj+i+ueeVjFxuICAgKi9cbiAgUmVjdFJlY29nbml0aW9uKCkge1xuICAgIHRoaXMuQm91bmREYXRhID0gbmV3IFJlY3RSZWNvZ25pdGlvbih0aGlzLm1hdHJpeEltYWdlRGF0YSk7XG4gIH1cbiAgZGV0ZWN0RnVybml0dXJlKCkge1xuICAgIGxldCBEZXRlY3RUeXBlID0gW1wiTFVDS1lfRFJPUFwiLCBcIlNQRUNJQUxfRFJPUFwiLCBcIkFMTF9EUk9QXCJdO1xuICAgIGZvciAobGV0IFJlY3Qgb2YgdGhpcy5Cb3VuZERhdGEuSXRlbXMpIHtcbiAgICAgIGlmIChEZXRlY3RUeXBlLmluY2x1ZGVzKFJlY3QudHlwZSkpIHtcbiAgICAgICAgbGV0IE90aGVySXRlbXMgPSB0aGlzLkJvdW5kRGF0YS5JdGVtcy5maWx0ZXIoYSA9PiBhICE9IFJlY3QpO1xuICAgICAgICBsZXQgQXJlYURpZmYgPVxuICAgICAgICAgIE90aGVySXRlbXMucmVkdWNlKChhLCBPdGhlckl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICsgTWF0aC5hYnMoT3RoZXJJdGVtLmFyZWEgLSBSZWN0LmFyZWEpO1xuICAgICAgICAgIH0sIDApIC8gT3RoZXJJdGVtcy5sZW5ndGg7XG4gICAgICAgIGlmIChBcmVhRGlmZiA+IDEwMDApIHtcbiAgICAgICAgICBSZWN0LnR5cGUgPSBcIkxVQ0tZX0RST1BcIjtcbiAgICAgICAgICBSZWN0LkFyZWFEaWZmID0gQXJlYURpZmY7XG4gICAgICAgIH0gZWxzZSBpZiAoKFJlY3QudHlwZSA9PSBcIkxVQ0tZX0RST1BcIikpIHtcbiAgICAgICAgICBSZWN0LnR5cGUgPT0gXCJTUEVDSUFMX0RST1BcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBkZXRlY3RJdGVtKCkge1xuICAgIGxldCBEZXRlY3RUeXBlID0gW1wiTk9STUFMX0RST1BcIiwgXCJFWFRSQV9EUk9QXCIsIFwiU1BFQ0lBTF9EUk9QXCIsIFwiQUxMX0RST1BcIl07XG4gICAgZm9yIChsZXQgUmVjdCBvZiB0aGlzLkJvdW5kRGF0YS5JdGVtcykge1xuICAgICAgbGV0IFR5cGUgPSBSZWN0LnR5cGU7XG4gICAgICBkZWxldGUgUmVjdC50eXBlO1xuICAgICAgbGV0IFJlc3VsdCA9IHsgdHlwZTogVHlwZSB9O1xuICAgICAgaWYgKERldGVjdFR5cGUuaW5jbHVkZXMoVHlwZSkpIHtcbiAgICAgICAgbGV0IERyb3BMaXN0ID0gW107XG4gICAgICAgIGZvciAobGV0IERyb3Agb2YgRHJvcHNSZWNvZ25pdGlvbi5TdGFnZVt0aGlzLlN0YWdlLkNvZGVdLmRyb3BJbmZvcykge1xuICAgICAgICAgIGlmICgoRHJvcC5kcm9wVHlwZSA9PSBUeXBlIHx8IFR5cGUgPT0gXCJBTExfRFJPUFwiKSAmJiBEcm9wLml0ZW1JZCAmJiBEcm9wLml0ZW1JZCAhPSBcImZ1cm5pXCIpIHtcbiAgICAgICAgICAgIERyb3BMaXN0LnB1c2goeyBpZDogRHJvcC5pdGVtSWQsIHJhbmdlOiBEcm9wLmJvdW5kcyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coVHlwZSk7XG4gICAgICAgIGxldCBJdGVtID0gbmV3IEl0ZW1SZWNvZ25pdGlvbihcbiAgICAgICAgICB0aGlzLmdldEltYWdlTWF0cml4KFJlY3QubGVmdCwgUmVjdC50b3AsIFJlY3QucmlnaHQsIFJlY3QuYm90dG9tKSxcbiAgICAgICAgICBEcm9wTGlzdCxcbiAgICAgICAgICBSZWN0XG4gICAgICAgICk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oUmVzdWx0LCBJdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoVHlwZSA9PSBcIkxVQ0tZX0RST1BcIikge1xuICAgICAgICBsZXQgSXRlbSA9IG5ldyBJdGVtUmVjb2duaXRpb24oUmVjdCk7XG4gICAgICAgIEl0ZW0uSXRlbUlkID0gXCJmdXJuaVwiO1xuICAgICAgICBJdGVtLkNvdW50ID0gMTtcbiAgICAgICAgSXRlbS5Db25maWRlbmNlLkNvdW50ID0gWzFdO1xuXG4gICAgICAgIEl0ZW0uQ29uZmlkZW5jZS5JdGVtSWQgPSAocmF0aW8gPT4ge1xuICAgICAgICAgIGlmIChyYXRpbyA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcmFuZ2UsbGluZWFyX3ZhbDtcbiAgICAgICAgICBpZiAocmF0aW8gPCAwLjUpIHtcbiAgICAgICAgICAgIHJhbmdlID0gMS4wIC0gMC41O1xuICAgICAgICAgICAgbGluZWFyX3ZhbCA9IHJhdGlvIC8gKHJhbmdlICogMi4wKTtcbiAgICAgICAgICAgIHJldHVybiBsaW5lYXJfdmFsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYW5nZSA9IDAuNTtcbiAgICAgICAgICAgIGxpbmVhcl92YWwgPSByYXRpbyAvIChyYW5nZSAqIDIuMCk7XG4gICAgICAgICAgICByZXR1cm4gbGluZWFyX3ZhbCArICgxLjAgLSBsaW5lYXJfdmFsKSAqIE1hdGgucG93KChsaW5lYXJfdmFsIC0gMC41KSAqIDIsIDAuMik7XG4gICAgICAgICAgfVxuICAgICAgICB9KShSZWN0LkFyZWFEaWZmLzIwMDApO1xuICAgICAgICBPYmplY3QuYXNzaWduKFJlc3VsdCwgSXRlbSk7XG4gICAgICB9XG4gICAgICB0aGlzLkl0ZW1zLnB1c2goUmVzdWx0KTtcbiAgICB9XG4gIH1cbiAgZ2V0SW1hZ2VNYXRyaXgoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICBsZXQgTWF0cml4ID0gW107XG4gICAgZm9yIChsZXQgeSA9IHkxOyB5IDw9IHkyOyB5KyspIHtcbiAgICAgIGxldCByeSA9IE1hdHJpeC5wdXNoKFtdKSAtIDE7XG4gICAgICBmb3IgKGxldCB4ID0geDEsIHJ4ID0gMDsgeCA8PSB4MjsgeCsrLCByeCsrKSB7XG4gICAgICAgIE1hdHJpeFtyeV1bcnhdID0gW10uY29uY2F0KHRoaXMubWF0cml4SW1hZ2VEYXRhW3ldW3hdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE1hdHJpeDtcbiAgfVxuICBkZXRlY3RTdGFnZSgpIHtcbiAgICBbdGhpcy5TdGFnZS5Db2RlLCB0aGlzLlN0YWdlLkNvbmZpZGVuY2VdID0gU3RhZ2VSZWNvZ25pdGlvbihcbiAgICAgIHRoaXMuZ2V0SW1hZ2VNYXRyaXgoXG4gICAgICAgIHRoaXMuQm91bmREYXRhLlN0YWdlLmxlZnQsXG4gICAgICAgIHRoaXMuQm91bmREYXRhLlN0YWdlLnRvcCxcbiAgICAgICAgdGhpcy5Cb3VuZERhdGEuU3RhZ2UucmlnaHQsXG4gICAgICAgIHRoaXMuQm91bmREYXRhLlN0YWdlLmJvdHRvbVxuICAgICAgKVxuICAgICk7XG4gIH1cbiAgc3RhdGljIGluaXQoZGF0YU5hbWUsIERhdGEpIHtcbiAgICBzd2l0Y2ggKGRhdGFOYW1lKSB7XG4gICAgICBjYXNlIFwiU3RhZ2VcIjpcbiAgICAgICAgdGhpcy5TdGFnZSA9IERhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkl0ZW1JbWFnZVwiOlxuICAgICAgICBJdGVtUmVjb2duaXRpb24uaW5pdChEYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgc3NpbSBmcm9tIFwic3NpbS5qc1wiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcbmltcG9ydCBDb25uZWN0ZWRBcmVhUmVjb2duaXRpb24gZnJvbSBcIi4vQ29ubmVjdGVkQXJlYVJlY29nbml0aW9uXCI7XG5pbXBvcnQgTnVtYmVyc0hhc2hMaXN0IGZyb20gXCIuL0RhdGEvTnVtYmVySGFzaExpc3QuanNvblwiO1xuZm9yIChsZXQgaGFzaCBvZiBOdW1iZXJzSGFzaExpc3QpIHtcbiAgaWYgKGhhc2guaGFzaCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgaGFzaC5oYXNoID0gaGFzaC5oYXNoLm1hcCh2ID0+IHYgLyBoYXNoLmNvdW50KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbVJlY29nbml0aW9uIHtcbiAgY29uc3RydWN0b3IoSW1hZ2VEYXRhLCBSdWxlcywgUmVjdCkge1xuICAgIGlmIChJbWFnZURhdGEgaW5zdGFuY2VvZiBSZWN0YW5nbGUpIHtcbiAgICAgIHRoaXMuQm91bmQgPSBSZWN0O1xuICAgICAgdGhpcy5Db25maWRlbmNlID0ge1xuICAgICAgICBJdGVtSWQ6IC1JbmZpbml0eSxcbiAgICAgICAgQ291bnQ6IFtdXG4gICAgICB9O1xuICAgICAgdGhpcy5JdGVtSWQgPSBcIlwiO1xuICAgICAgdGhpcy5Db3VudCA9IE5hTjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5NYXRyaXggPSBJbWFnZURhdGE7XG4gICAgdGhpcy5XaWR0aCA9IEltYWdlRGF0YVswXS5sZW5ndGg7XG4gICAgdGhpcy5IZWlnaHQgPSBJbWFnZURhdGEubGVuZ3RoO1xuICAgIHRoaXMuSURhdGEgPSBuZXcgQXJyYXkoKTtcbiAgICB0aGlzLkJvdW5kID0gUmVjdDtcbiAgICB0aGlzLlJ1bGVzID0gUnVsZXM7XG4gICAgdGhpcy5Db25maWRlbmNlID0ge1xuICAgICAgSXRlbUlkOiAtSW5maW5pdHksXG4gICAgICBDb3VudDogW11cbiAgICB9O1xuICAgIHRoaXMucHJlcGFyZSgpO1xuICAgIHRoaXMuSXRlbUlkID0gdGhpcy5nZXRJdGVtSWQoKTtcbiAgICB0aGlzLkNvdW50ID0gdGhpcy5nZXRDb3VudCgpO1xuICAgIGRlbGV0ZSB0aGlzLlJ1bGVzO1xuICAgIGRlbGV0ZSB0aGlzLklEYXRhO1xuICAgIGRlbGV0ZSB0aGlzLkhlaWdodDtcbiAgICBkZWxldGUgdGhpcy5XaWR0aDtcbiAgICBkZWxldGUgdGhpcy5NYXRyaXg7XG4gIH1cbiAgcHJlcGFyZSgpIHtcbiAgICBsZXQgY3ggPSB0aGlzLk1hdHJpeFswXS5sZW5ndGggPj4gMTtcbiAgICBsZXQgY3kgPSB0aGlzLk1hdHJpeC5sZW5ndGggPj4gMTtcbiAgICBsZXQgciA9IChjeCArIGN5KSA+PiAxO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLkhlaWdodDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuV2lkdGg7IHgrKykge1xuICAgICAgICBsZXQgVGVtcENvbG9yID0gdGhpcy5NYXRyaXhbeV1beF07XG4gICAgICAgIGlmIChNYXRoLmh5cG90KHggLSBjeCwgeSAtIGN5KSA+IHIpIFRlbXBDb2xvciA9IFsyNTUsIDI1NSwgMjU1XTtcbiAgICAgICAgdGhpcy5JRGF0YS5wdXNoKC4uLlRlbXBDb2xvciwgMjU1KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5JRGF0YSA9IHtcbiAgICAgIGRhdGE6IHRoaXMuSURhdGEsXG4gICAgICBoZWlnaHQ6IHRoaXMuSGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMuV2lkdGhcbiAgICB9O1xuICB9XG4gIGdldEl0ZW1JZCgpIHtcbiAgICBsZXQgSW1hZ2VzID0gW107XG4gICAgbGV0IENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgQ2FudmFzLndpZHRoID0gdGhpcy5XaWR0aDtcbiAgICBDYW52YXMuaGVpZ2h0ID0gdGhpcy5IZWlnaHQ7XG4gICAgbGV0IEN0eCA9IENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IENvbmZpZGVuY2UgPSAtSW5maW5pdHk7XG4gICAgbGV0IFJlc3VsdCA9IFwiXCI7XG4gICAgZm9yIChsZXQgUnVsZSBvZiB0aGlzLlJ1bGVzKSB7XG4gICAgICBpZiAoIUl0ZW1SZWNvZ25pdGlvbi5JbWFnZXNbUnVsZS5pZF0pIGNvbnRpbnVlO1xuICAgICAgQ3R4LmNsZWFyUmVjdCgwLCAwLCBDYW52YXMud2lkdGgsIENhbnZhcy5oZWlnaHQpO1xuICAgICAgQ3R4LmRyYXdJbWFnZShcbiAgICAgICAgSXRlbVJlY29nbml0aW9uLkltYWdlc1tSdWxlLmlkXSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgSXRlbVJlY29nbml0aW9uLkltYWdlc1tSdWxlLmlkXS53aWR0aCxcbiAgICAgICAgSXRlbVJlY29nbml0aW9uLkltYWdlc1tSdWxlLmlkXS5oZWlnaHQsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIENhbnZhcy53aWR0aCxcbiAgICAgICAgQ2FudmFzLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGxldCBJbWFnZUQgPSBDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIENhbnZhcy53aWR0aCwgQ2FudmFzLmhlaWdodCk7XG4gICAgICBJbWFnZXMucHVzaChbUnVsZS5pZCwgSW1hZ2VEXSk7XG4gICAgfVxuICAgIGZvciAobGV0IEltYWdlIG9mIEltYWdlcykge1xuICAgICAgbGV0IFNTSU0gPSBzc2ltKEltYWdlWzFdLCB0aGlzLklEYXRhLCB7IHdpbmRvd1NpemU6IDgsIHNzaW06IFwiYmV6a3Jvdm55XCIgfSkubXNzaW07XG4gICAgICBpZiAoU1NJTSA+IENvbmZpZGVuY2UpIHtcbiAgICAgICAgQ29uZmlkZW5jZSA9IFNTSU07XG4gICAgICAgIFJlc3VsdCA9IEltYWdlWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLkNvbmZpZGVuY2UuSXRlbUlkID0gQ29uZmlkZW5jZTtcbiAgICByZXR1cm4gUmVzdWx0O1xuICB9XG4gIGdldENvdW50KCkge1xuICAgIGlmICh0aGlzLkl0ZW1JZCA9PSBcIlwiKSB7XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICBsZXQgUmFuZ2UgPSB0aGlzLlJ1bGVzLmZpbmQodiA9PiB2LmlkID09IHRoaXMuSXRlbUlkKTtcbiAgICBpZiAoUmFuZ2UpIHtcbiAgICAgIFJhbmdlID0gUmFuZ2UucmFuZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IE51bVJhbmdlID0gW1JhbmdlLnVwcGVyID4gOSA/IDAgOiBNYXRoLm1heCgxLCBSYW5nZS5sb3dlciksIE1hdGgubWluKDksIFJhbmdlLnVwcGVyKV07XG4gICAgbGV0IE51bUxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gTnVtUmFuZ2VbMF07IGkgPD0gTnVtUmFuZ2VbMV07IGkrKykge1xuICAgICAgTnVtTGlzdC5wdXNoKGkpO1xuICAgIH1cbiAgICBpZiAoTnVtTGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgdGhpcy5Db25maWRlbmNlLkNvdW50WzBdID0gMTtcbiAgICAgIHJldHVybiBOdW1MaXN0WzBdO1xuICAgIH1cbiAgICBsZXQgWFN0YXJ0ID0gZmFsc2UsXG4gICAgICBYRW5kID0gZmFsc2UsXG4gICAgICBZU3RhcnQgPSAwLFxuICAgICAgRmluZCA9IGZhbHNlO1xuICAgIGxldCBOdW1iZXJSZWN0ID0gbmV3IFJlY3RhbmdsZSgpO1xuICAgIGZvciAobGV0IHkgPSB0aGlzLkhlaWdodCA+PiAxOyB5IDwgdGhpcy5IZWlnaHQ7IHkrKykge1xuICAgICAgWFN0YXJ0ID0gZmFsc2U7XG4gICAgICBYRW5kID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCB4ID0gdGhpcy5XaWR0aCA+PiAxOyB4IDwgdGhpcy5XaWR0aDsgeCsrKSB7XG4gICAgICAgIGxldCBHcmV5VXAgPSBkaXN0YW5jZSA9PlxuICAgICAgICAgICh0aGlzLk1hdHJpeFt5IC0gZGlzdGFuY2VdW3hdWzBdICsgdGhpcy5NYXRyaXhbeSAtIGRpc3RhbmNlXVt4XVsxXSArIHRoaXMuTWF0cml4W3kgLSBkaXN0YW5jZV1beF1bMl0pIC8gMztcbiAgICAgICAgbGV0IEdyZXlOb3cgPSAodGhpcy5NYXRyaXhbeV1beF1bMF0gKyB0aGlzLk1hdHJpeFt5XVt4XVsxXSArIHRoaXMuTWF0cml4W3ldW3hdWzJdKSAvIDM7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAodGhpcy5JdGVtSWQgPT0gXCIzMzAxXCJcbiAgICAgICAgICAgID8gTWF0aC5hYnMoR3JleU5vdyAtIEdyZXlVcCgxKSlcbiAgICAgICAgICAgIDogTWF0aC5tYXgoTWF0aC5hYnMoR3JleU5vdyAtIEdyZXlVcCgxKSksIE1hdGguYWJzKEdyZXlOb3cgLSBHcmV5VXAoMikpLCBHcmV5Tm93IC0gR3JleVVwKDMpKSkgPiAyMFxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoIVhTdGFydCkge1xuICAgICAgICAgICAgWFN0YXJ0ID0geDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgWEVuZCA9IHg7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChYRW5kIC0gWFN0YXJ0ICsgMSA+IDIwKSB7XG4gICAgICAgICAgICBGaW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBYU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgICAgIFhFbmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChGaW5kKSB7XG4gICAgICAgIFlTdGFydCA9IHk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoRmluZCkge1xuICAgICAgTnVtYmVyUmVjdC51cGRhdGUoe1xuICAgICAgICBsZWZ0OiBYU3RhcnQsXG4gICAgICAgIHJpZ2h0OiBYRW5kLFxuICAgICAgICB0b3A6IFlTdGFydCxcbiAgICAgICAgYm90dG9tOiBNYXRoLnJvdW5kKHRoaXMuQm91bmQuaGVpZ2h0IC0gdGhpcy5Cb3VuZC5oZWlnaHQgKiAwLjA4KVxuICAgICAgfSk7XG4gICAgICAvKiBjb25zb2xlLmxvZyh7XG4gICAgICAgIGxlZnQ6IE51bWJlclJlY3QubGVmdCArIHRoaXMuQm91bmQubGVmdCxcbiAgICAgICAgcmlnaHQ6IE51bWJlclJlY3QucmlnaHQgKyB0aGlzLkJvdW5kLmxlZnQsXG4gICAgICAgIHRvcDogTnVtYmVyUmVjdC50b3AgKyB0aGlzLkJvdW5kLnRvcCxcbiAgICAgICAgYm90dG9tOiBOdW1iZXJSZWN0LmJvdHRvbSArIHRoaXMuQm91bmQudG9wXG4gICAgICB9KTsqL1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBOdW1iZXJNYXJ0aXggPSBbXTtcbiAgICBsZXQgTnVtYmVyTm9kZXMgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBOdW1iZXJSZWN0LmhlaWdodDsgeSsrKSB7XG4gICAgICBOdW1iZXJNYXJ0aXgucHVzaChbXSk7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IE51bWJlclJlY3Qud2lkdGg7IHgrKykge1xuICAgICAgICBsZXQgW1IsIEcsIEJdID0gdGhpcy5NYXRyaXhbeSArIE51bWJlclJlY3QudG9wXVt4ICsgTnVtYmVyUmVjdC5sZWZ0XTtcbiAgICAgICAgbGV0IEdyZXkgPSAoUiArIEcgKyBCKSAvIDM7XG4gICAgICAgIGlmIChHcmV5ID49IDEyMCkge1xuICAgICAgICAgIE51bWJlck1hcnRpeFt5XVt4XSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoR3JleSA8IDEyMCAmJiBHcmV5ID4gMTA1KSB7XG4gICAgICAgICAgbGV0IGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbTtcbiAgICAgICAgICBpZiAoeCAhPT0gMCkge1xuICAgICAgICAgICAgbGVmdCA9IHRoaXMuTWF0cml4W3kgKyBOdW1iZXJSZWN0LnRvcF1beCArIE51bWJlclJlY3QubGVmdCAtIDFdLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gMztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHggIT09IE51bWJlclJlY3Qud2lkdGggLSAxKSB7XG4gICAgICAgICAgICByaWdodCA9IHRoaXMuTWF0cml4W3kgKyBOdW1iZXJSZWN0LnRvcF1beCArIE51bWJlclJlY3QubGVmdCArIDFdLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gMztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHkgIT0gMCkge1xuICAgICAgICAgICAgdG9wID0gdGhpcy5NYXRyaXhbeSArIE51bWJlclJlY3QudG9wIC0gMV1beCArIE51bWJlclJlY3QubGVmdF0ucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyAzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoeSAhPT0gTnVtYmVyUmVjdC5oZWlnaHQgLSAxKSB7XG4gICAgICAgICAgICBib3R0b20gPSB0aGlzLk1hdHJpeFt5ICsgTnVtYmVyUmVjdC50b3AgKyAxXVt4ICsgTnVtYmVyUmVjdC5sZWZ0XS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIDM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgobGVmdCAmJiBsZWZ0ID4gMTIwKSB8fCAocmlnaHQgJiYgcmlnaHQgPiAxMjApIHx8ICh0b3AgJiYgdG9wID4gMTIwKSB8fCAoYm90dG9tICYmIGJvdHRvbSA+IDEyMCkpIHtcbiAgICAgICAgICAgIE51bWJlck1hcnRpeFt5XVt4XSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE51bWJlck1hcnRpeFt5XVt4XSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBOdW1iZXJNYXJ0aXhbeV1beF0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBOdW1iZXJNYXJ0aXhbeV1beF0gPSBHcmV5ID4gODA7XG4gICAgICAgIGlmIChOdW1iZXJNYXJ0aXhbeV1beF0pIHtcbiAgICAgICAgICBOdW1iZXJOb2Rlcy5hZGQoeCAqIDEwMDAwICsgeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IEdldEFsbE51bWJlciA9IG5ldyBDb25uZWN0ZWRBcmVhUmVjb2duaXRpb24oTnVtYmVyTWFydGl4LCBOdW1iZXJOb2RlcywgdHJ1ZSk7XG4gICAgbGV0IFRlbXBDb3VudCA9IFwiXCI7XG4gICAgbGV0IFJlc3VsdCA9IEdldEFsbE51bWJlci5HZXRBbGxDb25uZWN0ZWRBcmVhKFJlY3QgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhSZWN0KTtcbiAgICAgIGlmIChcbiAgICAgICAgUmVjdC5wb2ludCA8IDIwIHx8XG4gICAgICAgIFJlY3Qud2lkdGggPiBSZWN0LmhlaWdodCB8fFxuICAgICAgICBSZWN0LmhlaWdodCA8IDggfHxcbiAgICAgICAgUmVjdC53aWR0aCA8IDMgfHxcbiAgICAgICAgTnVtYmVyUmVjdC53aWR0aCAtIFJlY3QubGVmdCA8IDUgfHxcbiAgICAgICAgUmVjdC5sZWZ0IDwgNVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWN0O1xuICAgIH0pLnNvcnQoKGEsIGIpID0+IGEubGVmdCAtIGIubGVmdCk7XG4gICAgbGV0IE51bUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgTnVtQ2FudmFzLndpZHRoID0gOTtcbiAgICBOdW1DYW52YXMuaGVpZ2h0ID0gMTA7XG4gICAgbGV0IE51bUN0eCA9IE51bUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgZm9yIChsZXQgTnVtIG9mIFJlc3VsdCkge1xuICAgICAgbGV0IENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICBDYW52YXMud2lkdGggPSBOdW0ud2lkdGg7XG4gICAgICBDYW52YXMuaGVpZ2h0ID0gTnVtLmhlaWdodDtcbiAgICAgIGxldCBDdHggPSBDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgbGV0IEltZ0RhdGEgPSBDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIENhbnZhcy53aWR0aCwgQ2FudmFzLmhlaWdodCk7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IE51bS5oZWlnaHQ7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IE51bS53aWR0aDsgeCsrKSB7XG4gICAgICAgICAgbGV0IEluZGV4ID0gKHkgKiBDYW52YXMud2lkdGggKyB4KSAqIDQ7XG4gICAgICAgICAgaWYgKE51bS5tYXRyaXhbeV1beF0pIHtcbiAgICAgICAgICAgIEltZ0RhdGEuZGF0YVtJbmRleF0gPSAwO1xuICAgICAgICAgICAgSW1nRGF0YS5kYXRhW0luZGV4ICsgMV0gPSAwO1xuICAgICAgICAgICAgSW1nRGF0YS5kYXRhW0luZGV4ICsgMl0gPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBJbWdEYXRhLmRhdGFbSW5kZXhdID0gMjU1O1xuICAgICAgICAgICAgSW1nRGF0YS5kYXRhW0luZGV4ICsgMV0gPSAyNTU7XG4gICAgICAgICAgICBJbWdEYXRhLmRhdGFbSW5kZXggKyAyXSA9IDI1NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgSW1nRGF0YS5kYXRhW0luZGV4ICsgM10gPSAyNTU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEN0eC5wdXRJbWFnZURhdGEoSW1nRGF0YSwgMCwgMCk7XG4gICAgICBOdW1DdHguY2xlYXJSZWN0KDAsIDAsIE51bUNhbnZhcy53aWR0aCwgTnVtQ2FudmFzLmhlaWdodCk7XG4gICAgICBOdW1DdHguZHJhd0ltYWdlKENhbnZhcywgMCwgMCwgQ2FudmFzLndpZHRoLCBDYW52YXMuaGVpZ2h0LCAwLCAwLCBOdW1DYW52YXMud2lkdGgsIE51bUNhbnZhcy5oZWlnaHQpO1xuICAgICAgbGV0IERIYXNoID0gdGhpcy5nZXRESGFzaChOdW1DdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIE51bUNhbnZhcy53aWR0aCwgTnVtQ2FudmFzLmhlaWdodCkpO1xuICAgICAgbGV0IE51bWJlclJlc3VsdCA9IHRoaXMuZEhhc2h0b051bWJlcihESGFzaCwgTnVtTGlzdCk7XG4gICAgICBUZW1wQ291bnQgKz0gTnVtYmVyUmVzdWx0Lk51bTtcbiAgICAgIHRoaXMuQ29uZmlkZW5jZS5Db3VudC5wdXNoKE51bWJlclJlc3VsdC5Db25maWRlbmNlKTtcbiAgICB9XG4gICAgcmV0dXJuIE51bWJlcihUZW1wQ291bnQpO1xuICB9XG4gIGdldERIYXNoKGl0ZW0pIHtcbiAgICBsZXQgSGFzaFN0cmluZyA9IFwiXCI7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW0uZGF0YS5sZW5ndGg7IGluZGV4ICs9IDQpIHtcbiAgICAgIGlmIChNYXRoLmZsb29yKGluZGV4IC8gNCkgJSBpdGVtLndpZHRoID09IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKFxuICAgICAgICBNYXRoLmZsb29yKChpdGVtLmRhdGFbaW5kZXggLSA0XSArIGl0ZW0uZGF0YVtpbmRleCAtIDNdICsgaXRlbS5kYXRhW2luZGV4IC0gMl0pIC8gMykgPlxuICAgICAgICBNYXRoLmZsb29yKChpdGVtLmRhdGFbaW5kZXhdICsgaXRlbS5kYXRhW2luZGV4ICsgMV0gKyBpdGVtLmRhdGFbaW5kZXggKyAyXSkgLyAzKVxuICAgICAgKSB7XG4gICAgICAgIEhhc2hTdHJpbmcgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEhhc2hTdHJpbmcgKz0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEhhc2hTdHJpbmc7XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEBwYXJhbSB7YXJyYXl9IE51bWJlcnNcbiAgICovXG4gIGRIYXNodG9OdW1iZXIoaGFzaCwgTnVtYmVycykge1xuICAgIGxldCBOdW1Db25maWRlbmNlID0gLUluZmluaXR5O1xuICAgIGxldCBOdW0gPSBOYU47XG4gICAgbGV0IEFsbExlbmd0aCA9IDgwO1xuICAgIGxldCBOdW1zSGFzaExpc3QgPSBOdW1iZXJzSGFzaExpc3QuZmlsdGVyKHYgPT4gTnVtYmVycy5pbmNsdWRlcyh2Lm51bWJlcikpO1xuICAgIGZvciAobGV0IE51bWJlckRIYXNoIG9mIE51bXNIYXNoTGlzdCkge1xuICAgICAgbGV0IENvbmZpZGVuY2UgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYXNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChoYXNoW2ldID09IFwiMVwiKSB7XG4gICAgICAgICAgQ29uZmlkZW5jZSArPSBOdW1iZXJESGFzaC5oYXNoW2ldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIENvbmZpZGVuY2UgKz0gMSAtIE51bWJlckRIYXNoLmhhc2hbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIENvbmZpZGVuY2UgLz0gQWxsTGVuZ3RoO1xuICAgICAgaWYgKENvbmZpZGVuY2UgPiBOdW1Db25maWRlbmNlKSB7XG4gICAgICAgIE51bUNvbmZpZGVuY2UgPSBDb25maWRlbmNlO1xuICAgICAgICBOdW0gPSBOdW1iZXJESGFzaC5udW1iZXI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBOdW06IE51bSxcbiAgICAgIENvbmZpZGVuY2U6IE51bUNvbmZpZGVuY2VcbiAgICB9O1xuICB9XG4gIHN0YXRpYyBpbml0KEltYWdlKSB7XG4gICAgdGhpcy5JbWFnZXMgPSBJbWFnZTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbm5lY3RlZEFyZWFSZWNvZ25pdGlvbiBmcm9tIFwiLi9Db25uZWN0ZWRBcmVhUmVjb2duaXRpb25cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RSZWNvZ25pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKEltYWdlRGF0YSkge1xuICAgIGxldCBoZWlnaHQgPSBJbWFnZURhdGEubGVuZ3RoO1xuICAgIGxldCB3aWR0aCA9IEltYWdlRGF0YVswXS5sZW5ndGg7XG4gICAgdGhpcy5JbWFnZURhdGEgPSBJbWFnZURhdGE7XG4gICAgdGhpcy5Ob2RlID0gbmV3IFNldCgpO1xuICAgIC8qIOeyl+ajgOa1i+WFs+WNoeaOieiQveS/oeaBr+WMuuWfnyAqL1xuICAgIGxldCBZQXhpcyA9IEFycmF5KGhlaWdodCkuZmlsbCgwKTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgWUF4aXNbeV0gKz0gSW1hZ2VEYXRhW3ldW3hdWzBdICsgSW1hZ2VEYXRhW3ldW3hdWzFdICsgSW1hZ2VEYXRhW3ldW3hdWzJdO1xuICAgICAgfVxuICAgICAgWUF4aXNbeV0gLz0gMztcbiAgICB9XG4gICAgbGV0IERhdGFBcmVhU3BpbHQgPSAtMTtcbiAgICBmb3IgKGxldCB5ID0gMTsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICBpZiAoWUF4aXNbeSAtIDFdIC0gWUF4aXNbeV0gPiAyMDAwMCkge1xuICAgICAgICBsZXQgY2FuY2VsID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgIGlmIChJbWFnZURhdGFbeV1beF0ucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyAzID4gMTAwKSB7XG4gICAgICAgICAgICBjYW5jZWwgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwpIGNvbnRpbnVlO1xuICAgICAgICBEYXRhQXJlYVNwaWx0ID0geTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuRGF0YUFyZWFTcGlsdCA9IERhdGFBcmVhU3BpbHQ7XG4gICAgbGV0IEJpbmFyaXphdGlvbk1hdHJpeCA9IHRoaXMuQmluYXJpemF0aW9uKHdpZHRoLCBoZWlnaHQsIEltYWdlRGF0YSk7XG4gICAgbGV0IENvbm5lY3RlZEFyZWEgPSBuZXcgQ29ubmVjdGVkQXJlYVJlY29nbml0aW9uKEJpbmFyaXphdGlvbk1hdHJpeCwgdGhpcy5Ob2RlKTtcbiAgICBsZXQgbWVyZ2VkUmVjdHMgPSB0aGlzLkF1dG9tZXJnZVJlY3QoXG4gICAgICBDb25uZWN0ZWRBcmVhLkdldEFsbENvbm5lY3RlZEFyZWEoUmVzdWx0ID0+IHtcbiAgICAgICAgUmVzdWx0LnVwZGF0ZSh7XG4gICAgICAgICAgdG9wOiBSZXN1bHQudG9wICsgRGF0YUFyZWFTcGlsdCxcbiAgICAgICAgICBib3R0b206IFJlc3VsdC5ib3R0b20gKyBEYXRhQXJlYVNwaWx0XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoUmVzdWx0LnBvaW50ID4gMTAwKSB7XG4gICAgICAgICAgZGVsZXRlIFJlc3VsdC5wb2ludDtcbiAgICAgICAgICByZXR1cm4gUmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5Cb3VuZChtZXJnZWRSZWN0cyk7XG4gICAgdGhpcy5HZXREcm9wVHlwZShtZXJnZWRSZWN0cy5SaWdodCwgSW1hZ2VEYXRhKTtcbiAgICB0aGlzLm1lcmdlZFJlY3RzID0gbWVyZ2VkUmVjdHM7XG4gICAgZGVsZXRlIHRoaXMuRGF0YUFyZWFTcGlsdDtcbiAgICBkZWxldGUgdGhpcy5Ob2RlO1xuICAgIGRlbGV0ZSB0aGlzLkltYWdlRGF0YTtcbiAgfVxuICAvLyDor4bliKvovrnnlYxcbiAgQm91bmQoUmVjdHMpIHtcbiAgICB0aGlzLlN0YWdlID0gUmVjdHMuU3RhZ2U7XG4gICAgdGhpcy5JdGVtcyA9IFtdO1xuICAgIGZvciAobGV0IFJlY3Qgb2YgUmVjdHMuUmlnaHQpIHtcbiAgICAgIGlmIChNYXRoLmFicyhSZWN0LmhlaWdodCAvIFJlY3Qud2lkdGggLSAxKSA8IDAuMiAmJiBSZWN0LmhlaWdodCA+IDUwICYmIFJlY3Qud2lkdGggPiA1MCkge1xuICAgICAgICB0aGlzLkl0ZW1zLnB1c2goUmVjdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuSXRlbXMuc29ydCgoYSwgYikgPT4gYS5sZWZ0IC0gYi5sZWZ0KTtcbiAgfVxuICBHZXREcm9wVHlwZShSZWN0cywgSW1hZ2VEYXRhKSB7XG4gICAgbGV0IHRvcCA9IHRoaXMuSXRlbXMucmVkdWNlKChhLCBiKSA9PiBhICsgYi5ib3R0b20sIDApIC8gdGhpcy5JdGVtcy5sZW5ndGg7XG4gICAgbGV0IERyb3BUeXBlID0gW107XG4gICAgZm9yIChsZXQgUmVjdCBvZiBSZWN0cykge1xuICAgICAgaWYgKFJlY3QudG9wID4gdG9wICYmIFJlY3Qud2lkdGggLyBSZWN0LmhlaWdodCA+IDMpIHtcbiAgICAgICAgRHJvcFR5cGUucHVzaCh7XG4gICAgICAgICAgbGVmdDogUmVjdC5sZWZ0LFxuICAgICAgICAgIHJpZ2h0OiBSZWN0LnJpZ2h0LFxuICAgICAgICAgIHR5cGU6IHRoaXMuQ29tcGFyZVR5cGUoSW1hZ2VEYXRhW1JlY3QudG9wXVsoUmVjdC5sZWZ0ICsgUmVjdC5yaWdodCkgPj4gMV0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBSZWN0IG9mIHRoaXMuSXRlbXMpIHtcbiAgICAgIGZvciAobGV0IHR5cGUgb2YgRHJvcFR5cGUpIHtcbiAgICAgICAgbGV0IFtsZWZ0LCByaWdodF0gPSBSZWN0LmRpcmVjdGlvbih0eXBlKTtcbiAgICAgICAgaWYgKCFsZWZ0ICYmICFyaWdodCkge1xuICAgICAgICAgIFJlY3QudHlwZSA9IHR5cGUudHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBSR0JEaWZmKHJnYjEsIHJnYjIpIHtcbiAgICByZXR1cm4gcmdiMS5tYXAoKHYsIGkpID0+IE1hdGguYWJzKHYgLSByZ2IyW2ldKSkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG4gIH1cbiAgQ29tcGFyZVR5cGUocmdiKSB7XG4gICAgbGV0IFR5cGUgPSBPYmplY3QuZW50cmllcyhSZWN0UmVjb2duaXRpb24uRHJvcFR5cGVDb2xvcik7XG4gICAgZm9yIChsZXQgW3R5cGUsIGNvbG9yXSBvZiBUeXBlKSB7XG4gICAgICBpZiAoY29sb3IoLi4ucmdiKSkge1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiQUxMX0RST1BcIjtcbiAgfVxuICBCaW5hcml6YXRpb24od2lkdGgsIGhlaWdodCwgSW1hZ2VEYXRhKSB7XG4gICAgbGV0IE1hdHJpeCA9IFtdO1xuICAgIGZvciAobGV0IHkgPSB0aGlzLkRhdGFBcmVhU3BpbHQsIHJ5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICBNYXRyaXgucHVzaChbXSk7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgTWF0cml4W3J5XVt4XSA9IChJbWFnZURhdGFbeV1beF1bMF0gKyBJbWFnZURhdGFbeV1beF1bMV0gKyBJbWFnZURhdGFbeV1beF1bMl0pIC8gMyA8IDc1ID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICBpZiAoTWF0cml4W3J5XVt4XSkge1xuICAgICAgICAgIHRoaXMuTm9kZS5hZGQoeCAqIDEwMDAwICsgcnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByeSsrO1xuICAgIH1cbiAgICByZXR1cm4gTWF0cml4O1xuICB9XG4gIHNvcnRSZWN0KFJlY3QxLCBSZWN0Mikge1xuICAgIGxldCB5ID0gUmVjdDEudG9wIC0gUmVjdDIudG9wLFxuICAgICAgeCA9IFJlY3QxLmxlZnQgLSBSZWN0Mi5sZWZ0O1xuICAgIGlmICh5ID09IDApIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOWQiOW5tui+ueeVjOi3neemu+WcqOS4gOWumuiMg+WbtOWGheeahOi/numAmuWMulxuICAgKiBAcGFyYW0geyp9IFJlY3RzXG4gICAqL1xuICBBdXRvbWVyZ2VSZWN0KFJlY3RzKSB7XG4gICAgLy8g5pCc57Si5Ye65Lit6Ze055qE56uW57q/IOS7peWug+S4uuWPguiAg1xuICAgIGxldCBNaWRkbGVMaW5lID0geyB0b3A6IDEsIGJvdHRvbTogMCB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUmVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChSZWN0c1tpXS5ib3R0b20gLSBSZWN0c1tpXS50b3AgPiBNaWRkbGVMaW5lLmJvdHRvbSAtIE1pZGRsZUxpbmUudG9wKSB7XG4gICAgICAgIE1pZGRsZUxpbmUgPSBSZWN0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IE1pZGRsZVggPSAoTWlkZGxlTGluZS5yaWdodCArIE1pZGRsZUxpbmUubGVmdCkgLyAyO1xuICAgIGxldCBMZWZ0UmVjdCA9IFtdLFxuICAgICAgUmlnaHRSZWN0ID0gW107XG4gICAgZm9yIChsZXQgUmVjdCBvZiBSZWN0cykge1xuICAgICAgaWYgKFJlY3QucmlnaHQgPCBNaWRkbGVYKSB7XG4gICAgICAgIGlmICh0aGlzLklTQ2hhcihSZWN0KSkge1xuICAgICAgICAgIExlZnRSZWN0LnB1c2goUmVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFJlY3QubGVmdCA+IE1pZGRsZVgpIHtcbiAgICAgICAgUmlnaHRSZWN0LnB1c2goUmVjdCk7XG4gICAgICB9XG4gICAgfVxuICAgIExlZnRSZWN0LnNvcnQodGhpcy5zb3J0UmVjdCk7XG4gICAgbGV0IFN0YWdlUmVjdCA9IExlZnRSZWN0LnNoaWZ0KCk7XG4gICAgZm9yIChsZXQgUmVjdCBvZiBMZWZ0UmVjdCkge1xuICAgICAgbGV0IFtsZWZ0LCByaWdodCwgdG9wLCBib3R0b21dID0gU3RhZ2VSZWN0LmRpcmVjdGlvbihSZWN0KTtcbiAgICAgIGlmICgocmlnaHQgfHwgbGVmdCkgJiYgIXRvcCAmJiAhYm90dG9tKSB7XG4gICAgICAgIFN0YWdlUmVjdC5tZXJnZShSZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgTWVyZ2UgPSAoUmVjdHMsIHEpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUmVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgUmVjdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAoUmVjdHNbaV0uZGlzdGFuY2UoUmVjdHNbal0pIDwgcSkge1xuICAgICAgICAgICAgUmVjdHNbaV0ubWVyZ2UoUmVjdHNbal0pO1xuICAgICAgICAgICAgZGVsZXRlIFJlY3RzLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFJlY3RzO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIFN0YWdlOiBTdGFnZVJlY3QsXG4gICAgICBSaWdodDogTWVyZ2UoUmlnaHRSZWN0LCAxMCksXG4gICAgICBNaWRkbGU6IE1pZGRsZUxpbmVcbiAgICB9O1xuICB9XG4gIElTQ2hhcihSZWN0KSB7XG4gICAgbGV0IEMgPSAwO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgUmVjdC5oZWlnaHQ7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBSZWN0LndpZHRoOyB4KyspIHtcbiAgICAgICAgbGV0IFtSLCBHLCBCXSA9IHRoaXMuSW1hZ2VEYXRhW3kgKyBSZWN0LnRvcF1beCArIFJlY3QubGVmdF07XG4gICAgICAgIGxldCBBID0gMjU1O1xuICAgICAgICBsZXQgRCA9IChNYXRoLmFicyhSIC0gQSkgKyBNYXRoLmFicyhHIC0gQSkgKyBNYXRoLmFicyhCIC0gQSkpIC8gMztcbiAgICAgICAgaWYgKEQgPCAzMCkge1xuICAgICAgICAgIEMrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQyAvIChSZWN0LndpZHRoICogUmVjdC5oZWlnaHQpID4gMC4xO1xuICB9XG59XG5SZWN0UmVjb2duaXRpb24uRHJvcFR5cGVDb2xvciA9IHtcbiAgU1BFQ0lBTF9EUk9QOiAoUiwgRywgQikgPT4ge1xuICAgIHJldHVybiBNYXRoLmFicyhSIC0gMjQwKSA8IDUgJiYgTWF0aC5hYnMoRyAtIDEwMCkgPCAxMCAmJiBCIDwgNTA7XG4gIH0sXG4gIE5PUk1BTF9EUk9QOiAoUiwgRywgQikgPT4ge1xuICAgIHJldHVybiBNYXRoLmFicyhSIC0gMTc1KSArIE1hdGguYWJzKEcgLSAxNzUpICsgTWF0aC5hYnMoQiAtIDE3NSkgPCAyMDtcbiAgfSxcbiAgRVhUUkFfRFJPUDogKFIsIEcsIEIpID0+IHtcbiAgICByZXR1cm4gRyA+IFIgJiYgRyA+IEIgJiYgQiA8IDE1MCAmJiBSID4gMjAwICYmIEcgPiAyMDA7XG4gIH0sXG4gIEZJWEVEX0RST1A6IChSLCBHLCBCKSA9PiB7XG4gICAgcmV0dXJuIFIgPiAyMDAgJiYgTWF0aC5hYnMoRyAtIDIwMCkgPCAyMCAmJiBCIDwgMTIwO1xuICB9LFxuICBMVUNLWV9EUk9QOiAoUiwgRywgQikgPT4ge1xuICAgIHJldHVybiBNYXRoLmFicyhSIC0gMjUwKSA8IDUgJiYgTWF0aC5hYnMoRyAtIDEwMCkgPCAxMCAmJiBCIDwgNTA7XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3RvcihkYXRhID0ge30pIHtcbiAgICB0aGlzLmxlZnQgPSBkYXRhLmxlZnQgfHwgMDtcbiAgICB0aGlzLnRvcCA9IGRhdGEudG9wIHx8IDA7XG4gICAgdGhpcy5yaWdodCA9IGRhdGEucmlnaHQgfHwgMDtcbiAgICB0aGlzLmJvdHRvbSA9IGRhdGEuYm90dG9tIHx8IDA7XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICBpZiAoIShrZXkgaW4gdGhpcykpIHtcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVwZGF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cbiAgZGlyZWN0aW9uKFJlY3QyKSB7XG4gICAgbGV0IGxlZnQgPSBSZWN0Mi5yaWdodCA8IHRoaXMubGVmdDtcbiAgICBsZXQgcmlnaHQgPSBSZWN0Mi5sZWZ0ID4gdGhpcy5yaWdodDtcbiAgICBsZXQgdG9wID0gUmVjdDIuYm90dG9tIDwgdGhpcy50b3A7XG4gICAgbGV0IGJvdHRvbSA9IFJlY3QyLnRvcCA+IHRoaXMuYm90dG9tO1xuICAgIHJldHVybiBbbGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tXTtcbiAgfVxuICBtZXJnZShSZWN0Mikge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZSh7XG4gICAgICBsZWZ0OiBNYXRoLm1pbih0aGlzLmxlZnQsIFJlY3QyLmxlZnQpLFxuICAgICAgcmlnaHQ6IE1hdGgubWF4KHRoaXMucmlnaHQsIFJlY3QyLnJpZ2h0KSxcbiAgICAgIHRvcDogTWF0aC5taW4odGhpcy50b3AsIFJlY3QyLnRvcCksXG4gICAgICBib3R0b206IE1hdGgubWF4KHRoaXMuYm90dG9tLCBSZWN0Mi5ib3R0b20pXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIOiuoeeul+efqeW9oui3neemu1xuICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjYxNzgwMTVcbiAgICogQHBhcmFtIHsqfSBSZWN0MlxuICAgKi9cbiAgZGlzdGFuY2UoUmVjdDIpIHtcbiAgICBsZXQgW2xlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbV0gPSB0aGlzLmRpcmVjdGlvbihSZWN0Mik7XG4gICAgaWYgKGxlZnQgJiYgdG9wKSB7XG4gICAgICByZXR1cm4gTWF0aC5oeXBvdCh0aGlzLmxlZnQgLSBSZWN0Mi5yaWdodCwgdGhpcy50b3AgLSBSZWN0Mi5ib3R0b20pO1xuICAgIH0gZWxzZSBpZiAocmlnaHQgJiYgdG9wKSB7XG4gICAgICByZXR1cm4gTWF0aC5oeXBvdCh0aGlzLnJpZ2h0IC0gUmVjdDIubGVmdCwgdGhpcy50b3AgLSBSZWN0Mi5ib3R0b20pO1xuICAgIH0gZWxzZSBpZiAobGVmdCAmJiBib3R0b20pIHtcbiAgICAgIHJldHVybiBNYXRoLmh5cG90KHRoaXMubGVmdCAtIFJlY3QyLnJpZ2h0LCB0aGlzLmJvdHRvbSAtIFJlY3QyLnRvcCk7XG4gICAgfSBlbHNlIGlmIChyaWdodCAmJiBib3R0b20pIHtcbiAgICAgIHJldHVybiBNYXRoLmh5cG90KHRoaXMucmlnaHQgLSBSZWN0Mi5sZWZ0LCB0aGlzLmJvdHRvbSAtIFJlY3QyLnRvcCk7XG4gICAgfSBlbHNlIGlmIChsZWZ0KSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWZ0IC0gUmVjdDIucmlnaHQ7XG4gICAgfSBlbHNlIGlmIChyaWdodCkge1xuICAgICAgcmV0dXJuIFJlY3QyLmxlZnQgLSB0aGlzLnJpZ2h0O1xuICAgIH0gZWxzZSBpZiAodG9wKSB7XG4gICAgICByZXR1cm4gdGhpcy50b3AgLSBSZWN0Mi5ib3R0b207XG4gICAgfSBlbHNlIGlmIChib3R0b20pIHtcbiAgICAgIHJldHVybiBSZWN0Mi50b3AgLSB0aGlzLmJvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodCAtIHRoaXMubGVmdCArIDE7XG4gIH1cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b20gLSB0aGlzLnRvcCArIDE7XG4gIH1cbiAgZ2V0IGFyZWEoKXtcbiAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xuICB9XG59XG4iLCJpbXBvcnQgXCIuL0RhdGEvRm9udC5jc3NcIjtcbmltcG9ydCBGb250U2l6ZURhdGEgZnJvbSBcIi4vRGF0YS9TdGFnZUZvbnRTaXplLmpzb25cIjtcbmltcG9ydCBDb25uZWN0ZWRBcmVhUmVjb2duaXRpb24gZnJvbSBcIi4vQ29ubmVjdGVkQXJlYVJlY29nbml0aW9uXCI7XG5cbmxldCBGb250Q2FjaGUgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YWdlUmVjb2duaXRpb24oSW1hZ2VNYXRyaXgpIHtcbiAgbGV0IE1hdHJpeCA9IFtdO1xuICBsZXQgQ29uZmlkZW5jZSA9IFtdO1xuICBsZXQgTm9kZSA9IG5ldyBTZXQoKTtcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBJbWFnZU1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgIE1hdHJpeC5wdXNoKFtdKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEltYWdlTWF0cml4WzBdLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgW1IsIEcsIEJdID0gSW1hZ2VNYXRyaXhbeV1beF07XG4gICAgICBNYXRyaXhbeV1beF0gPSAoUiArIEcgKyBCKSAvIDMgPiA4MDtcbiAgICAgIGlmIChNYXRyaXhbeV1beF0pIHtcbiAgICAgICAgTm9kZS5hZGQoeCAqIDEwMDAwICsgeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCBnZXRDb25uZWN0ZWRBcmVhID0gbmV3IENvbm5lY3RlZEFyZWFSZWNvZ25pdGlvbihNYXRyaXgsIE5vZGUsIHRydWUpO1xuICBsZXQgQ29ubmVjdGVkQXJlYXMgPSBnZXRDb25uZWN0ZWRBcmVhLkdldEFsbENvbm5lY3RlZEFyZWEoKS5zb3J0KChhLCBiKSA9PiBhLmxlZnQgLSBiLmxlZnQpO1xuICBsZXQgQ2hhcnMgPSBbXTtcbiAgbGV0IFNwbGl0Q2hhcjtcbiAgZm9yIChsZXQgQ2hhciBvZiBDb25uZWN0ZWRBcmVhcykge1xuICAgIGlmIChDaGFyLmhlaWdodCA8IE1hdHJpeC5sZW5ndGggPj4gMSkge1xuICAgICAgQ2hhcnMucHVzaChcIi1cIik7XG4gICAgICBTcGxpdENoYXIgPSBDaGFyO1xuICAgIH0gZWxzZSB7XG4gICAgICBDaGFycy5wdXNoKFwiXCIpO1xuICAgIH1cbiAgfVxuICBsZXQgRm9udFNpemUgPSBnZXRGb250U2l6ZShTcGxpdENoYXIpO1xuICBpZiAoIUZvbnRDYWNoZVtGb250U2l6ZV0pIHtcbiAgICBGb250Q2FjaGVbRm9udFNpemVdID0gZ2VuRm9udERhdGEoRm9udFNpemUpO1xuICB9XG4gIGZvciAobGV0IFtJbmRleCwgQ2hhcl0gb2YgQ2hhcnMuZW50cmllcygpKSB7XG4gICAgaWYgKENoYXIgPT0gXCItXCIpIHtcbiAgICAgIENvbmZpZGVuY2UucHVzaCgxKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgUmVzdWx0ID0gY29tcGFyZU51bWJlcihDb25uZWN0ZWRBcmVhc1tJbmRleF0ubWF0cml4LCBGb250Q2FjaGVbRm9udFNpemVdKTtcbiAgICBDaGFyc1tJbmRleF0gPSBSZXN1bHRbMF07XG4gICAgbGV0IE51bUNvbmYgPSBSZXN1bHRbMV07XG4gICAgaWYgKFJlc3VsdFsxXSA8IDAuOSkge1xuICAgICAgUmVzdWx0ID0gY29tcGFyZUNoYXIoQ29ubmVjdGVkQXJlYXNbSW5kZXhdLm1hdHJpeCwgRm9udENhY2hlW0ZvbnRTaXplXSk7XG4gICAgICBpZiAoUmVzdWx0WzFdID4gTnVtQ29uZikge1xuICAgICAgICBDaGFyc1tJbmRleF0gPSBSZXN1bHRbMF07XG4gICAgICAgIENvbmZpZGVuY2UucHVzaChSZXN1bHRbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ29uZmlkZW5jZS5wdXNoKE51bUNvbmYpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBDb25maWRlbmNlLnB1c2goTnVtQ29uZik7XG4gICAgfVxuICB9XG4gIHJldHVybiBbQ2hhcnMuam9pbignJyksQ29uZmlkZW5jZS5yZWR1Y2UoKGEsYik9PmErYikvQ29uZmlkZW5jZS5sZW5ndGhdXG59XG5mdW5jdGlvbiBnZXRGb250U2l6ZShDaGFyUmVjdCkge1xuICBsZXQgRmluZCA9IGZhbHNlO1xuICBsZXQgUmV0O1xuICBsZXQgRGlmZiA9IEluZmluaXR5O1xuICBmb3IgKGxldCBbU2l6ZSwgUmVjdF0gb2YgT2JqZWN0LmVudHJpZXMoRm9udFNpemVEYXRhKSkge1xuICAgIGxldCBEID0gTWF0aC5hYnMoUmVjdC53aWR0aCAtIENoYXJSZWN0LndpZHRoKSArIE1hdGguYWJzKFJlY3QuaGVpZ2h0IC0gQ2hhclJlY3QuaGVpZ2h0KTtcbiAgICBpZiAoRCA8PSBEaWZmKSB7XG4gICAgICBEaWZmID0gRDtcbiAgICAgIFJldCA9IFNpemU7XG4gICAgICBpZiAoRCA9PSAwKSB7XG4gICAgICAgIEZpbmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoRmluZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBSZXQ7XG59XG5mdW5jdGlvbiBjb21wYXJlTnVtYmVyKE1hdHJpeCwgRm9udCkge1xuICBsZXQgTnVtYmVyID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuICBsZXQgQ29uZmlkZW5jZSA9IC1JbmZpbml0eTtcbiAgbGV0IFJlc3VsdDtcbiAgZm9yIChsZXQgTnVtIG9mIE51bWJlcikge1xuICAgIGxldCBDb25mID0gY29tcGFyZU1hdHJpeChNYXRyaXgsRm9udFtOdW1dKTtcbiAgICBpZiAoQ29uZiA+IENvbmZpZGVuY2UpIHtcbiAgICAgIENvbmZpZGVuY2UgPSBDb25mO1xuICAgICAgUmVzdWx0ID0gTnVtO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW1Jlc3VsdCwgQ29uZmlkZW5jZV07XG59XG5mdW5jdGlvbiBjb21wYXJlQ2hhcihNYXRyaXgsIEZvbnQpIHtcbiAgbGV0IENoYXJzID0gW1xuICAgIFwiQVwiLFxuICAgIFwiQlwiLFxuICAgIFwiQ1wiLFxuICAgIFwiRFwiLFxuICAgIFwiRVwiLFxuICAgIFwiRlwiLFxuICAgIFwiR1wiLFxuICAgIFwiSFwiLFxuICAgIFwiSVwiLFxuICAgIFwiSlwiLFxuICAgIFwiS1wiLFxuICAgIFwiTFwiLFxuICAgIFwiTVwiLFxuICAgIFwiTlwiLFxuICAgIFwiT1wiLFxuICAgIFwiUFwiLFxuICAgIFwiUVwiLFxuICAgIFwiUlwiLFxuICAgIFwiU1wiLFxuICAgIFwiVFwiLFxuICAgIFwiVVwiLFxuICAgIFwiVlwiLFxuICAgIFwiV1wiLFxuICAgIFwiWFwiLFxuICAgIFwiWVwiLFxuICAgIFwiWlwiXG4gIF07XG4gIGxldCBDb25maWRlbmNlID0gLUluZmluaXR5O1xuICBsZXQgUmVzdWx0O1xuICBmb3IgKGxldCBDaGFyIG9mIENoYXJzKSB7XG4gICAgbGV0IENvbmYgPSBjb21wYXJlTWF0cml4KE1hdHJpeCxGb250W0NoYXJdKTtcbiAgICBpZiAoQ29uZiA+IENvbmZpZGVuY2UpIHtcbiAgICAgIENvbmZpZGVuY2UgPSBDb25mO1xuICAgICAgUmVzdWx0ID0gQ2hhcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtSZXN1bHQsIENvbmZpZGVuY2VdO1xufVxuZnVuY3Rpb24gY29tcGFyZU1hdHJpeChNYXRyaXgxLCBNYXRyaXgyKSB7XG4gIGxldCBXaWR0aCA9IE1hdGgubWluKE1hdHJpeDFbMF0ubGVuZ3RoLCBNYXRyaXgyWzBdLmxlbmd0aCk7XG4gIGxldCBIZWlnaHQgPSBNYXRoLm1pbihNYXRyaXgxLmxlbmd0aCwgTWF0cml4Mi5sZW5ndGgpO1xuICBsZXQgQ291bnQgPSAwO1xuICBmb3IgKGxldCB5ID0gMDsgeSA8IEhlaWdodDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBXaWR0aDsgeCsrKSB7XG4gICAgICBpZiAoTWF0cml4MVt5XVt4XSA9PSBNYXRyaXgyW3ldW3hdKSB7XG4gICAgICAgIENvdW50Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBDb3VudCAvIChNYXRyaXgxWzBdLmxlbmd0aCAqIE1hdHJpeDEubGVuZ3RoKTtcbn1cbi8vIOeUn+aIkOavj+S4quWtl+espuaVsOaNrlxuZnVuY3Rpb24gZ2VuRm9udERhdGEoc2l6ZSkge1xuICBsZXQgQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgbGV0IEN0eCA9IENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIEN0eC5mb250ID0gYCR7c2l6ZX0gJ05vdmVjZW50byBXaWRlQm9sZCdgO1xuICBDdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gIEN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuICBsZXQgRGF0YSA9IHt9O1xuICBsZXQgQ2hhcnMgPSBcIjAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiLnNwbGl0KFwiXCIpO1xuICBmb3IgKGxldCBDaGFyIG9mIENoYXJzKSB7XG4gICAgbGV0IFNpemUgPSBDdHgubWVhc3VyZVRleHQoQ2hhcik7XG4gICAgQ2FudmFzLmhlaWdodCA9IFNpemUuYWN0dWFsQm91bmRpbmdCb3hBc2NlbnQgKyBTaXplLmFjdHVhbEJvdW5kaW5nQm94RGVzY2VudDtcbiAgICBDYW52YXMud2lkdGggPSBTaXplLndpZHRoO1xuICAgIEN0eC5mb250ID0gYCR7c2l6ZX0gJ05vdmVjZW50byBXaWRlQm9sZCdgO1xuICAgIEN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICBDdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICBDdHguY2xlYXJSZWN0KDAsIDAsIENhbnZhcy53aWR0aCwgQ2FudmFzLmhlaWdodCk7XG4gICAgQ3R4LmZpbGxUZXh0KENoYXIsIDAsIFNpemUuYWN0dWFsQm91bmRpbmdCb3hBc2NlbnQpO1xuICAgIGxldCBJRGF0YSA9IEN0eC5nZXRJbWFnZURhdGEoMCwgMCwgQ2FudmFzLndpZHRoLCBDYW52YXMuaGVpZ2h0KTtcbiAgICBsZXQgWEZsYWdzID0gbmV3IEFycmF5KENhbnZhcy53aWR0aCkuZmlsbChmYWxzZSk7XG4gICAgbGV0IFhSYW5nZSA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgQ2FudmFzLndpZHRoOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQ2FudmFzLmhlaWdodDsgeSsrKSB7XG4gICAgICAgIGxldCBJbmRleCA9ICh5ICogQ2FudmFzLndpZHRoICsgeCkgKiA0O1xuICAgICAgICBpZiAoSURhdGEuZGF0YVtJbmRleCArIDNdID4gMCkge1xuICAgICAgICAgIFhGbGFnc1t4XSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBDYW52YXMud2lkdGg7IHgrKykge1xuICAgICAgaWYgKFhGbGFnc1t4XSAmJiBYUmFuZ2UubGVuZ3RoID09IDApIHtcbiAgICAgICAgWFJhbmdlLnB1c2goeCk7XG4gICAgICB9IGVsc2UgaWYgKFhGbGFnc1t4XSkge1xuICAgICAgICBYUmFuZ2VbMV0gPSB4O1xuICAgICAgfVxuICAgIH1cbiAgICBJRGF0YSA9IEN0eC5nZXRJbWFnZURhdGEoWFJhbmdlWzBdLCAwLCBYUmFuZ2VbMV0gLSBYUmFuZ2VbMF0gKyAxLCBDYW52YXMuaGVpZ2h0KTtcbiAgICBsZXQgTWF0cml4ID0gW107XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBJRGF0YS5oZWlnaHQ7IHkrKykge1xuICAgICAgTWF0cml4LnB1c2goW10pO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBJRGF0YS53aWR0aDsgeCsrKSB7XG4gICAgICAgIE1hdHJpeFt5XVt4XSA9IElEYXRhLmRhdGFbKHkgKiBJRGF0YS53aWR0aCArIHgpICogNCArIDNdID4gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgRGF0YVtDaGFyXSA9IE1hdHJpeDtcbiAgfVxuICByZXR1cm4gRGF0YTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=