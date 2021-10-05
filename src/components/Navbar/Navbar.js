import './navbar.css';
import React from 'react';
import { Welcome } from '../Navbar/Welcome/Welcome';
import { CartWidget } from '../Navbar/Cart/CartWidget';
import { Menu } from '../Navbar/Menu/Menu';

export const Navbar = () => {

    const title = 'Bienvenido a la Tienda';
    const subTitle = 'Aquí podrás encontrar productos del videojuego League of Legends';

    return (

        <>
        <Welcome title={title} subTitle={subTitle} />

        <CartWidget />

        <Menu />
        </>
    )
}