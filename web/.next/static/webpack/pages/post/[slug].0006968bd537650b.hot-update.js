"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n// [slug].js\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '*[_type == \"post\" && slug.current == $slug][0]{\\n  title,\\n  \"name\": author->name,\\n  \"categories\": categories[]->title,\\n  \"authorImage\": author->image,\\n  body\\n}'\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default()(_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).image(source);\n}\nvar ptComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(param) {\n    var post = param.post;\n    // console.log(post);\n    var _title = post.title, title = _title === void 0 ? \"Missing title\" : _title, _name = post.name, name = _name === void 0 ? \"Missing name\" : _name, categories = post.categories, authorImage = post.authorImage;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-Black\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map(function(category) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, _this),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(80).url(),\n                    alt: \"\".concat(name, \"'s picture\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this);\n};\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7OztBQUF3QjtBQUN3QjtBQUNHO0FBQ2pCO0FBQ1U7QUFRNUMsU0FBU0ssTUFBTSxDQUFDQyxNQUFNLEVBQUU7SUFDdEIsT0FBT0wsd0RBQWUsQ0FBQ0UsK0NBQU0sQ0FBQyxDQUFDSSxLQUFLLENBQUNELE1BQU0sQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxJQUFNRSxZQUFZLEdBQUc7SUFDbkJDLEtBQUssRUFBRTtRQUNMRixLQUFLLEVBQUUsZ0JBQWU7Z0JBQVpHLEtBQUssU0FBTEEsS0FBSztnQkFDUkEsR0FBWTtZQUFqQixJQUFJLENBQUNBLENBQUFBLEtBQUssYUFBTEEsS0FBSyxXQUFPLEdBQVpBLEtBQUFBLENBQVksR0FBWkEsQ0FBQUEsR0FBWSxHQUFaQSxLQUFLLENBQUVDLEtBQUssY0FBWkQsR0FBWSxjQUFaQSxLQUFBQSxDQUFZLEdBQVpBLEdBQVksQ0FBRUUsSUFBSSxDQUFOLEVBQVE7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUNELHFCQUNFLDhEQUFDQyxLQUFHO2dCQUNGQyxHQUFHLEVBQUVKLEtBQUssQ0FBQ0ksR0FBRyxJQUFJLEdBQUc7Z0JBQ3JCQyxPQUFPLEVBQUMsTUFBTTtnQkFDZEMsR0FBRyxFQUFFWCxNQUFNLENBQUNLLEtBQUssQ0FBQyxDQUFDTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7OztxQkFDbkUsQ0FDRjtRQUNKLENBQUM7S0FDRjtDQUNGO0FBRUQsSUFBTUMsSUFBSSxHQUFHLGdCQUFjO1FBQVhDLElBQUksU0FBSkEsSUFBSTtJQUNsQixxQkFBcUI7SUFFckIsYUFNSUEsSUFBSSxDQUxOQyxLQUFLLEVBQUxBLEtBQUssdUJBQUcsZUFBZSxtQkFLckJELElBQUksQ0FKTkUsSUFBSSxFQUFKQSxJQUFJLHNCQUFHLGNBQWMsVUFDckJDLFVBQVUsR0FHUkgsSUFBSSxDQUhORyxVQUFVLEVBQ1ZDLFdBQVcsR0FFVEosSUFBSSxDQUZOSSxXQUFXO0lBSWIscUJBQ0UsOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFDLHlFQUF5RTs7MEJBQzFGLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsK0VBQStFOzBCQUMxRkwsS0FBSzs7Ozs7cUJBQ0g7MEJBQ0wsOERBQUNPLE1BQUk7O29CQUFDLEtBQUc7b0JBQUNOLElBQUk7Ozs7OztxQkFBUTtZQUNyQkMsVUFBVSxrQkFDVCw4REFBQ00sSUFBRTs7b0JBQUMsV0FFRjtvQkFBQ04sVUFBVSxDQUFDTyxHQUFHLENBQUMsU0FBQ0MsUUFBUTs2Q0FDdkIsOERBQUNDLElBQUU7c0NBQWlCRCxRQUFROzJCQUFuQkEsUUFBUTs7OztpQ0FBaUI7cUJBQ25DLENBQUM7Ozs7OztxQkFDQztZQUVOUCxXQUFXLGtCQUNWLDhEQUFDUyxLQUFHOzBCQUNGLDRFQUFDdEIsS0FBRztvQkFDRkcsR0FBRyxFQUFFWCxNQUFNLENBQUNxQixXQUFXLENBQUMsQ0FBQ1QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDbUIsR0FBRyxFQUFFO29CQUN4Q3RCLEdBQUcsRUFBRSxFQUFDLENBQU8sTUFBVSxDQUFmVSxJQUFJLEVBQUMsWUFBVSxDQUFDOzs7Ozt5QkFDeEI7Ozs7O3FCQUNFOzs7Ozs7YUFLQSxDQUNWO0FBQ0osQ0FBQztBQXRDS0gsS0FBQUEsSUFBSTtBQXdDVixJQUFNZ0IsS0FBSyxHQUFHckMsMkNBQUksbUJBTWhCOztBQXNFRiwrREFBZXFCLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFtzbHVnXS5qc1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcclxuaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZVwiO1xyXG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwibmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZVwiO1xyXG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XHJcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gXCJyZWh5cGUtc2x1Z1wiO1xyXG5pbXBvcnQgcmVoeXBlQ29kZVRpdGxlcyBmcm9tIFwicmVoeXBlLWNvZGUtdGl0bGVzXCI7XHJcbmltcG9ydCByZWh5cGVBdXRvbGlua0hlYWRpbmdzIGZyb20gXCJyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3NcIjtcclxuaW1wb3J0IHJlaHlwZVByaXNtIGZyb20gXCJyZWh5cGUtcHJpc20tcGx1c1wiO1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5jb25zdCBwdENvbXBvbmVudHMgPSB7XHJcbiAgdHlwZXM6IHtcclxuICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgIGlmICghdmFsdWU/LmFzc2V0Py5fcmVmKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCBcIiBcIn1cclxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgIHNyYz17dXJsRm9yKHZhbHVlKS53aWR0aCgzMjApLmhlaWdodCgyNDApLmZpdChcIm1heFwiKS5hdXRvKFwiZm9ybWF0XCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2cocG9zdCk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsXHJcbiAgICBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIixcclxuICAgIGNhdGVnb3JpZXMsXHJcbiAgICBhdXRob3JJbWFnZSxcclxuICAgIC8vIGJvZHkgPSBbXSxcclxuICB9ID0gcG9zdDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1heC13LTJ4bCBteC1hdXRvIG1iLTE2XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IHRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWJsYWNrIG1kOnRleHQtNXhsIGRhcms6dGV4dC1CbGFja1wiPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9oMT5cclxuICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxyXG4gICAgICB7Y2F0ZWdvcmllcyAmJiAoXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgUG9zdGVkIGluXHJcbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICl9XHJcbiAgICAgIHthdXRob3JJbWFnZSAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDgwKS51cmwoKX1cclxuICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgey8qIDxNRFhSZW1vdGUgey4uLnBvc3QuY29udGVudH0gLz4gKi99XHJcblxyXG4gICAgICB7LyogPFBvcnRhYmxlVGV4dCB2YWx1ZT17Ym9keX0gY29tcG9uZW50cz17cHRDb21wb25lbnRzfSAvPiAqL31cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcclxuICB0aXRsZSxcclxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxyXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxyXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcclxuICBib2R5XHJcbn1gO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1ZykgPT4gKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSksXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBwb3N0RmllbGRzID0gYFxyXG4gIF9pZCxcclxuICB0aXRsZSxcclxuICBkYXRlLFxyXG4gIGV4Y2VycHQsXHJcbiAgY292ZXJJbWFnZSxcclxuICBib2R5LFxyXG4gIFwic2x1Z1wiOiBzbHVnLmN1cnJlbnQsXHJcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2VcclxuYDtcclxuXHJcbmNvbnN0IHBvc3RRdWVyeSA9IGBcclxue1xyXG4gIFwicG9zdFwiOiAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z10gfCBvcmRlcihfdXBkYXRlZEF0IGRlc2MpIFswXSB7XHJcbiAgICBjb250ZW50LFxyXG4gICAgJHtwb3N0RmllbGRzfVxyXG4gIH1cclxufWA7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXHJcbiAgY29uc3QgeyBzbHVnID0gXCIgXCIgfSA9IGNvbnRleHQucGFyYW1zO1xyXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocG9zdFF1ZXJ5LCB7IHNsdWcgfSk7XHJcbiAgY29uc3Qgc291cmNlID0gXCJTb21lICoqbWR4KiogdGV4dCwgd2l0aCBhIGNvbXBvbmVudFwiO1xyXG5cclxuICBjb25zb2xlLmxvZyhwb3N0KTtcclxuXHJcbiAgY29uc3QgaHRtbCA9IGF3YWl0IHNlcmlhbGl6ZShwb3N0LmNvbnRlbnQsIHtcclxuICAgIG1keE9wdGlvbnM6IHtcclxuICAgICAgcmVtYXJrUGx1Z2luczogW3JlbWFya0dmbV0sXHJcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFtcclxuICAgICAgICByZWh5cGVTbHVnLFxyXG4gICAgICAgIHJlaHlwZUNvZGVUaXRsZXMsXHJcbiAgICAgICAgcmVoeXBlUHJpc20sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogW1wiYW5jaG9yXCJdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICBdLFxyXG4gICAgICBmb3JtYXQ6IFwibWR4XCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhodG1sKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIC4uLnBvc3QsXHJcbiAgICAgIGNvbnRlbnQ6IGh0bWwsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbImdyb3EiLCJpbWFnZVVybEJ1aWxkZXIiLCJQb3J0YWJsZVRleHQiLCJjbGllbnQiLCJNRFhSZW1vdGUiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsInB0Q29tcG9uZW50cyIsInR5cGVzIiwidmFsdWUiLCJhc3NldCIsIl9yZWYiLCJpbWciLCJhbHQiLCJsb2FkaW5nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJmaXQiLCJhdXRvIiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYXV0aG9ySW1hZ2UiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwidWwiLCJtYXAiLCJjYXRlZ29yeSIsImxpIiwiZGl2IiwidXJsIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n"));

/***/ })

});