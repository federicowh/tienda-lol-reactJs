import '../../Navbar/Cart/cartWidget.css';
import React from 'react'
import { nothingToDo } from '../../../functions/nothingToDo'

export const CartWidget = () => {

    return (
        <div className="cartWidget">
            <i onClick={nothingToDo}><box-icon
                type='solid' 
                name='cart'
                size='md'
                animation='tada-hover'
                style={{cursor: "pointer",}}
            ></box-icon></i>
        </div>
    )
}
