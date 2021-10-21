import React from 'react'
import '../Shopping/shopping.css'
import { Link } from 'react-router-dom'
import { Clock } from '../Clock/Clock'

export const Shopping = () => {
    return (
        <>
            <Clock />

            <div className="shoppingCart">
                <h4>Carrito de Compras</h4>
                <p>No hay productos en tu carrito</p>
                <Link style={{ textDecoration: 'none', color: 'black' }} exact to="/tienda-lol-reactJs"><span>Comprar Productos</span></Link>
            </div>
        </>
    )
}
