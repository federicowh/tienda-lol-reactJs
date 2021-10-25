import '../../Navbar/Cart/cartWidget.css';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { UserAuthContext } from '../../../context/UserAuthContext'

export const CartWidget = () => {

    const { isAuthenticated, setIsAuthenticated } = useContext(UserAuthContext)
    const handleSubmit = () => {
        setIsAuthenticated(false)
    }

    const { cartItemQuantity } = useContext(CartContext)

    return (
        <div className="cartWidget">

            { isAuthenticated 
                ?
                <box-icon onClick={handleSubmit}
                    name='log-out-circle' 
                    size='md'
                    animation='tada-hover'
                    style={{cursor: "pointer", marginRight: "50px",}}
                ></box-icon>

                : 
                <box-icon 
                    name='user-circle'
                    size='md'
                    animation='tada-hover'
                    style={{cursor: "pointer", marginRight: "50px",}}
                ></box-icon>
            }

            <Link to="/cart">
                <box-icon
                    type='solid' 
                    name='cart'
                    size='md'
                    animation='tada-hover'
                    style={{cursor: "pointer",}}
                ></box-icon>
            </Link>
            <span className="itemQuantity">{cartItemQuantity()}</span>
        </div>
    )
}
