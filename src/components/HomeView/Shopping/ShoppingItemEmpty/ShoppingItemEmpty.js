import React from 'react'
import { Link } from 'react-router-dom'

export const ShoppingItemEmpty = () => {

    return (
        <div className="shoppingCartEmpty"> 
            <h3>No tienes productos en tu carrito.</h3>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={"/tienda-lol-reactJs"}> <button>Comprar Productos</button> </Link>
        </div>
    )
}
