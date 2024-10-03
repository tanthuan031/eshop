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

/***/ "(app-pages-browser)/./src/components/home-component/homeSlider.js":
/*!*****************************************************!*\
  !*** ./src/components/home-component/homeSlider.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider/react */ \"(app-pages-browser)/./node_modules/keen-slider/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ \"(app-pages-browser)/./node_modules/keen-slider/keen-slider.min.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst HomeSlider = (param)=>{\n    let { product, perView } = param;\n    _s();\n    const sliderOptions = {\n        slides: {\n            perView: perView\n        },\n        loop: true\n    };\n    const [sliderRef, internalSlider] = (0,keen_slider_react__WEBPACK_IMPORTED_MODULE_3__.useKeenSlider)(sliderOptions, [\n        (slider)=>{\n            let timeout;\n            let mouseOver = false;\n            function clearNextTimeout() {\n                clearTimeout(timeout);\n            }\n            function nextTimeout() {\n                try {\n                    console.log(\"Current slider:\", slider);\n                    clearTimeout(timeout);\n                    if (mouseOver) return;\n                    timeout = setTimeout(()=>{\n                        if (slider) {\n                            console.log(\"Calling slider.next()\");\n                            slider.next();\n                        } else {\n                            console.warn(\"Slider is null or undefined\");\n                        }\n                    }, 3000);\n                } catch (error) {\n                    console.error(\"Error in nextTimeout:\", error);\n                }\n            }\n            slider.on(\"created\", ()=>{\n                slider.container.addEventListener(\"mouseover\", ()=>{\n                    mouseOver = true;\n                    clearNextTimeout();\n                });\n                slider.container.addEventListener(\"mouseout\", ()=>{\n                    mouseOver = false;\n                    nextTimeout();\n                });\n                nextTimeout();\n            });\n            slider.on(\"dragStarted\", clearNextTimeout);\n            slider.on(\"animationEnded\", nextTimeout);\n            slider.on(\"updated\", nextTimeout);\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        var _internalSlider_current;\n        (_internalSlider_current = internalSlider.current) === null || _internalSlider_current === void 0 ? void 0 : _internalSlider_current.update({\n            ...sliderOptions\n        });\n    }, [\n        internalSlider,\n        sliderOptions\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: sliderRef,\n        className: \"keen-slider p-2 bg-white rounded-lg drop-shadow\",\n        children: product === null || product === void 0 ? void 0 : product.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"keen-slider__slide flex flex-col justify-between group\",\n                href: \"/product/\".concat(item.slug),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: item.offer.length ? item.configImage : item.image[0],\n                                alt: item.name,\n                                width: 200,\n                                height: 200,\n                                className: \"mx-auto my-2 group-hover:scale-[1.1] transition delay-150 duration-300 ease-in-out\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tanthuan/Documents/Workplace/person/project/capstone/frontend/src/components/home-component/homeSlider.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-black font-semibold px-2 text-center group-hover:text-sub_primary_color transition delay-150 duration-300 ease-in-out\",\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/Users/tanthuan/Documents/Workplace/person/project/capstone/frontend/src/components/home-component/homeSlider.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanthuan/Documents/Workplace/person/project/capstone/frontend/src/components/home-component/homeSlider.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-around items-center py-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm font-bold text-[#fd475a]\",\n                                        children: item.price[0] == \"L\" ? item.price : item.price + \" ₫\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tanthuan/Documents/Workplace/person/project/capstone/frontend/src/components/home-component/homeSlider.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xs text-primary_color line-through\",\n                                        children: item.price[0] == \"L\" ? \"\" : (parseInt(item.price.replace(/,/g, \"\"), 10) * 3 / 2).toString() + \" ₫\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tanthuan/Documents/Workplace/person/project/capstone/frontend/src/components/home-component/homeSlider.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tanthuan/Documents/Workplace/person/project/capstone/frontend/src/components/home-component/homeSlider.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, undefined),\n                            item.offer.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-center text-xs text-primary_color truncate mt-1 px-1\",\n                                        children: item.offer[item.offer.length - 1]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tanthuan/Documents/Workplace/person/project/capstone/frontend/src/components/home-component/homeSlider.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-center text-xs font-semibold text-[#f7941e] mb-1 px-1\",\n                                        children: \"V\\xc0 \".concat(item.offer.length - 1, \" KM KH\\xc1C\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tanthuan/Documents/Workplace/person/project/capstone/frontend/src/components/home-component/homeSlider.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true) : null\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanthuan/Documents/Workplace/person/project/capstone/frontend/src/components/home-component/homeSlider.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"/Users/tanthuan/Documents/Workplace/person/project/capstone/frontend/src/components/home-component/homeSlider.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/tanthuan/Documents/Workplace/person/project/capstone/frontend/src/components/home-component/homeSlider.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomeSlider, \"g8GHid4Vv3yXPpzQbqlndgj5ZUo=\", false, function() {\n    return [\n        keen_slider_react__WEBPACK_IMPORTED_MODULE_3__.useKeenSlider\n    ];\n});\n_c = HomeSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeSlider);\nvar _c;\n$RefreshReg$(_c, \"HomeSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUtY29tcG9uZW50L2hvbWVTbGlkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0U7QUFDbUI7QUFDaEI7QUFDTztBQUV6QyxNQUFNSSxhQUFhO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUU7O0lBQ3RDLE1BQU1DLGdCQUFnQjtRQUNwQkMsUUFBUTtZQUFFRixTQUFTQTtRQUFRO1FBQzNCRyxNQUFNO0lBQ1I7SUFFQSxNQUFNLENBQUNDLFdBQVdDLGVBQWUsR0FBR1QsZ0VBQWFBLENBQUNLLGVBQWU7UUFDL0QsQ0FBQ0s7WUFDQyxJQUFJQztZQUNKLElBQUlDLFlBQVk7WUFDaEIsU0FBU0M7Z0JBQ1BDLGFBQWFIO1lBQ2Y7WUFDQSxTQUFTSTtnQkFDUCxJQUFJO29CQUNGQyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CUDtvQkFDL0JJLGFBQWFIO29CQUNiLElBQUlDLFdBQVc7b0JBQ2ZELFVBQVVPLFdBQVc7d0JBQ25CLElBQUlSLFFBQVE7NEJBQ1ZNLFFBQVFDLEdBQUcsQ0FBQzs0QkFDWlAsT0FBT1MsSUFBSTt3QkFDYixPQUFPOzRCQUNMSCxRQUFRSSxJQUFJLENBQUM7d0JBQ2Y7b0JBQ0YsR0FBRztnQkFDTCxFQUFFLE9BQU9DLE9BQU87b0JBQ2RMLFFBQVFLLEtBQUssQ0FBQyx5QkFBeUJBO2dCQUN6QztZQUNGO1lBRUFYLE9BQU9ZLEVBQUUsQ0FBQyxXQUFXO2dCQUNuQlosT0FBT2EsU0FBUyxDQUFDQyxnQkFBZ0IsQ0FBQyxhQUFhO29CQUM3Q1osWUFBWTtvQkFDWkM7Z0JBQ0Y7Z0JBQ0FILE9BQU9hLFNBQVMsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWTtvQkFDNUNaLFlBQVk7b0JBQ1pHO2dCQUNGO2dCQUNBQTtZQUNGO1lBQ0FMLE9BQU9ZLEVBQUUsQ0FBQyxlQUFlVDtZQUN6QkgsT0FBT1ksRUFBRSxDQUFDLGtCQUFrQlA7WUFDNUJMLE9BQU9ZLEVBQUUsQ0FBQyxXQUFXUDtRQUN2QjtLQUNEO0lBRURkLGdEQUFTQSxDQUFDO1lBQ1JRO1NBQUFBLDBCQUFBQSxlQUFlZ0IsT0FBTyxjQUF0QmhCLDhDQUFBQSx3QkFBd0JpQixNQUFNLENBQUM7WUFDN0IsR0FBR3JCLGFBQWE7UUFDbEI7SUFDRixHQUFHO1FBQUNJO1FBQWdCSjtLQUFjO0lBRWxDLHFCQUNFLDhEQUFDc0I7UUFDQ0MsS0FBS3BCO1FBQ0xxQixXQUFZO2tCQUNYMUIsb0JBQUFBLDhCQUFBQSxRQUFTMkIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNuQiw4REFBQ2xDLGtEQUFJQTtnQkFDSCtCLFdBQVU7Z0JBRVZJLE1BQU0sWUFBc0IsT0FBVkYsS0FBS0csSUFBSTs7a0NBQzNCLDhEQUFDUDs7MENBQ0MsOERBQUM1QixtREFBS0E7Z0NBQ0pvQyxLQUFLSixLQUFLSyxLQUFLLENBQUNDLE1BQU0sR0FBR04sS0FBS08sV0FBVyxHQUFHUCxLQUFLUSxLQUFLLENBQUMsRUFBRTtnQ0FDekRDLEtBQUtULEtBQUtVLElBQUk7Z0NBQ2RDLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JkLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ2U7Z0NBQUVmLFdBQVU7MENBQ1ZFLEtBQUtVLElBQUk7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ2Q7OzBDQUNDLDhEQUFDQTtnQ0FBSUUsV0FBVTs7a0RBQ2IsOERBQUNlO3dDQUFFZixXQUFVO2tEQUNWRSxLQUFLYyxLQUFLLENBQUMsRUFBRSxJQUFJLE1BQU1kLEtBQUtjLEtBQUssR0FBR2QsS0FBS2MsS0FBSyxHQUFHOzs7Ozs7a0RBRXBELDhEQUFDRDt3Q0FBRWYsV0FBVTtrREFDVkUsS0FBS2MsS0FBSyxDQUFDLEVBQUUsSUFBSSxNQUNkLEtBQ0EsQ0FDRSxTQUFVZCxLQUFLYyxLQUFLLENBQUNFLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUM5QyxHQUNBQyxRQUFRLEtBQUs7Ozs7Ozs7Ozs7Ozs0QkFHdEJqQixLQUFLSyxLQUFLLENBQUNDLE1BQU0saUJBQ2hCOztrREFDRSw4REFBQ087d0NBQUVmLFdBQVU7a0RBQ1ZFLEtBQUtLLEtBQUssQ0FBQ0wsS0FBS0ssS0FBSyxDQUFDQyxNQUFNLEdBQUcsRUFBRTs7Ozs7O2tEQUVwQyw4REFBQ087d0NBQUVmLFdBQVU7a0RBQThELFNBRTFFLE9BRENFLEtBQUtLLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQ3JCOzs7Ozs7OytDQUVEOzs7Ozs7OztlQXJDREw7Ozs7Ozs7Ozs7QUEyQ2Y7R0F4R005Qjs7UUFNZ0NGLDREQUFhQTs7O0tBTjdDRTtBQTBHTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lLWNvbXBvbmVudC9ob21lU2xpZGVyLmpzPzkxZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlS2VlblNsaWRlciB9IGZyb20gXCJrZWVuLXNsaWRlci9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwia2Vlbi1zbGlkZXIva2Vlbi1zbGlkZXIubWluLmNzc1wiO1xyXG5cclxuY29uc3QgSG9tZVNsaWRlciA9ICh7IHByb2R1Y3QsIHBlclZpZXcgfSkgPT4ge1xyXG4gIGNvbnN0IHNsaWRlck9wdGlvbnMgPSB7XHJcbiAgICBzbGlkZXM6IHsgcGVyVmlldzogcGVyVmlldyB9LFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBbc2xpZGVyUmVmLCBpbnRlcm5hbFNsaWRlcl0gPSB1c2VLZWVuU2xpZGVyKHNsaWRlck9wdGlvbnMsIFtcclxuICAgIChzbGlkZXIpID0+IHtcclxuICAgICAgbGV0IHRpbWVvdXQ7XHJcbiAgICAgIGxldCBtb3VzZU92ZXIgPSBmYWxzZTtcclxuICAgICAgZnVuY3Rpb24gY2xlYXJOZXh0VGltZW91dCgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gbmV4dFRpbWVvdXQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBzbGlkZXI6XCIsIHNsaWRlcik7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICBpZiAobW91c2VPdmVyKSByZXR1cm47XHJcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzbGlkZXIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbGxpbmcgc2xpZGVyLm5leHQoKVwiKTtcclxuICAgICAgICAgICAgICBzbGlkZXIubmV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlNsaWRlciBpcyBudWxsIG9yIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBuZXh0VGltZW91dDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc2xpZGVyLm9uKFwiY3JlYXRlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2xpZGVyLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgIG1vdXNlT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICBjbGVhck5leHRUaW1lb3V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2xpZGVyLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgbW91c2VPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICBuZXh0VGltZW91dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5leHRUaW1lb3V0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzbGlkZXIub24oXCJkcmFnU3RhcnRlZFwiLCBjbGVhck5leHRUaW1lb3V0KTtcclxuICAgICAgc2xpZGVyLm9uKFwiYW5pbWF0aW9uRW5kZWRcIiwgbmV4dFRpbWVvdXQpO1xyXG4gICAgICBzbGlkZXIub24oXCJ1cGRhdGVkXCIsIG5leHRUaW1lb3V0KTtcclxuICAgIH0sXHJcbiAgXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbnRlcm5hbFNsaWRlci5jdXJyZW50Py51cGRhdGUoe1xyXG4gICAgICAuLi5zbGlkZXJPcHRpb25zLFxyXG4gICAgfSk7XHJcbiAgfSwgW2ludGVybmFsU2xpZGVyLCBzbGlkZXJPcHRpb25zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17c2xpZGVyUmVmfVxyXG4gICAgICBjbGFzc05hbWU9e2BrZWVuLXNsaWRlciBwLTIgYmctd2hpdGUgcm91bmRlZC1sZyBkcm9wLXNoYWRvd2B9PlxyXG4gICAgICB7cHJvZHVjdD8ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJrZWVuLXNsaWRlcl9fc2xpZGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gZ3JvdXBcIlxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIGhyZWY9e2AvcHJvZHVjdC8ke2l0ZW0uc2x1Z31gfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5vZmZlci5sZW5ndGggPyBpdGVtLmNvbmZpZ0ltYWdlIDogaXRlbS5pbWFnZVswXX1cclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gbXktMiBncm91cC1ob3ZlcjpzY2FsZS1bMS4xXSB0cmFuc2l0aW9uIGRlbGF5LTE1MCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYmxhY2sgZm9udC1zZW1pYm9sZCBweC0yIHRleHQtY2VudGVyIGdyb3VwLWhvdmVyOnRleHQtc3ViX3ByaW1hcnlfY29sb3IgdHJhbnNpdGlvbiBkZWxheS0xNTAgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIHB5LTFcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LVsjZmQ0NzVhXVwiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ucHJpY2VbMF0gPT0gXCJMXCIgPyBpdGVtLnByaWNlIDogaXRlbS5wcmljZSArIFwiIOKCq1wifVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcHJpbWFyeV9jb2xvciBsaW5lLXRocm91Z2hcIj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnByaWNlWzBdID09IFwiTFwiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIChwYXJzZUludChpdGVtLnByaWNlLnJlcGxhY2UoLywvZywgXCJcIiksIDEwKSAqIDMpIC9cclxuICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICApLnRvU3RyaW5nKCkgKyBcIiDigqtcIn1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7aXRlbS5vZmZlci5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteHMgdGV4dC1wcmltYXJ5X2NvbG9yIHRydW5jYXRlIG10LTEgcHgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5vZmZlcltpdGVtLm9mZmVyLmxlbmd0aCAtIDFdfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyNmNzk0MWVdIG1iLTEgcHgtMVwiPntgVsOAICR7XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0ub2ZmZXIubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgfSBLTSBLSMOBQ2B9PC9wPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVNsaWRlcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZUtlZW5TbGlkZXIiLCJ1c2VFZmZlY3QiLCJIb21lU2xpZGVyIiwicHJvZHVjdCIsInBlclZpZXciLCJzbGlkZXJPcHRpb25zIiwic2xpZGVzIiwibG9vcCIsInNsaWRlclJlZiIsImludGVybmFsU2xpZGVyIiwic2xpZGVyIiwidGltZW91dCIsIm1vdXNlT3ZlciIsImNsZWFyTmV4dFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJuZXh0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwibmV4dCIsIndhcm4iLCJlcnJvciIsIm9uIiwiY29udGFpbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJ1cGRhdGUiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJocmVmIiwic2x1ZyIsInNyYyIsIm9mZmVyIiwibGVuZ3RoIiwiY29uZmlnSW1hZ2UiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJwcmljZSIsInBhcnNlSW50IiwicmVwbGFjZSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home-component/homeSlider.js\n"));

/***/ })

});