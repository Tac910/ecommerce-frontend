"use strict";
(() => {
var exports = {};
exports.id = 45;
exports.ids = [45,748];
exports.modules = {

/***/ 4171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js


/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    providers: [
        google_default()({
            clientId: "78296806102-o2l47uhk48l1p5ms4lld0eo5sfetfvbi.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ],
    jwt: {
        secret: "GENGARSTORE_SECRET",
        signingKey: "newsignignket"
    },
    secret: "GENGARSTORE_SECRE2312312T"
}));


/***/ }),

/***/ 2960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ restricted)
});

;// CONCATENATED MODULE: external "next-auth/next"
const next_namespaceObject = require("next-auth/next");
// EXTERNAL MODULE: ./pages/api/auth/[...nextauth].js + 2 modules
var _nextauth_ = __webpack_require__(4171);
;// CONCATENATED MODULE: ./pages/api/restricted.jsx


/* harmony default export */ const restricted = (async (req, res)=>{
    const session = await (0,next_namespaceObject.unstable_getServerSession)(req, res, _nextauth_.authOptions);
    if (session) {
        res.send({
            content: "This is protected content. You can access this content because you are signed in."
        });
    } else {
        res.send({
            error: "You must be signed in to view the protected content on this page."
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2960));
module.exports = __webpack_exports__;

})();