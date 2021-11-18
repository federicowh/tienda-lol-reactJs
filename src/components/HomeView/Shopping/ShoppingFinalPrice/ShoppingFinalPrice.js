import React, { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { Link } from 'react-router-dom'

export const ShoppingFinalPrice = () => {
    const { emptyCart, cartFinalPrice } = useContext(CartContext)

    return (
        <>
            <div className="shoppingFinalPrice">
                <h2>Precio Total: ${cartFinalPrice()}</h2>
                <Link style={{ textDecoration: 'none', color: 'white' }} to={"/checkout"}><button className="buyNow">Finalizar compra</button></Link>
            </div>

            <div className="shoppingCartButtons">
                <div>
                <button onClick={emptyCart}>Vaciar Carrito</button>

                <Link style={{ textDecoration: 'none', color: 'white' }} to={"/tienda-lol-reactJs"}><button className="buyNow">Seguir comprando</button></Link>
                </div>
            </div>
        </>
    )
}
