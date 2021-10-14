import '../../Navbar/Menu/menu.css'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Menu = () => {

    return (
        <>
            <nav className="navbar">
                <NavLink activeClassName={'activeLink'} exact to="/tienda-lol-reactJs">Inicio</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/productos/Figuras">Figuras</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/productos/Remeras">Remeras</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/productos/Camperas">Camperas</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/contacto">Contacto</NavLink>
            </nav>
        </>
    )
}