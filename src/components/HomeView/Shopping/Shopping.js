import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import { Clock } from '../Clock/Clock'
import '../Shopping/shopping.css'

export const Shopping = () => {
    const { cart, deleteAll, removeItem, cartFinalPrice } = useContext(CartContext)

    return (
        <>
            <Clock />

            <div className="shoppingCart">

                {
                    cart.length === 0
                    ?   <div className="shoppingCartEmpty"> 
                            <h3>No tienes productos en tu carrito.</h3>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={"/tienda-lol-reactJs"}> <span>Comprar Productos</span> </Link>
                        </div>

                    :   <>
                        <h2>Resumen de compra</h2>

                        {
                            cart.map( (prod) => (
                                <div className="itemCartFinal">
                                    <img src={prod.img} alt={prod.name} />
                                    <h3>{prod.name}</h3>
                                    <p>Cantidad: {prod.quantity} </p>
                                    <p>Precio: ${prod.price * prod.quantity} </p>
                                    <span onClick={ () => removeItem(prod.id) }>Quitar Producto</span>
                                </div>
                            ))
                        }

                        <h2>Precio Total: ${cartFinalPrice()}</h2>

                        <div className="shoppingCartButtons">
                            <span onClick={deleteAll}>Vaciar Carrito</span>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={"/tienda-lol-reactJs"}><span className="buyNow">Seguir comprando</span></Link>
                        </div>
                        </>
                }
            </div>
        </>
    )
}