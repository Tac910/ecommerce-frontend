(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
// EXTERNAL MODULE: ./redux/cartSlice.jsx
var cartSlice = __webpack_require__(9255);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./components/Navbar.jsx






function Navbar() {
    const products = (0,external_react_redux_.useSelector)((state)=>state.cart.cartItems);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const handleRemove = (cartItem)=>{
        dispatch((0,cartSlice/* remove */.Od)(cartItem));
    };
    const session = (0,react_.useSession)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "navbar z-50 fixed uppercase mix-blend-difference font-ibm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-start",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: " uppercase text-whyte font-normal ",
                    children: "Gengar Store"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex navbar-center gap-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/category/men",
                        children: "Men"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/category/women",
                        children: "women"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/category/shoes",
                        children: "Shoes"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "navbar-end mx-4 lg:mr-5",
                children: [
                    session.status === "authenticated" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        className: "bg-white flex gap-2 items-center rounded-full text-black",
                        href: "/login",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: session.data.user.image,
                                className: "rounded-full w-10 h-10 p-2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-3",
                                children: session.data.user.name.split(" ")[0]
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/login",
                        children: "Login"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/cart",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn btn-ghost btn-circle",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "indicator",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsBag, {
                                        className: "h-5 w-5"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "badge badge-xs badge-primary py-2 indicator-item",
                                        children: products.length
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./redux/store.js


const store = (0,toolkit_.configureStore)({
    reducer: {
        cart: cartSlice/* default */.ZP
    }
});
/* harmony default export */ const redux_store = (store);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Footer.jsx



function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full border-t h-fit mt-20",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-10/12 my-20 mx-auto flex justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col md:flex-row gap-16",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex font-extralight flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "font-semibold uppercase",
                                        children: "About"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: "Company"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: "Careers"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: "Services"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: "Help"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex font-extralight flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "font-semibold uppercase",
                                        children: "Gengars collection"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: "Sale of the day"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/category/men",
                                        children: "Mens Collection"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/category/women",
                                        children: "Womens Collection"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/category/shoes",
                                        children: "Shoes Collection"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex font-extralight flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "font-semibold uppercase",
                                        children: "Contact"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: "contactus@gengar.in"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: "address"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex uppercase font-extralight flex-col gap-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "Instagram"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "Whatsapp"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "Youtube"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-bblue p-3 text-sm text-wwhite w-full ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-11/12 mx-auto flex justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Copyright @copy 2023. All rights reserved."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "Terms & Conditions"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "Privacy Policy"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.jsx








function MyApp({ Component , pageProps: { session , ...pageProps }  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
            store: redux_store,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
                    color: "#111111",
                    startPosition: 0.3,
                    stopDelayMs: 200,
                    height: 2,
                    options: {
                        easing: "ease",
                        speed: 500,
                        showSpinner: false
                    },
                    showOnShallow: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " font-ibm pt-[4rem] z-0 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,255], () => (__webpack_exec__(8078)));
module.exports = __webpack_exports__;

})();