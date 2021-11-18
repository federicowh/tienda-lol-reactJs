import React, { useState } from 'react'
import { getFirestore } from '../../../../firebase/FirebaseConfig'
import Swal from 'sweetalert2'
import firebase from 'firebase'
import 'firebase/firestore'

export const ContactForm = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.name.length === 0 ) {
            Swal.fire({
                icon: 'error',
                title: 'No has ingresado ningún nombre',
                text: 'Para continuar debes ingresar tu nombre.'
            })

            return
        } else if (values.name.length < 3) {
            Swal.fire({
                icon: 'error',
                title: 'El nombre es incorrecto',
                text: 'Asegúrese de que el nombre ingresado tenga más de 3 caracteres.'
            })

            return
        }

        if (values.email.length === 0 ) {
            Swal.fire({
                icon: 'error',
                title: 'No has ingresado ningún email',
                text: 'Para continuar debes ingresar tu email.'
            })

            return
        } else if (values.email.length < 3) {
            Swal.fire({
                icon: 'error',
                title: 'El email es incorrecto',
                text: 'Asegúrese de que el email ingresado tenga más de 3 caracteres.'
            })

            return
        }

        if (values.message.length === 0 ) {
            Swal.fire({
                icon: 'error',
                title: 'No hay mensaje en el campo de texto.',
                text: 'Para enviar debes dejar un comentario.'
            })

            return
        } else if (values.message.length < 3) {
            Swal.fire({
                icon: 'error',
                title: '¡Comenta un poco más!',
                text: 'Asegúrese de haber ingresado al menos 5 caracteres en el mensaje.'
            })

            return
        }


        const db = getFirestore()
        db.collection('comments').doc().set({
            Nombre: values.name,
            Email: values.email,
            Mensaje: values.message,
            Fecha: firebase.firestore.Timestamp.fromDate(new Date())
        }).then(() => {
            Swal.fire({
                icon: 'success',
                title: '¡Su mensaje ha sido enviado con éxito!',
                text: 'Pronto estaremos respondiendo al email enviado.',
            })
        })
    }

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <h3 className="title">Dejanos un mensaje</h3>

                <div className="input-container">
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

                <div className="input-container">
                    <input 
                        type="email" 
                        name="email"
                        className="input" 
                        placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange} 
                    />
                    {values.email.length === 0 && <small>¡Este campo es obligatorio!</small>}
                </div>

                <div className="input-container textarea">
                    <textarea 
                        name="message"
                        className="input" 
                        placeholder="Tu mensaje..."
                        value={values.message}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                <button type="submit" className="btn">Enviar</button>
            </form>
        </div>
    )
}
