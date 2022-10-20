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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-mdx-remote */ \"next-mdx-remote\");\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-mdx-remote/serialize */ \"next-mdx-remote/serialize\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! remark-gfm */ \"remark-gfm\");\n/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rehype-slug */ \"rehype-slug\");\n/* harmony import */ var rehype_code_titles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rehype-code-titles */ \"rehype-code-titles\");\n/* harmony import */ var rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rehype-autolink-headings */ \"rehype-autolink-headings\");\n/* harmony import */ var rehype_prism_plus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rehype-prism-plus */ \"rehype-prism-plus\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_6__, remark_gfm__WEBPACK_IMPORTED_MODULE_7__, rehype_slug__WEBPACK_IMPORTED_MODULE_8__, rehype_code_titles__WEBPACK_IMPORTED_MODULE_9__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_11__]);\n([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_6__, remark_gfm__WEBPACK_IMPORTED_MODULE_7__, rehype_slug__WEBPACK_IMPORTED_MODULE_8__, rehype_code_titles__WEBPACK_IMPORTED_MODULE_9__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// [slug].js\n\n\n\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            if (!value?.asset?._ref) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined);\n        }\n    }\n};\nconst Post = ({ title =\"Missing title\" , name =\"Missing name\" , categories , authorImage , content ,  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"text-white flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-3xl font-bold tracking-tight md:text-5xl dark:text-Black\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(80).url(),\n                    alt: `${name}'s picture`\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"prose\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__.MDXRemote, {\n                    ...content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nites\\\\sanity-next\\\\web\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\r\n  title,\r\n  \"name\": author->name,\r\n  \"categories\": categories[]->title,\r\n  \"authorImage\": author->image,\r\n  body\r\n}`;\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nconst postFields = `\r\n  _id,\r\n  title,\r\n  date,\r\n  excerpt,\r\n  coverImage,\r\n  body,\r\n  \"slug\": slug.current,\r\n  \"name\": author->name,\r\n  \"categories\": categories[]->title,\r\n  \"authorImage\": author->image\r\n`;\nconst postQuery = `\r\n{\r\n  \"post\": *[_type == \"post\" && slug.current == $slug] | order(_updatedAt desc) [0] {\r\n    content,\r\n    ${postFields}\r\n  }\r\n}`;\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\" \"  } = context.params;\n    const { post  } = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(postQuery, {\n        slug\n    });\n    const source = \"Some **mdx** text, with a component\";\n    const html = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_6__.serialize)(post.body, {\n        mdxOptions: {\n            remarkPlugins: [\n                remark_gfm__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n            ],\n            rehypePlugins: [\n                rehype_slug__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                rehype_code_titles__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                rehype_prism_plus__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n                [\n                    rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                    {\n                        properties: {\n                            className: [\n                                \"anchor\"\n                            ]\n                        }\n                    }, \n                ], \n            ],\n            format: \"mdx\"\n        }\n    });\n    return {\n        props: {\n            ...post,\n            content: html,\n            test: \"123\"\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNWQzs7Z0JBRUE7O29CQUVFOzs7OztrQkFHRztxQkFDRjtpQkFDRjthQUNGO1lBQ0RxRDs7S0FFSCxDQUFDO0lBRUYsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFDTCxHQUFHUixJQUFJO1lBQ1B0QixJQUFBQSxrREFBYTtZQUNiK0I7U0FDRDtLQUNGLENBQUM7QUFDSixDQUFDO0FBQ0QsZUFBZXBDLENBQUFBLDBEQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbc2x1Z10uanNcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcclxuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50XCI7XHJcbmltcG9ydCB7IE1EWFJlbW90ZSB9IGZyb20gXCJuZXh0LW1keC1yZW1vdGVcIjtcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZS9zZXJpYWxpemVcIjtcclxuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xyXG5pbXBvcnQgcmVoeXBlU2x1ZyBmcm9tIFwicmVoeXBlLXNsdWdcIjtcclxuaW1wb3J0IHJlaHlwZUNvZGVUaXRsZXMgZnJvbSBcInJlaHlwZS1jb2RlLXRpdGxlc1wiO1xyXG5pbXBvcnQgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyBmcm9tIFwicmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzXCI7XHJcbmltcG9ydCByZWh5cGVQcmlzbSBmcm9tIFwicmVoeXBlLXByaXNtLXBsdXNcIjtcclxuXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcclxufVxyXG5cclxuY29uc3QgcHRDb21wb25lbnRzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBpbWFnZTogKHsgdmFsdWUgfSkgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgYWx0PXt2YWx1ZS5hbHQgfHwgXCIgXCJ9XHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSkud2lkdGgoMzIwKS5oZWlnaHQoMjQwKS5maXQoXCJtYXhcIikuYXV0byhcImZvcm1hdFwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgUG9zdCA9ICh7XHJcbiAgdGl0bGUgPSBcIk1pc3NpbmcgdGl0bGVcIixcclxuICBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIixcclxuICBjYXRlZ29yaWVzLFxyXG4gIGF1dGhvckltYWdlLFxyXG4gIGNvbnRlbnQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHctZnVsbCBtYXgtdy0yeGwgbXgtYXV0byBtYi0xNlwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgIG1kOnRleHQtNXhsIGRhcms6dGV4dC1CbGFja1wiPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9oMT5cclxuICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxyXG4gICAgICB7Y2F0ZWdvcmllcyAmJiAoXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgUG9zdGVkIGluXHJcbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICl9XHJcbiAgICAgIHthdXRob3JJbWFnZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDgwKS51cmwoKX1cclxuICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxyXG4gICAgICAgIDxNRFhSZW1vdGUgey4uLmNvbnRlbnR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIDxQb3J0YWJsZVRleHQgdmFsdWU9e2JvZHl9IGNvbXBvbmVudHM9e3B0Q29tcG9uZW50c30gLz4gKi99XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgdGl0bGUsXHJcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgYm9keVxyXG59YDtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgY2xpZW50LmZldGNoKFxyXG4gICAgZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7IHBhcmFtczogeyBzbHVnIH0gfSkpLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgcG9zdEZpZWxkcyA9IGBcclxuICBfaWQsXHJcbiAgdGl0bGUsXHJcbiAgZGF0ZSxcclxuICBleGNlcnB0LFxyXG4gIGNvdmVySW1hZ2UsXHJcbiAgYm9keSxcclxuICBcInNsdWdcIjogc2x1Zy5jdXJyZW50LFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlXHJcbmA7XHJcblxyXG5jb25zdCBwb3N0UXVlcnkgPSBgXHJcbntcclxuICBcInBvc3RcIjogKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddIHwgb3JkZXIoX3VwZGF0ZWRBdCBkZXNjKSBbMF0ge1xyXG4gICAgY29udGVudCxcclxuICAgICR7cG9zdEZpZWxkc31cclxuICB9XHJcbn1gO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxyXG4gIGNvbnN0IHsgc2x1ZyA9IFwiIFwiIH0gPSBjb250ZXh0LnBhcmFtcztcclxuICBjb25zdCB7IHBvc3QgfSA9IGF3YWl0IGNsaWVudC5mZXRjaChwb3N0UXVlcnksIHsgc2x1ZyB9KTtcclxuICBjb25zdCBzb3VyY2UgPSBcIlNvbWUgKiptZHgqKiB0ZXh0LCB3aXRoIGEgY29tcG9uZW50XCI7XHJcblxyXG4gIGNvbnN0IGh0bWwgPSBhd2FpdCBzZXJpYWxpemUocG9zdC5ib2R5LCB7XHJcbiAgICBtZHhPcHRpb25zOiB7XHJcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtHZm1dLFxyXG4gICAgICByZWh5cGVQbHVnaW5zOiBbXHJcbiAgICAgICAgcmVoeXBlU2x1ZyxcclxuICAgICAgICByZWh5cGVDb2RlVGl0bGVzLFxyXG4gICAgICAgIHJlaHlwZVByaXNtLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIHJlaHlwZUF1dG9saW5rSGVhZGluZ3MsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6IFtcImFuY2hvclwiXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgXSxcclxuICAgICAgZm9ybWF0OiBcIm1keFwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIC4uLnBvc3QsXHJcbiAgICAgIGNvbnRlbnQ6IGh0bWwsXHJcbiAgICAgIHRlc3Q6IFwiMTIzXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbImdyb3EiLCJpbWFnZVVybEJ1aWxkZXIiLCJQb3J0YWJsZVRleHQiLCJjbGllbnQiLCJNRFhSZW1vdGUiLCJzZXJpYWxpemUiLCJyZW1hcmtHZm0iLCJyZWh5cGVTbHVnIiwicmVoeXBlQ29kZVRpdGxlcyIsInJlaHlwZUF1dG9saW5rSGVhZGluZ3MiLCJyZWh5cGVQcmlzbSIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwicHRDb21wb25lbnRzIiwidHlwZXMiLCJ2YWx1ZSIsImFzc2V0IiwiX3JlZiIsImltZyIsImFsdCIsImxvYWRpbmciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImZpdCIsImF1dG8iLCJQb3N0IiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImF1dGhvckltYWdlIiwiY29udGVudCIsImFydGljbGUiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJ1bCIsIm1hcCIsImNhdGVnb3J5IiwibGkiLCJkaXYiLCJ1cmwiLCJxdWVyeSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmZXRjaCIsInNsdWciLCJwYXJhbXMiLCJmYWxsYmFjayIsInBvc3RGaWVsZHMiLCJwb3N0UXVlcnkiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwb3N0IiwiaHRtbCIsImJvZHkiLCJtZHhPcHRpb25zIiwicmVtYXJrUGx1Z2lucyIsInJlaHlwZVBsdWdpbnMiLCJwcm9wZXJ0aWVzIiwiZm9ybWF0IiwicHJvcHMiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

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