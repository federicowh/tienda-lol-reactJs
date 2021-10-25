import React, { useContext } from 'react'
import { UserAuthContext } from '../../context/UserAuthContext'
import '../UserAuthenticate/userAuthenticate.css'

export const UserAuthenticate = () => {

    const { setIsAuthenticated } = useContext(UserAuthContext)

    const handleSubmit = () => {
        setIsAuthenticated(true)
    }

    return (
        <>
            <div className="logInContainer">
                <div className="logInContainerLeft">
                    <form>
                        <h1>¡Ingresa con tu usuario!</h1>

                        <div className="social-container">
                            <a href="#">
                                <box-icon type='logo' name='facebook-circle' color="black" size="md"></box-icon>
                            </a>

                            <a href="#">
                                <box-icon name='twitter' type='logo' color="black" size="md"></box-icon>
                            </a>

                            <a href="#">
                                <box-icon name='instagram' type='logo' color="black" size="md"></box-icon>
                            </a>

                            <a href="#">
                                <box-icon name='linkedin' type='logo' color="black" size="md"></box-icon>
                            </a>
                        </div>

                        <p>o usa tu cuenta</p>

                        <input type="name" placeholder="Usuario" />
                        <input type="password" placeholder="Contraseña" />

                        <span onClick={handleSubmit}>Login</span>
                    </form>
                </div>

                <div className="logInContainerRight">
                    <h1>¿No tienes cuenta?</h1>
                    <p>Ingresa tus datos personales para crear la tuya.</p>
                    <span onClick={handleSubmit}>Registrate</span>
                </div>
            </div>
        </>
    )
}
