"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_parallaxicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/parallaxicons */ \"./components/parallaxicons.tsx\");\n\n\n\nfunction Boo() {\n    let store = [];\n    for(let i = 0; i < 10; i++){\n        store.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Reanna\"\n        }, void 0, false, {\n            fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/index.tsx\",\n            lineNumber: 16,\n            columnNumber: 16\n        }, this));\n    }\n    return store;\n}\n_c = Boo;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parallaxicons__WEBPACK_IMPORTED_MODULE_1__.ParallaxComponents, {}, void 0, false, {\n                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[100vh] w-[100vw] bg-[#fce6e7]\"\n            }, void 0, false, {\n                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Home;\n{} // let headerFlower1: any = document.getElementById('flower1');\n // let titleItems: any = document.getElementById('title-items');\n // window.addEventListener('scroll', function(){\n //   var value = window.scrollY;\n //   headerFlower1.style.top= value * 0.5 + 'px';\n //   titleItems.style.top= value * 0.25 + 'px'\n // })\nvar _c, _c1;\n$RefreshReg$(_c, \"Boo\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFTTUE7QUFGMEQ7QUFJaEUsU0FBU0UsTUFBTTtJQUNiLElBQUlDLFFBQWEsRUFBRTtJQUVuQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSSxJQUFJQSxJQUFLO1FBQzNCRCxNQUFNRSxJQUFJLGVBQUMsOERBQUNDO3NCQUFJOzs7Ozs7SUFHbEI7SUFDQSxPQUNFSDtBQUVKO0tBWFNEO0FBYU0sU0FBU0ssT0FBTztJQUM3QixxQkFDRSw4REFBQ0Q7UUFBSUUsV0FBVTs7MEJBQ2IsOERBQUNQLHlFQUFrQkE7Ozs7OzBCQUNuQiw4REFBQ0s7Z0JBQUlFLFdBQVU7Ozs7Ozs7Ozs7OztBQUtyQixDQUFDO01BVHVCRDtBQWN4QixDQW9DSSxFQUVKLCtEQUErRDtDQUMvRCxnRUFBZ0U7Q0FFaEUsZ0RBQWdEO0NBQ2hELGdDQUFnQztDQUNoQyxpREFBaUQ7Q0FDakQsOENBQThDO0NBRTlDLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgeyBJY29uQm90dGxlIH0gZnJvbSAnQC9jb21wb25lbnRzL2ljb25zJztcbmltcG9ydCB7IEZsb3dlck92ZXJsYXkgfSBmcm9tICdAL2NvbXBvbmVudHMvaWNvbnMnO1xuaW1wb3J0IHsgV2F2ZSB9IGZyb20gJ0AvY29tcG9uZW50cy9pY29ucyc7XG5pbXBvcnQgeyBTaG9lcyB9IGZyb20gJ0AvY29tcG9uZW50cy9pY29ucyc7XG5pbXBvcnQgeyBQYXJhbGxheCwgUGFyYWxsYXhMYXllcn0gZnJvbSAnQHJlYWN0LXNwcmluZy9wYXJhbGxheCdcbmltcG9ydCB7IFBhcmFsbGF4Q29tcG9uZW50cyB9IGZyb20gJ0AvY29tcG9uZW50cy9wYXJhbGxheGljb25zJztcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5mdW5jdGlvbiBCb28oKSB7XG4gIGxldCBzdG9yZTogYW55ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgc3RvcmUucHVzaCg8ZGl2PlxuICAgICAgUmVhbm5hXG4gICAgPC9kaXY+KVxuICB9XG4gIHJldHVybiAoXG4gICAgc3RvcmVcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgPFBhcmFsbGF4Q29tcG9uZW50cy8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bMTAwdmhdIHctWzEwMHZ3XSBiZy1bI2ZjZTZlN10nPlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuXG5cbnsvKiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyIHctMTAwdncgaC0xMDB2aCc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsYWNrIGgtWzEwMHZoXSB3LVsxMDB2d10gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIC16LTEwIGhlYWRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIG92ZXJmbG93LWhpZGRlbiB3LVsxMDB2d10gaC1bMTAwdmhdJz5cbiAgICAgICAgICA8Rmxvd2VyT3ZlcmxheSBjbGFzc05hbWU9J2Fic29sdXRlIC10b3AtNSAtcmlnaHQtWzQwdnddIGgtWzY1dmhdIGhlYWRlci1mbG93ZXJzJyBpZD0nZmxvd2VyMScvPlxuICAgICAgICAgIDxGbG93ZXJPdmVybGF5IGNsYXNzTmFtZT0nYWJzb2x1dGUgLWJvdHRvbS1bMzB2aF0gLWxlZnQtWzUwdnddIGgtWzY1dmhdIGhlYWRlci1mbG93ZXJzJyBpZD1cImZsb3dlcjJcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlLWl0ZW1zIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJyBpZD0ndGl0bGUtaXRlbXMnPlxuICAgICAgICAgICAgPEljb25Cb3R0bGUgY2xhc3NOYW1lPSctbXItOSBtYi0xMicvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIC1tbC04IG10LTEwJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtW3ZhcigtLWdvbGRpc2gpXSBmb250LVtmaWZ0eV0gdGV4dC04eGwnPlxuICAgICAgICAgICAgICAgIGZpZnR5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBmb250LVtHZW9yZ2lhLVByb10gaXRhbGljIC1tdC0yIHRyYWNraW5nLXdpZGVyIG1yLTEnPlxuICAgICAgICAgICAgICAgIGlzIHRoZSB1bHRpbWF0ZSAnRicgd29yZFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNob2VzIGNsYXNzTmFtZT0nYWJzb2x1dGUgei0yMCBoLVsyMHZoXSBib3R0b20tWzQuNXZoXSByaWdodC1bMnZ3XScvPlxuICAgICAgICAgICAgPFdhdmUgY2xhc3NOYW1lPSdhYnNvbHV0ZSB6LTEwIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHctWzEwMHZ3XScvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctWyNmY2U2ZTddIGgtWzgwdmhdIHctWzEwMHZ3XSBmbGV4LWNvbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzEwMCVdIHctWzYwJV0gZmxleC1jb2wgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZvbnQtW0dlb3JnaWEtUHJvXSB0ZXh0LWNlbnRlciBwYi1bMTB2aF0nPlxuICAgICAgICAgIDxkaXY+UGxlYXNlIGpvaW4gbWUgaW4gY2VsZWJyYXRpbmcgdGhpcyBtaWxlc3RvbmUgc28gSSBjYW4gc3RlcCBpbnRvIG15IGZpZnRpZXMgd2l0aCBteSBmYXZvdXJpdGUgcGVvcGxlLjwvZGl2PlxuICAgICAgICAgIDxkaXY+RHJlc3MgY29kZTogZnJvbSBjYXN1YWwgdG8gZGF6emxlLCBzYW5kYWxzIHRvIHN0aWxldHRvcywgZGlhbW9uZHMgb3IgZXZlbiBhIHRpYXJhLiBUaGVyZSdzIG9ubHkgb25lIHJ1bGUtIHJvY2sgYW55IG91dGZpdCB5b3UgY2hvb3NlLjwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgPC9kaXY+XG4gIClcbn0gKi99XG5cbi8vIGxldCBoZWFkZXJGbG93ZXIxOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxvd2VyMScpO1xuLy8gbGV0IHRpdGxlSXRlbXM6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pdGVtcycpO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcbi8vICAgdmFyIHZhbHVlID0gd2luZG93LnNjcm9sbFk7XG4vLyAgIGhlYWRlckZsb3dlcjEuc3R5bGUudG9wPSB2YWx1ZSAqIDAuNSArICdweCc7XG4vLyAgIHRpdGxlSXRlbXMuc3R5bGUudG9wPSB2YWx1ZSAqIDAuMjUgKyAncHgnXG5cbi8vIH0pXG5cblxuIl0sIm5hbWVzIjpbImludGVyIiwiUGFyYWxsYXhDb21wb25lbnRzIiwiQm9vIiwic3RvcmUiLCJpIiwicHVzaCIsImRpdiIsIkhvbWUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});