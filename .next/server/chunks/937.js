"use strict";
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 2984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nuka_carousel_lib_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(786);
/* harmony import */ var nuka_carousel_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nuka_carousel_lib_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__);



function CarousalProducts({ products  }) {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(_Fragment, {
            children: /*#__PURE__*/ _jsx("div", {
                className: "lg:w-11/12 w-full mx-auto ",
                children: /*#__PURE__*/ _jsx(Carousel, {
                    wrapAround: true,
                    defaultControlsConfig: {
                        pagingDotsStyle: {
                            fill: "none"
                        }
                    },
                    renderCenterLeftControls: ({ previousSlide  })=>/*#__PURE__*/ _jsxs("button", {
                            onClick: ()=>previousSlide(),
                            className: "btn btn-circle btn-ghost text-white hover:bg-transparent hover:text-black duration-300 m-2",
                            children: [
                                " ",
                                /*#__PURE__*/ _jsx(BiLeftArrow, {
                                    className: "w-5 h-5 mx-auto"
                                })
                            ]
                        }),
                    renderCenterRightControls: ({ nextSlide  })=>/*#__PURE__*/ _jsx("button", {
                            onClick: ()=>nextSlide(),
                            className: "btn btn-circle btn-ghost text-white hover:bg-transparent hover:text-black duration-300 m-2",
                            children: /*#__PURE__*/ _jsx(BiRightArrow, {
                                className: "w-5 h-5 mx-auto"
                            })
                        }),
                    children: products.map((e)=>/*#__PURE__*/ _jsx("div", {
                            className: "carousel-item aspect-video w-full flex lg:h-[400px] -z-100 bg-cover bg-center ",
                            style: {
                                backgroundImage: `url(${e.image})`
                            },
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "flex flex-col-reverse h-full w-full bg-gradient-to-t from-black/60 to-black/20 bottom-0",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: " top-0 flex pb-5 px-4 text-accent text-2xl font-ibm uppercase lg:text-3xl ",
                                    children: [
                                        " ",
                                        e.title
                                    ]
                                })
                            })
                        }, e.id))
                })
            })
        })
    });
}


/***/ }),

/***/ 171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_cartSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9255);





function Product({ e  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const handleAdd = (product)=>{
        dispatch((0,_redux_cartSlice__WEBPACK_IMPORTED_MODULE_4__/* .add */ .IH)(product));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col pb-2 hover:scale-[95%] ease-linear h border-primary font-light mx-auto font-ibm duration-200",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/${e._id}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " absolute flex flex-auto place-content-end text-black p-2 place-self-end ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiHeart, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    width: 300,
                    height: 300,
                    src: e.image,
                    alt: "",
                    className: "pb-2 "
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " text-sm lg:text-xl flex px-1 mt-2 line-clamp-1 w-11/12 capitalize ",
                    children: e.title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " px-1 my-2 text-sm font-light text-secondary ",
                    children: [
                        "₹",
                        e.price
                    ]
                })
            ]
        })
    }, e.id);
}


/***/ }),

/***/ 2036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(171);


function ProductRow({ data , title  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "font-ibm text-5xl uppercase py-2 w-11/12 mx-auto my-10 flex ",
                children: [
                    "Shop  ",
                    title
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " mx-auto grid w-11/12 gap-[3px] grid-cols-2 lg:grid-cols-4",
                children: data.map((e)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        e: e
                    }, e.id))
            })
        ]
    });
}


/***/ })

};
;