import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../../context/CartContext'
import { getFirestore } from '../../../firebase/FirebaseConfig'
import firebase from 'firebase'
import 'firebase/firestore'
import './checkout.css'

export const Checkout = () => {

    const { cart, cartFinalPrice, deleteAll } = useContext(CartContext)

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
            alert('Nombre inválido')
            return
        }

        if (values.surname.length < 3 ) {
            alert('Apellido inválido')
            return
        }

        if (values.email.length < 3 ) {
            alert('Email inválido')
            return
        }

        if (values.tel.length < 7 ) {
            alert('Teléfono inválido')
            return
        }

        const order = {
            buyer: {
                ...values
            },
            items: cart.map((prus) => ({id: prus.id, price: prus.price, name: prus.name, quantity: prus.quantity})),
            total: cartFinalPrice(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const db = getFirestore()
        const orders = db.collection('orders')

        orders.add(order)
            .then((res) => {
                console.log(res.id)
                deleteAll()
            })

    }

    return (
        <>
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
                        {values.name.length === 0 && <small>Este campo es obligatorio.</small>}
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
                        {values.surname.length === 0 && <small>Este campo es obligatorio.</small>}
                    </div>

                    <div className="checkoutInputContainer">
                        <input type="email" 
                            name="email" 
                            className="input" 
                            placeholder="Email"
                            value={values.email}
                            onChange={handleInputChange} 
                        />
                        {values.email.length === 0 && <small>Este campo es obligatorio.</small>}
                    </div>

                    <div className="checkoutInputContainer">
                        <input type="tel" 
                            name="tel" 
                            className="input" 
                            placeholder="Teléfono"
                            value={values.tel}
                            onChange={handleInputChange} 
                        />
                        {values.tel.length === 0 && <small>Este campo es obligatorio.</small>}
                    </div>

                    <button className="checkoutBtn" type="submit">Finalizar tu compra</button>
                </form>
            </div>
        </>
    )
}

