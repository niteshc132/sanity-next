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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Callout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Callout({ children , title , description , imageId  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"0 1rem\",\n            background: \"lightblue\",\n            border: \"1px solid blue\",\n            borderRadius: \"0.5rem\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\components\\\\callout.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\components\\\\callout.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imageId\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\components\\\\callout.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\components\\\\callout.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhbGxvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxPQUFPLENBQUMsRUFBRUMsUUFBUSxHQUFFQyxLQUFLLEdBQUVDLFdBQVcsR0FBRUMsT0FBTyxHQUFFLEVBQUU7SUFDekUscUJBQ0UsOERBQUNDLEtBQUc7UUFDRkMsS0FBSyxFQUFFO1lBQ0xDLE9BQU8sRUFBRSxRQUFRO1lBQ2pCQyxVQUFVLEVBQUUsV0FBVztZQUN2QkMsTUFBTSxFQUFFLGdCQUFnQjtZQUN4QkMsWUFBWSxFQUFFLFFBQVE7U0FDdkI7OzBCQUVELDhEQUFDQyxJQUFFOzBCQUFFVCxLQUFLOzs7OztvQkFBTTswQkFDaEIsOERBQUNVLEdBQUM7MEJBQUVULFdBQVc7Ozs7O29CQUFLOzBCQUNwQiw4REFBQ1UsS0FBRztnQkFBQ0MsR0FBRyxFQUFFVixPQUFPOzs7OztvQkFBSTtZQUNwQkgsUUFBUTs7Ozs7O1lBQ0wsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9jb21wb25lbnRzL2NhbGxvdXQuanM/MTg0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxsb3V0KHsgY2hpbGRyZW4sIHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2VJZCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBwYWRkaW5nOiBcIjAgMXJlbVwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwibGlnaHRibHVlXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibHVlXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAuNXJlbVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgIDxiPntkZXNjcmlwdGlvbn08L2I+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWFnZUlkfSAvPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJDYWxsb3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VJZCIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJoMSIsImIiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/callout.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-mdx-remote */ \"next-mdx-remote\");\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-mdx-remote/serialize */ \"next-mdx-remote/serialize\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! remark-gfm */ \"remark-gfm\");\n/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rehype-slug */ \"rehype-slug\");\n/* harmony import */ var rehype_code_titles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rehype-code-titles */ \"rehype-code-titles\");\n/* harmony import */ var rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rehype-autolink-headings */ \"rehype-autolink-headings\");\n/* harmony import */ var rehype_prism_plus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rehype-prism-plus */ \"rehype-prism-plus\");\n/* harmony import */ var _components_callout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/callout */ \"./components/callout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_6__, remark_gfm__WEBPACK_IMPORTED_MODULE_7__, rehype_slug__WEBPACK_IMPORTED_MODULE_8__, rehype_code_titles__WEBPACK_IMPORTED_MODULE_9__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_11__]);\n([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_6__, remark_gfm__WEBPACK_IMPORTED_MODULE_7__, rehype_slug__WEBPACK_IMPORTED_MODULE_8__, rehype_code_titles__WEBPACK_IMPORTED_MODULE_9__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// [slug].js\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            if (!value?.asset?._ref) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined);\n        }\n    }\n};\nconst Post = ({ title =\"Missing title\" , name =\"Missing name\" , categories , authorImage , content ,  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"text-white flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-3xl font-bold tracking-tight md:text-5xl dark:text-Black\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(80).url(),\n                    alt: `${name}'s picture`\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"prose\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__.MDXRemote, {\n                    ...content,\n                    components: {\n                        Callout: _components_callout__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\r\n  title,\r\n  \"name\": author->name,\r\n  \"categories\": categories[]->title,\r\n  \"authorImage\": author->image,\r\n  body\r\n}`;\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nconst postFields = `\r\n  _id,\r\n  title,\r\n  date,\r\n  excerpt,\r\n  coverImage,\r\n  body,\r\n  \"slug\": slug.current,\r\n  \"name\": author->name,\r\n  \"categories\": categories[]->title,\r\n  \"authorImage\": author->image\r\n`;\nconst postQuery = `\r\n{\r\n  \"post\": *[_type == \"post\" && slug.current == $slug] | order(_updatedAt desc) [0] {\r\n    content,\r\n    ${postFields}\r\n  }\r\n}`;\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\" \"  } = context.params;\n    const { post  } = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(postQuery, {\n        slug\n    });\n    const source = \"Some **mdx** text, with a component\";\n    const html = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_6__.serialize)(post.body, {\n        mdxOptions: {\n            remarkPlugins: [\n                remark_gfm__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n            ],\n            rehypePlugins: [\n                rehype_slug__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                rehype_code_titles__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                rehype_prism_plus__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n                [\n                    rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                    {\n                        properties: {\n                            className: [\n                                \"anchor\"\n                            ]\n                        }\n                    }, \n                ], \n            ],\n            format: \"mdx\"\n        }\n    });\n    return {\n        props: {\n            ...post,\n            content: html,\n            test: \"123\"\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtRQUNFVTtZQUNFQzs7YUFBMEI7WUFDMUJDO2dCQUNFdEQsVUFBVTtnQkFDVkM7O2dCQUVBOztvQkFFRTs7Ozs7a0JBR0c7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNEdUQ7O0tBRUgsQ0FBQztJQUVGLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0wsR0FBR1IsSUFBSTtZQUNQdkIsSUFBQUEsa0RBQWE7WUFDYmdDO1NBQ0Q7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUNELGVBQWVyQyxDQUFBQSwwREFBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gXCJAcG9ydGFibGV0ZXh0L3JlYWN0XCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBNRFhSZW1vdGUgfSBmcm9tIFwibmV4dC1tZHgtcmVtb3RlXCI7XHJcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gXCJuZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplXCI7XHJcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcclxuaW1wb3J0IHJlaHlwZVNsdWcgZnJvbSBcInJlaHlwZS1zbHVnXCI7XHJcbmltcG9ydCByZWh5cGVDb2RlVGl0bGVzIGZyb20gXCJyZWh5cGUtY29kZS10aXRsZXNcIjtcclxuaW1wb3J0IHJlaHlwZUF1dG9saW5rSGVhZGluZ3MgZnJvbSBcInJlaHlwZS1hdXRvbGluay1oZWFkaW5nc1wiO1xyXG5pbXBvcnQgcmVoeXBlUHJpc20gZnJvbSBcInJlaHlwZS1wcmlzbS1wbHVzXCI7XHJcbmltcG9ydCBDYWxsb3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhbGxvdXRcIjtcclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5jb25zdCBwdENvbXBvbmVudHMgPSB7XHJcbiAgdHlwZXM6IHtcclxuICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgIGlmICghdmFsdWU/LmFzc2V0Py5fcmVmKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCBcIiBcIn1cclxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgIHNyYz17dXJsRm9yKHZhbHVlKS53aWR0aCgzMjApLmhlaWdodCgyNDApLmZpdChcIm1heFwiKS5hdXRvKFwiZm9ybWF0XCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBQb3N0ID0gKHtcclxuICB0aXRsZSA9IFwiTWlzc2luZyB0aXRsZVwiLFxyXG4gIG5hbWUgPSBcIk1pc3NpbmcgbmFtZVwiLFxyXG4gIGNhdGVnb3JpZXMsXHJcbiAgYXV0aG9ySW1hZ2UsXHJcbiAgY29udGVudCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1heC13LTJ4bCBteC1hdXRvIG1iLTE2XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IHRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCAgbWQ6dGV4dC01eGwgZGFyazp0ZXh0LUJsYWNrXCI+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8c3Bhbj5CeSB7bmFtZX08L3NwYW4+XHJcbiAgICAgIHtjYXRlZ29yaWVzICYmIChcclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICBQb3N0ZWQgaW5cclxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgKX1cclxuICAgICAge2F1dGhvckltYWdlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3VybEZvcihhdXRob3JJbWFnZSkud2lkdGgoODApLnVybCgpfVxyXG4gICAgICAgICAgICBhbHQ9e2Ake25hbWV9J3MgcGljdHVyZWB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XHJcbiAgICAgICAgPE1EWFJlbW90ZSB7Li4uY29udGVudH0gY29tcG9uZW50cz17eyBDYWxsb3V0IH19IC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIDxQb3J0YWJsZVRleHQgdmFsdWU9e2JvZHl9IGNvbXBvbmVudHM9e3B0Q29tcG9uZW50c30gLz4gKi99XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgdGl0bGUsXHJcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgYm9keVxyXG59YDtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgY2xpZW50LmZldGNoKFxyXG4gICAgZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7IHBhcmFtczogeyBzbHVnIH0gfSkpLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgcG9zdEZpZWxkcyA9IGBcclxuICBfaWQsXHJcbiAgdGl0bGUsXHJcbiAgZGF0ZSxcclxuICBleGNlcnB0LFxyXG4gIGNvdmVySW1hZ2UsXHJcbiAgYm9keSxcclxuICBcInNsdWdcIjogc2x1Zy5jdXJyZW50LFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlXHJcbmA7XHJcblxyXG5jb25zdCBwb3N0UXVlcnkgPSBgXHJcbntcclxuICBcInBvc3RcIjogKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddIHwgb3JkZXIoX3VwZGF0ZWRBdCBkZXNjKSBbMF0ge1xyXG4gICAgY29udGVudCxcclxuICAgICR7cG9zdEZpZWxkc31cclxuICB9XHJcbn1gO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxyXG4gIGNvbnN0IHsgc2x1ZyA9IFwiIFwiIH0gPSBjb250ZXh0LnBhcmFtcztcclxuICBjb25zdCB7IHBvc3QgfSA9IGF3YWl0IGNsaWVudC5mZXRjaChwb3N0UXVlcnksIHsgc2x1ZyB9KTtcclxuICBjb25zdCBzb3VyY2UgPSBcIlNvbWUgKiptZHgqKiB0ZXh0LCB3aXRoIGEgY29tcG9uZW50XCI7XHJcblxyXG4gIGNvbnN0IGh0bWwgPSBhd2FpdCBzZXJpYWxpemUocG9zdC5ib2R5LCB7XHJcbiAgICBtZHhPcHRpb25zOiB7XHJcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtHZm1dLFxyXG4gICAgICByZWh5cGVQbHVnaW5zOiBbXHJcbiAgICAgICAgcmVoeXBlU2x1ZyxcclxuICAgICAgICByZWh5cGVDb2RlVGl0bGVzLFxyXG4gICAgICAgIHJlaHlwZVByaXNtLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIHJlaHlwZUF1dG9saW5rSGVhZGluZ3MsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6IFtcImFuY2hvclwiXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgXSxcclxuICAgICAgZm9ybWF0OiBcIm1keFwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIC4uLnBvc3QsXHJcbiAgICAgIGNvbnRlbnQ6IGh0bWwsXHJcbiAgICAgIHRlc3Q6IFwiMTIzXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbImdyb3EiLCJpbWFnZVVybEJ1aWxkZXIiLCJQb3J0YWJsZVRleHQiLCJjbGllbnQiLCJNRFhSZW1vdGUiLCJzZXJpYWxpemUiLCJyZW1hcmtHZm0iLCJyZWh5cGVTbHVnIiwicmVoeXBlQ29kZVRpdGxlcyIsInJlaHlwZUF1dG9saW5rSGVhZGluZ3MiLCJyZWh5cGVQcmlzbSIsIkNhbGxvdXQiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsInB0Q29tcG9uZW50cyIsInR5cGVzIiwidmFsdWUiLCJhc3NldCIsIl9yZWYiLCJpbWciLCJhbHQiLCJsb2FkaW5nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJmaXQiLCJhdXRvIiwiUG9zdCIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJhdXRob3JJbWFnZSIsImNvbnRlbnQiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwidWwiLCJtYXAiLCJjYXRlZ29yeSIsImxpIiwiZGl2IiwidXJsIiwiY29tcG9uZW50cyIsInF1ZXJ5IiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZldGNoIiwic2x1ZyIsInBhcmFtcyIsImZhbGxiYWNrIiwicG9zdEZpZWxkcyIsInBvc3RRdWVyeSIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInBvc3QiLCJodG1sIiwiYm9keSIsIm1keE9wdGlvbnMiLCJyZW1hcmtQbHVnaW5zIiwicmVoeXBlUGx1Z2lucyIsInByb3BlcnRpZXMiLCJmb3JtYXQiLCJwcm9wcyIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

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