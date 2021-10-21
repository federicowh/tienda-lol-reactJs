import '../../Navbar/Cart/cartWidget.css';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

export const CartWidget = () => {

    const { cartItemQuantity } = useContext(CartContext)

    return (
        <div className="cartWidget">
            <Link to="/cart">
                <i>
                    <box-icon
                        type='solid' 
                        name='cart'
                        size='md'
                        animation='tada-hover'
                        style={{cursor: "pointer",}}
                    ></box-icon>
                </i>
            </Link>
            <span className="itemQuantity">{cartItemQuantity()}</span>
        </div>
    )
}
