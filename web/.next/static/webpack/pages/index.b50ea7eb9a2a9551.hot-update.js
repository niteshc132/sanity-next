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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSG = true;\nfunction Index(param) {\n    var posts = param.posts;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), searchValue = ref[0], setSearchValue = ref[1];\n    var filteredBlogPosts = posts.filter(function(post) {\n        return post.title.toLowerCase().includes(searchValue.toLowerCase());\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-xl mx-auto text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold underline\",\n                children: \"Welcome to a blog!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                \"aria-label\": \"Search articles\",\n                type: \"text\",\n                onChange: function(e) {\n                    return setSearchValue(e.target.value);\n                },\n                placeholder: \"Search articles\",\n                className: \"block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            posts.length > 0 && posts.map(function(param) {\n                var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt;\n                return slug && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/post/[slug]\",\n                            as: \"/post/\".concat(slug.current),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 19\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, _this),\n                        \" \",\n                        \"(\",\n                        new Date(publishedAt).toDateString(),\n                        \")\"\n                    ]\n                }, _id, true, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 15\n                }, _this);\n            }),\n            !searchValue && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white\",\n                        children: \"Most Popular\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    filteredBlogPosts.map(function(post) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/post/[slug]\",\n                            //slug={post.slug}\n                            title: post.title,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, _this)\n                        }, post.title, false, {\n                            fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDYzs7QUFLNUIsU0FBU0UsS0FBSyxDQUFDLEtBRW1CLEVBQUU7UUFGckIsS0FDdkIsR0FEdUIsS0FFbUIsQ0FEL0NDLEtBQUs7OztJQUVMLElBQXNDRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNDRyxXQUFXLEdBQW9CSCxHQUFZLEdBQWhDLEVBQUVJLGNBQWMsR0FBSUosR0FBWSxHQUFoQjtJQUNsQyxJQUFNSyxpQkFBaUIsR0FBR0gsS0FBSyxDQUFDSSxNQUFNLENBQUMsU0FBQ0MsSUFBSTtlQUMxQ0EsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsRUFBRSxDQUFDQyxRQUFRLENBQUNQLFdBQVcsQ0FBQ00sV0FBVyxFQUFFLENBQUM7S0FBQSxDQUM3RDtJQUVELHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBQyw2QkFBNkI7OzBCQUMxQyw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLDhCQUE4QjswQkFBQyxvQkFBa0I7Ozs7O29CQUFLOzBCQUVwRSw4REFBQ0UsT0FBSztnQkFDSkMsWUFBVSxFQUFDLGlCQUFpQjtnQkFDNUJDLElBQUksRUFBQyxNQUFNO2dCQUNYQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzsyQkFBS2QsY0FBYyxDQUFDYyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO2lCQUFBO2dCQUMvQ0MsV0FBVyxFQUFDLGlCQUFpQjtnQkFDN0JULFNBQVMsRUFBQyxvTEFBb0w7Ozs7O29CQUM5TDtZQUVEVixLQUFLLENBQUNvQixNQUFNLEdBQUcsQ0FBQyxJQUNmcEIsS0FBSyxDQUFDcUIsR0FBRyxDQUNQO29CQUFHQyxHQUFHLFNBQUhBLEdBQUcsaUJBQUVoQixLQUFLLEVBQUxBLEtBQUssdUJBQUcsRUFBRSx5QkFBRWlCLElBQUksRUFBSkEsSUFBSSxzQkFBRyxFQUFFLCtCQUFFQyxXQUFXLEVBQVhBLFdBQVcsNkJBQUcsRUFBRTt1QkFDN0NELElBQUksa0JBQ0YsOERBQUNFLElBQUU7O3NDQUNELDhEQUFDNUIsa0RBQUk7NEJBQUM2QixJQUFJLEVBQUMsY0FBYzs0QkFBQ0MsRUFBRSxFQUFFLFFBQU8sQ0FBZSxPQUFiSixJQUFJLENBQUNLLE9BQU8sQ0FBRTtzQ0FDbkQsNEVBQUNDLEdBQUM7MENBQUV2QixLQUFLOzs7OztxQ0FBSzs7Ozs7aUNBQ1Q7d0JBQUMsR0FBRzt3QkFBQyxHQUNYO3dCQUFDLElBQUl3QixJQUFJLENBQUNOLFdBQVcsQ0FBQyxDQUFDTyxZQUFZLEVBQUU7d0JBQUMsR0FDekM7O21CQUxTVCxHQUFHOzs7O3lCQUtQO2FBQ04sQ0FDSjtZQUVGLENBQUNyQixXQUFXLGtCQUNYOztrQ0FDRSw4REFBQytCLElBQUU7d0JBQUN0QixTQUFTLEVBQUMsb0ZBQW9GO2tDQUFDLGNBRW5HOzs7Ozs0QkFBSztvQkFDSlAsaUJBQWlCLENBQUNrQixHQUFHLENBQUMsU0FBQ2hCLElBQUk7NkNBQzFCLDhEQUFDUixrREFBSTs0QkFDSDZCLElBQUksRUFBQyxjQUFjOzRCQUVuQixrQkFBa0I7NEJBQ2xCcEIsS0FBSyxFQUFFRCxJQUFJLENBQUNDLEtBQUs7c0NBRWpCLDRFQUFDdUIsR0FBQzswQ0FBRXhCLElBQUksQ0FBQ0MsS0FBSzs7Ozs7cUNBQUs7MkJBSmRELElBQUksQ0FBQ0MsS0FBSzs7OztpQ0FLVjtxQkFDUixDQUFDOzs0QkFDRDs7Ozs7O1lBRUQsQ0FDTjtBQUNKLENBQUM7R0FwRHVCUCxLQUFLO0FBQUxBLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBTdXNwZW5zZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XHJcbmltcG9ydCB7IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHtcclxuICBwb3N0cyxcclxufTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPikge1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZmlsdGVyZWRCbG9nUG9zdHMgPSBwb3N0cy5maWx0ZXIoKHBvc3QpID0+XHJcbiAgICBwb3N0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy14bCBteC1hdXRvIHRleHQtd2hpdGVcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB1bmRlcmxpbmVcIj5XZWxjb21lIHRvIGEgYmxvZyE8L2gxPlxyXG5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaCBhcnRpY2xlc1wiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGFydGljbGVzXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHgtNCBweS0yIHRleHQtZ3JheS05MDAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLW1kIGRhcms6Ym9yZGVyLWdyYXktOTAwIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktMTAwXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIHtwb3N0cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgcG9zdHMubWFwKFxyXG4gICAgICAgICAgKHsgX2lkLCB0aXRsZSA9IFwiXCIsIHNsdWcgPSBcIlwiLCBwdWJsaXNoZWRBdCA9IFwiXCIgfSkgPT5cclxuICAgICAgICAgICAgc2x1ZyAmJiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17X2lkfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICh7bmV3IERhdGUocHVibGlzaGVkQXQpLnRvRGF0ZVN0cmluZygpfSlcclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgIHshc2VhcmNoVmFsdWUgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtOCBtYi00IHRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWJsYWNrIG1kOnRleHQtNHhsIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICBNb3N0IFBvcHVsYXJcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICB7ZmlsdGVyZWRCbG9nUG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9wb3N0L1tzbHVnXVwiXHJcbiAgICAgICAgICAgICAga2V5PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIC8vc2x1Zz17cG9zdC5zbHVnfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxyXG4gICAgICAqW190eXBlID09IFwicG9zdFwiICYmIHB1Ymxpc2hlZEF0IDwgbm93KCldIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYylcclxuICAgIGApO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0cyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiSW5kZXgiLCJwb3N0cyIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJmaWx0ZXJlZEJsb2dQb3N0cyIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwiYXJpYS1sYWJlbCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwibGVuZ3RoIiwibWFwIiwiX2lkIiwic2x1ZyIsInB1Ymxpc2hlZEF0IiwibGkiLCJocmVmIiwiYXMiLCJjdXJyZW50IiwiYSIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});