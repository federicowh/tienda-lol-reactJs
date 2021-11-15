import React, { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'

export const ShoppingItemList = () => {
    const { cart, removeItem } = useContext(CartContext)

    return (
        cart.map( (prod) => (
            <div key={prod.id} className="itemCartFinal">
                <img src={prod.img} alt={prod.name} />
                <h3>{prod.name}</h3>
                <p>Cantidad: {prod.quantity} </p>
                <p>Precio: ${prod.price * prod.quantity} </p>
                <span onClick={ () => removeItem(prod.id) }>Quitar Producto</span>
            </div>
        ))
    )
}
