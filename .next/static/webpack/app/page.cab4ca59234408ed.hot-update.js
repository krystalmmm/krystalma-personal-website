"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/ProjectsSection.jsx":
/*!************************************************!*\
  !*** ./src/app/components/ProjectsSection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"Backend REST API\",\n        description: \"Build backend REST API with Python and Django\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/krystalmmm\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 2,\n        title: \"Hotel Booking App\",\n        description: \"Full stack app with Next.js & Typescript, CI/CD with Jenkins & Docker\",\n        image: \"/images/project-logos/rest-api-logo.svg\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/krystalmmm\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 3,\n        title: \"Serverless REST API\",\n        description: \"Build serverles REST API using the serverless framework\",\n        image: \"/images/projects/3.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/krystalmmm\",\n        previewUrl: \"https://github.com/krystalmmm\"\n    },\n    {\n        id: 4,\n        title: \"Distributed Systems\",\n        description: \"Distributed File Storage in GO\",\n        image: \"/images/projects/4.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/krystalmmm\",\n        previewUrl: \"/\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-center justify-center text-4xl font-barlow font-normal text-white mt-4 mb-4 md:mb-12\",\n                        children: \"THINGS I'VE MADE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kongyangma/Workspace/krystalma-personal-website/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kongyangma/Workspace/krystalma-personal-website/src/app/components/ProjectsSection.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white text-center text-sm col-span-1 font-barlow font-light mb-8 sm: justify-center lg:text-lg\",\n                        children: \"I’ve worked on lots of little projects over the years here are just some of them. You are more than welcome to visit my GitHub, check out more interesting projects.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kongyangma/Workspace/krystalma-personal-website/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kongyangma/Workspace/krystalma-personal-website/src/app/components/ProjectsSection.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    ref: ref,\n                    className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                    children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                            variants: cardVariants,\n                            initial: \"initial\",\n                            animate: isInView ? \"animate\" : \"initial\",\n                            transition: {\n                                duration: 0.3,\n                                delay: index * 0.4\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                title: project.title,\n                                description: project.description,\n                                imgUrl: project.image,\n                                gitUrl: project.gitUrl,\n                                previewUrl: project.previewUrl\n                            }, project.id, false, {\n                                fileName: \"/Users/kongyangma/Workspace/krystalma-personal-website/src/app/components/ProjectsSection.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/kongyangma/Workspace/krystalma-personal-website/src/app/components/ProjectsSection.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/kongyangma/Workspace/krystalma-personal-website/src/app/components/ProjectsSection.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-start-2 mt-8 mb-8 py-8 px-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        type: \"button\",\n                        href: \"https://github.com/krystalmmm\",\n                        className: \"px-6 py-3 w-full font-barlow sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-slate-600\",\n                        children: \"Visit Full Archive\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kongyangma/Workspace/krystalma-personal-website/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kongyangma/Workspace/krystalma-personal-website/src/app/components/ProjectsSection.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kongyangma/Workspace/krystalma-personal-website/src/app/components/ProjectsSection.jsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kongyangma/Workspace/krystalma-personal-website/src/app/components/ProjectsSection.jsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUjtBQUNGO0FBQ1k7QUFFbEQsTUFBTU8sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0NBQ0Q7QUFFRCxNQUFNQyxrQkFBa0I7O0lBQ3RCLE1BQU0sQ0FBQ0gsS0FBS0ksT0FBTyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNZ0IsTUFBTWYsNkNBQU1BLENBQUM7SUFDbkIsTUFBTWdCLFdBQVdaLHdEQUFTQSxDQUFDVyxLQUFLO1FBQUVFLE1BQU07SUFBSztJQUU3QyxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkJMLE9BQU9LO0lBQ1Q7SUFFQSxNQUFNQyxtQkFBbUJmLGFBQWFnQixNQUFNLENBQUMsQ0FBQ0MsVUFDNUNBLFFBQVFaLEdBQUcsQ0FBQ2EsUUFBUSxDQUFDYjtJQUd2QixNQUFNYyxlQUFlO1FBQ25CQyxTQUFTO1lBQUVDLEdBQUc7WUFBSUMsU0FBUztRQUFFO1FBQzdCQyxTQUFTO1lBQUVGLEdBQUc7WUFBR0MsU0FBUztRQUFFO0lBQzlCO0lBRUEscUJBQ0UsOERBQUNFO1FBQVF2QixJQUFHO2tCQUNWLDRFQUFDd0I7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBR0QsV0FBVTtrQ0FBNEY7Ozs7Ozs7Ozs7OzhCQUk1Ryw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNFO3dCQUFFRixXQUFVO2tDQUFzRzs7Ozs7Ozs7Ozs7OEJBSXJILDhEQUFDRztvQkFBR25CLEtBQUtBO29CQUFLZ0IsV0FBVTs4QkFDckJYLGlCQUFpQmUsR0FBRyxDQUFDLENBQUNiLFNBQVNjLHNCQUM5Qiw4REFBQ2pDLGlEQUFNQSxDQUFDa0MsRUFBRTs0QkFFUkMsVUFBVWQ7NEJBQ1ZDLFNBQVE7NEJBQ1JHLFNBQVNaLFdBQVcsWUFBWTs0QkFDaEN1QixZQUFZO2dDQUFFQyxVQUFVO2dDQUFLQyxPQUFPTCxRQUFROzRCQUFJO3NDQUVoRCw0RUFBQ25DLG9EQUFXQTtnQ0FFVk0sT0FBT2UsUUFBUWYsS0FBSztnQ0FDcEJDLGFBQWFjLFFBQVFkLFdBQVc7Z0NBQ2hDa0MsUUFBUXBCLFFBQVFiLEtBQUs7Z0NBQ3JCRSxRQUFRVyxRQUFRWCxNQUFNO2dDQUN0QkMsWUFBWVUsUUFBUVYsVUFBVTsrQkFMekJVLFFBQVFoQixFQUFFOzs7OzsyQkFQWjhCOzs7Ozs7Ozs7OzhCQWlCWCw4REFBQ047b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNZO3dCQUFFQyxNQUFLO3dCQUFTQyxNQUFLO3dCQUFnQ2QsV0FBVTtrQ0FBcUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0s7R0F6RE1sQjs7UUFHYVQsb0RBQVNBOzs7S0FIdEJTO0FBMkROLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4PzM3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgUHJvamVjdFRhZyBmcm9tIFwiLi9Qcm9qZWN0VGFnXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUluVmlldyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IHByb2plY3RzRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIkJhY2tlbmQgUkVTVCBBUElcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCdWlsZCBiYWNrZW5kIFJFU1QgQVBJIHdpdGggUHl0aG9uIGFuZCBEamFuZ29cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzEucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9rcnlzdGFsbW1tXCIsXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJIb3RlbCBCb29raW5nIEFwcFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZ1bGwgc3RhY2sgYXBwIHdpdGggTmV4dC5qcyAmIFR5cGVzY3JpcHQsIENJL0NEIHdpdGggSmVua2lucyAmIERvY2tlclwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdC1sb2dvcy9yZXN0LWFwaS1sb2dvLnN2Z1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGdpdFVybDogXCJodHRwczovL2dpdGh1Yi5jb20va3J5c3RhbG1tbVwiLFxuICAgIHByZXZpZXdVcmw6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwiU2VydmVybGVzcyBSRVNUIEFQSVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJ1aWxkIHNlcnZlcmxlcyBSRVNUIEFQSSB1c2luZyB0aGUgc2VydmVybGVzcyBmcmFtZXdvcmtcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzMucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9rcnlzdGFsbW1tXCIsXG4gICAgcHJldmlld1VybDogXCJodHRwczovL2dpdGh1Yi5jb20va3J5c3RhbG1tbVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6IFwiRGlzdHJpYnV0ZWQgU3lzdGVtc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc3RyaWJ1dGVkIEZpbGUgU3RvcmFnZSBpbiBHT1wiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvNC5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2tyeXN0YWxtbW1cIixcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcbiAgfSxcbl07XG5cbmNvbnN0IFByb2plY3RzU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHJlZiwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVRhZ0NoYW5nZSA9IChuZXdUYWcpID0+IHtcbiAgICBzZXRUYWcobmV3VGFnKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHNEYXRhLmZpbHRlcigocHJvamVjdCkgPT5cbiAgICBwcm9qZWN0LnRhZy5pbmNsdWRlcyh0YWcpXG4gICk7XG5cbiAgY29uc3QgY2FyZFZhcmlhbnRzID0ge1xuICAgIGluaXRpYWw6IHsgeTogNTAsIG9wYWNpdHk6IDAgfSxcbiAgICBhbmltYXRlOiB7IHk6IDAsIG9wYWNpdHk6IDEgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLTggaXRlbXMtY2VudGVyIHB5LTggcHgtNCB4bDpnYXAtMTYgc206cHktMTYgeGw6cHgtMTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtNHhsIGZvbnQtYmFybG93IGZvbnQtbm9ybWFsIHRleHQtd2hpdGUgbXQtNCBtYi00IG1kOm1iLTEyXCI+XG4gICAgICAgICAgICBUSElOR1MgSSZhcG9zO1ZFIE1BREVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciB0ZXh0LXNtIGNvbC1zcGFuLTEgZm9udC1iYXJsb3cgZm9udC1saWdodCBtYi04IHNtOiBqdXN0aWZ5LWNlbnRlciBsZzp0ZXh0LWxnXCI+XG4gICAgICAgICAgICBJ4oCZdmUgd29ya2VkIG9uIGxvdHMgb2YgbGl0dGxlIHByb2plY3RzIG92ZXIgdGhlIHllYXJzIGhlcmUgYXJlIGp1c3Qgc29tZSBvZiB0aGVtLiBZb3UgYXJlIG1vcmUgdGhhbiB3ZWxjb21lIHRvIHZpc2l0IG15IEdpdEh1YiwgY2hlY2sgb3V0IG1vcmUgaW50ZXJlc3RpbmcgcHJvamVjdHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIHJlZj17cmVmfSBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC04IG1kOmdhcC0xMlwiPlxuICAgICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgdmFyaWFudHM9e2NhcmRWYXJpYW50c31cbiAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgICBhbmltYXRlPXtpc0luVmlldyA/IFwiYW5pbWF0ZVwiIDogXCJpbml0aWFsXCJ9XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMywgZGVsYXk6IGluZGV4ICogMC40IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpbWdVcmw9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgZ2l0VXJsPXtwcm9qZWN0LmdpdFVybH1cbiAgICAgICAgICAgICAgICBwcmV2aWV3VXJsPXtwcm9qZWN0LnByZXZpZXdVcmx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3RhcnQtMiBtdC04IG1iLTggcHktOCBweC04XCI+XG4gICAgICAgICAgPGEgdHlwZT1cImJ1dHRvblwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va3J5c3RhbG1tbVwiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB3LWZ1bGwgZm9udC1iYXJsb3cgc206dy1maXQgcm91bmRlZC1mdWxsIG1yLTQgYmctd2hpdGUgaG92ZXI6Ymctc2xhdGUtMjAwIHRleHQtc2xhdGUtNjAwXCI+VmlzaXQgRnVsbCBBcmNoaXZlPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzU2VjdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlByb2plY3RDYXJkIiwiUHJvamVjdFRhZyIsIm1vdGlvbiIsInVzZUluVmlldyIsInByb2plY3RzRGF0YSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGFnIiwiZ2l0VXJsIiwicHJldmlld1VybCIsIlByb2plY3RzU2VjdGlvbiIsInNldFRhZyIsInJlZiIsImlzSW5WaWV3Iiwib25jZSIsImhhbmRsZVRhZ0NoYW5nZSIsIm5ld1RhZyIsImZpbHRlcmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiaW5jbHVkZXMiLCJjYXJkVmFyaWFudHMiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwic2VjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJpbWdVcmwiLCJhIiwidHlwZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});