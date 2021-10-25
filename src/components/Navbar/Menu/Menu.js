import '../../Navbar/Menu/menu.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = () => {

    return (
        <>
            <nav className="navbar">
                <NavLink activeStyle={{color: "#EBA272", textDecoration: "overline 2px solid #EBA272"}} exact to="/tienda-lol-reactJs">Inicio</NavLink>
                <NavLink activeStyle={{color: "#EBA272", textDecoration: "overline 2px solid #EBA272"}} exact to="/productos/Figuras">Figuras</NavLink>
                <NavLink activeStyle={{color: "#EBA272", textDecoration: "overline 2px solid #EBA272"}} exact to="/productos/Remeras">Remeras</NavLink>
                <NavLink activeStyle={{color: "#EBA272", textDecoration: "overline 2px solid #EBA272"}} exact to="/productos/Camperas">Camperas</NavLink>
                <NavLink activeStyle={{color: "#EBA272", textDecoration: "overline 2px solid #EBA272"}} exact to="/contacto">Contacto</NavLink>
            </nav>
        </>
    )
}