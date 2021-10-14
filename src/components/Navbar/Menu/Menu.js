import '../../Navbar/Menu/menu.css'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Menu = () => {

    return (
        <>
            <nav className="navbar">
                <NavLink activeClassName={'activeLink'} exact to="/tienda-lol-reactJs">Inicio</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/productos/figuras1">Figuras 1</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/productos/figuras2">Figuras 2</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/contacto">Contacto</NavLink>
            </nav>
        </>
    )
}