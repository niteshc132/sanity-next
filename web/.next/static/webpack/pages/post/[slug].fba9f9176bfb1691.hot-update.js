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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n// [slug].js\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '*[_type == \"post\" && slug.current == $slug][0]{\\n  title,\\n  \"name\": author->name,\\n  \"categories\": categories[]->title,\\n  \"authorImage\": author->image,\\n  body\\n}'\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default()(_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).image(source);\n}\nvar ptComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(props) {\n    console.log(props);\n    var post = props;\n    console.log(post);\n    var _title = post.title, title = _title === void 0 ? \"Missing title\" : _title, _name = post.name, name = _name === void 0 ? \"Missing name\" : _name, categories = post.categories, authorImage = post.authorImage, content = post.content;\n    // console.log(content);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-Black\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map(function(category) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, _this),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(80).url(),\n                    alt: \"\".concat(name, \"'s picture\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gXCJAcG9ydGFibGV0ZXh0L3JlYWN0XCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBNRFhSZW1vdGUgfSBmcm9tIFwibmV4dC1tZHgtcmVtb3RlXCI7XHJcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gXCJuZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplXCI7XHJcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcclxuaW1wb3J0IHJlaHlwZVNsdWcgZnJvbSBcInJlaHlwZS1zbHVnXCI7XHJcbmltcG9ydCByZWh5cGVDb2RlVGl0bGVzIGZyb20gXCJyZWh5cGUtY29kZS10aXRsZXNcIjtcclxuaW1wb3J0IHJlaHlwZUF1dG9saW5rSGVhZGluZ3MgZnJvbSBcInJlaHlwZS1hdXRvbGluay1oZWFkaW5nc1wiO1xyXG5pbXBvcnQgcmVoeXBlUHJpc20gZnJvbSBcInJlaHlwZS1wcmlzbS1wbHVzXCI7XHJcblxyXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XHJcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuXHJcbmNvbnN0IHB0Q29tcG9uZW50cyA9IHtcclxuICB0eXBlczoge1xyXG4gICAgaW1hZ2U6ICh7IHZhbHVlIH0pID0+IHtcclxuICAgICAgaWYgKCF2YWx1ZT8uYXNzZXQ/Ll9yZWYpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGFsdD17dmFsdWUuYWx0IHx8IFwiIFwifVxyXG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgICAgc3JjPXt1cmxGb3IodmFsdWUpLndpZHRoKDMyMCkuaGVpZ2h0KDI0MCkuZml0KFwibWF4XCIpLmF1dG8oXCJmb3JtYXRcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgY29uc3QgcG9zdCA9IHByb3BzO1xyXG4gIGNvbnNvbGUubG9nKHBvc3QpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSA9IFwiTWlzc2luZyB0aXRsZVwiLFxyXG4gICAgbmFtZSA9IFwiTWlzc2luZyBuYW1lXCIsXHJcbiAgICBjYXRlZ29yaWVzLFxyXG4gICAgYXV0aG9ySW1hZ2UsXHJcbiAgICBjb250ZW50LFxyXG4gICAgLy8gYm9keSA9IFtdLFxyXG4gIH0gPSBwb3N0O1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhjb250ZW50KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1heC13LTJ4bCBteC1hdXRvIG1iLTE2XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IHRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWJsYWNrIG1kOnRleHQtNXhsIGRhcms6dGV4dC1CbGFja1wiPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9oMT5cclxuICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxyXG4gICAgICB7Y2F0ZWdvcmllcyAmJiAoXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgUG9zdGVkIGluXHJcbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICl9XHJcbiAgICAgIHthdXRob3JJbWFnZSAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDgwKS51cmwoKX1cclxuICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgey8qIDxNRFhSZW1vdGUgey4uLmNvbnRlbnR9IC8+ICovfVxyXG5cclxuICAgICAgey8qIDxQb3J0YWJsZVRleHQgdmFsdWU9e2JvZHl9IGNvbXBvbmVudHM9e3B0Q29tcG9uZW50c30gLz4gKi99XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgdGl0bGUsXHJcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgYm9keVxyXG59YDtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgY2xpZW50LmZldGNoKFxyXG4gICAgZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7IHBhcmFtczogeyBzbHVnIH0gfSkpLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgcG9zdEZpZWxkcyA9IGBcclxuICBfaWQsXHJcbiAgdGl0bGUsXHJcbiAgZGF0ZSxcclxuICBleGNlcnB0LFxyXG4gIGNvdmVySW1hZ2UsXHJcbiAgYm9keSxcclxuICBcInNsdWdcIjogc2x1Zy5jdXJyZW50LFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlXHJcbmA7XHJcblxyXG5jb25zdCBwb3N0UXVlcnkgPSBgXHJcbntcclxuICBcInBvc3RcIjogKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddIHwgb3JkZXIoX3VwZGF0ZWRBdCBkZXNjKSBbMF0ge1xyXG4gICAgY29udGVudCxcclxuICAgICR7cG9zdEZpZWxkc31cclxuICB9XHJcbn1gO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxyXG4gIGNvbnN0IHsgc2x1ZyA9IFwiIFwiIH0gPSBjb250ZXh0LnBhcmFtcztcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgY2xpZW50LmZldGNoKHBvc3RRdWVyeSwgeyBzbHVnIH0pO1xyXG4gIGNvbnN0IHNvdXJjZSA9IFwiU29tZSAqKm1keCoqIHRleHQsIHdpdGggYSBjb21wb25lbnRcIjtcclxuXHJcbiAgY29uc3QgaHRtbCA9IGF3YWl0IHNlcmlhbGl6ZShwb3N0LmJvZHksIHtcclxuICAgIG1keE9wdGlvbnM6IHtcclxuICAgICAgcmVtYXJrUGx1Z2luczogW3JlbWFya0dmbV0sXHJcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFtcclxuICAgICAgICByZWh5cGVTbHVnLFxyXG4gICAgICAgIHJlaHlwZUNvZGVUaXRsZXMsXHJcbiAgICAgICAgcmVoeXBlUHJpc20sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogW1wiYW5jaG9yXCJdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICBdLFxyXG4gICAgICBmb3JtYXQ6IFwibWR4XCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgLi4ucG9zdCxcclxuICAgICAgY29udGVudDogaHRtbCxcclxuICAgICAgdGVzdDogXCIxMjNcIixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwibmFtZXMiOlsiZ3JvcSIsImltYWdlVXJsQnVpbGRlciIsIlBvcnRhYmxlVGV4dCIsImNsaWVudCIsIk1EWFJlbW90ZSIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwicHRDb21wb25lbnRzIiwidHlwZXMiLCJ2YWx1ZSIsImFzc2V0IiwiX3JlZiIsImltZyIsImFsdCIsImxvYWRpbmciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImZpdCIsImF1dG8iLCJQb3N0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJhdXRob3JJbWFnZSIsImNvbnRlbnQiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwidWwiLCJtYXAiLCJjYXRlZ29yeSIsImxpIiwiZGl2IiwidXJsIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n"));

/***/ })

});