import '../../Navbar/Menu/menu.css';
import React from 'react'

export const Menu = () => {

    const noHagoNada = () => {
        alert('Aún no cumplo ninguna función. Lo siento :(')
    };

    return (
        <>
            <nav className="navbar">
                <p className="navbar-element" onClick={noHagoNada}>Figuras</p>
                <p className="navbar-element" onClick={noHagoNada}>Indumentaria</p>
                <p className="navbar-element" onClick={noHagoNada}>Accesorios</p>
                <p className="navbar-element" onClick={noHagoNada}>Otros</p>
            </nav>
        </>
    )
}