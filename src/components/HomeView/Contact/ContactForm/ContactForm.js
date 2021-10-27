import React, { useState } from 'react'

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
                    {values.name.length === 0 && <small>Este campo es obligatorio.</small>}
                </div>

                <div className="input-container">
                    <input type="email" 
                        name="email" 
                        className="input" 
                        placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange} 
                    />
                    {values.email.length === 0 && <small>Este campo es obligatorio.</small>}
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

                <input type="submit" value="Enviar" className="btn" />
            </form>
        </div>
    )
}
