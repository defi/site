webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Events.tsx":
/*!*******************************!*\
  !*** ./components/Events.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");
var _jsxFileName = "/home/ian/proj/defi/site/components/Events.tsx";



var Events = function Events(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Events"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Upcoming"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Previous"));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])(Events, {
  target: "ewvgo0i0"
})("background-color:#fafbff;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhbi9wcm9qL2RlZmkvc2l0ZS9jb21wb25lbnRzL0V2ZW50cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzZCIiwiZmlsZSI6Ii9ob21lL2lhbi9wcm9qL2RlZmkvc2l0ZS9jb21wb25lbnRzL0V2ZW50cy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInJlYWN0LWVtb3Rpb25cIjtcblxuY29uc3QgRXZlbnRzID0gKHsgY2xhc3NOYW1lIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgIDxoMj5FdmVudHM8L2gyPlxuICAgIDxoND5VcGNvbWluZzwvaDQ+XG4gICAgPGg0PlByZXZpb3VzPC9oND5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKEV2ZW50cylgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmY7XG5gO1xuIl19 */"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion-normalize */ "./node_modules/emotion-normalize/dist/index.js");
/* harmony import */ var emotion_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion_normalize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Description */ "./components/Description.tsx");
/* harmony import */ var _components_Events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Events */ "./components/Events.tsx");
var _jsxFileName = "/home/ian/proj/defi/site/pages/index.tsx";



Object(emotion__WEBPACK_IMPORTED_MODULE_2__["injectGlobal"])(emotion_normalize__WEBPACK_IMPORTED_MODULE_1___default.a, " html,body{margin:0;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhbi9wcm9qL2RlZmkvc2l0ZS9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVkiLCJmaWxlIjoiL2hvbWUvaWFuL3Byb2ovZGVmaS9zaXRlL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGVtb3Rpb25Ob3JtYWxpemUgZnJvbSBcImVtb3Rpb24tbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBpbmplY3RHbG9iYWwgfSBmcm9tIFwiZW1vdGlvblwiO1xuXG5pbmplY3RHbG9iYWxgXG4ke2Vtb3Rpb25Ob3JtYWxpemV9XG5cbmh0bWwsIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbn1cbmA7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvRGVzY3JpcHRpb25cIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZGVyIC8+XG4gICAgPERlc2NyaXB0aW9uIC8+XG4gICAgPEV2ZW50cyAvPlxuICA8L2Rpdj5cbik7XG4iXX0= */");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Events__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.2590ea7711b7291ba677.hot-update.js.map