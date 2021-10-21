import '../../Navbar/Cart/cartWidget.css';
import React from 'react'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

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
        </div>
    )
}
