import React from 'react';
import { Link } from 'react-router-dom'
import { Welcome } from '../Navbar/Welcome/Welcome';
import { CartWidget } from '../Navbar/Cart/CartWidget';
import { Menu } from '../Navbar/Menu/Menu';

export const Navbar = () => {

    const title = 'Bienvenido a la Tienda';
    const subTitle = 'Aquí podrás encontrar productos del videojuego League of Legends';

    return (

        <>
        <Welcome title={title} subTitle={subTitle} />

        <Link to="/cart"> <CartWidget /> </Link>

        <Menu />
        </>
    )
}