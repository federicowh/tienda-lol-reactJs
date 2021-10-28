import React, { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { Link } from 'react-router-dom'

export const ShoppingFinalPrice = () => {
    const { deleteAll, cartFinalPrice } = useContext(CartContext)

    return (
        <>
            <h2>Precio Total: ${cartFinalPrice()}</h2>

            <div className="shoppingCartButtons">

                <span onClick={deleteAll}>Vaciar Carrito</span>

                <Link style={{ textDecoration: 'none', color: 'white' }} to={"/tienda-lol-reactJs"}><span className="buyNow">Seguir comprando</span></Link>

            </div>
        </>
    )
}
