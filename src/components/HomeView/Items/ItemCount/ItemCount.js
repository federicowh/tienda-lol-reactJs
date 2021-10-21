import React from 'react'
import '../ItemCount/itemCount.css'

export const ItemCount = ( {quantity, modifyQuantity, max} ) => {

    const handleRestar = () => {
        if (quantity > 1) {
            modifyQuantity(quantity - 1)
        }
    }

    const handleSumar = () => {
        if (quantity < max) {
            modifyQuantity(quantity + 1)
        }
    }

    return (
        <div className="itemCountContainer">
            <button onClick={handleRestar}>
                -
            </button>

            <span>{quantity}</span>

            <button onClick={handleSumar}>
                +
            </button>
        </div>
    )
}
