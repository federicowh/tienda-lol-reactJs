import React from 'react';

export const Encabezado = ( props ) => {

    console.log(props);

    return (
        <div className="encabezado">
            <h1 className="encabezado-tituloPrincipal">¡Hola! Bienvenido a la Tienda. <box-icon name='happy'></box-icon></h1>
            <p className="encabezado-parrafoPrincipal">Aquí podrás encontrar productos del videojuego League of Legends. <box-icon name='like' ></box-icon></p>
        </div>
    )
}