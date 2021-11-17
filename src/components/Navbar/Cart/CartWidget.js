import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { UserAuthContext } from '../../../context/UserAuthContext'
import Swal from 'sweetalert2'
import '../../Navbar/Cart/cartWidget.css';

export const CartWidget = () => {

    const { isAuthenticated, setIsAuthenticated } = useContext(UserAuthContext)
    const handleSubmit = () => {
        setIsAuthenticated(false)
    }

    const pleaseLogIn = () => {
        Swal.fire({
            icon: 'error',
            title: '¡No puedes entrar aquí!',
            text: 'Porfavor, debes completar los datos para entrar con un usuario.'
        })
    }

    const { cartItemQuantity } = useContext(CartContext)

    return (
        <div className="cartWidget">

            { isAuthenticated 
                ?
                <>
                    <box-icon onClick={handleSubmit}
                        name='log-out-circle' 
                        size='md'
                        animation='tada-hover'
                        style={{cursor: "pointer", marginRight: "50px",}}
                    ></box-icon>
                    
                    <Link to="/cart">
                        <box-icon
                            type='solid' 
                            name='cart'
                            size='md'
                            animation='tada-hover'
                            style={{
                                cursor: "pointer",
                                display: cartItemQuantity() === 0 ? "none" : "block"
                            }}
                        ></box-icon>
                    </Link>

                    <span className="itemQuantity"
                        style={{display: cartItemQuantity() === 0 ? "none" : "block"}}
                    >
                        {cartItemQuantity()}
                    </span>
                </>

                : 
                    <box-icon onClick={pleaseLogIn}
                        name='user-circle'
                        size='md'
                        animation='tada-hover'
                        style={{cursor: "pointer", marginRight: "50px"}}
                    ></box-icon>
            }
        </div>
    )
}
