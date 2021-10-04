import React from 'react'
import { useEffect, useState } from 'react'

export const ItemList = ({ items = [] }) => {
    return (
        <div className="productsContainer">
            <h2 className="itemTitle">Nuestros Productos</h2>

            <div className="itemListContainer">
                { items.map((item) => (
                    <div className="itemList" key={item.id}>
                        <p>ID: {item.id}</p> 
                        <h2>{item.name}</h2> 
                        <p>{item.price}</p>
                    </div>
                    ) 
                )}
            </div> 
        </div>
    )
}
