import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState(init)

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

    const cartFinalPrice = () => {
        return cart.reduce( (acc, prod) => acc + prod.quantity * prod.price, 0)
    }

    const isInCart = (itemId) => {
        return cart.some( (prod) => prod.id === itemId )
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
            cartItemQuantity,
            cartFinalPrice,
            isInCart
            }}>

            {children}
        </CartContext.Provider>

    )
}