import React, { useState, useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { ItemShow } from './ItemShow/ItemShow'
import '../../Items/ItemDetailContainer/itemDetail.css'

export const ItemDetail = ({id, name, price, img, img1, img2, img3, description, category, stock}) => {

    const items = {id, name, img, img1, img2, img3, description, category, stock}

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [quantity, setQuantity] = useState(0)

    const handleAdd = () => {
        const newItem = {
            id,
            name,
            price,
            category,
            img,
            quantity
        }

        if (quantity > 0){
            addToCart(newItem)
        }
    }

    return (
        <div className="itemContainer">
            <ItemShow {...items} />

            <div className="itemInfo">
                <h2 className="itemName">{name}</h2>
                <p>Descripción: {description}</p>
                <p>Categoría: {category}</p>
                <h4>Precio: ${price}</h4>

                <div className="itemBtn">
                    <ItemCount quantity={quantity} modifyQuantity={setQuantity} max={stock} />
                    <button disabled={isInCart(id)} onClick={handleAdd}>
                        Agregar al Carrito
                    </button>
                </div> 
                { isInCart(id) && <Link style={{ textDecoration: 'none', color: 'black' }} to="/cart"><div className="itemBtn"><button>Finalizar compra</button></div></Link> } 

                <div className="itemBtn">
                    <button onClick={ () => goBack() }>
                        Volver atrás
                    </button>

                    <button onClick={ () => push("/tienda-lol-reactJs") }>
                        Volver al Inicio
                    </button>
                </div>
            </div>
        </div>
    )
}