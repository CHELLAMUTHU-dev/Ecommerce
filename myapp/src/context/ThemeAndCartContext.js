import React from "react"


const ThemeAndCartContext  = React.createContext({
    isDarkTheme : false,
    setTheme: () => {},
    cartList : [],
    addCartList : () => {},
    removeCartItem: () =>{},
    incrementCartQuantity: () => {},
    decrementCartQuantity: () => {},
    removeAllCartItem: () => {}
})

export default ThemeAndCartContext