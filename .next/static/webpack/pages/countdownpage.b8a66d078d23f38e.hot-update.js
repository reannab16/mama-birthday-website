"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/countdownpage",{

/***/ "./pages/countdownpage.tsx":
/*!*********************************!*\
  !*** ./pages/countdownpage.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ countdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction countdown() {\n    _s();\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [hours, setHours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const target = new Date(\"05/20/2023 19:30:00\").getTime();\n        const interval = setInterval(()=>{\n            const now = new Date().getTime();\n            const difference = target - now;\n            const d = Math.floor(difference / (1000 * 60 * 60 * 24));\n            setDays(d);\n            const h = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            setHours(h);\n            const m = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));\n            setMinutes(m);\n            const s = Math.floor(difference % (1000 * 60) / 1000);\n            setSeconds(s);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden h-[100vh] w-[100%] bg-black text-lg flex flex-col items-center justify-center text-[#fce6e7] text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"see-you\",\n                    children: \"see you soon!\"\n                }, void 0, false, {\n                    fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                lineNumber: 41,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center text-white text-xl counter-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"counter justify-center\",\n                                children: days\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"days\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"counter justify-center\",\n                                children: hours\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"hours\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"counter justify-center\",\n                                children: minutes\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"minutes\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"counter justify-center\",\n                                children: seconds\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"seconds\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 74\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                lineNumber: 45,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_s(countdown, \"Eb+VxA7Tbkp7jVFfvE3lE1BUgpA=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3VudGRvd25wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBRTdCLFNBQVNHLFlBQVk7O0lBRWhDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUVQLCtDQUFRQSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUMsSUFBSztRQUNYLE1BQU1XLFNBQVMsSUFBSUMsS0FBSyx1QkFBdUJDLE9BQU87UUFFdEQsTUFBTUMsV0FBV0MsWUFBWSxJQUFLO1lBQzlCLE1BQU1DLE1BQU0sSUFBSUosT0FBT0MsT0FBTztZQUM5QixNQUFNSSxhQUFhTixTQUFTSztZQUU1QixNQUFNRSxJQUFJQyxLQUFLQyxLQUFLLENBQUNILGFBQWEsUUFBTyxLQUFLLEtBQUssRUFBQztZQUNwRGIsUUFBUWM7WUFFUixNQUFNRyxJQUFJRixLQUFLQyxLQUFLLENBQ2hCLGFBQWUsUUFBTyxLQUFLLEtBQUssRUFBQyxJQUFPLFFBQU8sS0FBSyxFQUFDO1lBRXpEZCxTQUFTZTtZQUVULE1BQU1DLElBQUlILEtBQUtDLEtBQUssQ0FDaEIsYUFBZSxRQUFPLEtBQUssRUFBQyxJQUFPLFFBQU8sRUFBQztZQUUvQ1osV0FBV2M7WUFFWCxNQUFNQyxJQUFJSixLQUFLQyxLQUFLLENBQUMsYUFBZSxRQUFPLEVBQUMsSUFBTztZQUNuRFYsV0FBV2E7UUFDZixHQUFHO1FBRUgsT0FBTSxJQUFNQyxjQUFjVjtJQUM5QixHQUFHLEVBQUU7SUFHTCxxQkFDSSw4REFBQ1c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUViLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFBVTs7Ozs7Ozs7Ozs7MEJBRTNCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUtELFdBQVU7MENBQTBCdkI7Ozs7OzswQ0FDMUMsOERBQUN3QjswQ0FBSzs7Ozs7Ozs7Ozs7O2tDQUVWLDhEQUFDRjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFLRCxXQUFVOzBDQUEwQnJCOzs7Ozs7MENBQzFDLDhEQUFDc0I7MENBQUs7Ozs7Ozs7Ozs7OztrQ0FFViw4REFBQ0Y7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBS0QsV0FBVTswQ0FBMEJuQjs7Ozs7OzBDQUMxQyw4REFBQ29COzBDQUFLOzs7Ozs7Ozs7Ozs7a0NBRVIsOERBQUNGO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUtELFdBQVU7MENBQTBCakI7Ozs7OzswQ0FBZSw4REFBQ2tCOzBDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0UsQ0FBQztHQTVEdUJ6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb3VudGRvd25wYWdlLnRzeD85NzlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY291bnRkb3duKCkge1xuXG4gICAgY29uc3QgW2RheXMsIHNldERheXNdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2hvdXJzLCBzZXRIb3Vyc10gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbWludXRlcywgc2V0TWludXRlc109IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBuZXcgRGF0ZShcIjA1LzIwLzIwMjMgMTk6MzA6MDBcIikuZ2V0VGltZSgpXG5cbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gdGFyZ2V0IC0gbm93XG5cbiAgICAgICAgICAgIGNvbnN0IGQgPSBNYXRoLmZsb29yKGRpZmZlcmVuY2UvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICBzZXREYXlzKGQpO1xuXG4gICAgICAgICAgICBjb25zdCBoID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAoZGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0SG91cnMoaClcblxuICAgICAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgKGRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBzZXRNaW51dGVzKG0pXG5cbiAgICAgICAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKChkaWZmZXJlbmNlICUgKDEwMDAgKiA2MCkpIC8gKDEwMDApKVxuICAgICAgICAgICAgc2V0U2Vjb25kcyhzKVxuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICByZXR1cm4oKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9LCBbXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy1oaWRkZW4gaC1bMTAwdmhdIHctWzEwMCVdIGJnLWJsYWNrIHRleHQtbGcgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bI2ZjZTZlN10gdGV4dC1jZW50ZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi01Jz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlZS15b3UnPnNlZSB5b3Ugc29vbiE8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LXhsIGNvdW50ZXItY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGVyIGp1c3RpZnktY2VudGVyXCI+e2RheXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPmRheXM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGVyIGp1c3RpZnktY2VudGVyXCI+e2hvdXJzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5ob3Vyczwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZXIganVzdGlmeS1jZW50ZXJcIj57bWludXRlc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+bWludXRlczwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRlciBqdXN0aWZ5LWNlbnRlclwiPntzZWNvbmRzfTwvc3Bhbj48c3Bhbj5zZWNvbmRzPC9zcGFuPjwvZGl2PlxuICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb3VudGRvd24iLCJkYXlzIiwic2V0RGF5cyIsImhvdXJzIiwic2V0SG91cnMiLCJtaW51dGVzIiwic2V0TWludXRlcyIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwidGFyZ2V0IiwiRGF0ZSIsImdldFRpbWUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibm93IiwiZGlmZmVyZW5jZSIsImQiLCJNYXRoIiwiZmxvb3IiLCJoIiwibSIsInMiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/countdownpage.tsx\n"));

/***/ })

});