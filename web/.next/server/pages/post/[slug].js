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
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"0c1udr0v\",\n    dataset: \"production\",\n    useCdn: true\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsWUFBWTtBQUM4QjtBQUUxQyxpRUFBZUEscURBQVksQ0FBQztJQUMxQkMsU0FBUyxFQUFFLFVBQVU7SUFDckJDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxNQUFNLEVBQUUsSUFBSTtDQUNiLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL2NsaWVudC5qcz85NzE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNsaWVudC5qc1xyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCJAc2FuaXR5L2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcclxuICBwcm9qZWN0SWQ6IFwiMGMxdWRyMHZcIiwgLy8geW91IGNhbiBmaW5kIHRoaXMgaW4gc2FuaXR5Lmpzb25cclxuICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIiwgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxyXG4gIHVzZUNkbjogdHJ1ZSwgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxyXG59KTtcclxuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-mdx-remote */ \"next-mdx-remote\");\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-mdx-remote/serialize */ \"next-mdx-remote/serialize\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! remark-gfm */ \"remark-gfm\");\n/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rehype-slug */ \"rehype-slug\");\n/* harmony import */ var rehype_code_titles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rehype-code-titles */ \"rehype-code-titles\");\n/* harmony import */ var rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rehype-autolink-headings */ \"rehype-autolink-headings\");\n/* harmony import */ var rehype_prism_plus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rehype-prism-plus */ \"rehype-prism-plus\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_6__, remark_gfm__WEBPACK_IMPORTED_MODULE_7__, rehype_slug__WEBPACK_IMPORTED_MODULE_8__, rehype_code_titles__WEBPACK_IMPORTED_MODULE_9__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_11__]);\n([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_6__, remark_gfm__WEBPACK_IMPORTED_MODULE_7__, rehype_slug__WEBPACK_IMPORTED_MODULE_8__, rehype_code_titles__WEBPACK_IMPORTED_MODULE_9__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// [slug].js\n\n\n\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            if (!value?.asset?._ref) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined);\n        }\n    }\n};\nconst Post = ({ title =\"Missing title\" , name =\"Missing name\" , categories , authorImage , content ,  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-Black\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(80).url(),\n                    alt: `${name}'s picture`\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"prose\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__.MDXRemote, {\n                    ...content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\r\n  title,\r\n  \"name\": author->name,\r\n  \"categories\": categories[]->title,\r\n  \"authorImage\": author->image,\r\n  body\r\n}`;\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nconst postFields = `\r\n  _id,\r\n  title,\r\n  date,\r\n  excerpt,\r\n  coverImage,\r\n  body,\r\n  \"slug\": slug.current,\r\n  \"name\": author->name,\r\n  \"categories\": categories[]->title,\r\n  \"authorImage\": author->image\r\n`;\nconst postQuery = `\r\n{\r\n  \"post\": *[_type == \"post\" && slug.current == $slug] | order(_updatedAt desc) [0] {\r\n    content,\r\n    ${postFields}\r\n  }\r\n}`;\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\" \"  } = context.params;\n    const { post  } = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(postQuery, {\n        slug\n    });\n    const source = \"Some **mdx** text, with a component\";\n    const html = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_6__.serialize)(post.body, {\n        mdxOptions: {\n            remarkPlugins: [\n                remark_gfm__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n            ],\n            rehypePlugins: [\n                rehype_slug__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                rehype_code_titles__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                rehype_prism_plus__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n                [\n                    rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                    {\n                        properties: {\n                            className: [\n                                \"anchor\"\n                            ]\n                        }\n                    }, \n                ], \n            ],\n            format: \"mdx\"\n        }\n    });\n    return {\n        props: {\n            ...post,\n            content: html,\n            test: \"123\"\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tCQUdHO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRHFEOztLQUVILENBQUM7SUFFRixPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMLEdBQUdSLElBQUk7WUFDUHRCLElBQUFBLGtEQUFhO1lBQ2IrQjtTQUNEO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFDRCxlQUFlcEMsQ0FBQUEsMERBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFtzbHVnXS5qc1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcclxuaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZVwiO1xyXG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwibmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZVwiO1xyXG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XHJcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gXCJyZWh5cGUtc2x1Z1wiO1xyXG5pbXBvcnQgcmVoeXBlQ29kZVRpdGxlcyBmcm9tIFwicmVoeXBlLWNvZGUtdGl0bGVzXCI7XHJcbmltcG9ydCByZWh5cGVBdXRvbGlua0hlYWRpbmdzIGZyb20gXCJyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3NcIjtcclxuaW1wb3J0IHJlaHlwZVByaXNtIGZyb20gXCJyZWh5cGUtcHJpc20tcGx1c1wiO1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5jb25zdCBwdENvbXBvbmVudHMgPSB7XHJcbiAgdHlwZXM6IHtcclxuICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgIGlmICghdmFsdWU/LmFzc2V0Py5fcmVmKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCBcIiBcIn1cclxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgIHNyYz17dXJsRm9yKHZhbHVlKS53aWR0aCgzMjApLmhlaWdodCgyNDApLmZpdChcIm1heFwiKS5hdXRvKFwiZm9ybWF0XCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBQb3N0ID0gKHtcclxuICB0aXRsZSA9IFwiTWlzc2luZyB0aXRsZVwiLFxyXG4gIG5hbWUgPSBcIk1pc3NpbmcgbmFtZVwiLFxyXG4gIGNhdGVnb3JpZXMsXHJcbiAgYXV0aG9ySW1hZ2UsXHJcbiAgY29udGVudCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHctZnVsbCBtYXgtdy0yeGwgbXgtYXV0byBtYi0xNlwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ibGFjayBtZDp0ZXh0LTV4bCBkYXJrOnRleHQtQmxhY2tcIj5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxzcGFuPkJ5IHtuYW1lfTwvc3Bhbj5cclxuICAgICAge2NhdGVnb3JpZXMgJiYgKFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIFBvc3RlZCBpblxyXG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApfVxyXG4gICAgICB7YXV0aG9ySW1hZ2UgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKS53aWR0aCg4MCkudXJsKCl9XHJcbiAgICAgICAgICAgIGFsdD17YCR7bmFtZX0ncyBwaWN0dXJlYH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cclxuICAgICAgICA8TURYUmVtb3RlIHsuLi5jb250ZW50fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiA8UG9ydGFibGVUZXh0IHZhbHVlPXtib2R5fSBjb21wb25lbnRzPXtwdENvbXBvbmVudHN9IC8+ICovfVxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gIGJvZHlcclxufWA7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHBvc3RGaWVsZHMgPSBgXHJcbiAgX2lkLFxyXG4gIHRpdGxlLFxyXG4gIGRhdGUsXHJcbiAgZXhjZXJwdCxcclxuICBjb3ZlckltYWdlLFxyXG4gIGJvZHksXHJcbiAgXCJzbHVnXCI6IHNsdWcuY3VycmVudCxcclxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxyXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxyXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZVxyXG5gO1xyXG5cclxuY29uc3QgcG9zdFF1ZXJ5ID0gYFxyXG57XHJcbiAgXCJwb3N0XCI6ICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXSB8IG9yZGVyKF91cGRhdGVkQXQgZGVzYykgWzBdIHtcclxuICAgIGNvbnRlbnQsXHJcbiAgICAke3Bvc3RGaWVsZHN9XHJcbiAgfVxyXG59YDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICBjb25zdCB7IHNsdWcgPSBcIiBcIiB9ID0gY29udGV4dC5wYXJhbXM7XHJcbiAgY29uc3QgeyBwb3N0IH0gPSBhd2FpdCBjbGllbnQuZmV0Y2gocG9zdFF1ZXJ5LCB7IHNsdWcgfSk7XHJcbiAgY29uc3Qgc291cmNlID0gXCJTb21lICoqbWR4KiogdGV4dCwgd2l0aCBhIGNvbXBvbmVudFwiO1xyXG5cclxuICBjb25zdCBodG1sID0gYXdhaXQgc2VyaWFsaXplKHBvc3QuYm9keSwge1xyXG4gICAgbWR4T3B0aW9uczoge1xyXG4gICAgICByZW1hcmtQbHVnaW5zOiBbcmVtYXJrR2ZtXSxcclxuICAgICAgcmVoeXBlUGx1Z2luczogW1xyXG4gICAgICAgIHJlaHlwZVNsdWcsXHJcbiAgICAgICAgcmVoeXBlQ29kZVRpdGxlcyxcclxuICAgICAgICByZWh5cGVQcmlzbSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICByZWh5cGVBdXRvbGlua0hlYWRpbmdzLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBbXCJhbmNob3JcIl0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGZvcm1hdDogXCJtZHhcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAuLi5wb3N0LFxyXG4gICAgICBjb250ZW50OiBodG1sLFxyXG4gICAgICB0ZXN0OiBcIjEyM1wiLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJncm9xIiwiaW1hZ2VVcmxCdWlsZGVyIiwiUG9ydGFibGVUZXh0IiwiY2xpZW50IiwiTURYUmVtb3RlIiwic2VyaWFsaXplIiwicmVtYXJrR2ZtIiwicmVoeXBlU2x1ZyIsInJlaHlwZUNvZGVUaXRsZXMiLCJyZWh5cGVBdXRvbGlua0hlYWRpbmdzIiwicmVoeXBlUHJpc20iLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsInB0Q29tcG9uZW50cyIsInR5cGVzIiwidmFsdWUiLCJhc3NldCIsIl9yZWYiLCJpbWciLCJhbHQiLCJsb2FkaW5nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJmaXQiLCJhdXRvIiwiUG9zdCIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJhdXRob3JJbWFnZSIsImNvbnRlbnQiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwidWwiLCJtYXAiLCJjYXRlZ29yeSIsImxpIiwiZGl2IiwidXJsIiwicXVlcnkiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJzbHVnIiwicGFyYW1zIiwiZmFsbGJhY2siLCJwb3N0RmllbGRzIiwicG9zdFF1ZXJ5IiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicG9zdCIsImh0bWwiLCJib2R5IiwibWR4T3B0aW9ucyIsInJlbWFya1BsdWdpbnMiLCJyZWh5cGVQbHVnaW5zIiwicHJvcGVydGllcyIsImZvcm1hdCIsInByb3BzIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@portabletext/react":
/*!**************************************!*\
  !*** external "@portabletext/react" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@portabletext/react");;

/***/ }),

/***/ "next-mdx-remote":
/*!**********************************!*\
  !*** external "next-mdx-remote" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ "next-mdx-remote/serialize":
/*!********************************************!*\
  !*** external "next-mdx-remote/serialize" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ "rehype-autolink-headings":
/*!*******************************************!*\
  !*** external "rehype-autolink-headings" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ "rehype-code-titles":
/*!*************************************!*\
  !*** external "rehype-code-titles" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("rehype-code-titles");;

/***/ }),

/***/ "rehype-prism-plus":
/*!************************************!*\
  !*** external "rehype-prism-plus" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("rehype-prism-plus");;

/***/ }),

/***/ "rehype-slug":
/*!******************************!*\
  !*** external "rehype-slug" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ "remark-gfm":
/*!*****************************!*\
  !*** external "remark-gfm" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();