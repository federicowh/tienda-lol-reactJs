import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserAuthContext } from '../../../context/UserAuthContext';
import '../../Navbar/Menu/menu.css'

export const Menu = () => {

    const { isAuthenticated } = useContext(UserAuthContext)

    const styles = {
        menuNotActive: isAuthenticated ? {color: "#EBA272", textDecoration: "overline 2px solid #EBA272"} : {color: "black", textDecoration: "none"}
    }

    return (
        <>
            <nav className={isAuthenticated ? "navbar" : "navbarNotAllowed"}>
                <NavLink activeStyle={ styles.menuNotActive } exact to="/tienda-lol-reactJs">Inicio</NavLink>
                <NavLink activeStyle={ styles.menuNotActive } exact to="/productos/Figuras">Figuras</NavLink>
                <NavLink activeStyle={ styles.menuNotActive } exact to="/productos/Remeras">Remeras</NavLink>
                <NavLink activeStyle={ styles.menuNotActive } exact to="/productos/Camperas">Camperas</NavLink>
                <NavLink activeStyle={ styles.menuNotActive } exact to="/contacto">Contacto</NavLink>
            </nav>
        </>
    )
}