import '../../Navbar/Cart/cartWidget.css';
import React from 'react'

export const CartWidget = () => {

    return (
        <div className="cartWidget">
            <i><box-icon
                type='solid' 
                name='cart'
                size='md'
                animation='tada-hover'
                style={{cursor: "pointer",}}
            ></box-icon></i>
        </div>
    )
}
