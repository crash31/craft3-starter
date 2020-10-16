(self["webpackChunk"] = self["webpackChunk"] || []).push([["/main"],{

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.e, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// App main
var main = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var _yield$import, Vue, vm;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.e(/*! import() | vue */ "/vendor").then(__webpack_require__.bind(__webpack_require__, /*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"));

          case 2:
            _yield$import = _context.sent;
            Vue = _yield$import["default"];
            // Create our vue instance
            vm = new Vue({
              el: "#app",
              components: {
                //Dynamically load components
                helloWorld: function helloWorld() {
                  return Promise.all(/*! import() | helloWorld */[__webpack_require__.e("/vendor"), __webpack_require__.e("helloWorld")]).then(__webpack_require__.bind(__webpack_require__, /*! ../vue/HelloWorld.vue */ "./src/vue/HelloWorld.vue"));
                }
              }
            });
            return _context.abrupt("return", vm);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}(); // Execute async function


main().then(function (vm) {
  vm();
}); // Accept HMR

if (false) {}

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./src/js/main.js","/manifest","/vendor"],["./src/css/main.css","/manifest","/vendor"]]]);