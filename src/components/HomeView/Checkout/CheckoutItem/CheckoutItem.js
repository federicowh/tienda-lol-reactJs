import React, { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import './checkoutItem.css'

export const CheckoutItem = () => {

    const { cart } = useContext(CartContext)

    return (
        <div className="checkoutItemContainer">
            {
                cart.map( (prod) => (
                    <div key={prod.id} className="checkoutItem">
                        <p>x {prod.quantity} </p>
                        <img src={prod.img} alt={prod.name} />
                        <h4>{prod.name}</h4>
                    </div>
                ))
            }
        </div>
    )
}
