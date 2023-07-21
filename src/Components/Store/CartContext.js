import React from 'react'

const CartContext = React.createContext(
    {
        cartItems: [],
        totalPrice: 0,

    }
)

export default CartContext;