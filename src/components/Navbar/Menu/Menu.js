import '../../Navbar/Menu/menu.css';
import React from 'react'
import { nothingToDo } from '../../../functions/nothingToDo'

export const Menu = () => {

    return (
        <>
            <nav className="navbar">
                <p className="navbar-element" onClick={nothingToDo}>Figuras</p>
                <p className="navbar-element" onClick={nothingToDo}>Indumentaria</p>
                <p className="navbar-element" onClick={nothingToDo}>Accesorios</p>
                <p className="navbar-element" onClick={nothingToDo}>Otros</p>
            </nav>
        </>
    )
}