"use strict";
exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 9255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IH": () => (/* binding */ add),
/* harmony export */   "LL": () => (/* binding */ clearCart),
/* harmony export */   "Od": () => (/* binding */ remove),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        add (state, action) {
            const itemIndex = state.cartItems.findIndex((item)=>item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = {
                    ...action.payload,
                    cartQuantity: 1
                };
                state.cartItems.push(tempProduct);
            }
        },
        remove (state, action) {
            const nextCartItems = state.cartItems.filter((cartItem)=>cartItem._id !== action.payload._id);
            state.cartItems = nextCartItems;
        },
        clearCart: (state)=>{
            state.cartItems = [];
        }
    }
});
const { add , remove , clearCart  } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ })

};
;