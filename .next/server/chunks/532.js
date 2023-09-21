exports.id = 532;
exports.ids = [532];
exports.modules = {

/***/ 5966:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 86393:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 57730))

/***/ }),

/***/ 1942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xq: () => (/* binding */ addToCart),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   cl: () => (/* binding */ removeItem)
/* harmony export */ });
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80468);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);


const initialState = {
    cartItems: []
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item)=>item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity;
                (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_1__/* .setCartItemsToLocalStorage */ .uC)([
                    ...state.cartItems
                ]);
            } else {
                (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_1__/* .setCartItemsToLocalStorage */ .uC)([
                    ...state.cartItems,
                    newItem
                ]);
                state.cartItems.push(newItem);
            }
        },
        removeItem: (state, action)=>{
            state.cartItems = state.cartItems.filter((cartItems)=>cartItems.id !== action.payload);
        }
    }
});
const { addToCart, removeItem } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ }),

/***/ 37969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hl: () => (/* binding */ fetchProductSuccess),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   aq: () => (/* binding */ fetchProductFailure),
/* harmony export */   vb: () => (/* binding */ fetchProductStart)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
// productSlice.ts

const initialState = {
    product: null,
    loading: false,
    error: null
};
const productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "product",
    initialState,
    reducers: {
        fetchProductStart: (state)=>{
            state.loading = true;
            state.error = null;
        },
        fetchProductSuccess: (state, action)=>{
            state.loading = false;
            state.product = action.payload;
        },
        fetchProductFailure: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
});
const { fetchProductStart, fetchProductSuccess, fetchProductFailure } = productSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSlice.reducer);


/***/ }),

/***/ 57730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Providers: () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(91388);
// EXTERNAL MODULE: ./redux/productSlice.ts
var productSlice = __webpack_require__(37969);
// EXTERNAL MODULE: ./redux/cartSlice.ts
var cartSlice = __webpack_require__(1942);
// EXTERNAL MODULE: ./utils/localStorage.ts
var localStorage = __webpack_require__(80468);
;// CONCATENATED MODULE: ./redux/store.ts
// store.ts




const persistedCartItems = (0,localStorage/* getCartItemsFromLocalStorage */.zV)();
const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        product: productSlice/* default */.ZP,
        cart: cartSlice/* default */.ZP
    },
    preloadedState: {
        cart: {
            cartItems: persistedCartItems
        }
    }
});
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./redux/provider.tsx
/* __next_internal_client_entry_do_not_use__ Providers auto */ 



function Providers({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: redux_store,
        children: children
    });
}


/***/ }),

/***/ 80468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LL: () => (/* binding */ clearCart),
/* harmony export */   uC: () => (/* binding */ setCartItemsToLocalStorage),
/* harmony export */   zV: () => (/* binding */ getCartItemsFromLocalStorage)
/* harmony export */ });
/* unused harmony exports isBrowser, nextLocalStorage */
const isBrowser = ()=>{
    return "undefined" !== "undefined";
};
const nextLocalStorage = ()=>{
    if (isBrowser()) {
        return window.localStorage;
    }
};
const getCartItemsFromLocalStorage = ()=>{
    const cartItems = nextLocalStorage()?.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
};
const setCartItemsToLocalStorage = (items)=>{
    nextLocalStorage()?.setItem("cartItems", JSON.stringify(items));
};
const clearCart = ()=>{
    nextLocalStorage()?.setItem("cartItems", JSON.stringify([]));
};


/***/ }),

/***/ 33206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./redux/provider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`E:\TeamX\Next.js\clothshop\redux\provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(67272);
;// CONCATENATED MODULE: ./app/layout.tsx



const metadata = {
    title: "QR Scanner",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;