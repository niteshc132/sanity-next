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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSG = true;\nfunction Index(param) {\n    var posts = param.posts;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), searchValue = ref[0], setSearchValue = ref[1];\n    var filteredBlogPosts = posts.filter(function(post) {\n        return post.title.toLowerCase().includes(searchValue.toLowerCase());\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-xl mx-auto text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold underline\",\n                children: \"Welcome to a blog!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                \"aria-label\": \"Search articles\",\n                type: \"text\",\n                onChange: function(e) {\n                    return setSearchValue(e.target.value);\n                },\n                placeholder: \"Search articles\",\n                className: \"block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            posts.length > 0 && posts.map(function(param) {\n                var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt;\n                return slug && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/post/[slug]\",\n                            as: \"/post/\".concat(slug.current),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 19\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, _this),\n                        \" \",\n                        \"(\",\n                        new Date(publishedAt).toDateString(),\n                        \")\"\n                    ]\n                }, _id, true, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 15\n                }, _this);\n            }),\n            !searchValue && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white\",\n                    children: \"Most Popular\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDYzs7QUFLNUIsU0FBU0UsS0FBSyxDQUFDLEtBRW1CLEVBQUU7UUFGckIsS0FDdkIsR0FEdUIsS0FFbUIsQ0FEL0NDLEtBQUs7OztJQUVMLElBQXNDRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNDRyxXQUFXLEdBQW9CSCxHQUFZLEdBQWhDLEVBQUVJLGNBQWMsR0FBSUosR0FBWSxHQUFoQjtJQUNsQyxJQUFNSyxpQkFBaUIsR0FBR0gsS0FBSyxDQUFDSSxNQUFNLENBQUMsU0FBQ0MsSUFBSTtlQUMxQ0EsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsRUFBRSxDQUFDQyxRQUFRLENBQUNQLFdBQVcsQ0FBQ00sV0FBVyxFQUFFLENBQUM7S0FBQSxDQUM3RDtJQUVELHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBQyw2QkFBNkI7OzBCQUMxQyw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLDhCQUE4QjswQkFBQyxvQkFBa0I7Ozs7O29CQUFLOzBCQUVwRSw4REFBQ0UsT0FBSztnQkFDSkMsWUFBVSxFQUFDLGlCQUFpQjtnQkFDNUJDLElBQUksRUFBQyxNQUFNO2dCQUNYQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzsyQkFBS2QsY0FBYyxDQUFDYyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO2lCQUFBO2dCQUMvQ0MsV0FBVyxFQUFDLGlCQUFpQjtnQkFDN0JULFNBQVMsRUFBQyxvTEFBb0w7Ozs7O29CQUM5TDtZQUVEVixLQUFLLENBQUNvQixNQUFNLEdBQUcsQ0FBQyxJQUNmcEIsS0FBSyxDQUFDcUIsR0FBRyxDQUNQO29CQUFHQyxHQUFHLFNBQUhBLEdBQUcsaUJBQUVoQixLQUFLLEVBQUxBLEtBQUssdUJBQUcsRUFBRSx5QkFBRWlCLElBQUksRUFBSkEsSUFBSSxzQkFBRyxFQUFFLCtCQUFFQyxXQUFXLEVBQVhBLFdBQVcsNkJBQUcsRUFBRTt1QkFDN0NELElBQUksa0JBQ0YsOERBQUNFLElBQUU7O3NDQUNELDhEQUFDNUIsa0RBQUk7NEJBQUM2QixJQUFJLEVBQUMsY0FBYzs0QkFBQ0MsRUFBRSxFQUFFLFFBQU8sQ0FBZSxPQUFiSixJQUFJLENBQUNLLE9BQU8sQ0FBRTtzQ0FDbkQsNEVBQUNDLEdBQUM7MENBQUV2QixLQUFLOzs7OztxQ0FBSzs7Ozs7aUNBQ1Q7d0JBQUMsR0FBRzt3QkFBQyxHQUNYO3dCQUFDLElBQUl3QixJQUFJLENBQUNOLFdBQVcsQ0FBQyxDQUFDTyxZQUFZLEVBQUU7d0JBQUMsR0FDekM7O21CQUxTVCxHQUFHOzs7O3lCQUtQO2FBQ04sQ0FDSjtZQUVGLENBQUNyQixXQUFXLGtCQUNYOzBCQUNFLDRFQUFDK0IsSUFBRTtvQkFBQ3RCLFNBQVMsRUFBQyxvRkFBb0Y7OEJBQUMsY0FFbkc7Ozs7O3dCQUFLOzZCQUNKOzs7Ozs7WUFFRCxDQUNOO0FBQ0osQ0FBQztHQTFDdUJYLEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFN1c3BlbnNlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcclxuaW1wb3J0IHsgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoe1xyXG4gIHBvc3RzLFxyXG59OiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSB7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBmaWx0ZXJlZEJsb2dQb3N0cyA9IHBvc3RzLmZpbHRlcigocG9zdCkgPT5cclxuICAgIHBvc3QudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXhsIG14LWF1dG8gdGV4dC13aGl0ZVwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHVuZGVybGluZVwiPldlbGNvbWUgdG8gYSBibG9nITwvaDE+XHJcblxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoIGFydGljbGVzXCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYXJ0aWNsZXNcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweC00IHB5LTIgdGV4dC1ncmF5LTkwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbWQgZGFyazpib3JkZXItZ3JheS05MDAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZGFyazpiZy1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS0xMDBcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAge3Bvc3RzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICBwb3N0cy5tYXAoXHJcbiAgICAgICAgICAoeyBfaWQsIHRpdGxlID0gXCJcIiwgc2x1ZyA9IFwiXCIsIHB1Ymxpc2hlZEF0ID0gXCJcIiB9KSA9PlxyXG4gICAgICAgICAgICBzbHVnICYmIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtfaWR9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgKHtuZXcgRGF0ZShwdWJsaXNoZWRBdCkudG9EYXRlU3RyaW5nKCl9KVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApfVxyXG5cclxuICAgICAgeyFzZWFyY2hWYWx1ZSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC04IG1iLTQgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtYmxhY2sgbWQ6dGV4dC00eGwgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIE1vc3QgUG9wdWxhclxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxyXG4gICAgICAqW190eXBlID09IFwicG9zdFwiICYmIHB1Ymxpc2hlZEF0IDwgbm93KCldIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYylcclxuICAgIGApO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0cyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiSW5kZXgiLCJwb3N0cyIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJmaWx0ZXJlZEJsb2dQb3N0cyIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwiYXJpYS1sYWJlbCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwibGVuZ3RoIiwibWFwIiwiX2lkIiwic2x1ZyIsInB1Ymxpc2hlZEF0IiwibGkiLCJocmVmIiwiYXMiLCJjdXJyZW50IiwiYSIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});