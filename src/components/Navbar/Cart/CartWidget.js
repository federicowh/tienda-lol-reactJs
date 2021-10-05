import '../../Navbar/Cart/cartWidget.css';
import React from 'react'

export const CartWidget = () => {

    return (
        <div className="cartWidget">
            <box-icon
                type='solid' 
                name='cart'
                size='md'
                animation='tada-hover'
            ></box-icon>
        </div>
    )
}
