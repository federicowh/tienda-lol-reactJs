import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import { Clock } from '../Clock/Clock'
import '../Shopping/shopping.css'

export const Shopping = () => {
    const { cart, deleteAll, removeItem } = useContext(CartContext)

    return (
        <>
            <Clock />

            <div className="shoppingCart">
                <h2>Resumen del Carrito</h2>

                {
                    cart.map( (prod) => (
                        <div>
                            <h3>{prod.name}</h3>
                            <p>Cantidad: {prod.quantity} </p>
                            <p>Precio: ${prod.price * prod.quantity} </p>
                            <span onClick={ () => removeItem(prod.id) }>Quitar Producto</span>
                        </div>
                    ))
                }

                <span onClick={deleteAll}>Vaciar Carrito</span>
                <Link style={{ textDecoration: 'none', color: 'white' }} to={"/tienda-lol-reactJs"}><span className="buyNow">Seguir comprando</span></Link>
            </div>
        </>
    )
}