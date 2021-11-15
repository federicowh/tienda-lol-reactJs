import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../../context/CartContext'
import { UIContext } from '../../../context/UIContext'
import { Loader } from '../../../utilities/Loader/Loader'
import { getFirestore } from '../../../firebase/FirebaseConfig'
import firebase from 'firebase'
import 'firebase/firestore'
import Swal from 'sweetalert2'
import './checkout.css'

export const Checkout = () => {

    const { loading, setLoading } = useContext(UIContext)
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

    const handleSubmit = async (e) => {
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
        const itemsToUpdate = db.collection('products')
            .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(prus => prus.id));

        const query = await itemsToUpdate.get()
        const batch = db.batch()

        const outOfStock = []

        query.docs.forEach((doc) => {
            const itemInCart = cart.find(prod => prod.id === doc.id)

            if (doc.data().stock >= itemInCart.quantity) {
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.quantity})
            } else {
                outOfStock.push({...doc.data(), id: doc.id})
            }
        })

        if (outOfStock.length === 0) {
            setLoading(true)
            orders.add(order)
                .then((res) => {
                    batch.commit()

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
                        title: '¡Algo salió mal!',
                        text: 'No se ha podido finalizar la compra.',
                    })
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Producto sin stock',
                text: outOfStock.map(prus => prus.name).join(', ')
            })
        }
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

                                <button className="checkoutBtn" type="submit" disabled={loading}>Finalizar tu compra</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

