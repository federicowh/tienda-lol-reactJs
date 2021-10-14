import React from 'react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const ItemList = ({ items = [] }) => {
    return (
        <div className="productsContainer">
            <h2 className="productsTitle">Nuestros Productos</h2>

            <div className="itemListContainer">
                { items.map((item) => (
                    <div className="itemList" key={item.id}>
                        <h2 className="itemTitle">{item.name}</h2>
                        <img className="itemImage" src={item.img} /> 
                        <p className="itemPrice">$ {item.price}</p>

                        <div className="itemBuy">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={`/detail/${item.id}`}><span className="buyNow">Comprar ahora</span></Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={`/detail/${item.id}`}><span className="addToCart">Agregar al carrito</span></Link>
                        </div>
                    </div>
                    ) 
                )}
            </div> 
        </div>
    )
}
