import React from 'react'
import { useEffect, useState } from 'react'

export const ItemList = ({ items = [] }) => {
    return (
        <div className="productsContainer">
            <h2 className="itemTitle">Nuestros Productos</h2>

            <div className="itemListContainer">
                { items.map((item) => (
                    <div className="itemList" key={item.id}>
                        <h2 className="productTitle">{item.name}</h2>
                        <img className="productImage" src={item.img} /> 
                        <p className="productPrice">$ {item.price}</p>

                        <div className="itemBuy">
                            <span className="buyNow">Comprar ahora</span>
                            <span className="addToCart">Agregar al carrito</span>
                        </div>
                    </div>
                    ) 
                )}
            </div> 
        </div>
    )
}
