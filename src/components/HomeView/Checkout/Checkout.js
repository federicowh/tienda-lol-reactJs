import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router'
import { CartContext } from '../../../context/CartContext'
import { UIContext } from '../../../context/UIContext'
import { Loader } from '../../../utilities/Loader/Loader'
import { FirebaseOrder } from '../../../firebase/FirebaseOrder'
import Swal from 'sweetalert2'
import './checkout.css'


export const Checkout = () => {

    const { loading, setLoading } = useContext(UIContext)
    const { cart, cartFinalPrice, deleteAll } = useContext(CartContext)

    const { push } = useHistory()

    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        tel: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.name.length < 3 ) {
            Swal.fire({
                icon: 'error',
                title: 'El nombre es inválido',
                text: 'El nombre ingresado debe tener más de 3 carácteres.'
            })
            return
        }

        if (values.surname.length < 3 ) {
            Swal.fire({
                icon: 'error',
                title: 'El apellido es inválido',
                text: 'El apellido ingresado debe tener más de 3 carácteres.'
            })
            return
        }

        if (values.email.length < 3 ) {
            Swal.fire({
                icon: 'error',
                title: 'El email ingresado es incorrecto',
                text: 'El email ingresado debe tener más de 3 carácteres.'
            })
            return
        }

        if (values.tel.length < 7 ) {
            Swal.fire({
                icon: 'error',
                title: 'El teléfono ingresado no es correcto',
                text: 'Asegúrese que el número ingresado contenga 8 números al menos'
            })
            return
        }

        setLoading(true)
        FirebaseOrder(values, cart, cartFinalPrice())
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: '¡Su compra fue registrada con éxito!',
                    text: `Anote su número de orden: ${res.id}`,
                    willClose: () => {
                        deleteAll()
                    }
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Productos sin stock',
                    text: `No hay stock de: ${err.map(prus => prus.name).join(', ')}`
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            {
                loading
                    ? <Loader />
                    : <>
                        {cart.length === 0 && <Redirect to="/tienda-lol-reactJs"/>}

                        <div className="checkoutContainer">
                            <form onSubmit={handleSubmit}>
                                <h3>Completa tus datos</h3>

                                <div className="checkoutInputContainer">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className="input" 
                                        placeholder="Nombre" 
                                        value={values.name}
                                        onChange={handleInputChange}
                                    />
                                    {values.name.length === 0 && <small>¡Este campo es obligatorio!</small>}
                                </div>

                                <div className="checkoutInputContainer">
                                    <input 
                                        type="text" 
                                        name="surname" 
                                        className="input" 
                                        placeholder="Apellido" 
                                        value={values.surname}
                                        onChange={handleInputChange}
                                    />
                                    {values.surname.length === 0 && <small>¡Este campo es obligatorio!</small>}
                                </div>

                                <div className="checkoutInputContainer">
                                    <input type="email" 
                                        name="email" 
                                        className="input" 
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleInputChange} 
                                    />
                                    {values.email.length === 0 && <small>¡Este campo es obligatorio!</small>}
                                </div>

                                <div className="checkoutInputContainer">
                                    <input 
                                        type="tel" 
                                        name="tel" 
                                        className="input" 
                                        placeholder="Teléfono"
                                        value={values.tel}
                                        onChange={handleInputChange} 
                                    />
                                    {values.tel.length === 0 && <small>¡Este campo es obligatorio!</small>}
                                </div>

                                <div className="checkoutBtnContainer">
                                    <button className="checkoutBtn" onClick={ () => push("/cart")}>Cancelar compra</button>
                                    <button className="checkoutBtn" type="submit" disabled={loading}>Finalizar tu compra</button>
                                </div>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}