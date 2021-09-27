import React from 'react';

export const Navbar = ( props ) => {

    console.log(props);

    return (

        <>
        <div className="bienvenida">
            <h1 className="bienvenida-tituloPrincipal">¡Hola! Bienvenido a la Tienda</h1>
            <p className="bienvenida-parrafoPrincipal">Aquí podrás encontrar productos del videojuego League of Legends</p>
        </div>

        <nav className="navbar">
            <p className="navbar-element">Figuras</p>
            <p className="navbar-element">Indumentaria</p>
            <p className="navbar-element">Accesorios</p>
            <p className="navbar-element">Otros</p>
        </nav>
        </>

    )
}