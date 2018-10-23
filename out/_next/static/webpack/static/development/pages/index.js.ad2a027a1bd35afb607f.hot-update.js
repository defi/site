webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Members.tsx":
/*!********************************!*\
  !*** ./components/Members.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ "./components/Section.tsx");
/* harmony import */ var _lib_members_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/members.json */ "./lib/members.json");
var _lib_members_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../lib/members.json */ "./lib/members.json", 1);
var _jsxFileName = "/home/ian/proj/defi/site/components/Members.tsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Category = function Category(_ref) {
  var header = _ref.header,
      members = _ref.members,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, header), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, members.map(function (member) {
    var data = _lib_members_json__WEBPACK_IMPORTED_MODULE_3__.members[member];
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: data && data.url || "#",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, member));
  })));
};

var StyledCategory =
/*#__PURE__*/
Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])(Category, {
  label: "StyledCategory",
  target: "ebj7umv0"
})("h4{color:#000d45;font-size:28px;font-weight:bold;line-height:34px;:after{display:block;content:\"\";margin-top:12px;height:1px;width:33px;border-bottom:5px solid #0734ff;}margin-bottom:27px;}ul{list-style:none;padding:0;margin:0;}a{text-decoration:none;color:#0734ff;font-size:20px;line-height:24px;:hover{color:#000d45;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhbi9wcm9qL2RlZmkvc2l0ZS9jb21wb25lbnRzL01lbWJlcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDdUMiLCJmaWxlIjoiL2hvbWUvaWFuL3Byb2ovZGVmaS9zaXRlL2NvbXBvbmVudHMvTWVtYmVycy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwicmVhY3QtZW1vdGlvblwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vU2VjdGlvblwiO1xuaW1wb3J0IG1lbWJlckRhdGEgZnJvbSBcIi4uL2xpYi9tZW1iZXJzLmpzb25cIjtcblxuY29uc3QgQ2F0ZWdvcnkgPSAoe1xuICBoZWFkZXIsXG4gIG1lbWJlcnMsXG4gIGNsYXNzTmFtZVxufToge1xuICBoZWFkZXI6IHN0cmluZztcbiAgbWVtYmVyczogc3RyaW5nW107XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgPGg0PntoZWFkZXJ9PC9oND5cbiAgICA8dWw+XG4gICAgICB7bWVtYmVycy5tYXAobWVtYmVyID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG1lbWJlckRhdGEubWVtYmVyc1ttZW1iZXJdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9eyhkYXRhICYmIGRhdGEudXJsKSB8fCBcIiNcIn0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIHttZW1iZXJ9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvdWw+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgU3R5bGVkQ2F0ZWdvcnkgPSBzdHlsZWQoQ2F0ZWdvcnkpYFxuICBoNCB7XG4gICAgY29sb3I6ICMwMDBkNDU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgIDphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICB3aWR0aDogMzNweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDczNGZmO1xuICAgIH1cbiAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzA3MzRmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDAwZDQ1O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTWVtYmVycyA9ICh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3QuZW50cmllcyhtZW1iZXJEYXRhLmNhdGVnb3JpZXMpLnNvcnQoXG4gICAgKGEsIGIpID0+IChhIDwgYiA/IC0xIDogMSlcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8aDI+TWVtYmVyczwvaDI+XG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKFtoZWFkZXIsIG1lbWJlcnNdKSA9PiAoXG4gICAgICAgIDxTdHlsZWRDYXRlZ29yeSBoZWFkZXI9e2hlYWRlcn0gbWVtYmVycz17bWVtYmVycyBhcyBzdHJpbmdbXX0gLz5cbiAgICAgICkpfVxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChNZW1iZXJzKWBgO1xuIl19 */");

var Members = function Members(_ref2) {
  var className = _ref2.className;
  var categories = Object.entries(_lib_members_json__WEBPACK_IMPORTED_MODULE_3__.categories).sort(function (a, b) {
    return a < b ? -1 : 1;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Members"), categories.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        header = _ref4[0],
        members = _ref4[1];

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StyledCategory, {
      header: header,
      members: members,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])(Members, {
  target: "ebj7umv1"
})("/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhbi9wcm9qL2RlZmkvc2l0ZS9jb21wb25lbnRzL01lbWJlcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFOEIiLCJmaWxlIjoiL2hvbWUvaWFuL3Byb2ovZGVmaS9zaXRlL2NvbXBvbmVudHMvTWVtYmVycy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwicmVhY3QtZW1vdGlvblwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vU2VjdGlvblwiO1xuaW1wb3J0IG1lbWJlckRhdGEgZnJvbSBcIi4uL2xpYi9tZW1iZXJzLmpzb25cIjtcblxuY29uc3QgQ2F0ZWdvcnkgPSAoe1xuICBoZWFkZXIsXG4gIG1lbWJlcnMsXG4gIGNsYXNzTmFtZVxufToge1xuICBoZWFkZXI6IHN0cmluZztcbiAgbWVtYmVyczogc3RyaW5nW107XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgPGg0PntoZWFkZXJ9PC9oND5cbiAgICA8dWw+XG4gICAgICB7bWVtYmVycy5tYXAobWVtYmVyID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG1lbWJlckRhdGEubWVtYmVyc1ttZW1iZXJdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9eyhkYXRhICYmIGRhdGEudXJsKSB8fCBcIiNcIn0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIHttZW1iZXJ9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvdWw+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgU3R5bGVkQ2F0ZWdvcnkgPSBzdHlsZWQoQ2F0ZWdvcnkpYFxuICBoNCB7XG4gICAgY29sb3I6ICMwMDBkNDU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgIDphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICB3aWR0aDogMzNweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDczNGZmO1xuICAgIH1cbiAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzA3MzRmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDAwZDQ1O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTWVtYmVycyA9ICh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3QuZW50cmllcyhtZW1iZXJEYXRhLmNhdGVnb3JpZXMpLnNvcnQoXG4gICAgKGEsIGIpID0+IChhIDwgYiA/IC0xIDogMSlcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8aDI+TWVtYmVyczwvaDI+XG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKFtoZWFkZXIsIG1lbWJlcnNdKSA9PiAoXG4gICAgICAgIDxTdHlsZWRDYXRlZ29yeSBoZWFkZXI9e2hlYWRlcn0gbWVtYmVycz17bWVtYmVycyBhcyBzdHJpbmdbXX0gLz5cbiAgICAgICkpfVxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChNZW1iZXJzKWBgO1xuIl19 */"));

/***/ })

})
//# sourceMappingURL=index.js.ad2a027a1bd35afb607f.hot-update.js.map