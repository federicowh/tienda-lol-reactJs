import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState(init)
    console.log(cart)

    const addToCart = (item) => {
        setCart( [ ...cart, item ] )
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter( (prod) => prod.id !== itemId )
        setCart( newCart )
    }

    const deleteAll = () => {
        setCart([])
    }

    const cartItemQuantity = () => {
        return cart.reduce( ( acc, prod ) => acc + prod.quantity, 0 )
    }

    useEffect( () => {
        localStorage.setItem( 'cart', JSON.stringify(cart) )
    }, [cart])


    return(

        <CartContext.Provider value={ { 
            cart, 
            addToCart, 
            removeItem, 
            deleteAll, 
            cartItemQuantity 
            }}>

            {children}
        </CartContext.Provider>

    )
}