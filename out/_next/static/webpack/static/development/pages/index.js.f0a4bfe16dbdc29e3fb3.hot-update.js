webpackHotUpdate("static/development/pages/index.js",{

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



Object(emotion__WEBPACK_IMPORTED_MODULE_2__["injectGlobal"])(emotion_normalize__WEBPACK_IMPORTED_MODULE_1___default.a, " html,body{margin:0;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhbi9wcm9qL2RlZmkvc2l0ZS9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVkiLCJmaWxlIjoiL2hvbWUvaWFuL3Byb2ovZGVmaS9zaXRlL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGVtb3Rpb25Ob3JtYWxpemUgZnJvbSBcImVtb3Rpb24tbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBpbmplY3RHbG9iYWwgfSBmcm9tIFwiZW1vdGlvblwiO1xuXG5pbmplY3RHbG9iYWxgXG4ke2Vtb3Rpb25Ob3JtYWxpemV9XG5cbmh0bWwsIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbn1cbmA7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvRGVzY3JpcHRpb25cIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXZlbnRzXCI7XG5cbmNvbnN0IFBhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgaDIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgY29sb3I6ICMwNzM0ZmY7XG4gICAgZm9udC1mYW1pbHk6IEFlb25paztcbiAgICBmb250LXNpemU6IDcwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDg0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZGVyIC8+XG4gICAgPERlc2NyaXB0aW9uIC8+XG4gICAgPEV2ZW50cyAvPlxuICA8L2Rpdj5cbik7XG4iXX0= */");



var PageWrapper =
/*#__PURE__*/
styled("div", {
  label: "PageWrapper",
  target: "e7ya0lf0"
})("h2{transform:rotate(360deg);color:#0734ff;font-family:Aeonik;font-size:70px;font-weight:bold;line-height:84px;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhbi9wcm9qL2RlZmkvc2l0ZS9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0I4QiIsImZpbGUiOiIvaG9tZS9pYW4vcHJvai9kZWZpL3NpdGUvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZW1vdGlvbk5vcm1hbGl6ZSBmcm9tIFwiZW1vdGlvbi1ub3JtYWxpemVcIjtcbmltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gXCJlbW90aW9uXCI7XG5cbmluamVjdEdsb2JhbGBcbiR7ZW1vdGlvbk5vcm1hbGl6ZX1cblxuaHRtbCwgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xufVxuYDtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9EZXNjcmlwdGlvblwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi4vY29tcG9uZW50cy9FdmVudHNcIjtcblxuY29uc3QgUGFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoMiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICBjb2xvcjogIzA3MzRmZjtcbiAgICBmb250LWZhbWlseTogQWVvbmlrO1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogODRweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkZXIgLz5cbiAgICA8RGVzY3JpcHRpb24gLz5cbiAgICA8RXZlbnRzIC8+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */");
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Events__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
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
//# sourceMappingURL=index.js.f0a4bfe16dbdc29e3fb3.hot-update.js.map