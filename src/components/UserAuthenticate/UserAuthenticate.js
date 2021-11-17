import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../../context/UserAuthContext'
import '../UserAuthenticate/userAuthenticate.css'

export const UserAuthenticate = () => {

    const { setIsAuthenticated } = useContext(UserAuthContext)

    const [values, setValues] = useState({
        user: '',
        password: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsAuthenticated(true)
    }

    return (
        <>
            <div className="logInContainer">
                <div className="logInContainerLeft">
                    <form onSubmit={handleSubmit}>
                        <h1>¡Ingresa con tu usuario!</h1>

                        <div className="social-container">
                            <box-icon type='logo' name='facebook-circle' color="black" size="md" animation="tada-hover"></box-icon> 
                            <box-icon type='logo' name='twitter' color="black" size="md" animation="tada-hover"></box-icon> 
                            <box-icon type='logo' name='instagram' color="black" size="md" animation="tada-hover"></box-icon> 
                            <box-icon type='logo' name='linkedin' color="black" size="md" animation="tada-hover"></box-icon>
                        </div>

                        <p>o usa tu cuenta</p>

                        <div className="inputsLeftContainer">
                            <input 
                                type="text"
                                name="user"
                                placeholder="Usuario" 
                                value={values.user}
                                onChange={handleInputChange}
                            /> {values.user.length === 0 && <small>Este campo es obligatorio.</small>}
                        </div>

                        <div className="inputsLeftContainer">
                            <input 
                                type="text"
                                name="password"
                                placeholder="Contraseña" 
                                value={values.password}
                                onChange={handleInputChange}
                            /> {values.password.length === 0 && <small>Este campo es obligatorio.</small>}
                        </div>

                        <button type="submit">Login</button>
                    </form>
                </div>

                <div className="logInContainerRight">
                    <h1>¿No tienes cuenta?</h1>
                    <p>Ingresa tus datos personales para crear la tuya.</p>
                    <button onClick={handleSubmit}>Registrate</button>
                </div>
            </div>
        </>
    )
}
