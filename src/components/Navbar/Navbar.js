import './navbar.css';
import React from 'react';
import { CartWidget } from './CartWidget';
import ItemListContainer from './ItemListContainer';

export const Navbar = ( props ) => {

    const {title, subTitle} = props;

    return (

        <>
        <div className="bienvenida">
            <h1 className="bienvenida-tituloPrincipal">{title}</h1>
            <p className="bienvenida-parrafoPrincipal">{subTitle}</p>
        </div>

        <CartWidget />

        <ItemListContainer />
        </>

    )
}