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

/***/ "./components/callout.js":
/*!*******************************!*\
  !*** ./components/callout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Callout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Callout({ children , title , description , imageId  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"0 1rem\",\n            background: \"lightblue\",\n            border: \"1px solid blue\",\n            borderRadius: \"0.5rem\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\components\\\\callout.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\components\\\\callout.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imageId\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\components\\\\callout.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\components\\\\callout.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhbGxvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxPQUFPLENBQUMsRUFBRUMsUUFBUSxHQUFFQyxLQUFLLEdBQUVDLFdBQVcsR0FBRUMsT0FBTyxHQUFFLEVBQUU7SUFDekUscUJBQ0UsOERBQUNDLEtBQUc7UUFDRkMsS0FBSyxFQUFFO1lBQ0xDLE9BQU8sRUFBRSxRQUFRO1lBQ2pCQyxVQUFVLEVBQUUsV0FBVztZQUN2QkMsTUFBTSxFQUFFLGdCQUFnQjtZQUN4QkMsWUFBWSxFQUFFLFFBQVE7U0FDdkI7OzBCQUVELDhEQUFDQyxJQUFFOzBCQUFFVCxLQUFLOzs7OztvQkFBTTswQkFDaEIsOERBQUNVLEdBQUM7MEJBQUVULFdBQVc7Ozs7O29CQUFLOzBCQUNwQiw4REFBQ1UsS0FBRztnQkFBQ0MsR0FBRyxFQUFFVixPQUFPOzs7OztvQkFBSTtZQUNwQkgsUUFBUTs7Ozs7O1lBQ0wsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9jb21wb25lbnRzL2NhbGxvdXQuanM/MTg0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxsb3V0KHsgY2hpbGRyZW4sIHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2VJZCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBwYWRkaW5nOiBcIjAgMXJlbVwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwibGlnaHRibHVlXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibHVlXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAuNXJlbVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgIDxiPntkZXNjcmlwdGlvbn08L2I+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWFnZUlkfSAvPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJDYWxsb3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VJZCIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJoMiIsImIiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/callout.js\n");

/***/ }),

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-mdx-remote */ \"next-mdx-remote\");\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-mdx-remote/serialize */ \"next-mdx-remote/serialize\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"remark-gfm\");\n/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rehype-slug */ \"rehype-slug\");\n/* harmony import */ var rehype_code_titles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rehype-code-titles */ \"rehype-code-titles\");\n/* harmony import */ var rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rehype-autolink-headings */ \"rehype-autolink-headings\");\n/* harmony import */ var rehype_prism_plus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rehype-prism-plus */ \"rehype-prism-plus\");\n/* harmony import */ var _components_callout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/callout */ \"./components/callout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_5__, remark_gfm__WEBPACK_IMPORTED_MODULE_6__, rehype_slug__WEBPACK_IMPORTED_MODULE_7__, rehype_code_titles__WEBPACK_IMPORTED_MODULE_8__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_9__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_10__]);\n([next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_5__, remark_gfm__WEBPACK_IMPORTED_MODULE_6__, rehype_slug__WEBPACK_IMPORTED_MODULE_7__, rehype_code_titles__WEBPACK_IMPORTED_MODULE_8__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_9__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// [slug].js\n\n\n\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            if (!value?.asset?._ref) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined);\n        }\n    }\n};\nconst Post = ({ title =\"Missing title\" , name =\"Missing name\" , categories , authorImage , content ,  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"text-white flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-3xl font-bold tracking-tight md:text-5xl dark:text-Black\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(80).url(),\n                    alt: `${name}'s picture`\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"prose\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__.MDXRemote, {\n                    ...content,\n                    components: {\n                        Callout: _components_callout__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\r\n  title,\r\n  \"name\": author->name,\r\n  \"categories\": categories[]->title,\r\n  \"authorImage\": author->image,\r\n  body\r\n}`;\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nconst postFields = `\r\n  _id,\r\n  title,\r\n  date,\r\n  excerpt,\r\n  coverImage,\r\n  body,\r\n  \"slug\": slug.current,\r\n  \"name\": author->name,\r\n  \"categories\": categories[]->title,\r\n  \"authorImage\": author->image\r\n`;\nconst postQuery = `\r\n{\r\n  \"post\": *[_type == \"post\" && slug.current == $slug] | order(_updatedAt desc) [0] {\r\n    content,\r\n    ${postFields}\r\n  }\r\n}`;\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\" \"  } = context.params;\n    const { post  } = await _client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch(postQuery, {\n        slug\n    });\n    const source = \"Some **mdx** text, with a component\";\n    const html = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_5__.serialize)(post.body, {\n        mdxOptions: {\n            remarkPlugins: [\n                remark_gfm__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n            ],\n            rehypePlugins: [\n                rehype_slug__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                rehype_code_titles__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                rehype_prism_plus__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                [\n                    rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                    {\n                        properties: {\n                            className: [\n                                \"anchor\"\n                            ]\n                        }\n                    }, \n                ], \n            ],\n            format: \"mdx\"\n        }\n    });\n    return {\n        props: {\n            ...post,\n            content: html,\n            test: \"123\"\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtZQUNFQzs7YUFBMEI7WUFDMUJDO2dCQUNFdEQsVUFBVTtnQkFDVkM7O2dCQUVBOztvQkFFRTs7Ozs7a0JBR0c7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNEdUQ7O0tBRUgsQ0FBQztJQUVGLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0wsR0FBR1IsSUFBSTtZQUNQdkIsSUFBQUEsa0RBQWE7WUFDYmdDO1NBQ0Q7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUNELGVBQWVyQyxDQUFBQSwwREFBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeD8zMDExIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFtzbHVnXS5qc1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcclxuaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZVwiO1xyXG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwibmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZVwiO1xyXG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XHJcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gXCJyZWh5cGUtc2x1Z1wiO1xyXG5pbXBvcnQgcmVoeXBlQ29kZVRpdGxlcyBmcm9tIFwicmVoeXBlLWNvZGUtdGl0bGVzXCI7XHJcbmltcG9ydCByZWh5cGVBdXRvbGlua0hlYWRpbmdzIGZyb20gXCJyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3NcIjtcclxuaW1wb3J0IHJlaHlwZVByaXNtIGZyb20gXCJyZWh5cGUtcHJpc20tcGx1c1wiO1xyXG5pbXBvcnQgQ2FsbG91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYWxsb3V0XCI7XHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcclxufVxyXG5cclxuY29uc3QgcHRDb21wb25lbnRzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBpbWFnZTogKHsgdmFsdWUgfSkgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgYWx0PXt2YWx1ZS5hbHQgfHwgXCIgXCJ9XHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSkud2lkdGgoMzIwKS5oZWlnaHQoMjQwKS5maXQoXCJtYXhcIikuYXV0byhcImZvcm1hdFwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgUG9zdCA9ICh7XHJcbiAgdGl0bGUgPSBcIk1pc3NpbmcgdGl0bGVcIixcclxuICBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIixcclxuICBjYXRlZ29yaWVzLFxyXG4gIGF1dGhvckltYWdlLFxyXG4gIGNvbnRlbnQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHctZnVsbCBtYXgtdy0yeGwgbXgtYXV0byBtYi0xNlwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgIG1kOnRleHQtNXhsIGRhcms6dGV4dC1CbGFja1wiPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9oMT5cclxuICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxyXG4gICAgICB7Y2F0ZWdvcmllcyAmJiAoXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgUG9zdGVkIGluXHJcbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICl9XHJcbiAgICAgIHthdXRob3JJbWFnZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDgwKS51cmwoKX1cclxuICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxyXG4gICAgICAgIDxNRFhSZW1vdGUgey4uLmNvbnRlbnR9IGNvbXBvbmVudHM9e3sgQ2FsbG91dCB9fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiA8UG9ydGFibGVUZXh0IHZhbHVlPXtjb250ZW50fSBjb21wb25lbnRzPXtwdENvbXBvbmVudHN9IC8+ICovfVxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gIGJvZHlcclxufWA7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHBvc3RGaWVsZHMgPSBgXHJcbiAgX2lkLFxyXG4gIHRpdGxlLFxyXG4gIGRhdGUsXHJcbiAgZXhjZXJwdCxcclxuICBjb3ZlckltYWdlLFxyXG4gIGJvZHksXHJcbiAgXCJzbHVnXCI6IHNsdWcuY3VycmVudCxcclxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxyXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxyXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZVxyXG5gO1xyXG5cclxuY29uc3QgcG9zdFF1ZXJ5ID0gYFxyXG57XHJcbiAgXCJwb3N0XCI6ICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXSB8IG9yZGVyKF91cGRhdGVkQXQgZGVzYykgWzBdIHtcclxuICAgIGNvbnRlbnQsXHJcbiAgICAke3Bvc3RGaWVsZHN9XHJcbiAgfVxyXG59YDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICBjb25zdCB7IHNsdWcgPSBcIiBcIiB9ID0gY29udGV4dC5wYXJhbXM7XHJcbiAgY29uc3QgeyBwb3N0IH0gPSBhd2FpdCBjbGllbnQuZmV0Y2gocG9zdFF1ZXJ5LCB7IHNsdWcgfSk7XHJcbiAgY29uc3Qgc291cmNlID0gXCJTb21lICoqbWR4KiogdGV4dCwgd2l0aCBhIGNvbXBvbmVudFwiO1xyXG5cclxuICBjb25zdCBodG1sID0gYXdhaXQgc2VyaWFsaXplKHBvc3QuYm9keSwge1xyXG4gICAgbWR4T3B0aW9uczoge1xyXG4gICAgICByZW1hcmtQbHVnaW5zOiBbcmVtYXJrR2ZtXSxcclxuICAgICAgcmVoeXBlUGx1Z2luczogW1xyXG4gICAgICAgIHJlaHlwZVNsdWcsXHJcbiAgICAgICAgcmVoeXBlQ29kZVRpdGxlcyxcclxuICAgICAgICByZWh5cGVQcmlzbSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICByZWh5cGVBdXRvbGlua0hlYWRpbmdzLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBbXCJhbmNob3JcIl0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGZvcm1hdDogXCJtZHhcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAuLi5wb3N0LFxyXG4gICAgICBjb250ZW50OiBodG1sLFxyXG4gICAgICB0ZXN0OiBcIjEyM1wiLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJncm9xIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiTURYUmVtb3RlIiwic2VyaWFsaXplIiwicmVtYXJrR2ZtIiwicmVoeXBlU2x1ZyIsInJlaHlwZUNvZGVUaXRsZXMiLCJyZWh5cGVBdXRvbGlua0hlYWRpbmdzIiwicmVoeXBlUHJpc20iLCJDYWxsb3V0IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJwdENvbXBvbmVudHMiLCJ0eXBlcyIsInZhbHVlIiwiYXNzZXQiLCJfcmVmIiwiaW1nIiwiYWx0IiwibG9hZGluZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwiYXV0byIsIlBvc3QiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYXV0aG9ySW1hZ2UiLCJjb250ZW50IiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsInVsIiwibWFwIiwiY2F0ZWdvcnkiLCJsaSIsImRpdiIsInVybCIsImNvbXBvbmVudHMiLCJxdWVyeSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmZXRjaCIsInNsdWciLCJwYXJhbXMiLCJmYWxsYmFjayIsInBvc3RGaWVsZHMiLCJwb3N0UXVlcnkiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwb3N0IiwiaHRtbCIsImJvZHkiLCJtZHhPcHRpb25zIiwicmVtYXJrUGx1Z2lucyIsInJlaHlwZVBsdWdpbnMiLCJwcm9wZXJ0aWVzIiwiZm9ybWF0IiwicHJvcHMiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].tsx"));
module.exports = __webpack_exports__;

})();