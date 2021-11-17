import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../../context/UserAuthContext'
import Swal from 'sweetalert2'
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

        if (values.user.length === 0 ) {
            Swal.fire({
                icon: 'error',
                title: 'No has ingresado ningún usuario',
                text: 'Para continuar debes ingresar tu usuario.'
            })

            setIsAuthenticated(false)
            return
        } else if (values.user.length < 3) {
            Swal.fire({
                icon: 'error',
                title: 'El usuario es incorrecto',
                text: 'Asegúrese de que el usuario ingresado tenga más de 3 caracteres.'
            })

            setIsAuthenticated(false)
            return
        }

        if (values.password.length === 0 ) {
            Swal.fire({
                icon: 'error',
                title: 'No has ingresado ninguna contraseña',
                text: 'Para continuar debes ingresar tu contraseña.'
            })

            setIsAuthenticated(false)
            return
        } else if (values.password.length < 3) {
            Swal.fire({
                icon: 'error',
                title: 'La contraseña es incorrecta',
                text: 'Asegúrese de que la contraseña ingresada tenga más de 3 caracteres.'
            })

            setIsAuthenticated(false)
            return
        }
    }

    const handleSubmitFast = (e) => {
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
                            <div><box-icon type='logo' name='facebook-circle' color="black" size="md" animation="tada-hover"></box-icon></div>
                            <div><box-icon type='logo' name='twitter' color="black" size="md" animation="tada-hover"></box-icon></div>
                            <div><box-icon type='logo' name='instagram' color="black" size="md" animation="tada-hover"></box-icon></div>
                            <div><box-icon type='logo' name='linkedin' color="black" size="md" animation="tada-hover"></box-icon></div>
                        </div>

                        <p>o usa tu cuenta</p>

                        <div className="inputsLeftContainer">
                            <input 
                                type="text"
                                name="user"
                                placeholder="Usuario" 
                                value={values.user}
                                onChange={handleInputChange}
                            /> {values.user.length === 0 && <small>¡Este campo es obligatorio!</small>}
                        </div>

                        <div className="inputsLeftContainer">
                            <input 
                                type="password"
                                name="password"
                                placeholder="Contraseña" 
                                value={values.password}
                                onChange={handleInputChange}
                            /> {values.password.length === 0 && <small>¡Este campo es obligatorio!</small>}
                        </div>

                        <button type="submit">Login</button>
                    </form>
                </div>

                <div className="logInContainerRight">
                    <h1>¿No tienes cuenta?</h1>
                    <p>Puedes ingresar de forma rápida y sin restricciones usando esta opción.</p>
                    <button onClick={handleSubmitFast}>Ir a la Tienda</button>
                </div>
            </div>
        </>
    )
}
