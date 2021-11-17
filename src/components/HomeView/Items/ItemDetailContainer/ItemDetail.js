import React, { useState, useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { ItemShow } from './ItemShow/ItemShow'
import Swal from 'sweetalert2'
import '../../Items/ItemDetailContainer/itemDetail.css'

export const ItemDetail = ({ id, name, price, img, img1, img2, img3, description, category, subCategory, stock }) => {

    const items = { id, name, img, img1, img2, img3, description, category, subCategory, stock }

    const { removeItem } = useContext(CartContext)

    const {goBack} = useHistory()

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
        } else if (quantity == 0){
            Swal.fire({
                icon: 'error',
                title: 'No agregaste productos',
                text: 'Debes agregar al menos uno para continuar.'
            })
        }
    }

    const styles = {
        btnAddToCart: isInCart(id) ? "itemBtnActive" : "itemBtn",
    }

    return (
        <div className="itemContainer">
            <ItemShow {...items} />

            <div className="itemInfo">
                <h2>{name}</h2>
                <p>Descripción: {description}</p>
                <div className="itemInfoCategory">
                    <p>Categoría: {category}</p>
                    <p>Subcategoria: {subCategory}</p>
                </div>
                <h4>Precio: ${price}</h4>

                <div className={styles.btnAddToCart}>
                    <ItemCount quantity={quantity} modifyQuantity={setQuantity} max={stock} />
                    <button 
                        onClick={handleAdd}
                        >
                        Agregar al Carrito
                    </button>
                </div> 

                { isInCart(id) 

                    &&

                    <div className="itemBtn"> 
                        <button onClick={ () => removeItem(id) }>Cancelar</button>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/cart"><button>¡Comprar!</button></Link>
                    </div>
                } 

                <div className="itemBtn">
                    <button onClick={ () => goBack() }>
                        Volver atrás
                    </button>
                </div>
            </div>
        </div>
    )
}