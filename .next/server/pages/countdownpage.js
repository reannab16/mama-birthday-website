"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/countdownpage";
exports.ids = ["pages/countdownpage"];
exports.modules = {

/***/ "./pages/countdownpage.tsx":
/*!*********************************!*\
  !*** ./pages/countdownpage.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ countdown)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction countdown() {\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [hours, setHours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const target = new Date(\"05/20/2023 19:30:00\").getTime();\n        const interval = setInterval(()=>{\n            const now = new Date().getTime();\n            const difference = target - now;\n            const d = Math.floor(difference / (1000 * 60 * 60 * 24));\n            setDays(d);\n            const h = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            setHours(h);\n            const m = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));\n            setMinutes(m);\n            const s = Math.floor(difference % (1000 * 60) / 1000);\n            setSeconds(s);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden h-[100vh] w-[100%] bg-black text-lg flex flex-col items-center justify-center text-[#fce6e7] text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"see-you\",\n                    children: \"see you soon!\"\n                }, void 0, false, {\n                    fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                lineNumber: 41,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center text-white text-xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"counter-container justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"counter justify-center\",\n                                children: days\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs\",\n                                children: \"days\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"counter-container justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"counter justify-center\",\n                                children: hours\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs\",\n                                children: \"hours\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"counter justify-center\",\n                                children: minutes\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs\",\n                                children: \"mins\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"counter-container justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"counter justify-center\",\n                                children: seconds\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs\",\n                                children: \"secs\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n                lineNumber: 45,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/reannabakshani/Documents/GitHub/mama-birthday-website/pages/countdownpage.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3VudGRvd25wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFFN0IsU0FBU0csWUFBWTtJQUVoQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFFUCwrQ0FBUUEsQ0FBQztJQUN0QyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDLElBQUs7UUFDWCxNQUFNVyxTQUFTLElBQUlDLEtBQUssdUJBQXVCQyxPQUFPO1FBRXRELE1BQU1DLFdBQVdDLFlBQVksSUFBSztZQUM5QixNQUFNQyxNQUFNLElBQUlKLE9BQU9DLE9BQU87WUFDOUIsTUFBTUksYUFBYU4sU0FBU0s7WUFFNUIsTUFBTUUsSUFBSUMsS0FBS0MsS0FBSyxDQUFDSCxhQUFhLFFBQU8sS0FBSyxLQUFLLEVBQUM7WUFDcERiLFFBQVFjO1lBRVIsTUFBTUcsSUFBSUYsS0FBS0MsS0FBSyxDQUNoQixhQUFlLFFBQU8sS0FBSyxLQUFLLEVBQUMsSUFBTyxRQUFPLEtBQUssRUFBQztZQUV6RGQsU0FBU2U7WUFFVCxNQUFNQyxJQUFJSCxLQUFLQyxLQUFLLENBQ2hCLGFBQWUsUUFBTyxLQUFLLEVBQUMsSUFBTyxRQUFPLEVBQUM7WUFFL0NaLFdBQVdjO1lBRVgsTUFBTUMsSUFBSUosS0FBS0MsS0FBSyxDQUFDLGFBQWUsUUFBTyxFQUFDLElBQU87WUFDbkRWLFdBQVdhO1FBQ2YsR0FBRztRQUVILE9BQU0sSUFBTUMsY0FBY1Y7SUFDOUIsR0FBRyxFQUFFO0lBR0wscUJBQ0ksOERBQUNXO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFFYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQVU7Ozs7Ozs7Ozs7OzBCQUUzQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFLRCxXQUFVOzBDQUEwQnZCOzs7Ozs7MENBQzFDLDhEQUFDd0I7Z0NBQUtELFdBQVU7MENBQVU7Ozs7Ozs7Ozs7OztrQ0FFOUIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUtELFdBQVU7MENBQTBCckI7Ozs7OzswQ0FDMUMsOERBQUNzQjtnQ0FBS0QsV0FBVTswQ0FBVTs7Ozs7Ozs7Ozs7O2tDQUU5Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBS0QsV0FBVTswQ0FBMEJuQjs7Ozs7OzBDQUMxQyw4REFBQ29CO2dDQUFLRCxXQUFVOzBDQUFVOzs7Ozs7Ozs7Ozs7a0NBRTlCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFLRCxXQUFVOzBDQUEwQmpCOzs7Ozs7MENBQzFDLDhEQUFDa0I7Z0NBQUtELFdBQVU7MENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFtYS1iaXJ0aGRheS13ZWJzaXRlLy4vcGFnZXMvY291bnRkb3ducGFnZS50c3g/OTc5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvdW50ZG93bigpIHtcblxuICAgIGNvbnN0IFtkYXlzLCBzZXREYXlzXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtob3Vycywgc2V0SG91cnNdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW21pbnV0ZXMsIHNldE1pbnV0ZXNdPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbmV3IERhdGUoXCIwNS8yMC8yMDIzIDE5OjMwOjAwXCIpLmdldFRpbWUoKVxuXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT57XG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHRhcmdldCAtIG5vd1xuXG4gICAgICAgICAgICBjb25zdCBkID0gTWF0aC5mbG9vcihkaWZmZXJlbmNlLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgc2V0RGF5cyhkKTtcblxuICAgICAgICAgICAgY29uc3QgaCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgKGRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldEhvdXJzKGgpXG5cbiAgICAgICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgIChkaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgc2V0TWludXRlcyhtKVxuXG4gICAgICAgICAgICBjb25zdCBzID0gTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAlICgxMDAwICogNjApKSAvICgxMDAwKSlcbiAgICAgICAgICAgIHNldFNlY29uZHMocylcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgcmV0dXJuKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfSwgW10pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmZsb3ctaGlkZGVuIGgtWzEwMHZoXSB3LVsxMDAlXSBiZy1ibGFjayB0ZXh0LWxnIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWyNmY2U2ZTddIHRleHQtY2VudGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNSc+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWUteW91Jz5zZWUgeW91IHNvb24hPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgdGV4dC14bCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZXItY29udGFpbmVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRlciBqdXN0aWZ5LWNlbnRlclwiPntkYXlzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+ZGF5czwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGVyLWNvbnRhaW5lciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZXIganVzdGlmeS1jZW50ZXJcIj57aG91cnN9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHNcIj5ob3Vyczwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZXIganVzdGlmeS1jZW50ZXJcIj57bWludXRlc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14c1wiPm1pbnM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRlci1jb250YWluZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGVyIGp1c3RpZnktY2VudGVyXCI+e3NlY29uZHN9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHNcIj5zZWNzPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvdW50ZG93biIsImRheXMiLCJzZXREYXlzIiwiaG91cnMiLCJzZXRIb3VycyIsIm1pbnV0ZXMiLCJzZXRNaW51dGVzIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJ0YXJnZXQiLCJEYXRlIiwiZ2V0VGltZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaWZmZXJlbmNlIiwiZCIsIk1hdGgiLCJmbG9vciIsImgiLCJtIiwicyIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/countdownpage.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/countdownpage.tsx"));
module.exports = __webpack_exports__;

})();