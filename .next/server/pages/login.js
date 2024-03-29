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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction login() {\n    const [isButtonLoading, setIsButtonLoading] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [succ, setSucc] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSignInWithGoogle = ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"google\");\n    };\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    console.log(session);\n    async function handleSubmit() {\n        const values = {\n            username: username,\n            password: password\n        };\n        await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:5000/login\", values).then(()=>setSucc(\"Successfully Logged in\"), setErr(), router.push(\"/\")).catch((error)=>setErr(error.message), setSucc(null));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"font-ibm font-bold text-2xl mx-auto w-11/12 uppercase py-2 my-6 flex flex-col gap-2\",\n            children: session.status === \"authenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex text-2xl normal-case font-normal flex-col gap-5 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"rounded-full\",\n                            src: session.data.user.image\n                        }, void 0, false, {\n                            fileName: \"/workspaces/ecommerce-frontend/pages/login.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 20\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/ecommerce-frontend/pages/login.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Full Name : \",\n                            session.data.user.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/ecommerce-frontend/pages/login.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Email : \",\n                            session.data.user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/ecommerce-frontend/pages/login.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/workspaces/ecommerce-frontend/pages/login.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-4 rounded-full bg-white text-black py-2\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                        children: \"Sign Out\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/ecommerce-frontend/pages/login.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/ecommerce-frontend/pages/login.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"px-4 rounded-full bg-white w-fit text-black py-2\",\n                onClick: handleSignInWithGoogle,\n                children: \"Sign in with Google\"\n            }, void 0, false, {\n                fileName: \"/workspaces/ecommerce-frontend/pages/login.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspaces/ecommerce-frontend/pages/login.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ29DO0FBQ3RCO0FBQ2Q7QUFDTztBQUNsQixTQUFTTyxRQUFRO0lBQzlCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0oscURBQWMsQ0FBQyxLQUFLO0lBQ2xFLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUE7SUFDeEMsTUFBTSxDQUFDTSxLQUFLQyxPQUFPLEdBQUdQLCtDQUFRQTtJQUM5QixNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBO0lBQ2hDLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUE7SUFDeEMsTUFBTVksU0FBU2Qsc0RBQVNBO0lBQ3hCLE1BQU1lLHlCQUF5QixJQUFNO1FBQ25DbEIsdURBQU1BLENBQUM7SUFDVDtJQUNBLE1BQU1tQixVQUFVakIsMkRBQVVBO0lBQzFCa0IsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLGVBQWVHLGVBQWU7UUFDNUIsTUFBTUMsU0FBUztZQUNiZCxVQUFVQTtZQUNWTSxVQUFVQTtRQUNaO1FBQ0EsTUFBTWhCLGtEQUFVLENBQUMsK0JBQStCd0IsUUFBUUUsSUFBSSxDQUFDLElBQU1YLFFBQVEsMkJBQTJCRixVQUFVSyxPQUFPUyxJQUFJLENBQUMsTUFBTUMsS0FBSyxDQUFDLENBQUNDLFFBQVVoQixPQUFPZ0IsTUFBTUMsT0FBTyxHQUFHZixRQUFRLElBQUk7SUFFeEw7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ2dCO1lBQUlDLFdBQVU7c0JBR1haLFFBQVFhLE1BQU0sS0FBSyxnQ0FDakIsOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7a0NBQUksNEVBQUNHOzRCQUFJRixXQUFVOzRCQUFlRyxLQUFLZixRQUFRZ0IsSUFBSSxDQUFDQyxJQUFJLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7O2tDQUMvRCw4REFBQ1A7OzRCQUFJOzRCQUFhWCxRQUFRZ0IsSUFBSSxDQUFDQyxJQUFJLENBQUNFLElBQUk7Ozs7Ozs7a0NBQ3hDLDhEQUFDUjs7NEJBQUk7NEJBQVNYLFFBQVFnQixJQUFJLENBQUNDLElBQUksQ0FBQ0csS0FBSzs7Ozs7OztrQ0FDckMsOERBQUNUOzs7OztrQ0FDRCw4REFBQ1U7d0JBQU9ULFdBQVU7d0JBQThDVSxTQUFTLElBQU14Qyx3REFBT0E7a0NBQUk7Ozs7Ozs7Ozs7O3FDQUc1Riw4REFBQ3VDO2dCQUFPVCxXQUFVO2dCQUFxRFUsU0FBU3ZCOzBCQUF3Qjs7Ozs7b0JBQTRCOzs7Ozs7O0FBSWhKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qc3g/OWVlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpbigpIHtcclxuICBjb25zdCBbaXNCdXR0b25Mb2FkaW5nLCBzZXRJc0J1dHRvbkxvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtlcnIsIHNldEVycl0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgW3N1Y2MsIHNldFN1Y2NdID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaGFuZGxlU2lnbkluV2l0aEdvb2dsZSA9ICgpID0+IHtcclxuICAgIHNpZ25JbihcImdvb2dsZVwiKTtcclxuICB9O1xyXG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKClcclxuICBjb25zb2xlLmxvZyhzZXNzaW9uKVxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgIH1cclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvbG9naW5cIiwgdmFsdWVzKS50aGVuKCgpID0+IHNldFN1Y2MoXCJTdWNjZXNzZnVsbHkgTG9nZ2VkIGluXCIpLCBzZXRFcnIoKSwgcm91dGVyLnB1c2goJy8nKSkuY2F0Y2goKGVycm9yKSA9PiBzZXRFcnIoZXJyb3IubWVzc2FnZSksIHNldFN1Y2MobnVsbCkpXHJcblxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWlibSBmb250LWJvbGQgdGV4dC0yeGwgbXgtYXV0byB3LTExLzEyIHVwcGVyY2FzZSBweS0yICBteS02IGZsZXggZmxleC1jb2wgZ2FwLTJcIj5cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2Vzc2lvbi5zdGF0dXMgPT09ICdhdXRoZW50aWNhdGVkJyA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHRleHQtMnhsIG5vcm1hbC1jYXNlIGZvbnQtbm9ybWFsIGZsZXgtY29sIGdhcC01IGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPGRpdj48aW1nIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsJyBzcmM9e3Nlc3Npb24uZGF0YS51c2VyLmltYWdlfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+RnVsbCBOYW1lIDoge3Nlc3Npb24uZGF0YS51c2VyLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5FbWFpbCA6IHtzZXNzaW9uLmRhdGEudXNlci5lbWFpbH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdweC00IHJvdW5kZWQtZnVsbCBiZy13aGl0ZSAgdGV4dC1ibGFjayBweS0yJyBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gT3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdweC00ICAgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHctZml0IHRleHQtYmxhY2sgcHktMicgb25DbGljaz17aGFuZGxlU2lnbkluV2l0aEdvb2dsZX0+U2lnbiBpbiB3aXRoIEdvb2dsZTwvYnV0dG9uPlxyXG4gICAgICAgIH08L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwibG9naW4iLCJpc0J1dHRvbkxvYWRpbmciLCJzZXRJc0J1dHRvbkxvYWRpbmciLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZXJyIiwic2V0RXJyIiwic3VjYyIsInNldFN1Y2MiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm91dGVyIiwiaGFuZGxlU2lnbkluV2l0aEdvb2dsZSIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwidmFsdWVzIiwicG9zdCIsInRoZW4iLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzdGF0dXMiLCJpbWciLCJzcmMiLCJkYXRhIiwidXNlciIsImltYWdlIiwibmFtZSIsImVtYWlsIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.jsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.jsx"));
module.exports = __webpack_exports__;

})();